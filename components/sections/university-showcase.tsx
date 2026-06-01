'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface UniversityShowcaseProps {
  universities: Array<{
    id: string
    slug: string
    name: string
    country: string
    logo: string
    description: string
    accreditations?: string[]
    deliveryMode?: string[]
    duration?: {
      dba?: { min: number; max: number }
      phd?: { min: number; max: number }
    }
    dbaDetails?: { overview: string }
    phdDetails?: { overview: string }
  }>
  programType: 'dba' | 'phd'
  ctaLabel?: string
}

export function UniversityShowcase({
  universities,
  programType,
  ctaLabel = 'View Programme',
}: UniversityShowcaseProps) {
  const getDuration = (university: typeof universities[0]): string => {
    const durationData = university.duration?.[programType as 'dba' | 'phd']
    if (!durationData) return 'Custom'
    if (durationData.min === durationData.max) {
      return `${durationData.min} months`
    }
    return `${durationData.min}-${durationData.max} months`
  }

  return (
    <section className="bg-white py-24">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="mb-4 font-display text-5xl leading-tight text-slate-950">
            Choose Your University
          </h2>
          <p className="max-w-2xl text-lg text-slate-600">
            Premium doctoral programmes from globally recognized institutions. Each pathway offers distinct academic excellence and international positioning.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2">
          {universities.map((university, index) => (
            <motion.div
              key={university.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col rounded-[8px] border border-slate-200 bg-white p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 luxury-shadow"
            >
              <div className="mb-6 h-24 w-full relative bg-slate-50 rounded-[8px] overflow-hidden flex items-center justify-center">
                {university.logo && (
                  <Image
                    src={university.logo}
                    alt={university.name}
                    fill
                    className="object-contain p-4"
                    unoptimized
                  />
                )}
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold text-slate-950">
                  {university.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-slate-500">
                  {university.country}
                </p>
              </div>

              <p className="mb-6 text-sm leading-6 text-slate-600 line-clamp-3">
                {programType === 'dba'
                  ? university.dbaDetails?.overview || university.description
                  : university.phdDetails?.overview || university.description}
              </p>

              <div className="mb-6 space-y-3 border-t border-slate-100 pt-6">
                <div className="flex items-start justify-between">
                  <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
                    Duration
                  </span>
                  <span className="text-sm font-semibold text-slate-950">
                    {getDuration(university)}
                  </span>
                </div>

                {university.deliveryMode && university.deliveryMode.length > 0 && (
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
                      Learning Format
                    </span>
                    <span className="text-sm font-semibold text-slate-950">
                      {university.deliveryMode.slice(0, 2).join(', ')}
                    </span>
                  </div>
                )}

                {university.accreditations && university.accreditations.length > 0 && (
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
                      Recognition
                    </span>
                    <span className="text-sm font-semibold text-slate-950">
                      {university.accreditations.length}+ Bodies
                    </span>
                  </div>
                )}
              </div>

              <div className="mb-6 flex flex-wrap gap-2">
                <span className="inline-flex rounded-full bg-[#1E40FF]/10 px-3 py-1 text-xs font-semibold text-[#1E40FF]">
                  Global Network
                </span>
                <span className="inline-flex rounded-full bg-[#22D3EE]/10 px-3 py-1 text-xs font-semibold text-[#22D3EE]">
                  Research Focused
                </span>
              </div>

              <div className="mt-auto">
                <Link
                  href={`/doctoral-programs/${programType}/${university.slug}`}
                  className="inline-flex w-full items-center justify-center rounded-full bg-[#1E40FF] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(30,64,255,0.22)] transition-all duration-300 hover:bg-[#1937dd]"
                >
                  {ctaLabel}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
