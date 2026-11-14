import React from "react";
import Link from "next/link";
import Image from "next/image";
import { projectCaseStudies } from "@/content/projects";
import { ArrowRight, ArrowUpRight, TrendingUp, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function FeaturedProjects() {
  return (
    <section className="py-20 lg:py-28 bg-[#0A0A0A] text-white border-b border-neutral-800 relative overflow-hidden">
      {/* Background Grid Accent */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono uppercase tracking-wider text-neutral-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Executed Mandates • Track Record</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white leading-[1.12]">
              Landmark Transactions
            </h2>
            <p className="text-base sm:text-lg text-neutral-400 font-sans">
              Real infrastructure mandates executed across emerging markets and cross-border financial desks, mobilizing capital from concept to financial close.
            </p>
          </div>

          <Button
            href="/projects"
            variant="neuros-dark"
            size="md"
            className="self-start md:self-auto bg-white text-neutral-950 hover:bg-neutral-100 font-semibold"
            rightIcon={<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
          >
            All Case Studies
          </Button>
        </div>

        {/* Case Studies Visual Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {projectCaseStudies.map((project, idx) => (
            <article
              key={project.slug}
              className="group relative rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl"
            >
              <div>
                {/* Photo Header */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-neutral-950">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full bg-neutral-900 flex items-center justify-center text-neutral-700">
                      Rhodium Mandate
                    </div>
                  )}

                  {/* Obsidian vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />

                  {/* Sector Tag */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-neutral-950/85 backdrop-blur-md border border-neutral-800 text-[11px] font-mono text-neutral-200">
                    <span>{project.sectorName}</span>
                  </div>

                  {/* Primary Metric Floating Badge */}
                  {project.metrics && project.metrics[0] && (
                    <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-950/90 backdrop-blur-md border border-neutral-700 text-xs font-mono text-white shadow-lg">
                      <span className="text-emerald-400 font-bold">{project.metrics[0].value}</span>
                      <span className="text-neutral-400 text-[10px] uppercase">{project.metrics[0].label}</span>
                    </div>
                  )}

                  {/* Action Icon */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-neutral-950/80 backdrop-blur-md border border-neutral-700 text-neutral-300 group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                    {project.countryPlaceholder} • {project.serviceName}
                  </div>

                  <h3 className="font-heading font-semibold text-xl text-white group-hover:text-emerald-400 transition-colors leading-snug">
                    <Link href={`/projects/${project.slug}`}>
                      {project.title}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-400 line-clamp-3 leading-relaxed font-sans">
                    {project.shortSummary}
                  </p>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-neutral-800/80">
                    {project.metrics.slice(1, 3).map((metric, i) => (
                      <div key={i} className="p-2.5 rounded-lg bg-neutral-950/60 border border-neutral-800">
                        <span className="text-sm sm:text-base font-heading font-bold text-white block">
                          {metric.value}
                        </span>
                        <span className="text-[10px] text-neutral-400 font-mono block truncate">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0 mt-2 border-t border-neutral-800/60 flex items-center justify-between text-xs pt-4">
                <Link
                  href={`/projects/${project.slug}`}
                  className="font-medium text-neutral-300 group-hover:text-white inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Read Transaction Dossier</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
                <span className="text-[10px] font-mono text-neutral-500 uppercase">
                  Advisory Mandate
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
