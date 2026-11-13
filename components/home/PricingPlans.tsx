"use client";

import React from "react";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function PricingPlans() {
  const plans = [
    {
      id: "preparation",
      name: "Project Preparation & Model Audit",
      description: "Ideal for early-stage sponsors requiring lender-ready models and bankability validation.",
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
      description: "Comprehensive mandate quarterbacking from inception through to binding financial close.",
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
      description: "Designed for Ministries, State Governments, and statutory PPP Units.",
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
    <section className="py-20 lg:py-28 bg-neutral-50 dark:bg-[#0E0E0E] border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-mono uppercase tracking-wider text-neutral-800 dark:text-neutral-300">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white" />
            <span>Engagement Structures</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-neutral-900 dark:text-white leading-[1.12]">
            Transparent Mandates. Success-Aligned Terms.
          </h2>

          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 font-sans">
            We operate on structured retainer and milestone-success models designed to align our incentives directly with binding financial close.
          </p>
        </div>

        {/* Wide Pricing Cards */}
        <div className="space-y-4">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-xl p-6 sm:p-8 transition-all duration-200 border ${
                plan.popular
                  ? "bg-neutral-900 text-white border-neutral-800 shadow-lg"
                  : "bg-white dark:bg-neutral-900/60 text-neutral-900 dark:text-white border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700"
              }`}
            >
              {plan.badge && (
                <div className="absolute top-6 right-6">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider font-semibold bg-neutral-800 text-neutral-300 border border-neutral-700">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                {/* Col 1: Title & Description */}
                <div className="lg:col-span-4 space-y-2">
                  <h3 className="text-lg sm:text-xl font-heading font-bold leading-snug">
                    {plan.name}
                  </h3>
                  <p
                    className={`text-xs sm:text-sm font-sans leading-relaxed ${
                      plan.popular ? "text-neutral-400" : "text-neutral-600 dark:text-neutral-400"
                    }`}
                  >
                    {plan.description}
                  </p>
                  <div className="pt-1">
                    <span
                      className={`text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded inline-block ${
                        plan.popular
                          ? "bg-neutral-800 text-neutral-300 border border-neutral-700"
                          : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700"
                      }`}
                    >
                      Duration: {plan.timeframe}
                    </span>
                  </div>
                </div>

                {/* Col 2: Deliverables Checklist */}
                <div className="lg:col-span-5 space-y-2">
                  <span
                    className={`text-[11px] font-mono uppercase tracking-wider font-semibold block mb-1.5 ${
                      plan.popular ? "text-neutral-400" : "text-neutral-500"
                    }`}
                  >
                    Core Mandate Deliverables:
                  </span>
                  {plan.scope.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs font-sans">
                      <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className={plan.popular ? "text-neutral-300" : "text-neutral-700 dark:text-neutral-300"}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Col 3: Action Button */}
                <div className="lg:col-span-3 flex lg:justify-end">
                  <Button
                    href="/book"
                    variant={plan.popular ? "neuros-dark" : "primary"}
                    size="md"
                    className={`w-full lg:w-auto font-medium ${
                      plan.popular
                        ? "bg-white text-neutral-950 hover:bg-neutral-100"
                        : "bg-neutral-900 text-white hover:bg-black"
                    }`}
                    rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
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
