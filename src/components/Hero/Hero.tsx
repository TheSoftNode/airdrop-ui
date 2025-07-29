// import React from 'react'
// import Title from './Title'
// import Button from '@/components/common/Button'
// import WorldIcon from '@/components/icons/WorldIcon'
// import ArrowDownIcon from '../icons/ArrowDownIcon'

// function Hero() {
//   return (
//     <header className='h-[calc(100vh-8vh)] flex w-full items-center lg:w-[90%] xl:w-[1300px] m-auto'>
//       <div className='w-full h-full flex flex-col justify-evenly'>
//         <div className='flex items-center gap-3'>
//           <div className='flex-1'>
//             <Title />
//             <div className='flex justify-between mt-14 items-center'>
//               <Button
//                 onClick={undefined}
//                 outline
//                 rounded
//                 variant='secondary'
//                 width={190}
//                 >
//                 Airdrop Section
//               </Button>
//               <div className='w-[345px] font-medium'>
//                 <span className='bg-custom-orange w-[60px] h-[14px] rounded-full px-1 text-black'>WHAT IS?</span>
//                 <p className='mb-3 mt-4'>Welcome to the Runes Giveaway Machine! Airdrop Section, claim unique airdrops on RSK Network</p>
//               </div>
//             </div>
//           </div>
//           <WorldIcon />
//         </div>
//         <a href='#airdrop-content' className='flex justify-center mt-16'>
//           <ArrowDownIcon className='animate-bounce' />
//         </a>
//       </div>
//     </header>
//   )
// }

// export default Hero

import React from 'react'
import Title from './Title'
import Button from '@/components/common/Button'
import WorldIcon from '@/components/icons/WorldIcon'
import ArrowDownIcon from '../icons/ArrowDownIcon'

function Hero() {
  return (
    <header className='min-h-[calc(100vh-8vh)] pt-20 sm:pt-24 flex w-full items-center px-4 sm:px-6 lg:w-[90%] xl:w-[1300px] m-auto'>
      <div className='w-full h-full flex flex-col justify-evenly'>
        <div className='flex flex-col lg:flex-row items-center gap-6 lg:gap-3'>
          <div className='flex-1 w-full'>
            <Title />
            <div className='flex flex-col lg:flex-row lg:justify-between mt-8 lg:mt-14 items-start lg:items-center gap-6 lg:gap-0'>
              <Button
                onClick={undefined}
                outline
                rounded
                variant='secondary'
                width={190}
                className="w-full sm:w-auto"
                >
                Airdrop Section
              </Button>
              <div className='w-full lg:w-[345px] font-medium'>
                <span className='bg-custom-orange w-fit h-[14px] rounded-full px-2 py-1 text-black text-xs sm:text-sm'>WHAT IS?</span>
                <p className='mb-3 mt-4 text-sm sm:text-base'>Welcome to the Runes Giveaway Machine! Airdrop Section, claim unique airdrops on RSK Network</p>
              </div>
            </div>
          </div>
          <div className='flex-shrink-0 hidden lg:block'>
            <WorldIcon />
          </div>
        </div>
        <a href='#airdrop-content' className='flex justify-center mt-8 lg:mt-16'>
          <ArrowDownIcon className='animate-bounce' />
        </a>
      </div>
    </header>
  )
}

export default Hero