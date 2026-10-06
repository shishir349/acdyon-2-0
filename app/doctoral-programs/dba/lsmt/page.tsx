import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  CheckCircle2, Award, Target, Microscope, Laptop, Globe2, GraduationCap, TrendingUp,
  Handshake, Trophy, Lightbulb, Users, Building2, Briefcase, Rocket, BarChart3,
  Landmark, Zap, UserRound, Globe, BookOpen, Clock, Plane, Crown, Settings, DollarSign,
  RefreshCw, FileEdit, Search, PenLine, MapPin,
} from 'lucide-react'
import { DataTabs } from '@/components/ui/data-tabs'
import { SectionHeading } from '@/components/ui/section-heading'
import { FAQAccordion } from '@/components/ui/faq-accordion'
import { ReadMoreText } from '@/components/ui/read-more-text'
import { BrochureDownloadButton } from '@/components/forms/brochure-download-button'

export const metadata: Metadata = {
  title: 'Doctor of Business Administration (DBA) | LSMT | AcdyOn',
  description: 'Advance your leadership through applied doctoral research. LSMT DBA — a premium 3-year online programme for senior executives, entrepreneurs, and business leaders.',
}

const LOGO = 'https://sohhmxayptiosflmlxuu.supabase.co/storage/v1/object/public/brochures/LSMT-Logo.webp'

const faqs = [
  { q: 'What is the difference between a DBA and an MBA?', a: 'An MBA focuses on business management fundamentals and developing professional skills over 1-2 years. A DBA is a doctoral-level qualification emphasising applied research, evidence-based decision-making, and original scholarly contribution. DBAs require 3+ years and are designed for experienced executives seeking advanced academic credentials.' },
  { q: 'How does a DBA differ from a PhD in Business?', a: 'A DBA prioritises practical, work-related research solving real organisational challenges. A PhD in Business is theory-focused, preparing graduates for academic careers. DBAs bridge executive leadership and academic rigour; PhDs emphasise theoretical advancement and academic publication.' },
  { q: 'How long does the LSMT DBA take to complete?', a: 'The programme is designed for 3 years of part-time study. However, completion time varies based on individual pace, research progress, and thesis development. Most students complete between 3-6 years.' },
  { q: 'Is the LSMT DBA fully online?', a: 'Yes, the programme is delivered entirely online with no requirement for on-campus attendance. You study flexibly while maintaining your professional role, with scheduled supervision and virtual academic support.' },
  { q: 'What are the entry requirements for the DBA?', a: 'A master\'s degree or MBA with a dissertation/project, English language proficiency, at least 5 years of senior professional experience, a letter of intent, and a research intention statement (700-800 words) outlining your research focus.' },
  { q: 'Can I choose my own research topic?', a: 'Yes. You select a research topic relevant to your professional context and organisational challenges, subject to supervisor approval. The research must contribute meaningfully to business knowledge and practice.' },
  { q: 'How is research supervised?', a: 'Each student is assigned an experienced academic supervisor who provides regular guidance through online meetings. Supervisors mentor you through research design, methodology, thesis development, and final thesis preparation.' },
  { q: 'What is the thesis requirement?', a: 'You must complete an original doctoral thesis of 60,000-80,000 words based on primary research. The thesis is followed by a viva voce examination where you defend your research to a panel of examiners.' },
  { q: 'Are there traditional exams in the programme?', a: 'No. Assessment is based on submitted coursework assignments, research projects, and your final thesis. There are no traditional written examinations — evaluation focuses on your applied research and scholarly contribution.' },
  { q: 'How is the DBA recognised internationally?', a: 'LSMT is a UK-regulated institution with international accreditation. The DBA is recognised globally as a legitimate doctoral qualification equivalent to other UK and international DBAs, suitable for senior leadership roles, consulting, and academic positions worldwide.' },
  { q: 'What research areas can I focus on?', a: 'Research areas include Strategic Management, Leadership, Innovation, Entrepreneurship, Human Resource Management, Corporate Governance, Marketing, Finance, Supply Chain, Digital Transformation, Organisational Change, and Business Sustainability — tailored to your professional interests.' },
  { q: 'Can I apply research directly to my organisation?', a: 'Absolutely. The DBA emphasises applied research — you are encouraged to investigate real challenges within your organisation or industry, making the research directly relevant and implementable in your professional context.' },
  { q: 'What support is provided during the programme?', a: 'You receive academic supervision, access to digital libraries and research databases, technical support, online resources, guidance on research methodology, thesis writing support, and viva voce preparation from experienced faculty.' },
  { q: 'What technology do I need?', a: 'A reliable computer, stable internet connection, and basic software (Microsoft Office, PDF readers) are sufficient. Specific research tools or software may be recommended by your supervisor, depending on your research methodology.' },
  { q: 'Is there a global alumni network?', a: 'Yes. LSMT graduates are part of a 1,000+ global alumni community. The network provides ongoing professional connections, research collaboration opportunities, and thought leadership forums across multiple countries.' },
  { q: 'What career outcomes are typical after completing the DBA?', a: 'Graduates transition to CEO, COO, CFO, strategy director, business transformation roles, management consulting, board advisory positions, or academic faculty roles — all leveraging the advanced research credentials and executive presence the DBA provides.' },
  { q: 'Is English proficiency required?', a: 'Yes. Non-native English speakers must demonstrate proficiency through recognised qualifications (TOEFL, IELTS, etc.) unless prior education was conducted in English. Academic writing and research require strong English proficiency.' },
  { q: 'Are payment plans available?', a: 'Yes, flexible payment options are available. Contact AcdyOn for details on instalments, scholarships, and financial support options that may be available to you.' },
  { q: 'What is AcdyOn\'s role in supporting my DBA journey?', a: 'AcdyOn provides application guidance, admission support, documentation assistance, coordination with the university, research guidance, progress tracking, and a dedicated student success team throughout your DBA experience.' },
  { q: 'How is the viva voce examination structured?', a: 'The viva voce is an online examination where you present and defend your doctoral thesis to a panel of examiners. You discuss your research methodology, findings, and contributions to business knowledge. It typically lasts 2-3 hours.' },
]

