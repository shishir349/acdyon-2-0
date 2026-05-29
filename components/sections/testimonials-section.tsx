import { TestimonialCard } from "@/components/cards/testimonial-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/lib/data/site";

export function TestimonialsSection() {
  return (
    <section className="bg-white py-24">
      <div className="container-premium">
        <SectionHeading
          eyebrow="Success Stories"
          title="Professional outcomes shaped by clarity, guidance, and trust"
          description="A premium learning experience should feel personal, credible, and aligned with the learner's long-term authority."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => <TestimonialCard key={testimonial.name} {...testimonial} />)}
        </div>
      </div>
    </section>
  );
}
