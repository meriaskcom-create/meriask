import Link from 'next/link'
import CTA from '@/components/CTA'

const plans = [
  {
    name: 'Starter Growth',
    price: '₹4,000',
    note: '/ month',
    badge: 'For new businesses',
    desc: 'Basic online presence, regular posting and simple growth support for small local businesses.',
    features: ['Social media page management', 'Basic content posting support', 'Caption & hashtag planning', 'Monthly performance summary', 'WhatsApp inquiry direction', 'Basic creative guidance'],
    cta: 'Start Starter Plan'
  },
  {
    name: 'Business Growth',
    price: '₹8,000',
    note: '/ month',
    badge: 'Most Popular',
    desc: 'A balanced growth plan for businesses that need social media, leads and paid campaign support.',
    features: ['Social media management', 'Meta Ads campaign support', 'Lead generation strategy', 'Landing page improvement ideas', 'Creative & copy guidance', 'Weekly optimization direction', 'Monthly reporting'],
    cta: 'Choose Growth Plan',
    featured: true
  },
  {
    name: 'Premium Performance',
    price: '₹15,000',
    note: '/ month',
    badge: 'For serious growth',
    desc: 'Performance-focused marketing with stronger strategy, campaign optimization and growth tracking.',
    features: ['Meta + Google Ads planning', 'Performance marketing direction', 'Lead funnel optimization', 'SEO & local visibility guidance', 'Branding & creative direction', 'Conversion-focused reporting', 'Priority strategy support'],
    cta: 'Go Premium'
  }
]

const custom = [
  ['Website Development', 'Business website, landing page, portfolio website, WordPress or custom Next.js website.'],
  ['SaaS App Development', 'Dashboard, subscription flow, admin panel, automation tools and business software.'],
  ['Mobile App Development', 'Android app MVP, utility app, business app, Play Store ready structure.'],
  ['Automation System', 'WhatsApp automation, CRM flow, lead tracking, Google Sheet/database automation.'],
  ['AI Marketing Setup', 'AI content, chatbot, AI creatives, image/video workflow and customer support automation.'],
  ['Creative & Thumbnail Design', 'YouTube thumbnail, ad creatives, reels covers, posters and brand visuals.']
]

const faqs = [
  ['Which plan is best for a new business?', 'Starter Growth is good for basic online presence. If you want leads and ad support, Business Growth is better.'],
  ['Can MeriAsk create websites and SaaS apps?', 'Yes. Website, landing page, SaaS app, automation dashboard and business tools are handled as custom projects.'],
  ['Is ad budget included in these prices?', 'No. Package fee is for strategy, setup, management and support. Ad spend is separate and depends on your business goal.'],
  ['Can I upgrade later?', 'Yes. You can start small and upgrade when your business needs more campaigns, creatives or automation.']
]

export default function PricingPage(){
  return (
    <main>
      <section className="pageHero pricingHero">
        <div className="glow gold"></div>
        <div className="glow purple"></div>
        <div className="container">
          <span className="breadcrumb">Home / Pricing</span>
          <h1 className="h1">Simple Plans For <span className="grad">Serious Growth</span></h1>
          <p className="lead">Choose a marketing plan for your business or request a custom quote for website, SaaS app, mobile app, automation, AI marketing and creative design projects.</p>
          <div className="buttons">
            <Link className="btn primary" href="/free-consultation">Get Free Consultation</Link>
            <Link className="btn glass" href="/services">View All Services</Link>
          </div>
        </div>
      </section>

      <section className="section noTop">
        <div className="container">
          <div className="sectionHead">
            <div>
              <span className="eyebrow">Monthly Growth Packages</span>
              <h2 className="sectionTitle">Marketing plans that fit your stage.</h2>
            </div>
            <p className="sectionLead">These packages are starting points. Final scope can be customized according to your industry, city, competition, budget and business target.</p>
          </div>

          <div className="pricingGrid">
            {plans.map((plan) => (
              <div className={`pricingCard ${plan.featured ? 'featuredPlan' : ''}`} key={plan.name}>
                <div className="planBadge">{plan.badge}</div>
                <h3>{plan.name}</h3>
                <p className="planDesc">{plan.desc}</p>
                <div className="priceLine"><span>{plan.price}</span><small>{plan.note}</small></div>
                <ul className="planList">
                  {plan.features.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <Link className="btn primary fullBtn" href={`/free-consultation?plan=${encodeURIComponent(plan.name)}`}>{plan.cta}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section customPricingSection">
        <div className="container split">
          <div className="panel premiumPanel">
            <span className="eyebrow">Custom Projects</span>
            <h2 className="sectionTitle">Need website, SaaS app, automation or AI system?</h2>
            <p className="sectionLead">Some work is project-based because every business needs different pages, features, integrations, dashboards and automation logic. Share your requirement and we will suggest the right scope.</p>
            <div className="chips">
              <span className="chip">Website</span><span className="chip">SaaS App</span><span className="chip">Mobile App</span><span className="chip">Automation</span><span className="chip">AI</span><span className="chip">Branding</span>
            </div>
            <Link className="btn primary" href="/free-consultation">Request Custom Quote</Link>
          </div>
          <div className="customList">
            {custom.map(([title, text]) => (
              <div className="customItem" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHead">
            <div>
              <span className="eyebrow">What happens after inquiry?</span>
              <h2 className="sectionTitle">Clear process. No confusion.</h2>
            </div>
          </div>
          <div className="processGrid">
            <div className="process"><b>01</b><h3>Requirement</h3><p>You share your business, service, budget and target.</p></div>
            <div className="process"><b>02</b><h3>Audit</h3><p>We understand your current website, social media, ads and lead flow.</p></div>
            <div className="process"><b>03</b><h3>Plan</h3><p>You get a suitable plan, service scope and next action direction.</p></div>
            <div className="process"><b>04</b><h3>Execution</h3><p>We start work with content, creatives, campaigns, website or automation.</p></div>
          </div>
        </div>
      </section>

      <section className="section faqSection">
        <div className="container split">
          <div>
            <span className="eyebrow">FAQ</span>
            <h2 className="sectionTitle">Common pricing questions</h2>
            <p className="sectionLead">Still confused? Submit your requirement and we will recommend the right plan for your business.</p>
          </div>
          <div className="faq">
            {faqs.map(([q,a]) => (
              <details key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  )
}
