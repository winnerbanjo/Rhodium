import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  bordered?: boolean;
}

export function Card({
  className,
  hoverEffect = false,
  bordered = true,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "bg-white dark:bg-navy-900 rounded-2xl p-6 sm:p-7 shadow-[0_4px_24px_rgba(11,31,58,0.04)] transition-all duration-300 ease-out",
        bordered && "border border-slate-200/80 dark:border-white/10",
        hoverEffect &&
          "hover:shadow-[0_20px_45px_-12px_rgba(11,31,58,0.12)] hover:-translate-y-1 hover:border-teal-600/50 dark:hover:border-teal-400/40",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mb-4 flex flex-col space-y-1.5", className)} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("text-xl font-serif font-bold text-navy-900 dark:text-white", className)}
      {...props}
    >
      {children}
    </h3>
  );
}

export function CardDescription({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-sm text-rhodium-600 dark:text-rhodium-300 leading-relaxed", className)}
      {...props}
    >
      {children}
    </p>
  );
}

export function CardContent({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("pt-0", className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mt-6 pt-4 border-t border-rhodium-100 dark:border-navy-800 flex items-center", className)} {...props}>
      {children}
    </div>
  );
}
