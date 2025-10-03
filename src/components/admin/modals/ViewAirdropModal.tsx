'use client'

import { IAirdrop } from '@/interface/IAirdrop'
import { X, Calendar, Droplet, Users, TrendingUp } from 'lucide-react'

interface ViewAirdropModalProps {
  airdrop: IAirdrop
  onClose: () => void
}

export default function ViewAirdropModal({ airdrop, onClose }: ViewAirdropModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-2xl rounded-xl border border-zinc-800 bg-zinc-900 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-zinc-800">
          <div>
            <h2 className="text-2xl font-bold text-white">{airdrop.name}</h2>
            <p className="text-sm text-zinc-500 font-mono mt-1">
              {airdrop.address}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-black border border-zinc-800">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-custom-orange/20">
                  <Droplet className="w-4 h-4 text-custom-orange" />
                </div>
                <p className="text-sm text-zinc-400">Total Amount</p>
              </div>
              <p className="text-2xl font-bold text-white">{airdrop.totalAirdropAmount.toLocaleString()}</p>
            </div>

            <div className="p-4 rounded-lg bg-black border border-zinc-800">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-custom-green/20">
                  <TrendingUp className="w-4 h-4 text-custom-green" />
                </div>
                <p className="text-sm text-zinc-400">Remaining</p>
              </div>
              <p className="text-2xl font-bold text-white">{airdrop.airdropAmountLeft.toLocaleString()}</p>
            </div>

            <div className="p-4 rounded-lg bg-black border border-zinc-800">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-custom-cyan/20">
                  <Users className="w-4 h-4 text-custom-cyan" />
                </div>
                <p className="text-sm text-zinc-400">Claim Amount</p>
              </div>
              <p className="text-2xl font-bold text-white">{airdrop.claimAmount}</p>
            </div>

            <div className="p-4 rounded-lg bg-black border border-zinc-800">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-custom-pink/20">
                  <Calendar className="w-4 h-4 text-custom-pink" />
                </div>
                <p className="text-sm text-zinc-400">Expires</p>
              </div>
              <p className="text-sm font-bold text-white">{airdrop.expirationDate.toDateString()}</p>
            </div>
          </div>

          {/* Progress */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-zinc-400">Distribution Progress</p>
              <p className="text-sm font-bold text-white">{airdrop.progress}%</p>
            </div>
            <div className="h-3 bg-black rounded-full overflow-hidden border border-zinc-800">
              <div
                className="h-full bg-gradient-to-r from-custom-orange to-custom-pink rounded-full transition-all"
                style={{ width: `${airdrop.progress}%` }}
              />
            </div>
          </div>

          {/* Details */}
          <div className="grid grid-cols-2 gap-4 p-4 rounded-lg bg-black border border-zinc-800">
            <div>
              <p className="text-xs text-zinc-500 mb-1">Type</p>
              <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                airdrop.airdropType === 'merkle'
                  ? 'bg-custom-cyan/20 text-custom-cyan'
                  : 'bg-custom-pink/20 text-custom-pink'
              }`}>
                {airdrop.airdropType}
              </span>
            </div>
            <div>
              <p className="text-xs text-zinc-500 mb-1">Status</p>
              <span className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full ${
                airdrop.isExpired
                  ? 'bg-zinc-800 text-zinc-500'
                  : 'bg-custom-green/20 text-custom-green'
              }`}>
                <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                {airdrop.isExpired ? 'Expired' : 'Active'}
              </span>
            </div>
            <div>
              <p className="text-xs text-zinc-500 mb-1">Balance</p>
              <p className="text-sm font-medium text-white">{airdrop.balance}</p>
            </div>
            <div>
              <p className="text-xs text-zinc-500 mb-1">Your Status</p>
              <p className="text-sm font-medium text-white">
                {airdrop.isClaimed ? 'Claimed' : airdrop.isAllowed ? 'Eligible' : 'Not Eligible'}
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-zinc-800">
          <button
            onClick={onClose}
            className="w-full px-4 py-3 rounded-lg bg-zinc-800 text-white font-medium hover:bg-zinc-700 transition-all"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
