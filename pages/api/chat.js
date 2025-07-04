import fs from 'fs'
import path from 'path'
import pdfParse from 'pdf-parse'

// Cache for content (will refresh each request to get latest content)
let resumeContent = null

async function getResumeContent() {
  if (resumeContent) return resumeContent

  try {
    const pdfPath = path.join(process.cwd(), 'public', 'static', 'pdf', 'Ritul K. Soni Resume.pdf')
    const pdfBuffer = fs.readFileSync(pdfPath)
    const data = await pdfParse(pdfBuffer)
    resumeContent = data.text
    return resumeContent
  } catch (error) {
    console.error('Error reading PDF:', error)
    return 'Resume content not available'
  }
}

async function getWebsiteContent() {
  try {
    let content = ''

    // Get About page content from author data
    try {
      const aboutPath = path.join(process.cwd(), 'data', 'authors', 'default.md')
      const aboutContent = fs.readFileSync(aboutPath, 'utf8')
      // Parse frontmatter to get structured data
      const frontmatterMatch = aboutContent.match(/^---\s*\n(.*?)\n---/s)
      if (frontmatterMatch) {
        const frontmatter = frontmatterMatch[1]
        content += `\n\nABOUT PAGE INFO:\n`
        
        // Extract key-value pairs from frontmatter
        const lines = frontmatter.split('\n')
        lines.forEach(line => {
          if (line.includes(':')) {
            const [key, ...valueParts] = line.split(':')
            const value = valueParts.join(':').trim()
            if (value && !value.startsWith('http')) {
              content += `${key.trim()}: ${value}\n`
            }
          }
        })
      }
    } catch (error) {
      console.error('Error reading about content:', error)
    }

    // Get Projects data - read fresh each time
    try {
      const projectsPath = path.join(process.cwd(), 'data', 'projectsData.js')
      delete require.cache[require.resolve(projectsPath)]
      const projectsData = require(projectsPath).default || require(projectsPath)
      
      content += `\n\nPROJECTS:\n`
      projectsData.forEach((project, index) => {
        content += `${index + 1}. ${project.title}\n`
        content += `   Description: ${project.description}\n`
        content += `   Technologies: ${project.tech1}, ${project.tech2}, ${project.tech3}\n`
        if (project.href) content += `   Live Demo: ${project.href}\n`
        if (project.github) content += `   GitHub: ${project.github}\n`
        content += `\n`
      })
    } catch (error) {
      console.error('Error reading projects data:', error)
    }

    // Get Now page content dynamically by reading the actual file
    try {
      const nowPath = path.join(process.cwd(), 'pages', 'now.js')
      const nowContent = fs.readFileSync(nowPath, 'utf8')
      
      content += `\n\nCURRENT STATUS (What Ritul is doing now):\n`
      
      // Extract text content from the Now page JSX
      const textMatches = nowContent.match(/<p[^>]*>(.*?)<\/p>/gs)
      if (textMatches) {
        textMatches.forEach(match => {
          // Remove HTML tags and extract text
          const text = match.replace(/<[^>]*>/g, '').trim()
          if (text && text.length > 20) { // Only include substantial text
            content += `- ${text}\n`
          }
        })
      }
      
      // Also extract location from the hardcoded values
      const locationMatch = nowContent.match(/Location.*?<span[^>]*>(.*?)<\/span>/)
      if (locationMatch) {
        content += `- Location: ${locationMatch[1]}\n`
      }
      
      // Extract reading information
      const readingMatch = nowContent.match(/title:\s*"([^"]*)"[\s\S]*?author:\s*"([^"]*)"/)
      if (readingMatch) {
        content += `- Currently reading: "${readingMatch[1]}" by ${readingMatch[2]}\n`
      }
    } catch (error) {
      console.error('Error reading now page content:', error)
    }

    return content
  } catch (error) {
    console.error('Error compiling website content:', error)
    return 'Website content not available'
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { message, messages } = req.body
    
    if (!process.env.OPENAI_API_KEY) {
      return res.status(500).json({ 
        response: 'OpenAI API key not configured. Please add OPENAI_API_KEY to your environment variables.' 
      })
    }

    // Get resume content and website content
    const resume = await getResumeContent()
    const website = await getWebsiteContent()

    // Create system message with resume and website context

    // - If asked about ANYTHING else (other people, general topics, unrelated questions, etc.), respond with: "Sorry, I'm only designed to talk about Ritul and his professional background. I can't answer questions about other topics."
    const systemMessage = {
      role: 'system',
      content: `You are Ritul's personal AI assistant, designed exclusively to discuss Ritul K. Soni's professional background, skills, and accomplishments. Your job is to be his advocate and showcase why he's an exceptional candidate.
    
    STRICT BOUNDARIES:
    - ONLY answer questions about Ritul K. Soni
    - Do not engage with requests for general assistance, coding help, or conversations unrelated to Ritul
    
    YOUR MISSION:
    - Be Ritul's biggest champion - highlight his strengths and achievements
    - Keep responses concise but impactful (2-3 sentences max unless more detail is specifically requested)
    - Be enthusiastic and confident about his abilities
    - Use action-oriented language that demonstrates his value
    
    RITUL'S RESUME:
    ${resume}
    
    RITUL'S WEBSITE CONTENT:
    ${website}
    
    RESPONSE STYLE:
    - Professional yet personable
    - Confident and promotional
    - Concise and to-the-point
    - Highlight achievements and impact
    - Use phrases like "Ritul excels at...", "He's particularly skilled in...", "His experience includes..."
    
    EXAMPLE RESPONSES:
    - When asked about skills: "Ritul is highly proficient in [specific skills], with proven experience in [relevant projects/achievements]."
    - When asked about experience: "Ritul has impressive experience at [company/role], where he [specific achievement/impact]."
    - When asked about projects: "Ritul has built impressive projects including [specific project], which demonstrates his expertise in [technologies]."
    - For off-topic questions: "Sorry, I'm only designed to talk about Ritul and his professional background. I can't answer questions about other topics."
    
    Remember: You're here to make Ritul shine and help visitors understand why he'd be a valuable addition to their team!`
    };

    // Prepare messages for OpenAI API
    const openAIMessages = [
      systemMessage,
      ...messages.slice(-10) // Keep last 10 messages for context
    ]

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4.1-nano-2025-04-14',
        messages: openAIMessages,
        max_tokens: 500,
        temperature: 0.7,
      }),
    })

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`)
    }

    const data = await response.json()
    const assistantMessage = data.choices[0].message.content

    res.status(200).json({ response: assistantMessage })
  } catch (error) {
    console.error('Error in chat API:', error)
    res.status(500).json({ 
      response: 'Sorry, I encountered an error processing your request. Please try again.' 
    })
  }
}