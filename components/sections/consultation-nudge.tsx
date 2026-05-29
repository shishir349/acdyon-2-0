import { CTAButton } from "@/components/ui/button";

export function ConsultationNudge() {
  return (
    <section className="border-y border-slate-200 bg-[#F8FAFC] py-16">
      <div className="container-premium grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#1E40FF]">Academic Guidance</p>
          <h2 className="mt-3 font-display text-3xl text-slate-950">
            Need guidance selecting the right pathway?
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            Speak with an academic adviser to evaluate programme suitability, eligibility, learning outcomes, and progression opportunities tailored to your professional background.
          </p>
        </div>
        <CTAButton href="/book-consultation">Book Consultation</CTAButton>
      </div>
    </section>
  );
}
