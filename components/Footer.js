import { currentDayName } from '@/lib/utils/dateUtils'
import Link from './Link'
import NowPlayingFooter from './NowPlayingFooter'

export default function Footer() {
  return (
    <footer>
      <div className="mt-10 flex flex-col items-center">
        <div className="">
          <NowPlayingFooter />
        </div>
        <div className="mb-2 hidden text-sm text-gray-500 dark:text-gray-400 md:flex">
          <div className="mx-1">
            <Link href="https://blog.RitulSoni.com" className="link-underline">
              Ritul K. Soni{` © ${new Date().getFullYear()}`}
            </Link>
          </div>
          {`•`}
          <div className="mx-1">
            <Link href="https://qod.shakiltech.com/" className="link-underline">
              Have a good {currentDayName()}!
            </Link>
          </div>
          {`•`}
          <div className="mx-1">
            <Link href="/contact" className="link-underline">
              Contact
            </Link>
          </div>
        </div>
        <div className="mb-2 text-sm text-gray-500 dark:text-gray-400 sm:block md:hidden lg:hidden">
          <div className="mx-1">
            <Link href="https://ritulsoni.com/" className="link-underline">
              Ritul{` © ${new Date().getFullYear()}`}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}


//WITH THE CODING BLOG PORTFOLIO 
// import { currentDayName } from '@/lib/utils/dateUtils'
// import Link from './Link'
// import NowPlayingFooter from './NowPlayingFooter'

// export default function Footer() {
//   return (
//     <footer>
//       <div className="h-content sm:h-content-sm flex flex-row justify-around items-center pt-20">
//         <h1 className="sm:text-8.5xl tracking-tightest my-28 select-none text-center text-6xl font-extrabold leading-none sm:my-10">
//           <span
//             data-content="Blog."
//             className="relative before:absolute before:top-0 before:bottom-0 before:left-0 before:block before:w-full before:animate-gradient-background-1 before:px-2 before:text-center before:text-black before:content-[attr(data-content)] dark:before:text-white dark:before:content-[attr(data-content)]"
//           >
//             <span className="animate-gradient-foreground-1 bg-gradient-to-br from-gradient-1-start to-gradient-1-end bg-clip-text px-2 text-transparent">
//               Blog.
//             </span>
//           </span>
//           <span
//             data-content="Coding."
//             className="relative before:absolute before:top-0 before:bottom-0 before:left-0 before:block before:w-full before:animate-gradient-background-2 before:px-2 before:text-center before:text-black before:content-[attr(data-content)] dark:before:text-white dark:before:content-[attr(data-content)]"
//           >
//             <span className="animate-gradient-foreground-2 bg-gradient-to-br from-gradient-2-start to-gradient-2-end bg-clip-text px-2 text-transparent">
//               Coding.
//             </span>
//           </span>
//           <span
//             data-content="Portfolio."
//             className="relative before:absolute before:top-0 before:bottom-0 before:left-0 before:block before:w-full before:animate-gradient-background-3 before:px-2 before:text-center before:text-black before:content-[attr(data-content)] dark:before:text-white dark:before:content-[attr(data-content)]"
//           >
//             <span className="animate-gradient-foreground-3 bg-gradient-to-br from-gradient-3-start to-gradient-3-end bg-clip-text px-2 text-transparent">
//               Portfolio.
//             </span>
//           </span>
//         </h1>
//       </div>
//       <div className="mt-10 flex flex-col items-center">
//         <div className="">
//           <NowPlayingFooter />
//         </div>
//         <div className="mb-2 hidden text-sm text-gray-500 dark:text-gray-400 md:flex">
//           <div className="mx-1">
//             <Link href="https://blog.RitulSoni.com" className="link-underline">
//               Ritul K. Soni{` © ${new Date().getFullYear()}`}
//             </Link>
//           </div>
//           {`•`}
//           <div className="mx-1">
//             <Link href="https://qod.shakiltech.com/" className="link-underline">
//               Have a good {currentDayName()}!
//             </Link>
//           </div>
//           {`•`}
//           <div className="mx-1">
//             <Link href="/contact" className="link-underline">
//               Contact
//             </Link>
//           </div>
//         </div>
//         <div className="mb-2 text-sm text-gray-500 dark:text-gray-400 sm:block md:hidden lg:hidden">
//           <div className="mx-1">
//             <Link href="https://ritulsoni.com/" className="link-underline">
//               Ritul{` © ${new Date().getFullYear()}`}
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }
