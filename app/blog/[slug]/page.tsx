import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import CTA from '@/components/CTA'
import Crumbs from '@/components/Crumbs'
import JsonLd from '@/components/JsonLd'
import { posts } from '@/lib/content'
import { SITE } from '@/lib/site'

type P = { params: Promise<{ slug: string }> }
export function generateStaticParams() { return posts.map(p => ({ slug: p.slug })) }

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { slug } = await params
  const p = posts.find(x => x.slug === slug)
  if (!p) return {}
  return {
    title: p.title, description: p.description, alternates: { canonical: `/blog/${slug}` },
    openGraph: { type: 'article', title: p.title, description: p.description, url: `${SITE.url}/blog/${slug}`, publishedTime: p.date, authors: [SITE.founder.name] },
  }
}

export default async function Post({ params }: P) {
  const { slug } = await params
  const p = posts.find(x => x.slug === slug)
  if (!p) notFound()
  const others = posts.filter(x => x.slug !== slug).slice(0, 3)
  return (
    <main>
      <section className="pageHero"><div className="container">
        <Crumbs items={[['Blog', '/blog'], [p.title, `/blog/${slug}`]]} />
        <h1 className="h1" style={{ fontSize: 'clamp(34px,5vw,60px)', letterSpacing: '-2px', lineHeight: 1.05 }}>{p.title}</h1>
        <p className="lead">{p.description}</p>
        <p className="miniText">By <b>{SITE.founder.name}</b>, MeriAsk · {new Date(p.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })} · {p.readMins} min read</p>
      </div></section>
      <section className="section"><div className="container"><article className="prose">
        {p.sections.map(s => (
          <div key={s.h}>
            <h2>{s.h}</h2>
            {s.p.map((t, i) => <p key={i}>{t}</p>)}
          </div>
        ))}
        <div className="panel" style={{ marginTop: 36 }}>
          <h3>Need help with this?</h3>
          <p className="sectionLead">Talk to the MeriAsk team about your business.</p>
          <div className="heroBtns"><Link className="btn primary" href="/free-consultation">Get Free Consultation</Link></div>
        </div>
        <h2 style={{ marginTop: 44 }}>More guides</h2>
        <div className="chips">{others.map(o => <Link className="chip" href={`/blog/${o.slug}`} key={o.slug}>{o.title}</Link>)}</div>
      </article></div></section>
      <JsonLd data={{
        '@context': 'https://schema.org', '@type': 'Article', headline: p.title, description: p.description,
        datePublished: p.date, dateModified: p.date, mainEntityOfPage: `${SITE.url}/blog/${slug}`,
        author: { '@type': 'Person', name: SITE.founder.name, url: `${SITE.url}/about` },
        publisher: { '@id': `${SITE.url}/#organization` }, image: `${SITE.url}/meriask-logo.png`, inLanguage: 'en-IN',
      }} />
      <CTA />
    </main>
  )
}
