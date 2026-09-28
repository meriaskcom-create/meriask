import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Free Business Growth Consultation',
  description: 'Book a free consultation with MeriAsk and get a clear plan for leads, sales, branding, websites, apps, automation and AI.',
  alternates: { canonical: '/free-consultation' },
}
export default function Layout({ children }: { children: React.ReactNode }) { return children }
