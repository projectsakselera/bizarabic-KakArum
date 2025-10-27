import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BizArabic for ESQ Team - Training Dashboard',
  description: 'Speak Their Language, Understand Their Culture, Build Bridges of Trust',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
