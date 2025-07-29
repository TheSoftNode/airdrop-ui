'use client'
import logo from '@/app/assets/img/logo.svg';
import { useAuth } from '@/context/AuthContext';
import Image from 'next/image';
import Connect from './Connect';
import Connected from './Connected';

function Navbar() {
  const { address } = useAuth();

  return (
    <nav className="w-full px-3 py-4 sm:p-6 flex justify-between items-center z-50 fixed bg-black border-b border-zinc-600">
      <Image 
        src={logo.src} 
        alt="logo" 
        style={{ width: 'auto', height: 'auto' }} 
        width={170} 
        height={100}
        className="h-8 sm:h-auto w-auto flex-shrink-0"
      />
      <div className="flex-shrink-0">
        {address ? (
          <Connected/>
        ) : (
          <Connect className='flex gap-2 sm:gap-3 flex-col sm:flex-row items-center justify-end' width={180} />
        )}
      </div>
    </nav>
  )
}

export default Navbar