import type { Metadata } from "next";
import * as Accordion from "@radix-ui/react-accordion";
import { CheckCircle2, ChevronDown } from "lucide-react";
import { ConsultationNudge } from "@/components/sections/consultation-nudge";
import { FinalCTA } from "@/components/sections/final-cta";
import { PageHero } from "@/components/sections/page-hero";
import { SuccessStoryCard } from "@/components/cards/success-story-card";
import { CTAButton } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { UniversityComparison } from "@/components/UniversityComparison";
import { PricingDisplay } from "@/components/PricingDisplay";
import { AccreditationShowcase } from "@/components/AccreditationShowcase";
import { honoraryEligibility, honoraryFAQs, honoraryProcess, honoraryTracks, successStories } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Honorary Recognition",
  description: "Honorary Doctorate and Honorary Professorship pathways for professionals whose contribution to their field merits formal academic distinction. A consultation-led, prestige-focused recognition process.",
};

const honoraryStories = successStories.filter(
  (s) => s.program === "Honorary Doctorate" || s.program === "Honorary Professorship",
).slice(0, 2);

export default function HonoraryRecognitionPage() {
  return (
    <main>
      <PageHero
        eyebrow="Honorary Recognition"
        title="Formal academic distinction for distinguished professional contribution"
        description="Honorary Doctorate and Honorary Professorship pathways for professionals whose leadership, scholarship, or impact merits institutional academic recognition."
        secondaryLabel="View Doctoral Pathways"
        secondaryHref="/doctoral-programs"
      />

      {/* Recognition Philosophy */}
      <section className="bg-slate-950 py-24">
        <div className="container-premium">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#D4AF37]">Recognition Philosophy</p>
              <h2 className="mt-5 font-display text-4xl leading-tight text-white">
                Honorary recognition is not a credential substitute. It is institutional acknowledgment.
              </h2>
              <p className="mt-5 text-sm leading-7 text-slate-300">
                An honorary distinction is conferred by an academic institution to formally acknowledge a career of recognised impact, contribution, or intellectual leadership. It does not replace earned qualifications — it acknowledges a professional record that merits institutional distinction in its own right.
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                AcdyOn approaches honorary recognition with full transparency. Every candidate receives an honest assessment of what the distinction will mean in their specific professional and geographic context — before any nomination is prepared.
              </p>
              <CTAButton href="/book-consultation" variant="dark" className="mt-8">
                Book Eligibility Consultation
              </CTAButton>
            </div>
            <div className="grid gap-4">
              {[
                { title: "Not an Academic Shortcut", desc: "Honorary distinctions are not awarded for completing coursework. They are conferred for a verifiable record of professional impact, contribution, and standing." },
                { title: "Institutional Credibility", desc: "Every nomination is submitted to a partner institution that has reviewed the candidate's profile against its own criteria. The conferral decision rests with the institution." },
                { title: "Full Pre-Conferral Transparency", desc: "Candidates are advised on the nature of the distinction, how it should be used, and how it will be perceived before any nomination is submitted." },
                { title: "Geographic Context Awareness", desc: "The relevance and perception of honorary distinctions varies by country and industry. AcdyOn ensures candidates understand the specific context of their recognition." },
              ].map((item) => (
                <div key={item.title} className="rounded-[8px] border border-white/10 bg-white/[0.04] p-5">
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-xs leading-6 text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Two Pathways */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Recognition Pathways"
            title="Two formal distinctions for two types of professional contribution"
            description="AcdyOn guides candidates toward the pathway that most accurately reflects the nature of their contribution — not simply the title they prefer."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {honoraryTracks.map((track) => (
              <article
                key={track.award}
                className="rounded-[8px] border border-slate-200 bg-[#F8FAFC] p-10"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#1E40FF]">{track.eyebrow}</p>
                    <h3 className="mt-3 font-display text-3xl text-slate-950">{track.award}</h3>
                  </div>
                  <span className="shrink-0 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-4 py-2 font-display text-lg font-bold text-[#D4AF37]">
                    {track.prefix}
                  </span>
                </div>
                <p className="mt-2 text-sm font-medium text-slate-500 italic">{track.tagline}</p>
                <p className="mt-5 text-sm leading-7 text-slate-600">{track.description}</p>
                <div className="mt-6">
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Suited For</p>
                  <div className="grid gap-2">
                    {track.whoIsFor.map((item) => (
                      <div key={item} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#1E40FF]" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-6 rounded-[8px] border border-slate-200 bg-white p-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Significance</p>
                  <p className="mt-2 text-xs leading-5 text-slate-600">{track.significance}</p>
                </div>
                <p className="mt-4 text-xs leading-5 text-slate-400 italic">{track.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Eligibility"
            title="What AcdyOn reviews before preparing a nomination"
            description="Honorary recognition requires a verifiable professional record, not a formal academic one. The eligibility assessment is thorough and honest."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {honoraryEligibility.map((item) => (
              <article
                key={item.title}
                className="rounded-[8px] border border-slate-200 bg-white p-7"
              >
                <h3 className="font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* The Evaluation Process */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Evaluation Process"
            title="A four-stage nomination and conferral process"
            description="The honorary recognition process is structured, rigorous, and transparent. No nomination is submitted until the candidate and AcdyOn are confident it is well-founded."
          />
          <div className="mt-14 grid gap-5 lg:grid-cols-4">
            {honoraryProcess.map((step, index) => (
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

      {/* Institution Comparison */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <UniversityComparison
            programmeId="honorary-doctorate"
            title="Compare Institutions for Honorary Recognition"
            subtitle="Each partner institution brings unique prestige and global recognition. Compare accreditations, geographic standing, and institutional focus."
          />
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <PricingDisplay
            programmeId="honorary-doctorate"
            title="Honorary Recognition Fees & Payment Options"
          />
        </div>
      </section>

      {/* Trust & Accreditations */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <AccreditationShowcase
            programmeId="honorary-doctorate"
            title="Institutional Accreditations & Recognition"
          />
        </div>
      </section>

      {/* Significance & Impact */}
      <section className="bg-slate-950 py-24">
        <div className="container-premium grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#D4AF37]">Professional Significance</p>
            <h2 className="mt-5 font-display text-4xl leading-tight text-white">
              What formal recognition changes about a professional career
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-300">
              Honorary recognition from a credible academic institution does not change what you have achieved — but it changes how that achievement is formally positioned and perceived in academic, professional, and public contexts.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              For many recipients, the distinction represents a long-overdue acknowledgment of a career spent building, leading, or contributing at a level that the professional world recognised long before any institution did.
            </p>
          </div>
          <div className="grid gap-4">
            {[
              { title: "Academic Standing", desc: "Recognition from a partner institution grants formal academic standing — enabling participation in academic events, co-authorship, and institutional collaboration." },
              { title: "Professional Authority", desc: "The 'Dr.' or 'Prof.' prefix signals institutional acknowledgment in professional settings, conferences, publications, and client-facing contexts." },
              { title: "Legacy Documentation", desc: "A formal academic distinction provides a permanent institutional record of professional contribution that transcends the career itself." },
              { title: "Global Professional Currency", desc: "Honorary distinctions from internationally recognised institutions carry professional weight across geographies and industries." },
            ].map((item) => (
              <div key={item.title} className="rounded-[8px] border border-white/10 bg-white/[0.04] p-5">
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-xs leading-6 text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Candidate Voices */}
      {honoraryStories.length > 0 && (
        <section className="bg-white py-24">
          <div className="container-premium">
            <SectionHeading
              eyebrow="Candidate Voices"
              title="How honorary recognition changed their professional standing"
              description="From social impact entrepreneurs to leadership educators — structured stories of professionals who pursued honorary distinction through AcdyOn."
            />
            <div className="mt-14 grid gap-5 lg:grid-cols-2">
              {honoraryStories.map((story) => (
                <SuccessStoryCard key={story.name} {...story} />
              ))}
            </div>
          </div>
        </section>
      )}

      <ConsultationNudge />

      {/* FAQ */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium max-w-4xl">
          <SectionHeading eyebrow="FAQ" title="Questions about honorary recognition at AcdyOn" />
          <Accordion.Root type="single" collapsible className="mt-12 grid gap-3">
            {honoraryFAQs.map((faq) => (
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
