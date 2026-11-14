"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { projectCaseStudies, trackRecordMetrics } from "@/content/projects";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Counter } from "@/components/ui/Counter";
import { ArrowRight, MapPin, Building, Filter, AlertCircle, Calendar } from "lucide-react";

export default function ProjectsPage() {
  const [selectedSector, setSelectedSector] = useState<string>("all");
  const [selectedService, setSelectedService] = useState<string>("all");

  const sectors = [
    { id: "all", label: "All Sectors" },
    { id: "free-trade-zones", label: "Free Trade Zones" },
    { id: "power-and-utilities", label: "Power & Utilities" },
    { id: "healthcare", label: "Healthcare" },
  ];

  const filteredProjects = projectCaseStudies.filter((project) => {
    const matchesSector =
      selectedSector === "all" || project.sectorId === selectedSector;
    return matchesSector;
  });

  return (
    <div className="bg-white dark:bg-navy-900 pb-20">
      {/* Header */}
      <div className="bg-rhodium-50 dark:bg-navy-950 border-b border-rhodium-200 dark:border-navy-800 py-10 lg:py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Projects" }]} />
          <div className="max-w-3xl mt-4 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
              Transaction Experience
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy-900 dark:text-white leading-tight">
              Case Studies & Advisory Track Record
            </h1>
            <p className="text-base sm:text-lg text-rhodium-600 dark:text-rhodium-300 leading-relaxed">
              Real-world demonstrations of how structured project finance, credit enhancement, and bankable contractual design bring emerging market transactions to financial close.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        {/* Track Record Counter Strip */}
        <section className="bg-navy-900 text-white rounded-xl p-8 sm:p-10 shadow-card border border-navy-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-navy-800">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brass-400">
                Institutional Mandates
              </span>
              <h2 className="text-2xl font-serif font-bold text-white mt-1">
                Our Track Record
              </h2>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-rhodium-400 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
              <AlertCircle className="w-3.5 h-3.5 text-brass-400" />
              <span>[Track record values marked for client confirmation]</span>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-8">
            {trackRecordMetrics.map((metric) => (
              <div key={metric.id} className="space-y-1">
                <div className="text-3xl sm:text-4xl font-serif font-bold text-teal-400">
                  <Counter value={metric.value} />
                </div>
                <h3 className="text-sm font-semibold text-white">
                  {metric.label}
                </h3>
                <p className="text-xs text-rhodium-400">
                  {metric.subtext}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Filter Bar */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-rhodium-200 dark:border-navy-800">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rhodium-500">
              <Filter className="w-3.5 h-3.5" />
              <span>Filter by Sector:</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {sectors.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => setSelectedSector(sec.id)}
                  className={`text-xs px-3 py-1.5 rounded-full transition-all ${
                    selectedSector === sec.id
                      ? "bg-teal-700 text-white font-semibold"
                      : "bg-rhodium-100 dark:bg-navy-800 text-rhodium-700 dark:text-rhodium-300 hover:bg-rhodium-200"
                  }`}
                >
                  {sec.label}
                </button>
              ))}
            </div>
          </div>

          {/* Notice of Sample Data */}
          <div className="p-4 rounded-lg bg-brass-50 dark:bg-brass-950/40 border border-brass-200 dark:border-brass-900/60 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-brass-700 dark:text-brass-400 flex-shrink-0 mt-0.5" />
            <div className="text-xs text-brass-900 dark:text-brass-200 space-y-0.5">
              <p className="font-bold">
                Governance & Confidentiality Notice:
              </p>
              <p>
                The case studies displayed below represent illustrative transaction archetypes based on our core advisory capabilities. In accordance with strict non-disclosure agreements, specific counterparty and commercial data have been sanitized with bracketed placeholders.
              </p>
            </div>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.slug}
                hoverEffect
                className="flex flex-col justify-between border-rhodium-200 dark:border-navy-800 p-6 sm:p-7 bg-white dark:bg-navy-900 shadow-card overflow-hidden"
              >
                <div>
                  {project.image && (
                    <div className="relative h-44 -mx-6 sm:-mx-7 -mt-6 sm:-mt-7 mb-4 overflow-hidden rounded-t-xl bg-neutral-950">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>
                  )}

                  <div className="flex items-center justify-between gap-2 mb-4">
                    <Badge variant="teal">{project.sectorName}</Badge>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brass-600 dark:text-brass-400">
                      Sample Case Study
                    </span>
                  </div>

                  <Link href={`/projects/${project.slug}`} className="group block mb-3">
                    <CardTitle className="text-lg font-serif leading-snug group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors">
                      {project.title}
                    </CardTitle>
                  </Link>

                  <div className="space-y-1.5 text-xs text-rhodium-500 mb-4">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-rhodium-400" />
                      <span>{project.countryPlaceholder}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5 text-rhodium-400" />
                      <span className="truncate">{project.clientPlaceholder}</span>
                    </div>
                  </div>

                  <CardDescription className="text-xs sm:text-sm line-clamp-3 leading-relaxed mb-6">
                    {project.shortSummary}
                  </CardDescription>

                  {/* Metrics preview */}
                  <div className="grid grid-cols-2 gap-2 pt-4 border-t border-rhodium-100 dark:border-navy-800">
                    {project.metrics.slice(0, 2).map((m, i) => (
                      <div key={i} className="p-2 rounded bg-rhodium-50 dark:bg-navy-950">
                        <span className="text-[10px] uppercase font-bold text-rhodium-400 block truncate">
                          {m.label}
                        </span>
                        <span className="font-mono font-bold text-xs text-navy-900 dark:text-teal-300">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-rhodium-100 dark:border-navy-800">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 dark:text-teal-400 hover:underline"
                  >
                    <span>Read Full Transaction Brief</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Advisory Consultation Banner */}
        <section className="bg-rhodium-50 dark:bg-navy-950 rounded-xl p-8 sm:p-10 border border-rhodium-200 dark:border-navy-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-xl space-y-2">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-navy-900 dark:text-white">
              Structuring a Similar Transaction?
            </h3>
            <p className="text-xs sm:text-sm text-rhodium-600 dark:text-rhodium-300">
              Our partners will evaluate your transaction structure and outline the risk mitigation steps required for debt syndication.
            </p>
          </div>

          <Button href="/book" variant="accent" size="lg" leftIcon={<Calendar className="w-4 h-4" />}>
            Book a Project Review
          </Button>
        </section>
      </div>
    </div>
  );
}
