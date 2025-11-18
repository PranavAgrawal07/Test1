'use client'

import { useState } from 'react'
import { Search, Calendar } from 'lucide-react'

interface DashboardPanelProps {
  searchTicker: string
  onSearchChange: (value: string) => void
  onAnalyze: (ticker: string) => void
  selectedDate: string
  onDateChange: (date: string) => void
}

export default function DashboardPanel({
  searchTicker,
  onSearchChange,
  onAnalyze,
  selectedDate,
  onDateChange,
}: DashboardPanelProps) {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onAnalyze(searchTicker)
    }
  }

  return (
    <div className="mb-10 backdrop-blur-2xl bg-gradient-to-br from-blue-900/15 to-purple-900/10 border border-blue-500/20 rounded-2xl p-8 hover:border-blue-400/30 transition-all duration-500 shadow-2xl">
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        {/* Search Input with enhanced styling */}
        <div className="flex-1 relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300"></div>
          <div className="relative flex items-center">
            <Search className="absolute left-4 text-cyan-400/60 w-5 h-5 pointer-events-none" />
            <input
              type="text"
              placeholder="Search ticker (e.g., AAPL, MSFT...)"
              value={searchTicker}
              onChange={(e) => onSearchChange(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full pl-12 pr-4 py-3 bg-gradient-to-r from-blue-950/40 to-purple-950/30 border border-blue-400/30 rounded-xl text-foreground placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/30 transition-all duration-300 backdrop-blur-sm"
            />
          </div>
        </div>

        {/* Calendar Date Picker */}
        <div className="relative group">
          <button
            onClick={() => setIsCalendarOpen(!isCalendarOpen)}
            className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-cyan-500/30 to-blue-500/20 border border-cyan-400/40 rounded-xl text-cyan-300 hover:from-cyan-500/40 hover:to-blue-500/30 hover:border-cyan-400/60 transition-all duration-300 backdrop-blur-sm font-medium"
          >
            <Calendar className="w-4 h-4" />
            <span className="hidden sm:inline text-sm">{new Date(selectedDate).toLocaleDateString()}</span>
            <span className="sm:hidden text-sm">📅</span>
          </button>
          
          {isCalendarOpen && (
            <div className="absolute right-0 mt-2 p-4 bg-gradient-to-br from-blue-900/50 to-purple-900/40 border border-blue-500/30 rounded-xl backdrop-blur-2xl shadow-2xl z-50">
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => {
                  onDateChange(e.target.value)
                  setIsCalendarOpen(false)
                }}
                className="px-3 py-2 bg-blue-950/60 border border-blue-400/30 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
              />
            </div>
          )}
        </div>

        {/* Analyze Button */}
        <button
          onClick={() => onAnalyze(searchTicker)}
          className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/30 backdrop-blur-sm transform hover:scale-105 active:scale-95"
        >
          Analyze
        </button>
      </div>

      {/* Date display info */}
      <div className="mt-4 text-xs text-blue-300/60 font-medium">
        📊 Analyzing data for {new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
      </div>
    </div>
  )
}
