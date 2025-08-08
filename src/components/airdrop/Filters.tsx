import React, { useState } from 'react'
import Button from '../common/Button'
import Search from './Search'
import FilterIcon from '../icons/FilterIcon'
import AddAirdropDialog from '../dialog/AddAirdropDialog'
import { useAuth } from '@/context/AuthContext'

function Filters() {
  const [dialog, setDialog] = useState<boolean>(false);
  const { isAdmin } = useAuth();
  
  return (
    <>
      <AddAirdropDialog open={dialog} closeDialog={() => setDialog(false)} />
      
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 lg:gap-6 bg-black/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10">
        <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 w-full lg:w-auto'>
          <Search />
          {isAdmin && (
            <Button
              onClick={() => setDialog(true)}
              outline
              rounded
              variant='secondary'
              width={170}
              className="w-full sm:w-auto hover:bg-white/10 transition-colors duration-200"
            >
              <span className='text-base sm:text-lg font-semibold flex items-center justify-center gap-2'>
                <span className="hidden sm:inline">Add Airdrop</span>
                <span className="sm:hidden">Add</span>
                <span className="text-custom-orange">+</span>
              </span>
            </Button>
          )}
        </div>
        
        <div className="flex items-center gap-3 text-white/80 hover:text-white transition-colors duration-200 cursor-pointer group w-full lg:w-auto justify-center lg:justify-end">
          <FilterIcon className="w-5 h-5 sm:w-6 sm:h-6 group-hover:text-custom-orange transition-colors duration-200" />
          <span className="text-base sm:text-lg lg:text-xl font-medium">Filter By</span>
        </div>
      </div>
    </>
  )
}

export default Filters