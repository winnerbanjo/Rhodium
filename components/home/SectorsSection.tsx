import React from "react";
import Link from "next/link";
import Image from "next/image";
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
    <section className="py-20 lg:py-28 bg-neutral-50 dark:bg-[#0E0E0E] border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-mono uppercase tracking-wider text-neutral-800 dark:text-neutral-300">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white" />
              <span>Infrastructure Sectors</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-neutral-900 dark:text-white leading-[1.12]">
              Sectors We Serve
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 font-sans">
              Each infrastructure sub-sector carries distinct revenue dynamics and regulatory risks. We engineer customized bankability architectures for each.
            </p>
          </div>

          <Button
            href="/sectors"
            variant="primary"
            size="md"
            className="self-start md:self-auto bg-neutral-900 text-white hover:bg-black font-medium"
            rightIcon={<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
          >
            All Sector Profiles
          </Button>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {sectorsData.map((sector) => {
            const Icon = iconMap[sector.icon] || <Factory className="w-5 h-5" />;

            return (
              <div
                key={sector.id}
                className="group bg-white dark:bg-neutral-900/80 rounded-xl p-6 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-900 dark:hover:border-neutral-600 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md"
              >
                <div>
                  {/* Photo Header */}
                  {sector.image ? (
                    <div className="relative h-44 -mx-6 -mt-6 mb-5 overflow-hidden bg-neutral-950">
                      <Image
                        src={sector.image}
                        alt={sector.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#171717] via-transparent to-black/30" />
                      <div className="absolute top-3 left-3 w-9 h-9 rounded-lg bg-neutral-950/85 backdrop-blur-md text-white border border-neutral-700/60 flex items-center justify-center shadow-lg">
                        {Icon}
                      </div>
                      <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-neutral-950/70 backdrop-blur-md border border-neutral-700 text-neutral-300 group-hover:text-white flex items-center justify-center transition-colors">
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-10 h-10 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-700 flex items-center justify-center transition-colors">
                        {Icon}
                      </div>
                      <div className="w-7 h-7 rounded-full bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white flex items-center justify-center transition-colors">
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  )}

                  <h3 className="font-heading font-semibold text-lg text-neutral-900 dark:text-white leading-snug">
                    {sector.name}
                  </h3>
                  <p className="text-xs text-neutral-500 font-mono mt-0.5 mb-2.5">
                    {sector.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 line-clamp-3 leading-relaxed mb-5 font-sans">
                    {sector.overview}
                  </p>

                  <div className="p-3.5 rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 font-medium block">
                      Bankability Focus:
                    </span>
                    <div className="space-y-1.5">
                      {sector.keyFocusAreas.slice(0, 2).map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-neutral-700 dark:text-neutral-300 font-sans">
                          <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span className="leading-tight">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
                  <Link
                    href={`/sectors#${sector.id}`}
                    className="text-xs font-medium text-neutral-900 dark:text-white hover:underline inline-flex items-center gap-1.5"
                  >
                    <span>Sector solutions</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <span className="text-[10px] font-mono text-neutral-400 uppercase">
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
