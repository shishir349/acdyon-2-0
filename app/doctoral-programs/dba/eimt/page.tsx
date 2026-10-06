import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  Target, Lightbulb, Zap, Microscope, Globe2, Smartphone, UserRound, Rocket,
  Briefcase, Building2, RefreshCw, BarChart3, Landmark, Crown, TrendingUp,
  PenLine, Trophy, GraduationCap, Settings, FileEdit, Search, Sparkles, CheckCircle2, MapPin,
} from 'lucide-react'
import { DataTabs } from '@/components/ui/data-tabs'
import { SectionHeading } from '@/components/ui/section-heading'
import { FAQAccordion } from '@/components/ui/faq-accordion'
import { ReadMoreText } from '@/components/ui/read-more-text'
import { BrochureDownloadButton } from '@/components/forms/brochure-download-button'

export const metadata: Metadata = {
  title: 'Doctor of Business Administration (DBA) | EIMT | AcdyOn',
  description: 'Master innovation-driven leadership and digital transformation. EIMT DBA — a premium 3-year doctoral programme for executives shaping the future of business.',
}

const LOGO = 'https://sohhmxayptiosflmlxuu.supabase.co/storage/v1/object/public/brochures/images.jpeg'

const faqs = [
  { q: 'What makes the EIMT DBA different from other doctoral programmes?', a: 'The EIMT DBA uniquely positions technology-aware leadership and innovation as core pillars. Unlike traditional DBAs, our curriculum emphasises digital transformation, emerging business models, and evidence-based decision-making in the modern business landscape.' },
  { q: 'What is the difference between an EIMT DBA and an MBA?', a: 'An MBA develops management fundamentals over 1-2 years. The EIMT DBA is a research-intensive doctorate (3 years) emphasising original scholarly contribution, applied innovation research, and advanced strategic expertise for senior executives.' },
  { q: 'How does the EIMT DBA differ from a PhD?', a: 'The EIMT DBA prioritises applied research solving real business challenges and drives industry innovation. A PhD is theory-focused, preparing graduates for academic careers. DBAs bridge executive leadership with doctoral-level academic rigour.' },
  { q: 'How long does the EIMT DBA take to complete?', a: 'The programme is structured for 3 years of part-time study. Actual completion varies based on research progress and individual pace, typically ranging from 3-5 years for working professionals.' },
  { q: 'Is the EIMT DBA fully online?', a: 'Yes, the programme is 100% online with no requirement for on-campus attendance. This allows working professionals to maintain their executive roles while advancing their doctoral credentials and research.' },
  { q: 'What are the entry requirements for the EIMT DBA?', a: 'A master\'s degree or EQF Level 7 qualification, English language proficiency, demonstrated professional experience, and a research proposal outlining your intended doctoral focus. A minimum of 5 years senior professional experience is preferred.' },
  { q: 'Can I focus my research on innovation and digital transformation?', a: 'Absolutely. The EIMT DBA strongly encourages research in innovation management, digital transformation, emerging technologies, business model innovation, and technology-driven organisational change.' },
  { q: 'How is research supervision structured?', a: 'Each doctoral student is assigned an experienced supervisor providing regular mentorship through online meetings. Supervisors guide you through research design, methodology development, innovation frameworks, and thesis completion.' },
  { q: 'What is the dissertation requirement?', a: 'You must complete an original doctoral dissertation (60,000-80,000 words) based on primary research into contemporary business challenges. The dissertation is defended in a viva voce examination.' },
  { q: 'Are there traditional exams in the programme?', a: 'No. Assessment is based on submitted coursework, research projects, and your final thesis. Focus is on applied research contribution rather than traditional examination formats.' },
  { q: 'How is the EIMT DBA recognised internationally?', a: 'EIMT is a Swiss-regulated institution with international accreditation. The DBA is recognised globally as a legitimate doctoral qualification suitable for executive advancement, consulting, research, and academic roles worldwide.' },
  { q: 'Can I investigate a research topic from my own organisation?', a: 'Yes. The DBA emphasises applied research—you are encouraged to investigate real challenges within your organisation, making the research directly implementable in your professional context.' },
  { q: 'What research specialisations can I pursue?', a: 'Options include Innovation Management, Digital Transformation, Strategic Leadership, Entrepreneurship, Corporate Governance, Business Strategy, Marketing, Finance, Human Capital, Global Business, Sustainability, and Organisational Change.' },
  { q: 'What support is provided during the programme?', a: 'You receive academic supervision, access to digital libraries and research databases, technical support, online resources, research methodology guidance, thesis writing support, and viva voce preparation.' },
  { q: 'Is there a global community of EIMT DBA students?', a: 'Yes. EIMT has a 1,000+ strong global alumni community providing ongoing professional connections, research collaboration opportunities, and thought leadership forums.' },
  { q: 'Can I work full-time while pursuing the EIMT DBA?', a: 'Yes. The programme is specifically designed for working professionals. The flexible online structure allows you to maintain your executive role while advancing your doctoral research.' },
  { q: 'What technology do I need to participate?', a: 'A reliable computer, stable internet connection, and standard software (Microsoft Office, PDF readers) are sufficient. Specific research tools may be recommended by your supervisor based on your methodology.' },
  { q: 'What are typical career outcomes after the EIMT DBA?', a: 'Graduates transition to CEO, Chief Innovation Officer, Strategy Director, Business Transformation Leader, Management Consultant, Board Advisor, or University Faculty roles—leveraging doctoral credentials and innovation expertise.' },
  { q: 'How is the viva voce examination structured?', a: 'The viva is a virtual examination where you present and defend your doctoral thesis to a panel. You discuss methodology, findings, and contributions to business knowledge. It typically lasts 2-3 hours.' },
  { q: 'Are there payment plans or financial support available?', a: 'Yes. Flexible payment options, scholarships, and financial aid may be available. Contact AcdyOn for details on payment plans and funding support options.' },
]

