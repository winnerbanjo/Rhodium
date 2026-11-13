"use client";

import React from "react";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function PricingPlans() {
  const plans = [
    {
      id: "preparation",
      name: "Project Preparation & Model Audit",
      description: "Ideal for early-stage sponsors requiring lender-ready models",
      badge: null,
      scope: [
        "FAST-Standard Dynamic Financial Model",
        "Bankable Feasibility Study & Gap Review",
        "Risk Allocation Matrix (Sovereign/Private)",
        "DFI Grant Facility Application Dossier",
        "Initial Commercial Bank Sounding",
      ],
      timeframe: "8 – 12 Weeks",
      cta: "Engage Advisory",
      popular: false,
    },
    {
      id: "mandate",
      name: "Full Lead Transaction Advisory",
      description: "Comprehensive mandate quarterbacking from inception to financial close",
      badge: "MOST SELECTED",
      scope: [
        "Full FAST Financial Architecture & DSCR Optimisation",
        "Concession Agreement & Offtake Drafting / Negotiation",
        "DFI, Commercial Bank & Pension Fund Syndication",
        "Conditions Precedent (CP) Resolution Management",
        "First Capital Disbursement & Drawdown Verification",
      ],
      timeframe: "Mandate to Close",
      cta: "Retain Lead Adviser",
      popular: true,
    },
    {
      id: "sovereign",
      name: "Sub-National & Sovereign PPP Retainer",
      description: "Designed for Ministries, State Governments, and PPP Units",
      badge: null,
      scope: [
        "State Infrastructure Project Screening & Pipeline Curation",
        "Value-for-Money (VfM) & Contingent Liability Capping",
        "Tender Documentation, Request for Proposal (RFP) & Bid Evaluation",
        "Regulatory & Tariff Reconciliation (NERC / Sub-national)",
        "On-Call Senior Transaction Steering Support",
      ],
      timeframe: "Quarterly / Annual Retainer",
      cta: "Retain Sovereign Desk",
      popular: false,
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#F0F2F4] dark:bg-obsidian-950 border-b border-rhodium-200/80 dark:border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-obsidian-900 border border-rhodium-300/80 dark:border-white/10 text-xs font-mono uppercase tracking-widest text-coral-500 font-bold shadow-sm">
            <span className="w-2 h-2 rounded-full bg-coral-500" />
            <span>/ Engagement Structures</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-obsidian-950 dark:text-white leading-[1.12]">
            Transparent Mandates. <br />
            <span className="neuros-gradient-text">Success-Aligned Terms.</span>
          </h2>

          <p className="text-base sm:text-lg text-rhodium-600 dark:text-rhodium-300 font-sans">
            We operate on structured retainer and milestone-success models designed to align our incentives directly with binding financial close.
          </p>
        </div>

        {/* Wide Neuros Pricing Cards */}
        <div className="space-y-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-3xl p-8 sm:p-10 transition-all duration-300 border ${
                plan.popular
                  ? "bg-obsidian-950 text-white border-coral-500 shadow-[0_20px_60px_rgba(241,79,68,0.2)]"
                  : "bg-white dark:bg-obsidian-900/60 text-obsidian-950 dark:text-white border-rhodium-200/80 dark:border-white/10 hover:border-coral-500/50"
              }`}
            >
              {plan.badge && (
                <div className="absolute top-6 right-8">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider bg-coral-500 text-white shadow-md">
                    <Sparkles className="w-3 h-3" />
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Col 1: Title & Description */}
                <div className="lg:col-span-4 space-y-2">
                  <h3 className="text-2xl font-heading font-extrabold leading-snug">
                    {plan.name}
                  </h3>
                  <p
                    className={`text-sm font-sans ${
                      plan.popular ? "text-rhodium-300" : "text-rhodium-600 dark:text-rhodium-400"
                    }`}
                  >
                    {plan.description}
                  </p>
                  <div className="pt-2">
                    <span
                      className={`text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-md inline-block ${
                        plan.popular
                          ? "bg-white/10 text-coral-400 border border-white/10"
                          : "bg-rhodium-100 dark:bg-obsidian-800 text-rhodium-700 dark:text-rhodium-300"
                      }`}
                    >
                      Duration: {plan.timeframe}
                    </span>
                  </div>
                </div>

                {/* Col 2: Deliverables Checklist */}
                <div className="lg:col-span-5 space-y-2.5">
                  <span
                    className={`text-xs font-mono uppercase tracking-wider font-bold block mb-2 ${
                      plan.popular ? "text-coral-400" : "text-coral-600 dark:text-coral-400"
                    }`}
                  >
                    Core Mandate Deliverables:
                  </span>
                  {plan.scope.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm font-sans">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          plan.popular
                            ? "bg-coral-500/20 text-coral-400"
                            : "bg-coral-50 dark:bg-coral-950 text-coral-600 dark:text-coral-400"
                        }`}
                      >
                        <Check className="w-3 h-3" />
                      </div>
                      <span className={plan.popular ? "text-rhodium-200" : "text-rhodium-700 dark:text-rhodium-300"}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Col 3: Action Button */}
                <div className="lg:col-span-3 flex lg:justify-end">
                  <Button
                    href="/book"
                    variant={plan.popular ? "neuros" : "neuros-outline"}
                    size="lg"
                    className="w-full lg:w-auto"
                    rightIcon={<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
                  >
                    {plan.cta}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
