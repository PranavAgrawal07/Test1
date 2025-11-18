interface StockAnalysis {
  sector: string
  industry: string
  marketCap: string
  peRatio: number
  nextEarnings: string
}

interface FundamentalDataProps {
  analysis: StockAnalysis
}

export default function FundamentalData({ analysis }: FundamentalDataProps) {
  return (
    <div className="premium-card rounded-xl p-6">
      <h3 className="text-lg font-semibold text-foreground mb-4">Fundamental Data</h3>
      <div className="space-y-3">
        <div className="flex justify-between items-center py-2 border-b border-slate-700/50">
          <span className="text-muted-foreground">Sector</span>
          <span className="font-semibold text-foreground">{analysis.sector}</span>
        </div>
        <div className="flex justify-between items-center py-2 border-b border-slate-700/50">
          <span className="text-muted-foreground">Industry</span>
          <span className="font-semibold text-foreground">{analysis.industry}</span>
        </div>
        <div className="flex justify-between items-center py-2 border-b border-slate-700/50">
          <span className="text-muted-foreground">Market Cap</span>
          <span className="font-semibold text-foreground">{analysis.marketCap}</span>
        </div>
        <div className="flex justify-between items-center py-2 border-b border-slate-700/50">
          <span className="text-muted-foreground">P/E Ratio</span>
          <span className="font-semibold text-foreground">{analysis.peRatio.toFixed(1)}</span>
        </div>
        <div className="flex justify-between items-center py-2">
          <span className="text-muted-foreground">Next Earnings</span>
          <span className="font-semibold text-foreground">{analysis.nextEarnings}</span>
        </div>
      </div>
    </div>
  )
}
