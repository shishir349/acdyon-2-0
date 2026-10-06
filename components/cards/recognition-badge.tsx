import { type ElementType } from 'react'
import Image from 'next/image'

interface RecognitionBadgeProps {
  title: string
  description: string
  logoUrl?: string
  logoFallback?: string
  icon?: ElementType
}

export function RecognitionBadge({
  title,
  description,
  logoUrl,
  logoFallback,
  icon: Icon,
}: RecognitionBadgeProps) {
  return (
    <div className="flex flex-col items-center rounded-[8px] border border-slate-200 bg-white p-8 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-950">
      <div className="mb-6 h-20 w-20 relative bg-slate-50 rounded-[8px] overflow-hidden flex items-center justify-center dark:bg-slate-900/60">
        {logoUrl ? (
          <Image src={logoUrl} alt={title} fill className="object-contain p-3" />
        ) : Icon ? (
          <Icon className="h-8 w-8 text-[#1E40FF]" />
        ) : (
          <span className="text-3xl">{logoFallback ?? '🏆'}</span>
        )}
      </div>

      <h3 className="mb-2 text-lg font-semibold text-slate-950 dark:text-white">{title}</h3>

      <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{description}</p>
    </div>
  )
}
