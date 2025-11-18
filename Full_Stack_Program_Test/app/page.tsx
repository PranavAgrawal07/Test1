'use client'

import { useState, useEffect } from 'react'
import TickerTape from '@/components/ticker-tape'
import DashboardPanel from '@/components/dashboard-panel'
import AiRecommendationTab from '@/components/ai-recommendation-tab'
import ConfidenceSpeedometer from '@/components/confidence-speedometer'
import FundamentalData from '@/components/fundamental-data'
import CandlestickChart from '@/components/candlestick-chart'
import TechnicalIndicators from '@/components/technical-indicators'
import AiReasoningPanel from '@/components/ai-reasoning-panel'
import NewsTrendChart from '@/components/news-trend-chart'
import NewsSourcesList from '@/components/news-sources-list'
import FeedbackMechanism from '@/components/feedback-mechanism'
import VolumeChart from '@/components/volume-chart'
import MomentumChart from '@/components/momentum-chart'
import MovingAverageChart from '@/components/moving-average-chart'

interface StockAnalysis {
  ticker: string
  recommendation: 'BUY' | 'HOLD' | 'SELL'
  aiConfidence: number
  currentPrice: number
  targetPrice: number
  stopLoss: number
  timeframe: string
  sector: string
  industry: string
  marketCap: string
  peRatio: number
  nextEarnings: string
}

const mockAnalysis: StockAnalysis = {
  ticker: 'AAPL',
  recommendation: 'BUY',
  aiConfidence: 78,
  currentPrice: 189.45,
  targetPrice: 215.00,
  stopLoss: 165.00,
  timeframe: '3-6 Months',
  sector: 'Technology',
  industry: 'Consumer Electronics',
  marketCap: '$2.8T',
  peRatio: 28.5,
  nextEarnings: 'Jan 29, 2025',
}

export default function Home() {
  const [analysis, setAnalysis] = useState<StockAnalysis>(mockAnalysis)
  const [searchTicker, setSearchTicker] = useState('')
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split('T')[0])
  const [selectedIndicators, setSelectedIndicators] = useState<string[]>(['MA', 'RSI'])
  const [chartTimeframe, setChartTimeframe] = useState<'1D' | '5D' | '1W' | '1M' | '3M' | '1Y' | 'ALL'>('1M')

  const handleAnalyze = (ticker: string) => {
    if (ticker.trim()) {
      setAnalysis({
        ...analysis,
        ticker: ticker.toUpperCase(),
      })
      setSearchTicker('')
    }
  }

  const handleIndicatorToggle = (indicator: string) => {
    setSelectedIndicators((prev) =>
      prev.includes(indicator)
        ? prev.filter((i) => i !== indicator)
        : [...prev, indicator]
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-foreground relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        {/* Premium glass overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.01] to-transparent opacity-30"></div>
        
        {/* Refined animated gradient orbs */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-cyan-500/15 rounded-full mix-blend-screen blur-3xl orb-1"></div>
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-blue-600/12 rounded-full mix-blend-screen blur-3xl orb-2"></div>
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-indigo-500/8 rounded-full mix-blend-screen blur-3xl orb-3" style={{ transform: 'translate(-50%, -50%)' }}></div>
        
        {/* Subtle accent orbs */}
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-purple-500/5 rounded-full mix-blend-screen blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
      </div>

      <div className="relative z-10">
        <TickerTape />

        <div className="w-full max-w-7xl mx-auto px-4 py-12">
          <DashboardPanel
            searchTicker={searchTicker}
            onSearchChange={setSearchTicker}
            onAnalyze={handleAnalyze}
            selectedDate={selectedDate}
            onDateChange={setSelectedDate}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-2">
              <AiRecommendationTab analysis={analysis} />
            </div>
            <div className="lg:col-span-1">
              <ConfidenceSpeedometer confidence={analysis.aiConfidence} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <FundamentalData analysis={analysis} />
          </div>

          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-foreground">Chart Timeframe</h3>
              <div className="flex gap-2 flex-wrap justify-end">
                {(['1D', '5D', '1W', '1M', '3M', '1Y', 'ALL'] as const).map((tf) => (
                  <button
                    key={tf}
                    onClick={() => setChartTimeframe(tf)}
                    className={`px-3 py-1.5 rounded-lg border text-xs font-bold transition-all ${
                      chartTimeframe === tf
                        ? 'bg-gradient-to-r from-cyan-500/40 to-blue-500/40 border-cyan-400/60 text-cyan-200 shadow-lg shadow-cyan-500/20'
                        : 'bg-slate-800/40 border-slate-600/50 text-slate-300 hover:border-cyan-400/40 hover:text-cyan-200'
                    }`}
                  >
                    {tf}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-8">
            <TechnicalIndicators
              selectedIndicators={selectedIndicators}
              onToggle={handleIndicatorToggle}
            />
            <CandlestickChart selectedIndicators={selectedIndicators} timeframe={chartTimeframe} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <VolumeChart timeframe={chartTimeframe} />
            <MomentumChart selectedIndicators={selectedIndicators} timeframe={chartTimeframe} />
          </div>

          <div className="mb-8">
            <MovingAverageChart timeframe={chartTimeframe} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <AiReasoningPanel analysis={analysis} />
            </div>
            <div className="lg:col-span-2">
              <NewsTrendChart />
              <NewsSourcesList className="mt-6" />
            </div>
          </div>

          <FeedbackMechanism />
        </div>
      </div>
    </div>
  )
}
