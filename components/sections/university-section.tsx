import { UniversityCard } from "@/components/cards/university-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { networkHighlights, universities } from "@/lib/data/site";

export function UniversitySection() {
  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="container-premium">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <SectionHeading
            align="left"
            eyebrow="University Network"
            title="Global academic pathways with guided admissions clarity"
            description="A premium network presentation designed to help professionals understand fit, credibility, and pathway options before they commit."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {networkHighlights.map((item) => (
              <div key={item} className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {universities.map((university) => <UniversityCard key={university.name} {...university} />)}
        </div>
      </div>
    </section>
  );
}
