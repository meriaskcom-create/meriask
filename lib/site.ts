export const SITE = {
  name: 'MeriAsk',
  url: 'https://www.meriask.com',
  founded: '2023-08',
  foundedLabel: 'August 2023',
  workingDays: [1, 2, 3, 4, 5, 6], // 0=Sun ... 6=Sat. EDIT if your working days differ
  tagline: 'Digital Marketing & Business Growth Agency',
  description:
    'MeriAsk is a Jaipur-based digital growth agency offering SEO, Google Ads, Meta Ads, social media management, websites, apps, SaaS, automation and AI marketing for businesses across India and worldwide.',
  phone: '+91 96024 08560',
  phoneRaw: '919602408560',
  email: 'meriask.com@gmail.com',
  hours: '9:00 AM – 6:00 PM',
  address: {
    street: 'Shri Ram Villa, 24, Jaisinghpura, Bhankrota',
    city: 'Jaipur',
    region: 'Rajasthan',
    postal: '302026',
    country: 'IN',
  },
  socials: {
    Instagram: 'https://www.instagram.com/meriaskcom/',
    Facebook: 'https://www.facebook.com/profile.php?id=61589798027843',
    LinkedIn: 'https://www.linkedin.com/in/meriask-com/',
    YouTube: 'https://www.youtube.com/@Meriask_com',
  } as Record<string, string>,
  googleBusiness: 'https://share.google/sk3pLyqqsnrvdtmxT',
  founder: {
    name: 'Dinesh Kumar Sharma',
    role: 'Founder',
    experienceYears: 4,
    photo: '/founder-dinesh-kumar-sharma.jpg',
  },
}

export const fullAddress = `${SITE.address.street}, ${SITE.address.city}, ${SITE.address.region} ${SITE.address.postal}`
export const waLink = (text = 'Hi MeriAsk, I want to discuss my business requirement.') =>
  `https://wa.me/${SITE.phoneRaw}?text=${encodeURIComponent(text)}`
