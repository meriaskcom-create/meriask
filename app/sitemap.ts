import { MetadataRoute } from 'next'
import { SITE } from '@/lib/site'
import { services, industries } from '@/lib/data'
import { posts } from '@/lib/content'
import { cities } from '@/lib/locations'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const page = (path: string, priority: number, changeFrequency: 'weekly' | 'monthly' | 'yearly' = 'monthly', lastModified: Date = now) =>
    ({ url: `${SITE.url}${path}`, lastModified, changeFrequency, priority })
  return [
    page('', 1, 'weekly'),
    page('/services', 0.9), page('/industries', 0.8), page('/portfolio', 0.8), page('/pricing', 0.9),
    page('/blog', 0.8, 'weekly'), page('/about', 0.7), page('/contact', 0.8), page('/free-consultation', 0.9), page('/book', 0.8), page('/locations', 0.7),
    ...services.map(s => page(`/services/${s.slug}`, 0.8)),
    ...industries.map(i => page(`/industries/${i.slug}`, 0.7)),
    ...cities.map(c => page(`/locations/${c.slug}`, 0.6)),
    ...posts.map(p => page(`/blog/${p.slug}`, 0.6, 'monthly', new Date(p.date))),
    page('/privacy-policy', 0.3, 'yearly'), page('/terms-and-conditions', 0.3, 'yearly'), page('/refund-policy', 0.3, 'yearly'),
  ]
}
