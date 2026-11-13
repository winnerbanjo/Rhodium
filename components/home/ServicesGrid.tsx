import React from "react";
import Link from "next/link";
import { servicesData } from "@/content/services";
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
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export function ServicesGrid() {
  const iconMap: Record<string, React.ReactNode> = {
    Coins: <Coins className="w-5 h-5" />,
    TrendingUp: <TrendingUp className="w-5 h-5" />,
    Compass: <Compass className="w-5 h-5" />,
    Building2: <Building2 className="w-5 h-5" />,
    Zap: <Zap className="w-5 h-5" />,
    ShieldAlert: <ShieldAlert className="w-5 h-5" />,
    Leaf: <Leaf className="w-5 h-5" />,
    GraduationCap: <GraduationCap className="w-5 h-5" />,
  };

  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-[#0A0A0A] border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-mono uppercase tracking-wider text-neutral-800 dark:text-neutral-300">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white" />
              <span>Advisory Practices</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-neutral-900 dark:text-white leading-[1.12]">
              Engineered Capabilities for Bankable Assets
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 font-sans">
              Credit-committee-grade advisory across eight specialised practices, engineered for emerging market fiscal, FX, and regulatory frameworks.
            </p>
          </div>

          <Button
            href="/services"
            variant="primary"
            size="md"
            className="self-start md:self-auto bg-neutral-900 text-white hover:bg-black font-medium"
            rightIcon={<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
          >
            Explore All 8 Practices
          </Button>
        </div>

        {/* 8 Bento Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.icon] || <Coins className="w-5 h-5" />;

            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative bg-neutral-50 dark:bg-neutral-900/60 rounded-xl p-6 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-900 dark:hover:border-white transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white flex items-center justify-center transition-colors shadow-sm">
                      {Icon}
                    </div>
                    
                    <div className="w-7 h-7 rounded-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white flex items-center justify-center transition-colors">
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  <span className="text-[11px] font-mono text-neutral-400 block mb-1">
                    PRACTICE 0{index + 1}
                  </span>

                  <h3 className="text-base font-heading font-semibold text-neutral-900 dark:text-white leading-snug">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans line-clamp-3">
                    {service.subtitle}
                  </p>
                </div>

                <div className="mt-6 pt-3.5 border-t border-neutral-200/80 dark:border-neutral-800 flex items-center justify-between text-xs font-medium text-neutral-800 dark:text-neutral-200">
                  <span>Practice dossier</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
