import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "teal" | "brass" | "outline" | "navy";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  const variants = {
    default: "bg-rhodium-100 text-navy-900 border border-rhodium-200",
    teal: "bg-teal-50 text-teal-800 border border-teal-200 dark:bg-teal-950/60 dark:text-teal-300 dark:border-teal-800",
    brass: "bg-brass-50 text-brass-700 border border-brass-200 dark:bg-brass-900/40 dark:text-brass-300 dark:border-brass-800",
    navy: "bg-navy-900 text-white border border-navy-800",
    outline: "bg-transparent text-rhodium-700 dark:text-rhodium-300 border border-rhodium-300 dark:border-rhodium-700",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium tracking-wide uppercase",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
