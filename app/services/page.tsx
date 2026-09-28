import Link from 'next/link'
import type { Metadata } from 'next'
import { services } from '@/lib/data'
import Crumbs from '@/components/Crumbs'
import JsonLd from '@/components/JsonLd'
import CTA from '@/components/CTA'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Digital Marketing, Website, App & AI Services',
  description: 'Explore MeriAsk services: SEO, Google Ads, Meta Ads, social media, websites, mobile apps, games, SaaS, automation and AI marketing.',
  alternates: { canonical: '/services' },
}

export default function Services() {
  return (
    <main>
      <section className="pageHero"><div className="container">
        <Crumbs items={[['Services', '/services']]} />
        <h1 className="h1">MeriAsk Services</h1>
        <p className="lead">Explore our complete digital marketing, creative, development, game, SaaS, AI and automation services for business growth.</p>
      </div></section>
      <section className="section"><div className="container"><div className="cards">
        {services.map((s, i) => <Link className="card" href={`/services/${s.slug}`} key={s.slug}><div className="icon">{i + 1}</div><h3>{s.title}</h3><p>{s.items.slice(0, 6).join(' • ')}</p></Link>)}
      </div></div></section>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'ItemList', itemListElement: services.map((s, i) => ({ '@type': 'ListItem', position: i + 1, name: s.title, url: `${SITE.url}/services/${s.slug}` })) }} />
      <CTA />
    </main>
  )
}
