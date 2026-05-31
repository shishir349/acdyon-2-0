import type { Metadata } from 'next'
import { CheckCircle2, Award, Users, BookOpen, Globe2, Target, Zap, Users2 } from 'lucide-react'
import { PageHero } from '@/components/sections/page-hero'
import { SectionHeading } from '@/components/ui/section-heading'
import { RecognitionBadge } from '@/components/cards/recognition-badge'
import { PartnershipCard } from '@/components/cards/partnership-card'
import { TestimonialCard } from '@/components/cards/testimonial-card'
import { ConsultationNudge } from '@/components/sections/consultation-nudge'
import { FinalCTA } from '@/components/sections/final-cta'

export const metadata: Metadata = {
  title: 'Doctor of Business Administration (DBA) — Kennedy University | AcdyOn',
  description:
    "Advance your executive career with Kennedy University's globally recognized DBA programme. Research-led doctoral education for experienced professionals.",
}

export default function KennedyDBAPage() {
  return (
    <main>
      {/* SECTION 1: Hero */}
      <PageHero
        eyebrow="Kennedy University"
        title="Doctor of Business Administration"
        description="Doctoral advancement through globally connected academic pathways"
        secondaryLabel="Download Brochure"
        secondaryHref="#"
      />

      {/* Quick Facts Bar */}
      <section className="border-b border-slate-200 bg-white py-6">
        <div className="container-premium">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {[
              { label: 'Country', value: 'USA / France' },
              { label: 'Delivery Mode', value: 'Online' },
              { label: 'Duration', value: '24–36 Months' },
              { label: 'Language', value: 'English' },
              { label: 'Intake', value: 'Rolling' },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-xs font-medium uppercase tracking-wide text-slate-500">{item.label}</p>
                <p className="mt-1 text-lg font-semibold text-slate-950">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: About The University */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="About Kennedy University"
                title="Global Academic Institution"
                description=""
              />
              <div className="mt-8 space-y-5 text-slate-600">
                <p>
                  Kennedy University is a private higher education institution with a distinguished global presence
                  across the USA, France, and multiple African regions. With over 25 years of academic excellence,
                  we serve executives, entrepreneurs, and thought leaders pursuing doctoral advancement.
                </p>
                <p>
                  Our DBA programme emphasises original research contribution, international academic networking,
                  and applied learning for experienced professionals. Recognised by leading international
                  accreditation bodies, Kennedy University offers flexible distance learning pathways without
                  compromising academic rigour.
                </p>
                <p>
                  We position ourselves at the intersection of academic excellence and professional relevance,
                  preparing graduates for global leadership roles and thought leadership in their fields.
                </p>
              </div>
            </div>

            <div className="rounded-[8px] border border-slate-200 bg-[#F8FAFC] p-8">
              <h3 className="mb-6 font-semibold text-slate-950">Key Institutional Facts</h3>
              <ul className="space-y-5">
                <li className="flex gap-3">
                  <Globe2 className="mt-0.5 h-5 w-5 shrink-0 text-[#1E40FF]" />
                  <div>
                    <p className="font-medium text-slate-950">Global Presence</p>
                    <p className="text-sm text-slate-600">USA, France, and multiple African regions</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Award className="mt-0.5 h-5 w-5 shrink-0 text-[#1E40FF]" />
                  <div>
                    <p className="font-medium text-slate-950">25+ Years Experience</p>
                    <p className="text-sm text-slate-600">Established track record in doctoral education</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Users className="mt-0.5 h-5 w-5 shrink-0 text-[#1E40FF]" />
                  <div>
                    <p className="font-medium text-slate-950">5 000+ Graduates</p>
                    <p className="text-sm text-slate-600">Distributed across 18+ countries</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Why Professionals Choose */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Competitive Advantages"
            title="Why Professionals Choose Kennedy University"
            description="Distinctive benefits that set our DBA programme apart from traditional doctoral pathways"
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                Icon: Zap,
                title: 'Flexible Research Model',
                description: 'Pursue original research that aligns with your professional context and career goals',
              },
              {
                Icon: Globe2,
                title: 'International Academic Network',
                description: 'Access faculty and peer networks spanning 18+ countries for global collaboration',
              },
              {
                Icon: Users2,
                title: 'Executive-Friendly Structure',
                description: 'Part-time delivery designed for working professionals managing demanding roles',
              },
              {
                Icon: BookOpen,
                title: 'Global Faculty Exposure',
                description: 'Learn from leading academics and practitioners with international expertise',
              },
              {
                Icon: Target,
                title: 'Cross-Border Recognition',
                description: 'Credentials recognised across multiple jurisdictions and professional sectors',
              },
              {
                Icon: Zap,
                title: 'Applied Research Focus',
                description: 'Conduct research that solves real-world business and organisational challenges',
              },
            ].map(({ Icon, title, description }, i) => (
              <div
                key={i}
                className="rounded-[8px] border border-slate-200 bg-white p-8 transition-all duration-300 hover:shadow-lg"
              >
                <Icon className="mb-4 h-8 w-8 text-[#1E40FF]" />
                <h3 className="mb-2 font-semibold text-slate-950">{title}</h3>
                <p className="text-sm text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Recognition & Institutional Standing */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Global Accreditation"
            title="Recognition & Institutional Standing"
            description="Kennedy University holds accreditation from leading international bodies"
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <RecognitionBadge
              title="QAHE Accreditation"
              description="Full accreditation from the International Association for Quality Assurance in Higher Education"
              logoFallback="🏆"
            />
            <RecognitionBadge
              title="French Higher Education Registration"
              description="Registered as a Centre d'enseignement à distance under the French Education Code"
              logoFallback="🇫🇷"
            />
            <RecognitionBadge
              title="International Academic Partnerships"
              description="Strategic partnerships with EIMS, ECI, University of Pacific, and leading institutions worldwide"
              logoFallback="🤝"
            />
            <RecognitionBadge
              title="ECLBS Membership"
              description="Member of the European Council of Leading Business Schools with international quality standards"
              logoFallback="🎓"
            />
            <RecognitionBadge
              title="Government Registrations"
              description="Registered with Florida Department of State and recognised by Galmudug and Hirshabelle States"
              logoFallback="📋"
            />
            <RecognitionBadge
              title="UN DESA Listing"
              description="Listed in the UN Department of Economic and Social Affairs database of recognised institutions"
              logoFallback="🌐"
            />
          </div>
        </div>
      </section>

      {/* SECTION 5: Global Academic Partnerships */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Strategic Alliances"
            title="Global Academic Partnerships"
            description="Collaborate across a network of leading international institutions"
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <PartnershipCard
              institution="European Institute for Medical Studies (EIMS)"
              country="Malta"
              collaboration="Joint research initiatives and academic collaboration in healthcare innovation"
            />
            <PartnershipCard
              institution="European College of Innovation (ECI)"
              country="Malta"
              collaboration="Collaborative programmes in innovation and technology-driven business research"
            />
            <PartnershipCard
              institution="University of Pacific"
              country="USA"
              collaboration="Dual degree pathways and credit transfer agreements for graduate students"
            />
            <PartnershipCard
              institution="College of Pharmaceutical Sciences Riau"
              country="Indonesia"
              collaboration="Joint research, academic exchanges, and collaborative seminar programmes"
            />
            <PartnershipCard
              institution="Taongi National University"
              country="Liberia"
              collaboration="Credit recognition and student transfer pathways for programme continuation"
            />
            <PartnershipCard
              institution="KBS Sport College"
              country="South Korea"
              collaboration="Academic collaboration and specialised research in sports management and leadership"
            />
          </div>
        </div>
      </section>

      {/* SECTION 6: Programme Structure */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Your Journey"
            title="Programme Structure & Timeline"
            description="Six-phase pathway from application to doctoral award"
          />
          <div className="mt-14 space-y-4">
            {[
              { step: '01', title: 'Eligibility Review', detail: 'Assessment of academic background and professional experience (Weeks 1–2)', accent: '#1E40FF' },
              { step: '02', title: 'Application & Interview', detail: 'Comprehensive application review and selection interview (Weeks 3–6)', accent: '#22D3EE' },
              { step: '03', title: 'Document Verification', detail: 'Validation of credentials and academic transcripts (Weeks 7–8)', accent: '#1E40FF' },
              { step: '04', title: 'Research Proposal Development', detail: 'Work with supervisor to refine dissertation topic and methodology (Months 2–4)', accent: '#22D3EE' },
              { step: '05', title: 'Research & Dissertation', detail: 'Conduct original research and develop your doctoral dissertation (Months 5–30)', accent: '#1E40FF' },
              { step: '06', title: 'Examination & Award', detail: 'Thesis examination, viva voce, and degree conferment (Months 31–36)', accent: '#22D3EE' },
            ].map((phase) => (
              <div
                key={phase.step}
                className="flex gap-6 rounded-[8px] border border-slate-200 bg-white p-6"
                style={{ borderLeftColor: phase.accent, borderLeftWidth: 4 }}
              >
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-semibold text-white"
                  style={{ backgroundColor: phase.accent }}
                >
                  {phase.step}
                </div>
                <div className="py-1">
                  <h3 className="font-semibold text-slate-950">{phase.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{phase.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: Research Areas */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Areas of Focus"
            title="Doctoral Research Specialisations"
            description="Choose research areas aligned with your professional expertise and career ambitions"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {[
              'Business Strategy',
              'Leadership Development',
              'Innovation & Technology',
              'Organisational Development',
              'Digital Transformation',
              'Entrepreneurship',
              'Global Management',
              'Strategic Planning',
            ].map((area) => (
              <div
                key={area}
                className="rounded-[8px] border border-slate-200 bg-white p-6 text-center transition-all hover:shadow-lg"
              >
                <h3 className="font-semibold text-slate-950">{area}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: Who Is This Programme For */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Professional Profiles"
            title="Who Is This Programme Designed For?"
            description="The DBA is ideal for experienced professionals seeking doctoral credentials and thought leadership"
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { role: 'C-Level Executives', icon: '👔', description: 'CEOs, CFOs, and senior leaders advancing to thought leadership and academic recognition' },
              { role: 'Founders & Entrepreneurs', icon: '🚀', description: 'Business owners seeking doctoral credentials and research-backed strategic expertise' },
              { role: 'Senior Managers', icon: '📊', description: 'Senior professionals with 10+ years experience pursuing advanced academic qualifications' },
              { role: 'Consultants', icon: '💼', description: 'Management consultants building thought leadership through original research contributions' },
              { role: 'Academicians', icon: '🎓', description: 'Educators and researchers advancing their academic credentials and research impact' },
              { role: 'Government Leaders', icon: '🏛️', description: 'Public sector leaders and policymakers leveraging research for strategic initiatives' },
            ].map((audience) => (
              <div
                key={audience.role}
                className="rounded-[8px] border border-slate-200 bg-white p-8 text-center transition-all hover:shadow-lg"
              >
                <div className="mb-4 text-4xl">{audience.icon}</div>
                <h3 className="mb-2 font-semibold text-slate-950">{audience.role}</h3>
                <p className="text-sm text-slate-600">{audience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: Learning Experience */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="How You Will Learn"
            title="The Learning Experience"
            description="Multi-faceted support throughout your doctoral journey"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {[
              { title: 'Online Learning Platform', description: 'Comprehensive digital learning resources, research materials, and academic databases available 24/7' },
              { title: 'Research Supervision', description: 'One-on-one guidance from experienced supervisors with expertise in your research specialisation' },
              { title: 'Academic Support', description: 'Research methodology workshops, writing clinics, and academic skills development throughout your journey' },
              { title: 'Faculty Access', description: 'Direct interaction with leading academics through seminars, webinars, and consultation sessions' },
              { title: 'Library Resources', description: 'Unlimited access to academic journals, databases, and scholarly publications for research' },
              { title: 'Peer Network', description: 'Collaboration with fellow doctoral candidates across 18+ countries and diverse professional backgrounds' },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 rounded-[8px] border border-slate-200 bg-white p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1E40FF]/10">
                  <CheckCircle2 className="h-6 w-6 text-[#1E40FF]" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: Recognition & Graduate Outcomes */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Your Future"
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
              <div key={item.stat} className="rounded-[8px] border border-slate-200 bg-[#F8FAFC] p-8 text-center">
                <p className="mb-2 font-display text-xl font-bold text-[#1E40FF]">{item.stat}</p>
                <p className="text-sm text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11: University Gallery */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Campus & Community"
            title="University Gallery"
            description="Experience Kennedy University's global academic community"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Academic Excellence', subtitle: 'Research Facilities' },
              { title: 'Global Network', subtitle: 'International Events' },
              { title: 'Faculty Leaders', subtitle: 'Distinguished Scholars' },
              { title: 'Graduation Ceremonies', subtitle: 'Celebrating Success' },
              { title: 'Student Collaboration', subtitle: 'Peer Learning' },
              { title: 'Research Impact', subtitle: 'Real-World Applications' },
            ].map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-[8px] border border-slate-200 bg-white transition-all hover:shadow-lg"
              >
                <div className="flex h-48 items-center justify-center bg-gradient-to-br from-[#1E40FF] to-[#22D3EE]">
                  <div className="text-center text-white">
                    <p className="mb-2 text-3xl">🏫</p>
                    <p className="font-semibold">{item.title}</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm font-medium text-slate-600">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 12: Student Success Stories */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Alumni Voices"
            title="Student Success Stories"
            description="Real stories from Kennedy University DBA graduates"
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard
              name="Sarah Chen"
              role="Chief Innovation Officer"
              company="Global Tech Firm"
              quote="The DBA programme transformed how I approach strategic business challenges. The research skills and global network have been instrumental in my advancement."
            />
            <TestimonialCard
              name="David Williams"
              role="Founder & CEO"
              company="Management Consulting"
              quote="Pursuing the DBA while running my business was demanding but rewarding. The flexible delivery enabled me to maintain my practice while building thought leadership."
            />
            <TestimonialCard
              name="Maria Rodriguez"
              role="Research Director"
              company="University of Madrid"
              quote="Kennedy's international community and rigorous research standards elevated my academic profile. I have published multiple papers from my dissertation work."
            />
            <TestimonialCard
              name="James Mitchell"
              role="Strategic Advisor"
              company="Fortune 500 Company"
              quote="The doctoral credential opened doors I did not expect. I now advise on strategic initiatives and speak at international conferences regularly."
            />
            <TestimonialCard
              name="Priya Patel"
              role="Executive Director"
              company="Non-profit Organisation"
              quote="As a mid-career professional, the DBA provided the academic foundation and credibility to advance organisational impact. The curriculum was highly relevant."
            />
            <TestimonialCard
              name="Hans Mueller"
              role="Business Development Lead"
              company="International Consulting"
              quote="The global network I built during the programme has become invaluable. I have collaborated with peers across six continents on research and business initiatives."
            />
          </div>
        </div>
      </section>

      {/* SECTION 13: Application Process */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Getting Started"
            title="The Application Process"
            description="Six straightforward steps to begin your doctoral journey"
          />
          <div className="mx-auto mt-14 max-w-3xl space-y-4">
            {[
              { num: '1', title: 'Initial Eligibility Review', desc: 'Submit your academic background and professional profile for preliminary assessment' },
              { num: '2', title: 'Complete Application Form', desc: 'Provide detailed information about your research interests and career goals' },
              { num: '3', title: 'Document Verification', desc: 'Submit official transcripts and credentials for validation' },
              { num: '4', title: 'Academic Assessment', desc: 'Interview with programme director and potential supervisor' },
              { num: '5', title: 'Admission Decision', desc: 'Receive your admission offer with personalised support plan' },
              { num: '6', title: 'Enrolment & Onboarding', desc: 'Complete enrolment formalities and begin your DBA programme' },
            ].map((item) => (
              <div key={item.num} className="flex gap-6 rounded-[8px] border border-slate-200 bg-white p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1E40FF] font-semibold text-white">
                  {item.num}
                </div>
                <div className="py-1">
                  <h3 className="font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 14: FAQs */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Common Questions"
            title="Frequently Asked Questions"
            description="Everything you need to know before applying"
          />
          <div className="mx-auto mt-14 max-w-3xl space-y-4">
            {[
              {
                q: 'What degree will I receive upon completion?',
                a: 'Upon successful completion of all programme requirements, including the dissertation and viva voce examination, you will be awarded the Doctor of Business Administration (DBA) by Kennedy University.',
              },
              {
                q: 'Is the DBA recognised internationally?',
                a: 'Yes. Kennedy University holds accreditation from QAHE and is registered with multiple government bodies including the French Ministry of Education. The credential is recognised across jurisdictions in Europe, the Americas, and Africa.',
              },
              {
                q: 'Can I study while working full-time?',
                a: 'Absolutely. The programme is delivered entirely online in a part-time format, specifically designed for working executives and professionals who cannot interrupt their careers.',
              },
              {
                q: 'How long does the programme take?',
                a: 'The DBA programme typically takes 24 to 36 months to complete, depending on your research progress and dissertation timeline.',
              },
              {
                q: 'What are the entry requirements?',
                a: 'Applicants should hold a Master\'s degree (or equivalent) and have at least 5 years of relevant professional experience. Each application is reviewed holistically.',
              },
              {
                q: 'Will I have a dedicated research supervisor?',
                a: 'Yes. Each DBA candidate is matched with an experienced supervisor who provides regular one-on-one guidance aligned with your research specialisation.',
              },
            ].map((faq) => (
              <div key={faq.q} className="rounded-[8px] border border-slate-200 bg-white p-6">
                <h3 className="mb-2 font-semibold text-slate-950">{faq.q}</h3>
                <p className="text-sm leading-6 text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 15: Final CTAs */}
      <ConsultationNudge />
      <FinalCTA />
    </main>
  )
}
