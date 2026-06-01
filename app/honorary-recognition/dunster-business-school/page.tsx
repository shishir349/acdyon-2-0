import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, Award, Globe2, Shield, Star, Building2 } from 'lucide-react'
import { SectionHeading } from '@/components/ui/section-heading'
import { ConsultationNudge } from '@/components/sections/consultation-nudge'
import { FAQAccordion } from '@/components/ui/faq-accordion'

export const metadata: Metadata = {
  title: 'Honorary Doctorate — Dunster Business School, Switzerland | AcdyOn',
  description:
    'Honorary Doctorate from Dunster Business School — QS 4-Star Swiss academic recognition for accomplished executives, entrepreneurs, and global leaders.',
}

const LOGO = 'https://sohhmxayptiosflmlxuu.supabase.co/storage/v1/object/public/brochures/DBS_New-Final-Logo_6.png'

const faqs = [
  {
    q: 'What honorary awards does Dunster Business School confer?',
    a: 'Dunster Business School confers the Honorary Doctorate (Doctor Honoris Causa) to recognise exceptional professional achievement, executive leadership, and meaningful contribution to business, innovation, or public life.',
  },
  {
    q: 'Is the Dunster Business School honorary doctorate internationally recognised?',
    a: 'Yes. Dunster holds EAHEA accreditation, full QAHE accreditation, and a QS 4-Star rating — all independently verifiable. The Swiss private model is internationally respected and the credential is accepted across Europe, Asia, the Middle East, and beyond.',
  },
  {
    q: 'What does the Swiss private model mean for an honorary doctorate?',
    a: 'Dunster operates under Swiss institutional autonomy and is not bound by the Swiss Higher Education Act (HEdA). This enables it to confer honorary awards independently while maintaining international accreditation. This is standard practice for leading European private business schools.',
  },
  {
    q: 'Can I use "Dr." after receiving a Dunster honorary doctorate?',
    a: 'Yes. The honorary doctorate entitles recipients to use the "Dr." prefix in professional and public settings, consistent with Dunster Business School\'s institutional guidelines.',
  },
  {
    q: 'Why does the Swiss location matter?',
    a: 'Switzerland is consistently ranked as the world\'s top innovation nation and is home to a prestigious cluster of academic institutions. A Swiss honorary doctorate carries the implicit weight of precision, rigour, and global credibility associated with Swiss education.',
  },
  {
    q: 'What is the typical timeline for Dunster honorary recognition?',
    a: 'From initial eligibility assessment to formal award issuance, the process typically takes 3–6 months, subject to the institution\'s evaluation schedule and profile complexity.',
  },
  {
    q: 'What documentation do I need to submit?',
    a: 'Typically required: professional biography, CV/resume, documented achievement summary, letters of recommendation, and a statement of contributions. AcdyOn guides you through the full dossier preparation.',
  },
  {
    q: 'Will I receive a physical certificate?',
    a: 'Yes. Dunster Business School issues a formally signed and sealed physical certificate, along with a comprehensive documentation package for professional use.',
  },
  {
    q: 'Is there a graduation ceremony?',
    a: 'Dunster Business School provides ceremonial recognition for honorary recipients — virtual or in-person options are available. Details are confirmed upon approval.',
  },
]

