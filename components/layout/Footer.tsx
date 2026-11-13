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
  Sparkles,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-obsidian-950 text-obsidian-200 border-t border-white/10 pt-20 pb-12 relative overflow-hidden">
      {/* Neuros Ambient Glows */}
      <div className="absolute top-1/4 -right-40 w-[600px] h-[500px] bg-coral-500/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[600px] h-[500px] bg-cobalt-500/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Giant Background Watermark Text - Neuros Signature */}
      <div
        aria-hidden="true"
        className="absolute bottom-20 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none overflow-hidden"
      >
        <span
          className="font-heading font-black text-[clamp(3.5rem,13vw,12rem)] tracking-tighter uppercase whitespace-nowrap block opacity-[0.035]"
          style={{
            WebkitTextStroke: "1.5px #ffffff",
            color: "transparent",
          }}
        >
          RHODIUM IMPACT
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pre-Footer Action Banner */}
        <div className="bg-obsidian-900/90 border border-white/10 rounded-3xl p-8 sm:p-12 mb-16 backdrop-blur-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-coral-400 text-xs font-semibold font-mono uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-coral-500 animate-pulse" />
                <span>Next Steps / Consultation</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-heading">
                Ready to take your infrastructure project to{" "}
                <span className="neuros-gradient-text">financial close?</span>
              </h3>
              <p className="text-sm text-obsidian-300 max-w-2xl font-sans">
                Speak directly with Dr. Femi Oladeinde and our senior transaction team. We review project readiness, identify bankability gaps, and map funding syndicates.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <Button
                href="/book"
                variant="neuros"
                size="md"
                leftIcon={<Calendar className="w-4 h-4" />}
                className="w-full justify-center"
              >
                Schedule Deal Session
              </Button>
              <Button
                href="/contact"
                variant="neuros-outline"
                size="md"
                rightIcon={<ArrowUpRight className="w-4 h-4" />}
                className="w-full justify-center"
              >
                Direct Advisory Enquiry
              </Button>
            </div>
          </div>
        </div>

        {/* Top Grid: Brand, Services, Quick Links, Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          {/* Col 1: Brand & Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Logo variant="light" size="md" />

            <p className="text-sm text-obsidian-300 leading-relaxed max-w-sm font-sans">
              Rhodium Impact is a senior-led infrastructure advisory firm for emerging markets, with deep roots in Africa. We close the bankability gap between project sponsors, governments, DFIs, and institutional capital.
            </p>

            <div className="space-y-3 text-xs text-obsidian-300 pt-2 font-sans">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-coral-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block text-xs">Nigeria Headquarters:</strong>
                  <span>{siteConfig.contact.address}</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Building2 className="w-4 h-4 text-cobalt-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block text-xs">International Desk:</strong>
                  <span>London Advisory Desk / Global DFIs</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-coral-400 flex-shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email.replace(/[\[\]]/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-coral-400 flex-shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
            </div>

            {/* Social Pills */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Rhodium Impact on LinkedIn"
                className="w-9 h-9 rounded-full bg-white/[0.05] border border-white/10 text-obsidian-300 hover:text-white hover:border-coral-500 hover:bg-coral-500/10 flex items-center justify-center transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Rhodium Impact on X"
                className="w-9 h-9 rounded-full bg-white/[0.05] border border-white/10 text-obsidian-300 hover:text-white hover:border-coral-500 hover:bg-coral-500/10 flex items-center justify-center transition-all text-xs font-bold"
              >
                𝕏
              </a>
              <span className="text-xs text-obsidian-400 font-mono">@rhodiumimpact</span>
            </div>
          </div>

          {/* Col 2: Services Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-coral-500" />
              <span>Advisory Practices</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-obsidian-300">
              {servicesData.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-coral-400 transition-colors" />
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/services"
                  className="text-coral-400 hover:text-coral-300 font-semibold inline-flex items-center gap-1.5 text-xs group"
                >
                  <span>Explore All 8 Practices</span>
                  <div className="w-5 h-5 rounded-full bg-white/[0.06] flex items-center justify-center group-hover:bg-coral-500 group-hover:text-white transition-all">
                    <ArrowUpRight className="w-3 h-3" />
                  </div>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cobalt-400" />
              <span>Firm</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-obsidian-300">
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
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Deal Intelligence</span>
            </h4>
            <p className="text-xs text-obsidian-300 leading-relaxed font-sans">
              Subscribe to quarterly practitioner memos on bankability criteria, sub-national electricity regulatory changes, and blended finance structures.
            </p>
            <NewsletterForm variant="stacked" />
          </div>
        </div>

        {/* Corporate Statutory Registration Card Strip */}
        <div className="py-6 border-b border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-obsidian-400 font-sans">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>
              <strong className="text-white">Rhodium Impact Consulting Ltd</strong> is a private company limited by shares, incorporated in the Federal Republic of Nigeria under the Companies and Allied Matters Act 2020 (CAMA 2020, Memorandum dated 27 November 2024).{" "}
              <span className="font-mono text-coral-400 font-bold">RC: {siteConfig.legal.rcNumber}</span>.
            </span>
          </div>
        </div>

        {/* Bottom Disclaimers & Copyright */}
        <div className="pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-obsidian-400 font-sans">
          <p>
            © {currentYear} Rhodium Impact Consulting Ltd. All rights reserved. Registered in Nigeria (RC 8102994).
          </p>

          <p className="text-[11px] max-w-xl text-obsidian-400 leading-normal">
            <strong className="text-obsidian-300">Disclaimer:</strong> {siteConfig.legal.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}
