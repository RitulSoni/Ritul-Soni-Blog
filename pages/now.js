import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import { dayjs } from '@/components/DayJS'
import utc from 'dayjs/plugin/utc'  // add this at the top of your file
import timezone from 'dayjs/plugin/timezone'  // add this at the top of your file
import { useEffect, useState } from 'react'
import siteMetadata from '@/data/siteMetadata'
// import { getCurrentlyReading } from '@/lib/goodreads'
import fetcher from 'lib/fetcher'
import useSWR from 'swr'
import { FaCloudShowersHeavy } from 'react-icons/fa'
import {
  BsCloudDrizzleFill,
  BsCloudsFill,
  BsCloudLightningFill,
  BsCloudSnowFill,
  BsCloudFogFill,
  BsMoonFill,
  BsClock,
  BsSunFill,
  BsFillCloudSunFill,
  BsFillCloudMoonFill,
  BsFillCloudFill,
} from 'react-icons/bs'

export const getServerSideProps = async () => {
  const response = await fetch(
    'https://api.openweathermap.org/data/2.5/weather?lat=41.878876&lon=-87.635918&appid=413e0bfa580f7aa3b26c8a042781b5e3&units=imperial'
    // 
    //Replace the API link with this one once my key activates 
  )
  const data = await response.json()

  // const currentlyReading = await getCurrentlyReading({ limit: 1 })
  
  const hardCodedBook = {
    title: "Burn Rate: Launching a Startup & Losing My Mind",
    author: "Andy Dunn",
    url: "https://www.goodreads.com/book/show/58784468-burn-rate?ac=1&from_search=true&qid=Y9mHNCKuJh&rank=1" // update the URL as needed
  };

  return {
    props: { currentlyReading: hardCodedBook, weatherData: data },
  }
}

