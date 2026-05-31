import { AcdyOnAdvantage } from "@/components/sections/acdyon-advantage";
import { AudienceSection } from "@/components/sections/audience-section";
import { AuthorityStrip } from "@/components/sections/authority-strip";
import { BenefitsSection } from "@/components/sections/benefits-section";
import { ExecutiveOutcomes } from "@/components/sections/executive-outcomes";
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
import { UniversitySection } from "@/components/sections/university-section";
import { UniversitySelection } from "@/components/sections/university-selection";
import { WhyAcdyOnStats } from "@/components/sections/why-acdyon-stats";

export default function Home() {
  return (
    <main>
      {/* Awareness */}
      <HeroSection />
      <AuthorityStrip />
      <LogoMarquee />

      {/* Interest — what AcdyOn offers */}
      <ProgramCategories />
      <TransformationPaths />
      <PathwaySelector />

      {/* Consideration — why AcdyOn & what it delivers */}
      <BenefitsSection />
      <AcdyOnAdvantage />
      <AudienceSection />
      <ExecutiveOutcomes />

      {/* Depth — AI & university network */}
      <FeaturedAISection />
      <UniversitySection />
      <GlobalNetwork />
      <UniversitySelection />

      {/* Trust & conversion */}
      <TestimonialsSection />
      <WhyAcdyOnStats />
      <TimelineSection />
      <FAQSection />
      <FinalCTA />
    </main>
  );
}
