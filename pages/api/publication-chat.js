import fs from 'fs'
import path from 'path'
import OpenAI from 'openai'

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { message, messages, publicationId, publicationTitle, pdfUrl } = req.body

    if (!message) {
      return res.status(400).json({ error: 'Message is required' })
    }

    if (!process.env.OPENAI_API_KEY) {
      throw new Error('OpenAI API key not configured')
    }

    // Get the local PDF file path
    const pdfPath = path.join(process.cwd(), 'public', pdfUrl)
    
    // Check if PDF file exists
    if (!fs.existsSync(pdfPath)) {
      throw new Error(`PDF file not found: ${pdfPath}`)
    }

    // Read and encode PDF to base64
    const pdfData = fs.readFileSync(pdfPath)
    const base64String = pdfData.toString('base64')

    // Build conversation context from previous messages
    let conversationContext = ""
    if (messages.length > 1) {
      const recentMessages = messages.slice(-6) // Keep last 6 messages for context
      conversationContext = "\n\nPrevious conversation context:\n" + 
        recentMessages.map(msg => `${msg.role === 'user' ? 'User' : 'Assistant'}: ${msg.content}`).join('\n')
    }

    // Create the user input with both PDF and text
    const userInput = {
      role: "user",
      content: [
        {
          type: "input_file",
          filename: path.basename(pdfUrl),
          file_data: `data:application/pdf;base64,${base64String}`,
        },
        {
          type: "input_text",
          text: `You are an AI research assistant specialized in analyzing academic papers. You have access to the full PDF of "${publicationTitle}".

Please answer the following question about this specific research paper. Use the actual content from the PDF to provide accurate, detailed responses about methodology, findings, data analysis, and implications.

Guidelines:
- Reference specific sections, figures, or data from the paper when relevant
- Explain technical concepts clearly
- Provide insights about research design and methodology
- Discuss practical implications and significance
- If you can't find specific information in the paper, state that clearly

${conversationContext}

Current question: ${message}`
        }
      ]
    }

    // Call OpenAI's new responses API with PDF support
    const response = await client.responses.create({
      model: 'gpt-4.1-nano-2025-04-14', // Use gpt-4o which supports PDF inputs
      input: [userInput],
    })

    // Format the response for better display
    let formattedResponse = response.output_text
    
    // Clean up and format the response
    formattedResponse = formattedResponse
      // Fix bullet points and dashes
      .replace(/^\s*[\-•]\s*/gm, '• ')
      // Fix numbered lists
      .replace(/^\s*(\d+)\.\s*/gm, '$1. ')
      // Fix section headers (lines ending with :)
      .replace(/^(.+:)\s*$/gm, '\n**$1**\n')
      // Add proper spacing around sections
      .replace(/\n\*\*(.+?)\*\*\n/g, '\n\n**$1**\n')
      // Clean up excessive newlines
      .replace(/\n{3,}/g, '\n\n')
      // Fix indented bullet points
      .replace(/^\s{2,}[\-•]\s*/gm, '  • ')
      .trim()

    res.status(200).json({ response: formattedResponse })

  } catch (error) {
    console.error('Publication chat error:', error)
    
    // Provide more specific error handling
    if (error.message.includes('PDF file not found')) {
      return res.status(404).json({ 
        error: 'PDF file not found',
        response: 'Sorry, I cannot access the PDF file for this publication. Please check if the file exists or try again later.'
      })
    }

    if (error.message.includes('OpenAI API key not configured')) {
      return res.status(500).json({ 
        error: 'API configuration error',
        response: 'The AI service is temporarily unavailable. Please try again later.'
      })
    }

    // Fallback responses for when PDF processing fails
    const fallbackResponses = {
      'rl-rag-medical': `I understand you're asking about the RL-RAG medical predictions research. While I'm currently unable to access the full PDF, I can discuss the general concepts of reinforcement learning in healthcare RAG systems. This type of research typically focuses on dynamic agent-based retrieval for medical predictions. What specific aspect would you like to explore?`,
      
      'telephone-operators': `I see you're interested in the technological displacement study. Although I can't access the full PDF right now, this research area typically examines how automation affects employment patterns. The telephone operator displacement study would analyze IVR system impacts on labor markets. What particular aspect interests you most?`,
      
      'gold-nanoparticles': `You're asking about the gold nanoparticles research. While I can't currently access the full PDF, studies in this area typically use UV-Vis spectroscopy and TEM to analyze particle properties. The research would examine how synthesis parameters affect nanoparticle characteristics. Which experimental aspect would you like to discuss?`
    }

    const fallbackResponse = fallbackResponses[publicationId] || 
      `I'm having trouble accessing the PDF for "${publicationTitle}" right now. However, I'd be happy to discuss general concepts related to this research area. What specific questions do you have about the methodology, findings, or implications?`

    res.status(200).json({ response: fallbackResponse })
  }
}