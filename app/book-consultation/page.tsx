import type { Metadata } from "next";
import { Phone, Mail } from "lucide-react";
import { ConsultationForm } from "@/components/forms/consultation-form";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "Book Consultation",
  description: "Book a consultation with AcdyOn for program selection, eligibility review, and admissions guidance.",
};

export default function BookConsultationPage() {
  return (
    <main>
      <div className="hidden lg:block">
        <PageHero
          eyebrow="Consultation"
          title="Begin with a guided eligibility and pathway consultation"
          description="Tell us about your professional background and goals. AcdyOn will help you identify the most credible route forward."
        />
      </div>
      <section className="bg-[#F8FAFC] pt-28 pb-24 lg:py-24 dark:bg-slate-900/60">
        <div className="container-premium max-w-4xl">
          <ConsultationForm sourcePage="book-consultation" />

          <div className="mt-10 rounded-[8px] border border-slate-200 bg-white p-6 dark:bg-slate-950 dark:border-slate-800">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Prefer to reach us directly?</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <a href="tel:+12135347859" className="flex items-center gap-3 rounded-[8px] bg-[#F8FAFC] p-4 transition hover:bg-[#1E40FF]/5 dark:bg-slate-900/60">
                <Phone className="h-4 w-4 shrink-0 text-[#1E40FF]" />
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">US</p>
                  <p className="text-sm font-semibold text-slate-950 dark:text-white">+1 213 534 7859</p>
                </div>
              </a>
              <a href="tel:+447465278021" className="flex items-center gap-3 rounded-[8px] bg-[#F8FAFC] p-4 transition hover:bg-[#1E40FF]/5 dark:bg-slate-900/60">
                <Phone className="h-4 w-4 shrink-0 text-[#1E40FF]" />
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">UK</p>
                  <p className="text-sm font-semibold text-slate-950 dark:text-white">+44 7465 278021</p>
                </div>
              </a>
              <a href="tel:+919779914422" className="flex items-center gap-3 rounded-[8px] bg-[#F8FAFC] p-4 transition hover:bg-[#1E40FF]/5 dark:bg-slate-900/60">
                <Phone className="h-4 w-4 shrink-0 text-[#1E40FF]" />
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">India</p>
                  <p className="text-sm font-semibold text-slate-950 dark:text-white">+91 9779914422</p>
                </div>
              </a>
              <a href="mailto:admissions@acdyon.com" className="flex items-center gap-3 rounded-[8px] bg-[#F8FAFC] p-4 transition hover:bg-[#1E40FF]/5 dark:bg-slate-900/60">
                <Mail className="h-4 w-4 shrink-0 text-[#1E40FF]" />
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Email</p>
                  <p className="text-sm font-semibold text-slate-950 dark:text-white">admissions@acdyon.com</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
