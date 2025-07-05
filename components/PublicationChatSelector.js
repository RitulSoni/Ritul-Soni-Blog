import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const publicationsData = [
  {
    id: 'rl-rag-medical',
    title: 'Reasoning-Enhanced Healthcare Predictions with Reinforcement Learning Search Agent with RAG Systems',
    description: 'A novel hybrid framework that integrates reinforcement learning-trained search agents with reasoning-enhanced clinical prediction models.',
    pdfUrl: '/static/pdf/rl-rag-medical-predictions.pdf',
    type: 'conference',
    comingSoon: true,
    shortTitle: 'RL-RAG Medical Predictions',
    color: 'from-blue-500 to-indigo-600',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    id: 'telephone-operators',
    title: 'Telephone Operators Ousted by Interactive Voice Response (IVR) Systems: An Analysis of Technological Displacement and Labor Market Adaptation',
    description: 'An empirical analysis examining the 85% decline in telephone operator employment from 2002-2021.',
    pdfUrl: '/static/pdf/Tech Deplacement and Labor Markets.pdf',
    type: 'research',
    comingSoon: false,
    shortTitle: 'Tech Displacement & Labor Markets',
    color: 'from-green-500 to-emerald-600',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    id: 'gold-nanoparticles',
    title: 'Analyzing the Nanoscale Properties of Gold Nanoparticles Using UV-Vis Spectroscopy and Transmission Electron Microscopy',
    description: 'An experimental study investigating the relationship between gold nanoparticle size and optical properties.',
    pdfUrl: '/static/pdf/ESRP Poster.pdf',
    type: 'research',
    comingSoon: false,
    shortTitle: 'Gold Nanoparticles Analysis',
    color: 'from-purple-500 to-pink-600',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  }
]

export default function PublicationChatSelector({ onSelectPublication, selectedPublication }) {
  const [hoveredPublication, setHoveredPublication] = useState(null)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <div className="inline-flex items-center space-x-2 mb-4">
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">AI-Powered Research Assistant</span>
        </div>
        
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Chat with Research Papers
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Select a research paper to dive deep into the methodology, findings, and implications. Ask questions about data, analysis, or get clarifications on complex concepts.
        </p>
      </div>

      {/* Publication Grid */}
      <div className="grid gap-6 md:gap-8">
        {publicationsData.map((publication, index) => (
          <motion.div
            key={publication.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative"
            onMouseEnter={() => setHoveredPublication(publication.id)}
            onMouseLeave={() => setHoveredPublication(null)}
          >
            {/* Background Gradient */}
            <div className={`animate-tilt absolute -inset-0.5 rounded-xl bg-gradient-to-r ${publication.color} opacity-25 blur transition duration-1000 ${
              hoveredPublication === publication.id || selectedPublication?.id === publication.id 
                ? 'opacity-50' 
                : 'group-hover:opacity-40'
            } group-hover:duration-200`}></div>
            
            {/* Publication Card */}
            <div className={`relative rounded-xl bg-white dark:bg-black border-2 transition-all duration-300 shadow-lg ${
              selectedPublication?.id === publication.id
                ? 'border-primary-500 dark:border-primary-400'
                : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
            }`}>
              <div className="p-6 md:p-8">
                <div className="flex items-start space-x-4 md:space-x-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className={`flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-xl bg-gradient-to-r ${publication.color} text-white shadow-lg`}>
                      {publication.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 leading-tight">
                          {publication.shortTitle}
                        </h3>
                        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-2">
                          {publication.description}
                        </p>
                      </div>
                      
                      {/* Status Badge */}
                      <div className="flex-shrink-0 ml-4">
                        {publication.comingSoon ? (
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                            </svg>
                            Coming Soon
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Available
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {/* Action Button */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="capitalize">{publication.type}</span>
                        {!publication.comingSoon && (
                          <>
                            <span>•</span>
                            <span>PDF Available</span>
                          </>
                        )}
                      </div>
                      
                      <button
                        onClick={() => onSelectPublication(publication)}
                        disabled={publication.comingSoon}
                        className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 ${
                          publication.comingSoon
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed dark:bg-gray-800 dark:text-gray-600'
                            : selectedPublication?.id === publication.id
                            ? 'bg-primary-600 text-white hover:bg-primary-700'
                            : 'bg-gradient-to-r ' + publication.color + ' text-white hover:shadow-xl'
                        }`}
                      >
                        {publication.comingSoon ? (
                          <>
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            Coming Soon
                          </>
                        ) : selectedPublication?.id === publication.id ? (
                          <>
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Selected
                          </>
                        ) : (
                          <>
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                            Start Chat
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Helper Text */}
      <div className="text-center pt-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          💡 Pro tip: You can ask about methodology, data analysis, results interpretation, or request clarifications on any section
        </p>
      </div>
    </div>
  )
}