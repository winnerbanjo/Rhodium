import React from "react";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { siteConfig } from "@/content/siteConfig";

export const metadata: Metadata = {
  title: "Terms of Service & Advisory Disclaimer | Rhodium Impact",
  description:
    "Terms of service, professional advisory disclaimer, and website terms of use for Rhodium Impact Consulting Ltd.",
};

export default function TermsPage() {
  return (
    <div className="bg-white dark:bg-navy-900 pb-20">
      <div className="bg-rhodium-50 dark:bg-navy-950 border-b border-rhodium-200 dark:border-navy-800 py-10 lg:py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Terms of Service" }]} />
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-navy-900 dark:text-white mt-4">
            Terms of Service & Advisory Disclaimer
          </h1>
          <p className="text-xs sm:text-sm text-rhodium-500 mt-2">
            Governing entity: Rhodium Impact Consulting Ltd (CAMA 2020 Registered)
          </p>
        </div>
      </div>

      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-8 text-sm sm:text-base text-rhodium-700 dark:text-rhodium-200 leading-relaxed font-sans">
        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-navy-900 dark:text-white">
            1. Advisory Status & Legal Disclaimer
          </h2>
          <div className="p-4 rounded-lg bg-brass-50 dark:bg-brass-950/40 border border-brass-200 dark:border-brass-900 text-xs sm:text-sm font-medium text-brass-900 dark:text-brass-200">
            {siteConfig.legal.disclaimer}
          </div>
          <p>
            The content, publications, presentations, and articles published on this website are provided for general institutional informational purposes only. Nothing on this website constitutes an offer of securities, an underwriting commitment, investment solicitation, formal credit rating, or legal advice.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-navy-900 dark:text-white">
            2. Formal Client Engagements
          </h2>
          <p>
            An official advisory relationship with Rhodium Impact Consulting Ltd is established exclusively upon the mutual execution of a formal Transaction Advisory Agreement, Mandate Letter, or Master Services Agreement detailing the specific scope of work, liability allocations, deliverables, and remuneration.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-navy-900 dark:text-white">
            3. Intellectual Property Rights
          </h2>
          <p>
            All trademarks, logos, methodologies, financial modelling frameworks, text, graphics, and proprietary analytical formulations displayed on this website are the intellectual property of Rhodium Impact Consulting Ltd or its licensors. Unauthorized commercial copying or redistribution without written attribution is strictly prohibited.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-navy-900 dark:text-white">
            4. Governing Law & Jurisdiction
          </h2>
          <p>
            These terms of website use and any preliminary dispute arising in connection with this platform shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria.
          </p>
        </section>
      </div>
    </div>
  );
}
