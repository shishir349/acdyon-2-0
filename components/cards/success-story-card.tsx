import Image from "next/image";

type SuccessStoryCardProps = {
  name: string;
  role: string;
  country: string;
  flag: string;
  image: string;
  program: string;
  background: string;
  objective?: string;
  outcome: string;
  currentPosition?: string;
  quote: string;
};

export function SuccessStoryCard({
  name,
  role,
  country,
  flag,
  image,
  program,
  background,
  objective,
  outcome,
  currentPosition,
  quote,
}: SuccessStoryCardProps) {
  const rows = [
    { label: "Background", value: background, className: "text-slate-600" },
    ...(objective ? [{ label: "Objective", value: objective, className: "text-slate-700" }] : []),
    { label: "Outcome", value: outcome, className: "font-medium text-[#1E40FF]" },
    ...(currentPosition ? [{ label: "Current Position", value: currentPosition, className: "font-semibold text-slate-950" }] : []),
  ];

  return (
    <article className="rounded-[8px] border border-slate-200 bg-white p-7 luxury-shadow transition duration-300 hover:-translate-y-1 hover:border-[#1E40FF]/25">
      <div className="mb-5 flex items-center gap-4">
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-slate-100">
          <Image src={image} alt={`${name} profile photo`} fill sizes="56px" className="object-cover" />
        </div>
        <div>
          <h3 className="font-semibold text-slate-950">{name}</h3>
          <p className="text-sm text-slate-500">
            {role} · {flag} {country}
          </p>
        </div>
      </div>

      <div className="mb-5 inline-flex rounded-full border border-[#1E40FF]/20 bg-[#EEF4FF] px-3 py-1 text-xs font-semibold text-[#1E40FF]">
        {program}
      </div>

      <div className="mb-5 divide-y divide-slate-100 overflow-hidden rounded-[8px] bg-[#F8FAFC]">
        {rows.map((row) => (
          <div key={row.label} className="px-4 py-3">
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">{row.label}</p>
            <p className={`mt-1 text-xs leading-5 ${row.className}`}>{row.value}</p>
          </div>
        ))}
      </div>

      <p className="text-sm leading-7 text-slate-700">&ldquo;{quote}&rdquo;</p>
    </article>
  );
}
