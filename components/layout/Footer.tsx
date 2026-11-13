import React from "react";
import Link from "next/link";
import { siteConfig } from "@/content/siteConfig";
import { servicesData } from "@/content/services";
import { Logo } from "@/components/brand/Logo";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { Button } from "@/components/ui/Button";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  ArrowUpRight,
  ShieldCheck,
  Building2,
  Calendar,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0A] text-neutral-300 border-t border-neutral-800 pt-16 pb-12 relative overflow-hidden">
      {/* Subtle Background Watermark Text */}
      <div
        aria-hidden="true"
        className="absolute bottom-16 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none overflow-hidden"
      >
        <span
          className="font-heading font-black text-[clamp(3.5rem,13vw,12rem)] tracking-tighter uppercase whitespace-nowrap block opacity-[0.02]"
          style={{
            WebkitTextStroke: "1px #ffffff",
            color: "transparent",
          }}
        >
          RHODIUM IMPACT
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pre-Footer Action Banner */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-7 sm:p-10 mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-800 border border-neutral-700 text-neutral-300 text-xs font-mono uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Consultation</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight">
                Ready to take your infrastructure project to financial close?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 max-w-2xl font-sans">
                Speak directly with Dr. Femi Oladeinde and our senior transaction team. We review project readiness, identify bankability gaps, and map funding syndicates.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <Button
                href="/book"
                variant="neuros-dark"
                size="md"
                leftIcon={<Calendar className="w-4 h-4" />}
                className="w-full justify-center bg-white text-neutral-950 hover:bg-neutral-100 font-medium"
              >
                Schedule Deal Session
              </Button>
              <Button
                href="/contact"
                variant="neuros-outline"
                size="md"
                rightIcon={<ArrowUpRight className="w-4 h-4" />}
                className="w-full justify-center border-neutral-700 text-white hover:bg-neutral-800"
              >
                Direct Advisory Enquiry
              </Button>
            </div>
          </div>
        </div>

        {/* Top Grid: Brand, Services, Quick Links, Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-neutral-800">
          {/* Col 1: Brand & Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Logo variant="light" size="md" />

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm font-sans">
              Rhodium Impact is a senior-led infrastructure advisory firm for emerging markets, with deep roots in Africa. We close the bankability gap between project sponsors, governments, DFIs, and institutional capital.
            </p>

            <div className="space-y-3 text-xs text-neutral-400 pt-1 font-sans">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-neutral-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-neutral-200 block text-xs">Nigeria Headquarters:</strong>
                  <span>{siteConfig.contact.address}</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Building2 className="w-4 h-4 text-neutral-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-neutral-200 block text-xs">International Desk:</strong>
                  <span>London Advisory Desk / Global DFIs</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-neutral-400 flex-shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email.replace(/[\[\]]/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-neutral-400 flex-shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
            </div>

            {/* Social Pills */}
            <div className="flex items-center space-x-3 pt-1">
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Rhodium Impact on LinkedIn"
                className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600 flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href={siteConfig.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Rhodium Impact on X"
                className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600 flex items-center justify-center transition-colors text-xs font-bold"
              >
                𝕏
              </a>
              <span className="text-xs text-neutral-500 font-mono">@rhodiumimpact</span>
            </div>
          </div>

          {/* Col 2: Services Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-200 font-semibold">
              Advisory Practices
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400 font-sans">
              {servicesData.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-white transition-colors block"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/services"
                  className="text-neutral-300 hover:text-white font-medium inline-flex items-center gap-1.5 text-xs"
                >
                  <span>Explore All 8 Practices</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-200 font-semibold">
              Firm
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400 font-sans">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Rhodium
                </Link>
              </li>
              <li>
                <Link href="/sectors" className="hover:text-white transition-colors">
                  Sectors We Serve
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-white transition-colors">
                  Partners & Leadership
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  Track Record & Mandates
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Research & Insights
                </Link>
              </li>
              <li>
                <Link href="/book" className="hover:text-white transition-colors">
                  Book a Consultation
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Abuja Office
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Engagement
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter Briefing (3 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-200 font-semibold">
              Deal Intelligence
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed font-sans">
              Subscribe to quarterly practitioner memos on bankability criteria, sub-national electricity regulatory changes, and blended finance structures.
            </p>
            <NewsletterForm variant="stacked" />
          </div>
        </div>

        {/* Corporate Statutory Registration Card Strip */}
        <div className="py-5 border-b border-neutral-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-neutral-400 font-sans">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>
              <strong className="text-neutral-200">Rhodium Impact Consulting Ltd</strong> is a private company limited by shares, incorporated in the Federal Republic of Nigeria under the Companies and Allied Matters Act 2020 (CAMA 2020, Memorandum dated 27 November 2024).{" "}
              <span className="font-mono text-neutral-300 font-medium">RC: {siteConfig.legal.rcNumber}</span>.
            </span>
          </div>
        </div>

        {/* Bottom Disclaimers & Copyright */}
        <div className="pt-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-neutral-500 font-sans">
          <p>
            © {currentYear} Rhodium Impact Consulting Ltd. All rights reserved. Registered in Nigeria (RC 8102994).
          </p>

          <p className="text-[11px] max-w-xl text-neutral-500 leading-normal">
            <strong className="text-neutral-400">Disclaimer:</strong> {siteConfig.legal.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}
