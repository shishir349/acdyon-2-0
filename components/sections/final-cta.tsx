import { CTAButton } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-16 text-white sm:py-24">
      <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[#1E40FF]/20 blur-3xl" />
      <div className="container-premium relative text-center">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#D4AF37]">Next Step</p>
        <h2 className="mx-auto max-w-3xl font-display text-2xl leading-tight sm:text-4xl md:text-5xl">
          Build Your Future With Global Learning & Recognition
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
          Start with a guided consultation and choose the route that aligns with your career, authority, and academic ambitions.
        </p>
        <div className="mt-7 flex flex-col justify-center gap-3 sm:mt-9 sm:flex-row">
          <CTAButton href="/book-consultation" variant="dark">Book Consultation</CTAButton>
          <CTAButton href="/programs" variant="secondary">Explore Programs</CTAButton>
        </div>
      </div>
    </section>
  );
}
