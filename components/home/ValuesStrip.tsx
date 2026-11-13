import React from "react";
import { corporateValues } from "@/content/values";
import { ShieldCheck, Scale, Globe2, Target, Award, Quote, CheckCircle2 } from "lucide-react";

export function ValuesStrip() {
  const iconMap: Record<string, React.ReactNode> = {
    ShieldCheck: <ShieldCheck className="w-5 h-5" />,
    Scale: <Scale className="w-5 h-5" />,
    Globe2: <Globe2 className="w-5 h-5" />,
    Target: <Target className="w-5 h-5" />,
    Award: <Award className="w-5 h-5" />,
  };

  return (
    <section className="py-24 lg:py-32 bg-obsidian-950 text-white border-b border-white/10 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-coral-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Neuros Testimonial & Institutional Track Record Banner */}
        <div className="rounded-3xl bg-obsidian-900 border border-white/15 p-8 sm:p-12 lg:p-16 mb-20 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Institutional Quote */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-coral-400 font-bold">
                <span className="w-2 h-2 rounded-full bg-coral-500 animate-pulse" />
                <span>/ Institutional Endorsement</span>
              </div>

              <div className="relative">
                <Quote className="w-12 h-12 text-coral-500/30 absolute -top-4 -left-3 -z-10" />
                <p className="text-xl sm:text-2xl font-heading font-medium text-white leading-relaxed">
                  &ldquo;Rhodium Impact bridges the crucial gap between national sovereign priorities and international project finance rigor. Their models survive the toughest credit committee scrutiny.&rdquo;
                </p>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-coral-500 to-cobalt-500 text-white font-heading font-bold flex items-center justify-center text-sm shadow-md">
                  DFI
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-white">
                    Lead Infrastructure Investment Committee
                  </h4>
                  <p className="text-xs text-rhodium-400 font-sans">
                    Multilateral & Sub-Saharan Development Finance Syndicate
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Neuros Counters */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                <span className="text-3xl sm:text-4xl font-heading font-black text-white block neuros-gradient-text">
                  £2.5B+
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-rhodium-400 mt-1 block">
                  Structured Facilities
                </span>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                <span className="text-3xl sm:text-4xl font-heading font-black text-white block text-coral-400">
                  20+
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-rhodium-400 mt-1 block">
                  Mandates Closed
                </span>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                <span className="text-3xl sm:text-4xl font-heading font-black text-white block text-cobalt-400">
                  10,000+
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-rhodium-400 mt-1 block">
                  Agribusiness Beneficiaries
                </span>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                <span className="text-3xl sm:text-4xl font-heading font-black text-white block text-emerald-400">
                  19+
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-rhodium-400 mt-1 block">
                  Years Experience
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-coral-400 text-xs font-mono uppercase tracking-widest font-bold">
            <span>/ Guiding Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white">
            Our Core <span className="neuros-gradient-text">Values</span>
          </h2>
          <p className="text-sm sm:text-base text-rhodium-300 font-sans">
            The non-negotiable principles that govern every transaction structure, advisory opinion, and investor introduction.
          </p>
        </div>

        {/* Values Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {corporateValues.map((val) => {
            const Icon = iconMap[val.icon] || <ShieldCheck className="w-5 h-5" />;

            return (
              <div
                key={val.id}
                className="bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between group hover:border-coral-500/50 hover:-translate-y-1"
              >
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-coral-500/20 text-coral-400 border border-coral-500/30 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                    {Icon}
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white mb-1.5">
                    {val.title}
                  </h3>
                  <p className="text-xs text-coral-400 font-mono font-semibold mb-3">
                    {val.tagline}
                  </p>
                  <p className="text-xs text-rhodium-300 leading-relaxed font-sans">
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
