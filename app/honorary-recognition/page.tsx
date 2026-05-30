import type { Metadata } from "next";
import * as Accordion from "@radix-ui/react-accordion";
import { CheckCircle2, ChevronDown } from "lucide-react";
import { ConsultationNudge } from "@/components/sections/consultation-nudge";
import { FinalCTA } from "@/components/sections/final-cta";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { UniversityComparison } from "@/components/UniversityComparison";
import { AccreditationShowcase } from "@/components/AccreditationShowcase";
import { honoraryRecognitionFields, honoraryEligibilityIndicators, honoraryRecognitionItems, honoraryProfileExamples, honoraryFAQsExpanded } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Honorary Doctorate Recognition - AcdyOn",
  description: "Honorary Doctorate recognition from globally accredited universities. Recognising exceptional leadership, achievement, and contribution through international academic awards.",
};

export default function HonoraryRecognitionPage() {
  return (
    <main>
      {/* SECTION 1: Premium Hero */}
      <PageHero
        eyebrow="Professional Recognition"
        title="Honorary Doctorate Recognition"
        description="Recognising exceptional leadership, innovation, achievement, service and impact through internationally respected honorary awards. A formal recognition of lifetime accomplishments."
        secondaryLabel="Explore Doctoral Programs"
        secondaryHref="/doctoral-programs"
      />

      {/* SECTION 2: What Is An Honorary Doctorate */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Understanding Recognition"
            title="What Is An Honorary Doctorate?"
            description="A recognition award, not an academic degree program. Honoring lifetime achievement and professional contribution."
          />
          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            <div className="rounded-[8px] border border-slate-200 bg-[#F8FAFC] p-8">
              <h3 className="font-semibold text-slate-950 mb-4">Traditional Doctorate</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-xs font-semibold text-slate-400 mt-1">✓</span>
                  <span className="text-sm text-slate-600">Coursework & Study</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-xs font-semibold text-slate-400 mt-1">✓</span>
                  <span className="text-sm text-slate-600">Original Research</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-xs font-semibold text-slate-400 mt-1">✓</span>
                  <span className="text-sm text-slate-600">Dissertation</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-xs font-semibold text-slate-400 mt-1">✓</span>
                  <span className="text-sm text-slate-600">Academic Journey</span>
                </li>
              </ul>
            </div>
            <div className="rounded-[8px] border border-[#1E40FF] bg-gradient-to-br from-[#1E40FF]/5 to-transparent p-8">
              <h3 className="font-semibold text-slate-950 mb-4">Honorary Doctorate</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-xs font-semibold text-[#1E40FF] mt-1">★</span>
                  <span className="text-sm text-slate-600">Professional Achievement</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-xs font-semibold text-[#1E40FF] mt-1">★</span>
                  <span className="text-sm text-slate-600">Leadership Impact</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-xs font-semibold text-[#1E40FF] mt-1">★</span>
                  <span className="text-sm text-slate-600">Industry Contributions</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-xs font-semibold text-[#1E40FF] mt-1">★</span>
                  <span className="text-sm text-slate-600">Lifetime Accomplishments</span>
                </li>
              </ul>
            </div>
            <div className="rounded-[8px] border border-slate-200 bg-[#F8FAFC] p-8">
              <h3 className="font-semibold text-slate-950 mb-4">Recognition Award</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-xs font-semibold text-slate-400 mt-1">◆</span>
                  <span className="text-sm text-slate-600">Not an Academic Degree</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-xs font-semibold text-slate-400 mt-1">◆</span>
                  <span className="text-sm text-slate-600">Institutional Recognition</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-xs font-semibold text-slate-400 mt-1">◆</span>
                  <span className="text-sm text-slate-600">Professional Distinction</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-xs font-semibold text-slate-400 mt-1">◆</span>
                  <span className="text-sm text-slate-600">Based on Achievement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Who Is This For */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Recognition Categories"
            title="Who Is This Recognition For?"
            description="Accomplished professionals recognized across diverse fields and industries."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Business Leaders", desc: "Executive achievement and industry leadership" },
              { title: "Entrepreneurs", desc: "Business founding and enterprise building" },
              { title: "Academicians", desc: "Academic excellence and scholarly contribution" },
              { title: "Researchers", desc: "Research contribution and innovation" },
              { title: "Public Service Leaders", desc: "Government and public sector leadership" },
              { title: "Authors", desc: "Published works and intellectual contribution" },
              { title: "Innovators", desc: "Technology and innovation leadership" },
              { title: "Healthcare Professionals", desc: "Medical and healthcare advancement" },
              { title: "Philanthropists", desc: "Social impact and community service" },
              { title: "Social Leaders", desc: "Social impact and community development" },
              { title: "Industry Experts", desc: "Domain expertise and thought leadership" },
              { title: "Arts & Culture", desc: "Cultural and artistic contribution" },
            ].map((category, idx) => (
              <div key={idx} className="rounded-[8px] border border-slate-200 bg-white p-6">
                <h3 className="font-semibold text-slate-950 mb-2">{category.title}</h3>
                <p className="text-sm text-slate-600">{category.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Eligibility Assessment */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Self-Assessment"
            title="Are You Eligible?"
            description="Recognizing professional achievement through demonstrated impact and contribution."
          />
          <div className="mt-14 grid gap-4 max-w-3xl">
            {honoraryEligibilityIndicators.map((indicator, idx) => (
              <div key={idx} className="flex gap-3 p-4 rounded-[8px] border border-slate-200 bg-[#F8FAFC]">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#1E40FF] mt-0.5" />
                <span className="text-sm text-slate-600">{indicator}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-[8px] border border-amber-200 bg-amber-50 p-6 max-w-3xl">
            <p className="text-sm text-amber-900">
              <strong>Important:</strong> No single achievement guarantees recognition. Each application is reviewed individually by the institution's recognition committee. An AcdyOn advisor can provide an honest assessment of your eligibility.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: Fields of Recognition */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Recognition Areas"
            title="Fields of Recognition"
            description="Honorary doctorates awarded across diverse professional disciplines."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {honoraryRecognitionFields.map((field) => (
              <div key={field.id} className="rounded-[8px] border border-slate-200 bg-white p-8">
                <h3 className="font-semibold text-slate-950 mb-2">{field.name}</h3>
                <p className="text-sm text-slate-600 mb-4">{field.description}</p>
                <div className="text-xs text-slate-500">
                  <p className="font-semibold mb-2">Examples:</p>
                  <p>{field.examples.join(" • ")}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: Choose Your Institution */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Global Academic Partners"
            title="Choose Your Institution"
            description="Select from internationally recognized institutions aligned with your achievements and professional goals."
          />
          <div className="mt-14">
            <UniversityComparison
              programmeId="honorary-doctorate"
              title="Available Institutions"
            />
          </div>
        </div>
      </section>

      {/* SECTION 7: What Recipients Receive */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Recognition Package"
            title="What Recipients Receive"
            description="Official recognition and documentation from your institution."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {honoraryRecognitionItems.map((item, idx) => (
              <div key={idx} className="rounded-[8px] border border-slate-200 bg-white p-6 text-center">
                <div className="text-4xl mb-4">
                  {idx === 0 && "📜"}
                  {idx === 1 && "📄"}
                  {idx === 2 && "🏆"}
                  {idx === 3 && "📋"}
                  {idx === 4 && "🎓"}
                  {idx === 5 && "🎉"}
                  {idx === 6 && "💻"}
                  {idx === 7 && "✓"}
                </div>
                <h3 className="font-semibold text-slate-950 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: Global Recognition & Institutional Standing */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="International Credibility"
            title="Global Academic Recognition"
            description="Our partner institutions maintain the highest standards of academic recognition and international accreditation."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {[
              { title: "Institutional Accreditation", desc: "AACSB, EQUIS, ASIC recognized institutions" },
              { title: "International Affiliations", desc: "Global academic partnerships and networks" },
              { title: "Recognition Standards", desc: "Rigorous evaluation and selection processes" },
              { title: "Academic Heritage", desc: "Established institutions with global standing" },
              { title: "Quality Assurance", desc: "Commitment to excellence in recognition" },
              { title: "Global Presence", desc: "Recognized across 150+ countries" },
            ].map((item, idx) => (
              <div key={idx} className="rounded-[8px] border border-slate-200 bg-[#F8FAFC] p-6">
                <h3 className="font-semibold text-slate-950 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: Recognition Journey */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Process Overview"
            title="Recognition Journey"
            description="An 8-step process from initial assessment to honorary award conferment."
          />
          <div className="mt-14 space-y-6 max-w-4xl">
            {[
              { step: "1", title: "Initial Assessment", desc: "Discuss your achievements and recognition goals" },
              { step: "2", title: "Profile Evaluation", desc: "Review professional background and accomplishments" },
              { step: "3", title: "Documentation Review", desc: "Gather supporting materials and evidence" },
              { step: "4", title: "Institution Matching", desc: "Identify the best-fit institution for your profile" },
              { step: "5", title: "Committee Review", desc: "Institutional recognition committee evaluation" },
              { step: "6", title: "Award Confirmation", desc: "Formal award offer and acceptance" },
              { step: "7", title: "Recognition Ceremony", desc: "Formal ceremony or convocation participation" },
              { step: "8", title: "Honorary Conferment", desc: "Official award of honorary doctorate" },
            ].map((stage, idx) => (
              <div key={idx} className="flex gap-6 p-6 rounded-[8px] border border-slate-200 bg-white">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1E40FF] text-sm font-bold text-white shrink-0">
                  {stage.step}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-950 mb-1">{stage.title}</h3>
                  <p className="text-sm text-slate-600">{stage.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: Distinguished Profile Examples */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Achievement Recognition"
            title="Distinguished Profile Examples"
            description="Recognition of exceptional achievements across professional disciplines."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {honoraryProfileExamples.map((profile) => (
              <div key={profile.id} className="rounded-[8px] border border-slate-200 bg-[#F8FAFC] p-8">
                <h3 className="font-semibold text-slate-950 mb-4">{profile.transition}</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold text-slate-600 mb-1">Achievements</p>
                    <p className="text-slate-600">{profile.achievements}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-600 mb-1">Recognition</p>
                    <p className="text-slate-600">{profile.recognition}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11: FAQ */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Questions Answered"
            title="Honorary Doctorate FAQ"
            description="Comprehensive answers about honorary recognition, process, and benefits."
          />
          <div className="mt-14 max-w-3xl">
            <Accordion.Root type="single" collapsible className="space-y-3">
              {honoraryFAQsExpanded.map((faq, idx) => (
                <Accordion.Item
                  key={idx}
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
              ))}
            </Accordion.Root>
          </div>
        </div>
      </section>

      {/* SECTION 12: Downloadable Resources */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Resources"
            title="Downloadable Resources"
            description="Guides to help you understand honorary recognition and prepare your profile."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {[
              { emoji: "📘", title: "Recognition Guide", desc: "Complete guide to honorary doctorate recognition" },
              { emoji: "✓", title: "Eligibility Checklist", desc: "Self-assessment and eligibility indicators" },
              { emoji: "🏢", title: "Institution Overview", desc: "Detailed information about each institution" },
              { emoji: "📋", title: "Application Pack", desc: "Information and application requirements" },
              { emoji: "🗺️", title: "Journey Guide", desc: "Step-by-step recognition process guide" },
              { emoji: "⭐", title: "Success Stories", desc: "Examples of recognized professionals" },
            ].map((resource, idx) => (
              <div key={idx} className="rounded-[8px] border border-slate-200 bg-[#F8FAFC] p-8 text-center">
                <div className="text-5xl mb-4">{resource.emoji}</div>
                <h3 className="font-semibold text-slate-950 mb-2">{resource.title}</h3>
                <p className="text-sm text-slate-600">{resource.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConsultationNudge />

      {/* FINAL CTA */}
      <section className="bg-slate-950 py-24">
        <div className="container-premium text-center">
          <h2 className="text-3xl sm:text-4xl font-display text-white">
            Ready to Explore Honorary Recognition?
          </h2>
          <p className="mt-4 text-base text-slate-300 max-w-2xl mx-auto">
            Speak with an AcdyOn advisor to evaluate your achievements and identify the institution best aligned with your professional journey and contributions.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-[#1E40FF] px-8 py-4 text-base font-semibold text-white hover:bg-[#1937dd] transition-colors shadow-[0_18px_40px_rgba(30,64,255,0.22)]"
            >
              Check Eligibility
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Book Consultation
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
