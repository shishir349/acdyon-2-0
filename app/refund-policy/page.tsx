import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Refund Policy | AcdyOn',
  description: 'AcdyOn refund policy covering facilitation fees, cooling-off periods, and refund eligibility for academic pathway services.',
}

const sections = [
  {
    id: 'overview',
    title: '1. Overview',
    content: `This Refund Policy governs facilitation fees, onboarding charges, advisory payments, and related service fees paid in connection with academic facilitation, doctoral recognition pathways, DBA, PhD-equivalent, honorary doctorate, executive education, and international university coordination services offered under the AcdyOn brand.

By proceeding with any payment, registration, onboarding, or service engagement, the applicant acknowledges that they have read, understood, and agreed to the terms of this Refund Policy.

AcdyOn reserves the right to update or revise this Refund Policy from time to time. Any revised version published through official AcdyOn communication channels or website shall supersede prior versions.`,
  },
  {
    id: 'nature',
    title: '2. Nature of Services',
    content: `AcdyOn operates as an academic facilitation, advisory, onboarding, and institutional coordination platform working alongside partner universities, educational institutions, and academic bodies.

Services may include: academic counselling and guidance, profile evaluation and assessment, application assistance, documentation review and support, institutional coordination, enrollment and onboarding assistance, and student relationship management.

AcdyOn does not independently function as a university or degree-awarding institution. Final admission, evaluation, and academic decisions remain solely with the respective partner institutions.`,
  },
  {
    id: 'cooling-off',
    title: '3. Cooling-Off Period',
    content: `Refund consideration may be available within 48 hours from the time of payment, provided that:

• No institutional submission has been initiated
• No onboarding or verification process has commenced
• No substantial administrative or operational processing has begun

Refund requests under this clause must be submitted in writing to: support@acdyon.com

Approved refunds may be subject to deduction of payment gateway charges, banking fees, currency conversion charges, and reasonable administrative costs already incurred.`,
  },
  {
    id: 'institutional',
    title: '4. Refund Eligibility After Institutional Submission',
    content: `Once an applicant's profile, application, or documentation has been formally submitted, processed, or shared with any university, institution, or academic partner, facilitation fees paid shall generally become non-refundable.

This is because operational, institutional, advisory, and coordination activities commence immediately following institutional processing.`,
  },
  {
    id: 'rejection',
    title: '5. University Rejection / Non-Shortlisting',
    content: `Refund consideration may arise where the applicant receives a formal and verifiable rejection or non-shortlisting determination from the designated academic partner institution.

Any refund under this clause shall:
• Remain subject to review and verification
• Exclude non-refundable operational and processing costs
• Depend on the stage of services already rendered

Applicants may be required to provide official documentation issued by the relevant institution for verification purposes.`,
  },
  {
    id: 'non-refundable',
    title: '6. Circumstances Where Refunds May Not Apply',
    content: `Refunds may ordinarily not apply in circumstances including but not limited to:

• Shortlisting or institutional acceptance
• Voluntary withdrawal by the applicant
• Personal, professional, or financial constraints
• Failure to complete required documentation or formalities
• Applicant non-cooperation or delays
• Misrepresentation or submission of false information
• Dissatisfaction with programme structure or timelines
• Institutional processing delays beyond reasonable control`,
  },
  {
    id: 'components',
    title: '7. Non-Refundable Components',
    content: `The following are non-refundable in all circumstances:

• Application processing charges
• Profile assessment fees
• Document verification costs
• Third-party administrative expenses
• Institutional coordination costs
• Banking and payment gateway charges
• Currency conversion charges
• Fees paid directly to universities or third-party institutions`,
  },
  {
    id: 'partner-fees',
    title: '8. Academic Partner Fees',
    content: `Any tuition fees, institutional charges, registration fees, or payments made toward partner universities or academic institutions shall remain governed exclusively by the independent policies of those institutions.

AcdyOn shall not be responsible for institutional refund decisions, academic outcomes, administrative timelines, or policy changes implemented by partner institutions.`,
  },
  {
    id: 'chargebacks',
    title: '9. Payment Disputes & Chargebacks',
    content: `Applicants are encouraged to contact the AcdyOn support team directly before initiating any payment dispute or chargeback through a bank, card provider, or payment gateway.

In cases involving unauthorized or bad-faith payment disputes, AcdyOn reserves the right to suspend services and take appropriate corrective measures where necessary.`,
  },
  {
    id: 'timeline',
    title: '10. Refund Processing Timeline',
    content: `Approved refunds, where applicable, are generally processed within 10–15 business days from completion of verification and documentation review.

Processing timelines may vary depending on banking systems, intermediary institutions, payment gateways, and international remittance procedures.`,
  },
  {
    id: 'liability',
    title: '11. Limitation of Liability',
    content: `To the maximum extent permitted under applicable law, AcdyOn shall not be liable for indirect, incidental, consequential, reputational, or opportunity-based losses arising from academic or institutional processes.

Any liability, if established, shall remain limited to the facilitation fees directly received for the relevant service engagement.`,
  },
  {
    id: 'jurisdiction',
    title: '12. Governing Entity & Jurisdiction',
    content: `This Refund Policy applies to services offered under the AcdyOn brand through affiliated operating entities and partners, depending on the applicable geography, payment channel, and service structure.

The applicable entity responsible for the transaction shall be identified in the relevant invoice, payment receipt, onboarding agreement, or official communication issued to the applicant.`,
  },
  {
    id: 'contact',
    title: '13. Contact Information',
    content: `For questions, clarification, or refund-related communication, please contact:

Email: support@acdyon.com
Website: www.acdyon.com
Operational Entities: AcdyOn Technologies LLC (USA) and affiliated operational partners including REBB Ventures Private Limited (India)`,
  },
]

export default function RefundPolicyPage() {
  return (
    <main className="bg-white">
      {/* Header */}
      <section className="border-b border-slate-200 bg-[#F8FAFC] pb-12 pt-36">
        <div className="container-premium max-w-4xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#1E40FF]">Legal</p>
          <h1 className="font-display text-4xl text-slate-950 sm:text-5xl">Refund Policy</h1>
          <p className="mt-4 text-slate-500">Last updated: May 11, 2026</p>
          <p className="mt-4 max-w-2xl text-slate-600">
            This policy governs all facilitation fees and service charges paid in connection with AcdyOn academic pathway services.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container-premium max-w-4xl">
          <div className="space-y-10">
            {sections.map(({ id, title, content }) => (
              <div key={id} id={id} className="scroll-mt-24">
                <h2 className="mb-4 font-display text-xl font-semibold text-slate-950">{title}</h2>
                <div className="rounded-[8px] border border-slate-200 bg-white p-6">
                  {content.split('\n\n').map((para, i) => (
                    <p key={i} className="mb-4 whitespace-pre-line text-sm leading-7 text-slate-600 last:mb-0">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-[8px] border border-[#1E40FF]/20 bg-[#1E40FF]/5 p-6">
            <p className="text-sm font-semibold text-slate-950">Questions about this policy?</p>
            <p className="mt-1 text-sm text-slate-600">
              Contact us at{' '}
              <a href="mailto:support@acdyon.com" className="text-[#1E40FF] hover:underline">
                support@acdyon.com
              </a>{' '}
              — we aim to respond within 2 business days.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
