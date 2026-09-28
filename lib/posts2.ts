import type { Post } from './content'
const D = '2026-09-28'
const mk = (slug: string, title: string, description: string, readMins: number, sections: { h: string; p: string[] }[]): Post => ({ slug, title, description, date: D, readMins, sections })

export const morePosts: Post[] = [
  mk('what-is-seo-beginners-guide-for-business-owners', 'What Is SEO? A Beginner’s Guide for Business Owners', 'SEO explained in plain language: how search engines work, what to fix first and how long it takes.', 4, [
    { h: 'SEO in one paragraph', p: ['SEO, or search engine optimization, is the work of making your website easier for search engines to find, understand and recommend when people search for what you sell. Unlike ads, you do not pay per click, but it takes time and steady effort.'] },
    { h: 'The three parts of SEO', p: ['Technical SEO makes sure your site loads fast, works on mobile and can be crawled. On-page SEO makes each page clear: a useful title, headings that match what people search, and helpful content. Off-page SEO builds trust through links, mentions and reviews from other websites and platforms.'] },
    { h: 'What to fix first', p: ['Start with the basics: a fast mobile-friendly site, one clear page per service, unique titles and descriptions, and a Google Business Profile if you serve local customers. Then add helpful content that answers the questions your customers ask.'] },
    { h: 'How long does it take?', p: ['Most sites need a few months before results become visible, and competitive keywords take longer. Be careful with anyone who guarantees rankings, because no one controls Google.'] },
  ]),
  mk('how-to-get-more-google-reviews-ethically', 'How to Get More Google Reviews (the Right Way)', 'Simple, policy-friendly ways to collect genuine Google reviews and build local trust.', 3, [
    { h: 'Why reviews matter', p: ['Reviews influence whether people call you, and they are a signal in local search. A steady flow of recent, genuine reviews builds trust faster than almost any ad.'] },
    { h: 'Make it easy', p: ['Create your Google review link from your Business Profile and share it by WhatsApp or SMS right after a happy customer interaction. A QR code at your counter or on invoices also works well.'] },
    { h: 'What to avoid', p: ['Do not buy reviews, write fake ones or offer rewards in exchange for positive ratings. These break Google’s policies and can get reviews removed or your profile suspended.'] },
    { h: 'Reply to every review', p: ['Thank people for good reviews and respond calmly and helpfully to negative ones. Future customers read your replies, not only the ratings.'] },
  ]),
  mk('30-day-instagram-content-calendar-for-small-business', 'How to Plan a 30-Day Instagram Content Calendar', 'A practical framework for planning a month of Instagram posts, Reels and stories for a small business.', 4, [
    { h: 'Start with content pillars', p: ['Choose three to five themes your audience cares about, for example education, behind the scenes, customer stories, offers and product highlights. Every post should fit one pillar.'] },
    { h: 'Mix the formats', p: ['Use Reels to reach new people, carousels to teach and be saved, single images for announcements and stories for daily updates and polls. A balanced mix keeps your feed useful and varied.'] },
    { h: 'Build the calendar', p: ['Decide how many posts you can sustain weekly, assign a pillar and format to each day, then batch-create content in one or two sessions. Consistency beats occasional bursts.'] },
    { h: 'Review monthly', p: ['Check which posts earned the most saves, shares and inquiries, and repeat what works. Treat your calendar as a plan you improve every month.'] },
  ]),
  mk('google-ads-search-campaign-structure-for-beginners', 'Google Ads Search Campaigns: A Simple Structure for Beginners', 'How to organize campaigns, ad groups, keywords and negatives so your budget is not wasted.', 4, [
    { h: 'Keep it organized', p: ['A search campaign is made of ad groups, and each ad group should focus on one tight theme, such as one service. This keeps keywords, ads and landing page closely matched.'] },
    { h: 'Choose keywords by intent', p: ['Target phrases that show buying intent, like a service plus a location or "near me". Start with phrase and exact match to keep traffic relevant, and expand as you learn.'] },
    { h: 'Add negative keywords', p: ['Negative keywords stop your ads showing for irrelevant searches such as "free", "jobs" or "course" if you do not offer them. Review the search terms report weekly and add negatives.'] },
    { h: 'Track conversions', p: ['Set up tracking for calls, form submissions and WhatsApp clicks. Without conversion data you cannot tell which keywords bring real inquiries.'] },
  ]),
  mk('facebook-instagram-lead-ad-creative-tips', 'Meta Lead Ad Creative Tips That Improve Lead Quality', 'How to write and design Facebook and Instagram lead ads that attract serious inquiries.', 3, [
    { h: 'Lead with the customer’s problem', p: ['The first line and image should show the problem you solve or the outcome people want. Clear beats clever.'] },
    { h: 'Be specific about the offer', p: ['State what people get, who it is for and what happens next. Specific offers attract people who are ready to act and reduce time-wasters.'] },
    { h: 'Use real visuals', p: ['Authentic photos and short videos of your work often perform better than generic stock images, because people trust what looks real.'] },
    { h: 'Add a qualifying question', p: ['One extra question in your lead form, such as budget range or timeline, can lower lead volume slightly but raises quality. Follow up quickly, ideally within minutes.'] },
  ]),
  mk('8-elements-of-a-high-converting-landing-page', '8 Elements of a High-Converting Landing Page', 'What a landing page needs to turn visitors into inquiries.', 3, [
    { h: 'The essentials', p: ['1. A headline that states the offer clearly. 2. A short supporting line explaining who it is for. 3. One primary call to action, repeated down the page. 4. Proof such as reviews, client logos or real work you are allowed to show. 5. Benefits written in the customer’s language. 6. A short, simple form. 7. Answers to common objections in an FAQ. 8. Fast loading on mobile.'] },
    { h: 'Remove distractions', p: ['A landing page has one job. Avoid extra navigation and unrelated links that pull visitors away from the action you want.'] },
    { h: 'Test and improve', p: ['Change one element at a time, such as the headline or button text, and compare results over enough visitors to see a real difference.'] },
  ]),
  mk('why-website-speed-matters-and-how-to-improve-it', 'Why Website Speed Matters and 7 Ways to Improve It', 'Faster pages keep visitors, convert better and help SEO. Here is how to speed yours up.', 4, [
    { h: 'Speed affects business', p: ['Slow pages frustrate visitors, especially on mobile networks, and many leave before the page loads. Google also uses page experience signals, including Core Web Vitals, in search.'] },
    { h: 'Seven improvements', p: ['Compress and resize images. Use modern formats like WebP. Reduce heavy scripts and third-party widgets. Use a fast host or CDN. Enable caching. Lazy-load images below the fold. Keep your design simple and avoid unnecessary animation on mobile.'] },
    { h: 'Measure first', p: ['Use Google PageSpeed Insights and Search Console’s Core Web Vitals report to find what is slowing your pages, then fix the biggest issues first.'] },
  ]),
  mk('schema-markup-explained-for-business-owners', 'Schema Markup Explained for Business Owners', 'What structured data is, why it helps search engines and AI tools, and which types matter most.', 4, [
    { h: 'What is schema?', p: ['Schema markup is code added to a page that labels its information in a standard format, such as your business name, address, services, prices and FAQs. It helps search engines and AI tools understand your content without guessing.'] },
    { h: 'Types worth adding', p: ['Organization or LocalBusiness for who you are, Service for what you offer, FAQPage for questions and answers, Article for blog posts, Breadcrumb for page hierarchy, and Product with Offer for e-commerce.'] },
    { h: 'What it does and does not do', p: ['Schema can make you eligible for richer search results and helps machines interpret your pages. It does not guarantee rankings, and the markup must match visible content on the page.'] },
    { h: 'How to check it', p: ['Use Google’s Rich Results Test and the Schema Markup Validator to make sure your markup is valid.'] },
  ]),
  mk('youtube-seo-basics-for-new-channels', 'YouTube SEO Basics for New Channels', 'How to help your videos get found through titles, thumbnails, descriptions and watch time.', 4, [
    { h: 'Research before you record', p: ['Search YouTube and Google for topics your audience cares about, and note the phrases suggested in autocomplete. Build videos around real questions.'] },
    { h: 'Title and thumbnail work together', p: ['Use a clear title with your main phrase early, and a thumbnail that is easy to read on a phone. Together they decide whether people click.'] },
    { h: 'Optimize the description', p: ['Write a helpful description in the first lines, add timestamps and relevant links, and include your main topic naturally rather than stuffing keywords.'] },
    { h: 'Keep people watching', p: ['Open with a clear promise, cut filler and deliver on the title. Audience retention is one of the strongest signals for growth.'] },
  ]),
  mk('how-to-choose-a-digital-marketing-agency-10-questions', 'How to Choose a Digital Marketing Agency: 10 Questions to Ask', 'A checklist of questions that helps you spot a trustworthy agency.', 4, [
    { h: 'Questions to ask', p: ['1. Who will actually work on my account? 2. Will I own my ad accounts, website and data? 3. How do you report and how often? 4. What is included in the fee and what costs extra? 5. How do you handle ad spend? 6. Can I speak to the person doing the work? 7. What is your process for the first 30 days? 8. Which results will you track for my business? 9. What are the contract length and exit terms? 10. What would you not do for my business?'] },
    { h: 'Red flags', p: ['Be cautious of guaranteed rankings, guaranteed leads, unusually cheap promises, refusal to share account access or reports, and pressure to sign quickly.'] },
    { h: 'Green flags', p: ['Look for clear scope, honest expectations, transparent reporting, willingness to say no, and a team that understands your business before proposing a plan.'] },
  ]),
  mk('5-marketing-automations-every-small-business-can-set-up', '5 Marketing Automations Every Small Business Can Set Up', 'Simple automations that save time and stop leads from slipping through the cracks.', 4, [
    { h: 'Automations worth setting up', p: ['1. Send new website or ad inquiries to a Google Sheet or CRM automatically. 2. Send an instant acknowledgement by WhatsApp or email. 3. Remind your team to follow up if a lead is not contacted within a set time. 4. Ask customers for a review a few days after a purchase or service. 5. Send a monthly summary of leads and sales to your inbox.'] },
    { h: 'Start simple', p: ['You do not need expensive software. Forms, spreadsheets and affordable automation tools can handle most of this. Add complexity only when you feel real pain.'] },
    { h: 'Respect consent', p: ['Message people who contacted you or agreed to hear from you, and follow WhatsApp and email rules. Automation should help you respond faster, not spam people.'] },
  ]),
  mk('ecommerce-product-page-seo-checklist', 'E-commerce Product Page SEO Checklist', 'What to optimize on every product page to rank better and convert more.', 4, [
    { h: 'On-page basics', p: ['Write a unique title and description for each product, use one clear H1, and include the product name and key details naturally. Avoid copying manufacturer text across many stores.'] },
    { h: 'Images and trust', p: ['Use sharp, compressed images with descriptive file names and alt text, add real customer reviews, and show price, availability, shipping and return information clearly.'] },
    { h: 'Structured data', p: ['Add Product schema with price, availability and rating so search engines can show richer results, and make sure the data matches what is on the page.'] },
    { h: 'Site structure', p: ['Organize products into clear categories, link related products together and keep URLs short and readable. Fix out-of-stock pages with redirects or helpful alternatives.'] },
  ]),
]
