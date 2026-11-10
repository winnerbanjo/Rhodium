"use client";

import React, { useState } from "react";
import { AlertCircle, CheckCircle2, ArrowRight, ShieldCheck, FileSpreadsheet, Lock, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function TheGapSection() {
  const [selectedIssue, setSelectedIssue] = useState<number>(0);

  const fatalFlaws = [
    {
      id: "feasibility",
      num: "01",
      title: "Superficial Feasibility Studies",
      cause: "High-level conceptual desktop reports ignoring granular soil mechanics, grid stability, or traffic elasticity.",
      verdict: "Lenders reject cashflow projections before credit committee term sheet stage.",
      metric: "72% of sub-Saharan concepts fail initial lender screening",
    },
    {
      id: "risk",
      num: "02",
      title: "Asymmetric Risk Allocation",
      cause: "Concession contracts dumping macro sovereign, tariff freeze, or currency devaluation risk onto private developers.",
      verdict: "Credit committees decline to underwrite unhedged downside without state guarantees.",
      metric: "Zero commercial banks will finance unmitigated tariff risk",
    },
    {
      id: "contracts",
      num: "03",
      title: "Fragmented Contractual Architecture",
      cause: "PPA, EPC, and concession agreements negotiated in silos with mismatched termination formulas and step-in gaps.",
      verdict: "Conflicting inter-creditor clauses trigger covenant gridlock before first drawdown.",
      metric: "Over 18 months average delay caused by contract misalignment",
    },
    {
      id: "currency",
      num: "04",
      title: "The FX Currency Mismatch Trap",
      cause: "Infrastructure generating domestic revenue (NGN, GHS, KES) saddled with long-term USD or EUR debt obligations.",
      verdict: "Currency devaluations instantly erase debt-service coverage ratios (DSCR).",
      metric: "Up to 60% revenue erosion during severe FX adjustment cycles",
    },
  ];

  const bankabilityPillars = [
    {
      title: "FAST-Compliant Multi-Scenario Financial Models",
      detail: "Stress-tested against severe macro, FX, and volume shocks with dynamic DSCR covenants.",
    },
    {
      title: "Credit-Committee-Grade Risk Allocation Matrices",
      detail: "Bilateral risk matching between sovereign, offtaker, sponsor, and senior lenders.",
    },
    {
      title: "Local Currency Blended Debt Structuring",
      detail: "Pairing domestic pension capital with DFI subordinated tranches and political risk insurance.",
    },
    {
      title: "IFC Performance Standards 1–8 & Equator Principles",
      detail: "Full Environmental, Social, and Governance (ESG) bankability baked in from day zero.",
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-white dark:bg-navy-950 border-b border-rhodium-100 dark:border-navy-800/80 relative overflow-hidden">
      {/* Subtle background ambient lighting */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/5 dark:bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-navy-500/5 dark:bg-navy-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/80 border border-teal-200 dark:border-teal-800/60 text-teal-800 dark:text-teal-300 text-xs font-semibold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" />
            <span>The Bankability Imperative</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-navy-950 dark:text-white leading-[1.15]">
            Emerging markets don&apos;t lack project ideas.{" "}
            <span className="text-teal-700 dark:text-teal-400">
              They lack bankable projects.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-rhodium-600 dark:text-rhodium-300 leading-relaxed pt-2">
            Billions in institutional capital sit idle with DFIs, sovereign wealth funds, and domestic pension pools. Meanwhile, promising infrastructure concepts stall in feasibility purgatory. Here is why—and how Rhodium bridges the divide.
          </p>
        </div>

        {/* Bento Grid: Fatal Flaws vs Rhodium Standard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Fatal Flaws (Bento Cards) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between pb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400 flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4" />
                <span>The 4 Fatal Traps That Kill Deals</span>
              </span>
              <span className="text-xs text-rhodium-400 font-medium">Click to inspect</span>
            </div>

            <div className="space-y-3">
              {fatalFlaws.map((flaw, idx) => {
                const isSelected = selectedIssue === idx;

                return (
                  <div
                    key={flaw.id}
                    onClick={() => setSelectedIssue(idx)}
                    className={`cursor-pointer rounded-2xl p-5 sm:p-6 transition-all duration-200 border ${
                      isSelected
                        ? "bg-red-50/50 dark:bg-red-950/20 border-red-300 dark:border-red-900/60 shadow-[0_4px_20px_rgba(239,68,68,0.08)] scale-[1.01]"
                        : "bg-rhodium-50/60 dark:bg-navy-900/40 border-rhodium-200/80 dark:border-navy-800/80 hover:bg-white dark:hover:bg-navy-900 hover:border-rhodium-300 dark:hover:border-navy-700"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-3.5">
                        <span
                          className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-mono font-bold flex-shrink-0 mt-0.5 ${
                            isSelected
                              ? "bg-red-600 text-white"
                              : "bg-rhodium-200 dark:bg-navy-800 text-rhodium-700 dark:text-rhodium-300"
                          }`}
                        >
                          {flaw.num}
                        </span>
                        <div>
                          <h3 className="text-base sm:text-lg font-bold text-navy-900 dark:text-white">
                            {flaw.title}
                          </h3>
                          <p className="text-sm text-rhodium-600 dark:text-rhodium-300 mt-1 leading-relaxed">
                            {flaw.cause}
                          </p>
                        </div>
                      </div>
                    </div>

                    {isSelected && (
                      <div className="mt-4 pt-3 border-t border-red-200/60 dark:border-red-900/40 animate-in fade-in duration-200">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                          <span className="font-semibold text-red-700 dark:text-red-400 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                            Credit Committee Verdict: {flaw.verdict}
                          </span>
                          <span className="font-mono text-rhodium-500 dark:text-rhodium-400 bg-white dark:bg-navy-950 px-2.5 py-1 rounded-md border border-rhodium-200/60 dark:border-navy-800 self-start sm:self-auto">
                            {flaw.metric}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Google DeepMind Bento Terminal (The Rhodium Standard) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="h-full bg-gradient-to-br from-navy-950 via-navy-900 to-teal-950 rounded-3xl p-8 sm:p-10 text-white border border-teal-500/30 shadow-[0_20px_50px_rgba(11,31,58,0.25)] flex flex-col justify-between relative overflow-hidden">
              {/* Luminous subtle circle */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                {/* Header status */}
                <div className="flex items-center justify-between pb-6 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
                      Institutional Standard
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-rhodium-400 px-2 py-0.5 rounded bg-white/5 border border-white/10">
                    CAMA 2020 RC: 8102994
                  </span>
                </div>

                <div className="mt-6 space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                    The Rhodium Bankability Standard™
                  </h3>
                  <p className="text-sm text-rhodium-300 leading-relaxed">
                    We eliminate deal-killing vulnerabilities by embedding institutional credit rigor into every asset from inception to financial close.
                  </p>
                </div>

                {/* 4 Pillars checklist */}
                <div className="mt-8 space-y-4">
                  {bankabilityPillars.map((pillar, i) => (
                    <div key={i} className="flex items-start gap-3.5 group">
                      <div className="w-6 h-6 rounded-full bg-teal-500/20 border border-teal-400/40 text-teal-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white group-hover:text-teal-300 transition-colors">
                          {pillar.title}
                        </h4>
                        <p className="text-xs text-rhodium-300 mt-0.5 leading-relaxed">
                          {pillar.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA Block */}
              <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-rhodium-400 block font-medium">Ready to screen your project?</span>
                  <span className="text-sm font-bold text-teal-300">Book an executive mandate review</span>
                </div>
                <Button
                  href="/book"
                  variant="accent"
                  size="md"
                  className="bg-teal-600 hover:bg-teal-500 text-white rounded-full shadow-lg shadow-teal-900/50"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Consult Senior Team
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
