import { SectionHeading } from '@/components/ui/section-heading'
import { CTAButton } from '@/components/ui/button'

const countries = [
  {
    flag: '🇺🇸',
    country: 'United States',
    focus: 'Business & Leadership',
    institutions: ['Kennedy University', 'American Professional Academy'],
    pathways: ['DBA', 'Honorary Doctorate', 'Post-Doctoral'],
    note: 'Globally portable credentials recognised across professional and academic sectors.',
  },
  {
    flag: '🇨🇭',
    country: 'Switzerland',
    focus: 'Executive Education',
    institutions: ['Dunster Business School', 'Swiss Academic Forum'],
    pathways: ['DBA', 'PhD', 'Honorary Doctorate'],
    note: 'Swiss private business schools combine European academic rigour with executive professional relevance.',
  },
  {
    flag: '🇬🇧',
    country: 'United Kingdom',
    focus: 'Research & Scholarship',
    institutions: ['LSBS', 'London Executive Institute'],
    pathways: ['DBA', 'PhD', 'Post-Doctoral'],
    note: 'UK doctoral credentials carry strong international portability across Commonwealth and global markets.',
  },
  {
    flag: '🇧🇪',
    country: 'Belgium',
    focus: 'International Recognition',
    institutions: ['Birchwood University', 'European Academic Council'],
    pathways: ['DBA', 'Honorary Doctorate'],
    note: 'European accreditation frameworks with strong cross-border professional recognition.',
  },
  {
    flag: '🇨🇦',
    country: 'Canada',
    focus: 'Applied Research',
    institutions: ['Commonwealth Academic Alliance', 'Canadian Leadership Institute'],
    pathways: ['PhD', 'Post-Doctoral', 'Executive Certification'],
    note: 'North American credentials with Commonwealth portability and strong research culture.',
  },
]

export function GlobalNetwork() {
  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="container-premium">
        <SectionHeading
          eyebrow="University Network"
          title="Access A Global Academic Network"
          description="Partner institutions across multiple countries provide doctoral pathways tailored to different professional and academic goals."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {countries.slice(0, 3).map((c) => (
            <div
              key={c.country}
              className="rounded-[8px] border border-slate-200 bg-white p-7 transition-all hover:border-[#1E40FF]/30 hover:shadow-lg"
            >
              <div className="flex items-center gap-3">
                <span className="text-4xl">{c.flag}</span>
                <div>
                  <p className="font-semibold text-slate-950">{c.country}</p>
                  <p className="text-xs font-medium uppercase tracking-wide text-[#1E40FF]">{c.focus}</p>
                </div>
              </div>

              <div className="mt-5 space-y-1.5">
                {c.institutions.map((inst) => (
                  <div key={inst} className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#1E40FF]" />
                    <p className="text-sm font-medium text-slate-700">{inst}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {c.pathways.map((p) => (
                  <span key={p} className="rounded-full bg-[#F8FAFC] px-3 py-1 text-xs font-semibold text-slate-600">
                    {p}
                  </span>
                ))}
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-500">{c.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {countries.slice(3).map((c) => (
            <div
              key={c.country}
              className="rounded-[8px] border border-slate-200 bg-white p-7 transition-all hover:border-[#1E40FF]/30 hover:shadow-lg"
            >
              <div className="flex items-center gap-3">
                <span className="text-4xl">{c.flag}</span>
                <div>
                  <p className="font-semibold text-slate-950">{c.country}</p>
                  <p className="text-xs font-medium uppercase tracking-wide text-[#1E40FF]">{c.focus}</p>
                </div>
              </div>

              <div className="mt-5 space-y-1.5">
                {c.institutions.map((inst) => (
                  <div key={inst} className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#1E40FF]" />
                    <p className="text-sm font-medium text-slate-700">{inst}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {c.pathways.map((p) => (
                  <span key={p} className="rounded-full bg-[#F8FAFC] px-3 py-1 text-xs font-semibold text-slate-600">
                    {p}
                  </span>
                ))}
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-500">{c.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <CTAButton href="/universities">Explore All University Partners</CTAButton>
        </div>
      </div>
    </section>
  )
}
