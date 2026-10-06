"use client";

import { SectionHeading } from '@/components/ui/section-heading'
import { CTAButton } from '@/components/ui/button'
import { HorizontalScroll } from '@/components/ui/horizontal-scroll'

const countries = [
  {
    flag: '🇺🇸',
    country: 'United States',
    focus: 'Business & Leadership',
    institutions: ['Kennedy University'],
    pathways: ['DBA', 'PhD', 'Honorary Doctorate'],
    note: 'Globally portable credentials recognised across professional and academic sectors.',
  },
  {
    flag: '🇨🇭',
    country: 'Switzerland',
    focus: 'Executive Education',
    institutions: ['Dunster Business School', 'EIMT'],
    pathways: ['DBA', 'PhD', 'Honorary Doctorate'],
    note: 'Swiss private business schools combine European academic rigour with executive professional relevance.',
  },
  {
    flag: '🇬🇧',
    country: 'United Kingdom',
    focus: 'Research & Recognition',
    institutions: ['LSMT', 'LSBS'],
    pathways: ['DBA', 'Honorary Doctorate'],
    note: 'UK doctoral credentials carry strong international portability across Commonwealth and global markets.',
  },
  {
    flag: '🇧🇪',
    country: 'Belgium',
    focus: 'International Recognition',
    institutions: ['Birchwood University'],
    pathways: ['DBA'],
    note: 'European accreditation frameworks with strong cross-border professional recognition.',
  },
]

export function GlobalNetwork() {
  return (
    <section className="bg-[#F8FAFC] py-14 sm:py-24 dark:bg-slate-950">
      <div className="container-premium">
        <SectionHeading
          eyebrow="University network"
          title="Access A Global Academic Network"
          description="Partner institutions across multiple countries provide doctoral pathways tailored to different professional and academic goals."
        />

        <div className="mt-10 sm:mt-14">
          <HorizontalScroll className="sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-4">
            {countries.map((c) => (
              <div
                key={c.country}
                className="min-w-65 shrink-0 snap-center sm:min-w-0 sm:shrink rounded-lg border border-slate-200 bg-white p-7 transition-all hover:border-[#1E40FF]/30 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/60"
              >
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{c.flag}</span>
                  <div>
                    <p className="font-semibold text-slate-950 dark:text-white">{c.country}</p>
                    <p className="text-xs font-medium uppercase tracking-wide text-[#1E40FF]">{c.focus}</p>
                  </div>
                </div>

                <div className="mt-5 space-y-1.5">
                  {c.institutions.map((inst) => (
                    <div key={inst} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#1E40FF]" />
                      <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{inst}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {c.pathways.map((p) => (
                    <span key={p} className="rounded-full bg-[#F8FAFC] px-3 py-1 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                      {p}
                    </span>
                  ))}
                </div>

                <p className="w-50 mt-4 text-sm leading-6 text-slate-500 dark:text-slate-400">{c.note}</p>
              </div>
            ))}
          </HorizontalScroll>
        </div>

        <div className="mt-10 text-center">
          <CTAButton href="/universities">Explore All University Partners</CTAButton>
        </div>
      </div>
    </section>
  )
}
