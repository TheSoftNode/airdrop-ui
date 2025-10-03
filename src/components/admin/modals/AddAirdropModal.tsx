'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import useAirdrop from '@/hooks/useAirdrop'

interface AddAirdropModalProps {
  onClose: () => void
  onSuccess: () => void
}

export default function AddAirdropModal({ onClose, onSuccess }: AddAirdropModalProps) {
  const [address, setAddress] = useState('')
  const { addAirdrop, isLoading } = useAirdrop()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!address) return

    await addAirdrop(address)
    onSuccess()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md rounded-xl border border-zinc-800 bg-zinc-900 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-zinc-800">
          <h2 className="text-xl font-bold text-white">Add Airdrop Contract</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-zinc-400 mb-2">
              Contract Address
            </label>
            <input
              id="address"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="0x..."
              className="w-full px-4 py-3 rounded-lg bg-black border border-zinc-800 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-custom-orange/50 font-mono"
              required
            />
            <p className="mt-2 text-xs text-zinc-500">
              Enter the deployed airdrop contract address
            </p>
          </div>

          {/* Footer */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-3 rounded-lg bg-zinc-800 text-white font-medium hover:bg-zinc-700 transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!address || isLoading !== 0}
              className="flex-1 px-4 py-3 rounded-lg bg-custom-orange text-black font-semibold hover:bg-custom-orange/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading !== 0 ? 'Adding...' : 'Add Airdrop'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
