import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projectCaseStudies } from "@/content/projects";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import {
  MapPin,
  Building,
  Target,
  Wrench,
  CheckCircle2,
  Calendar,
  AlertCircle,
  ArrowRight,
} from "lucide-react";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return projectCaseStudies.map((p) => ({
    slug: p.slug,
  }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = projectCaseStudies.find((p) => p.slug === params.slug);
  if (!project) return { title: "Case Study Not Found" };

  return {
    title: `${project.title} | Case Studies`,
    description: project.shortSummary,
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = projectCaseStudies.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-white dark:bg-navy-900 pb-20">
      {/* Header with Breadcrumbs */}
      <div className="bg-rhodium-50 dark:bg-navy-950 border-b border-rhodium-200 dark:border-navy-800 py-10 lg:py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Projects", href: "/projects" },
              { label: project.title },
            ]}
          />

          <div className="max-w-4xl mt-6 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="teal">{project.sectorName}</Badge>
              <Badge variant="outline">{project.serviceName}</Badge>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brass-600 dark:text-brass-400">
                Sample Case Study
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy-900 dark:text-white leading-tight">
              {project.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm text-rhodium-600 dark:text-rhodium-300 pt-2">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-teal-700 dark:text-teal-400" />
                <span>{project.countryPlaceholder}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Building className="w-4 h-4 text-teal-700 dark:text-teal-400" />
                <span>{project.clientPlaceholder}</span>
              </div>
            </div>

            <p className="text-base sm:text-lg text-rhodium-700 dark:text-rhodium-200 leading-relaxed pt-2">
              {project.shortSummary}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        {/* Placeholder disclaimer banner */}
        <div className="p-4 rounded-lg bg-brass-50 dark:bg-brass-950/40 border border-brass-200 dark:border-brass-900/60 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-brass-700 dark:text-brass-400 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-brass-900 dark:text-brass-200 leading-relaxed">
            <strong>Confidentiality Notice:</strong> Specific sponsor identities, precise sovereign guarantee parameters, and proprietary commercial terms have been modified with bracketed placeholders to preserve client confidentiality.
          </p>
        </div>

        {/* Transaction Metrics Row */}
        <section className="bg-navy-900 text-white rounded-xl p-8 border border-navy-800 shadow-card">
          <h2 className="text-xs font-bold uppercase tracking-widest text-brass-400 mb-6">
            Key Transaction Parameters & Outcomes
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="space-y-1">
                <span className="text-xs text-rhodium-400 block truncate">
                  {m.label}
                </span>
                <span className="text-xl sm:text-2xl font-serif font-bold text-teal-400 font-mono">
                  {m.value}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Detailed Narrative: Challenge, Our Role, Approach, Outcome */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-10">
            {/* The Challenge */}
            <section className="space-y-3">
              <div className="flex items-center gap-2 text-red-700 dark:text-red-400">
                <Target className="w-5 h-5" />
                <h2 className="text-xl font-serif font-bold text-navy-900 dark:text-white">
                  The Transaction Challenge
                </h2>
              </div>
              <p className="text-base text-rhodium-700 dark:text-rhodium-200 leading-relaxed bg-rhodium-50 dark:bg-navy-950 p-6 rounded-lg border border-rhodium-200 dark:border-navy-800">
                {project.challenge}
              </p>
            </section>

            {/* Our Role */}
            <section className="space-y-3">
              <div className="flex items-center gap-2 text-teal-700 dark:text-teal-400">
                <Building className="w-5 h-5" />
                <h2 className="text-xl font-serif font-bold text-navy-900 dark:text-white">
                  Our Advisory Role
                </h2>
              </div>
              <p className="text-base text-rhodium-700 dark:text-rhodium-200 leading-relaxed bg-rhodium-50 dark:bg-navy-950 p-6 rounded-lg border border-rhodium-200 dark:border-navy-800">
                {project.ourRole}
              </p>
            </section>

            {/* Approach */}
            <section className="space-y-3">
              <div className="flex items-center gap-2 text-brass-600 dark:text-brass-400">
                <Wrench className="w-5 h-5" />
                <h2 className="text-xl font-serif font-bold text-navy-900 dark:text-white">
                  Structuring Approach & Financial Engineering
                </h2>
              </div>
              <p className="text-base text-rhodium-700 dark:text-rhodium-200 leading-relaxed bg-rhodium-50 dark:bg-navy-950 p-6 rounded-lg border border-rhodium-200 dark:border-navy-800">
                {project.approach}
              </p>
            </section>

            {/* Outcome */}
            <section className="space-y-3">
              <div className="flex items-center gap-2 text-teal-700 dark:text-teal-400">
                <CheckCircle2 className="w-5 h-5" />
                <h2 className="text-xl font-serif font-bold text-navy-900 dark:text-white">
                  Commercial & Financial Close Outcome
                </h2>
              </div>
              <p className="text-base text-rhodium-700 dark:text-rhodium-200 leading-relaxed bg-teal-50/40 dark:bg-teal-950/20 p-6 rounded-lg border border-teal-200 dark:border-teal-900/60 font-medium">
                {project.outcome}
              </p>
            </section>
          </div>

          {/* Right Sidebar: Retain Us CTA */}
          <div className="lg:col-span-4 space-y-6">
            <Card className="p-6 border-rhodium-200 dark:border-navy-800 bg-white dark:bg-navy-900 shadow-card space-y-5">
              <h3 className="text-lg font-serif font-bold text-navy-900 dark:text-white">
                Structure Your Mandate
              </h3>
              <p className="text-xs sm:text-sm text-rhodium-600 dark:text-rhodium-300 leading-relaxed">
                Facing similar bankability hurdles in {project.sectorName}? Retain our lead advisers to structure your transaction for debt close.
              </p>
              <Button
                href="/book"
                variant="accent"
                size="md"
                className="w-full justify-center"
                leftIcon={<Calendar className="w-4 h-4" />}
              >
                Schedule Transaction Call
              </Button>
            </Card>

            <div className="p-5 rounded-lg border border-rhodium-200 dark:border-navy-800 bg-rhodium-50 dark:bg-navy-950 space-y-3 text-xs">
              <span className="font-bold uppercase tracking-wider text-rhodium-500 block">
                Practice Area
              </span>
              <p className="font-semibold text-navy-900 dark:text-white">
                {project.serviceName}
              </p>
              <Link
                href={`/services/${project.serviceSlug}`}
                className="text-teal-700 dark:text-teal-400 font-bold hover:underline inline-flex items-center gap-1"
              >
                <span>Explore practice details</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
