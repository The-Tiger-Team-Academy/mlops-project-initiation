import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'KoratXtech - Innovation Hub of Isaan',
  description: 'Empowering innovation and technology in the heart of Northeastern Thailand',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen bg-gradient-to-b from-[#1a1a2e] to-[#16213e]">
          {children}
        </main>
      </body>
    </html>
  )
} 