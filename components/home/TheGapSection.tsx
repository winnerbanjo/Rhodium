"use client";

import React, { useState } from "react";
import { AlertCircle, CheckCircle2, ArrowRight, ShieldCheck, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function TheGapSection() {
  const [selectedIssue, setSelectedIssue] = useState<number>(0);

  const fatalFlaws = [
    {
      id: "feasibility",
      num: "01",
      title: "Superficial Feasibility Studies",
      cause: "High-level desktop studies that omit ground-truth traffic profiles, soil mechanics, or tariff willingness-to-pay.",
      verdict: "Lenders reject cashflow projections before credit committee term sheet stage.",
      metric: "72% of sub-Saharan concepts fail initial lender screening",
    },
    {
      id: "risk",
      num: "02",
      title: "Asymmetric Risk Allocation",
      cause: "Concession contracts that dump sovereign, regulatory, or currency devaluation risks onto private developers.",
      verdict: "Credit committees decline to underwrite unhedged downside without state guarantees.",
      metric: "Zero commercial banks finance unmitigated tariff risk",
    },
    {
      id: "contracts",
      num: "03",
      title: "Fragmented Contractual Architecture",
      cause: "PPA, EPC, and concession agreements negotiated in silos with mismatched termination formulas and step-in gaps.",
      verdict: "Cross-default clauses trigger covenant gridlock before first drawdown.",
      metric: "18+ months average delay from contract misalignment",
    },
    {
      id: "currency",
      num: "04",
      title: "The FX Currency Mismatch Trap",
      cause: "Assets generating domestic currency (NGN, GHS, KES) saddled with long-term USD/EUR debt without structural hedging.",
      verdict: "Currency devaluations instantly erase debt-service coverage ratios (DSCR).",
      metric: "Up to 60% revenue erosion during macro FX shocks",
    },
  ];

  const bankabilityPillars = [
    {
      title: "FAST-Compliant Multi-Scenario Financial Models",
      detail: "Stress-tested against severe macro, FX, and volume shocks with audited DSCR covenants.",
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
    <section className="py-20 lg:py-28 bg-neutral-50 dark:bg-[#0E0E0E] border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-mono uppercase tracking-wider text-neutral-800 dark:text-neutral-300">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white" />
            <span>The Bankability Imperative</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-neutral-900 dark:text-white leading-[1.12]">
            Emerging markets don&apos;t lack project ideas. They lack bankable ones.
          </h2>

          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans pt-1">
            Billions in institutional capital sit idle with DFIs, sovereign wealth funds, and domestic pension pools. Meanwhile, promising infrastructure concepts stall in feasibility purgatory. Here is why—and how Rhodium bridges the divide.
          </p>
        </div>

        {/* Bento Grid: Fatal Flaws vs Rhodium Standard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Fatal Flaws */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between pb-2">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-900 dark:text-neutral-300 flex items-center gap-2 font-medium">
                <AlertCircle className="w-4 h-4 text-neutral-500" />
                <span>Structural Failure Modes</span>
              </span>
              <span className="text-xs text-neutral-400 font-mono">Select to inspect</span>
            </div>

            <div className="space-y-3">
              {fatalFlaws.map((flaw, idx) => {
                const isSelected = selectedIssue === idx;

                return (
                  <div
                    key={flaw.id}
                    onClick={() => setSelectedIssue(idx)}
                    className={`cursor-pointer rounded-xl p-5 transition-all duration-200 border ${
                      isSelected
                        ? "bg-white dark:bg-neutral-900 border-neutral-900 dark:border-white shadow-sm"
                        : "bg-white/80 dark:bg-neutral-900/50 border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-3.5">
                        <span
                          className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-medium flex-shrink-0 mt-0.5 transition-colors ${
                            isSelected
                              ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                              : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                          }`}
                        >
                          {flaw.num}
                        </span>
                        <div>
                          <h3 className="text-base font-heading font-semibold text-neutral-900 dark:text-white leading-snug">
                            {flaw.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-1 leading-relaxed font-sans">
                            {flaw.cause}
                          </p>
                        </div>
                      </div>

                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-transform ${
                          isSelected
                            ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                            : "text-neutral-400"
                        }`}
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    {isSelected && (
                      <div className="mt-4 pt-3.5 border-t border-neutral-100 dark:border-neutral-800 animate-in fade-in duration-200">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-sans">
                          <span className="text-neutral-700 dark:text-neutral-300 font-medium">
                            Committee Finding: {flaw.verdict}
                          </span>
                          <span className="font-mono text-[11px] text-neutral-500 bg-neutral-100 dark:bg-neutral-800 px-2.5 py-0.5 rounded border border-neutral-200 dark:border-neutral-700 self-start sm:self-auto">
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

          {/* Right Column: Clean Architectural Standard Card */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="h-full bg-neutral-900 dark:bg-black rounded-2xl p-7 sm:p-9 text-white border border-neutral-800 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-neutral-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-300 font-medium">
                      Institutional Standard
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-neutral-400 px-2 py-0.5 rounded bg-neutral-800 border border-neutral-700">
                    CAMA 2020 RC: 8102994
                  </span>
                </div>

                <div className="mt-6 space-y-2">
                  <h3 className="text-2xl font-heading font-bold text-white tracking-tight leading-snug">
                    The Rhodium Bankability Standard™
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                    We eliminate deal-killing vulnerabilities by embedding institutional credit rigor into every asset from inception to financial close.
                  </p>
                </div>

                {/* 4 Pillars checklist */}
                <div className="mt-7 space-y-3.5">
                  {bankabilityPillars.map((pillar, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs sm:text-sm font-semibold text-white">
                          {pillar.title}
                        </h4>
                        <p className="text-xs text-neutral-400 mt-0.5 leading-relaxed font-sans">
                          {pillar.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA Block */}
              <div className="mt-8 pt-5 border-t border-neutral-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-neutral-400 block">Ready to screen your transaction?</span>
                  <span className="text-xs font-semibold text-white">Review your asset&apos;s bankability</span>
                </div>
                <Button
                  href="/book"
                  variant="neuros-dark"
                  size="sm"
                  className="bg-white text-neutral-950 hover:bg-neutral-100 font-medium px-4 py-2"
                  rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                >
                  Consult Team
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
