"use client";

import React, { useState } from "react";
import { AlertCircle, CheckCircle2, ArrowRight, ShieldCheck, FileSpreadsheet, Lock, Sparkles, ArrowUpRight } from "lucide-react";
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
    <section className="py-24 lg:py-32 bg-[#F0F2F4] dark:bg-obsidian-950 border-b border-rhodium-200/80 dark:border-white/10 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-coral-500/5 dark:bg-coral-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cobalt-500/5 dark:bg-cobalt-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Neuros Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-obsidian-900 border border-rhodium-300/80 dark:border-white/10 text-xs font-mono uppercase tracking-widest text-coral-500 font-bold shadow-sm">
            <span className="w-2 h-2 rounded-full bg-coral-500" />
            <span>/ The Bankability Imperative</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-obsidian-950 dark:text-white leading-[1.12]">
            Emerging markets don&apos;t lack project ideas.{" "}
            <span className="neuros-gradient-text">
              They lack bankable ones.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-rhodium-600 dark:text-rhodium-300 leading-relaxed font-sans pt-1">
            Billions in institutional capital sit idle with DFIs, sovereign wealth funds, and domestic pension pools. Meanwhile, promising infrastructure concepts stall in feasibility purgatory. Here is why—and how Rhodium bridges the divide.
          </p>
        </div>

        {/* Bento Grid: Fatal Flaws vs Rhodium Standard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Fatal Flaws */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between pb-2">
              <span className="text-xs font-mono uppercase tracking-wider text-coral-600 dark:text-coral-400 flex items-center gap-2 font-bold">
                <AlertCircle className="w-4 h-4" />
                <span>The 4 Fatal Traps That Kill Deals</span>
              </span>
              <span className="text-xs text-rhodium-500 font-medium font-mono">Select to inspect</span>
            </div>

            <div className="space-y-3.5">
              {fatalFlaws.map((flaw, idx) => {
                const isSelected = selectedIssue === idx;

                return (
                  <div
                    key={flaw.id}
                    onClick={() => setSelectedIssue(idx)}
                    className={`cursor-pointer rounded-3xl p-6 transition-all duration-200 border ${
                      isSelected
                        ? "bg-white dark:bg-obsidian-900 border-coral-500 shadow-[0_12px_30px_rgba(241,79,68,0.12)] scale-[1.01]"
                        : "bg-white/80 dark:bg-obsidian-900/50 border-rhodium-200 dark:border-white/10 hover:bg-white dark:hover:bg-obsidian-900 hover:border-rhodium-300 dark:hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <span
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono font-bold flex-shrink-0 mt-0.5 transition-colors ${
                            isSelected
                              ? "bg-coral-500 text-white shadow-md shadow-coral-500/40"
                              : "bg-rhodium-100 dark:bg-obsidian-800 text-obsidian-900 dark:text-rhodium-300"
                          }`}
                        >
                          {flaw.num}
                        </span>
                        <div>
                          <h3 className="text-lg font-heading font-bold text-obsidian-950 dark:text-white leading-snug">
                            {flaw.title}
                          </h3>
                          <p className="text-sm text-rhodium-600 dark:text-rhodium-300 mt-1.5 leading-relaxed font-sans">
                            {flaw.cause}
                          </p>
                        </div>
                      </div>

                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform ${
                          isSelected
                            ? "bg-coral-500 text-white rotate-45"
                            : "bg-rhodium-100 dark:bg-obsidian-800 text-rhodium-400"
                        }`}
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    {isSelected && (
                      <div className="mt-4 pt-4 border-t border-rhodium-100 dark:border-white/10 animate-in fade-in duration-200">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                          <span className="font-semibold text-coral-600 dark:text-coral-400 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-coral-500" />
                            Credit Committee Verdict: {flaw.verdict}
                          </span>
                          <span className="font-mono text-obsidian-800 dark:text-rhodium-300 bg-rhodium-50 dark:bg-obsidian-950 px-2.5 py-1 rounded-md border border-rhodium-200 dark:border-white/10 self-start sm:self-auto">
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

          {/* Right Column: Neuros Dark Bento Terminal (The Rhodium Standard) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="h-full bg-gradient-to-br from-obsidian-950 via-obsidian-900 to-obsidian-950 rounded-3xl p-8 sm:p-10 text-white border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.5)] flex flex-col justify-between relative overflow-hidden">
              {/* Luminous subtle circle */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-cobalt-500/20 to-transparent rounded-full blur-2xl pointer-events-none" />

              <div>
                {/* Header status */}
                <div className="flex items-center justify-between pb-6 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
                      Institutional Standard
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-rhodium-400 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10">
                    CAMA 2020 RC: 8102994
                  </span>
                </div>

                <div className="mt-6 space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight leading-snug">
                    The Rhodium Bankability Standard™
                  </h3>
                  <p className="text-sm text-rhodium-300 leading-relaxed font-sans">
                    We eliminate deal-killing vulnerabilities by embedding institutional credit rigor into every asset from inception to financial close.
                  </p>
                </div>

                {/* 4 Pillars checklist */}
                <div className="mt-8 space-y-4">
                  {bankabilityPillars.map((pillar, i) => (
                    <div key={i} className="flex items-start gap-3.5 group">
                      <div className="w-6 h-6 rounded-full bg-coral-500/20 border border-coral-500/40 text-coral-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-coral-400" />
                      </div>
                      <div>
                        <h4 className="text-sm font-heading font-bold text-white group-hover:text-coral-400 transition-colors">
                          {pillar.title}
                        </h4>
                        <p className="text-xs text-rhodium-300 mt-0.5 leading-relaxed font-sans">
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
                  <span className="text-xs text-rhodium-400 block font-medium">Ready to screen your transaction?</span>
                  <span className="text-sm font-bold text-white">Book an executive mandate review</span>
                </div>
                <Button
                  href="/book"
                  variant="neuros"
                  size="md"
                  rightIcon={<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
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
