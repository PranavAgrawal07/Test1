'use client'

interface StockAnalysis {
  ticker: string
  recommendation: 'BUY' | 'HOLD' | 'SELL'
}

interface RecommendationHeaderProps {
  analysis: StockAnalysis
}

export default function RecommendationHeader({ analysis }: RecommendationHeaderProps) {
  const getRecommendationColor = (rec: string) => {
    switch (rec) {
      case 'BUY':
        return 'bg-gradient-to-br from-emerald-500/30 via-green-500/20 to-teal-500/10 text-emerald-200 border-emerald-500/40 shadow-2xl shadow-emerald-500/20 hover:shadow-emerald-500/40'
      case 'SELL':
        return 'bg-gradient-to-br from-red-500/30 via-rose-500/20 to-pink-500/10 text-red-200 border-red-500/40 shadow-2xl shadow-red-500/20 hover:shadow-red-500/40'
      case 'HOLD':
        return 'bg-gradient-to-br from-amber-500/30 via-yellow-500/20 to-orange-500/10 text-amber-200 border-amber-500/40 shadow-2xl shadow-amber-500/20 hover:shadow-amber-500/40'
      default:
        return ''
    }
  }

  return (
    <div className="bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-blue-900/10 backdrop-blur-2xl border border-blue-500/25 rounded-2xl p-8 hover:border-blue-400/40 hover:from-blue-900/40 hover:via-purple-900/30 transition-all duration-500 shadow-2xl hover:shadow-3xl">
      <p className="text-blue-300/70 text-xs mb-3 font-bold tracking-widest uppercase letter-spacing">AI Recommendation</p>
      <h2 className="text-6xl font-black text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text mb-8 drop-shadow-lg">{analysis.ticker}</h2>
      <div className={`px-8 py-5 rounded-xl border ${getRecommendationColor(analysis.recommendation)} font-bold text-center text-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:brightness-110`}>
        {analysis.recommendation}
      </div>
    </div>
  )
}
