import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { useState } from 'react'

const publicationsData = [
  {
    title: 'Reasoning-Enhanced Healthcare Predictions with Reinforcement Learning Search Agent with RAG Systems (Coming Soon)',
    description: 'A novel hybrid framework that integrates reinforcement learning-trained search agents with reasoning-enhanced clinical prediction models. The system replaces static knowledge graphs with dynamic RL agents that learn optimal retrieval policies for medical RAG applications, demonstrating superior performance on mortality and readmission prediction tasks using MIMIC-III/IV datasets.',
    pdfUrl: '/static/pdf/rl-rag-medical-predictions.pdf',
    externalUrl: 'https://arxiv.org/abs/example-rl-medical-rag',
    type: 'conference',
    comingSoon: true
   },
  {
    title: 'Comparing Self-Reported Subjective Wellbeing to Sentiment Analysis Approaches to Measuring Happiness',
    description: 'A comprehensive study evaluating the alignment between lexical models and cognitive-appraisal models in measuring happiness. Using Reddit survey data on short-term and long-term subjective well-being, this research compares self-reported happiness ratings with computer-generated ratings from large language models and lexical sentiment analysis methods, revealing weak but significant correlations and highlighting the limitations of computational approaches in predicting user-reported wellness measures.',
    pdfUrl: '/static/pdf/Approaches to Measuring Happiness.pdf',
    externalUrl: 'https://example.com/papers/happiness-measurement-study',
    githubUrl: 'https://github.com/RitulSoni/Approaches-To-Measuring-Happiness',
    posterUrl: '/static/pdf/Final Poster CS598.pptx.pdf',
    type: 'research',
    comingSoon: false
   },
  {
    title: 'CodeBlend: A Survey of Efficient KV-Caching Methods for Graph-Based Structures',
    description: 'A research study exploring the adaptation of the CacheBlend framework for efficient key-value cache management in code dependency systems. The project leverages mutual import relationships between Python packages to selectively blend caches, implementing advanced eviction strategies including LRU, LFU, Least Weighted, and Composite Cache methods to optimize dependency management for faster retrieval while maintaining optimal performance under memory constraints.',
    pdfUrl: '/static/pdf/codeblend.pdf',
    externalUrl: 'https://example.com/papers/codeblend-study',
    githubUrl: 'https://github.com/RitulSoni/CodeBlend',
    type: 'research',
    comingSoon: false
   },
  {
    title: 'Reproducing and Extending Bias Analysis in Clinical Contextual Word Embeddings: A Final Report',
    description: 'A comprehensive reproduction study of "Hurtful Words: Quantifying Biases in Clinical Contextual Word Embeddings" focusing on gender bias in clinical BERT models. This research reproduces key methodologies using the Baseline Clinical BERT model and MIMIC-III dataset, implementing bias quantification through prior-adjusted log-probability scores and downstream in-hospital mortality prediction tasks. The study reveals context-dependent gender associations and measurable fairness gaps, supporting the fundamental conclusion that clinical language models exhibit quantifiable biases with critical implications for healthcare AI deployment.',
    pdfUrl: '/static/pdf/CS598_Final_Project_Report.pdf',
    externalUrl: 'https://example.com/papers/clinical-bias-analysis',
    githubUrl: 'https://github.com/RitulSoni/CS598-Hurtful-Words-Final-Project',
    type: 'research',
    comingSoon: false
   },
  {
    title: 'Telephone Operators Ousted by Interactive Voice Response (IVR) Systems: An Analysis of Technological Displacement and Labor Market Adaptation',
    description: 'An empirical analysis examining the 85% decline in telephone operator employment from 2002-2021, applying skill-biased technological change theory to understand how automation affects specific demographic groups and creates new opportunities in complementary sectors.',
    pdfUrl: '/static/pdf/Tech Deplacement and Labor Markets.pdf',
    externalUrl: 'https://example.com/papers/telephone-operators-study',
    githubUrl: 'https://github.com/RitulSoni/Data-Viz-US-Wage-Employment-Statistics',
    projectUrl: 'https://data-viz-us-wage-employment-statistics.vercel.app',
    type: 'research',
    comingSoon: false
   },
   {
    title: 'Analyzing the Nanoscale Properties of Gold Nanoparticles Using UV-Vis Spectroscopy and Transmission Electron Microscopy',
    description: 'An experimental study investigating the relationship between gold nanoparticle size and optical properties using UV-Vis spectroscopy and TEM imaging. Research demonstrates how varying HAuCl4 concentrations affects particle diameter and wavelength characteristics for potential biomedical applications.',
    pdfUrl: '/static/pdf/ESRP Poster.pdf',
    externalUrl: 'https://www.anl.gov/education/analyzing-gold-nanoparticles',
    type: 'research',
    comingSoon: false
   }
]

