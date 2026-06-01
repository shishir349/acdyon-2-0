import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Award, GraduationCap, Globe2, Users, Star, BookOpen,
  CheckCircle2, ArrowRight, Building2, FileText, Shield,
  Lightbulb, Rocket, Heart, Mic2, TrendingUp,
} from 'lucide-react'
import { SectionHeading } from '@/components/ui/section-heading'
import { ConsultationNudge } from '@/components/sections/consultation-nudge'
import { FAQAccordion } from '@/components/ui/faq-accordion'
import {
  honoraryRecognitionFields,
  honoraryRecognitionItems,
  honoraryProfileExamples,
  honoraryFAQsExpanded,
} from '@/lib/data/site'

export const metadata: Metadata = {
  title: 'Honorary Doctorate Recognition | AcdyOn',
  description:
    'Global honorary doctorate pathways for distinguished leaders, entrepreneurs, innovators and professionals. Kennedy University and Dunster Business School.',
}

const KENNEDY_LOGO = 'https://sohhmxayptiosflmlxuu.supabase.co/storage/v1/object/public/brochures/Kennedy-University-520-x-330%20(2).jpg'
const DUNSTER_LOGO = 'https://sohhmxayptiosflmlxuu.supabase.co/storage/v1/object/public/brochures/DBS_New-Final-Logo_6.png'
const HERO_IMAGE = 'https://sohhmxayptiosflmlxuu.supabase.co/storage/v1/object/public/brochures/Page%20Images/Untitled%20design%20(1).png'

const fieldIcons: Record<string, React.ElementType> = {
  'business-leadership': TrendingUp,
  'entrepreneurship': Rocket,
  'education': GraduationCap,
  'technology': Lightbulb,
  'artificial-intelligence': Star,
  'healthcare': Heart,
  'public-service': Building2,
  'innovation': Lightbulb,
  'social-impact': Users,
  'finance': TrendingUp,
  'research': BookOpen,
  'sustainability': Globe2,
  'arts-culture': Mic2,
  'media-communication': Mic2,
  'international-relations': Globe2,
}

