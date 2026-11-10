import React from "react";
import { corporateValues } from "@/content/values";
import { ShieldCheck, Scale, Globe2, Target, Award } from "lucide-react";

export function ValuesStrip() {
  const iconMap: Record<string, React.ReactNode> = {
    ShieldCheck: <ShieldCheck className="w-5 h-5" />,
    Scale: <Scale className="w-5 h-5" />,
    Globe2: <Globe2 className="w-5 h-5" />,
    Target: <Target className="w-5 h-5" />,
    Award: <Award className="w-5 h-5" />,
  };

  return (
    <section className="py-20 lg:py-28 bg-navy-950 text-white border-b border-navy-800/80 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brass-300 text-xs font-semibold uppercase tracking-wider">
            <span>Guiding Principles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Our Core Values
          </h2>
          <p className="text-sm sm:text-base text-rhodium-300">
            The non-negotiable principles that govern every transaction structure, advisory opinion, and investor introduction.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {corporateValues.map((val) => {
            const Icon = iconMap[val.icon] || <ShieldCheck className="w-5 h-5" />;

            return (
              <div
                key={val.id}
                className="bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between group hover:border-teal-400/40 hover:-translate-y-1"
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-teal-500/20 text-teal-300 border border-teal-500/30 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                    {Icon}
                  </div>
                  <h3 className="font-bold text-lg text-white mb-1.5">
                    {val.title}
                  </h3>
                  <p className="text-xs text-brass-300 font-semibold mb-3">
                    {val.tagline}
                  </p>
                  <p className="text-xs text-rhodium-300 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
