"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import {
  ArrowRight,
  Calendar,
  ShieldCheck,
  TrendingUp,
  Zap,
  Globe2,
  Building,
  CheckCircle,
  FileCheck2,
  Sparkles,
} from "lucide-react";
import { trackRecordMetrics } from "@/content/projects";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#07111F] text-white pt-12 pb-20 lg:pt-20 lg:pb-32 border-b border-white/10">
      {/* Google-grade ambient radial aura lights */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(15,118,110,0.22),transparent_70%)] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -top-32 right-[-10%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(176,141,87,0.12),transparent_70%)] pointer-events-none"
        aria-hidden="true"
      />

      {/* Subtle modern dot matrix pattern */}
      <div
        className="absolute inset-0 opacity-[0.14] pointer-events-none bg-[radial-gradient(#8A97A8_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"
        aria-hidden="true"
      />

      <div className="relative max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bold Google-Grade Editorial Typography */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Top Google pill badge with live status */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.07] backdrop-blur-xl border border-white/15 text-xs font-medium text-rhodium-100 shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500" />
              </span>
              <span className="tracking-wide">
                Emerging Markets Infrastructure Advisory • Roots in Africa
              </span>
            </div>

            {/* Giant, Clean, Bold Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-serif font-extrabold text-white tracking-tight leading-[1.06]">
              Turning infrastructure needs into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-teal-100 to-brass-300">
                bankable projects.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg lg:text-xl text-rhodium-300 leading-relaxed font-normal max-w-2xl">
              Rhodium Impact is an infrastructure advisory practice for emerging markets. We operate at the intersection of project sponsors, governments, DFIs, and institutional capital to take transactions from idea to financial close.
            </p>

            {/* Google Pill Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <Button
                href="/book"
                variant="accent"
                size="lg"
                className="text-white bg-teal-600 hover:bg-teal-500 shadow-[0_4px_24px_rgba(13,148,136,0.35)] font-semibold"
                leftIcon={<Calendar className="w-5 h-5" />}
              >
                Book a Consultation
              </Button>

              <Button
                href="/services"
                variant="outline"
                size="lg"
                className="text-white border-white/20 hover:bg-white/10 backdrop-blur-md"
                rightIcon={<ArrowRight className="w-5 h-5" />}
              >
                Explore Practices
              </Button>
            </div>

            {/* Statutory Corporate Assurance Bar */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-rhodium-300">
              <div className="flex items-center gap-2">
                <FileCheck2 className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span>
                  <strong>RC 8102994</strong> (CAMA 2020 Registered)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-brass-400 flex-shrink-0" />
                <span>Dual Capital Presence: Abuja & London</span>
              </div>
            </div>
          </div>

          {/* Right Column: Google Bento / Transaction Intelligence Terminal */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Outer soft glow behind the card */}
              <div
                className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-teal-600/30 via-navy-700/20 to-brass-500/20 blur-xl opacity-75"
                aria-hidden="true"
              />

              <div className="relative rounded-3xl bg-gradient-to-b from-white/[0.09] to-white/[0.02] backdrop-blur-2xl border border-white/20 p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.4)] space-y-6">
                {/* Terminal Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                    <span className="ml-2 font-mono text-[11px] uppercase tracking-wider text-rhodium-300">
                      Transaction Deal Sheet
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-300 text-[10px] font-bold border border-teal-500/30">
                    <Sparkles className="w-3 h-3" />
                    <span>Lender-Grade</span>
                  </div>
                </div>

                {/* Primary Metric Showcase */}
                <div className="space-y-1">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-rhodium-400 block">
                    Structured & Executed Financing
                  </span>
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl sm:text-5xl font-serif font-extrabold text-white tracking-tight">
                      £2.5B+
                    </span>
                    <span className="text-xs text-teal-400 font-medium">
                      Across UK, Europe & Africa
                    </span>
                  </div>
                </div>

                {/* 2x2 Bento Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="rounded-xl bg-white/[0.05] p-3.5 border border-white/10 space-y-1">
                    <span className="text-[10px] uppercase font-bold text-rhodium-400 block">
                      Fund Finance Portfolio
                    </span>
                    <span className="text-xl font-serif font-bold text-white">
                      £1.0B
                    </span>
                    <span className="text-[10px] text-rhodium-400 block">
                      Prior Tier-1 banking
                    </span>
                  </div>

                  <div className="rounded-xl bg-white/[0.05] p-3.5 border border-white/10 space-y-1">
                    <span className="text-[10px] uppercase font-bold text-rhodium-400 block">
                      Financing Mandates
                    </span>
                    <span className="text-xl font-serif font-bold text-white">
                      20+ Closed
                    </span>
                    <span className="text-[10px] text-rhodium-400 block">
                      Energy & Infrastructure
                    </span>
                  </div>

                  <div className="rounded-xl bg-white/[0.05] p-3.5 border border-white/10 space-y-1">
                    <span className="text-[10px] uppercase font-bold text-rhodium-400 block">
                      Sub-National Capital
                    </span>
                    <span className="text-xl font-serif font-bold text-brass-300">
                      ₦5.0B+
                    </span>
                    <span className="text-[10px] text-rhodium-400 block">
                      CBN AGSMEIS Programme
                    </span>
                  </div>

                  <div className="rounded-xl bg-white/[0.05] p-3.5 border border-white/10 space-y-1">
                    <span className="text-[10px] uppercase font-bold text-rhodium-400 block">
                      Agric & SME Outreach
                    </span>
                    <span className="text-xl font-serif font-bold text-teal-300">
                      10,000+
                    </span>
                    <span className="text-[10px] text-rhodium-400 block">
                      Producers & Enterprises
                    </span>
                  </div>
                </div>

                {/* Live Core Capabilities Strip */}
                <div className="pt-2 border-t border-white/10 space-y-2">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-rhodium-400 block">
                    Core Mandate Focus
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      "Project Finance Models",
                      "Local Currency Bonds",
                      "Energy Transition",
                      "PPP Concessions",
                      "IFC / Equator ESG",
                    ].map((pill, i) => (
                      <span
                        key={i}
                        className="text-[11px] px-2.5 py-1 rounded-md bg-white/[0.07] text-rhodium-200 border border-white/10"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Verification Status */}
                <div className="pt-3 flex items-center justify-between text-xs text-rhodium-400">
                  <span className="inline-flex items-center gap-1.5 text-teal-400">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Credit Committee Compliant</span>
                  </span>
                  <Link
                    href="/projects"
                    className="text-white hover:text-teal-300 underline font-medium"
                  >
                    View Track Record →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
