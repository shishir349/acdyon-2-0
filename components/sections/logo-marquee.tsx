import Image from "next/image";
import { partnerUniversities, stats } from "@/lib/data/site";

export function LogoMarquee() {
  const repeated = [...partnerUniversities, ...partnerUniversities];

  return (
    <section className="border-y border-slate-200 bg-white py-10">
      <div className="container-premium">
        <div className="mb-8 flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#1E40FF]">Global Academic Network</p>
            <h2 className="mt-2 font-display text-3xl text-slate-950">Academic partnerships and institutional signals that inform before enrollment</h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-slate-600">University partnerships, geographic presence, learner community, and recognition pathways visible from the first engagement.</p>
        </div>
        <div className="grid gap-8 lg:grid-cols-[420px_1fr] lg:items-center">
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-[8px] border border-slate-200 bg-[#F8FAFC] p-4">
                <p className="text-2xl font-semibold text-slate-950">{stat.value}</p>
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="overflow-hidden">
            <div className="marquee flex w-max gap-4">
              {repeated.map((uni, index) => (
                <div
                  key={`${uni.name}-${index}`}
                  className="flex h-16 min-w-48 items-center justify-center rounded-[8px] border border-slate-200 bg-white px-5"
                >
                  <div className="relative h-10 w-36">
                    <Image
                      src={uni.logo}
                      alt={uni.name}
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
