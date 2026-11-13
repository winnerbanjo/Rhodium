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
      "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] group relative";

    const variants = {
      primary: "bg-neutral-900 text-white hover:bg-black shadow-sm border border-neutral-800 hover:-translate-y-0.5",
      secondary: "bg-neutral-100 hover:bg-neutral-200 text-neutral-900 border border-neutral-200 hover:-translate-y-0.5",
      accent: "bg-neutral-900 text-white hover:bg-neutral-800 shadow-sm border border-neutral-800 hover:-translate-y-0.5",
      outline: "bg-transparent text-neutral-900 dark:text-white border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:-translate-y-0.5",
      ghost: "bg-transparent text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800",
      link: "bg-transparent text-neutral-900 hover:underline p-0 h-auto",
      neuros: "bg-neutral-900 text-white hover:bg-black border border-neutral-800 shadow-sm hover:-translate-y-0.5 font-medium",
      "neuros-dark": "bg-white text-neutral-950 hover:bg-neutral-100 border border-white/80 shadow-sm hover:-translate-y-0.5 font-medium",
      "neuros-outline": "bg-transparent text-neutral-900 dark:text-white border border-neutral-300 dark:border-white/20 hover:bg-neutral-100 dark:hover:bg-white/10 hover:-translate-y-0.5 font-medium",
    };

    const sizes = {
      sm: "text-xs px-3.5 py-1.5 gap-1.5",
      md: "text-sm px-5 py-2.5 gap-2 font-medium tracking-tight",
      lg: "text-base px-6 py-3 gap-2.5 font-medium tracking-tight",
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
