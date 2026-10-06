import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { ScholarshipCalculatorForm } from "@/components/forms/scholarship-calculator-form";

export const metadata: Metadata = {
  title: "Scholarship Calculator",
  description:
    "Estimate your indicative scholarship and net programme fee for AcdyOn's doctoral, honorary, and AI programmes.",
};

export default function ScholarshipCalculatorPage() {
  return (
    <main>
      <PageHero
        eyebrow="Scholarship Calculator"
        title="Estimate your indicative scholarship"
        description="Select your programme and profile to see an indicative scholarship percentage and net payable fee. Final scholarship is always confirmed after an eligibility review."
      />
      <section className="bg-white py-16 dark:bg-slate-950">
        <div className="container-premium max-w-4xl">
          <ScholarshipCalculatorForm />
        </div>
      </section>
    </main>
  );
}
