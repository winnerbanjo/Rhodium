import React from "react";
import { corporateValues } from "@/content/values";
import { ShieldCheck, Scale, Globe2, Target, Award, Quote } from "lucide-react";

export function ValuesStrip() {
  const iconMap: Record<string, React.ReactNode> = {
    ShieldCheck: <ShieldCheck className="w-5 h-5" />,
    Scale: <Scale className="w-5 h-5" />,
    Globe2: <Globe2 className="w-5 h-5" />,
    Target: <Target className="w-5 h-5" />,
    Award: <Award className="w-5 h-5" />,
  };

  return (
    <section className="py-20 lg:py-28 bg-[#0A0A0A] text-white border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Endorsement & Track Record Banner */}
        <div className="rounded-2xl bg-neutral-900/90 border border-neutral-800 p-8 sm:p-12 mb-16 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Institutional Quote */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-800 border border-neutral-700 text-xs font-mono uppercase tracking-wider text-neutral-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Institutional Endorsement</span>
              </div>

              <div className="relative">
                <p className="text-lg sm:text-xl font-heading font-medium text-white leading-relaxed">
                  &ldquo;Rhodium Impact bridges the crucial gap between national sovereign priorities and international project finance rigor. Their models survive the toughest credit committee scrutiny.&rdquo;
                </p>
              </div>

              <div className="pt-1 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-neutral-800 border border-neutral-700 text-white font-heading font-semibold flex items-center justify-center text-xs">
                  DFI
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-sm text-white">
                    Lead Infrastructure Investment Committee
                  </h4>
                  <p className="text-xs text-neutral-400 font-sans">
                    Multilateral & Sub-Saharan Development Finance Syndicate
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Clean Counters */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3.5">
              <div className="p-4 rounded-xl bg-neutral-950/70 border border-neutral-800">
                <span className="text-2xl sm:text-3xl font-heading font-bold text-white block">
                  £2.5B+
                </span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mt-1 block">
                  Structured Facilities
                </span>
              </div>

              <div className="p-4 rounded-xl bg-neutral-950/70 border border-neutral-800">
                <span className="text-2xl sm:text-3xl font-heading font-bold text-white block">
                  20+
                </span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mt-1 block">
                  Mandates Closed
                </span>
              </div>

              <div className="p-4 rounded-xl bg-neutral-950/70 border border-neutral-800">
                <span className="text-2xl sm:text-3xl font-heading font-bold text-white block">
                  10,000+
                </span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mt-1 block">
                  Agribusiness Reach
                </span>
              </div>

              <div className="p-4 rounded-xl bg-neutral-950/70 border border-neutral-800">
                <span className="text-2xl sm:text-3xl font-heading font-bold text-emerald-400 block">
                  19+
                </span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mt-1 block">
                  Years Experience
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-mono uppercase tracking-wider">
            <span>Guiding Principles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
            Our Core Values
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 font-sans">
            The non-negotiable principles that govern every transaction structure, advisory opinion, and investor introduction.
          </p>
        </div>

        {/* Values Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {corporateValues.map((val) => {
            const Icon = iconMap[val.icon] || <ShieldCheck className="w-5 h-5" />;

            return (
              <div
                key={val.id}
                className="bg-neutral-900/60 border border-neutral-800 rounded-xl p-5 flex flex-col justify-between hover:border-neutral-700 transition-colors"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-neutral-800 text-white border border-neutral-700 flex items-center justify-center mb-4">
                    {Icon}
                  </div>
                  <h3 className="font-heading font-semibold text-base text-white mb-1">
                    {val.title}
                  </h3>
                  <p className="text-[11px] text-neutral-400 font-mono mb-2.5">
                    {val.tagline}
                  </p>
                  <p className="text-xs text-neutral-400 leading-relaxed font-sans">
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
