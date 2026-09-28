import type { Metadata } from 'next'
import CTA from '@/components/CTA'
import Crumbs from '@/components/Crumbs'
import LeadForm from '@/components/LeadForm'
import JsonLd from '@/components/JsonLd'
import { SITE, fullAddress, waLink } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact MeriAsk: Call, WhatsApp or Email',
  description: `Contact MeriAsk in Jaipur. Call or WhatsApp ${SITE.phone}, email ${SITE.email}. Working hours ${SITE.hours}.`,
  alternates: { canonical: '/contact' },
}

export default function Contact() {
  return (
    <main>
      <section className="pageHero"><div className="container">
        <Crumbs items={[['Contact', '/contact']]} />
        <h1 className="h1">Contact <span className="grad">MeriAsk</span></h1>
        <p className="lead">Tell us about your business and goals. We usually reply during working hours, and WhatsApp is the fastest way to reach us.</p>
      </div></section>
      <section className="section"><div className="container split">
        <div className="panel">
          <h2>Get in touch</h2>
          <div className="list">
            <div><b>Phone / WhatsApp</b><br /><a href={`tel:+${SITE.phoneRaw}`}>{SITE.phone}</a></div>
            <div><b>Email</b><br /><a href={`mailto:${SITE.email}`}>{SITE.email}</a></div>
            <div><b>Office</b><br />{fullAddress}</div>
            <div><b>Working hours</b><br />{SITE.hours}</div>
          </div>
          <div className="heroBtns">
            <a className="btn primary" href={waLink()} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
            <a className="btn" href={SITE.googleBusiness} target="_blank" rel="noopener noreferrer">View on Google</a>
          </div>
          <div className="socialRow">{Object.entries(SITE.socials).map(([n, u]) => <a key={n} href={u} target="_blank" rel="noopener noreferrer me">{n}</a>)}</div>
        </div>
        <div className="panel"><h2>Send an inquiry</h2><p className="miniText">Share a few details and we will get back to you.</p><LeadForm /></div>
      </div></section>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'ContactPage', url: `${SITE.url}/contact`, mainEntity: { '@id': `${SITE.url}/#organization` } }} />
      <CTA />
    </main>
  )
}
