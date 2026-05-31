import Image from 'next/image'

interface RecognitionBadgeProps {
  title: string
  description: string
  logoUrl?: string
  logoFallback?: string
}

export function RecognitionBadge({
  title,
  description,
  logoUrl,
  logoFallback = '🏆',
}: RecognitionBadgeProps) {
  return (
    <div className="flex flex-col items-center rounded-[8px] border border-slate-200 bg-white p-8 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="mb-6 h-20 w-20 relative bg-slate-50 rounded-[8px] overflow-hidden flex items-center justify-center">
        {logoUrl ? (
          <Image
            src={logoUrl}
            alt={title}
            fill
            className="object-contain p-3"
          />
        ) : (
          <span className="text-3xl">{logoFallback}</span>
        )}
      </div>

      <h3 className="mb-2 text-lg font-semibold text-slate-950">{title}</h3>

      <p className="text-sm leading-6 text-slate-600">{description}</p>
    </div>
  )
}
