import { TestimonialCard } from "@/components/cards/testimonial-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/lib/data/site";
import { HorizontalScroll } from "../ui/horizontal-scroll";

export function TestimonialsSection() {
    return (
        <section className="bg-white py-14 sm:py-24 dark:bg-slate-950">
            <div className="container-premium">
                <SectionHeading
                    eyebrow="Success stories"
                    title="Professional outcomes shaped by clarity, guidance, and trust"
                    description="A premium learning experience should feel personal, credible, and aligned with the learner's long-term authority."
                />
                <HorizontalScroll>
                  <div className="mt-10 flex overflow-x-auto gap-4 pb-4 sm:mt-14 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:pb-0 lg:grid-cols-3">
                      {testimonials.map((testimonial) => (
                          <div
                              key={testimonial.name}
                              className="w-70 shrink-0 snap-center sm:min-w-0 sm:shrink"
                          >
                              <TestimonialCard {...testimonial} />
                          </div>
                      ))}
                  </div>
                </HorizontalScroll>
            </div>
        </section>
    );
}
