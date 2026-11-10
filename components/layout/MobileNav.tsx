"use client";

import React, { useState } from "react";
import Link from "next/link";
import { X, ChevronRight, PhoneCall, FileText } from "lucide-react";
import { siteConfig } from "@/content/siteConfig";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenProposalModal: () => void;
}

export function MobileNav({ isOpen, onClose, onOpenProposalModal }: MobileNavProps) {
  const [servicesExpanded, setServicesExpanded] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-navy-950/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white dark:bg-navy-900 shadow-elevation p-6 flex flex-col justify-between overflow-y-auto">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-rhodium-200 dark:border-navy-800">
            <Logo size="sm" />
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                onClick={onClose}
                aria-label="Close navigation menu"
                className="p-2 text-rhodium-600 hover:text-navy-900 dark:hover:text-white rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Nav links */}
          <nav className="py-6 space-y-1">
            {siteConfig.navigation.map((item) => {
              if (item.children) {
                return (
                  <div key={item.title} className="py-1">
                    <button
                      onClick={() => setServicesExpanded(!servicesExpanded)}
                      className="w-full flex items-center justify-between py-2.5 px-3 text-base font-serif font-semibold text-navy-900 dark:text-white rounded hover:bg-rhodium-100 dark:hover:bg-navy-800"
                    >
                      <span>{item.title}</span>
                      <ChevronRight
                        className={`w-4 h-4 text-rhodium-400 transition-transform ${
                          servicesExpanded ? "rotate-90 text-teal-700" : ""
                        }`}
                      />
                    </button>
                    {servicesExpanded && (
                      <div className="pl-4 pr-1 py-2 space-y-1 bg-rhodium-50 dark:bg-navy-950/50 rounded mt-1">
                        <Link
                          href="/services"
                          onClick={onClose}
                          className="block py-1.5 px-3 text-xs font-bold text-teal-800 dark:text-teal-400 hover:underline uppercase tracking-wider"
                        >
                          View All 8 Practices →
                        </Link>
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={onClose}
                            className="block py-1.5 px-3 text-xs text-rhodium-700 dark:text-rhodium-300 hover:text-navy-900 dark:hover:text-white rounded"
                          >
                            {child.title}
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
                  onClick={onClose}
                  className="block py-2.5 px-3 text-base font-serif font-semibold text-navy-900 dark:text-white rounded hover:bg-rhodium-100 dark:hover:bg-navy-800"
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer CTAs */}
        <div className="pt-6 border-t border-rhodium-200 dark:border-navy-800 space-y-3">
          <Button
            href="/book"
            variant="accent"
            size="lg"
            className="w-full justify-center"
            leftIcon={<PhoneCall className="w-4 h-4" />}
            onClick={onClose}
          >
            Book a Consultation
          </Button>

          <Button
            variant="outline"
            size="md"
            className="w-full justify-center text-xs"
            leftIcon={<FileText className="w-3.5 h-3.5" />}
            onClick={() => {
              onClose();
              onOpenProposalModal();
            }}
          >
            Request a Proposal (RFP)
          </Button>

          <p className="text-[11px] text-rhodium-500 text-center pt-2">
            Rhodium Impact Consulting Ltd • CAMA 2020 Registered
          </p>
        </div>
      </div>
    </div>
  );
}
