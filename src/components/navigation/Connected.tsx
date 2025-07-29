'use client'
import { useAuth } from '@/context/AuthContext'
import MetamaskIcon from '../icons/MetamaskIcon'
import RifIcon from '../icons/RifIcon'

const Connected = () => {
    const { address, logout, domain } = useAuth();

    const formatAddress = () => {
        return `${address.substring(0, 4)}...${address.substring(address.length - 4)}`
    }

    const extractRawDomain = () => {
        const match = domain.match(/(.*)(\.rsk)$/);
        return match![1]
    }

    return (
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-end sm:items-center">
            {domain ? (
                <div className="bg-white flex items-center text-center gap-2 sm:gap-3 rounded-md text-black px-2 sm:px-3 py-2 text-sm sm:text-base whitespace-nowrap">
                    <RifIcon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    <div>
                        {extractRawDomain()}<span className='text-custom-pink font-semibold'>.rsk</span>
                    </div>
                </div>
            ) : (
                <div className="bg-white flex items-center gap-2 sm:gap-4 rounded-md text-black px-2 py-1 text-sm sm:text-base whitespace-nowrap">
                    <MetamaskIcon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    {formatAddress()}
                </div>
            )}
            <button
                onClick={logout}
                className="bg-card border border-border rounded-md px-3 sm:px-4 py-2 hover:opacity-90 text-sm sm:text-base whitespace-nowrap"
            >
                logout
            </button>
        </div>
    )
}

export default Connected