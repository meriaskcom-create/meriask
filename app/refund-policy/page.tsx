import type { Metadata } from 'next'
import LegalPage from '@/components/LegalPage'
import { SITE } from '@/lib/site'

export const metadata: Metadata = { title: 'Refund Policy', description: 'MeriAsk refund and cancellation policy for packages and projects.', alternates: { canonical: '/refund-policy' } }

export default function Page() {
  return <LegalPage title="Refund Policy" path="/refund-policy" updated="28 September 2026"
    intro="We want you to feel confident before you start. This policy explains how cancellations and refunds work for MeriAsk services."
    sections={[
      { h: 'Free consultation', p: ['Our initial consultation is free and carries no obligation.'] },
      { h: 'Monthly packages', p: ['Monthly plans are billed in advance. You can cancel before the next billing cycle with reasonable written notice. Fees for a cycle that has already started are non-refundable because planning and work begin immediately.'] },
      { h: 'Project-based work', p: ['For websites, apps, games, SaaS, automation and design projects, an advance payment is taken to start work. Once work has begun, the advance covers time and resources already committed. If a project is cancelled, we will review completed work and may refund any portion of the advance that does not correspond to work already done, at our reasonable discretion.'] },
      { h: 'Advertising spend', p: ['Money spent on ad platforms such as Meta and Google is paid to those platforms and cannot be refunded by MeriAsk. Any unused ad balance stays in your ad account under the platform’s own terms.'] },
      { h: 'Third-party costs', p: ['Domains, hosting, stock assets, paid tools and licences purchased on your behalf are non-refundable.'] },
      { h: 'Results', p: ['Refunds are not available because results differ from expectations, since we do not guarantee specific rankings, leads or sales. If you are unhappy with the quality of delivered work, contact us and we will work with you to correct it.'] },
      { h: 'How to request a refund', p: [`Email ${SITE.email} with your name, service and reason. We will respond within a reasonable time and, where a refund is approved, process it to the original payment method.`] },
    ]} />
}
