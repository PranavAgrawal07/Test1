'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'

interface MovingAverageChartProps {
  timeframe: '1D' | '5D' | '1W' | '1M' | '3M' | '1Y' | 'ALL'
}

const generateMAData = (timeframe: string) => {
  const dataPoints: Record<string, number> = {
    '1D': 24,
    '5D': 30,
    '1W': 7,
    '1M': 30,
    '3M': 63,
    '1Y': 252,
    'ALL': 500,
  }
  
  const count = dataPoints[timeframe] || 30
  return Array.from({ length: count }, (_, i) => ({
    day: `Day ${i + 1}`,
    price: 150 + Math.random() * 30,
    ma5: 157 + Math.random() * 15,
    ma20: 158 + Math.random() * 12,
    ma50: 159 + Math.random() * 10,
  }))
}

export default function MovingAverageChart({ timeframe }: MovingAverageChartProps) {
  const data = generateMAData(timeframe)

  return (
    <div className="premium-card rounded-2xl p-6 border border-cyan-500/20">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-transparent bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text mb-2">
          Moving Averages
        </h3>
        <p className="text-xs text-foreground/60">{timeframe} short, medium, and long-term trend analysis</p>
      </div>

      <div className="w-full h-64 bg-gradient-to-br from-slate-900/50 to-cyan-900/20 rounded-xl p-4 border border-slate-700/30">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.2)" />
            <XAxis dataKey="day" stroke="rgba(148, 163, 184, 0.5)" style={{ fontSize: '11px' }} />
            <YAxis stroke="rgba(148, 163, 184, 0.5)" style={{ fontSize: '11px' }} />
            <Tooltip contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.95)', border: '1px solid rgba(34, 211, 238, 0.5)', borderRadius: '8px' }} />
            <Legend />
            <Line dataKey="price" stroke="#fbbf24" dot={false} strokeWidth={3} name="Price" strokeLinecap="round" />
            <Line dataKey="ma5" stroke="#22d3ee" dot={false} strokeWidth={2.5} name="MA(5)" strokeLinecap="round" />
            <Line dataKey="ma20" stroke="#a78bfa" dot={false} strokeWidth={2.5} name="MA(20)" strokeLinecap="round" />
            <Line dataKey="ma50" stroke="#f472b6" dot={false} strokeWidth={2.5} strokeDasharray="5 5" name="MA(50)" strokeLinecap="round" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
