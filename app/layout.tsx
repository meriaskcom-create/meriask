import './globals.css'
import type { Metadata, Viewport } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import Analytics from '@/components/Analytics'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import ChatBot from '@/components/ChatBot'
import { SITE } from '@/lib/site'

const title = `${SITE.name} - ${SITE.tagline}`

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: title, template: '%s | MeriAsk' },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.founder.name }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website', siteName: SITE.name, locale: 'en_IN', url: SITE.url, title, description: SITE.description,
    images: [{ url: '/meriask-logo.png', width: 512, height: 512, alt: 'MeriAsk logo' }],
  },
  twitter: { card: 'summary', title, description: SITE.description, images: ['/meriask-logo.png'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' } },
}

export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#050507' }

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'ProfessionalService'],
      '@id': `${SITE.url}/#organization`,
      name: SITE.name,
      url: SITE.url,
      logo: `${SITE.url}/meriask-logo.png`,
      image: `${SITE.url}/meriask-logo.png`,
      description: SITE.description,
      email: SITE.email,
      telephone: `+${SITE.phoneRaw}`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: SITE.address.street,
        addressLocality: SITE.address.city,
        addressRegion: SITE.address.region,
        postalCode: SITE.address.postal,
        addressCountry: SITE.address.country,
      },
      areaServed: ['IN', 'Worldwide'],
      foundingDate: SITE.founded,
      founder: { '@id': `${SITE.url}/#founder` },
      sameAs: [...Object.values(SITE.socials), SITE.googleBusiness],
      contactPoint: [{ '@type': 'ContactPoint', telephone: `+${SITE.phoneRaw}`, email: SITE.email, contactType: 'customer support', availableLanguage: ['English', 'Hindi'] }],
    },
    {
      '@type': 'Person',
      '@id': `${SITE.url}/#founder`,
      name: SITE.founder.name,
      jobTitle: 'Founder',
      image: `${SITE.url}${SITE.founder.photo}`,
      worksFor: { '@id': `${SITE.url}/#organization` },
      url: `${SITE.url}/about`,
      sameAs: [SITE.socials.LinkedIn],
    },
    { '@type': 'WebSite', '@id': `${SITE.url}/#website`, url: SITE.url, name: SITE.name, inLanguage: 'en-IN', publisher: { '@id': `${SITE.url}/#organization` } },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <body>
        <Header />
        {children}
        <Footer />
        <WhatsAppFloat />
        <ChatBot />
        <JsonLd data={schema} />
        <Analytics />
      </body>
    </html>
  )
}
