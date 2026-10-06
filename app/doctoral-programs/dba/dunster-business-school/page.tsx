import type { Metadata } from 'next'
import Image from 'next/image'
import {
  CheckCircle2, Award, BookOpen, Globe2, Target, Zap,
  Users2, TrendingUp, Shield, Lightbulb, Building2, Star,
  Compass, Rocket, Smartphone, Settings, Construction, UserRound,
  Briefcase, GraduationCap, Landmark, BarChart3, Cloud, Ruler,
  Laptop, Users, PenLine, Microscope, FileText, MapPin,
} from 'lucide-react'
import { PageHero } from '@/components/sections/page-hero'
import { DataTabs } from '@/components/ui/data-tabs'
import { SectionHeading } from '@/components/ui/section-heading'
import { RecognitionBadge } from '@/components/cards/recognition-badge'
import { TestimonialCard } from '@/components/cards/testimonial-card'
import { FinalCTA } from '@/components/sections/final-cta'
import { FAQAccordion } from '@/components/ui/faq-accordion'
import { RecognitionTiers } from '@/components/ui/recognition-tiers'
import { ReadMoreText } from '@/components/ui/read-more-text'
import { BrochureDownloadButton } from '@/components/forms/brochure-download-button'

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
            Swiss Executive Doctoral Education For Global Leaders
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
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
            <BrochureDownloadButton
              programmeName="Dunster Business School DBA"
              fileUrl="/brochures/degrees/dunster-dba.html"
              sourcePage="/doctoral-programs/dba/dunster-business-school"
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
              { label: 'Duration', value: '18–36 Months' },
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
          src="/images/site/hero-dba-executive.webp"
          alt="Executives in a professional partnership meeting"
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
            description="Switzerland consistently ranks among the world's top nations for education quality, innovation, and business excellence — for reasons that matter to your career."
          />

          <div className="mt-16 grid gap-4 grid-cols-2 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
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
              <div key={label} className="rounded-[8px] border border-slate-200 bg-white p-4 transition-all hover:shadow-lg sm:p-8 dark:bg-slate-950 dark:border-slate-800">
                <Icon className="mb-3 h-6 w-6 text-[#1E40FF] sm:mb-4 sm:h-8 sm:w-8" />
                <p className="font-display text-2xl font-bold text-[#1E40FF] sm:text-4xl">{stat}</p>
                <p className="mb-2 mt-1 text-xs font-bold uppercase tracking-wide text-slate-400 sm:mb-3">{label}</p>
                <ReadMoreText text={body} className="text-sm leading-6 text-slate-600 dark:text-slate-300" />
              </div>
            ))}
          </div>

          {/* Swiss brand statement */}
          <div className="mt-12 rounded-[8px] border border-slate-200 bg-[#F8FAFC] p-10 text-center dark:bg-slate-900/60 dark:border-slate-800">
            <p className="mx-auto max-w-3xl font-display text-2xl leading-snug text-slate-950 sm:text-3xl dark:text-white">
              "A Swiss doctoral credential signals precision, global thinking, and professional maturity — values that transcend industries and borders."
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
            description="Understanding why senior executives increasingly choose private Swiss business schools over traditional public institutions."
          />

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {/* Public column */}
            <div className="rounded-[8px] border border-slate-200 bg-white p-8 dark:bg-slate-950 dark:border-slate-800">
              <div className="mb-6 inline-block rounded-full bg-slate-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-slate-500 dark:bg-slate-800/60 dark:text-slate-400">
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
                      <p className="mt-0.5 text-sm text-slate-700 dark:text-slate-300">{val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">
            Dunster Business School operates under institutional autonomy and is not bound by the Swiss Higher Education Act (HEdA),
            enabling it to offer internationally accredited doctoral programmes independently.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 4 · About Dunster Business School
      ───────────────────────────────────────────── */}
      <section className="bg-white py-24 dark:bg-slate-950">
        <div className="container-premium">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading eyebrow="About Dunster" title="A Swiss Institution Built for Executive Ambition" description="" align="left" />
              <div className="mt-8 space-y-5 text-slate-600 dark:text-slate-300">
                <ReadMoreText text="Dunster Business School is a private higher education institution incorporated in Switzerland (ID: CHE-206.619.191), headquartered in Zug — Switzerland's premier business canton and home to some of the world's most admired multinational companies." />
                <ReadMoreText text="The school focuses exclusively on business administration, leadership, and applied management research. This singular focus produces graduates with deep functional expertise rather than broad academic generalism — a distinction employers and boards recognise immediately." />
                <ReadMoreText text="Learners come from across the UAE, Saudi Arabia, Qatar, Mauritius, India, and beyond — building an international cohort that reflects the reality of global executive careers. Faculty combine academic credentials with active industry engagement, ensuring every research interaction is grounded in current professional practice." />
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative h-56 overflow-hidden rounded-[8px]">
                <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" alt="Dunster Business School — Executive Education Facility" fill className="object-cover" unoptimized />
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
          SECTION 5 · Why Professionals Choose Dunster
      ───────────────────────────────────────────── */}
      <section className="bg-[#F8FAFC] py-24 dark:bg-slate-900/60">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Programme advantages"
            title="Why Professionals Choose Dunster"
            description="Six reasons senior leaders select a Swiss DBA over other doctoral pathways"
          />
          <div className="mt-14 grid gap-4 grid-cols-2 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
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
              <div key={title} className="rounded-[8px] border border-slate-200 bg-white p-4 transition-all hover:shadow-lg sm:p-8 dark:bg-slate-950 dark:border-slate-800">
                <Icon className="mb-3 h-6 w-6 text-[#1E40FF] sm:mb-4 sm:h-8 sm:w-8" />
                <h3 className="mb-2 text-sm font-semibold text-slate-950 sm:text-base dark:text-white">{title}</h3>
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
            description="A tiered framework of international quality assurance that validates your Dunster credential across industries and borders"
          />
          <div className="mt-14">
            <RecognitionTiers
              tier1={[
                { icon: 'star', title: 'QS 4-Star Rating', detail: 'Awarded by Quacquarelli Symonds — one of the most prestigious global university rating systems, recognising teaching quality, employability, and internationalisation.' },
                { icon: 'award', title: 'EAHEA Accreditation', detail: 'European Association for Higher Education Advancement — full institutional accreditation and quality certification affirming Dunster meets the highest European academic standards.' },
                { icon: 'check', title: 'QAHE Accreditation', detail: 'Full accreditation from the International Association for Quality Assurance in Pre-Tertiary & Higher Education — globally recognised across universities, online institutions, and professional bodies.' },
              ]}
              tier2={[
                { icon: 'book', title: 'ACBSP Candidate for Accreditation', detail: 'Recognised candidacy from the Accreditation Council for Business Schools and Programs — a globally respected body for business degree programmes at all levels, from associate to doctoral.' },
                { icon: 'graduation', title: 'AACSB Business Education Alliance Member', detail: "Association to Advance Collegiate Schools of Business — the gold standard in business school accreditation, reflecting Dunster's commitment to research, faculty quality, and student outcomes." },
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
            description="Each accreditation body serves a distinct purpose in validating your academic and professional investment"
          />
          <div className="mt-14 grid gap-4 grid-cols-2 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
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
                className="rounded-[8px] border border-slate-200 bg-white p-4 sm:p-8 dark:bg-slate-950 dark:border-slate-800"
                style={{ borderTopColor: color, borderTopWidth: 3 }}
              >
                <p className="mb-1 text-xs font-bold uppercase tracking-wide text-slate-400">{body}</p>
                <h3 className="mb-2 text-sm font-semibold text-slate-950 sm:mb-3 sm:text-base dark:text-white">{benefit}</h3>
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
            title="Doctoral Research Areas"
            description="Choose a specialisation that connects your professional experience with original academic contribution"
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 md:grid-cols-4">
            {[
              { area: 'Leadership & Executive Strategy', icon: UserRound },
              { area: 'Business Strategy & Competitive Advantage', icon: Compass },
              { area: 'Innovation & Technology Management', icon: Lightbulb },
              { area: 'Entrepreneurship & Venture Creation', icon: Rocket },
              { area: 'Digital Transformation', icon: Smartphone },
              { area: 'Global & Cross-Cultural Management', icon: Globe2 },
              { area: 'Operations & Supply Chain', icon: Settings },
              { area: 'Organisational Development', icon: Construction },
            ].map(({ area, icon: Icon }) => (
              <div
                key={area}
                className="rounded-[8px] border border-slate-200 bg-white p-6 text-center transition-all hover:border-[#1E40FF]/30 hover:shadow-lg dark:bg-slate-950 dark:border-slate-800"
              >
                <div className="mb-3"><Icon className="h-7 w-7 text-[#1E40FF] mx-auto" /></div>
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
            eyebrow="From application to graduation"
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
            description="The Dunster DBA is built for professionals who have earned their position and are ready to formalise their expertise at the highest academic level"
          />
          <div className="mt-14">
            <DataTabs
              tabs={[
                {
                  label: "Corporate leaders",
                  panel: (
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                      {[
                        { role: 'Chief Executive Officer', Icon: UserRound, description: 'Gain academic credibility to accompany executive authority — board, advisory, and academic leadership' },
                        { role: 'Director / VP', Icon: BarChart3, description: 'Position yourself for the next career level with doctoral-level strategic research capability' },
                        { role: 'Senior Manager', Icon: Target, description: 'Develop research skills that transform management decisions into evidence-based, publishable insights' },
                      ].map(({ role, Icon, description }) => (
                        <div key={role} className="rounded-[8px] border border-slate-200 bg-white p-7 text-center transition-all hover:shadow-lg dark:bg-slate-950 dark:border-slate-800">
                          <div className="mb-4"><Icon className="mx-auto h-9 w-9 text-[#1E40FF]" /></div>
                          <h3 className="mb-2 font-semibold text-slate-950 dark:text-white">{role}</h3>
                          <ReadMoreText text={description} className="text-sm leading-5 text-slate-500 dark:text-slate-400" />
                        </div>
                      ))}
                    </div>
                  ),
                },
                {
                  label: "Entrepreneurs & consultants",
                  panel: (
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      {[
                        { role: 'Founder & Entrepreneur', Icon: Rocket, description: 'Formalise the tacit knowledge behind your business model into a researched doctoral contribution' },
                        { role: 'Management Consultant', Icon: Briefcase, description: 'Elevate your intellectual positioning and command premium engagements with a doctoral credential' },
                      ].map(({ role, Icon, description }) => (
                        <div key={role} className="rounded-[8px] border border-slate-200 bg-white p-7 text-center transition-all hover:shadow-lg dark:bg-slate-950 dark:border-slate-800">
                          <div className="mb-4"><Icon className="mx-auto h-9 w-9 text-[#1E40FF]" /></div>
                          <h3 className="mb-2 font-semibold text-slate-950 dark:text-white">{role}</h3>
                          <ReadMoreText text={description} className="text-sm leading-5 text-slate-500 dark:text-slate-400" />
                        </div>
                      ))}
                    </div>
                  ),
                },
                {
                  label: "Academic & public sector",
                  panel: (
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      {[
                        { role: 'Academic Professional', Icon: GraduationCap, description: 'Transition into senior academic roles or research leadership with an internationally recognised DBA' },
                        { role: 'Government Official', Icon: Landmark, description: 'Apply research methodology to policy design — add scholarly rigour to public sector leadership' },
                      ].map(({ role, Icon, description }) => (
                        <div key={role} className="rounded-[8px] border border-slate-200 bg-white p-7 text-center transition-all hover:shadow-lg dark:bg-slate-950 dark:border-slate-800">
                          <div className="mb-4"><Icon className="mx-auto h-9 w-9 text-[#1E40FF]" /></div>
                          <h3 className="mb-2 font-semibold text-slate-950 dark:text-white">{role}</h3>
                          <ReadMoreText text={description} className="text-sm leading-5 text-slate-500 dark:text-slate-400" />
                        </div>
                      ))}
                    </div>
                  ),
                },
              ]}
            />
          </div>
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
            description="Dunster's professional affiliations extend your credential beyond academia into the industries that matter most to executives"
          />
          <div className="mt-14 grid gap-4 grid-cols-2 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: 'ACCA',
                full: 'Association of Chartered Certified Accountants',
                benefit: 'Silver Learning Partner status. ACCA alignment adds financial governance depth to research in leadership and strategy.',
                icon: BarChart3,
              },
              {
                name: 'AWS',
                full: 'Amazon Web Services',
                benefit: 'Cloud and digital infrastructure credentials. Strengthens the relevance of research in digital transformation and technology management.',
                icon: Cloud,
              },
              {
                name: 'PMI',
                full: 'Project Management Institute',
                benefit: 'Global project management standards. Adds structure and methodology rigour to applied research in operations and change management.',
                icon: Ruler,
              },
              {
                name: 'CompTIA',
                full: 'Computing Technology Industry Association',
                benefit: 'Technology industry validation. Grounds IT-related research in globally recognised professional standards.',
                icon: Laptop,
              },
              {
                name: 'HRCI',
                full: 'Human Resource Certification Institute',
                benefit: 'HR excellence framework. Strengthens research into talent, people strategy, and organisational behaviour with professional credibility.',
                icon: Users,
              },
            ].map(({ name, full, benefit, icon: Icon }) => (
              <div key={name} className="rounded-[8px] border border-slate-200 bg-white p-4 sm:p-8 dark:bg-slate-950 dark:border-slate-800">
                <div className="mb-2 flex items-center gap-2 sm:mb-3 sm:gap-3">
                  <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-[#1E40FF]" />
                  <div>
                    <p className="text-sm font-bold text-slate-950 sm:text-base dark:text-white">{name}</p>
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
            eyebrow="After your DBA"
            title="Graduate Outcomes"
            description="What a Dunster DBA enables — in professional, academic, and thought leadership terms"
          />
          <div className="mt-14 grid gap-4 grid-cols-2 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { outcome: 'Thought Leadership', detail: 'Publish research, speak at conferences, and become the recognised authority in your professional domain.', icon: PenLine },
              { outcome: 'Academic Advancement', detail: 'Qualify for faculty, professorial, and research director positions at business schools globally.', icon: GraduationCap },
              { outcome: 'Consulting Authority', detail: 'Command premium advisory engagements backed by doctoral research and a Swiss academic credential.', icon: Lightbulb },
              { outcome: 'Board-Level Credibility', detail: 'The DBA is increasingly a prerequisite for board advisory positions, especially in regulated industries.', icon: Landmark },
              { outcome: 'Research Capability', detail: 'Design and execute applied research that drives strategy, policy, or product decisions at the highest level.', icon: Microscope },
              { outcome: 'Career Transformation', detail: 'Open pathways to roles, institutions, and markets that are simply inaccessible without doctoral standing.', icon: TrendingUp },
            ].map(({ outcome, detail, icon: Icon }) => (
              <div key={outcome} className="rounded-[8px] border border-slate-200 bg-[#F8FAFC] p-4 sm:p-8 dark:bg-slate-900/60 dark:border-slate-800">
                <div className="mb-2 sm:mb-4"><Icon className="h-6 w-6 sm:h-9 sm:w-9 text-[#1E40FF]" /></div>
                <h3 className="mb-2 text-sm font-semibold text-slate-950 sm:text-base dark:text-white">{outcome}</h3>
                <ReadMoreText text={detail} className="text-sm leading-6 text-slate-600 dark:text-slate-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 13 · Alumni Voices
      ───────────────────────────────────────────── */}
      <section className="bg-white py-24 dark:bg-slate-950">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Alumni voices"
            title="What Dunster Graduates Say"
            description="Senior professionals who transformed their careers through Swiss doctoral education"
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard
              name="Dr. Ronald M. Gharib"
              role="Executive Director"
              company="Middle East"
              quote="The Swiss credential opened doors that no other doctoral programme could have. My research directly shaped board-level strategy within my first year post-graduation."
              imageUrl="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80"
            />
            <TestimonialCard
              name="Dr. Musaab Abdelrahman"
              role="Senior Research Lead"
              company="Gulf Region"
              quote="Dunster's applied research model meant my dissertation was immediately relevant. The supervision was rigorous yet attuned to the realities of professional life."
              imageUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
            />
            <TestimonialCard
              name="Dr. Inam Ullah Khan"
              role="Director of Operations"
              company="South Asia"
              quote="The private school model gave me direct access to supervisors who understood my industry. I wouldn't have achieved this depth with a traditional public university."
              imageUrl="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
            />
            <TestimonialCard
              name="Dr. Laksh Narayanan G."
              role="Business Strategy Consultant"
              company="India"
              quote="The QS 4-Star rating was the deciding factor. When clients see a Swiss credential backed by QS recognition, conversations about authority change immediately."
              imageUrl="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
            />
            <TestimonialCard
              name="Dr. James Mildenhall"
              role="Managing Director"
              company="Europe"
              quote="Combining a senior leadership role with doctoral research was only possible because of Dunster's flexible model. Switzerland gave my credential global weight."
              imageUrl="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80"
            />
            <TestimonialCard
              name="Dr. Samer Haddad"
              role="CEO"
              company="MENA Region"
              quote="The international cohort was unexpectedly valuable. The network I built across the UAE, India, and Europe continues to drive business and academic collaboration."
              imageUrl="https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=150&q=80"
            />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 15 · Certificate Showcase
      ───────────────────────────────────────────── */}
      <section className="bg-white py-24 dark:bg-slate-950">
        <div className="container-premium">
          <SectionHeading eyebrow="Credentials" title="Your Doctoral Achievement" description="A comprehensive doctorate package recognised globally for executive advancement and professional credibility." />
          <div className="mx-auto mt-14 max-w-3xl">
            <div className="overflow-hidden rounded-[8px] border border-slate-200 bg-white shadow-lg dark:bg-slate-950 dark:border-slate-800" style={{aspectRatio: '1.41/1'}}>
              <div className="relative h-full w-full">
                <Image src="https://sohhmxayptiosflmlxuu.supabase.co/storage/v1/object/public/brochures/Certificates/DBS%20DBA.png" alt="Dunster Business School Doctor of Business Administration Certificate" fill className="object-contain p-4" unoptimized />
              </div>
            </div>
            <p className="mt-4 text-center text-sm text-slate-500 dark:text-slate-400">Official Dunster Business School DBA Certificate</p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {['Doctor of Business Administration Degree', 'Academic Transcript', 'Dissertation Completion', 'Doctoral Research Record', 'Alumni Membership', 'Graduation Eligibility'].map((item) => (
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
            <BrochureDownloadButton
              programmeName="Dunster Business School DBA"
              fileUrl="/brochures/degrees/dunster-dba.html"
              sourcePage="/doctoral-programs/dba/dunster-business-school"
              className="inline-flex items-center rounded-full border border-[#d4af37]/40 px-8 py-4 text-sm font-semibold text-[#d4af37] transition-all hover:border-[#d4af37]/60 hover:bg-[#d4af37]/5"
            >
              Download Brochure
            </BrochureDownloadButton>
          </div>
        </div>
      </section>

    </main>
  )
}
