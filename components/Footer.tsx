import Image from 'next/image'
import Link from 'next/link'

export default function Footer(){
  return (
    <footer className="footer">
      <div className="container footergrid">
        <div>
          <Image src="/meriask-logo.png" alt="MeriAsk" width={210} height={70} className="logo" />
          <p className="footertext">Premium digital marketing, websites, SaaS apps, automation and AI solutions for growing businesses.</p>
        </div>
        <div className="footerlinks">
          <div><b>Company</b><Link href="/about">About</Link><Link href="/services">Services</Link><Link href="/portfolio">Portfolio</Link><Link href="/contact">Contact</Link></div>
          <div><b>Legal</b><Link href="/privacy-policy">Privacy Policy</Link><Link href="/terms-and-conditions">Terms</Link><Link href="/refund-policy">Refund Policy</Link></div>
          <div><b>Growth</b><Link href="/services/seo">SEO</Link><Link href="/services/google-ads">Google Ads</Link><Link href="/services/saas-app-development">SaaS Apps</Link></div>
        </div>
      </div>
      <div className="container copyright">© {new Date().getFullYear()} MeriAsk. All rights reserved.</div>
    </footer>
  )
}
