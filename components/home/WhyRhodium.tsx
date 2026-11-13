import React from "react";
import { whyRhodiumDifferentiators } from "@/content/values";
import { Eye, Zap, Coins, Compass, Users, GraduationCap, Rocket, CheckCircle2, ArrowUpRight } from "lucide-react";

export function WhyRhodium() {
  const iconMap: Record<string, React.ReactNode> = {
    Eye: <Eye className="w-5 h-5" />,
    Zap: <Zap className="w-5 h-5" />,
    Coins: <Coins className="w-5 h-5" />,
    Compass: <Compass className="w-5 h-5" />,
    Users: <Users className="w-5 h-5" />,
    GraduationCap: <GraduationCap className="w-5 h-5" />,
    Rocket: <Rocket className="w-5 h-5" />,
  };

  // Neuros 4 Unique Selling Points
  const usps = [
    {
      title: "Tailored Transaction Solutions",
      desc: "Customized capital stack engineering, debt syndication, and concession models tuned to specific sub-Saharan jurisdictions.",
      icon: (
        <svg viewBox="0 0 38 37" fill="none" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.5 17.9C5.1 17.9 3.1 16 3.1 13.7C3.1 11.3 5.1 9.4 7.5 9.4C9.9 9.4 11.9 11.3 11.9 13.7C11.9 16 9.9 17.9 7.5 17.9Z" stroke="url(#paint0_neuros)" strokeWidth="1.8" />
          <path d="M9.3 29.7H1.6C0.7 29.7 0 29 0 28.1V26.2C0 22.2 3.4 18.9 7.5 18.9C9.1 18.9 10.7 19.4 12 20.4" stroke="url(#paint0_neuros)" strokeWidth="1.8" />
          <path d="M30.5 17.6C28.1 17.6 26.1 15.7 26.1 13.4C26.1 11 28.1 9.1 30.5 9.1C32.9 9.1 34.9 11 34.9 13.4C34.9 15.7 32.9 17.6 30.5 17.6Z" stroke="url(#paint0_neuros)" strokeWidth="1.8" />
          <path d="M28.7 29.2H36.4C37.3 29.2 38 28.5 38 27.7V25.7C38 21.7 34.6 18.5 30.5 18.5C29 18.5 27.6 19 26.5 20.1" stroke="url(#paint0_neuros)" strokeWidth="1.8" />
          <path d="M19 16.3C15.7 16.3 13.1 13.8 13.1 10.8C13.1 7.8 15.7 5.4 19 5.4C22.3 5.4 24.9 7.8 24.9 10.8C24.9 13.8 22.3 16.3 19 16.3Z" stroke="url(#paint0_neuros)" strokeWidth="1.8" />
          <defs>
            <linearGradient id="paint0_neuros" x1="0" y1="0" x2="38" y2="37" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F14F44" />
              <stop offset="1" stopColor="#386BB7" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      title: "FAST-Audited Financial Models",
      desc: "Robust, audited project finance models built to international FAST standards, stress-tested against severe macro, FX, and tariff shocks.",
      icon: (
        <svg viewBox="0 0 23 23" fill="none" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.7 0H7.2C7.6 0 7.9 0.3 7.9 0.7V7.2C7.9 7.6 7.6 7.9 7.2 7.9H0.7C0.3 7.9 0 7.6 0 7.2V0.7C0 0.3 0.3 0 0.7 0Z" stroke="url(#paint1_neuros)" strokeWidth="1.8" />
          <path d="M15.8 0H22.3C22.7 0 23 0.3 23 0.7V7.2C23 7.6 22.7 7.9 22.3 7.9H15.8C15.4 7.9 15.1 7.6 15.1 7.2V0.7C15.1 0.3 15.4 0 15.8 0Z" stroke="url(#paint1_neuros)" strokeWidth="1.8" />
          <path d="M15.8 15.1H22.3C22.7 15.1 23 15.4 23 15.8V22.3C23 22.7 22.7 23 22.3 23H15.8C15.4 23 15.1 22.7 15.1 22.3V15.8C15.1 15.4 15.4 15.1 15.8 15.1Z" stroke="url(#paint1_neuros)" strokeWidth="1.8" />
          <path d="M0.7 15.1H7.2C7.6 15.1 7.9 15.4 7.9 15.8V22.3C7.9 22.7 7.6 23 7.2 23H0.7C0.3 23 0 22.7 0 22.3V15.8C0 15.4 0.3 15.1 0.7 15.1Z" stroke="url(#paint1_neuros)" strokeWidth="1.8" />
          <defs>
            <linearGradient id="paint1_neuros" x1="0" y1="0" x2="23" y2="23" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F14F44" />
              <stop offset="1" stopColor="#386BB7" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      title: "Proven Transaction Track Record",
      desc: "Over £2.5B+ in structured facilities executed, including Osun State ₦5B+ AGSMEIS, $5M agricultural procurement, and regional power mandates.",
      icon: (
        <svg viewBox="0 0 26 26" fill="none" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.6 0.8L24.6 1.4C25 1.5 25.2 1.8 25.2 2.2L24.6 7.1C24.5 7.5 24.2 7.7 23.8 7.7L23.6 3.7L13.7 11.4V22.8L16 20.5C16.3 20.2 16.7 20.3 17 20.5C17.2 20.8 17.2 21.2 17 21.5L13.5 25C13.2 25.3 12.8 25.3 12.5 25L9 21.5C8.8 21.2 8.8 20.8 9 20.5C9.3 20.2 9.8 20.2 10 20.5L12.3 22.8V11.5L2.4 3.7L2.8 6.9C2.9 7.3 2.6 7.6 2.2 7.7C1.8 7.7 1.5 7.5 1.4 7.1L0.8 2.2C0.8 1.8 1 1.5 1.4 1.4L6.3 0.8C6.7 0.8 7 1 7.1 1.4C7.1 1.8 6.9 2.2 6.5 2.2L3.3 2.6L13 10.2L22.7 2.6L19.5 2.2C19.1 2.2 18.9 1.8 18.9 1.4C19 1.1 19.2 0.8 19.6 0.8Z" fill="url(#paint2_neuros)" />
          <defs>
            <linearGradient id="paint2_neuros" x1="0" y1="0" x2="26" y2="26" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F14F44" />
              <stop offset="1" stopColor="#386BB7" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      title: "Senior-Led Mandate Execution",
      desc: "Partners with 19+ years in institutional banking, risk asset management ($7M+), liability generation ($10.5M+), and global fund finance.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="url(#paint3_neuros)" strokeWidth="1.8" />
          <path d="M12 6V12L16 14" stroke="url(#paint3_neuros)" strokeWidth="1.8" strokeLinecap="round" />
          <defs>
            <linearGradient id="paint3_neuros" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F14F44" />
              <stop offset="1" stopColor="#386BB7" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-white dark:bg-obsidian-950 border-b border-rhodium-200/80 dark:border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rhodium-100 dark:bg-obsidian-900 border border-rhodium-200 dark:border-white/10 text-xs font-mono uppercase tracking-widest text-coral-500 font-bold shadow-sm">
            <span className="w-2 h-2 rounded-full bg-coral-500" />
            <span>/ Institutional Distinction</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-obsidian-950 dark:text-white leading-[1.12]">
            Why <span className="neuros-gradient-text">Rhodium Impact</span>
          </h2>

          <p className="text-base sm:text-lg text-rhodium-600 dark:text-rhodium-300 leading-relaxed font-sans">
            We are not a generic management consultancy. We are credit-committee-grade transaction specialists purpose-built for the commercial and sovereign realities of emerging markets.
          </p>
        </div>

        {/* Neuros 4-Box Feature Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {usps.map((usp, i) => (
            <div
              key={i}
              className="bg-[#F0F2F4] dark:bg-obsidian-900/60 rounded-3xl p-8 border border-rhodium-200/80 dark:border-white/10 hover:border-coral-500 transition-all duration-300 flex flex-col justify-between group hover:shadow-[0_16px_40px_rgba(241,79,68,0.12)]"
            >
              <div>
                <div className="w-16 h-16 rounded-2xl bg-white dark:bg-obsidian-950 border border-rhodium-200 dark:border-white/10 flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform">
                  {usp.icon}
                </div>
                <h3 className="font-heading font-bold text-lg text-obsidian-950 dark:text-white mb-2 leading-snug">
                  {usp.title}
                </h3>
                <p className="text-xs sm:text-sm text-rhodium-600 dark:text-rhodium-300 leading-relaxed font-sans">
                  {usp.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyRhodiumDifferentiators.map((diff, index) => {
            const Icon = iconMap[diff.icon] || <Eye className="w-5 h-5" />;
            const isFeatured = index === 0;

            return (
              <div
                key={diff.id}
                className={`rounded-3xl p-8 border transition-all duration-300 flex flex-col justify-between ${
                  isFeatured
                    ? "md:col-span-2 lg:col-span-2 bg-gradient-to-br from-obsidian-950 via-obsidian-900 to-obsidian-950 text-white border-coral-500/40 shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
                    : "bg-[#F0F2F4] dark:bg-obsidian-900/40 text-obsidian-950 dark:text-white border-rhodium-200/80 dark:border-white/10 hover:border-coral-500/40"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                        isFeatured
                          ? "bg-coral-500/20 text-coral-300 border border-coral-500/30"
                          : "bg-white dark:bg-obsidian-950 text-coral-500 border border-rhodium-200 dark:border-white/10"
                      }`}
                    >
                      {Icon}
                    </div>

                    <span
                      className={`text-[11px] font-mono font-bold px-3 py-1 rounded-full ${
                        isFeatured
                          ? "bg-white/10 text-coral-300"
                          : "bg-white dark:bg-obsidian-800 text-rhodium-600 dark:text-rhodium-300 border border-rhodium-200/60 dark:border-white/10"
                      }`}
                    >
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl sm:text-2xl leading-snug mb-2">
                    {diff.title}
                  </h3>

                  <p
                    className={`text-xs sm:text-sm font-mono font-semibold uppercase tracking-wider mb-4 ${
                      isFeatured ? "text-coral-400" : "text-coral-600 dark:text-coral-400"
                    }`}
                  >
                    {diff.summary}
                  </p>

                  <p
                    className={`text-sm leading-relaxed font-sans ${
                      isFeatured ? "text-rhodium-200" : "text-rhodium-600 dark:text-rhodium-300"
                    }`}
                  >
                    {diff.detail}
                  </p>
                </div>

                <div
                  className={`mt-6 pt-4 border-t flex items-center gap-2 text-xs font-medium ${
                    isFeatured
                      ? "border-white/10 text-emerald-400"
                      : "border-rhodium-200/60 dark:border-white/10 text-rhodium-500"
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Verified institutional methodology</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
