import { services } from '@/lib/data'
import { serviceDetails } from '@/lib/content'
import { SITE } from '@/lib/site'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import CTA from '@/components/CTA'
import FAQ from '@/components/FAQ'
import Crumbs from '@/components/Crumbs'
import JsonLd from '@/components/JsonLd'

type P = { params: Promise<{ slug: string }> }
export function generateStaticParams() { return services.map(s => ({ slug: s.slug })) }

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { slug } = await params
  const s = services.find(x => x.slug === slug)
  if (!s) return {}
  const d = serviceDetails[slug]
  const description = d ? d.summary.slice(0, 158).replace(/\s+\S*$/, '') + '.' : `${s.title} by MeriAsk.`
  return {
    title: `${s.title} Services in India`,
    description,
    alternates: { canonical: `/services/${slug}` },
    openGraph: { title: `${s.title} Services | MeriAsk`, description, url: `${SITE.url}/services/${slug}`, type: 'website' },
  }
}

const process = ['Business analysis and goal setting', 'Strategy and funnel planning', 'Creative, content or technical setup', 'Launch, tracking and optimization', 'Reporting and next-step growth plan']

export default async function ServicePage({ params }: P) {
  const { slug } = await params
  const s = services.find(x => x.slug === slug)
  if (!s) notFound()
  const d = serviceDetails[slug]
  const related = services.filter(x => x.slug !== slug).slice(0, 4)
  return (
    <main>
      <section className="pageHero"><div className="container">
        <Crumbs items={[['Services', '/services'], [s.title, `/services/${slug}`]]} />
        <h1 className="h1"><span className="grad">{s.title}</span></h1>
        <p className="lead">{d.summary}</p>
        <div className="heroBtns"><Link className="btn primary" href={`/free-consultation?service=${encodeURIComponent(s.title)}`}>Get Free Consultation</Link><Link className="btn" href="/contact">Talk To Us</Link></div>
      </div></section>
      <section className="section"><div className="container serviceLayout">
        <aside className="side">{services.map(x => <Link href={`/services/${x.slug}`} key={x.slug}>{x.title}</Link>)}</aside>
        <div>
          <div className="contentBlock">
            <h2>What&apos;s included in {s.title}</h2>
            <p className="sectionLead">Every project is scoped to your business, budget and goals. Typical deliverables include:</p>
            <div className="chips">{s.items.map(item => <span className="chip" key={item}>{item}</span>)}</div>
          </div>
          <div className="contentBlock">
            <h2>Why businesses choose MeriAsk</h2>
            <div className="cards benefitsGrid">
              <div className="card"><h3>Strategy + Technology</h3><p>Marketing, design and development under one team, so your campaigns, website and tools work together.</p></div>
              <div className="card"><h3>Transparent Reporting</h3><p>Clear monthly reports showing what was done, what worked and what happens next.</p></div>
              <div className="card"><h3>Flexible Packages</h3><p>Start small and scale. Monthly and project-based plans that fit your stage.</p></div>
              <div className="card"><h3>Founder-led Support</h3><p>Reach the team directly on WhatsApp, phone or email during working hours ({SITE.hours}).</p></div>
            </div>
          </div>
          <div className="contentBlock">
            <h2>Our process</h2>
            <div className="list">{process.map((p, i) => <div key={p}>{i + 1}. {p}</div>)}</div>
          </div>
          <FAQ items={d.faqs} title={`${s.title} FAQ`} />
          <div className="contentBlock">
            <h2>Related services</h2>
            <div className="chips">{related.map(r => <Link className="chip" href={`/services/${r.slug}`} key={r.slug}>{r.title}</Link>)}</div>
          </div>
        </div>
      </div></section>
      <JsonLd data={{
        '@context': 'https://schema.org', '@type': 'Service',
        name: s.title, serviceType: s.title, description: d.summary,
        provider: { '@id': `${SITE.url}/#organization` }, areaServed: ['IN', 'Worldwide'],
        url: `${SITE.url}/services/${slug}`,
        hasOfferCatalog: { '@type': 'OfferCatalog', name: s.title, itemListElement: s.items.map(i => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: i } })) },
      }} />
      <CTA />
    </main>
  )
}
