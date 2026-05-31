import type { Metadata } from 'next'
import Image from 'next/image'
import {
  CheckCircle2, Award, BookOpen, Globe2, Target, Zap,
  Users2, TrendingUp, Shield, Lightbulb, Building2, Star
} from 'lucide-react'
import { PageHero } from '@/components/sections/page-hero'
import { SectionHeading } from '@/components/ui/section-heading'
import { RecognitionBadge } from '@/components/cards/recognition-badge'
import { TestimonialCard } from '@/components/cards/testimonial-card'
import { ConsultationNudge } from '@/components/sections/consultation-nudge'
import { FinalCTA } from '@/components/sections/final-cta'
import { FAQAccordion } from '@/components/ui/faq-accordion'
import { RecognitionTiers } from '@/components/ui/recognition-tiers'

export const metadata: Metadata = {
  title: 'Doctor of Business Administration (DBA) — Dunster Business School, Switzerland | AcdyOn',
  description:
    'Earn a Swiss executive DBA from Dunster Business School — QS 4-Star rated, EAHEA & QAHE accredited. Applied research for senior professionals and business leaders.',
}

const LOGO = 'https://sohhmxayptiosflmlxuu.supabase.co/storage/v1/object/public/brochures/DBS_New-Final-Logo_6.png'

