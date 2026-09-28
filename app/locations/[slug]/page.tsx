import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { cities } from '@/lib/locations'
import { services } from '@/lib/data'
import { SITE, fullAddress } from '@/lib/site'
import CTA from '@/components/CTA'
import FAQ from '@/components/FAQ'
import Crumbs from '@/components/Crumbs'
import JsonLd from '@/components/JsonLd'

type P = { params: Promise<{ slug: string }> }
export function generateStaticParams() { return cities.map(c => ({ slug: c.slug })) }

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { slug } = await params
  const c = cities.find(x => x.slug === slug)
  if (!c) return {}
  const description = `${c.intro.split('. ')[0]}. SEO, ads, websites, apps and automation for ${c.name} businesses.`.slice(0, 200)
  return { title: `Digital Marketing Agency for ${c.name} Businesses`, description, alternates: { canonical: `/locations/${slug}` }, openGraph: { title: `MeriAsk for ${c.name} Businesses`, description, url: `${SITE.url}/locations/${slug}` } }
}

export default async function City({ params }: P) {
  const { slug } = await params
  const c = cities.find(x => x.slug === slug)
  if (!c) notFound()
  const home = slug === 'jaipur'
  const nearby = cities.filter(x => x.slug !== slug).slice(0, 5)
  const faqs: [string, string][] = [
    [`Do you work with businesses in ${c.name}?`, home ? `Yes. Our office is in ${c.name}, and we also work online. You can book a call or visit at ${fullAddress}.` : `Yes. MeriAsk is based in Jaipur and works with ${c.name} businesses online through video calls, WhatsApp and shared reports. We do not have an office in ${c.name}.`],
    c.tip,
    ['How much do your plans cost?', 'Monthly growth plans start at ₹4,000, ₹8,000 and ₹15,000 per month. Ad spend is separate. Websites, apps, SaaS and automation are quoted per project.'],
  ]
  return (
    <main>
      <section className="pageHero"><div className="container">
        <Crumbs items={[['Locations', '/locations'], [c.name, `/locations/${slug}`]]} />
        <h1 className="h1">Digital Marketing for <span className="grad">{c.name}</span> Businesses</h1>
        <p className="lead">{c.intro}</p>
        <div className="heroBtns"><Link className="btn primary" href="/book">Book a Free Call</Link><Link className="btn" href="/free-consultation">Get Free Consultation</Link></div>
      </div></section>
      <section className="section"><div className="container">
        <div className="contentBlock"><h2>Industries we help in {c.name}</h2>
          <div className="cards">{c.sectors.map(x => <div className="card" key={x}><h3>{x}</h3></div>)}</div></div>
        <div className="contentBlock"><h2>What tends to work in {c.name}</h2><p className="sectionLead">{c.angle}</p></div>
        <div className="contentBlock"><h2>Services for {c.name} businesses</h2>
          <div className="chips">{services.slice(0, 12).map(s => <Link className="chip" key={s.slug} href={`/services/${s.slug}`}>{s.title}</Link>)}</div></div>
        <div className="contentBlock"><h2>{home ? 'Visit MeriAsk in Jaipur' : `How we work with ${c.name} clients`}</h2>
          <p className="sectionLead">{home ? `${fullAddress}. Working hours: ${SITE.hours}. Phone or WhatsApp: ${SITE.phone}.` : `We start with a free video or phone call, share a clear plan and then work through WhatsApp, shared documents and monthly reports. Everything is handled online, so there is no need to travel.`}</p></div>
        <FAQ items={faqs} title={`${c.name} FAQ`} />
        <div className="contentBlock"><h2>Also serving</h2>
          <div className="chips">{nearby.map(n => <Link className="chip" key={n.slug} href={`/locations/${n.slug}`}>{n.name}</Link>)}</div></div>
      </div></section>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'Service', name: `Digital marketing services in ${c.name}`, provider: { '@id': `${SITE.url}/#organization` }, areaServed: { '@type': 'City', name: c.name }, url: `${SITE.url}/locations/${slug}` }} />
      <CTA />
    </main>
  )
}
