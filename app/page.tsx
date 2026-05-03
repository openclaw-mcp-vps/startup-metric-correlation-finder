export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium tracking-wide uppercase">
          For Growth Teams &amp; Founders
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Find hidden correlations<br />
          <span className="text-[#58a6ff]">between your growth metrics</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Connect Google Analytics, Mixpanel, and Amplitude. Our ML engine surfaces non-obvious patterns that predict growth or churn — before your competitors notice them.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start for $49/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required for 14-day trial. Cancel anytime.</p>

        {/* Feature grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { title: 'Multi-source ingestion', body: 'Pull data from GA4, Mixpanel, and Amplitude in minutes with OAuth.' },
            { title: 'Correlation engine', body: 'Pearson, Spearman, and Granger causality run automatically on every metric pair.' },
            { title: 'Churn signals', body: 'Get alerted when leading indicators shift before revenue is impacted.' }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8">
          <div className="flex items-end gap-2 mb-1">
            <span className="text-4xl font-bold text-white">$49</span>
            <span className="text-[#8b949e] mb-1">/month</span>
          </div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to find your growth levers.</p>
          <ul className="space-y-3 mb-8">
            {[
              'Connect up to 5 analytics sources',
              'Unlimited metric correlation scans',
              'Weekly automated insight reports',
              'Slack &amp; email alerts',
              'Priority support'
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block text-center bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Get started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: 'Which analytics platforms are supported?',
              a: 'We currently support Google Analytics 4, Mixpanel, and Amplitude. More integrations are on the roadmap.'
            },
            {
              q: 'How does the correlation engine work?',
              a: 'We run Pearson and Spearman correlation plus Granger causality tests across all metric pairs in your connected sources, then surface only statistically significant findings.'
            },
            {
              q: 'Is my data secure?',
              a: 'All data is encrypted in transit and at rest. We use read-only OAuth scopes and never store raw event data — only aggregated metric values.'
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} Metric Correlator. All rights reserved.
      </footer>
    </main>
  )
}
