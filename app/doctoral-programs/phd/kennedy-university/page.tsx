import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, Award, Users, Globe2, Target, Zap, Users2, BookOpen, Microscope, GraduationCap, Briefcase, Landmark, BarChart3, Globe, Handshake, FileText, MapPin } from 'lucide-react'
import { SectionHeading } from '@/components/ui/section-heading'
import { ReadMoreText } from '@/components/ui/read-more-text'
import { BrochureDownloadButton } from '@/components/forms/brochure-download-button'
import { RecognitionBadge } from '@/components/cards/recognition-badge'
import { PartnershipCard } from '@/components/cards/partnership-card'
import { TestimonialCard } from '@/components/cards/testimonial-card'
import { DataTabs } from '@/components/ui/data-tabs'

export const metadata: Metadata = {
  title: 'Doctor of Philosophy (PhD) — Kennedy University | AcdyOn',
  description:
    "Advance your academic and professional career with Kennedy University's globally recognized PhD programme. Rigorous research-led doctoral education for thought leaders.",
}

export default function KennedyPhDPage() {
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
              <span className="text-xs font-semibold text-[#1E40FF]">PhD Programme</span>
            </div>
          </div>

          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#1E40FF]">
            Kennedy University · USA / France
          </p>
          <h1 className="max-w-4xl font-display text-4xl leading-tight text-slate-950 sm:text-5xl md:text-6xl dark:text-white">
            Doctor of Philosophy (PhD)
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Research-led doctoral education for the next generation of global thought leaders. Rigorous original scholarship with international academic recognition.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/book-consultation" className="inline-flex items-center justify-center rounded-full bg-[#1E40FF] px-8 py-4 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(30,64,255,0.22)] transition-all hover:bg-[#1937dd]">
              Book Consultation
            </Link>
            <BrochureDownloadButton programmeName="Kennedy University PhD" fileUrl="/brochures/degrees/kennedy-phd.html" sourcePage="/doctoral-programs/phd/kennedy-university" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-4 text-sm font-semibold text-slate-950 transition-all hover:shadow-md dark:bg-slate-950 dark:text-white dark:border-slate-800">
              Download Brochure
            </BrochureDownloadButton>
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

      {/* Quick Facts Bar */}
      <section className="border-b border-slate-200 bg-white py-6 dark:bg-slate-950 dark:border-slate-800">
        <div className="container-premium">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {[
              { label: 'Country', value: 'USA / France' },
              { label: 'Delivery mode', value: 'Online' },
              { label: 'Duration', value: '36–48 Months' },
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
                <Image src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80" alt="Kennedy University — Global Academic Institution" fill className="object-cover" unoptimized />
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

      {/* Why Scholars Choose */}
      <section className="bg-[#F8FAFC] py-24 dark:bg-slate-900/60">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Competitive advantages"
            title="Why Scholars Choose Kennedy University"
            description="Distinctive benefits that set our PhD programme apart from traditional research pathways"
          />
          <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { Icon: Zap, title: 'Independent Research Model', description: 'Full academic freedom to pursue original scholarship aligned with your intellectual interests' },
              { Icon: Globe2, title: 'International Academic Network', description: 'Access to faculty and peer networks spanning 18+ countries for global scholarly collaboration' },
              { Icon: Users2, title: 'Flexible Distance Learning', description: 'Online delivery designed for researchers who cannot relocate for full-time residential study' },
              { Icon: BookOpen, title: 'Expert Supervision', description: 'Matched with supervisors who have deep expertise in your specific research domain' },
              { Icon: Target, title: 'Cross-Border Recognition', description: 'Credentials recognised across multiple jurisdictions, academia, and professional sectors' },
              { Icon: Zap, title: 'Knowledge Contribution', description: 'Make an original and significant contribution to knowledge in your discipline' },
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
              <PartnershipCard institution="European Institute for Medical Studies (EIMS)" country="Malta" collaboration="Joint research initiatives and academic collaboration in healthcare and life sciences" />
              <PartnershipCard institution="European College of Innovation (ECI)" country="Malta" collaboration="Collaborative programmes in innovation research and technology-driven scholarship" />
              <PartnershipCard institution="University of Pacific" country="USA" collaboration="Dual degree pathways and research credit agreements for PhD candidates" />
              <PartnershipCard institution="College of Pharmaceutical Sciences Riau" country="Indonesia" collaboration="Joint research, academic exchanges, and collaborative seminar programmes" />
              <PartnershipCard institution="Taongi National University" country="Liberia" collaboration="Credit recognition and student transfer pathways for research continuation" />
              <PartnershipCard institution="KBS Sport College" country="South Korea" collaboration="Research collaboration in sports science, management, and applied social sciences" />
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="bg-[#F8FAFC] py-24 dark:bg-slate-900/60">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Areas of focus"
            title="PhD Research Specialisations"
            description="Choose a research area aligned with your intellectual interests and scholarly ambitions"
          />
          <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-6 sm:grid-cols-2 md:grid-cols-4">
            {['Business & Management', 'Social Sciences', 'Interdisciplinary Studies', 'Educational Leadership', 'Health Management', 'Policy & Governance', 'International Relations', 'Sustainability & Development'].map((area) => (
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
                  { num: '1', title: 'Eligibility Review', desc: 'Assessment of academic background and research potential (Weeks 1–2)' },
                  { num: '2', title: 'Research Proposal & Interview', desc: 'Submit research proposal, meet with a potential supervisor to align research interests (Weeks 3–10)' },
                  { num: '3', title: 'Enrolment & Onboarding', desc: 'Document verification, admission offer, supervisor matching, and programme access (Weeks 11–12)' },
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
                  { period: 'Months 3–8', title: 'Literature Review & Methodology', desc: 'Comprehensive literature review and research design development under supervisor guidance' },
                  { period: 'Months 9–36', title: 'Data Collection & Analysis', desc: 'Original research, data collection, scholarly analysis, and thesis writing' },
                  { period: 'Months 37–48', title: 'Thesis Submission & Viva', desc: 'Final thesis examination, viva voce defence, revisions, and degree conferment' },
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
            description="The PhD is ideal for those committed to original scholarly inquiry and academic impact"
          />
          <div className="mt-14">
            <DataTabs
              tabs={[
                {
                  label: "Researchers & academics",
                  panel: (
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      {[
                        { role: 'Research Scholars', Icon: Microscope, description: 'Individuals committed to advancing knowledge through rigorous independent research' },
                        { role: 'Academic Faculty', Icon: GraduationCap, description: 'Lecturers and educators advancing credentials for professorial roles and tenure' },
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
                  label: "Senior professionals",
                  panel: (
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      {[
                        { role: 'Senior Professionals', Icon: Briefcase, description: 'Experienced practitioners seeking the highest academic recognition in their field' },
                        { role: 'Industry Experts', Icon: BarChart3, description: 'Technical specialists contributing domain expertise to the academic knowledge base' },
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
                  label: "Policy & global",
                  panel: (
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      {[
                        { role: 'Policy Researchers', Icon: Landmark, description: 'Government and NGO leaders applying scholarly research to real-world policy challenges' },
                        { role: 'International Scholars', Icon: Globe, description: 'Researchers seeking globally recognised doctoral credentials for cross-border careers' },
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
            description="Comprehensive support throughout your doctoral research journey"
          />
          <div className="mt-14 grid gap-3 sm:gap-6 md:grid-cols-2">
            {[
              { title: 'Online Research Portal', description: 'Comprehensive digital research resources, academic databases, and library tools available 24/7' },
              { title: 'Expert Supervision', description: 'Regular one-on-one sessions with a subject-expert supervisor guiding your research direction' },
              { title: 'Research Skills Development', description: 'Methodology workshops, academic writing support, and research design training throughout your programme' },
              { title: 'Faculty Engagement', description: 'Direct interaction with leading scholars through seminars, colloquia, and academic consultation' },
              { title: 'Library & Journal Access', description: 'Unlimited access to peer-reviewed journals, academic databases, and scholarly publications' },
              { title: 'International Research Community', description: 'Engage with fellow PhD candidates and researchers across 18+ countries worldwide' },
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
            description="What Kennedy University PhD graduates achieve"
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { stat: 'Academic Careers', detail: 'Faculty and research positions at universities worldwide' },
              { stat: 'Research Leadership', detail: 'Principal investigator and research director roles' },
              { stat: 'Publishing Impact', detail: 'Peer-reviewed publications and conference presentations' },
              { stat: 'Global Influence', detail: 'Policy advisory and international consultancy roles' },
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
            description="Real stories from Kennedy University PhD graduates"
          />
          <div className="mt-14 grid grid-cols-1 gap-4 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard name="Dr. Amara Diallo" role="Associate Professor" company="University of Geneva" quote="The PhD programme at Kennedy provided me with the rigorous foundation I needed to transition from industry into academia. The supervision was exceptional." imageUrl="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=150&q=80" />
            <TestimonialCard name="Dr. Benjamin Osei" role="Head of Research" company="African Development Institute" quote="My research on sustainable finance gained international recognition largely because of the scholarly standards Kennedy instilled throughout the programme." imageUrl="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80" />
            <TestimonialCard name="Dr. Natalia Kovacs" role="Policy Advisor" company="European Commission" quote="The interdisciplinary approach and international network made my PhD truly unique. I now advise EU policy based directly on my dissertation findings." imageUrl="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80" />
            <TestimonialCard name="Dr. Marcus Thompson" role="Senior Research Fellow" company="Global Strategy Institute" quote="Kennedy's flexible online model allowed me to complete my PhD while consulting full-time. The quality of supervision never felt compromised by distance." imageUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" />
            <TestimonialCard name="Dr. Fatima Al-Rashid" role="Dean of Business" company="Gulf Business University" quote="The doctoral credential from Kennedy opened pathways I could not have imagined. I progressed from lecturer to Dean within three years of graduating." imageUrl="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80" />
            <TestimonialCard name="Dr. Lin Wei" role="Chief Science Officer" company="Asia Innovation Fund" quote="The research skills and global perspective I gained through the programme became the foundation of my entire career in innovation policy." imageUrl="https://images.unsplash.com/photo-1541823709867-1b206113181a?auto=format&fit=crop&w=150&q=80" />
          </div>
        </div>
      </section>

      {/* Certificate Showcase */}
      <section className="bg-[#F8FAFC] py-24 dark:bg-slate-900/60">
        <div className="container-premium">
          <SectionHeading eyebrow="Credentials" title="Your Doctoral Achievement" description="Official PhD credentials recognised globally for academic and professional advancement." />
          <div className="mx-auto mt-14 max-w-3xl">
            <div className="overflow-hidden rounded-[8px] border border-slate-200 bg-white shadow-lg dark:bg-slate-950 dark:border-slate-800" style={{aspectRatio: '1.41/1'}}>
              <div className="relative h-full w-full">
                <Image src="https://sohhmxayptiosflmlxuu.supabase.co/storage/v1/object/public/brochures/Certificates/KU%20PHD.webp" alt="Kennedy University PhD Certificate" fill className="object-contain p-4" unoptimized />
              </div>
            </div>
            <p className="mt-4 text-center text-sm text-slate-500 dark:text-slate-400">Official Kennedy University PhD Certificate</p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {['Doctor of Philosophy Degree', 'Academic Transcript', 'Thesis Completion Record', 'Research Supervision Record', 'Alumni Membership', 'Graduation Eligibility'].map((item) => (
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
              { q: 'What degree will I receive upon completion?', a: 'Upon successful completion of all requirements including thesis submission and viva voce examination, you will be awarded the Doctor of Philosophy (PhD) by Kennedy University.' },
              { q: 'Is the PhD recognised internationally?', a: 'Yes. Kennedy University holds QAHE accreditation and is registered with multiple government bodies including the French Ministry of Education, giving its credentials wide international recognition.' },
              { q: 'Can I complete the PhD while working?', a: 'Yes. The programme is delivered entirely online in a flexible format specifically designed to accommodate research candidates who maintain professional or academic roles.' },
              { q: 'How long does the PhD take?', a: 'The programme typically takes 36 to 48 months, depending on your research complexity, supervisor assessment, and thesis submission timeline.' },
              { q: "What are the entry requirements?", a: "Applicants should hold a Master's degree or equivalent, and demonstrate strong academic potential and a well-defined research focus. Applications are reviewed holistically." },
              { q: 'What support will I receive throughout the programme?', a: 'You will be assigned a specialist supervisor, have access to research skills workshops, library resources, academic writing support, and a global peer research community.' },
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
            Our advisers are doctoral graduates themselves. Get honest, personalised guidance on programme fit, research direction, and your path to the PhD.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link href="/book-consultation" className="inline-flex items-center justify-center rounded-full bg-[#1E40FF] px-8 py-4 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(30,64,255,0.22)] transition-all hover:bg-[#1937dd]">
              Book a Free Consultation
            </Link>
            <Link href="/doctoral-programs/phd" className="inline-flex items-center justify-center rounded-full border border-slate-600 px-8 py-4 text-sm font-semibold text-white transition-all hover:border-white">
              Explore All PhD Programmes
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
