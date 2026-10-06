import { AcdyOnAdvantage } from "@/components/sections/acdyon-advantage";
import { FAQSection } from "@/components/sections/faq-section";
import { FeaturedAISection } from "@/components/sections/featured-ai-section";
import { FinalCTA } from "@/components/sections/final-cta";
import { GlobalNetwork } from "@/components/sections/global-network";
import { HeroSection } from "@/components/sections/hero-section";
import { LogoMarquee } from "@/components/sections/logo-marquee";
import { PathwaySelector } from "@/components/sections/pathway-selector";
import { ProgramCategories } from "@/components/sections/program-categories";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { TimelineSection } from "@/components/sections/timeline-section";
import { TransformationPaths } from "@/components/sections/transformation-paths";
import { Reveal } from "@/components/ui/reveal";
import { SOCIAL_SAME_AS } from "@/lib/data/social";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "AcdyOn",
  url: "https://acdyon.com",
  logo: "https://acdyon.com/acdyon-logo.webp",
  description:
    "Premium executive education, AI mastery, doctoral pathways, and honorary recognition for ambitious professionals and global leaders.",
  sameAs: SOCIAL_SAME_AS,
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      {/* Awareness */}
      <HeroSection />
      <LogoMarquee />

      {/* Interest — what AcdyOn offers */}
      <Reveal><ProgramCategories /></Reveal>
      <Reveal><TransformationPaths /></Reveal>
      <Reveal><PathwaySelector /></Reveal>

      {/* Consideration — why AcdyOn & what it delivers */}
      <Reveal><AcdyOnAdvantage /></Reveal>

      {/* Depth — AI & university network */}
      <Reveal><FeaturedAISection /></Reveal>
      <Reveal><GlobalNetwork /></Reveal>

      {/* Trust & conversion */}
      <Reveal><TestimonialsSection /></Reveal>
      <Reveal><TimelineSection /></Reveal>
      <Reveal><FAQSection /></Reveal>
      <Reveal><FinalCTA /></Reveal>
    </main>
  );
}
