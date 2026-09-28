import Image from 'next/image'
import Link from 'next/link'
import { SITE, fullAddress } from '@/lib/site'

export default function Footer(){
  return (
    <footer className="footer">
      <div className="container footergrid">
        <div>
          <Image src="/meriask-logo.png" alt="MeriAsk" width={210} height={70} className="logo" />
          <p className="footertext">Premium digital marketing, websites, apps, SaaS, automation and AI solutions for growing businesses.</p>
          <address className="footAddr">
            <a href={`tel:+${SITE.phoneRaw}`}>{SITE.phone}</a>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            <span>{fullAddress}</span>
            <span>Working hours: {SITE.hours}</span>
          </address>
          <div className="socialRow">
            {Object.entries(SITE.socials).map(([n,u])=><a key={n} href={u} target="_blank" rel="noopener noreferrer me">{n}</a>)}
            <a href={SITE.googleBusiness} target="_blank" rel="noopener noreferrer">Google Business</a>
          </div>
        </div>
        <div className="footerlinks">
          <div><b>Company</b><Link href="/about">About</Link><Link href="/services">Services</Link><Link href="/industries">Industries</Link><Link href="/portfolio">Portfolio</Link><Link href="/pricing">Pricing</Link><Link href="/blog">Blog</Link><Link href="/locations">Locations</Link><Link href="/book">Book a Call</Link><Link href="/contact">Contact</Link></div>
          <div><b>Legal</b><Link href="/privacy-policy">Privacy Policy</Link><Link href="/terms-and-conditions">Terms</Link><Link href="/refund-policy">Refund Policy</Link></div>
          <div><b>Growth</b><Link href="/services/seo">SEO</Link><Link href="/services/google-ads">Google Ads</Link><Link href="/services/meta-ads">Meta Ads</Link><Link href="/services/website-development">Websites</Link><Link href="/services/saas-app-development">SaaS Apps</Link><Link href="/services/game-development">Game Development</Link></div>
        </div>
      </div>
      <div className="container copyright">&copy; {new Date().getFullYear()} MeriAsk. All rights reserved.</div>
    </footer>
  )
}
