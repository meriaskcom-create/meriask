import JsonLd from '@/components/JsonLd'
export default function FAQ({ items, title = 'FAQ' }: { items: [string, string][]; title?: string }) {
  return (
    <div className="contentBlock">
      <h2>{title}</h2>
      <div className="faq">
        {items.map(([q, a]) => (
          <details key={q}><summary>{q}</summary><p>{a}</p></details>
        ))}
      </div>
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: items.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
      }} />
    </div>
  )
}
