import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  Target, CheckCircle2, Zap, UserRound, Laptop, Microscope, Smartphone, Globe2,
  Crown, Briefcase, Rocket, Building2, BarChart3, Settings, RefreshCw, ArrowUp,
  Lightbulb, Lock, TrendingUp, AlertCircle, Trophy, Globe, DollarSign, GraduationCap, MapPin,
} from 'lucide-react'
import { DataTabs } from '@/components/ui/data-tabs'
import { SectionHeading } from '@/components/ui/section-heading'
import { ReadMoreText } from '@/components/ui/read-more-text'
import { BrochureDownloadButton } from '@/components/forms/brochure-download-button'
import { FAQAccordion } from '@/components/ui/faq-accordion'

export const metadata: Metadata = {
  title: 'Doctor of Business Administration (DBA) | Birchwood University | AcdyOn',
  description: 'Accelerated 2-year executive DBA from Birchwood University, USA. 100% online doctoral programme combining applied research, technology leadership, business analytics, and strategic innovation for senior professionals.',
}

const LOGO = 'https://sohhmxayptiosflmlxuu.supabase.co/storage/v1/object/public/brochures/Birchwood-University-520-x-330.jpg'
const CERTIFICATE = 'https://sohhmxayptiosflmlxuu.supabase.co/storage/v1/object/public/brochures/Certificates/Birchwood%20DBA.webp'

const faqs = [
  { q: 'How long does the Birchwood DBA take to complete?', a: 'The Birchwood DBA is designed as an accelerated 2-year programme, making it one of the fastest doctoral pathways available. The structured curriculum and focused research framework enable committed professionals to achieve doctoral completion without the traditional 3-5 year timeline.' },
  { q: 'What is the difference between a DBA and an MBA?', a: 'An MBA develops general management skills over 1-2 years. The Birchwood DBA is a research-intensive doctoral qualification emphasising original research contribution, advanced analytics, technology leadership, and strategic decision-making over 2 years. The DBA positions graduates for C-suite advancement and thought leadership.' },
  { q: 'How does a DBA differ from a PhD in Business?', a: 'The Birchwood DBA focuses on applied business research solving real organisational challenges. A PhD emphasises theoretical research for academic careers. The DBA bridges executive practice with doctoral-level rigour, while PhDs prioritise pure academic and theoretical advancement.' },
  { q: 'Is the Birchwood DBA fully online?', a: 'Yes, the programme is delivered 100% online with no requirement for campus attendance. This flexibility enables senior executives to maintain their leadership roles and professional commitments while completing doctoral-level research and advanced coursework.' },
  { q: 'What are the entry requirements?', a: 'Applicants need a Master\'s degree and Bachelor\'s degree in business, information technology, management, or a related field from a regionally accredited institution, with a minimum GPA of 3.00. Relevant professional work experience is required.' },
  { q: 'Can I work full-time while pursuing the Birchwood DBA?', a: 'Absolutely. The programme is specifically designed for working professionals. The flexible online structure, asynchronous learning access, and accelerated timeline allow you to maintain executive responsibilities while advancing your doctoral credentials.' },
  { q: 'What technology and analytics focus does Birchwood emphasise?', a: 'The curriculum integrates business analytics, data science, technology management, cybersecurity awareness, predictive analytics, and digital transformation leadership. These capabilities are embedded across coursework and inform your dissertation research.' },
  { q: 'What is the dissertation requirement?', a: 'You complete original doctoral research structured across multiple phases: proposal development, data collection and analysis, writing, and formal defence. Experienced faculty mentors guide your research throughout to ensure academic rigour and professional relevance.' },
  { q: 'Are there traditional exams in the programme?', a: 'Assessment focuses on coursework assignments, applied projects, research deliverables, and your doctoral dissertation. The emphasis is on demonstrated capability in business research and strategic application rather than traditional written examinations.' },
  { q: 'How is research supervision structured?', a: 'Each doctoral candidate is assigned an experienced faculty mentor who provides regular guidance through online meetings. Supervisors help refine research questions, methodology, analysis, and ensure your work contributes meaningfully to business knowledge and practice.' },
  { q: 'How is the Birchwood DBA recognised internationally?', a: 'Birchwood University is a United States institution offering globally recognised doctoral degrees. The DBA credential is positioned for executive advancement, strategic consulting, senior leadership appointments, and academic roles worldwide.' },
  { q: 'What are typical career outcomes after the Birchwood DBA?', a: 'Graduates advance to CEO, COO, CFO, Chief Innovation Officer, Strategy Consultant, Director of Innovation, Board Advisory positions, academic faculty roles, and entrepreneurial ventures. The doctoral credential elevates strategic influence and professional credibility.' },
  { q: 'Can international students enrol in the Birchwood DBA?', a: 'Yes. The 100% online delivery format welcomes professionals from any country. English language proficiency is required, and all instruction, materials, and research supervision are conducted in English.' },
  { q: 'What makes Birchwood\'s 2-year timeline accelerated?', a: 'The focused curriculum structure, intensive research framework, and structured dissertation pathway enable doctoral completion in 2 years rather than traditional 3-5 year programmes. This suits ambitious executives who want rapid advancement without compromising academic quality.' },
  { q: 'Can I choose my own research topic?', a: 'Yes. Your dissertation research must address real business challenges relevant to your professional context and expertise. Faculty advisors collaborate with you to ensure your topic is both academically rigorous and professionally meaningful.' },
  { q: 'How is the dissertation defence structured?', a: 'The defence is a formal presentation where you present and defend your original research before a panel of examiners. You discuss methodology, findings, contributions to business knowledge, and respond to expert questions demonstrating doctoral-level mastery.' },
  { q: 'What support does AcdyOn provide?', a: 'AcdyOn provides comprehensive admission guidance, application support, eligibility assessment, documentation assistance, research coordination, progress monitoring, and a dedicated student success team throughout your entire DBA journey.' },
  { q: 'Is the programme suitable for professionals without a technical background?', a: 'Yes. The programme teaches business analytics, data science tools, and technology management within the curriculum. Prior technical expertise is not required — the focus is on developing strategic technology leadership rather than technical proficiency.' },
  { q: 'Are payment plans available?', a: 'Yes. Flexible payment options and instalment plans are available. Contact AcdyOn for detailed tuition information, payment structures, and any scholarship opportunities that may be applicable.' },
  { q: 'What is the difference between applied and academic research?', a: 'Applied research investigates real organisational challenges and develops actionable solutions. Academic research advances theoretical knowledge. The Birchwood DBA emphasises applied research — your dissertation directly addresses business problems in your industry or organisation, creating immediate professional value.' },
]

