'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQ {
  q: string
  a: string
}

export function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {faqs.map((faq, i) => (
        <div key={i} className="rounded-[8px] border border-slate-200 bg-white overflow-hidden">
          <button
            className="flex w-full items-center justify-between gap-4 p-6 text-left"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="font-semibold text-slate-950">{faq.q}</span>
            <ChevronDown
              className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
            />
          </button>
          {open === i && (
            <div className="border-t border-slate-100 px-6 pb-6 pt-4">
              <p className="text-sm leading-7 text-slate-600">{faq.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
