import type { Metadata } from 'next'
import Link from 'next/link'
import { Sparkles, ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/sections/page-hero'
import { SectionHeading } from '@/components/ui/section-heading'
import { upgradCourses } from '@/lib/data/upgrad-courses'

export const metadata: Metadata = {
  title: 'AcdyOn × upGrad — Doctorate & Executive Programmes | AcdyOn',
  description:
    'Explore doctorate and executive leadership programmes offered through the AcdyOn × upGrad partnership — from CTO & AI leadership to global DBA pathways.',
}

const BASE = '/doctoral-programs/upgrad'

export default function UpgradIndexPage() {
  return (
    <main>
      <PageHero
        eyebrow="AcdyOn × upGrad"
        title="Doctorate & Executive Programmes"
        description="A curated partnership bringing upGrad's flagship doctorate and executive leadership programmes to the AcdyOn community — dual-school certifications, AI leadership, and global DBA pathways."
        secondaryLabel="View All Doctoral Programs"
        secondaryHref="/doctoral-programs"
      />

      <section className="bg-white py-24 dark:bg-slate-950">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Partner programmes"
            title="Choose Your Programme"
            description="Research-led doctorates and C-suite executive certifications from globally recognized institutions."
          />
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {upgradCourses.map((course) => (
              <Link
                key={course.slug}
                href={`${BASE}/${course.slug}`}
                className="group flex flex-col rounded-[8px] border border-slate-200 bg-white p-8 transition-all hover:shadow-lg hover:border-[#1E40FF]/40 dark:bg-slate-950 dark:border-slate-800"
              >
                <div className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-3 py-1">
                  <Sparkles className="h-3 w-3 text-[#D4AF37]" />
                  <span className="text-[10px] font-bold uppercase tracking-wide text-[#B8912F]">{course.eyebrow}</span>
                </div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#1E40FF]">{course.university}</p>
                <h3 className="font-display text-lg font-semibold leading-snug text-slate-950 dark:text-white">{course.name}</h3>
                <p className="mt-3 flex-1 text-sm text-slate-600 dark:text-slate-300">{course.tagline}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#1E40FF]">
                  View programme
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
