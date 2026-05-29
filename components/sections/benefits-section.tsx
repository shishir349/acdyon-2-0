import { benefits } from "@/lib/data/site";
import { CTAButton } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";

export function BenefitsSection() {
  return (
    <section className="bg-white py-24">
      <div className="container-premium">
        <SectionHeading
          eyebrow="Why AcdyOn"
          title="Built for leaders who need education to translate into credibility"
          description="Every touchpoint is designed around guidance, trust, flexibility, and global professional relevance."
        />
        <div className="mt-14 grid gap-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="rounded-[8px] bg-slate-950 p-8 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#D4AF37]">Global Positioning</p>
              <h3 className="mt-5 font-display text-4xl leading-tight">Designed for professionals whose education must signal trust.</h3>
              <p className="mt-5 text-sm leading-7 text-slate-300">
                AcdyOn combines academic progression, AI-era capability, and recognition-led guidance in one executive-friendly experience.
              </p>
              <CTAButton href="/about" variant="dark" className="mt-7">Why AcdyOn</CTAButton>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {benefits.slice(0, 4).map((benefit, index) => (
                <article key={benefit.title} className="grid gap-5 rounded-[8px] border border-slate-200 bg-white p-6 transition hover:border-[#1E40FF]/30">
                  <div className={index % 2 === 0 ? "flex h-12 w-12 items-center justify-center rounded-[8px] bg-slate-950 text-white" : "flex h-12 w-12 items-center justify-center rounded-[8px] bg-[#1E40FF] text-white"}>
                    <benefit.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-950">{benefit.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{benefit.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            {benefits.slice(4).map((benefit) => (
              <article key={benefit.title} className="grid gap-6 rounded-[8px] border border-slate-200 bg-white p-7 transition hover:border-[#1E40FF]/30 md:grid-cols-[64px_1fr]">
                <div className="flex h-14 w-14 items-center justify-center rounded-[8px] bg-[#1E40FF] text-white">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-950">{benefit.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{benefit.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
