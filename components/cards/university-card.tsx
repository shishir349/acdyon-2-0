import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type UniversityCardProps = {
  name: string;
  country: string;
  flag?: string;
  note: string;
  verification?: string;
  logo?: string;
  pathways?: string[];
  href?: string;
  className?: string;
};

export function UniversityCard({ name, country, note, logo, pathways, href, className }: UniversityCardProps) {
  return (
    <article className={cn("flex flex-col overflow-hidden rounded-[12px] border border-slate-200 bg-white transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[#D4AF37]/50 hover:shadow-xl dark:border-slate-800 dark:bg-slate-950", className)}>
      <div className="flex h-24 items-center justify-center border-b border-slate-100 bg-[#F8FAFC] px-8 dark:border-slate-800 dark:bg-slate-900/60">
        {logo ? (
          <div className="relative h-12 w-full max-w-[180px]">
            <Image src={logo} alt={name} fill className="object-contain" unoptimized />
          </div>
        ) : (
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-950 text-sm font-bold text-white">
            {name.charAt(0)}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-7">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold text-slate-950 dark:text-white">{name}</h3>
          <span className="shrink-0 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 dark:border-slate-700 dark:text-slate-300">
            {country}
          </span>
        </div>
        <p className="mt-4 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-300">{note}</p>
        {pathways && pathways.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {pathways.map((p) => (
              <span key={p} className="rounded-full bg-[#1E40FF]/8 px-3 py-1 text-xs font-semibold text-[#1E40FF]">
                {p}
              </span>
            ))}
          </div>
        )}
        {href && (
          <Link
            href={href}
            className="mt-6 inline-flex items-center justify-center rounded-full border border-slate-200 px-5 py-3 text-xs font-semibold text-slate-950 transition hover:border-[#1E40FF] hover:text-[#1E40FF] dark:border-slate-700 dark:text-white"
          >
            View University
          </Link>
        )}
      </div>
    </article>
  );
}
