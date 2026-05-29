import type { Metadata } from "next";
import * as Accordion from "@radix-ui/react-accordion";
import { CheckCircle2, ChevronDown } from "lucide-react";
import { ConsultationNudge } from "@/components/sections/consultation-nudge";
import { FinalCTA } from "@/components/sections/final-cta";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { doctoralEligibility, doctoralFAQs, doctoralTracks, processSteps } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Doctoral Programs",
  description: "Flexible doctoral pathways for experienced professionals — DBA, PhD, and Post-Doctoral Fellowship. Structured around your professional record, not your academic history.",
};

export default function DoctoralProgramsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Doctoral Programmes"
        title="Doctoral advancement designed for professionals who have already proven themselves"
        description="DBA, PhD, and Post-Doctoral Fellowship pathways built around your professional record — with flexible structures, institutional guidance, and genuine recognition value."
        secondaryLabel="View Recognition Pathways"
        secondaryHref="/honorary-recognition"
      />

      {/* Why Doctoral Advancement */}
      <section className="bg-white py-24">
        <div className="container-premium grid gap-12 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            align="left"
            eyebrow="Academic Authority"
            title="The professional record is the qualification — the doctorate is the framing"
          />
          <div className="space-y-5 text-sm leading-7 text-slate-600">
            <p>
              A professional with 15 years of executive leadership, domain research, or industry contribution has accumulated the substance of a doctoral education many times over. What they typically lack is the institutional framework to name, formalise, and present that substance to academic and professional audiences.
            </p>
            <p>
              AcdyOn's doctoral pathways are designed to provide that framework — through the right institutional partner, an appropriate programme structure, and a process that begins with an honest assessment of eligibility and fit.
            </p>
            <p>
              The goal is not to make experienced professionals return to the beginning. It is to find the doctoral route that starts from where they already are.
            </p>
          </div>
        </div>
      </section>

      {/* Three Doctoral Tracks */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Programme Tracks"
            title="Three doctoral pathways. Each calibrated for a different professional profile."
            description="AcdyOn guides professionals across three doctoral routes — selected based on professional background, research readiness, and long-term academic goals."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {doctoralTracks.map((track) => (
              <article
                key={track.degree}
                className="rounded-[8px] border border-slate-200 bg-white p-8 transition duration-300 hover:border-[#1E40FF]/30"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-slate-950 px-4 py-1.5 text-xs font-bold text-white">
                    {track.degree}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#D4AF37]">{track.eyebrow}</span>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-950">{track.title}</h3>
                <p className="mt-2 text-sm font-medium text-[#1E40FF]">{track.purpose}</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">{track.description}</p>
                <div className="mt-6 grid grid-cols-3 gap-3 rounded-[8px] border border-slate-200 bg-[#F8FAFC] p-4 text-center">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">Duration</p>
                    <p className="mt-1 text-xs font-semibold text-slate-950">{track.duration}</p>
                  </div>
                  <div className="border-x border-slate-200">
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">Format</p>
                    <p className="mt-1 text-xs font-semibold text-slate-950">{track.format}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">Focus</p>
                    <p className="mt-1 text-xs font-semibold text-slate-950">{track.focus}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Ideal For</p>
                  <div className="grid gap-2">
                    {track.audience.map((item) => (
                      <div key={item} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#1E40FF]" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Programme Outcomes */}
      <section className="bg-slate-950 py-24">
        <div className="container-premium">
          <SectionHeading
            variant="dark"
            eyebrow="Programme Outcomes"
            title="What doctoral advancement delivers at each level"
            description="Each pathway produces a distinct set of professional and academic outcomes. All are built around your existing expertise — not a generic academic syllabus."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {doctoralTracks.map((track) => (
              <div
                key={track.degree}
                className="rounded-[8px] border border-white/10 bg-white/[0.04] p-7"
              >
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">{track.degree}</p>
                <h3 className="mt-3 text-lg font-semibold text-white">{track.title}</h3>
                <div className="mt-5 grid gap-3">
                  {track.outcomes.map((outcome) => (
                    <div key={outcome} className="flex items-start gap-3 text-sm text-slate-300">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#22D3EE]" />
                      {outcome}
                    </div>
                  ))}
                </div>
                <p className="mt-6 rounded-[8px] border border-white/10 bg-white/[0.03] px-4 py-3 text-xs leading-5 text-slate-400">
                  <span className="font-semibold text-slate-300">Progression: </span>{track.progression}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Eligibility"
            title="What AcdyOn reviews before recommending a doctoral pathway"
            description="No doctoral programme is recommended without a thorough review of your profile. Eligibility assessment is a structured part of every consultation — not a formality."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {doctoralEligibility.map((item) => (
              <article
                key={item.title}
                className="rounded-[8px] border border-slate-200 bg-[#F8FAFC] p-7"
              >
                <h3 className="font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Process"
            title="A guided four-step process from consultation to programme start"
            description="Every doctoral enrolment at AcdyOn follows the same consultation-first process — designed to ensure every recommendation is right before any commitment is made."
          />
          <div className="mt-14 grid gap-5 lg:grid-cols-4">
            {processSteps.map((step, index) => (
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

      <ConsultationNudge />

      {/* FAQ */}
      <section className="bg-white py-24">
        <div className="container-premium max-w-4xl">
          <SectionHeading eyebrow="FAQ" title="Questions about doctoral programmes at AcdyOn" />
          <Accordion.Root type="single" collapsible className="mt-12 grid gap-3">
            {doctoralFAQs.map((faq) => (
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
