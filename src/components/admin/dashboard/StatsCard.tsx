import { LucideIcon } from 'lucide-react'
import { ReactNode } from 'react'

interface StatsCardProps {
  title: string
  value: string | number
  icon: LucideIcon
  trend?: {
    value: string
    positive: boolean
  }
  color?: 'orange' | 'green' | 'pink' | 'cyan' | 'lime'
  subtitle?: string
}

const colorClasses = {
  orange: 'from-custom-orange/20 to-custom-orange/5 border-custom-orange/30',
  green: 'from-custom-green/20 to-custom-green/5 border-custom-green/30',
  pink: 'from-custom-pink/20 to-custom-pink/5 border-custom-pink/30',
  cyan: 'from-custom-cyan/20 to-custom-cyan/5 border-custom-cyan/30',
  lime: 'from-custom-lime/20 to-custom-lime/5 border-custom-lime/30',
}

const iconColorClasses = {
  orange: 'bg-custom-orange/20 text-custom-orange',
  green: 'bg-custom-green/20 text-custom-green',
  pink: 'bg-custom-pink/20 text-custom-pink',
  cyan: 'bg-custom-cyan/20 text-custom-cyan',
  lime: 'bg-custom-lime/20 text-custom-lime',
}

export default function StatsCard({
  title,
  value,
  icon: Icon,
  trend,
  color = 'orange',
  subtitle,
}: StatsCardProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl border bg-gradient-to-br ${colorClasses[color]} backdrop-blur-sm p-6 transition-all hover:scale-[1.02]`}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-zinc-400 mb-1">{title}</p>
          <h3 className="text-3xl font-bold text-white mb-2">{value}</h3>
          {subtitle && (
            <p className="text-xs text-zinc-500">{subtitle}</p>
          )}
          {trend && (
            <div className="flex items-center gap-1 mt-2">
              <span
                className={`text-xs font-medium ${
                  trend.positive ? 'text-custom-green' : 'text-red-400'
                }`}
              >
                {trend.positive ? '↑' : '↓'} {trend.value}
              </span>
              <span className="text-xs text-zinc-500">vs last month</span>
            </div>
          )}
        </div>
        <div className={`p-3 rounded-lg ${iconColorClasses[color]}`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
    </div>
  )
}
