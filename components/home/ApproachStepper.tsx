"use client";

import React, { useState } from "react";
import { Check, ArrowRight, ShieldCheck, FileSpreadsheet, KeyRound, Wrench, Sparkles } from "lucide-react";
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
    <section className="py-24 lg:py-32 bg-white dark:bg-navy-950 border-b border-rhodium-100 dark:border-navy-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/80 border border-teal-200 dark:border-teal-800 text-teal-800 dark:text-teal-300 text-xs font-semibold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-teal-600" />
            <span>End-to-End Lifecycle Delivery</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-navy-950 dark:text-white leading-[1.15]">
            Our Advisory Lifecycle: <br className="hidden sm:block" />
            <span className="text-teal-700 dark:text-teal-400">
              Prepare → Structure → Close → Operate
            </span>
          </h2>

          <p className="text-base sm:text-lg text-rhodium-600 dark:text-rhodium-300 leading-relaxed">
            Clients can engage Rhodium at any stage of the asset development curve. Most mandates originate during <strong>Prepare</strong> or <strong>Structure</strong> and run continuously through to binding financial close.
          </p>
        </div>

        {/* Google Step Progress Tracker */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {steps.map((step, idx) => {
            const isActive = activeStep === idx;
            const StepIcon = step.icon;

            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(idx)}
                className={`text-left p-5 rounded-2xl border transition-all duration-200 relative overflow-hidden flex flex-col justify-between ${
                  isActive
                    ? "bg-navy-950 text-white border-teal-500 shadow-[0_8px_30px_rgba(11,31,58,0.18)] scale-[1.02]"
                    : "bg-rhodium-50/70 dark:bg-navy-900/40 text-navy-900 dark:text-white border-rhodium-200/80 dark:border-navy-800 hover:bg-white dark:hover:bg-navy-900 hover:border-rhodium-300 dark:hover:border-navy-700"
                }`}
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <span
                    className={`text-xs font-mono font-bold px-2.5 py-1 rounded-full ${
                      isActive
                        ? "bg-teal-500 text-navy-950"
                        : "bg-rhodium-200 dark:bg-navy-800 text-rhodium-700 dark:text-rhodium-300"
                    }`}
                  >
                    Stage {step.number}
                  </span>
                  <StepIcon className={`w-4 h-4 ${isActive ? "text-teal-400" : "text-rhodium-400"}`} />
                </div>
                <div>
                  <h3 className="font-bold text-base sm:text-lg">{step.title}</h3>
                  <p
                    className={`text-xs mt-0.5 line-clamp-1 ${
                      isActive ? "text-rhodium-300" : "text-rhodium-500"
                    }`}
                  >
                    {step.tagline}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Google Bento Stage Card */}
        <div className="bg-rhodium-50/70 dark:bg-navy-900/60 rounded-3xl p-8 sm:p-12 border border-rhodium-200/80 dark:border-navy-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Overview and Deliverable */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-teal-700 dark:text-teal-400 font-bold block">
                  Stage {current.number} Scope of Work
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-navy-950 dark:text-white">
                  {current.title} Phase
                </h3>
              </div>

              <p className="text-base text-rhodium-600 dark:text-rhodium-300 leading-relaxed">
                {current.overview}
              </p>

              <div className="pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-rhodium-500 block mb-2">
                  Institutional Deliverable:
                </span>
                <div className="p-4 bg-white dark:bg-navy-950 rounded-2xl border border-rhodium-200/80 dark:border-navy-800 text-sm font-semibold text-teal-800 dark:text-teal-300 flex items-center gap-3 shadow-sm">
                  <div className="w-2.5 h-2.5 rounded-full bg-teal-500 flex-shrink-0 animate-pulse" />
                  <span>{current.output}</span>
                </div>
              </div>

              <div className="pt-2">
                <Button
                  href="/book"
                  variant="primary"
                  size="md"
                  className="rounded-full shadow-md hover:shadow-lg"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Retain Advisory for Stage {current.number}
                </Button>
              </div>
            </div>

            {/* Right: Key Advisory Activities Checklist */}
            <div className="lg:col-span-7 bg-white dark:bg-navy-950 rounded-2xl p-6 sm:p-8 border border-rhodium-200/80 dark:border-navy-800 shadow-sm">
              <h4 className="text-xs font-bold uppercase tracking-wider text-navy-950 dark:text-white mb-5 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <span>Core Mandate Deliverables:</span>
              </h4>

              <div className="space-y-4">
                {current.activities.map((act, i) => (
                  <div key={i} className="flex items-start gap-3.5 text-sm sm:text-base text-rhodium-700 dark:text-rhodium-300">
                    <div className="w-6 h-6 rounded-full bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300 flex items-center justify-center flex-shrink-0 mt-0.5 border border-teal-200 dark:border-teal-800">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="leading-snug">{act}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-rhodium-100 dark:border-navy-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <span className="text-rhodium-500 font-medium">
                  Have an asset in {current.title.toLowerCase()} stage?
                </span>
                <Link
                  href="/book"
                  className="font-bold text-teal-700 dark:text-teal-400 hover:underline inline-flex items-center gap-1.5"
                >
                  <span>Book confidential consultation</span>
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
