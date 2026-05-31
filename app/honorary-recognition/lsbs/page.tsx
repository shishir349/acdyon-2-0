import type { Metadata } from 'next'
import Image from 'next/image'
import {
  Award, Globe2, Shield, Star, Users2, TrendingUp,
  CheckCircle2, Building2, Target, Lightbulb, Zap, Crown,
} from 'lucide-react'
import { SectionHeading } from '@/components/ui/section-heading'
import { ConsultationNudge } from '@/components/sections/consultation-nudge'

export const metadata: Metadata = {
  title: 'Honorary Doctorate — Doctor Honoris Causa | London School of Business & Science | AcdyOn',
  description:
    'Receive the highest institutional distinction LSBS can bestow — the Doctor Honoris Causa — reserved for individuals whose life\'s work demonstrates extraordinary leadership, significant contribution, and transformative impact.',
}

const LOGO = 'https://sohhmxayptiosflmlxuu.supabase.co/storage/v1/object/public/brochures/Screenshot%202026-05-31%20at%209.16.10%20PM.png'

export default function LSBSHonoraryDoctorate() {
  return (
    <main>
      {/* ─────────────────────────────────────────────
          SECTION 1 · Premium Hero
      ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#ffffff,#f8fafc_50%,#eef4ff)] pb-20 pt-36">
        <div className="absolute right-[-10%] top-20 h-80 w-80 rounded-full bg-[#d4af37]/10 blur-3xl" />
        <div className="absolute left-[-5%] bottom-0 h-64 w-64 rounded-full bg-[#1E40FF]/8 blur-3xl" />
        <div className="container-premium relative">

          {/* Logo + country */}
          <div className="mb-8 flex flex-wrap items-center gap-4">
            <div className="relative h-14 w-44 overflow-hidden rounded-[4px]">
              <Image
                src={LOGO}
                alt="London School of Business & Science"
                fill
                className="object-contain object-left"
              />
            </div>
            <span className="text-2xl" title="United Kingdom">🇬🇧</span>
            <div className="flex items-center gap-1 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/8 px-3 py-1">
              <Crown className="h-3.5 w-3.5 text-[#d4af37]" />
              <span className="ml-1 text-xs font-semibold text-[#d4af37]">ASIC Accredited</span>
            </div>
          </div>

          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#1E40FF]">
            London School of Business &amp; Science
          </p>
          <h1 className="max-w-4xl font-display text-4xl leading-tight text-slate-950 sm:text-5xl md:text-6xl">
            Honorary Doctorate — Doctor Honoris Causa
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            The highest institutional distinction LSBS can bestow — reserved for individuals whose life's
            work demonstrates extraordinary leadership, significant contribution, and transformative impact.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="/book-consultation"
              className="inline-flex items-center justify-center rounded-full bg-[#1E40FF] px-8 py-4 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(30,64,255,0.22)] transition-all hover:bg-[#1937dd]"
            >
              Apply Now
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-4 text-sm font-semibold text-slate-950 transition-all hover:border-slate-300 hover:shadow-md"
            >
              Download Brochure
            </a>
            <a
              href="/book-consultation"
              className="inline-flex items-center justify-center rounded-full border border-[#1E40FF] px-8 py-4 text-sm font-semibold text-[#1E40FF] transition-all hover:bg-[#1E40FF]/5"
            >
              Speak With Advisor
            </a>
          </div>
        </div>

        {/* Quick facts bar */}
        <div className="container-premium relative mt-16">
          <div className="grid gap-6 rounded-[8px] border border-slate-200 bg-white p-8 shadow-sm sm:grid-cols-2 md:grid-cols-5">
            {[
              { label: 'Country', value: 'United Kingdom' },
              { label: 'City', value: 'London' },
              { label: 'Award', value: 'Doctor Honoris Causa' },
              { label: 'Process', value: '6–8 Weeks' },
              { label: 'Intake', value: 'By Nomination' },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-xs font-medium uppercase tracking-wide text-slate-400">{item.label}</p>
                <p className="mt-1 font-semibold text-slate-950">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 2 · About LSBS
      ───────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="About LSBS"
                title="A London Institution With a Tradition of Distinguished Recognition"
                description=""
                align="left"
              />
              <div className="mt-8 space-y-5 text-slate-600">
                <p>
                  The London School of Business &amp; Science (LSBS) is a UK-based higher education institution
                  established in 1988. Headquartered in London, LSBS has built a reputation for academic
                  rigour and its commitment to recognising extraordinary professional and humanitarian achievement
                  through its prestigious honorary recognition programme.
                </p>
                <p>
                  Accredited by ASIC — the Accreditation Service for International Colleges — LSBS operates
                  within a recognised UK quality assurance framework. Its honorary doctorate programme reflects
                  the institution's deep-rooted conviction that transformative real-world contributions deserve
                  formal academic acknowledgement at the highest level.
                </p>
                <p>
                  The Doctor Honoris Causa is not awarded lightly. Each conferment follows a rigorous
                  nomination, documentation, and board evaluation process designed to uphold the distinction
                  and integrity of the award — ensuring its recipients stand among the most accomplished
                  individuals across business, public service, philanthropy, and thought leadership.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative h-56 overflow-hidden rounded-[8px] bg-gradient-to-br from-[#1E40FF] to-[#22D3EE]">
                <div className="flex h-full items-center justify-center text-white">
                  <div className="text-center">
                    <p className="mb-2 text-5xl">🏛️</p>
                    <p className="font-semibold">London, United Kingdom</p>
                    <p className="text-sm opacity-75">Global Centre of Academic Excellence</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { stat: 'ASIC', label: 'Accredited' },
                  { stat: 'UK', label: 'Recognized' },
                  { stat: '1988', label: 'Established' },
                  { stat: 'London', label: 'Headquarters' },
                ].map(({ stat, label }) => (
                  <div key={label} className="rounded-[8px] border border-slate-200 bg-[#F8FAFC] p-4 text-center">
                    <p className="font-display text-2xl font-bold text-[#1E40FF]">{stat}</p>
                    <p className="mt-1 text-xs text-slate-500">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 3 · What Makes This Special
      ───────────────────────────────────────────── */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="The Distinction"
            title="What Makes This Special"
            description="Four defining characteristics that elevate the LSBS Doctor Honoris Causa above other forms of recognition"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                Icon: Crown,
                title: 'Elite Nomination Process',
                body: 'Award is granted through an invitation or highly selective nomination-only process — ensuring every recipient has been independently identified as truly exceptional.',
                accent: '#d4af37',
              },
              {
                Icon: Building2,
                title: 'UK Institutional Affiliation',
                body: 'Recipients gain formal affiliation with a respected UK-based academic institution, granting credentials that carry the weight of British academic standing.',
                accent: '#1E40FF',
              },
              {
                Icon: Award,
                title: 'Professional Title Rights',
                body: 'Confers the right to utilise the Dr. honorific title professionally — a globally recognised mark of distinction across business, academic, and diplomatic circles.',
                accent: '#22D3EE',
              },
              {
                Icon: TrendingUp,
                title: 'Legacy & Brand Elevation',
                body: 'Recognition drives elevation of personal brand and legacy — opening new doors in global leadership, media, philanthropy, and high-level advisory networks.',
                accent: '#d4af37',
              },
            ].map(({ Icon, title, body, accent }) => (
              <div
                key={title}
                className="rounded-[8px] border border-slate-200 bg-white p-8 transition-all hover:shadow-lg"
                style={{ borderTopColor: accent, borderTopWidth: 3 }}
              >
                <Icon className="mb-4 h-8 w-8" style={{ color: accent }} />
                <h3 className="mb-3 font-semibold text-slate-950">{title}</h3>
                <p className="text-sm leading-6 text-slate-600">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 4 · Eligibility & Profile Requirements
      ───────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Eligibility Criteria"
            title="Eligibility & Profile Requirements"
            description="The LSBS honorary doctorate is reserved for individuals who meet all four pillars of distinction"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                Icon: Target,
                stat: '15–20+',
                label: 'Years of Longevity',
                body: 'A sustained career spanning at least 15–20 years at the highest levels of professional, civic, or creative achievement. Depth of contribution matters as much as duration.',
                accent: '#1E40FF',
              },
              {
                Icon: Lightbulb,
                stat: 'Proven',
                label: 'Industry Innovation',
                body: 'Documented industry innovation — whether through a pioneering business model, a public policy transformation, a scientific breakthrough, or a creative movement.',
                accent: '#22D3EE',
              },
              {
                Icon: Globe2,
                stat: 'Measurable',
                label: 'Societal Impact',
                body: 'Philanthropic, humanitarian, or societal contributions that have created tangible, measurable positive change for communities, industries, or entire nations.',
                accent: '#1E40FF',
              },
              {
                Icon: Shield,
                stat: 'Public',
                label: 'Verifiable Track Record',
                body: 'A verifiable public track record — whether through media coverage, publications, registered companies, public records, academic work, or professional awards.',
                accent: '#d4af37',
              },
            ].map(({ Icon, stat, label, body, accent }) => (
              <div
                key={label}
                className="rounded-[8px] border border-slate-200 bg-white p-8 transition-all hover:shadow-lg"
              >
                <Icon className="mb-4 h-8 w-8" style={{ color: accent }} />
                <p className="font-display text-4xl font-bold" style={{ color: accent }}>{stat}</p>
                <p className="mb-3 mt-1 text-xs font-bold uppercase tracking-wide text-slate-400">{label}</p>
                <p className="text-sm leading-6 text-slate-600">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 5 · The Nomination Process — Timeline
      ───────────────────────────────────────────── */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="From Nomination to Conferment"
            title="The Nomination Process"
            description="A structured four-phase pathway from profile evaluation to official conferment of the Doctor Honoris Causa"
          />
          <div className="mx-auto mt-14 max-w-3xl space-y-3">
            {[
              {
                n: '01',
                phase: 'Phase 1',
                timing: '1–2 Weeks',
                title: 'Profile Curation & Advisory',
                detail: 'Your advisory team conducts an initial assessment of your professional portfolio, achievements, and eligibility. Supporting documentation is identified and curated to present the strongest possible nomination file.',
                accent: '#1E40FF',
              },
              {
                n: '02',
                phase: 'Phase 2',
                timing: 'Week 3',
                title: 'Institutional Submission',
                detail: 'The completed nomination package — including career evidence, impact documentation, and supporting references — is formally submitted to the LSBS honorary awards committee.',
                accent: '#22D3EE',
              },
              {
                n: '03',
                phase: 'Phase 3',
                timing: '2–4 Weeks',
                title: 'Board Review & Evaluation',
                detail: 'The LSBS board of honorary awards reviews the submitted profile against established criteria. This independent evaluation upholds the rigour and prestige of the Doctor Honoris Causa distinction.',
                accent: '#1E40FF',
              },
              {
                n: '04',
                phase: 'Phase 4',
                timing: 'Week 6–8',
                title: 'Conferment & Certification',
                detail: 'Upon successful evaluation, the honorary doctorate is formally conferred. You receive official LSBS certification documents, the right to use the Dr. title, and your place among LSBS\'s most distinguished recipients.',
                accent: '#22D3EE',
              },
            ].map((phase) => (
              <div
                key={phase.n}
                className="flex gap-5 rounded-[8px] border border-slate-200 bg-white p-5"
                style={{ borderLeftColor: phase.accent, borderLeftWidth: 4 }}
              >
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ backgroundColor: phase.accent }}
                >
                  {phase.n}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className="font-semibold text-slate-950">{phase.title}</h3>
                    <span
                      className="rounded-full px-2.5 py-0.5 text-xs font-semibold text-white"
                      style={{ backgroundColor: phase.accent }}
                    >
                      {phase.timing}
                    </span>
                  </div>
                  <p className="text-xs font-bold uppercase tracking-wide mb-1" style={{ color: phase.accent }}>
                    {phase.phase}
                  </p>
                  <p className="text-sm leading-6 text-slate-600">{phase.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 6 · Distinguished Recipients Profile
      ───────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Ideal Candidates"
            title="Distinguished Recipients Profile"
            description="The LSBS Doctor Honoris Causa is conferred upon leaders who have shaped industries, nations, and human lives through exceptional service and vision"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: '🚀',
                role: 'Founders & Entrepreneurs',
                description: 'Visionary builders whose enterprises have created significant economic value, employment, and industry transformation at scale.',
              },
              {
                icon: '🏛️',
                role: 'Chairpersons & Heads of State',
                description: 'Leaders who have exercised institutional authority at the highest levels of government, diplomacy, or corporate governance.',
              },
              {
                icon: '✍️',
                role: 'Authors & Intellectuals',
                description: 'Thinkers, writers, and public intellectuals whose published work has shaped global conversation and cultural discourse.',
              },
              {
                icon: '🤲',
                role: 'Philanthropists & Humanitarians',
                description: 'Individuals whose philanthropic commitment has delivered measurable, lasting impact for communities and causes across the world.',
              },
              {
                icon: '⚡',
                role: 'Industry Pioneers',
                description: 'Professionals who have fundamentally transformed their sectors through innovation, advocacy, or sustained market leadership.',
              },
              {
                icon: '🌍',
                role: 'Global Change-Makers',
                description: 'Cross-sector leaders whose influence spans geographies — building bridges between business, government, civil society, and academia.',
              },
            ].map(({ icon, role, description }) => (
              <div
                key={role}
                className="rounded-[8px] border border-slate-200 bg-white p-7 text-center transition-all hover:shadow-lg"
              >
                <div className="mb-4 text-4xl">{icon}</div>
                <h3 className="mb-2 font-semibold text-slate-950">{role}</h3>
                <p className="text-sm leading-5 text-slate-500">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 7 · Global Positioning & Core Benefits
      ───────────────────────────────────────────── */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left narrative */}
            <div>
              <SectionHeading
                eyebrow="Global Positioning"
                title="Entry Into an Elite Global Network"
                description=""
                align="left"
              />
              <div className="mt-8 space-y-5 text-slate-600">
                <p>
                  Recipients join an elite global network of respected leaders — individuals who have
                  already demonstrated extraordinary impact and now carry formal academic recognition
                  to match their professional standing.
                </p>
                <p>
                  The Doctor Honoris Causa opens pathways within diplomatic, philanthropic, and global
                  business circles that demand the combination of proven achievement and credentialled
                  distinction. In these arenas, formal recognition is not ceremonial — it is currency.
                </p>
                <p>
                  Whether you operate in international finance, public policy, creative industries, or
                  global philanthropy, an LSBS honorary doctorate from a UK institution communicates
                  a singular message: your life's work has been formally acknowledged by an independent
                  academic institution as deserving the highest recognition.
                </p>
              </div>
            </div>

            {/* Right benefits */}
            <div className="space-y-4">
              <div className="rounded-[8px] border border-slate-200 bg-white p-8">
                <h3 className="mb-6 font-semibold text-slate-950">Core Benefits of Recognition</h3>
                <div className="space-y-5">
                  {[
                    {
                      title: 'Ultimate Legacy Solidification',
                      desc: 'A formal, permanent record of your lifetime contribution — preserved in institutional records and public documentation.',
                    },
                    {
                      title: 'Use of Honorary Title',
                      desc: 'The right to use the "Dr." honorific in all professional, academic, and public contexts globally.',
                    },
                    {
                      title: 'Heightened Public & Media Profile',
                      desc: 'Honorary doctorate status amplifies media credibility and positions you as a recognised authority figure.',
                    },
                    {
                      title: 'Increased Trust Among Stakeholders',
                      desc: 'Clients, partners, investors, and collaborators respond to the clarity and weight of formally recognised distinction.',
                    },
                  ].map(({ title, desc }) => (
                    <div key={title} className="flex gap-3 border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#1E40FF]" />
                      <div>
                        <p className="font-semibold text-slate-950">{title}</p>
                        <p className="mt-0.5 text-sm text-slate-600">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 8 · Why LSBS
      ───────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="The LSBS Difference"
            title="Why LSBS"
            description="Three defining reasons why the LSBS Doctor Honoris Causa carries singular weight among honorary distinctions"
          />
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                Icon: Building2,
                title: 'UK Academic Standing',
                body: 'LSBS is a London-based institution operating within the UK higher education framework. The UK\'s academic brand carries unparalleled global recognition — in business, diplomacy, and public life. An LSBS honorary doctorate carries that brand.',
                accent: '#1E40FF',
              },
              {
                Icon: Shield,
                title: 'Rigorous Evaluation',
                body: 'The LSBS honorary awards process is not a formality. Each nominee undergoes independent board review against documented eligibility criteria — ensuring the title retains its meaning and prestige for every recipient.',
                accent: '#22D3EE',
              },
              {
                Icon: Users2,
                title: 'Prestigious Network',
                body: 'Recipients join a distinguished community of acknowledged leaders across industry, government, academia, and civil society — a network built on shared recognition of exceptional human achievement.',
                accent: '#d4af37',
              },
            ].map(({ Icon, title, body, accent }) => (
              <div
                key={title}
                className="rounded-[8px] border border-slate-200 bg-white p-8 transition-all hover:shadow-lg"
                style={{ borderTopColor: accent, borderTopWidth: 3 }}
              >
                <Icon className="mb-4 h-8 w-8" style={{ color: accent }} />
                <h3 className="mb-3 font-semibold text-slate-950">{title}</h3>
                <p className="text-sm leading-6 text-slate-600">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 9 · Recognition & Accreditation
      ───────────────────────────────────────────── */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Institutional Credentials"
            title="Recognition & Accreditation"
            description="The institutional framework that gives the LSBS Doctor Honoris Causa its verified authority and global standing"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                badge: 'ASIC Accredited',
                icon: '✅',
                title: 'Accreditation Service for International Colleges',
                detail: 'LSBS holds ASIC accreditation — the UK\'s recognised quality assurance body for international colleges and higher education providers. ASIC accreditation is internationally verifiable and endorses institutional standards, governance, and student outcomes.',
                accent: '#1E40FF',
              },
              {
                badge: 'UK Recognized',
                icon: '🇬🇧',
                title: 'United Kingdom Institutional Status',
                detail: 'LSBS is a UK-registered institution operating under UK legal and academic frameworks. UK institutional affiliation carries global recognition across education, business, government, and professional certification bodies.',
                accent: '#22D3EE',
              },
              {
                badge: 'International Standing',
                icon: '🌍',
                title: 'Global Recognition Framework',
                detail: 'The Doctor Honoris Causa conferred by LSBS is recognised across international professional, academic, and diplomatic contexts — enabling recipients to use their title with confidence in global arenas.',
                accent: '#1E40FF',
              },
              {
                badge: 'Est. 1988',
                icon: '🏛️',
                title: 'Established Academic Heritage',
                detail: 'Founded in 1988, LSBS brings decades of academic heritage to its honorary recognition programme. The institution\'s longevity and consistent standards underpin the enduring value of awards it confers.',
                accent: '#d4af37',
              },
            ].map(({ badge, icon, title, detail, accent }) => (
              <div
                key={badge}
                className="rounded-[8px] border border-slate-200 bg-white p-8"
                style={{ borderTopColor: accent, borderTopWidth: 3 }}
              >
                <div className="mb-3 flex items-center gap-2">
                  <span className="text-2xl">{icon}</span>
                  <span
                    className="rounded-full px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide text-white"
                    style={{ backgroundColor: accent }}
                  >
                    {badge}
                  </span>
                </div>
                <h3 className="mb-3 font-semibold text-slate-950">{title}</h3>
                <p className="text-sm leading-6 text-slate-600">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 10 · Gallery
      ───────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Honorary Recognition"
            title="Moments of Distinction"
            description="Capturing the ceremony, gravitas, and permanence of the Doctor Honoris Causa conferment"
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              { label: 'Conferment Ceremony', sub: 'The formal LSBS honorary award ceremony', gradient: 'from-[#1E40FF] to-[#22D3EE]', icon: '🎓' },
              { label: 'Certificate of Honour', sub: 'Official LSBS documentation and credentials', gradient: 'from-[#d4af37] to-[#f59e0b]', icon: '📜' },
              { label: 'Global Alumni Network', sub: 'Distinguished recipients across 50+ countries', gradient: 'from-[#1E40FF] to-[#6366f1]', icon: '🌍' },
              { label: 'Academic Community', sub: 'Integration into UK academic circles', gradient: 'from-[#22D3EE] to-[#0891b2]', icon: '🏛️' },
              { label: 'London Heritage', sub: 'A city synonymous with global leadership', gradient: 'from-[#1E40FF] to-[#1d4ed8]', icon: '🇬🇧' },
              { label: 'Legacy Recognition', sub: 'A permanent record of extraordinary achievement', gradient: 'from-[#6366f1] to-[#1E40FF]', icon: '🏆' },
            ].map(({ label, sub, gradient, icon }) => (
              <div key={label} className="overflow-hidden rounded-[8px] border border-slate-200 transition-all hover:shadow-lg">
                <div className={`flex h-52 items-center justify-center bg-gradient-to-br ${gradient}`}>
                  <div className="text-center text-white">
                    <p className="mb-2 text-5xl">{icon}</p>
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

      {/* ─────────────────────────────────────────────
          SECTION 11 · FAQ
      ───────────────────────────────────────────── */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Common Questions"
            title="Frequently Asked Questions"
            description="Everything you need to understand before initiating your LSBS Doctor Honoris Causa nomination"
          />
          <div className="mx-auto mt-14 max-w-3xl divide-y divide-slate-200 rounded-[8px] border border-slate-200 bg-white overflow-hidden">
            {[
              {
                q: 'Is an honorary doctorate the same as an earned doctorate?',
                a: 'An honorary doctorate and an earned doctorate are distinct categories of award. An earned doctorate (PhD, DBA, etc.) is conferred upon completion of formal academic research and assessment. An honorary doctorate — the Doctor Honoris Causa — is conferred as a mark of the highest institutional esteem for extraordinary real-world achievement. Both carry the "Dr." title, but they recognise fundamentally different forms of excellence.',
              },
              {
                q: 'Can I use "Dr." after receiving the LSBS honorary doctorate?',
                a: 'Yes. Upon conferment of the Doctor Honoris Causa by LSBS, recipients have the right to utilise the Dr. honorific title in professional, academic, and public contexts. This right is conferred formally as part of the award documentation and is a standard provision of honorary doctoral recognition worldwide.',
              },
              {
                q: 'What does the nomination process involve?',
                a: 'The nomination process involves four structured phases: an initial profile curation and advisory stage; formal institutional submission of your nomination file; independent board review and evaluation by the LSBS honorary awards committee; and final conferment upon successful evaluation. The full process takes 6 to 8 weeks from nomination to conferment.',
              },
              {
                q: 'How long does the process take from nomination to conferment?',
                a: 'The LSBS Doctor Honoris Causa process is designed to be completed within 6 to 8 weeks. Phase one (profile curation and advisory) takes 1 to 2 weeks; phase two (institutional submission) takes place in week three; phase three (board review and evaluation) takes 2 to 4 weeks; and phase four (conferment and certification) is completed in weeks six to eight.',
              },
              {
                q: 'Who typically qualifies for an LSBS honorary doctorate?',
                a: 'The LSBS Doctor Honoris Causa is designed for individuals with 15 to 20 or more years of distinguished achievement at the highest professional levels — including founders, chairpersons, heads of state, authors, philanthropists, and industry pioneers. Nominees must demonstrate documented innovation, measurable societal impact, and a verifiable public track record.',
              },
              {
                q: 'What is the difference between an honorary doctorate and an honorary professorship?',
                a: 'An honorary doctorate (Doctor Honoris Causa) is the highest institutional award a university or college can confer — recognising a lifetime of exceptional achievement. An honorary professorship is a title of affiliation granted to distinguished practitioners invited to associate with an institution, typically without the formal degree conferment that accompanies a doctorate. The honorary doctorate is the senior of the two distinctions.',
              },
            ].map(({ q, a }) => (
              <details key={q} className="group p-6">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <span className="font-semibold text-slate-950">{q}</span>
                  <span className="mt-0.5 shrink-0 rounded-full border border-slate-200 p-1 text-slate-400 group-open:rotate-45 transition-transform">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-7 text-slate-600">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 12 · Final CTA (dark)
      ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-slate-950 py-24">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[#1E40FF]/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-[#d4af37]/10 blur-3xl" />
        <div className="container-premium relative text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#d4af37]">
            Your Legacy Awaits
          </p>
          <h2 className="mx-auto max-w-3xl font-display text-4xl leading-tight text-white sm:text-5xl">
            Honour Your Lifetime of Achievement
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Submit your credentials for a confidential, obligation-free assessment by our senior
            facilitation team. Discover whether you qualify for the LSBS Doctor Honoris Causa.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="/book-consultation"
              className="inline-flex items-center rounded-full bg-[#1E40FF] px-8 py-4 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(30,64,255,0.22)] transition-all hover:bg-[#1937dd]"
            >
              Start Confidential Assessment
            </a>
            <a
              href="/book-consultation"
              className="inline-flex items-center rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white transition-all hover:border-white/40 hover:bg-white/5"
            >
              Book Consultation
            </a>
            <a
              href="#"
              className="inline-flex items-center rounded-full border border-[#d4af37]/40 px-8 py-4 text-sm font-semibold text-[#d4af37] transition-all hover:border-[#d4af37]/60 hover:bg-[#d4af37]/5"
            >
              Download Brochure
            </a>
          </div>
        </div>
      </section>

      <ConsultationNudge />
    </main>
  )
}
