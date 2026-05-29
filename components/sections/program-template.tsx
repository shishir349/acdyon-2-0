import { CheckCircle2 } from "lucide-react";
import { CTAButton } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { curriculumHighlights, outcomes, programCategories } from "@/lib/data/site";

type ProgramTemplateProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function ProgramTemplate({ eyebrow, title, description }: ProgramTemplateProps) {
  return (
    <>
      <section className="bg-white py-24">
        <div className="container-premium grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading align="left" eyebrow={eyebrow} title={title} description={description} />
          <div className="rounded-[8px] border border-slate-200 bg-[#F8FAFC] p-8">
            <h2 className="text-2xl font-semibold text-slate-950">Program Overview</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Each pathway is manually guided in Phase 1, with consultation-led eligibility review, program selection, and admissions support. The experience is intentionally high-touch, premium, and practical.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {["Executive friendly", "Global positioning", "Mentor guidance", "Flexible structure"].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-[#1E40FF]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <SectionHeading eyebrow="Highlights" title="A structured premium program experience" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {curriculumHighlights.map((item) => (
              <article key={item} className="rounded-[8px] border border-slate-200 bg-white p-6 text-sm leading-7 text-slate-700">
                {item}
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-24">
        <div className="container-premium grid gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#1E40FF]">Who Should Apply</p>
            <h2 className="font-display text-4xl leading-tight text-slate-950">Senior professionals pursuing academic and professional advancement</h2>
            <div className="mt-8 grid gap-3">
              {programCategories.slice(0, 4).map((item) => (
                <div key={item.title} className="rounded-[8px] border border-slate-200 p-5">
                  <h3 className="font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[8px] bg-slate-950 p-8 text-white">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#D4AF37]">Outcomes</p>
            <h2 className="mt-4 font-display text-4xl leading-tight">What learners should be able to carry forward</h2>
            <div className="mt-8 grid gap-4">
              {outcomes.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-[8px] border border-white/10 bg-white/[0.04] p-4 text-sm text-slate-200">
                  <CheckCircle2 className="h-5 w-5 text-[#22D3EE]" />
                  {item}
                </div>
              ))}
            </div>
            <CTAButton href="/book-consultation" variant="dark" className="mt-8">Check Eligibility</CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
