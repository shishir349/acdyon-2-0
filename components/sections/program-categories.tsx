import { ProgramCard } from "@/components/cards/program-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { programCategories } from "@/lib/data/site";

export function ProgramCategories() {
  return (
    <section className="bg-[#F8FAFC] py-14 sm:py-24 dark:bg-slate-950">
      <div className="container-premium">
        <SectionHeading
          eyebrow="Programs"
          title="Premium pathways for career authority, future skills, and recognition"
          description="AcdyOn brings together executive learning, AI capability, doctoral advancement, and honorary recognition in a cohesive global platform."
        />
        <div className="mt-10 sm:mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {programCategories.map((program) => <ProgramCard key={program.title} {...program} />)}
        </div>
      </div>
    </section>
  );
}