export default function Now({currentlyReading, weatherData}) {
  const { data } = useSWR('/api/now-playing', fetcher)
  // let currentlyReadingData = currentlyReading['currentlyReading']
  const { temp: temperature } = weatherData.main
  const { icon: weatherIcon, description: weatherDescription } = weatherData.weather[0]

  const icons = {
    _01d: <BsSunFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _01n: <BsMoonFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _02d: <BsFillCloudSunFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _02n: <BsFillCloudMoonFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _03d: <BsFillCloudFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _03n: <BsFillCloudFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _04d: <BsCloudsFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _04n: <BsCloudsFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _09d: <BsCloudDrizzleFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _09n: <BsCloudDrizzleFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _10d: <FaCloudShowersHeavy className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _10n: <FaCloudShowersHeavy className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _11d: <BsCloudLightningFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _11n: <BsCloudLightningFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _13d: <BsCloudSnowFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _13n: <BsCloudSnowFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _50d: <BsCloudFogFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _50n: <BsCloudFogFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
  }

  dayjs.extend(utc)
  dayjs.extend(timezone)
  var year = new Date().getFullYear()
  var month = new Date().getMonth() + 1 
  var date = new Date().getDate()
  var hour = new Date().getHours()
  var minute = new Date().getMinutes()
  var second = new Date().getSeconds()
  const format = 'hhA'
  const [TodayDate, setDate] = useState(dayjs().tz("America/Chicago"))

  useEffect(() => {
    const timer = setInterval(() => setDate(dayjs().tz("America/Chicago")), 1000)
    return () => clearInterval(timer)
  }, [])

  var RitulBirthDate = '2003-01-25'
  var birthDate = new Date(RitulBirthDate)

  var RitulAge = year - birthDate.getFullYear()

  var RitulMonth = 0
  if (month >= birthDate.getMonth()) RitulMonth = month - birthDate.getMonth()
  else {
    RitulAge--
    RitulMonth = 12 + month - birthDate.getMonth()
  }

  var RitulDay = 0
  if (date >= birthDate.getDate()) RitulDay = date - birthDate.getDate()
  else {
    RitulMonth--
    RitulDay = 31 + date - birthDate.getDate()
    if (RitulMonth < 0) {
      RitulMonth = 11
      RitulAge--
    }
  }

  var age = {}
  age = {
    years: RitulAge,
    months: RitulMonth,
    days: RitulDay,
  }

  var ageString = ''
  if (age.years > 0 && age.months > 0 && age.days > 0)
    ageString = age.years + ' years, ' + age.months + ' months, and ' + age.days + ' days old'
  else if (age.years == 0 && age.months == 0 && age.days > 0)
    ageString = 'Only ' + age.days + ' days old'
  else if (age.years > 0 && age.months == 0 && age.days == 0)
    ageString = age.years + ' years old. Happy Birthday!!'
  else if (age.years > 0 && age.months > 0 && age.days == 0)
    ageString = age.years + ' years and ' + age.months + ' months old'
  else if (age.years == 0 && age.months > 0 && age.days > 0)
    ageString = age.months + ' months and ' + age.days + ' days old'
  else if (age.years > 0 && age.months == 0 && age.days > 0)
    ageString = age.years + ' years, and' + age.days + ' days old'
  else if (age.years == 0 && age.months > 0 && age.days == 0) ageString = age.months + ' months old'
  else ageString = "Welcome to Earth! <br> It's first day on Earth!"

  return (
    <>
      <PageSEO
        title={`Now - ${siteMetadata.author}`}
        description="What I'm working on now"
        url={siteMetadata.url}
      />
      <div>
        <div className="my-2">
          <h3>Where am I and what am I doing?</h3>
          <div className=" mt-4 mb-6 text-xs text-neutral-700 dark:text-neutral-400">
            This page was automatically updated @ {month}-{date}-{year} {hour}:{minute}:{second}
          </div>
        </div>
        {/* Misc */}
        <div>
          <div className="flex justify-between gap-5">
            <div className="mt-2 mb-10 w-1/2 rounded-md border border-gray-600 p-1 text-sm dark:border-gray-200">
              <span className="ml-2 font-semibold">Location:</span> <span>Chicago, IL</span>
              <br />
              <span className="ml-2 font-semibold">Weather:</span>{' '}
              <span>
                <a
                  href="https://weather.com/en-GB/weather/today/l/624f0cccc10bececfa4c083056cef743837a76588790f476c9ebea44be35e51f"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-1 hover:underline"
                >
                  {icons[`_${weatherIcon}`]} Currently <b>{parseInt(temperature)}°F</b>
                  {' with '}
                  <span>{weatherDescription}</span>
                </a>
              </span>
            </div>

            <div className="mt-2 mb-10 w-1/2 rounded-md border border-gray-600 p-1 text-sm dark:border-gray-200">
              <span className="ml-2 font-semibold">Reading:</span>{' '}
              <a
                href={currentlyReading.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-1 hover:underline"
              >
                <span>{currentlyReading.title}</span> by{' '}
                <span>{currentlyReading.author}</span>
              </a>
              <br />
              <span className="ml-2 font-semibold">Age:</span> <span>{ageString}</span>
            </div>
          </div>

          <div className="-my-6 flex justify-between gap-5">
            <div className="mt-2 mb-10 w-1/2 rounded-md border border-gray-600 p-1 text-sm dark:border-gray-200">
              <span className="ml-2 font-semibold">Date:</span>{' '}
              <span>{TodayDate.format('MM/DD/YYYY')}</span>
              <br />
              <span className="ml-2 font-semibold">Time:</span>{' '}
              <span>
                <BsClock className="mb-0.5 inline h-3 w-3 hover:animate-spin" />{' '}
                {TodayDate.format('h:mm:ss A')}
              </span>
            </div>

            <div className="mt-2 mb-10 w-1/2 rounded-md border border-gray-600 p-1 text-sm dark:border-gray-200">
              <span className="ml-2 font-semibold">Listening:</span>{' '}
              <span>
                {data?.songUrl ? (
                  <a
                    href={data.songUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline-offset-1 hover:underline"
                  >
                    <span>{data.title}</span>
                  </a>
                ) : (
                  <span>Not Playing</span>
                )}
              </span>
              <br />
              <span className="ml-2 font-semibold">Drinking:</span> <span>Chai</span>
            </div>
          </div>
        </div>
        <div className="justify-center text-center text-2xl font-medium text-gray-200 dark:text-gray-600">
          &#126;&#126;&#126;
        </div>
        {/* Work */}
        <div className="pb-4">
          <p>
            Currently, I am an AI/ML Engineer at{' '}
            <Link
              href={'https://www.countryfinancial.com'}
              className="special-underline no-underline dark:text-gray-100 hover:dark:text-gray-100"
            >
              Country Financial
            </Link>
            , where I've deployed the first generative AI application in production, serving hundreds of insurance agents.
          </p>
          <br />
          <p>
            <strong>Research Focus:</strong> I'm researching <span className="special-underline">reinforcement learning</span> for training search agents to create plug-and-play solutions for domain-specific RAG applications and Agentic RAG systems. My work focuses on developing lightweight frameworks that optimize search quality without full model fine-tuning.
          </p>
          <br />
          <p>
            The key innovation is using <span className="special-underline">"Gain Beyond RAG"</span> as a reward signal - training search agents to retrieve documents that meaningfully improve generation quality compared to naive retrieval. This achieves state-of-the-art performance with 70x less training data (2.4k vs 170k examples) and enables strong domain transfer.
          </p>
          <br />
          <p>
            <strong>Current Interests:</strong>
          </p>
          <ul className="ml-4 list-disc">
            <li><strong>Multimodal RAG:</strong> Extending search agents to handle diverse data modalities beyond text</li>
            <li><strong>Generative AI Research:</strong> Novel architectures and training methods for LLMs</li>
            <li><strong>Reinforcement Learning:</strong> RL frameworks for autonomous AI agents and multi-turn reasoning</li>
            <li><strong>ML Classification:</strong> Neural networks for document processing and automated categorization</li>
          </ul>
          <br />
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Last updated: January 2025
          </p>
        </div>
        <div className="justify-center text-center text-2xl font-medium text-gray-200 dark:text-gray-600">
          &#126;&#126;&#126;
        </div>

        {/* Personal life */}
        <div className="pt-6">
          <p>
            I've been gradually building up my online portfolio and blog to have a place to share the insights of my life online. Almost like a virtual journal.{' '}
            <Link
              href={'https://www.swyx.io/learn-in-public'}
              className="special-underline no-underline dark:text-gray-100 hover:dark:text-gray-100"
            >
              This
            </Link>{' '}
            article is a great reason to start your own blog.
          </p>
          <br />
          <br />
        </div>
        <div className="mt-3 text-sm">
          For more examples of folks with /now pages, check out{' '}
          <Link
            href={'https://nownownow.com/'}
            className="special-underline no-underline dark:text-gray-100 hover:dark:text-gray-100"
          >
            nownownow.com
          </Link>
          .
        </div>
      </div>
    </>
  )
}
