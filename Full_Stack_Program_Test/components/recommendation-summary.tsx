interface StockAnalysis {
  currentPrice: number
  targetPrice: number
  stopLoss: number
  timeframe: string
}

interface RecommendationSummaryProps {
  analysis: StockAnalysis
}

export default function RecommendationSummary({ analysis }: RecommendationSummaryProps) {
  return (
    <div className="premium-card rounded-xl p-6">
      <h3 className="text-lg font-semibold text-foreground mb-4">Recommendation Summary</h3>
      <div className="space-y-3">
        <div className="flex justify-between items-center py-2 border-b border-slate-700/50">
          <span className="text-muted-foreground">Current Price</span>
          <span className="font-semibold text-foreground">${analysis.currentPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center py-2 border-b border-slate-700/50">
          <span className="text-muted-foreground">AI Target Price</span>
          <span className="font-semibold text-green-400">${analysis.targetPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center py-2 border-b border-slate-700/50">
          <span className="text-muted-foreground">Stop-Loss Price</span>
          <span className="font-semibold text-red-400">${analysis.stopLoss.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center py-2">
          <span className="text-muted-foreground">Recommended Timeframe</span>
          <span className="font-semibold text-foreground">{analysis.timeframe}</span>
        </div>
      </div>
      <div className="mt-4 p-3 bg-accent/10 rounded-lg border border-accent/20">
        <p className="text-sm text-accent-foreground">
          Potential Upside: {(((analysis.targetPrice - analysis.currentPrice) / analysis.currentPrice) * 100).toFixed(1)}%
        </p>
      </div>
    </div>
  )
}
