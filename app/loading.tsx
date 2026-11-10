import React from "react";

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-white dark:bg-navy-950 px-4">
      <div className="relative w-12 h-12 mb-4">
        <div className="w-12 h-12 rounded-full border-2 border-rhodium-200 dark:border-navy-800" />
        <div className="w-12 h-12 rounded-full border-2 border-teal-700 border-t-transparent animate-spin absolute inset-0" />
      </div>
      <p className="text-xs font-semibold uppercase tracking-widest text-rhodium-500">
        Loading Advisory Dossier...
      </p>
    </div>
  );
}
