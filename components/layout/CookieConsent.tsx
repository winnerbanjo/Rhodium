"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Shield } from "lucide-react";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("rhodium-cookie-consent");
    if (!consent) {
      // Small delay before showing banner
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("rhodium-cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("rhodium-cookie-consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Cookie and Privacy Consent Banner"
      className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-50 bg-white dark:bg-navy-900 border border-rhodium-200 dark:border-navy-700 rounded-lg p-5 shadow-elevation animate-in fade-in slide-in-from-bottom-4 duration-300"
    >
      <div className="flex items-start gap-3">
        <Shield className="w-5 h-5 text-teal-700 dark:text-teal-400 flex-shrink-0 mt-0.5" />
        <div className="space-y-2">
          <h4 className="text-sm font-serif font-bold text-navy-900 dark:text-white">
            Privacy & Cookie Preferences
          </h4>
          <p className="text-xs text-rhodium-600 dark:text-rhodium-300 leading-relaxed">
            We use essential and privacy-preserving analytics cookies to enhance site functionality and evaluate advisory engagement. Learn more in our{" "}
            <Link href="/privacy" className="text-teal-700 dark:text-teal-400 underline hover:opacity-80">
              Privacy Policy
            </Link>
            .
          </p>
          <div className="flex items-center gap-2 pt-1">
            <Button size="sm" variant="accent" onClick={handleAccept}>
              Accept All
            </Button>
            <Button size="sm" variant="outline" onClick={handleDecline}>
              Essential Only
            </Button>
          </div>
        </div>
      </div>
    </aside>
  );
}
