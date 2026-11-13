import React from "react";

export function NeurosTicker() {
  const tape1 = [
    "CLOSING THE BANKABILITY GAP",
    "£2.5B+ STRUCTURED FACILITIES",
    "FROM IDEA TO FINANCIAL CLOSE",
    "FAST-AUDITED FINANCIAL MODELS",
    "10,000+ FARMER & AGRIBUSINESS REACH",
    "SOVEREIGN DE-RISKING FRAMEWORKS",
  ];

  const tape2 = [
    "CREDIT-COMMITTEE GRADE TRANSACTION ADVISORY",
    "DUAL-CURRENCY DEBT MOBILISATION",
    "NIGERIA • CAMA 2020 RC: 8102994",
    "IFC & DFI PERFORMANCE STANDARDS",
    "PPP & CONCESSION ARCHITECTURE",
    "LOCAL PENSION CAPITAL SYNDICATION",
  ];

  return (
    <div className="relative py-12 md:py-16 overflow-hidden bg-obsidian-950 text-white select-none my-6">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-32 bg-coral-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-32 bg-cobalt-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Tape 1: Tilted -2deg, moving left, stroke text with coral accents */}
      <div className="relative -rotate-1 md:-rotate-2 scale-105 py-2.5 bg-gradient-to-r from-obsidian-900 via-obsidian-800 to-obsidian-900 border-y border-white/10 shadow-2xl z-10">
        <div className="animate-marquee-left flex items-center space-x-8 text-xl sm:text-2xl md:text-3xl font-heading font-black tracking-wider uppercase">
          {[...tape1, ...tape1, ...tape1].map((text, i) => (
            <div key={i} className="flex items-center space-x-8 flex-shrink-0">
              <span className="special-text-stroke text-white/80 hover:text-white transition-colors">
                {text}
              </span>
              <span className="text-coral-500 text-lg">/</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tape 2: Tilted +2deg, moving right, solid gradient text */}
      <div className="relative rotate-1 md:rotate-2 scale-105 py-2.5 bg-obsidian-900/90 border-y border-coral-500/20 shadow-xl -mt-2 z-20 backdrop-blur-md">
        <div className="animate-marquee-right flex items-center space-x-8 text-xl sm:text-2xl md:text-3xl font-heading font-black tracking-wider uppercase">
          {[...tape2, ...tape2, ...tape2].map((text, i) => (
            <div key={i} className="flex items-center space-x-8 flex-shrink-0">
              <span className="neuros-gradient-text">
                {text}
              </span>
              <span className="text-cobalt-400 text-lg">★</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
