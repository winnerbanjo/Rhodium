import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { NeurosTicker } from "@/components/home/NeurosTicker";
import { TheGapSection } from "@/components/home/TheGapSection";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { EcosystemDiagram } from "@/components/home/EcosystemDiagram";
import { ApproachStepper } from "@/components/home/ApproachStepper";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { SectorsSection } from "@/components/home/SectorsSection";
import { LeadershipSection } from "@/components/home/LeadershipSection";
import { WhyRhodium } from "@/components/home/WhyRhodium";
import { PricingPlans } from "@/components/home/PricingPlans";
import { ValuesStrip } from "@/components/home/ValuesStrip";
import { InsightsPreview } from "@/components/home/InsightsPreview";
import { CtaBanner } from "@/components/home/CtaBanner";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero with Live Transaction Telemetry & Real Infrastructure Photography */}
      <HeroSection />

      {/* 2. Signature Running Marquee Tapes */}
      <NeurosTicker />

      {/* 3. The Gap / Bankability Imperative Bento */}
      <TheGapSection />

      {/* 4. Landmark Transactions & Executed Mandates (Photographic Showcase) */}
      <FeaturedProjects />

      {/* 5. Ecosystem: Who We Sit Between */}
      <EcosystemDiagram />

      {/* 6. Our Approach: Prepare -> Structure -> Close -> Operate */}
      <ApproachStepper />

      {/* 7. Services Overview: 8 Bento Cards */}
      <ServicesGrid />

      {/* 8. Sectors We Serve (with Real Sector Architectural Photography) */}
      <SectorsSection />

      {/* 9. Advisory Leadership (Senior Partners with Executive Portraits) */}
      <LeadershipSection />

      {/* 10. Why Rhodium (with London Boardroom Backdrop) */}
      <WhyRhodium />

      {/* 11. Engagement Models */}
      <PricingPlans />

      {/* 12. Testimonial & Animated Counter Stats Strip */}
      <ValuesStrip />

      {/* 13. Insights & Research Preview */}
      <InsightsPreview />

      {/* 14. Obsidian CTA & Executive Intelligence Briefing */}
      <CtaBanner />
    </>
  );
}
