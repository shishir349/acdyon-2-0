import type { Metadata } from "next";
import { FinalCTA } from "@/components/sections/final-cta";
import { PageHero } from "@/components/sections/page-hero";
import { CTAButton } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { aboutStats, globalRegions } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "About AcdyOn",
  description: "AcdyOn is a premium global education platform for executive learning, AI capability, doctoral advancement, and academic recognition — built for experienced professionals, not traditional students.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About AcdyOn"
        title="Built for professionals whose experience deserves academic weight"
        description="AcdyOn connects executive learning, global academic recognition, and AI-era capability into one guided platform — designed for accomplished professionals at senior career stage."
        secondaryLabel="Explore Programs"
        secondaryHref="/programs"
      />

      {/* Our Story */}
      <section className="bg-white py-24">
        <div className="container-premium grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="rounded-[8px] bg-slate-950 p-10 text-white">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#D4AF37]">Our Story</p>
            <h2 className="mt-5 font-display text-4xl leading-tight">
              Founded to close the gap between professional achievement and academic recognition
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-300">
              AcdyOn was founded to address a problem most education platforms were not designed to solve: accomplished professionals with decades of real-world impact, yet without the academic framing to match their standing.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              We set out to build a platform that connects executive learning, global academic recognition, and applied AI capability into one carefully guided experience — designed for leaders as they actually are, not students as institutions expect them to be.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              The result is a platform where the first conversation is a consultation, not an enrollment form — and where every recommendation is grounded in an honest assessment of what a pathway will actually deliver.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Executive-First Design",
                desc: "Every programme, pathway, and process is structured around the working professional — not a traditional student on a campus timeline.",
              },
              {
                title: "Consultation Before Enrollment",
                desc: "No programme is recommended without a review of your professional background, goals, and eligibility. We advise before we enrol.",
              },
              {
                title: "Global Credibility",
                desc: "Institutional partnerships are selected based on international standing, cross-border recognition, and professional relevance.",
              },
              {
                title: "AI & Academic in One Platform",
                desc: "Applied AI capability and academic advancement are offered alongside each other — not as separate or competing product categories.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-[8px] border border-slate-200 bg-[#F8FAFC] p-6">
                <h3 className="font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Purpose"
            title="What we exist to do"
            description="Two clear statements that define every programme, partnership, and professional conversation at AcdyOn."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[8px] border border-slate-200 bg-white p-8 lg:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#1E40FF]">Mission</p>
              <h3 className="mt-5 font-display text-3xl leading-snug text-slate-950">
                To guide professionals toward credentials that reflect their actual professional standing
              </h3>
              <p className="mt-5 text-sm leading-7 text-slate-600">
                AcdyOn bridges the gap between professional achievement and academic recognition — through personalised guidance, global institutional partnerships, and programmes that respect the learner&apos;s existing expertise, time, and professional identity.
              </p>
            </div>
            <div className="rounded-[8px] border border-slate-200 bg-white p-8 lg:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#D4AF37]">Vision</p>
              <h3 className="mt-5 font-display text-3xl leading-snug text-slate-950">
                A world where your career becomes the foundation for your credentials
              </h3>
              <p className="mt-5 text-sm leading-7 text-slate-600">
                We envision an education landscape where accomplished professionals are not defined by what they studied at 22 — but empowered by pathways aligned with what they have built, led, and contributed across decades of professional life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why AcdyOn Exists */}
      <section className="bg-white py-24">
        <div className="container-premium grid gap-12 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            align="left"
            eyebrow="Why We Exist"
            title="The traditional academic model was never built for you"
          />
          <div className="space-y-5 text-sm leading-7 text-slate-600">
            <p>
              Traditional universities were designed for students entering the workforce for the first time. The structure, the timelines, the entry requirements — all of it assumes you are at the beginning of a career, not 20 years into one.
            </p>
            <p>
              AcdyOn exists because experienced professionals deserve a different kind of education. One that starts from where you are — not where an institution needs you to be. One that honours your professional record, your industry standing, and your need to keep operating at full capacity while you advance.
            </p>
            <p>
              This is not a shortcut. It is a more accurate route — designed for people who have already proven their capability and simply require the academic framing and institutional recognition to match.
            </p>
            <div className="pt-2">
              <CTAButton href="/programs" variant="secondary">Explore Our Programmes</CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes AcdyOn Different */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="What Makes Us Different"
            title="Four principles that separate AcdyOn from traditional institutions"
            description="AcdyOn is not a university, a course platform, or a training provider. It is a guided academic advancement platform — and that distinction shapes everything about how it operates."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {[
              {
                number: "01",
                title: "Consultation Before Commitment",
                description: "Every engagement begins with a thorough review of your professional background, academic history, and stated goals. No programme is recommended until this assessment is complete. Most institutions sell first; we advise first.",
              },
              {
                number: "02",
                title: "Programmes Built Around Existing Expertise",
                description: "Your professional history is an asset, not a precondition. Programmes are designed to build on what you have already achieved — not to restart your education from a point that assumes you have none.",
              },
              {
                number: "03",
                title: "Transparent Institutional Guidance",
                description: "Every institutional partnership is assessed for international standing, country-level recognition, and the professional relevance of its awards. Candidates are told honestly what a credential will — and will not — mean in their specific context.",
              },
              {
                number: "04",
                title: "Academic and AI Capability Together",
                description: "Academic advancement and applied AI competency are not separate tracks at AcdyOn. A professional pursuing doctoral recognition can simultaneously develop AI practitioner skills — because both are part of the same leadership profile.",
              },
            ].map((item) => (
              <article key={item.number} className="rounded-[8px] border border-slate-200 bg-white p-8">
                <p className="font-display text-4xl font-bold text-slate-100">{item.number}</p>
                <h3 className="mt-3 text-xl font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="bg-slate-950 py-20">
        <div className="container-premium">
          <div className="grid gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
            {aboutStats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-5xl text-white">{stat.value}</p>
                <p className="mt-3 text-sm font-medium text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Global Reach"
            title="18+ countries. One consistent standard of guidance."
            description="AcdyOn serves professionals across South Asia, the Middle East, Europe, and the Americas — with every consultation, programme, and recognition pathway held to the same institutional standard."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {globalRegions.map((region) => (
              <article
                key={region.region}
                className="rounded-[8px] border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#1E40FF]/30"
              >
                <p className="font-display text-3xl text-slate-950">{region.professionals}</p>
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-[#1E40FF]">{region.region}</p>
                <p className="mt-3 text-xs leading-6 text-slate-400">{region.countries}</p>
                <p className="mt-4 text-sm leading-7 text-slate-600">{region.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Education Philosophy */}
      <section className="bg-white py-24">
        <div className="container-premium grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="rounded-[8px] bg-slate-950 p-10 text-white">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#D4AF37]">Executive Education Philosophy</p>
            <h2 className="mt-5 font-display text-4xl leading-tight">
              Learning that belongs in your professional life — not apart from it
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-300">
              The traditional executive education model was built around the campus visit, the cohort intake, and the semester calendar. None of those structures were designed for the executive who has an organisation to run, a team to lead, and no capacity to pause their career for 18 months.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              AcdyOn's executive education philosophy begins from a different assumption: that you are already highly capable, and that a programme should accelerate that capability — not interrupt it to start from scratch.
            </p>
          </div>
          <div className="grid gap-5">
            {[
              {
                title: "Schedule-Respectful Structure",
                desc: "All programmes are designed around professional schedules and time zones — not academic calendars or cohort intakes that require you to reorganise your working life.",
              },
              {
                title: "Relevance From the First Module",
                desc: "Learning should produce professional value from the first week of engagement. Every curriculum element is selected for applied utility and direct relevance to the learner's professional context.",
              },
              {
                title: "Guided Progression, Not Just Delivery",
                desc: "An academic adviser is involved before enrolment, during the programme, and at completion — not only at the point of sale. Guidance is a structural feature, not an optional add-on.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-[8px] border border-slate-200 bg-[#F8FAFC] p-6">
                <h3 className="font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Advancement Philosophy */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium grid gap-12 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            align="left"
            eyebrow="Academic Advancement Philosophy"
            title="Credentials that reflect the professional record, not just the academic one"
          />
          <div className="space-y-5 text-sm leading-7 text-slate-600">
            <p>
              Academic advancement is not about going back to school. It is about finding the institutional framework that accurately reflects what you have already built — and making that reflection visible in academic and professional contexts.
            </p>
            <p>
              AcdyOn believes that a professional with two decades of industry leadership, domain expertise, or research contribution does not need to re-enter a classroom to prove their competence. What they need is a structured pathway — with the right institutional partner, the right process, and complete transparency about what the credential will mean in their specific professional and geographic context.
            </p>
            <p>
              This is why every academic advancement pathway at AcdyOn begins with an assessment of your existing professional record — not your transcripts. Your career is the primary qualification.
            </p>
            <div className="pt-2">
              <CTAButton href="/universities" variant="secondary">View Academic Partnerships</CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Perspective */}
      <section className="relative overflow-hidden bg-slate-950 py-28">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-[#1E40FF]/15 blur-3xl" />
        <div className="container-premium relative max-w-4xl text-center">
          <p className="mb-8 text-xs font-bold uppercase tracking-[0.24em] text-[#D4AF37]">Founding Perspective</p>
          <blockquote className="font-display text-3xl leading-relaxed text-white sm:text-4xl">
            &ldquo;Every conversation starts with listening — not selling. We built AcdyOn because when an executive decides to pursue academic advancement, they deserve clarity, guidance, and a pathway that honours the professional journey they have already built.&rdquo;
          </blockquote>
          <p className="mt-10 text-sm font-semibold text-slate-400">The AcdyOn Founding Team</p>
          <div className="mx-auto mt-5 h-px w-16 bg-[#D4AF37]/40" />
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
