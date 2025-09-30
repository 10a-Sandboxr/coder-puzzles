import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'XML Coder Puzzles',
  description: 'JavaScript puzzles for XML coders',
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