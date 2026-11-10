import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Calendar, ArrowRight, ShieldCheck } from "lucide-react";
import { NewsletterForm } from "@/components/forms/NewsletterForm";

export function CtaBanner() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-navy-950 via-navy-900 to-teal-950 text-white relative overflow-hidden">
      {/* Decorative background radial lights */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Main CTA */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Engage Senior Advisory</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15]">
              Have an infrastructure asset that needs to reach{" "}
              <span className="text-teal-400">financial close?</span>
            </h2>

            <p className="text-base sm:text-lg text-rhodium-200 leading-relaxed max-w-xl">
              Whether you are a government PPP unit preparing a national tender, a private developer seeking senior debt, or an institutional fund evaluating an asset, our senior partners are ready to engage.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Button
                href="/book"
                variant="accent"
                size="lg"
                className="bg-teal-500 hover:bg-teal-400 text-navy-950 font-bold rounded-full shadow-[0_10px_30px_rgba(20,184,166,0.3)] transition-all"
                leftIcon={<Calendar className="w-5 h-5 text-navy-950" />}
              >
                Schedule Executive Consultation
              </Button>

              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="text-white border-white/20 hover:bg-white/10 rounded-full backdrop-blur-md"
                rightIcon={<ArrowRight className="w-5 h-5" />}
              >
                Submit General Enquiry
              </Button>
            </div>

            <div className="pt-4 flex items-center gap-6 text-xs text-rhodium-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Confidential NDA Protected</span>
              </span>
              <span>•</span>
              <span>CAMA 2020 RC: 8102994</span>
            </div>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-5 bg-white/[0.04] border border-white/10 rounded-3xl p-8 sm:p-10 backdrop-blur-xl shadow-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-teal-400" />
              <span className="text-xs font-mono uppercase tracking-wider text-teal-300 font-bold">
                Quarterly Deal Intelligence
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Subscribe to Deal Briefings
            </h3>
            <p className="text-sm text-rhodium-300 leading-relaxed mb-6">
              Receive confidential practitioner insights on emerging market infrastructure bankability, local currency bond structuring, and regulatory reforms.
            </p>

            <NewsletterForm variant="stacked" />
          </div>
        </div>
      </div>
    </section>
  );
}
