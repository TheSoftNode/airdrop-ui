import AirdropContainer from './AirdropContainer'

function Content() {
  return (
    <section id='airdrop-content' className="min-h-screen bg-gradient-to-b from-black to-zinc-900">
      <div className="w-full border-y border-white/20 bg-black/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <span className="bg-gradient-to-r from-gray-600 to-gray-700 text-white text-xs sm:text-sm rounded-full px-3 py-2 font-bold leading-none flex justify-center items-center shadow-lg">
              01
            </span>
            <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-center sm:text-left bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Airdrops available for claiming
            </h4>
          </div>
        </div>
      </div>        
      <AirdropContainer />
    </section>
  )
}

export default Content