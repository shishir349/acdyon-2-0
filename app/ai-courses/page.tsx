import type { Metadata } from "next";
import { FAQSection } from "@/components/sections/faq-section";
import { FeaturedAISection } from "@/components/sections/featured-ai-section";
import { FinalCTA } from "@/components/sections/final-cta";
import { PageHero } from "@/components/sections/page-hero";
import { ProgramTemplate } from "@/components/sections/program-template";
import { programPages } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "AI & Tech Courses",
  description: programPages.ai.description,
};

export default function AICoursesPage() {
  const page = programPages.ai;
  return (
    <main>
      <PageHero {...page} />
      <FeaturedAISection />
      <ProgramTemplate {...page} />
      <FAQSection />
      <FinalCTA />
    </main>
  );
}
