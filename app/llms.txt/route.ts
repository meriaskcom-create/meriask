import { SITE, fullAddress } from '@/lib/site'
import { services, industries } from '@/lib/data'
import { posts, serviceDetails } from '@/lib/content'
import { cities } from '@/lib/locations'

export const dynamic = 'force-static'

export function GET() {
  const u = SITE.url
  const body = `# ${SITE.name}

> ${SITE.description}

${SITE.name} is a digital marketing and technology agency based in Jaipur, Rajasthan, India, founded by ${SITE.founder.name} in ${SITE.foundedLabel}. It serves clients across India and worldwide, mostly online.

## Contact
- Website: ${u}
- Phone / WhatsApp: ${SITE.phone}
- Email: ${SITE.email}
- Address: ${fullAddress}
- Working hours: ${SITE.hours}

## Key pages
- [About](${u}/about)
- [Services](${u}/services)
- [Pricing](${u}/pricing)
- [Portfolio](${u}/portfolio)
- [Contact](${u}/contact)
- [Free consultation](${u}/free-consultation)
- [Book a call](${u}/book)
- [Locations](${u}/locations)

## Services
${services.map(s => `- [${s.title}](${u}/services/${s.slug}): ${serviceDetails[s.slug]?.summary.split('. ')[0]}.`).join('\n')}

## Industries
${industries.map(i => `- [${i.title}](${u}/industries/${i.slug})`).join('\n')}

## Cities served
${cities.map(c => `- [${c.name}](${u}/locations/${c.slug})`).join('\n')}

## Pricing summary
- Starter Growth: from INR 4,000 per month
- Business Growth: from INR 8,000 per month
- Premium Performance: from INR 15,000 per month
- Ad spend is separate. Websites, apps, SaaS, automation and AI projects are quoted per project.

## Blog
${posts.map(p => `- [${p.title}](${u}/blog/${p.slug})`).join('\n')}

## Profiles
${Object.entries(SITE.socials).map(([n, l]) => `- ${n}: ${l}`).join('\n')}
`
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
