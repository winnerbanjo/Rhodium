"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface NewsletterFormProps {
  className?: string;
  variant?: "inline" | "stacked" | "card";
}

export function NewsletterForm({ className, variant = "inline" }: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    setStatus("idle");
    setMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Subscription failed.");
      }

      setStatus("success");
      setMessage("Thank you. You have been added to our executive briefing list.");
      setEmail("");
    } catch (err: any) {
      setStatus("error");
      setMessage(err.message || "Failed to subscribe. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (status === "success") {
    return (
      <div className={cn("flex items-center gap-2 text-teal-700 dark:text-teal-400 text-sm font-medium", className)}>
        <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
        <span>{message}</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("w-full", className)}>
      <div
        className={cn(
          "flex",
          variant === "inline"
            ? "flex-col sm:flex-row gap-2"
            : "flex-col gap-2.5"
        )}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter corporate email..."
          required
          aria-label="Corporate email address"
          className="flex-1 px-3.5 py-2.5 text-sm rounded border border-rhodium-300 dark:border-navy-700 bg-white dark:bg-navy-900 text-navy-900 dark:text-white placeholder:text-rhodium-400 focus:outline-none focus:ring-2 focus:ring-teal-700"
        />
        <Button
          type="submit"
          variant="accent"
          size="md"
          isLoading={isSubmitting}
          className="whitespace-nowrap"
        >
          Subscribe
        </Button>
      </div>

      {status === "error" && (
        <div className="mt-2 flex items-center gap-1.5 text-xs text-red-600 dark:text-red-400">
          <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
          <span>{message}</span>
        </div>
      )}

      <p className="mt-2 text-[11px] text-rhodium-500 leading-normal">
        Quarterly briefing on emerging market project finance, PPP regulations, and deal bankability. Unsubscribe anytime.
      </p>
    </form>
  );
}
