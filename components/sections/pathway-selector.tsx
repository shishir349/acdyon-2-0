import Link from 'next/link'
import { Award, Bot, GraduationCap, BriefcaseBusiness, ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/ui/section-heading'

const pathways = [
  {
    icon: Bot,
    goal: 'I want to master AI and future technologies',
    description: 'Build real AI agents, automate business workflows, and develop applied capability that translates directly into professional impact.',
    outcome: 'AI Practitioner · Automation Builder · Future-Ready Leader',
    cta: 'Explore AI Programmes',
    href: '/programs/agentic-ai-automation-mastery',
    accent: '#22D3EE',
    accentBg: 'bg-[#22D3EE]/10',
    accentBorder: 'border-[#22D3EE]/25',
  },
  {
    icon: BriefcaseBusiness,
    goal: 'I want executive advancement and leadership credibility',
    description: 'Formalise your executive expertise through an internationally recognised doctorate designed for working professionals.',
    outcome: 'Doctor of Business Administration · Board-Level Authority',
    cta: 'Explore DBA Pathways',
    href: '/doctoral-programs/dba',
    accent: '#1E40FF',
    accentBg: 'bg-[#1E40FF]/10',
    accentBorder: 'border-[#1E40FF]/25',
  },
  {
    icon: GraduationCap,
    goal: 'I want academic research and scholarly contribution',
    description: 'Pursue original research that advances knowledge in your field and earns formal academic standing at the doctoral level.',
    outcome: 'Doctor of Philosophy · Published Scholar · Research Identity',
    cta: 'Explore PhD Pathways',
    href: '/doctoral-programs/phd',
    accent: '#1E40FF',
    accentBg: 'bg-[#1E40FF]/10',
    accentBorder: 'border-[#1E40FF]/25',
  },
  {
    icon: Award,
    goal: 'I want recognition for my lifetime achievements',
    description: 'Receive formal institutional distinction commensurate with your career contributions, impact, and professional legacy.',
    outcome: 'Honorary Doctorate · Recognised Thought Leader · Dr. Prefix',
    cta: 'Explore Honorary Recognition',
    href: '/honorary-recognition',
    accent: '#D4AF37',
    accentBg: 'bg-[#D4AF37]/10',
    accentBorder: 'border-[#D4AF37]/25',
  },
]

export function PathwaySelector() {
  return (
    <section className="bg-white py-24">
      <div className="container-premium">
        <SectionHeading
          eyebrow="Find Your Path"
          title="Choose The Path That Matches Your Goals"
          description="Every professional journey is different. Select the pathway that aligns with where you are and where you are going."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {pathways.map(({ icon: Icon, goal, description, outcome, cta, href, accent, accentBg, accentBorder }) => (
            <Link
              key={goal}
              href={href}
              className={`group flex flex-col rounded-[8px] border ${accentBorder} ${accentBg} p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-[8px] text-white"
                style={{ backgroundColor: accent }}
              >
                <Icon className="h-6 w-6" />
              </div>

              <h3 className="mt-5 font-display text-xl font-semibold text-slate-950">{goal}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>

              <div className="mt-5 rounded-[6px] border border-slate-200 bg-white px-4 py-2">
                <p className="text-xs font-medium text-slate-500">Where this leads</p>
                <p className="mt-0.5 text-sm font-semibold text-slate-950">{outcome}</p>
              </div>

              <div className="mt-5 flex items-center gap-2 text-sm font-semibold" style={{ color: accent }}>
                {cta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
