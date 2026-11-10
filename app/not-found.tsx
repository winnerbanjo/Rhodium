import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Home, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white dark:bg-navy-950 px-4 py-20">
      <div className="max-w-md text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-rhodium-100 dark:bg-navy-900 text-teal-700 dark:text-teal-400 flex items-center justify-center mx-auto">
          <Compass className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brass-600 dark:text-brass-400">
            Error 404 • Page Not Found
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-navy-900 dark:text-white">
            Resource Relocated or Unavailable
          </h1>
          <p className="text-sm text-rhodium-600 dark:text-rhodium-300 leading-relaxed">
            The advisory page, transaction memorandum, or practice document you requested could not be located on the Rhodium Impact network.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button href="/" variant="primary" leftIcon={<Home className="w-4 h-4" />}>
            Return Home
          </Button>
          <Button href="/services" variant="outline" rightIcon={<ArrowLeft className="w-4 h-4 rotate-180" />}>
            Explore Practices
          </Button>
        </div>
      </div>
    </div>
  );
}
