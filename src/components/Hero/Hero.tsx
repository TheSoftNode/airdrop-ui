import React from 'react'
import Title from './Title'
import Button from '@/components/common/Button'
import WorldIcon from '@/components/icons/WorldIcon'
import ArrowDownIcon from '../icons/ArrowDownIcon'

function Hero() {
  return (
    <header className='min-h-[calc(100vh-8vh)] pt-16 sm:pt-20 lg:pt-24 flex w-full items-center px-4 sm:px-6 lg:px-8 lg:w-[90%] xl:w-[1300px] m-auto'>
      <div className='w-full h-full flex flex-col justify-center lg:justify-evenly py-8 lg:py-0'>
        <div className='flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-6 xl:gap-8'>
          <div className='flex-1 w-full'>
            <Title />
            <div className='flex flex-col md:flex-row lg:justify-between mt-6 sm:mt-8 lg:mt-14 items-start md:items-center gap-6 md:gap-8 lg:gap-6'>
              <Button
                onClick={undefined}
                outline
                rounded
                variant='secondary'
                width={190}
                className="w-full sm:w-auto flex-shrink-0"
                >
                Airdrop Section
              </Button>
              <div className='w-full md:flex-1 lg:w-[345px] lg:flex-initial font-medium'>
                <span className='bg-custom-orange inline-block rounded-full px-3 py-1 text-black text-xs sm:text-sm font-bold tracking-wide'>WHAT IS?</span>
                <p className='mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg leading-relaxed text-gray-200'>
                  Welcome to the Runes Giveaway Machine! Airdrop Section, claim unique airdrops on RSK Network
                </p>
              </div>
            </div>
          </div>
          <div className='flex-shrink-0 hidden lg:block xl:ml-4'>
            <WorldIcon className="w-auto h-auto max-w-full" />
          </div>
        </div>
        <a href='#airdrop-content' className='flex justify-center mt-12 sm:mt-16 lg:mt-20'>
          <ArrowDownIcon className='animate-bounce w-6 h-6 sm:w-8 sm:h-8 text-gray-400 hover:text-white transition-colors duration-200' />
        </a>
      </div>
    </header>
  )
}

export default Hero