import Link from 'next/link'
import type { Metadata } from 'next'
import { cities } from '@/lib/locations'
import Crumbs from '@/components/Crumbs'
import CTA from '@/components/CTA'

export const metadata: Metadata = {
  title: 'Digital Marketing Agency Serving Cities Across India',
  description: 'MeriAsk is based in Jaipur and serves businesses in Rajasthan, Delhi NCR, Mumbai, Bengaluru, Hyderabad, Pune, Ahmedabad, Surat and Indore.',
  alternates: { canonical: '/locations' },
}

export default function Locations() {
  return (
    <main>
      <section className="pageHero"><div className="container">
        <Crumbs items={[['Locations', '/locations']]} />
        <h1 className="h1">Cities We <span className="grad">Serve</span></h1>
        <p className="lead">MeriAsk is headquartered in Jaipur and works with businesses across India and worldwide, mostly online through video calls, WhatsApp and shared reports.</p>
      </div></section>
      <section className="section"><div className="container"><div className="cards">
        {cities.map(c => <Link className="card" href={`/locations/${c.slug}`} key={c.slug}><h3>{c.name}</h3><p>{c.state}. {c.sectors.slice(0, 3).join(' • ')}</p></Link>)}
      </div></div></section>
      <CTA />
    </main>
  )
}
