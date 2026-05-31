import type { Metadata } from 'next'
import Image from 'next/image'
import {
  CheckCircle2, Award, BookOpen, Globe2, Target, Zap,
  Users2, TrendingUp, Shield, Lightbulb, Building2, Star
} from 'lucide-react'
import { PageHero } from '@/components/sections/page-hero'
import { SectionHeading } from '@/components/ui/section-heading'
import { TestimonialCard } from '@/components/cards/testimonial-card'
import { ConsultationNudge } from '@/components/sections/consultation-nudge'
import { FAQAccordion } from '@/components/ui/faq-accordion'
import { RecognitionTiers } from '@/components/ui/recognition-tiers'

export const metadata: Metadata = {
  title: 'Doctor of Philosophy (PhD) — Dunster Business School, Switzerland | AcdyOn',
  description:
    'Pursue a Swiss PhD from Dunster Business School — QS 4-Star rated, EAHEA & QAHE accredited. Original scholarship for researchers, executives, and academic leaders.',
}

const LOGO = 'https://sohhmxayptiosflmlxuu.supabase.co/storage/v1/object/public/brochures/DBS_New-Final-Logo_6.png'

export default function DunsterPhDPage() {
  return (
    <main>
      {/* ─────────────────────────────────────────────
          SECTION 1 · Premium Hero
      ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#ffffff,#f8fafc_50%,#eef4ff)] pb-20 pt-36">
        <div className="absolute right-[-10%] top-20 h-80 w-80 rounded-full bg-[#1E40FF]/10 blur-3xl" />
        <div className="container-premium relative">

          {/* Logo + flags */}
          <div className="mb-8 flex flex-wrap items-center gap-4">
            <div className="relative h-14 w-40 overflow-hidden rounded-[4px]">
              <Image src={LOGO} alt="Dunster Business School" fill className="object-contain object-left" />
            </div>
            <span className="text-2xl" title="Switzerland">🇨🇭</span>
            <div className="flex items-center gap-1 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/8 px-3 py-1">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-[#d4af37] text-[#d4af37]" />
              ))}
              <span className="ml-1 text-xs font-semibold text-[#d4af37]">QS 4-Star</span>
            </div>
          </div>

          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#1E40FF]">
            Dunster Business School · Zug, Switzerland
          </p>
          <h1 className="max-w-4xl font-display text-4xl leading-tight text-slate-950 sm:text-5xl md:text-6xl">
            Swiss Doctoral Research for the World's Next Thought Leaders
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            A PhD pathway designed for scholars and senior professionals committed to original knowledge contribution,
            academic distinction, and global intellectual impact — anchored in the Swiss tradition of precision and rigour.
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
              { label: 'Country', value: 'Switzerland' },
              { label: 'Location', value: 'Zug' },
              { label: 'Delivery Mode', value: 'Online / Blended' },
              { label: 'Duration', value: '36–48 Months' },
              { label: 'Intake', value: 'Rolling' },
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
          SECTION 2 · Why Switzerland
      ───────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="The Swiss Advantage"
            title="Why Switzerland Changes Everything"
            description="Switzerland consistently ranks among the world's top nations for research output, academic rigour, and innovation — for reasons that define a doctoral credential's long-term value."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Shield,
                stat: '#1',
                label: 'Global Innovation Index',
                body: 'Switzerland has led the Global Innovation Index for over a decade — producing research methodologies and institutional standards adopted by leading scholars worldwide.',
              },
              {
                icon: Target,
                stat: '200+',
                label: 'Years of Academic Tradition',
                body: 'Swiss institutions are built on centuries of intellectual rigour, precision, and a culture of scholarly contribution — values embedded in every Dunster doctoral programme.',
              },
              {
                icon: Globe2,
                stat: '4',
                label: 'National Languages',
                body: 'A genuinely multilingual academic environment that mirrors global scholarship and business — uniquely suited to doctoral candidates from across the world.',
              },
              {
                icon: Building2,
                stat: 'Top 3',
                label: 'European Research Hub',
                body: 'Home to ETH Zurich, IMD, University of Zurich, and a thriving private research ecosystem — Switzerland commands serious academic credibility globally.',
              },
            ].map(({ icon: Icon, stat, label, body }) => (
              <div key={label} className="rounded-[8px] border border-slate-200 bg-white p-8 transition-all hover:shadow-lg">
                <Icon className="mb-4 h-8 w-8 text-[#1E40FF]" />
                <p className="font-display text-4xl font-bold text-[#1E40FF]">{stat}</p>
                <p className="mb-3 mt-1 text-xs font-bold uppercase tracking-wide text-slate-400">{label}</p>
                <p className="text-sm leading-6 text-slate-600">{body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-[8px] border border-slate-200 bg-[#F8FAFC] p-10 text-center">
            <p className="mx-auto max-w-3xl font-display text-2xl leading-snug text-slate-950 sm:text-3xl">
              "A Swiss doctoral credential signals precision, rigour, and global intellectual standing — values that define how the world's leading institutions measure academic excellence."
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 3 · The Dunster Difference
      ───────────────────────────────────────────── */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="The Swiss Private Model"
            title="The Dunster Difference"
            description="Why senior researchers and executives increasingly choose private Swiss business schools for doctoral study over traditional public institutions."
          />

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <div className="rounded-[8px] border border-slate-200 bg-white p-8">
              <div className="mb-6 inline-block rounded-full bg-slate-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-slate-500">
                Public University
              </div>
              <div className="space-y-5">
                {[
                  { dim: 'Supervision Access', val: 'Limited supervisor availability — large doctoral cohorts' },
                  { dim: 'Research Scope', val: 'Theoretical contribution emphasis — academic literature focus' },
                  { dim: 'Professional Relevance', val: 'Scholarly publishing prioritised over applied outcomes' },
                  { dim: 'Flexibility', val: 'Residency requirements and rigid timetables common' },
                  { dim: 'Industry Integration', val: 'Faculty primarily academic — limited current industry exposure' },
                  { dim: 'Candidate Profile', val: 'Predominantly full-time students or early-career researchers' },
                ].map(({ dim, val }) => (
                  <div key={dim} className="flex gap-3 border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                    <div className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-slate-300" />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-slate-400">{dim}</p>
                      <p className="mt-0.5 text-sm text-slate-600">{val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[8px] border border-[#1E40FF]/30 bg-[#1E40FF]/5 p-8">
              <div className="mb-6 inline-block rounded-full bg-[#1E40FF] px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
                Dunster Business School
              </div>
              <div className="space-y-5">
                {[
                  { dim: 'Supervision Access', val: 'Dedicated specialist supervisor — regular one-to-one guidance' },
                  { dim: 'Research Scope', val: 'Original scholarship with real-world application and academic contribution' },
                  { dim: 'Professional Relevance', val: 'Research designed to generate professional, strategic, and scholarly impact' },
                  { dim: 'Flexibility', val: 'Fully online — no residency requirement, zero career disruption' },
                  { dim: 'Industry Integration', val: 'Faculty with active industry engagement — research stays close to practice' },
                  { dim: 'Candidate Profile', val: 'Senior professionals, executives, and mid-career researchers' },
                ].map(({ dim, val }) => (
                  <div key={dim} className="flex gap-3 border-b border-[#1E40FF]/10 pb-4 last:border-0 last:pb-0">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#1E40FF]" />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-[#1E40FF]">{dim}</p>
                      <p className="mt-0.5 text-sm text-slate-700">{val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 4 · About Dunster Business School
      ───────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading eyebrow="About Dunster" title="A Swiss Institution Built for Intellectual Ambition" description="" align="left" />
              <div className="mt-8 space-y-5 text-slate-600">
                <p>
                  Dunster Business School is a private higher education institution incorporated in Switzerland
                  (ID: CHE-206.619.191), headquartered in Zug — one of Europe's most prestigious business
                  cantons and home to a thriving international research and executive community.
                </p>
                <p>
                  The school's doctoral programme is built on a singular premise: that original scholarship
                  should connect rigorous academic standards with the complexity of the real world. Research at
                  Dunster produces not just dissertations, but frameworks, methodologies, and insights with
                  lasting professional and intellectual impact.
                </p>
                <p>
                  PhD candidates come from the UAE, Saudi Arabia, Qatar, Mauritius, India, and across Europe —
                  creating a scholarly community as diverse as the problems worth researching. Supervisors
                  combine deep academic expertise with current professional relevance.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative h-56 overflow-hidden rounded-[8px] bg-gradient-to-br from-[#1E40FF] to-[#22D3EE]">
                <div className="flex h-full items-center justify-center text-white">
                  <div className="text-center">
                    <p className="mb-2 text-5xl">🏔️</p>
                    <p className="font-semibold">Zug, Switzerland</p>
                    <p className="text-sm opacity-75">Europe's Research & Business Capital</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { stat: 'CHE-206', label: 'Swiss Registered' },
                  { stat: '18+', label: 'Nationalities' },
                  { stat: 'Zug', label: 'Canton' },
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
          SECTION 5 · Why Scholars Choose Dunster
      ───────────────────────────────────────────── */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Programme Advantages"
            title="Why Scholars Choose Dunster"
            description="Six reasons researchers and senior professionals select a Swiss PhD over other doctoral pathways"
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                Icon: Shield,
                title: 'Swiss Academic Standards',
                description: 'Accredited against European and global quality frameworks — your credential is independently verifiable and internationally respected.',
              },
              {
                Icon: BookOpen,
                title: 'Original Research Culture',
                description: 'The PhD demands a genuine contribution to knowledge. Dunster\'s research culture supports ambitious, original scholarship with expert guidance.',
              },
              {
                Icon: Zap,
                title: 'Flexible for Working Scholars',
                description: 'Fully online, part-time delivery enables doctoral research without interrupting professional or academic careers.',
              },
              {
                Icon: Globe2,
                title: 'International Scholarly Network',
                description: 'Connect with a community of doctoral candidates and researchers across 18+ countries for genuine global academic collaboration.',
              },
              {
                Icon: Users2,
                title: 'Specialist Supervision',
                description: 'Supervisors are selected for expertise alignment with your specific research domain — not assigned by availability.',
              },
              {
                Icon: Award,
                title: 'Multilateral Recognition',
                description: 'QS 4-Star, EAHEA, QAHE, and ACBSP candidacy create a verifiable recognition profile respected by employers and institutions globally.',
              },
            ].map(({ Icon, title, description }) => (
              <div key={title} className="rounded-[8px] border border-slate-200 bg-white p-8 transition-all hover:shadow-lg">
                <Icon className="mb-4 h-8 w-8 text-[#1E40FF]" />
                <h3 className="mb-2 font-semibold text-slate-950">{title}</h3>
                <p className="text-sm leading-6 text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 6 · Recognition & Academic Standing
      ───────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Accreditation & Recognition"
            title="Recognition & Academic Standing"
            description="A tiered framework of international quality assurance that validates your Dunster PhD credential across institutions and industries"
          />
          <div className="mt-14">
            <RecognitionTiers
              tier1={[
                {
                  emoji: '⭐',
                  title: 'QS 4-Star Rating',
                  detail: 'Awarded by Quacquarelli Symonds — one of the most prestigious global university rating systems, recognising teaching quality, research, and internationalisation.',
                },
                {
                  emoji: '🏆',
                  title: 'EAHEA Accreditation',
                  detail: 'European Association for Higher Education Advancement — full institutional accreditation and quality certification confirming Dunster meets the highest European academic standards.',
                },
                {
                  emoji: '✅',
                  title: 'QAHE Accreditation',
                  detail: 'Full accreditation from the International Association for Quality Assurance in Pre-Tertiary & Higher Education — globally recognised across universities, research institutions, and professional bodies.',
                },
              ]}
              tier2={[
                {
                  emoji: '📘',
                  title: 'ACBSP Candidate for Accreditation',
                  detail: 'Recognised candidacy from the Accreditation Council for Business Schools and Programs — validating the business and management doctoral programme against internationally respected standards.',
                },
                {
                  emoji: '🎓',
                  title: 'AACSB Business Education Alliance Member',
                  detail: 'The gold standard in business school accreditation, reflecting Dunster\'s commitment to quality research, faculty excellence, and doctoral student outcomes.',
                },
              ]}
              tier3={[
                { emoji: '🌍', title: 'AROQA', detail: 'Arab Organisation for Quality Assurance in Education — through QAHE affiliation' },
                { emoji: '🏛️', title: 'CONIES, Austria', detail: 'Council on International Higher Education Supervision — institutional membership' },
                { emoji: '🇮🇩', title: 'ACE Indonesia', detail: 'Accreditation Council for Education — through QAHE association' },
                { emoji: '🇮🇳', title: 'TCODL India', detail: 'Tamilnadu Council for Open and Distance Learning — through QAHE MOU' },
                { emoji: '📊', title: 'International Education Board', detail: 'Asia-Pacific Quality Network associate — through QAHE' },
                { emoji: '🇬🇧', title: 'UKAF CB-035', detail: 'UK Akkreditering Forum — ISO certification body accreditation' },
                { emoji: '📋', title: 'UKcert', detail: 'UK-based independent certification body affirming international standards compliance' },
                { emoji: '📈', title: 'Dun & Bradstreet', detail: 'Global business data affiliation — institutional credibility and trust framework' },
              ]}
            />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 7 · Global Quality Framework
      ───────────────────────────────────────────── */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="What Accreditation Means For You"
            title="Global Quality Framework"
            description="Each body plays a distinct role in ensuring your PhD carries lasting academic and professional credibility"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                body: 'EAHEA',
                benefit: 'European Academic Validity',
                what: 'Validates that your research and degree meet European higher education benchmarks — widely recognised by universities, employers, and professional bodies across Europe.',
                color: '#1E40FF',
              },
              {
                body: 'QAHE',
                benefit: 'Global Quality Assurance',
                what: 'External review of academic governance, faculty standards, and doctoral process rigour. Provides independent verification of institutional quality to international stakeholders.',
                color: '#22D3EE',
              },
              {
                body: 'ACBSP',
                benefit: 'Business Research Standards',
                what: 'Signals that doctoral research in business and management meets globally recognised standards for academic quality — respected by 1,100+ member campuses worldwide.',
                color: '#1E40FF',
              },
              {
                body: 'QS Stars',
                benefit: 'Research Visibility',
                what: 'QS ratings are the benchmark employers and universities check first. A 4-Star rating places Dunster among institutions that command respect in academic and professional circles.',
                color: '#d4af37',
              },
            ].map(({ body, benefit, what, color }) => (
              <div
                key={body}
                className="rounded-[8px] border border-slate-200 bg-white p-8"
                style={{ borderTopColor: color, borderTopWidth: 3 }}
              >
                <p className="mb-1 text-xs font-bold uppercase tracking-wide text-slate-400">{body}</p>
                <h3 className="mb-3 font-semibold text-slate-950">{benefit}</h3>
                <p className="text-sm leading-6 text-slate-600">{what}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 8 · Research Areas
      ───────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Research Specialisations"
            title="PhD Research Areas"
            description="Choose a research domain where your professional expertise enables original scholarly contribution"
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 md:grid-cols-4">
            {[
              { area: 'Leadership & Organisational Theory', icon: '👔' },
              { area: 'Business Strategy & Competitive Intelligence', icon: '♟️' },
              { area: 'Innovation, Technology & Society', icon: '💡' },
              { area: 'Entrepreneurship & New Venture Research', icon: '🚀' },
              { area: 'Digital Transformation & AI Governance', icon: '📱' },
              { area: 'Global & Cross-Cultural Management', icon: '🌍' },
              { area: 'Operations Research & Systems Thinking', icon: '⚙️' },
              { area: 'Organisational Behaviour & Change', icon: '🏗️' },
            ].map(({ area, icon }) => (
              <div
                key={area}
                className="rounded-[8px] border border-slate-200 bg-white p-6 text-center transition-all hover:border-[#1E40FF]/30 hover:shadow-lg"
              >
                <div className="mb-3 text-3xl">{icon}</div>
                <h3 className="text-sm font-semibold text-slate-950">{area}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 9 · Doctoral Journey
      ───────────────────────────────────────────── */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="From Application to Award"
            title="Your Doctoral Journey"
            description="A structured, supervised pathway from first contact to doctoral graduation"
          />
          <div className="mt-14 mx-auto max-w-3xl space-y-3">
            {[
              { n: '01', title: 'Application & Eligibility Review', detail: 'Submit your academic credentials and professional background. Initial assessment and programme fit evaluation within 5 business days.', accent: '#1E40FF' },
              { n: '02', title: 'Research Proposal Development', detail: 'Develop a structured research proposal including research questions, theoretical framework, and proposed methodology — supported by admissions faculty.', accent: '#22D3EE' },
              { n: '03', title: 'Supervisor Allocation', detail: 'Matched with a specialist supervisor whose expertise aligns with your research domain. Begin regular scheduled supervision sessions.', accent: '#1E40FF' },
              { n: '04', title: 'Literature Review & Methodology', detail: 'Conduct a systematic literature review and finalise your research design under supervisor guidance.', accent: '#22D3EE' },
              { n: '05', title: 'Data Collection & Original Research', detail: 'Execute your research design — primary or secondary data collection, analysis, and interpretation.', accent: '#1E40FF' },
              { n: '06', title: 'Dissertation Writing & Review', detail: 'Write, review, and refine your doctoral thesis — typically 70,000–90,000 words of original scholarly contribution.', accent: '#22D3EE' },
              { n: '07', title: 'Examination & Graduation', detail: 'External examination, viva voce defence, and award of the Doctor of Philosophy from Dunster Business School, Switzerland.', accent: '#d4af37' },
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
                <div>
                  <h3 className="font-semibold text-slate-950">{phase.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{phase.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 10 · Who This Programme Is For
      ───────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Ideal Candidates"
            title="Who This Programme Is For"
            description="The Dunster PhD is designed for those who seek to make a lasting intellectual contribution — in academia, practice, or policy"
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[
              { role: 'Founder & Entrepreneur', icon: '🚀', description: 'Transform proprietary business insights into original research that defines your industry and academic field' },
              { role: 'Chief Executive', icon: '👔', description: 'Add the highest academic credential to your executive profile — board, advisory, and thought leadership positions' },
              { role: 'Director / Senior VP', icon: '📊', description: 'Develop doctoral research capability that elevates strategic decision-making and executive positioning' },
              { role: 'Management Consultant', icon: '💼', description: 'Build intellectual authority through published research — command premium positioning in competitive markets' },
              { role: 'Academic Professional', icon: '🎓', description: 'Progress to senior faculty, research directorship, or professorial positions with a Swiss doctoral credential' },
              { role: 'Government Official', icon: '🏛️', description: 'Apply doctoral-level research methodology to public policy — contribute to nationally and globally significant decisions' },
              { role: 'Research Scholar', icon: '🔬', description: 'Pursue original scholarship in a flexible environment that supports independent, rigorous academic inquiry' },
            ].map((audience) => (
              <div key={audience.role} className="rounded-[8px] border border-slate-200 bg-white p-7 text-center transition-all hover:shadow-lg">
                <div className="mb-4 text-4xl">{audience.icon}</div>
                <h3 className="mb-2 font-semibold text-slate-950">{audience.role}</h3>
                <p className="text-sm leading-5 text-slate-500">{audience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 11 · Industry & Professional Ecosystem
      ───────────────────────────────────────────── */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Professional Affiliations"
            title="Industry & Professional Ecosystem"
            description="Dunster's professional affiliations ensure PhD research stays relevant to the industries that shape the modern world"
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: 'ACCA',
                full: 'Association of Chartered Certified Accountants',
                benefit: 'Silver Learning Partner status. Financial governance and accountability frameworks enrich research in organisational strategy and management.',
                icon: '📊',
              },
              {
                name: 'AWS',
                full: 'Amazon Web Services',
                benefit: 'Cloud computing and AI ecosystem. Grounds technology management research in the infrastructure and platforms transforming every industry.',
                icon: '☁️',
              },
              {
                name: 'PMI',
                full: 'Project Management Institute',
                benefit: 'Global standards for programme and project research. Adds methodological structure to research in change management and complex systems.',
                icon: '📐',
              },
              {
                name: 'CompTIA',
                full: 'Computing Technology Industry Association',
                benefit: 'Technology industry validation. Supports doctoral research in digital transformation, cybersecurity, and information governance.',
                icon: '💻',
              },
              {
                name: 'HRCI',
                full: 'Human Resource Certification Institute',
                benefit: 'Global HR excellence standards. Provides professional validation for research into talent strategy, organisational behaviour, and people leadership.',
                icon: '👥',
              },
            ].map(({ name, full, benefit, icon }) => (
              <div key={name} className="rounded-[8px] border border-slate-200 bg-white p-8">
                <div className="mb-3 flex items-center gap-3">
                  <span className="text-3xl">{icon}</span>
                  <div>
                    <p className="font-bold text-slate-950">{name}</p>
                    <p className="text-xs text-slate-400">{full}</p>
                  </div>
                </div>
                <p className="text-sm leading-6 text-slate-600">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 12 · Graduate Outcomes
      ───────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="After Your PhD"
            title="Graduate Outcomes"
            description="What a Dunster PhD enables — in academic, professional, and thought leadership terms"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { outcome: 'Thought Leadership', detail: 'Publish research, deliver keynotes, and become the definitive academic voice in your professional domain.', icon: '🖊️' },
              { outcome: 'Academic Advancement', detail: 'Qualify for professorial, associate professor, and research director roles at business schools worldwide.', icon: '🎓' },
              { outcome: 'Consulting Authority', detail: 'Command premium engagements as an advisor, researcher, and independent scholar with doctoral standing.', icon: '💡' },
              { outcome: 'Board-Level Credibility', detail: 'The PhD increasingly commands respect in board advisory and governance contexts, particularly in regulated industries.', icon: '🏛️' },
              { outcome: 'Research Capability', detail: 'Design rigorous research programmes that influence strategy, policy, and industry practice at the highest level.', icon: '🔬' },
              { outcome: 'Global Influence', detail: 'Contribute to the international scholarly conversation — publications, citations, and collaborative research networks.', icon: '🌍' },
            ].map(({ outcome, detail, icon }) => (
              <div key={outcome} className="rounded-[8px] border border-slate-200 bg-[#F8FAFC] p-8">
                <div className="mb-4 text-4xl">{icon}</div>
                <h3 className="mb-2 font-semibold text-slate-950">{outcome}</h3>
                <p className="text-sm leading-6 text-slate-600">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 13 · Swiss Education Gallery
      ───────────────────────────────────────────── */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Swiss Academic Environment"
            title="Swiss Education Gallery"
            description="The environment that shapes every Dunster doctoral scholar"
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              { label: 'Zug Research District', sub: 'Switzerland\'s premier business and research canton', gradient: 'from-[#1E40FF] to-[#22D3EE]', icon: '🏔️' },
              { label: 'Doctoral Research Culture', sub: 'Rigorous, original, applied scholarship', gradient: 'from-[#1E40FF] to-[#6366f1]', icon: '🔬' },
              { label: 'PhD Graduation Ceremonies', sub: 'Swiss academic tradition and excellence', gradient: 'from-[#d4af37] to-[#f59e0b]', icon: '🎓' },
              { label: 'International Scholar Community', sub: '18+ nationalities in collaborative research', gradient: 'from-[#22D3EE] to-[#0891b2]', icon: '🌍' },
              { label: 'Expert Supervision', sub: 'Specialist supervisors across all research domains', gradient: 'from-[#1E40FF] to-[#1d4ed8]', icon: '👔' },
              { label: 'Global Alumni Network', sub: 'PhD graduates driving impact across 5 continents', gradient: 'from-[#6366f1] to-[#1E40FF]', icon: '🤝' },
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
          SECTION 14 · Alumni Voices
      ───────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Alumni Voices"
            title="What Dunster Graduates Say"
            description="Researchers and executives who transformed their intellectual standing through Swiss doctoral education"
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard
              name="Dr. Laksh Narayanan G."
              role="Research Director"
              company="India"
              quote="The Swiss credential changed how academic institutions and clients engage with my work. The rigour of the PhD process gave me tools I use every day in research."
            />
            <TestimonialCard
              name="Dr. Gautam Kumar"
              role="Associate Professor"
              company="Business University"
              quote="Dunster's supervision model is exceptional. My supervisor challenged every assumption in my research — producing scholarship I'm genuinely proud of."
            />
            <TestimonialCard
              name="Dr. Shiv Kumar Dadar"
              role="Senior Policy Advisor"
              company="Government"
              quote="My PhD research directly influenced national policy decisions. Dunster's applied research model made that possible in a way a purely theoretical programme never could have."
            />
            <TestimonialCard
              name="Dr. Jeegnesh Trivedi"
              role="Executive Consultant"
              company="Management Consulting"
              quote="The international cohort was an education in itself. Collaborating with researchers from the Gulf, Africa, and Europe reshaped how I think about business problems."
            />
            <TestimonialCard
              name="Dr. Asmed BOOLAKY"
              role="Dean of Research"
              company="Business School, Mauritius"
              quote="I chose Dunster because of the QS rating and the EAHEA accreditation. Both are immediately recognised by the institutions I collaborate with globally."
            />
            <TestimonialCard
              name="Dr. Hariraj Chouhan"
              role="Founder & CEO"
              company="Technology Ventures"
              quote="My dissertation became the foundation of our company's R&D strategy. The Swiss private model gave me freedom to research what actually matters — not just what gets published."
            />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 15 · FAQs
      ───────────────────────────────────────────── */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Common Questions"
            title="Frequently Asked Questions"
            description="Everything you need to know before beginning your Dunster PhD journey"
          />
          <div className="mt-14">
            <FAQAccordion
              faqs={[
                {
                  q: 'What degree will I receive upon completion?',
                  a: 'You will be awarded the Doctor of Philosophy (PhD) by Dunster Business School, Switzerland. The degree is conferred under Dunster\'s institutional autonomy as a Swiss private education provider.',
                },
                {
                  q: 'Is the Dunster PhD recognised internationally?',
                  a: 'Yes. Dunster holds EAHEA accreditation, full QAHE accreditation, and a QS 4-Star rating — all independently verifiable. Candidacy with ACBSP further signals that the programme meets internationally respected business education standards. These recognitions are searchable and accepted by employers and academic institutions globally.',
                },
                {
                  q: 'What is the Swiss private model and how does it differ from a state university?',
                  a: 'Dunster operates as a private business school under institutional autonomy and is not bound by the Swiss Higher Education Act (HEdA). This enables it to offer internationally accredited programmes and confer private degrees independently — a model established and respected across leading European business schools. Degrees are validated by independent accreditation bodies, which is entirely standard in executive and doctoral education.',
                },
                {
                  q: 'How is a PhD different from a DBA?',
                  a: 'A PhD (Doctor of Philosophy) is the traditional academic doctorate, focused on contributing original knowledge to an academic discipline. A DBA is designed for practitioners and focuses on applied research within professional contexts. Both carry full doctoral standing. The PhD is the preferred pathway for those pursuing academic careers, research leadership, or advancing scholarly theory.',
                },
                {
                  q: 'How long does the PhD take?',
                  a: 'The programme typically takes 36 to 48 months depending on the scope of your research, supervision feedback cycles, and thesis writing progress. There is no rigid timetable — candidates progress according to their research milestones.',
                },
                {
                  q: 'Can I complete the PhD while working?',
                  a: 'Yes. The programme is delivered entirely online and part-time, with no residency or attendance requirements. This is the model specifically designed for senior professionals and academics who cannot interrupt their careers.',
                },
                {
                  q: 'What are the entry requirements?',
                  a: 'Applicants typically hold a Master\'s degree and at least 5 years of relevant professional or academic experience. Strong research aptitude and a well-defined research interest are essential. Applications are reviewed holistically.',
                },
                {
                  q: 'What does the research process involve?',
                  a: 'After admission, candidates develop a research proposal, are matched with a specialist supervisor, conduct a systematic literature review, finalise their methodology, collect and analyse data, and produce a doctoral dissertation (typically 70,000–90,000 words). The process concludes with external examination and a viva voce defence.',
                },
                {
                  q: 'Will I have a dedicated supervisor?',
                  a: 'Yes. Every PhD candidate is assigned a primary supervisor selected for expertise alignment with your specific research domain. Regular one-to-one supervision sessions are scheduled throughout the programme.',
                },
                {
                  q: 'Is the PhD recognised in the Gulf and Asia?',
                  a: 'Dunster has an active alumni community across the UAE, Saudi Arabia, Qatar, Mauritius, and India. The QAHE and EAHEA accreditations are internationally recognised and have been accepted by employers and academic institutions across these regions.',
                },
                {
                  q: 'What language is the programme delivered in?',
                  a: 'The PhD programme is delivered entirely in English, making it accessible to international candidates from any country. Despite Switzerland\'s multilingual environment, English is the working language for all academic instruction and supervision.',
                },
                {
                  q: 'What career outcomes can I expect after graduating?',
                  a: 'Dunster PhD graduates progress to faculty positions, research directorships, senior consulting engagements, board advisory roles, and thought leadership. The PhD credential opens pathways in academia, policy, and executive leadership that require doctoral standing.',
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          FINAL CTA
      ───────────────────────────────────────────── */}
      <section className="bg-slate-950 py-24">
        <div className="container-premium text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#d4af37]">
            Your Intellectual Legacy
          </p>
          <h2 className="mx-auto max-w-3xl font-display text-4xl leading-tight text-white sm:text-5xl">
            Advance Your Professional Legacy Through Swiss Doctoral Education
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            Join a community of doctoral scholars earning their PhD from one of Switzerland's
            most internationally recognised private business schools.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="/book-consultation"
              className="inline-flex items-center rounded-full bg-[#1E40FF] px-8 py-4 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(30,64,255,0.22)] transition-all hover:bg-[#1937dd]"
            >
              Apply Now
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