export default function DunsterDBAPage() {
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
            Swiss Executive Doctoral Education For Global Leaders
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            A doctoral pathway designed for professionals seeking academic advancement,
            leadership credibility, applied research capability, and international recognition.
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
              { label: 'Duration', value: '18–36 Months' },
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
            description="Switzerland consistently ranks among the world's top nations for education quality, innovation, and business excellence — for reasons that matter to your career."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Shield,
                stat: '#1',
                label: 'Global Innovation Index',
                body: 'Switzerland has led the Global Innovation Index for over a decade, producing world-class research and business frameworks adopted globally.',
              },
              {
                icon: Target,
                stat: '200+',
                label: 'Years of Academic Tradition',
                body: 'Swiss educational institutions are built on centuries of precision, rigour, and a deep commitment to producing outcomes that matter professionally.',
              },
              {
                icon: Globe2,
                stat: '4',
                label: 'National Languages',
                body: 'A truly multilingual, multicultural academic environment that mirrors global business — uniquely suited for international executives.',
              },
              {
                icon: Building2,
                stat: 'Top 3',
                label: 'Business Education Hub',
                body: "Home to IMD, St. Gallen, and a thriving private business school ecosystem, Switzerland's business education credentials are second to none.",
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

          {/* Swiss brand statement */}
          <div className="mt-12 rounded-[8px] border border-slate-200 bg-[#F8FAFC] p-10 text-center">
            <p className="mx-auto max-w-3xl font-display text-2xl leading-snug text-slate-950 sm:text-3xl">
              "A Swiss doctoral credential signals precision, global thinking, and professional maturity — values that transcend industries and borders."
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
            description="Understanding why senior executives increasingly choose private Swiss business schools over traditional public institutions."
          />

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {/* Public column */}
            <div className="rounded-[8px] border border-slate-200 bg-white p-8">
              <div className="mb-6 inline-block rounded-full bg-slate-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-slate-500">
                Public University
              </div>
              <div className="space-y-5">
                {[
                  { dim: 'Class Size', val: 'Large cohorts — limited individual attention' },
                  { dim: 'Industry Exposure', val: 'Primarily academic faculty — limited current industry practice' },
                  { dim: 'Research Model', val: 'Theoretical focus — contribution to academic literature' },
                  { dim: 'Faculty Access', val: 'Structured timetables — limited direct access' },
                  { dim: 'Professional Relevance', val: 'Academic publishing emphasis over applied outcomes' },
                  { dim: 'Flexibility', val: 'Residency and attendance requirements typical' },
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

            {/* Private column */}
            <div className="rounded-[8px] border border-[#1E40FF]/30 bg-[#1E40FF]/5 p-8">
              <div className="mb-6 inline-block rounded-full bg-[#1E40FF] px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
                Dunster Business School
              </div>
              <div className="space-y-5">
                {[
                  { dim: 'Class Size', val: 'Small cohorts — direct supervisor relationship from day one' },
                  { dim: 'Industry Exposure', val: 'Faculty who combine teaching with active professional roles' },
                  { dim: 'Research Model', val: 'Applied research — findings directly relevant to your organisation' },
                  { dim: 'Faculty Access', val: 'Personal supervisor relationship — regular one-to-one engagement' },
                  { dim: 'Professional Relevance', val: 'Designed for executives — research informs real leadership decisions' },
                  { dim: 'Flexibility', val: 'Fully online — no career interruption required' },
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

          <p className="mt-8 text-center text-sm text-slate-500">
            Dunster Business School operates under institutional autonomy and is not bound by the Swiss Higher Education Act (HEdA),
            enabling it to offer internationally accredited doctoral programmes independently.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 4 · About Dunster Business School
      ───────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading eyebrow="About Dunster" title="A Swiss Institution Built for Executive Ambition" description="" align="left" />
              <div className="mt-8 space-y-5 text-slate-600">
                <p>
                  Dunster Business School is a private higher education institution incorporated in Switzerland
                  (ID: CHE-206.619.191), headquartered in Zug — Switzerland's premier business canton and home
                  to some of the world's most admired multinational companies.
                </p>
                <p>
                  The school focuses exclusively on business administration, leadership, and applied management
                  research. This singular focus produces graduates with deep functional expertise rather than
                  broad academic generalism — a distinction employers and boards recognise immediately.
                </p>
                <p>
                  Learners come from across the UAE, Saudi Arabia, Qatar, Mauritius, India, and beyond —
                  building an international cohort that reflects the reality of global executive careers.
                  Faculty combine academic credentials with active industry engagement, ensuring every
                  research interaction is grounded in current professional practice.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative h-56 overflow-hidden rounded-[8px] bg-gradient-to-br from-[#1E40FF] to-[#22D3EE]">
                <div className="flex h-full items-center justify-center text-white">
                  <div className="text-center">
                    <p className="mb-2 text-5xl">🏔️</p>
                    <p className="font-semibold">Zug, Switzerland</p>
                    <p className="text-sm opacity-75">Business Capital of Europe</p>
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
          SECTION 5 · Why Professionals Choose Dunster
      ───────────────────────────────────────────── */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Programme Advantages"
            title="Why Professionals Choose Dunster"
            description="Six reasons senior leaders select a Swiss DBA over other doctoral pathways"
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                Icon: Shield,
                title: 'Swiss Education Standards',
                description: 'Swiss private business schools are internationally benchmarked, applying quality standards that command global credibility.',
              },
              {
                Icon: Lightbulb,
                title: 'Applied Research Model',
                description: 'Research is designed to solve real organisational challenges — generating IP and strategic insight your business can use.',
              },
              {
                Icon: Zap,
                title: 'Executive-Friendly Delivery',
                description: 'Fully online, part-time structure ensures zero career interruption. Your leadership role continues uninterrupted.',
              },
              {
                Icon: Globe2,
                title: 'Global Professional Network',
                description: 'Cohorts drawn from 18+ countries across the Gulf, South Asia, Africa, and Europe create genuine global peer relationships.',
              },
              {
                Icon: Users2,
                title: 'Industry-Focused Faculty',
                description: 'Supervisors and faculty bring both academic expertise and active executive experience — research stays close to practice.',
              },
              {
                Icon: Award,
                title: 'International Recognition',
                description: 'QS 4-Star, EAHEA, QAHE, and ACBSP candidacy ensure your credential is verifiable across jurisdictions and sectors.',
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
            description="A tiered framework of international quality assurance that validates your Dunster credential across industries and borders"
          />
          <div className="mt-14">
            <RecognitionTiers
              tier1={[
                {
                  emoji: '⭐',
                  title: 'QS 4-Star Rating',
                  detail: 'Awarded by Quacquarelli Symonds — one of the most prestigious global university rating systems, recognising teaching quality, employability, and internationalisation.',
                },
                {
                  emoji: '🏆',
                  title: 'EAHEA Accreditation',
                  detail: 'European Association for Higher Education Advancement — full institutional accreditation and quality certification affirming Dunster meets the highest European academic standards.',
                },
                {
                  emoji: '✅',
                  title: 'QAHE Accreditation',
                  detail: 'Full accreditation from the International Association for Quality Assurance in Pre-Tertiary & Higher Education — globally recognised across universities, online institutions, and professional bodies.',
                },
              ]}
              tier2={[
                {
                  emoji: '📘',
                  title: 'ACBSP Candidate for Accreditation',
                  detail: 'Recognised candidacy from the Accreditation Council for Business Schools and Programs — a globally respected body for business degree programmes at all levels, from associate to doctoral.',
                },
                {
                  emoji: '🎓',
                  title: 'AACSB Business Education Alliance Member',
                  detail: "Association to Advance Collegiate Schools of Business — the gold standard in business school accreditation, reflecting Dunster's commitment to research, faculty quality, and student outcomes.",
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
            description="Each accreditation body serves a distinct purpose in validating your academic and professional investment"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                body: 'EAHEA',
                benefit: 'European Academic Standards',
                what: 'Validates your curriculum meets European higher education benchmarks — recognised by employers and institutions across Europe and beyond.',
                color: '#1E40FF',
              },
              {
                body: 'QAHE',
                benefit: 'Global Quality Assurance',
                what: 'Ensures your institution undergoes rigorous external review on governance, academic rigour, faculty standards, and student outcomes.',
                color: '#22D3EE',
              },
              {
                body: 'ACBSP',
                benefit: 'Business Education Excellence',
                what: 'Signals that the business programme meets specialised standards for business schools — recognised by over 1,100 member campuses worldwide.',
                color: '#1E40FF',
              },
              {
                body: 'QS Stars',
                benefit: 'Employer Visibility',
                what: 'QS ratings are the first thing employers and academic institutions check. A 4-Star rating positions Dunster alongside respected global institutions.',
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
            title="Doctoral Research Areas"
            description="Choose a specialisation that connects your professional experience with original academic contribution"
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 md:grid-cols-4">
            {[
              { area: 'Leadership & Executive Strategy', icon: '👔' },
              { area: 'Business Strategy & Competitive Advantage', icon: '♟️' },
              { area: 'Innovation & Technology Management', icon: '💡' },
              { area: 'Entrepreneurship & Venture Creation', icon: '🚀' },
              { area: 'Digital Transformation', icon: '📱' },
              { area: 'Global & Cross-Cultural Management', icon: '🌍' },
              { area: 'Operations & Supply Chain', icon: '⚙️' },
              { area: 'Organisational Development', icon: '🏗️' },
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
            eyebrow="From Application to Graduation"
            title="Your Doctoral Journey"
            description="A clear, supported pathway from application to the award of your DBA"
          />
          <div className="mt-14 mx-auto max-w-3xl space-y-3">
            {[
              { n: '01', title: 'Application & Eligibility', detail: 'Submit your profile, academic background, and professional experience. Initial assessment within 5 business days.', accent: '#1E40FF' },
              { n: '02', title: 'Research Proposal', detail: 'Develop a doctoral research proposal with guidance from our admissions faculty. Refine your research question and scope.', accent: '#22D3EE' },
              { n: '03', title: 'Supervisor Allocation', detail: 'Matched with a specialist supervisor aligned to your research domain and professional background.', accent: '#1E40FF' },
              { n: '04', title: 'Research Development', detail: 'Conduct literature review, finalise methodology, and begin primary research under regular supervision.', accent: '#22D3EE' },
              { n: '05', title: 'Dissertation Writing', detail: 'Draft, review, and refine your doctoral dissertation — typically 60,000–80,000 words of original scholarship.', accent: '#1E40FF' },
              { n: '06', title: 'Evaluation & Viva Voce', detail: 'External examiners assess your dissertation. Present and defend your research findings.', accent: '#22D3EE' },
              { n: '07', title: 'Graduation & Award', detail: 'Receive your Doctor of Business Administration from Dunster Business School, Switzerland.', accent: '#d4af37' },
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
            description="The Dunster DBA is built for professionals who have earned their position and are ready to formalise their expertise at the highest academic level"
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[
              { role: 'Founder & Entrepreneur', icon: '🚀', description: 'Formalise the tacit knowledge behind your business model into a researched doctoral contribution' },
              { role: 'Chief Executive Officer', icon: '👔', description: 'Gain academic credibility to accompany executive authority — board, advisory, and academic leadership' },
              { role: 'Director / VP', icon: '📊', description: 'Position yourself for the next career level with doctoral-level strategic research capability' },
              { role: 'Senior Manager', icon: '🎯', description: 'Develop research skills that transform management decisions into evidence-based, publishable insights' },
              { role: 'Management Consultant', icon: '💼', description: 'Elevate your intellectual positioning and command premium engagements with a doctoral credential' },
              { role: 'Academic Professional', icon: '🎓', description: 'Transition into senior academic roles or research leadership with an internationally recognised DBA' },
              { role: 'Government Official', icon: '🏛️', description: 'Apply research methodology to policy design — add scholarly rigour to public sector leadership' },
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
            description="Dunster's professional affiliations extend your credential beyond academia into the industries that matter most to executives"
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: 'ACCA',
                full: 'Association of Chartered Certified Accountants',
                benefit: 'Silver Learning Partner status. ACCA alignment adds financial governance depth to research in leadership and strategy.',
                icon: '📊',
              },
              {
                name: 'AWS',
                full: 'Amazon Web Services',
                benefit: 'Cloud and digital infrastructure credentials. Strengthens the relevance of research in digital transformation and technology management.',
                icon: '☁️',
              },
              {
                name: 'PMI',
                full: 'Project Management Institute',
                benefit: 'Global project management standards. Adds structure and methodology rigour to applied research in operations and change management.',
                icon: '📐',
              },
              {
                name: 'CompTIA',
                full: 'Computing Technology Industry Association',
                benefit: 'Technology industry validation. Grounds IT-related research in globally recognised professional standards.',
                icon: '💻',
              },
              {
                name: 'HRCI',
                full: 'Human Resource Certification Institute',
                benefit: 'HR excellence framework. Strengthens research into talent, people strategy, and organisational behaviour with professional credibility.',
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
            eyebrow="After Your DBA"
            title="Graduate Outcomes"
            description="What a Dunster DBA enables — in professional, academic, and thought leadership terms"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { outcome: 'Thought Leadership', detail: 'Publish research, speak at conferences, and become the recognised authority in your professional domain.', icon: '🖊️' },
              { outcome: 'Academic Advancement', detail: 'Qualify for faculty, professorial, and research director positions at business schools globally.', icon: '🎓' },
              { outcome: 'Consulting Authority', detail: 'Command premium advisory engagements backed by doctoral research and a Swiss academic credential.', icon: '💡' },
              { outcome: 'Board-Level Credibility', detail: 'The DBA is increasingly a prerequisite for board advisory positions, especially in regulated industries.', icon: '🏛️' },
              { outcome: 'Research Capability', detail: 'Design and execute applied research that drives strategy, policy, or product decisions at the highest level.', icon: '🔬' },
              { outcome: 'Career Transformation', detail: 'Open pathways to roles, institutions, and markets that are simply inaccessible without doctoral standing.', icon: '📈' },
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
            description="The environment that shapes every Dunster doctoral graduate"
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              { label: 'Zug Business District', sub: "Switzerland's premier business canton", gradient: 'from-[#1E40FF] to-[#22D3EE]', icon: '🏔️' },
              { label: 'Research & Innovation', sub: 'Applied doctoral research culture', gradient: 'from-[#1E40FF] to-[#6366f1]', icon: '🔬' },
              { label: 'Graduation Ceremonies', sub: 'Swiss academic tradition', gradient: 'from-[#d4af37] to-[#f59e0b]', icon: '🎓' },
              { label: 'International Cohorts', sub: '18+ nationalities learning together', gradient: 'from-[#22D3EE] to-[#0891b2]', icon: '🌍' },
              { label: 'Faculty Leadership', sub: 'Industry-active doctoral supervisors', gradient: 'from-[#1E40FF] to-[#1d4ed8]', icon: '👔' },
              { label: 'Global Alumni Network', sub: 'Graduates across 5 continents', gradient: 'from-[#6366f1] to-[#1E40FF]', icon: '🤝' },
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
            description="Senior professionals who transformed their careers through Swiss doctoral education"
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard
              name="Dr. Ronald M. Gharib"
              role="Executive Director"
              company="Middle East"
              quote="The Swiss credential opened doors that no other doctoral programme could have. My research directly shaped board-level strategy within my first year post-graduation."
            />
            <TestimonialCard
              name="Dr. Musaab Abdelrahman"
              role="Senior Research Lead"
              company="Gulf Region"
              quote="Dunster's applied research model meant my dissertation was immediately relevant. The supervision was rigorous yet attuned to the realities of professional life."
            />
            <TestimonialCard
              name="Dr. Inam Ullah Khan"
              role="Director of Operations"
              company="South Asia"
              quote="The private school model gave me direct access to supervisors who understood my industry. I wouldn't have achieved this depth with a traditional public university."
            />
            <TestimonialCard
              name="Dr. Laksh Narayanan G."
              role="Business Strategy Consultant"
              company="India"
              quote="The QS 4-Star rating was the deciding factor. When clients see a Swiss credential backed by QS recognition, conversations about authority change immediately."
            />
            <TestimonialCard
              name="Dr. James Mildenhall"
              role="Managing Director"
              company="Europe"
              quote="Combining a senior leadership role with doctoral research was only possible because of Dunster's flexible model. Switzerland gave my credential global weight."
            />
            <TestimonialCard
              name="Dr. Samer Haddad"
              role="CEO"
              company="MENA Region"
              quote="The international cohort was unexpectedly valuable. The network I built across the UAE, India, and Europe continues to drive business and academic collaboration."
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
            description="Everything you need to know before beginning your Dunster DBA journey"
          />
          <div className="mt-14">
            <FAQAccordion
              faqs={[
                {
                  q: 'What degree will I receive upon completion?',
                  a: 'You will be awarded the Doctor of Business Administration (DBA) by Dunster Business School, Switzerland. The degree is conferred under Dunster\'s institutional autonomy as a Swiss private education provider.',
                },
                {
                  q: 'Is the Dunster DBA recognised internationally?',
                  a: 'Yes. Dunster holds EAHEA accreditation, full QAHE accreditation, and QS 4-Star rating — all internationally verifiable. Candidacy with ACBSP further confirms that the programme meets globally respected business education standards. These recognitions are visible and searchable by employers, academic institutions, and professional bodies worldwide.',
                },
                {
                  q: 'What is the Swiss private model and how does it differ from a state university?',
                  a: 'Dunster operates as a private business school under institutional autonomy and is not bound by the Swiss Higher Education Act (HEdA). This enables it to offer internationally accredited programmes and confer private degrees independently — a model common across leading European business schools including those in France, the UK, and Spain. Degrees are validated by independent accreditation bodies rather than the state, which is entirely standard in executive education.',
                },
                {
                  q: 'How long does the DBA take to complete?',
                  a: 'The programme typically takes 18 to 36 months depending on your research topic, professional commitments, and dissertation progress. The flexible online delivery means there is no fixed term — candidates progress at the pace their research and supervision allow.',
                },
                {
                  q: 'Can I complete the DBA while continuing to work?',
                  a: 'Yes — this is the design intent. The DBA is structured specifically for working professionals at senior levels. Delivery is entirely online and part-time, with no residency requirements. Your career continues uninterrupted.',
                },
                {
                  q: 'What are the entry requirements?',
                  a: 'Applicants typically hold a Master\'s degree (MBA or equivalent) and at least 5–10 years of senior professional experience. The programme values professional expertise as much as academic credentials. Applications are assessed holistically.',
                },
                {
                  q: 'What does the research process involve?',
                  a: 'After admission, candidates develop a research proposal, are matched with a specialist supervisor, conduct a literature review, design their methodology, collect and analyse data, and produce a doctoral dissertation (typically 60,000–80,000 words). The process concludes with an external examination and viva voce defence.',
                },
                {
                  q: 'Will I have a dedicated supervisor?',
                  a: 'Yes. Every DBA candidate is assigned a primary supervisor matched to their research area. Supervisors provide regular one-to-one guidance and are selected based on alignment with your specific research domain and industry context.',
                },
                {
                  q: 'Is the DBA recognised in the Gulf region?',
                  a: 'Dunster has a significant alumni base across the UAE, Saudi Arabia, Qatar, and Bahrain. The QAHE and EAHEA accreditations are recognised internationally and have been accepted by employers and academic institutions across the Gulf region.',
                },
                {
                  q: 'What language is the programme delivered in?',
                  a: 'The DBA programme is delivered entirely in English. Given that Switzerland has four official languages, English is the working language of the programme to ensure accessibility for international candidates.',
                },
                {
                  q: 'How is the DBA different from a PhD?',
                  a: 'A DBA (Doctor of Business Administration) is designed for practitioners — its research contribution connects to professional practice, organisational strategy, and applied business problems. A PhD typically aims for contribution to theoretical academic literature. Both carry doctoral standing. The DBA is the preferred pathway for senior professionals.',
                },
                {
                  q: 'What happens after I graduate?',
                  a: 'Dunster graduates go on to board advisory roles, faculty positions, senior consulting engagements, and executive leadership. The DBA provides both the credential and the research capability to enter academic, advisory, and thought leadership positions that require doctoral standing.',
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
            Your Next Chapter
          </p>
          <h2 className="mx-auto max-w-3xl font-display text-4xl leading-tight text-white sm:text-5xl">
            Advance Your Professional Legacy Through Swiss Doctoral Education
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            Join a select community of executives, founders, and thought leaders earning doctoral credentials
            from Switzerland's premier private business school.
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
