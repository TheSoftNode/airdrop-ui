import { Discord, Github, Twitter } from '@/components/icons'

export default function Footer(): JSX.Element {
  const year = new Date().getFullYear();
  
  return (
    <footer className="relative bg-gradient-to-t from-black via-zinc-900 to-zinc-800 border-t border-white/10">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:24px_24px] opacity-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12 py-8 sm:py-10 lg:py-12">
          
          {/* Company Info */}
          <div className="w-full lg:w-auto space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <p className="text-base sm:text-lg text-zinc-300">
                Built by
              </p>
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white via-zinc-200 to-zinc-300 bg-clip-text text-transparent">
                RootstockLabs
              </span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed max-w-md">
              Copyright &copy; {year} Rootstock Labs. All rights reserved.
              <br className="hidden sm:block" />
              <span className="block sm:inline"> Empowering the future of decentralized finance.</span>
            </p>
          </div>

          {/* Navigation Links */}
          <div className="w-full lg:w-auto">
            <nav className="grid grid-cols-1 sm:grid-cols-3 lg:flex lg:flex-row gap-4 sm:gap-6 lg:gap-8">
              <a
                href="https://rootstock.io/"
                target="_blank"
                rel="noreferrer noopener"
                className="group flex items-center text-sm sm:text-base text-zinc-300 hover:text-white transition-all duration-300 relative"
              >
                <span className="relative z-10">About RootstockLabs</span>
                <div className="absolute inset-0 bg-white/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-0"></div>
              </a>
              <a
                href="https://rootstock.io/contact/"
                target="_blank"
                rel="noreferrer noopener"
                className="group flex items-center text-sm sm:text-base text-zinc-300 hover:text-white transition-all duration-300 relative"
              >
                <span className="relative z-10">Help & Support</span>
                <div className="absolute inset-0 bg-white/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-0"></div>
              </a>
              <a
                href="https://dev.rootstock.io/"
                target="_blank"
                rel="noreferrer noopener"
                className="group flex items-center text-sm sm:text-base text-zinc-300 hover:text-white transition-all duration-300 relative"
              >
                <span className="relative z-10">Documentation</span>
                <div className="absolute inset-0 bg-white/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-0"></div>
              </a>
            </nav>
          </div>

          {/* Social Links */}
          <div className="w-full lg:w-auto">
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">Connect With Us</h4>
              <div className="flex gap-4 sm:gap-6">
                <a
                  href="https://twitter.com/rootstock_io"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group relative p-3 bg-zinc-800/50 hover:bg-zinc-700/50 rounded-xl border border-zinc-700/50 hover:border-zinc-600/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
                  aria-label="Follow us on Twitter"
                >
                  <Twitter className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-400 group-hover:text-blue-400 transition-colors duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                </a>
                <a
                  href="https://github.com/rsksmart"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group relative p-3 bg-zinc-800/50 hover:bg-zinc-700/50 rounded-xl border border-zinc-700/50 hover:border-zinc-600/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20"
                  aria-label="View our GitHub"
                >
                  <Github className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-400 group-hover:text-purple-400 transition-colors duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                </a>
                <a
                  href="https://discord.com/invite/rootstock"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group relative p-3 bg-zinc-800/50 hover:bg-zinc-700/50 rounded-xl border border-zinc-700/50 hover:border-zinc-600/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/20"
                  aria-label="Join our Discord"
                >
                  <Discord className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-400 group-hover:text-indigo-400 transition-colors duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border with Subtle Animation */}
        <div className="border-t border-zinc-700/30 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-zinc-500">
            <div className="flex flex-wrap gap-4">
              <span>Privacy Policy</span>
              <span className="text-zinc-700">•</span>
              <span>Terms of Service</span>
              <span className="text-zinc-700">•</span>
              <span>Cookie Policy</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>All systems operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}