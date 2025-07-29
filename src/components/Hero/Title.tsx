// import React from 'react'

// function Title() {
//   return (
//     <h1 className='text-7xl font-bold text-black gap-3 leading-tight flex flex-col'>
//       <span className='flex gap-3'>
//         <span className='bg-custom-orange'>Runes</span>
//         <span className='bg-custom-pink'>giveaway</span>
//       </span>
//       <span className='bg-custom-green w-max'>machine</span>
//       <span className='flex gap-3'>
//         <span className='bg-custom-cyan'>Airdrop</span>
//         <span className='bg-custom-lime'>claim</span>
//       </span>
//     </h1>
//   )
// }

// export default Title

import React from 'react'

function Title() {
  return (
    <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black gap-2 sm:gap-3 leading-tight flex flex-col'>
      <span className='flex flex-wrap gap-2 sm:gap-3'>
        <span className='bg-custom-orange px-2 sm:px-3 py-1 sm:py-2 rounded-sm'>Runes</span>
        <span className='bg-custom-pink px-2 sm:px-3 py-1 sm:py-2 rounded-sm'>giveaway</span>
      </span>
      <span className='bg-custom-green w-max px-2 sm:px-3 py-1 sm:py-2 rounded-sm'>machine</span>
      <span className='flex flex-wrap gap-2 sm:gap-3'>
        <span className='bg-custom-cyan px-2 sm:px-3 py-1 sm:py-2 rounded-sm'>Airdrop</span>
        <span className='bg-custom-lime px-2 sm:px-3 py-1 sm:py-2 rounded-sm'>claim</span>
      </span>
    </h1>
  )
}

export default Title