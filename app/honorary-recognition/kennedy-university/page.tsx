import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, Award, Globe2, Shield, Users, ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/ui/section-heading'
import { ConsultationNudge } from '@/components/sections/consultation-nudge'
import { FAQAccordion } from '@/components/ui/faq-accordion'

export const metadata: Metadata = {
  title: 'Honorary Doctorate — Kennedy University | AcdyOn',
  description:
    'Honorary Doctorate from Kennedy University — globally recognised recognition for accomplished professionals, leaders, and innovators.',
}

const LOGO = 'https://sohhmxayptiosflmlxuu.supabase.co/storage/v1/object/public/brochures/Kennedy-University-520-x-330%20(2).jpg'

const faqs = [
  {
    q: 'What honorary awards does Kennedy University confer?',
    a: 'Kennedy University confers the Honorary Doctorate (Doctor Honoris Causa) in recognition of distinguished professional achievement, leadership, and contribution to society, business, or academia.',
  },
  {
    q: 'Is the Kennedy University honorary doctorate internationally recognised?',
    a: 'Yes. Kennedy University holds QAHE accreditation, is registered with the French Ministry of Education, and is listed in the UN DESA database. Its awards are recognised across multiple jurisdictions in Europe, the Americas, and Africa.',
  },
  {
    q: 'Can I use "Dr." after receiving a Kennedy University honorary doctorate?',
    a: 'Yes. The honorary doctorate entitles recipients to use the "Dr." prefix in professional and public settings, consistent with the institution\'s guidelines.',
  },
  {
    q: 'What is the typical timeline for the recognition process?',
    a: 'From initial eligibility review to formal award issuance, the process typically takes 3–6 months depending on the complexity of the profile and the institution\'s evaluation schedule.',
  },
  {
    q: 'What documentation do I need to submit?',
    a: 'Typically required: professional biography, CV/resume, achievement summary, letters of recommendation, publication list (if applicable), and a statement of professional contributions.',
  },
  {
    q: 'Does Kennedy University have a physical campus?',
    a: 'Kennedy University operates primarily through distance and online delivery formats, with a registered presence in the USA and France. The honorary programme does not require on-campus attendance.',
  },
  {
    q: 'Will I receive a physical certificate?',
    a: 'Yes. Recipients receive a formally issued, signed, and sealed physical certificate from Kennedy University, along with supporting documentation for professional use.',
  },
  {
    q: 'Is there a ceremony?',
    a: 'Kennedy University provides ceremonial recognition options — virtual or in-person — for honorary doctorate recipients. Details are confirmed upon approval of the award.',
  },
]

