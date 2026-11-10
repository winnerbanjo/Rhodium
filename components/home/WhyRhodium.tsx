import React from "react";
import { whyRhodiumDifferentiators } from "@/content/values";
import { Eye, Zap, Coins, Compass, Users, GraduationCap, Rocket, CheckCircle2 } from "lucide-react";

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

  return (
    <section className="py-24 lg:py-32 bg-rhodium-50/60 dark:bg-navy-950/70 border-b border-rhodium-200/80 dark:border-navy-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100/70 dark:bg-teal-950/80 border border-teal-200 dark:border-teal-800 text-teal-800 dark:text-teal-300 text-xs font-semibold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-teal-600" />
            <span>Institutional Distinction</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-navy-950 dark:text-white leading-[1.15]">
            Why Rhodium Impact
          </h2>

          <p className="text-base sm:text-lg text-rhodium-600 dark:text-rhodium-300 leading-relaxed">
            We are not a generic advisory consultancy. We are credit-committee-grade transaction specialists purpose-built for the commercial and sovereign realities of emerging markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyRhodiumDifferentiators.map((diff, index) => {
            const Icon = iconMap[diff.icon] || <Eye className="w-5 h-5" />;
            const isFeatured = index === 0;

            return (
              <div
                key={diff.id}
                className={`rounded-3xl p-7 sm:p-8 border transition-all duration-300 flex flex-col justify-between ${
                  isFeatured
                    ? "md:col-span-2 lg:col-span-2 bg-gradient-to-br from-navy-950 via-navy-900 to-teal-950 text-white border-teal-500/40 shadow-[0_16px_40px_rgba(11,31,58,0.2)]"
                    : "bg-white dark:bg-navy-900 text-navy-950 dark:text-white border-rhodium-200/80 dark:border-navy-800 hover:border-teal-500/40 shadow-[0_4px_24px_rgba(11,31,58,0.04)]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                        isFeatured
                          ? "bg-teal-500/20 text-teal-300 border border-teal-500/30"
                          : "bg-teal-50 dark:bg-teal-950/80 text-teal-700 dark:text-teal-400 border border-teal-200 dark:border-teal-800"
                      }`}
                    >
                      {Icon}
                    </div>

                    <span
                      className={`text-[11px] font-mono font-bold px-2.5 py-1 rounded-full ${
                        isFeatured
                          ? "bg-white/10 text-teal-300"
                          : "bg-rhodium-100 dark:bg-navy-800 text-rhodium-600 dark:text-rhodium-400"
                      }`}
                    >
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-bold text-xl sm:text-2xl leading-snug mb-2">
                    {diff.title}
                  </h3>

                  <p
                    className={`text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4 ${
                      isFeatured ? "text-brass-300" : "text-teal-700 dark:text-teal-400"
                    }`}
                  >
                    {diff.summary}
                  </p>

                  <p
                    className={`text-sm leading-relaxed ${
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
                      : "border-rhodium-100 dark:border-navy-800 text-rhodium-500"
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
