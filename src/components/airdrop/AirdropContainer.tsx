'use client'
import AirdropItem from './AirdropItem'
import useAirdrop from '@/hooks/useAirdrop'
import Filters from './Filters';
import AirdropCardSkeleton from '../loader/AirdropCardSkeleton';
import { useAuth } from '@/context/AuthContext';
import { useEffect } from 'react';

function AirdropContainer() {
  const colors = ['bg-custom-orange', 'bg-custom-green', 'bg-custom-pink'];

  const { getAllAirdrops } = useAirdrop();
  const { provider, airdropLoading, airdrops } = useAuth();
  
  useEffect(() => {
    getAllAirdrops();
  }, [provider, getAllAirdrops]);

  return (
    <div className="w-full max-w-7xl mx-auto mt-16 sm:mt-20 lg:mt-24 px-4 sm:px-6 lg:px-8">
      <Filters />
      
      <div className='mt-8 sm:mt-12 lg:mt-16'>
        {airdropLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[...Array(6)].map((_, i) => (
              <AirdropCardSkeleton key={i} />
            ))}
          </div>
        ) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8'>
            {airdrops?.map((air, i) =>
              <AirdropItem
                airdrop={air}
                key={i}
                background={`${colors[i % colors.length]}`}
              />
            )}
          </div>
        )}
        
        {(airdrops?.length === 0 && !airdropLoading) && (
          <div className='w-full flex flex-col items-center justify-center mt-16 sm:mt-20 py-12'>
            <div className="text-center space-y-4">
              <div className="text-4xl sm:text-5xl lg:text-6xl italic text-zinc-700 font-light">
                No Airdrops
              </div>
              <p className="text-zinc-500 text-sm sm:text-base max-w-md mx-auto">
                There are currently no airdrops available. Check back later for new opportunities.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AirdropContainer