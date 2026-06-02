import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Target } from 'lucide-react'
import { SectionHeading } from '@/components/ui/section-heading'
import { ConsultationNudge } from '@/components/sections/consultation-nudge'
import { FAQAccordion } from '@/components/ui/faq-accordion'

export const metadata: Metadata = {
  title: 'Doctor of Business Administration (DBA) | Birchwood University | AcdyOn',
  description: 'Accelerated doctoral degree for executives. Birchwood DBA — a 2-year online programme combining applied research, technology leadership, and executive advancement.',
}

const LOGO = 'https://sohhmxayptiosflmlxuu.supabase.co/storage/v1/object/public/brochures/Birchwood-University-520-x-330.jpg'

const faqs = [
  { q: 'How long does the Birchwood DBA take to complete?', a: 'The Birchwood DBA is designed as an accelerated 2-year programme, making it one of the fastest doctoral degrees available. The focused curriculum and full-time research emphasis enable completion in this timeframe for committed professionals.' },
  { q: 'What is the difference between a DBA and an MBA?', a: 'An MBA develops general management skills over 1-2 years. The Birchwood DBA is research-intensive and doctoral-level, emphasising original research contribution, advanced analytics, and strategic leadership over 2 years. DBAs are positioned for C-suite advancement.' },
  { q: 'How does a DBA differ from a PhD?', a: 'The Birchwood DBA focuses on applied business research solving real organisational challenges. A PhD emphasises theoretical research for academic careers. The DBA bridges executive practice with doctoral-level rigor; PhDs emphasise pure academic advancement.' },
  { q: 'Is the Birchwood DBA fully online?', a: 'Yes, the programme is 100% online with no campus visits required. This flexibility allows executives to maintain their leadership roles while completing doctoral-level research and advanced business coursework.' },
  { q: 'What are the entry requirements?', a: 'Applicants need a Master\'s degree and Bachelor\'s degree in business or a related field with minimum 3.0 GPA, English language proficiency, and relevant professional work experience. Preference for candidates with senior leadership experience.' },
  { q: 'Can I work full-time while pursuing the Birchwood DBA?', a: 'Yes. The programme is specifically designed for working professionals. The flexible online structure and accelerated timeline allow you to maintain your executive responsibilities while advancing your doctorate.' },
  { q: 'What is the dissertation requirement?', a: 'You complete original doctoral research (dissertation) structured in phases: proposal development, data collection and analysis, writing, and defence. Faculty mentors guide your research throughout to ensure academic rigor and business relevance.' },
  { q: 'Are there traditional exams in the programme?', a: 'Assessment focuses on coursework, applied projects, research assignments, and your doctoral dissertation. The emphasis is on demonstrated capability in business research and strategic application rather than written examinations.' },
  { q: 'What technology/analytics focus does Birchwood emphasise?', a: 'The curriculum integrates business analytics, data science, technology management, cybersecurity awareness, predictive analytics, and digital transformation. These are embedded across courses and your dissertation research.' },
  { q: 'How is research supervision structured?', a: 'Each doctoral candidate is assigned an experienced faculty mentor who provides regular guidance through online meetings. Supervisors help refine research questions, methodology, analysis, and ensure your work contributes meaningfully to business knowledge.' },
  { q: 'How is the Birchwood DBA recognised internationally?', a: 'Birchwood University is a US-accredited institution offering globally recognised degrees. The DBA is positioned for executive advancement, consulting, senior leadership roles, and academic appointments worldwide.' },
  { q: 'What are typical career outcomes after the Birchwood DBA?', a: 'Graduates advance to CEO, COO, CFO, Chief Innovation Officer, Strategy Consultant, Board Advisory roles, or academic faculty positions. The credentials position you for senior leadership and transformational influence.' },
  { q: 'Can international students enrol in the Birchwood DBA?', a: 'Yes. The 100% online format welcomes international professionals. English language proficiency is required, and all materials and instruction are in English.' },
  { q: 'What is the cost of the Birchwood DBA?', a: 'Programme costs vary. Contact AcdyOn for detailed tuition information, payment plans, and potential scholarship opportunities that may be available.' },
  { q: 'What makes Birchwood\'s 2-year DBA accelerated?', a: 'The focused curriculum, full-time research commitment, and structured pathway allow doctoral completion in 2 years rather than traditional 3-5 year programmes. This accelerated timeline suits ambitious executives seeking rapid advancement.' },
  { q: 'Can I choose my research topic freely?', a: 'Yes. Your dissertation research must address real business challenges aligned with your professional context and expertise. Faculty advisors help ensure your topic is academically rigorous and professionally relevant.' },
  { q: 'What support does AcdyOn provide?', a: 'AcdyOn provides admission guidance, application support, eligibility assessment, documentation assistance, progress monitoring, and student success coordination throughout your DBA journey.' },
  { q: 'How is the dissertation defence structured?', a: 'The defence is a formal presentation where you defend your original research before a panel of examiners. You discuss methodology, findings, contributions, and answer expert questions demonstrating doctoral-level mastery.' },
  { q: 'Is the programme flexible for busy executives?', a: 'Absolutely. With 100% online delivery, self-paced coursework access, and asynchronous learning options, the programme accommodates full-time professional commitments.' },
  { q: 'What technology/software skills are needed?', a: 'Basic computer literacy and internet access are required. The programme teaches business analytics tools, data visualisation software, and research management platforms. Prior technical expertise is not necessary.' },
]

