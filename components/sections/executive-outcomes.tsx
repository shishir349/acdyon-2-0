"use client";

import { Landmark, GraduationCap, PenLine, FlaskConical, Lightbulb, Globe2, TrendingUp, Mic } from 'lucide-react'
import { SectionHeading } from '@/components/ui/section-heading'
import { CTAButton } from '@/components/ui/button'
import { HorizontalScroll } from '@/components/ui/horizontal-scroll'

const outcomes = [
  { icon: Landmark, title: 'Board-Level Credibility', description: 'A doctoral credential signals scholarly rigour and strategic depth — opening board advisory, governance, and non-executive director positions.' },
  { icon: GraduationCap, title: 'Academic Recognition', description: 'Formal institutional standing that enables faculty appointments, research positions, and academic publishing from a recognised institution.' },
  { icon: PenLine, title: 'Thought Leadership', description: 'Publish original research, author books, contribute to peer-reviewed journals, and become the recognised authority in your professional domain.' },
  { icon: FlaskConical, title: 'Research Capability', description: 'Design and execute rigorous research that informs organisational strategy, industry practice, and policy at the highest level.' },
  { icon: Lightbulb, title: 'Consulting Authority', description: 'Command premium advisory engagements backed by doctoral research and an internationally recognised credential.' },
  { icon: Globe2, title: 'International Positioning', description: 'Credentials recognised across jurisdictions, industries, and academic institutions — enabling cross-border career and advisory opportunities.' },
  { icon: TrendingUp, title: 'Career Advancement', description: 'Access C-suite, directorial, and senior advisory positions that increasingly require doctoral-level credentials and demonstrated research capability.' },
  { icon: Mic, title: 'Speaking Opportunities', description: 'Conference keynotes, academic symposia, and executive panels that seek credentialed scholars and thought leaders with verified standing.' },
]

export function ExecutiveOutcomes() {
  return (
    <section className="bg-slate-950 py-14 sm:py-24">
      <div className="container-premium">
        <SectionHeading
          eyebrow="Transformation Outcomes"
          title="Professional outcomes shaped by clarity, guidance, and trust"
          description="The real return on a doctoral or recognition pathway is not a certificate. It is a permanent shift in how you are seen — and what becomes possible."
          variant="dark"
        />

        <div className="mt-10 sm:mt-14">
          <HorizontalScroll
            className="sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-4"
            variant="dark"
          >
            {outcomes.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="min-w-[240px] shrink-0 snap-center sm:min-w-0 sm:shrink rounded-[8px] border border-white/10 bg-white/[0.04] p-6 transition-all hover:-translate-y-1 hover:bg-white/[0.07]"
              >
                <Icon className="h-6 w-6 text-[#D4AF37]" />
                <h3 className="mt-4 font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400 w-50">{description}</p>
              </article>
            ))}
          </HorizontalScroll>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <CTAButton href="/doctoral-programs" variant="dark">Explore Doctoral Pathways</CTAButton>
          <CTAButton href="/book-consultation" variant="dark">Book a Consultation</CTAButton>
        </div>
      </div>
    </section>
  )
}
