"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export interface TabItem {
  id: string;
  label: string;
  badge?: string | number;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: TabItem[];
  defaultTabId?: string;
  onChange?: (tabId: string) => void;
  className?: string;
}

export function Tabs({ tabs, defaultTabId, onChange, className }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTabId || tabs[0]?.id);

  const handleTabClick = (id: string) => {
    setActiveTab(id);
    if (onChange) onChange(id);
  };

  const activeContent = tabs.find((t) => t.id === activeTab)?.content;

  return (
    <div className={cn("w-full", className)}>
      <div className="flex border-b border-rhodium-200 dark:border-navy-700 overflow-x-auto no-scrollbar gap-2">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={cn(
                "py-3 px-4 text-sm font-medium whitespace-nowrap border-b-2 transition-all flex items-center gap-2",
                isActive
                  ? "border-teal-700 text-teal-800 dark:text-teal-400 font-semibold"
                  : "border-transparent text-rhodium-600 dark:text-rhodium-400 hover:text-navy-900 dark:hover:text-white hover:border-rhodium-300"
              )}
            >
              <span>{tab.label}</span>
              {tab.badge !== undefined && (
                <span
                  className={cn(
                    "text-xs px-2 py-0.5 rounded-full",
                    isActive
                      ? "bg-teal-100 text-teal-800 dark:bg-teal-900/60 dark:text-teal-200"
                      : "bg-rhodium-100 text-rhodium-700 dark:bg-navy-800 dark:text-rhodium-400"
                  )}
                >
                  {tab.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>
      <div className="mt-6">{activeContent}</div>
    </div>
  );
}
