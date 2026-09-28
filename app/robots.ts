import { MetadataRoute } from 'next'
import { SITE } from '@/lib/site'

// Search and AI crawlers are explicitly allowed so MeriAsk can appear in AI answers.
const aiBots = ['OAI-SearchBot', 'GPTBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-SearchBot', 'Claude-User', 'PerplexityBot', 'Perplexity-User', 'Google-Extended', 'Applebot-Extended', 'Bingbot']

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/api/'] },
      ...aiBots.map(userAgent => ({ userAgent, allow: '/', disallow: ['/api/'] })),
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  }
}
