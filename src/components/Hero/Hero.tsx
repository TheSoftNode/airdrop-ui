import React from 'react'
import Title from './Title'
import Button from '@/components/common/Button'
import WorldIcon from '@/components/icons/WorldIcon'
import ArrowDownIcon from '../icons/ArrowDownIcon'

function Hero() {
  return (
    <header className='min-h-screen pt-24  flex w-full items-center relative overflow-hidden'>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,145,0,0.1)_0%,transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,113,225,0.08)_0%,transparent_50%)]"></div>
      
      <div className='relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='w-full min-h-[calc(100vh-8rem)] flex flex-col justify-center py-8 lg:py-12'>
          
          {/* Main Content */}
          <div className='flex flex-col xl:flex-row items-start xl:items-center gap-8 lg:gap-12 xl:gap-16'>
            
            {/* Left Content */}
            <div className='flex-1 w-full max-w-4xl'>
              <Title />
              
              <div className='flex flex-col lg:flex-row lg:items-center mt-8 sm:mt-10 lg:mt-16 gap-6 lg:gap-8 xl:gap-12'>
                <Button
                  onClick={undefined}
                  outline
                  rounded
                  variant='secondary'
                  width={200}
                  className="w-full sm:w-auto flex-shrink-0 hover:bg-white/10 hover:border-white/50 transition-all duration-300 group"
                >
                  <span className="flex items-center justify-center gap-2 text-base sm:text-lg font-semibold">
                    <span>Airdrop Section</span>
                    <ArrowDownIcon className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
                  </span>
                </Button>
                
                <div className='flex-1 max-w-md font-medium'>
                  <div className="mb-4">
                    <span className='bg-custom-orange inline-block rounded-full px-4 py-2 text-black text-xs sm:text-sm font-bold tracking-wide shadow-lg'>
                      WHAT IS?
                    </span>
                  </div>
                  <p className='text-sm sm:text-base lg:text-lg leading-relaxed text-zinc-300'>
                    Welcome to the <span className="text-white font-semibold">Runes Giveaway Machine</span>! 
                    Airdrop Section, claim unique airdrops on <span className="text-custom-orange font-medium">RSK Network</span>
                  </p>
                </div>
              </div>
            </div>

            {/* World Icon - Responsive */}
            <div className='flex-shrink-0 w-full xl:w-auto flex justify-center xl:justify-end mt-8 xl:mt-0'>
              <div className="relative">
                {/* Glow effect behind icon */}
                <div className="absolute inset-0 bg-gradient-to-r from-custom-pink/20 to-custom-orange/20 blur-3xl scale-150 opacity-60"></div>
                
                {/* Icon container with responsive sizing */}
                <div className="relative">
                  <WorldIcon className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] xl:w-[32rem] xl:h-[32rem] max-w-full max-h-full object-contain opacity-90 hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                {/* Floating animation dots */}
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-custom-orange rounded-full animate-pulse opacity-70"></div>
                <div className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-custom-pink rounded-full animate-pulse opacity-60 animation-delay-300"></div>
                <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-custom-cyan rounded-full animate-pulse opacity-50 animation-delay-600"></div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className='flex justify-center mt-12 sm:mt-16 lg:mt-20 xl:mt-24'>
            <a 
              href='#airdrop-content' 
              className='group flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300'
            >
              <span className="text-xs sm:text-sm text-zinc-400 uppercase tracking-widest font-medium opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                Scroll Down
              </span>
              <div className="relative">
                <ArrowDownIcon className='animate-bounce w-6 h-6 sm:w-8 sm:h-8 text-zinc-400 group-hover:text-white transition-colors duration-300' />
                <div className="absolute inset-0 bg-white/20 blur-lg scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </header>
  )
}

export default Hero