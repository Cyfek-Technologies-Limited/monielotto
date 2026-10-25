import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Baloo_2 } from 'next/font/google'
import './globals.css'

const baloo = Baloo_2({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-baloo',
})

export const metadata: Metadata = {
  title: 'Play Online Lottery & Instant Games | NairaLuck',
  description:
    'Play draw games and instant-win games online. Tickets from ₦5, draws every day, and big jackpots every week.',
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0b3b33',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${baloo.variable} light`}>
      <body className="bg-white font-sans text-brand-ink antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
