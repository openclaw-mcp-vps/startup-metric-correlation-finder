import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Metric Correlator — Find Hidden Growth Signals',
  description: 'Connect your analytics tools and discover unexpected correlations between metrics that predict growth or churn. Built for Series A-B growth teams.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d65b7397-5e54-4caa-a9dd-6194d1b1e1d7"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
