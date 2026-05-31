import Image from 'next/image'

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
    <div className="rounded-[8px] border border-slate-200 bg-white p-8">
      <p className="mb-6 text-lg leading-8 text-slate-950 italic">
        "{quote}"
      </p>

      <div className="flex items-center gap-4">
        <div className="h-14 w-14 relative rounded-full bg-slate-200 overflow-hidden flex-shrink-0">
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
          <p className="font-semibold text-slate-950">{name}</p>
          <p className="text-sm text-slate-600">
            {role}
            {company && `, ${company}`}
          </p>
        </div>
      </div>
    </div>
  )
}
