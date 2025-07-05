// import Link from '@/components/Link'
import Link from 'next/link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import formatDate from '@/lib/utils/formatDate'
import { RoughNotation } from 'react-rough-notation'
import NewsletterForm from '@/components/NewsletterForm'
import ViewCounter from '@/components/ViewCounter'
import ChatComponent from '@/components/ChatComponent'


const MAX_DISPLAY = 3

export async function getStaticProps() {
  return { props: { posts: [] } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="max-w-4xl mx-auto">
        {/* Hero Section - Centered and Clean */}
        <div className="text-center py-16 md:py-24">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 mb-8">
            Howdy, I'm{' '}
            <span className="text-primary-color-500 dark:text-primary-color-dark-500">
              Ritul🤠
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 max-w-3xl mx-auto">
            AI/ML Engineer passionate about Generative AI research and Agentic RAG systems
          </p>
          
          <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            I bridge cutting-edge research with practical implementation, developing production AI solutions serving thousands of users
          </p>

          {/* Command K Hint */}
          <div className="text-center mb-12">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Quick navigation</p>
            <div className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400">
              <span className="text-sm">Press</span>
              <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-sm font-mono">⌘</span>
              <span className="text-sm">+</span>
              <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-sm font-mono">K</span>
              <span className="text-sm">to search</span>
            </div>
          </div>

          {/* Quick Actions - Rearranged Layout */}
          <div className="flex flex-col items-center justify-center gap-6 mb-16 px-4 max-w-4xl mx-auto">
            {/* Resume Button - Top */}
            <div className="group relative w-full sm:w-80">
              <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
              <Link href="static/pdf/Ritul K. Soni Resume.pdf" target="_blank">
                <span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-8 py-4 leading-none dark:bg-black min-h-[64px] w-full">
                  <span className="flex items-center space-x-5 pr-6 flex-1 min-w-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 -rotate-6 text-fuchsia-600 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      />
                    </svg>
                    <span className="text-gray-900 dark:text-gray-100 text-sm sm:text-base font-medium">
                      Hire me!
                    </span>
                  </span>
                  <span className="pl-6 text-primary-400 transition duration-200 group-hover:text-gray-900 dark:group-hover:text-gray-100 flex-shrink-0 text-sm sm:text-base whitespace-nowrap">
                    Resume&nbsp;&rarr;
                  </span>
                </span>
              </Link>
            </div>

            {/* Publications and Projects - Bottom Row */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full">
              <div className="group relative w-full sm:w-80">
                <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                <Link href="/publications">
                  <span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-8 py-4 leading-none dark:bg-black min-h-[64px] w-full">
                    <span className="flex items-center space-x-5 pr-6 flex-1 min-w-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 -rotate-6 text-blue-600 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                      <span className="text-gray-900 dark:text-gray-100 text-sm sm:text-base font-medium">Research papers</span>
                    </span>
                    <span className="pl-6 text-blue-400 transition duration-200 group-hover:text-gray-900 dark:group-hover:text-gray-100 flex-shrink-0 text-sm sm:text-base whitespace-nowrap">
                      Publications&nbsp;&rarr;
                    </span>
                  </span>
                </Link>
              </div>

              <div className="group relative w-full sm:w-80">
                <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                <Link href="/projects">
                  <span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-8 py-4 leading-none dark:bg-black min-h-[64px] w-full">
                    <span className="flex items-center space-x-5 pr-6 flex-1 min-w-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 -rotate-6 text-green-600 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                        />
                      </svg>
                      <span className="text-gray-900 dark:text-gray-100 text-sm sm:text-base font-medium">What I built</span>
                    </span>
                    <span className="pl-6 text-amber-400 transition duration-200 group-hover:text-gray-900 dark:group-hover:text-gray-100 flex-shrink-0 text-sm sm:text-base whitespace-nowrap">
                      Projects&nbsp;&rarr;
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Interactive Scroll to RitulGPT */}
          <div className="relative mb-12">
            <div className="flex justify-center">
              <div className="flex flex-col items-center space-y-6 text-gray-500 dark:text-gray-400">
                <div className="w-px h-8 bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>
                
                {/* Interactive Button */}
                <div className="group relative">
                  <div className="animate-tilt absolute -inset-0.5 rounded-full bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 opacity-30 blur transition duration-1000 group-hover:opacity-70 group-hover:duration-200"></div>
                  <button
                    onClick={() => {
                      document.getElementById('ritul-gpt-section')?.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'center'
                      })
                    }}
                    className="relative flex items-center space-x-3 px-6 py-4 bg-white dark:bg-black rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200 dark:border-gray-700 group"
                  >
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                      <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      Psssst... try something cool
                    </span>
                    <svg 
                      className="w-4 h-4 text-primary-500 group-hover:animate-bounce transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </button>
                </div>
                
                <div className="w-px h-8 bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>
              </div>
            </div>
          </div>

        </div>

        {/* RitulGPT Section - Enhanced */}
        <div id="ritul-gpt-section" className="relative mb-16">
          {/* Subtle Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-purple-50/50 dark:from-gray-900/20 dark:to-purple-900/20 rounded-3xl"></div>
          
          {/* Content */}
          <div className="relative p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center space-x-2 mb-4">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">AI-Powered Assistant</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 mb-4">
                Meet Ritul<span className="text-primary-color-500 dark:text-primary-color-dark-500">GPT</span>
              </h2>
              
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                An AI trained on my resume, projects, and experience. Ask anything about my background, skills, or career journey!
              </p>
            </div>
            
            {/* AI Chat Component */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 mb-8">
              <ChatComponent height="min-h-[400px] max-h-[500px]" />
            </div>
            
            {/* Call to Action */}
            <div className="text-center px-4">
              <Link href="/ai-chat">
                <span className="group inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full hover:from-primary-600 hover:to-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base w-full sm:w-auto justify-center max-w-sm sm:max-w-none mx-auto">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:animate-pulse flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span className="truncate">Continue Full Conversation</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
              
              <div className="mt-4 flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center space-x-1">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>No signup required</span>
                </div>
                <div className="flex items-center space-x-1">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <span>Ask me anything</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">{/* <NewsletterForm /> */}</div>
      )}
    </>
  )
}
