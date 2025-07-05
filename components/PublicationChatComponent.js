import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function PublicationChatComponent({ 
  publication,
  onBack,
  height = 'min-h-[500px] max-h-[600px]'
}) {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: `Hello! I'm ready to discuss "${publication.shortTitle}" with you. I have access to the full paper and can answer questions about:\n\n• Research methodology and approach\n• Data analysis and results\n• Conclusions and implications\n• Technical details and concepts\n• Related work and citations\n\nWhat would you like to know about this research?`
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)

  const predefinedQuestions = [
    {
      label: "Methodology",
      fullQuestion: `What methodology was used in "${publication.shortTitle}" and why was this approach chosen?`
    },
    {
      label: "Key Findings", 
      fullQuestion: `What are the main findings and results from "${publication.shortTitle}"?`
    },
    {
      label: "Data Analysis",
      fullQuestion: `How was the data analyzed in "${publication.shortTitle}" and what statistical methods were used?`
    },
    {
      label: "Implications",
      fullQuestion: `What are the practical implications and real-world applications of the findings in "${publication.shortTitle}"?`
    }
  ]

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async (message = inputValue) => {
    if (!message.trim() || isLoading) return

    const userMessage = { role: 'user', content: message }
    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/publication-chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: message,
          messages: [...messages, userMessage],
          publicationId: publication.id,
          publicationTitle: publication.title,
          pdfUrl: publication.pdfUrl
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to get response')
      }

      const data = await response.json()
      setMessages(prev => [...prev, { role: 'assistant', content: data.response }])
    } catch (error) {
      console.error('Error:', error)
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Sorry, I encountered an error while analyzing the paper. Please try again.' 
      }])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="group relative"
    >
      {/* Main Container Shadow */}
      <div className="animate-tilt absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 opacity-25 blur transition duration-1000 group-hover:opacity-50 group-hover:duration-200"></div>
      
      {/* Chat Container */}
      <div className="relative bg-white dark:bg-black rounded-xl border border-gray-200 dark:border-gray-700 shadow-2xl overflow-hidden">
        
        {/* Header with Publication Info */}
        <div className="bg-gradient-to-r from-primary-50 to-purple-50 dark:from-gray-800 dark:to-purple-900 border-b border-gray-200 dark:border-gray-700 p-4 md:p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={onBack}
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-3">
                  <div className={`flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r ${publication.color} text-white text-sm`}>
                    {publication.icon}
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 truncate">
                      {publication.shortTitle}
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Research Paper Chat • {publication.type}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Status Indicator */}
            <div className="flex items-center space-x-2 text-sm">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-600 dark:text-gray-400 hidden sm:inline">AI Active</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Chat Messages Area */}
        <div className={`bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-6 ${height} overflow-y-auto`}>
          <div className="space-y-6">
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-2xl lg:max-w-3xl px-4 py-3 rounded-2xl shadow-lg ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white ml-8'
                      : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-600 mr-8'
                  }`}
                >
                  <div className="text-base leading-relaxed whitespace-pre-wrap space-y-2">
                    {message.content.split('\n').map((line, lineIndex) => {
                      // Handle bold text (section headers)
                      if (line.match(/^\*\*(.+?)\*\*$/)) {
                        const text = line.replace(/^\*\*(.+?)\*\*$/, '$1')
                        return (
                          <div key={lineIndex} className="font-bold text-lg text-gray-900 dark:text-gray-100 mt-4 mb-2">
                            {text}
                          </div>
                        )
                      }
                      // Handle bullet points
                      else if (line.match(/^•\s/)) {
                        return (
                          <div key={lineIndex} className="flex items-start space-x-2 ml-2">
                            <span className="text-primary-500 font-bold mt-1">•</span>
                            <span className="flex-1">{line.replace(/^•\s/, '')}</span>
                          </div>
                        )
                      }
                      // Handle indented bullet points
                      else if (line.match(/^\s{2}•\s/)) {
                        return (
                          <div key={lineIndex} className="flex items-start space-x-2 ml-6">
                            <span className="text-primary-400 font-bold mt-1">•</span>
                            <span className="flex-1">{line.replace(/^\s{2}•\s/, '')}</span>
                          </div>
                        )
                      }
                      // Handle numbered lists
                      else if (line.match(/^\d+\.\s/)) {
                        return (
                          <div key={lineIndex} className="flex items-start space-x-2 ml-2">
                            <span className="text-primary-500 font-semibold mt-1">{line.match(/^(\d+\.)/)[1]}</span>
                            <span className="flex-1">{line.replace(/^\d+\.\s/, '')}</span>
                          </div>
                        )
                      }
                      // Handle empty lines
                      else if (line.trim() === '') {
                        return <div key={lineIndex} className="h-2"></div>
                      }
                      // Regular text
                      else {
                        return (
                          <div key={lineIndex} className={line.trim() === '' ? 'h-2' : ''}>
                            {line || '\u00A0'}
                          </div>
                        )
                      }
                    })}
                  </div>
                </div>
              </motion.div>
            ))}
            {isLoading && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-start"
              >
                <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-600 max-w-2xl lg:max-w-3xl px-4 py-3 rounded-2xl shadow-lg mr-8">
                  <div className="flex items-center space-x-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Analyzing paper...</span>
                  </div>
                </div>
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-700"></div>

        {/* Predefined Questions Section */}
        <div className="bg-white dark:bg-black border-b border-gray-200 dark:border-gray-700 p-4 md:p-6">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm mb-3">
            Quick Research Questions
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
            {predefinedQuestions.map((questionObj, index) => (
              <motion.div 
                key={index} 
                className="group relative h-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-primary-500 to-primary-600 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                <button
                  onClick={() => handleSend(questionObj.fullQuestion)}
                  disabled={isLoading}
                  className="relative flex w-full h-full items-center divide-x divide-gray-600 rounded-lg bg-white leading-none dark:bg-black disabled:opacity-50 transition duration-200 px-3 py-2 min-h-[44px]"
                >
                  <span className="flex items-center flex-1 min-w-0 space-x-2 pr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 -rotate-6 text-primary-500 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                    <span className="text-gray-900 dark:text-gray-100 font-medium text-xs">
                      {questionObj.label}
                    </span>
                  </span>
                  <span className="text-primary-400 transition duration-200 group-hover:text-gray-900 dark:group-hover:text-gray-100 flex-shrink-0 whitespace-nowrap pl-2 text-xs">
                    Ask&nbsp;&rarr;
                  </span>
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Input Section */}
        <div className="bg-white dark:bg-black p-4 md:p-6">
          <div className="relative">
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={`Ask about "${publication.shortTitle}" - methodology, results, implications...`}
              className="w-full resize-none p-4 pr-16 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-gray-100 min-h-[100px] transition-all duration-200 shadow-lg"
              rows="4"
              disabled={isLoading}
            />
            
            {/* Send Button */}
            <div className="absolute bottom-3 right-3">
              <button
                onClick={() => handleSend()}
                disabled={!inputValue.trim() || isLoading}
                className="group relative flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg hover:from-primary-600 hover:to-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* Enter Hint */}
            <div className="absolute bottom-3 left-4">
              <kbd className="hidden sm:inline-block px-2 py-1 text-xs font-semibold text-gray-500 bg-gray-200 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-gray-400 dark:border-gray-600">
                Press Enter to send
              </kbd>
            </div>
          </div>
          
          {/* Message Count */}
          <div className="mt-3 flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
            <span>{messages.length - 1} questions about this paper</span>
            <span>{inputValue.length}/1000 characters</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}