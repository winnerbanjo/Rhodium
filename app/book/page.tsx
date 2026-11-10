import React from "react";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { BookingForm } from "@/components/forms/BookingForm";
import { ShieldCheck, Clock, Calendar, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Book a Consultation | Rhodium Impact",
  description:
    "Schedule a confidential preliminary infrastructure advisory consultation with senior transaction partners at Rhodium Impact Consulting Ltd.",
};

interface BookPageProps {
  searchParams: {
    service?: string;
    sector?: string;
  };
}

export default function BookPage({ searchParams }: BookPageProps) {
  return (
    <div className="bg-white dark:bg-navy-900 pb-20">
      {/* Header */}
      <div className="bg-rhodium-50 dark:bg-navy-950 border-b border-rhodium-200 dark:border-navy-800 py-10 lg:py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Book a Consultation" }]} />
          <div className="max-w-3xl mt-4 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
              Direct Senior Advisory Access
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy-900 dark:text-white leading-tight">
              Schedule a Transaction Consultation
            </h1>
            <p className="text-base sm:text-lg text-rhodium-600 dark:text-rhodium-300 leading-relaxed">
              Book a 60-minute confidential scoping session with our lead transaction partners to review your project feasibility, risk allocation, or capital structuring requirements.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Booking Form */}
          <div className="lg:col-span-8">
            <BookingForm
              initialService={searchParams.service}
              initialSector={searchParams.sector}
            />
          </div>

          {/* Right Sidebar: Consultation Protocols */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-rhodium-50 dark:bg-navy-950 p-6 rounded-xl border border-rhodium-200 dark:border-navy-800 space-y-5">
              <h3 className="font-serif font-bold text-lg text-navy-900 dark:text-white">
                What to Expect
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-rhodium-600 dark:text-rhodium-300">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-teal-700 dark:text-teal-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-navy-900 dark:text-white">
                      Strict NDA & Confidentiality
                    </h4>
                    <p className="text-xs text-rhodium-500 mt-0.5">
                      All transaction briefs, project data, and model parameters are protected under standard non-disclosure protocols.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-brass-600 dark:text-brass-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-navy-900 dark:text-white">
                      60-Minute Scoping Session
                    </h4>
                    <p className="text-xs text-rhodium-500 mt-0.5">
                      Focused assessment of transaction bottlenecks, debt appetite, and statutory procurement paths.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-700 dark:text-teal-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-navy-900 dark:text-white">
                      Direct Partner Attendance
                    </h4>
                    <p className="text-xs text-rhodium-500 mt-0.5">
                      Sessions are led directly by Femi Oladeinde and practice partners, not business development representatives.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-rhodium-200 dark:border-navy-800 text-xs text-rhodium-500">
                <p>
                  <strong>Preferred Meeting Formats:</strong> Google Meet, Microsoft Teams, or in-person at our Abuja offices by prior appointment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
