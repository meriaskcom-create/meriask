import CTA from '@/components/CTA'
import Crumbs from '@/components/Crumbs'

export default function LegalPage({ title, path, updated, intro, sections }: { title: string; path: string; updated: string; intro: string; sections: { h: string; p: string[] }[] }) {
  return (
    <main>
      <section className="pageHero"><div className="container">
        <Crumbs items={[[title, path]]} />
        <h1 className="h1" style={{ fontSize: 'clamp(38px,5vw,64px)', letterSpacing: '-2px' }}><span className="grad">{title}</span></h1>
        <p className="lead">{intro}</p>
        <p className="miniText">Last updated: {updated}</p>
      </div></section>
      <section className="section"><div className="container"><article className="prose">
        {sections.map(s => (<div key={s.h}><h2>{s.h}</h2>{s.p.map((t, i) => <p key={i}>{t}</p>)}</div>))}
      </article></div></section>
      <CTA />
    </main>
  )
}
