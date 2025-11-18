'use client'

interface ConfidenceSpeedometerProps {
  confidence: number
}

export default function ConfidenceSpeedometer({ confidence }: ConfidenceSpeedometerProps) {
  const clampedConfidence = Math.min(Math.max(confidence, 0), 100)
  const needleRotation = -90 + (clampedConfidence / 100) * 180

  const getConfidenceColor = (conf: number) => {
    if (conf >= 80) return '#10b981'
    if (conf >= 60) return '#f59e0b'
    if (conf >= 40) return '#f97316'
    return '#ef4444'
  }

  const getConfidenceLabel = (conf: number) => {
    if (conf >= 80) return 'Excellent'
    if (conf >= 60) return 'Strong'
    if (conf >= 40) return 'Moderate'
    return 'Weak'
  }

  const needleColor = getConfidenceColor(clampedConfidence)

  return (
    <div className="premium-card rounded-2xl p-8 flex flex-col items-center">
      <p className="text-cyan-300/80 text-xs font-bold tracking-widest uppercase mb-6">AI Confidence Gauge</p>
      
      <div className="relative w-64 h-40 mb-8">
        <svg viewBox="0 0 260 150" className="w-full h-full drop-shadow-2xl">
          {/* Outer gauge arc */}
          <path
            d="M 30 130 A 100 100 0 0 1 230 130"
            stroke="rgba(100, 160, 210, 0.1)"
            strokeWidth="18"
            fill="none"
            strokeLinecap="round"
          />
          
          {/* Color zones with refined gradients */}
          <path
            d="M 30 130 A 100 100 0 0 1 80 32"
            stroke="#ef4444"
            strokeWidth="18"
            fill="none"
            strokeLinecap="round"
            opacity="0.95"
            filter="drop-shadow(0 0 4px rgba(239, 68, 68, 0.6))"
          />
          <path
            d="M 80 32 A 100 100 0 0 1 130 12"
            stroke="#f97316"
            strokeWidth="18"
            fill="none"
            strokeLinecap="round"
            opacity="0.98"
            filter="drop-shadow(0 0 5px rgba(249, 115, 22, 0.6))"
          />
          <path
            d="M 130 12 A 100 100 0 0 1 180 32"
            stroke="#f59e0b"
            strokeWidth="18"
            fill="none"
            strokeLinecap="round"
            opacity="1"
            filter="drop-shadow(0 0 6px rgba(245, 158, 11, 0.7))"
          />
          <path
            d="M 180 32 A 100 100 0 0 1 230 130"
            stroke="#10b981"
            strokeWidth="18"
            fill="none"
            strokeLinecap="round"
            opacity="1"
            filter="drop-shadow(0 0 7px rgba(16, 185, 129, 0.8))"
          />
          
          {/* Premium needle with enhanced glow */}
          <g transform={`translate(130, 130) rotate(${needleRotation})`} style={{ transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}>
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="-90"
              stroke={needleColor}
              strokeWidth="6"
              strokeLinecap="round"
              filter="drop-shadow(0 0 10px rgba(0,0,0,0.7)) drop-shadow(0 0 6px currentColor)"
            />
          </g>
          
          {/* Center pivot with premium styling */}
          <circle cx="130" cy="130" r="12" fill={needleColor} opacity="0.95" filter="drop-shadow(0 0 12px rgba(0,0,0,0.6))" />
          <circle cx="130" cy="130" r="8" fill="white" opacity="0.98" />
        </svg>
      </div>

      <div className="text-center w-full">
        <p className="text-5xl font-black bg-gradient-to-r from-cyan-300 via-blue-300 to-emerald-300 bg-clip-text text-transparent mb-3">{clampedConfidence}%</p>
        <div className={`inline-block px-6 py-2.5 rounded-lg backdrop-blur-sm border font-bold text-sm transition-all duration-300 ${
          clampedConfidence >= 80 ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400/50 shadow-lg shadow-emerald-500/25' :
          clampedConfidence >= 60 ? 'bg-amber-500/20 text-amber-200 border-amber-400/50 shadow-lg shadow-amber-500/25' :
          clampedConfidence >= 40 ? 'bg-orange-500/20 text-orange-200 border-orange-400/50 shadow-lg shadow-orange-500/25' :
          'bg-red-500/20 text-red-300 border-red-400/50 shadow-lg shadow-red-500/25'
        }`}>
          {getConfidenceLabel(clampedConfidence)} Confidence
        </div>
      </div>
    </div>
  )
}
