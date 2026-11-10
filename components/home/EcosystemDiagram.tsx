"use client";

import React, { useState } from "react";
import { Coins, Landmark, HardHat, Building2, ArrowRight, ShieldCheck, Check, Sparkles } from "lucide-react";

export function EcosystemDiagram() {
  const [activeStakeholder, setActiveStakeholder] = useState<number>(0);

  const stakeholders = [
    {
      id: "financiers",
      name: "Capital & Financiers",
      subtitle: "DFIs, Commercial Banks & Pension Funds",
      icon: Coins,
      badge: "Supply of Capital",
      keyPlayers: "IFC, AfDB, BII, AFC, Commercial Banks, Local Pension Asset Managers, ECAs",
      theirConstraint: "Require covenant protection, ring-fenced FX guarantees, and audited DSCR above 1.30x.",
      rhodiumRole: "We structure bankable debt packages, FAST-audited financial models, and dual-currency security structures that pass tough credit committees.",
      color: "from-blue-600/20 to-teal-600/20",
      accent: "text-blue-600 dark:text-blue-400",
      border: "border-blue-500/40",
    },
    {
      id: "sovereign",
      name: "Sovereign & Regulators",
      subtitle: "PPP Units, Ministries & Regulators",
      icon: Landmark,
      badge: "Statutory Authority",
      keyPlayers: "Federal & State Ministries of Finance, ICRC, State PPP Offices, NERC, Central Banks",
      theirConstraint: "Must protect public interest, manage contingent sovereign liabilities, and maintain political viability.",
      rhodiumRole: "We design equitable concession agreements, value-for-money frameworks, and fiscal risk caps that protect sovereign balance sheets.",
      color: "from-teal-600/20 to-emerald-600/20",
      accent: "text-teal-600 dark:text-teal-400",
      border: "border-teal-500/40",
    },
    {
      id: "sponsors",
      name: "Project Sponsors",
      subtitle: "Developers & Concessionaires",
      icon: Building2,
      badge: "Project Ownership",
      keyPlayers: "Private Infrastructure Developers, Industrial Conglomerates, State-Owned Enterprises",
      theirConstraint: "Need rapid financial close, capped development expenditure, and targeted equity IRR without dilutive concessions.",
      rhodiumRole: "We serve as Lead Transaction Adviser, coordinating the multidisciplinary closing team to reach binding financial close and first drawdown.",
      color: "from-amber-600/20 to-orange-600/20",
      accent: "text-amber-600 dark:text-amber-400",
      border: "border-amber-500/40",
    },
    {
      id: "contractors",
      name: "EPC & Operators",
      subtitle: "Tier-1 Contractors & OEMs",
      icon: HardHat,
      badge: "Delivery & Execution",
      keyPlayers: "International & Local EPC Contractors, O&M Operators, Technology OEMs, Anchor Off-takers",
      theirConstraint: "Require predictable milestone drawdowns, capped liquidated damages, and clean site access guarantees.",
      rhodiumRole: "We align EPC contracts and performance bonds with senior lender covenants to prevent cross-default terminations.",
      color: "from-purple-600/20 to-indigo-600/20",
      accent: "text-purple-600 dark:text-purple-400",
      border: "border-purple-500/40",
    },
  ];

  const current = stakeholders[activeStakeholder];

  return (
    <section className="py-24 lg:py-32 bg-rhodium-50/60 dark:bg-navy-950/70 border-b border-rhodium-200/80 dark:border-navy-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100/70 dark:bg-teal-950/80 border border-teal-200 dark:border-teal-800 text-teal-800 dark:text-teal-300 text-xs font-semibold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-teal-600" />
            <span>The Pivotal Intermediary Role</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-navy-950 dark:text-white leading-[1.15]">
            Who We Sit Between
          </h2>

          <p className="text-base sm:text-lg text-rhodium-600 dark:text-rhodium-300 leading-relaxed max-w-2xl mx-auto">
            Infrastructure transactions fail when stakeholders speak mutually unintelligible languages. Rhodium acts as the authoritative transaction nexus bridging institutional capital, public policy, and physical delivery.
          </p>
        </div>

        {/* Stakeholder Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {stakeholders.map((item, idx) => {
            const isSelected = activeStakeholder === idx;
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                onClick={() => setActiveStakeholder(idx)}
                className={`text-left p-5 rounded-2xl border transition-all duration-200 relative overflow-hidden flex flex-col justify-between ${
                  isSelected
                    ? "bg-navy-950 text-white border-teal-500 shadow-[0_10px_30px_rgba(11,31,58,0.2)] scale-[1.02]"
                    : "bg-white dark:bg-navy-900 text-navy-900 dark:text-white border-rhodium-200/80 dark:border-navy-800 hover:border-rhodium-300 dark:hover:border-navy-700"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded font-semibold ${
                        isSelected
                          ? "bg-teal-500/20 text-teal-300 border border-teal-500/30"
                          : "bg-rhodium-100 dark:bg-navy-800 text-rhodium-600 dark:text-rhodium-300"
                      }`}
                    >
                      {item.badge}
                    </span>
                    <Icon className={`w-5 h-5 ${isSelected ? "text-teal-400" : "text-rhodium-400"}`} />
                  </div>
                  <h3 className="font-bold text-base leading-snug">{item.name}</h3>
                </div>
                <p
                  className={`text-xs mt-2 line-clamp-1 ${
                    isSelected ? "text-rhodium-300" : "text-rhodium-500"
                  }`}
                >
                  {item.subtitle}
                </p>
              </button>
            );
          })}
        </div>

        {/* Interactive Google Bento Detail Display */}
        <div className="bg-white dark:bg-navy-900 rounded-3xl border border-rhodium-200/80 dark:border-navy-800 p-8 sm:p-12 shadow-[0_12px_40px_rgba(11,31,58,0.06)] dark:shadow-none">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: What they face */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/80 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800 flex items-center justify-center">
                  <current.icon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-teal-700 dark:text-teal-400 font-bold block">
                    Stakeholder Deep Dive
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-navy-950 dark:text-white">
                    {current.name}
                  </h3>
                </div>
              </div>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-2xl bg-rhodium-50/80 dark:bg-navy-950/80 border border-rhodium-200/60 dark:border-navy-800/80">
                  <span className="text-xs font-bold uppercase tracking-wider text-rhodium-500 block mb-1">
                    Representative Key Players
                  </span>
                  <p className="text-sm font-medium text-navy-900 dark:text-rhodium-200">
                    {current.keyPlayers}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-900/40">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 block mb-1">
                    Their Primary Hurdle & Constraint
                  </span>
                  <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
                    {current.theirConstraint}
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Rhodium's Bridge Solution */}
            <div className="lg:col-span-6">
              <div className="bg-gradient-to-br from-navy-950 to-teal-950 rounded-2xl p-7 sm:p-9 text-white border border-teal-500/30 shadow-xl relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping" />
                    <span className="text-xs font-mono uppercase tracking-widest text-teal-300 font-bold">
                      The Rhodium Advisory Solution
                    </span>
                  </div>
                  <span className="text-xs text-brass-300 font-medium">Bankability Architecture</span>
                </div>

                <p className="text-base sm:text-lg text-rhodium-100 leading-relaxed">
                  {current.rhodiumRole}
                </p>

                <div className="mt-6 pt-5 border-t border-white/10 grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs text-rhodium-300">Covenant Harmonisation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs text-rhodium-300">Dual-Currency Feasibility</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
