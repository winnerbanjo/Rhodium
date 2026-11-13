"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import {
  ArrowRight,
  Play,
  ShieldCheck,
  TrendingUp,
  FileCheck2,
  Globe2,
  Sparkles,
  CheckCircle2,
  X,
} from "lucide-react";
import { trackRecordMetrics } from "@/content/projects";

export function HeroSection() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-obsidian-950 text-white pt-14 pb-20 lg:pt-24 lg:pb-32 border-b border-white/10">
        {/* Neuros Signature Ambient Glow - Coral on Left, Cobalt on Right */}
        <div
          className="absolute -top-40 -left-40 w-[650px] h-[650px] bg-[radial-gradient(circle,rgba(241,79,68,0.18),transparent_70%)] pointer-events-none blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute -top-40 -right-40 w-[650px] h-[650px] bg-[radial-gradient(circle,rgba(56,107,183,0.22),transparent_70%)] pointer-events-none blur-3xl"
          aria-hidden="true"
        />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px]"
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Left Column: Bold Neuros Editorial Typography */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              {/* Neuros Subheading Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs font-mono uppercase tracking-widest text-coral-400 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-coral-500 animate-pulse" />
                <span>/ Infrastructure Transaction Advisory</span>
              </div>

              {/* Giant Neuros Headline with Gradient & Strikethrough Del */}
              <h1 className="text-4xl sm:text-6xl lg:text-[70px] font-heading font-extrabold text-white tracking-tight leading-[1.08]">
                Transforming Needs into{" "}
                <span className="neuros-gradient-text">
                  Bankable Realities.
                </span>
              </h1>

              {/* Sub-headline */}
              <p className="text-base sm:text-lg lg:text-xl text-rhodium-300 leading-relaxed font-sans max-w-2xl">
                Emerging markets don&apos;t lack project ideas; they lack <strong className="text-white">bankable projects</strong>. Rhodium Impact operates at the intersection of sponsors, governments, DFIs, and institutional capital to structure and close high-impact transactions.
              </p>

              {/* Neuros Dual Action Controls */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Button
                  href="/book"
                  variant="neuros"
                  size="lg"
                  className="px-8 text-base font-semibold"
                  rightIcon={<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
                >
                  Explore Mandates
                </Button>

                {/* Neuros Video / Briefing Trigger Button with Soundwave Radar */}
                <button
                  type="button"
                  onClick={() => setIsVideoModalOpen(true)}
                  className="group inline-flex items-center gap-3.5 px-6 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 text-white transition-all text-sm font-semibold backdrop-blur-md hover:border-coral-500/50"
                >
                  <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-coral-500 text-white shadow-[0_0_15px_rgba(241,79,68,0.5)] group-hover:scale-110 transition-transform">
                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                    <span className="absolute inset-0 rounded-full bg-coral-500 opacity-60 animate-ping" />
                  </div>
                  <span>Watch Briefing Film</span>
                </button>
              </div>

              {/* Assurance Bar */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-rhodium-300">
                <div className="flex items-center gap-2">
                  <FileCheck2 className="w-4 h-4 text-coral-400 flex-shrink-0" />
                  <span>
                    <strong>RC 8102994</strong> (CAMA 2020 Registered)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe2 className="w-4 h-4 text-cobalt-400 flex-shrink-0" />
                  <span>Dual Presence: Abuja & London Advisory Desk</span>
                </div>
              </div>
            </div>

            {/* Right Column: Neuros Interactive Transaction Terminal */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl bg-gradient-to-b from-obsidian-900 via-obsidian-900 to-obsidian-950 p-6 sm:p-8 border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-2xl overflow-hidden">
                {/* Luminous accent corner */}
                <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-coral-500/20 to-transparent rounded-full blur-2xl pointer-events-none" />

                {/* Terminal Header */}
                <div className="flex items-center justify-between pb-5 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <span className="w-3 h-3 rounded-full bg-coral-500 animate-pulse" />
                    <span className="font-mono text-xs uppercase tracking-wider text-white font-bold">
                      Transaction Telemetry
                    </span>
                  </div>
                  <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-white/10 text-coral-300 border border-white/15">
                    LIVE PIPELINE
                  </span>
                </div>

                {/* Big Stat Highlight */}
                <div className="py-6 border-b border-white/10">
                  <span className="text-xs uppercase font-mono tracking-wider text-rhodium-400 block mb-1">
                    Structured Facility Volume
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-heading font-black tracking-tight neuros-gradient-text">
                      £2.5B+
                    </span>
                    <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/40 px-2 py-0.5 rounded">
                      +100% Executed
                    </span>
                  </div>
                  <p className="text-xs text-rhodium-300 mt-2">
                    Cross-border project finance, syndications, and bankable concession facilities across Africa and the UK.
                  </p>
                </div>

                {/* Sub-Metrics Grid */}
                <div className="grid grid-cols-2 gap-4 py-5 border-b border-white/10">
                  <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5">
                    <span className="text-2xl font-heading font-bold text-white block">
                      20+
                    </span>
                    <span className="text-[11px] text-rhodium-400 font-medium">
                      Mandates Closed
                    </span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5">
                    <span className="text-2xl font-heading font-bold text-white block">
                      10,000+
                    </span>
                    <span className="text-[11px] text-rhodium-400 font-medium">
                      Farmers & SME Reach
                    </span>
                  </div>
                </div>

                {/* Transaction Intelligence Checklist */}
                <div className="pt-5 space-y-2.5 text-xs">
                  <div className="flex items-center justify-between text-rhodium-300">
                    <span className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-coral-400" />
                      FAST-Standard Financial Models
                    </span>
                    <span className="font-mono text-[10px] text-emerald-400 font-semibold">AUDITED</span>
                  </div>
                  <div className="flex items-center justify-between text-rhodium-300">
                    <span className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-coral-400" />
                      Bilateral Sovereign De-Risking
                    </span>
                    <span className="font-mono text-[10px] text-emerald-400 font-semibold">ACTIVE</span>
                  </div>
                  <div className="flex items-center justify-between text-rhodium-300">
                    <span className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-coral-400" />
                      Dual-Currency Debt Tranches
                    </span>
                    <span className="font-mono text-[10px] text-emerald-400 font-semibold">MATCHED</span>
                  </div>
                </div>

                {/* Bottom Terminal Action */}
                <div className="mt-6 pt-4 border-t border-white/10">
                  <Link
                    href="/projects"
                    className="flex items-center justify-between text-xs font-semibold text-coral-400 hover:text-coral-300 transition-colors group"
                  >
                    <span>View Closed Deal Dossiers</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Institutional Multilateral Ticker Bar */}
        <div className="mt-16 sm:mt-24 pt-8 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-xs font-mono uppercase tracking-widest text-rhodium-400 mb-6 font-semibold">
              Advising Across Institutional Capital, Multilateral DFIs & Sovereign PPP Frameworks
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-rhodium-400 text-xs sm:text-sm font-semibold tracking-wider uppercase opacity-80">
              <span className="hover:text-white transition-colors">IFC • World Bank Group</span>
              <span className="text-white/20">/</span>
              <span className="hover:text-white transition-colors">African Development Bank (AfDB)</span>
              <span className="text-white/20">/</span>
              <span className="hover:text-white transition-colors">British International Investment (BII)</span>
              <span className="text-white/20">/</span>
              <span className="hover:text-white transition-colors">Africa Finance Corporation (AFC)</span>
              <span className="text-white/20">/</span>
              <span className="hover:text-white transition-colors">Nigerian Institutional Pension Funds</span>
              <span className="text-white/20">/</span>
              <span className="hover:text-white transition-colors">ICRC & State PPP Units</span>
            </div>
          </div>
        </div>
      </section>

      {/* Briefing Video Lightbox Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-obsidian-900 rounded-3xl border border-white/20 overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-coral-500 animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-wider text-white font-bold">
                  Rhodium Impact • Executive Briefing
                </span>
              </div>
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="p-1 rounded-full text-rhodium-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close video"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="relative aspect-video w-full bg-black flex items-center justify-center">
              {/* Responsive video container */}
              <iframe
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/XHOmBV4js_E?autoplay=1"
                title="Rhodium Impact Briefing"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
