export type FAQ = [string, string]

export const serviceDetails: Record<string, { summary: string; faqs: FAQ[] }> = {
  'social-media-marketing': {
    summary: 'Social media marketing means using Instagram, Facebook, LinkedIn and X to build awareness, engage your audience and bring in inquiries. MeriAsk plans the content, designs the creatives, posts consistently and reviews what works every month.',
    faqs: [
      ['Which platforms should my business be on?', 'It depends on where your customers spend time. Local and consumer brands usually start with Instagram and Facebook, while B2B and professional services add LinkedIn. We recommend platforms after understanding your audience.'],
      ['Do you create the content as well as post it?', 'Yes. We plan a content calendar, write captions, prepare creatives and reels ideas, and schedule the posts.'],
      ['How long before I see results?', 'Consistent posting builds visibility over weeks and months, not days. We track reach, engagement and inquiries so you can see progress in your monthly report.'],
    ],
  },
  'smma-account-handling': {
    summary: 'Account handling is a done-for-you service where MeriAsk runs your social media accounts day to day: daily posts, stories, captions, hashtags, scheduling, DM management and monthly analytics, so you can focus on your business.',
    faqs: [
      ['What does daily account handling include?', 'Posting, stories, caption and hashtag work, scheduling, replying to comments and DMs where agreed, and monthly performance tracking.'],
      ['Can I approve posts before they go live?', 'Yes. We can share the monthly content plan and creatives for your approval before publishing.'],
      ['Can agencies or freelancers white-label this?', 'Yes, MeriAsk can handle accounts for other agencies and consultants. Contact us to discuss the setup.'],
    ],
  },
  'meta-ads': {
    summary: 'Meta Ads are paid campaigns on Facebook and Instagram. MeriAsk builds lead generation, WhatsApp, traffic, sales and retargeting campaigns with proper pixel setup, audience targeting and regular optimization.',
    faqs: [
      ['How much ad budget do I need?', 'Ad spend depends on your city, competition and goal. It is paid directly to Meta and is separate from our management fee. We suggest a starting budget after a short audit.'],
      ['Can I get leads directly on WhatsApp?', 'Yes. Click-to-WhatsApp and lead form campaigns can send inquiries straight to your phone or a sheet.'],
      ['Do you guarantee a certain number of leads?', 'No honest agency can guarantee ad results because auctions, offers and markets change. We commit to a clear process, testing and transparent reporting.'],
    ],
  },
  'google-ads': {
    summary: 'Google Ads puts your business in front of people who are already searching for what you sell. MeriAsk sets up search, display, shopping, YouTube and app campaigns with keyword research, conversion tracking and ongoing optimization.',
    faqs: [
      ['Google Ads or SEO, which should I choose?', 'Google Ads brings traffic quickly while you pay per click. SEO takes longer but builds lasting visibility. Many businesses use both, and we help you decide the mix.'],
      ['Do you set up conversion tracking?', 'Yes. Tracking calls, forms and WhatsApp clicks is part of the setup so you know which campaigns bring inquiries.'],
      ['Is ad spend included in your fee?', 'No. Ad spend goes directly to Google. Our fee covers strategy, setup and management.'],
    ],
  },
  'paid-marketing': {
    summary: 'Paid marketing covers the full setup and management of paid campaigns across platforms: funnel strategy, ad copy, landing page fixes, budget control and continuous optimization to improve return on ad spend.',
    faqs: [
      ['Which platforms do you run paid campaigns on?', 'Mainly Meta (Facebook and Instagram), Google and YouTube. The platform mix depends on your customers and goals.'],
      ['Who controls the ad account?', 'Your business should own its ad accounts. We work inside them so you always keep access and data.'],
      ['How often do you optimize campaigns?', 'We review campaigns regularly, make changes based on data and share reports so you know what changed and why.'],
    ],
  },
  'performance-marketing': {
    summary: 'Performance marketing focuses on measurable outcomes such as cost per lead, conversions and revenue instead of vanity metrics. MeriAsk combines ad campaigns, funnel design, tracking and conversion rate optimization to improve results over time.',
    faqs: [
      ['What is the difference between paid and performance marketing?', 'Paid marketing is about running ads. Performance marketing ties every rupee to a measurable result and optimizes the whole funnel, including the landing page and follow-up.'],
      ['What metrics will you report?', 'Cost per lead, conversion rate, cost per acquisition, return on ad spend where sales are tracked, and lead quality feedback from you.'],
      ['Do I need a website or landing page first?', 'A fast landing page with a clear offer helps a lot. We can build or improve one as part of the funnel.'],
    ],
  },
  'youtube-marketing': {
    summary: 'YouTube marketing helps your channel and videos get found and watched. MeriAsk handles YouTube SEO, thumbnails, titles, channel branding, Shorts strategy and YouTube Ads to grow watch time and subscribers.',
    faqs: [
      ['Do you make the videos?', 'We focus on strategy, optimization, thumbnails, branding and ads. We can also plan scripts and edit direction; discuss your needs with us.'],
      ['How important are thumbnails?', 'Thumbnails and titles strongly influence whether people click. We design and test thumbnails as part of the service.'],
      ['Can you help a new channel?', 'Yes. We help with channel setup, branding, keyword research and a content plan for new channels.'],
    ],
  },
  'lead-generation': {
    summary: 'Lead generation is a system that brings interested prospects to your business through ads, landing pages, WhatsApp and forms. MeriAsk builds the funnel and tracks lead quality for real estate, education, healthcare, local and B2B businesses.',
    faqs: [
      ['What counts as a lead?', 'A lead is a person who shares contact details and shows interest, usually through a form, call or WhatsApp message. We track them so you can review lead quality.'],
      ['Can you generate leads for my industry?', 'We work across real estate, education, healthcare, local services, e-commerce and personal brands. The approach is adjusted to each industry.'],
      ['How are leads delivered?', 'Leads can go to WhatsApp, email or a Google Sheet, so your team can follow up quickly.'],
    ],
  },
  'branding-creative-design': {
    summary: 'Branding and creative design gives your business a consistent, professional look: logo, brand identity, social media creatives, ad creatives, brochures, packaging and motion graphics.',
    faqs: [
      ['What do I get in a brand identity package?', 'Typically a logo, color palette, typography guidance and sample applications. The exact scope is agreed before we begin.'],
      ['Can you design ad creatives for campaigns?', 'Yes. We design static and video creatives sized for Instagram, Facebook, Google and YouTube.'],
      ['Do I own the final designs?', 'Ownership terms are confirmed in writing when the project is agreed. Contact us to discuss your requirement.'],
    ],
  },
  'website-development': {
    summary: 'MeriAsk builds fast, mobile-friendly websites, landing pages and e-commerce stores using modern frameworks like Next.js or WordPress, with SEO foundations, lead forms and analytics in place from day one.',
    faqs: [
      ['Should I choose WordPress or a custom Next.js website?', 'WordPress suits content-heavy sites managed by non-technical teams. Custom Next.js suits speed-focused, highly customized or app-like sites. We recommend based on your needs.'],
      ['Will my website be SEO friendly?', 'Yes. We set up clean structure, metadata, speed optimization and schema so search engines and AI assistants can understand your pages.'],
      ['Can you redesign my existing website?', 'Yes. We can redesign and optimize an existing site while protecting its current search visibility.'],
    ],
  },
  'seo': {
    summary: 'SEO improves how easily customers find your business on Google and AI assistants. MeriAsk covers on-page, technical and local SEO, keyword research, content and link building, and also prepares your site to be cited by AI search tools.',
    faqs: [
      ['How long does SEO take?', 'SEO is gradual. Many sites see movement in a few months, but timing depends on competition, site quality and consistency. We do not promise rankings.'],
      ['What is AI SEO or GEO?', 'It is making your content clear, structured and trustworthy so tools like ChatGPT, Perplexity, Gemini and Google AI Overviews can understand and cite it. It builds on good traditional SEO.'],
      ['Do you handle Google Business Profile?', 'Yes. Local SEO includes profile optimization, reviews strategy, citations and location-focused content.'],
    ],
  },
  'ecommerce-marketing': {
    summary: 'E-commerce marketing grows online store sales through product ads, shopping campaigns, marketplace marketing on Amazon and Flipkart, Shopify optimization and product SEO.',
    faqs: [
      ['Do you work with Shopify and marketplaces?', 'Yes. We support Shopify and WordPress stores as well as Amazon and Flipkart marketing.'],
      ['What ads work best for online stores?', 'Usually a mix of Meta catalog and retargeting ads, Google Shopping and search. We test to find what works for your products.'],
      ['Can you improve my product pages?', 'Yes. Product titles, descriptions, images and SEO all affect conversions and we can optimize them.'],
    ],
  },
  'ai-marketing-services': {
    summary: 'AI marketing uses tools like chatbots, AI content, image and video generation and automated customer support to help businesses create more, respond faster and save time, with human review for quality.',
    faqs: [
      ['Will AI content sound generic?', 'Not if it is guided well. We train prompts on your brand voice and review outputs so content stays accurate and on-brand.'],
      ['Can you build a chatbot for my website?', 'Yes. We can build chatbots that answer common questions and capture leads for your team.'],
      ['Is AI-generated content safe for SEO?', 'Helpful, accurate content that is reviewed by a human can perform well. We avoid low-quality mass-produced pages.'],
    ],
  },
  'automation-services': {
    summary: 'Automation removes repetitive work from your business: WhatsApp and email follow-ups, CRM updates, lead routing, auto replies and workflows connecting your forms, sheets and tools.',
    faqs: [
      ['What can be automated?', 'Lead capture to sheet or CRM, instant WhatsApp or email replies, follow-up reminders, reports and simple internal workflows.'],
      ['Do I need expensive software?', 'Not always. Many automations run on affordable tools and Google Sheets. We suggest the simplest option that works.'],
      ['Is WhatsApp automation allowed?', 'Business messaging must follow WhatsApp policies and consent rules. We set up compliant flows through official options where needed.'],
    ],
  },
  'saas-app-development': {
    summary: 'MeriAsk plans and builds SaaS products end to end: MVP scoping, user management, admin dashboards, subscriptions and payments, APIs, analytics and cloud deployment.',
    faqs: [
      ['How do you approach an MVP?', 'We define the core problem, choose the smallest set of features that proves it, build that first, and expand based on user feedback.'],
      ['Can you add payments and subscriptions?', 'Yes. Subscription billing, payment gateways and user roles are part of typical SaaS builds.'],
      ['Who owns the code?', 'Ownership and handover terms are agreed in writing at the start of a project.'],
    ],
  },
  'mobile-app-development': {
    summary: 'MeriAsk builds Android and cross-platform Flutter apps: UI/UX design, backend and API integration, push notifications, Play Store setup and ongoing maintenance.',
    faqs: [
      ['Android only or iOS too?', 'Flutter lets us target both platforms from one codebase. We confirm the right approach for your goals and budget.'],
      ['Do you publish the app on Play Store?', 'Yes. Store listing, assets and release setup are part of the service.'],
      ['Can you maintain the app after launch?', 'Yes. We offer updates, bug fixes and improvements after launch.'],
    ],
  },
  'thumbnail-creative-design': {
    summary: 'Thumbnail and creative design covers YouTube and podcast thumbnails, reel covers, banners, posters and promotional creatives designed to stand out and earn clicks.',
    faqs: [
      ['How many revisions are included?', 'Revision limits are agreed per order. We aim to get it right quickly with a clear brief.'],
      ['Can you match my channel style?', 'Yes. We follow your brand colors and style, or help define one.'],
      ['Do you design gaming and news thumbnails?', 'Yes. We create thumbnails for gaming, news, podcasts, education and more.'],
    ],
  },
  'game-development': {
    summary: 'MeriAsk develops mobile and web games, from hyper-casual prototypes to polished titles, including game UI, ad and in-app purchase integration, leaderboards and Play Store publishing.',
    faqs: [
      ['What kinds of games can you build?', 'Casual and hyper-casual mobile games, web and HTML5 games and simple multiplayer or leaderboard-based games. Share your idea and we will scope it.'],
      ['Can you add monetization?', 'Yes. Rewarded ads, banner ads and in-app purchases can be integrated.'],
      ['Do you help publish the game?', 'Yes. We help with build preparation and Play Store publishing.'],
    ],
  },
}

