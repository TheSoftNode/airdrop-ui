'use client'

import { useAuth } from '@/context/AuthContext'
import { useEffect, useState } from 'react'
import StatsCard from '@/components/admin/dashboard/StatsCard'
import { Droplet, Users, CheckCircle, TrendingUp } from 'lucide-react'
import useAirdrop from '@/hooks/useAirdrop'

export default function AdminDashboard() {
  const { airdrops } = useAuth()
  const { getAllAirdrops } = useAirdrop()
  const [stats, setStats] = useState({
    totalAirdrops: 0,
    totalDistributed: 0,
    totalClaimers: 0,
    activeAirdrops: 0,
  })

  useEffect(() => {
    getAllAirdrops()
  }, [getAllAirdrops])

  useEffect(() => {
    if (airdrops) {
      const totalDistributed = airdrops.reduce(
        (sum, airdrop) => sum + (airdrop.totalAirdropAmount - airdrop.airdropAmountLeft),
        0
      )
      const activeAirdrops = airdrops.filter(a => !a.isExpired).length

      setStats({
        totalAirdrops: airdrops.length,
        totalDistributed: Math.round(totalDistributed),
        totalClaimers: 0, // Would need to track this on-chain
        activeAirdrops,
      })
    }
  }, [airdrops])

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard Overview</h1>
        <p className="text-zinc-400">Monitor your airdrop campaigns and performance</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Airdrops"
          value={stats.totalAirdrops}
          icon={Droplet}
          color="orange"
          subtitle="All campaigns"
        />
        <StatsCard
          title="Active Campaigns"
          value={stats.activeAirdrops}
          icon={TrendingUp}
          color="green"
          subtitle="Currently running"
        />
        <StatsCard
          title="Tokens Distributed"
          value={stats.totalDistributed.toLocaleString()}
          icon={CheckCircle}
          color="cyan"
          subtitle="Total claimed"
        />
        <StatsCard
          title="Total Claimers"
          value={stats.totalClaimers}
          icon={Users}
          color="pink"
          subtitle="Unique addresses"
        />
      </div>

      {/* Recent Activity */}
      <div className="rounded-xl border border-zinc-800 bg-black/40 backdrop-blur-sm overflow-hidden">
        <div className="p-6 border-b border-zinc-800">
          <h2 className="text-xl font-bold text-white">Recent Airdrops</h2>
        </div>
        <div className="divide-y divide-zinc-800">
          {airdrops && airdrops.length > 0 ? (
            airdrops.slice(0, 5).map((airdrop, index) => (
              <div key={index} className="p-6 hover:bg-zinc-900/50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1">{airdrop.name}</h3>
                    <p className="text-sm text-zinc-400">
                      {airdrop.airdropType === 'merkle' ? 'Merkle Proof' : 'Whitelist'} •
                      {airdrop.isExpired ? ' Expired' : ' Active'}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-white">{airdrop.airdropAmountLeft}</p>
                    <p className="text-sm text-zinc-500">tokens left</p>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-4">
                  <div className="flex-1 h-2 bg-zinc-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-custom-orange to-custom-pink rounded-full transition-all"
                      style={{ width: `${airdrop.progress}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium text-zinc-400">{airdrop.progress}%</span>
                </div>
              </div>
            ))
          ) : (
            <div className="p-12 text-center">
              <Droplet className="w-12 h-12 mx-auto mb-4 text-zinc-700" />
              <p className="text-zinc-500">No airdrops yet</p>
            </div>
          )}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-xl border border-zinc-800 bg-black/40 backdrop-blur-sm p-6">
          <h3 className="text-lg font-bold text-white mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full flex items-center justify-between p-4 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 transition-all text-left">
              <span className="text-white font-medium">Create New Airdrop</span>
              <span className="text-custom-orange">→</span>
            </button>
            <button className="w-full flex items-center justify-between p-4 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 transition-all text-left">
              <span className="text-white font-medium">Manage Whitelist</span>
              <span className="text-custom-green">→</span>
            </button>
            <button className="w-full flex items-center justify-between p-4 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 transition-all text-left">
              <span className="text-white font-medium">View Analytics</span>
              <span className="text-custom-cyan">→</span>
            </button>
          </div>
        </div>

        <div className="rounded-xl border border-zinc-800 bg-black/40 backdrop-blur-sm p-6">
          <h3 className="text-lg font-bold text-white mb-4">System Status</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-zinc-400">Network</span>
              <span className="flex items-center gap-2 text-custom-green">
                <span className="w-2 h-2 bg-custom-green rounded-full animate-pulse"></span>
                Connected
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-zinc-400">Contracts</span>
              <span className="flex items-center gap-2 text-custom-green">
                <span className="w-2 h-2 bg-custom-green rounded-full animate-pulse"></span>
                Operational
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-zinc-400">Gas Price</span>
              <span className="text-white font-medium">~0.001 ETH</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
