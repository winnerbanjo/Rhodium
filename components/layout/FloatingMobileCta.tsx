"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { PhoneCall } from "lucide-react";
import { cn } from "@/lib/utils";

export function FloatingMobileCta() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating CTA after scrolling past hero (~350px)
      setIsVisible(window.scrollY > 350);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-5 right-5 z-40 sm:hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
      <Link
        href="/book"
        aria-label="Book a consultation with Rhodium Impact"
        className={cn(
          "flex items-center gap-2 bg-teal-700 text-white font-semibold text-xs px-4 py-3 rounded-full shadow-elevation hover:bg-teal-800 transition-all border border-teal-600/40 active:scale-95"
        )}
      >
        <PhoneCall className="w-3.5 h-3.5" />
        <span>Book a Call</span>
      </Link>
    </div>
  );
}
