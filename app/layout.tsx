import './globals.css'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'MeriAsk - Digital Marketing & Business Growth Agency',
  description: 'MeriAsk helps businesses grow with SEO, Ads, Social Media Marketing, Websites, SaaS Apps, Automation and AI-powered marketing solutions.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><Header />{children}<Footer /></body></html>
}
