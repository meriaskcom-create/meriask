import Image from 'next/image'
import Link from 'next/link'

const links: [string, string][] = [['Home','/'],['Services','/services'],['Industries','/industries'],['Portfolio','/portfolio'],['Pricing','/pricing'],['Blog','/blog'],['About','/about'],['Contact','/contact'],['Book a Call','/book']]

export default function Header(){
  return (
    <header className="nav">
      <div className="container navin">
        <Link href="/" className="brand" aria-label="MeriAsk Home">
          <Image src="/meriask-logo.png" alt="MeriAsk" width={205} height={70} className="logo" priority />
        </Link>
        <nav className="navlinks" aria-label="Main">
          {links.filter(l=>l[0]!=='About').map(([t,h])=><Link key={h} href={h}>{t}</Link>)}
        </nav>
        <Link className="btn primary navbtn" href="/free-consultation">Free Consultation</Link>
        <details className="mobMenu">
          <summary aria-label="Open menu"><span></span><span></span><span></span></summary>
          <div className="mobPanel">
            {links.map(([t,h])=><Link key={h} href={h}>{t}</Link>)}
            <Link className="btn primary" href="/free-consultation">Free Consultation</Link>
          </div>
        </details>
      </div>
    </header>
  )
}