export default function EIMTDBAPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#ffffff,#f8fafc_50%,#eef4ff)] dark:bg-[linear-gradient(135deg,#0a1120,#0f172a_50%,#0b1330)] pb-16 pt-36">
        <div className="absolute right-[-10%] top-20 h-80 w-80 rounded-full bg-[#1E40FF]/15 blur-3xl" />
        <div className="container-premium relative">
          <div className="mb-8 flex items-center gap-4">
            <div className="relative h-16 w-40 overflow-hidden rounded-[4px]">
              <Image src={LOGO} alt="EIMT Logo" fill className="object-contain object-left" unoptimized />
            </div>
            <MapPin className="h-5 w-5 text-slate-400" />
          </div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#1E40FF]">European Institute of Management and Technology</p>
          <h1 className="max-w-4xl font-display text-5xl leading-tight text-slate-950 sm:text-6xl dark:text-white">Doctor of Business Administration (DBA)</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">Develop research capability, strategic expertise, and innovation leadership to drive digital transformation and sustainable growth in a rapidly evolving global business environment.</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/book-consultation" className="inline-flex items-center justify-center rounded-full bg-[#1E40FF] px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-[#1937dd]">Check Eligibility</Link>
            <BrochureDownloadButton programmeName="EIMT DBA" fileUrl="/brochures/degrees/eimt-dba.html" sourcePage="/doctoral-programs/dba/eimt" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-4 text-sm font-semibold text-slate-950 transition-all hover:shadow-md dark:bg-slate-950 dark:text-white dark:border-slate-800">Download Brochure</BrochureDownloadButton>
            <Link href="/book-consultation" className="inline-flex items-center justify-center rounded-full border border-[#1E40FF] px-8 py-4 text-sm font-semibold text-[#1E40FF] transition-all hover:bg-[#1E40FF]/5">Book Consultation</Link>
          </div>
          <div className="mt-14 grid gap-4 rounded-[8px] border border-slate-200 bg-white p-8 sm:grid-cols-2 md:grid-cols-4 dark:bg-slate-950 dark:border-slate-800">
            {[{ label: 'Duration', value: '3 Years' }, { label: 'ECTS', value: '180' }, { label: 'Delivery', value: '100% Online' }, { label: 'Learning Hours', value: '4,500' }].map(({ label, value }) => (
              <div key={label}>
                <p className="text-xs font-medium uppercase tracking-wide text-slate-400">{label}</p>
                <p className="mt-1 font-semibold text-slate-950 dark:text-white">{value}</p>
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

      <section className="bg-white py-24 dark:bg-slate-950">
        <div className="container-premium">
          <SectionHeading eyebrow="EIMT advantages" title="Why Choose EIMT DBA" description="Innovation-focused doctoral education for technology-aware business leaders." />
          <div className="mt-14 grid gap-4 grid-cols-2 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[{ icon: Lightbulb, title: 'Innovation-Focused Curriculum', desc: 'Research emphasising emerging business models, digital disruption, and transformational leadership.' }, { icon: Zap, title: 'Technology-Aware Leadership', desc: 'Master digital transformation, technology strategy, and data-driven decision-making.' }, { icon: Microscope, title: 'Research Excellence', desc: 'Rigorous applied research contributing original insights to contemporary business challenges.' }, { icon: Globe2, title: 'Global Professional Network', desc: '1,000+ alumni across 80+ countries providing ongoing collaboration and thought leadership.' }, { icon: Smartphone, title: 'Flexible Online Learning', desc: '100% online, designed for busy executives balancing doctorate with professional roles.' }, { icon: Target, title: 'Strategic Decision Making', desc: 'Develop advanced frameworks for navigating complexity, innovation, and organisational transformation.' }].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-[8px] border border-slate-200 bg-white p-4 transition-all hover:shadow-lg sm:p-6 dark:bg-slate-950 dark:border-slate-800">
                <div className="mb-2 sm:mb-3"><Icon className="h-6 w-6 sm:h-9 sm:w-9 text-[#1E40FF]" /></div>
                <h3 className="mb-2 text-sm font-semibold text-slate-950 sm:text-base dark:text-white">{title}</h3>
                <ReadMoreText text={desc} className="text-sm leading-6 text-slate-500 dark:text-slate-400" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-24 dark:bg-slate-900/60">
        <div className="container-premium">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading eyebrow="Understanding the modern DBA" title="Applied Innovation Research For Executive Impact" description="" align="left" />
              <div className="mt-8 space-y-5 text-slate-600 dark:text-slate-300">
                <ReadMoreText text="A Doctor of Business Administration (DBA) is a research-intensive doctoral qualification for practising executives seeking advanced academic credentials and innovation leadership. Unlike an MBA (1-2 years, management skills), the DBA emphasises original research and scholarly contribution over 3+ years." />
                <ReadMoreText text="The EIMT DBA uniquely bridges academic rigour with real-world innovation. You investigate contemporary business challenges—digital transformation, emerging markets, organisational change—developing evidence-based solutions that drive strategic transformation in your industry." />
              </div>
            </div>
            <div className="grid gap-3 grid-cols-2">
              {[{ label: 'DBA vs MBA', comparison: 'DBA: Research-focused doctorate, 3+ years. MBA: Management fundamentals, 1-2 years.' }, { label: 'DBA vs PhD', comparison: 'DBA: Applied innovation research. PhD: Theoretical academic focus.' }, { label: 'EIMT Focus', comparison: 'Technology-aware leadership, digital transformation, evidence-based strategy.' }, { label: 'Outcome', comparison: 'Doctoral degree + innovation expertise + executive advancement + thought leadership.' }].map(({ label, comparison }) => (
                <div key={label} className="rounded-[8px] border border-slate-200 bg-white p-4 dark:bg-slate-950 dark:border-slate-800">
                  <p className="text-xs font-bold uppercase tracking-wide text-[#1E40FF]">{label}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{comparison}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 dark:bg-slate-950">
        <div className="container-premium">
          <SectionHeading eyebrow="Ideal candidates" title="Who This Programme Is Designed For" description="Forward-thinking professionals seeking doctoral credentials and strategic impact." />
          <DataTabs
            className="mt-14"
            tabs={[
              {
                label: 'Corporate leaders',
                panel: (
                  <div className="grid gap-3 grid-cols-2 sm:grid-cols-4">
                    {[{ icon: UserRound, title: 'Business leaders' }, { icon: Building2, title: 'Directors' }, { icon: Briefcase, title: 'Senior managers' }, { icon: Zap, title: 'C-suite aspirants' }].map(({ icon: Icon, title }) => (
                      <div key={title} className="rounded-[8px] border border-slate-200 bg-white p-4 text-center transition-all hover:border-[#1E40FF]/30 hover:shadow-lg sm:p-6 dark:bg-slate-950 dark:border-slate-800">
                        <div className="mb-2 sm:mb-3"><Icon className="h-6 w-6 sm:h-9 sm:w-9 text-[#1E40FF]" /></div>
                        <p className="text-sm font-semibold text-slate-950 sm:text-base dark:text-white">{title}</p>
                      </div>
                    ))}
                  </div>
                ),
              },
              {
                label: 'Entrepreneurs & innovators',
                panel: (
                  <div className="grid gap-3 grid-cols-2 sm:grid-cols-4">
                    {[{ icon: Rocket, title: 'Entrepreneurs' }, { icon: Lightbulb, title: 'Innovation leaders' }, { icon: Crown, title: 'Family business owners' }, { icon: BarChart3, title: 'Consultants' }].map(({ icon: Icon, title }) => (
                      <div key={title} className="rounded-[8px] border border-slate-200 bg-white p-4 text-center transition-all hover:border-[#1E40FF]/30 hover:shadow-lg sm:p-6 dark:bg-slate-950 dark:border-slate-800">
                        <div className="mb-2 sm:mb-3"><Icon className="h-6 w-6 sm:h-9 sm:w-9 text-[#1E40FF]" /></div>
                        <p className="text-sm font-semibold text-slate-950 sm:text-base dark:text-white">{title}</p>
                      </div>
                    ))}
                  </div>
                ),
              },
              {
                label: 'Digital & public sector',
                panel: (
                  <div className="grid gap-3 grid-cols-2 sm:grid-cols-2">
                    {[{ icon: RefreshCw, title: 'Digital transformation officers' }, { icon: Landmark, title: 'Policy makers' }].map(({ icon: Icon, title }) => (
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

      <section className="bg-[#F8FAFC] py-24 dark:bg-slate-900/60">
        <div className="container-premium">
          <SectionHeading eyebrow="3-year structure" title="The EIMT Learning Journey" description="Progressive pathway from research foundations through doctoral thesis completion." />
          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {[{ year: 'Year 1', title: 'Research Foundations', color: '#1E40FF', modules: ['Strategic Financial Management', 'Entrepreneurship & Innovation', 'Strategic Marketing', 'Globalisation & Corporate Governance', 'Leadership Development', 'Research Capability'] }, { year: 'Year 2', title: 'Strategic Development', color: '#22D3EE', modules: ['Advanced Research Design', 'Research Methodologies', 'Applied Business Investigation', 'Technology & Innovation Strategy', 'Organisational Transformation'] }, { year: 'Year 3', title: 'Doctoral Research', color: '#D4AF37', modules: ['Original Doctoral Research', 'Thesis Development', 'Research Contribution', 'Scholarly Publication', 'Viva Preparation'] }].map(({ year, title, color, modules }) => (
              <div key={year} className="rounded-[8px] border border-slate-200 bg-white p-8 dark:bg-slate-950 dark:border-slate-800" style={{ borderTopColor: color, borderTopWidth: 4 }}>
                <p className="text-xs font-bold uppercase tracking-wide" style={{ color }}>{year}</p>
                <h3 className="mt-2 font-semibold text-slate-950 dark:text-white">{title}</h3>
                <ul className="mt-4 space-y-2">
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

      <section className="bg-white py-24 dark:bg-slate-950">
        <div className="container-premium">
          <SectionHeading eyebrow="Research areas" title="DBA Research Specialisations" description="Choose a research focus aligned with your innovation goals and expertise." />
          <div className="mt-14 grid gap-3 grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
            {['Innovation Management', 'Strategic Leadership', 'Entrepreneurship', 'Corporate Governance', 'Digital Transformation', 'Business Strategy', 'Marketing', 'Finance', 'Human Capital', 'Global Business', 'Sustainability', 'Organisational Change'].map((area) => (
              <div key={area} className="rounded-[8px] border border-slate-200 bg-white p-3 text-center transition-all hover:border-[#1E40FF]/30 hover:shadow-md sm:p-5 dark:bg-slate-950 dark:border-slate-800">
                <Target className="mx-auto mb-2 h-5 w-5 text-[#1E40FF]" />
                <p className="text-sm font-semibold text-slate-950 sm:text-base dark:text-white">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-24">
        <div className="container-premium">
          <SectionHeading eyebrow="Programme outcomes" title="What You Will Achieve" description="Master-level capabilities and doctoral-level expertise upon completion." variant="dark" />
          <div className="mt-14 grid gap-4 grid-cols-2 sm:gap-6 md:grid-cols-2">
            {[{ icon: Target, title: 'Lead Transformation Initiatives', desc: 'Design and execute organisational change programmes with strategic rigour.' }, { icon: TrendingUp, title: 'Develop Strategic Growth Frameworks', desc: 'Create evidence-based strategies addressing complex business challenges.' }, { icon: Microscope, title: 'Conduct Doctoral-Level Research', desc: 'Execute rigorous research contributing original insights to your field.' }, { icon: Lightbulb, title: 'Drive Innovation & Disruption', desc: 'Champion innovation strategies that transform business models and markets.' }, { icon: BarChart3, title: 'Influence Organisational Policy', desc: 'Shape strategic direction and executive decision-making at the highest level.' }, { icon: PenLine, title: 'Present & Publish Research', desc: 'Articulate evidence-based recommendations to academic and professional audiences.' }, { icon: Globe2, title: 'Lead Global Initiatives', desc: 'Navigate international business complexity with strategic expertise.' }, { icon: Zap, title: 'Build Executive Credibility', desc: 'Establish thought leadership and authority in your industry.' }, { icon: Trophy, title: 'Advance Career Trajectory', desc: 'Qualify for C-suite roles, consulting positions, and board advisorships.' }, { icon: Briefcase, title: 'Create Lasting Organisational Impact', desc: 'Contribute research-backed solutions creating sustainable competitive advantage.' }].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-[8px] border border-white/10 bg-white/[0.04] p-4 sm:p-6">
                <div className="mb-2 sm:mb-3"><Icon className="h-6 w-6 sm:h-9 sm:w-9 text-[#1E40FF]" /></div>
                <h3 className="mb-2 text-sm font-semibold text-white sm:text-base">{title}</h3>
                <ReadMoreText text={desc} className="text-sm leading-6 text-slate-400" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 dark:bg-slate-950">
        <div className="container-premium">
          <SectionHeading eyebrow="EIMT difference" title="Why EIMT DBA Stands Out" description="Innovation leadership for modern global executives." />
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-5 text-slate-600 dark:text-slate-300">
              <div>
                <h3 className="mb-2 font-semibold text-slate-950 dark:text-white">Technology-Aware Leadership</h3>
                <ReadMoreText text="Master digital transformation, AI-driven decision-making, and emerging technology management essential for modern executive success." />
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-slate-950 dark:text-white">Global Professional Cohort</h3>
                <ReadMoreText text="Study alongside executives from 80+ countries, gaining international perspectives and building a truly global professional network." />
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-slate-950 dark:text-white">Research Linked to Industry Challenges</h3>
                <ReadMoreText text="Your doctoral research directly addresses real business problems, making your degree immediately applicable and relevant." />
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-slate-950 dark:text-white">Forward-Focused Curriculum</h3>
                <ReadMoreText text="Study future-focused topics: digital disruption, sustainability, global markets, and innovation ecosystems shaping tomorrow's business landscape." />
              </div>
            </div>
            <div className="grid gap-3 grid-cols-2">
              {[{ label: 'Innovation-Centric', value: 'Curriculum emphasises digital transformation and emerging business models' }, { label: 'Global Delivery', value: 'Online platform uniting international professionals and thought leaders' }, { label: 'Flexible Structure', value: 'Study at your pace while maintaining executive responsibilities' }, { label: 'Executive Relevant', value: 'Applied research directly addressing strategic business challenges' }, { label: 'Modern Positioning', value: 'Doctoral credentials for the digital era and transformation economy' }].map(({ label, value }) => (
                <div key={label} className="rounded-[8px] border border-slate-200 bg-[#F8FAFC] p-4 dark:bg-slate-900/60 dark:border-slate-800">
                  <p className="text-xs font-bold uppercase tracking-wide text-[#1E40FF]">{label}</p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-24 dark:bg-slate-900/60">
        <div className="container-premium">
          <SectionHeading eyebrow="Credentials" title="What You Graduate With" description="A comprehensive doctoral package recognised globally for executive advancement." />
          <div className="mx-auto mt-14 max-w-3xl">
            <div className="overflow-hidden rounded-[8px] border border-slate-200 bg-white shadow-lg dark:bg-slate-950 dark:border-slate-800" style={{aspectRatio: '1.41/1'}}>
              <div className="relative h-full w-full">
                <Image src="https://sohhmxayptiosflmlxuu.supabase.co/storage/v1/object/public/brochures/Certificates/EIMT%20DBA.webp" alt="EIMT Doctor of Business Administration Certificate" fill className="object-contain p-4" unoptimized />
              </div>
            </div>
            <p className="mt-4 text-center text-sm text-slate-500 dark:text-slate-400">Official EIMT DBA Certificate</p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {['Official DBA Degree', 'Academic Transcript', 'Research Supervision Record', 'Doctoral Dissertation', 'Alumni Status', 'Graduation Certification'].map((item) => (
                <div key={item} className="rounded-[8px] border border-slate-200 bg-white p-4 text-center dark:bg-slate-950 dark:border-slate-800">
                  <p className="text-sm font-semibold text-slate-950 dark:text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 dark:bg-slate-950">
        <div className="container-premium">
          <SectionHeading eyebrow="Career pathways" title="Career Impact After the DBA" description="Graduates advance to senior leadership roles leveraging doctoral credentials and innovation expertise." />
          <div className="mt-14 grid gap-3 grid-cols-2 sm:gap-5 sm:grid-cols-3 lg:grid-cols-5">
            {[{ icon: Crown, role: 'Chief Executive Officer' }, { icon: Zap, role: 'Chief Innovation Officer' }, { icon: Target, role: 'Strategy Director' }, { icon: RefreshCw, role: 'Business Transformation Leader' }, { icon: BarChart3, role: 'Management Consultant' }, { icon: Trophy, role: 'Board Advisor' }, { icon: GraduationCap, role: 'University Faculty' }, { icon: Briefcase, role: 'Research Consultant' }, { icon: Rocket, role: 'Entrepreneur' }, { icon: Settings, role: 'Corporate Executive' }].map(({ icon: Icon, role }) => (
              <div key={role} className="rounded-[8px] border border-slate-200 bg-white p-4 text-center transition-all hover:shadow-lg sm:p-6 dark:bg-slate-950 dark:border-slate-800">
                <div className="mb-2 sm:mb-3"><Icon className="h-6 w-6 sm:h-9 sm:w-9 text-[#1E40FF]" /></div>
                <p className="text-sm font-semibold text-slate-950 sm:text-base dark:text-white">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-24 dark:bg-slate-900/60">
        <div className="container-premium">
          <SectionHeading eyebrow="Entry criteria" title="Eligibility Requirements" description="Designed for accomplished professionals with advanced academic credentials." />
          <div className="mt-14 grid gap-4 grid-cols-2 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[{ icon: GraduationCap, title: 'Master\'s Degree Required', desc: 'Master\'s degree or EQF Level 7 qualification in a relevant discipline.' }, { icon: FileEdit, title: 'English Language Proficiency', desc: 'TOEFL, IELTS, or equivalent unless prior education conducted in English.' }, { icon: Briefcase, title: 'Professional Experience', desc: '5+ years of senior professional experience preferred.' }, { icon: Search, title: 'Research Readiness', desc: 'Capacity to conduct doctoral-level research in your chosen area.' }, { icon: BarChart3, title: 'Academic Background', desc: 'Strong foundation in business or related discipline.' }, { icon: Sparkles, title: 'Professional Achievement', desc: 'Demonstrated leadership, innovation, or strategic impact in your career.' }].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-[8px] border border-slate-200 bg-white p-4 sm:p-6 dark:bg-slate-950 dark:border-slate-800">
                <div className="mb-2 sm:mb-3"><Icon className="h-6 w-6 sm:h-9 sm:w-9 text-[#1E40FF]" /></div>
                <h3 className="mb-2 text-sm font-semibold text-slate-950 sm:text-base dark:text-white">{title}</h3>
                <ReadMoreText text={desc} className="text-sm leading-6 text-slate-600 dark:text-slate-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 dark:bg-slate-950">
        <div className="container-premium">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading eyebrow="Your partnership" title="AcdyOn's Support Role" description="" align="left" />
              <div className="mt-8 space-y-4 text-slate-600 dark:text-slate-300">
                <ReadMoreText text="AcdyOn partners with you throughout your EIMT DBA journey, bridging your professional aspirations with academic excellence and innovation research." />
                <ReadMoreText text="From initial eligibility assessment through to graduation, we provide coordination, research guidance, university communication, and dedicated student support ensuring your doctoral success." />
              </div>
            </div>
            <div className="grid gap-3 grid-cols-2">
              {['Application & Eligibility Guidance', 'Documentation Review', 'Admission Support', 'Research Coordination', 'Progress Tracking', 'University Communication', 'Thesis Development Support', 'Dedicated Success Team'].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-[8px] border border-slate-200 bg-white p-4 dark:bg-slate-950 dark:border-slate-800">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#1E40FF]" />
                  <p className="text-sm font-semibold text-slate-950 dark:text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-24 dark:bg-slate-900/60">
        <div className="container-premium">
          <SectionHeading eyebrow="Success stories" title="EIMT DBA Graduate Outcomes" description="Professionals advancing through innovation leadership and doctoral expertise." />
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[{ name: 'European Technology Director', role: 'Led digital transformation across 12 countries', outcome: 'Promoted to Chief Innovation Officer; research on emerging market disruption now informs corporate strategy.' }, { name: 'Global Consulting Partner', role: 'Advanced business strategy consultant', outcome: 'Established consultancy specialising in digital transformation; doctoral credentials elevated client positioning and thought leadership.' }, { name: 'Family Business Strategic Leader', role: 'Transformed legacy manufacturing company', outcome: 'Implemented innovation framework from DBA research; scaled international operations while maintaining family values.' }].map(({ name, role, outcome }) => (
              <div key={name} className="rounded-[8px] border border-slate-200 bg-white p-8 dark:bg-slate-950 dark:border-slate-800">
                <div className="mb-4 h-12 w-12 rounded-full bg-[#1E40FF]/10 flex items-center justify-center">
                  <span className="text-xl font-bold text-[#1E40FF]">"</span>
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

      <section className="bg-white py-24 dark:bg-slate-950">
        <div className="container-premium">
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" description="Everything you need to know about the EIMT DBA." />
          <div className="mt-14">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      <section className="bg-[#0f172a] py-20">
        <div className="container-premium text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#22d3ee]">Expert guidance</p>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Speak with an Academic Adviser</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Discover how the EIMT DBA can accelerate your leadership career — book a free consultation with our doctoral advisers today.
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
