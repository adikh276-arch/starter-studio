import type { Metadata } from 'next'
import '../src/index.css'
import ClientProviders from './ClientProviders'
import '@/i18n/config'

export const metadata: Metadata = {
  title: 'Women Wellness SelfCare',
  description: 'A women\'s health app offering self-care resources and support modules.',
  authors: [{ name: 'MantraCare' }],
  openGraph: {
    title: 'Women Wellness SelfCare',
    description: 'A women\'s health app offering self-care resources and support modules.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Women Wellness SelfCare',
    description: 'A women\'s health app offering self-care resources and support modules.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  )
}
