'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import useAirdrop from '@/hooks/useAirdrop'

interface AddAddressModalProps {
  airdropAddress: string
  onClose: () => void
  onSuccess: () => void
}

export default function AddAddressModal({ airdropAddress, onClose, onSuccess }: AddAddressModalProps) {
  const [walletAddress, setWalletAddress] = useState('')
  const { allowedAddress, isLoading } = useAirdrop()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!walletAddress) return

    await allowedAddress(airdropAddress, walletAddress)
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
          <h2 className="text-xl font-bold text-white">Whitelist Address</h2>
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
              Wallet Address
            </label>
            <input
              id="address"
              type="text"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              placeholder="0x..."
              className="w-full px-4 py-3 rounded-lg bg-black border border-zinc-800 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-custom-orange/50 font-mono"
              required
            />
            <p className="mt-2 text-xs text-zinc-500">
              This address will be allowed to claim from the selected airdrop
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
              disabled={!walletAddress || isLoading !== 0}
              className="flex-1 px-4 py-3 rounded-lg bg-custom-orange text-black font-semibold hover:bg-custom-orange/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading !== 0 ? 'Adding...' : 'Whitelist'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
