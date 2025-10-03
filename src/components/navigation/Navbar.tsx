'use client'
import logo from '@/app/assets/img/logo.svg';
import { useAuth } from '@/context/AuthContext';
import Image from 'next/image';
import Link from 'next/link';
import Connect from './Connect';
import Connected from './Connected';
import { LayoutDashboard } from 'lucide-react';

function Navbar() {
  const { address, isAdmin } = useAuth();

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
      <div className="flex items-center gap-4 flex-shrink-0">
        {address && isAdmin && (
          <Link
            href="/admin"
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-custom-orange text-black font-semibold hover:bg-custom-orange/90 transition-all"
          >
            <LayoutDashboard className="w-4 h-4" />
            Admin
          </Link>
        )}
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