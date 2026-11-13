import React from "react";
import Link from "next/link";
import { sectorsData } from "@/content/sectors";
import { Factory, Zap, HeartPulse, Building, GraduationCap, SunMedium, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";

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
    <section className="py-24 lg:py-32 bg-[#F0F2F4] dark:bg-obsidian-950 border-b border-rhodium-200/80 dark:border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-obsidian-900 border border-rhodium-300/80 dark:border-white/10 text-xs font-mono uppercase tracking-widest text-coral-500 font-bold shadow-sm">
              <span className="w-2 h-2 rounded-full bg-coral-500" />
              <span>/ Sector Specialisations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-obsidian-950 dark:text-white leading-[1.12]">
              Sectors We <span className="neuros-gradient-text">Serve</span>
            </h2>
            <p className="text-base sm:text-lg text-rhodium-600 dark:text-rhodium-300 font-sans">
              Each infrastructure sub-sector carries distinct revenue dynamics and regulatory risks. We engineer customized bankability architectures for each.
            </p>
          </div>

          <Button
            href="/sectors"
            variant="neuros"
            size="md"
            className="self-start md:self-auto"
            rightIcon={<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
          >
            All Sector Profiles
          </Button>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectorsData.map((sector) => {
            const Icon = iconMap[sector.icon] || <Factory className="w-5 h-5" />;

            return (
              <div
                key={sector.id}
                className="group bg-white dark:bg-obsidian-900/60 rounded-3xl p-7 border border-rhodium-200/80 dark:border-white/10 hover:border-coral-500 hover:shadow-[0_16px_40px_rgba(241,79,68,0.12)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#F0F2F4] dark:bg-obsidian-950 text-coral-500 border border-rhodium-200 dark:border-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-sm">
                      {Icon}
                    </div>
                    
                    <div className="w-8 h-8 rounded-full bg-[#F0F2F4] dark:bg-obsidian-950 border border-rhodium-200 dark:border-white/10 text-rhodium-400 group-hover:bg-coral-500 group-hover:text-white group-hover:border-coral-500 flex items-center justify-center transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-obsidian-950 dark:text-white leading-snug">
                    {sector.name}
                  </h3>
                  <p className="text-xs text-coral-600 dark:text-coral-400 font-semibold font-mono mt-1 mb-3">
                    {sector.tagline}
                  </p>

                  <p className="text-sm text-rhodium-600 dark:text-rhodium-300 line-clamp-3 leading-relaxed mb-6 font-sans">
                    {sector.overview}
                  </p>

                  <div className="p-4 rounded-2xl bg-[#F0F2F4] dark:bg-obsidian-950 border border-rhodium-200/60 dark:border-white/10 space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-coral-500 font-bold block">
                      Bankability Focus:
                    </span>
                    <div className="space-y-1.5">
                      {sector.keyFocusAreas.slice(0, 2).map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-obsidian-900 dark:text-rhodium-300 font-sans">
                          <Check className="w-3.5 h-3.5 text-coral-500 flex-shrink-0 mt-0.5" />
                          <span className="leading-tight">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-rhodium-200/60 dark:border-white/10 flex items-center justify-between">
                  <Link
                    href={`/sectors#${sector.id}`}
                    className="text-xs font-bold text-coral-500 hover:text-coral-600 inline-flex items-center gap-1.5"
                  >
                    <span>Read sector solutions</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <span className="text-[10px] font-mono text-rhodium-400 uppercase">
                    EM MANDATES
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
