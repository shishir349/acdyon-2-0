import type { Metadata } from "next";
import { ConsultationForm } from "@/components/forms/consultation-form";
import { PageHero } from "@/components/sections/page-hero";
import { contactDetails } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact AcdyOn for executive education, AI course, doctoral pathway, and honorary recognition guidance.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Speak with AcdyOn about your next academic or professional milestone"
        description="Share your goals and our team will guide you toward the right pathway, timeline, and eligibility process."
      />
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="rounded-[8px] bg-slate-950 p-8 text-white">
            <h2 className="font-display text-3xl">Contact Details</h2>
            <div className="mt-8 grid gap-4">
              {contactDetails.map((detail) => (
                <div key={detail} className="rounded-[8px] border border-white/10 bg-white/[0.04] p-4 text-sm text-slate-200">{detail}</div>
              ))}
            </div>
          </div>
          <ConsultationForm sourcePage="contact" />
        </div>
      </section>
    </main>
  );
}
