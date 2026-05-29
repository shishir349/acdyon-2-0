import { audiences } from "@/lib/data/site";
import { SectionHeading } from "@/components/ui/section-heading";

export function AudienceSection() {
  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="container-premium">
        <SectionHeading
          eyebrow="Who It Is For"
          title="For ambitious professionals building their next level of authority"
          description="From founders to educators, AcdyOn supports people who want learning to signal leadership, capability, and distinction."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience) => (
            <article key={audience.title} className="rounded-[8px] border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:bg-white/[0.07]">
              <audience.icon className="h-5 w-5 text-[#D4AF37]" />
              <h3 className="mt-5 font-semibold text-white">{audience.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{audience.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