const getIconForType = (type) => {
  switch (type) {
    case 'research':
      return (
        <svg className="h-6 w-6 -rotate-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    case 'conference':
      return (
        <svg className="h-6 w-6 -rotate-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    case 'journal':
      return (
        <svg className="h-6 w-6 -rotate-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    default:
      return (
        <svg className="h-6 w-6 -rotate-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
  }
}

const getTypeLabel = (type) => {
  switch (type) {
    case 'research': return 'Research Paper'
    case 'conference': return 'Conference Paper'
    case 'journal': return 'Journal Article'
    default: return 'Publication'
  }
}

const getTypeColor = (type) => {
  switch (type) {
    case 'research': return 'text-blue-400'
    case 'conference': return 'text-green-400' 
    case 'journal': return 'text-purple-400'
    default: return 'text-gray-400'
  }
}

export default function Publications() {
  const [showComingSoonPopup, setShowComingSoonPopup] = useState(false)
  
  const handleViewOnlineClick = (publication) => {
    if (publication.comingSoon) {
      setShowComingSoonPopup(true)
      setTimeout(() => setShowComingSoonPopup(false), 3000)
    } else {
      window.open(publication.pdfUrl, '_blank')
    }
  }

  return (
    <>
      <PageSEO
        title={`Publications - ${siteMetadata.author}`}
        description="Research publications and papers by Ritul Soni on AI/ML, Generative AI, and Agentic RAG systems"
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Publications
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Research papers and publications on AI/ML, Generative AI, and Agentic RAG systems
          </p>
        </div>
        
        <div className="pt-8">
          <div className="grid gap-8">
            {publicationsData.map((publication, index) => (
              <div key={index} className="group relative">
                {/* Background Gradient */}
                <div className="animate-tilt absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 opacity-25 blur transition duration-1000 group-hover:opacity-50 group-hover:duration-200"></div>
                
                {/* Publication Card */}
                <div className="relative rounded-xl bg-white dark:bg-black border border-gray-200 dark:border-gray-700 p-8 shadow-lg">
                  <div className="flex items-start space-x-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
                        {getIconForType(publication.type)}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start space-x-3 mb-2">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 flex-1">
                          {publication.title}
                        </h3>
                        <div className="group relative flex-shrink-0">
                          <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-primary-500 to-primary-600 opacity-25 blur transition duration-1000 group-hover:opacity-50 group-hover:duration-200"></div>
                          <span className="relative inline-flex items-center px-3 py-1.5 bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-lg text-xs font-medium text-gray-700 dark:text-gray-300 shadow-sm">
                            {getIconForType(publication.type)}
                            <span className="ml-2">{getTypeLabel(publication.type)}</span>
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        {publication.description}
                      </p>
                      
                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-4">
                        <button
                          onClick={() => handleViewOnlineClick(publication)}
                          className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-sm font-medium rounded-lg hover:from-primary-600 hover:to-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
                        >
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          View Online
                        </button>
                        {publication.githubUrl && (
                          <button
                            onClick={() => window.open(publication.githubUrl, '_blank')}
                            className="inline-flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white text-sm font-medium rounded-lg hover:bg-gray-900 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
                          >
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            GitHub
                          </button>
                        )}
                        {publication.projectUrl && (
                          <button
                            onClick={() => window.open(publication.projectUrl, '_blank')}
                            className="inline-flex items-center px-4 py-2 bg-blue-600 dark:bg-blue-700 text-white text-sm font-medium rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
                          >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                            </svg>
                            Project Website
                          </button>
                        )}
                        {publication.posterUrl && (
                          <button
                            onClick={() => window.open(publication.posterUrl, '_blank')}
                            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-purple-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
                          >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                            View Poster
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Empty State */}
          {publicationsData.length === 0 && (
            <div className="text-center py-12">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-gray-100">No publications</h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Publications will appear here once added.
              </p>
            </div>
          )}
        </div>
        
        {/* Quirky Coming Soon Popup */}
        {showComingSoonPopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowComingSoonPopup(false)}></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 mx-4 max-w-md w-full shadow-2xl border border-gray-200 dark:border-gray-700">
              <div className="text-center">
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 mb-4">
                  <svg className="h-8 w-8 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
                  🚧 Coming Soon! 🚧
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  This paper is still brewing in the research lab! ☕️
                  <br />
                  Hang tight, great things take time! 🎯
                </p>
                <button
                  onClick={() => setShowComingSoonPopup(false)}
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-sm font-medium rounded-lg hover:from-primary-600 hover:to-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  Got it! 👍
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}