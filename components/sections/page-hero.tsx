import { CTAButton } from "@/components/ui/button";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  partnerBadge?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  secondaryLabel = "Explore Programs",
  secondaryHref = "/programs",
  partnerBadge,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#ffffff,#f8fafc_50%,#eef4ff)] pb-14 pt-28 sm:pb-20 sm:pt-36 dark:bg-[linear-gradient(135deg,#020617,#0f172a_50%,#0b1330)]">
      <div className="absolute right-[-10%] top-20 h-80 w-80 rounded-full bg-[#1E40FF]/10 blur-3xl" />
      <div className="container-premium relative">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#1E40FF]">{eyebrow}</p>
        {partnerBadge ? (
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/8 px-4 py-1.5 text-xs font-semibold text-[#D4AF37]">
            {partnerBadge}
          </div>
        ) : null}
        <h1 className="max-w-4xl font-display text-3xl sm:text-4xl leading-tight text-slate-950 md:text-6xl dark:text-white">{title}</h1>
        <p className="mt-6 max-w-2xl text-base sm:text-lg leading-8 text-slate-600 dark:text-slate-300">{description}</p>
        <div className="mt-7 sm:mt-9 flex flex-col gap-3 sm:flex-row">
          <CTAButton href="/book-consultation">Book Consultation</CTAButton>
          <CTAButton href={secondaryHref} variant="secondary">{secondaryLabel}</CTAButton>
        </div>
      </div>
    </section>
  );
}
