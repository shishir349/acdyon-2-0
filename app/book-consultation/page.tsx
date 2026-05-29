import type { Metadata } from "next";
import { ConsultationForm } from "@/components/forms/consultation-form";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "Book Consultation",
  description: "Book a consultation with AcdyOn for program selection, eligibility review, and admissions guidance.",
};

export default function BookConsultationPage() {
  return (
    <main>
      <PageHero
        eyebrow="Consultation"
        title="Begin with a guided eligibility and pathway consultation"
        description="Tell us about your professional background and goals. AcdyOn will help you identify the most credible route forward."
      />
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium max-w-4xl">
          <ConsultationForm />
        </div>
      </section>
    </main>
  );
}
