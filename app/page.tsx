import Link from 'next/link'
import { services, products } from '@/lib/data'
import CTA from '@/components/CTA'

const steps = [
  ['01','Audit & Strategy','Business, competitors, audience and current digital presence ko analyse karke clear growth plan banate hain.'],
  ['02','Creative + Funnel','Ads creatives, landing page, content calendar, tracking and lead capture system ready hota hai.'],
  ['03','Launch & Optimize','Campaigns live, daily monitoring, testing, reporting and ROI improvement par focus.'],
  ['04','Scale With Tech','Website, SaaS app, automation, CRM, chatbot aur dashboards ke through business ko scalable banate hain.']
]

const categories = [
  ['Digital Growth','SEO, Google Ads, Meta Ads, SMM, YouTube Marketing, Lead Generation aur Performance Marketing.'],
  ['Creative Studio','Logo, brand identity, ad creatives, thumbnails, reels covers, banners, brochures aur campaign visuals.'],
  ['Tech & SaaS','Business websites, landing pages, e-commerce, mobile apps, SaaS dashboards, API and cloud deployment.'],
  ['AI & Automation','WhatsApp automation, AI chatbot, CRM automation, auto reply, workflow automation aur AI content systems.']
]

const homePlans = [
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

const homeCustomProjects = [
  ['Website Development', 'Business website, landing page, portfolio website, WordPress or custom Next.js website.'],
  ['SaaS App Development', 'Dashboard, subscription flow, admin panel, automation tools and business software.'],
  ['Mobile App Development', 'Android app MVP, utility app, business app, Play Store ready structure.'],
  ['Automation System', 'WhatsApp automation, CRM flow, lead tracking, Google Sheet/database automation.'],
  ['AI Marketing Setup', 'AI content, chatbot, AI creatives, image/video workflow and customer support automation.'],
  ['Creative & Thumbnail Design', 'YouTube thumbnail, ad creatives, reels covers, posters and brand visuals.']
]

export default function Home(){
  return (
    <main>
      <section className="hero">
        <div className="glow gold"></div><div className="glow purple"></div>
        <div className="container heroGrid">
          <div className="heroCopy">
            <span className="eyebrow">Premium Digital Growth Agency</span>
            <h1 className="h1">Grow Faster With <span className="grad">MeriAsk</span></h1>
            <p className="lead">We help businesses grow with SEO, Google Ads, Meta Ads, Social Media Marketing, Lead Generation, Websites, SaaS Apps, Automation and AI-powered marketing solutions.</p>
            <div className="heroBtns">
              <Link className="btn primary" href="/free-consultation">Get Free Business Growth Consultation</Link>
              <Link className="btn glass" href="/services">Explore All Services</Link>
            </div>
            <div className="stats">
              <div className="stat"><b>100+</b><span>Project Capabilities</span></div>
              <div className="stat"><b>17+</b><span>Core Service Verticals</span></div>
              <div className="stat"><b>24/7</b><span>Digital Support Approach</span></div>
            </div>
          </div>

          <div className="heroVisual">
            <div className="dash3d">
              <div className="dashTop"><span></span><span></span><span></span><b>Growth Command Center</b></div>
              <div className="orb"><div className="ring"></div><div className="ring ring2"></div></div>
              <div className="metric m1"><b>SEO</b><span>Ranking Growth</span></div>
              <div className="metric m2"><b>ADS</b><span>High Intent Leads</span></div>
              <div className="metric m3"><b>AI</b><span>Automation Ready</span></div>
              <div className="orbitText">SEO • ADS • LEADS • AI • SAAS • SALES</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section introBand">
        <div className="container center">
          <span className="eyebrow">One Agency. Complete Digital Growth.</span>
          <h2 className="sectionTitle">Everything your business needs to look premium, get leads and increase sales.</h2>
          <p className="sectionLead centerLead">From daily social media handling to full-funnel performance marketing, from business websites to SaaS app development, MeriAsk gives you one growth partner for strategy, execution and technology.</p>
        </div>
      </section>

      <section className="section noTop">
        <div className="container">
          <div className="sectionHead">
            <div><span className="eyebrow">Services</span><h2 className="sectionTitle">Growth services built for modern businesses.</h2></div>
            <Link href="/services" className="btn glass">View All Services</Link>
          </div>
          <div className="cards servicesGrid">
            {services.map((s,i)=>(
              <Link className="card serviceCard" href={`/services/${s.slug}`} key={s.slug}>
                <div className="icon">{String(i+1).padStart(2,'0')}</div>
                <h3>{s.title}</h3>
                <p>{s.items.slice(0,5).join(' • ')}</p>
                <span className="cardLink">Read Service Details →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="panel premiumPanel">
            <span className="eyebrow">Agency + Tech Team</span>
            <h2 className="sectionTitle">Marketing ke sath technology bhi.</h2>
            <p className="sectionLead">MeriAsk sirf ads ya posting agency nahi hai. Hum websites, apps, SaaS systems, dashboards, automation and AI tools bhi build kar sakte hain jisse business fast aur professional chale.</p>
            <div className="list"><div>Marketing Strategy + Execution</div><div>Website, Landing Page & App Development</div><div>AI, Chatbot & Workflow Automation</div><div>Lead Generation & Sales Funnel Setup</div></div>
          </div>
          <div className="panel productPanel">
            <span className="eyebrow">Portfolio Power</span>
            <h2 className="sectionTitle">Products & systems we can build.</h2>
            <p className="sectionLead">In products ko website par dikhane se client ko lagega ki MeriAsk sirf service provider nahi, complete product building company hai.</p>
            <div className="chips">{products.map(p=><span className="chip" key={p}>{p}</span>)}</div>
          </div>
        </div>
      </section>

      <section className="section processSection">
        <div className="container">
          <div className="center"><span className="eyebrow">Process</span><h2 className="sectionTitle">How MeriAsk works.</h2></div>
          <div className="processGrid">{steps.map(s=><div className="process" key={s[0]}><b>{s[0]}</b><h3>{s[1]}</h3><p>{s[2]}</p></div>)}</div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="center"><span className="eyebrow">Solutions</span><h2 className="sectionTitle">Choose exactly what your business needs.</h2></div>
          <div className="cards">{categories.map(c=><div className="card bigCard" key={c[0]}><h3>{c[0]}</h3><p>{c[1]}</p></div>)}</div>
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
            {homeCustomProjects.map(([title, text]) => (
              <div className="customItem" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
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
            {homePlans.map((plan) => (
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

          <div className="center" style={{ marginTop: 34 }}>
            <Link className="btn glass" href="/pricing">View Full Pricing Details</Link>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  )
}
