import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { servicesData } from "@/content/services";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  Coins,
  TrendingUp,
  Compass,
  Building2,
  Zap,
  ShieldAlert,
  Leaf,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Advisory Practices & Services | Rhodium Impact",
  description:
    "Comprehensive overview of Rhodium Impact's eight specialized infrastructure advisory practices across emerging markets, from capital structuring to energy transition.",
};

export default function ServicesPage() {
  const iconMap: Record<string, React.ReactNode> = {
    Coins: <Coins className="w-6 h-6" />,
    TrendingUp: <TrendingUp className="w-6 h-6" />,
    Compass: <Compass className="w-6 h-6" />,
    Building2: <Building2 className="w-6 h-6" />,
    Zap: <Zap className="w-6 h-6" />,
    ShieldAlert: <ShieldAlert className="w-6 h-6" />,
    Leaf: <Leaf className="w-6 h-6" />,
    GraduationCap: <GraduationCap className="w-6 h-6" />,
  };

  return (
    <div className="bg-white dark:bg-navy-900 pb-20">
      {/* Header with Breadcrumb */}
      <div className="bg-rhodium-50 dark:bg-navy-950 border-b border-rhodium-200 dark:border-navy-800 py-10 lg:py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Services" }]} />
          <div className="max-w-3xl mt-4 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
              Transaction Capabilities
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy-900 dark:text-white leading-tight">
              Eight Specialized Advisory Practices
            </h1>
            <p className="text-base sm:text-lg text-rhodium-600 dark:text-rhodium-300 leading-relaxed">
              We provide senior-led advisory across the full infrastructure transaction lifecycle. Every practice is engineered to address the specific bankability bottlenecks of emerging markets.
            </p>
          </div>
        </div>
      </div>

      {/* Grid of 8 Services */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service, idx) => {
            const Icon = iconMap[service.icon] || <Coins className="w-6 h-6" />;

            return (
              <Card
                key={service.slug}
                hoverEffect
                className="flex flex-col justify-between p-8 border-rhodium-200 dark:border-navy-800 hover:border-teal-700/60"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-lg bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-400 flex items-center justify-center">
                      {Icon}
                    </div>
                    <span className="text-xs font-mono font-bold text-rhodium-400">
                      0{idx + 1}
                    </span>
                  </div>

                  <CardTitle className="text-xl sm:text-2xl mb-2">
                    {service.title}
                  </CardTitle>

                  <p className="text-xs sm:text-sm font-semibold text-brass-600 dark:text-brass-400 mb-4">
                    &ldquo;{service.subtitle}&rdquo;
                  </p>

                  <CardDescription className="text-sm leading-relaxed mb-6">
                    {service.summary}
                  </CardDescription>

                  {/* Highlights */}
                  <div className="space-y-2 pt-2 border-t border-rhodium-100 dark:border-navy-800">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-rhodium-400 block mb-2">
                      Key Capabilities:
                    </span>
                    {service.whatWeDo.slice(0, 3).map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-rhodium-700 dark:text-rhodium-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-rhodium-100 dark:border-navy-800 flex items-center justify-between">
                  <span className="text-xs text-rhodium-500">
                    {service.typicalClients.length} typical client profiles
                  </span>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 dark:text-teal-400 hover:underline"
                  >
                    <span>View Full Practice Scope</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Global CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-navy-900 to-teal-950 text-white rounded-xl p-8 sm:p-12 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold">
            Need Advisory Across Multiple Stages?
          </h2>
          <p className="text-sm sm:text-base text-rhodium-200 max-w-xl mx-auto">
            Most of our clients engage us across integrated packages, such as combining feasibility preparation with capital stack structuring and lender syndication.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Button href="/book" variant="accent" size="lg">
              Book a Consultation
            </Button>
            <Button href="/contact" variant="outline" size="lg" className="text-white border-white/30">
              Submit a Request for Proposal (RFP)
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
