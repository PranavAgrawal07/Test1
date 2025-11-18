interface TechnicalIndicatorsProps {
  selectedIndicators: string[]
  onToggle: (indicator: string) => void
}

export default function TechnicalIndicators({
  selectedIndicators,
  onToggle,
}: TechnicalIndicatorsProps) {
  const indicators = ['MA', 'RSI', 'MACD']

  return (
    <div className="mb-4 flex gap-2 flex-wrap">
      <p className="text-sm text-muted-foreground w-full">Technical Indicators:</p>
      {indicators.map((indicator) => (
        <button
          key={indicator}
          onClick={() => onToggle(indicator)}
          className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
            selectedIndicators.includes(indicator)
              ? 'bg-accent/30 border-accent text-accent-foreground'
              : 'bg-muted/30 border-slate-700/50 text-muted-foreground hover:border-accent/50'
          }`}
        >
          {indicator}
        </button>
      ))}
    </div>
  )
}
