import React, { useState } from 'react'
import SearchIcon from '../icons/SearchIcon'
import Input from '../common/Input'

function Search() {
  const [searchValue, setSearchValue] = useState<string>('');

  return (
    <div className="border border-white/30 bg-black/20 backdrop-blur-sm rounded-full flex px-4 py-2 gap-3 items-center hover:border-white/50 focus-within:border-custom-orange focus-within:bg-black/40 transition-all duration-200 w-full sm:w-auto min-w-[280px]">
      <SearchIcon className="h-5 w-5 sm:h-6 sm:w-6 text-zinc-400 flex-shrink-0" />
      <Input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className='text-base sm:text-lg outline-none bg-transparent text-white placeholder-zinc-400 flex-1 min-w-0'
        border={false}
        placeholder='Search airdrop...'
      />
    </div>
  )
}

export default Search