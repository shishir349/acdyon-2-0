import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy | AcdyOn',
  description: 'AcdyOn cookie policy — how we use cookies and how to manage your preferences.',
}

const sections = [
  {
    title: '1. What Are Cookies',
    content: `Cookies are small text files placed on your device when you visit a website. They help websites remember your preferences, improve performance, and provide analytics about how visitors use the site.`,
  },
  {
    title: '2. How We Use Cookies',
    content: `AcdyOn uses cookies for the following purposes:

Essential Cookies: Required for the website to function correctly. These cannot be disabled. They enable navigation, form submissions, and secure access to protected areas.

Analytics Cookies: Help us understand how visitors interact with our website — pages visited, time spent, and sources of traffic. This data is used to improve our platform and content.

Functional Cookies: Remember your preferences (such as language or region settings) to personalise your experience.

Marketing Cookies: Used to deliver relevant content and track the effectiveness of our marketing communications. These are only set with your consent.`,
  },
  {
    title: '3. Third-Party Cookies',
    content: `We may allow third-party service providers to set cookies on our website, including:

• Google Analytics — for website usage analytics
• Google Tag Manager — for managing marketing and analytics tags
• Meta Pixel — for advertising effectiveness measurement (where applicable)

These providers have their own privacy policies governing the use of cookies.`,
  },
  {
    title: '4. Managing Cookies',
    content: `You can control and manage cookies in several ways:

Browser Settings: Most browsers allow you to view, delete, and block cookies through their settings. Note that disabling essential cookies may affect website functionality.

Consent Banner: When you first visit our website, you will be offered the option to accept or decline non-essential cookies.

Opt-Out Tools: You may opt out of Google Analytics tracking by installing the Google Analytics Opt-Out Browser Add-on.`,
  },
  {
    title: '5. Cookie Retention',
    content: `Session cookies are deleted when you close your browser. Persistent cookies remain on your device for the duration set by the cookie, or until you delete them.

Analytics and functional cookies typically persist for 12–24 months. Marketing cookies may persist for up to 90 days.`,
  },
  {
    title: '6. Updates to This Policy',
    content: `We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our services. Updated versions will be posted on this page with a revised date.`,
  },
  {
    title: '7. Contact',
    content: `For questions about our use of cookies:

Email: privacy@acdyon.com
Website: www.acdyon.com`,
  },
]

export default function CookiePolicyPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-slate-200 bg-[#F8FAFC] pb-12 pt-36">
        <div className="container-premium max-w-4xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#1E40FF]">Legal</p>
          <h1 className="font-display text-4xl text-slate-950 sm:text-5xl">Cookie Policy</h1>
          <p className="mt-4 text-slate-500">Last updated: May 2026</p>
          <p className="mt-4 max-w-2xl text-slate-600">
            This policy explains how AcdyOn uses cookies and how you can manage your preferences.
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
        </div>
      </section>
    </main>
  )
}
