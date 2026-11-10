import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "outline" | "ghost" | "link";
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
      "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

    const variants = {
      primary: "bg-navy-900 text-white hover:bg-navy-800 shadow-[0_2px_12px_rgba(11,31,58,0.15)] hover:shadow-[0_4px_20px_rgba(11,31,58,0.25)] border border-navy-800 hover:-translate-y-0.5",
      secondary: "bg-rhodium-100/80 hover:bg-rhodium-200 text-navy-900 border border-rhodium-200/80 hover:-translate-y-0.5",
      accent: "bg-teal-700 text-white hover:bg-teal-600 shadow-[0_2px_14px_rgba(15,118,110,0.3)] hover:shadow-[0_4px_22px_rgba(15,118,110,0.45)] border border-teal-600/50 hover:-translate-y-0.5",
      outline: "bg-white/10 dark:bg-navy-900/40 backdrop-blur-md text-navy-900 dark:text-white border border-slate-300 dark:border-white/20 hover:bg-navy-900/5 dark:hover:bg-white/10 hover:-translate-y-0.5",
      ghost: "bg-transparent text-navy-900 dark:text-white hover:bg-slate-100 dark:hover:bg-navy-800",
      link: "bg-transparent text-teal-700 hover:text-teal-600 hover:underline p-0 h-auto",
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
