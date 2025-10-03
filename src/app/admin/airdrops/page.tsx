'use client'

import { useAuth } from '@/context/AuthContext'
import useAirdrop from '@/hooks/useAirdrop'
import { useEffect, useState } from 'react'
import AirdropTable from '@/components/admin/airdrops/AirdropTable'
import { Plus, Search } from 'lucide-react'
import { IAirdrop } from '@/interface/IAirdrop'
import AddAirdropModal from '@/components/admin/modals/AddAirdropModal'
import ViewAirdropModal from '@/components/admin/modals/ViewAirdropModal'

export default function AirdropsPage() {
  const { airdrops } = useAuth()
  const { getAllAirdrops, removeAirdrop } = useAirdrop()
  const [searchTerm, setSearchTerm] = useState('')
  const [showAddModal, setShowAddModal] = useState(false)
  const [selectedAirdrop, setSelectedAirdrop] = useState<IAirdrop | null>(null)
  const [filteredAirdrops, setFilteredAirdrops] = useState<IAirdrop[]>([])

  useEffect(() => {
    getAllAirdrops()
  }, [getAllAirdrops])

  useEffect(() => {
    if (airdrops) {
      const filtered = airdrops.filter(airdrop =>
        airdrop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        airdrop.address?.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setFilteredAirdrops(filtered)
    }
  }, [airdrops, searchTerm])

  const handleDelete = async (address: string) => {
    if (confirm('Are you sure you want to remove this airdrop?')) {
      await removeAirdrop(address)
      await getAllAirdrops()
    }
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Manage Airdrops</h1>
          <p className="text-zinc-400">View and manage all airdrop campaigns</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-custom-orange text-black font-semibold hover:bg-custom-orange/90 transition-all"
        >
          <Plus className="w-5 h-5" />
          Add Airdrop
        </button>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
          <input
            type="text"
            placeholder="Search by name or address..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-custom-orange/50 transition-all"
          />
        </div>
      </div>

      {/* Airdrops Table */}
      <div className="rounded-xl border border-zinc-800 bg-black/40 backdrop-blur-sm overflow-hidden">
        <AirdropTable
          airdrops={filteredAirdrops}
          onDelete={handleDelete}
          onView={setSelectedAirdrop}
        />
      </div>

      {/* Modals */}
      {showAddModal && (
        <AddAirdropModal
          onClose={() => setShowAddModal(false)}
          onSuccess={() => {
            setShowAddModal(false)
            getAllAirdrops()
          }}
        />
      )}

      {selectedAirdrop && (
        <ViewAirdropModal
          airdrop={selectedAirdrop}
          onClose={() => setSelectedAirdrop(null)}
        />
      )}
    </div>
  )
}