export const industryDetails: Record<string, { summary: string; challenges: string[]; help: string[]; faqs: FAQ[] }> = {
  'real-estate-marketing': {
    summary: 'Real estate buyers research heavily online before contacting anyone. MeriAsk helps builders, brokers and agents generate site-visit inquiries with Meta and Google Ads, listing landing pages, local SEO and WhatsApp follow-up.',
    challenges: ['Low quality or fake inquiries', 'Slow follow-up on leads', 'Standing out in a crowded local market'],
    help: ['Project and listing landing pages with lead forms', 'Meta and Google Ads targeted by location and budget', 'WhatsApp and CRM follow-up automation'],
    faqs: [['Can you generate leads for a single project?', 'Yes. We build a project-specific landing page and campaign around it.'], ['How do you improve lead quality?', 'By using qualifying questions in forms, precise targeting and feedback from your sales team.']],
  },
  'education-marketing': {
    summary: 'Coaching centers, schools and course creators depend on admissions and enrollments. MeriAsk helps with local visibility, admission-season ad campaigns, YouTube and social content, and inquiry follow-up.',
    challenges: ['Seasonal admission cycles', 'Competing with bigger brands', 'Converting inquiries into enrollments'],
    help: ['Admission and demo-class lead campaigns', 'YouTube, Instagram and content strategy for trust', 'Landing pages and WhatsApp counselling flows'],
    faqs: [['Can you promote online courses?', 'Yes. We build funnels for webinars, demo classes and course sales.'], ['Do you help with Google Maps visibility for institutes?', 'Yes. Local SEO and Google Business Profile optimization are included in our approach.']],
  },
  'healthcare-marketing': {
    summary: 'Patients look for trusted clinics and doctors online. MeriAsk helps clinics, dentists, wellness and diagnostic centers build credibility through local SEO, reputation, informative content and compliant advertising.',
    challenges: ['Building patient trust online', 'Strict advertising rules', 'Getting found in local search'],
    help: ['Google Business Profile and local SEO', 'Informative content and reputation building', 'Appointment landing pages and WhatsApp booking'],
    faqs: [['Do you follow healthcare advertising rules?', 'We avoid misleading claims and guarantees, and align messaging with platform and applicable regulatory guidelines. Please review final content with your compliance requirements.'], ['Can you set up online appointment booking?', 'Yes. We can add booking forms and WhatsApp-based appointment flows.']],
  },
  'local-business-marketing': {
    summary: 'Local businesses grow when nearby customers find and trust them. MeriAsk helps shops, salons, restaurants, gyms and service providers with Google Maps, local ads, social media and reviews.',
    challenges: ['Being invisible on Google Maps', 'Few customer reviews', 'Inconsistent social media presence'],
    help: ['Google Business Profile optimization', 'Local Meta and Google Ads', 'Social media management and review generation'],
    faqs: [['I only serve one city. Is this suitable?', 'Yes. Local targeting is one of the strongest uses of online marketing.'], ['What is a good starting plan?', 'Our Starter Growth and Business Growth plans are designed for local businesses.']],
  },
  'ecommerce-growth': {
    summary: 'Online stores need traffic that converts and customers who return. MeriAsk helps with product ads, shopping campaigns, marketplace marketing, store optimization and retention.',
    challenges: ['Rising ad costs', 'Low conversion on product pages', 'Building repeat customers'],
    help: ['Meta catalog and Google Shopping campaigns', 'Product page and store optimization', 'Email and WhatsApp retention flows'],
    faqs: [['Do you work with Shopify and WooCommerce?', 'Yes, along with Amazon and Flipkart marketing.'], ['Can you fix my product SEO?', 'Yes. Titles, descriptions, structure and schema are part of e-commerce SEO.']],
  },
  'personal-brand-growth': {
    summary: 'Founders, creators, coaches and consultants win when people know and trust them. MeriAsk helps build a personal brand across LinkedIn, Instagram and YouTube with content, design and search visibility.',
    challenges: ['Staying consistent with content', 'Standing out in a crowded niche', 'Turning attention into clients'],
    help: ['Content planning, reels and thumbnails', 'Profile and website setup that builds authority', 'Lead capture through landing pages and WhatsApp'],
    faqs: [['Can you manage my profiles for me?', 'Yes. We can plan, design and post on your behalf with your approval.'], ['Do you create a personal website?', 'Yes. A clean personal website supports search visibility and credibility.']],
  },
}

