import Image from "next/image";

type UniversityCardProps = {
  name: string;
  country: string;
  flag: string;
  note: string;
  verification: string;
  logo?: string;
};

export function UniversityCard({ name, country, flag, note, verification, logo }: UniversityCardProps) {
  return (
    <article className="rounded-[8px] border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/50">
      <div className="mb-5 flex h-16 items-center justify-between">
        {logo ? (
          <div className="relative h-12 w-32">
            <Image src={logo} alt={name} fill className="object-contain object-left" unoptimized />
          </div>
        ) : (
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-950 text-xs font-bold text-white">
            {flag}
          </span>
        )}
        <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600">
          {country}
        </span>
      </div>
      <h3 className="text-lg font-semibold text-slate-950">{name}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{note}</p>
      <p className="mt-5 rounded-[8px] bg-[#F8FAFC] px-4 py-3 text-xs font-semibold text-slate-600">{verification}</p>
    </article>
  );
}
