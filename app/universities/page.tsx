import type { Metadata } from "next";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { FinalCTA } from "@/components/sections/final-cta";
import { PageHero } from "@/components/sections/page-hero";
import { UniversityCard } from "@/components/cards/university-card";
import { CTAButton } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  geographicPresence,
  howRecognitionWorks,
  recognitionPathways,
  universitiesExtended,
  universitiesFAQs,
} from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Universities",
  description: "Explore AcdyOn's global university network, academic recognition pathways, and partner institutions across 18+ countries.",
};

export default function UniversitiesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Universities"
        title="A global academic network built for professional advancement"
        description="Partner-style pathways, recognition guidance, and country-led clarity for ambitious professionals pursuing academic distinction."
      />

      {/* Partner University Showcase */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="University Network"
            title="Global academic partners across 8 countries"
            description="Each institution is selected based on international standing, recognition signals, and suitability for the professional learners AcdyOn serves."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {universitiesExtended.map((university) => (
              <UniversityCard key={university.name} {...university} />
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-slate-500">
            Pathway suitability is assessed individually during consultation. Not all institutions are available for all program types or nationalities.
          </p>
        </div>
      </section>

      {/* Geographic Presence */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Geographic Presence"
            title="Regional pathways for every professional context"
            description="AcdyOn's network spans four major regions — each with specific institutional partners, recognition norms, and eligibility considerations."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {geographicPresence.map((region) => (
              <article
                key={region.region}
                className="rounded-[8px] border border-slate-200 bg-[#F8FAFC] p-8 transition duration-300 hover:border-[#D4AF37]/50"
              >
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#1E40FF]">{region.region}</p>
                <p className="mt-4 text-sm leading-7 text-slate-600">{region.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {region.countries.map((country) => (
                    <span
                      key={country}
                      className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600"
                    >
                      {country}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Recognition Pathways */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Recognition Pathways"
            title="Three routes to academic distinction"
            description="AcdyOn guides professionals through three core recognition pathways — each suited to a different stage of career, professional background, and academic goal."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {recognitionPathways.map((pathway) => (
              <article
                key={pathway.title}
                className="rounded-[8px] border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-[#1E40FF]/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-[8px] bg-slate-950 text-white">
                  <pathway.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-slate-950">{pathway.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{pathway.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {pathway.programs.map((prog) => (
                    <span
                      key={prog}
                      className="rounded-full border border-slate-200 bg-[#F8FAFC] px-3 py-1 text-xs font-semibold text-slate-600"
                    >
                      {prog}
                    </span>
                  ))}
                </div>
                <CTAButton href={pathway.href} variant="secondary" className="mt-7">
                  Explore Pathway
                </CTAButton>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Institutional Partnerships Matter */}
      <section className="bg-white py-24">
        <div className="container-premium grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="rounded-[8px] bg-slate-950 p-10 text-white">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#D4AF37]">Institutional Partnerships</p>
            <h2 className="mt-5 font-display text-4xl leading-tight">
              A partnership that exists only on a website is not a partnership
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-300">
              Every institution in the AcdyOn network is reviewed for international standing, country-level academic registration, accreditation body affiliations, and the professional suitability of their awards. If a partnership cannot serve the professionals we guide, it is not maintained.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Our institutional relationships are built on programme delivery, candidate welfare, and long-term recognition value — not on name recognition or logo visibility.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Beyond Marketing Relationships",
                desc: "Partnerships are structured around real programme delivery and candidate outcomes — not logo licensing or institutional name-dropping.",
              },
              {
                title: "Country-Level Compatibility",
                desc: "Each institution's awards are reviewed against the recognition norms of the professional's home country and target professional market.",
              },
              {
                title: "Industry Signal Value",
                desc: "A credential is only as strong as how it is perceived by the industries, employers, and peers that matter to the professional holding it.",
              },
              {
                title: "Sustained Suitability Review",
                desc: "Institutional partnerships are maintained only when they continue to serve the professionals we guide. If the relationship no longer delivers, it is reassessed.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-[8px] border border-slate-200 bg-[#F8FAFC] p-6">
                <h3 className="font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Recognition Works */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Process"
            title="How academic recognition works at AcdyOn"
            description="A structured, consultation-led process that ensures every professional is matched to the right institution and pathway before any commitment is made."
          />
          <div className="mt-14 grid gap-5 lg:grid-cols-4">
            {howRecognitionWorks.map((step, index) => (
              <article
                key={step.title}
                className="relative rounded-[8px] border border-slate-200 bg-white p-6"
              >
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

      {/* Verification & Credibility */}
      <section className="bg-slate-950 py-20">
        <div className="container-premium">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#D4AF37]">Credibility Standards</p>
              <h2 className="mt-5 font-display text-4xl leading-tight text-white">
                Transparency before enrollment — always
              </h2>
              <p className="mt-5 text-sm leading-7 text-slate-300">
                AcdyOn does not recommend any institution or pathway until a thorough eligibility review has been completed. Every professional receives an honest assessment of what a credential will mean in their specific regional and professional context.
              </p>
              <CTAButton href="/book-consultation" variant="dark" className="mt-8">
                Book Eligibility Review
              </CTAButton>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { label: "Institution Review", desc: "Every partner institution is assessed for international recognition and accreditation standing." },
                { label: "Regional Guidance", desc: "Recognition norms vary by country. We advise on what works where, before you commit." },
                { label: "Eligibility First", desc: "No program is recommended without reviewing your background, goals, and fit." },
                { label: "Honest Assessment", desc: "If a pathway is not suitable, we say so clearly — and help find a better fit." },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-[8px] border border-white/10 bg-white/[0.04] p-5"
                >
                  <h3 className="font-semibold text-white">{item.label}</h3>
                  <p className="mt-2 text-xs leading-6 text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24">
        <div className="container-premium max-w-4xl">
          <SectionHeading eyebrow="FAQ" title="Questions about university partnerships and recognition" />
          <Accordion.Root type="single" collapsible className="mt-12 grid gap-3">
            {universitiesFAQs.map((faq) => (
              <Accordion.Item
                key={faq.question}
                value={faq.question}
                className="rounded-[8px] border border-slate-200 bg-white px-5"
              >
                <Accordion.Trigger className="flex w-full items-center justify-between gap-4 py-5 text-left font-semibold text-slate-950">
                  {faq.question}
                  <ChevronDown className="h-5 w-5 shrink-0 text-slate-400 transition duration-300 data-[state=open]:rotate-180" />
                </Accordion.Trigger>
                <Accordion.Content className="overflow-hidden pb-5 text-sm leading-7 text-slate-600">
                  {faq.answer}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
