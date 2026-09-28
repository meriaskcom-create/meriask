import Link from 'next/link'
import type { Metadata } from 'next'
import { industries } from '@/lib/data'
import { industryDetails } from '@/lib/content'
import Crumbs from '@/components/Crumbs'
import CTA from '@/components/CTA'

export const metadata: Metadata = {
  title: 'Industries We Help: Real Estate, Education, Healthcare & More',
  description: 'Growth solutions for real estate, coaching and education, healthcare, local businesses, e-commerce and personal brands.',
  alternates: { canonical: '/industries' },
}

export default function Industries() {
  return (
    <main>
      <section className="pageHero"><div className="container">
        <Crumbs items={[['Industries', '/industries']]} />
        <h1 className="h1">Industries We Help</h1>
        <p className="lead">Growth solutions for real estate, education, healthcare, local businesses, e-commerce and personal brands.</p>
      </div></section>
      <section className="section"><div className="container"><div className="cards">
        {industries.map((s, i) => <Link className="card" href={`/industries/${s.slug}`} key={s.slug}><div className="icon">{i + 1}</div><h3>{s.title}</h3><p>{industryDetails[s.slug].summary.split('. ')[0]}.</p></Link>)}
      </div></div></section>
      <CTA />
    </main>
  )
}
