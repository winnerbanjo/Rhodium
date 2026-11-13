import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { NeurosTicker } from "@/components/home/NeurosTicker";
import { TheGapSection } from "@/components/home/TheGapSection";
import { EcosystemDiagram } from "@/components/home/EcosystemDiagram";
import { ApproachStepper } from "@/components/home/ApproachStepper";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { SectorsSection } from "@/components/home/SectorsSection";
import { WhyRhodium } from "@/components/home/WhyRhodium";
import { PricingPlans } from "@/components/home/PricingPlans";
import { ValuesStrip } from "@/components/home/ValuesStrip";
import { InsightsPreview } from "@/components/home/InsightsPreview";
import { CtaBanner } from "@/components/home/CtaBanner";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero with Live Transaction Telemetry & Neuros Radials */}
      <HeroSection />

      {/* 2. Signature Neuros Double Tilted Running Marquee Tapes */}
      <NeurosTicker />

      {/* 3. The Gap / Bankability Imperative Bento */}
      <TheGapSection />

      {/* 4. Ecosystem: Who We Sit Between */}
      <EcosystemDiagram />

      {/* 5. Our Approach: Prepare -> Structure -> Close -> Operate */}
      <ApproachStepper />

      {/* 6. Services Overview: 8 Neuros Bento Cards with Circular Arrows */}
      <ServicesGrid />

      {/* 7. Sectors We Serve */}
      <SectorsSection />

      {/* 8. Why Rhodium: 4 Neuros Gradient Feature Boxes + 7 Differentiators */}
      <WhyRhodium />

      {/* 9. Engagement Models: Neuros Signature Wide Retainer Cards */}
      <PricingPlans />

      {/* 10. Neuros Testimonial & Animated Counter Stats Strip */}
      <ValuesStrip />

      {/* 11. Insights & Research Preview */}
      <InsightsPreview />

      {/* 12. Neuros Obsidian CTA & Executive Intelligence Briefing */}
      <CtaBanner />
    </>
  );
}