export const productDetails: Record<string, { tag: string; text: string }> = {
  'MeriAsk Review Booster': { tag: 'Marketing SaaS', text: 'A tool designed to help businesses request and grow customer reviews to strengthen local reputation.' },
  'MeriAsk Social Scheduler': { tag: 'Social Media Tool', text: 'Plan and schedule social media content in one place to keep accounts consistent.' },
  'ClipForge': { tag: 'Creator Tool', text: 'A video and clip creation tool built for creators and marketers producing short-form content.' },
  'Okay KRC PG Manager': { tag: 'Management App', text: 'A management system for PG and hostel owners to organize residents, rooms and records.' },
  'Business Calculator Toolkit': { tag: 'Utility Toolkit', text: 'A collection of practical calculators for everyday business and finance needs.' },
  'Convertix Pro': { tag: 'Utility App', text: 'A conversion utility built for fast, simple everyday conversions.' },
  'QR Barcode Scanner': { tag: 'Utility App', text: 'An app for scanning and working with QR codes and barcodes.' },
  'Varasko AI': { tag: 'AI Product', text: 'An AI-powered product built by the MeriAsk team.' },
}

export const buildCategories = [
  { title: 'Website Development', slug: 'website-development', text: 'Business websites, landing pages and e-commerce stores built for speed, SEO and lead capture.', items: ['Corporate & portfolio sites', 'High-converting landing pages', 'Online stores', 'Redesigns and speed optimization'] },
  { title: 'Mobile App Development', slug: 'mobile-app-development', text: 'Android and Flutter apps from idea to Play Store, with clean UI and reliable backend.', items: ['Business and utility apps', 'Admin dashboards', 'Push notifications', 'Play Store publishing'] },
  { title: 'Game Development', slug: 'game-development', text: 'Casual and web games with monetization, leaderboards and store-ready builds.', items: ['Hyper-casual games', 'HTML5 web games', 'Ads and in-app purchases', 'Game UI/UX'] },
  { title: 'SaaS Development', slug: 'saas-app-development', text: 'Subscription software with user management, payments, dashboards and APIs.', items: ['MVP planning', 'Subscription billing', 'Admin and analytics dashboards', 'Cloud deployment'] },
  { title: 'Social Media Management', slug: 'smma-account-handling', text: 'Daily account handling with content planning, creatives and reporting.', items: ['Content calendars', 'Reels and creatives', 'Community management', 'Monthly analytics'] },
  { title: 'Performance Marketing', slug: 'performance-marketing', text: 'Funnels and campaigns built around cost per lead and measurable conversions.', items: ['Funnel strategy', 'Conversion tracking', 'CRO and landing pages', 'Transparent reporting'] },
  { title: 'Meta & Google Ads', slug: 'meta-ads', text: 'Search, display, shopping and social ad campaigns with regular optimization.', items: ['Lead generation ads', 'Search and shopping ads', 'Retargeting', 'Budget management'] },
]

