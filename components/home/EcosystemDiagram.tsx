"use client";

import React, { useState } from "react";
import { Coins, Landmark, HardHat, Building2, ArrowRight, ShieldCheck, Check, ArrowUpRight } from "lucide-react";

export function EcosystemDiagram() {
  const [activeStakeholder, setActiveStakeholder] = useState<number>(0);

  const stakeholders = [
    {
      id: "financiers",
      name: "Capital & Financiers",
      subtitle: "DFIs, Commercial Banks & Pension Funds",
      icon: Coins,
      badge: "Supply of Capital",
      keyPlayers: "IFC, AfDB, BII, AFC, Commercial Banks, Nigerian Pension Asset Managers, ECAs",
      theirConstraint: "Require stringent covenant protection, ring-fenced FX guarantees, and audited DSCR above 1.30x.",
      rhodiumRole: "We structure bankable debt packages, FAST-audited financial models, and dual-currency security structures that pass tough credit committees.",
      accent: "text-coral-500",
      border: "border-coral-500/40",
    },
    {
      id: "sovereign",
      name: "Sovereign & Regulators",
      subtitle: "PPP Units, Ministries & Regulators",
      icon: Landmark,
      badge: "Statutory Authority",
      keyPlayers: "Federal & State Ministries of Finance, ICRC, State PPP Offices, NERC, Central Bank of Nigeria",
      theirConstraint: "Must protect public interest, manage contingent sovereign liabilities, and maintain political viability.",
      rhodiumRole: "We design equitable concession agreements, value-for-money frameworks, and fiscal risk caps that protect sovereign balance sheets.",
      accent: "text-cobalt-400",
      border: "border-cobalt-500/40",
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
      accent: "text-coral-400",
      border: "border-coral-500/40",
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
      accent: "text-cobalt-400",
      border: "border-cobalt-500/40",
    },
  ];

  const current = stakeholders[activeStakeholder];

  return (
    <section className="py-24 lg:py-32 bg-white dark:bg-obsidian-950 border-b border-rhodium-200/80 dark:border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rhodium-100 dark:bg-obsidian-900 border border-rhodium-200 dark:border-white/10 text-xs font-mono uppercase tracking-widest text-coral-500 font-bold shadow-sm">
            <span className="w-2 h-2 rounded-full bg-coral-500" />
            <span>/ Pivotal Intermediary Role</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-obsidian-950 dark:text-white leading-[1.12]">
            Who We <span className="neuros-gradient-text">Sit Between</span>
          </h2>

          <p className="text-base sm:text-lg text-rhodium-600 dark:text-rhodium-300 leading-relaxed font-sans max-w-2xl mx-auto">
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
                className={`text-left p-6 rounded-3xl border transition-all duration-200 relative overflow-hidden flex flex-col justify-between ${
                  isSelected
                    ? "bg-obsidian-950 text-white border-coral-500 shadow-[0_12px_32px_rgba(241,79,68,0.18)] scale-[1.02]"
                    : "bg-[#F0F2F4] dark:bg-obsidian-900/60 text-obsidian-950 dark:text-white border-rhodium-200/80 dark:border-white/10 hover:border-rhodium-300 dark:hover:border-white/20"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <span
                      className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full font-bold ${
                        isSelected
                          ? "bg-coral-500 text-white"
                          : "bg-white dark:bg-obsidian-800 text-rhodium-700 dark:text-rhodium-300 border border-rhodium-200/60 dark:border-white/10"
                      }`}
                    >
                      {item.badge}
                    </span>
                    <Icon className={`w-5 h-5 ${isSelected ? "text-coral-400" : "text-rhodium-400"}`} />
                  </div>
                  <h3 className="font-heading font-bold text-base sm:text-lg leading-snug">{item.name}</h3>
                </div>
                <p
                  className={`text-xs mt-2 line-clamp-1 font-sans ${
                    isSelected ? "text-rhodium-300" : "text-rhodium-500"
                  }`}
                >
                  {item.subtitle}
                </p>
              </button>
            );
          })}
        </div>

        {/* Interactive Detail Display */}
        <div className="bg-[#F0F2F4] dark:bg-obsidian-900/80 rounded-3xl border border-rhodium-200/80 dark:border-white/10 p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: What they face */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-obsidian-950 text-coral-500 border border-rhodium-200 dark:border-white/10 flex items-center justify-center shadow-sm">
                  <current.icon className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-coral-500 font-bold block">
                    Stakeholder Focus
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-obsidian-950 dark:text-white">
                    {current.name}
                  </h3>
                </div>
              </div>

              <div className="space-y-4 pt-2">
                <div className="p-5 rounded-2xl bg-white dark:bg-obsidian-950 border border-rhodium-200/60 dark:border-white/10">
                  <span className="text-xs font-mono uppercase tracking-wider text-rhodium-500 font-bold block mb-1">
                    Representative Key Institutions
                  </span>
                  <p className="text-sm font-semibold text-obsidian-950 dark:text-white">
                    {current.keyPlayers}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-red-50/70 dark:bg-red-950/20 border border-red-200/60 dark:border-red-900/30">
                  <span className="text-xs font-mono uppercase tracking-wider text-coral-600 dark:text-coral-400 font-bold block mb-1">
                    Core Institutional Hurdle
                  </span>
                  <p className="text-sm text-coral-900 dark:text-coral-200 leading-relaxed font-sans">
                    {current.theirConstraint}
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Rhodium's Bridge Solution */}
            <div className="lg:col-span-6">
              <div className="bg-gradient-to-br from-obsidian-950 to-obsidian-900 rounded-3xl p-8 sm:p-10 text-white border border-white/15 shadow-xl relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-coral-500 animate-ping" />
                    <span className="text-xs font-mono uppercase tracking-widest text-coral-400 font-bold">
                      The Rhodium Solution
                    </span>
                  </div>
                  <span className="text-xs font-mono text-rhodium-400">BANKABILITY BRIDGE</span>
                </div>

                <p className="text-base sm:text-lg text-rhodium-100 leading-relaxed font-sans">
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
