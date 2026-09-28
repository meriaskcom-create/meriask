'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { SITE, fullAddress, waLink } from '@/lib/site'
import { services } from '@/lib/data'
import { serviceDetails } from '@/lib/content'

type Msg = { from: 'bot' | 'me'; text: string; links?: [string, string][] }
type Mode = 'chat' | 'name' | 'phone' | 'need'

const svc = (slug: string) => {
  const s = services.find(x => x.slug === slug)!
  return { text: serviceDetails[slug].summary, links: [[`Read about ${s.title}`, `/services/${slug}`], ['Book a free call', '/book']] as [string, string][] }
}

const SERVICE_KEYS: [RegExp, string][] = [
  [/game/, 'game-development'],
  [/(google ad|ppc|adwords|search ad)/, 'google-ads'],
  [/(meta ad|facebook ad|instagram ad|fb ad)/, 'meta-ads'],
  [/(seo|ranking|rank on|google rank|aeo|geo)/, 'seo'],
  [/(youtube|thumbnail)/, 'youtube-marketing'],
  [/(saas|software)/, 'saas-app-development'],
  [/(mobile app|android|flutter|\bapp\b)/, 'mobile-app-development'],
  [/(website|web site|landing|wordpress|next\.?js|e-?commerce site)/, 'website-development'],
  [/(shopify|amazon|flipkart|ecommerce|e-commerce)/, 'ecommerce-marketing'],
  [/(automation|crm|auto reply|workflow)/, 'automation-services'],
  [/(chatbot|\bai\b|artificial)/, 'ai-marketing-services'],
  [/(lead)/, 'lead-generation'],
  [/(logo|brand|creative|design|poster)/, 'branding-creative-design'],
  [/(social|instagram|facebook|smm|reels|linkedin)/, 'social-media-marketing'],
  [/(performance)/, 'performance-marketing'],
  [/(paid|ads|advertis)/, 'paid-marketing'],
]

function reply(q: string): (Omit<Msg, 'from'>) | null {
  const t = q.toLowerCase()
  if (/^(hi|hello|hey|namaste|hii+|hlo)\b/.test(t)) return { text: 'Hello! I am the MeriAsk assistant. Ask me about our services, pricing, or booking a call.' }
  if (/(price|pricing|cost|charge|fee|plan|package|rate|kitna|kimat|daam|budget)/.test(t))
    return { text: 'Monthly growth plans: Starter Growth ₹4,000, Business Growth ₹8,000, Premium Performance ₹15,000 per month. Ad spend is separate. Websites, apps, SaaS, automation and AI projects are quoted per project after understanding your needs.', links: [['See pricing', '/pricing'], ['Get a custom quote', '/free-consultation']] }
  if (/(book|appointment|meeting|schedule|slot|call me|callback)/.test(t)) return { text: 'You can pick a day and time for a free call. We confirm the slot on WhatsApp or phone.', links: [['Book a free call', '/book']] }
  if (/(refund|cancel)/.test(t)) return { text: 'Monthly plans are billed in advance and can be cancelled with notice. Ad spend goes directly to ad platforms and is not refundable by us. Please read the full policy for details.', links: [['Refund policy', '/refund-policy']] }
  if (/(guarantee|assured|promise|100%)/.test(t)) return { text: 'We do not guarantee rankings, leads or sales because results depend on competition, budget and market conditions. We commit to a clear plan, careful work and transparent reporting.' }
  if (/(phone|whatsapp|email|mail|contact|number|reach)/.test(t)) return { text: `Phone / WhatsApp: ${SITE.phone}. Email: ${SITE.email}. Working hours: ${SITE.hours}.`, links: [['Chat on WhatsApp', waLink()], ['Contact page', '/contact']] }
  if (/(address|office|where|located|location|visit|jaipur)/.test(t)) return { text: `Our office: ${fullAddress}. We also serve clients across India and worldwide online.`, links: [['View locations', '/locations']] }
  if (/(hour|timing|open|time)/.test(t)) return { text: `Our working hours are ${SITE.hours}.` }
  if (/(founder|dinesh|who are you|about|company|team)/.test(t)) return { text: `MeriAsk is a Jaipur-based digital marketing and technology agency founded by ${SITE.founder.name} in ${SITE.foundedLabel}.`, links: [['About MeriAsk', '/about']] }
  if (/(portfolio|product|work|project)/.test(t)) return { text: 'We build our own software products and deliver websites, apps, games, SaaS and marketing for clients.', links: [['View portfolio', '/portfolio']] }
  if (/(service|offer|what do you do|help)/.test(t)) return { text: 'We offer SEO, Google Ads, Meta Ads, social media management, performance marketing, websites, mobile apps, games, SaaS, automation, AI marketing, branding and more.', links: [['All services', '/services']] }
  for (const [re, slug] of SERVICE_KEYS) if (re.test(t)) return svc(slug)
  return null
}

