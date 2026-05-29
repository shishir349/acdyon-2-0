import type { Metadata } from "next";
import { FAQSection } from "@/components/sections/faq-section";
import { FinalCTA } from "@/components/sections/final-cta";
import { PageHero } from "@/components/sections/page-hero";
import { ProgramCategories } from "@/components/sections/program-categories";
import { ProgramTemplate } from "@/components/sections/program-template";
import { programPages } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Programs",
  description: programPages.programs.description,
};

export default function ProgramsPage() {
  const page = programPages.programs;
  return (
    <main>
      <PageHero {...page} />
      <ProgramCategories />
      <ProgramTemplate {...page} />
      <FAQSection />
      <FinalCTA />
    </main>
  );
}
