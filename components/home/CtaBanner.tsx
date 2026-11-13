import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Calendar, ArrowUpRight, ShieldCheck, Sparkles, Mail, CheckCircle2 } from "lucide-react";
import { NewsletterForm } from "@/components/forms/NewsletterForm";

export function CtaBanner() {
  return (
    <section className="py-24 lg:py-32 bg-obsidian-950 text-white relative overflow-hidden border-t border-white/5">
      {/* Neuros Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-coral-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[400px] bg-cobalt-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Main CTA Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-coral-400 text-xs font-semibold tracking-wide backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-coral-500 animate-pulse" />
              <span>/ Executive Deal Advisory</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] font-heading">
              Have an infrastructure asset that needs to reach{" "}
              <span className="neuros-gradient-text">financial close?</span>
            </h2>

            <p className="text-base sm:text-lg text-obsidian-300 leading-relaxed max-w-xl font-sans">
              Whether you are a government PPP unit preparing a national tender, a private developer seeking senior debt, or an institutional fund evaluating an asset, our senior partners are ready to engage.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Button
                href="/book"
                variant="neuros"
                size="lg"
                leftIcon={<Calendar className="w-4 h-4" />}
              >
                Schedule Executive Consultation
              </Button>

              <Button
                href="/contact"
                variant="neuros-outline"
                size="lg"
                rightIcon={<ArrowUpRight className="w-4 h-4" />}
              >
                Submit Deal Memo
              </Button>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-obsidian-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Confidential NDA Protected</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cobalt-400" />
                <span>Direct Partner Engagement</span>
              </span>
              <span>•</span>
              <span>CAMA 2020 RC: 8102994</span>
            </div>
          </div>

          {/* Newsletter Box - Neuros Glass Card */}
          <div className="lg:col-span-5 bg-obsidian-900/80 border border-white/10 rounded-3xl p-8 sm:p-10 backdrop-blur-xl shadow-2xl relative group hover:border-coral-500/30 transition-all duration-300">
            <div className="absolute top-0 right-8 -translate-y-1/2">
              <span className="px-3.5 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-gradient-to-r from-coral-500 to-cobalt-600 text-white shadow-lg">
                Practitioner Intelligence
              </span>
            </div>

            <div className="flex items-center gap-2 mb-3 mt-1">
              <span className="w-2 h-2 rounded-full bg-coral-400 animate-ping" />
              <span className="text-xs font-mono uppercase tracking-wider text-coral-400 font-bold">
                Dealflow Briefing
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2 font-heading">
              Subscribe to Deal Briefings
            </h3>
            <p className="text-xs text-obsidian-300 leading-relaxed mb-6 font-sans">
              Receive confidential practitioner insights on emerging market infrastructure bankability, local currency bond structuring, and regulatory reforms.
            </p>

            <NewsletterForm variant="stacked" />
          </div>
        </div>
      </div>
    </section>
  );
}
