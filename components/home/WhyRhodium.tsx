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

  const usps = [
    {
      title: "Tailored Transaction Solutions",
      desc: "Customized capital stack engineering, debt syndication, and concession models tuned to specific sub-Saharan jurisdictions.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      ),
    },
    {
      title: "FAST-Audited Financial Models",
      desc: "Robust, audited project finance models built to international FAST standards, stress-tested against severe macro, FX, and tariff shocks.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.143 2.143L15.75 6" />
        </svg>
      ),
    },
    {
      title: "Proven Transaction Track Record",
      desc: "Over £2.5B+ in structured facilities executed, including Osun State ₦5B+ AGSMEIS, $5M agricultural procurement, and regional power mandates.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.281m5.94 2.28l-2.28 5.941" />
        </svg>
      ),
    },
    {
      title: "Senior-Led Mandate Execution",
      desc: "Partners with 19+ years in institutional banking, risk asset management ($7M+), liability generation ($10.5M+), and global fund finance.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-[#0A0A0A] border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-mono uppercase tracking-wider text-neutral-800 dark:text-neutral-300">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white" />
            <span>Institutional Distinction</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-neutral-900 dark:text-white leading-[1.12]">
            Why Rhodium Impact
          </h2>

          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
            We are not a generic management consultancy. We are credit-committee-grade transaction specialists purpose-built for the commercial and sovereign realities of emerging markets.
          </p>
        </div>

        {/* 4-Box Feature Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {usps.map((usp, i) => (
            <div
              key={i}
              className="bg-neutral-50 dark:bg-neutral-900/60 rounded-xl p-6 border border-neutral-200 dark:border-neutral-800 flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-lg bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-700 flex items-center justify-center mb-5 shadow-sm">
                  {usp.icon}
                </div>
                <h3 className="font-heading font-semibold text-base text-neutral-900 dark:text-white mb-2 leading-snug">
                  {usp.title}
                </h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
                  {usp.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyRhodiumDifferentiators.map((diff, index) => {
            const Icon = iconMap[diff.icon] || <Eye className="w-5 h-5" />;
            const isFeatured = index === 0;

            return (
              <div
                key={diff.id}
                className={`rounded-xl p-6 border transition-all duration-200 flex flex-col justify-between ${
                  isFeatured
                    ? "md:col-span-2 lg:col-span-2 bg-neutral-900 dark:bg-black text-white border-neutral-800 shadow-lg"
                    : "bg-neutral-50 dark:bg-neutral-900/40 text-neutral-900 dark:text-white border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        isFeatured
                          ? "bg-neutral-800 text-white border border-neutral-700"
                          : "bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-700"
                      }`}
                    >
                      {Icon}
                    </div>

                    <span
                      className={`text-[11px] font-mono font-medium px-2.5 py-0.5 rounded ${
                        isFeatured
                          ? "bg-neutral-800 text-neutral-300 border border-neutral-700"
                          : "bg-white dark:bg-neutral-800 text-neutral-500 border border-neutral-200 dark:border-neutral-700"
                      }`}
                    >
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-heading font-semibold text-lg sm:text-xl leading-snug mb-1.5">
                    {diff.title}
                  </h3>

                  <p
                    className={`text-xs font-mono uppercase tracking-wider mb-3 ${
                      isFeatured ? "text-neutral-400" : "text-neutral-500"
                    }`}
                  >
                    {diff.summary}
                  </p>

                  <p
                    className={`text-xs sm:text-sm leading-relaxed font-sans ${
                      isFeatured ? "text-neutral-300" : "text-neutral-600 dark:text-neutral-400"
                    }`}
                  >
                    {diff.detail}
                  </p>
                </div>

                <div
                  className={`mt-6 pt-4 border-t flex items-center gap-2 text-xs font-medium ${
                    isFeatured
                      ? "border-neutral-800 text-emerald-400"
                      : "border-neutral-200 dark:border-neutral-800 text-neutral-500"
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
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
