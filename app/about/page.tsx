import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import CTA from '@/components/CTA'
import Crumbs from '@/components/Crumbs'
import { SITE, fullAddress } from '@/lib/site'

export const metadata: Metadata = {
  title: 'About MeriAsk: Jaipur Digital Growth Agency',
  description: `MeriAsk is a Jaipur-based digital marketing and technology agency founded by ${SITE.founder.name}, serving clients across India and worldwide.`,
  alternates: { canonical: '/about' },
}

export default function About() {
  const f = SITE.founder
  return (
    <main>
      <section className="pageHero"><div className="container">
        <Crumbs items={[['About', '/about']]} />
        <h1 className="h1">About <span className="grad">MeriAsk</span></h1>
        <p className="lead">MeriAsk is a digital marketing and technology agency based in Jaipur, Rajasthan, founded in {SITE.foundedLabel}. We help businesses grow with SEO, ads, social media, websites, apps, SaaS, automation and AI, and we work with clients across India and around the world.</p>
      </div></section>

      <section className="section"><div className="container split">
        <div className="panel">
          <h2>Who we are</h2>
          <p className="sectionLead">Most agencies do marketing and hand technology to someone else. MeriAsk does both. Our team plans campaigns, designs creatives, builds websites and apps, and sets up the automation that follows up on your leads, so everything works as one system.</p>
          <p className="sectionLead">We also build our own products, including a review booster, a social scheduler and utility apps, which keeps our team close to real-world software and marketing problems.</p>
          <div className="list"><div>Marketing strategy + execution</div><div>Websites, apps, games and SaaS</div><div>AI, chatbots and workflow automation</div><div>Transparent monthly reporting</div></div>
        </div>
        <div className="panel founderCard">
          <Image src={f.photo} alt={`${f.name}, Founder of MeriAsk`} width={420} height={420} className="founderImg" />
          <h2>{f.name}</h2>
          <p className="miniText"><b>{f.role}, MeriAsk</b><br />{f.experienceYears}+ years of experience in digital marketing and technology</p>
          <div className="socialRow"><a href={SITE.socials.LinkedIn} target="_blank" rel="noopener noreferrer me">LinkedIn</a><a href={SITE.socials.Instagram} target="_blank" rel="noopener noreferrer me">Instagram</a></div>
        </div>
      </div></section>

      <section className="section noTop"><div className="container">
        <div className="cards">
          <div className="card"><h3>Local roots, global reach</h3><p>Headquartered in Jaipur and open to in-person meetings there. Most work is delivered online, so we can serve clients anywhere.</p></div>
          <div className="card"><h3>Honest expectations</h3><p>We do not promise guaranteed rankings or leads. We promise a clear plan, careful execution and transparent reporting.</p></div>
          <div className="card"><h3>Built to scale</h3><p>Start with a small plan and grow into ads, automation and custom software when your business is ready.</p></div>
        </div>
      </div></section>

      <section className="section noTop"><div className="container"><div className="panel">
        <h2>Visit or contact us</h2>
        <p className="sectionLead">{fullAddress}<br />Working hours: {SITE.hours}<br />Phone / WhatsApp: <a href={`tel:+${SITE.phoneRaw}`}>{SITE.phone}</a><br />Email: <a href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
        <div className="heroBtns"><Link className="btn primary" href="/free-consultation">Get Free Consultation</Link><Link className="btn" href="/contact">Contact Us</Link></div>
      </div></div></section>
      <CTA />
    </main>
  )
}
