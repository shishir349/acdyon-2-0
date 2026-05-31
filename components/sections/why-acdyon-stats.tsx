import { SectionHeading } from '@/components/ui/section-heading'
import { CTAButton } from '@/components/ui/button'

const stats = [
  { value: '5,000+', label: 'Professionals Guided', context: 'Executives, founders, consultants, and academics across 18+ countries' },
  { value: '18+', label: 'Countries Served', context: 'India, UAE, UK, Germany, Nigeria, Singapore, Australia, Canada, and more' },
  { value: '25+', label: 'Academic Pathways', context: 'DBA, PhD, Post-Doctoral, Honorary Doctorate, AI programmes, and certifications' },
  { value: '10+', label: 'University Partners', context: 'Globally accredited institutions across USA, UK, Switzerland, Belgium, and beyond' },
]

const trustSignals = [
  'Consultation-led admissions — no programme recommended before your profile is reviewed',
  'Pathway matching based on professional background, goals, and recognition context',
  'Ongoing support from application through graduation and professional integration',
  'Full transparency on credential recognition before any commitment is made',
]

export function WhyAcdyOnStats() {
  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="container-premium">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          {/* Left: stats */}
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#1E40FF]">Scale & Trust</p>
            <h2 className="font-display text-4xl leading-tight text-slate-950 sm:text-5xl">
              Built For Ambitious Professionals
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              A growing community of senior professionals who trusted AcdyOn to guide the most important academic decision of their career.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {stats.map(({ value, label, context }) => (
                <div
                  key={label}
                  className="rounded-[8px] border border-slate-200 bg-white p-6"
                >
                  <p className="font-display text-4xl font-semibold text-slate-950">{value}</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-[#1E40FF]">{label}</p>
                  <p className="mt-2 text-sm leading-5 text-slate-500">{context}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: trust signals */}
          <div className="space-y-5">
            <div className="rounded-[8px] border border-[#D4AF37]/25 bg-[#D4AF37]/8 p-8">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#D4AF37]">Why Professionals Choose AcdyOn</p>
              <h3 className="mt-4 font-display text-2xl leading-snug text-slate-950">
                Not an agency. Not a portal. An academic advancement partner.
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                AcdyOn is a premium global education ecosystem — a platform where guidance, institutional relationships, and personalised pathway matching converge to serve professionals who invest in their academic standing with serious intent.
              </p>
            </div>

            <div className="rounded-[8px] border border-slate-200 bg-white p-6">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Our Commitments</p>
              <ul className="space-y-3">
                {trustSignals.map((signal) => (
                  <li key={signal} className="flex gap-3 text-sm text-slate-600">
                    <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#1E40FF]" />
                    {signal}
                  </li>
                ))}
              </ul>
            </div>

            <CTAButton href="/book-consultation" className="w-full justify-center">
              Book Your Free Consultation
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  )
}
