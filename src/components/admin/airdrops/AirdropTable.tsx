'use client'

import { IAirdrop } from '@/interface/IAirdrop'
import { MoreVertical, Trash2, Edit, Eye } from 'lucide-react'
import { useState } from 'react'

interface AirdropTableProps {
  airdrops: IAirdrop[]
  onDelete: (address: string) => void
  onView: (airdrop: IAirdrop) => void
}

export default function AirdropTable({ airdrops, onDelete, onView }: AirdropTableProps) {
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null)

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-zinc-800">
            <th className="text-left px-6 py-4 text-sm font-semibold text-zinc-400">Name</th>
            <th className="text-left px-6 py-4 text-sm font-semibold text-zinc-400">Type</th>
            <th className="text-left px-6 py-4 text-sm font-semibold text-zinc-400">Total Amount</th>
            <th className="text-left px-6 py-4 text-sm font-semibold text-zinc-400">Remaining</th>
            <th className="text-left px-6 py-4 text-sm font-semibold text-zinc-400">Progress</th>
            <th className="text-left px-6 py-4 text-sm font-semibold text-zinc-400">Status</th>
            <th className="text-right px-6 py-4 text-sm font-semibold text-zinc-400">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-800">
          {airdrops.map((airdrop, index) => (
            <tr key={index} className="hover:bg-zinc-900/50 transition-colors">
              <td className="px-6 py-4">
                <div>
                  <p className="text-white font-medium">{airdrop.name}</p>
                  <p className="text-xs text-zinc-500 font-mono mt-1">
                    {airdrop.address?.slice(0, 8)}...{airdrop.address?.slice(-6)}
                  </p>
                </div>
              </td>
              <td className="px-6 py-4">
                <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                  airdrop.airdropType === 'merkle'
                    ? 'bg-custom-cyan/20 text-custom-cyan'
                    : 'bg-custom-pink/20 text-custom-pink'
                }`}>
                  {airdrop.airdropType}
                </span>
              </td>
              <td className="px-6 py-4 text-white">{airdrop.totalAirdropAmount.toLocaleString()}</td>
              <td className="px-6 py-4 text-white">{airdrop.airdropAmountLeft.toLocaleString()}</td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-2 bg-zinc-800 rounded-full overflow-hidden w-24">
                    <div
                      className="h-full bg-gradient-to-r from-custom-orange to-custom-pink rounded-full"
                      style={{ width: `${airdrop.progress}%` }}
                    />
                  </div>
                  <span className="text-sm text-zinc-400">{airdrop.progress}%</span>
                </div>
              </td>
              <td className="px-6 py-4">
                <span className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full ${
                  airdrop.isExpired
                    ? 'bg-zinc-800 text-zinc-500'
                    : 'bg-custom-green/20 text-custom-green'
                }`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                  {airdrop.isExpired ? 'Expired' : 'Active'}
                </span>
              </td>
              <td className="px-6 py-4 text-right">
                <div className="relative">
                  <button
                    onClick={() => setOpenMenuIndex(openMenuIndex === index ? null : index)}
                    className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all"
                  >
                    <MoreVertical className="w-4 h-4" />
                  </button>

                  {openMenuIndex === index && (
                    <>
                      <div
                        className="fixed inset-0 z-10"
                        onClick={() => setOpenMenuIndex(null)}
                      />
                      <div className="absolute right-0 mt-2 w-48 rounded-lg border border-zinc-800 bg-zinc-900 shadow-xl z-20">
                        <button
                          onClick={() => {
                            onView(airdrop)
                            setOpenMenuIndex(null)
                          }}
                          className="w-full flex items-center gap-3 px-4 py-3 text-sm text-white hover:bg-zinc-800 transition-colors rounded-t-lg"
                        >
                          <Eye className="w-4 h-4" />
                          View Details
                        </button>
                        <button
                          onClick={() => {
                            onDelete(airdrop.address!)
                            setOpenMenuIndex(null)
                          }}
                          className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-400 hover:bg-zinc-800 transition-colors rounded-b-lg"
                        >
                          <Trash2 className="w-4 h-4" />
                          Remove Airdrop
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {airdrops.length === 0 && (
        <div className="py-12 text-center">
          <p className="text-zinc-500">No airdrops found</p>
        </div>
      )}
    </div>
  )
}
