import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { corporateValues } from "@/content/values";
import { siteConfig } from "@/content/siteConfig";
import { Card, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  ShieldCheck,
  Scale,
  Globe2,
  Target,
  Award,
  ArrowRight,
  CheckCircle2,
  Building,
  Users2,
  FileCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Infrastructure Advisory Firm for Emerging Markets",
  description:
    "Learn about Rhodium Impact Consulting Ltd: our mission, vision, values, operating model, and credit-committee-grade advisory expertise across Africa and emerging frontiers.",
};

export default function AboutPage() {
  const iconMap: Record<string, React.ReactNode> = {
    ShieldCheck: <ShieldCheck className="w-6 h-6" />,
    Scale: <Scale className="w-6 h-6" />,
    Globe2: <Globe2 className="w-6 h-6" />,
    Target: <Target className="w-6 h-6" />,
    Award: <Award className="w-6 h-6" />,
  };

  return (
    <div className="bg-white dark:bg-navy-900 pb-20">
      {/* Page Header with Breadcrumbs */}
      <div className="bg-rhodium-50 dark:bg-navy-950 border-b border-rhodium-200 dark:border-navy-800 py-10 lg:py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "About" }]} />
          <div className="max-w-3xl mt-4 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
              Institutional Overview
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy-900 dark:text-white leading-tight">
              Bridging the bankability divide in emerging markets.
            </h1>
            <p className="text-base sm:text-lg text-rhodium-600 dark:text-rhodium-300 leading-relaxed">
              We operate at the nexus of infrastructure need and institutional capital, taking transactions from initial idea to binding financial close and long-term operations.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-20">
        {/* 1. Who We Are */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
              Who We Are
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-900 dark:text-white leading-snug">
              Credit-committee discipline grounded in African reality.
            </h2>
            <div className="w-16 h-1 bg-teal-700 dark:bg-teal-400" />
            <p className="text-sm sm:text-base text-rhodium-600 dark:text-rhodium-300 leading-relaxed">
              Rhodium Impact is an infrastructure advisory firm dedicated to emerging markets, with proud roots in Africa. We sit directly between those who need infrastructure and the capital, regulators, and contractors needed to build it.
            </p>
            <p className="text-sm sm:text-base text-rhodium-600 dark:text-rhodium-300 leading-relaxed">
              We combine international structured and project finance discipline with practical, boots-on-the-ground emerging-market knowledge across governments, DFIs, local commercial banks, domestic pension funds, and private project sponsors.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="bg-rhodium-50 dark:bg-navy-950 p-8 rounded-xl border border-rhodium-200 dark:border-navy-800 space-y-6">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-teal-700 dark:text-teal-400 mb-1">
                  Our Mission
                </h3>
                <p className="text-lg sm:text-xl font-serif font-semibold text-navy-900 dark:text-white leading-relaxed">
                  &ldquo;To turn infrastructure needs in emerging markets into investable, well-structured projects that reach financial close, get built, and deliver lasting returns for investors and communities.&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-rhodium-200 dark:border-navy-800">
                <h3 className="text-xs font-bold uppercase tracking-widest text-brass-600 dark:text-brass-400 mb-1">
                  Our Vision
                </h3>
                <p className="text-lg sm:text-xl font-serif font-semibold text-navy-900 dark:text-white leading-relaxed">
                  &ldquo;To be the first call for any sponsor, government or investor bringing an infrastructure project to market in an emerging economy.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Core Values */}
        <section className="space-y-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
              Institutional Values
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-900 dark:text-white mt-1">
              Five Principles That Govern Our Mandates
            </h2>
            <p className="text-sm text-rhodium-600 dark:text-rhodium-300 mt-2">
              Our reputation is our primary asset. We apply these standards without exception across every engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {corporateValues.map((val) => {
              const Icon = iconMap[val.icon] || <ShieldCheck className="w-6 h-6" />;

              return (
                <Card
                  key={val.id}
                  hoverEffect
                  className="p-6 border-rhodium-200 dark:border-navy-800 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-400 flex items-center justify-center mb-4">
                      {Icon}
                    </div>
                    <CardTitle className="text-lg mb-1">{val.title}</CardTitle>
                    <p className="text-xs font-semibold text-brass-600 dark:text-brass-400 mb-3">
                      {val.tagline}
                    </p>
                    <p className="text-xs sm:text-sm text-rhodium-600 dark:text-rhodium-300 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </section>

        {/* 3. Operating Model */}
        <section className="bg-rhodium-50 dark:bg-navy-950 rounded-xl p-8 sm:p-12 border border-rhodium-200 dark:border-navy-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
                Operating Architecture
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-900 dark:text-white">
                How We Deliver: Core Agility & Vetted Network
              </h2>
              <p className="text-sm sm:text-base text-rhodium-600 dark:text-rhodium-300 leading-relaxed">
                Rather than burdening transactions with the overhead of bloated generalist consulting hierarchies, Rhodium operates a precision delivery model:
              </p>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="bg-white dark:bg-navy-900 p-5 rounded-lg border border-rhodium-200 dark:border-navy-800 flex items-start gap-4 shadow-subtle">
                <Users2 className="w-6 h-6 text-teal-700 dark:text-teal-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif font-bold text-base text-navy-900 dark:text-white">
                    Senior Partner Direction
                  </h3>
                  <p className="text-xs sm:text-sm text-rhodium-600 dark:text-rhodium-300 leading-relaxed mt-1">
                    Every client transaction is directly quarterbacked by our senior partners. Partners draft models, negotiate term sheets, and interface directly with credit committees and government ministers.
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-navy-900 p-5 rounded-lg border border-rhodium-200 dark:border-navy-800 flex items-start gap-4 shadow-subtle">
                <Globe2 className="w-6 h-6 text-brass-600 dark:text-brass-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif font-bold text-base text-navy-900 dark:text-white">
                    Vetted Specialist Network
                  </h3>
                  <p className="text-xs sm:text-sm text-rhodium-600 dark:text-rhodium-300 leading-relaxed mt-1">
                    For technical engineering, legal opinions, geotechnical telemetry, and accredited ESIAs, we mobilise pre-vetted specialists in each jurisdiction, bespoke to the sector and asset class.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Corporate Statutory Information Card */}
        <section className="bg-white dark:bg-navy-900 rounded-xl p-8 border-2 border-rhodium-200 dark:border-navy-800 shadow-card">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-rhodium-100 dark:border-navy-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-navy-900 text-white flex items-center justify-center">
                <Building className="w-5 h-5 text-brass-400" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-navy-900 dark:text-white">
                  Corporate & Statutory Registration
                </h3>
                <p className="text-xs text-rhodium-500">
                  Incorporated under the Federal Republic of Nigeria Companies and Allied Matters Act 2020
                </p>
              </div>
            </div>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950 text-teal-800 dark:text-teal-300 text-xs font-semibold">
              <FileCheck className="w-3.5 h-3.5" />
              <span>Private Company Limited by Shares</span>
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 text-xs">
            <div>
              <span className="font-bold uppercase tracking-wider text-rhodium-400 block mb-1">
                Full Registered Entity
              </span>
              <p className="font-serif font-bold text-sm text-navy-900 dark:text-white">
                {siteConfig.legalName}
              </p>
            </div>

            <div>
              <span className="font-bold uppercase tracking-wider text-rhodium-400 block mb-1">
                Statutory Governing Law
              </span>
              <p className="font-semibold text-sm text-navy-900 dark:text-white">
                CAMA 2020 (Nigeria)
              </p>
            </div>

            <div>
              <span className="font-bold uppercase tracking-wider text-rhodium-400 block mb-1">
                Incorporation Memorandum
              </span>
              <p className="font-semibold text-sm text-navy-900 dark:text-white">
                {siteConfig.legal.camaDate}
              </p>
            </div>

            <div>
              <span className="font-bold uppercase tracking-wider text-rhodium-400 block mb-1">
                CAC Registration Number
              </span>
              <p className="font-mono font-semibold text-sm text-teal-700 dark:text-teal-400">
                {siteConfig.legal.rcNumber}
              </p>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-navy-900 text-white p-8 sm:p-12 rounded-xl text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold">
            Explore How We Can Structure Your Infrastructure Project
          </h2>
          <p className="text-sm sm:text-base text-rhodium-300 max-w-xl mx-auto">
            Speak directly with a senior partner about your transaction requirements, risk allocation challenges, or capital structuring needs.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/book" variant="accent" size="lg">
              Book a Consultation
            </Button>
            <Button href="/team" variant="outline" size="lg" className="text-white border-white/30">
              Meet our Leadership
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
