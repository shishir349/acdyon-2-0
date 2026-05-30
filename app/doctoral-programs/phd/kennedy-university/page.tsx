import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { ConsultationNudge } from "@/components/sections/consultation-nudge";
import { FinalCTA } from "@/components/sections/final-cta";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { PricingDisplay } from "@/components/PricingDisplay";
import { AccreditationShowcase } from "@/components/AccreditationShowcase";
import { getUniversityById } from "@/lib/data/universities";

const university = getUniversityById("kennedy")!;
const phdDetails = university.phdDetails!;

export const metadata: Metadata = {
  title: `${university.name} - Doctor of Philosophy (PhD)`,
  description: `Explore Kennedy University's PhD programme. American-accredited research doctorate. Review curriculum, supervision, and apply.`,
};

export default function KennedyPhDPage() {
  return (
    <main>
      <PageHero
        eyebrow={`PhD · ${university.name}`}
        title={`Doctor of Philosophy`}
        description={`Research doctorate from ${university.name}. American-accredited, research-led, designed for scholarly contribution.`}
        secondaryLabel="View All PhD Universities"
        secondaryHref="/doctoral-programs/phd"
      />

      {/* Programme Overview */}
      <section className="bg-white py-24">
        <div className="container-premium grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-5 text-sm leading-7 text-slate-600">
            <p>{phdDetails.overview}</p>
            <div className="pt-6 border-t border-slate-200">
              <h3 className="font-semibold text-slate-950 mb-3">About {university.name}</h3>
              <p>{university.description}</p>
              <div className="mt-4 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <p className="text-slate-400">Location</p>
                  <p className="font-semibold text-slate-950">{university.city}, {university.country}</p>
                </div>
                <div>
                  <p className="text-slate-400">Established</p>
                  <p className="font-semibold text-slate-950">{university.established}</p>
                </div>
                <div>
                  <p className="text-slate-400">Delivery</p>
                  <p className="font-semibold text-slate-950">{university.deliveryMode.join(", ")}</p>
                </div>
                <div>
                  <p className="text-slate-400">Ranking</p>
                  <p className="font-semibold text-slate-950">{university.ranking}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-[8px] border border-slate-200 bg-[#F8FAFC] p-8">
            <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-slate-400">
              PhD at {university.name}
            </h3>
            <div className="mt-6 grid gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                  Duration
                </p>
                <p className="mt-2 text-lg font-semibold text-slate-950">
                  {university.duration?.phd ? `${university.duration.phd.min}-${university.duration.phd.max} months` : "36-72 months"}
                </p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                  Delivery Format
                </p>
                <p className="mt-2 text-lg font-semibold text-slate-950">
                  {university.deliveryMode.join(", ")}
                </p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                  Accreditation
                </p>
                <div className="mt-2 flex gap-2 flex-wrap">
                  {university.accreditations.map((acc) => (
                    <span key={acc} className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-950">
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
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Entry Requirements"
            title="PhD Eligibility at Kennedy University"
          />
          <div className="mt-14 grid gap-4 max-w-3xl">
            {phdDetails.eligibility.map((req, idx) => (
              <div key={idx} className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#1E40FF] mt-0.5" />
                <p className="text-sm text-slate-600">{req}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Curriculum"
            title="Research Programme Highlights"
            description="Key focus areas and research modules in Kennedy's PhD programme."
          />
          <div className="mt-14 grid gap-4 max-w-3xl">
            {phdDetails.curriculumHighlights.map((highlight, idx) => (
              <div
                key={idx}
                className="rounded-[8px] border border-slate-200 bg-[#F8FAFC] p-5 flex gap-3"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1E40FF] text-xs font-bold text-white shrink-0">
                  {idx + 1}
                </div>
                <div>
                  <p className="font-semibold text-slate-950">{highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Scholarships */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <PricingDisplay
            programmeId="phd-general"
            universityId="kennedy"
            title="PhD Tuition & Payment Plans"
          />
        </div>
      </section>

      {/* Accreditations */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <AccreditationShowcase
            programmeId="phd-general"
            title="Institutional Recognition"
          />
        </div>
      </section>

      {/* Sample Degree & Brochure */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Programme Materials"
            title="Sample Degree & Resources"
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[8px] border border-slate-200 bg-white p-8 text-center">
              <div className="text-6xl mb-4">📜</div>
              <h3 className="font-semibold text-slate-950 mb-2">Sample Diploma</h3>
              <p className="text-sm text-slate-600 mb-6">
                View what your PhD diploma will look like upon graduation.
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
            <div className="rounded-[8px] border border-slate-200 bg-white p-8 text-center">
              <div className="text-6xl mb-4">📄</div>
              <h3 className="font-semibold text-slate-950 mb-2">Full Brochure</h3>
              <p className="text-sm text-slate-600 mb-6">
                Download detailed programme brochure with supervision structure and FAQs.
              </p>
              <a
                href={phdDetails.brochureUrl || "#"}
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

      <ConsultationNudge />

      {/* Apply Section */}
      <section className="bg-slate-950 py-24">
        <div className="container-premium text-center">
          <h2 className="text-3xl sm:text-4xl font-display text-white">
            Ready to pursue your PhD?
          </h2>
          <p className="mt-4 text-base text-slate-300 max-w-2xl mx-auto">
            Book a consultation with our research advisors to discuss your research interests, supervision fit, and next steps.
          </p>
          <div className="mt-8">
            <a
              href="/book-consultation"
              className="inline-flex items-center gap-2 rounded-full bg-[#1E40FF] px-8 py-4 text-base font-semibold text-white hover:bg-[#1937dd] transition-colors shadow-[0_18px_40px_rgba(30,64,255,0.22)]"
            >
              Book a Consultation
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
