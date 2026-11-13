"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ChevronDown, ArrowRight, FileText } from "lucide-react";
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
          "sticky top-0 z-40 w-full transition-all duration-200",
          isScrolled
            ? "bg-white/90 dark:bg-[#0A0A0A]/90 backdrop-blur-md shadow-sm border-b border-neutral-200 dark:border-neutral-800 py-3"
            : "bg-white dark:bg-[#0A0A0A] border-b border-neutral-200/80 dark:border-neutral-800 py-4"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Logo size={isScrolled ? "sm" : "md"} />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1" aria-label="Main navigation">
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
                          "px-3 py-1.5 text-xs font-medium rounded-full transition-colors flex items-center gap-1",
                          isActive
                            ? "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white font-semibold"
                            : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800/60"
                        )}
                      >
                        <span>{item.title}</span>
                        <ChevronDown
                          className={cn(
                            "w-3 h-3 text-neutral-400 transition-transform duration-200",
                            isServicesMenuOpen && "rotate-180 text-neutral-900 dark:text-white"
                          )}
                        />
                      </button>

                      {/* Mega Menu Dropdown */}
                      {isServicesMenuOpen && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[650px] bg-white dark:bg-neutral-900 rounded-xl shadow-xl border border-neutral-200 dark:border-neutral-800 p-5 grid grid-cols-2 gap-3 animate-in fade-in duration-150">
                          <div className="col-span-2 pb-2 mb-1 border-b border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
                            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 font-medium">
                              Advisory Practices
                            </span>
                            <Link
                              href="/services"
                              onClick={() => setIsServicesMenuOpen(false)}
                              className="text-xs font-medium text-neutral-900 dark:text-white hover:underline flex items-center gap-1"
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
                              className="group p-2.5 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800/80 transition-colors"
                            >
                              <div className="text-xs font-semibold text-neutral-900 dark:text-white group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                                {subItem.title}
                              </div>
                              {subItem.description && (
                                <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5 line-clamp-1 leading-snug">
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
                      "px-3 py-1.5 text-xs font-medium rounded-full transition-colors",
                      isActive
                        ? "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white font-semibold"
                        : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800/60"
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
                className="hidden xl:inline-flex items-center gap-1.5 text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white px-2.5 py-1.5 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>RFP / Proposal</span>
              </button>

              <Button
                href="/book"
                variant="primary"
                size={isScrolled ? "sm" : "md"}
                className="hidden sm:inline-flex bg-neutral-900 text-white hover:bg-black font-medium text-xs px-4 py-2"
                rightIcon={<ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />}
              >
                Get In Touch
              </Button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open mobile navigation menu"
                className="lg:hidden p-2 text-neutral-900 dark:text-white rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800"
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
