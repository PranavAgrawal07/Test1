'use client'

import { useState } from 'react'

interface StockAnalysis {
  ticker: string
  recommendation: 'BUY' | 'HOLD' | 'SELL'
  currentPrice: number
  targetPrice: number
  stopLoss: number
  timeframe: string
}

interface AiRecommendationTabProps {
  analysis: StockAnalysis
}

export default function AiRecommendationTab({ analysis }: AiRecommendationTabProps) {
  const [activeTab, setActiveTab] = useState('recommendation')

  const relatedArticles = [
    {
      title: 'Latest Market Analysis',
      url: `https://news.google.com/search?q=${analysis.ticker}+stock+analysis`,
    },
    {
      title: 'Recent News & Updates',
      url: `https://news.google.com/search?q=${analysis.ticker}+company+news`,
    },
    {
      title: 'Earnings & Reports',
      url: `https://news.google.com/search?q=${analysis.ticker}+earnings+report`,
    },
  ]

  const getRecommendationColor = (rec: string) => {
    switch (rec) {
      case 'BUY':
        return 'from-emerald-500/40 via-green-500/30 to-teal-500/20 text-emerald-100 border-emerald-500/50 shadow-2xl shadow-emerald-500/30'
      case 'SELL':
        return 'from-red-500/40 via-rose-500/30 to-pink-500/20 text-red-100 border-red-500/50 shadow-2xl shadow-red-500/30'
      case 'HOLD':
        return 'from-amber-500/40 via-yellow-500/30 to-orange-500/20 text-amber-100 border-amber-500/50 shadow-2xl shadow-amber-500/30'
      default:
        return ''
    }
  }

  const getTabColor = (tab: string) => {
    switch (tab) {
      case 'recommendation':
        return activeTab === tab
          ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/10 text-cyan-300 border-b-2 border-cyan-400'
          : 'text-cyan-300/50 hover:text-cyan-300'
      case 'summary':
        return activeTab === tab
          ? 'bg-gradient-to-r from-emerald-500/20 to-green-500/10 text-emerald-300 border-b-2 border-emerald-400'
          : 'text-emerald-300/50 hover:text-emerald-300'
      default:
        return ''
    }
  }

  return (
    <div className="premium-card rounded-2xl overflow-hidden border border-cyan-500/20">
      <div className="flex border-b border-slate-700/50 bg-gradient-to-r from-slate-900/50 to-blue-900/30">
        <button
          onClick={() => setActiveTab('recommendation')}
          className={`flex-1 px-6 py-4 font-bold transition-all duration-300 text-sm uppercase tracking-wide ${getTabColor(
            'recommendation'
          )}`}
        >
          🎯 AI Recommendation
        </button>
        <button
          onClick={() => setActiveTab('summary')}
          className={`flex-1 px-6 py-4 font-bold transition-all duration-300 text-sm uppercase tracking-wide ${getTabColor(
            'summary'
          )}`}
        >
          📊 Summary
        </button>
      </div>

      {/* Content */}
      <div className="p-8">
        {activeTab === 'recommendation' && (
          <div className="space-y-6">
            <div>
              <p className="text-cyan-300/70 text-xs font-bold tracking-widest uppercase mb-4">Ticker Symbol</p>
              <h2 className="text-6xl font-black text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text">
                {analysis.ticker}
              </h2>
            </div>

            <div>
              <p className="text-cyan-300/70 text-xs font-bold tracking-widest uppercase mb-4">Recommendation</p>
              <div
                className={`px-8 py-6 rounded-xl border bg-gradient-to-br ${getRecommendationColor(
                  analysis.recommendation
                )} font-bold text-center text-3xl backdrop-blur-sm transition-all duration-300 hover:scale-105`}
              >
                {analysis.recommendation === 'BUY' && '🟢'}
                {analysis.recommendation === 'SELL' && '🔴'}
                {analysis.recommendation === 'HOLD' && '🟡'} {analysis.recommendation}
              </div>
            </div>

            <div className="pt-4">
              <p className="text-cyan-300/70 text-xs font-bold tracking-widest uppercase mb-3">Recommendation Details</p>
              <p className="text-sm text-foreground/80 leading-relaxed">
                {analysis.recommendation === 'BUY' &&
                  'Strong bullish signals with positive momentum. Consider entering on dips. Technical indicators align with fundamentals.'}
                {analysis.recommendation === 'SELL' &&
                  'Bearish indicators suggest downward pressure. Consider taking profits. Risk/reward ratio favors selling.'}
                {analysis.recommendation === 'HOLD' &&
                  'Mixed signals warrant a wait-and-see approach. Monitor key support levels. Potential catalyst approaching.'}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-700/50">
              <p className="text-cyan-300/70 text-xs font-bold tracking-widest uppercase mb-3">Related Articles</p>
              <div className="space-y-2">
                {relatedArticles.map((article, idx) => (
                  <a
                    key={idx}
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-400/50 transition-all group"
                  >
                    <span className="text-sm text-cyan-300 group-hover:text-cyan-200">{article.title}</span>
                    <svg
                      className="w-4 h-4 text-cyan-500/60 group-hover:text-cyan-400 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'summary' && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4 hover:bg-cyan-500/15 transition-colors">
                <p className="text-cyan-300/70 text-xs font-bold uppercase mb-2">Current Price</p>
                <p className="text-2xl font-bold text-cyan-300">${analysis.currentPrice.toFixed(2)}</p>
              </div>
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4 hover:bg-emerald-500/15 transition-colors">
                <p className="text-emerald-300/70 text-xs font-bold uppercase mb-2">Target Price</p>
                <p className="text-2xl font-bold text-emerald-400">${analysis.targetPrice.toFixed(2)}</p>
              </div>
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 hover:bg-red-500/15 transition-colors">
                <p className="text-red-300/70 text-xs font-bold uppercase mb-2">Stop Loss</p>
                <p className="text-2xl font-bold text-red-400">${analysis.stopLoss.toFixed(2)}</p>
              </div>
              <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4 hover:bg-purple-500/15 transition-colors">
                <p className="text-purple-300/70 text-xs font-bold uppercase mb-2">Timeframe</p>
                <p className="text-2xl font-bold text-purple-300">{analysis.timeframe}</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-500/15 to-blue-500/10 border border-cyan-400/30 rounded-lg p-5 mt-6">
              <p className="text-sm font-bold text-cyan-300 mb-2">Potential Upside</p>
              <p className="text-3xl font-black text-transparent bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text">
                {(((analysis.targetPrice - analysis.currentPrice) / analysis.currentPrice) * 100).toFixed(1)}%
              </p>
            </div>

            <div className="pt-4 border-t border-slate-700/50 mt-6">
              <p className="text-emerald-300/70 text-xs font-bold tracking-widest uppercase mb-3">Research Sources</p>
              <div className="space-y-2">
                {relatedArticles.map((article, idx) => (
                  <a
                    key={idx}
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 hover:border-emerald-400/50 transition-all group"
                  >
                    <span className="text-sm text-emerald-300 group-hover:text-emerald-200">{article.title}</span>
                    <svg
                      className="w-4 h-4 text-emerald-500/60 group-hover:text-emerald-400 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
