import type { Metadata } from 'next'
import { CheckCircle2, Award, Users, Globe2, Target, Zap, Users2, BookOpen } from 'lucide-react'
import { PageHero } from '@/components/sections/page-hero'
import { SectionHeading } from '@/components/ui/section-heading'
import { RecognitionBadge } from '@/components/cards/recognition-badge'
import { PartnershipCard } from '@/components/cards/partnership-card'
import { TestimonialCard } from '@/components/cards/testimonial-card'
import { ConsultationNudge } from '@/components/sections/consultation-nudge'
import { FinalCTA } from '@/components/sections/final-cta'

export const metadata: Metadata = {
  title: 'Doctor of Philosophy (PhD) — Kennedy University | AcdyOn',
  description:
    "Advance your academic and professional career with Kennedy University's globally recognized PhD programme. Rigorous research-led doctoral education for thought leaders.",
}

export default function KennedyPhDPage() {
  return (
    <main>
      {/* SECTION 1: Hero */}
      <PageHero
        eyebrow="Kennedy University"
        title="Doctor of Philosophy (PhD)"
        description="Research-led doctoral education for the next generation of global thought leaders"
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
              { label: 'Duration', value: '36–48 Months' },
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
                  we serve scholars, executives, and thought leaders pursuing the highest level of doctoral achievement.
                </p>
                <p>
                  Our PhD programme emphasises rigorous original research contribution, independent scholarly inquiry,
                  and international academic collaboration. Recognised by leading international accreditation bodies,
                  Kennedy University offers a structured yet flexible research pathway for exceptional candidates.
                </p>
                <p>
                  We position ourselves at the intersection of academic excellence and global impact, preparing PhD
                  graduates for careers in academia, research institutions, and senior professional leadership.
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

      {/* SECTION 3: Why Scholars Choose */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Competitive Advantages"
            title="Why Scholars Choose Kennedy University"
            description="Distinctive benefits that set our PhD programme apart from traditional research pathways"
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                Icon: Zap,
                title: 'Independent Research Model',
                description: 'Full academic freedom to pursue original scholarship aligned with your intellectual interests',
              },
              {
                Icon: Globe2,
                title: 'International Academic Network',
                description: 'Access to faculty and peer networks spanning 18+ countries for global scholarly collaboration',
              },
              {
                Icon: Users2,
                title: 'Flexible Distance Learning',
                description: 'Online delivery designed for researchers who cannot relocate for full-time residential study',
              },
              {
                Icon: BookOpen,
                title: 'Expert Supervision',
                description: 'Matched with supervisors who have deep expertise in your specific research domain',
              },
              {
                Icon: Target,
                title: 'Cross-Border Recognition',
                description: 'Credentials recognised across multiple jurisdictions, academia, and professional sectors',
              },
              {
                Icon: Zap,
                title: 'Knowledge Contribution',
                description: 'Make an original and significant contribution to knowledge in your discipline',
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
              collaboration="Joint research initiatives and academic collaboration in healthcare and life sciences"
            />
            <PartnershipCard
              institution="European College of Innovation (ECI)"
              country="Malta"
              collaboration="Collaborative programmes in innovation research and technology-driven scholarship"
            />
            <PartnershipCard
              institution="University of Pacific"
              country="USA"
              collaboration="Dual degree pathways and research credit agreements for PhD candidates"
            />
            <PartnershipCard
              institution="College of Pharmaceutical Sciences Riau"
              country="Indonesia"
              collaboration="Joint research, academic exchanges, and collaborative seminar programmes"
            />
            <PartnershipCard
              institution="Taongi National University"
              country="Liberia"
              collaboration="Credit recognition and student transfer pathways for research continuation"
            />
            <PartnershipCard
              institution="KBS Sport College"
              country="South Korea"
              collaboration="Research collaboration in sports science, management, and applied social sciences"
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
            description="Six-phase pathway from admission to doctoral award"
          />
          <div className="mt-14 space-y-4">
            {[
              { step: '01', title: 'Eligibility Review', detail: 'Assessment of academic background and research potential (Weeks 1–2)', accent: '#1E40FF' },
              { step: '02', title: 'Research Proposal Submission', detail: 'Development and submission of a detailed research proposal (Weeks 3–8)', accent: '#22D3EE' },
              { step: '03', title: 'Supervisor Matching', detail: 'Matched with a subject-specialist supervisor for your research area (Weeks 9–10)', accent: '#1E40FF' },
              { step: '04', title: 'Literature Review & Methodology', detail: 'Comprehensive review and research design development (Months 3–8)', accent: '#22D3EE' },
              { step: '05', title: 'Data Collection & Analysis', detail: 'Original research, data collection, and scholarly analysis (Months 9–36)', accent: '#1E40FF' },
              { step: '06', title: 'Thesis Submission & Viva', detail: 'Final thesis examination, viva voce, and degree conferment (Months 37–48)', accent: '#22D3EE' },
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
            title="PhD Research Specialisations"
            description="Choose a research area aligned with your intellectual interests and scholarly ambitions"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {[
              'Business & Management',
              'Social Sciences',
              'Interdisciplinary Studies',
              'Educational Leadership',
              'Health Management',
              'Policy & Governance',
              'International Relations',
              'Sustainability & Development',
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
            description="The PhD is ideal for those committed to original scholarly inquiry and academic impact"
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { role: 'Research Scholars', icon: '🔬', description: 'Individuals committed to advancing knowledge through rigorous independent research' },
              { role: 'Academic Faculty', icon: '🎓', description: 'Lecturers and educators advancing credentials for professorial roles and tenure' },
              { role: 'Senior Professionals', icon: '💼', description: 'Experienced practitioners seeking the highest academic recognition in their field' },
              { role: 'Policy Researchers', icon: '🏛️', description: 'Government and NGO leaders applying scholarly research to real-world policy challenges' },
              { role: 'Industry Experts', icon: '📊', description: 'Technical specialists contributing domain expertise to the academic knowledge base' },
              { role: 'International Scholars', icon: '🌍', description: 'Researchers seeking globally recognised doctoral credentials for cross-border careers' },
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
            description="Comprehensive support throughout your doctoral research journey"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {[
              { title: 'Online Research Portal', description: 'Comprehensive digital research resources, academic databases, and library tools available 24/7' },
              { title: 'Expert Supervision', description: 'Regular one-on-one sessions with a subject-expert supervisor guiding your research direction' },
              { title: 'Research Skills Development', description: 'Methodology workshops, academic writing support, and research design training throughout your programme' },
              { title: 'Faculty Engagement', description: 'Direct interaction with leading scholars through seminars, colloquia, and academic consultation' },
              { title: 'Library & Journal Access', description: 'Unlimited access to peer-reviewed journals, academic databases, and scholarly publications' },
              { title: 'International Research Community', description: 'Engage with fellow PhD candidates and researchers across 18+ countries worldwide' },
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
            description="What Kennedy University PhD graduates achieve"
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { stat: 'Academic Careers', detail: 'Faculty and research positions at universities worldwide' },
              { stat: 'Research Leadership', detail: 'Principal investigator and research director roles' },
              { stat: 'Publishing Impact', detail: 'Peer-reviewed publications and conference presentations' },
              { stat: 'Global Influence', detail: 'Policy advisory and international consultancy roles' },
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
            description="Experience Kennedy University's global research community"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Research Facilities', subtitle: 'State-of-the-Art Resources' },
              { title: 'Global Colloquia', subtitle: 'International Research Events' },
              { title: 'Distinguished Faculty', subtitle: 'World-Class Scholars' },
              { title: 'Doctoral Ceremonies', subtitle: 'Celebrating Achievement' },
              { title: 'Research Collaboration', subtitle: 'Interdisciplinary Teams' },
              { title: 'Knowledge Impact', subtitle: 'Real-World Applications' },
            ].map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-[8px] border border-slate-200 bg-white transition-all hover:shadow-lg"
              >
                <div className="flex h-48 items-center justify-center bg-gradient-to-br from-[#1E40FF] to-[#22D3EE]">
                  <div className="text-center text-white">
                    <p className="mb-2 text-3xl">🔬</p>
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
            description="Real stories from Kennedy University PhD graduates"
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard
              name="Dr. Amara Diallo"
              role="Associate Professor"
              company="University of Geneva"
              quote="The PhD programme at Kennedy provided me with the rigorous foundation I needed to transition from industry into academia. The supervision was exceptional."
            />
            <TestimonialCard
              name="Dr. Benjamin Osei"
              role="Head of Research"
              company="African Development Institute"
              quote="My research on sustainable finance gained international recognition largely because of the scholarly standards Kennedy instilled throughout the programme."
            />
            <TestimonialCard
              name="Dr. Natalia Kovacs"
              role="Policy Advisor"
              company="European Commission"
              quote="The interdisciplinary approach and international network made my PhD truly unique. I now advise EU policy based directly on my dissertation findings."
            />
            <TestimonialCard
              name="Dr. Marcus Thompson"
              role="Senior Research Fellow"
              company="Global Strategy Institute"
              quote="Kennedy's flexible online model allowed me to complete my PhD while consulting full-time. The quality of supervision never felt compromised by distance."
            />
            <TestimonialCard
              name="Dr. Fatima Al-Rashid"
              role="Dean of Business"
              company="Gulf Business University"
              quote="The doctoral credential from Kennedy opened pathways I could not have imagined. I progressed from lecturer to Dean within three years of graduating."
            />
            <TestimonialCard
              name="Dr. Lin Wei"
              role="Chief Science Officer"
              company="Asia Innovation Fund"
              quote="The research skills and global perspective I gained through the programme became the foundation of my entire career in innovation policy."
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
            description="Six straightforward steps to begin your PhD journey"
          />
          <div className="mx-auto mt-14 max-w-3xl space-y-4">
            {[
              { num: '1', title: 'Initial Eligibility Review', desc: 'Submit your academic background and research interests for preliminary assessment' },
              { num: '2', title: 'Research Proposal Submission', desc: 'Develop and submit a detailed proposal outlining your intended research area and methodology' },
              { num: '3', title: 'Document Verification', desc: 'Submit official transcripts, credentials, and supporting academic documents for validation' },
              { num: '4', title: 'Supervisor Interview', desc: 'Meet with a potential supervisor to align research interests and confirm academic fit' },
              { num: '5', title: 'Admission Decision', desc: 'Receive your offer letter and personalised research support plan' },
              { num: '6', title: 'Enrolment & Onboarding', desc: 'Complete enrolment formalities, access the research portal, and begin your PhD' },
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
                a: 'Upon successful completion of all requirements including thesis submission and viva voce examination, you will be awarded the Doctor of Philosophy (PhD) by Kennedy University.',
              },
              {
                q: 'Is the PhD recognised internationally?',
                a: 'Yes. Kennedy University holds QAHE accreditation and is registered with multiple government bodies including the French Ministry of Education, giving its credentials wide international recognition.',
              },
              {
                q: 'Can I complete the PhD while working?',
                a: 'Yes. The programme is delivered entirely online in a flexible format specifically designed to accommodate research candidates who maintain professional or academic roles.',
              },
              {
                q: 'How long does the PhD take?',
                a: 'The programme typically takes 36 to 48 months, depending on your research complexity, supervisor assessment, and thesis submission timeline.',
              },
              {
                q: 'What are the entry requirements?',
                a: "Applicants should hold a Master's degree or equivalent, and demonstrate strong academic potential and a well-defined research focus. Applications are reviewed holistically.",
              },
              {
                q: 'What support will I receive throughout the programme?',
                a: 'You will be assigned a specialist supervisor, have access to research skills workshops, library resources, academic writing support, and a global peer research community.',
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
