import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, Award, Users, BookOpen, Globe2, Target, Zap, Users2, UserRound, Rocket, BarChart3, Briefcase, GraduationCap, Landmark, Handshake, FileText, MapPin } from 'lucide-react'
import { SectionHeading } from '@/components/ui/section-heading'
import { ReadMoreText } from '@/components/ui/read-more-text'
import { BrochureDownloadButton } from '@/components/forms/brochure-download-button'
import { RecognitionBadge } from '@/components/cards/recognition-badge'
import { PartnershipCard } from '@/components/cards/partnership-card'
import { TestimonialCard } from '@/components/cards/testimonial-card'
import { DataTabs } from '@/components/ui/data-tabs'

export const metadata: Metadata = {
  title: 'Doctor of Business Administration (DBA) — Kennedy University | AcdyOn',
  description:
    "Advance your executive career with Kennedy University's globally recognized DBA programme. Research-led doctoral education for experienced professionals.",
}

export default function KennedyDBAPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#ffffff,#f8fafc_50%,#eef4ff)] dark:bg-[linear-gradient(135deg,#0a1120,#0f172a_50%,#0b1330)] pb-20 pt-36">
        <div className="absolute right-[-10%] top-20 h-80 w-80 rounded-full bg-[#1E40FF]/10 blur-3xl" />
        <div className="container-premium relative">
          <div className="mb-8 flex flex-wrap items-center gap-4">
            <div className="relative h-14 w-44 overflow-hidden rounded-[4px]">
              <Image src="https://sohhmxayptiosflmlxuu.supabase.co/storage/v1/object/public/brochures/Kennedy-University-520-x-330%20(2).jpg" alt="Kennedy University" fill className="object-contain object-left" unoptimized />
            </div>
            <MapPin className="h-5 w-5 text-slate-400" />
            <div className="inline-flex items-center gap-1 rounded-full border border-[#1E40FF]/30 bg-[#1E40FF]/8 px-3 py-1">
              <Award className="h-3.5 w-3.5 text-[#1E40FF]" />
              <span className="text-xs font-semibold text-[#1E40FF]">DBA Programme</span>
            </div>
          </div>

          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#1E40FF]">
            Kennedy University · USA / France
          </p>
          <h1 className="max-w-4xl font-display text-4xl leading-tight text-slate-950 sm:text-5xl md:text-6xl dark:text-white">
            Doctor of Business Administration
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Doctoral advancement through globally connected academic pathways. Research-led executive education for experienced professionals seeking the highest academic distinction.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/book-consultation" className="inline-flex items-center justify-center rounded-full bg-[#1E40FF] px-8 py-4 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(30,64,255,0.22)] transition-all hover:bg-[#1937dd]">
              Book Consultation
            </Link>
            <BrochureDownloadButton programmeName="Kennedy University DBA" fileUrl="/brochures/degrees/kennedy-dba.html" sourcePage="/doctoral-programs/dba/kennedy-university" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-4 text-sm font-semibold text-slate-950 transition-all hover:shadow-md dark:bg-slate-950 dark:text-white dark:border-slate-800">
              Download Brochure
            </BrochureDownloadButton>
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

      {/* Quick Facts Bar */}
      <section className="border-b border-slate-200 bg-white py-6 dark:bg-slate-950 dark:border-slate-800">
        <div className="container-premium">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {[
              { label: 'Country', value: 'USA / France' },
              { label: 'Delivery mode', value: 'Online' },
              { label: 'Duration', value: '24–36 Months' },
              { label: 'Language', value: 'English' },
              { label: 'Intake', value: 'Rolling' },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">{item.label}</p>
                <p className="mt-1 text-lg font-semibold text-slate-950 dark:text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About The University */}
      <section className="bg-white py-24 dark:bg-slate-950">
        <div className="container-premium">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="About Kennedy University"
                title="Global Academic Institution"
                description=""
              />
              <div className="relative mt-8 h-64 overflow-hidden rounded-[8px] sm:h-80">
                <Image
                  src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80"
                  alt="Kennedy University — Global Academic Institution"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>

            <div className="rounded-[8px] border border-slate-200 bg-[#F8FAFC] p-8 dark:bg-slate-900/60 dark:border-slate-800">
              <h3 className="mb-6 font-semibold text-slate-950 dark:text-white">Key institutional facts</h3>
              <ul className="space-y-5">
                <li className="flex gap-3">
                  <Globe2 className="mt-0.5 h-5 w-5 shrink-0 text-[#1E40FF]" />
                  <div>
                    <p className="font-medium text-slate-950 dark:text-white">Global Presence</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">USA, France, and multiple African regions</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Award className="mt-0.5 h-5 w-5 shrink-0 text-[#1E40FF]" />
                  <div>
                    <p className="font-medium text-slate-950 dark:text-white">25+ Years Experience</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">Established track record in doctoral education</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Users className="mt-0.5 h-5 w-5 shrink-0 text-[#1E40FF]" />
                  <div>
                    <p className="font-medium text-slate-950 dark:text-white">5 000+ Graduates</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">Distributed across 18+ countries</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Professionals Choose */}
      <section className="bg-[#F8FAFC] py-24 dark:bg-slate-900/60">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Competitive advantages"
            title="Why Professionals Choose Kennedy University"
            description="Distinctive benefits that set our DBA programme apart from traditional doctoral pathways"
          />
          <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { Icon: Zap, title: 'Flexible Research Model', description: 'Pursue original research that aligns with your professional context and career goals' },
              { Icon: Globe2, title: 'International Academic Network', description: 'Access faculty and peer networks spanning 18+ countries for global collaboration' },
              { Icon: Users2, title: 'Executive-Friendly Structure', description: 'Part-time delivery designed for working professionals managing demanding roles' },
              { Icon: BookOpen, title: 'Global Faculty Exposure', description: 'Learn from leading academics and practitioners with international expertise' },
              { Icon: Target, title: 'Cross-Border Recognition', description: 'Credentials recognised across multiple jurisdictions and professional sectors' },
              { Icon: Zap, title: 'Applied Research Focus', description: 'Conduct research that solves real-world business and organisational challenges' },
            ].map(({ Icon, title, description }, i) => (
              <div
                key={i}
                className="rounded-[8px] border border-slate-200 bg-white p-8 transition-all duration-300 hover:shadow-lg dark:bg-slate-950 dark:border-slate-800"
              >
                <Icon className="mb-4 h-8 w-8 text-[#1E40FF]" />
                <h3 className="mb-2 font-semibold text-slate-950 dark:text-white">{title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Accreditation + Academic Partners (unified trust section) */}
      <section className="bg-white py-24 dark:bg-slate-950">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Global accreditation"
            title="Recognition & Institutional Standing"
            description="Kennedy University holds accreditation from leading international bodies"
          />
          <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            <RecognitionBadge title="QAHE Accreditation" description="Full accreditation from the International Association for Quality Assurance in Higher Education" icon={Award} />
            <RecognitionBadge title="French Higher Education Registration" description="Registered as a Centre d'enseignement à distance under the French Education Code" icon={MapPin} />
            <RecognitionBadge title="International Academic Partnerships" description="Strategic partnerships with EIMS, ECI, University of Pacific, and leading institutions worldwide" icon={Handshake} />
            <RecognitionBadge title="ECLBS Membership" description="Member of the European Council of Leading Business Schools with international quality standards" icon={GraduationCap} />
            <RecognitionBadge title="Government Registrations" description="Registered with Florida Department of State and recognised by Galmudug and Hirshabelle States" icon={FileText} />
            <RecognitionBadge title="UN DESA Listing" description="Listed in the UN Department of Economic and Social Affairs database of recognised institutions" icon={Globe2} />
          </div>

          {/* Academic Partners sub-section */}
          <div className="mt-16 border-t border-slate-100 pt-16 dark:border-slate-800">
            <h3 className="mb-1 text-lg font-semibold text-slate-950 dark:text-white">Academic partners</h3>
            <p className="mb-10 text-sm text-slate-600 dark:text-slate-300">Collaborate across a network of leading international institutions</p>
            <div className="grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-3">
              <PartnershipCard institution="European Institute for Medical Studies (EIMS)" country="Malta" collaboration="Joint research initiatives and academic collaboration in healthcare innovation" />
              <PartnershipCard institution="European College of Innovation (ECI)" country="Malta" collaboration="Collaborative programmes in innovation and technology-driven business research" />
              <PartnershipCard institution="University of Pacific" country="USA" collaboration="Dual degree pathways and credit transfer agreements for graduate students" />
              <PartnershipCard institution="College of Pharmaceutical Sciences Riau" country="Indonesia" collaboration="Joint research, academic exchanges, and collaborative seminar programmes" />
              <PartnershipCard institution="Taongi National University" country="Liberia" collaboration="Credit recognition and student transfer pathways for programme continuation" />
              <PartnershipCard institution="KBS Sport College" country="South Korea" collaboration="Academic collaboration and specialised research in sports management and leadership" />
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="bg-[#F8FAFC] py-24 dark:bg-slate-900/60">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Areas of focus"
            title="Doctoral Research Specialisations"
            description="Choose research areas aligned with your professional expertise and career ambitions"
          />
          <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-6 sm:grid-cols-2 md:grid-cols-4">
            {['Business Strategy', 'Leadership Development', 'Innovation & Technology', 'Organisational Development', 'Digital Transformation', 'Entrepreneurship', 'Global Management', 'Strategic Planning'].map((area) => (
              <div key={area} className="rounded-[8px] border border-slate-200 bg-white p-6 text-center transition-all hover:shadow-lg dark:bg-slate-950 dark:border-slate-800">
                <h3 className="font-semibold text-slate-950 dark:text-white">{area}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Doctoral Journey (merged Programme Structure + Application Process) */}
      <section className="bg-white py-24 dark:bg-slate-950">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Your doctoral journey"
            title="From Application to Degree"
            description="A clear, structured pathway from your first enquiry to doctoral award"
          />
          <div className="mt-14 grid gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex items-center rounded-full bg-[#1E40FF]/10 px-4 py-2">
                <span className="text-sm font-bold text-[#1E40FF]">Phase 1 — Admissions</span>
              </div>
              <div className="space-y-3">
                {[
                  { num: '1', title: 'Eligibility Review', desc: 'Assessment of your academic background and professional experience (Weeks 1–2)' },
                  { num: '2', title: 'Application & Interview', desc: 'Comprehensive application form, research intent statement, and selection interview (Weeks 3–6)' },
                  { num: '3', title: 'Enrolment & Onboarding', desc: 'Document verification, admission offer, and programme commencement (Weeks 7–8)' },
                ].map((item) => (
                  <div key={item.num} className="flex gap-5 rounded-[8px] border-l-4 border-slate-200 bg-white p-5 dark:bg-slate-950 dark:border-slate-800" style={{ borderLeftColor: '#1E40FF' }}>
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1E40FF] text-sm font-semibold text-white">{item.num}</div>
                    <div className="min-w-0 py-0.5">
                      <h3 className="font-semibold text-slate-950 dark:text-white">{item.title}</h3>
                      <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-6 inline-flex items-center rounded-full bg-[#22d3ee]/10 px-4 py-2">
                <span className="text-sm font-bold text-[#22d3ee]">Phase 2 — Academic Timeline</span>
              </div>
              <div className="space-y-3">
                {[
                  { period: 'Months 1–4', title: 'Research Proposal Development', desc: 'Work with your assigned supervisor to refine your dissertation topic, research methodology, and scholarly framework' },
                  { period: 'Months 5–30', title: 'Research & Dissertation', desc: 'Conduct original research, gather data, and develop your doctoral dissertation with ongoing supervisor guidance' },
                  { period: 'Months 31–36', title: 'Examination & Award', desc: 'Thesis submission, viva voce examination, revisions, and formal degree conferment' },
                ].map((item) => (
                  <div key={item.period} className="flex gap-5 rounded-[8px] border-l-4 border-slate-200 bg-white p-5 dark:bg-slate-950 dark:border-slate-800" style={{ borderLeftColor: '#22d3ee' }}>
                    <div className="w-24 shrink-0 py-0.5">
                      <span className="text-xs font-bold uppercase tracking-wide text-[#22d3ee]">{item.period}</span>
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-slate-950 dark:text-white">{item.title}</h3>
                      <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Profiles — 3 tabs */}
      <section className="bg-[#F8FAFC] py-24 dark:bg-slate-900/60">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Professional profiles"
            title="Who Is This Programme Designed For?"
            description="The DBA is ideal for experienced professionals seeking doctoral credentials and thought leadership"
          />
          <div className="mt-14">
            <DataTabs
              tabs={[
                {
                  label: "Corporate leaders",
                  panel: (
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      {[
                        { role: 'C-Level Executives', Icon: UserRound, description: 'CEOs, CFOs, and senior leaders advancing to thought leadership and academic recognition' },
                        { role: 'Senior Managers', Icon: BarChart3, description: 'Senior professionals with 10+ years experience pursuing advanced academic qualifications' },
                      ].map(({ role, Icon, description }) => (
                        <div key={role} className="rounded-[8px] border border-slate-200 bg-white p-8 text-center transition-all hover:shadow-lg dark:bg-slate-950 dark:border-slate-800">
                          <div className="mb-4"><Icon className="mx-auto h-9 w-9 text-[#1E40FF]" /></div>
                          <h3 className="mb-2 font-semibold text-slate-950 dark:text-white">{role}</h3>
                          <p className="text-sm text-slate-600 dark:text-slate-300">{description}</p>
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
                        { role: 'Founders & Entrepreneurs', Icon: Rocket, description: 'Business owners seeking doctoral credentials and research-backed strategic expertise' },
                        { role: 'Consultants', Icon: Briefcase, description: 'Management consultants building thought leadership through original research contributions' },
                      ].map(({ role, Icon, description }) => (
                        <div key={role} className="rounded-[8px] border border-slate-200 bg-white p-8 text-center transition-all hover:shadow-lg dark:bg-slate-950 dark:border-slate-800">
                          <div className="mb-4"><Icon className="mx-auto h-9 w-9 text-[#1E40FF]" /></div>
                          <h3 className="mb-2 font-semibold text-slate-950 dark:text-white">{role}</h3>
                          <p className="text-sm text-slate-600 dark:text-slate-300">{description}</p>
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
                        { role: 'Academicians', Icon: GraduationCap, description: 'Educators and researchers advancing their academic credentials and research impact' },
                        { role: 'Government Leaders', Icon: Landmark, description: 'Public sector leaders and policymakers leveraging research for strategic initiatives' },
                      ].map(({ role, Icon, description }) => (
                        <div key={role} className="rounded-[8px] border border-slate-200 bg-white p-8 text-center transition-all hover:shadow-lg dark:bg-slate-950 dark:border-slate-800">
                          <div className="mb-4"><Icon className="mx-auto h-9 w-9 text-[#1E40FF]" /></div>
                          <h3 className="mb-2 font-semibold text-slate-950 dark:text-white">{role}</h3>
                          <p className="text-sm text-slate-600 dark:text-slate-300">{description}</p>
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

      {/* Learning Experience */}
      <section className="bg-white py-24 dark:bg-slate-950">
        <div className="container-premium">
          <SectionHeading
            eyebrow="How you will learn"
            title="The Learning Experience"
            description="Multi-faceted support throughout your doctoral journey"
          />
          <div className="mt-14 grid gap-3 sm:gap-6 md:grid-cols-2">
            {[
              { title: 'Online Learning Platform', description: 'Comprehensive digital learning resources, research materials, and academic databases available 24/7' },
              { title: 'Research Supervision', description: 'One-on-one guidance from experienced supervisors with expertise in your research specialisation' },
              { title: 'Academic Support', description: 'Research methodology workshops, writing clinics, and academic skills development throughout your journey' },
              { title: 'Faculty Access', description: 'Direct interaction with leading academics through seminars, webinars, and consultation sessions' },
              { title: 'Library Resources', description: 'Unlimited access to academic journals, databases, and scholarly publications for research' },
              { title: 'Peer Network', description: 'Collaboration with fellow doctoral candidates across 18+ countries and diverse professional backgrounds' },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 rounded-[8px] border border-slate-200 bg-white p-6 dark:bg-slate-950 dark:border-slate-800">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1E40FF]/10">
                  <CheckCircle2 className="h-6 w-6 text-[#1E40FF]" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-slate-950 dark:text-white">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Graduate Outcomes */}
      <section className="bg-[#F8FAFC] py-24 dark:bg-slate-900/60">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Your future"
            title="Recognition & Graduate Outcomes"
            description="What Kennedy University DBA graduates achieve"
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { stat: 'Career Advancement', detail: 'C-level and thought leadership positions' },
              { stat: 'Academic Progression', detail: 'University teaching and research positions' },
              { stat: 'Professional Recognition', detail: 'Publishing and speaking opportunities' },
              { stat: 'Global Opportunities', detail: 'International business and consulting roles' },
            ].map((item) => (
              <div key={item.stat} className="rounded-[8px] border border-slate-200 bg-white p-8 text-center dark:bg-slate-950 dark:border-slate-800">
                <p className="mb-2 font-display text-xl font-bold text-[#1E40FF]">{item.stat}</p>
                <p className="text-sm text-slate-600 dark:text-slate-300">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Success Stories */}
      <section className="bg-white py-24 dark:bg-slate-950">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Alumni voices"
            title="Student Success Stories"
            description="Real stories from Kennedy University DBA graduates"
          />
          <div className="mt-14 grid grid-cols-1 gap-4 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard name="Sarah Chen" role="Chief Innovation Officer" company="Global Tech Firm" quote="The DBA programme transformed how I approach strategic business challenges. The research skills and global network have been instrumental in my advancement." imageUrl="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80" />
            <TestimonialCard name="David Williams" role="Founder & CEO" company="Management Consulting" quote="Pursuing the DBA while running my business was demanding but rewarding. The flexible delivery enabled me to maintain my practice while building thought leadership." imageUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" />
            <TestimonialCard name="Maria Rodriguez" role="Research Director" company="University of Madrid" quote="Kennedy's international community and rigorous research standards elevated my academic profile. I have published multiple papers from my dissertation work." imageUrl="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80" />
            <TestimonialCard name="James Mitchell" role="Strategic Advisor" company="Fortune 500 Company" quote="The doctoral credential opened doors I did not expect. I now advise on strategic initiatives and speak at international conferences regularly." imageUrl="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80" />
            <TestimonialCard name="Priya Patel" role="Executive Director" company="Non-profit Organisation" quote="As a mid-career professional, the DBA provided the academic foundation and credibility to advance organisational impact. The curriculum was highly relevant." imageUrl="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80" />
            <TestimonialCard name="Hans Mueller" role="Business Development Lead" company="International Consulting" quote="The global network I built during the programme has become invaluable. I have collaborated with peers across six continents on research and business initiatives." imageUrl="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80" />
          </div>
        </div>
      </section>

      {/* Certificate Showcase */}
      <section className="bg-[#F8FAFC] py-24 dark:bg-slate-900/60">
        <div className="container-premium">
          <SectionHeading eyebrow="Credentials" title="Your Doctoral Achievement" description="A comprehensive doctorate package recognised globally for executive advancement and professional credibility." />
          <div className="mx-auto mt-14 max-w-3xl">
            <div className="overflow-hidden rounded-[8px] border border-slate-200 bg-white shadow-lg dark:bg-slate-950 dark:border-slate-800" style={{aspectRatio: '1.41/1'}}>
              <div className="relative h-full w-full">
                <Image src="https://sohhmxayptiosflmlxuu.supabase.co/storage/v1/object/public/brochures/Certificates/Kennedy%20DBA.jpg" alt="Kennedy University Doctor of Business Administration Certificate" fill className="object-contain p-4" unoptimized />
              </div>
            </div>
            <p className="mt-4 text-center text-sm text-slate-500 dark:text-slate-400">Official Kennedy University DBA Certificate</p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {['Doctor of Business Administration Degree', 'Academic Transcript', 'Dissertation Completion', 'Doctoral Research Record', 'Alumni Membership', 'Graduation Eligibility'].map((item) => (
                <div key={item} className="rounded-[8px] border border-slate-200 bg-white p-4 text-center dark:bg-slate-950 dark:border-slate-800">
                  <p className="text-sm font-semibold text-slate-950 dark:text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white py-24 dark:bg-slate-950">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Common questions"
            title="Frequently Asked Questions"
            description="Everything you need to know before applying"
          />
          <div className="mx-auto mt-14 max-w-3xl space-y-4">
            {[
              { q: 'What degree will I receive upon completion?', a: 'Upon successful completion of all programme requirements, including the dissertation and viva voce examination, you will be awarded the Doctor of Business Administration (DBA) by Kennedy University.' },
              { q: 'Is the DBA recognised internationally?', a: 'Yes. Kennedy University holds accreditation from QAHE and is registered with multiple government bodies including the French Ministry of Education. The credential is recognised across jurisdictions in Europe, the Americas, and Africa.' },
              { q: 'Can I study while working full-time?', a: 'Absolutely. The programme is delivered entirely online in a part-time format, specifically designed for working executives and professionals who cannot interrupt their careers.' },
              { q: 'How long does the programme take?', a: 'The DBA programme typically takes 24 to 36 months to complete, depending on your research progress and dissertation timeline.' },
              { q: "What are the entry requirements?", a: "Applicants should hold a Master's degree (or equivalent) and have at least 5 years of relevant professional experience. Each application is reviewed holistically." },
              { q: 'Will I have a dedicated research supervisor?', a: 'Yes. Each DBA candidate is matched with an experienced supervisor who provides regular one-on-one guidance aligned with your research specialisation.' },
            ].map((faq) => (
              <div key={faq.q} className="rounded-[8px] border border-slate-200 bg-white p-6 dark:bg-slate-950 dark:border-slate-800">
                <h3 className="mb-2 font-semibold text-slate-950 dark:text-white">{faq.q}</h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Speak with an Academic Adviser */}
      <section className="bg-[#0f172a] py-20">
        <div className="container-premium text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#22d3ee]">Expert guidance</p>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Speak with an Academic Adviser</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Our advisers are doctoral graduates themselves. Get honest, personalised guidance on programme fit, research direction, and your path to the DBA.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link href="/book-consultation" className="inline-flex items-center justify-center rounded-full bg-[#1E40FF] px-8 py-4 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(30,64,255,0.22)] transition-all hover:bg-[#1937dd]">
              Book a Free Consultation
            </Link>
            <Link href="/doctoral-programs/dba" className="inline-flex items-center justify-center rounded-full border border-slate-600 px-8 py-4 text-sm font-semibold text-white transition-all hover:border-white">
              Explore All DBA Programmes
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
