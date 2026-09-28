'use client'
import { useEffect, useState } from 'react'
import { services } from '@/lib/data'
import { SITE, waLink } from '@/lib/site'

const TIMES = ['10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM']
type Day = { iso: string; label: string }

export default function BookingForm() {
  const [days, setDays] = useState<Day[]>([])
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [f, setF] = useState({ name: '', phone: '', service: '', note: '', website: '' })
  const [state, setState] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')
  const [summary, setSummary] = useState('')

  useEffect(() => {
    const out: Day[] = []
    const d = new Date()
    d.setDate(d.getDate() + 1)
    while (out.length < 14) {
      if (SITE.workingDays.includes(d.getDay())) {
        const iso = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
        out.push({ iso, label: d.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' }) })
      }
      d.setDate(d.getDate() + 1)
    }
    setDays(out)
  }, [])

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    if (f.website) return
    if (!date || !time) { setState('error'); return }
    setState('sending')
    const label = days.find(d => d.iso === date)?.label || date
    const text = `BOOKING REQUEST | Date: ${label} (${date}) | Time: ${time} IST | Note: ${f.note || '-'}`
    try {
      const res = await fetch('/api/leads', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: f.name, phone: f.phone, service: f.service || 'Consultation Booking', message: text }) })
      if (!res.ok) throw new Error('fail')
      setSummary(`${label}, ${time} IST`)
      setState('done')
      ;(window as any).gtag?.('event', 'generate_lead', { method: 'booking' })
      ;(window as any).fbq?.('track', 'Schedule')
    } catch { setState('error') }
  }

  if (state === 'done')
    return (
      <div className="formNotice ok">
        <b>Booking request received for {summary}.</b>
        <p>Our team will confirm the slot on WhatsApp or phone. If that time is not available, we will suggest the nearest one.</p>
        <a className="btn primary" href={waLink(`Hi MeriAsk, I requested a call for ${summary}. Name: ${f.name}`)} target="_blank" rel="noopener noreferrer">Confirm on WhatsApp</a>
      </div>
    )

  return (
    <form className="form premiumForm" onSubmit={submit}>
      <label className="bkLabel">1. Choose a day</label>
      <div className="slotGrid">{days.map(d => <button type="button" key={d.iso} className={`slot ${date === d.iso ? 'on' : ''}`} onClick={() => setDate(d.iso)}>{d.label}</button>)}</div>
      <label className="bkLabel">2. Choose a time (IST)</label>
      <div className="slotGrid">{TIMES.map(t => <button type="button" key={t} className={`slot ${time === t ? 'on' : ''}`} onClick={() => setTime(t)}>{t}</button>)}</div>
      <label className="bkLabel">3. Your details</label>
      <input className="input" placeholder="Your name" required maxLength={80} value={f.name} onChange={e => setF({ ...f, name: e.target.value })} />
      <input className="input" placeholder="Phone / WhatsApp" required type="tel" maxLength={20} value={f.phone} onChange={e => setF({ ...f, phone: e.target.value })} />
      <select className="select" value={f.service} onChange={e => setF({ ...f, service: e.target.value })}>
        <option value="">What do you need help with?</option>
        {services.map(s => <option key={s.slug} value={s.title}>{s.title}</option>)}
        <option value="Other Requirement">Other Requirement</option>
      </select>
      <textarea className="textarea" placeholder="Anything we should know? (optional)" maxLength={500} value={f.note} onChange={e => setF({ ...f, note: e.target.value })} />
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hp" value={f.website} onChange={e => setF({ ...f, website: e.target.value })} />
      <button className="btn primary fullBtn" type="submit" disabled={state === 'sending'}>{state === 'sending' ? 'Sending...' : 'Request This Slot'}</button>
      {state === 'error' && <p className="formNotice err">Please pick a day and time, then try again. Or contact us on WhatsApp.</p>}
    </form>
  )
}
