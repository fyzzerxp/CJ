import React from "react"
import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import ScrollToTop from "@/components/utils/sroll-to-top"
import { Poppins } from "next/font/google";
import WhatsAppFloatingButton from "@/components/whatsapp-floater"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


export const metadata: Metadata = {
  title: 'CJ Support Services| Supporting People with Disabilities',
  description: 'CJ Support Servicesis a  organization dedicated to empowering people with disabilities through education, therapy, mobility support, and employment programs. Join us in building an inclusive world.',
  keywords: ['disability support', 'non-profit', 'accessibility', 'therapy', 'education', 'employment', 'mobility support', 'inclusive'],
  authors: [{ name: 'CJ Support Services' }],
  openGraph: {
    title: 'CJ Support Services | Supporting People with Disabilities',
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
      <body className={`${poppins.className} antialiased`}>
      <WhatsAppFloatingButton />
        <ScrollToTop/>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
