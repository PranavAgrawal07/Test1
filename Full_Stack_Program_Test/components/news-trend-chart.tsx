export default function NewsTrendChart() {
  return (
    <div className="premium-card rounded-xl p-6">
      <h3 className="text-lg font-semibold text-foreground mb-4">News Sentiment Trend (Last 30 Days)</h3>
      <div className="w-full h-48 bg-muted/20 rounded-lg flex items-center justify-center border border-slate-700/50">
        <svg viewBox="0 0 500 200" className="w-full h-full opacity-50">
          {/* Simple line chart placeholder */}
          <polyline
            points="10,150 50,120 100,90 150,100 200,70 250,80 300,60 350,85 400,70 450,95"
            fill="none"
            stroke="#22c55e"
            strokeWidth="2"
          />
          {/* Grid */}
          <line x1="0" y1="100" x2="500" y2="100" stroke="rgb(107, 114, 128)" strokeWidth="0.5" opacity="0.3" />
        </svg>
      </div>
      <p className="text-xs text-muted-foreground mt-2">Aggregate news sentiment score over time</p>
    </div>
  )
}
