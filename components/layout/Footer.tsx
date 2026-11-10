import React from "react";
import Link from "next/link";
import { siteConfig } from "@/content/siteConfig";
import { servicesData } from "@/content/services";
import { Logo } from "@/components/brand/Logo";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { Mail, Phone, MapPin, Linkedin, ArrowUpRight, ShieldCheck } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-rhodium-100 border-t border-navy-800 pt-16 pb-12">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid: Brand, Services, Quick Links, Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-navy-800/80">
          {/* Col 1 & 2: Brand & Description */}
          <div className="lg:col-span-2 space-y-5">
            <Logo variant="light" size="md" />

            <p className="text-sm text-rhodium-300 leading-relaxed max-w-sm">
              Rhodium Impact is an infrastructure advisory firm for emerging markets, with deep roots in Africa. We operate at the intersection of project sponsors, governments, DFIs, and institutional capital to take transactions from idea to financial close and beyond.
            </p>

            <div className="space-y-2 text-xs text-rhodium-300 pt-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brass-400 flex-shrink-0 mt-0.5" />
                <span>{siteConfig.contact.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brass-400 flex-shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email.replace(/[\[\]]/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brass-400 flex-shrink-0" />
                <span>{siteConfig.contact.phone}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Rhodium Impact on LinkedIn"
                className="w-8 h-8 rounded bg-navy-800 text-rhodium-300 hover:text-white hover:bg-teal-700 flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Rhodium Impact on X (Twitter)"
                className="w-8 h-8 rounded bg-navy-800 text-rhodium-300 hover:text-white hover:bg-teal-700 flex items-center justify-center transition-colors text-xs font-bold"
              >
                𝕏
              </a>
              <span className="text-[11px] text-rhodium-400">@rhodiumimpact</span>
            </div>
          </div>

          {/* Col 3: Services Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Advisory Practices
            </h4>
            <ul className="space-y-2.5 text-xs text-rhodium-300">
              {servicesData.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-white hover:underline transition-colors block line-clamp-1"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-teal-400 hover:text-teal-300 font-semibold inline-flex items-center gap-1 mt-1"
                >
                  <span>All 8 Practices</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-rhodium-300">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About the Firm
                </Link>
              </li>
              <li>
                <Link href="/sectors" className="hover:text-white transition-colors">
                  Sectors We Serve
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-white transition-colors">
                  Leadership & Network
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  Case Studies & Track Record
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Insights & Research
                </Link>
              </li>
              <li>
                <Link href="/book" className="hover:text-white transition-colors">
                  Book a Consultation
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact & Enquiries
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Newsletter */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Executive Briefing
            </h4>
            <p className="text-xs text-rhodium-300 leading-relaxed">
              Curated analysis on emerging market project bankability, sub-national electricity reforms, and local currency capital structures.
            </p>
            <NewsletterForm variant="stacked" />
          </div>
        </div>

        {/* Corporate Statutory Registration Card Strip */}
        <div className="py-6 border-b border-navy-800/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-rhodium-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-teal-400 flex-shrink-0" />
            <span>
              <strong>Rhodium Impact Consulting Ltd</strong> is a private company limited by shares, incorporated in the Federal Republic of Nigeria under the Companies and Allied Matters Act 2020 (CAMA 2020, Memorandum dated 27 November 2024). RC Number: {siteConfig.legal.rcNumber}.
            </span>
          </div>
        </div>

        {/* Bottom Disclaimers & Copyright */}
        <div className="pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-rhodium-400">
          <p>
            © {currentYear} Rhodium Impact Consulting Ltd. All rights reserved. Registered in Nigeria.
          </p>

          <p className="text-[11px] max-w-xl text-rhodium-400/90 leading-normal">
            <strong>Disclaimer:</strong> {siteConfig.legal.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}
