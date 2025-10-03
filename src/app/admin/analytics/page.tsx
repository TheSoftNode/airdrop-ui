'use client'

import { BarChart3 } from 'lucide-react'

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Analytics</h1>
        <p className="text-zinc-400">Track airdrop performance and insights</p>
      </div>

      <div className="rounded-xl border border-zinc-800 bg-black/40 backdrop-blur-sm p-12 text-center">
        <BarChart3 className="w-16 h-16 mx-auto mb-4 text-zinc-700" />
        <h3 className="text-xl font-bold text-white mb-2">Coming Soon</h3>
        <p className="text-zinc-500">Advanced analytics and reporting features will be available here</p>
      </div>
    </div>
  )
}
