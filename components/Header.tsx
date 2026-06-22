import Image from 'next/image'
import Link from 'next/link'

export default function Header(){
  return (
    <header className="nav">
      <div className="container navin">
        <Link href="/" className="brand" aria-label="MeriAsk Home">
          <Image src="/meriask-logo.png" alt="MeriAsk" width={205} height={70} className="logo" priority />
        </Link>
        <nav className="navlinks">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/industries">Industries</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <Link className="btn primary navbtn" href="/free-consultation">Free Consultation</Link>
      </div>
    </header>
  )
}
