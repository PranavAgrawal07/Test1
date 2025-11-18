'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'

interface VolumeChartProps {
  timeframe: '1D' | '5D' | '1W' | '1M' | '3M' | '1Y' | 'ALL'
}

const generateVolumeData = (timeframe: string) => {
  const dataPoints: Record<string, number> = {
    '1D': 24,
    '5D': 30,
    '1W': 7,
    '1M': 20,
    '3M': 63,
    '1Y': 252,
    'ALL': 500,
  }
  
  const count = dataPoints[timeframe] || 20
  return Array.from({ length: count }, (_, i) => ({
    day: `Day ${i + 1}`,
    volume: Math.floor(Math.random() * 50000000),
    avgVolume: 25000000,
  }))
}

export default function VolumeChart({ timeframe }: VolumeChartProps) {
  const data = generateVolumeData(timeframe)

  return (
    <div className="premium-card rounded-2xl p-6 border border-emerald-500/20">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-transparent bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text mb-2">
          Trading Volume Analysis
        </h3>
        <p className="text-xs text-foreground/60">{timeframe} volume trends showing market interest</p>
      </div>

      <div className="w-full h-64 bg-gradient-to-br from-slate-900/50 to-emerald-900/20 rounded-xl p-4 border border-slate-700/30">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
            <defs>
              <linearGradient id="volumeGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.2)" />
            <XAxis dataKey="day" stroke="rgba(148, 163, 184, 0.5)" style={{ fontSize: '11px' }} />
            <YAxis stroke="rgba(148, 163, 184, 0.5)" style={{ fontSize: '11px' }} />
            <Tooltip contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.95)', border: '1px solid rgba(16, 185, 129, 0.5)', borderRadius: '8px' }} />
            <Legend />
            <Bar dataKey="volume" fill="url(#volumeGradient)" radius={[12, 12, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
