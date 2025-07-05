import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

const publicationsData = [
  {
    title: 'Advancing Agentic RAG Systems for Real-World Applications',
    description: 'A comprehensive study on implementing autonomous retrieval-augmented generation systems that can dynamically adapt their search strategies based on query complexity and context.',
    pdfUrl: '/static/pdf/agentic-rag-systems.pdf',
    externalUrl: 'https://arxiv.org/abs/example',
    type: 'research' // research, conference, journal
  },
  {
    title: 'Generative AI in Production: Scaling Challenges and Solutions', 
    description: 'An analysis of architectural patterns and optimization techniques for deploying large language models in production environments serving thousands of concurrent users.',
    pdfUrl: '/static/pdf/generative-ai-production.pdf',
    externalUrl: 'https://proceedings.example.com/paper123',
    type: 'conference'
  },
  {
    title: 'Multi-Modal RAG: Bridging Text and Visual Understanding',
    description: 'Novel approaches to combining textual and visual retrieval mechanisms for enhanced question-answering systems across diverse data modalities.',
    pdfUrl: '/static/pdf/multimodal-rag.pdf', 
    externalUrl: 'https://journal.example.com/vol1/paper456',
    type: 'journal'
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
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                          {publication.title}
                        </h3>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 ${getTypeColor(publication.type)}`}>
                          {getTypeLabel(publication.type)}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        {publication.description}
                      </p>
                      
                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-4">
                        {publication.pdfUrl && (
                          <a
                            href={publication.pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-medium rounded-lg hover:from-red-600 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
                          >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Download PDF
                          </a>
                        )}
                        
                        {publication.externalUrl && (
                          <a
                            href={publication.externalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-sm font-medium rounded-lg hover:from-primary-600 hover:to-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
                          >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            View Online
                          </a>
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
      </div>
    </>
  )
}