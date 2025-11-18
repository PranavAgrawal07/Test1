interface StockAnalysis {
  ticker: string
  recommendation: 'BUY' | 'HOLD' | 'SELL'
}

interface AiReasoningPanelProps {
  analysis: StockAnalysis
}

export default function AiReasoningPanel({ analysis }: AiReasoningPanelProps) {
  return (
    <div className="premium-card rounded-xl p-6 max-h-96 overflow-y-auto">
      <h3 className="text-lg font-semibold text-foreground mb-4">AI Decision Logic</h3>
      
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-foreground mb-2">Technical Strength</h4>
          <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
            <li>Moving averages show {analysis.recommendation === 'BUY' ? 'bullish' : 'bearish'} crossover</li>
            <li>RSI indicates {analysis.recommendation === 'BUY' ? 'upward momentum' : 'downward pressure'}</li>
            <li>Support level maintained above 50-day moving average</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-2">Fundamental Health</h4>
          <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
            <li>Strong revenue growth in recent quarters</li>
            <li>Healthy profit margins relative to sector</li>
            <li>Solid balance sheet with low debt-to-equity</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-2">News Sentiment</h4>
          <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
            <li>Positive analyst coverage and upgrades</li>
            <li>Market sentiment aligns with fundamentals</li>
            <li>No major negative catalysts identified</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
