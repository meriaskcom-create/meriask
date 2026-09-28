import Link from 'next/link'
import type { Metadata } from 'next'
import CTA from '@/components/CTA'
import Crumbs from '@/components/Crumbs'
import { posts } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Blog: SEO, AI Search, Ads & Growth Guides',
  description: 'Practical guides on SEO, AI search, Google and Meta Ads, local business marketing, websites and SaaS from the MeriAsk team.',
  alternates: { canonical: '/blog' },
}

export default function Blog() {
  return (
    <main>
      <section className="pageHero"><div className="container">
        <Crumbs items={[['Blog', '/blog']]} />
        <h1 className="h1">MeriAsk <span className="grad">Blog</span></h1>
        <p className="lead">Practical guides on SEO, AI search, ads, websites and business growth.</p>
      </div></section>
      <section className="section"><div className="container"><div className="cards">
        {posts.map(p => (
          <Link className="card" href={`/blog/${p.slug}`} key={p.slug}>
            <span className="chip">{new Date(p.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })} · {p.readMins} min read</span>
            <h3 style={{ marginTop: 14 }}>{p.title}</h3>
            <p>{p.description}</p>
          </Link>
        ))}
      </div></div></section>
      <CTA />
    </main>
  )
}
