import type { Metadata } from "next";
import Image from "next/image";
import * as Accordion from "@radix-ui/react-accordion";
import { CheckCircle2, ChevronDown, ArrowDown } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { UniversityShowcase } from "@/components/sections/university-showcase";
import { universities } from "@/lib/data/universities";
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

      {/* SECTION 2: Available PhD Universities */}
      <section className="bg-[#F8FAFC] py-24 dark:bg-slate-900/60">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Global partnerships"
            title="Available PhD Universities"
            description="Study with internationally accredited universities recognized across 150+ countries. Research excellence and scholarly support."
          />
          <div className="mt-14">
            <UniversityShowcase
              universities={universities.filter(u => u.programmes.phd)}
              programType="phd"
              ctaLabel="View Programme"
            />
          </div>
        </div>
      </section>

      {/* SECTION 3: Why Pursue a PhD */}
      <section className="bg-white py-24 dark:bg-slate-950">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Academic excellence"
            title="The Qualification That Creates Knowledge"
            description="Unlike taught qualifications, a PhD requires you to develop new knowledge, theories, or frameworks that contribute to your field."
          />
          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            <div className="rounded-[8px] border border-slate-200 bg-[#F8FAFC] p-8 dark:bg-slate-900/60 dark:border-slate-800">
              <h3 className="font-semibold text-slate-950 mb-3 dark:text-white">Master's Degree</h3>
              <p className="text-sm text-slate-600 mb-4 dark:text-slate-300">Advanced Knowledge & Professional Skills</p>
              <ArrowDown className="h-8 w-8 text-slate-300 mb-4" />
            </div>
            <div className="rounded-[8px] border border-[#1E40FF] bg-gradient-to-br from-[#1E40FF]/5 to-transparent p-8">
              <h3 className="font-semibold text-slate-950 mb-3 dark:text-white">PhD Research</h3>
              <p className="text-sm text-slate-600 mb-4 dark:text-slate-300">Creation of New Knowledge & Academic Contribution</p>
              <CheckCircle2 className="h-8 w-8 text-[#1E40FF] mb-4" />
            </div>
            <div className="rounded-[8px] border border-slate-200 bg-[#F8FAFC] p-8 dark:bg-slate-900/60 dark:border-slate-800">
              <h3 className="font-semibold text-slate-950 mb-3 dark:text-white">Global Recognition</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">International Research Community & Scholarly Impact</p>
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
                <span className="text-sm text-slate-600 dark:text-slate-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Who Pursues a PhD */}
      <section className="bg-[#F8FAFC] py-24 dark:bg-slate-900/60">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Academic profiles"
            title="Who Pursues a PhD?"
            description="Researchers from diverse backgrounds united by passion for knowledge creation and scholarly contribution."
          />
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
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
              <div key={idx} className="rounded-[8px] border border-slate-200 bg-white p-6 dark:bg-slate-950 dark:border-slate-800">
                <h3 className="font-semibold text-slate-950 mb-2 dark:text-white">{profile.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{profile.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: What You Can Achieve */}
      <section className="bg-white py-24 dark:bg-slate-950">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Career outcomes"
            title="What You Can Achieve"
            description="A PhD opens pathways to academic leadership, research influence, and intellectual contribution."
          />
          <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-2">
            {phdCareerOutcomes.map((outcome, idx) => (
              <div key={idx} className="rounded-[8px] border border-slate-200 bg-[#F8FAFC] p-8 dark:bg-slate-900/60 dark:border-slate-800">
                <h3 className="font-semibold text-slate-950 mb-3 dark:text-white">{outcome.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{outcome.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: Research Disciplines & Specialisations */}
      <section className="bg-[#F8FAFC] py-24 dark:bg-slate-900/60">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Research areas"
            title="Research Disciplines & Specialisations"
            description="Choose a research area aligned with your intellectual interests and professional goals."
          />
          <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-2">
            {phdResearchDisciplines.map((discipline) => (
              <div key={discipline.id} className="rounded-[8px] border border-slate-200 bg-white p-8 dark:bg-slate-950 dark:border-slate-800">
                <h3 className="font-semibold text-slate-950 mb-2 dark:text-white">{discipline.name}</h3>
                <p className="text-sm text-slate-600 mb-6 dark:text-slate-300">{discipline.description}</p>
                <div className="space-y-3 text-xs">
                  <div>
                    <p className="font-bold uppercase tracking-[0.12em] text-slate-400 mb-2">Research Themes</p>
                    <p className="text-slate-600 dark:text-slate-300">{discipline.researchThemes.join(" • ")}</p>
                  </div>
                  <div>
                    <p className="font-bold uppercase tracking-[0.12em] text-slate-400 mb-2">Outcomes</p>
                    <p className="text-slate-600 dark:text-slate-300">{discipline.careerOutcomes.slice(0, 2).join(" • ")}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: PhD Research Process */}
      <section className="bg-white py-24 dark:bg-slate-950">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Academic journey"
            title="The PhD Research Process"
            description="A structured pathway from research interest to doctoral graduation."
          />
          <div className="mt-14 grid gap-3 sm:gap-4 lg:grid-cols-2">
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
              <div key={idx} className="rounded-[8px] border border-slate-200 bg-[#F8FAFC] p-6 flex gap-4 dark:bg-slate-900/60 dark:border-slate-800">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1E40FF] text-xs font-bold text-white shrink-0">
                  {step.stage}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-950 mb-1 dark:text-white">{step.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: Research Impact & Publication */}
      <section className="bg-white py-24 dark:bg-slate-950">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Scholarly contribution"
            title="Research Impact & Publication Opportunities"
            description="Your PhD research contributes to global knowledge through publications and scholarly impact."
          />
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
            {[
              { title: "Peer-Reviewed Journals", desc: "Publish in top-tier academic journals" },
              { title: "Academic Conferences", desc: "Present at international research conferences" },
              { title: "Industry Whitepapers", desc: "Translate research into practice" },
              { title: "Policy Contributions", desc: "Influence policy through evidence" },
              { title: "Institutional Impact", desc: "Shape your university and field" },
              { title: "Global Research Communities", desc: "Join international scholarly networks" },
            ].map((item, idx) => (
              <div key={idx} className="rounded-[8px] border border-slate-200 bg-[#F8FAFC] p-6 dark:bg-slate-900/60 dark:border-slate-800">
                <h3 className="font-semibold text-slate-950 mb-2 dark:text-white">{item.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: Global Academic Recognition */}
      <section className="bg-[#F8FAFC] py-24 dark:bg-slate-900/60">
        <div className="container-premium">
          <AccreditationShowcase programmeId="phd-general" title="Global Academic Recognition" />
        </div>
      </section>

      {/* SECTION 10: Sample PhD Certificates */}
      <section className="bg-white py-24 dark:bg-slate-950">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Credentials"
            title="PhD Certificate Showcase"
            description="Official PhD certificates issued by our partner universities upon successful completion of your doctoral research."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <div>
              <div className="overflow-hidden rounded-[8px] border border-slate-200 bg-white shadow-lg dark:bg-slate-950 dark:border-slate-800" style={{aspectRatio: '1.41/1'}}>
                <div className="relative h-full w-full">
                  <Image src="https://sohhmxayptiosflmlxuu.supabase.co/storage/v1/object/public/brochures/Certificates/KU%20PHD.webp" alt="Kennedy University PhD Certificate" fill className="object-contain p-4" unoptimized />
                </div>
              </div>
              <p className="mt-4 text-center text-sm text-slate-500 dark:text-slate-400">Official Kennedy University PhD Certificate</p>
            </div>
            <div>
              <div className="overflow-hidden rounded-[8px] border border-slate-200 bg-white shadow-lg dark:bg-slate-950 dark:border-slate-800" style={{aspectRatio: '1.41/1'}}>
                <div className="relative h-full w-full">
                  <Image src="https://sohhmxayptiosflmlxuu.supabase.co/storage/v1/object/public/brochures/Certificates/DBS%20PHD.jpeg" alt="Dunster Business School PhD Certificate" fill className="object-contain p-4" unoptimized />
                </div>
              </div>
              <p className="mt-4 text-center text-sm text-slate-500 dark:text-slate-400">Official Dunster Business School PhD Certificate</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: Academic Career Pathways */}
      <section className="bg-[#F8FAFC] py-24 dark:bg-slate-900/60">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Career progression"
            title="Academic Career Pathways"
            description="Multiple pathways for PhD graduates to advance their scholarly careers."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[8px] border border-slate-200 bg-white p-8 dark:bg-slate-950 dark:border-slate-800">
              <h3 className="font-semibold text-slate-950 mb-6 dark:text-white">Traditional Academic Path</h3>
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
                    <span className="text-sm text-slate-600 dark:text-slate-300">{role}</span>
                    {idx < 4 && <ArrowDown className="ml-auto h-4 w-4 text-slate-400" />}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[8px] border border-slate-200 bg-white p-8 dark:bg-slate-950 dark:border-slate-800">
              <h3 className="font-semibold text-slate-950 mb-6 dark:text-white">Research Leadership Path</h3>
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
                    <span className="text-sm text-slate-600 dark:text-slate-300">{role}</span>
                    {idx < 4 && <ArrowDown className="ml-auto h-4 w-4 text-slate-400" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12: Doctoral Success Profiles */}
      <section className="bg-white py-24 dark:bg-slate-950">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Scholar journeys"
            title="Doctoral Success Profiles"
            description="Real academic transformations through doctoral research."
          />
          <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-2">
            {phdSuccessProfiles.map((profile) => (
              <div key={profile.id} className="rounded-[8px] border border-slate-200 bg-[#F8FAFC] p-8 dark:bg-slate-900/60 dark:border-slate-800">
                <h3 className="font-semibold text-slate-950 mb-4 dark:text-white">{profile.title}</h3>
                <p className="text-sm text-slate-600 mb-6 dark:text-slate-300">{profile.description}</p>
                <ul className="space-y-2">
                  {profile.outcomes.map((outcome, idx) => (
                    <li key={idx} className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#1E40FF] mt-0.5" />
                      <span className="text-sm text-slate-600 dark:text-slate-300">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 13: Eligibility Requirements */}
      <section className="bg-[#F8FAFC] py-24 dark:bg-slate-900/60">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Entry criteria"
            title="Eligibility Requirements"
            description="What we look for in PhD candidates."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <div>
              <h3 className="font-semibold text-slate-950 mb-6 dark:text-white">Core Requirements</h3>
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
                    <span className="text-sm text-slate-600 dark:text-slate-300">{req}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[8px] border border-slate-200 bg-white p-8 dark:bg-slate-950 dark:border-slate-800">
              <h3 className="font-semibold text-slate-950 mb-4 dark:text-white">Academic Readiness</h3>
              <p className="text-sm text-slate-600 mb-4 dark:text-slate-300">
                We assess your ability to conduct independent research at doctoral level:
              </p>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
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
      <section className="bg-white py-24 dark:bg-slate-950">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Getting started"
            title="Application Journey"
            description="Your pathway from enquiry to doctoral research."
          />
          <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-7">
            {[
              { step: "1", title: "Consultation", desc: "Discuss your research interests" },
              { step: "2", title: "Evaluation", desc: "Academic background review" },
              { step: "3", title: "Assessment", desc: "Research interest evaluation" },
              { step: "4", title: "Supervisor Match", desc: "Find your research mentor" },
              { step: "5", title: "University Select", desc: "Choose your institution" },
              { step: "6", title: "Admission", desc: "Formal offer and acceptance" },
              { step: "7", title: "Research Begins", desc: "Start your doctoral journey" },
            ].map((item) => (
              <div key={item.step} className="flex flex-col items-center rounded-[8px] border border-slate-200 p-3 dark:border-slate-800">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1E40FF] text-xs font-bold text-white mb-2">
                  {item.step}
                </div>
                <h3 className="font-semibold text-slate-950 text-center text-xs mb-1 dark:text-white">{item.title}</h3>
                <p className="text-xs text-slate-600 text-center dark:text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 15: Expanded FAQ */}
      <section className="bg-[#F8FAFC] py-24 dark:bg-slate-900/60">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Questions answered"
            title="PhD Frequently Asked Questions"
            description="Comprehensive answers about pursuing a Doctor of Philosophy."
          />
          <div className="mt-14 max-w-3xl">
            <Accordion.Root type="single" collapsible className="space-y-3">
              {phdFAQsExpanded.map((faq, idx) => (
                <Accordion.Item
                  key={idx}
                  value={`faq-${idx}`}
                  className="rounded-[8px] border border-slate-200 bg-white dark:bg-slate-950 dark:border-slate-800"
                >
                  <Accordion.Trigger className="flex w-full items-center justify-between px-6 py-4 text-left hover:bg-slate-50">
                    <span className="font-semibold text-slate-950 dark:text-white">
                      {faq.question}
                    </span>
                    <ChevronDown className="h-5 w-5 shrink-0 text-slate-600 transition-transform duration-200 dark:text-slate-300" />
                  </Accordion.Trigger>
                  <Accordion.Content className="border-t border-slate-200 px-6 py-4 text-sm leading-6 text-slate-600 dark:text-slate-300 dark:border-slate-800">
                    {faq.answer}
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </div>
        </div>
      </section>


      <section className="bg-[#0f172a] py-20">
        <div className="container-premium text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#22d3ee]">Expert guidance</p>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Speak with an Academic Adviser</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Explore research pathways, supervisor matching, and globally recognised PhD programmes — speak with one of our doctoral advisers at no obligation.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a href="/book-consultation" className="inline-flex items-center justify-center rounded-full bg-[#1e40ff] px-8 py-4 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(30,64,255,0.25)] transition-all hover:bg-[#1937dd]">Book a Free Consultation</a>
            <a href="/doctoral-programs" className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white transition-all hover:border-white/40 hover:bg-white/5">Explore All Doctoral Pathways</a>
          </div>
        </div>
      </section>
    </main>
  );
}
