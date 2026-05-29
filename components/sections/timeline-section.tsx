import { processSteps } from "@/lib/data/site";
import { SectionHeading } from "@/components/ui/section-heading";

export function TimelineSection() {
  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="container-premium">
        <SectionHeading eyebrow="Process" title="A guided four-step process from consultation to programme start" />
        <div className="mt-14 grid gap-5 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <article key={step.title} className="relative rounded-[8px] border border-slate-200 bg-white p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">
                {index + 1}
              </span>
              <h3 className="mt-8 text-lg font-semibold text-slate-950">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
