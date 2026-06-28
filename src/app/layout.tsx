import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Agus Wikamto | Senior DevOps Engineer',
  description: 'Senior DevOps Engineer, Platform Engineer, and Backend Engineer specializing in scalable cloud infrastructure, high availability systems, and production-grade engineering.',
  keywords: ['DevOps', 'Platform Engineering', 'Backend Engineering', 'AWS', 'Kubernetes', 'Cloud Infrastructure'],
  authors: [{ name: 'Agus Wikamto' }],
  openGraph: {
    title: 'Agus Wikamto | Senior DevOps Engineer',
    description: 'Building scalable backend systems and cloud infrastructure.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  )
}