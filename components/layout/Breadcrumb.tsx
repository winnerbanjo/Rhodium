import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb navigation"
      className={cn("flex items-center text-xs sm:text-sm text-rhodium-500 py-3", className)}
    >
      <ol className="flex items-center space-x-2">
        <li>
          <Link
            href="/"
            className="flex items-center text-rhodium-500 hover:text-navy-900 dark:hover:text-white transition-colors"
            aria-label="Home"
          >
            <Home className="w-3.5 h-3.5" />
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={index}>
              <li>
                <ChevronRight className="w-3 h-3 text-rhodium-400" />
              </li>
              <li>
                {isLast || !item.href ? (
                  <span
                    aria-current={isLast ? "page" : undefined}
                    className="font-medium text-navy-900 dark:text-white truncate max-w-[200px] sm:max-w-none inline-block align-bottom"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-rhodium-600 dark:text-rhodium-400 hover:text-navy-900 dark:hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
