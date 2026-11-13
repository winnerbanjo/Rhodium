import React from "react";

export function NeurosTicker() {
  const items = [
    "CLOSING THE BANKABILITY GAP",
    "£2.5B+ STRUCTURED TRANSACTIONS",
    "FROM PREPARATION TO FINANCIAL CLOSE",
    "FAST-STANDARD FINANCIAL MODELLING",
    "10,000+ AGRIBUSINESS & SME BENEFICIARIES",
    "SOVEREIGN DE-RISKING & PPP STRUCTURES",
    "DUAL-CURRENCY DEBT MOBILISATION",
    "CREDIT-COMMITTEE GRADE ADVISORY",
    "NIGERIA (RC: 8102994) & LONDON DESK",
    "LOCAL PENSION CAPITAL SYNDICATION",
  ];

  return (
    <div className="relative py-4 overflow-hidden bg-neutral-950 text-neutral-400 select-none border-y border-neutral-800">
      <div className="animate-marquee-left flex items-center space-x-12 text-xs font-mono uppercase tracking-widest">
        {[...items, ...items, ...items].map((text, i) => (
          <div key={i} className="flex items-center space-x-12 flex-shrink-0">
            <span className="text-neutral-300 hover:text-white transition-colors font-medium">
              {text}
            </span>
            <span className="text-neutral-700">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
