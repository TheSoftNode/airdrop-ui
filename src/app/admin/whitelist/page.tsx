'use client'

import { useAuth } from '@/context/AuthContext'
import useAirdrop from '@/hooks/useAirdrop'
import { useEffect, useState } from 'react'
import { Upload, UserPlus, Search } from 'lucide-react'
import AddAddressModal from '@/components/admin/modals/AddAddressModal'
import BatchUploadModal from '@/components/admin/modals/BatchUploadModal'

export default function WhitelistPage() {
  const { airdrops } = useAuth()
  const { getAllAirdrops } = useAirdrop()
  const [selectedAirdrop, setSelectedAirdrop] = useState<string>('')
  const [showAddModal, setShowAddModal] = useState(false)
  const [showBatchModal, setShowBatchModal] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    getAllAirdrops()
  }, [getAllAirdrops])

  const activeAirdrops = airdrops?.filter(a => !a.isExpired && a.airdropType === 'custom') || []

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Whitelist Management</h1>
          <p className="text-zinc-400">Manage eligible addresses for airdrops</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => setShowBatchModal(true)}
            disabled={!selectedAirdrop}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800 text-white font-medium hover:bg-zinc-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Upload className="w-5 h-5" />
            <span className="hidden sm:inline">Batch Upload</span>
          </button>
          <button
            onClick={() => setShowAddModal(true)}
            disabled={!selectedAirdrop}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-custom-orange text-black font-semibold hover:bg-custom-orange/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <UserPlus className="w-5 h-5" />
            <span className="hidden sm:inline">Add Address</span>
          </button>
        </div>
      </div>

      {/* Airdrop Selection */}
      <div className="rounded-xl border border-zinc-800 bg-black/40 backdrop-blur-sm p-6">
        <label className="block text-sm font-medium text-zinc-400 mb-3">
          Select Airdrop Campaign
        </label>
        <select
          value={selectedAirdrop}
          onChange={(e) => setSelectedAirdrop(e.target.value)}
          className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-custom-orange/50 transition-all"
        >
          <option value="">Choose an airdrop...</option>
          {activeAirdrops.map((airdrop, index) => (
            <option key={index} value={airdrop.address}>
              {airdrop.name} - {airdrop.airdropAmountLeft} tokens left
            </option>
          ))}
        </select>
        {activeAirdrops.length === 0 && (
          <p className="mt-3 text-sm text-zinc-500">
            No active custom airdrops available. Whitelist management is only for custom (non-merkle) airdrops.
          </p>
        )}
      </div>

      {/* Whitelist Info Cards */}
      {selectedAirdrop && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-zinc-800 bg-gradient-to-br from-custom-orange/10 to-transparent p-6">
              <p className="text-sm text-zinc-400 mb-2">Total Whitelisted</p>
              <p className="text-3xl font-bold text-white">0</p>
              <p className="text-xs text-zinc-500 mt-2">Eligible addresses</p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-gradient-to-br from-custom-green/10 to-transparent p-6">
              <p className="text-sm text-zinc-400 mb-2">Total Claimed</p>
              <p className="text-3xl font-bold text-white">0</p>
              <p className="text-xs text-zinc-500 mt-2">Successful claims</p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-gradient-to-br from-custom-cyan/10 to-transparent p-6">
              <p className="text-sm text-zinc-400 mb-2">Pending Claims</p>
              <p className="text-3xl font-bold text-white">0</p>
              <p className="text-xs text-zinc-500 mt-2">Not yet claimed</p>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
            <input
              type="text"
              placeholder="Search addresses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-custom-orange/50 transition-all"
            />
          </div>

          {/* Addresses List */}
          <div className="rounded-xl border border-zinc-800 bg-black/40 backdrop-blur-sm overflow-hidden">
            <div className="p-6 border-b border-zinc-800">
              <h3 className="text-lg font-bold text-white">Whitelisted Addresses</h3>
            </div>
            <div className="p-12 text-center">
              <UserPlus className="w-12 h-12 mx-auto mb-4 text-zinc-700" />
              <p className="text-zinc-500 mb-2">No addresses whitelisted yet</p>
              <p className="text-sm text-zinc-600">Add addresses individually or upload a CSV file</p>
            </div>
          </div>
        </>
      )}

      {!selectedAirdrop && (
        <div className="rounded-xl border border-zinc-800 bg-black/40 backdrop-blur-sm p-12 text-center">
          <p className="text-zinc-500">Select an airdrop campaign to manage whitelist</p>
        </div>
      )}

      {/* Modals */}
      {showAddModal && selectedAirdrop && (
        <AddAddressModal
          airdropAddress={selectedAirdrop}
          onClose={() => setShowAddModal(false)}
          onSuccess={() => {
            setShowAddModal(false)
            getAllAirdrops()
          }}
        />
      )}

      {showBatchModal && selectedAirdrop && (
        <BatchUploadModal
          airdropAddress={selectedAirdrop}
          onClose={() => setShowBatchModal(false)}
          onSuccess={() => {
            setShowBatchModal(false)
            getAllAirdrops()
          }}
        />
      )}
    </div>
  )
}