export default function BirchwoodDBAPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#ffffff,#f8fafc_50%,#eef4ff)] pb-16 pt-36">
        <div className="absolute right-[-10%] top-20 h-80 w-80 rounded-full bg-[#1E40FF]/15 blur-3xl" />
        <div className="container-premium relative">
          <div className="mb-8 flex items-center gap-4">
            <div className="relative h-16 w-40 overflow-hidden rounded-[4px]">
              <Image src={LOGO} alt="Birchwood University Logo" fill className="object-contain object-left" unoptimized />
            </div>
            <span className="text-2xl">🇺🇸</span>
          </div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#1E40FF]">Birchwood University</p>
          <h1 className="max-w-4xl font-display text-5xl leading-tight text-slate-950 sm:text-6xl">Doctor of Business Administration (DBA)</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">A flexible online doctoral programme designed for senior professionals seeking advanced leadership capability, applied research expertise and strategic influence in a rapidly evolving business landscape.</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/book-consultation" className="inline-flex items-center justify-center rounded-full bg-[#1E40FF] px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-[#1937dd]">Check Eligibility</Link>
            <Link href="#" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-4 text-sm font-semibold text-slate-950 transition-all hover:shadow-md">Download Brochure</Link>
            <Link href="/book-consultation" className="inline-flex items-center justify-center rounded-full border border-[#1E40FF] px-8 py-4 text-sm font-semibold text-[#1E40FF] transition-all hover:bg-[#1E40FF]/5">Book Consultation</Link>
          </div>
          <div className="mt-14 grid gap-4 rounded-[8px] border border-slate-200 bg-white p-8 sm:grid-cols-2 md:grid-cols-6">
            {[{ label: 'Duration', value: '2 Years' }, { label: 'Delivery', value: '100% Online' }, { label: 'Format', value: 'Flexible' }, { label: 'Executive Cohort', value: 'Global' }, { label: 'Research-Led', value: 'Applied' }, { label: 'Technology Focus', value: 'Advanced' }].map(({ label, value }) => (
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
          <SectionHeading eyebrow="Birchwood Advantages" title="Why Choose Birchwood DBA" description="Accelerated executive doctorate combining research excellence with practical business impact." />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[{ icon: '⚡', title: 'Accelerated 2-Year Completion', desc: 'Fast-track doctoral achievement without compromising academic rigor. Complete your doctorate while maintaining executive responsibilities.' }, { icon: '👔', title: 'Executive-Focused Learning', desc: 'Curriculum designed specifically for senior professionals seeking strategic advancement and organisational impact.' }, { icon: '💻', title: 'Technology & Innovation Leadership', desc: 'Deep focus on business analytics, digital transformation, and technology management for modern executives.' }, { icon: '🔬', title: 'Applied Business Research', desc: 'Dissertation research directly addresses real challenges within your organisation or industry.' }, { icon: '📱', title: 'Flexible Online Delivery', desc: '100% online, asynchronous learning allows you to progress at your pace without disrupting your career.' }, { icon: '🌍', title: 'Global Professional Network', desc: '1,000+ alumni executives providing ongoing connections, collaboration, and professional advancement opportunities.' }].map(({ icon, title, desc }) => (
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
              <SectionHeading eyebrow="Understanding the Executive DBA" title="Applied Research Leadership For Enterprise Impact" description="" align="left" />
              <div className="mt-8 space-y-6 text-slate-600">
                <p>A Doctor of Business Administration (DBA) is a research-intensive doctoral qualification for practising executives. The Birchwood DBA distinguishes itself through accelerated 2-year completion and focus on technology leadership, business analytics, and strategic decision-making.</p>
                <p>Unlike traditional PhDs that emphasise pure theory, the Birchwood DBA bridges academic scholarship with real-world application. Your dissertation research investigates genuine business challenges—digital transformation, analytics implementation, technology adoption—yielding evidence-based solutions you can immediately apply in your organisation.</p>
              </div>
            </div>
            <div className="grid gap-4">
              {[{ label: 'DBA vs MBA', comparison: 'DBA: Research doctorate, 2 years, applied research. MBA: Management degree, 1-2 years, foundational skills.' }, { label: 'DBA vs PhD', comparison: 'DBA: Business application focus. PhD: Pure academic research and theory.' }, { label: 'Birchwood Strength', comparison: 'Accelerated timeline, technology integration, analytics focus, executive positioning.' }, { label: 'Outcome', comparison: 'Doctoral credential + research expertise + strategic influence + career acceleration.' }].map(({ label, comparison }) => (
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
          <SectionHeading eyebrow="Ideal Candidates" title="Who This Programme Is Designed For" description="Ambitious professionals ready to advance through doctoral-level expertise and research leadership." />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5">
            {[{ icon: '👑', title: 'Senior Executives' }, { icon: '💼', title: 'Business Owners' }, { icon: '🚀', title: 'Entrepreneurs' }, { icon: '🏢', title: 'Directors' }, { icon: '📊', title: 'Consultants' }, { icon: '⚡', title: 'Technology Leaders' }, { icon: '🎯', title: 'Strategy Professionals' }, { icon: '⚙️', title: 'Operations Leaders' }, { icon: '🔄', title: 'Transformation Managers' }, { icon: '🔝', title: 'Future C-Suite Leaders' }].map(({ icon, title }) => (
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
          <SectionHeading eyebrow="Doctoral Roadmap" title="Your Birchwood Learning Journey" description="Accelerated 2-year pathway from foundations through doctoral research completion." />
          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {[{ phase: 'Foundation Phase', color: '#1E40FF', modules: ['Business Leadership Essentials', 'Business Analytics & Data Management', 'Technology Management Foundations', 'Research Design & Methodology', 'Strategic Leadership Principles'] }, { phase: 'Advanced Phase', color: '#22D3EE', modules: ['Innovation & Transformation Management', 'Predictive Analytics & Risk Analysis', 'Global Project Management', 'Cybersecurity & Digital Risk', 'Data Science Applications'] }, { phase: 'Doctoral Phase', color: '#D4AF37', modules: ['Dissertation Development I', 'Research Analysis & Writing', 'Dissertation Development II', 'Doctoral Defence Preparation', 'Research Defence'] }].map(({ phase, color, modules }) => (
              <div key={phase} className="rounded-[8px] border border-slate-200 bg-white p-8" style={{ borderTopColor: color, borderTopWidth: 4 }}>
                <p className="text-xs font-bold uppercase tracking-wide" style={{ color }}>{phase}</p>
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
          <SectionHeading eyebrow="Curriculum" title="Programme Modules & Coursework" description="Advanced business and technology curriculum designed for executive capability development." />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {['Managerial Valuation', 'Resource Economics', 'Digital Marketing Strategy', 'Business Analytics & Data', 'Managerial Accounting', 'Global Technology Management', 'Research Design & Analysis', 'International Project Management', 'Innovative Technologies I', 'Innovative Technologies II', 'Predictive & Risk Analysis', 'Data Science Analytics', 'Tech Transformation Leadership', 'Global Cybersecurity', 'Strategic Leadership', 'Dissertation Development'].map((module) => (
              <div key={module} className="rounded-[8px] border border-slate-200 bg-white p-5 text-center transition-all hover:border-[#1E40FF]/30 hover:shadow-md">
                <p className="font-semibold text-slate-950 text-sm">{module}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-24">
        <div className="container-premium">
          <SectionHeading eyebrow="Research & Technology" title="Core Focus Areas" description="Research specialisations emphasising technology, analytics, and strategic business application." variant="dark" />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {[{ icon: '💻', title: 'Technology Management' }, { icon: '🔄', title: 'Digital Transformation' }, { icon: '📊', title: 'Business Analytics' }, { icon: '💡', title: 'Innovation Leadership' }, { icon: '🔐', title: 'Cybersecurity' }, { icon: '🎯', title: 'Strategic Decision-Making' }, { icon: '📈', title: 'Data Science' }, { icon: '⚠️', title: 'Risk Analysis' }, { icon: '🌍', title: 'Global Business' }, { icon: '🔬', title: 'Applied Research' }].map(({ icon, title }) => (
              <div key={title} className="rounded-[8px] border border-white/10 bg-white/[0.04] p-6 text-center">
                <div className="mb-3 text-4xl">{icon}</div>
                <h3 className="mb-2 font-semibold text-white text-sm">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading eyebrow="Programme Outcomes" title="What You Will Master" description="Executive capabilities and doctoral-level expertise upon programme completion." />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {[{ icon: '🎯', title: 'Lead Organisational Transformation', desc: 'Design and execute enterprise-wide change initiatives with research-backed strategies.' }, { icon: '🔬', title: 'Apply Doctoral-Level Research', desc: 'Conduct rigorous business research contributing original insights to your field.' }, { icon: '💡', title: 'Drive Innovation Initiatives', desc: 'Lead technology adoption and innovation projects within your organisation.' }, { icon: '📊', title: 'Leverage Business Analytics', desc: 'Use advanced data analysis for strategic decision-making and competitive advantage.' }, { icon: '⚡', title: 'Lead Technology Adoption', desc: 'Champion digital transformation and technology integration at enterprise scale.' }, { icon: '📈', title: 'Make Evidence-Based Decisions', desc: 'Apply research methodology and analytics to executive-level strategic choices.' }, { icon: '🏆', title: 'Influence Executive Strategy', desc: 'Shape organisational direction through doctoral research insights and recommendations.' }, { icon: '🔄', title: 'Manage Complex Change', desc: 'Navigate transformation complexity with research-informed change management expertise.' }, { icon: '💼', title: 'Build Research-Backed Solutions', desc: 'Develop organisational solutions grounded in rigorous analysis and evidence.' }, { icon: '🌐', title: 'Lead Global Organisations', desc: 'Manage distributed, international teams with advanced leadership capabilities.' }].map(({ icon, title, desc }) => (
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
          <SectionHeading eyebrow="Birchwood Distinction" title="Why Professionals Choose Birchwood" description="The accelerated executive doctorate for modern business leaders." />
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6 text-slate-600">
              <div>
                <h3 className="mb-2 font-semibold text-slate-950">2-Year Completion Pathway</h3>
                <p>Earn your doctorate quickly without stepping back from your career. The structured, focused curriculum enables completion in 2 years rather than traditional 3-5 year programmes.</p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-slate-950">Research-Driven Leadership</h3>
                <p>Your dissertation tackles real business challenges. Apply research methodology and advanced analytics to problems within your organisation, creating immediate professional value.</p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-slate-950">Technology Integration</h3>
                <p>Business analytics, data science, digital transformation, and cybersecurity are woven throughout the curriculum—essential capabilities for modern executives.</p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-slate-950">Applied Learning Philosophy</h3>
                <p>Every concept connects to real organisational challenges. Your research, projects, and dissertation directly support your professional goals and business impact.</p>
              </div>
            </div>
            <div className="space-y-4">
              {[{ label: 'Executive Focused', value: 'Curriculum designed specifically for senior professionals and business leaders' }, { label: 'Accelerated Timeline', value: '2-year fast-track completion without sacrificing academic quality' }, { label: 'Technology Heavy', value: 'Analytics, data science, and digital transformation integrated throughout' }, { label: 'Research Applied', value: 'Dissertation directly addresses challenges in your organisation' }, { label: 'Flexible Online', value: '100% online with asynchronous access enabling career continuity' }].map(({ label, value }) => (
                <div key={label} className="rounded-[8px] border border-slate-200 bg-white p-5">
                  <p className="text-xs font-bold uppercase tracking-wide text-[#1E40FF]">{label}</p>
                  <p className="mt-2 text-sm text-slate-600">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading eyebrow="Credentials" title="Your Doctoral Achievement" description="A comprehensive doctorate package recognised globally for executive advancement." />
          <div className="mx-auto mt-14 max-w-3xl">
            <div className="relative flex flex-col items-center justify-center rounded-[8px] border border-slate-200 bg-white p-6 shadow-lg">
              <div className="relative h-96 w-full overflow-hidden rounded-[8px]">
                <Image src="https://sohhmxayptiosflmlxuu.supabase.co/storage/v1/object/public/brochures/Certificates/Birchwood%20DBA.webp" alt="Birchwood Doctor of Business Administration Certificate" fill className="object-contain" unoptimized />
              </div>
              <p className="mt-6 text-center text-sm text-slate-500">Official Birchwood University DBA Certificate</p>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {['Doctor of Business Administration Degree', 'Academic Transcript', 'Dissertation Completion Record', 'Doctoral Research Documentation', 'Alumni Membership', 'Graduation Certification'].map((item) => (
                <div key={item} className="rounded-[8px] border border-slate-200 bg-white p-4 text-center">
                  <p className="text-sm font-semibold text-slate-950">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-24">
        <div className="container-premium">
          <SectionHeading eyebrow="Career Advancement" title="Leadership Pathways After the DBA" description="Graduates transition to executive and strategic roles leveraging doctoral credentials." variant="dark" />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {[{ icon: '👑', role: 'Chief Executive Officer' }, { icon: '⚙️', role: 'Chief Operating Officer' }, { icon: '💰', role: 'Chief Financial Officer' }, { icon: '💼', role: 'Business Consultant' }, { icon: '📊', role: 'Strategic Advisor' }, { icon: '💡', role: 'Director of Innovation' }, { icon: '🔄', role: 'Transformation Leader' }, { icon: '🎓', role: 'Academic Faculty' }, { icon: '📈', role: 'Business Researcher' }, { icon: '🚀', role: 'Entrepreneur' }].map(({ icon, role }) => (
              <div key={role} className="rounded-[8px] border border-white/10 bg-white/[0.04] p-6 text-center">
                <div className="mb-3 text-4xl">{icon}</div>
                <p className="font-semibold text-white text-sm">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <SectionHeading eyebrow="Entry Criteria" title="Eligibility Requirements" description="Designed for accomplished professionals with relevant business credentials and experience." />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[{ icon: '🎓', title: 'Master\'s Degree', desc: 'MBA or Master\'s degree in business, management, or related field.' }, { icon: '🎯', title: 'Bachelor\'s Degree', desc: 'Four-year undergraduate degree from a regionally accredited institution.' }, { icon: '📈', title: 'Academic Performance', desc: 'Minimum 3.0 GPA on prior academic work.' }, { icon: '💼', title: 'Professional Experience', desc: 'Demonstrated experience in a for-profit, non-profit, government, or NGO setting.' }, { icon: '📝', title: 'Leadership Background', desc: 'Evidence of leadership exposure or managerial experience.' }, { icon: '📊', title: 'Research Readiness', desc: 'Capacity and interest in conducting business research.' }].map(({ icon, title, desc }) => (
              <div key={title} className="rounded-[8px] border border-slate-200 bg-white p-6">
                <div className="mb-3 text-4xl">{icon}</div>
                <h3 className="mb-2 font-semibold text-slate-950">{title}</h3>
                <p className="text-sm leading-6 text-slate-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container-premium">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading eyebrow="Your Partnership" title="AcdyOn's Support Role" description="" align="left" />
              <div className="mt-8 space-y-4 text-slate-600">
                <p>AcdyOn partners with you throughout your Birchwood DBA journey, bridging your professional aspirations with doctoral-level academic excellence.</p>
                <p>From initial eligibility assessment through to graduation, we provide comprehensive guidance, application support, documentation assistance, and dedicated student coordination ensuring your doctoral success and career advancement.</p>
              </div>
            </div>
            <div className="grid gap-4">
              {['✓ Admissions Guidance & Support', '✓ Eligibility Assessment', '✓ Application Review', '✓ Documentation Assistance', '✓ Academic Journey Support', '✓ Research Guidance', '✓ Progress Monitoring', '✓ Student Success Team'].map((item) => (
                <div key={item} className="rounded-[8px] border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-950">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <SectionHeading eyebrow="Success Stories" title="Birchwood DBA Graduate Outcomes" description="Professionals advancing through accelerated doctoral achievement and research leadership." />
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[{ name: 'Executive Advancement Professional', role: 'Senior Director progressing to VP', outcome: 'Completed DBA in 2 years while managing multiple teams. Dissertation on digital transformation implementation directly applied to current organisation. Promoted to Chief Innovation Officer within 12 months of graduation.' }, { name: 'Technology-Driven Entrepreneur', role: 'Built analytics-focused consultancy', outcome: 'DBA research on predictive analytics and business intelligence became foundation for new consulting practice. Advanced credentials elevated client positioning significantly.' }, { name: 'Corporate Transformation Leader', role: 'Led enterprise-wide change', outcome: 'Applied dissertation research on organisational change management to lead company-wide digital transformation. Research-backed methodology improved adoption and impact across departments.' }].map(({ name, role, outcome }) => (
              <div key={name} className="rounded-[8px] border border-slate-200 bg-white p-8">
                <div className="mb-4 h-12 w-12 rounded-full bg-[#1E40FF]/10 flex items-center justify-center">
                  <span className="text-xl font-bold text-[#1E40FF]">"</span>
                </div>
                <p className="mb-6 text-sm leading-6 text-slate-600">{outcome}</p>
                <div className="border-t border-slate-100 pt-4">
                  <p className="font-semibold text-slate-950">{name}</p>
                  <p className="text-xs text-slate-500">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" description="Everything you need to know about the Birchwood DBA." />
          <div className="mt-14">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-24">
        <div className="container-premium text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#1E40FF]">Birchwood Doctor of Business Administration</p>
          <h2 className="mx-auto max-w-3xl font-display text-4xl leading-tight text-white sm:text-5xl">Earn a Doctoral Qualification Built for Modern Business Leaders</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">Advance your leadership influence, research capability and strategic impact through Birchwood University's accelerated online DBA.</p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/book-consultation" className="inline-flex items-center rounded-full bg-[#1E40FF] px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-[#1937dd]">Check Eligibility</Link>
            <Link href="#" className="inline-flex items-center rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white transition-all hover:border-white/40 hover:bg-white/5">Download Brochure</Link>
            <Link href="/book-consultation" className="inline-flex items-center rounded-full border border-[#1E40FF]/30 px-8 py-4 text-sm font-semibold text-[#1E40FF] transition-all hover:border-[#1E40FF]/50 hover:bg-[#1E40FF]/5">Book Consultation</Link>
          </div>
        </div>
      </section>

      <ConsultationNudge />
    </main>
  )
}
