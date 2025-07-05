import { useState, useRef, useEffect } from 'react'

export default function ChatComponent({ 
  initialMessages = [
    {
      role: 'assistant',
      content: 'Hello! I\'m here to help you learn about Ritul\'s background and experience. Ask me anything about his resume, education, specializations, or projects!'
    }
  ],
  showInput = false,
  height = 'min-h-[400px] max-h-[500px]'
}) {
  const [messages, setMessages] = useState(initialMessages)
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)

  const predefinedQuestions = [
    {
      label: "Education?",
      fullQuestion: "Tell me about Ritul's education - what degrees does he have and from which universities?"
    },
    {
      label: "Specializations?", 
      fullQuestion: "What are Ritul's technical specializations and areas of expertise?"
    },
    {
      label: "Research?",
      fullQuestion: "Tell me about Ritul's research interests and academic work."
    },
    {
      label: "Projects?",
      fullQuestion: "What notable projects has Ritul built and worked on?"
    }
  ]

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  }

  useEffect(() => {
    // Only auto-scroll on ai-chat page (when showInput is true)
    if (showInput) {
      scrollToBottom()
    }
  }, [messages, showInput])

  const handleSend = async (message = inputValue) => {
    if (!message.trim() || isLoading) return

    const userMessage = { role: 'user', content: message }
    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: message,
          messages: [...messages, userMessage]
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
        content: 'Sorry, I encountered an error. Please try again.' 
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
    <div className="group relative">
      {/* Main Container Shadow - matching home page */}
      <div className="animate-tilt absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 opacity-25 blur transition duration-1000 group-hover:opacity-50 group-hover:duration-200"></div>
      
      {/* Unified Chat Container */}
      <div className="relative bg-white dark:bg-black rounded-xl border border-gray-200 dark:border-gray-700 shadow-2xl overflow-hidden">
        
        {/* Chat Messages Area */}
        <div className={`bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-6 ${height} overflow-y-auto`}>
          <div className="space-y-6">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-2xl lg:max-w-3xl px-4 py-3 rounded-2xl shadow-lg ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white ml-8'
                      : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-600 mr-8'
                  }`}
                >
                  <p className="text-base leading-relaxed whitespace-pre-wrap">{message.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-600 max-w-2xl lg:max-w-3xl px-4 py-3 rounded-2xl shadow-lg mr-8">
                  <div className="flex items-center space-x-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Thinking...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-700"></div>

        {/* Predefined Questions Section */}
        <div className={`bg-white dark:bg-black border-b border-gray-200 dark:border-gray-700 ${showInput ? 'p-6' : 'p-6'}`}>
          <h3 className={`font-semibold text-gray-900 dark:text-gray-100 ${showInput ? 'text-sm mb-2' : 'text-base mb-4'}`}>
            Quick Questions
          </h3>
          <div className={`grid ${showInput ? 'grid-cols-4 gap-2' : 'grid-cols-2 gap-6'}`}>
            {predefinedQuestions.map((questionObj, index) => {
              return (
                <div key={index} className="group relative h-full">
                  <div className={`animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-primary-500 to-primary-600 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200`}></div>
                  <button
                    onClick={() => handleSend(questionObj.fullQuestion)}
                    disabled={isLoading}
                    className={`relative flex w-full h-full items-center divide-x divide-gray-600 rounded-lg bg-white leading-none dark:bg-black disabled:opacity-50 transition duration-200 hover:scale-105 ${
                      showInput 
                        ? 'px-3 py-2 min-h-[40px]' 
                        : 'px-6 py-4 min-h-[64px]'
                    }`}
                  >
                    <span className={`flex items-center flex-1 min-w-0 ${showInput ? 'space-x-2 pr-2' : 'space-x-4 pr-6'}`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`-rotate-6 text-primary-500 flex-shrink-0 ${showInput ? 'h-3 w-3' : 'h-5 w-5'}`}
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
                      <span className={`text-gray-900 dark:text-gray-100 font-medium ${showInput ? 'text-xs' : 'text-base'}`}>
                        {questionObj.label}
                      </span>
                    </span>
                    <span className={`text-primary-400 transition duration-200 group-hover:text-gray-900 dark:group-hover:text-gray-100 flex-shrink-0 whitespace-nowrap ${
                      showInput 
                        ? 'pl-2 text-xs' 
                        : 'pl-6 text-base'
                    }`}>
                      Ask&nbsp;&rarr;
                    </span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Input Section */}
        {showInput && (
          <div className="bg-white dark:bg-black p-6">
            <div className="relative">
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me about Ritul's background, experience, or projects..."
                className="w-full resize-none p-4 pr-16 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-gray-100 min-h-[100px] transition-all duration-200 shadow-lg"
                rows="4"
                disabled={isLoading}
              />
              
              {/* Send Button Inside */}
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
                      xmlns="http://www.w3.org/2000/svg"
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
              <span>{messages.length - 1} messages in conversation</span>
              <span>{inputValue.length}/1000 characters</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}