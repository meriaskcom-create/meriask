import type { Metadata } from 'next'
import CTA from '@/components/CTA'
import Crumbs from '@/components/Crumbs'
import BookingForm from '@/components/BookingForm'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Book a Free Consultation Call',
  description: `Pick a day and time for a free call with the MeriAsk team. Working hours ${SITE.hours} IST.`,
  alternates: { canonical: '/book' },
}

export default function Book() {
  return (
    <main>
      <section className="pageHero"><div className="container">
        <Crumbs items={[['Book a Call', '/book']]} />
        <h1 className="h1">Book a <span className="grad">Free Call</span></h1>
        <p className="lead">Choose a convenient slot and tell us what you need. We will confirm on WhatsApp or phone. Calls are free and carry no obligation.</p>
      </div></section>
      <section className="section noTop"><div className="container split">
        <div className="panel"><h2>Pick your slot</h2><BookingForm /></div>
        <div className="panel"><h2>What to expect</h2>
          <div className="list"><div>A short discussion of your business and goals</div><div>Honest advice on what will and will not help</div><div>A suggested plan and next steps, with pricing guidance</div><div>No pressure to buy</div></div>
          <p className="miniText" style={{ marginTop: 20 }}>Working hours: {SITE.hours} IST. Prefer to talk right away? Call or WhatsApp <a href={`tel:+${SITE.phoneRaw}`}>{SITE.phone}</a>.</p>
        </div>
      </div></section>
      <CTA />
    </main>
  )
}
