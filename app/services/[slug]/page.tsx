import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { servicesData } from "@/content/services";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import {
  CheckCircle2,
  ArrowRight,
  Users,
  Award,
  Calendar,
  Coins,
  TrendingUp,
  Compass,
  Building2,
  Zap,
  ShieldAlert,
  Leaf,
  GraduationCap,
} from "lucide-react";

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = servicesData.find((s) => s.slug === params.slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | Practice Areas`,
    description: `${service.subtitle} ${service.leadSentence}`,
  };
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const iconMap: Record<string, React.ReactNode> = {
    Coins: <Coins className="w-8 h-8" />,
    TrendingUp: <TrendingUp className="w-8 h-8" />,
    Compass: <Compass className="w-8 h-8" />,
    Building2: <Building2 className="w-8 h-8" />,
    Zap: <Zap className="w-8 h-8" />,
    ShieldAlert: <ShieldAlert className="w-8 h-8" />,
    Leaf: <Leaf className="w-8 h-8" />,
    GraduationCap: <GraduationCap className="w-8 h-8" />,
  };

  const Icon = iconMap[service.icon] || <Coins className="w-8 h-8" />;

  const related = servicesData.filter((s) =>
    service.relatedServices.includes(s.slug)
  );

  return (
    <div className="bg-white dark:bg-navy-900 pb-20">
      {/* Header with Breadcrumb */}
      <div className="bg-rhodium-50 dark:bg-navy-950 border-b border-rhodium-200 dark:border-navy-800 py-10 lg:py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Services", href: "/services" },
              { label: service.title },
            ]}
          />

          <div className="max-w-3xl mt-6 space-y-4">
            <div className="inline-flex items-center gap-2 text-teal-700 dark:text-teal-400">
              <div className="w-10 h-10 rounded-lg bg-teal-100 dark:bg-teal-950 flex items-center justify-center">
                {Icon}
              </div>
              <span className="text-xs font-bold uppercase tracking-wider">
                Advisory Practice
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy-900 dark:text-white leading-tight">
              {service.title}
            </h1>

            <p className="text-lg sm:text-xl font-serif italic text-brass-700 dark:text-brass-400">
              &ldquo;{service.subtitle}&rdquo;
            </p>

            <p className="text-base sm:text-lg text-rhodium-600 dark:text-rhodium-300 leading-relaxed pt-2">
              {service.leadSentence}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content: What We Do & Outcomes */}
          <div className="lg:col-span-8 space-y-14">
            {/* Practice Summary */}
            <section className="space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
                Practice Overview
              </h2>
              <p className="text-base text-rhodium-700 dark:text-rhodium-200 leading-relaxed">
                {service.summary}
              </p>
            </section>

            {/* What We Do */}
            <section className="space-y-6">
              <h2 className="text-2xl font-serif font-bold text-navy-900 dark:text-white">
                What We Do
              </h2>
              <div className="space-y-3.5">
                {service.whatWeDo.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-lg bg-rhodium-50/60 dark:bg-navy-950/60 border border-rhodium-200 dark:border-navy-800 flex items-start gap-3.5"
                  >
                    <CheckCircle2 className="w-5 h-5 text-teal-700 dark:text-teal-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-navy-900 dark:text-white leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Outcomes Delivered */}
            <section className="space-y-6">
              <div className="flex items-center gap-2 text-brass-600 dark:text-brass-400">
                <Award className="w-5 h-5" />
                <h2 className="text-2xl font-serif font-bold text-navy-900 dark:text-white">
                  Tangible Transaction Outcomes
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.outcomes.map((outcome, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-lg border border-teal-200 dark:border-teal-900/60 bg-teal-50/30 dark:bg-teal-950/20 space-y-1.5"
                  >
                    <span className="text-xs font-mono font-bold text-teal-700 dark:text-teal-400">
                      Outcome 0{idx + 1}
                    </span>
                    <p className="text-sm text-navy-900 dark:text-rhodium-200 font-medium leading-relaxed">
                      {outcome}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Sidebar: Typical Clients, CTA, Related Services */}
          <div className="lg:col-span-4 space-y-8">
            {/* Typical Clients Card */}
            <Card className="border-rhodium-200 dark:border-navy-800 p-6 bg-white dark:bg-navy-900 shadow-card">
              <div className="flex items-center gap-2 mb-4 text-teal-700 dark:text-teal-400">
                <Users className="w-5 h-5" />
                <h3 className="font-serif font-bold text-lg text-navy-900 dark:text-white">
                  Typical Clients
                </h3>
              </div>
              <ul className="space-y-3">
                {service.typicalClients.map((client, idx) => (
                  <li
                    key={idx}
                    className="text-xs sm:text-sm text-rhodium-600 dark:text-rhodium-300 flex items-start gap-2.5 pb-2.5 border-b border-rhodium-100 dark:border-navy-800 last:border-b-0"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-600 mt-2 flex-shrink-0" />
                    <span>{client}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Direct Booking CTA Card */}
            <div className="bg-navy-900 text-white rounded-xl p-6 sm:p-7 space-y-4 shadow-elevation border border-navy-800">
              <span className="text-[10px] uppercase font-bold tracking-widest text-brass-400 block">
                Engage Our Specialists
              </span>
              <h3 className="text-xl font-serif font-bold leading-snug">
                Retain Rhodium for {service.title}
              </h3>
              <p className="text-xs text-rhodium-300 leading-relaxed">
                Schedule a confidential scoping briefing with our practice leaders to discuss transaction milestones and advisory parameters.
              </p>
              <div className="pt-2 space-y-2.5">
                <Button
                  href={`/book?service=${encodeURIComponent(service.slug)}`}
                  variant="accent"
                  size="md"
                  className="w-full justify-center"
                  leftIcon={<Calendar className="w-4 h-4" />}
                >
                  Book Practice Scoping
                </Button>
                <Button
                  href="/contact"
                  variant="outline"
                  size="sm"
                  className="w-full justify-center text-white border-white/20 text-xs"
                >
                  Send Practice Enquiry
                </Button>
              </div>
            </div>

            {/* Related Services */}
            {related.length > 0 && (
              <div className="space-y-4 pt-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-rhodium-500">
                  Related Advisory Practices
                </h4>
                <div className="space-y-2.5">
                  {related.map((rel) => (
                    <Link
                      key={rel.slug}
                      href={`/services/${rel.slug}`}
                      className="block p-3 rounded-lg border border-rhodium-200 dark:border-navy-800 hover:border-teal-700 dark:hover:border-teal-400 transition-colors group"
                    >
                      <h5 className="text-xs font-bold text-navy-900 dark:text-white group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors">
                        {rel.title}
                      </h5>
                      <p className="text-[11px] text-rhodium-500 line-clamp-1 mt-0.5">
                        {rel.subtitle}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