export default function LSMTDBAPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#ffffff,#f8fafc_50%,#eef4ff)] dark:bg-[linear-gradient(135deg,#0a1120,#0f172a_50%,#0b1330)] pb-16 pt-36">
        <div className="absolute right-[-10%] top-20 h-80 w-80 rounded-full bg-[#1E40FF]/15 blur-3xl" />
        <div className="container-premium relative">
          <div className="mb-8 flex items-center gap-4">
            <div className="relative h-16 w-40 overflow-hidden rounded-[4px]">
              <Image src={LOGO} alt="LSMT Logo" fill className="object-contain object-left" unoptimized />
            </div>
            <MapPin className="h-5 w-5 text-slate-400" />
          </div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#1E40FF]">London School of Management and Technology</p>
          <h1 className="max-w-4xl font-display text-5xl leading-tight text-slate-950 sm:text-6xl dark:text-white">Doctor of Business Administration (DBA)</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">Advance your leadership influence through applied doctoral research designed for senior executives, entrepreneurs, consultants, and business decision-makers.</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/book-consultation" className="inline-flex items-center justify-center rounded-full bg-[#1E40FF] px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-[#1937dd]">Check Eligibility</Link>
            <BrochureDownloadButton programmeName="LSMT DBA" fileUrl="/brochures/degrees/lsmt-dba.html" sourcePage="/doctoral-programs/dba/lsmt" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-4 text-sm font-semibold text-slate-950 transition-all hover:shadow-md dark:bg-slate-950 dark:text-white dark:border-slate-800">Download Brochure</BrochureDownloadButton>
            <Link href="/book-consultation" className="inline-flex items-center justify-center rounded-full border border-[#1E40FF] px-8 py-4 text-sm font-semibold text-[#1E40FF] transition-all hover:bg-[#1E40FF]/5">Book Consultation</Link>
          </div>
          <div className="mt-14 grid gap-4 rounded-[8px] border border-slate-200 bg-white p-8 sm:grid-cols-2 md:grid-cols-6 dark:bg-slate-950 dark:border-slate-800">
            {[{ label: 'Country', value: 'United Kingdom' }, { label: 'Delivery', value: '100% Online' }, { label: 'Duration', value: '3 Years' }, { label: 'Focus', value: 'Research Driven' }, { label: 'Faculty', value: 'Global' }, { label: 'Flexibility', value: 'Part-Time' }].map(({ label, value }) => (
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
          <SectionHeading eyebrow="Programme advantages" title="Why Choose LSMT DBA" description="A rigorous, practice-focused doctoral programme for executives and business leaders seeking advanced academic credentials." />
          <div className="mt-14 grid gap-4 grid-cols-2 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[{ icon: Microscope, title: 'Applied Doctoral Research', desc: 'Research grounded in real organisational challenges.' }, { icon: Laptop, title: 'Flexible Online Delivery', desc: '100% online, study at your pace while maintaining your executive role.' }, { icon: Globe2, title: 'Global Business Perspective', desc: 'International curriculum and faculty bringing cross-cultural insights.' }, { icon: GraduationCap, title: 'Experienced Supervisors', desc: 'Doctoral mentors with academic excellence and industry expertise.' }, { icon: TrendingUp, title: 'Executive Leadership Development', desc: 'Positioned for C-suite advancement and strategic roles.' }, { icon: Handshake, title: 'International Network', desc: '1,000+ global alumni community for professional collaboration.' }, { icon: Trophy, title: 'Professional Credibility', desc: 'Doctorate enhances credibility as a business expert.' }, { icon: Lightbulb, title: 'Contribution to Knowledge', desc: 'Your research influences industry practice.' }].map(({ icon: Icon, title, desc }) => (
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
              <SectionHeading eyebrow="Understanding the DBA" title="Applied Research For Executive Impact" description="" align="left" />
              <div className="mt-8 space-y-5 text-slate-600 dark:text-slate-300">
                <ReadMoreText text="A Doctor of Business Administration (DBA) is a research-intensive doctoral qualification designed for practising executives. Unlike an MBA, which focuses on management skills over 1-2 years, the DBA emphasises advanced, original research and scholarly contribution over 3+ years." />
                <ReadMoreText text="The LSMT DBA bridges academic rigour with real-world application. You investigate contemporary business challenges in your organisation or industry, developing evidence-based solutions that drive strategic transformation." />
              </div>
            </div>
            <div className="grid gap-3 grid-cols-2">
              {[{ label: 'DBA vs MBA', comparison: 'DBA: Research-focused doctorate. MBA: Management skills, 1-2 years.' }, { label: 'DBA vs PhD', comparison: 'DBA: Applied business research. PhD: Theoretical, academic focus.' }, { label: 'Key Focus', comparison: 'Solving real organisational challenges through rigorous research.' }, { label: 'Outcome', comparison: 'Doctoral degree + thought leadership + executive advancement.' }].map(({ label, comparison }) => (
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
          <SectionHeading eyebrow="Ideal candidates" title="Who This Programme Is Designed For" description="Accomplished professionals seeking doctoral-level credentials and transformational impact." />
          <DataTabs
            className="mt-14"
            tabs={[
              {
                label: 'Corporate leaders',
                panel: (
                  <div className="grid gap-3 grid-cols-2 sm:grid-cols-4">
                    {[{ icon: Building2, title: 'CEOs & directors' }, { icon: Zap, title: 'Corporate executives' }, { icon: Briefcase, title: 'Senior managers' }, { icon: UserRound, title: 'Business owners' }].map(({ icon: Icon, title }) => (
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
                  <div className="grid gap-3 grid-cols-2 sm:grid-cols-3">
                    {[{ icon: Rocket, title: 'Entrepreneurs' }, { icon: BarChart3, title: 'Consultants' }, { icon: Users, title: 'Family business leaders' }].map(({ icon: Icon, title }) => (
                      <div key={title} className="rounded-[8px] border border-slate-200 bg-white p-4 text-center transition-all hover:border-[#1E40FF]/30 hover:shadow-lg sm:p-6 dark:bg-slate-950 dark:border-slate-800">
                        <div className="mb-2 sm:mb-3"><Icon className="h-6 w-6 sm:h-9 sm:w-9 text-[#1E40FF]" /></div>
                        <p className="text-sm font-semibold text-slate-950 sm:text-base dark:text-white">{title}</p>
                      </div>
                    ))}
                  </div>
                ),
              },
              {
                label: 'Academic & public sector',
                panel: (
                  <div className="grid gap-3 grid-cols-2 sm:grid-cols-2">
                    {[{ icon: GraduationCap, title: 'Academics' }, { icon: Landmark, title: 'Policy leaders' }].map(({ icon: Icon, title }) => (
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
          <SectionHeading eyebrow="3-year structure" title="Your Doctoral Research Journey" description="A pathway from research foundations through to doctoral thesis completion." />
          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {[{ year: 'Year 1', title: 'Research Foundations', color: '#1E40FF', modules: ['Research Methodology', 'Strategic HRM', 'Strategic Finance', 'Strategic Marketing'] }, { year: 'Year 2', title: 'Strategic Development', color: '#22D3EE', modules: ['Managing Strategic Change', 'Leadership Development', 'Operations', 'Entrepreneurship', 'Corporate Governance'] }, { year: 'Year 3', title: 'Doctoral Research', color: '#D4AF37', modules: ['Original Research', 'Thesis Development', 'Publication Support', 'Viva Preparation'] }].map(({ year, title, color, modules }) => (
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
          <SectionHeading eyebrow="Research areas" title="Doctoral Research Specialisations" description="Choose a research focus aligned with your expertise and impact goals." />
          <div className="mt-14 grid gap-3 grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
            {['Strategic Management', 'Leadership', 'Innovation', 'Entrepreneurship', 'Human Resources', 'Corporate Governance', 'Marketing', 'Finance', 'Supply Chain', 'Digital Transformation', 'Organisational Change', 'Sustainability'].map((area) => (
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
          <SectionHeading eyebrow="LSMT advantages" title="Why LSMT DBA Stands Out" description="A rigorous, globally recognised doctorate built for executive transformation." variant="dark" />
          <div className="mt-14 grid gap-4 grid-cols-2 sm:gap-6 md:grid-cols-2">
            {[{ icon: Globe, title: 'Global Alumni Network', desc: '1,000+ graduates across 50+ countries.' }, { icon: BookOpen, title: 'Digital Library Access', desc: 'Full access to research journals and databases.' }, { icon: Clock, title: 'Flexible Study Structure', desc: 'Online delivery designed around executive schedules.' }, { icon: UserRound, title: 'Expert Supervision', desc: 'Supervisors with academic excellence and industry experience.' }, { icon: Briefcase, title: 'Industry-Relevant Research', desc: 'Investigation of real organisational challenges.' }, { icon: Plane, title: 'International Exposure', desc: 'Global faculty and international seminars.' }, { icon: Globe2, title: 'Cross-Cultural Insights', desc: 'Curriculum emphasises global challenges.' }, { icon: Lightbulb, title: 'Thought Leadership', desc: 'Publication support and industry positioning.' }].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-[8px] border border-white/10 bg-white/[0.04] p-4 sm:p-6">
                <div className="mb-2 sm:mb-3"><Icon className="h-6 w-6 sm:h-9 sm:w-9 text-[#1E40FF]" /></div>
                <h3 className="mb-2 text-sm font-semibold text-white sm:text-base">{title}</h3>
                <p className="text-sm leading-6 text-slate-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 dark:bg-slate-950">
        <div className="container-premium">
          <SectionHeading eyebrow="Career advancement" title="Career Pathways After the DBA" description="Graduates transition to executive and strategic roles leveraging doctoral credentials." />
          <div className="mt-14 grid gap-4 grid-cols-2 sm:gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[{ icon: Crown, role: 'Chief Executive Officer', desc: 'Strategic leadership at the highest level.' }, { icon: Settings, role: 'Chief Operating Officer', desc: 'Operational excellence with advanced research backing.' }, { icon: DollarSign, role: 'Chief Financial Officer', desc: 'Financial leadership with doctoral sophistication.' }, { icon: BarChart3, role: 'Management Consultant', desc: 'Strategy consulting with doctoral credentials.' }, { icon: Target, role: 'Strategy Director', desc: 'Corporate strategy at executive level.' }, { icon: RefreshCw, role: 'Transformation Director', desc: 'Leading organisational change.' }, { icon: Landmark, role: 'Board Advisor', desc: 'Board positions and advisory roles.' }, { icon: GraduationCap, role: 'Faculty Roles', desc: 'University faculty positions globally.' }].map(({ icon: Icon, role, desc }) => (
              <div key={role} className="rounded-[8px] border border-slate-200 bg-white p-4 transition-all hover:shadow-lg sm:p-6 dark:bg-slate-950 dark:border-slate-800">
                <div className="mb-2 sm:mb-3"><Icon className="h-6 w-6 sm:h-9 sm:w-9 text-[#1E40FF]" /></div>
                <h3 className="mb-2 text-sm font-semibold text-slate-950 sm:text-base dark:text-white">{role}</h3>
                <p className="text-sm leading-5 text-slate-500 dark:text-slate-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-24 dark:bg-slate-900/60">
        <div className="container-premium">
          <SectionHeading eyebrow="Credentials" title="What You Graduate With" description="A comprehensive doctorate package recognised globally for executive advancement." />
          <div className="mx-auto mt-14 max-w-3xl">
            <div className="overflow-hidden rounded-[8px] border border-slate-200 bg-white shadow-lg dark:bg-slate-950 dark:border-slate-800" style={{aspectRatio: '1.41/1'}}>
              <div className="relative h-full w-full">
                <Image src="https://sohhmxayptiosflmlxuu.supabase.co/storage/v1/object/public/brochures/Certificates/LSMT%20DBA.webp" alt="LSMT Doctor of Business Administration Certificate" fill className="object-contain p-4" unoptimized />
              </div>
            </div>
            <p className="mt-4 text-center text-sm text-slate-500 dark:text-slate-400">Official LSMT DBA Certificate</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 dark:bg-slate-950">
        <div className="container-premium">
          <SectionHeading eyebrow="Entry criteria" title="Admission Requirements" description="Designed for accomplished professionals with advanced academic credentials." />
          <div className="mt-14 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[{ icon: GraduationCap, title: 'Master\'s Degree Required', desc: 'MBA or Master\'s degree with dissertation in relevant discipline.' }, { icon: FileEdit, title: 'English Proficiency', desc: 'TOEFL, IELTS or equivalent unless prior education in English.' }, { icon: Briefcase, title: 'Professional Experience', desc: '5+ years of senior professional experience.' }, { icon: PenLine, title: 'Statement of Purpose', desc: 'Letter outlining motivation for doctoral-level research.' }, { icon: Search, title: 'Research Intent', desc: '700-800 word statement on intended research area.' }, { icon: Trophy, title: 'Professional Background', desc: 'Preference for demonstrated leadership and achievement.' }].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-[8px] border border-slate-200 bg-white p-6 dark:bg-slate-950 dark:border-slate-800">
                <div className="mb-3"><Icon className="h-9 w-9 text-[#1E40FF]" /></div>
                <h3 className="mb-2 font-semibold text-slate-950 dark:text-white">{title}</h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-24 dark:bg-slate-900/60">
        <div className="container-premium">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading eyebrow="Your partnership" title="AcdyOn's Support Role" description="" align="left" />
              <div className="mt-8 space-y-4 text-slate-600 dark:text-slate-300">
                <ReadMoreText text="AcdyOn serves as your dedicated partner throughout your LSMT DBA journey, bridging your professional aspirations with academic excellence." />
                <ReadMoreText text="From initial eligibility assessment through to graduation, we manage coordination, provide research guidance, facilitate university communication, and ensure successful thesis completion." />
              </div>
            </div>
            <div className="grid gap-3 grid-cols-2">
              {['Application & Eligibility Guidance', 'Admission Support', 'Research Coordination', 'University Communication', 'Progress Tracking', 'Thesis Development', 'Viva Preparation', 'Student Success Team'].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-[8px] border border-slate-200 bg-white p-4 dark:bg-slate-950 dark:border-slate-800">
                  <Handshake className="h-4 w-4 shrink-0 text-[#1E40FF]" />
                  <p className="text-sm font-semibold text-slate-950 dark:text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 dark:bg-slate-950">
        <div className="container-premium">
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" description="Everything you need to know about the LSMT DBA." />
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
            Explore how the LSMT DBA can advance your leadership influence — speak with a doctoral adviser at no obligation.
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
