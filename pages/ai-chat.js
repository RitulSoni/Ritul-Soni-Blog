import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import ChatComponent from '@/components/ChatComponent'
import PublicationChatSelector from '@/components/PublicationChatSelector'
import PublicationChatComponent from '@/components/PublicationChatComponent'

export default function AIChat() {
  const [chatMode, setChatMode] = useState('general') // 'general', 'publications', 'publication-chat'
  const [selectedPublication, setSelectedPublication] = useState(null)

  const handleSelectPublication = (publication) => {
    setSelectedPublication(publication)
    setChatMode('publication-chat')
  }

  const handleBackToSelector = () => {
    setChatMode('publications')
    setSelectedPublication(null)
  }

  const handleBackToGeneral = () => {
    setChatMode('general')
    setSelectedPublication(null)
  }

  return (
    <>
      <PageSEO
        title={`AI Chat - ${siteMetadata.author}`}
        description="Chat with AI about Ritul's resume, background, experience, and research publications"
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            AI Chat
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {chatMode === 'general' && "Ask me anything about Ritul's resume, background, experience, and projects"}
            {chatMode === 'publications' && "Select a research paper to dive deep into the methodology, findings, and implications"}
            {chatMode === 'publication-chat' && `Discussing: ${selectedPublication?.shortTitle}`}
          </p>
        </div>
        
        {/* Mode Switcher */}
        <div className="pt-8 pb-6">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            {/* General Chat Mode */}
            <button
              onClick={handleBackToGeneral}
              className={`group relative flex items-center px-6 py-3 rounded-lg transition-all duration-300 ${
                chatMode === 'general'
                  ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600'
              }`}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="font-medium">General Chat</span>
              <span className="text-xs opacity-75 ml-2 hidden sm:inline">Resume & Experience</span>
            </button>

            <div className="flex items-center">
              <div className="w-8 h-px bg-gray-300 dark:bg-gray-600"></div>
              <span className="mx-3 text-sm text-gray-400 dark:text-gray-600">or</span>
              <div className="w-8 h-px bg-gray-300 dark:bg-gray-600"></div>
            </div>

            {/* Publications Chat Mode */}
            <button
              onClick={() => setChatMode('publications')}
              className={`group relative flex items-center px-6 py-3 rounded-lg transition-all duration-300 ${
                chatMode === 'publications' || chatMode === 'publication-chat'
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600'
              }`}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span className="font-medium">Research Papers</span>
              <span className="text-xs opacity-75 ml-2 hidden sm:inline">Deep Dive</span>
            </button>
          </div>
        </div>
        
        {/* Content Area */}
        <div className="pt-8">
          <AnimatePresence mode="wait">
            {chatMode === 'general' && (
              <motion.div
                key="general-chat"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <ChatComponent 
                  showInput={true} 
                  height="min-h-[500px] max-h-[600px]"
                />
              </motion.div>
            )}

            {chatMode === 'publications' && (
              <motion.div
                key="publications-selector"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <PublicationChatSelector 
                  onSelectPublication={handleSelectPublication}
                  selectedPublication={selectedPublication}
                />
              </motion.div>
            )}

            {chatMode === 'publication-chat' && selectedPublication && (
              <motion.div
                key="publication-chat"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <PublicationChatComponent 
                  publication={selectedPublication}
                  onBack={handleBackToSelector}
                  height="min-h-[500px] max-h-[600px]"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  )
}