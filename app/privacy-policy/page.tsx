import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | AcdyOn',
  description: 'AcdyOn privacy policy — how we collect, use, and protect your personal information.',
}

const sections = [
  {
    title: '1. Introduction',
    content: `AcdyOn Technologies LLC ("AcdyOn", "we", "our", or "us") is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you use our website, services, and academic pathway programmes.

By accessing our platform or engaging with our services, you consent to the practices described in this policy.`,
  },
  {
    title: '2. Information We Collect',
    content: `We may collect the following categories of information:

Personal Identification: Name, email address, phone number, and country of residence.

Professional Information: Job title, organisation, years of experience, educational background, and career goals.

Application Data: Submitted documents, academic transcripts, professional credentials, and supporting materials provided during the consultation or application process.

Usage Data: IP address, browser type, pages visited, time spent on site, and referral sources collected automatically when you use our website.

Communications: Records of correspondence, consultation notes, and support interactions.`,
  },
  {
    title: '3. How We Use Your Information',
    content: `We use collected information to:

• Provide academic pathway consultation, eligibility assessment, and programme guidance
• Match your profile with appropriate partner institutions
• Process applications and coordinate with partner universities
• Communicate programme updates, deadlines, and relevant information
• Improve our platform, services, and user experience
• Comply with legal obligations and resolve disputes
• Send relevant educational content and updates (where consent is given)`,
  },
  {
    title: '4. Sharing of Information',
    content: `We do not sell your personal information. We may share information with:

Partner Institutions: Universities and academic bodies require your profile and application documents to assess eligibility and process admissions.

Operational Partners: REBB Ventures Private Limited (India) and affiliated entities that assist in delivering our services.

Service Providers: Technology providers, payment processors, and communication platforms used to operate our platform — bound by confidentiality obligations.

Legal Requirements: Where required by law, regulation, or legal process.`,
  },
  {
    title: '5. Data Retention',
    content: `We retain personal information for as long as necessary to provide our services and fulfil the purposes outlined in this policy, or as required by applicable law.

Application data is typically retained for the duration of the academic programme engagement plus a reasonable period thereafter for record-keeping and support purposes.`,
  },
  {
    title: '6. Your Rights',
    content: `Depending on your location, you may have the right to:

• Access the personal information we hold about you
• Request correction of inaccurate or incomplete data
• Request deletion of your personal information (subject to legal obligations)
• Withdraw consent for marketing communications at any time
• Lodge a complaint with a relevant data protection authority

To exercise these rights, contact us at: privacy@acdyon.com`,
  },
  {
    title: '7. Cookies',
    content: `We use cookies and similar tracking technologies to enhance your experience on our website. Please refer to our Cookie Policy for detailed information on the types of cookies used and how to manage your preferences.`,
  },
  {
    title: '8. Security',
    content: `We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet is completely secure and we cannot guarantee absolute security.`,
  },
  {
    title: '9. International Transfers',
    content: `AcdyOn operates globally. Your information may be transferred to and processed in countries other than your country of residence, including the United States and India. We take steps to ensure such transfers comply with applicable data protection laws.`,
  },
  {
    title: '10. Changes to This Policy',
    content: `We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. Continued use of our services after changes are posted constitutes acceptance of the revised policy.`,
  },
  {
    title: '11. Contact Us',
    content: `For privacy-related questions or requests:

Email: privacy@acdyon.com
General: admissions@acdyon.com
Website: www.acdyon.com

AcdyOn Technologies LLC, Wyoming, United States
REBB Ventures Private Limited, Noida, UP, India`,
  },
]

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-slate-200 bg-[#F8FAFC] pb-12 pt-36">
        <div className="container-premium max-w-4xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#1E40FF]">Legal</p>
          <h1 className="font-display text-4xl text-slate-950 sm:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-slate-500">Last updated: May 2026</p>
          <p className="mt-4 max-w-2xl text-slate-600">
            This policy explains how AcdyOn collects, uses, and protects your personal information across our platform and services.
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
            <p className="text-sm font-semibold text-slate-950">Privacy enquiries</p>
            <p className="mt-1 text-sm text-slate-600">
              Contact{' '}
              <a href="mailto:privacy@acdyon.com" className="text-[#1E40FF] hover:underline">privacy@acdyon.com</a>
              {' '}for all data protection matters.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
