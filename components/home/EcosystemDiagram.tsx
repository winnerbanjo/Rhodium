"use client";

import React, { useState } from "react";
import { Coins, Landmark, HardHat, Building2, ShieldCheck, Check, ArrowUpRight } from "lucide-react";

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
    },
  ];

  const current = stakeholders[activeStakeholder];

  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-[#0A0A0A] border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-mono uppercase tracking-wider text-neutral-800 dark:text-neutral-300">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white" />
            <span>Transaction Nexus</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-neutral-900 dark:text-white leading-[1.12]">
            Who We Sit Between
          </h2>

          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans max-w-2xl mx-auto">
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
                className={`text-left p-5 rounded-xl border transition-all duration-200 flex flex-col justify-between ${
                  isSelected
                    ? "bg-neutral-950 text-white border-neutral-900 dark:border-white shadow-sm"
                    : "bg-neutral-50 dark:bg-neutral-900/60 text-neutral-900 dark:text-white border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded font-medium ${
                        isSelected
                          ? "bg-neutral-800 text-neutral-300"
                          : "bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700"
                      }`}
                    >
                      {item.badge}
                    </span>
                    <Icon className={`w-4 h-4 ${isSelected ? "text-white" : "text-neutral-400"}`} />
                  </div>
                  <h3 className="font-heading font-semibold text-sm sm:text-base leading-snug">{item.name}</h3>
                </div>
                <p
                  className={`text-xs mt-2 line-clamp-1 font-sans ${
                    isSelected ? "text-neutral-400" : "text-neutral-500"
                  }`}
                >
                  {item.subtitle}
                </p>
              </button>
            );
          })}
        </div>

        {/* Detail Display Card */}
        <div className="bg-neutral-50 dark:bg-neutral-900/60 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left: What they face */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-700 flex items-center justify-center shadow-sm">
                  <current.icon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-medium block">
                    Stakeholder Focus
                  </span>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-neutral-900 dark:text-white">
                    {current.name}
                  </h3>
                </div>
              </div>

              <div className="space-y-3 pt-1">
                <div className="p-4 rounded-xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 font-medium block mb-1">
                    Representative Key Institutions
                  </span>
                  <p className="text-xs sm:text-sm font-medium text-neutral-900 dark:text-white font-sans">
                    {current.keyPlayers}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 font-medium block mb-1">
                    Core Institutional Hurdle
                  </span>
                  <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans">
                    {current.theirConstraint}
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Rhodium's Bridge Solution */}
            <div className="lg:col-span-6">
              <div className="bg-neutral-900 dark:bg-black rounded-xl p-7 sm:p-8 text-white border border-neutral-800 shadow-xl">
                <div className="flex items-center justify-between pb-4 border-b border-neutral-800 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-300 font-medium">
                      The Rhodium Solution
                    </span>
                  </div>
                  <span className="text-xs font-mono text-neutral-400">BANKABILITY BRIDGE</span>
                </div>

                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-sans">
                  {current.rhodiumRole}
                </p>

                <div className="mt-6 pt-5 border-t border-neutral-800 grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs text-neutral-300 font-sans">Covenant Harmonisation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs text-neutral-300 font-sans">Dual-Currency Feasibility</span>
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
