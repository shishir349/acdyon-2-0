import { SectionHeading } from '@/components/ui/section-heading'
import { CTAButton } from '@/components/ui/button'

const outcomes = [
  {
    icon: '🏛️',
    title: 'Board-Level Credibility',
    description: 'A doctoral credential signals scholarly rigour and strategic depth — opening board advisory, governance, and non-executive director positions.',
  },
  {
    icon: '🎓',
    title: 'Academic Recognition',
    description: 'Formal institutional standing that enables faculty appointments, research positions, and academic publishing from a recognised institution.',
  },
  {
    icon: '🖊️',
    title: 'Thought Leadership',
    description: 'Publish original research, author books, contribute to peer-reviewed journals, and become the recognised authority in your professional domain.',
  },
  {
    icon: '🔬',
    title: 'Research Capability',
    description: 'Design and execute rigorous research that informs organisational strategy, industry practice, and policy at the highest level.',
  },
  {
    icon: '💡',
    title: 'Consulting Authority',
    description: 'Command premium advisory engagements backed by doctoral research and an internationally recognised credential.',
  },
  {
    icon: '🌍',
    title: 'International Positioning',
    description: 'Credentials recognised across jurisdictions, industries, and academic institutions — enabling cross-border career and advisory opportunities.',
  },
  {
    icon: '📈',
    title: 'Career Advancement',
    description: 'Access C-suite, directorial, and senior advisory positions that increasingly require doctoral-level credentials and demonstrated research capability.',
  },
  {
    icon: '🎤',
    title: 'Speaking Opportunities',
    description: 'Conference keynotes, academic symposia, and executive panels that seek credentialed scholars and thought leaders with verified standing.',
  },
]

export function ExecutiveOutcomes() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="container-premium">
        <SectionHeading
          eyebrow="Transformation Outcomes"
          title="What These Pathways Help You Achieve"
          description="The real return on a doctoral or recognition pathway is not a certificate. It is a permanent shift in how you are seen — and what becomes possible."
          variant="dark"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map(({ icon, title, description }) => (
            <article
              key={title}
              className="rounded-[8px] border border-white/10 bg-white/[0.04] p-6 transition-all hover:-translate-y-1 hover:bg-white/[0.07]"
            >
              <p className="text-3xl">{icon}</p>
              <h3 className="mt-4 font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{description}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <CTAButton href="/doctoral-programs" variant="dark">Explore Doctoral Pathways</CTAButton>
          <CTAButton href="/book-consultation" variant="dark">Book a Consultation</CTAButton>
        </div>
      </div>
    </section>
  )
}
