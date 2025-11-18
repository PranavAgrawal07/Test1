'use client'

import { useState } from 'react'

export default function FeedbackMechanism() {
  const [feedback, setFeedback] = useState<'positive' | 'negative' | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const handleFeedback = (type: 'positive' | 'negative') => {
    setFeedback(type)
    setSubmitted(true)
    setTimeout(() => {
      setFeedback(null)
      setSubmitted(false)
    }, 2000)
  }

  return (
    <div className="mt-12 flex justify-center">
      <div className="bg-muted/20 border border-slate-700/50 rounded-lg px-6 py-4 flex items-center gap-4">
        <span className="text-sm text-muted-foreground">Was this analysis helpful?</span>
        <div className="flex gap-2">
          <button
            onClick={() => handleFeedback('positive')}
            disabled={submitted}
            className={`p-2 rounded-lg transition-all ${
              submitted && feedback === 'positive'
                ? 'bg-green-500/30 text-green-400'
                : 'hover:bg-muted/50 text-muted-foreground hover:text-foreground'
            }`}
            title="Thumbs Up"
          >
            👍
          </button>
          <button
            onClick={() => handleFeedback('negative')}
            disabled={submitted}
            className={`p-2 rounded-lg transition-all ${
              submitted && feedback === 'negative'
                ? 'bg-red-500/30 text-red-400'
                : 'hover:bg-muted/50 text-muted-foreground hover:text-foreground'
            }`}
            title="Thumbs Down"
          >
            👎
          </button>
        </div>
        {submitted && (
          <span className="text-xs text-muted-foreground">Thank you for your feedback!</span>
        )}
      </div>
    </div>
  )
}
