import type { Metadata } from "next";
import * as Accordion from "@radix-ui/react-accordion";
import { CheckCircle2, ChevronDown } from "lucide-react";
import { ConsultationNudge } from "@/components/sections/consultation-nudge";
import { FinalCTA } from "@/components/sections/final-cta";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { PricingDisplay } from "@/components/PricingDisplay";
import { AccreditationShowcase } from "@/components/AccreditationShowcase";
import { doctoralEligibility, doctoralFAQs, doctoralTracks, processSteps } from "@/lib/data/site";

const postDocTrack = doctoralTracks.find((t) => t.degree === "Post-Doc")!;

export const metadata: Metadata = {
  title: "Post-Doctoral Fellowship",
  description: "Advanced academic distinction for existing doctorate holders. Further research contribution and institutional affiliation. Contact us to explore.",
};

export default function PostDoctoralPathwayPage() {
  const postDocFAQs = doctoralFAQs.filter(
    (faq) =>
      faq.question.includes("Post-Doctoral") ||
      faq.question.includes("existing PhD or DBA")
  );

  return (
    <main>
      <PageHero
        eyebrow="Advanced Academic Distinction"
        title={postDocTrack.title}
        description={postDocTrack.purpose}
        secondaryLabel="View All Pathways"
        secondaryHref="/doctoral-programs"
      />

      {/* Programme Overview */}
      <section className="bg-white py-24">
        <div className="container-premium grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-5 text-sm leading-7 text-slate-600">
            <p>{postDocTrack.description}</p>
            <p>
              If you hold a PhD or DBA and are seeking further academic recognition, the Post-Doctoral
              Fellowship represents the next level. It's designed for scholars who have completed their
              doctoral work and are ready to deepen their research contribution and academic standing.
            </p>
          </div>
          <div className="rounded-[8px] border border-slate-200 bg-[#F8FAFC] p-8">
            <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-slate-400">
              Programme Snapshot
            </h3>
            <div className="mt-6 grid gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                  Duration
                </p>
                <p className="mt-2 text-lg font-semibold text-slate-950">
                  {postDocTrack.duration}
                </p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                  Delivery Format
                </p>
                <p className="mt-2 text-lg font-semibold text-slate-950">
                  {postDocTrack.format}
                </p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                  Focus Area
                </p>
                <p className="mt-2 text-lg font-semibold text-slate-950">
                  {postDocTrack.focus}
                </p>
              </div>
              <div className="border-t border-slate-200 pt-4">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                  Ideal For
                </p>
                <div className="mt-3 grid gap-2">
                  {postDocTrack.audience.map((item) => (
                    <div key={item} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#1E40FF]" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Advancement */}
      <section className="bg-slate-950 py-24">
        <div className="container-premium">
          <SectionHeading
            variant="dark"
            eyebrow="Advanced Recognition"
            title="What you'll achieve"
            description="Post-Doctoral Fellowship elevates your academic standing and institutional affiliation."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <div>
              <div className="grid gap-3">
                {postDocTrack.outcomes.map((outcome) => (
                  <div key={outcome} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#22D3EE]" />
                    <span className="text-sm text-slate-300">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[8px] border border-white/10 bg-white/[0.04] p-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                Progression Pathways
              </p>
              <p className="mt-4 text-sm leading-6 text-slate-300">
                After your Post-Doctoral Fellowship, you can advance to:
              </p>
              <p className="mt-4 text-sm font-semibold text-slate-100">
                {postDocTrack.progression}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Universities */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Partnership Opportunities"
            title="Post-Doctoral Fellowship Universities"
            description="The Post-Doctoral Fellowship is available through select partner institutions. Contact us to discuss which partner is the best fit for your research area and goals."
          />
          <div className="mt-14 rounded-[8px] border border-slate-200 bg-white p-12 text-center">
            <CheckCircle2 className="mx-auto h-12 w-12 text-[#1E40FF]" />
            <h3 className="mt-4 text-lg font-semibold text-slate-950">
              Customized Partnership Guidance
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              Post-Doctoral Fellowships are available at our premier partner institutions. We match candidates with
              the institution and supervision structure best aligned with their research focus.
            </p>
            <div className="mt-8">
              <a
                href="/book-consultation"
                className="inline-flex items-center gap-2 rounded-full bg-[#1E40FF] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1937dd] transition-colors"
              >
                Book a Consultation
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <AccreditationShowcase
            programmeId="dba-general"
            title="Our Partner Institutions"
          />
        </div>
      </section>

      {/* Eligibility */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Entry Requirements"
            title="Post-Doctoral Fellowship Eligibility"
            description="The Post-Doctorate is exclusively for holders of existing doctoral qualifications."
          />
          <div className="mt-14">
            <div className="rounded-[8px] border border-slate-200 bg-white p-7">
              <h3 className="text-sm font-semibold text-slate-950">
                Essential Qualification
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                You must hold either a PhD or DBA from an accredited institution. Your existing doctorate
                serves as the foundation for the Post-Doctoral Fellowship, which builds upon your proven
                research capability and scholarly achievement.
              </p>
            </div>
            <div className="mt-6 grid gap-6 lg:grid-cols-3">
              {[
                {
                  title: "Research Focus",
                  desc: "Clear research interests and proposed contribution",
                },
                {
                  title: "Publication Record",
                  desc: "Evidence of scholarly contribution and academic engagement",
                },
                {
                  title: "Professional Standing",
                  desc: "Demonstrated expertise and reputation in your field",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-[8px] border border-slate-200 bg-white p-6"
                >
                  <h4 className="font-semibold text-slate-950">{item.title}</h4>
                  <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Your Journey"
            title="The Fellowship Application Process"
            description="From initial consultation to formal affiliation."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-4">
            {processSteps.map((step, idx) => (
              <div key={step.title} className="relative">
                <div className="rounded-[8px] border border-slate-200 bg-[#F8FAFC] p-6">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-sm font-bold text-white">
                    {idx + 1}
                  </div>
                  <h3 className="mt-2 text-sm font-semibold text-slate-950">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">{step.description}</p>
                </div>
                {idx < processSteps.length - 1 && (
                  <div className="absolute right-0 top-8 hidden h-1 w-full translate-x-full bg-gradient-to-r from-[#1E40FF] to-transparent lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConsultationNudge />

      {/* FAQ */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium max-w-4xl">
          <SectionHeading
            eyebrow="Questions"
            title="Frequently Asked Questions"
            description="Find answers to common questions about the Post-Doctoral Fellowship."
          />
          <div className="mt-12">
            <Accordion.Root type="single" collapsible className="space-y-4">
              {postDocFAQs.length > 0 ? (
                postDocFAQs.map((faq, idx) => (
                  <Accordion.Item
                    key={`faq-${idx}`}
                    value={`faq-${idx}`}
                    className="rounded-[8px] border border-slate-200 bg-white"
                  >
                    <Accordion.Trigger className="flex w-full items-center justify-between px-6 py-4 text-left hover:bg-slate-50">
                      <span className="font-semibold text-slate-950">
                        {faq.question}
                      </span>
                      <ChevronDown className="h-5 w-5 shrink-0 text-slate-600 transition-transform duration-200" />
                    </Accordion.Trigger>
                    <Accordion.Content className="border-t border-slate-200 px-6 py-4 text-sm leading-6 text-slate-600">
                      {faq.answer}
                    </Accordion.Content>
                  </Accordion.Item>
                ))
              ) : (
                <div className="rounded-[8px] border border-slate-200 bg-white p-6 text-center">
                  <p className="text-sm text-slate-600">
                    Have specific questions about the Post-Doctoral Fellowship? Contact us for personalized guidance.
                  </p>
                </div>
              )}
            </Accordion.Root>
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
