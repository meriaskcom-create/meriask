import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import { SITE } from '@/lib/site'

export default function Crumbs({ items }: { items: [string, string][] }) {
  const all: [string, string][] = [['Home', '/'], ...items]
  return (
    <>
      <nav className="breadcrumb" aria-label="Breadcrumb">
        {all.map(([t, h], i) => (
          <span key={h}>{i > 0 && ' / '}{i < all.length - 1 ? <Link href={h}>{t}</Link> : t}</span>
        ))}
      </nav>
      <JsonLd data={{
        '@context': 'https://schema.org', '@type': 'BreadcrumbList',
        itemListElement: all.map(([name, path], i) => ({ '@type': 'ListItem', position: i + 1, name, item: `${SITE.url}${path === '/' ? '' : path}` })),
      }} />
    </>
  )
}
