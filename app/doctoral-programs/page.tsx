import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { ConsultationNudge } from "@/components/sections/consultation-nudge";
import { FinalCTA } from "@/components/sections/final-cta";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTAButton } from "@/components/ui/button";
import { doctoralTracks } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Doctoral Programs",
  description: "Choose your doctoral pathway — DBA, PhD, or Post-Doctoral Fellowship. Designed for professionals with real-world expertise seeking institutional recognition.",
};

export default function DoctoralProgramsGateway() {
  return (
    <main>
      <PageHero
        eyebrow="Doctoral Programmes"
        title="Choose your doctoral pathway"
        description="Three flexible routes for experienced professionals. Select the pathway that aligns with your professional goals, research readiness, and career vision."
      />

      {/* Pathway Selection Section */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Select Your Track"
            title="Three doctoral pathways. Each calibrated for a different professional profile."
            description="Select a pathway to explore universities, pricing, eligibility requirements, and curriculum details specific to your chosen route."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {doctoralTracks.map((track) => {
              const href =
                track.degree === "DBA"
                  ? "/doctoral-programs/dba"
                  : track.degree === "PhD"
                    ? "/doctoral-programs/phd"
                    : "/doctoral-programs/post-doctorate";

              return (
                <article
                  key={track.degree}
                  className="rounded-[8px] border border-slate-200 bg-white p-8 transition duration-300 hover:border-[#1E40FF]/30 hover:shadow-lg flex flex-col"
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-slate-950 px-4 py-1.5 text-xs font-bold text-white">
                      {track.degree}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#D4AF37]">
                      {track.eyebrow}
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-slate-950">
                    {track.title}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-[#1E40FF]">
                    {track.purpose}
                  </p>

                  {/* Stats Bar */}
                  <div className="mt-6 grid grid-cols-3 gap-3 rounded-[8px] border border-slate-200 bg-[#F8FAFC] p-4 text-center">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                        Duration
                      </p>
                      <p className="mt-1 text-xs font-semibold text-slate-950">
                        {track.duration}
                      </p>
                    </div>
                    <div className="border-x border-slate-200">
                      <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                        Format
                      </p>
                      <p className="mt-1 text-xs font-semibold text-slate-950">
                        {track.format}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                        Focus
                      </p>
                      <p className="mt-1 text-xs font-semibold text-slate-950">
                        {track.focus}
                      </p>
                    </div>
                  </div>

                  {/* Top 3 Outcomes */}
                  <div className="mt-6 flex-grow">
                    <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                      Key Outcomes
                    </p>
                    <div className="grid gap-2">
                      {track.outcomes.slice(0, 3).map((outcome) => (
                        <div
                          key={outcome}
                          className="flex items-start gap-2 text-xs text-slate-600"
                        >
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#1E40FF]" />
                          {outcome}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-8 pt-6 border-t border-slate-200">
                    <CTAButton href={href} variant="primary">
                      Explore {track.degree}
                    </CTAButton>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Comparison Table */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Quick Comparison"
            title="Understand the differences at a glance"
            description="Use this comparison to quickly see how the three pathways differ. Click any pathway card above to explore full details, universities, and pricing."
          />
          <div className="mt-14 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-950 text-white">
                  <th className="border-b p-4 text-left font-semibold">
                    Pathway
                  </th>
                  <th className="border-b p-4 text-left font-semibold">
                    Ideal For
                  </th>
                  <th className="border-b p-4 text-left font-semibold">
                    Duration
                  </th>
                  <th className="border-b p-4 text-left font-semibold">
                    Format
                  </th>
                  <th className="border-b p-4 text-left font-semibold">
                    Focus
                  </th>
                </tr>
              </thead>
              <tbody>
                {doctoralTracks.map((track, idx) => (
                  <tr
                    key={track.degree}
                    className={`${idx % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"} hover:bg-blue-50 transition`}
                  >
                    <td className="border-b p-4 font-semibold text-slate-950">
                      {track.title}
                    </td>
                    <td className="border-b p-4 text-slate-600">
                      {track.audience[0]}
                    </td>
                    <td className="border-b p-4 text-slate-600">
                      {track.duration}
                    </td>
                    <td className="border-b p-4 text-slate-600">
                      {track.format}
                    </td>
                    <td className="border-b p-4 text-slate-600">
                      {track.focus}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <ConsultationNudge />
      <FinalCTA />
    </main>
  );
}
