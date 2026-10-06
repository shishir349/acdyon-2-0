'use client'

import { useState } from 'react'
import {
  ChevronDown, Star, Award, CheckCircle2, BookOpen, GraduationCap,
  Globe2, Landmark, BarChart3, FileText, TrendingUp,
} from 'lucide-react'

const ICONS = {
  star: Star, award: Award, check: CheckCircle2, book: BookOpen,
  graduation: GraduationCap, globe: Globe2, landmark: Landmark,
  chart: BarChart3, file: FileText, trending: TrendingUp,
} as const

type IconKey = keyof typeof ICONS

interface Recognition {
  title: string
  detail: string
  icon: IconKey
}

interface RecognitionTiersProps {
  tier1: Recognition[]
  tier2: Recognition[]
  tier3: Recognition[]
}

export function RecognitionTiers({ tier1, tier2, tier3 }: RecognitionTiersProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="space-y-10">
      {/* Tier 1 — flagship */}
      <div>
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#d4af37]">
          Flagship Recognition
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {tier1.map(({ icon, title, detail }) => {
            const Icon = ICONS[icon]
            return (
              <div key={title} className="rounded-[8px] border border-[#d4af37]/30 bg-[#d4af37]/5 p-6 text-center">
                <Icon className="mx-auto mb-3 h-10 w-10 text-[#d4af37]" />
                <h3 className="font-semibold text-slate-950 dark:text-white">{title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{detail}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Tier 2 — candidate / member */}
      <div>
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#1E40FF]">
          Candidacy & Membership
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {tier2.map(({ icon, title, detail }) => {
            const Icon = ICONS[icon]
            return (
              <div key={title} className="rounded-[8px] border border-[#1E40FF]/20 bg-[#1E40FF]/5 p-6">
                <Icon className="mb-2 h-8 w-8 text-[#1E40FF]" />
                <h3 className="font-semibold text-slate-950 dark:text-white">{title}</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{detail}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Tier 3 — additional, behind toggle */}
      <div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 text-sm font-semibold text-[#1E40FF] hover:text-[#1937dd] transition-colors"
        >
          <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`} />
          {expanded ? 'Hide additional recognitions' : 'View all recognitions'}
        </button>

        {expanded && (
          <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {tier3.map(({ icon, title, detail }) => {
              const Icon = ICONS[icon]
              return (
                <div key={title} className="rounded-[8px] border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/60">
                  <Icon className="mb-2 h-7 w-7 text-[#1E40FF]" />
                  <h3 className="text-sm font-semibold text-slate-950 dark:text-white">{title}</h3>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{detail}</p>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
