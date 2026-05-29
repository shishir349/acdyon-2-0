import type { Metadata } from "next";
import { FinalCTA } from "@/components/sections/final-cta";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTAButton } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Events",
  description: "Join AcdyOn webinars, open days, and information sessions on executive education, AI programs, and academic recognition.",
};

export default function EventsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Events"
        title="Webinars, open days, and information sessions"
        description="Join live sessions to learn about program pathways, ask questions, and speak with the AcdyOn consultation team before committing to any pathway."
      />
      <section className="bg-white py-24">
        <div className="container-premium max-w-3xl text-center">
          <SectionHeading
            eyebrow="Coming Soon"
            title="Events calendar launching shortly"
            description="AcdyOn's events programme is being finalised. Register your interest to be notified when webinars and open days are announced."
          />
          <div className="mt-10">
            <CTAButton href="/book-consultation">Register Interest via Consultation</CTAButton>
          </div>
        </div>
      </section>
      <FinalCTA />
    </main>
  );
}
