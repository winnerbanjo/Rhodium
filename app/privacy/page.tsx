import React from "react";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { siteConfig } from "@/content/siteConfig";

export const metadata: Metadata = {
  title: "Privacy Policy | Rhodium Impact Consulting Ltd",
  description:
    "Privacy and data protection policy for Rhodium Impact Consulting Ltd, complying with Nigeria Data Protection Regulation (NDPR) and international best practices.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-white dark:bg-navy-900 pb-20">
      <div className="bg-rhodium-50 dark:bg-navy-950 border-b border-rhodium-200 dark:border-navy-800 py-10 lg:py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Privacy Policy" }]} />
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-navy-900 dark:text-white mt-4">
            Privacy & Data Protection Policy
          </h1>
          <p className="text-xs sm:text-sm text-rhodium-500 mt-2">
            Last updated: November 2024 • Governing jurisdiction: Federal Republic of Nigeria (NDPR compliant)
          </p>
        </div>
      </div>

      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-8 text-sm sm:text-base text-rhodium-700 dark:text-rhodium-200 leading-relaxed font-sans">
        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-navy-900 dark:text-white">
            1. Institutional Commitment to Privacy
          </h2>
          <p>
            Rhodium Impact Consulting Ltd (&ldquo;Rhodium Impact&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is committed to protecting the privacy, confidentiality, and data integrity of all clients, sponsors, government officials, and website visitors.
          </p>
          <p>
            This Privacy Policy outlines how we collect, store, utilize, and protect personal and institutional information in full compliance with the Nigeria Data Protection Act 2023 (NDPA), the Nigeria Data Protection Regulation (NDPR), and applicable international standards.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-navy-900 dark:text-white">
            2. Scope of Information Collected
          </h2>
          <p>We may collect and process information provided during:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Preliminary consultation requests and scheduling forms</li>
            <li>Advisory proposal submissions (RFPs) and scoping briefs</li>
            <li>Direct contact inquiries regarding mandates, partnerships, or careers</li>
            <li>Executive briefing newsletter subscriptions</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-navy-900 dark:text-white">
            3. Treatment of Confidential Project & Transaction Data
          </h2>
          <p>
            Transaction feasibility briefs, financial modeling files, and concession documents shared with Rhodium Impact during the course of advisory engagements are treated with strict confidentiality. Such materials are never disclosed to third parties or used for external communications without express prior written consent from the appointing client.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-navy-900 dark:text-white">
            4. Cookies and Analytical Tracking
          </h2>
          <p>
            We deploy privacy-first, minimal analytical cookies to understand how visitors engage with our thought leadership and service offerings. You may adjust or revoke your cookie preferences at any time through our on-site preferences banner.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-navy-900 dark:text-white">
            5. Inquiries & Data Protection Officer
          </h2>
          <p>
            For inquiries regarding your personal data or to request data rectification or erasure, please contact our compliance desk at:
          </p>
          <div className="p-4 rounded-lg bg-rhodium-50 dark:bg-navy-950 border border-rhodium-200 dark:border-navy-800 text-xs">
            <p className="font-bold text-navy-900 dark:text-white">Data Protection & Legal Compliance</p>
            <p>Rhodium Impact Consulting Ltd</p>
            <p>Email: {siteConfig.contact.email}</p>
            <p>Registered Office: {siteConfig.contact.address}</p>
          </div>
        </section>
      </div>
    </div>
  );
}
