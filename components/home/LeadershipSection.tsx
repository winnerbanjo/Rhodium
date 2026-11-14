import React from "react";
import Link from "next/link";
import Image from "next/image";
import { coreTeam } from "@/content/team";
import { ArrowRight, CheckCircle2, ShieldCheck, Mail, Linkedin, GraduationCap, Award } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function LeadershipSection() {
  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-[#0E0E0E] border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-mono uppercase tracking-wider text-neutral-800 dark:text-neutral-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Senior Partner Execution • No Juniors</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-neutral-900 dark:text-white leading-[1.12]">
              Advisory Leadership
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 font-sans">
              Senior-led transaction execution with direct access to partners who have spent decades structuring deals at tier-one international and domestic financial institutions.
            </p>
          </div>

          <Button
            href="/team"
            variant="primary"
            size="md"
            className="self-start md:self-auto bg-neutral-900 text-white hover:bg-black font-medium"
            rightIcon={<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
          >
            Full Team & Expert Network
          </Button>
        </div>

        {/* 3 Executive Leaders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {coreTeam.map((member) => (
            <div
              key={member.id}
              className="group bg-neutral-50 dark:bg-neutral-900/60 rounded-2xl p-6 sm:p-7 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-900 dark:hover:border-neutral-600 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-lg"
            >
              <div>
                {/* Photo Container */}
                <div className="relative h-64 sm:h-72 w-full rounded-xl overflow-hidden mb-6 bg-neutral-200 dark:bg-neutral-950 border border-neutral-300/60 dark:border-neutral-800">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-serif text-3xl font-bold text-neutral-400">
                      {member.name.slice(0, 2)}
                    </div>
                  )}

                  {/* Gradient bottom overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  {/* Role Tag over photo */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 block mb-0.5 font-medium">
                      {member.isPrimary ? "Lead Transaction Adviser" : "Practice Partner"}
                    </span>
                    <h3 className="font-heading font-bold text-lg leading-tight text-white">
                      {member.name}
                    </h3>
                  </div>
                </div>

                {/* Subtitle Role */}
                <div className="mb-4">
                  <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400 leading-snug">
                    {member.role}
                  </p>
                </div>

                {/* Bio Excerpt */}
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 line-clamp-4 leading-relaxed font-sans mb-5">
                  {member.bio}
                </p>
              </div>

              {/* Card Footer: Credentials & Actions */}
              <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
                <Link
                  href="/book"
                  className="text-xs font-medium text-neutral-900 dark:text-white hover:underline inline-flex items-center gap-1.5"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>

                <div className="flex items-center gap-2">
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="p-1.5 rounded-md text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
                      title={member.email}
                      aria-label="Email partner"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-md text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
                      title="LinkedIn profile"
                      aria-label="LinkedIn profile"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
