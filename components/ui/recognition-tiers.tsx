'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface Recognition {
  title: string
  detail: string
  emoji: string
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
          {tier1.map((r) => (
            <div
              key={r.title}
              className="rounded-[8px] border border-[#d4af37]/30 bg-[#d4af37]/5 p-6 text-center"
            >
              <div className="mb-3 text-4xl">{r.emoji}</div>
              <h3 className="font-semibold text-slate-950">{r.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{r.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tier 2 — candidate / member */}
      <div>
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#1E40FF]">
          Candidacy & Membership
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {tier2.map((r) => (
            <div
              key={r.title}
              className="rounded-[8px] border border-[#1E40FF]/20 bg-[#1E40FF]/5 p-6"
            >
              <div className="mb-2 text-3xl">{r.emoji}</div>
              <h3 className="font-semibold text-slate-950">{r.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{r.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tier 3 — additional, behind toggle */}
      <div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 text-sm font-semibold text-[#1E40FF] hover:text-[#1937dd] transition-colors"
        >
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
          />
          {expanded ? 'Hide additional recognitions' : 'View all recognitions'}
        </button>

        {expanded && (
          <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {tier3.map((r) => (
              <div
                key={r.title}
                className="rounded-[8px] border border-slate-200 bg-white p-5"
              >
                <div className="mb-2 text-2xl">{r.emoji}</div>
                <h3 className="text-sm font-semibold text-slate-950">{r.title}</h3>
                <p className="mt-1 text-xs text-slate-500">{r.detail}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