export default function BirchwoodDBAPage() {
  return (
    <main>
      {/* ─────────────────────────────────────────────
          SECTION 1 · Premium Hero
      ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#ffffff,#f8fafc_50%,#eef4ff)] dark:bg-[linear-gradient(135deg,#0a1120,#0f172a_50%,#0b1330)] pb-20 pt-36">
        <div className="absolute right-[-10%] top-20 h-80 w-80 rounded-full bg-[#1E40FF]/15 blur-3xl" />
        <div className="absolute left-[-5%] bottom-10 h-60 w-60 rounded-full bg-[#22D3EE]/10 blur-3xl" />
        <div className="container-premium relative">
          <div className="mb-8 flex items-center gap-4">
            <div className="relative h-20 w-48 overflow-hidden rounded-[4px]">
              <Image src={LOGO} alt="Birchwood University Logo" fill className="object-contain object-left" unoptimized />
            </div>
            <MapPin className="h-5 w-5 text-slate-400" />
          </div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#1E40FF]">Birchwood University · United States</p>
          <h1 className="max-w-4xl font-display text-5xl leading-tight text-slate-950 sm:text-6xl dark:text-white">Doctor of Business Administration (DBA)</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            A flexible online doctoral programme designed for senior professionals seeking advanced leadership capability, applied research expertise and strategic influence in a rapidly evolving business landscape.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/book-consultation" className="inline-flex items-center justify-center rounded-full bg-[#1E40FF] px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-[#1937dd]">Check Eligibility</Link>
            <BrochureDownloadButton programmeName="Birchwood University DBA" fileUrl="/brochures/degrees/birchwood-dba.html" sourcePage="/doctoral-programs/dba/birchwood" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-4 text-sm font-semibold text-slate-950 transition-all hover:shadow-md dark:bg-slate-950 dark:text-white dark:border-slate-800">Download Brochure</BrochureDownloadButton>
            <Link href="/book-consultation" className="inline-flex items-center justify-center rounded-full border border-[#1E40FF] px-8 py-4 text-sm font-semibold text-[#1E40FF] transition-all hover:bg-[#1E40FF]/5">Book Consultation</Link>
          </div>
          <div className="mt-14 grid gap-4 rounded-[8px] border border-slate-200 bg-white p-8 sm:grid-cols-2 md:grid-cols-6 dark:bg-slate-950 dark:border-slate-800">
            {[
              { label: '2 Years', value: 'Duration' },
              { label: '100% Online', value: 'Delivery' },
              { label: 'Executive Cohort', value: 'Format' },
              { label: 'Applied Research', value: 'Focus' },
              { label: 'Technology Leadership', value: 'Specialisation' },
              { label: 'Doctoral Qualification', value: 'Award' },
            ].map(({ label, value }) => (
              <div key={value}>
                <p className="text-xs font-medium uppercase tracking-wide text-slate-400">{value}</p>
                <p className="mt-1 font-semibold text-slate-950 dark:text-white">{label}</p>
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
          SECTION 2 · Why Birchwood DBA
      ───────────────────────────────────────────── */}
      <section className="bg-white py-24 dark:bg-slate-950">
        <div className="container-premium">
          <SectionHeading eyebrow="Birchwood advantages" title="Why Choose Birchwood DBA" description="An accelerated executive doctorate combining research excellence, technology integration, and applied business impact." />
          <div className="mt-14 grid gap-5 grid-cols-2 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Zap, title: 'Accelerated 2-Year Completion', desc: 'Achieve doctoral credentials in half the traditional timeline. The focused curriculum and structured research pathway enable committed executives to complete their doctorate without stepping away from leadership.' },
              { icon: UserRound, title: 'Executive-Focused Learning', desc: 'Every module is designed for senior professionals. The curriculum connects advanced academic theory with executive decision-making, strategy formulation, and organisational leadership.' },
              { icon: Laptop, title: 'Technology & Innovation Leadership', desc: 'Deep integration of business analytics, digital transformation, data science, and technology management — essential capabilities for leaders driving modern enterprises.' },
              { icon: Microscope, title: 'Applied Business Research', desc: 'Your dissertation directly addresses real challenges within your organisation or industry. Research outcomes create immediate professional value and strategic impact.' },
              { icon: Smartphone, title: 'Flexible Online Delivery', desc: '100% online with asynchronous access enables you to study at your pace, anywhere in the world, without disrupting your career or personal commitments.' },
              { icon: Globe2, title: 'Global Professional Network', desc: 'Join a cohort of accomplished executives from diverse industries and geographies. Build lasting professional connections that extend well beyond graduation.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-[8px] border border-slate-200 bg-white p-4 sm:p-8 transition-all hover:shadow-lg dark:bg-slate-950 dark:border-slate-800">
                <div className="mb-3 sm:mb-4"><Icon className="h-7 w-7 sm:h-9 sm:w-9 text-[#1E40FF]" /></div>
                <h3 className="mb-2 text-sm font-semibold text-slate-950 sm:mb-3 sm:text-base dark:text-white">{title}</h3>
                <ReadMoreText text={desc} className="text-sm leading-6 text-slate-500 dark:text-slate-400" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 3 · The Executive DBA Advantage
      ───────────────────────────────────────────── */}
      <section className="bg-[#F8FAFC] py-24 dark:bg-slate-900/60">
        <div className="container-premium">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading eyebrow="Understanding the executive DBA" title="The Executive DBA Advantage" description="" align="left" />
              <div className="mt-8 space-y-5 text-slate-600 dark:text-slate-300">
                <ReadMoreText text="A Doctor of Business Administration (DBA) is a research-intensive doctoral qualification for practising executives. The Birchwood DBA distinguishes itself through an accelerated 2-year pathway and a deliberate focus on technology leadership, business analytics, and strategic transformation." />
                <ReadMoreText text="Unlike an MBA, which develops foundational management skills over 1-2 years, the DBA represents the highest level of professional business qualification — emphasising original research, evidence-based decision-making, and scholarly contribution that elevates your executive authority." />
                <ReadMoreText text="Unlike a traditional PhD that prioritises pure theory, the Birchwood DBA bridges academic scholarship with real-world application. Your dissertation investigates genuine business challenges — digital transformation, analytics implementation, innovation adoption — yielding solutions you can immediately apply in your organisation." />
              </div>
            </div>
            <div className="grid gap-3 grid-cols-2 sm:gap-4">
              {[
                { label: 'DBA vs MBA', detail: 'DBA: Research doctorate, 2 years, applied research and scholarly contribution. MBA: Management degree, 1-2 years, foundational business skills.' },
                { label: 'DBA vs PhD', detail: 'DBA: Applied business research solving organisational challenges. PhD: Theoretical academic research for scholarly publishing.' },
                { label: 'Applied vs Academic Research', detail: 'Applied: Investigates real problems, creates actionable solutions. Academic: Advances theoretical knowledge and frameworks.' },
                { label: 'Leadership Transformation', detail: 'Doctoral credentials elevate your authority, credibility, and influence in executive decision-making and boardroom strategy.' },
                { label: 'Business Impact', detail: 'Research outcomes directly improve organisational performance, innovation capability, and strategic positioning.' },
                { label: 'Career Acceleration', detail: 'Doctoral qualification fast-tracks progression to C-suite roles, advisory positions, and thought leadership.' },
              ].map(({ label, detail }) => (
                <div key={label} className="rounded-[8px] border border-slate-200 bg-white p-4 dark:bg-slate-950 dark:border-slate-800">
                  <p className="text-xs font-bold uppercase tracking-wide text-[#1E40FF]">{label}</p>
                  <ReadMoreText text={detail} className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 4 · Who This Programme Is For
      ───────────────────────────────────────────── */}
      <section className="bg-white py-24 dark:bg-slate-950">
        <div className="container-premium">
          <SectionHeading eyebrow="Ideal candidates" title="Who This Programme Is Designed For" description="Ambitious professionals ready to advance through doctoral-level expertise, applied research, and strategic leadership." />
          <DataTabs
            className="mt-14"
            tabs={[
              {
                label: 'Corporate leaders',
                panel: (
                  <div className="grid gap-3 grid-cols-2 sm:grid-cols-4">
                    {[{ icon: Crown, title: 'Senior executives' }, { icon: Building2, title: 'Directors' }, { icon: Briefcase, title: 'Business owners' }, { icon: ArrowUp, title: 'Future C-suite leaders' }].map(({ icon: Icon, title }) => (
                      <div key={title} className="rounded-[8px] border border-slate-200 bg-white p-4 text-center transition-all hover:border-[#1E40FF]/30 hover:shadow-lg sm:p-6 dark:bg-slate-950 dark:border-slate-800">
                        <div className="mb-2 sm:mb-3"><Icon className="h-6 w-6 sm:h-9 sm:w-9 text-[#1E40FF]" /></div>
                        <p className="text-sm font-semibold text-slate-950 sm:text-base dark:text-white">{title}</p>
                      </div>
                    ))}
                  </div>
                ),
              },
              {
                label: 'Technology & strategy',
                panel: (
                  <div className="grid gap-3 grid-cols-2 sm:grid-cols-4">
                    {[{ icon: Zap, title: 'Technology leaders' }, { icon: Target, title: 'Strategy professionals' }, { icon: Settings, title: 'Operations leaders' }, { icon: RefreshCw, title: 'Transformation managers' }].map(({ icon: Icon, title }) => (
                      <div key={title} className="rounded-[8px] border border-slate-200 bg-white p-4 text-center transition-all hover:border-[#1E40FF]/30 hover:shadow-lg sm:p-6 dark:bg-slate-950 dark:border-slate-800">
                        <div className="mb-2 sm:mb-3"><Icon className="h-6 w-6 sm:h-9 sm:w-9 text-[#1E40FF]" /></div>
                        <p className="text-sm font-semibold text-slate-950 sm:text-base dark:text-white">{title}</p>
                      </div>
                    ))}
                  </div>
                ),
              },
              {
                label: 'Entrepreneurs & consultants',
                panel: (
                  <div className="grid gap-3 grid-cols-2 sm:grid-cols-2">
                    {[{ icon: Rocket, title: 'Entrepreneurs' }, { icon: BarChart3, title: 'Consultants' }].map(({ icon: Icon, title }) => (
                      <div key={title} className="rounded-[8px] border border-slate-200 bg-white p-4 text-center transition-all hover:border-[#1E40FF]/30 hover:shadow-lg sm:p-6 dark:bg-slate-950 dark:border-slate-800">
                        <div className="mb-2 sm:mb-3"><Icon className="h-6 w-6 sm:h-9 sm:w-9 text-[#1E40FF]" /></div>
                        <p className="text-sm font-semibold text-slate-950 sm:text-base dark:text-white">{title}</p>
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
          SECTION 5 · Learning Journey Roadmap
      ───────────────────────────────────────────── */}
      <section className="bg-[#F8FAFC] py-24 dark:bg-slate-900/60">
        <div className="container-premium">
          <SectionHeading eyebrow="Doctoral roadmap" title="Your Birchwood Learning Journey" description="Accelerated 2-year pathway from executive foundations through doctoral research completion." />
          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {[
              {
                phase: 'Foundation Phase',
                color: '#1E40FF',
                modules: ['Business Leadership', 'Business Analytics', 'Technology Management', 'Research Design'],
              },
              {
                phase: 'Advanced Phase',
                color: '#22D3EE',
                modules: ['Innovation Management', 'Predictive Analytics', 'Global Project Management', 'Cybersecurity Awareness', 'Strategic Leadership'],
              },
              {
                phase: 'Doctoral Phase',
                color: '#D4AF37',
                modules: ['Dissertation Development', 'Research Methodology', 'Research Defence', 'Doctoral Completion'],
              },
            ].map(({ phase, color, modules }) => (
              <div key={phase} className="rounded-[8px] border border-slate-200 bg-white p-8 dark:bg-slate-950 dark:border-slate-800" style={{ borderTopColor: color, borderTopWidth: 4 }}>
                <p className="text-xs font-bold uppercase tracking-wide" style={{ color }}>{phase}</p>
                <ul className="mt-5 space-y-3">
                  {modules.map((m) => (
                    <li key={m} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                      <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: color }} />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 6 · Programme Curriculum (Grouped)
      ───────────────────────────────────────────── */}
      <section className="bg-white py-24 dark:bg-slate-950">
        <div className="container-premium">
          <SectionHeading eyebrow="Curriculum" title="Programme Modules & Coursework" description="Advanced business and technology curriculum structured across core disciplines for executive capability development." />
          <div className="mt-14 space-y-10">
            {[
              {
                group: 'Business & Strategy',
                color: '#1E40FF',
                modules: ['Managerial Valuation', 'Resource Economics', 'Digital Marketing', 'Managerial Accounting'],
              },
              {
                group: 'Analytics & Technology',
                color: '#22D3EE',
                modules: ['Business Analytics & Data Management', 'Global Technology Management', 'Predictive & Risk Analysis', 'Data Science Analytics'],
              },
              {
                group: 'Innovation & Leadership',
                color: '#D4AF37',
                modules: ['Management of Innovative Technologies', 'Technological Transformation Leadership', 'Global Technology Cybersecurity', 'Strategic Leadership'],
              },
              {
                group: 'Research & Dissertation',
                color: '#10B981',
                modules: ['Research Design & Analysis', 'International Project Management', 'Dissertation Development', 'Research Defence'],
              },
            ].map(({ group, color, modules }) => (
              <div key={group}>
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full" style={{ backgroundColor: color }} />
                  <h3 className="text-sm font-bold uppercase tracking-wide text-slate-950 dark:text-white">{group}</h3>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
                  {modules.map((module) => (
                    <div key={module} className="rounded-[8px] border border-slate-200 bg-white p-5 transition-all hover:border-[#1E40FF]/30 hover:shadow-md dark:bg-slate-950 dark:border-slate-800" style={{ borderLeftColor: color, borderLeftWidth: 3 }}>
                      <p className="text-sm font-semibold text-slate-950 dark:text-white">{module}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 7 · Research & Technology Focus
      ───────────────────────────────────────────── */}
      <section className="bg-[#F8FAFC] py-24 dark:bg-slate-900/60">
        <div className="container-premium">
          <SectionHeading eyebrow="Research & technology" title="Core Research Focus Areas" description="Specialisations emphasising technology, analytics, and strategic business application." />
          <div className="mt-14 grid gap-3 grid-cols-2 sm:gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {[
              { icon: Laptop, title: 'Technology Management' },
              { icon: RefreshCw, title: 'Digital Transformation' },
              { icon: BarChart3, title: 'Business Analytics' },
              { icon: Lightbulb, title: 'Innovation Leadership' },
              { icon: Lock, title: 'Cybersecurity Awareness' },
              { icon: Target, title: 'Strategic Decision-Making' },
              { icon: TrendingUp, title: 'Data Science Applications' },
              { icon: AlertCircle, title: 'Risk Analysis' },
              { icon: Globe2, title: 'Global Business' },
              { icon: Microscope, title: 'Applied Research' },
            ].map(({ icon: Icon, title }) => (
              <div key={title} className="rounded-[8px] border border-slate-200 bg-white p-4 text-center transition-all hover:border-[#1E40FF]/30 hover:shadow-md sm:p-6 dark:bg-slate-950 dark:border-slate-800">
                <div className="mb-2 sm:mb-3"><Icon className="h-6 w-6 sm:h-9 sm:w-9 text-[#1E40FF]" /></div>
                <p className="text-sm font-semibold text-slate-950 dark:text-white">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 8 · Programme Outcomes (Dark)
      ───────────────────────────────────────────── */}
      <section className="bg-slate-950 py-24">
        <div className="container-premium">
          <SectionHeading eyebrow="Programme outcomes" title="What You Will Achieve" description="Doctoral-level capabilities and executive expertise upon programme completion." variant="dark" />
          <div className="mt-14 grid gap-4 grid-cols-1 sm:grid-cols-2 sm:gap-6">
            {[
              { icon: Target, title: 'Lead Organisational Transformation', desc: 'Design and execute enterprise-wide change initiatives with research-backed strategic frameworks.' },
              { icon: Microscope, title: 'Apply Doctoral-Level Business Research', desc: 'Conduct rigorous applied research contributing original insights to your field and organisation.' },
              { icon: Lightbulb, title: 'Drive Innovation Initiatives', desc: 'Champion technology adoption, innovation programmes, and business model transformation.' },
              { icon: BarChart3, title: 'Leverage Business Analytics', desc: 'Use advanced data analysis and predictive modelling for strategic competitive advantage.' },
              { icon: Zap, title: 'Lead Technology Adoption', desc: 'Guide digital transformation and technology integration at enterprise scale.' },
              { icon: TrendingUp, title: 'Make Evidence-Based Decisions', desc: 'Apply research methodology and analytics to executive-level strategic choices.' },
              { icon: Trophy, title: 'Influence Executive Strategy', desc: 'Shape organisational direction through doctoral research insights and boardroom authority.' },
              { icon: RefreshCw, title: 'Manage Complex Change', desc: 'Navigate transformation complexity with research-informed change management expertise.' },
              { icon: Briefcase, title: 'Build Research-Backed Solutions', desc: 'Develop organisational solutions grounded in rigorous analysis, data, and evidence.' },
              { icon: Globe, title: 'Lead Globally Distributed Organisations', desc: 'Manage international teams and cross-border operations with advanced leadership capabilities.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-[8px] border border-white/10 bg-white/[0.04] p-4 sm:p-6">
                <div className="mb-2 sm:mb-3"><Icon className="h-6 w-6 sm:h-9 sm:w-9 text-[#1E40FF]" /></div>
                <h3 className="mb-2 text-sm font-semibold text-white sm:text-base">{title}</h3>
                <ReadMoreText text={desc} className="text-sm leading-6 text-slate-400" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 9 · Why Professionals Choose Birchwood
      ───────────────────────────────────────────── */}
      <section className="bg-white py-24 dark:bg-slate-950">
        <div className="container-premium">
          <SectionHeading eyebrow="Birchwood distinction" title="Why Professionals Choose Birchwood" description="The accelerated executive doctorate for modern business leaders." />
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-5 text-slate-600 dark:text-slate-300">
              <div>
                <h3 className="mb-2 font-semibold text-slate-950 dark:text-white">2-Year Completion Pathway</h3>
                <ReadMoreText text="Earn your doctorate without stepping away from your career. The structured, focused curriculum enables completion in 2 years rather than traditional 3-5 year programmes — built for executives who value their time." />
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-slate-950 dark:text-white">Research-Driven Leadership</h3>
                <ReadMoreText text="Your dissertation tackles real business challenges. Apply research methodology and advanced analytics to problems within your organisation, creating immediate professional value and strategic credibility." />
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-slate-950 dark:text-white">Technology Integration</h3>
                <ReadMoreText text="Business analytics, data science, digital transformation, and cybersecurity are woven throughout the curriculum — essential capabilities for executives leading in the modern business landscape." />
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-slate-950 dark:text-white">Applied Learning Philosophy</h3>
                <ReadMoreText text="Every concept connects to real organisational challenges. Your research, projects, and dissertation directly support your professional advancement and organisational impact." />
              </div>
            </div>
            <div className="grid gap-3 grid-cols-2 sm:gap-4">
              {[
                { label: '2-Year Fast-Track', value: 'Accelerated doctoral completion without compromising academic rigour' },
                { label: 'Fully Online Flexibility', value: '100% online delivery enabling study from anywhere, at any time' },
                { label: 'Research-Driven Leadership', value: 'Applied research that solves real business problems in your organisation' },
                { label: 'Technology Integration', value: 'Analytics, data science, and digital transformation throughout the curriculum' },
                { label: 'Applied Learning', value: 'Every module connects directly to executive practice and organisational impact' },
                { label: 'Professional Network', value: 'Global cohort of accomplished executives and industry leaders' },
                { label: 'Executive Development', value: 'Curriculum designed specifically for senior professionals seeking advancement' },
                { label: 'Career Advancement', value: 'Doctoral credentials position you for C-suite roles and thought leadership' },
              ].map(({ label, value }) => (
                <div key={label} className="rounded-[8px] border border-slate-200 bg-[#F8FAFC] p-4 dark:bg-slate-900/60 dark:border-slate-800">
                  <p className="text-xs font-bold uppercase tracking-wide text-[#1E40FF]">{label}</p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 10 · Certificate Showcase
      ───────────────────────────────────────────── */}
      <section className="bg-[#F8FAFC] py-24 dark:bg-slate-900/60">
        <div className="container-premium">
          <SectionHeading eyebrow="Credentials" title="Your Doctoral Achievement" description="A comprehensive doctorate package recognised globally for executive advancement and professional credibility." />
          <div className="mx-auto mt-14 max-w-3xl">
            <div className="relative flex flex-col items-center justify-center rounded-[8px] border border-slate-200 bg-white p-6 shadow-lg dark:bg-slate-950 dark:border-slate-800">
              <div className="relative h-96 w-full overflow-hidden rounded-[8px]">
                <Image src={CERTIFICATE} alt="Birchwood University Doctor of Business Administration Certificate" fill className="object-contain" unoptimized />
              </div>
              <p className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">Official Birchwood University DBA Certificate</p>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {[
                'Doctor of Business Administration Degree',
                'Academic Transcript',
                'Dissertation Completion',
                'Doctoral Research Record',
                'Alumni Membership',
                'Graduation Eligibility',
              ].map((item) => (
                <div key={item} className="rounded-[8px] border border-slate-200 bg-white p-4 text-center dark:bg-slate-950 dark:border-slate-800">
                  <p className="text-sm font-semibold text-slate-950 dark:text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 11 · Career Impact (Dark)
      ───────────────────────────────────────────── */}
      <section className="bg-slate-950 py-24">
        <div className="container-premium">
          <SectionHeading eyebrow="Career advancement" title="Leadership Pathways After the DBA" description="Graduates advance to executive and strategic roles leveraging doctoral credentials and research expertise." variant="dark" />
          <div className="mt-14 grid gap-3 grid-cols-2 sm:gap-5 sm:grid-cols-3 lg:grid-cols-5">
            {[
              { icon: Crown, role: 'Chief Executive Officer' },
              { icon: Settings, role: 'Chief Operating Officer' },
              { icon: DollarSign, role: 'Chief Financial Officer' },
              { icon: Briefcase, role: 'Business Consultant' },
              { icon: BarChart3, role: 'Strategic Advisor' },
              { icon: Lightbulb, role: 'Director of Innovation' },
              { icon: RefreshCw, role: 'Transformation Leader' },
              { icon: GraduationCap, role: 'Academic Faculty' },
              { icon: TrendingUp, role: 'Business Researcher' },
              { icon: Rocket, role: 'Entrepreneur' },
            ].map(({ icon: Icon, role }) => (
              <div key={role} className="rounded-[8px] border border-white/10 bg-white/[0.04] p-4 text-center sm:p-6">
                <div className="mb-2 sm:mb-3"><Icon className="h-6 w-6 sm:h-9 sm:w-9 text-[#1E40FF]" /></div>
                <p className="text-sm font-semibold text-white">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 12 · Eligibility
      ───────────────────────────────────────────── */}
      <section className="bg-white py-24 dark:bg-slate-950">
        <div className="container-premium">
          <SectionHeading eyebrow="Entry criteria" title="Eligibility Requirements" description="Designed for accomplished professionals with relevant academic credentials and leadership experience." />
          <div className="mt-14 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Master\'s Degree', desc: 'MBA or Master\'s degree in business, management, information technology, or a related discipline.' },
              { title: 'Bachelor\'s Degree', desc: 'Four-year undergraduate degree from a regionally accredited college or university.' },
              { title: 'Relevant Academic Background', desc: 'Minimum 3.0 GPA demonstrating strong academic performance and readiness for doctoral study.' },
              { title: 'Professional Experience', desc: 'Work experience within a for-profit firm, non-profit organisation, government agency, or NGO.' },
              { title: 'Research Interest', desc: 'Capacity and motivation to conduct applied doctoral-level business research.' },
              { title: 'Leadership Exposure', desc: 'Evidence of leadership responsibilities, managerial experience, or strategic impact.' },
            ].map(({ title, desc }) => (
              <div key={title} className="flex gap-4 rounded-[8px] border border-slate-200 bg-white p-6 dark:bg-slate-950 dark:border-slate-800">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1E40FF]/10">
                  <CheckCircle2 className="h-6 w-6 text-[#1E40FF]" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-950 dark:text-white">{title}</h3>
                  <ReadMoreText text={desc} className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 13 · AcdyOn Support
      ───────────────────────────────────────────── */}
      <section className="bg-[#F8FAFC] py-24 dark:bg-slate-900/60">
        <div className="container-premium">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading eyebrow="Your partnership" title="AcdyOn's Support Role" description="" align="left" />
              <div className="mt-8 space-y-4 text-slate-600 dark:text-slate-300">
                <p>AcdyOn partners with you throughout your Birchwood DBA journey, bridging your professional aspirations with doctoral-level academic excellence and career advancement.</p>
                <p>From initial eligibility assessment through to graduation, we provide comprehensive guidance, application support, documentation assistance, and dedicated student coordination ensuring your doctoral success.</p>
              </div>
            </div>
            <div className="grid gap-4">
              {[
                'Admissions Guidance',
                'Application Review',
                'Eligibility Assessment',
                'Documentation Assistance',
                'Academic Journey Support',
                'Research Guidance',
                'Student Success Team',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-[8px] border border-slate-200 bg-white p-4 dark:bg-slate-950 dark:border-slate-800">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#1E40FF]" />
                  <p className="text-sm font-semibold text-slate-950 dark:text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 14 · Success Stories
      ───────────────────────────────────────────── */}
      <section className="bg-white py-24 dark:bg-slate-950">
        <div className="container-premium">
          <SectionHeading eyebrow="Success stories" title="Birchwood DBA Graduate Outcomes" description="Professionals advancing through accelerated doctoral achievement and executive research leadership." />
          <div className="mt-14 grid gap-6 sm:gap-8 md:grid-cols-3">
            {[
              {
                name: 'Senior Director to C-Suite',
                role: 'Promoted to Chief Innovation Officer',
                outcome: 'Completed the DBA in under two years while managing cross-functional teams. Dissertation research on digital transformation strategy was adopted organisation-wide, leading to a promotion to Chief Innovation Officer within months of graduation.',
              },
              {
                name: 'Entrepreneur & Consultant',
                role: 'Founded analytics-driven consulting firm',
                outcome: 'The DBA sharpened my strategic thinking and research capability. I leveraged my dissertation on predictive business analytics to launch a consulting practice serving Fortune 500 clients. The doctoral credential elevated my positioning significantly.',
              },
              {
                name: 'Corporate Transformation Leader',
                role: 'Led enterprise-wide digital change',
                outcome: 'The research methodology and leadership frameworks from Birchwood gave me the confidence and credibility to lead a company-wide transformation. My evidence-based approach gained executive buy-in that previous initiatives had lacked.',
              },
              {
                name: 'Technology Executive',
                role: 'Advanced to VP of Technology Strategy',
                outcome: 'As a mid-career technology leader, the DBA provided the academic foundation to transition from technical management to strategic leadership. The business analytics curriculum directly informed my approach to enterprise decision-making.',
              },
              {
                name: 'Global Operations Director',
                role: 'Expanded leadership across 8 countries',
                outcome: 'Birchwood\'s focus on global project management and research-driven leadership prepared me for international expansion. The doctoral credential gave me the authority and credibility needed to lead distributed teams across multiple regions.',
              },
              {
                name: 'Academic & Industry Advisor',
                role: 'Appointed adjunct faculty and board advisor',
                outcome: 'The DBA opened doors to both academic appointments and corporate advisory roles. My published dissertation research established thought leadership that I now leverage as an adjunct professor and board advisor.',
              },
            ].map(({ name, role, outcome }) => (
              <div key={name} className="rounded-[8px] border border-slate-200 bg-white p-6 sm:p-8 dark:bg-slate-950 dark:border-slate-800">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#1E40FF]/10">
                  <span className="text-xl font-bold text-[#1E40FF]">&ldquo;</span>
                </div>
                <ReadMoreText text={outcome} className="mb-6 text-sm leading-6 text-slate-600 dark:text-slate-300" />
                <div className="border-t border-slate-100 pt-4 dark:border-slate-800">
                  <p className="font-semibold text-slate-950 dark:text-white">{name}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 15 · FAQs
      ───────────────────────────────────────────── */}
      <section className="bg-[#F8FAFC] py-24 dark:bg-slate-900/60">
        <div className="container-premium">
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" description="Everything you need to know about the Birchwood University DBA." />
          <div className="mt-14">
            <FAQAccordion faqs={faqs} />
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
            Find out if Birchwood's accelerated DBA is the right fit for your goals — book a free consultation with our doctoral advisers.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link href="/book-consultation" className="inline-flex items-center justify-center rounded-full bg-[#1e40ff] px-8 py-4 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(30,64,255,0.25)] transition-all hover:bg-[#1937dd]">Book a Free Consultation</Link>
            <Link href="/doctoral-programs/dba" className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white transition-all hover:border-white/40 hover:bg-white/5">Explore All DBA Programmes</Link>
          </div>
        </div>
      </section>

    </main>
  )
}
