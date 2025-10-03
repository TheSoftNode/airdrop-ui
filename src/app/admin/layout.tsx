'use client'

import { useAuth } from '@/context/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import AdminSidebar from '@/components/admin/layout/AdminSidebar'
import AdminTopbar from '@/components/admin/layout/AdminTopbar'
import useAirdrop from '@/hooks/useAirdrop'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { isAdmin, address, setIsAdmin } = useAuth()
  const { getAllAirdrops } = useAirdrop()
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkAdmin = async () => {
      if (address) {
        await getAllAirdrops()
      }
      setLoading(false)
    }
    checkAdmin()
  }, [address, getAllAirdrops])

  useEffect(() => {
    if (!loading && address && !isAdmin) {
      router.push('/')
    }
  }, [isAdmin, address, router, loading])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black to-zinc-900 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-8 h-8 border-4 border-custom-orange border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-zinc-400">Checking admin access...</p>
        </div>
      </div>
    )
  }

  if (!address) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black to-zinc-900 flex items-center justify-center">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-white">Admin Access Required</h2>
          <p className="text-zinc-400">Please connect your wallet to access the admin dashboard</p>
        </div>
      </div>
    )
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black to-zinc-900 flex items-center justify-center">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-white">Unauthorized Access</h2>
          <p className="text-zinc-400">You don't have admin privileges</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-zinc-900">
      <AdminSidebar />
      <div className="lg:pl-64">
        <AdminTopbar />
        <main className="py-6 px-4 sm:px-6 lg:px-8">
          {children}
        </main>
      </div>
    </div>
  )
}
