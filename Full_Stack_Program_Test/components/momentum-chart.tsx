'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'

interface MomentumChartProps {
  selectedIndicators: string[]
  timeframe: '1D' | '5D' | '1W' | '1M' | '3M' | '1Y' | 'ALL'
}

const generateMomentumData = (timeframe: string) => {
  const dataPoints: Record<string, number> = {
    '1D': 24,
    '5D': 30,
    '1W': 7,
    '1M': 25,
    '3M': 63,
    '1Y': 252,
    'ALL': 500,
  }
  
  const count = dataPoints[timeframe] || 25
  return Array.from({ length: count }, (_, i) => ({
    time: `${i + 1}`,
    macd: Math.sin(i * 0.3) * 50 + 10,
    signal: Math.sin(i * 0.3 + 0.5) * 45 + 12,
    momentum: Math.cos(i * 0.2) * 60 + 50,
  }))
}

export default function MomentumChart({ selectedIndicators, timeframe }: MomentumChartProps) {
  const data = generateMomentumData(timeframe)

  return (
    <div className="premium-card rounded-2xl p-6 border border-purple-500/20">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-transparent bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text mb-2">
          Momentum Indicators
        </h3>
        <p className="text-xs text-foreground/60">{timeframe} MACD and momentum analysis</p>
      </div>

      <div className="w-full h-64 bg-gradient-to-br from-slate-900/50 to-purple-900/20 rounded-xl p-4 border border-slate-700/30">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.2)" />
            <XAxis dataKey="time" stroke="rgba(148, 163, 184, 0.5)" style={{ fontSize: '11px' }} />
            <YAxis stroke="rgba(148, 163, 184, 0.5)" style={{ fontSize: '11px' }} />
            <Tooltip contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.95)', border: '1px solid rgba(168, 85, 247, 0.5)', borderRadius: '8px' }} />
            <Legend />
            <Line dataKey="macd" stroke="#d946ef" dot={false} strokeWidth={3} name="MACD" strokeLinecap="round" />
            <Line dataKey="signal" stroke="#ec4899" dot={false} strokeWidth={3} name="Signal Line" strokeLinecap="round" />
            {selectedIndicators.includes('MACD') && (
              <Line dataKey="momentum" stroke="#22d3ee" dot={false} strokeWidth={3} strokeDasharray="5 5" name="Momentum" strokeLinecap="round" />
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
