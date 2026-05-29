import type { Metadata } from "next";
import * as Accordion from "@radix-ui/react-accordion";
import { CheckCircle2, ChevronDown, Clock, Shield, ShieldCheck, Zap } from "lucide-react";
import { ConsultationNudge } from "@/components/sections/consultation-nudge";
import { FinalCTA } from "@/components/sections/final-cta";
import { PageHero } from "@/components/sections/page-hero";
import { SuccessStoryCard } from "@/components/cards/success-story-card";
import { CTAButton } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  cybersecurityCareerPaths,
  cybersecurityCertifications,
  cybersecurityCurriculum,
  cybersecurityFAQs,
  cybersecurityImpact,
  cybersecurityLabs,
  cybersecurityProgramMeta,
  cybersecurityStats,
  cybersecurityTestimonials,
  cybersecurityThreats,
  cybersecurityTools,
} from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Agentic AI & Cybersecurity Mastery",
  description: "Master AI-powered cybersecurity from fundamentals to autonomous defence. 16 weeks, blended learning, Microsoft AI-900 certification, hands-on red team labs, and comprehensive career advancement support.",
};

export default function CybersecurityMasteryPage() {
  return (
    <main>
      <PageHero
        eyebrow={cybersecurityProgramMeta.eyebrow}
        title={cybersecurityProgramMeta.title}
        description={cybersecurityProgramMeta.description}
        secondaryLabel="See Programme Structure"
        secondaryHref="#curriculum"
        partnerBadge="Academic Collaboration · The Tech Unique (TTU)"
      />

      {/* Programme Snapshot */}
      <section className="bg-[#F8FAFC] py-14">
        <div className="container-premium">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Duration", value: cybersecurityProgramMeta.duration, icon: Clock },
              { label: "Format", value: cybersecurityProgramMeta.format, icon: Zap },
              { label: "Certification", value: cybersecurityProgramMeta.certification, icon: ShieldCheck },
              { label: "Career Support", value: "Dedicated Guidance", icon: Shield },
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

      {/* AI Threat Landscape */}
      <section className="bg-slate-950 py-24">
        <div className="container-premium">
          <SectionHeading
            variant="dark"
            eyebrow="The New Threat Reality"
            title="Cybersecurity is no longer human versus hacker"
            description="It is intelligent systems versus intelligent systems. The programme equips you with the agentic AI skills, automation mindset, and technical depth to defend, detect, and respond at machine speed."
          />
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {cybersecurityThreats.map((threat) => (
              <article
                key={threat.title}
                className="rounded-[8px] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:bg-white/[0.07]"
              >
                <h3 className="font-semibold text-white">{threat.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{threat.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Impact */}
      <section className="bg-white py-24">
        <div className="container-premium grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="rounded-[8px] bg-slate-950 p-10 text-white">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#D4AF37]">Industry Impact</p>
            <h2 className="mt-5 font-display text-4xl leading-tight">
              AI is transforming cybersecurity. Be the professional who leads the defence.
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-300">
              Organisations are not just facing more attacks — they are facing smarter, faster, and more adaptive ones. The defenders who will matter are those who understand how AI operates on both sides of the threat.
            </p>
            <CTAButton href="/book-consultation" variant="dark" className="mt-8">
              Book Consultation
            </CTAButton>
          </div>
          <div className="grid gap-3">
            {cybersecurityImpact.map((point) => (
              <div
                key={point}
                className="flex items-start gap-4 rounded-[8px] border border-slate-200 bg-[#F8FAFC] p-5"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#1E40FF]" />
                <p className="text-sm leading-7 text-slate-700">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section id="curriculum" className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Programme Curriculum"
            title="Three progressive parts. One complete cyber defender."
            description="The 16-week programme builds from security foundations through offensive mastery to advanced autonomous defence — developing practical capability at every stage."
          />
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {cybersecurityCurriculum.map((part) => (
              <article
                key={part.part}
                className="rounded-[8px] border border-slate-200 bg-white p-8 transition duration-300 hover:border-[#1E40FF]/30"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-slate-950 px-3 py-1 text-xs font-bold text-white">
                    {part.part}
                  </span>
                  <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-500">
                    {part.duration}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-950">{part.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{part.description}</p>
                <div className="mt-5 grid gap-3">
                  {part.modules.map((mod) => (
                    <div key={mod.name} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#1E40FF]" />
                      <div>
                        <p className="text-xs font-semibold text-slate-950">{mod.name}</p>
                        <p className="mt-0.5 text-xs leading-5 text-slate-500">{mod.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Tools & Technologies"
            title="Industry-grade tooling from the first session"
            description="Every tool in this programme is used by practising security professionals. You will graduate with hands-on experience, not theoretical familiarity."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {[
              { label: "Core Security Tools", items: cybersecurityTools.core },
              { label: "Enterprise Security Platforms", items: cybersecurityTools.enterprise },
              { label: "AI Security Frameworks", items: cybersecurityTools.ai },
            ].map((group) => (
              <div
                key={group.label}
                className="rounded-[8px] border border-slate-200 bg-[#F8FAFC] p-6"
              >
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#1E40FF]">
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hands-On Labs */}
      <section className="bg-slate-950 py-24">
        <div className="container-premium">
          <SectionHeading
            variant="dark"
            eyebrow="Hands-On Labs"
            title="Controlled professional environments with industry-standard tooling"
            description="Every lab is structured around real-world security scenarios. You will practise what security professionals actually do — not academic simulations designed for assessment."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {cybersecurityLabs.map((lab) => (
              <article
                key={lab.number}
                className="rounded-[8px] border border-white/10 bg-white/[0.04] p-8 transition duration-300 hover:bg-white/[0.07]"
              >
                <p className="font-display text-5xl font-bold text-[#D4AF37]/40">{lab.number}</p>
                <h3 className="mt-5 text-xl font-semibold text-white">{lab.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{lab.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {lab.tags.map((tag) => (
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

      {/* Career Pathways */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Career Pathways"
            title="Three high-demand roles this programme prepares you for"
            description="From foundational learning to practitioner-level capability — the programme accelerates progression into three distinct AI cybersecurity career tracks."
          />
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {cybersecurityCareerPaths.map((path) => (
              <article
                key={path.number}
                className="rounded-[8px] border border-slate-200 bg-[#F8FAFC] p-8 transition duration-300 hover:-translate-y-1 hover:border-[#1E40FF]/30"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-950 text-sm font-bold text-white">
                  {path.number}
                </div>
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-[#1E40FF]">{path.tagline}</p>
                <h3 className="mt-2 text-xl font-semibold text-slate-950">{path.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{path.description}</p>
                <div className="mt-6 grid gap-2">
                  {path.skills.map((skill) => (
                    <div key={skill} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#1E40FF]" />
                      {skill}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Certifications"
            title="Globally recognised credentials for career advancement"
            description="Graduates earn two credentials — one from AcdyOn and one globally recognised Microsoft certification — both designed to signal real capability to employers and institutions."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {cybersecurityCertifications.map((cert) => (
              <article
                key={cert.title}
                className="rounded-[8px] border border-slate-200 bg-white p-8 transition duration-300 hover:border-[#D4AF37]/40"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1E40FF]">{cert.issuer}</p>
                    <h3 className="mt-2 text-xl font-semibold text-slate-950">{cert.title}</h3>
                  </div>
                  {cert.badge ? (
                    <span className="shrink-0 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-3 py-1.5 text-xs font-bold text-[#D4AF37]">
                      {cert.badge}
                    </span>
                  ) : null}
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">{cert.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ConsultationNudge />

      {/* Programme Impact */}
      <section className="border-y border-slate-200 bg-[#F8FAFC] py-14">
        <div className="container-premium">
          <div className="grid grid-cols-2 gap-x-8 gap-y-6 lg:grid-cols-4">
            {cybersecurityStats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-3">
                <p className="font-display text-4xl font-semibold text-slate-950">{stat.value}</p>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learner Outcomes */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Learner Outcomes"
            title="Professional transitions supported by structured learning"
            description="From IT support to enterprise security. From developer to AI defence engineering at Microsoft. These are the outcomes this programme is built to deliver."
          />
          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            {cybersecurityTestimonials.map((story) => (
              <SuccessStoryCard key={story.name} {...story} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium max-w-4xl">
          <SectionHeading eyebrow="FAQ" title="Questions about the Cybersecurity Mastery programme" />
          <Accordion.Root type="single" collapsible className="mt-12 grid gap-3">
            {cybersecurityFAQs.map((faq) => (
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
