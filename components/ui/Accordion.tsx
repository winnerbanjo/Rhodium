"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  className?: string;
  defaultOpenId?: string;
}

export function Accordion({
  items,
  allowMultiple = false,
  className,
  defaultOpenId,
}: AccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>(defaultOpenId ? [defaultOpenId] : []);

  const toggle = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={cn("divide-y divide-rhodium-200 dark:divide-navy-700", className)}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div key={item.id} className="py-4">
            <button
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between text-left font-serif font-semibold text-lg text-navy-900 dark:text-white transition-colors hover:text-teal-700 dark:hover:text-teal-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded p-1"
            >
              <span className="pr-4">{item.title}</span>
              <ChevronDown
                className={cn(
                  "w-5 h-5 flex-shrink-0 text-rhodium-500 transition-transform duration-200",
                  isOpen && "rotate-180 text-teal-700"
                )}
              />
            </button>
            {isOpen && (
              <div className="mt-3 text-rhodium-600 dark:text-rhodium-300 text-sm sm:text-base leading-relaxed pl-1">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
