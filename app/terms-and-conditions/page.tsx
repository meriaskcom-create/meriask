import type { Metadata } from 'next'
import LegalPage from '@/components/LegalPage'
import { SITE } from '@/lib/site'

export const metadata: Metadata = { title: 'Terms and Conditions', description: 'Terms governing the use of the MeriAsk website and services.', alternates: { canonical: '/terms-and-conditions' } }

export default function Page() {
  return <LegalPage title="Terms and Conditions" path="/terms-and-conditions" updated="28 September 2026"
    intro="These terms apply to your use of meriask.com and to services provided by MeriAsk. By using our website or engaging our services you agree to them."
    sections={[
      { h: 'Services', p: ['MeriAsk provides digital marketing, creative, website, app, game, SaaS, automation and AI services. The exact scope, deliverables, timeline and fees for each engagement are agreed in writing (for example by proposal, invoice or message) before work begins.'] },
      { h: 'Fees and payments', p: ['Fees are as quoted for each package or project. Monthly packages are billed in advance. Project work may be billed in milestones. Advertising spend on platforms such as Meta and Google is separate from our fees and is paid directly to the platform unless agreed otherwise.'] },
      { h: 'No guarantee of results', p: ['Marketing outcomes depend on many factors outside our control, including competition, budget, platform policies, your offer and market conditions. We do not guarantee specific rankings, leads, sales or return on ad spend.'] },
      { h: 'Client responsibilities', p: ['You agree to provide timely access, information and approvals, and confirm that content, logos and materials you supply do not infringe anyone’s rights. Delays in providing these may delay delivery.'] },
      { h: 'Accounts and access', p: ['Ad accounts, social accounts, domains and hosting should be owned by you. We work within them with the access you grant and you may revoke access at any time.'] },
      { h: 'Intellectual property', p: ['Unless agreed otherwise in writing, ownership of final deliverables transfers to you after full payment. We may retain rights in our pre-existing tools, code libraries and templates, and may showcase completed work in our portfolio unless you ask us not to.'] },
      { h: 'Confidentiality', p: ['We treat non-public business information you share with us as confidential and use it only to deliver the services.'] },
      { h: 'Limitation of liability', p: ['To the extent permitted by law, MeriAsk is not liable for indirect or consequential losses, and our total liability for any claim is limited to the fees paid to us for the service giving rise to the claim.'] },
      { h: 'Termination', p: ['Either party may end a monthly service with reasonable written notice. Fees for work already performed remain payable.'] },
      { h: 'Governing law', p: ['These terms are governed by the laws of India. Courts at Jaipur, Rajasthan have jurisdiction over any dispute.'] },
      { h: 'Contact', p: [`Questions about these terms? Email ${SITE.email}.`] },
    ]} />
}
