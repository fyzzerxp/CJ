import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import ScrollToTop from "@/components/utils/sroll-to-top"

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ability First Foundation | Supporting People with Disabilities',
  description: 'Ability First Foundation is a non-profit organization dedicated to empowering people with disabilities through education, therapy, mobility support, and employment programs. Join us in building an inclusive world.',
  keywords: ['disability support', 'non-profit', 'accessibility', 'therapy', 'education', 'employment', 'mobility support', 'inclusive'],
  authors: [{ name: 'Ability First Foundation' }],
  openGraph: {
    title: 'Ability First Foundation | Supporting People with Disabilities',
    description: 'Empowering people with disabilities through education, therapy, mobility support, and employment programs.',
    type: 'website',
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: '#2d7a6e',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ScrollToTop/>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
