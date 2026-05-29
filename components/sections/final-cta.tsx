import { CTAButton } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 text-white">
      <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[#1E40FF]/20 blur-3xl" />
      <div className="container-premium relative text-center">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#D4AF37]">Next Step</p>
        <h2 className="mx-auto max-w-3xl font-display text-4xl leading-tight sm:text-5xl">
          Build Your Future With Global Learning & Recognition
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Start with a guided consultation and choose the route that aligns with your career, authority, and academic ambitions.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <CTAButton href="/book-consultation" variant="dark">Book Consultation</CTAButton>
          <CTAButton href="/programs" variant="secondary">Explore Programs</CTAButton>
        </div>
      </div>
    </section>
  );
}
