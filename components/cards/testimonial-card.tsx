import Image from 'next/image'
import { ReadMoreText } from '@/components/ui/read-more-text'

interface TestimonialCardProps {
  name: string
  role: string
  company?: string
  quote: string
  imageUrl?: string
}

export function TestimonialCard({
  name,
  role,
  company,
  quote,
  imageUrl,
}: TestimonialCardProps) {
  return (
    <div className="flex h-full flex-col rounded-[8px] border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 relative rounded-full bg-slate-200 overflow-hidden flex-shrink-0 dark:bg-slate-800">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={name}
              fill
              className="object-cover"
            />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-[#1E40FF] to-[#22D3EE] flex items-center justify-center text-white font-semibold text-sm">
              {name
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </div>
          )}
        </div>

        <div>
          <p className="font-semibold text-slate-950 dark:text-white">{name}</p>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            {role}
            {company && `, ${company}`}
          </p>
        </div>
      </div>

      <ReadMoreText text={quote} className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300" />
    </div>
  )
}
