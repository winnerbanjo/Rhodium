import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "default" | "light" | "monochrome";
  size?: "sm" | "md" | "lg";
  hideTextOnMobile?: boolean;
}

export function Logo({
  className,
  variant = "default",
  size = "md",
  hideTextOnMobile = false,
}: LogoProps) {
  // Dimensions
  const monogramSizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  const titleSizes = {
    sm: "text-base tracking-wider",
    md: "text-lg tracking-wider",
    lg: "text-xl tracking-wider",
  };

  const subtitleSizes = {
    sm: "text-[9px] tracking-[0.25em]",
    md: "text-[10px] tracking-[0.3em]",
    lg: "text-[11px] tracking-[0.35em]",
  };

  const isLight = variant === "light";

  return (
    <Link
      href="/"
      aria-label="Rhodium Impact Consulting Ltd — Return to homepage"
      className={cn("group inline-flex items-center gap-3 transition-opacity hover:opacity-95", className)}
    >
      {/* Geometric Monogram Mark (Faceted 'R' & Infrastructure Arch/Bridge Motif) */}
      <div
        className={cn(
          "relative flex-shrink-0 transition-transform duration-300 group-hover:scale-105",
          monogramSizes[size]
        )}
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
          aria-hidden="true"
        >
          {/* Outer Rhomboid / Faceted Gem Frame */}
          <polygon
            points="50,4 96,27 96,73 50,96 4,73 4,27"
            stroke={isLight ? "#E8ECF1" : "#0B1F3A"}
            strokeWidth="3.5"
            fill={isLight ? "rgba(255,255,255,0.06)" : "#FFFFFF"}
            className="transition-colors"
          />

          {/* Infrastructure Bridge Arch Accent */}
          <path
            d="M24,73 C24,48 40,36 50,36 C60,36 76,48 76,73"
            stroke="#0F766E"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Faceted Monogram 'R' Spine */}
          <path
            d="M36,26 L36,73"
            stroke={isLight ? "#FFFFFF" : "#0B1F3A"}
            strokeWidth="6"
            strokeLinecap="round"
          />

          {/* 'R' Upper Loop with Rhodium Silver Hue */}
          <path
            d="M36,26 H56 C65,26 68,34 68,42 C68,50 63,55 52,55 H36"
            stroke="#8A97A8"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* 'R' Diagonal Leg with Subtle Brass Gold Highlight */}
          <path
            d="M50,54 L66,73"
            stroke="#B08D57"
            strokeWidth="5.5"
            strokeLinecap="round"
          />

          {/* Central Keystone / Keystone Node */}
          <circle cx="50" cy="36" r="3" fill="#B08D57" />
        </svg>
      </div>

      {/* Typography Wordmark */}
      <div className={cn("flex flex-col leading-none", hideTextOnMobile && "hidden sm:flex")}>
        <span
          className={cn(
            "font-serif font-bold uppercase tracking-wider transition-colors",
            titleSizes[size],
            isLight ? "text-white" : "text-navy-900 group-hover:text-teal-700"
          )}
        >
          Rhodium Impact
        </span>
        <span
          className={cn(
            "font-sans font-medium uppercase mt-1",
            subtitleSizes[size],
            isLight ? "text-rhodium-300" : "text-rhodium-500"
          )}
        >
          Consulting
        </span>
      </div>
    </Link>
  );
}
