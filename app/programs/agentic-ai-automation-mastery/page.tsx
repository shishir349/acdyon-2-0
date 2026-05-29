import type { Metadata } from "next";
import * as Accordion from "@radix-ui/react-accordion";
import { Bot, CheckCircle2, ChevronDown, GitBranch, Workflow, Zap } from "lucide-react";
import { ConsultationNudge } from "@/components/sections/consultation-nudge";
import { FinalCTA } from "@/components/sections/final-cta";
import { PageHero } from "@/components/sections/page-hero";
import { CTAButton } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  agenticAiAudience,
  agenticAiCurriculum,
  agenticAiFAQs,
  agenticAiMeta,
  agenticAiOutcomes,
  agenticAiProjects,
  agenticAiTools,
} from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Agentic AI & Automation Mastery",
  description: "A 4-month applied AI programme for professionals ready to build autonomous agents, automate business workflows, and deploy real-world projects. Live mentorship and three capstone deliverables.",
};

export default function AgenticAIAutomationPage() {
  return (
    <main>
      <PageHero
        eyebrow={agenticAiMeta.eyebrow}
        title={agenticAiMeta.title}
        description={agenticAiMeta.description}
        secondaryLabel="View Curriculum"
        secondaryHref="#curriculum"
      />

      {/* Programme Snapshot */}
      <section className="bg-[#F8FAFC] py-14">
        <div className="container-premium">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Duration", value: agenticAiMeta.duration, icon: Bot },
              { label: "Format", value: agenticAiMeta.format, icon: Workflow },
              { label: "Mentorship", value: agenticAiMeta.mentorship, icon: GitBranch },
              { label: "Projects", value: agenticAiMeta.projects, icon: Zap },
            ].map((item) => (
              <div key={item.label} className="rounded-[8px] border border-slate-200 bg-white p-5 sm:p-6">
                <div className="flex items-center gap-4 sm:block">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[8px] bg-slate-950 text-white sm:h-12 sm:w-12">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div className="sm:mt-4">
                    <p className="font-semibold text-slate-950">{item.value}</p>
                    <p className="mt-0.5 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">{item.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section id="curriculum" className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Curriculum"
            title="Four progressive phases. One complete AI practitioner."
            description="The programme is structured across four phases — from AI foundations to deployed capstone projects — with live practitioner mentorship throughout."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {agenticAiCurriculum.map((phase) => (
              <article
                key={phase.phase}
                className="rounded-[8px] border border-slate-200 bg-[#F8FAFC] p-8 transition duration-300 hover:border-[#1E40FF]/30"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-950 text-xs font-bold text-white">
                    {phase.phase.split(" ")[1]}
                  </span>
                  <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-500">
                    {phase.duration}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-950">{phase.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{phase.description}</p>
                <div className="mt-5 grid gap-2">
                  {phase.topics.map((topic) => (
                    <div key={topic} className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#1E40FF]" />
                      {topic}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="bg-[#F8FAFC] py-20">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Tools Covered"
            title="The full stack of modern AI practice"
            description="Every tool in this programme is used by working AI practitioners. You will graduate with applied experience across agents, automation platforms, and integration layers."
          />
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {agenticAiTools.map((tool) => (
              <div
                key={tool.name}
                className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5"
              >
                <span className="text-sm font-semibold text-slate-950">{tool.name}</span>
                <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">
                  {tool.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capstone Projects */}
      <section className="bg-slate-950 py-24">
        <div className="container-premium">
          <SectionHeading
            variant="dark"
            eyebrow="Capstone Projects"
            title="Three applied projects. All portfolio-ready."
            description="Every learner completes three capstone deliverables — one per core track. Built to deploy, not to submit."
          />
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {agenticAiProjects.map((project) => (
              <article
                key={project.number}
                className="rounded-[8px] border border-white/10 bg-white/[0.04] p-8 transition duration-300 hover:bg-white/[0.07]"
              >
                <p className="font-display text-5xl font-bold text-[#D4AF37]/40">{project.number}</p>
                <h3 className="mt-5 text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Practitioner Mentorship */}
      <section className="relative overflow-hidden bg-white py-24">
        <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-[#22D3EE]/10 blur-3xl" />
        <div className="container-premium relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="rounded-[8px] bg-slate-950 p-8 text-white luxury-shadow">
            <div className="rounded-[8px] border border-white/10 bg-white/[0.03] p-6">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#22D3EE]">Mentorship Model</p>
              <h3 className="mt-5 font-display text-3xl leading-tight">
                Practitioner-guided learning with applied mentorship throughout
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Every learner works with an experienced AI practitioner mentor across all four phases. Sessions are scheduled around your professional calendar.
              </p>
              <div className="mt-6 grid gap-3">
                {[
                  "Project reviews at each phase",
                  "Live Q&A and applied concept sessions",
                  "Career and consultancy positioning",
                  "Portfolio review before graduation",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#22D3EE]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#1E40FF]">Applied Learning</p>
            <h2 className="font-display text-4xl leading-tight text-slate-950 sm:text-5xl">
              Capability is built through guided practice — not passive study
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Most AI courses deliver information. This programme delivers someone in your corner while you build. Mentors review actual projects, provide direct feedback, and help you apply AI capability within your specific professional context.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              The outcome is not a completed course — it is practitioner-level capability that holds up in executive conversations, client engagements, and operational settings.
            </p>
            <CTAButton href="/book-consultation" className="mt-8">Book Consultation</CTAButton>
          </div>
        </div>
      </section>

      {/* Programme Outcomes */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium grid gap-12 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            align="left"
            eyebrow="Programme Outcomes"
            title="What you carry forward after four months"
            description="Every outcome is built into the programme structure — not promised as a peripheral benefit."
          />
          <div className="grid gap-3">
            {agenticAiOutcomes.map((outcome) => (
              <div
                key={outcome}
                className="flex items-center gap-4 rounded-[8px] border border-slate-200 bg-white p-4 text-sm font-medium text-slate-700"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#1E40FF]" />
                {outcome}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConsultationNudge />

      {/* Who This Programme Serves */}
      <section className="bg-slate-950 py-24 text-white">
        <div className="container-premium">
          <SectionHeading
            variant="dark"
            eyebrow="Who This Is For"
            title="Designed for senior professionals across six disciplines"
            description="No engineering background required. A professional mindset and a commitment to applied learning are sufficient."
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {agenticAiAudience.map((item) => (
              <article
                key={item.title}
                className="rounded-[8px] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:bg-white/[0.07]"
              >
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24">
        <div className="container-premium max-w-4xl">
          <SectionHeading eyebrow="FAQ" title="Questions about the Agentic AI & Automation programme" />
          <Accordion.Root type="single" collapsible className="mt-12 grid gap-3">
            {agenticAiFAQs.map((faq) => (
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
