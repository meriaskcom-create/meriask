import { industries } from '@/lib/data'
import CTA from '@/components/CTA'

export function generateStaticParams(){return industries.map(s=>({slug:s.slug}))}

export default async function IndustryPage({params}:{params:Promise<{slug:string}>}){
  const { slug } = await params
  const s=industries.find(x=>x.slug===slug)||industries[0]
  return <main><section className="pageHero"><div className="container"><span className="breadcrumb">Home / Industries / {s.title}</span><h1 className="h1"><span className="grad">{s.title}</span></h1><p className="lead">MeriAsk creates industry-specific strategies for visibility, trust, leads, sales and long-term brand growth.</p></div></section><section className="section"><div className="container"><div className="cards"><div className="card"><h3>Targeted Ads</h3><p>Reach people who are actively looking for your service.</p></div><div className="card"><h3>SEO & Local Growth</h3><p>Improve your visibility on Google search and local discovery.</p></div><div className="card"><h3>Lead Funnel</h3><p>Convert traffic into inquiries using landing pages, WhatsApp and forms.</p></div></div></div></section><CTA /></main>
}
