import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import ChatComponent from '@/components/ChatComponent'

export default function AIChat() {

  return (
    <>
      <PageSEO
        title={`AI Chat - ${siteMetadata.author}`}
        description="Chat with AI about Ritul's resume, background, experience, and projects"
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            AI Chat
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Ask me anything about Ritul's resume, background, experience, and projects
          </p>
        </div>
        
        <div className="pt-8">
          <ChatComponent 
            showInput={true} 
            height="min-h-[500px] max-h-[600px]"
          />
        </div>
      </div>
    </>
  )
}