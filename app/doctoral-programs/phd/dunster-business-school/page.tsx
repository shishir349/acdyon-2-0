import type { Metadata } from 'next'
import Image from 'next/image'
import {
  CheckCircle2, Award, BookOpen, Globe2, Target, Zap,
  Users2, TrendingUp, Shield, Lightbulb, Building2, Star,
  UserRound, Compass, Rocket, Smartphone, Globe, Settings, Construction,
  Briefcase, BarChart3, GraduationCap, Landmark, Microscope, Cloud, Ruler,
  Laptop, Users, PenLine, FileText, MapPin,
} from 'lucide-react'
import { DataTabs } from '@/components/ui/data-tabs'
import { PageHero } from '@/components/sections/page-hero'
import { SectionHeading } from '@/components/ui/section-heading'
import { TestimonialCard } from '@/components/cards/testimonial-card'
import { FAQAccordion } from '@/components/ui/faq-accordion'
import { RecognitionTiers } from '@/components/ui/recognition-tiers'
import { ReadMoreText } from '@/components/ui/read-more-text'
import { BrochureDownloadButton } from '@/components/forms/brochure-download-button'

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
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#ffffff,#f8fafc_50%,#eef4ff)] dark:bg-[linear-gradient(135deg,#0a1120,#0f172a_50%,#0b1330)] pb-20 pt-36">
        <div className="absolute right-[-10%] top-20 h-80 w-80 rounded-full bg-[#1E40FF]/10 blur-3xl" />
        <div className="container-premium relative">

          {/* Logo + flags */}
          <div className="mb-8 flex flex-wrap items-center gap-4">
            <div className="relative h-14 w-40 overflow-hidden rounded-[4px]">
              <Image src={LOGO} alt="Dunster Business School" fill className="object-contain object-left" />
            </div>
            <MapPin className="h-5 w-5 text-slate-400" />
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
          <h1 className="max-w-4xl font-display text-4xl leading-tight text-slate-950 sm:text-5xl md:text-6xl dark:text-white">
            Swiss Doctoral Research for the World's Next Thought Leaders
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
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
            <BrochureDownloadButton
              programmeName="Dunster Business School PhD"
              fileUrl="/brochures/degrees/dunster-phd.html"
              sourcePage="/doctoral-programs/phd/dunster-business-school"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-4 text-sm font-semibold text-slate-950 transition-all hover:border-slate-300 hover:shadow-md dark:bg-slate-950 dark:text-white dark:border-slate-800"
            >
              Download Brochure
            </BrochureDownloadButton>
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
          <div className="grid gap-6 rounded-[8px] border border-slate-200 bg-white p-8 shadow-sm sm:grid-cols-2 md:grid-cols-5 dark:bg-slate-950 dark:border-slate-800">
            {[
              { label: 'Country', value: 'Switzerland' },
              { label: 'Location', value: 'Zug' },
              { label: 'Delivery Mode', value: 'Online / Blended' },
              { label: 'Duration', value: '36–48 Months' },
              { label: 'Intake', value: 'Rolling' },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-xs font-medium uppercase tracking-wide text-slate-400">{item.label}</p>
                <p className="mt-1 font-semibold text-slate-950 dark:text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero banner photo */}
      <section className="relative h-56 w-full overflow-hidden sm:h-72">
        <Image
          src="/images/site/hero-phd-library.webp"
          alt="A university library symbolising doctoral research"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/5 to-transparent dark:from-slate-950 dark:via-slate-950/5" />
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 2 · Why Switzerland
      ───────────────────────────────────────────── */}
      <section className="bg-white py-24 dark:bg-slate-950">
        <div className="container-premium">
          <SectionHeading
            eyebrow="The Swiss advantage"
            title="Why Switzerland Changes Everything"
            description="Switzerland consistently ranks among the world's top nations for research output, academic rigour, and innovation — for reasons that define a doctoral credential's long-term value."
          />

          <div className="mt-16 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
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
              <div key={label} className="rounded-[8px] border border-slate-200 bg-white p-8 transition-all hover:shadow-lg dark:bg-slate-950 dark:border-slate-800">
                <Icon className="mb-4 h-8 w-8 text-[#1E40FF]" />
                <p className="font-display text-4xl font-bold text-[#1E40FF]">{stat}</p>
                <p className="mb-3 mt-1 text-xs font-bold uppercase tracking-wide text-slate-400">{label}</p>
                <ReadMoreText text={body} className="text-sm leading-6 text-slate-600 dark:text-slate-300" />
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-[8px] border border-slate-200 bg-[#F8FAFC] p-10 text-center dark:bg-slate-900/60 dark:border-slate-800">
            <p className="mx-auto max-w-3xl font-display text-2xl leading-snug text-slate-950 sm:text-3xl dark:text-white">
              "A Swiss doctoral credential signals precision, rigour, and global intellectual standing — values that define how the world's leading institutions measure academic excellence."
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 3 · The Dunster Difference
      ───────────────────────────────────────────── */}
      <section className="bg-[#F8FAFC] py-24 dark:bg-slate-900/60">
        <div className="container-premium">
          <SectionHeading
            eyebrow="The Swiss private model"
            title="The Dunster Difference"
            description="Why senior researchers and executives increasingly choose private Swiss business schools for doctoral study over traditional public institutions."
          />

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <div className="rounded-[8px] border border-slate-200 bg-white p-8 dark:bg-slate-950 dark:border-slate-800">
              <div className="mb-6 inline-block rounded-full bg-slate-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-slate-500 dark:bg-slate-800/60 dark:text-slate-400">
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
                  <div key={dim} className="flex gap-3 border-b border-slate-100 pb-4 last:border-0 last:pb-0 dark:border-slate-800">
                    <div className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-slate-300" />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-slate-400">{dim}</p>
                      <p className="mt-0.5 text-sm text-slate-600 dark:text-slate-300">{val}</p>
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
                      <p className="mt-0.5 text-sm text-slate-700 dark:text-slate-300">{val}</p>
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
      <section className="bg-white py-24 dark:bg-slate-950">
        <div className="container-premium">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading eyebrow="About Dunster" title="A Swiss Institution Built for Intellectual Ambition" description="" align="left" />
              <div className="relative mt-8 h-64 overflow-hidden rounded-[8px] sm:h-80">
                <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" alt="Dunster Business School — Executive Education Environment" fill className="object-cover" unoptimized />
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative h-56 overflow-hidden rounded-[8px]">
                <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" alt="Dunster Business School — Academic Institution" fill className="object-cover" unoptimized />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { stat: 'CHE-206', label: 'Swiss Registered' },
                  { stat: '18+', label: 'Nationalities' },
                  { stat: 'Zug', label: 'Canton' },
                ].map(({ stat, label }) => (
                  <div key={label} className="rounded-[8px] border border-slate-200 bg-[#F8FAFC] p-4 text-center dark:bg-slate-900/60 dark:border-slate-800">
                    <p className="font-display text-2xl font-bold text-[#1E40FF]">{stat}</p>
                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{label}</p>
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
      <section className="bg-[#F8FAFC] py-24 dark:bg-slate-900/60">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Programme advantages"
            title="Why Scholars Choose Dunster"
            description="Six reasons researchers and senior professionals select a Swiss PhD over other doctoral pathways"
          />
          <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
              <div key={title} className="rounded-[8px] border border-slate-200 bg-white p-8 transition-all hover:shadow-lg dark:bg-slate-950 dark:border-slate-800">
                <Icon className="mb-4 h-8 w-8 text-[#1E40FF]" />
                <h3 className="mb-2 font-semibold text-slate-950 dark:text-white">{title}</h3>
                <ReadMoreText text={description} className="text-sm leading-6 text-slate-600 dark:text-slate-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 6 · Recognition & Academic Standing
      ───────────────────────────────────────────── */}
      <section className="bg-white py-24 dark:bg-slate-950">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Accreditation & recognition"
            title="Recognition & Academic Standing"
            description="A tiered framework of international quality assurance that validates your Dunster PhD credential across institutions and industries"
          />
          <div className="mt-14">
            <RecognitionTiers
              tier1={[
                { icon: 'star', title: 'QS 4-Star Rating', detail: 'Awarded by Quacquarelli Symonds — one of the most prestigious global university rating systems, recognising teaching quality, research, and internationalisation.' },
                { icon: 'award', title: 'EAHEA Accreditation', detail: 'European Association for Higher Education Advancement — full institutional accreditation and quality certification confirming Dunster meets the highest European academic standards.' },
                { icon: 'check', title: 'QAHE Accreditation', detail: 'Full accreditation from the International Association for Quality Assurance in Pre-Tertiary & Higher Education — globally recognised across universities, research institutions, and professional bodies.' },
              ]}
              tier2={[
                { icon: 'book', title: 'ACBSP Candidate for Accreditation', detail: 'Recognised candidacy from the Accreditation Council for Business Schools and Programs — validating the business and management doctoral programme against internationally respected standards.' },
                { icon: 'graduation', title: 'AACSB Business Education Alliance Member', detail: "The gold standard in business school accreditation, reflecting Dunster's commitment to quality research, faculty excellence, and doctoral student outcomes." },
              ]}
              tier3={[
                { icon: 'globe', title: 'AROQA', detail: 'Arab Organisation for Quality Assurance in Education — through QAHE affiliation' },
                { icon: 'landmark', title: 'CONIES, Austria', detail: 'Council on International Higher Education Supervision — institutional membership' },
                { icon: 'globe', title: 'ACE Indonesia', detail: 'Accreditation Council for Education — through QAHE association' },
                { icon: 'globe', title: 'TCODL India', detail: 'Tamilnadu Council for Open and Distance Learning — through QAHE MOU' },
                { icon: 'chart', title: 'International Education Board', detail: 'Asia-Pacific Quality Network associate — through QAHE' },
                { icon: 'globe', title: 'UKAF CB-035', detail: 'UK Akkreditering Forum — ISO certification body accreditation' },
                { icon: 'file', title: 'UKcert', detail: 'UK-based independent certification body affirming international standards compliance' },
                { icon: 'trending', title: 'Dun & Bradstreet', detail: 'Global business data affiliation — institutional credibility and trust framework' },
              ]}
            />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 7 · Global Quality Framework
      ───────────────────────────────────────────── */}
      <section className="bg-[#F8FAFC] py-24 dark:bg-slate-900/60">
        <div className="container-premium">
          <SectionHeading
            eyebrow="What accreditation means for you"
            title="Global Quality Framework"
            description="Each body plays a distinct role in ensuring your PhD carries lasting academic and professional credibility"
          />
          <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
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
                className="rounded-[8px] border border-slate-200 bg-white p-8 dark:bg-slate-950 dark:border-slate-800"
                style={{ borderTopColor: color, borderTopWidth: 3 }}
              >
                <p className="mb-1 text-xs font-bold uppercase tracking-wide text-slate-400">{body}</p>
                <h3 className="mb-3 font-semibold text-slate-950 dark:text-white">{benefit}</h3>
                <ReadMoreText text={what} className="text-sm leading-6 text-slate-600 dark:text-slate-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 8 · Research Areas
      ───────────────────────────────────────────── */}
      <section className="bg-white py-24 dark:bg-slate-950">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Research specialisations"
            title="PhD Research Areas"
            description="Choose a research domain where your professional expertise enables original scholarly contribution"
          />
          <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-5 sm:grid-cols-2 md:grid-cols-4">
            {[
              { area: 'Leadership & Organisational Theory', icon: UserRound },
              { area: 'Business Strategy & Competitive Intelligence', icon: Compass },
              { area: 'Innovation, Technology & Society', icon: Lightbulb },
              { area: 'Entrepreneurship & New Venture Research', icon: Rocket },
              { area: 'Digital Transformation & AI Governance', icon: Smartphone },
              { area: 'Global & Cross-Cultural Management', icon: Globe },
              { area: 'Operations Research & Systems Thinking', icon: Settings },
              { area: 'Organisational Behaviour & Change', icon: Construction },
            ].map(({ area, icon: Icon }) => (
              <div
                key={area}
                className="rounded-[8px] border border-slate-200 bg-white p-6 text-center transition-all hover:border-[#1E40FF]/30 hover:shadow-lg dark:bg-slate-950 dark:border-slate-800"
              >
                <div className="mb-3"><Icon className="h-7 w-7 text-[#1E40FF]" /></div>
                <h3 className="text-sm font-semibold text-slate-950 dark:text-white">{area}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 9 · Doctoral Journey
      ───────────────────────────────────────────── */}
      <section className="bg-[#F8FAFC] py-24 dark:bg-slate-900/60">
        <div className="container-premium">
          <SectionHeading
            eyebrow="From application to award"
            title="Your Doctoral Journey"
            description="A structured, supervised pathway from first contact to doctoral graduation"
          />
          <div className="mt-14 mx-auto max-w-3xl flex flex-col gap-3">
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
                className="flex gap-5 rounded-[8px] border border-slate-200 bg-white p-5 dark:bg-slate-950 dark:border-slate-800"
                style={{ borderLeftColor: phase.accent, borderLeftWidth: 4 }}
              >
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ backgroundColor: phase.accent }}
                >
                  {phase.n}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-950 dark:text-white">{phase.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{phase.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 10 · Who This Programme Is For
      ───────────────────────────────────────────── */}
      <section className="bg-white py-24 dark:bg-slate-950">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Ideal candidates"
            title="Who This Programme Is For"
            description="The Dunster PhD is designed for those who seek to make a lasting intellectual contribution — in academia, practice, or policy"
          />
          <DataTabs
            className="mt-14"
            tabs={[
              {
                label: 'Researchers & academics',
                panel: (
                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      { role: 'Research scholar', icon: Microscope, description: 'Pursue original scholarship in a flexible environment that supports independent, rigorous academic inquiry' },
                      { role: 'Academic professional', icon: GraduationCap, description: 'Progress to senior faculty, research directorship, or professorial positions with a Swiss doctoral credential' },
                    ].map((a) => (
                      <div key={a.role} className="rounded-[8px] border border-slate-200 bg-white p-7 text-center transition-all hover:shadow-lg dark:bg-slate-950 dark:border-slate-800">
                        <div className="mb-4"><a.icon className="h-9 w-9 text-[#1E40FF]" /></div>
                        <h3 className="mb-2 font-semibold text-slate-950 dark:text-white">{a.role}</h3>
                        <p className="text-sm leading-5 text-slate-500 dark:text-slate-400">{a.description}</p>
                      </div>
                    ))}
                  </div>
                ),
              },
              {
                label: 'Senior professionals',
                panel: (
                  <div className="grid gap-4 sm:grid-cols-3">
                    {[
                      { role: 'Chief executive', icon: Briefcase, description: 'Add the highest academic credential to your executive profile — board, advisory, and thought leadership positions' },
                      { role: 'Director / Senior VP', icon: BarChart3, description: 'Develop doctoral research capability that elevates strategic decision-making and executive positioning' },
                      { role: 'Management consultant', icon: UserRound, description: 'Build intellectual authority through published research — command premium positioning in competitive markets' },
                    ].map((a) => (
                      <div key={a.role} className="rounded-[8px] border border-slate-200 bg-white p-7 text-center transition-all hover:shadow-lg dark:bg-slate-950 dark:border-slate-800">
                        <div className="mb-4"><a.icon className="h-9 w-9 text-[#1E40FF]" /></div>
                        <h3 className="mb-2 font-semibold text-slate-950 dark:text-white">{a.role}</h3>
                        <p className="text-sm leading-5 text-slate-500 dark:text-slate-400">{a.description}</p>
                      </div>
                    ))}
                  </div>
                ),
              },
              {
                label: 'Entrepreneurs & public sector',
                panel: (
                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      { role: 'Founder & entrepreneur', icon: Rocket, description: 'Transform proprietary business insights into original research that defines your industry and academic field' },
                      { role: 'Government official', icon: Landmark, description: 'Apply doctoral-level research methodology to public policy — contribute to nationally and globally significant decisions' },
                    ].map((a) => (
                      <div key={a.role} className="rounded-[8px] border border-slate-200 bg-white p-7 text-center transition-all hover:shadow-lg dark:bg-slate-950 dark:border-slate-800">
                        <div className="mb-4"><a.icon className="h-9 w-9 text-[#1E40FF]" /></div>
                        <h3 className="mb-2 font-semibold text-slate-950 dark:text-white">{a.role}</h3>
                        <p className="text-sm leading-5 text-slate-500 dark:text-slate-400">{a.description}</p>
                      </div>
                    ))}
                  </div>
                ),
              },
            ]}
          />
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 11 · Industry & Professional Ecosystem
      ───────────────────────────────────────────── */}
      <section className="bg-[#F8FAFC] py-24 dark:bg-slate-900/60">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Professional affiliations"
            title="Industry & Professional Ecosystem"
            description="Dunster's professional affiliations ensure PhD research stays relevant to the industries that shape the modern world"
          />
          <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: 'ACCA',
                full: 'Association of Chartered Certified Accountants',
                benefit: 'Silver Learning Partner status. Financial governance and accountability frameworks enrich research in organisational strategy and management.',
                icon: BarChart3,
              },
              {
                name: 'AWS',
                full: 'Amazon Web Services',
                benefit: 'Cloud computing and AI ecosystem. Grounds technology management research in the infrastructure and platforms transforming every industry.',
                icon: Cloud,
              },
              {
                name: 'PMI',
                full: 'Project Management Institute',
                benefit: 'Global standards for programme and project research. Adds methodological structure to research in change management and complex systems.',
                icon: Ruler,
              },
              {
                name: 'CompTIA',
                full: 'Computing Technology Industry Association',
                benefit: 'Technology industry validation. Supports doctoral research in digital transformation, cybersecurity, and information governance.',
                icon: Laptop,
              },
              {
                name: 'HRCI',
                full: 'Human Resource Certification Institute',
                benefit: 'Global HR excellence standards. Provides professional validation for research into talent strategy, organisational behaviour, and people leadership.',
                icon: Users,
              },
            ].map(({ name, full, benefit, icon: Icon }) => (
              <div key={name} className="rounded-[8px] border border-slate-200 bg-white p-8 dark:bg-slate-950 dark:border-slate-800">
                <div className="mb-3 flex items-center gap-3">
                  <Icon className="h-7 w-7 text-[#1E40FF]" />
                  <div>
                    <p className="font-bold text-slate-950 dark:text-white">{name}</p>
                    <p className="text-xs text-slate-400">{full}</p>
                  </div>
                </div>
                <ReadMoreText text={benefit} className="text-sm leading-6 text-slate-600 dark:text-slate-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 12 · Graduate Outcomes
      ───────────────────────────────────────────── */}
      <section className="bg-white py-24 dark:bg-slate-950">
        <div className="container-premium">
          <SectionHeading
            eyebrow="After your PhD"
            title="Graduate Outcomes"
            description="What a Dunster PhD enables — in academic, professional, and thought leadership terms"
          />
          <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { outcome: 'Thought Leadership', detail: 'Publish research, deliver keynotes, and become the definitive academic voice in your professional domain.', icon: PenLine },
              { outcome: 'Academic Advancement', detail: 'Qualify for professorial, associate professor, and research director roles at business schools worldwide.', icon: GraduationCap },
              { outcome: 'Consulting Authority', detail: 'Command premium engagements as an advisor, researcher, and independent scholar with doctoral standing.', icon: Lightbulb },
              { outcome: 'Board-Level Credibility', detail: 'The PhD increasingly commands respect in board advisory and governance contexts, particularly in regulated industries.', icon: Landmark },
              { outcome: 'Research Capability', detail: 'Design rigorous research programmes that influence strategy, policy, and industry practice at the highest level.', icon: Microscope },
              { outcome: 'Global Influence', detail: 'Contribute to the international scholarly conversation — publications, citations, and collaborative research networks.', icon: Globe },
            ].map(({ outcome, detail, icon: Icon }) => (
              <div key={outcome} className="rounded-[8px] border border-slate-200 bg-[#F8FAFC] p-8 dark:bg-slate-900/60 dark:border-slate-800">
                <div className="mb-4"><Icon className="h-9 w-9 text-[#1E40FF]" /></div>
                <h3 className="mb-2 font-semibold text-slate-950 dark:text-white">{outcome}</h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 14 · Alumni Voices
      ───────────────────────────────────────────── */}
      <section className="bg-white py-24 dark:bg-slate-950">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Alumni voices"
            title="What Dunster Graduates Say"
            description="Researchers and executives who transformed their intellectual standing through Swiss doctoral education"
          />
          <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard
              name="Dr. Laksh Narayanan G."
              role="Research Director"
              company="India"
              quote="The Swiss credential changed how academic institutions and clients engage with my work. The rigour of the PhD process gave me tools I use every day in research."
              imageUrl="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
            />
            <TestimonialCard
              name="Dr. Gautam Kumar"
              role="Associate Professor"
              company="Business University"
              quote="Dunster's supervision model is exceptional. My supervisor challenged every assumption in my research — producing scholarship I'm genuinely proud of."
              imageUrl="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
            />
            <TestimonialCard
              name="Dr. Shiv Kumar Dadar"
              role="Senior Policy Advisor"
              company="Government"
              quote="My PhD research directly influenced national policy decisions. Dunster's applied research model made that possible in a way a purely theoretical programme never could have."
              imageUrl="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80"
            />
            <TestimonialCard
              name="Dr. Jeegnesh Trivedi"
              role="Executive Consultant"
              company="Management Consulting"
              quote="The international cohort was an education in itself. Collaborating with researchers from the Gulf, Africa, and Europe reshaped how I think about business problems."
              imageUrl="https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=150&q=80"
            />
            <TestimonialCard
              name="Dr. Asmed BOOLAKY"
              role="Dean of Research"
              company="Business School, Mauritius"
              quote="I chose Dunster because of the QS rating and the EAHEA accreditation. Both are immediately recognised by the institutions I collaborate with globally."
              imageUrl="https://images.unsplash.com/photo-1484515991647-c5760fcecfc7?auto=format&fit=crop&w=150&q=80"
            />
            <TestimonialCard
              name="Dr. Hariraj Chouhan"
              role="Founder & CEO"
              company="Technology Ventures"
              quote="My dissertation became the foundation of our company's R&D strategy. The Swiss private model gave me freedom to research what actually matters — not just what gets published."
              imageUrl="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80"
            />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 15 · Certificate Showcase
      ───────────────────────────────────────────── */}
      <section className="bg-white py-24 dark:bg-slate-950">
        <div className="container-premium">
          <SectionHeading eyebrow="Credentials" title="Your Doctoral Achievement" description="Official PhD credentials recognised globally for academic and professional advancement." />
          <div className="mx-auto mt-14 max-w-3xl">
            <div className="overflow-hidden rounded-[8px] border border-slate-200 bg-white shadow-lg dark:bg-slate-950 dark:border-slate-800" style={{aspectRatio: '1.41/1'}}>
              <div className="relative h-full w-full">
                <Image src="https://sohhmxayptiosflmlxuu.supabase.co/storage/v1/object/public/brochures/Certificates/DBS%20PHD.jpeg" alt="Dunster Business School PhD Certificate" fill className="object-contain p-4" unoptimized />
              </div>
            </div>
            <p className="mt-4 text-center text-sm text-slate-500 dark:text-slate-400">Official Dunster Business School PhD Certificate</p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {['Doctor of Philosophy Degree', 'Academic Transcript', 'Thesis Completion Record', 'Research Supervision Record', 'Alumni Membership', 'Graduation Eligibility'].map((item) => (
                <div key={item} className="rounded-[8px] border border-slate-200 bg-[#F8FAFC] p-4 text-center dark:bg-slate-900/60 dark:border-slate-800">
                  <p className="text-sm font-semibold text-slate-950 dark:text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 16 · FAQs
      ───────────────────────────────────────────── */}
      <section className="bg-[#F8FAFC] py-24 dark:bg-slate-900/60">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Common questions"
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
          ADVISER CTA
      ───────────────────────────────────────────── */}
      <section className="bg-[#0f172a] py-20">
        <div className="container-premium text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#22d3ee]">Expert guidance</p>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Speak with an Academic Adviser</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Discuss your research interests, career goals, and eligibility for the Dunster PhD — your path to Swiss doctoral standing starts with a conversation.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href="/book-consultation"
              className="inline-flex items-center justify-center rounded-full bg-[#1e40ff] px-8 py-4 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(30,64,255,0.25)] transition-all hover:bg-[#1937dd]"
            >
              Book a Free Consultation
            </a>
            <a
              href="/doctoral-programs/phd"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white transition-all hover:border-white/40 hover:bg-white/5"
            >
              Explore All PhD Programmes
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}
