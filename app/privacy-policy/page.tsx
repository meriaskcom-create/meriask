import type { Metadata } from 'next'
import LegalPage from '@/components/LegalPage'
import { SITE, fullAddress } from '@/lib/site'

export const metadata: Metadata = { title: 'Privacy Policy', description: 'How MeriAsk collects, uses and protects your personal information.', alternates: { canonical: '/privacy-policy' } }

export default function Page() {
  return <LegalPage title="Privacy Policy" path="/privacy-policy" updated="28 September 2026"
    intro="This policy explains what information MeriAsk collects through meriask.com, how we use it and the choices you have."
    sections={[
      { h: 'Who we are', p: [`MeriAsk (“we”, “us”) is a digital marketing and technology agency located at ${fullAddress}. You can contact us at ${SITE.email} or ${SITE.phone}.`] },
      { h: 'Information we collect', p: ['Information you give us: when you submit our inquiry or consultation form or message us on WhatsApp, we collect your name, phone number, the service you are interested in and your message.', 'Information collected automatically: if analytics tools are enabled on our website, they may collect data such as pages visited, device and browser type, approximate location and referral source, using cookies or similar technologies.'] },
      { h: 'How we use your information', p: ['We use your information to respond to inquiries, prepare proposals, deliver services, improve our website and services, and communicate with you about your project. We do not sell your personal information.'] },
      { h: 'Third-party services', p: ['We may use trusted services to operate our website and business, such as hosting (Vercel), Google services (for example Google Sheets and Google Analytics), Meta tools (for example Meta Pixel) and WhatsApp. These providers process data under their own privacy policies.'] },
      { h: 'Cookies', p: ['Cookies help us understand how visitors use our site. You can control or delete cookies through your browser settings.'] },
      { h: 'Data retention and security', p: ['We keep inquiry information only as long as needed for the purposes above or as required by law. We use reasonable safeguards, but no online system is completely secure.'] },
      { h: 'Your rights', p: ['Under applicable law, including India’s Digital Personal Data Protection Act, 2023, you may request access to, correction of or deletion of your personal data, or withdraw consent, by contacting us at the email above.'] },
      { h: 'Children', p: ['Our services are intended for businesses and adults. We do not knowingly collect personal information from children.'] },
      { h: 'Changes to this policy', p: ['We may update this policy from time to time. The latest version will always be available on this page.'] },
      { h: 'Contact', p: [`For privacy questions, email ${SITE.email}.`] },
    ]} />
}