export default function KennedyHonoraryPage() {
  return (
    <main>
      {/* SECTION 1: Hero */}
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#ffffff,#f8fafc_50%,#eef4ff)] pb-20 pt-36">
        <div className="absolute right-[-10%] top-20 h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-3xl" />
        <div className="container-premium relative">
          <div className="mb-8 flex flex-wrap items-center gap-4">
            <div className="relative h-14 w-44 overflow-hidden rounded-[4px]">
              <Image src={LOGO} alt="Kennedy University" fill className="object-contain object-left" unoptimized />
            </div>
            <span className="text-2xl" title="USA">🇺🇸</span>
            <div className="inline-flex items-center gap-1 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/8 px-3 py-1">
              <Award className="h-3.5 w-3.5 text-[#D4AF37]" />
              <span className="text-xs font-semibold text-[#D4AF37]">Honorary Doctorate</span>
            </div>
          </div>

          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#1E40FF]">
            Kennedy University · USA / France / Multiple Regions
          </p>
          <h1 className="max-w-4xl font-display text-4xl leading-tight text-slate-950 sm:text-5xl md:text-6xl">
            Honorary Doctorate Recognition For Global Leaders
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            A prestigious honorary doctorate from Kennedy University — recognising exceptional professional achievement, leadership, and meaningful contribution across international contexts.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/book-consultation"
              className="inline-flex items-center justify-center rounded-full bg-[#D4AF37] px-8 py-4 text-sm font-semibold text-slate-950 transition-all hover:bg-[#c9a030]"
            >
              Apply Now
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-4 text-sm font-semibold text-slate-950 transition-all hover:shadow-md"
            >
              Download Brochure
            </Link>
            <Link
              href="/book-consultation"
              className="inline-flex items-center justify-center rounded-full border border-[#1E40FF] px-8 py-4 text-sm font-semibold text-[#1E40FF] transition-all hover:bg-[#1E40FF]/5"
            >
              Speak With Advisor
            </Link>
          </div>
        </div>

        {/* Quick Facts */}
        <div className="container-premium relative mt-14">
          <div className="grid gap-6 rounded-[8px] border border-slate-200 bg-white p-8 shadow-sm sm:grid-cols-2 md:grid-cols-5">
            {[
              { label: 'Award', value: 'Honorary Doctorate' },
              { label: 'Country', value: 'USA / France' },
              { label: 'Delivery', value: 'Global / Remote' },
              { label: 'Timeline', value: '3–6 Months' },
              { label: 'Entry', value: 'By Nomination' },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="text-xs font-medium uppercase tracking-wide text-slate-400">{label}</p>
                <p className="mt-1 font-semibold text-slate-950">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: About Kennedy University */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading eyebrow="About Kennedy University" title="Global Academic Institution With International Reach" description="" align="left" />
              <div className="mt-8 space-y-5 text-slate-600">
                <p>
                  Kennedy University is a private higher education institution with a distinguished global presence across the USA, France, and multiple African regions. With over 25 years of academic experience, Kennedy has guided professionals across 18+ countries through doctoral and recognition pathways.
                </p>
                <p>
                  The honorary doctorate programme at Kennedy University is designed for accomplished professionals whose contributions span international contexts — leaders who have created meaningful impact in business, social enterprise, public service, or academic leadership.
                </p>
                <p>
                  Kennedy's approach to honorary recognition is grounded in verified contribution — each candidate is assessed against institutional nomination criteria by an academic board that takes the award seriously.
                </p>
              </div>
            </div>
            <div className="rounded-[8px] border border-slate-200 bg-[#F8FAFC] p-8">
              <h3 className="mb-6 font-semibold text-slate-950">Institutional Credentials</h3>
              <ul className="space-y-5">
                {[
                  { icon: Shield, title: 'QAHE Accreditation', detail: 'International Association for Quality Assurance in Higher Education' },
                  { icon: Globe2, title: 'French Ministry Registration', detail: 'Registered Centre d\'enseignement à distance under French Education Code' },
                  { icon: Award, title: 'UN DESA Listing', detail: 'Listed in UN Department of Economic and Social Affairs database' },
                  { icon: Users, title: '5,000+ Graduates', detail: 'Distributed across 18+ countries worldwide' },
                ].map(({ icon: Icon, title, detail }) => (
                  <li key={title} className="flex gap-3">
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-[#D4AF37]" />
                    <div>
                      <p className="font-medium text-slate-950">{title}</p>
                      <p className="text-sm text-slate-500">{detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Who Qualifies */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Eligibility"
            title="Who Qualifies for Kennedy University Honorary Recognition"
            description="Kennedy evaluates candidates holistically. These are the key indicators of eligibility."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: '📊', title: '15+ Years of Excellence', detail: 'A career of sustained exceptional achievement at the highest professional levels.' },
              { icon: '🌍', title: 'International Impact', detail: 'Contributions recognised or felt across borders, not limited to a single market or region.' },
              { icon: '💡', title: 'Documented Innovation', detail: 'A verifiable history of advancing a field, creating something new, or transforming a sector.' },
              { icon: '🤝', title: 'Social or Philanthropic Contribution', detail: 'Meaningful commitment to community, society, or humanitarian causes.' },
              { icon: '📚', title: 'Public or Published Presence', detail: 'Speaking engagements, published work, media presence, or academic contribution.' },
              { icon: '✅', title: 'Verifiable Track Record', detail: 'A public, documentable record of achievement that can be independently assessed.' },
            ].map(({ icon, title, detail }) => (
              <div key={title} className="rounded-[8px] border border-slate-200 bg-white p-7 transition-all hover:shadow-lg">
                <div className="mb-3 text-4xl">{icon}</div>
                <h3 className="mb-2 font-semibold text-slate-950">{title}</h3>
                <p className="text-sm leading-6 text-slate-600">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: The Recognition Process */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Step By Step"
            title="The Kennedy University Recognition Process"
            description="A structured, confidential process guided by AcdyOn from initial assessment to formal award."
          />
          <div className="mx-auto mt-14 max-w-3xl space-y-4">
            {[
              { n: '01', title: 'Confidential Eligibility Assessment', detail: 'Submit your professional profile for a private assessment against Kennedy\'s nomination criteria.', accent: '#D4AF37' },
              { n: '02', title: 'Profile Curation', detail: 'AcdyOn helps compile your professional milestones, press features, awards, and impact into a nomination dossier.', accent: '#1E40FF' },
              { n: '03', title: 'Institutional Submission', detail: 'Your curated nomination is formally submitted to the Kennedy University academic board.', accent: '#22D3EE' },
              { n: '04', title: 'Board Review', detail: 'The academic board evaluates your nomination against institutional criteria for honorary conferment.', accent: '#D4AF37' },
              { n: '05', title: 'Approval & Award Terms', detail: 'Upon approval, you receive formal confirmation and the terms of your honorary distinction.', accent: '#1E40FF' },
              { n: '06', title: 'Award Issuance & Ceremony', detail: 'Formal conferral of the Honorary Doctorate with certificate, documentation, and ceremonial recognition.', accent: '#22D3EE' },
            ].map((step) => (
              <div
                key={step.n}
                className="flex gap-5 rounded-[8px] border border-slate-200 bg-white p-6"
                style={{ borderLeftColor: step.accent, borderLeftWidth: 4 }}
              >
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ backgroundColor: step.accent }}
                >
                  {step.n}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-950">{step.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: What Recipients Receive */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Award Package"
            title="What You Receive"
            description="The Kennedy University honorary doctorate is delivered as a comprehensive recognition package."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: '📜', title: 'Honorary Doctorate Certificate', desc: 'Formally issued, signed and sealed certificate from Kennedy University.' },
              { icon: '📄', title: 'Recognition Citation', desc: 'Written citation documenting the specific achievements being honoured.' },
              { icon: '✅', title: 'Academic Record Entry', desc: 'Permanent entry in Kennedy University\'s official institutional records.' },
              { icon: '🎓', title: 'Ceremonial Recognition', desc: 'Invitation to a virtual or in-person recognition ceremony or convocation.' },
              { icon: '🌐', title: 'Digital Credentials', desc: 'Professional digital assets confirming the honorary award for online use.' },
              { icon: '📋', title: 'Verification Letter', desc: 'Official verification documentation for professional and academic use.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="flex gap-4 rounded-[8px] border border-slate-200 bg-white p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[8px] bg-slate-950 text-2xl">
                  {icon}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-950">{title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: Recognition Areas */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Fields of Excellence"
            title="Areas of Honorary Recognition"
            description="Kennedy University awards honorary distinction across a wide spectrum of professional and public achievement."
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {[
              'Business Administration',
              'Social Impact & Community',
              'Academic Leadership',
              'Technology & Innovation',
              'Public Service',
              'Entrepreneurship',
              'International Relations',
              'Humanitarian Contribution',
            ].map((area) => (
              <div key={area} className="rounded-[8px] border border-slate-200 bg-[#F8FAFC] p-5 text-center transition-all hover:border-[#D4AF37]/40 hover:shadow-md">
                <Award className="mx-auto mb-2 h-5 w-5 text-[#D4AF37]" />
                <p className="text-sm font-semibold text-slate-950">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: Global Presence */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Institutional Reach"
            title="Global Academic Partnerships"
            description="Kennedy University's international network of academic partnerships strengthens the global portability of its honorary awards."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { region: 'Americas', note: 'Florida State Registered · Wyoming Academic Listing · North American recognition framework' },
              { region: 'Europe', note: 'French Ministry of Education Registration · ECLBS Membership · European academic recognition' },
              { region: 'Africa & Beyond', note: 'Galmudug & Hirshabelle recognition · QAHE global accreditation · UN DESA listing' },
            ].map(({ region, note }) => (
              <div key={region} className="rounded-[8px] border border-slate-200 bg-white p-7">
                <Globe2 className="mb-3 h-6 w-6 text-[#1E40FF]" />
                <h3 className="mb-2 font-semibold text-slate-950">{region}</h3>
                <p className="text-sm leading-6 text-slate-500">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: Gallery */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Recognition Environment"
            title="Kennedy University Gallery"
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              { label: 'Recognition Ceremonies', sub: 'Formal award events', gradient: 'from-[#D4AF37] to-[#f59e0b]', icon: '🏛️' },
              { label: 'Global Community', sub: '18+ countries', gradient: 'from-[#1E40FF] to-[#22D3EE]', icon: '🌍' },
              { label: 'Distinguished Recipients', sub: 'Leaders & innovators', gradient: 'from-[#1E40FF] to-[#6366f1]', icon: '🎓' },
              { label: 'Academic Heritage', sub: '25+ years of excellence', gradient: 'from-[#22D3EE] to-[#0891b2]', icon: '📜' },
              { label: 'International Network', sub: 'Partnerships worldwide', gradient: 'from-[#6366f1] to-[#1E40FF]', icon: '🤝' },
              { label: 'Award Documentation', sub: 'Formal certification', gradient: 'from-[#D4AF37] to-[#1E40FF]', icon: '✅' },
            ].map(({ label, sub, gradient, icon }) => (
              <div key={label} className="overflow-hidden rounded-[8px] border border-slate-200 transition-all hover:shadow-lg">
                <div className={`flex h-44 items-center justify-center bg-gradient-to-br ${gradient}`}>
                  <div className="text-center text-white">
                    <p className="mb-2 text-4xl">{icon}</p>
                    <p className="font-semibold">{label}</p>
                  </div>
                </div>
                <div className="bg-white p-4">
                  <p className="text-sm text-slate-500">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATE PREVIEW (before FAQ) ─────────────────────────────────── */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Award Documentation"
            title="Recognition Certificate Preview"
            description="The formal Kennedy University Honorary Doctorate certificate — a permanent record of your distinction."
          />

          <div className="mx-auto mt-14 max-w-3xl">
            <div className="flex min-h-[420px] flex-col items-center justify-center rounded-[8px] border-2 border-dashed border-[#D4AF37]/40 bg-[#D4AF37]/5 p-12 text-center">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#D4AF37]/10">
                <Award className="h-10 w-10 text-[#D4AF37]" />
              </div>
              <p className="mb-2 font-display text-2xl text-slate-950">Certificate Preview Coming Soon</p>
              <p className="mb-6 max-w-sm text-sm leading-6 text-slate-500">
                An example of the Kennedy University Honorary Doctorate certificate will be displayed here. The certificate is formally issued on official university stationery with institutional seal and authorised signatures.
              </p>
              <div className="w-full max-w-md rounded-[8px] border border-[#D4AF37]/30 bg-white p-6">
                <p className="text-xs font-bold uppercase tracking-wide text-slate-400">Certificate Includes</p>
                <ul className="mt-4 space-y-2">
                  {[
                    'Institution name and official seal',
                    'Recipient full name and title',
                    'Degree: Doctor Honoris Causa',
                    'Date of conferment',
                    'Signatures of institutional leadership',
                    'Unique certificate registration number',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#D4AF37]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: FAQ */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Common Questions"
            title="Frequently Asked Questions"
            description="Everything you need to know about the Kennedy University honorary doctorate pathway."
          />
          <div className="mt-14">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-slate-950 py-24">
        <div className="container-premium text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#D4AF37]">Kennedy University</p>
          <h2 className="mx-auto max-w-3xl font-display text-4xl leading-tight text-white sm:text-5xl">
            Begin Your Recognition Journey With Kennedy University
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            Submit your credentials for a confidential eligibility assessment. No obligation. No commitment.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/book-consultation" className="inline-flex items-center rounded-full bg-[#D4AF37] px-8 py-4 text-sm font-semibold text-slate-950 transition-all hover:bg-[#c9a030]">
              Apply For Assessment
            </Link>
            <Link href="/book-consultation" className="inline-flex items-center rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white transition-all hover:border-white/40 hover:bg-white/5">
              Book Consultation
            </Link>
          </div>
        </div>
      </section>

      <ConsultationNudge />
    </main>
  )
}
