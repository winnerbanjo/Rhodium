import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "secondary"
    | "accent"
    | "outline"
    | "ghost"
    | "link"
    | "neuros"
    | "neuros-dark"
    | "neuros-outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      isExternal = false,
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] group relative overflow-hidden";

    const variants = {
      primary: "bg-obsidian-950 text-white hover:bg-coral-500 shadow-[0_4px_18px_rgba(17,17,17,0.2)] hover:shadow-[0_8px_25px_rgba(241,79,68,0.35)] border border-white/10 hover:-translate-y-0.5",
      secondary: "bg-rhodium-100 hover:bg-rhodium-200 text-obsidian-950 border border-rhodium-200 hover:-translate-y-0.5",
      accent: "bg-gradient-to-r from-coral-500 to-cobalt-500 text-white hover:opacity-95 shadow-[0_4px_20px_rgba(241,79,68,0.3)] hover:shadow-[0_8px_30px_rgba(56,107,183,0.45)] hover:-translate-y-0.5",
      outline: "bg-white/10 dark:bg-obsidian-900/60 backdrop-blur-md text-obsidian-950 dark:text-white border border-slate-300 dark:border-white/15 hover:bg-coral-500 hover:border-coral-500 hover:text-white hover:-translate-y-0.5",
      ghost: "bg-transparent text-obsidian-900 dark:text-white hover:bg-slate-100 dark:hover:bg-obsidian-800",
      link: "bg-transparent text-coral-500 hover:text-coral-600 hover:underline p-0 h-auto",
      neuros: "bg-gradient-to-r from-coral-500 via-[#e9453a] to-cobalt-500 text-white shadow-[0_6px_24px_rgba(241,79,68,0.35)] hover:shadow-[0_10px_35px_rgba(56,107,183,0.5)] hover:-translate-y-0.5 font-semibold",
      "neuros-dark": "bg-obsidian-950 text-white hover:bg-coral-500 border border-white/15 hover:border-coral-500 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 font-semibold",
      "neuros-outline": "bg-transparent text-obsidian-950 dark:text-white border-2 border-obsidian-950 dark:border-white/20 hover:border-coral-500 hover:bg-coral-500 hover:text-white hover:-translate-y-0.5 font-semibold",
    };

    const sizes = {
      sm: "text-xs px-4 py-2 gap-1.5",
      md: "text-sm px-5 py-2.5 gap-2 font-medium tracking-tight",
      lg: "text-base px-7 py-3.5 gap-2.5 font-semibold tracking-tight",
    };

    const content = (
      <>
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            />
          </svg>
        )}
        {!isLoading && leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {!isLoading && rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
      </>
    );

    if (href) {
      if (isExternal) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(baseStyles, variants[variant], sizes[size], className)}
          >
            {content}
          </a>
        );
      }
      return (
        <Link href={href} className={cn(baseStyles, variants[variant], sizes[size], className)}>
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
