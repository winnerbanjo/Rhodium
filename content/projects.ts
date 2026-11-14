export interface ProjectCaseStudy {
  slug: string;
  isPlaceholder: boolean;
  title: string;
  clientPlaceholder: string;
  countryPlaceholder: string;
  sectorId: string;
  serviceSlug: string;
  sectorName: string;
  serviceName: string;
  shortSummary: string;
  challenge: string;
  ourRole: string;
  approach: string;
  outcome: string;
  image?: string;
  metrics: Array<{ label: string; value: string }>;
}

export interface TrackRecordMetric {
  id: string;
  label: string;
  value: string;
  subtext: string;
  isPlaceholder: boolean;
}

export const trackRecordMetrics: TrackRecordMetric[] = [
  {
    id: "capital-mobilized",
    label: "Financing Facilities Structured & Executed",
    value: "£2.5B+",
    subtext: "Across private & public markets, project finance, PPPs & asset-backed lending",
    isPlaceholder: false,
  },
  {
    id: "mandates-closed",
    label: "Financing Mandates Closed",
    value: "20+",
    subtext: "Major infrastructure, energy transition, and public-private transactions",
    isPlaceholder: false,
  },
  {
    id: "fund-portfolio",
    label: "Infrastructure Fund Finance Portfolio Managed",
    value: "£1.0B",
    subtext: "Fund finance portfolio managed across institutional asset managers",
    isPlaceholder: false,
  },
  {
    id: "years-experience",
    label: "Transaction Track Record",
    value: "19+ Yrs",
    subtext: "Direct advisory and structuring experience across West Africa & Western Europe",
    isPlaceholder: false,
  },
];

export const projectCaseStudies: ProjectCaseStudy[] = [
  {
    slug: "sub-national-sme-infrastructure-cbn-agsmeis",
    isPlaceholder: false,
    title: "Sub-National Economic Infrastructure & SME Capital Mobilisation",
    clientPlaceholder: "Osun State Government / Federal Government & CBN AGSMEIS Programme",
    countryPlaceholder: "Nigeria",
    sectorId: "social-infrastructure",
    serviceSlug: "ppp-government-advisory",
    sectorName: "Social Infrastructure & Public Finance",
    serviceName: "PPP & Government Advisory",
    shortSummary:
      "Advising and structuring an enterprise development and funding programme across Osun State under the Central Bank of Nigeria AGSMEIS facility, mobilizing over ₦5B in capital.",
    challenge:
      "Sub-national economic stimulation in emerging economies is frequently constrained by poor data collation, inadequate enterprise structuring, and stringent commercial bank underwriting hurdles, preventing domestic SMEs and agricultural processors from accessing federal concessionary funding.",
    ourRole:
      "Lead Transaction & Capacity Building Adviser to the State Government. Advised on institutional structuring, training coordination for over 1,500 state beneficiaries, business plan bankability reviews, and lender documentation.",
    approach:
      "Designed a centralized capacity-building and loan-readiness curriculum aligned with CBN underwriting standards. Coordinated with participating financial institutions to package viable loan dossiers with verifiable equipment procurement workflows.",
    outcome:
      "Successfully secured and delivered training consultancy for over 1,500 indigenes, attracting over ₦5B in catalytic capital to Osun State to accelerate local enterprise and agricultural processing.",
    image: "/images/projects/sub-national-logistics.jpg",
    metrics: [
      { label: "Capital Mobilised", value: "₦5.0B+" },
      { label: "Beneficiaries Trained", value: "1,500+ Entrepreneurs" },
      { label: "Institutional Backer", value: "CBN AGSMEIS / State" },
      { label: "Focus Sectors", value: "Agribusiness & Light Industry" },
    ],
  },
  {
    slug: "agricultural-equipment-sme-procurement-financing",
    isPlaceholder: false,
    title: "Nationwide Agricultural Equipment Procurement & SME Financing Facility",
    clientPlaceholder: "Agricultural & SME Commercial Enterprises / Development Partners",
    countryPlaceholder: "Nigeria (Nationwide)",
    sectorId: "social-infrastructure",
    serviceSlug: "capital-advisory-financial-structuring",
    sectorName: "Social & Rural Infrastructure",
    serviceName: "Capital Advisory & Structuring",
    shortSummary:
      "Structuring nationwide equipment procurement and commercial funding mechanisms enabling over 10,000 agricultural producers to access $5M+ in modern machinery and working capital.",
    challenge:
      "Smallholder farmers and rural agro-processors faced severe operational deficits due to prohibitive upfront equipment costs, lack of formal collateral, and commercial bank reluctance to extend asset-backed financing into rural value chains.",
    ourRole:
      "Lead Advisory & Implementation Partner. Designed equipment procurement frameworks, risk asset management models ($7M+ corporate portfolio), and institutional liability structures ($10.5M+).",
    approach:
      "Established structured asset-backed lease and vendor-financing mechanisms that linked machinery suppliers with vetted farmer cooperatives, integrating technical maintenance covenants and structured repayment cycles.",
    outcome:
      "Trained and mobilized over 10,000 farmers and agricultural entrepreneurs nationwide, enabling access to over $5M in asset-backed equipment and commercial funding.",
    image: "/images/projects/cbn-agsmeis-agriculture.jpg",
    metrics: [
      { label: "Procurement Funding", value: "$5.0M+ Delivered" },
      { label: "Value Chain Reach", value: "10,000+ Farmers" },
      { label: "Risk Assets Structured", value: "$7M+ Corporate Portfolio" },
      { label: "Liability Mobilisation", value: "$10.5M+ Generated" },
    ],
  },
  {
    slug: "cross-border-structured-infrastructure-facilities",
    isPlaceholder: false,
    title: "Cross-Border Infrastructure Debt & Fund Finance Facilities",
    clientPlaceholder: "Institutional Fund Managers, European & African Commercial Syndicates",
    countryPlaceholder: "United Kingdom & West Africa",
    sectorId: "power-and-utilities",
    serviceSlug: "project-finance-transaction-advisory",
    sectorName: "Power & Utilities",
    serviceName: "Project Finance & Transaction Advisory",
    shortSummary:
      "Structuring, arranging, and executing over £2.5 billion in public and private financing facilities across energy, infrastructure, and institutional fund portfolios.",
    challenge:
      "Infrastructure sponsors and institutional funds often struggle to reconcile complex multi-jurisdictional lender covenants, public-private partnership risk transfers, and public market debt instruments with private equity capital stacks.",
    ourRole:
      "Head of Global Advisory & Structuring Lead. Structured bespoke capital solutions combining private sector debt and equity with public and government-backed credit enhancements across emerging and developed markets.",
    approach:
      "Deployed project finance, PPP, and asset-backed lending architectures alongside green and social bond issuances, while managing a £1bn institutional infrastructure fund finance portfolio.",
    outcome:
      "Closed 20+ major financing mandates, structuring and executing in excess of £2.5 billion in total financing facilities across Africa and Europe.",
    image: "/images/projects/energy-transition.jpg",
    metrics: [
      { label: "Total Facilities Executed", value: "£2.5B+" },
      { label: "Fund Portfolio Managed", value: "£1.0B" },
      { label: "Mandates Closed", value: "20+ Mandates" },
      { label: "Cross-Border Coverage", value: "Africa & Europe" },
    ],
  },
];
