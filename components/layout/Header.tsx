"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ChevronDown, ArrowRight, Calendar, FileText } from "lucide-react";
import { siteConfig } from "@/content/siteConfig";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { MobileNav } from "@/components/layout/MobileNav";
import { ProposalModal } from "@/components/forms/ProposalModal";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const [isProposalModalOpen, setIsProposalModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300",
          isScrolled
            ? "bg-white/80 dark:bg-navy-950/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(11,31,58,0.08)] border-b border-rhodium-200/60 dark:border-navy-800/80 py-3"
            : "bg-white/95 dark:bg-navy-950/90 backdrop-blur-md border-b border-rhodium-100 dark:border-navy-900 py-4"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Logo size={isScrolled ? "sm" : "md"} />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Main navigation">
              {siteConfig.navigation.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                if (item.children) {
                  return (
                    <div
                      key={item.title}
                      className="relative"
                      onMouseEnter={() => setIsServicesMenuOpen(true)}
                      onMouseLeave={() => setIsServicesMenuOpen(false)}
                    >
                      <button
                        onClick={() => setIsServicesMenuOpen(!isServicesMenuOpen)}
                        aria-expanded={isServicesMenuOpen}
                        className={cn(
                          "px-3.5 py-1.5 text-sm font-medium rounded-full transition-all duration-200 flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500",
                          isActive
                            ? "bg-teal-50 dark:bg-teal-950/70 text-teal-800 dark:text-teal-300 font-semibold"
                            : "text-navy-800 dark:text-rhodium-100 hover:bg-rhodium-100/70 dark:hover:bg-navy-800/70 hover:text-navy-950 dark:hover:text-white"
                        )}
                      >
                        <span>{item.title}</span>
                        <ChevronDown
                          className={cn(
                            "w-3.5 h-3.5 text-rhodium-400 transition-transform duration-200",
                            isServicesMenuOpen && "rotate-180 text-teal-700"
                          )}
                        />
                      </button>

                      {/* Mega Menu Dropdown */}
                      {isServicesMenuOpen && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[700px] bg-white/95 dark:bg-navy-900/95 backdrop-blur-2xl rounded-2xl shadow-[0_20px_50px_rgba(11,31,58,0.15)] border border-rhodium-200/80 dark:border-navy-700 p-6 grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
                          <div className="col-span-2 pb-2 mb-1 border-b border-rhodium-100 dark:border-navy-800 flex items-center justify-between">
                            <span className="text-xs font-bold uppercase tracking-wider text-rhodium-500">
                              Advisory Practices & Specialisms
                            </span>
                            <Link
                              href="/services"
                              onClick={() => setIsServicesMenuOpen(false)}
                              className="text-xs font-semibold text-teal-700 dark:text-teal-400 hover:underline flex items-center gap-1"
                            >
                              <span>View All 8 Services</span>
                              <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>

                          {item.children.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              onClick={() => setIsServicesMenuOpen(false)}
                              className="group p-3 rounded-xl hover:bg-rhodium-50 dark:hover:bg-navy-800/80 transition-all duration-150"
                            >
                              <div className="text-sm font-semibold text-navy-900 dark:text-white group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors">
                                {subItem.title}
                              </div>
                              {subItem.description && (
                                <p className="text-xs text-rhodium-500 dark:text-rhodium-400 mt-1 line-clamp-1 leading-snug">
                                  {subItem.description}
                                </p>
                              )}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "px-3.5 py-1.5 text-sm font-medium rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500",
                      isActive
                        ? "bg-teal-50 dark:bg-teal-950/70 text-teal-800 dark:text-teal-300 font-semibold"
                        : "text-navy-800 dark:text-rhodium-100 hover:bg-rhodium-100/70 dark:hover:bg-navy-800/70 hover:text-navy-950 dark:hover:text-white"
                    )}
                  >
                    {item.title}
                  </Link>
                );
              })}
            </nav>

            {/* Header Right CTAs */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <ThemeToggle />

              <button
                type="button"
                onClick={() => setIsProposalModalOpen(true)}
                className="hidden xl:inline-flex items-center gap-1.5 text-xs font-semibold text-rhodium-700 dark:text-rhodium-300 hover:text-navy-900 dark:hover:text-white px-2.5 py-1.5 rounded hover:bg-rhodium-100 dark:hover:bg-navy-800 transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>RFP / Proposal</span>
              </button>

              <Button
                href="/book"
                variant="neuros"
                size={isScrolled ? "sm" : "md"}
                className="hidden sm:inline-flex"
                rightIcon={<ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />}
              >
                Get In Touch
              </Button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open mobile navigation menu"
                className="lg:hidden p-2 text-obsidian-950 dark:text-white rounded-full hover:bg-rhodium-100 dark:hover:bg-obsidian-800"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenProposalModal={() => setIsProposalModalOpen(true)}
      />

      {/* RFP Proposal Modal */}
      <ProposalModal
        isOpen={isProposalModalOpen}
        onClose={() => setIsProposalModalOpen(false)}
      />
    </>
  );
}
