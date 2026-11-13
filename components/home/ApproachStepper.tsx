"use client";

import React, { useState } from "react";
import { Check, ArrowRight, ShieldCheck, FileSpreadsheet, KeyRound, Wrench } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function ApproachStepper() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: "prepare",
      number: "01",
      title: "Prepare",
      tagline: "Concept to Bankable Definition",
      icon: ShieldCheck,
      overview:
        "We pressure-test early feasibility studies against stringent credit committee metrics, define baseline commercial economics, and secure pre-development grant envelopes.",
      activities: [
        "Comprehensive pre-feasibility and bankable commercial feasibility studies",
        "Granular demand assessment, willingness-to-pay, and traffic/load profiling",
        "Statutory permitting, environmental screening, and right-of-way roadmap",
        "DFI & donor Project Preparation Facility (PPF) grant applications",
      ],
      output: "Bankable Feasibility Dossier & Go/No-Go Decision",
    },
    {
      id: "structure",
      number: "02",
      title: "Structure",
      tagline: "Designing the Closed Architecture",
      icon: FileSpreadsheet,
      overview:
        "We engineer the capital stack, build audited FAST-compliant financial models, structure balanced risk allocation matrices, and negotiate concession & off-take terms.",
      activities: [
        "Dynamic multi-scenario project finance & PPP financial modelling",
        "Capital stack design (senior debt, blended, local currency, mezzanine)",
        "Risk allocation matrices, concession agreements, and PPA/EPC drafting",
        "Lender term sheet negotiation and debt market sounding",
      ],
      output: "Signed Term Sheets & Bankable Concession / Off-take Contract",
    },
    {
      id: "close",
      number: "03",
      title: "Close",
      tagline: "From Term Sheets to First Drawdown",
      icon: KeyRound,
      overview:
        "We quarterback the multidisciplinary closing team, coordinating conditions precedent, intercreditor covenants, security packages, and drawdown readiness.",
      activities: [
        "Conditions Precedent (CP) tracking matrix & multidisciplinary management",
        "Intercreditor agreements, direct agreements, and lender step-in rights",
        "Legal opinion reconciliation & political risk credit enhancement execution",
        "Drawdown readiness verification and initial capital disbursement",
      ],
      output: "Financial Close & First Capital Disbursement",
    },
    {
      id: "operate",
      number: "04",
      title: "Operate",
      tagline: "Monitoring, Governance & Refinancing",
      icon: Wrench,
      overview:
        "We safeguard investor and sovereign value through post-close asset monitoring, concession performance audits, tariff reviews, and future debt refinancing.",
      activities: [
        "PPP contract administration and concession performance audits",
        "Tariff adjustment reviews and cost-of-service reconciliations",
        "Debt refinancing, restructuring, and secondary M&A advisory",
        "Ongoing Environmental & Social (IFC E&S) compliance monitoring",
      ],
      output: "Sustained Operational Performance & Liquidity Protection",
    },
  ];

  const current = steps[activeStep];
  const Icon = current.icon;

  return (
    <section className="py-20 lg:py-28 bg-neutral-50 dark:bg-[#0E0E0E] border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-mono uppercase tracking-wider text-neutral-800 dark:text-neutral-300">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white" />
            <span>Advisory Lifecycle</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-neutral-900 dark:text-white leading-[1.12]">
            Prepare → Structure → Close → Operate
          </h2>

          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
            Clients can engage Rhodium at any stage of the asset development curve. Most mandates originate during <strong className="text-neutral-900 dark:text-white font-medium">Prepare</strong> or <strong className="text-neutral-900 dark:text-white font-medium">Structure</strong> and run continuously through to binding financial close.
          </p>
        </div>

        {/* Step Progress Tracker */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {steps.map((step, idx) => {
            const isActive = activeStep === idx;
            const StepIcon = step.icon;

            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(idx)}
                className={`text-left p-5 rounded-xl border transition-all duration-200 flex flex-col justify-between ${
                  isActive
                    ? "bg-neutral-950 text-white border-neutral-900 dark:border-white shadow-sm"
                    : "bg-white dark:bg-neutral-900/60 text-neutral-900 dark:text-white border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700"
                }`}
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <span
                    className={`text-[11px] font-mono font-medium px-2 py-0.5 rounded ${
                      isActive
                        ? "bg-neutral-800 text-neutral-300"
                        : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                    }`}
                  >
                    Stage {step.number}
                  </span>
                  <StepIcon className={`w-4 h-4 ${isActive ? "text-white" : "text-neutral-400"}`} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-sm sm:text-base">{step.title}</h3>
                  <p
                    className={`text-xs mt-1 font-sans line-clamp-1 ${
                      isActive ? "text-neutral-400" : "text-neutral-500"
                    }`}
                  >
                    {step.tagline}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Stage Card */}
        <div className="bg-white dark:bg-neutral-900/60 rounded-2xl p-6 sm:p-10 border border-neutral-200 dark:border-neutral-800 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left: Overview and Deliverable */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 font-medium block mb-1">
                  Stage {current.number} Scope of Work
                </span>
                <h3 className="text-2xl font-heading font-bold text-neutral-900 dark:text-white">
                  {current.title} Phase
                </h3>
              </div>

              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
                {current.overview}
              </p>

              <div className="pt-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 font-medium block mb-1.5">
                  Institutional Deliverable:
                </span>
                <div className="p-3.5 bg-neutral-50 dark:bg-neutral-950 rounded-xl border border-neutral-200 dark:border-neutral-800 text-xs sm:text-sm font-medium text-neutral-900 dark:text-neutral-200 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
                  <span>{current.output}</span>
                </div>
              </div>

              <div className="pt-2">
                <Button
                  href="/book"
                  variant="primary"
                  size="md"
                  className="bg-neutral-900 text-white hover:bg-black font-medium"
                  rightIcon={<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
                >
                  Retain Advisory for Stage {current.number}
                </Button>
              </div>
            </div>

            {/* Right: Key Advisory Activities Checklist */}
            <div className="lg:col-span-7 bg-neutral-50 dark:bg-neutral-950 rounded-xl p-6 sm:p-7 border border-neutral-200 dark:border-neutral-800">
              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-900 dark:text-white mb-4 font-medium">
                Core Mandate Deliverables
              </h4>

              <div className="space-y-3.5">
                {current.activities.map((act, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 font-sans">
                    <div className="w-5 h-5 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="leading-snug">{act}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <span className="text-neutral-500 font-sans">
                  Have an asset in {current.title.toLowerCase()} phase?
                </span>
                <Link
                  href="/book"
                  className="font-medium text-neutral-900 dark:text-white hover:underline inline-flex items-center gap-1.5"
                >
                  <span>Schedule partner consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
