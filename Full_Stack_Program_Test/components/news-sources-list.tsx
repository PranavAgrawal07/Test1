'use client'

interface NewsSourcesListProps {
  className?: string
}

export default function NewsSourcesList({ className }: NewsSourcesListProps) {
  const newsItems = [
    {
      headline: 'Tech Giant Reports Record Q4 Earnings Beat',
      source: 'Reuters',
      date: '2 hours ago',
      url: 'https://news.google.com/search?q=tech+earnings+q4+beat',
    },
    {
      headline: 'Analyst Upgrades Target Price to $220',
      source: 'Bloomberg',
      date: '5 hours ago',
      url: 'https://news.google.com/search?q=analyst+upgrade+target+price+220',
    },
    {
      headline: 'New Product Launch Drives Innovation Wave',
      source: 'TechCrunch',
      date: '1 day ago',
      url: 'https://news.google.com/search?q=product+launch+innovation',
    },
    {
      headline: 'Company Expands into Emerging Markets',
      source: 'Financial Times',
      date: '2 days ago',
      url: 'https://news.google.com/search?q=company+emerging+markets+expansion',
    },
    {
      headline: 'Industry Report Shows Market Leadership',
      source: 'MarketWatch',
      date: '3 days ago',
      url: 'https://news.google.com/search?q=industry+report+market+leadership',
    },
  ]

  return (
    <div className={`premium-card rounded-xl p-6 ${className}`}>
      <h3 className="text-lg font-semibold text-foreground mb-4">Source Articles & Data</h3>
      <div className="space-y-3 max-h-64 overflow-y-auto">
        {newsItems.map((item, idx) => (
          <a
            key={idx}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-3 rounded-lg bg-muted/20 hover:bg-muted/40 border border-slate-700/50 hover:border-cyan-500/50 transition-all group"
          >
            <div className="flex items-start gap-2 mb-1">
              <p className="text-sm font-semibold text-foreground group-hover:text-cyan-400 line-clamp-2 flex-1">
                {item.headline}
              </p>
              <svg
                className="w-4 h-4 text-cyan-500/60 group-hover:text-cyan-400 flex-shrink-0 mt-0.5 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-muted-foreground">{item.source}</span>
              <span className="text-xs text-muted-foreground/70">{item.date}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
