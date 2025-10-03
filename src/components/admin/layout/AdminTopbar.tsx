'use client'

import { useAuth } from '@/context/AuthContext'
import { Bell, Home, LogOut } from 'lucide-react'
import Link from 'next/link'

export default function AdminTopbar() {
  const { address, logout } = useAuth()

  const shortAddress = address
    ? `${address.slice(0, 6)}...${address.slice(-4)}`
    : ''

  return (
    <header className="sticky top-0 z-20 h-16 border-b border-zinc-800 bg-black/80 backdrop-blur-md">
      <div className="flex items-center justify-between h-full px-4 sm:px-6 lg:px-8">
        {/* Left section */}
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-zinc-400 hover:text-white hover:bg-zinc-900 transition-all"
          >
            <Home className="w-4 h-4" />
            <span className="hidden sm:inline">Back to Home</span>
          </Link>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-3">
          {/* Notifications */}
          <button className="relative p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 transition-all">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-custom-orange rounded-full"></span>
          </button>

          {/* Connected Address */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800">
            <div className="w-2 h-2 bg-custom-green rounded-full animate-pulse"></div>
            <span className="text-sm text-white font-mono">{shortAddress}</span>
          </div>

          {/* Logout */}
          <button
            onClick={logout}
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-zinc-400 hover:text-white hover:bg-zinc-900 transition-all"
          >
            <LogOut className="w-4 h-4" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </div>
    </header>
  )
}
