'use client'

import { ComposedChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'

interface CandlestickChartProps {
  selectedIndicators: string[]
  timeframe: '1D' | '5D' | '1W' | '1M' | '3M' | '1Y' | 'ALL'
}

const generateCandleData = (timeframe: string) => {
  const dataPoints: Record<string, number> = {
    '1D': 24, // 24 hours
    '5D': 30, // 5 days
    '1W': 7, // 7 days
    '1M': 30, // 30 days
    '3M': 63, // 3 months
    '1Y': 252, // Trading days in a year
    'ALL': 500, // All time
  }
  
  const count = dataPoints[timeframe] || 30
  return Array.from({ length: count }, (_, i) => ({
    time: `${i + 1}`,
    open: 150 + Math.random() * 30,
    close: 155 + Math.random() * 30,
    high: 160 + Math.random() * 30,
    low: 145 + Math.random() * 25,
    volume: Math.floor(Math.random() * 10000000),
    ma20: 157 + Math.random() * 10,
    rsi: 40 + Math.random() * 30,
  }))
}

export default function CandlestickChart({ selectedIndicators, timeframe }: CandlestickChartProps) {
  const data = generateCandleData(timeframe)

  return (
    <div className="premium-card rounded-2xl p-6 border border-cyan-500/20">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-transparent bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text mb-2">
          Price Action & Technical Analysis
        </h3>
        <p className="text-xs text-foreground/60">{timeframe} candlestick chart with selected indicators</p>
      </div>

      <div className="w-full h-96 bg-gradient-to-br from-slate-900/50 to-blue-900/30 rounded-xl p-4 border border-slate-700/30">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
            <defs>
              <linearGradient id="candleGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(52, 211, 153, 0.8)" />
                <stop offset="100%" stopColor="rgba(239, 68, 68, 0.8)" />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.2)" />
            <XAxis dataKey="time" stroke="rgba(148, 163, 184, 0.5)" style={{ fontSize: '12px' }} />
            <YAxis stroke="rgba(148, 163, 184, 0.5)" style={{ fontSize: '12px' }} />
            <Tooltip
              contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.95)', border: '1px solid rgba(34, 211, 238, 0.3)', borderRadius: '8px' }}
              labelStyle={{ color: '#e0f2fe' }}
            />
            <Legend wrapperStyle={{ paddingTop: '20px' }} />

            {/* Candlestick visual representation */}
            <Bar dataKey="volume" fill="url(#candleGradient)" opacity={0.6} yAxisId="right" />
            
            {selectedIndicators.includes('MA') && (
              <Line dataKey="ma20" stroke="#22d3ee" dot={false} strokeWidth={3} name="MA(20)" />
            )}
            
            {selectedIndicators.includes('RSI') && (
              <Line dataKey="rsi" stroke="#d946ef" dot={false} strokeWidth={3} name="RSI" yAxisId="right" />
            )}
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 grid grid-cols-4 gap-3 text-center">
        <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-3">
          <p className="text-xs text-emerald-300/70 uppercase font-bold">Open</p>
          <p className="text-sm font-bold text-emerald-300">$152.45</p>
        </div>
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3">
          <p className="text-xs text-blue-300/70 uppercase font-bold">High</p>
          <p className="text-sm font-bold text-blue-300">$162.78</p>
        </div>
        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
          <p className="text-xs text-red-300/70 uppercase font-bold">Low</p>
          <p className="text-sm font-bold text-red-300">$148.12</p>
        </div>
        <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-3">
          <p className="text-xs text-purple-300/70 uppercase font-bold">Close</p>
          <p className="text-sm font-bold text-purple-300">$159.34</p>
        </div>
      </div>
    </div>
  )
}
