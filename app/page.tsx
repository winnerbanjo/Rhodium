import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { TheGapSection } from "@/components/home/TheGapSection";
import { EcosystemDiagram } from "@/components/home/EcosystemDiagram";
import { ApproachStepper } from "@/components/home/ApproachStepper";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { SectorsSection } from "@/components/home/SectorsSection";
import { WhyRhodium } from "@/components/home/WhyRhodium";
import { ValuesStrip } from "@/components/home/ValuesStrip";
import { InsightsPreview } from "@/components/home/InsightsPreview";
import { CtaBanner } from "@/components/home/CtaBanner";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. The Gap */}
      <TheGapSection />

      {/* 3. Who We Sit Between */}
      <EcosystemDiagram />

      {/* 4. Our Approach: Prepare -> Structure -> Close -> Operate */}
      <ApproachStepper />

      {/* 5. Services Overview: 8 Cards */}
      <ServicesGrid />

      {/* 6. Sectors We Serve */}
      <SectorsSection />

      {/* 7. Why Rhodium: 7 Differentiators */}
      <WhyRhodium />

      {/* 8. Values Strip */}
      <ValuesStrip />

      {/* 9. Insights Preview: 3 Latest Posts */}
      <InsightsPreview />

      {/* 10 & 11. CTA Banner & Newsletter */}
      <CtaBanner />
    </>
  );
}
