import type { Metadata } from "next";
import { FinalCTA } from "@/components/sections/final-cta";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTAButton } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Program Brochures",
  description: "Download detailed brochures for AcdyOn's AI, cybersecurity, doctoral, and honorary recognition programs.",
};

const brochures = [
  {
    title: "Agentic AI & Automation Mastery",
    description: "Complete program guide: 4-month curriculum, tools, projects, mentorship, and career outcomes.",
    tag: "AI & Technology",
    href: "/programs/agentic-ai-automation-mastery",
  },
  {
    title: "Agentic AI & Cybersecurity Mastery",
    description: "Full 16-week programme guide: curriculum, labs, certifications, and career pathways.",
    tag: "AI & Cybersecurity",
    href: "/programs/agentic-ai-cybersecurity-mastery",
  },
  {
    title: "Doctoral Programs Guide",
    description: "Overview of DBA, PhD, and Post-Doctoral Fellowship pathways for experienced professionals.",
    tag: "Doctoral",
    href: "/doctoral-programs",
  },
  {
    title: "Honorary Recognition Guide",
    description: "Understanding honorary doctorate and professorship pathways, eligibility, and process.",
    tag: "Recognition",
    href: "/honorary-recognition",
  },
];

export default function BrochuresPage() {
  return (
    <main>
      <PageHero
        eyebrow="Brochures"
        title="Detailed guides for every program pathway"
        description="Each brochure contains curriculum structure, outcomes, eligibility criteria, and next steps. Start with the program that matches your goals."
      />
      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Available Guides"
            title="Program documentation and pathway overviews"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {brochures.map((item) => (
              <article
                key={item.title}
                className="rounded-[8px] border border-slate-200 bg-[#F8FAFC] p-8 transition duration-300 hover:border-[#1E40FF]/30"
              >
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1E40FF]">{item.tag}</p>
                <h2 className="mt-3 text-xl font-semibold text-slate-950">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                <CTAButton href={item.href} variant="secondary" className="mt-6">View Program</CTAButton>
              </article>
            ))}
          </div>
        </div>
      </section>
      <FinalCTA />
    </main>
  );
}
