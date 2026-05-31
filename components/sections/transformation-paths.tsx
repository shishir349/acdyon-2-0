import { ChevronDown } from 'lucide-react'
import { SectionHeading } from '@/components/ui/section-heading'
import Link from 'next/link'

const paths = [
  {
    role: 'Corporate Leader',
    roleNote: 'C-suite · Senior Executive',
    credential: 'Doctor of Business Administration',
    credentialNote: 'Applied research · Executive doctorate',
    outcome: 'Industry Authority',
    outcomeNote: 'Board credibility · Academic standing',
    href: '/doctoral-programs/dba',
  },
  {
    role: 'Founder',
    roleNote: 'Entrepreneur · Innovator',
    credential: 'Honorary Doctorate',
    credentialNote: 'Institutional recognition · Formal distinction',
    outcome: 'Recognised Thought Leader',
    outcomeNote: 'Public credibility · Keynote speaker',
    href: '/honorary-recognition',
  },
  {
    role: 'Senior Professional',
    roleNote: 'Specialist · Domain Expert',
    credential: 'Doctor of Philosophy',
    credentialNote: 'Original research · Scholarly contribution',
    outcome: 'Research Contributor',
    outcomeNote: 'Published scholar · Academic identity',
    href: '/doctoral-programs/phd',
  },
  {
    role: 'Consultant',
    roleNote: 'Adviser · Independent Expert',
    credential: 'Academic Recognition',
    credentialNote: 'Doctoral or honorary · Verified distinction',
    outcome: 'Global Credibility',
    outcomeNote: 'Premium positioning · International standing',
    href: '/doctoral-programs',
  },
]

export function TransformationPaths() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="container-premium">
        <SectionHeading
          eyebrow="The Transformation Journey"
          title="From Professional Achievement To Global Academic Recognition"
          description="AcdyOn helps experienced professionals progress beyond career success into academic distinction, thought leadership, and international recognition."
          variant="dark"
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {paths.map((path) => (
            <Link key={path.role} href={path.href} className="group flex flex-col gap-0 transition-all">
              {/* Starting Role */}
              <div className="rounded-t-[8px] border border-white/10 bg-white/[0.05] p-5 transition-all group-hover:bg-white/[0.08]">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Starting Point</p>
                <h3 className="mt-2 text-lg font-semibold text-white">{path.role}</h3>
                <p className="mt-1 text-xs text-slate-500">{path.roleNote}</p>
              </div>

              {/* Arrow */}
              <div className="flex items-center justify-center border-x border-white/5 bg-white/[0.02] py-2">
                <ChevronDown className="h-5 w-5 text-[#D4AF37]" />
              </div>

              {/* Credential / Pathway */}
              <div className="border border-[#1E40FF]/40 bg-[#1E40FF]/15 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1E40FF]">Pathway</p>
                <h3 className="mt-2 text-sm font-semibold text-white">{path.credential}</h3>
                <p className="mt-1 text-xs text-slate-400">{path.credentialNote}</p>
              </div>

              {/* Arrow */}
              <div className="flex items-center justify-center border-x border-white/5 bg-white/[0.02] py-2">
                <ChevronDown className="h-5 w-5 text-[#D4AF37]" />
              </div>

              {/* Outcome */}
              <div className="rounded-b-[8px] border border-[#D4AF37]/25 bg-[#D4AF37]/8 p-5 transition-all group-hover:bg-[#D4AF37]/12">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">Outcome</p>
                <h3 className="mt-2 text-sm font-semibold text-white">{path.outcome}</h3>
                <p className="mt-1 text-xs text-slate-400">{path.outcomeNote}</p>
              </div>
            </Link>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-slate-500">
          People do not buy a degree. They invest in credibility, authority, recognition, and professional transformation.
        </p>
      </div>
    </section>
  )
}
