import type { Metadata } from "next";
import { FinalCTA } from "@/components/sections/final-cta";
import { PageHero } from "@/components/sections/page-hero";
import { SuccessStoryCard } from "@/components/cards/success-story-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { aboutStats, successStories } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Success Stories",
  description: "Read outcome-based success stories from AcdyOn learners across doctoral pathways, honorary recognition, and AI programs.",
};

export default function SuccessStoriesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Professional Advancement Stories"
        title="From professional experience to academic and institutional authority"
        description="Structured advancement stories from executives, founders, researchers, and educators who pursued doctoral pathways, honorary recognition, and AI capability — and where that led them."
        secondaryLabel="View All Programmes"
        secondaryHref="/programs"
      />

      {/* Stats Bar */}
      <section className="bg-slate-950 py-16">
        <div className="container-premium">
          <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
            {aboutStats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-4xl text-white">{stat.value}</p>
                <p className="mt-2 text-sm font-medium text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Professional Advancement"
            title="Structured stories of academic and professional progression"
            description="Each story documents a professional's background, stated objective, programme outcome, and current position — guided by the same consultation-first process."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {successStories.map((story) => (
              <SuccessStoryCard key={story.name} {...story} />
            ))}
          </div>
        </div>
      </section>

      {/* Program Types */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Program Coverage"
            title="Outcomes across every program type"
            description="AcdyOn guides professionals across four distinct program categories — each with a different route to authority, recognition, and capability."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                type: "Doctoral Programs",
                description: "DBA, PhD, and Post-Doctoral pathways for professionals pursuing research identity and deep academic authority.",
                count: "Most enrolled pathway",
                accent: "text-[#1E40FF]",
              },
              {
                type: "Honorary Recognition",
                description: "Honorary Doctorate and Professorship for professionals whose career contributions merit institutional distinction.",
                count: "Fastest growing pathway",
                accent: "text-[#D4AF37]",
              },
              {
                type: "AI & Automation",
                description: "Practical AI programs for executives, founders, and consultants ready to build agents and automate real workflows.",
                count: "Highest completion rate",
                accent: "text-[#22D3EE]",
              },
              {
                type: "Executive Certifications",
                description: "Compact credential programs for career mobility, leadership depth, and professional credibility across industries.",
                count: "Broadest audience",
                accent: "text-[#1E40FF]",
              },
            ].map((item) => (
              <article
                key={item.type}
                className="rounded-[8px] border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#1E40FF]/30"
              >
                <p className={`text-xs font-bold uppercase tracking-[0.2em] ${item.accent}`}>{item.count}</p>
                <h3 className="mt-3 text-lg font-semibold text-slate-950">{item.type}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
