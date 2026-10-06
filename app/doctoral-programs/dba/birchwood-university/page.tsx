import type { Metadata } from "next";
import { CheckCircle2, ScrollText, FileText } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { PricingDisplay } from "@/components/PricingDisplay";
import { AccreditationShowcase } from "@/components/AccreditationShowcase";
import { ReadMoreText } from "@/components/ui/read-more-text";
import { getUniversityById } from "@/lib/data/universities";

const university = getUniversityById("birchwood")!;
const dbaDetails = university.dbaDetails!;

export const metadata: Metadata = {
  title: `${university.name} - Doctor of Business Administration (DBA)`,
  description: `${university.description} Flexible North American DBA. Explore curriculum, tuition, and apply today.`,
};

export default function BirchwoodDBAPage() {
  return (
    <main>
      <PageHero
        eyebrow={`DBA · ${university.name}`}
        title={`Doctor of Business Administration`}
        description={`Executive doctorate from ${university.name}. Flexible, part-time delivery for North American executives.`}
        secondaryLabel="View All DBA Universities"
        secondaryHref="/doctoral-programs/dba"
      />

      {/* Programme Overview */}
      <section className="bg-white py-24 dark:bg-slate-950">
        <div className="container-premium grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-5 text-sm leading-7 text-slate-600 dark:text-slate-300">
            <ReadMoreText text={dbaDetails.overview} />
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
              <h3 className="font-semibold text-slate-950 mb-3 dark:text-white">About {university.name}</h3>
              <ReadMoreText text={university.description} />
              <div className="mt-4 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <p className="text-slate-400">Location</p>
                  <p className="font-semibold text-slate-950 dark:text-white">{university.city}, {university.country}</p>
                </div>
                <div>
                  <p className="text-slate-400">Established</p>
                  <p className="font-semibold text-slate-950 dark:text-white">{university.established}</p>
                </div>
                <div>
                  <p className="text-slate-400">Delivery</p>
                  <p className="font-semibold text-slate-950 dark:text-white">{university.deliveryMode.join(", ")}</p>
                </div>
                <div>
                  <p className="text-slate-400">Ranking</p>
                  <p className="font-semibold text-slate-950 dark:text-white">{university.ranking}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-[8px] border border-slate-200 bg-[#F8FAFC] p-8 dark:bg-slate-900/60 dark:border-slate-800">
            <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-slate-400">
              DBA at {university.name}
            </h3>
            <div className="mt-6 grid gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                  Duration
                </p>
                <p className="mt-2 text-lg font-semibold text-slate-950 dark:text-white">
                  {university.duration?.dba ? `${university.duration.dba.min}-${university.duration.dba.max} months` : "24-48 months"}
                </p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                  Delivery Format
                </p>
                <p className="mt-2 text-lg font-semibold text-slate-950 dark:text-white">
                  {university.deliveryMode.join(", ")}
                </p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                  Accreditation
                </p>
                <div className="mt-2 flex gap-2 flex-wrap">
                  {university.accreditations.map((acc) => (
                    <span key={acc} className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-950 dark:bg-slate-800/60 dark:text-white">
                      {acc}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="bg-[#F8FAFC] py-24 dark:bg-slate-900/60">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Entry requirements"
            title="DBA Eligibility at Birchwood"
          />
          <div className="mt-14 grid gap-4 max-w-3xl">
            {dbaDetails.eligibility.map((req, idx) => (
              <div key={idx} className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#1E40FF] mt-0.5" />
                <p className="text-sm text-slate-600 dark:text-slate-300">{req}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="bg-white py-24 dark:bg-slate-950">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Curriculum"
            title="Programme Highlights"
            description="Key focus areas and modules in Birchwood's DBA programme."
          />
          <div className="mt-14 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2">
            {dbaDetails.curriculumHighlights.map((highlight, idx) => (
              <div
                key={idx}
                className="rounded-[8px] border border-slate-200 bg-[#F8FAFC] p-4 flex gap-3 dark:bg-slate-900/60 dark:border-slate-800"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1E40FF] text-xs font-bold text-white shrink-0">
                  {idx + 1}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-950 dark:text-white">{highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Scholarships */}
      <section className="bg-[#F8FAFC] py-24 dark:bg-slate-900/60">
        <div className="container-premium">
          <PricingDisplay
            programmeId="dba-general"
            universityId="birchwood"
            title="DBA Tuition & Payment Plans"
          />
        </div>
      </section>

      {/* Accreditations */}
      <section className="bg-white py-24 dark:bg-slate-950">
        <div className="container-premium">
          <AccreditationShowcase
            programmeId="dba-general"
            title="Institutional Recognition"
          />
        </div>
      </section>

      {/* Sample Degree & Brochure */}
      <section className="bg-[#F8FAFC] py-24 dark:bg-slate-900/60">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Programme materials"
            title="Sample Degree & Resources"
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[8px] border border-slate-200 bg-white p-8 text-center dark:bg-slate-950 dark:border-slate-800">
              <ScrollText className="h-14 w-14 mb-4 mx-auto text-[#1E40FF]" />
              <h3 className="font-semibold text-slate-950 mb-2 dark:text-white">Sample Certificate</h3>
              <p className="text-sm text-slate-600 mb-6 dark:text-slate-300">
                View what your DBA diploma will look like upon graduation.
              </p>
              <a
                href={university.sampleCertificate || "#"}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#1E40FF] hover:text-[#1937dd]"
              >
                View Sample
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className="rounded-[8px] border border-slate-200 bg-white p-8 text-center dark:bg-slate-950 dark:border-slate-800">
              <FileText className="h-14 w-14 mb-4 mx-auto text-[#1E40FF]" />
              <h3 className="font-semibold text-slate-950 mb-2 dark:text-white">Full Brochure</h3>
              <p className="text-sm text-slate-600 mb-6 dark:text-slate-300">
                Download detailed programme brochure with curriculum and FAQs.
              </p>
              <a
                href={dbaDetails.brochureUrl || "#"}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#1E40FF] hover:text-[#1937dd]"
              >
                Download PDF
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-[#0f172a] py-20">
        <div className="container-premium text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#22d3ee]">Expert guidance</p>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Speak with an Academic Adviser</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Discuss your eligibility, career goals, and next steps for the Birchwood DBA — no obligation.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a href="/book-consultation" className="inline-flex items-center justify-center rounded-full bg-[#1e40ff] px-8 py-4 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(30,64,255,0.25)] transition-all hover:bg-[#1937dd]">Book a Free Consultation</a>
            <a href="/doctoral-programs/dba" className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white transition-all hover:border-white/40 hover:bg-white/5">Explore All DBA Programmes</a>
          </div>
        </div>
      </section>
    </main>
  );
}