const CHIPS = ['Pricing', 'SEO', 'Website development', 'Book a call', 'Talk to the team']

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [msgs, setMsgs] = useState<Msg[]>([{ from: 'bot', text: 'Hi! I am the MeriAsk assistant (automated). How can I help you today?' }])
  const [input, setInput] = useState('')
  const [mode, setMode] = useState<Mode>('chat')
  const [lead, setLead] = useState({ name: '', phone: '', need: '' })
  const end = useRef<HTMLDivElement>(null)
  useEffect(() => { end.current?.scrollIntoView({ behavior: 'smooth' }) }, [msgs, open])

  const bot = (text: string, links?: [string, string][]) => setMsgs(m => [...m, { from: 'bot', text, links }])

  async function saveLead(l: { name: string; phone: string; need: string }) {
    try {
      const res = await fetch('/api/leads', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: l.name, phone: l.phone, service: 'Chatbot Inquiry', message: l.need || 'Requested a callback via chatbot' }) })
      if (!res.ok) throw new Error()
      ;(window as any).gtag?.('event', 'generate_lead', { method: 'chatbot' })
      ;(window as any).fbq?.('track', 'Lead')
      bot(`Thank you ${l.name}! We received your details and will contact you during working hours (${SITE.hours}). For a faster reply you can also WhatsApp us.`, [['Chat on WhatsApp', waLink()]])
    } catch {
      bot('Sorry, I could not save your details. Please WhatsApp us directly.', [['Chat on WhatsApp', waLink()]])
    }
  }

  function send(raw: string) {
    const text = raw.trim()
    if (!text) return
    setMsgs(m => [...m, { from: 'me', text }])
    setInput('')
    if (mode === 'name') { setLead(l => ({ ...l, name: text.slice(0, 80) })); setMode('phone'); return bot('Thanks! What is your phone or WhatsApp number?') }
    if (mode === 'phone') {
      if (!/\d{8,}/.test(text.replace(/\D/g, ''))) return bot('Please enter a valid phone number.')
      setLead(l => ({ ...l, phone: text.slice(0, 20) })); setMode('need'); return bot('Great. In one line, what do you need help with?')
    }
    if (mode === 'need') { const l = { ...lead, need: text.slice(0, 500) }; setLead(l); setMode('chat'); return void saveLead(l) }
    if (/(talk|team|human|person|quote|callback|call back|contact me|sales)/i.test(text)) { setMode('name'); return bot('Sure, I will pass your details to the team. What is your name?') }
    const r = reply(text)
    if (r) return bot(r.text, r.links)
    bot('I am not sure about that one. I can connect you with the team, or you can ask about services, pricing or booking a call.', [['Talk to the team', '#lead'], ['Chat on WhatsApp', waLink()]])
  }

  return (
    <>
      {open && (
        <div className="chatPanel" role="dialog" aria-label="MeriAsk assistant">
          <div className="chatHead"><div><b>MeriAsk Assistant</b><small>Automated · replies instantly</small></div><button onClick={() => setOpen(false)} aria-label="Close chat">×</button></div>
          <div className="chatBody">
            {msgs.map((m, i) => (
              <div key={i} className={`bubble ${m.from}`}>
                <p>{m.text}</p>
                {m.links && <div className="bubbleLinks">{m.links.map(([l, h]) => h === '#lead'
                  ? <button key={l} onClick={() => { setMode('name'); bot('Sure, I will pass your details to the team. What is your name?') }}>{l}</button>
                  : h.startsWith('http') ? <a key={l} href={h} target="_blank" rel="noopener noreferrer">{l}</a> : <Link key={l} href={h} onClick={() => setOpen(false)}>{l}</Link>)}</div>}
              </div>
            ))}
            {mode === 'chat' && msgs.length < 3 && <div className="bubbleLinks">{CHIPS.map(c => <button key={c} onClick={() => send(c)}>{c}</button>)}</div>}
            <div ref={end} />
          </div>
          <form className="chatInput" onSubmit={e => { e.preventDefault(); send(input) }}>
            <input value={input} onChange={e => setInput(e.target.value)} placeholder={mode === 'name' ? 'Your name' : mode === 'phone' ? 'Phone number' : 'Type your question...'} maxLength={300} aria-label="Message" />
            <button type="submit" aria-label="Send">➤</button>
          </form>
        </div>
      )}
      <button className="chatFab" onClick={() => setOpen(o => !o)} aria-label={open ? 'Close chat' : 'Open chat'}>{open ? '×' : '💬'}</button>
    </>
  )
}
