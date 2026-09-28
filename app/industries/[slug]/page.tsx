import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { industries } from '@/lib/data'
import { industryDetails } from '@/lib/content'
import { SITE } from '@/lib/site'
import CTA from '@/components/CTA'
import FAQ from '@/components/FAQ'
import Crumbs from '@/components/Crumbs'

type P = { params: Promise<{ slug: string }> }
export function generateStaticParams() { return industries.map(s => ({ slug: s.slug })) }

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { slug } = await params
  const s = industries.find(x => x.slug === slug)
  if (!s) return {}
  const description = industryDetails[slug].summary.slice(0, 158).replace(/\s+\S*$/, '') + '.'
  return { title: `${s.title} Agency in India`, description, alternates: { canonical: `/industries/${slug}` }, openGraph: { title: `${s.title} | MeriAsk`, description, url: `${SITE.url}/industries/${slug}` } }
}

export default async function IndustryPage({ params }: P) {
  const { slug } = await params
  const s = industries.find(x => x.slug === slug)
  if (!s) notFound()
  const d = industryDetails[slug]
  return (
    <main>
      <section className="pageHero"><div className="container">
        <Crumbs items={[['Industries', '/industries'], [s.title, `/industries/${slug}`]]} />
        <h1 className="h1"><span className="grad">{s.title}</span></h1>
        <p className="lead">{d.summary}</p>
        <div className="heroBtns"><Link className="btn primary" href="/free-consultation">Get Free Consultation</Link></div>
      </div></section>
      <section className="section"><div className="container">
        <div className="contentBlock"><h2>Common challenges</h2>
          <div className="cards">{d.challenges.map(c => <div className="card" key={c}><h3>{c}</h3></div>)}</div></div>
        <div className="contentBlock"><h2>How MeriAsk helps</h2>
          <div className="cards">{d.help.map(c => <div className="card" key={c}><h3>{c}</h3></div>)}</div></div>
        <FAQ items={d.faqs} title={`${s.title} FAQ`} />
        <div className="contentBlock"><h2>Related services</h2>
          <div className="chips">
            {['seo', 'google-ads', 'meta-ads', 'lead-generation', 'website-development'].map(x => <Link className="chip" key={x} href={`/services/${x}`}>{x.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}</Link>)}
          </div></div>
      </div></section>
      <CTA />
    </main>
  )
}
