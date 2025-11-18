'use client'

const stocks = [
  { ticker: 'AAPL', price: 189.45, change: 2.5 },
  { ticker: 'MSFT', price: 417.88, change: 1.8 },
  { ticker: 'GOOGL', price: 180.25, change: -0.5 },
  { ticker: 'AMZN', price: 214.15, change: 3.2 },
  { ticker: 'TSLA', price: 242.84, change: -1.2 },
  { ticker: 'NVDA', price: 136.45, change: 4.1 },
  { ticker: 'META', price: 573.45, change: 2.9 },
  { ticker: 'NFLX', price: 298.65, change: 1.5 },
]

export default function TickerTape() {
  return (
    <div className="w-full bg-gradient-to-r from-blue-950/90 via-purple-950/80 to-blue-950/90 border-b border-cyan-500/30 overflow-hidden backdrop-blur-xl relative">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent pointer-events-none"></div>
      <div className="absolute left-0 top-0 w-1/4 h-full bg-gradient-to-r from-cyan-500/10 to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 w-1/4 h-full bg-gradient-to-l from-purple-500/10 to-transparent pointer-events-none"></div>

      <div className="flex gap-20 ticker-scroll py-5 px-8 relative z-10">
        {stocks.map((stock, idx) => (
          <div
            key={idx}
            className="flex items-center gap-5 whitespace-nowrap flex-shrink-0 group hover:scale-110 transition-all duration-300 p-3 rounded-lg hover:bg-white/5 backdrop-blur-sm"
          >
            <div className="w-14 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 flex items-center justify-center">
              <span className="text-xs font-bold text-cyan-300">{stock.ticker[0]}</span>
            </div>
            <div>
              <span className="text-sm font-black text-transparent bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text tracking-wide">{stock.ticker}</span>
              <span className="text-xs text-cyan-300/60 block">${stock.price.toFixed(2)}</span>
            </div>
            <div
              className={`text-sm font-bold transition-all duration-300 ${
                stock.change >= 0
                  ? 'text-emerald-400 drop-shadow-lg drop-shadow-emerald-500/50'
                  : 'text-red-400 drop-shadow-lg drop-shadow-red-500/50'
              }`}
            >
              {stock.change >= 0 ? '↑' : '↓'}{Math.abs(stock.change).toFixed(1)}%
            </div>
          </div>
        ))}
        {stocks.map((stock, idx) => (
          <div
            key={`dup-${idx}`}
            className="flex items-center gap-5 whitespace-nowrap flex-shrink-0 group hover:scale-110 transition-all duration-300 p-3 rounded-lg hover:bg-white/5 backdrop-blur-sm"
          >
            <div className="w-14 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 flex items-center justify-center">
              <span className="text-xs font-bold text-cyan-300">{stock.ticker[0]}</span>
            </div>
            <div>
              <span className="text-sm font-black text-transparent bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text tracking-wide">{stock.ticker}</span>
              <span className="text-xs text-cyan-300/60 block">${stock.price.toFixed(2)}</span>
            </div>
            <div
              className={`text-sm font-bold transition-all duration-300 ${
                stock.change >= 0
                  ? 'text-emerald-400 drop-shadow-lg drop-shadow-emerald-500/50'
                  : 'text-red-400 drop-shadow-lg drop-shadow-red-500/50'
              }`}
            >
              {stock.change >= 0 ? '↑' : '↓'}{Math.abs(stock.change).toFixed(1)}%
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
