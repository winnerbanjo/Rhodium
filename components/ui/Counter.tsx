"use client";

import React, { useEffect, useState, useRef } from "react";
import { useReducedMotion } from "framer-motion";

interface CounterProps {
  value: string;
  duration?: number;
  className?: string;
}

export function Counter({ value, duration = 1500, className }: CounterProps) {
  const shouldReduceMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(value);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  // Extract leading non-digits, number, and trailing characters
  const match = value.match(/^([^0-9]*)([0-9]+)(.*)$/);
  const prefix = match ? match[1] : "";
  const numericVal = match ? parseInt(match[2], 10) : null;
  const suffix = match ? match[3] : "";

  useEffect(() => {
    if (shouldReduceMotion || numericVal === null) {
      setDisplayValue(value);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTimestamp: number | null = null;
          const startValue = 0;

          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            // Ease out quad
            const easeProgress = 1 - (1 - progress) * (1 - progress);
            const current = Math.floor(easeProgress * (numericVal - startValue) + startValue);
            setDisplayValue(`${prefix}${current}${suffix}`);

            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setDisplayValue(value);
            }
          };

          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [value, numericVal, duration, prefix, suffix, shouldReduceMotion]);

  return (
    <span ref={elementRef} className={className}>
      {displayValue}
    </span>
  );
}
