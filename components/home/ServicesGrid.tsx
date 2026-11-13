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
    <section className="py-24 lg:py-32 bg-white dark:bg-obsidian-950 border-b border-rhodium-200/80 dark:border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Neuros Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rhodium-100 dark:bg-obsidian-900 border border-rhodium-200 dark:border-white/10 text-xs font-mono uppercase tracking-widest text-coral-500 font-bold shadow-sm">
              <span className="w-2 h-2 rounded-full bg-coral-500" />
              <span>/ Advisory Specialisms</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-obsidian-950 dark:text-white leading-[1.12]">
              Engineered Capabilities for{" "}
              <span className="neuros-gradient-text">Bankable Assets</span>
            </h2>
            <p className="text-base sm:text-lg text-rhodium-600 dark:text-rhodium-300 font-sans">
              Credit-committee-grade advisory across eight specialised practices, engineered for emerging market fiscal, FX, and regulatory frameworks.
            </p>
          </div>

          <Button
            href="/services"
            variant="neuros"
            size="md"
            className="self-start md:self-auto"
            rightIcon={<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
          >
            Explore All 8 Practices
          </Button>
        </div>

        {/* 8 Neuros Bento Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.icon] || <Coins className="w-5 h-5" />;

            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative bg-[#F0F2F4] dark:bg-obsidian-900/60 rounded-3xl p-7 border border-rhodium-200/80 dark:border-white/10 hover:border-coral-500 dark:hover:border-coral-500 hover:shadow-[0_16px_40px_rgba(241,79,68,0.12)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white dark:bg-obsidian-950 border border-rhodium-200 dark:border-white/10 text-coral-500 flex items-center justify-center group-hover:bg-coral-500 group-hover:text-white group-hover:border-coral-500 transition-all duration-300 shadow-sm">
                      {Icon}
                    </div>
                    
                    {/* Neuros Circular Arrow Badge */}
                    <div className="w-9 h-9 rounded-full bg-white dark:bg-obsidian-950 border border-rhodium-200 dark:border-white/10 text-rhodium-400 group-hover:text-white group-hover:bg-coral-500 group-hover:border-coral-500 flex items-center justify-center transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  <span className="text-xs font-mono font-bold text-rhodium-400 block mb-1">
                    PRACTICE 0{index + 1}
                  </span>

                  <h3 className="text-lg font-heading font-bold text-obsidian-950 dark:text-white group-hover:text-coral-500 transition-colors leading-snug">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-rhodium-600 dark:text-rhodium-300 leading-relaxed font-sans line-clamp-3">
                    {service.subtitle}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-rhodium-200/60 dark:border-white/10 flex items-center justify-between text-xs font-semibold text-coral-500">
                  <span>View practice dossier</span>
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
