"use client";

import React, { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { AlertTriangle, RefreshCw } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-white dark:bg-navy-950 px-4 py-20">
      <div className="max-w-md text-center space-y-6">
        <div className="w-14 h-14 rounded-full bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400 flex items-center justify-center mx-auto">
          <AlertTriangle className="w-7 h-7" />
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-navy-900 dark:text-white">
            Application Error Encountered
          </h1>
          <p className="text-sm text-rhodium-600 dark:text-rhodium-300 leading-relaxed">
            An unexpected transaction processing exception occurred while rendering this view. Our technical systems have been alerted.
          </p>
        </div>

        <div className="pt-2 flex justify-center gap-4">
          <Button
            onClick={() => reset()}
            variant="primary"
            leftIcon={<RefreshCw className="w-4 h-4" />}
          >
            Retry Request
          </Button>
          <Button href="/" variant="outline">
            Return to Homepage
          </Button>
        </div>
      </div>
    </div>
  );
}
