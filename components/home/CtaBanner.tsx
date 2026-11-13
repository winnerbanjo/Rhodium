import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Calendar, ArrowUpRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { NewsletterForm } from "@/components/forms/NewsletterForm";

export function CtaBanner() {
  return (
    <section className="py-20 lg:py-28 bg-[#0A0A0A] text-white relative overflow-hidden border-t border-neutral-800">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Main CTA Column */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-mono tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Executive Advisory</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15] font-heading">
              Have an infrastructure asset that needs to reach financial close?
            </h2>

            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-xl font-sans">
              Whether you are a government PPP unit preparing a national tender, a private developer seeking senior debt, or an institutional fund evaluating an asset, our senior partners are ready to engage.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <Button
                href="/book"
                variant="neuros-dark"
                size="lg"
                className="bg-white text-neutral-950 hover:bg-neutral-100 font-semibold px-6"
                leftIcon={<Calendar className="w-4 h-4" />}
              >
                Schedule Executive Consultation
              </Button>

              <Button
                href="/contact"
                variant="neuros-outline"
                size="lg"
                className="border-neutral-700 hover:border-neutral-500 text-white hover:bg-neutral-900 px-6"
                rightIcon={<ArrowUpRight className="w-4 h-4" />}
              >
                Submit Deal Memo
              </Button>
            </div>

            <div className="pt-3 flex flex-wrap items-center gap-5 text-xs text-neutral-400 font-sans">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Confidential NDA Protected</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-neutral-400" />
                <span>Direct Partner Engagement</span>
              </span>
              <span>•</span>
              <span>CAMA 2020 RC: 8102994</span>
            </div>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-5 bg-neutral-900/80 border border-neutral-800 rounded-2xl p-7 sm:p-9 shadow-xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-300 font-medium">
                Dealflow Briefing
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-heading">
              Subscribe to Deal Briefings
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed mb-5 font-sans">
              Receive confidential practitioner insights on emerging market infrastructure bankability, local currency bond structuring, and regulatory reforms.
            </p>

            <NewsletterForm variant="stacked" />
          </div>
        </div>
      </div>
    </section>
  );
}
