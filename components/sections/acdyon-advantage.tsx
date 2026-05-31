import { SectionHeading } from '@/components/ui/section-heading'
import { Globe2, Shield, Users, Compass, GraduationCap, Zap } from 'lucide-react'

const advantages = [
  {
    icon: Globe2,
    number: '01',
    title: 'Globally Recognised Institutions',
    description: 'Every partner institution is selected for international academic standing, accreditation signals, and recognition portability across professional and geographic contexts.',
  },
  {
    icon: Shield,
    number: '02',
    title: 'University-Governed Evaluation',
    description: 'Admission decisions, credential conferral, and academic standards are governed by the partner institution — not AcdyOn. Your credential is institutional, not platform-issued.',
  },
  {
    icon: Compass,
    number: '03',
    title: 'Personalised Pathway Mapping',
    description: 'Before any recommendation is made, your professional profile, academic background, and long-term goals are reviewed to identify the pathway with the highest probability of success.',
  },
  {
    icon: Users,
    number: '04',
    title: 'Dedicated Academic Advisors',
    description: 'Work directly with experienced advisors who understand doctoral programmes, academic positioning, and the nuances of international recognition — at every stage.',
  },
  {
    icon: GraduationCap,
    number: '05',
    title: 'International Learner Community',
    description: 'A community of professionals from 18+ countries pursuing doctoral and recognition pathways together — peer relationships that extend beyond graduation.',
  },
  {
    icon: Zap,
    number: '06',
    title: 'Executive-Friendly Learning Models',
    description: 'Every programme is structured around professionals who are continuing their careers. Flexible, part-time, and online delivery means no career interruption.',
  },
]

export function AcdyOnAdvantage() {
  return (
    <section className="bg-white py-24">
      <div className="container-premium">
        <SectionHeading
          eyebrow="The AcdyOn Advantage"
          title="Built for Ambitious Professionals Who Cannot Afford to Get This Wrong"
          description="A doctoral or recognition pathway is a multi-year investment. AcdyOn exists to ensure every decision is well-informed, well-matched, and well-supported."
        />

        <div className="mt-14 grid gap-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            {/* Feature card */}
            <div className="rounded-[8px] bg-slate-950 p-8 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#D4AF37]">Our Commitment</p>
              <h3 className="mt-5 font-display text-3xl leading-tight">
                No programme is recommended before your profile is understood.
              </h3>
              <p className="mt-5 text-sm leading-7 text-slate-300">
                The consultation process is the product. AcdyOn does not operate like an admission agency pushing enrolments. Every recommendation is preceded by a detailed eligibility and pathway review designed to ensure the right fit.
              </p>
              <div className="mt-7 grid gap-3">
                {[
                  'Eligibility reviewed before any recommendation',
                  'Institution matched to your specific goals',
                  'Recognition assessed for your professional context',
                ].map((point) => (
                  <div key={point} className="flex items-center gap-3 text-sm text-slate-300">
                    <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4AF37]" />
                    {point}
                  </div>
                ))}
              </div>
            </div>

            {/* 2x2 grid of top 4 advantages */}
            <div className="grid gap-5 sm:grid-cols-2">
              {advantages.slice(0, 4).map(({ icon: Icon, number, title, description }) => (
                <article key={title} className="rounded-[8px] border border-slate-200 bg-white p-6 transition hover:border-[#1E40FF]/30">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-[8px] bg-[#1E40FF] text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-300">{number}</span>
                  </div>
                  <h3 className="mt-4 font-semibold text-slate-950">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
                </article>
              ))}
            </div>
          </div>

          {/* Bottom 2 advantages */}
          <div className="grid gap-5 lg:grid-cols-2">
            {advantages.slice(4).map(({ icon: Icon, number, title, description }) => (
              <article key={title} className="grid gap-6 rounded-[8px] border border-slate-200 bg-white p-7 transition hover:border-[#1E40FF]/30 md:grid-cols-[64px_1fr]">
                <div className="flex h-14 w-14 items-center justify-center rounded-[8px] bg-slate-950 text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-300">{number}</p>
                  <h3 className="mt-1 text-lg font-semibold text-slate-950">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
