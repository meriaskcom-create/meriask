import Link from 'next/link'
import type { Metadata } from 'next'
import CTA from '@/components/CTA'
import Crumbs from '@/components/Crumbs'
import JsonLd from '@/components/JsonLd'
import { products } from '@/lib/data'
import { productDetails, buildCategories } from '@/lib/content'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Portfolio: Products, Apps, Websites & Marketing Work',
  description: 'See the products MeriAsk has built and the websites, apps, games, SaaS, social media and ad campaigns we deliver for clients.',
  alternates: { canonical: '/portfolio' },
}

export default function Portfolio() {
  return (
    <main>
      <section className="pageHero"><div className="container">
        <Crumbs items={[['Portfolio', '/portfolio']]} />
        <h1 className="h1">Our <span className="grad">Portfolio</span></h1>
        <p className="lead">MeriAsk is more than a marketing agency. We build our own software products and deliver websites, apps, games, SaaS, social media management, performance marketing and ad campaigns for clients.</p>
      </div></section>

      <section className="section"><div className="container">
        <div className="sectionHead"><div><span className="eyebrow">Our products</span><h2 className="sectionTitle">Software built by MeriAsk.</h2></div></div>
        <div className="cards">
          {products.map(p => (
            <div className="card" key={p}>
              <span className="chip">{productDetails[p].tag}</span>
              <h3 style={{ marginTop: 14 }}>{p}</h3>
              <p>{productDetails[p].text}</p>
            </div>
          ))}
        </div>
      </div></section>

      <section className="section noTop"><div className="container">
        <div className="sectionHead"><div><span className="eyebrow">What we build for clients</span><h2 className="sectionTitle">Work we deliver.</h2></div></div>
        <div className="cards">
          {buildCategories.map(c => (
            <Link className="card" href={`/services/${c.slug}`} key={c.title}>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
              <div className="chips" style={{ marginTop: 16 }}>{c.items.map(i => <span className="chip" key={i}>{i}</span>)}</div>
            </Link>
          ))}
        </div>
      </div></section>

      <section className="section noTop"><div className="container"><div className="panel">
        <h2>Want to see work relevant to your business?</h2>
        <p className="sectionLead">Tell us your industry and goal and we will share suitable examples and a walkthrough during your free consultation.</p>
        <div className="heroBtns"><Link className="btn primary" href="/free-consultation">Request a Walkthrough</Link></div>
      </div></div></section>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'ItemList', name: 'MeriAsk products', itemListElement: products.map((p, i) => ({ '@type': 'ListItem', position: i + 1, item: { '@type': 'SoftwareApplication', name: p, description: productDetails[p].text, applicationCategory: 'BusinessApplication', author: { '@id': `${SITE.url}/#organization` } } })) }} />
      <CTA />
    </main>
  )
}
