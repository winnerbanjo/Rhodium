import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { coreTeam, expertNetwork } from "@/content/team";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Linkedin, Mail, CheckCircle2, UserCheck, ShieldAlert, ArrowRight, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Senior Leadership & Expert Network | Rhodium Impact",
  description:
    "Meet our senior-led infrastructure advisory leadership, headed by Femi Oladeinde, and our vetted cross-border network of technical, legal, and E&S specialists.",
};

export default function TeamPage() {
  return (
    <div className="bg-white dark:bg-navy-900 pb-20">
      {/* Header */}
      <div className="bg-rhodium-50 dark:bg-navy-950 border-b border-rhodium-200 dark:border-navy-800 py-10 lg:py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Team" }]} />
          <div className="max-w-3xl mt-4 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
              Senior-Led Mandates
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy-900 dark:text-white leading-tight">
              Partners do the work, not just win it.
            </h1>
            <p className="text-base sm:text-lg text-rhodium-600 dark:text-rhodium-300 leading-relaxed">
              We reject the pyramid model of large consulting firms where seasoned partners pitch the business and junior analysts execute it. At Rhodium Impact, senior partners directly model, draft, and negotiate your transactions.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-20">
        {/* Core Senior Team Grid */}
        <section className="space-y-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
              Transaction Leadership
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-900 dark:text-white mt-1">
              Senior Leadership
            </h2>
            <p className="text-xs sm:text-sm text-rhodium-600 dark:text-rhodium-300 mt-1.5">
              Primary contacts and practice leaders leading transaction advisory across Africa and emerging markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreTeam.map((member) => (
              <Card
                key={member.id}
                hoverEffect
                className={`p-7 border-rhodium-200 dark:border-navy-800 flex flex-col justify-between ${
                  member.isPrimary ? "ring-2 ring-teal-700/50" : ""
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      {/* Photo / Avatar */}
                      {member.image ? (
                        <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-teal-700/40 dark:border-teal-500/40 shadow-sm flex-shrink-0">
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover object-top"
                            sizes="80px"
                          />
                        </div>
                      ) : (
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-navy-900 to-teal-800 text-white flex items-center justify-center font-serif text-xl font-bold border-2 border-rhodium-200 dark:border-navy-700 shadow-sm flex-shrink-0">
                          {member.name
                            .replace(/[\[\]]/g, "")
                            .split(" ")
                            .map((n) => n[0])
                            .slice(0, 2)
                            .join("")}
                        </div>
                      )}

                      <div>
                        {member.isPrimary && (
                          <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300 mb-1">
                            Primary Contact
                          </span>
                        )}
                        <h3 className="text-xl font-serif font-bold text-navy-900 dark:text-white">
                          {member.name}
                        </h3>
                        <p className="text-xs font-semibold text-brass-600 dark:text-brass-400 mt-0.5">
                          {member.role}
                        </p>
                      </div>
                    </div>

                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} on LinkedIn`}
                      className="text-rhodium-400 hover:text-navy-900 dark:hover:text-white p-2 rounded hover:bg-rhodium-100 dark:hover:bg-navy-800 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>

                  <p className="text-xs sm:text-sm text-rhodium-600 dark:text-rhodium-300 leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-rhodium-100 dark:border-navy-800 flex items-center justify-between">
                  {member.email ? (
                    <a
                      href={`mailto:${member.email}`}
                      className="text-xs text-teal-700 dark:text-teal-400 hover:underline flex items-center gap-1.5 font-medium"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>{member.email}</span>
                    </a>
                  ) : (
                    <span className="text-xs text-rhodium-400">
                      Direct Advisory Partner
                    </span>
                  )}

                  <Button
                    href="/book"
                    variant="outline"
                    size="sm"
                    className="text-xs"
                  >
                    Request Meeting
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Our Expert Network */}
        <section className="bg-rhodium-50 dark:bg-navy-950 rounded-xl p-8 sm:p-12 border border-rhodium-200 dark:border-navy-800 space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
              On-Demand Technical Horsepower
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-900 dark:text-white">
              Our Vetted Expert Network
            </h2>
            <p className="text-sm sm:text-base text-rhodium-600 dark:text-rhodium-300 leading-relaxed">
              Every infrastructure asset is idiosyncratic. We assemble multidisciplinary transaction squads tailored to the exact regulatory and engineering demands of each mandate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertNetwork.map((net, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-navy-900 p-6 rounded-lg border border-rhodium-200 dark:border-navy-800 shadow-subtle space-y-4"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-400 flex items-center justify-center font-bold text-xs font-mono">
                    0{idx + 1}
                  </div>
                  <h3 className="font-serif font-bold text-base text-navy-900 dark:text-white">
                    {net.discipline}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-rhodium-600 dark:text-rhodium-300 leading-relaxed">
                  {net.description}
                </p>

                <div className="pt-2 border-t border-rhodium-100 dark:border-navy-800 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-rhodium-400">
                    Mandate Deliverables:
                  </span>
                  <ul className="text-xs text-rhodium-700 dark:text-rhodium-300 space-y-1">
                    {net.keyDeliverables.map((item, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-teal-600 flex-shrink-0" />
                        <span className="truncate">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Advisory Inquiry Callout */}
        <section className="bg-navy-900 text-white rounded-xl p-8 sm:p-10 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold">
            Retain Senior Transaction Advisers
          </h2>
          <p className="text-sm text-rhodium-300 max-w-lg mx-auto">
            Discuss your infrastructure mandate directly with Femi Oladeinde and our senior advisory partners.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <Button
              href="/book"
              variant="accent"
              size="lg"
              leftIcon={<Calendar className="w-4 h-4" />}
            >
              Book a Consultation
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
