import React from 'react'

function ProgressBar({ value = 0, background = 'bg-custom-orange' }: { value: number, background: string }) {
  const clampedValue = Math.max(0, Math.min(100, value));
  
  return (
    <div className='mt-3'>
      <div className='font-semibold text-sm sm:text-base text-zinc-200 mb-2'>Progress</div>
      <div className='flex items-center gap-3'>
        <div className='bg-zinc-700/50 w-full h-2 sm:h-2.5 rounded-full overflow-hidden backdrop-blur-sm border border-zinc-600/30'>
          <div 
            style={{ width: `${clampedValue}%` }} 
            className={`h-full rounded-full ${background} transition-all duration-500 ease-out shadow-sm`}
          >
            <div className="h-full w-full bg-gradient-to-r from-transparent to-white/20 rounded-full"></div>
          </div>
        </div>
        <span className="text-sm sm:text-base font-bold text-white bg-zinc-800/60 px-2 py-1 rounded-md min-w-[3rem] text-center">
          {clampedValue}%
        </span>
      </div>
    </div>
  )
}

export default ProgressBar