export type Post = { slug: string; title: string; description: string; date: string; readMins: number; sections: { h: string; p: string[] }[] }

const basePosts: Post[] = [
  {
    slug: 'how-to-get-your-business-cited-by-chatgpt-and-ai-search',
    title: 'How to Get Your Business Found by ChatGPT, Perplexity and Google AI Overviews',
    description: 'A practical AI SEO (GEO) checklist for businesses that want to be understood and cited by AI search tools.',
    date: '2026-09-28', readMins: 4,
    sections: [
      { h: 'What is AI SEO?', p: ['AI SEO, also called generative engine optimization (GEO), is the practice of making your website easy for AI tools to understand, trust and quote. Assistants like ChatGPT, Perplexity, Gemini and Google AI Overviews build answers from web pages, so clear and credible pages have a better chance of being used.', 'It does not replace traditional SEO. It builds on it. If your site cannot be crawled or your content is thin, AI tools have little to work with.'] },
      { h: 'A practical checklist', p: ['Start with access: allow search and AI crawlers in robots.txt, submit a sitemap and make sure important pages load without needing scripts to show the main text.', 'Write answer-first content. Put a direct two or three sentence answer at the top of each page, then add detail. Use question-style headings that match how people ask.', 'Add structured data such as Organization, Service, FAQPage and Article schema so machines can read who you are and what you offer.', 'Build trust signals: a real About page, named authors, contact details, reviews and consistent business information across Google Business Profile, LinkedIn and social profiles.', 'Keep content fresh and specific. Original examples, clear pricing structure and updated dates help.'] },
      { h: 'What about llms.txt?', p: ['llms.txt is a proposed plain text file that summarizes your site for language models. It is cheap to add, but major AI platforms have not confirmed that they rely on it, so treat it as a small extra and not the main strategy.'] },
      { h: 'Where to start', p: ['Fix the basics first, then improve your most important service pages. If you would like help auditing your site for AI search, MeriAsk offers SEO and AI SEO support.'] },
    ],
  },
  {
    slug: 'meta-ads-vs-google-ads-for-local-business',
    title: 'Meta Ads vs Google Ads: Which Should a Local Business Start With?',
    description: 'How to choose between Facebook/Instagram ads and Google Ads based on customer intent, budget and goals.',
    date: '2026-09-28', readMins: 4,
    sections: [
      { h: 'The core difference: intent', p: ['Google Ads shows your business to people actively searching, such as "dentist near me". These people often have high intent, but each click can cost more. Meta Ads shows your business to people scrolling Facebook and Instagram. They were not searching, but you can reach them with visuals and offers at lower cost per click in many markets.'] },
      { h: 'When Google Ads makes sense', p: ['Choose Google first when customers already search for your service and you need inquiries quickly: repair services, clinics, lawyers, movers, and many local services. Make sure you track calls and form fills.'] },
      { h: 'When Meta Ads makes sense', p: ['Choose Meta first when your product is visual or impulse-driven, when you need awareness, or when you want cheap WhatsApp inquiries: salons, restaurants, fashion, real estate projects, courses and events.'] },
      { h: 'The smart approach', p: ['Many businesses run both. Use Google to capture demand that already exists and Meta to create demand and retarget visitors. Start with the platform that matches your customer behavior, prove it works, then add the second.', 'Whichever you choose, fix the landing page and follow-up speed. Fast replies on WhatsApp often matter more than small changes to the ad.'] },
    ],
  },
  {
    slug: 'google-business-profile-checklist-for-local-seo',
    title: 'Google Business Profile Checklist: 10 Steps to Rank Better on Google Maps',
    description: 'A simple checklist to optimize your Google Business Profile and improve local visibility.',
    date: '2026-09-28', readMins: 3,
    sections: [
      { h: 'Why your profile matters', p: ['For local searches, Google often shows a map with three businesses first. Your Google Business Profile decides whether you appear there, and it is free to optimize.'] },
      { h: 'The checklist', p: ['1. Claim and verify your profile. 2. Choose the most accurate primary category. 3. Add your exact business name, address and phone number consistent with your website. 4. Write a clear business description with your main services. 5. Add all services and products. 6. Set accurate working hours. 7. Upload real photos of your work, place and team. 8. Ask happy customers for reviews and reply to every review. 9. Post updates and offers regularly. 10. Add a link to your website and, where allowed, a booking or WhatsApp link.'] },
      { h: 'Keep it consistent', p: ['Your business name, address and phone number should match across your website, social profiles and directories. Consistency helps Google and AI tools trust your information.'] },
    ],
  },
  {
    slug: 'website-or-landing-page-what-does-your-business-need',
    title: 'Website or Landing Page: What Does Your Business Need?',
    description: 'Understand the difference between a business website and a landing page, and when to use each.',
    date: '2026-09-28', readMins: 3,
    sections: [
      { h: 'A landing page has one job', p: ['A landing page focuses on a single action such as requesting a quote or booking a demo. It removes distractions, which is why it works well for ad campaigns.'] },
      { h: 'A website builds trust and search visibility', p: ['A full website explains who you are, lists services, shows proof and helps you rank in search. It is where visitors go to check that you are real before contacting you.'] },
      { h: 'How to choose', p: ['If you are running ads for one offer, start with a landing page. If you want long-term search traffic, credibility and multiple services, build a website. Most growing businesses eventually need both, and they should share a consistent brand.'] },
    ],
  },
  {
    slug: 'whatsapp-lead-follow-up-automation-basics',
    title: 'WhatsApp Lead Follow-Up: How to Reply Faster Without Hiring More Staff',
    description: 'Simple ways to capture, organize and follow up on leads with WhatsApp and Google Sheets.',
    date: '2026-09-28', readMins: 3,
    sections: [
      { h: 'Speed wins leads', p: ['Most inquiries come from people who contacted several businesses. The business that replies first and clearly often has the advantage. Manual follow-up breaks down when inquiries grow.'] },
      { h: 'A simple system', p: ['Capture every inquiry from forms, ads and calls into one Google Sheet. Send an instant acknowledgement message. Assign a follow-up owner and reminder. Track status as new, contacted, quoted or won.'] },
      { h: 'Stay compliant', p: ['Use WhatsApp for people who have contacted you or agreed to receive messages, and follow WhatsApp Business policies. Automation should help humans respond, not spam.'] },
    ],
  },
  {
    slug: 'how-to-plan-a-saas-mvp',
    title: 'How to Plan a SaaS MVP in 4 Steps',
    description: 'A practical way to scope your first SaaS product without overbuilding.',
    date: '2026-09-28', readMins: 3,
    sections: [
      { h: '1. Define one problem', p: ['Write down who the user is and the single problem you solve. If you cannot explain it in two sentences, the scope is too big.'] },
      { h: '2. List the smallest useful feature set', p: ['Separate must-haves from nice-to-haves. An MVP usually needs sign up, one core workflow, a simple dashboard and a way to pay or request access.'] },
      { h: '3. Choose a simple stack and launch plan', p: ['Pick technology your team can maintain. Plan hosting, payments, analytics and a way to collect user feedback from day one.'] },
      { h: '4. Launch, learn and iterate', p: ['Release to a small group, watch how they use it, and improve based on real behavior. This is cheaper and safer than building everything upfront.'] },
    ],
  },
]

import { morePosts } from './posts2'
export const posts: Post[] = [...basePosts, ...morePosts]
