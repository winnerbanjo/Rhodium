import React from "react";
import Link from "next/link";
import { sectorsData } from "@/content/sectors";
import { Factory, Zap, HeartPulse, Building, GraduationCap, SunMedium, ArrowRight, ChevronRight, Check } from "lucide-react";

export function SectorsSection() {
  const iconMap: Record<string, React.ReactNode> = {
    Factory: <Factory className="w-5 h-5" />,
    Zap: <Zap className="w-5 h-5" />,
    HeartPulse: <HeartPulse className="w-5 h-5" />,
    Building: <Building className="w-5 h-5" />,
    GraduationCap: <GraduationCap className="w-5 h-5" />,
    SunMedium: <SunMedium className="w-5 h-5" />,
  };

  return (
    <section className="py-24 lg:py-32 bg-white dark:bg-navy-950 border-b border-rhodium-100 dark:border-navy-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/80 border border-teal-200 dark:border-teal-800 text-teal-800 dark:text-teal-300 text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-teal-600" />
              <span>Asset Class Expertise</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-navy-950 dark:text-white leading-[1.15]">
              Sectors We Serve
            </h2>
            <p className="text-base sm:text-lg text-rhodium-600 dark:text-rhodium-300">
              Each infrastructure sub-sector carries distinct revenue dynamics and regulatory risks. We engineer customized bankability architectures for each.
            </p>
          </div>

          <Link
            href="/sectors"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-rhodium-50 dark:bg-navy-900 border border-rhodium-200 dark:border-navy-700 text-sm font-semibold text-teal-700 dark:text-teal-300 hover:bg-teal-50 dark:hover:bg-navy-800 transition-all shadow-sm self-start md:self-auto"
          >
            <span>View All Sector Profiles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectorsData.map((sector) => {
            const Icon = iconMap[sector.icon] || <Factory className="w-5 h-5" />;

            return (
              <div
                key={sector.id}
                className="group bg-rhodium-50/60 dark:bg-navy-900/40 rounded-3xl p-7 border border-rhodium-200/80 dark:border-navy-800 hover:bg-white dark:hover:bg-navy-900 hover:border-teal-500/40 hover:shadow-[0_16px_40px_rgba(11,31,58,0.08)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-5">
                    <div className="w-11 h-11 rounded-2xl bg-teal-50 dark:bg-teal-950/80 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                      {Icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-navy-950 dark:text-white leading-snug">
                        {sector.name}
                      </h3>
                      <p className="text-xs text-rhodium-500 font-medium">
                        {sector.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-rhodium-600 dark:text-rhodium-300 line-clamp-3 leading-relaxed mb-6">
                    {sector.overview}
                  </p>

                  <div className="p-4 rounded-2xl bg-white dark:bg-navy-950 border border-rhodium-200/60 dark:border-navy-800/80 space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-teal-700 dark:text-teal-400 font-bold block">
                      Bankability Focus:
                    </span>
                    <div className="space-y-1.5">
                      {sector.keyFocusAreas.slice(0, 2).map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-rhodium-700 dark:text-rhodium-300">
                          <Check className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 flex-shrink-0 mt-0.5" />
                          <span className="leading-tight">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-rhodium-200/60 dark:border-navy-800/80 flex items-center justify-between">
                  <Link
                    href={`/sectors#${sector.id}`}
                    className="text-xs font-bold text-teal-700 dark:text-teal-400 hover:underline inline-flex items-center gap-1.5"
                  >
                    <span>Read sector solutions</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                  <span className="text-[10px] font-mono text-rhodium-400">
                    Emerging Markets
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
