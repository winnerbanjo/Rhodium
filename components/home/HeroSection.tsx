"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import {
  ArrowRight,
  Play,
  ShieldCheck,
  TrendingUp,
  FileCheck2,
  Globe2,
  CheckCircle2,
  X,
  Building2,
  Layers,
  MapPin,
} from "lucide-react";
import { trackRecordMetrics } from "@/content/projects";

export function HeroSection() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [activeVisual, setActiveVisual] = useState<"infrastructure" | "boardroom">("infrastructure");

  return (
    <>
      <section className="relative overflow-hidden bg-[#0A0A0A] text-white pt-16 pb-20 lg:pt-24 lg:pb-28 border-b border-neutral-800">
        {/* Cinematic atmospheric backdrop */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <Image
            src="/images/hero/hero-infrastructure.jpg"
            alt="Strategic Infrastructure"
            fill
            priority
            className="object-cover opacity-[0.08] filter grayscale contrast-125"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/95 to-transparent" />
        </div>

        {/* Subtle architectural hairline grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
            {/* Left Column: Refined Editorial Typography */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              {/* Clean Minimalist Tag */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono tracking-wider uppercase text-neutral-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Infrastructure Advisory • Emerging Markets</span>
              </div>

              {/* Bold, Clean Headline */}
              <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-heading font-bold text-white tracking-tight leading-[1.08]">
                Transforming project vision into bankable realities.
              </h1>

              {/* Sub-headline */}
              <p className="text-base sm:text-lg lg:text-xl text-neutral-400 leading-relaxed font-sans max-w-2xl">
                Emerging markets don&apos;t lack project ideas; they lack <strong className="text-white font-medium">bankable projects</strong>. Rhodium Impact operates at the intersection of sponsors, governments, DFIs, and institutional capital to structure and reach financial close.
              </p>

              {/* Action Buttons: Solid White & Crisp Outline */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <Button
                  href="/book"
                  variant="neuros-dark"
                  size="lg"
                  className="bg-white text-neutral-950 hover:bg-neutral-100 font-semibold px-7"
                  rightIcon={<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
                >
                  Schedule Consultation
                </Button>

                <button
                  type="button"
                  onClick={() => setIsVideoModalOpen(true)}
                  className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 text-white transition-all text-sm font-medium"
                >
                  <div className="flex items-center justify-center w-7 h-7 rounded-full bg-neutral-800 group-hover:bg-neutral-700 text-white transition-colors">
                    <Play className="w-3 h-3 fill-current ml-0.5" />
                  </div>
                  <span>Executive Briefing</span>
                </button>
              </div>

              {/* Assurance Meta Bar */}
              <div className="pt-6 border-t border-neutral-800/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-neutral-400 font-sans">
                <div className="flex items-center gap-2">
                  <FileCheck2 className="w-4 h-4 text-neutral-300 flex-shrink-0" />
                  <span>
                    <strong>RC 8102994</strong> (CAMA 2020 Registered)
                  </span>
                </div>
                <span className="text-neutral-700 hidden sm:inline">•</span>
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-neutral-300 flex-shrink-0" />
                  <span>Dual Presence: Abuja HQ & London Advisory Desk</span>
                </div>
              </div>
            </div>

            {/* Right Column: High-End Architectural Photography & Floating Telemetry HUD */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl bg-neutral-900/95 border border-neutral-800 overflow-hidden shadow-2xl">
                {/* Visual Header with Tab Controls */}
                <div className="flex items-center justify-between p-3.5 sm:p-4 bg-neutral-950/80 border-b border-neutral-800/80">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-mono text-xs uppercase tracking-wider text-neutral-300 font-medium">
                      Mandate Telemetry
                    </span>
                  </div>

                  {/* Visual Switcher */}
                  <div className="flex items-center bg-neutral-900 p-0.5 rounded-lg border border-neutral-800 text-[11px] font-sans">
                    <button
                      type="button"
                      onClick={() => setActiveVisual("infrastructure")}
                      className={`px-2.5 py-1 rounded-md transition-all ${
                        activeVisual === "infrastructure"
                          ? "bg-neutral-800 text-white font-medium shadow-sm"
                          : "text-neutral-400 hover:text-white"
                      }`}
                    >
                      Infrastructure
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveVisual("boardroom")}
                      className={`px-2.5 py-1 rounded-md transition-all ${
                        activeVisual === "boardroom"
                          ? "bg-neutral-800 text-white font-medium shadow-sm"
                          : "text-neutral-400 hover:text-white"
                      }`}
                    >
                      London Desk
                    </button>
                  </div>
                </div>

                {/* Main Hero Photographic Showcase */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-neutral-950">
                  {activeVisual === "infrastructure" ? (
                    <Image
                      src="/images/hero/hero-infrastructure.jpg"
                      alt="Monumental bridge and container port infrastructure"
                      fill
                      priority
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 500px"
                    />
                  ) : (
                    <Image
                      src="/images/hero/advisory-boardroom.jpg"
                      alt="Rhodium Impact London Advisory Boardroom"
                      fill
                      priority
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 500px"
                    />
                  )}

                  {/* Gradient vignettes to blend into obsidian frame */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/30" />

                  {/* Floating Location Pill */}
                  <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-neutral-950/80 backdrop-blur-md border border-neutral-800 text-[11px] font-mono text-neutral-200">
                    <MapPin className="w-3 h-3 text-emerald-400" />
                    <span>{activeVisual === "infrastructure" ? "Sub-Saharan Corridor" : "London Advisory Desk"}</span>
                  </div>

                  {/* Floating Metric Badge */}
                  <div className="absolute bottom-3 right-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-950/90 backdrop-blur-md border border-neutral-700 text-xs font-mono text-white shadow-lg">
                    <span className="text-emerald-400 font-bold">£2.5B+</span>
                    <span className="text-neutral-400 text-[10px]">FACILITIES CLOSED</span>
                  </div>
                </div>

                {/* Telemetry Stats Strip */}
                <div className="p-5 sm:p-6 space-y-4 bg-neutral-900/90">
                  <div className="grid grid-cols-3 gap-2.5 text-center">
                    <div className="p-2.5 rounded-lg bg-neutral-950/60 border border-neutral-800">
                      <span className="text-xl sm:text-2xl font-heading font-bold text-white block">
                        £2.5B+
                      </span>
                      <span className="text-[10px] text-neutral-400 font-mono block">
                        Executed
                      </span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-neutral-950/60 border border-neutral-800">
                      <span className="text-xl sm:text-2xl font-heading font-bold text-white block">
                        20+
                      </span>
                      <span className="text-[10px] text-neutral-400 font-mono block">
                        Mandates
                      </span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-neutral-950/60 border border-neutral-800">
                      <span className="text-xl sm:text-2xl font-heading font-bold text-white block">
                        10,000+
                      </span>
                      <span className="text-[10px] text-neutral-400 font-mono block">
                        SMEs & Farmers
                      </span>
                    </div>
                  </div>

                  {/* Transaction Standards Checklist */}
                  <div className="pt-2 space-y-2 text-xs font-sans">
                    <div className="flex items-center justify-between text-neutral-300">
                      <span className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        FAST-Standard Financial Models
                      </span>
                      <span className="font-mono text-[10px] text-neutral-400">AUDITED</span>
                    </div>
                    <div className="flex items-center justify-between text-neutral-300">
                      <span className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        Sovereign Risk Allocation & PRGs
                      </span>
                      <span className="font-mono text-[10px] text-neutral-400">STRUCTURED</span>
                    </div>
                  </div>

                  {/* Card Footer Link */}
                  <div className="pt-3 border-t border-neutral-800 flex items-center justify-between text-xs">
                    <Link
                      href="/projects"
                      className="font-medium text-neutral-300 hover:text-white transition-colors inline-flex items-center gap-1.5 group"
                    >
                      <span>Explore Case Studies</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <span className="text-[10px] font-mono text-neutral-500">CAMA 2020 RC 8102994</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Institutional Credibility Strip */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-neutral-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-[11px] font-mono uppercase tracking-widest text-neutral-500 mb-5">
              Advising Across Institutional Capital, Multilateral DFIs & Sovereign PPP Frameworks
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-neutral-400 text-xs sm:text-sm font-medium tracking-wide">
              <span className="hover:text-white transition-colors">World Bank Group / IFC</span>
              <span className="text-neutral-700">/</span>
              <span className="hover:text-white transition-colors">African Development Bank (AfDB)</span>
              <span className="text-neutral-700">/</span>
              <span className="hover:text-white transition-colors">British International Investment (BII)</span>
              <span className="text-neutral-700">/</span>
              <span className="hover:text-white transition-colors">Africa Finance Corporation (AFC)</span>
              <span className="text-neutral-700">/</span>
              <span className="hover:text-white transition-colors">Nigerian Institutional Pension Funds</span>
              <span className="text-neutral-700">/</span>
              <span className="hover:text-white transition-colors">ICRC & Sub-National PPP Units</span>
            </div>
          </div>
        </div>
      </section>

      {/* Clean Briefing Video Lightbox Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-neutral-900 rounded-2xl border border-neutral-700 overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b border-neutral-800">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-300 font-medium">
                  Rhodium Impact • Executive Briefing
                </span>
              </div>
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="p-1 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
                aria-label="Close video"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="relative aspect-video w-full bg-black flex items-center justify-center">
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
