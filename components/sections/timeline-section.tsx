"use client";

import { processSteps } from "@/lib/data/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { HorizontalScroll } from "@/components/ui/horizontal-scroll";

export function TimelineSection() {
  return (
    <section className="bg-[#F8FAFC] py-14 sm:py-24 dark:bg-slate-950">
      <div className="container-premium">
        <SectionHeading eyebrow="Process" title="A guided four-step process from consultation to programme start" />
        <div className="mt-10 sm:mt-14">
          <HorizontalScroll className="sm:grid sm:gap-5 sm:overflow-visible lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <article key={step.title} className="min-w-65 shrink-0 snap-center sm:min-w-0 sm:shrink relative rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900/60">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-8 text-lg font-semibold text-slate-950 dark:text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300 w-50">{step.description}</p>
              </article>
            ))}
          </HorizontalScroll>
        </div>
      </div>
    </section>
  );
}
