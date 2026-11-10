export interface ServiceDetail {
  slug: string;
  title: string;
  subtitle: string;
  leadSentence: string;
  summary: string;
  icon: string;
  whatWeDo: string[];
  typicalClients: string[];
  outcomes: string[];
  relatedServices: string[];
}

export const servicesData: ServiceDetail[] = [
  {
    slug: "capital-advisory-financial-structuring",
    title: "Capital Advisory & Financial Structuring",
    subtitle: "Raising the money and designing a capital structure lenders will accept.",
    leadSentence:
      "We design resilient capital architectures and coordinate competitive debt and equity raising across DFIs, ECAs, institutional investors, and domestic capital markets.",
    summary:
      "Capital structure can make or break an infrastructure asset. We engineer the optimal balance of senior, mezzanine, blended concessional, and equity capital while solving the local currency mismatches that threaten emerging market revenues.",
    icon: "Coins",
    whatWeDo: [
      "Debt and equity capital raising across DFIs, ECAs, commercial banks, and infrastructure funds",
      "Capital stack architecture: optimising senior debt, mezzanine, subordinate debt, blended concessional tranches, and equity contributions",
      "Local currency solutions: guaranteed domestic bonds, local commercial bank syndications, and domestic pension fund mobilisation",
      "Green, social, and sustainability-linked bonds and loans: framework design, taxonomy alignment, and second-party opinion (SPO) coordination",
      "Credit enhancement structuring: partial risk guarantees (PRGs), partial credit guarantees (PCGs), political risk insurance (MIGA/ATI), and liquidity backstops",
      "Carbon finance advisory: credit origination, methodology alignment, and monetisation for renewable generation and clean cooking programmes",
      "Refinancing, corporate restructuring, and distressed infrastructure asset workouts",
    ],
    typicalClients: [
      "Private project sponsors seeking non-recourse senior debt and equity partners",
      "Pension fund administrators and domestic asset managers evaluating infrastructure debt",
      "Sub-national governments issuing green or revenue-backed infrastructure bonds",
      "DFIs and blended finance facilities requiring local market co-structuring",
    ],
    outcomes: [
      "Reduced weighted average cost of capital (WACC) through optimal concessional blending",
      "Elimination of foreign exchange mismatch risk via domestic capital mobilisation",
      "Accelerated credit committee approvals with pre-cleared covenant packages",
      "Access to international green bond and impact capital pools",
    ],
    relatedServices: [
      "project-finance-transaction-advisory",
      "risk-management-due-diligence",
      "esg-climate-sustainability",
    ],
  },
  {
    slug: "project-finance-transaction-advisory",
    title: "Project Finance & Transaction Advisory",
    subtitle: "Leading a transaction from structuring to financial close.",
    leadSentence:
      "We act as the quarterback for sponsors and procuring authorities, aligning financial models, commercial contracts, and lender demands into a closed deal.",
    summary:
      "A project only succeeds when funds are drawn down and construction begins. We manage the end-to-end transaction lifecycle, developing credit-grade financial models and managing lenders through term sheets, credit approvals, and conditions precedent.",
    icon: "TrendingUp",
    whatWeDo: [
      "Bankable, dynamic financial models (project finance, PPP, corporate) featuring granular sensitivity, scenario, and debt sizing modules",
      "Lender term sheet negotiation, debt process coordination, and syndication management",
      "Financial close coordination: managing conditions precedent (CPs), closing checklists, legal opinions, and initial drawdown readiness",
      "Buy-side and sell-side M&A advisory for operational and brownfield infrastructure assets (financial valuation, fairness opinions, due diligence)",
      "Investment documentation: institutional Information Memoranda (IM), teasers, and secure virtual data room (VDR) administration",
      "Contract negotiation support on EPC, O&M, Fuel Supply, and Concession Agreements to preserve financial bankability",
    ],
    typicalClients: [
      "Utility-scale renewable energy and independent power producers (IPPs)",
      "Private equity and infrastructure funds executing asset acquisitions or divestments",
      "Industrial concessionaires and logistics corridor developers",
      "Government procurement authorities negotiating with private consortia",
    ],
    outcomes: [
      "Audit-ready financial models built to FAST standards that survive rigorous lender audit",
      "Shortened duration between commercial close and first disbursement",
      "Strict protection of sponsor equity returns through balanced risk transfer",
      "Seamless management of multidisciplinary lender adviser teams (technical, legal, insurance)",
    ],
    relatedServices: [
      "capital-advisory-financial-structuring",
      "ppp-government-advisory",
      "risk-management-due-diligence",
    ],
  },
  {
    slug: "project-development-feasibility",
    title: "Project Development & Feasibility",
    subtitle: "Taking an idea to a bankable, investment-ready project.",
    leadSentence:
      "We bridge the critical early-stage valley of death, turning conceptual plans into fully derisked, bankable assets ready for capital deployment.",
    summary:
      "The vast majority of infrastructure projects in emerging markets fail during preparation. We provide the disciplined pre-development horsepower required to establish technical, commercial, environmental, and financial viability.",
    icon: "Compass",
    whatWeDo: [
      "Pre-feasibility and bankable comprehensive feasibility studies across technical, commercial, economic, and legal dimensions",
      "Market and demand analytics: traffic forecasting, energy load profiles, off-taker creditworthiness, and tariff affordability assessments",
      "Site selection, land title regularisation, right-of-way (ROW) clearance, and permitting roadmaps",
      "Project preparation budgeting, development milestone schedules, and consortium partner procurement",
      "DFI and donor project preparation facility (PPF) grant applications and management",
      "Early-stage risk matrices identifying deal-breaker hurdles before major capital is committed",
    ],
    typicalClients: [
      "Early-stage project developers and entrepreneurial infrastructure sponsors",
      "Sovereign wealth funds and national development banks seeding new asset classes",
      "Industrial conglomerates establishing dedicated captive power and logistics corridors",
      "Donors and multilateral facilities funding project preparation envelopes",
    ],
    outcomes: [
      "Clear go/no-go investment decisions grounded in robust economic fundamentals",
      "Secured non-reimbursable project preparation grants to subsidise early development costs",
      "Bankable feasibility dossiers acceptable to Tier-1 international project financiers",
      "Streamlined permitting timelines with clear statutory compliance pathways",
    ],
    relatedServices: [
      "ppp-government-advisory",
      "risk-management-due-diligence",
      "energy-sector-regulatory-advisory",
    ],
  },
  {
    slug: "ppp-government-advisory",
    title: "PPP & Government Advisory",
    subtitle: "Helping national and sub-national governments procure and manage infrastructure.",
    leadSentence:
      "We advise sovereign, state, and municipal entities on procuring world-class public infrastructure without compromising long-term fiscal stability.",
    summary:
      "Public-Private Partnerships require an intricate balance between public interest protection and private capital bankability. We assist public authorities through the full statutory lifecycle, from business case formulation to transparent international tender.",
    icon: "Building2",
  whatWeDo: [
      "PPP project structuring: preparation of Outline Business Cases (OBC) and Full Business Cases (FBC) complying with national PPP frameworks (e.g. ICRC)",
      "Competitive procurement advisory: Expressions of Interest (EOI), Request for Qualifications (RFQ), Request for Proposals (RFP), and bid evaluation",
      "Concession and PPP contract architecture: drafting risk allocation matrices, government support frameworks, and termination compensation mechanisms",
      "Fiscal Commitment and Contingent Liability (FCCL) assessments to safeguard sovereign balance sheets",
      "Institutional establishment: operational design, governance protocols, and enabling legal drafting for dedicated PPP units and sub-national agencies",
      "Contract administration, monitoring protocols, and post-award PPP performance audits",
    ],
    typicalClients: [
      "National PPP units, Ministries of Finance, and infrastructure sector ministries",
      "State and sub-national governments rolling out municipal infrastructure programmes",
      "Multilateral development banks providing transaction advisory support to sovereign clients",
      "Special economic zone and free trade zone administrative authorities",
    ],
    outcomes: [
      "Transparent, internationally competitive tenders that attract top-tier global concessionaires",
      "Robust contractual risk allocation that withstands political and economic cycles",
      "Quantified contingent liability exposures ensuring sub-sovereign debt sustainability",
      "Accelerated regulatory approval through rigorous business case alignment",
    ],
    relatedServices: [
      "project-development-feasibility",
      "risk-management-due-diligence",
      "capacity-building-training",
    ],
  },
  {
    slug: "energy-sector-regulatory-advisory",
    title: "Energy Sector & Regulatory Advisory",
    subtitle: "Our specialist practice for power sectors in transition.",
    leadSentence:
      "We lead regulatory reform, tariff restructuring, and transaction advisory across reforming electricity markets, decentralised networks, and the energy transition.",
    summary:
      "Power systems in emerging economies are undergoing radical decentralisation and reform. Our specialist energy team advises governments, regulators, and utilities on crafting viable commercial markets, cost-reflective tariffs, and bankable off-take structures.",
    icon: "Zap",
    whatWeDo: [
      "Power market design and sector reform: unbundling, privatised wholesale markets, sub-national electricity regulatory regimes, and legal drafting",
      "Economic regulation: regulator set-up, statutory licensing regimes, and multi-year cost-reflective tariff methodology design (MYTO)",
      "Offtake structuring: Power Purchase Agreements (PPAs), Gas Supply Agreements (GSAs), and transmission/wheeling contract negotiations",
      "Tariff studies, cost of service analysis, and affordability modeling for public utilities and mini-grids",
      "Mini-grid, rural electrification, and distributed energy resource (DER) programme structuring, including Results-Based Financing (RBF)",
      "Energy transition blueprints for states, municipal jurisdictions, corporate off-takers, and industrial clusters",
    ],
    typicalClients: [
      "National and state electricity regulatory commissions (NERC, state electricity boards)",
      "Distribution companies (DisCos), transmission operators, and generation companies (GenCos)",
      "Independent power producers (solar, gas, hydro, hybrid storage)",
      "Commercial and industrial (C&I) clean energy developers and clean cooking programme managers",
    ],
    outcomes: [
      "Bankable off-take agreements with credit enhancement mechanisms that withstand utility default",
      "Transparent, cost-reflective tariff frameworks that ensure operator viability and protect consumers",
      "Successful launch of state-level electricity markets following decentralisation acts",
      "Unlocking grant and debt capital for rural mini-grids through verified RBF structures",
    ],
    relatedServices: [
      "capital-advisory-financial-structuring",
      "project-finance-transaction-advisory",
      "esg-climate-sustainability",
    ],
  },
  {
    slug: "risk-management-due-diligence",
    title: "Risk Management & Due Diligence",
    subtitle: "Identifying, pricing and mitigating the risks that kill deals.",
    leadSentence:
      "We perform forensic due diligence and design rigorous risk allocation structures to insulate lenders and sponsors against emerging market volatility.",
    summary:
      "Infrastructure assets fail when risks are ignored or assigned to parties unable to bear them. We deliver the commercial, financial, and political risk analysis required to make projects credit-committee approved.",
    icon: "ShieldAlert",
    whatWeDo: [
      "Comprehensive project risk assessment and matrix allocation frameworks across all project phases",
      "Foreign exchange (FX) and currency convertibility risk strategy, hedging models, and local currency revenue matching",
      "Political, sovereign, regulatory, and counterparty credit risk analysis (including off-taker and sub-sovereign financial profiling)",
      "Commercial, financial, and contractual due diligence on behalf of senior debt syndicates and institutional investors",
      "Project insurance programme review and advisory (delay in start-up, political risk insurance, force majeure optimisation)",
      "Integrity, anti-money laundering (AML), and ultimate beneficial ownership (UBO) KYC due diligence on project partners",
    ],
    typicalClients: [
      "International and regional commercial banks underwriting infrastructure debt",
      "Private debt funds and infrastructure equity investors conducting pre-investment audits",
      "DFIs requiring independent commercial due diligence reports",
      "Project sponsors seeking to optimise insurance premiums and security packages",
    ],
    outcomes: [
      "Elimination of unpriced sovereign and regulatory liabilities before capital commitment",
      "Pre-emptive restructuring of off-taker arrangements to satisfy credit rating requirements",
      "Clear risk pass-through mechanics in EPC and O&M contracts",
      "Robust currency hedging or dual-currency revenue indexing strategies",
    ],
    relatedServices: [
      "project-finance-transaction-advisory",
      "capital-advisory-financial-structuring",
      "ppp-government-advisory",
    ],
  },
  {
    slug: "esg-climate-sustainability",
    title: "ESG, Climate & Sustainability",
    subtitle: "Meeting lender and investor standards on environment, social and climate.",
    leadSentence:
      "We align infrastructure assets with international sustainability taxonomies, ensuring compliance with IFC Performance Standards and unlocking climate capital.",
    summary:
      "Global capital increasingly demands rigorous environmental, social, and climate governance. We ensure assets meet stringent international frameworks, transforming E&S compliance from a regulatory burden into a competitive financing advantage.",
    icon: "Leaf",
    whatWeDo: [
      "Environmental and Social Impact Assessment (ESIA) coordination and gap analysis against IFC Performance Standards and Equator Principles IV",
      "Environmental and Social Action Plans (ESAP) and comprehensive E&S Management System (ESMS) design",
      "Resettlement Action Plans (RAP), livelihood restoration frameworks, and Stakeholder Engagement Plans (SEP)",
      "Physical and transition climate risk assessments aligned with TCFD and ISSB disclosures",
      "Green and climate finance eligibility screening, taxonomy verification, and carbon accounting",
      "Annual sustainability reporting and community impact metrics verification for international lenders",
    ],
    typicalClients: [
      "Infrastructure developers preparing projects for DFI or multilateral debt approval",
      "Private equity funds upgrading portfolio companies to institutional ESG standards",
      "Industrial park and free trade zone operators establishing clean manufacturing credentials",
      "Public procurement authorities executing sustainable and climate-resilient PPPs",
    ],
    outcomes: [
      "Zero compliance delays during DFI environmental and social disclosure periods",
      "Eligibility unlocked for lower-margin green and climate-concessional debt facilities",
      "Constructive, documented community stakeholder relations mitigating operational stoppage risks",
      "TCFD/ISSB-aligned climate resilience baked into engineering and financial models",
    ],
    relatedServices: [
      "capital-advisory-financial-structuring",
      "energy-sector-regulatory-advisory",
      "risk-management-due-diligence",
    ],
  },
  {
    slug: "capacity-building-training",
    title: "Capacity Building & Training",
    subtitle: "Building the skills that make deals happen.",
    leadSentence:
      "We transfer institutional deal-structuring capabilities through executive masterclasses, embedded advisory, and practitioner-led curriculum.",
    summary:
      "Sustainable infrastructure ecosystems require skilled public and private institutions. Leveraging our extensive executive teaching background, we deliver bespoke, practitioner-level training that builds enduring execution capability.",
    icon: "GraduationCap",
    whatWeDo: [
      "Executive masterclasses in Project Finance, Non-Recourse Debt Structuring, and PPP Contract Architecture",
      "Bespoke institutional training for Ministries of Finance, PPP units, regulatory commissions, and sovereign wealth funds",
      "Financial modelling bootcamps: building audit-compliant, scenario-ready project models from scratch",
      "Green, Social, and Sustainable (GSS) bond structuring workshops for capital market issuers and pension fund trustees",
      "Embedded advisory and secondment programmes: placing senior transaction specialists within client deal teams",
      "Thought leadership: proprietary sector briefs, white papers, market benchmarks, and investor roundtables",
    ],
    typicalClients: [
      "Government infrastructure delivery agencies and sub-national PPP units",
      "Commercial bank credit risk officers and infrastructure lending desks",
      "Pension fund trustees and sovereign investment corporation investment analysts",
      "Multilateral capacity-building programmes and donor technical assistance facilities",
    ],
    outcomes: [
      "Institutional deal teams capable of reviewing financial models and negotiating term sheets with confidence",
      "Faster internal public sector approvals for PPP business cases",
      "Upskilled domestic bank syndicates ready to underwrite local currency project finance",
      "Creation of enduring institutional memory and standard operating templates",
    ],
    relatedServices: [
      "ppp-government-advisory",
      "project-finance-transaction-advisory",
      "energy-sector-regulatory-advisory",
    ],
  },
];
