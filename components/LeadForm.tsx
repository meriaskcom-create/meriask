'use client'
import { useState } from 'react'
import { services } from '@/lib/data'
import { waLink } from '@/lib/site'

export default function LeadForm({ defaultService = '' }: { defaultService?: string }) {
  const [form, setForm] = useState({ name: '', phone: '', service: defaultService, message: '', website: '' })
  const [state, setState] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    if (form.website) return // honeypot
    setState('sending')
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('failed')
      setState('done')
      setForm({ name: '', phone: '', service: '', message: '', website: '' })
      ;(window as any).gtag?.('event', 'generate_lead', { method: 'website_form' })
      ;(window as any).fbq?.('track', 'Lead')
    } catch {
      setState('error')
    }
  }

  if (state === 'done')
    return (
      <div className="formNotice ok">
        <b>Thank you! We received your inquiry.</b>
        <p>Our team will contact you during working hours. For a faster reply, message us on WhatsApp.</p>
        <a className="btn primary" href={waLink()} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
      </div>
    )

  return (
    <form className="form premiumForm" onSubmit={submit}>
      <input className="input" placeholder="Your name" required maxLength={80} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
      <input className="input" placeholder="Phone / WhatsApp" required type="tel" maxLength={20} value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
      <select className="select" required value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}>
        <option value="">Select service</option>
        {services.map(s => <option key={s.slug} value={s.title}>{s.title}</option>)}
        <option value="Other Requirement">Other Requirement</option>
      </select>
      <textarea className="textarea" placeholder="Tell us about your requirement" required maxLength={1000} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hp" value={form.website} onChange={e => setForm({ ...form, website: e.target.value })} />
      <button className="btn primary fullBtn" type="submit" disabled={state === 'sending'}>{state === 'sending' ? 'Sending...' : 'Submit Inquiry'}</button>
      {state === 'error' && <p className="formNotice err">Something went wrong. Please try again or contact us on WhatsApp.</p>}
    </form>
  )
}
