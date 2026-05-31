import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions | AcdyOn',
  description: 'AcdyOn terms and conditions governing use of our platform and academic pathway services.',
}

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: `By accessing or using the AcdyOn platform, website, or any services offered by AcdyOn Technologies LLC or its affiliated entities, you agree to be bound by these Terms and Conditions.

If you do not agree to these terms, please do not use our services. AcdyOn reserves the right to update these terms at any time. Continued use of our services following any update constitutes acceptance of the revised terms.`,
  },
  {
    title: '2. Nature of AcdyOn Services',
    content: `AcdyOn operates as an academic facilitation, advisory, and institutional coordination platform. Our services include:

• Academic pathway consultation and eligibility assessment
• Profile review and programme matching
• Application guidance and documentation support
• Coordination with partner universities and academic institutions
• Onboarding and student relationship management

AcdyOn is not a university, degree-awarding institution, or accreditation body. Academic decisions, credential conferral, and admissions outcomes are made exclusively by partner institutions.`,
  },
  {
    title: '3. Eligibility',
    content: `You must be at least 18 years of age to use our services. By using our platform, you represent that you are legally capable of entering into binding agreements and that all information provided is accurate and truthful.

Providing false, misleading, or inaccurate information may result in termination of services without refund.`,
  },
  {
    title: '4. User Obligations',
    content: `You agree to:

• Provide accurate and complete information at all stages of engagement
• Respond to requests for documentation or clarification in a timely manner
• Not misrepresent your qualifications, experience, or professional background
• Use our services only for lawful purposes
• Maintain the confidentiality of any login credentials provided
• Not reproduce, distribute, or commercialise our content without written consent`,
  },
  {
    title: '5. Fees and Payments',
    content: `Service fees are outlined in the relevant programme or service agreement provided prior to engagement. By making payment, you confirm acceptance of the applicable fee structure and our Refund Policy.

All fees are quoted in the currency stated in your service agreement. AcdyOn is not responsible for currency conversion charges imposed by your bank or payment provider.`,
  },
  {
    title: '6. No Guarantee of Outcomes',
    content: `AcdyOn does not guarantee admission, conferral, accreditation outcomes, or specific academic results. Institutional decisions are made independently by partner universities and are outside AcdyOn's control.

We commit to providing professional guidance and support throughout the process. However, programme selection, eligibility confirmation, and final outcomes rest with the relevant academic institutions.`,
  },
  {
    title: '7. Intellectual Property',
    content: `All content on the AcdyOn platform — including text, graphics, logos, course materials, and programme documentation — is the intellectual property of AcdyOn Technologies LLC or its licensors.

You may not reproduce, copy, distribute, or create derivative works from our content without prior written consent.`,
  },
  {
    title: '8. Limitation of Liability',
    content: `To the fullest extent permitted by applicable law, AcdyOn shall not be liable for indirect, incidental, special, consequential, or punitive damages arising from:

• Use or inability to use our services
• Academic or institutional decisions made by partner institutions
• Delays in programme processing or admissions timelines
• Third-party actions or omissions

Our total liability in connection with any service shall not exceed the fees paid by you for that specific service engagement.`,
  },
  {
    title: '9. Confidentiality',
    content: `AcdyOn treats all applicant information with strict confidentiality. Profile documents, application materials, and correspondence are shared with partner institutions only as necessary for the service being provided.

We do not sell, rent, or commercially exploit your personal or professional information.`,
  },
  {
    title: '10. Termination',
    content: `AcdyOn reserves the right to suspend or terminate services in cases involving:

• Provision of false or misleading information
• Non-cooperation or persistent failure to respond
• Breach of these Terms and Conditions
• Actions that may harm AcdyOn's reputation or operations

Termination does not automatically entitle the applicant to a refund. Refund eligibility in such cases is governed by our Refund Policy.`,
  },
  {
    title: '11. Governing Law',
    content: `These Terms and Conditions are governed by the laws of the State of Wyoming, United States, without regard to conflict of law principles.

For services delivered through REBB Ventures Private Limited, the laws of India may apply to the extent relevant to the service engagement. The applicable jurisdiction will be specified in your service agreement.`,
  },
  {
    title: '12. Contact',
    content: `For questions about these Terms and Conditions:

Email: admissions@acdyon.com
Website: www.acdyon.com
AcdyOn Technologies LLC, Wyoming, United States`,
  },
]

export default function TermsAndConditionsPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-slate-200 bg-[#F8FAFC] pb-12 pt-36">
        <div className="container-premium max-w-4xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#1E40FF]">Legal</p>
          <h1 className="font-display text-4xl text-slate-950 sm:text-5xl">Terms &amp; Conditions</h1>
          <p className="mt-4 text-slate-500">Last updated: May 2026</p>
          <p className="mt-4 max-w-2xl text-slate-600">
            These terms govern your use of the AcdyOn platform and all academic facilitation services provided under the AcdyOn brand.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-premium max-w-4xl">
          <div className="space-y-10">
            {sections.map(({ title, content }) => (
              <div key={title}>
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
            <p className="text-sm font-semibold text-slate-950">Questions about these terms?</p>
            <p className="mt-1 text-sm text-slate-600">
              Contact{' '}
              <a href="mailto:admissions@acdyon.com" className="text-[#1E40FF] hover:underline">admissions@acdyon.com</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
