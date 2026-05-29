import { AudienceSection } from "@/components/sections/audience-section";
import { AuthorityStrip } from "@/components/sections/authority-strip";
import { BenefitsSection } from "@/components/sections/benefits-section";
import { FAQSection } from "@/components/sections/faq-section";
import { FeaturedAISection } from "@/components/sections/featured-ai-section";
import { FinalCTA } from "@/components/sections/final-cta";
import { HeroSection } from "@/components/sections/hero-section";
import { LogoMarquee } from "@/components/sections/logo-marquee";
import { ProgramCategories } from "@/components/sections/program-categories";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { TimelineSection } from "@/components/sections/timeline-section";
import { UniversitySection } from "@/components/sections/university-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AuthorityStrip />
      <LogoMarquee />
      <ProgramCategories />
      <BenefitsSection />
      <AudienceSection />
      <FeaturedAISection />
      <UniversitySection />
      <TestimonialsSection />
      <TimelineSection />
      <FAQSection />
      <FinalCTA />
    </main>
  );
}
