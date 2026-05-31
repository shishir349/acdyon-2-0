import Image from 'next/image'

interface PartnershipCardProps {
  institution: string
  country: string
  collaboration: string
  logoUrl?: string
}

export function PartnershipCard({
  institution,
  country,
  collaboration,
  logoUrl,
}: PartnershipCardProps) {
  return (
    <div className="rounded-[8px] border border-slate-200 bg-white p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      {logoUrl && (
        <div className="mb-4 h-16 w-full relative bg-slate-50 rounded-[8px] overflow-hidden flex items-center justify-center">
          <Image
            src={logoUrl}
            alt={institution}
            fill
            className="object-contain p-2"
          />
        </div>
      )}

      <h3 className="mb-1 font-semibold text-slate-950">{institution}</h3>

      <p className="mb-3 text-xs font-medium uppercase tracking-wide text-slate-500">
        {country}
      </p>

      <p className="text-sm leading-6 text-slate-600">{collaboration}</p>
    </div>
  )
}
