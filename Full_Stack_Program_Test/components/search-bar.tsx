interface SearchBarProps {
  value: string
  onChange: (value: string) => void
  onAnalyze: () => void
}

export default function SearchBar({ value, onChange, onAnalyze }: SearchBarProps) {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onAnalyze()
    }
  }

  return (
    <div className="mb-8 flex gap-3">
      <input
        type="text"
        placeholder="Enter stock ticker (e.g., AAPL)"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyPress={handleKeyPress}
        className="flex-1 px-6 py-3 bg-card border border-slate-700/50 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
      />
      <button
        onClick={onAnalyze}
        className="px-8 py-3 bg-gradient-to-r from-accent to-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
      >
        Analyze
      </button>
    </div>
  )
}
