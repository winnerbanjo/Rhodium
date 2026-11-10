export interface CorporateValue {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
}

export const corporateValues: CorporateValue[] = [
  {
    id: "bankability-first",
    title: "Bankability First",
    tagline: "Tested against lender scrutiny",
    description:
      "Every structure, model, and contractual recommendation is tested against one rigorous benchmark: \"Would an investment or credit committee sign off on this?\" We do not produce theoretical concepts; we build transactions designed for financial close.",
    icon: "ShieldCheck",
  },
  {
    id: "independence",
    title: "Independence",
    tagline: "Uncompromised advisory integrity",
    description:
      "We advise on what is true and viable, not what is politically expedient or convenient. Our advisory fees are never contingent on telling clients what they wish to hear, ensuring our institutional credibility remains absolute.",
    icon: "Scale",
  },
  {
    id: "local-depth-global-standard",
    title: "Local Depth, Global Standard",
    tagline: "Bridging domestic realities with international capital",
    description:
      "We combine granular, ground-level African commercial and regulatory reality with rigorous international standards, including IFC Performance Standards, Equator Principles, and international project finance market conventions.",
    icon: "Globe2",
  },
  {
    id: "execution-over-reports",
    title: "Execution over Reports",
    tagline: "Measured by assets that actually get built",
    description:
      "We measure our success not by the volume or thickness of PDF deliverables, but by projects that reach financial close, break ground, and sustainably operate to deliver economic and community dividends.",
    icon: "Target",
  },
  {
    id: "integrity",
    title: "Integrity",
    tagline: "Absolute transparency and compliance",
    description:
      "Zero tolerance for corrupt practices, opaque arrangements, or substandard governance. We apply institutional-grade KYC, AML, and transparency protocols across all mandates and partner relationships.",
    icon: "Award",
  },
];

export interface Differentiator {
  id: string;
  title: string;
  summary: string;
  detail: string;
  icon: string;
}

export const whyRhodiumDifferentiators: Differentiator[] = [
  {
    id: "lenders-eye-view",
    title: "Lender's-Eye View",
    summary: "Credit-committee mindset from day one",
    detail:
      "We structure projects from the perspective of the institutions providing the capital. We anticipate debt covenants, security packages, and condition precedents before term sheets are issued.",
    icon: "Eye",
  },
  {
    id: "energy-reform-specialists",
    title: "Energy Reform Specialists",
    summary: "Sub-national power & decentralised transition",
    detail:
      "Specialised authority in emerging power market design, cost-reflective tariff modelling, decentralised grids, and State Electricity Act transitions across African sub-national markets.",
    icon: "Zap",
  },
  {
    id: "both-capital-worlds",
    title: "Both Capital Worlds",
    summary: "DFI concessionality meets local commercial capital",
    detail:
      "Fluent in both development finance architectures (IFC, AfDB, BII, FMO, Proparco) and domestic institutional capital (pension funds, commercial banks, infra funds), unlocking local currency matching.",
    icon: "Coins",
  },
  {
    id: "cross-market-perspective",
    title: "Cross-Market Perspective",
    summary: "African depth with international best practices",
    detail:
      "Direct transactional experience navigating differing legal traditions, regulatory systems, foreign exchange regimes, and sovereign support structures across emerging frontiers.",
    icon: "Compass",
  },
  {
    id: "senior-led",
    title: "Senior-Led Mandates",
    summary: "Partners execute the work, not just win it",
    detail:
      "Clients work directly with senior advisers and partners on every deliverable. We do not pass critical transaction work down to junior generalists.",
    icon: "Users",
  },
  {
    id: "teaching-dna",
    title: "Teaching DNA",
    summary: "Capacity building embedded in advisory",
    detail:
      "Rooted in our executive teaching and masterclass experience across project finance, green bonds, and PPPs. We transfer durable structuring capabilities to client teams.",
    icon: "GraduationCap",
  },
  {
    id: "lean-and-agile",
    title: "Lean & Agile",
    summary: "High speed without bureaucratic inertia",
    detail:
      "A core agile team coupled with an on-demand vetted network of specialised engineers, environmental modellers, and legal counsel deployed rapidly per transaction requirements.",
    icon: "Rocket",
  },
];