export default function HonoraryRecognitionPage() {
  return (
    <main>

      {/* ── SECTION 1: HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-[88vh] overflow-hidden bg-slate-950">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={HERO_IMAGE}
            alt="Honorary Doctorate Recognition"
            fill
            className="object-cover opacity-40"
            unoptimized
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/50 to-slate-950/90" />
        </div>

        <div className="container-premium relative flex min-h-[88vh] flex-col justify-center pb-20 pt-40">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2">
              <Award className="h-4 w-4 text-[#D4AF37]" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#D4AF37]">
                Global Academic Recognition
              </span>
            </div>

            <h1 className="font-display text-5xl leading-tight text-white sm:text-6xl lg:text-7xl">
              Honorary Doctorate Recognition For Distinguished Achievement
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              Global academic recognition pathways designed for accomplished leaders, entrepreneurs, innovators,
              public figures and professionals who have created meaningful impact in their fields.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#pathways"
                className="inline-flex items-center justify-center rounded-full bg-[#D4AF37] px-8 py-4 text-sm font-semibold text-slate-950 transition-all hover:bg-[#c9a030]"
              >
                Explore Recognition Pathways
              </Link>
              <Link
                href="/book-consultation"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-white/10"
              >
                Book Consultation
              </Link>
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white transition-all hover:border-white/40"
              >
                Download Brochure
              </Link>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-slate-950/80 backdrop-blur">
          <div className="container-premium">
            <div className="grid grid-cols-2 gap-8 py-6 md:grid-cols-4">
              {[
                { value: '6+', label: 'Global Institutions' },
                { value: '15+', label: 'Recognition Categories' },
                { value: '18+', label: 'Countries Represented' },
                { value: '5,000+', label: 'Executive Applicants' },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p className="font-display text-3xl font-semibold text-[#D4AF37]">{value}</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-400">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: WHAT IS AN HONORARY DOCTORATE? ───────────────────────── */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Understanding Honorary Recognition"
            title="What Is An Honorary Doctorate?"
            description="One of academia's oldest and most prestigious traditions — a formal act of institutional acknowledgement for a career that has created lasting impact."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Award,
                title: 'A Formal Institutional Honour',
                body: 'An honorary doctorate (Doctor Honoris Causa) is conferred by a university to recognise exceptional professional achievement, leadership, and contribution to a field, industry, or society — without requiring coursework or research.',
              },
              {
                icon: BookOpen,
                title: 'Centuries of Academic Tradition',
                body: 'Honorary degrees trace back to the 15th century and have been awarded to statesmen, scientists, artists, and leaders throughout history. Universities worldwide use this distinction to acknowledge exceptional human contribution.',
              },
              {
                icon: Globe2,
                title: 'Globally Recognised Distinction',
                body: "Recipients carry the 'Dr.' prefix in professional and public settings, consistent with the conferring institution's guidelines. The award is recognised across academic, professional, and diplomatic contexts internationally.",
              },
              {
                icon: Star,
                title: 'Why Institutions Award It',
                body: 'Universities grant honorary recognition to associate their institution with distinguished figures whose values and achievements align with their academic mission — and to formally acknowledge impact that transcends the classroom.',
              },
              {
                icon: Shield,
                title: 'Academic Significance',
                body: 'The award reflects the highest level of institutional acknowledgement — a statement by an accredited academic body that your life\'s work merits formal scholarly distinction. It carries the full weight of the conferring institution\'s standing.',
              },
              {
                icon: FileText,
                title: 'Not An Academic Degree Programme',
                body: 'An honorary doctorate requires no examinations, no thesis, and no coursework. It is a recognition of achievements already earned across your professional career — not a qualification to be studied toward.',
              },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-[8px] border border-slate-200 bg-white p-8 transition-all hover:shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[8px] bg-[#D4AF37]/10">
                  <Icon className="h-6 w-6 text-[#D4AF37]" />
                </div>
                <h3 className="mb-3 font-semibold text-slate-950">{title}</h3>
                <p className="text-sm leading-7 text-slate-600">{body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-[8px] border border-[#D4AF37]/25 bg-[#D4AF37]/5 p-10 text-center">
            <p className="mx-auto max-w-3xl font-display text-2xl leading-snug text-slate-950 sm:text-3xl">
              "An honorary doctorate is not a shortcut to a credential. It is a formal institutional statement that your professional life has already earned distinction."
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: WHO IS THIS FOR? ─────────────────────────────────────── */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Recognition Profiles"
            title="Who Is This Recognition For?"
            description="Honorary distinction is awarded across a wide spectrum of professional achievement — wherever extraordinary contribution can be verified and documented."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {[
              { icon: '🚀', title: 'Entrepreneurs', note: 'Founders who built enterprises, created employment, and disrupted markets' },
              { icon: '🏭', title: 'Founders', note: 'Visionaries who created institutions, movements, or industries from the ground up' },
              { icon: '👔', title: 'CEOs & Directors', note: 'Executive leaders with documented records of organisational transformation' },
              { icon: '📊', title: 'Business Leaders', note: 'Senior professionals who shaped industries, markets, and business practice' },
              { icon: '📚', title: 'Authors', note: 'Writers and thought leaders whose published work has shaped professional discourse' },
              { icon: '🏛️', title: 'Public Servants', note: 'Government officials and civil servants who drove meaningful public policy impact' },
              { icon: '🔬', title: 'Researchers', note: 'Scientists and scholars whose work has advanced knowledge in their discipline' },
              { icon: '🌍', title: 'Social Impact Leaders', note: 'Changemakers who advanced equity, development, or humanitarian causes' },
              { icon: '🎨', title: 'Artists & Creatives', note: 'Cultural figures whose work has enriched or shaped society and public life' },
              { icon: '💡', title: 'Industry Innovators', note: 'Pioneers who introduced new approaches, technologies, or paradigms to their field' },
            ].map(({ icon, title, note }) => (
              <div
                key={title}
                className="rounded-[8px] border border-slate-200 bg-white p-6 text-center transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-3 text-4xl">{icon}</div>
                <h3 className="mb-2 font-semibold text-slate-950">{title}</h3>
                <p className="text-xs leading-5 text-slate-500">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: WHY HONORARY RECOGNITION MATTERS ─────────────────────── */}
      <section className="bg-slate-950 py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Professional Impact"
            title="Why Honorary Recognition Matters"
            description="The real value of honorary distinction lies not in the certificate — but in what it permanently enables."
            variant="dark"
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: '🏛️',
                title: 'Professional Credibility',
                body: 'A university-conferred doctorate elevates your standing in every room — boardrooms, conferences, academic institutions, and media appearances.',
              },
              {
                icon: '🎓',
                title: 'Institutional Recognition',
                body: 'Formal affiliation with a globally accredited institution creates a verifiable, permanent record of your achievement that outlasts any professional role.',
              },
              {
                icon: '🌍',
                title: 'Global Positioning',
                body: 'Honorary recognition is understood across borders. The "Dr." prefix carries meaning in every country, culture, and professional context.',
              },
              {
                icon: '🖊️',
                title: 'Thought Leadership',
                body: 'A doctoral distinction opens publishing platforms, keynote invitations, and academic commentary opportunities that would otherwise be inaccessible.',
              },
              {
                icon: '🤝',
                title: 'Industry Acknowledgement',
                body: 'Beyond the individual, honorary recognition signals to peers, clients, and competitors that your career merits formal scholarly notice.',
              },
              {
                icon: '🏆',
                title: 'Legacy Building',
                body: 'An honorary doctorate is permanent. It is a part of your official record — and the record of the institution that awarded it — indefinitely.',
              },
              {
                icon: '📖',
                title: 'Academic Association',
                body: 'Recipients gain formal association with a university community — access to academic networks, events, and the intellectual ecosystem of the institution.',
              },
              {
                icon: '📈',
                title: 'Career Advancement',
                body: 'Board positions, advisory roles, professorial appointments, and executive placements increasingly favour candidates with doctoral standing.',
              },
            ].map(({ icon, title, body }) => (
              <article key={title} className="rounded-[8px] border border-white/10 bg-white/[0.04] p-6 transition-all hover:bg-white/[0.07]">
                <p className="mb-3 text-3xl">{icon}</p>
                <h3 className="mb-2 font-semibold text-white">{title}</h3>
                <p className="text-sm leading-6 text-slate-400">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: FIELDS OF RECOGNITION ───────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Areas of Distinction"
            title="Fields of Recognition"
            description="Honorary doctorates are awarded across virtually every domain of professional and public life. Your field is almost certainly represented."
          />

          <div className="mt-14 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {honoraryRecognitionFields.map((field) => {
              const Icon = fieldIcons[field.id] || Award
              return (
                <div
                  key={field.id}
                  className="rounded-[8px] border border-slate-200 bg-[#F8FAFC] p-5 transition-all hover:border-[#D4AF37]/40 hover:shadow-md"
                >
                  <Icon className="mb-3 h-5 w-5 text-[#D4AF37]" />
                  <h3 className="mb-1 text-sm font-semibold text-slate-950">{field.name}</h3>
                  <p className="text-xs leading-5 text-slate-500">{field.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: WHAT RECIPIENTS RECEIVE ─────────────────────────────── */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="The Award Package"
            title="What Recipients Receive"
            description="Honorary recognition is delivered as a comprehensive award package — each element designed to communicate distinction at the highest level."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: '📜',
                title: 'Honorary Degree Certificate',
                description: 'A formally issued, signed, and sealed certificate from the conferring institution — the permanent centrepiece of your recognition.',
              },
              {
                icon: '📄',
                title: 'Recognition Citation',
                description: 'A written citation documenting the specific achievements and contributions for which the distinction is being conferred.',
              },
              {
                icon: '🎓',
                title: 'Academic Recognition Record',
                description: 'Permanent entry in the institution\'s official academic records — verifiable by third parties, employers, and academic bodies.',
              },
              {
                icon: '✅',
                title: 'Institutional Verification',
                description: 'An official verification letter and digital assets confirming the authenticity and standing of your honorary award.',
              },
              {
                icon: '🏛️',
                title: 'Ceremonial Recognition',
                description: 'Invitation to a formal recognition ceremony or convocation — in-person or virtual — marking the conferral of your distinction.',
              },
              {
                icon: '🌐',
                title: 'Global Alumni Association',
                description: 'Membership in the institution\'s honorary recipients community — connecting you with a global network of distinguished alumni.',
              },
            ].map(({ icon, title, description }) => (
              <div key={title} className="rounded-[8px] border border-slate-200 bg-white p-8 transition-all hover:shadow-lg">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-[8px] bg-slate-950 text-2xl">
                  {icon}
                </div>
                <h3 className="mb-2 font-semibold text-slate-950">{title}</h3>
                <p className="text-sm leading-6 text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 7: GLOBAL ACADEMIC RECOGNITION ──────────────────────────── */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#1E40FF]">International Standing</p>
              <h2 className="font-display text-4xl leading-tight text-slate-950 sm:text-5xl">
                Recognition That Travels With You Everywhere
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                An honorary doctorate from an internationally accredited institution is understood — and respected — in every country, professional context, and academic setting globally.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  'Recognised across 18+ countries by professional and academic bodies',
                  'Accredited institutions with verifiable international standing',
                  'Accepted in professional, academic, and diplomatic contexts',
                  'Permanent record that cannot be taken away or diminished by time',
                ].map((point) => (
                  <div key={point} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#1E40FF]" />
                    <p className="text-sm leading-6 text-slate-600">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: '18+', label: 'Countries Recognised' },
                { stat: '100%', label: 'Accredited Institutions' },
                { stat: '6+', label: 'Partner Universities' },
                { stat: '5,000+', label: 'Professionals Guided' },
              ].map(({ stat, label }) => (
                <div key={label} className="rounded-[8px] border border-slate-200 bg-[#F8FAFC] p-8 text-center">
                  <p className="font-display text-4xl font-bold text-[#1E40FF]">{stat}</p>
                  <p className="mt-2 text-xs font-medium uppercase tracking-wide text-slate-500">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: THE RECOGNITION JOURNEY ─────────────────────────────── */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="From Application To Award"
            title="The Recognition Journey"
            description="A structured, guided process from initial eligibility review through to formal award issuance."
          />

          <div className="mx-auto mt-14 max-w-3xl space-y-4">
            {[
              { n: '01', title: 'Eligibility Review', detail: 'Submit your professional profile for confidential assessment against institutional nomination criteria.', accent: '#D4AF37' },
              { n: '02', title: 'Profile Assessment', detail: 'Detailed review of your achievements, contributions, and the narrative of your professional impact.', accent: '#1E40FF' },
              { n: '03', title: 'Institution Matching', detail: 'Identification of the partner institution whose recognition focus and standing best aligns with your profile.', accent: '#22D3EE' },
              { n: '04', title: 'Institution Review', detail: 'Your nomination is formally submitted to and reviewed by the partner institution\'s academic board.', accent: '#D4AF37' },
              { n: '05', title: 'Recognition Approval', detail: 'Upon board approval, you receive formal confirmation of the honorary distinction and award terms.', accent: '#1E40FF' },
              { n: '06', title: 'Award Issuance', detail: 'Formal conferral of the Honorary Doctorate — certificate, documentation, and ceremonial recognition.', accent: '#22D3EE' },
            ].map((step) => (
              <div
                key={step.n}
                className="flex gap-5 rounded-[8px] border border-slate-200 bg-white p-6"
                style={{ borderLeftColor: step.accent, borderLeftWidth: 4 }}
              >
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ backgroundColor: step.accent }}
                >
                  {step.n}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-950">{step.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 9: DISTINGUISHED PROFILE EXAMPLES ───────────────────────── */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Recognition Examples"
            title="Distinguished Profile Examples"
            description="The types of professional backgrounds and achievements that lead to honorary recognition across different domains."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {honoraryProfileExamples.map((profile) => {
              const parts = profile.transition.split('→')
              const from = parts[0]?.trim() ?? ''
              const to = parts[1]?.trim() ?? ''
              return (
                <div key={profile.id} className="overflow-hidden rounded-[8px] border border-slate-200 bg-white transition-all hover:shadow-lg">
                  <div className="border-b border-[#D4AF37]/20 bg-[#D4AF37]/5 px-6 py-4">
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-400">{from}</p>
                    <p className="mt-1 text-xs font-bold uppercase tracking-wide text-[#D4AF37]">→ {to}</p>
                  </div>
                  <div className="p-6 space-y-3">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-slate-400">Achievements</p>
                      <p className="mt-1 text-sm text-slate-700">{profile.achievements}</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-slate-400">Recognition</p>
                      <p className="mt-1 text-sm text-slate-700">{profile.recognition}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 10: CHOOSE YOUR INSTITUTION ─────────────────────────────── */}
      <section id="pathways" className="bg-slate-950 py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Partner Institutions"
            title="Choose Your Institution"
            description="AcdyOn works with two distinguished institutions for the Honorary Doctorate pathway — each with a different academic character and recognition philosophy."
            variant="dark"
          />

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {/* Kennedy University */}
            <div className="flex flex-col rounded-[8px] border border-white/10 bg-white/[0.04] p-8 transition-all hover:bg-white/[0.07]">
              <div className="mb-6 flex h-20 items-center">
                <div className="relative h-16 w-52">
                  <Image src={KENNEDY_LOGO} alt="Kennedy University" fill className="object-contain object-left" unoptimized />
                </div>
              </div>

              <div className="mb-2 flex items-center gap-2">
                <span className="text-lg">🇺🇸</span>
                <span className="text-xs font-bold uppercase tracking-wide text-slate-400">USA / France / Multiple Regions</span>
              </div>

              <h3 className="mb-4 font-display text-2xl text-white">Kennedy University</h3>

              <p className="mb-6 text-sm leading-7 text-slate-300">
                A private higher education institution with over 25 years of global reach across USA, France, and African regions. Kennedy's honorary doctorate pathway is designed for accomplished professionals whose contributions span international contexts.
              </p>

              <div className="mb-6 space-y-3 border-t border-white/10 pt-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-[#D4AF37]">Recognition Philosophy</p>
                  <p className="mt-1 text-sm text-slate-300">International professional recognition across business, leadership, social impact, and academic contribution.</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-[#D4AF37]">Recognition Categories</p>
                  <p className="mt-1 text-sm text-slate-300">Business Administration · Social Impact · Academic Leadership · Innovation</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-[#D4AF37]">Institutional Standing</p>
                  <p className="mt-1 text-sm text-slate-300">QAHE Accredited · French Ministry Registered · UN DESA Listed · Florida State Registered</p>
                </div>
              </div>

              <div className="mt-auto">
                <Link
                  href="/honorary-recognition/kennedy-university"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-6 py-3 text-sm font-semibold text-[#D4AF37] transition-all hover:bg-[#D4AF37]/20"
                >
                  View Institution <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Dunster Business School */}
            <div className="flex flex-col rounded-[8px] border border-white/10 bg-white/[0.04] p-8 transition-all hover:bg-white/[0.07]">
              <div className="mb-6 flex h-20 items-center">
                <div className="relative h-16 w-52">
                  <Image src={DUNSTER_LOGO} alt="Dunster Business School" fill className="object-contain object-left" unoptimized />
                </div>
              </div>

              <div className="mb-2 flex items-center gap-2">
                <span className="text-lg">🇨🇭</span>
                <span className="text-xs font-bold uppercase tracking-wide text-slate-400">Switzerland (Zug)</span>
              </div>

              <h3 className="mb-4 font-display text-2xl text-white">Dunster Business School</h3>

              <p className="mb-6 text-sm leading-7 text-slate-300">
                A Swiss private business school (CHE-206.619.191) with QS 4-Star rating and EAHEA/QAHE accreditation, headquartered in Zug — Europe's premier business canton. Dunster's honorary recognition carries the weight of Swiss academic prestige.
              </p>

              <div className="mb-6 space-y-3 border-t border-white/10 pt-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-[#D4AF37]">Recognition Philosophy</p>
                  <p className="mt-1 text-sm text-slate-300">Swiss executive recognition for business leaders, entrepreneurs, and global professionals with verified international impact.</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-[#D4AF37]">Recognition Categories</p>
                  <p className="mt-1 text-sm text-slate-300">Business Excellence · Executive Leadership · Innovation · International Relations</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-[#D4AF37]">Institutional Standing</p>
                  <p className="mt-1 text-sm text-slate-300">QS 4-Star · EAHEA Accredited · QAHE Accredited · ACBSP Candidate · Swiss Registered</p>
                </div>
              </div>

              <div className="mt-auto">
                <Link
                  href="/honorary-recognition/dunster-business-school"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-6 py-3 text-sm font-semibold text-[#D4AF37] transition-all hover:bg-[#D4AF37]/20"
                >
                  View Institution <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-slate-500">
            Not sure which institution is right for you?{' '}
            <Link href="/book-consultation" className="text-[#D4AF37] hover:underline">
              Book a confidential consultation
            </Link>{' '}
            — we will match you based on your profile and goals.
          </p>
        </div>
      </section>

      {/* ── SECTION 11: INSTITUTION DETAIL PREVIEW ──────────────────────────── */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Dedicated Institution Pages"
            title="Explore Each Institution In Detail"
            description="Each partner institution has a dedicated page covering the full recognition process, eligibility, and what recipients receive."
          />

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {[
              {
                logo: KENNEDY_LOGO,
                name: 'Kennedy University',
                flag: '🇺🇸',
                country: 'USA / France',
                teaser: '12 detailed sections covering recognition philosophy, eligibility, nomination process, recipient profiles, accreditation, and FAQs.',
                href: '/honorary-recognition/kennedy-university',
                tags: ['QAHE Accredited', 'Multi-Region', '25+ Years'],
              },
              {
                logo: DUNSTER_LOGO,
                name: 'Dunster Business School',
                flag: '🇨🇭',
                country: 'Switzerland',
                teaser: '12 detailed sections covering Swiss academic standing, executive recognition philosophy, nomination process, and full award documentation.',
                href: '/honorary-recognition/dunster-business-school',
                tags: ['QS 4-Star', 'EAHEA Accredited', 'Swiss Registered'],
              },
            ].map(({ logo, name, flag, country, teaser, href, tags }) => (
              <Link
                key={name}
                href={href}
                className="group flex flex-col rounded-[8px] border border-slate-200 bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5 flex h-16 items-center">
                  <div className="relative h-12 w-44">
                    <Image src={logo} alt={name} fill className="object-contain object-left" unoptimized />
                  </div>
                </div>
                <div className="mb-2 flex items-center gap-2">
                  <span>{flag}</span>
                  <span className="text-xs font-medium text-slate-400">{country}</span>
                </div>
                <h3 className="mb-2 font-display text-xl text-slate-950">{name}</h3>
                <p className="mb-5 text-sm leading-6 text-slate-500">{teaser}</p>
                <div className="mb-6 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-[#F8FAFC] px-3 py-1 text-xs font-semibold text-slate-600">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-[#1E40FF]">
                  View Full Institution Page
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 12: FAQ ──────────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Common Questions"
            title="Frequently Asked Questions"
            description="Everything you need to know about honorary doctorate recognition before beginning your journey."
          />
          <div className="mt-14">
            <FAQAccordion
              faqs={honoraryFAQsExpanded.map((f) => ({ q: f.question, a: f.answer }))}
            />
          </div>
        </div>
      </section>

      {/* ── SECTION 13: DOWNLOADABLE RESOURCES ──────────────────────────────── */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Programme Materials"
            title="Downloadable Resources"
            description="Review detailed information about the honorary recognition pathway before beginning your assessment."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: '📋',
                title: 'Recognition Overview Brochure',
                description: 'A complete guide to the honorary doctorate process, eligibility criteria, institutions, and what recipients receive.',
                cta: 'Download PDF',
              },
              {
                icon: '✅',
                title: 'Eligibility Checklist',
                description: 'A structured checklist to help you assess your professional achievements against typical nomination criteria.',
                cta: 'Download Checklist',
              },
              {
                icon: '🏫',
                title: 'Institution Comparison Guide',
                description: 'A side-by-side overview of Kennedy University and Dunster Business School — recognition focus, accreditation, and process.',
                cta: 'Download Guide',
              },
            ].map(({ icon, title, description, cta }) => (
              <div key={title} className="rounded-[8px] border border-slate-200 bg-white p-8 text-center">
                <div className="mb-4 text-5xl">{icon}</div>
                <h3 className="mb-3 font-semibold text-slate-950">{title}</h3>
                <p className="mb-6 text-sm leading-6 text-slate-600">{description}</p>
                <Link
                  href="/book-consultation"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#1E40FF] hover:text-[#1937dd]"
                >
                  {cta} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 14: FINAL CTA ────────────────────────────────────────────── */}
      <section className="bg-slate-950 py-24">
        <div className="container-premium text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#D4AF37]">Your Legacy Awaits</p>
          <h2 className="mx-auto max-w-3xl font-display text-4xl leading-tight text-white sm:text-5xl">
            Begin Your Recognition Journey
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            Submit your credentials for a confidential, obligation-free assessment by our senior facilitation team to determine your eligibility for honorary recognition.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/book-consultation"
              className="inline-flex items-center rounded-full bg-[#D4AF37] px-8 py-4 text-sm font-semibold text-slate-950 transition-all hover:bg-[#c9a030]"
            >
              Apply For Assessment
            </Link>
            <Link
              href="/book-consultation"
              className="inline-flex items-center rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white transition-all hover:border-white/40 hover:bg-white/5"
            >
              Book Consultation
            </Link>
            <Link
              href="#"
              className="inline-flex items-center rounded-full border border-[#D4AF37]/30 px-8 py-4 text-sm font-semibold text-[#D4AF37] transition-all hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/5"
            >
              Download Brochure
            </Link>
          </div>
        </div>
      </section>

      <ConsultationNudge />
    </main>
  )
}
