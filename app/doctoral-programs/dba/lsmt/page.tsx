import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle2, Award, Target } from 'lucide-react'
import { SectionHeading } from '@/components/ui/section-heading'
import { ConsultationNudge } from '@/components/sections/consultation-nudge'
import { FAQAccordion } from '@/components/ui/faq-accordion'

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
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#ffffff,#f8fafc_50%,#eef4ff)] pb-16 pt-36">
        <div className="absolute right-[-10%] top-20 h-80 w-80 rounded-full bg-[#1E40FF]/15 blur-3xl" />
        <div className="container-premium relative">
          <div className="mb-8 flex items-center gap-4">
            <div className="relative h-16 w-40 overflow-hidden rounded-[4px]">
              <Image src={LOGO} alt="LSMT Logo" fill className="object-contain object-left" unoptimized />
            </div>
            <span className="text-2xl">🇬🇧</span>
          </div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#1E40FF]">London School of Management and Technology</p>
          <h1 className="max-w-4xl font-display text-5xl leading-tight text-slate-950 sm:text-6xl">Doctor of Business Administration (DBA)</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">Advance your leadership influence through applied doctoral research designed for senior executives, entrepreneurs, consultants, and business decision-makers.</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/book-consultation" className="inline-flex items-center justify-center rounded-full bg-[#1E40FF] px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-[#1937dd]">Check Eligibility</Link>
            <Link href="#" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-4 text-sm font-semibold text-slate-950 transition-all hover:shadow-md">Download Brochure</Link>
            <Link href="/book-consultation" className="inline-flex items-center justify-center rounded-full border border-[#1E40FF] px-8 py-4 text-sm font-semibold text-[#1E40FF] transition-all hover:bg-[#1E40FF]/5">Book Consultation</Link>
          </div>
          <div className="mt-14 grid gap-4 rounded-[8px] border border-slate-200 bg-white p-8 sm:grid-cols-2 md:grid-cols-6">
            {[{ label: 'Country', value: 'United Kingdom' }, { label: 'Delivery', value: '100% Online' }, { label: 'Duration', value: '3 Years' }, { label: 'Focus', value: 'Research Driven' }, { label: 'Faculty', value: 'Global' }, { label: 'Flexibility', value: 'Part-Time' }].map(({ label, value }) => (
              <div key={label}>
                <p className="text-xs font-medium uppercase tracking-wide text-slate-400">{label}</p>
                <p className="mt-1 font-semibold text-slate-950">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading eyebrow="Programme Advantages" title="Why Choose LSMT DBA" description="A rigorous, practice-focused doctoral programme for executives and business leaders seeking advanced academic credentials." />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[{ icon: '🔬', title: 'Applied Doctoral Research', desc: 'Research grounded in real organisational challenges.' }, { icon: '💻', title: 'Flexible Online Delivery', desc: '100% online, study at your pace while maintaining your executive role.' }, { icon: '🌍', title: 'Global Business Perspective', desc: 'International curriculum and faculty bringing cross-cultural insights.' }, { icon: '👨‍🎓', title: 'Experienced Supervisors', desc: 'Doctoral mentors with academic excellence and industry expertise.' }, { icon: '📈', title: 'Executive Leadership Development', desc: 'Positioned for C-suite advancement and strategic roles.' }, { icon: '🤝', title: 'International Network', desc: '1,000+ global alumni community for professional collaboration.' }, { icon: '🏆', title: 'Professional Credibility', desc: 'Doctorate enhances credibility as a business expert.' }, { icon: '💡', title: 'Contribution to Knowledge', desc: 'Your research influences industry practice.' }].map(({ icon, title, desc }) => (
              <div key={title} className="rounded-[8px] border border-slate-200 bg-white p-6 transition-all hover:shadow-lg">
                <div className="mb-3 text-4xl">{icon}</div>
                <h3 className="mb-2 font-semibold text-slate-950">{title}</h3>
                <p className="text-sm leading-6 text-slate-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading eyebrow="Understanding the DBA" title="Applied Research For Executive Impact" description="" align="left" />
              <div className="mt-8 space-y-6 text-slate-600">
                <p>A Doctor of Business Administration (DBA) is a research-intensive doctoral qualification designed for practising executives. Unlike an MBA, which focuses on management skills over 1-2 years, the DBA emphasises advanced, original research and scholarly contribution over 3+ years.</p>
                <p>The LSMT DBA bridges academic rigour with real-world application. You investigate contemporary business challenges in your organisation or industry, developing evidence-based solutions that drive strategic transformation.</p>
              </div>
            </div>
            <div className="grid gap-4">
              {[{ label: 'DBA vs MBA', comparison: 'DBA: Research-focused doctorate. MBA: Management skills, 1-2 years.' }, { label: 'DBA vs PhD', comparison: 'DBA: Applied business research. PhD: Theoretical, academic focus.' }, { label: 'Key Focus', comparison: 'Solving real organisational challenges through rigorous research.' }, { label: 'Outcome', comparison: 'Doctoral degree + thought leadership + executive advancement.' }].map(({ label, comparison }) => (
                <div key={label} className="rounded-[8px] border border-slate-200 bg-white p-5">
                  <p className="text-xs font-bold uppercase tracking-wide text-[#1E40FF]">{label}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{comparison}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading eyebrow="Ideal Candidates" title="Who This Programme Is Designed For" description="Accomplished professionals seeking doctoral-level credentials and transformational impact." />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            {[{ icon: '👔', title: 'Business Owners' }, { icon: '🏢', title: 'CEOs & Directors' }, { icon: '💼', title: 'Senior Managers' }, { icon: '🚀', title: 'Entrepreneurs' }, { icon: '📊', title: 'Consultants' }, { icon: '🏛️', title: 'Policy Leaders' }, { icon: '🎓', title: 'Academics' }, { icon: '⚡', title: 'Corporate Executives' }, { icon: '👨‍💼', title: 'Family Business Leaders' }].map(({ icon, title }) => (
              <div key={title} className="rounded-[8px] border border-slate-200 bg-white p-6 text-center transition-all hover:border-[#1E40FF]/30 hover:shadow-lg">
                <div className="mb-3 text-4xl">{icon}</div>
                <p className="font-semibold text-slate-950">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <SectionHeading eyebrow="3-Year Structure" title="Your Doctoral Research Journey" description="A pathway from research foundations through to doctoral thesis completion." />
          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {[{ year: 'Year 1', title: 'Research Foundations', color: '#1E40FF', modules: ['Research Methodology', 'Strategic HRM', 'Strategic Finance', 'Strategic Marketing'] }, { year: 'Year 2', title: 'Strategic Development', color: '#22D3EE', modules: ['Managing Strategic Change', 'Leadership Development', 'Operations', 'Entrepreneurship', 'Corporate Governance'] }, { year: 'Year 3', title: 'Doctoral Research', color: '#D4AF37', modules: ['Original Research', 'Thesis Development', 'Publication Support', 'Viva Preparation'] }].map(({ year, title, color, modules }) => (
              <div key={year} className="rounded-[8px] border border-slate-200 bg-white p-8" style={{ borderTopColor: color, borderTopWidth: 4 }}>
                <p className="text-xs font-bold uppercase tracking-wide" style={{ color }}>{year}</p>
                <h3 className="mt-2 font-semibold text-slate-950">{title}</h3>
                <ul className="mt-4 space-y-2">
                  {modules.map((m) => (
                    <li key={m} className="flex items-start gap-2 text-sm text-slate-600">
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

      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading eyebrow="Research Areas" title="Doctoral Research Specialisations" description="Choose a research focus aligned with your expertise and impact goals." />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {['Strategic Management', 'Leadership', 'Innovation', 'Entrepreneurship', 'Human Resources', 'Corporate Governance', 'Marketing', 'Finance', 'Supply Chain', 'Digital Transformation', 'Organisational Change', 'Sustainability'].map((area) => (
              <div key={area} className="rounded-[8px] border border-slate-200 bg-white p-5 text-center transition-all hover:border-[#1E40FF]/30 hover:shadow-md">
                <Target className="mx-auto mb-2 h-5 w-5 text-[#1E40FF]" />
                <p className="font-semibold text-slate-950">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-24">
        <div className="container-premium">
          <SectionHeading eyebrow="LSMT Advantages" title="Why LSMT DBA Stands Out" description="A rigorous, globally recognised doctorate built for executive transformation." variant="dark" />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {[{ icon: '🌐', title: 'Global Alumni Network', desc: '1,000+ graduates across 50+ countries.' }, { icon: '📚', title: 'Digital Library Access', desc: 'Full access to research journals and databases.' }, { icon: '⏰', title: 'Flexible Study Structure', desc: 'Online delivery designed around executive schedules.' }, { icon: '👨‍🏫', title: 'Expert Supervision', desc: 'Supervisors with academic excellence and industry experience.' }, { icon: '💼', title: 'Industry-Relevant Research', desc: 'Investigation of real organisational challenges.' }, { icon: '✈️', title: 'International Exposure', desc: 'Global faculty and international seminars.' }, { icon: '🌍', title: 'Cross-Cultural Insights', desc: 'Curriculum emphasises global challenges.' }, { icon: '💡', title: 'Thought Leadership', desc: 'Publication support and industry positioning.' }].map(({ icon, title, desc }) => (
              <div key={title} className="rounded-[8px] border border-white/10 bg-white/[0.04] p-6">
                <div className="mb-3 text-4xl">{icon}</div>
                <h3 className="mb-2 font-semibold text-white">{title}</h3>
                <p className="text-sm leading-6 text-slate-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading eyebrow="Career Advancement" title="Career Pathways After the DBA" description="Graduates transition to executive and strategic roles leveraging doctoral credentials." />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[{ icon: '👑', role: 'Chief Executive Officer', desc: 'Strategic leadership at the highest level.' }, { icon: '⚙️', role: 'Chief Operating Officer', desc: 'Operational excellence with advanced research backing.' }, { icon: '💰', role: 'Chief Financial Officer', desc: 'Financial leadership with doctoral sophistication.' }, { icon: '📊', role: 'Management Consultant', desc: 'Strategy consulting with doctoral credentials.' }, { icon: '🎯', role: 'Strategy Director', desc: 'Corporate strategy at executive level.' }, { icon: '🔄', role: 'Transformation Director', desc: 'Leading organisational change.' }, { icon: '🏛️', role: 'Board Advisor', desc: 'Board positions and advisory roles.' }, { icon: '🎓', role: 'Faculty Roles', desc: 'University faculty positions globally.' }].map(({ icon, role, desc }) => (
              <div key={role} className="rounded-[8px] border border-slate-200 bg-white p-6 transition-all hover:shadow-lg">
                <div className="mb-3 text-4xl">{icon}</div>
                <h3 className="mb-2 font-semibold text-slate-950">{role}</h3>
                <p className="text-sm leading-5 text-slate-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <SectionHeading eyebrow="Credentials" title="What You Graduate With" description="A comprehensive doctorate package recognised globally for executive advancement." />
          <div className="mx-auto mt-14 max-w-3xl">
            <div className="relative flex flex-col items-center justify-center rounded-[8px] border border-slate-200 bg-white p-6 shadow-lg">
              <div className="relative h-96 w-full overflow-hidden rounded-[8px]">
                <Image src="https://sohhmxayptiosflmlxuu.supabase.co/storage/v1/object/public/brochures/Certificates/LSMT%20DBA.webp" alt="LSMT Doctor of Business Administration Certificate" fill className="object-contain" unoptimized />
              </div>
              <p className="mt-6 text-center text-sm text-slate-500">Official LSMT DBA Certificate</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading eyebrow="Entry Criteria" title="Admission Requirements" description="Designed for accomplished professionals with advanced academic credentials." />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[{ icon: '🎓', title: 'Master\'s Degree Required', desc: 'MBA or Master\'s degree with dissertation in relevant discipline.' }, { icon: '📝', title: 'English Proficiency', desc: 'TOEFL, IELTS or equivalent unless prior education in English.' }, { icon: '💼', title: 'Professional Experience', desc: '5+ years of senior professional experience.' }, { icon: '✍️', title: 'Statement of Purpose', desc: 'Letter outlining motivation for doctoral-level research.' }, { icon: '🔍', title: 'Research Intent', desc: '700-800 word statement on intended research area.' }, { icon: '🏆', title: 'Professional Background', desc: 'Preference for demonstrated leadership and achievement.' }].map(({ icon, title, desc }) => (
              <div key={title} className="rounded-[8px] border border-slate-200 bg-white p-6">
                <div className="mb-3 text-4xl">{icon}</div>
                <h3 className="mb-2 font-semibold text-slate-950">{title}</h3>
                <p className="text-sm leading-6 text-slate-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading eyebrow="Your Partnership" title="AcdyOn's Support Role" description="" align="left" />
              <div className="mt-8 space-y-4 text-slate-600">
                <p>AcdyOn serves as your dedicated partner throughout your LSMT DBA journey, bridging your professional aspirations with academic excellence.</p>
                <p>From initial eligibility assessment through to graduation, we manage coordination, provide research guidance, facilitate university communication, and ensure successful thesis completion.</p>
              </div>
            </div>
            <div className="grid gap-4">
              {['✓ Application & Eligibility Guidance', '✓ Admission Support', '✓ Research Coordination', '✓ University Communication', '✓ Progress Tracking', '✓ Thesis Development', '✓ Viva Preparation', '✓ Student Success Team'].map((item) => (
                <div key={item} className="rounded-[8px] border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-950">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" description="Everything you need to know about the LSMT DBA." />
          <div className="mt-14">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-24">
        <div className="container-premium text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#1E40FF]">LSMT Doctor of Business Administration</p>
          <h2 className="mx-auto max-w-3xl font-display text-4xl leading-tight text-white sm:text-5xl">Lead Business Transformation Through Doctoral-Level Expertise</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">Position yourself as a thought leader and executive authority. Start your doctoral journey today.</p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/book-consultation" className="inline-flex items-center rounded-full bg-[#1E40FF] px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-[#1937dd]">Check Eligibility</Link>
            <Link href="/book-consultation" className="inline-flex items-center rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white transition-all hover:border-white/40 hover:bg-white/5">Book Consultation</Link>
            <Link href="#" className="inline-flex items-center rounded-full border border-[#1E40FF]/30 px-8 py-4 text-sm font-semibold text-[#1E40FF] transition-all hover:border-[#1E40FF]/50 hover:bg-[#1E40FF]/5">Download Brochure</Link>
          </div>
        </div>
      </section>

      <ConsultationNudge />
    </main>
  )
}
