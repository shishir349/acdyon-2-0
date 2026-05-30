import type { Metadata } from "next";
import * as Accordion from "@radix-ui/react-accordion";
import { CheckCircle2, ChevronDown, BookOpen } from "lucide-react";
import { ConsultationNudge } from "@/components/sections/consultation-nudge";
import { FinalCTA } from "@/components/sections/final-cta";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { UniversityComparison } from "@/components/UniversityComparison";
import { AccreditationShowcase } from "@/components/AccreditationShowcase";
import { phdResearchDisciplines, phdCareerOutcomes, phdSuccessProfiles, phdFAQsExpanded } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Doctor of Philosophy (PhD) - AcdyOn",
  description: "Pursue a Doctor of Philosophy from globally recognized universities. Original research contribution, academic leadership, and international scholarly recognition.",
};

export default function PhDPage() {
  return (
    <main>
      {/* SECTION 1: Premium PhD Hero */}
      <PageHero
        eyebrow="Research Doctorate"
        title="Doctor of Philosophy"
        description="Advance knowledge, contribute original research, and earn the highest academic qualification recognized worldwide. Designed for researchers, educators, and future academics."
        secondaryLabel="View All Pathways"
        secondaryHref="/doctoral-programs"
      />

      {/* SECTION 2: Why Pursue a PhD */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Academic Excellence"
            title="The Qualification That Creates Knowledge"
            description="Unlike taught qualifications, a PhD requires you to develop new knowledge, theories, or frameworks that contribute to your field."
          />
          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            <div className="rounded-[8px] border border-slate-200 bg-[#F8FAFC] p-8">
              <h3 className="font-semibold text-slate-950 mb-3">Master's Degree</h3>
              <p className="text-sm text-slate-600 mb-4">Advanced Knowledge & Professional Skills</p>
              <div className="text-3xl text-slate-300 mb-4">↓</div>
            </div>
            <div className="rounded-[8px] border border-[#1E40FF] bg-gradient-to-br from-[#1E40FF]/5 to-transparent p-8">
              <h3 className="font-semibold text-slate-950 mb-3">PhD Research</h3>
              <p className="text-sm text-slate-600 mb-4">Creation of New Knowledge & Academic Contribution</p>
              <div className="text-3xl text-[#1E40FF] mb-4">✓</div>
            </div>
            <div className="rounded-[8px] border border-slate-200 bg-[#F8FAFC] p-8">
              <h3 className="font-semibold text-slate-950 mb-3">Global Recognition</h3>
              <p className="text-sm text-slate-600">International Research Community & Scholarly Impact</p>
            </div>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {[
              "Academic Credibility & Authority",
              "Research Leadership Opportunities",
              "Teaching Eligibility at Universities",
              "Publishing in Peer-Reviewed Journals",
              "Intellectual & Scholarly Authority",
              "International Academic Recognition",
            ].map((benefit, idx) => (
              <div key={idx} className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#1E40FF] mt-0.5" />
                <span className="text-sm text-slate-600">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Who Pursues a PhD */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Academic Profiles"
            title="Who Pursues a PhD?"
            description="Researchers from diverse backgrounds united by passion for knowledge creation and scholarly contribution."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "University Faculty", desc: "Strengthen credentials and advance academic careers" },
              { title: "Researchers", desc: "Build expertise in specialized research areas" },
              { title: "Corporate Professionals", desc: "Apply industry expertise to original research" },
              { title: "Policy Experts", desc: "Ground policy work in rigorous research evidence" },
              { title: "Healthcare Professionals", desc: "Advance medical or health systems research" },
              { title: "Business Leaders", desc: "Contribute research to management scholarship" },
              { title: "Government Officers", desc: "Elevate policy expertise with doctoral research" },
              { title: "Independent Scholars", desc: "Pursue intellectual passion and discovery" },
            ].map((profile, idx) => (
              <div key={idx} className="rounded-[8px] border border-slate-200 bg-white p-6">
                <h3 className="font-semibold text-slate-950 mb-2">{profile.title}</h3>
                <p className="text-sm text-slate-600">{profile.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: What You Can Achieve */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Career Outcomes"
            title="What You Can Achieve"
            description="A PhD opens pathways to academic leadership, research influence, and intellectual contribution."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {phdCareerOutcomes.map((outcome, idx) => (
              <div key={idx} className="rounded-[8px] border border-slate-200 bg-[#F8FAFC] p-8">
                <h3 className="font-semibold text-slate-950 mb-3">{outcome.title}</h3>
                <p className="text-sm text-slate-600">{outcome.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: Research Disciplines & Specialisations */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Research Areas"
            title="Research Disciplines & Specialisations"
            description="Choose a research area aligned with your intellectual interests and professional goals."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {phdResearchDisciplines.map((discipline) => (
              <div key={discipline.id} className="rounded-[8px] border border-slate-200 bg-white p-8">
                <h3 className="font-semibold text-slate-950 mb-2">{discipline.name}</h3>
                <p className="text-sm text-slate-600 mb-6">{discipline.description}</p>
                <div className="space-y-3 text-xs">
                  <div>
                    <p className="font-bold uppercase tracking-[0.12em] text-slate-400 mb-2">Research Themes</p>
                    <p className="text-slate-600">{discipline.researchThemes.join(" • ")}</p>
                  </div>
                  <div>
                    <p className="font-bold uppercase tracking-[0.12em] text-slate-400 mb-2">Outcomes</p>
                    <p className="text-slate-600">{discipline.careerOutcomes.slice(0, 2).join(" • ")}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: PhD Research Process */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Academic Journey"
            title="The PhD Research Process"
            description="A structured pathway from research interest to doctoral graduation."
          />
          <div className="mt-14 grid gap-4 lg:grid-cols-2">
            {[
              { stage: "1", title: "Research Interest Identification", desc: "Explore your scholarly passion" },
              { stage: "2", title: "Supervisor Matching", desc: "Find the right research mentor" },
              { stage: "3", title: "Research Proposal", desc: "Develop your research question" },
              { stage: "4", title: "Literature Review", desc: "Survey existing scholarship" },
              { stage: "5", title: "Research Methodology", desc: "Design your study approach" },
              { stage: "6", title: "Data Collection", desc: "Conduct primary research" },
              { stage: "7", title: "Analysis & Findings", desc: "Interpret your results" },
              { stage: "8", title: "Dissertation Writing", desc: "Compose your thesis" },
              { stage: "9", title: "Viva Defence", desc: "Defend before examiners" },
              { stage: "10", title: "Doctoral Award", desc: "Graduation & recognition" },
            ].map((step, idx) => (
              <div key={idx} className="rounded-[8px] border border-slate-200 bg-[#F8FAFC] p-6 flex gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1E40FF] text-xs font-bold text-white shrink-0">
                  {step.stage}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-950 mb-1">{step.title}</h3>
                  <p className="text-sm text-slate-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: Available PhD Universities */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Global Partnerships"
            title="Available PhD Universities"
            description="Study with internationally accredited universities recognized across 150+ countries. Research excellence and scholarly support."
          />
          <div className="mt-14">
            <UniversityComparison
              programmeId="phd-general"
              linkToDetail="/doctoral-programs/phd"
            />
          </div>
        </div>
      </section>

      {/* SECTION 8: Research Impact & Publication */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Scholarly Contribution"
            title="Research Impact & Publication Opportunities"
            description="Your PhD research contributes to global knowledge through publications and scholarly impact."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {[
              { title: "Peer-Reviewed Journals", desc: "Publish in top-tier academic journals" },
              { title: "Academic Conferences", desc: "Present at international research conferences" },
              { title: "Industry Whitepapers", desc: "Translate research into practice" },
              { title: "Policy Contributions", desc: "Influence policy through evidence" },
              { title: "Institutional Impact", desc: "Shape your university and field" },
              { title: "Global Research Communities", desc: "Join international scholarly networks" },
            ].map((item, idx) => (
              <div key={idx} className="rounded-[8px] border border-slate-200 bg-[#F8FAFC] p-6">
                <h3 className="font-semibold text-slate-950 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: Global Academic Recognition */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <AccreditationShowcase programmeId="phd-general" title="Global Academic Recognition" />
        </div>
      </section>

      {/* SECTION 10: Sample Academic Documents */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Documentation"
            title="Sample Academic Documents"
            description="Examples of academic credentials and research materials."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { emoji: "📜", title: "PhD Degree Certificate", desc: "Your doctoral credential" },
              { emoji: "📋", title: "Transcript", desc: "Academic record and grades" },
              { emoji: "📄", title: "Research Proposal", desc: "Original research plan" },
              { emoji: "📎", title: "Enrollment Letter", desc: "Doctoral candidacy proof" },
              { emoji: "📊", title: "Progress Review", desc: "Research milestone documentation" },
              { emoji: "🎓", title: "Convocation", desc: "Graduation ceremony credentials" },
            ].map((item, idx) => (
              <div key={idx} className="rounded-[8px] border border-slate-200 bg-[#F8FAFC] p-8 text-center">
                <div className="text-6xl mb-4">{item.emoji}</div>
                <h3 className="font-semibold text-slate-950 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11: Academic Career Pathways */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Career Progression"
            title="Academic Career Pathways"
            description="Multiple pathways for PhD graduates to advance their scholarly careers."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[8px] border border-slate-200 bg-white p-8">
              <h3 className="font-semibold text-slate-950 mb-6">Traditional Academic Path</h3>
              <div className="space-y-3">
                {[
                  "Postdoctoral Fellow",
                  "Assistant Professor",
                  "Associate Professor",
                  "Full Professor",
                  "Emeritus Faculty",
                ].map((role, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#1E40FF]" />
                    <span className="text-sm text-slate-600">{role}</span>
                    {idx < 4 && <div className="ml-auto text-slate-400">↓</div>}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[8px] border border-slate-200 bg-white p-8">
              <h3 className="font-semibold text-slate-950 mb-6">Research Leadership Path</h3>
              <div className="space-y-3">
                {[
                  "Research Director",
                  "Think Tank Fellow",
                  "Policy Advisor",
                  "Institutional Leader",
                  "Distinguished Scholar",
                ].map((role, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#1E40FF]" />
                    <span className="text-sm text-slate-600">{role}</span>
                    {idx < 4 && <div className="ml-auto text-slate-400">↓</div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12: Doctoral Success Profiles */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Scholar Journeys"
            title="Doctoral Success Profiles"
            description="Real academic transformations through doctoral research."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {phdSuccessProfiles.map((profile) => (
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

      {/* SECTION 13: Eligibility Requirements */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Entry Criteria"
            title="Eligibility Requirements"
            description="What we look for in PhD candidates."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <div>
              <h3 className="font-semibold text-slate-950 mb-6">Core Requirements</h3>
              <div className="space-y-3">
                {[
                  "Master's degree or equivalent professional qualification",
                  "Strong academic background and research interest",
                  "Evidence of research capability and scholarly aptitude",
                  "English language proficiency for academic writing",
                  "Clear research interest or thesis topic area",
                  "Commitment to original scholarly contribution",
                ].map((req, idx) => (
                  <div key={idx} className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#1E40FF] mt-0.5" />
                    <span className="text-sm text-slate-600">{req}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[8px] border border-slate-200 bg-white p-8">
              <h3 className="font-semibold text-slate-950 mb-4">Academic Readiness</h3>
              <p className="text-sm text-slate-600 mb-4">
                We assess your ability to conduct independent research at doctoral level:
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Research question development</li>
                <li>• Literature review capability</li>
                <li>• Methodological understanding</li>
                <li>• Academic writing proficiency</li>
                <li>• Self-directed learning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 14: Application Journey */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Getting Started"
            title="Application Journey"
            description="Your pathway from enquiry to doctoral research."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-7">
            {[
              { step: "1", title: "Consultation", desc: "Discuss your research interests" },
              { step: "2", title: "Evaluation", desc: "Academic background review" },
              { step: "3", title: "Assessment", desc: "Research interest evaluation" },
              { step: "4", title: "Supervisor Match", desc: "Find your research mentor" },
              { step: "5", title: "University Select", desc: "Choose your institution" },
              { step: "6", title: "Admission", desc: "Formal offer and acceptance" },
              { step: "7", title: "Research Begins", desc: "Start your doctoral journey" },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1E40FF] text-xs font-bold text-white mb-2">
                  {item.step}
                </div>
                <h3 className="font-semibold text-slate-950 text-center text-xs mb-1">{item.title}</h3>
                <p className="text-xs text-slate-600 text-center">{item.desc}</p>
                {idx < 6 && <div className="text-slate-300 mt-2">↓</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 15: Expanded FAQ */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Questions Answered"
            title="PhD Frequently Asked Questions"
            description="Comprehensive answers about pursuing a Doctor of Philosophy."
          />
          <div className="mt-14 max-w-3xl">
            <Accordion.Root type="single" collapsible className="space-y-3">
              {phdFAQsExpanded.map((faq, idx) => (
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

      <ConsultationNudge />

      {/* FINAL CTA */}
      <section className="bg-slate-950 py-24">
        <div className="container-premium text-center">
          <h2 className="text-3xl sm:text-4xl font-display text-white">
            Ready to Contribute New Knowledge to the World?
          </h2>
          <p className="mt-4 text-base text-slate-300 max-w-2xl mx-auto">
            Speak with an AcdyOn doctoral advisor to explore research pathways, academic opportunities, and globally recognized PhD programmes.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <a
              href="/book-consultation"
              className="inline-flex items-center gap-2 rounded-full bg-[#1E40FF] px-8 py-4 text-base font-semibold text-white hover:bg-[#1937dd] transition-colors shadow-[0_18px_40px_rgba(30,64,255,0.22)]"
            >
              Book Consultation
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Download PhD Guide
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Research Assessment
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
