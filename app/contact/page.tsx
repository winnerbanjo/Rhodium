import React from "react";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/content/siteConfig";
import { faqsData } from "@/content/faqs";
import { Accordion } from "@/components/ui/Accordion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Linkedin,
  HelpCircle,
  Building2,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Contact & Advisory Enquiries | Rhodium Impact",
  description:
    "Direct contact details, headquarters location, enquiry channels, and frequently asked questions for Rhodium Impact Consulting Ltd.",
};

export default function ContactPage() {
  const faqItems = faqsData.map((faq, idx) => ({
    id: `faq-${idx}`,
    title: faq.question,
    content: (
      <div className="space-y-2">
        <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
          {faq.category}
        </span>
        <p className="text-xs sm:text-sm text-rhodium-600 dark:text-rhodium-300 leading-relaxed">
          {faq.answer}
        </p>
      </div>
    ),
  }));

  return (
    <div className="bg-white dark:bg-navy-900 pb-20">
      {/* Header */}
      <div className="bg-rhodium-50 dark:bg-navy-950 border-b border-rhodium-200 dark:border-navy-800 py-10 lg:py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Contact" }]} />
          <div className="max-w-3xl mt-4 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
              Institutional Communications
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy-900 dark:text-white leading-tight">
              Connect with our Advisory Team
            </h1>
            <p className="text-base sm:text-lg text-rhodium-600 dark:text-rhodium-300 leading-relaxed">
              Reach our transaction leaders directly for mandate discussions, consortium partnerships, or institutional capacity-building programmes.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-20">
        {/* Top Grid: Enquiry Form & Office Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Enquiry Form */}
          <div className="lg:col-span-7 bg-white dark:bg-navy-900 p-8 rounded-xl border border-rhodium-200 dark:border-navy-800 shadow-card space-y-6">
            <div>
              <h2 className="text-2xl font-serif font-bold text-navy-900 dark:text-white">
                Submit an Advisory Brief
              </h2>
              <p className="text-xs sm:text-sm text-rhodium-600 dark:text-rhodium-300 mt-1">
                All communications are treated with strict confidentiality under credit-grade protocols.
              </p>
            </div>

            <ContactForm />
          </div>

          {/* Right Sidebar: Contact details & Map Placeholder */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-rhodium-50 dark:bg-navy-950 p-6 sm:p-8 rounded-xl border border-rhodium-200 dark:border-navy-800 space-y-6">
              <h3 className="font-serif font-bold text-xl text-navy-900 dark:text-white">
                Registered Office & Contacts
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-rhodium-700 dark:text-rhodium-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-teal-700 dark:text-teal-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-navy-900 dark:text-white">
                      Registered Address:
                    </h4>
                    <p className="text-rhodium-500 mt-0.5">
                      {siteConfig.contact.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-teal-700 dark:text-teal-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-navy-900 dark:text-white">
                      Official Inbox:
                    </h4>
                    <a
                      href={`mailto:${siteConfig.contact.email.replace(/[\[\]]/g, "")}`}
                      className="text-teal-700 dark:text-teal-400 hover:underline mt-0.5 block"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-teal-700 dark:text-teal-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-navy-900 dark:text-white">
                      Direct Telephone:
                    </h4>
                    <p className="text-rhodium-500 mt-0.5">
                      {siteConfig.contact.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-brass-600 dark:text-brass-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-navy-900 dark:text-white">
                      Operating Hours:
                    </h4>
                    <p className="text-rhodium-500 mt-0.5">
                      {siteConfig.contact.hours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick direct book CTA */}
              <div className="pt-4 border-t border-rhodium-200 dark:border-navy-800">
                <Button
                  href="/book"
                  variant="accent"
                  size="md"
                  className="w-full justify-center"
                  leftIcon={<Calendar className="w-4 h-4" />}
                >
                  Book 60-Min Consultation
                </Button>
              </div>
            </div>

            {/* Embedded Map Placeholder */}
            <div className="rounded-xl border border-rhodium-200 dark:border-navy-800 overflow-hidden bg-rhodium-100 dark:bg-navy-950 p-6 text-center space-y-3">
              <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-rhodium-500">
                <Building2 className="w-4 h-4 text-teal-700" />
                <span>Office Location — Abuja, Nigeria</span>
              </div>

              {/* Stylized vector map graphic */}
              <div className="h-40 w-full bg-navy-900 rounded-lg flex flex-col items-center justify-center text-white relative overflow-hidden p-4">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#8A97A8_1px,transparent_1px)] [background-size:16px_16px]" />
                <MapPin className="w-8 h-8 text-brass-400 animate-bounce mb-2 z-10" />
                <p className="text-xs font-bold text-white z-10">
                  Abuja Central Business District
                </p>
                <p className="text-[10px] text-rhodium-300 z-10">
                  Federal Capital Territory, Nigeria
                </p>
                <span className="text-[9px] text-rhodium-400 mt-2 z-10">
                  [Google Maps embed slot: Add API key or embed iframe]
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs Section */}
        <section className="bg-rhodium-50 dark:bg-navy-950 rounded-xl p-8 sm:p-12 border border-rhodium-200 dark:border-navy-800 space-y-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-teal-700 dark:text-teal-400 mb-1">
              <HelpCircle className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">
                Advisory Clarifications
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-900 dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-rhodium-600 dark:text-rhodium-300 mt-2">
              Common questions regarding our mandate scoping, geographical coverage, and transaction engagement models.
            </p>
          </div>

          <div className="max-w-3xl">
            <Accordion items={faqItems} allowMultiple />
          </div>
        </section>
      </div>
    </div>
  );
}
