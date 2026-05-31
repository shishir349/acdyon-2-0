import { CTAButton } from '@/components/ui/button'
import { SectionHeading } from '@/components/ui/section-heading'
import { CheckCircle2, XCircle } from 'lucide-react'

const dimensions = [
  {
    dimension: 'Academic Model',
    matters: 'DBA programmes are applied; PhD programmes are theoretical. Choosing the wrong type leads to a misaligned research experience.',
  },
  {
    dimension: 'Research Expectations',
    matters: 'Different universities set very different standards for dissertation length, methodology, and contribution. Knowing this upfront shapes your workload.',
  },
  {
    dimension: 'Recognition Framework',
    matters: 'Accreditation bodies, country registrations, and employer familiarity vary significantly. Your credential needs to be credible in your specific context.',
  },
  {
    dimension: 'Learner Experience',
    matters: 'Supervision quality, faculty engagement, and peer community differ widely. The right fit keeps you motivated through a 2-4 year commitment.',
  },
  {
    dimension: 'Delivery Flexibility',
    matters: 'Part-time, online, and blended formats vary. Choosing a model incompatible with your schedule is the leading cause of non-completion.',
  },
]

export function UniversitySelection() {
  return (
    <section className="bg-white py-24">
      <div className="container-premium">
        <SectionHeading
          eyebrow="Why It Matters"
          title="Not Every Doctoral Pathway Is The Same"
          description="Most professionals assume all doctoral programmes are equivalent. They are not. The differences in university, academic model, and recognition framework determine whether your credential delivers the authority you expect."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-start">
          {/* Left: dimensions */}
          <div className="space-y-4">
            {dimensions.map(({ dimension, matters }) => (
              <div
                key={dimension}
                className="flex gap-4 rounded-[8px] border border-slate-200 bg-white p-5 transition-all hover:border-[#1E40FF]/30"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#1E40FF]" />
                <div>
                  <p className="font-semibold text-slate-950">{dimension}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{matters}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: positioning statement + cost of wrong choice */}
          <div className="space-y-6">
            <div className="rounded-[8px] bg-slate-950 p-8 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#D4AF37]">The AcdyOn Difference</p>
              <h3 className="mt-4 font-display text-2xl leading-snug">
                Guided pathway matching before you commit to any programme or institution.
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                AcdyOn does not recommend a programme until your professional profile, academic background, research readiness, and goals have been reviewed in detail. The right match is not always obvious. We help you see the full picture.
              </p>
            </div>

            <div className="rounded-[8px] border border-red-100 bg-red-50 p-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-400">Cost of Getting This Wrong</p>
              <ul className="mt-4 space-y-2">
                {[
                  'Investing 3+ years in a credential not recognised in your market',
                  'Choosing a research model misaligned with your professional goals',
                  'Selecting an institution without verifiable international standing',
                  'Non-completion due to incompatible delivery or supervision model',
                ].map((risk) => (
                  <li key={risk} className="flex gap-3 text-sm text-red-700">
                    <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                    {risk}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <CTAButton href="/doctoral-programs/dba">Explore DBA Universities</CTAButton>
          <CTAButton href="/doctoral-programs/phd" variant="secondary">Explore PhD Universities</CTAButton>
        </div>
      </div>
    </section>
  )
}
