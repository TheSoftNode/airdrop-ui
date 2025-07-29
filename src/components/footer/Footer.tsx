import { Discord, Github, Twitter } from '@/components/icons'

export default function Footer(): JSX.Element {
  const year = new Date().getFullYear();
  return (
    <footer className="flex content-end self-end lg:items-center items-start flex-col gap-4 sm:gap-6 lg:flex-row justify-between w-full py-4 sm:py-6 px-4 sm:px-6 lg:px-8">
      <div className="w-full lg:w-auto">
        <p className="text-base sm:text-lg">
          Built by <span className="text-lg sm:text-xl font-bold">RootstockLabs</span>
        </p>
        <p className="text-xs sm:text-sm opacity-60 mt-1">
          Copyright &copy; {year} Rootstock Labs. All rights reserved.
        </p>
      </div>
      
      <ul className="flex flex-col sm:flex-row gap-3 sm:gap-6 w-full lg:w-auto order-3 lg:order-2">
        <a
          href="https://rootstock.io/"
          target="_blank"
          rel="noreferrer noopener"
          className="hover:opacity-80 transition text-sm sm:text-base"
        >
          <li>About RootstockLabs</li>
        </a>
        <a
          href="https://rootstock.io/contact/"
          target="_blank"
          rel="noreferrer noopener"
          className="hover:opacity-80 transition text-sm sm:text-base"
        >
          <li>Help</li>
        </a>
        <a
          href="https://dev.rootstock.io/"
          target="_blank"
          rel="noreferrer noopener"
          className="hover:opacity-80 transition text-sm sm:text-base"
        >
          <li>Documentation</li>
        </a>
      </ul>
      
      <ul className="flex gap-4 sm:gap-6 w-full lg:w-auto justify-start lg:justify-end order-2 lg:order-3">
        <a
          href="https://twitter.com/rootstock_io"
          target="_blank"
          rel="noreferrer noopener"
          className="hover:opacity-80 transition hover:scale-110 transform duration-200"
        >
          <li>
            <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
          </li>
        </a>
        <a
          href="https://github.com/rsksmart"
          target="_blank"
          rel="noreferrer noopener"
          className="hover:opacity-80 transition hover:scale-110 transform duration-200"
        >
          <li>
            <Github className="w-5 h-5 sm:w-6 sm:h-6" />
          </li>
        </a>
        <a
          href="https://discord.com/invite/rootstock"
          target="_blank"
          rel="noreferrer noopener"
          className="hover:opacity-80 transition hover:scale-110 transform duration-200 -ml-1"
        >
          <li>
            <Discord className="w-5 h-5 sm:w-6 sm:h-6" />
          </li>
        </a>
      </ul>
    </footer>
  )
}