export default function DunsterHonoraryPage() {
  return (
    <main>
      {/* SECTION 1: Hero */}
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#ffffff,#f8fafc_50%,#eef4ff)] pb-20 pt-36">
        <div className="absolute right-[-10%] top-20 h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-3xl" />
        <div className="container-premium relative">
          <div className="mb-8 flex flex-wrap items-center gap-4">
            <div className="relative h-14 w-44 overflow-hidden rounded-[4px]">
              <Image src={LOGO} alt="Dunster Business School" fill className="object-contain object-left" unoptimized />
            </div>
            <span className="text-2xl" title="Switzerland">🇨🇭</span>
            <div className="flex items-center gap-1 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/8 px-3 py-1">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-[#D4AF37] text-[#D4AF37]" />
              ))}
              <span className="ml-1 text-xs font-semibold text-[#D4AF37]">QS 4-Star</span>
            </div>
          </div>

          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#1E40FF]">
            Dunster Business School · Zug, Switzerland
          </p>
          <h1 className="max-w-4xl font-display text-4xl leading-tight text-slate-950 sm:text-5xl md:text-6xl">
            Swiss Honorary Doctorate For Global Leaders
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Honorary recognition from Switzerland's QS 4-Star rated private business school — a prestigious award for executives, entrepreneurs, and professionals whose careers merit formal academic distinction.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/book-consultation"
              className="inline-flex items-center justify-center rounded-full bg-[#D4AF37] px-8 py-4 text-sm font-semibold text-slate-950 transition-all hover:bg-[#c9a030]"
            >
              Apply Now
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-4 text-sm font-semibold text-slate-950 transition-all hover:shadow-md"
            >
              Download Brochure
            </Link>
            <Link
              href="/book-consultation"
              className="inline-flex items-center justify-center rounded-full border border-[#1E40FF] px-8 py-4 text-sm font-semibold text-[#1E40FF] transition-all hover:bg-[#1E40FF]/5"
            >
              Speak With Advisor
            </Link>
          </div>
        </div>

        {/* Quick Facts */}
        <div className="container-premium relative mt-14">
          <div className="grid gap-6 rounded-[8px] border border-slate-200 bg-white p-8 shadow-sm sm:grid-cols-2 md:grid-cols-5">
            {[
              { label: 'Award', value: 'Honorary Doctorate' },
              { label: 'Country', value: 'Switzerland' },
              { label: 'Location', value: 'Zug' },
              { label: 'Timeline', value: '3–6 Months' },
              { label: 'Entry', value: 'By Nomination' },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="text-xs font-medium uppercase tracking-wide text-slate-400">{label}</p>
                <p className="mt-1 font-semibold text-slate-950">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: Why Switzerland */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="The Swiss Advantage"
            title="Why A Swiss Honorary Doctorate Carries Global Weight"
            description="Switzerland has led the Global Innovation Index for over a decade. A Swiss academic credential signals precision, rigour, and international credibility."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { stat: '#1', label: 'Global Innovation Index', body: 'Switzerland leads the world in innovation — a benchmark that shapes how Swiss institutions are perceived globally.' },
              { stat: 'QS 4★', label: 'International Rating', body: 'Dunster holds a QS 4-Star rating — the same system used to rank universities like Oxford, Harvard, and INSEAD.' },
              { stat: 'Zug', label: 'Business Capital', body: 'Headquartered in Zug — home to some of the world\'s most respected multinational corporations and business leaders.' },
              { stat: '18+', label: 'Countries Recognised', body: 'Dunster alumni and recipients span 18+ countries across the Gulf, South Asia, Africa, and Europe.' },
            ].map(({ stat, label, body }) => (
              <div key={label} className="rounded-[8px] border border-slate-200 bg-white p-8 transition-all hover:shadow-lg">
                <p className="font-display text-4xl font-bold text-[#D4AF37]">{stat}</p>
                <p className="mb-3 mt-1 text-xs font-bold uppercase tracking-wide text-slate-400">{label}</p>
                <p className="text-sm leading-6 text-slate-600">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: About Dunster */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading eyebrow="About Dunster" title="A Swiss Institution Built For Executive Achievement" description="" align="left" />
              <div className="mt-8 space-y-5 text-slate-600">
                <p>
                  Dunster Business School is a private higher education institution incorporated in Switzerland (CHE-206.619.191), headquartered in Zug — Europe's premier business canton. The school focuses exclusively on business administration, leadership, and executive advancement.
                </p>
                <p>
                  The honorary doctorate programme reflects Dunster's commitment to recognising professionals whose careers have created measurable, verifiable impact in business, innovation, or global leadership — without requiring coursework or academic study.
                </p>
                <p>
                  Each nomination is reviewed by the institution's academic board against strict criteria. Dunster takes honorary recognition seriously — it is awarded to a select group of individuals each year.
                </p>
              </div>
            </div>
            <div className="rounded-[8px] border border-slate-200 bg-white p-8">
              <h3 className="mb-6 font-semibold text-slate-950">Institutional Credentials</h3>
              <ul className="space-y-5">
                {[
                  { icon: Star, title: 'QS 4-Star Rating', detail: 'Quacquarelli Symonds — teaching quality, employability, internationalisation' },
                  { icon: Shield, title: 'EAHEA Accreditation', detail: 'European Association for Higher Education Advancement — full institutional accreditation' },
                  { icon: Award, title: 'QAHE Accreditation', detail: 'International Association for Quality Assurance in Higher Education' },
                  { icon: Building2, title: 'Swiss Registered', detail: 'CHE-206.619.191 — Zug, Switzerland' },
                ].map(({ icon: Icon, title, detail }) => (
                  <li key={title} className="flex gap-3">
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-[#D4AF37]" />
                    <div>
                      <p className="font-medium text-slate-950">{title}</p>
                      <p className="text-sm text-slate-500">{detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Who Qualifies */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Eligibility"
            title="Who Qualifies for Dunster Honorary Recognition"
            description="Dunster evaluates candidates on documented professional achievement. These are the hallmarks of a strong nomination."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: '👔', title: 'Executive Leadership', detail: 'C-suite leaders with documented records of organisational transformation, growth, or market impact.' },
              { icon: '🚀', title: 'Entrepreneurial Achievement', detail: 'Founders who built enterprises, created employment, or disrupted markets over a sustained period.' },
              { icon: '🌍', title: 'International Impact', detail: 'Professionals whose contributions are felt and recognised across borders and multiple markets.' },
              { icon: '💡', title: 'Innovation Contribution', detail: 'Individuals who introduced genuinely new approaches, technologies, or thinking to their domain.' },
              { icon: '📚', title: 'Thought Leadership', detail: 'Authors, speakers, and knowledge leaders whose work has shaped professional or public discourse.' },
              { icon: '✅', title: 'Verified Track Record', detail: 'A public, documentable record of achievement independently verifiable by the institutional board.' },
            ].map(({ icon, title, detail }) => (
              <div key={title} className="rounded-[8px] border border-slate-200 bg-white p-7 transition-all hover:shadow-lg">
                <div className="mb-3 text-4xl">{icon}</div>
                <h3 className="mb-2 font-semibold text-slate-950">{title}</h3>
                <p className="text-sm leading-6 text-slate-600">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: The Recognition Process */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Step By Step"
            title="The Dunster Business School Recognition Process"
            description="A rigorous, confidential process guided by AcdyOn from eligibility review through to ceremonial award."
          />
          <div className="mx-auto mt-14 max-w-3xl space-y-4">
            {[
              { n: '01', title: 'Confidential Eligibility Assessment', detail: 'Submit your professional profile for a private assessment against Dunster\'s nomination criteria.', accent: '#D4AF37' },
              { n: '02', title: 'Profile Curation & Dossier', detail: 'AcdyOn compiles your professional milestones, recognition, publications, and impact into a formal nomination dossier.', accent: '#1E40FF' },
              { n: '03', title: 'Institutional Submission', detail: 'Your nomination is formally submitted to Dunster\'s academic board for initial vetting.', accent: '#22D3EE' },
              { n: '04', title: 'Academic Board Review', detail: 'The board evaluates your nomination against the institution\'s criteria for honorary conferment.', accent: '#D4AF37' },
              { n: '05', title: 'Approval & Conferment Terms', detail: 'Upon board approval, you receive formal confirmation of the honorary distinction and its terms.', accent: '#1E40FF' },
              { n: '06', title: 'Award Issuance & Ceremony', detail: 'Formal conferral of the Swiss Honorary Doctorate — certificate, documentation, and ceremonial recognition.', accent: '#22D3EE' },
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

      {/* SECTION 6: What Recipients Receive */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Award Package"
            title="What You Receive"
            description="The Dunster Business School honorary doctorate is delivered as a comprehensive award package."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: '📜', title: 'Swiss Honorary Doctorate Certificate', desc: 'Formally issued, signed, and sealed certificate from Dunster Business School, Switzerland.' },
              { icon: '📄', title: 'Recognition Citation', desc: 'Written citation documenting the specific achievements and contributions being formally recognised.' },
              { icon: '✅', title: 'Institutional Record Entry', desc: 'Permanent entry in Dunster\'s official institutional records — independently verifiable.' },
              { icon: '🎓', title: 'Ceremonial Recognition', desc: 'Invitation to a virtual or in-person ceremony marking the formal conferral of your distinction.' },
              { icon: '🌐', title: 'Digital Credentials', desc: 'Professional digital assets confirming the honorary award for online professional profiles.' },
              { icon: '📋', title: 'Verification Documentation', desc: 'Official letter for professional and academic verification purposes.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="flex gap-4 rounded-[8px] border border-slate-200 bg-white p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[8px] bg-slate-950 text-2xl">
                  {icon}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-950">{title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: Recognition Areas */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Fields of Excellence"
            title="Areas of Honorary Recognition"
            description="Dunster Business School awards honorary distinction in the domains that define Swiss executive excellence."
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {[
              'Business Excellence',
              'Executive Leadership',
              'Innovation & Technology',
              'International Relations',
              'Entrepreneurship',
              'Sustainable Development',
              'Financial Leadership',
              'Global Management',
            ].map((area) => (
              <div key={area} className="rounded-[8px] border border-slate-200 bg-white p-5 text-center transition-all hover:border-[#D4AF37]/40 hover:shadow-md">
                <Award className="mx-auto mb-2 h-5 w-5 text-[#D4AF37]" />
                <p className="text-sm font-semibold text-slate-950">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: Gallery */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading eyebrow="Swiss Academic Environment" title="Dunster Business School Gallery" />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              { label: 'Zug Business District', sub: 'Switzerland\'s premier business canton', gradient: 'from-[#1E40FF] to-[#22D3EE]', icon: '🏔️' },
              { label: 'Swiss Recognition Ceremonies', sub: 'Formal award traditions', gradient: 'from-[#D4AF37] to-[#f59e0b]', icon: '🎓' },
              { label: 'Distinguished Recipients', sub: 'Global leaders & innovators', gradient: 'from-[#1E40FF] to-[#6366f1]', icon: '🏛️' },
              { label: 'International Community', sub: '18+ countries', gradient: 'from-[#22D3EE] to-[#0891b2]', icon: '🌍' },
              { label: 'Academic Excellence', sub: 'QS 4-Star institution', gradient: 'from-[#6366f1] to-[#1E40FF]', icon: '⭐' },
              { label: 'Award Documentation', sub: 'Swiss-certified credentials', gradient: 'from-[#D4AF37] to-[#1E40FF]', icon: '📜' },
            ].map(({ label, sub, gradient, icon }) => (
              <div key={label} className="overflow-hidden rounded-[8px] border border-slate-200 transition-all hover:shadow-lg">
                <div className={`flex h-44 items-center justify-center bg-gradient-to-br ${gradient}`}>
                  <div className="text-center text-white">
                    <p className="mb-2 text-4xl">{icon}</p>
                    <p className="font-semibold">{label}</p>
                  </div>
                </div>
                <div className="bg-white p-4">
                  <p className="text-sm text-slate-500">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATE PREVIEW (before FAQ) ─────────────────────────────────── */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Award Documentation"
            title="Recognition Certificate Preview"
            description="The formal Dunster Business School Honorary Doctorate certificate — Swiss academic excellence, permanently documented."
          />

          <div className="mx-auto mt-14 max-w-3xl">
            <div className="flex min-h-[420px] flex-col items-center justify-center rounded-[8px] border-2 border-dashed border-[#D4AF37]/40 bg-[#D4AF37]/5 p-12 text-center">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#D4AF37]/10">
                <Award className="h-10 w-10 text-[#D4AF37]" />
              </div>
              <p className="mb-2 font-display text-2xl text-slate-950">Certificate Preview Coming Soon</p>
              <p className="mb-6 max-w-sm text-sm leading-6 text-slate-500">
                An example of the Dunster Business School Swiss Honorary Doctorate certificate will be displayed here. The certificate is formally issued on official institutional stationery with the Dunster seal and authorised signatures.
              </p>
              <div className="w-full max-w-md rounded-[8px] border border-[#D4AF37]/30 bg-white p-6">
                <p className="text-xs font-bold uppercase tracking-wide text-slate-400">Certificate Includes</p>
                <ul className="mt-4 space-y-2">
                  {[
                    'Dunster Business School official seal',
                    'Recipient full name and title',
                    'Degree: Doctor Honoris Causa',
                    'Institution: Dunster Business School, Switzerland',
                    'Date of conferment',
                    'Signatures of institutional leadership',
                    'Swiss registration reference',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#D4AF37]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: FAQ */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Common Questions"
            title="Frequently Asked Questions"
            description="Everything you need to know about the Dunster Business School honorary doctorate pathway."
          />
          <div className="mt-14">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-slate-950 py-24">
        <div className="container-premium text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#D4AF37]">
            Dunster Business School · Switzerland
          </p>
          <h2 className="mx-auto max-w-3xl font-display text-4xl leading-tight text-white sm:text-5xl">
            Begin Your Swiss Recognition Journey
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            Submit your credentials for a confidential eligibility assessment. No obligation. No commitment.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/book-consultation" className="inline-flex items-center rounded-full bg-[#D4AF37] px-8 py-4 text-sm font-semibold text-slate-950 transition-all hover:bg-[#c9a030]">
              Apply For Assessment
            </Link>
            <Link href="/book-consultation" className="inline-flex items-center rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white transition-all hover:border-white/40 hover:bg-white/5">
              Book Consultation
            </Link>
          </div>
        </div>
      </section>

      <ConsultationNudge />
    </main>
  )
}
