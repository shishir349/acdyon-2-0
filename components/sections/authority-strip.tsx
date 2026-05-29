import { authorityStats, institutionLogos } from "@/lib/data/site";

export function AuthorityStrip() {
  return (
    <section className="border-b border-slate-200 bg-white py-12">
      <div className="container-premium">
        <div className="grid grid-cols-2 gap-x-8 gap-y-6 lg:grid-cols-4">
          {authorityStats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-3">
              <p className="font-display text-4xl font-semibold text-slate-950">{stat.value}</p>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="my-8 border-t border-slate-100" />
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <p className="shrink-0 text-xs font-bold uppercase tracking-[0.22em] text-slate-400">
            Partner Institution Network
          </p>
          <div className="flex flex-wrap gap-2">
            {institutionLogos.map((logo) => (
              <span
                key={logo}
                className="rounded-full border border-slate-200 bg-[#F8FAFC] px-4 py-1.5 text-xs font-semibold text-slate-600"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
