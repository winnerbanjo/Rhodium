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
  ChevronRight,
} from "lucide-react";

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
    <section className="py-24 lg:py-32 bg-rhodium-50/50 dark:bg-navy-950/60 border-b border-rhodium-200/80 dark:border-navy-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100/70 dark:bg-teal-950/80 border border-teal-200 dark:border-teal-800 text-teal-800 dark:text-teal-300 text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-teal-600" />
              <span>Institutional Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-navy-950 dark:text-white leading-[1.15]">
              Advisory Practices
            </h2>
            <p className="text-base sm:text-lg text-rhodium-600 dark:text-rhodium-300">
              Credit-committee-grade advisory across eight specialised domains, engineered for emerging market fiscal, FX, and regulatory frameworks.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white dark:bg-navy-900 border border-rhodium-200 dark:border-navy-700 text-sm font-semibold text-teal-700 dark:text-teal-300 hover:bg-teal-50 dark:hover:bg-navy-800 transition-all shadow-sm self-start md:self-auto"
          >
            <span>Explore All 8 Practices</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 8 Bento Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.icon] || <Coins className="w-5 h-5" />;

            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative bg-white dark:bg-navy-900 rounded-3xl p-6 sm:p-7 border border-rhodium-200/80 dark:border-navy-800/90 shadow-[0_4px_24px_rgba(11,31,58,0.04)] hover:shadow-[0_16px_40px_rgba(11,31,58,0.1)] hover:border-teal-500/50 dark:hover:border-teal-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-rhodium-50 dark:bg-navy-950 border border-rhodium-200/70 dark:border-navy-800 text-navy-900 dark:text-teal-400 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white group-hover:border-teal-600 transition-all duration-300">
                      {Icon}
                    </div>
                    <span className="text-xs font-mono font-bold text-rhodium-400 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-navy-950 dark:text-white group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors leading-snug">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-rhodium-600 dark:text-rhodium-300 leading-relaxed line-clamp-3">
                    {service.subtitle}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-rhodium-100 dark:border-navy-800 flex items-center justify-between text-xs font-semibold text-teal-700 dark:text-teal-400 group-hover:text-teal-600">
                  <span>View practice dossier</span>
                  <div className="w-7 h-7 rounded-full bg-rhodium-50 dark:bg-navy-950 group-hover:bg-teal-50 dark:group-hover:bg-teal-950 flex items-center justify-center transition-colors">
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
