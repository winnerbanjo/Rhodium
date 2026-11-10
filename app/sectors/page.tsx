import React from "react";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { sectorsData } from "@/content/sectors";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import {
  Factory,
  Zap,
  HeartPulse,
  Building,
  GraduationCap,
  SunMedium,
  AlertTriangle,
  Coins,
  ShieldAlert,
  Network,
  CheckCircle2,
  Calendar,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sectors We Serve | Infrastructure Advisory Practices",
  description:
    "In-depth analysis of bankability challenges and transaction solutions across Free Trade Zones, Power & Utilities, Healthcare, Social Infrastructure, Education, and the Energy Transition.",
};

export default function SectorsPage() {
  const iconMap: Record<string, React.ReactNode> = {
    Factory: <Factory className="w-6 h-6" />,
    Zap: <Zap className="w-6 h-6" />,
    HeartPulse: <HeartPulse className="w-6 h-6" />,
    Building: <Building className="w-6 h-6" />,
    GraduationCap: <GraduationCap className="w-6 h-6" />,
    SunMedium: <SunMedium className="w-6 h-6" />,
  };

  return (
    <div className="bg-white dark:bg-navy-900 pb-20">
      {/* Header */}
      <div className="bg-rhodium-50 dark:bg-navy-950 border-b border-rhodium-200 dark:border-navy-800 py-10 lg:py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Sectors" }]} />
          <div className="max-w-3xl mt-4 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
              Sector Specialisation
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy-900 dark:text-white leading-tight">
              Physical & Social Infrastructure Sectors
            </h1>
            <p className="text-base sm:text-lg text-rhodium-600 dark:text-rhodium-300 leading-relaxed">
              We apply specialized asset-class expertise to resolve the commercial, regulatory, and financial bottlenecks that delay capital deployment across emerging markets.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-16">
        {sectorsData.map((sector) => {
          const Icon = iconMap[sector.icon] || <Factory className="w-6 h-6" />;

          return (
            <section
              key={sector.id}
              id={sector.id}
              className="scroll-mt-24 p-8 sm:p-10 rounded-xl border border-rhodium-200 dark:border-navy-800 bg-white dark:bg-navy-900 shadow-card"
            >
              {/* Sector Title Bar */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-rhodium-100 dark:border-navy-800">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-400 flex items-center justify-center flex-shrink-0">
                    {Icon}
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-900 dark:text-white">
                      {sector.name}
                    </h2>
                    <p className="text-xs sm:text-sm font-semibold text-brass-600 dark:text-brass-400 mt-0.5">
                      {sector.tagline}
                    </p>
                  </div>
                </div>

                <Button
                  href={`/book?sector=${encodeURIComponent(sector.id)}`}
                  variant="outline"
                  size="sm"
                  leftIcon={<Calendar className="w-3.5 h-3.5" />}
                >
                  Book Sector Scoping
                </Button>
              </div>

              {/* Sector Overview */}
              <div className="pt-6 pb-8">
                <p className="text-sm sm:text-base text-rhodium-700 dark:text-rhodium-200 leading-relaxed max-w-4xl">
                  {sector.overview}
                </p>
              </div>

              {/* Bankability Challenges vs How We Help */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left: Typical Bankability Hurdles */}
                <div className="lg:col-span-5 bg-red-50/40 dark:bg-red-950/20 p-6 rounded-lg border border-red-200/60 dark:border-red-900/40 space-y-4">
                  <div className="flex items-center gap-2 text-red-700 dark:text-red-400">
                    <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                    <h3 className="text-sm font-serif font-bold uppercase tracking-wider">
                      Typical Bankability Challenges
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {sector.bankabilityChallenges.map((challenge, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-rhodium-700 dark:text-rhodium-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                        <span className="leading-relaxed">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: How Rhodium Helps (3 Pillars) */}
                <div className="lg:col-span-7 bg-rhodium-50/60 dark:bg-navy-950/60 p-6 rounded-lg border border-rhodium-200 dark:border-navy-800 space-y-5">
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 block">
                    Our Transaction Interventions
                  </span>

                  <div className="space-y-4">
                    {/* 1. Investor Connectivity */}
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-navy-900 dark:text-white font-serif font-bold text-sm">
                        <Network className="w-4 h-4 text-teal-700 dark:text-teal-400" />
                        <h4>Investor & DFI Connectivity</h4>
                      </div>
                      <p className="text-xs sm:text-sm text-rhodium-600 dark:text-rhodium-300 pl-6 leading-relaxed">
                        {sector.howWeHelp.investorConnectivity}
                      </p>
                    </div>

                    {/* 2. Risk Modelling */}
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-navy-900 dark:text-white font-serif font-bold text-sm">
                        <ShieldAlert className="w-4 h-4 text-brass-600 dark:text-brass-400" />
                        <h4>Risk Modelling & Tariff Sensitivity</h4>
                      </div>
                      <p className="text-xs sm:text-sm text-rhodium-600 dark:text-rhodium-300 pl-6 leading-relaxed">
                        {sector.howWeHelp.riskModelling}
                      </p>
                    </div>

                    {/* 3. Capital Mix Strategy */}
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-navy-900 dark:text-white font-serif font-bold text-sm">
                        <Coins className="w-4 h-4 text-teal-700 dark:text-teal-400" />
                        <h4>Capital Mix & Local Currency Strategy</h4>
                      </div>
                      <p className="text-xs sm:text-sm text-rhodium-600 dark:text-rhodium-300 pl-6 leading-relaxed">
                        {sector.howWeHelp.capitalMixStrategy}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Focus Areas Badges */}
              <div className="mt-6 pt-5 border-t border-rhodium-100 dark:border-navy-800 flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-rhodium-400 mr-2">
                  Specialized Sub-Sectors:
                </span>
                {sector.keyFocusAreas.map((area, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-rhodium-100 dark:bg-navy-800 text-navy-900 dark:text-rhodium-200"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
