import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Target } from 'lucide-react'
import { SectionHeading } from '@/components/ui/section-heading'
import { ConsultationNudge } from '@/components/sections/consultation-nudge'
import { FAQAccordion } from '@/components/ui/faq-accordion'

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
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#ffffff,#f8fafc_50%,#eef4ff)] pb-16 pt-36">
        <div className="absolute right-[-10%] top-20 h-80 w-80 rounded-full bg-[#1E40FF]/15 blur-3xl" />
        <div className="container-premium relative">
          <div className="mb-8 flex items-center gap-4">
            <div className="relative h-16 w-40 overflow-hidden rounded-[4px]">
              <Image src={LOGO} alt="EIMT Logo" fill className="object-contain object-left" unoptimized />
            </div>
            <span className="text-2xl">🇨🇭</span>
          </div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#1E40FF]">European Institute of Management and Technology</p>
          <h1 className="max-w-4xl font-display text-5xl leading-tight text-slate-950 sm:text-6xl">Doctor of Business Administration (DBA)</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">Develop research capability, strategic expertise, and innovation leadership to drive digital transformation and sustainable growth in a rapidly evolving global business environment.</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/book-consultation" className="inline-flex items-center justify-center rounded-full bg-[#1E40FF] px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-[#1937dd]">Check Eligibility</Link>
            <Link href="#" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-4 text-sm font-semibold text-slate-950 transition-all hover:shadow-md">Download Brochure</Link>
            <Link href="/book-consultation" className="inline-flex items-center justify-center rounded-full border border-[#1E40FF] px-8 py-4 text-sm font-semibold text-[#1E40FF] transition-all hover:bg-[#1E40FF]/5">Book Consultation</Link>
          </div>
          <div className="mt-14 grid gap-4 rounded-[8px] border border-slate-200 bg-white p-8 sm:grid-cols-2 md:grid-cols-4">
            {[{ label: 'Duration', value: '3 Years' }, { label: 'ECTS', value: '180' }, { label: 'Delivery', value: '100% Online' }, { label: 'Learning Hours', value: '4,500' }].map(({ label, value }) => (
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
          <SectionHeading eyebrow="EIMT Advantages" title="Why Choose EIMT DBA" description="Innovation-focused doctoral education for technology-aware business leaders." />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[{ icon: '💡', title: 'Innovation-Focused Curriculum', desc: 'Research emphasising emerging business models, digital disruption, and transformational leadership.' }, { icon: '⚡', title: 'Technology-Aware Leadership', desc: 'Master digital transformation, technology strategy, and data-driven decision-making.' }, { icon: '🔬', title: 'Research Excellence', desc: 'Rigorous applied research contributing original insights to contemporary business challenges.' }, { icon: '🌍', title: 'Global Professional Network', desc: '1,000+ alumni across 80+ countries providing ongoing collaboration and thought leadership.' }, { icon: '📱', title: 'Flexible Online Learning', desc: '100% online, designed for busy executives balancing doctorate with professional roles.' }, { icon: '🎯', title: 'Strategic Decision Making', desc: 'Develop advanced frameworks for navigating complexity, innovation, and organisational transformation.' }].map(({ icon, title, desc }) => (
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
              <SectionHeading eyebrow="Understanding the Modern DBA" title="Applied Innovation Research For Executive Impact" description="" align="left" />
              <div className="mt-8 space-y-6 text-slate-600">
                <p>A Doctor of Business Administration (DBA) is a research-intensive doctoral qualification for practising executives seeking advanced academic credentials and innovation leadership. Unlike an MBA (1-2 years, management skills), the DBA emphasises original research and scholarly contribution over 3+ years.</p>
                <p>The EIMT DBA uniquely bridges academic rigour with real-world innovation. You investigate contemporary business challenges—digital transformation, emerging markets, organisational change—developing evidence-based solutions that drive strategic transformation in your industry.</p>
              </div>
            </div>
            <div className="grid gap-4">
              {[{ label: 'DBA vs MBA', comparison: 'DBA: Research-focused doctorate, 3+ years. MBA: Management fundamentals, 1-2 years.' }, { label: 'DBA vs PhD', comparison: 'DBA: Applied innovation research. PhD: Theoretical academic focus.' }, { label: 'EIMT Focus', comparison: 'Technology-aware leadership, digital transformation, evidence-based strategy.' }, { label: 'Outcome', comparison: 'Doctoral degree + innovation expertise + executive advancement + thought leadership.' }].map(({ label, comparison }) => (
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
          <SectionHeading eyebrow="Ideal Candidates" title="Who This Programme Is Designed For" description="Forward-thinking professionals seeking doctoral credentials and strategic impact." />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5">
            {[{ icon: '👔', title: 'Business Leaders' }, { icon: '🚀', title: 'Entrepreneurs' }, { icon: '💼', title: 'Senior Managers' }, { icon: '🏢', title: 'Directors' }, { icon: '💡', title: 'Innovation Leaders' }, { icon: '🔄', title: 'Digital Transformation Officers' }, { icon: '📊', title: 'Consultants' }, { icon: '🏛️', title: 'Policy Makers' }, { icon: '👨‍💼', title: 'Family Business Owners' }, { icon: '⚡', title: 'C-Suite Aspirants' }].map(({ icon, title }) => (
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
          <SectionHeading eyebrow="3-Year Structure" title="The EIMT Learning Journey" description="Progressive pathway from research foundations through doctoral thesis completion." />
          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {[{ year: 'Year 1', title: 'Research Foundations', color: '#1E40FF', modules: ['Strategic Financial Management', 'Entrepreneurship & Innovation', 'Strategic Marketing', 'Globalisation & Corporate Governance', 'Leadership Development', 'Research Capability'] }, { year: 'Year 2', title: 'Strategic Development', color: '#22D3EE', modules: ['Advanced Research Design', 'Research Methodologies', 'Applied Business Investigation', 'Technology & Innovation Strategy', 'Organisational Transformation'] }, { year: 'Year 3', title: 'Doctoral Research', color: '#D4AF37', modules: ['Original Doctoral Research', 'Thesis Development', 'Research Contribution', 'Scholarly Publication', 'Viva Preparation'] }].map(({ year, title, color, modules }) => (
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
          <SectionHeading eyebrow="Research Areas" title="DBA Research Specialisations" description="Choose a research focus aligned with your innovation goals and expertise." />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {['Innovation Management', 'Strategic Leadership', 'Entrepreneurship', 'Corporate Governance', 'Digital Transformation', 'Business Strategy', 'Marketing', 'Finance', 'Human Capital', 'Global Business', 'Sustainability', 'Organisational Change'].map((area) => (
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
          <SectionHeading eyebrow="Programme Outcomes" title="What You Will Achieve" description="Master-level capabilities and doctoral-level expertise upon completion." variant="dark" />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {[{ icon: '🎯', title: 'Lead Transformation Initiatives', desc: 'Design and execute organisational change programmes with strategic rigour.' }, { icon: '📈', title: 'Develop Strategic Growth Frameworks', desc: 'Create evidence-based strategies addressing complex business challenges.' }, { icon: '🔬', title: 'Conduct Doctoral-Level Research', desc: 'Execute rigorous research contributing original insights to your field.' }, { icon: '💡', title: 'Drive Innovation & Disruption', desc: 'Champion innovation strategies that transform business models and markets.' }, { icon: '📊', title: 'Influence Organisational Policy', desc: 'Shape strategic direction and executive decision-making at the highest level.' }, { icon: '✍️', title: 'Present & Publish Research', desc: 'Articulate evidence-based recommendations to academic and professional audiences.' }, { icon: '🌍', title: 'Lead Global Initiatives', desc: 'Navigate international business complexity with strategic expertise.' }, { icon: '⚡', title: 'Build Executive Credibility', desc: 'Establish thought leadership and authority in your industry.' }, { icon: '🏆', title: 'Advance Career Trajectory', desc: 'Qualify for C-suite roles, consulting positions, and board advisorships.' }, { icon: '💼', title: 'Create Lasting Organisational Impact', desc: 'Contribute research-backed solutions creating sustainable competitive advantage.' }].map(({ icon, title, desc }) => (
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
          <SectionHeading eyebrow="EIMT Difference" title="Why EIMT DBA Stands Out" description="Innovation leadership for modern global executives." />
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6 text-slate-600">
              <div>
                <h3 className="mb-2 font-semibold text-slate-950">Technology-Aware Leadership</h3>
                <p>Master digital transformation, AI-driven decision-making, and emerging technology management essential for modern executive success.</p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-slate-950">Global Professional Cohort</h3>
                <p>Study alongside executives from 80+ countries, gaining international perspectives and building a truly global professional network.</p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-slate-950">Research Linked to Industry Challenges</h3>
                <p>Your doctoral research directly addresses real business problems, making your degree immediately applicable and relevant.</p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-slate-950">Forward-Focused Curriculum</h3>
                <p>Study future-focused topics: digital disruption, sustainability, global markets, and innovation ecosystems shaping tomorrow's business landscape.</p>
              </div>
            </div>
            <div className="space-y-4">
              {[{ label: 'Innovation-Centric', value: 'Curriculum emphasises digital transformation and emerging business models' }, { label: 'Global Delivery', value: 'Online platform uniting international professionals and thought leaders' }, { label: 'Flexible Structure', value: 'Study at your pace while maintaining executive responsibilities' }, { label: 'Executive Relevant', value: 'Applied research directly addressing strategic business challenges' }, { label: 'Modern Positioning', value: 'Doctoral credentials for the digital era and transformation economy' }].map(({ label, value }) => (
                <div key={label} className="rounded-[8px] border border-slate-200 bg-[#F8FAFC] p-5">
                  <p className="text-xs font-bold uppercase tracking-wide text-[#1E40FF]">{label}</p>
                  <p className="mt-2 text-sm text-slate-600">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <SectionHeading eyebrow="Credentials" title="What You Graduate With" description="A comprehensive doctoral package recognised globally for executive advancement." />
          <div className="mx-auto mt-14 max-w-3xl">
            <div className="relative flex flex-col items-center justify-center rounded-[8px] border border-slate-200 bg-white p-6 shadow-lg">
              <div className="relative h-96 w-full overflow-hidden rounded-[8px]">
                <Image src="https://sohhmxayptiosflmlxuu.supabase.co/storage/v1/object/public/brochures/Certificates/EIMT%20DBA.webp" alt="EIMT Doctor of Business Administration Certificate" fill className="object-contain" unoptimized />
              </div>
              <p className="mt-6 text-center text-sm text-slate-500">Official EIMT DBA Certificate</p>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {['Official DBA Degree', 'Academic Transcript', 'Research Supervision Record', 'Doctoral Dissertation', 'Alumni Status', 'Graduation Certification'].map((item) => (
                <div key={item} className="rounded-[8px] border border-slate-200 bg-white p-4 text-center">
                  <p className="text-sm font-semibold text-slate-950">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading eyebrow="Career Pathways" title="Career Impact After the DBA" description="Graduates advance to senior leadership roles leveraging doctoral credentials and innovation expertise." />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {[{ icon: '👑', role: 'Chief Executive Officer' }, { icon: '⚡', role: 'Chief Innovation Officer' }, { icon: '🎯', role: 'Strategy Director' }, { icon: '🔄', role: 'Business Transformation Leader' }, { icon: '📊', role: 'Management Consultant' }, { icon: '🏆', role: 'Board Advisor' }, { icon: '🎓', role: 'University Faculty' }, { icon: '💼', role: 'Research Consultant' }, { icon: '🚀', role: 'Entrepreneur' }, { icon: '⚙️', role: 'Corporate Executive' }].map(({ icon, role }) => (
              <div key={role} className="rounded-[8px] border border-slate-200 bg-white p-6 text-center transition-all hover:shadow-lg">
                <div className="mb-3 text-4xl">{icon}</div>
                <p className="font-semibold text-slate-950">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <SectionHeading eyebrow="Entry Criteria" title="Eligibility Requirements" description="Designed for accomplished professionals with advanced academic credentials." />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[{ icon: '🎓', title: 'Master\'s Degree Required', desc: 'Master\'s degree or EQF Level 7 qualification in a relevant discipline.' }, { icon: '📝', title: 'English Language Proficiency', desc: 'TOEFL, IELTS, or equivalent unless prior education conducted in English.' }, { icon: '💼', title: 'Professional Experience', desc: '5+ years of senior professional experience preferred.' }, { icon: '🔍', title: 'Research Readiness', desc: 'Capacity to conduct doctoral-level research in your chosen area.' }, { icon: '📊', title: 'Academic Background', desc: 'Strong foundation in business or related discipline.' }, { icon: '🌟', title: 'Professional Achievement', desc: 'Demonstrated leadership, innovation, or strategic impact in your career.' }].map(({ icon, title, desc }) => (
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
                <p>AcdyOn partners with you throughout your EIMT DBA journey, bridging your professional aspirations with academic excellence and innovation research.</p>
                <p>From initial eligibility assessment through to graduation, we provide coordination, research guidance, university communication, and dedicated student support ensuring your doctoral success.</p>
              </div>
            </div>
            <div className="grid gap-4">
              {['✓ Application & Eligibility Guidance', '✓ Documentation Review', '✓ Admission Support', '✓ Research Coordination', '✓ Progress Tracking', '✓ University Communication', '✓ Thesis Development Support', '✓ Dedicated Success Team'].map((item) => (
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
          <SectionHeading eyebrow="Success Stories" title="EIMT DBA Graduate Outcomes" description="Professionals advancing through innovation leadership and doctoral expertise." />
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[{ name: 'European Technology Director', role: 'Led digital transformation across 12 countries', outcome: 'Promoted to Chief Innovation Officer; research on emerging market disruption now informs corporate strategy.' }, { name: 'Global Consulting Partner', role: 'Advanced business strategy consultant', outcome: 'Established consultancy specialising in digital transformation; doctoral credentials elevated client positioning and thought leadership.' }, { name: 'Family Business Strategic Leader', role: 'Transformed legacy manufacturing company', outcome: 'Implemented innovation framework from DBA research; scaled international operations while maintaining family values.' }].map(({ name, role, outcome }) => (
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
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" description="Everything you need to know about the EIMT DBA." />
          <div className="mt-14">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-24">
        <div className="container-premium text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#1E40FF]">EIMT Doctor of Business Administration</p>
          <h2 className="mx-auto max-w-3xl font-display text-4xl leading-tight text-white sm:text-5xl">Lead Innovation Through Doctoral-Level Business Expertise</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">Master technology-aware leadership, digital transformation, and strategic innovation. Position yourself as a thought leader shaping the future of business.</p>
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
