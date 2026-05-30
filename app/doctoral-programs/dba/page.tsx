import type { Metadata } from "next";
import * as Accordion from "@radix-ui/react-accordion";
import { CheckCircle2, Award, ChevronDown } from "lucide-react";
import { ConsultationNudge } from "@/components/sections/consultation-nudge";
import { FinalCTA } from "@/components/sections/final-cta";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { UniversityComparison } from "@/components/UniversityComparison";
import { AccreditationShowcase } from "@/components/AccreditationShowcase";
import { dbaSpecializations, dbaCareerOutcomes, dbaSuccessProfiles, dbaFAQsExpanded } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Doctor of Business Administration (DBA) - AcdyOn",
  description: "Pursue a Doctor of Business Administration from globally recognized universities. Flexible, research-led doctoral programmes for experienced executives.",
};

export default function DBAPage() {

  return (
    <main>
      {/* SECTION 1: Premium DBA Hero */}
      <PageHero
        eyebrow="Doctoral Programs"
        title="Doctor of Business Administration"
        description="The highest professional doctorate in business. Original research contribution, global recognition, and executive advancement for experienced leaders."
        secondaryLabel="View All Pathways"
        secondaryHref="/doctoral-programs"
      />

      {/* SECTION 2: DBA vs MBA */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Understand the Difference"
            title="DBA vs MBA: Choose Your Path"
            description="Both are prestigious business qualifications. Here's how they compare."
          />
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <div className="rounded-[8px] border border-slate-200 bg-[#F8FAFC] p-8">
              <h3 className="text-xl font-semibold text-slate-950 mb-4">MBA</h3>
              <p className="text-sm text-slate-600 mb-6">Master of Business Administration</p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#1E40FF] mt-0.5" />
                  <span className="text-sm text-slate-600">General business knowledge</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#1E40FF] mt-0.5" />
                  <span className="text-sm text-slate-600">Leadership and management skills</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#1E40FF] mt-0.5" />
                  <span className="text-sm text-slate-600">Professional development focus</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#1E40FF] mt-0.5" />
                  <span className="text-sm text-slate-600">Typically 1-2 years</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#1E40FF] mt-0.5" />
                  <span className="text-sm text-slate-600">Master's degree credential</span>
                </li>
              </ul>
            </div>
            <div className="rounded-[8px] border border-[#1E40FF] bg-gradient-to-br from-[#1E40FF]/5 to-transparent p-8">
              <h3 className="text-xl font-semibold text-slate-950 mb-4">DBA</h3>
              <p className="text-sm text-slate-600 mb-6">Doctor of Business Administration</p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <Award className="h-5 w-5 shrink-0 text-[#1E40FF] mt-0.5" />
                  <span className="text-sm text-slate-600">Original research contribution</span>
                </li>
                <li className="flex gap-3">
                  <Award className="h-5 w-5 shrink-0 text-[#1E40FF] mt-0.5" />
                  <span className="text-sm text-slate-600">Thought leadership and expertise</span>
                </li>
                <li className="flex gap-3">
                  <Award className="h-5 w-5 shrink-0 text-[#1E40FF] mt-0.5" />
                  <span className="text-sm text-slate-600">Academic recognition globally</span>
                </li>
                <li className="flex gap-3">
                  <Award className="h-5 w-5 shrink-0 text-[#1E40FF] mt-0.5" />
                  <span className="text-sm text-slate-600">Typically 2-4 years</span>
                </li>
                <li className="flex gap-3">
                  <Award className="h-5 w-5 shrink-0 text-[#1E40FF] mt-0.5" />
                  <span className="text-sm text-slate-600">Doctoral degree credential ("Dr.")</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Who Pursues a DBA */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Professional Profiles"
            title="Who Pursues a DBA?"
            description="DBA students come from diverse leadership backgrounds seeking research credibility and thought leadership."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "CEOs & Board Members", description: "Strengthen strategic credibility with doctoral qualification." },
              { title: "Business Owners", description: "Document expertise and build competitive differentiation." },
              { title: "Entrepreneurs", description: "Combine business experience with research validation." },
              { title: "Senior Managers", description: "Advance to C-suite with advanced academic credential." },
              { title: "Management Consultants", description: "Establish authority for high-value advisory work." },
              { title: "Government Leaders", description: "Bring research credibility to policy and strategy." },
              { title: "Academics & Educators", description: "Bridge research and practice in business education." },
              { title: "Senior Directors", description: "Transition to board and governance roles." },
            ].map((profile, idx) => (
              <div key={idx} className="rounded-[8px] border border-slate-200 bg-white p-6">
                <h3 className="font-semibold text-slate-950 mb-2">{profile.title}</h3>
                <p className="text-sm text-slate-600">{profile.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Career & Professional Outcomes */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Career Advancement"
            title="Career & Professional Outcomes"
            description="A DBA opens doors to prestigious opportunities and elevated professional standing."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {dbaCareerOutcomes.map((outcome, idx) => (
              <div key={idx} className="rounded-[8px] border border-slate-200 bg-[#F8FAFC] p-6">
                <h3 className="font-semibold text-slate-950 mb-3">{outcome.title}</h3>
                <p className="text-sm text-slate-600">{outcome.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: DBA Research Specializations */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Research Focus"
            title="DBA Research Specializations"
            description="Choose a research area aligned with your professional interests and career goals."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {dbaSpecializations.map((spec) => (
              <div key={spec.id} className="rounded-[8px] border border-slate-200 bg-white p-8">
                <h3 className="font-semibold text-slate-950 mb-4">{spec.name}</h3>
                <p className="text-sm text-slate-600 mb-6">{spec.description}</p>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400 mb-2">Research Themes</p>
                    <ul className="flex flex-wrap gap-2">
                      {spec.researchThemes.map((theme, idx) => (
                        <li key={idx} className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded">
                          {theme}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400 mb-2">Industries</p>
                    <ul className="flex flex-wrap gap-2">
                      {spec.industries.map((industry, idx) => (
                        <li key={idx} className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded">
                          {industry}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: Choose Your DBA University */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Global Partnerships"
            title="Choose Your DBA University"
            description="Study with internationally accredited universities recognized across 150+ countries. No pricing shown here — explore individual universities for tuition and payment plans."
          />
          <div className="mt-14">
            <UniversityComparison
              programmeId="dba-general"
              linkToDetail="/doctoral-programs/dba"
            />
          </div>
        </div>
      </section>

      {/* SECTION 7: Global Recognition & Accreditation */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <AccreditationShowcase programmeId="dba-general" />
        </div>
      </section>

      {/* SECTION 8: Sample Credentials Gallery */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Programme Materials"
            title="Sample Credentials & Gallery"
            description="See examples of what you'll receive upon graduation."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { emoji: "📜", title: "Diploma", description: "Your official DBA degree certificate" },
              { emoji: "📋", title: "Transcript", description: "Complete academic record and grades" },
              { emoji: "🎓", title: "Enrollment Letter", description: "Proof of enrollment for employers" },
              { emoji: "🪪", title: "Student ID", description: "Global academic network access" },
              { emoji: "📄", title: "Documentation", description: "Official verification documents" },
              { emoji: "🎉", title: "Convocation", description: "Graduation ceremony and celebration" },
            ].map((item, idx) => (
              <div key={idx} className="rounded-[8px] border border-slate-200 bg-[#F8FAFC] p-8 text-center">
                <div className="text-6xl mb-4">{item.emoji}</div>
                <h3 className="font-semibold text-slate-950 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: The DBA Journey Timeline */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Your Path"
            title="The DBA Journey"
            description="A timeline of your doctoral experience from admission to graduation."
          />
          <div className="mt-14 space-y-8 max-w-3xl">
            {[
              { phase: "Year 1", title: "Foundation & Research Design", description: "Coursework, research methodology, proposal development, supervisor assignment" },
              { phase: "Year 2", title: "Research Execution", description: "Primary research, data collection, literature review, thesis writing begins" },
              { phase: "Year 3", title: "Analysis & Writing", description: "Data analysis, thesis drafting, peer feedback, publication planning" },
              { phase: "Year 4+", title: "Completion & Graduation", description: "Final thesis edits, viva examination, publication, convocation" },
            ].map((stage, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1E40FF] text-sm font-bold text-white">
                    {idx + 1}
                  </div>
                  {idx < 3 && <div className="w-0.5 h-16 bg-slate-200 mt-2" />}
                </div>
                <div className="pt-2 pb-6">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400 mb-1">{stage.phase}</p>
                  <h3 className="font-semibold text-slate-950 mb-2">{stage.title}</h3>
                  <p className="text-sm text-slate-600">{stage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: Doctoral Success Profiles */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Real Outcomes"
            title="Doctoral Success Profiles"
            description="Examples of how DBA graduates have advanced their careers and influence."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {dbaSuccessProfiles.map((profile) => (
              <div key={profile.id} className="rounded-[8px] border border-slate-200 bg-[#F8FAFC] p-8">
                <h3 className="font-semibold text-slate-950 mb-4">{profile.title}</h3>
                <p className="text-sm text-slate-600 mb-6">{profile.description}</p>
                <ul className="space-y-2">
                  {profile.outcomes.map((outcome, idx) => (
                    <li key={idx} className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#1E40FF] mt-0.5" />
                      <span className="text-sm text-slate-600">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11: Your Path to DBA */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Getting Started"
            title="Your Path to DBA"
            description="How to apply and what we're looking for."
          />
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="font-semibold text-slate-950 mb-6">Application Steps</h3>
              <div className="space-y-4">
                {[
                  "Initial consultation with an academic advisor",
                  "Eligibility review and programme matching",
                  "Formal application submission",
                  "University interview and assessment",
                  "Offer decision and acceptance",
                  "Supervisor assignment and onboarding",
                ].map((step, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1E40FF] text-xs font-bold text-white shrink-0">
                      {idx + 1}
                    </div>
                    <div>
                      <p className="text-sm text-slate-600">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-slate-950 mb-6">Eligibility Requirements</h3>
              <div className="space-y-3">
                {[
                  "Master's degree or equivalent professional qualification",
                  "7-10+ years of professional business experience",
                  "Demonstrated research interest and readiness",
                  "English language proficiency for academic writing",
                  "Leadership role in your current organization",
                  "Commitment to original research contribution",
                ].map((req, idx) => (
                  <div key={idx} className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#1E40FF] mt-0.5" />
                    <span className="text-sm text-slate-600">{req}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12: Expanded FAQ */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Questions Answered"
            title="DBA Frequently Asked Questions"
            description="Everything you need to know about pursuing a Doctor of Business Administration."
          />
          <div className="mt-14 max-w-3xl">
            <Accordion.Root type="single" collapsible className="space-y-3">
              {dbaFAQsExpanded.map((faq, idx) => (
                <Accordion.Item
                  key={idx}
                  value={`faq-${idx}`}
                  className="rounded-[8px] border border-slate-200 bg-[#F8FAFC]"
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

      <ConsultationNudge />

      {/* SECTION 13: Final CTA */}
      <section className="bg-slate-950 py-24">
        <div className="container-premium text-center">
          <h2 className="text-3xl sm:text-4xl font-display text-white">
            Ready to Pursue Your DBA?
          </h2>
          <p className="mt-4 text-base text-slate-300 max-w-2xl mx-auto">
            Take the next step toward doctoral-level distinction and thought leadership.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <a
              href="/book-consultation"
              className="inline-flex items-center gap-2 rounded-full bg-[#1E40FF] px-8 py-4 text-base font-semibold text-white hover:bg-[#1937dd] transition-colors shadow-[0_18px_40px_rgba(30,64,255,0.22)]"
            >
              Book a Consultation
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Download Programme Guide
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Eligibility Assessment
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
