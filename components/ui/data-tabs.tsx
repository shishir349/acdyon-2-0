"use client"
import { useState } from "react"

export function DataTabs({
  tabs,
  className = "",
}: {
  tabs: { label: string; panel: React.ReactNode }[]
  className?: string
}) {
  const [idx, setIdx] = useState(0)
  return (
    <div className={className}>
      <div className="flex flex-wrap gap-2 mb-8">
        {tabs.map((t, i) => (
          <button
            key={t.label}
            onClick={() => setIdx(i)}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
              idx === i
                ? "bg-[#1E40FF] text-white shadow-[0_4px_16px_rgba(30,64,255,0.25)]"
                : "border border-slate-200 bg-white text-slate-600 hover:border-[#1E40FF]/40 hover:text-[#1E40FF] dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-[#1E40FF]/40"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div>{tabs[idx].panel}</div>
    </div>
  )
}
