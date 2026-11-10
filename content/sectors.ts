export interface SectorItem {
  id: string;
  name: string;
  tagline: string;
  overview: string;
  bankabilityChallenges: string[];
  howWeHelp: {
    investorConnectivity: string;
    riskModelling: string;
    capitalMixStrategy: string;
  };
  keyFocusAreas: string[];
  icon: string;
}

export const sectorsData: SectorItem[] = [
  {
    id: "free-trade-zones",
    name: "Free Trade Zones & Special Economic Zones",
    tagline: "Industrial clustering, logistics hubs, and export-oriented corridors.",
    overview:
      "Special Economic Zones (SEZs) and Free Trade Zones (FTZs) represent the industrial engine of emerging economies. However, multi-tenant demand uncertainty, heavy upfront trunk infrastructure costs, and complex regulatory concessions often stall private investment.",
    bankabilityChallenges: [
      "Heavy upfront capex for shared trunk infrastructure (roads, captive power, water, effluent treatment) before tenant occupancy ramps up",
      "Off-take volume risk: reliance on speculative future industrial tenants with uncertain tenant absorption curves",
      "Regulatory instability regarding customs waivers, tax incentives, and foreign exchange repatriation guarantees",
    ],
    howWeHelp: {
      investorConnectivity:
        "We connect master developers with institutional infrastructure funds, DFIs, and export credit agencies looking to anchor strategic industrial and manufacturing nodes.",
      riskModelling:
        "We build phased financial models that separate core common utility infrastructure from tenant-specific sub-concessions, derisking early tranches through anchor-tenant commitments.",
      capitalMixStrategy:
        "We structure blended finance packages combining sovereign or DFI concessional grant facilities for public utility infrastructure with commercial debt for revenue-generating industrial warehouses.",
    },
    keyFocusAreas: [
      "Master concession agreement structuring",
      "Captive utility (power, water, gas) off-take frameworks",
      "Anchor tenant bankability agreements",
      "Sub-sovereign tax and customs stabilization covenants",
    ],
    icon: "Factory",
  },
  {
    id: "power-and-utilities",
    name: "Power & Utilities (Solar, Wind & Grids)",
    tagline: "Utility-scale generation, transmission, decentralised mini-grids, and water utilities.",
    overview:
      "Emerging markets require tens of gigawatts of clean, reliable energy to power industrialisation. While capital is eager for renewable assets, non-cost-reflective tariffs, utility off-taker credit risk, and foreign currency mismatches stall transactions.",
    bankabilityChallenges: [
      "Severe creditworthiness gaps in sovereign and state-owned distribution utilities, threatening Power Purchase Agreement (PPA) enforceability",
      "Severe currency mismatch when debt is denominated in USD or EUR while utility tariffs are paid in depreciating domestic currency",
      "Grid curtailment and evacuation bottlenecks delaying commercial operation dates (COD)",
    ],
    howWeHelp: {
      investorConnectivity:
        "We broker transaction relationships with leading renewable energy DFIs, climate funds, and local commercial banks syndicating green energy facilities.",
      riskModelling:
        "We construct probabilistic dispatch and hydrology/irradiation models linked to dynamic tariff sensitivity engines and FX pass-through stress testing.",
      capitalMixStrategy:
        "We design credit-enhanced capital structures utilizing Partial Risk Guarantees (PRGs), local currency bond mobilisations, and liquidity facilities to bridge off-taker arrears.",
    },
    keyFocusAreas: [
      "Utility-scale solar PV, wind, and hybrid battery storage (BESS)",
      "PPA and Put-Call Option Agreement (PCOA) negotiation",
      "Decentralised commercial & industrial (C&I) captive solar",
      "Interconnected mini-grid concession frameworks",
    ],
    icon: "Zap",
  },
  {
    id: "healthcare",
    name: "Healthcare Infrastructure",
    tagline: "Tertiary medical centres, diagnostic hubs, and regional pharmaceutical production.",
    overview:
      "Modern healthcare infrastructure is vital for social resilience and economic productivity. Private capital in emerging market healthcare is frequently constrained by unpredictable patient out-of-pocket payment models and high medical equipment import costs.",
    bankabilityChallenges: [
      "Low penetration of universal health insurance, leaving hospital revenues exposed to volatile patient out-of-pocket payments",
      "High foreign exchange exposure on specialised diagnostic machinery and ongoing consumables versus domestic tariff fees",
      "Clinical talent retention and high initial operational ramp-up periods before bed occupancy stabilizes",
    ],
    howWeHelp: {
      investorConnectivity:
        "We introduce healthcare sponsors to dedicated impact healthcare funds, multilateral social development windows, and medical equipment leasing financiers.",
      riskModelling:
        "We model tiered tariff architectures that blend private paying patients, corporate HMO contracts, and state healthcare subsidy schemes to ensure steady cash flow.",
      capitalMixStrategy:
        "We assemble structures that separate hospital real estate (OpCo/PropCo models) and leverage concessional patient capital for facility development alongside commercial equipment leasing.",
    },
    keyFocusAreas: [
      "Specialist tertiary centres and oncology institutes",
      "Diagnostic and imaging hub networks (hub-and-spoke)",
      "Public-Private Partnerships for district hospital management",
      "Local active pharmaceutical ingredient (API) manufacturing",
    ],
    icon: "HeartPulse",
  },
  {
    id: "social-infrastructure",
    name: "Social Infrastructure & Municipal Services",
    tagline: "Affordable housing, municipal water, sanitation, and urban transit.",
    overview:
      "Rapid urbanisation across emerging markets puts intense pressure on municipal services. Closing this gap requires pioneering PPP frameworks that deliver essential public services while ensuring commercial viability for private operators.",
    bankabilityChallenges: [
      "Public resistance to cost-recovery tariffs for basic social goods (clean water, public transit, sanitation)",
      "Sub-national and municipal counterparties lacking sovereign balance sheet backing or formal credit ratings",
      "Long asset lifecycles (25–30 years) vulnerable to political cycle disruptions and municipal leadership changes",
    ],
    howWeHelp: {
      investorConnectivity:
        "We syndicate deals with sovereign wealth funds, municipal development banks, and institutional pension funds seeking long-dated inflation-hedged yields.",
      riskModelling:
        "We evaluate shadow tolls, availability payments, and minimum revenue guarantees (MRGs) against sub-national fiscal capacity.",
      capitalMixStrategy:
        "We structure multi-source capital stacks deploying municipal revenue bonds, sub-sovereign guarantees, and output-based aid (OBA) donor grants.",
    },
    keyFocusAreas: [
      "Bulk water supply and municipal wastewater treatment concessions",
      "Bus Rapid Transit (BRT) and light rail urban mobility PPPs",
      "Large-scale affordable housing development programmes",
      "Municipal solid waste management and waste-to-energy assets",
    ],
    icon: "Building",
  },
  {
    id: "education-infrastructure",
    name: "Education Infrastructure",
    tagline: "Modern university campuses, technical vocational centres, and primary/secondary school estates.",
    overview:
      "Youth demographics in Africa and emerging regions demand massive expansion in educational capacity. Traditional budgetary allocations are insufficient, requiring private capital mobilization through structured lease-back and education PPPs.",
    bankabilityChallenges: [
      "Seasonal and volatile tuition fee cash flows vulnerable to macroeconomic downturns and household income shocks",
      "Limited collateral value of specialised educational buildings under traditional commercial lending terms",
      "Difficulty in enforcing tuition price adjustments against rapid local inflation",
    ],
    howWeHelp: {
      investorConnectivity:
        "We connect educational institutions with specialist social infrastructure funds, philanthropic endowments, and DFI education windows.",
      riskModelling:
        "We design student enrollment and tuition elasticity models with built-in macro-hedging and fee collection reserve mechanisms.",
      capitalMixStrategy:
        "We structure Design-Build-Finance-Operate-Maintain (DBFOM) availability concessions and real estate lease-backs that decouple education delivery from physical asset ownership.",
    },
    keyFocusAreas: [
      "Public university campus modernization & student accommodation PPPs",
      "Vocational training centres linked to industrial free trade zones",
      "K-12 school network expansions through lease-and-leaseback models",
      "Digital learning infrastructure and campus broadband networks",
    ],
    icon: "GraduationCap",
  },
  {
    id: "energy-transition",
    name: "Energy Transition & Clean Cooking",
    tagline: "Decarbonising industry, carbon finance, clean cooking, and methane abatement.",
    overview:
      "The global energy transition in emerging markets must balance rapid industrialisation with climate decarbonisation. We structure pioneering carbon-credit-backed financing and distributed clean energy systems that achieve both goals.",
    bankabilityChallenges: [
      "Integrity, verification, and price volatility in voluntary and compliance carbon credit markets (Article 6)",
      "Logistical distribution and payment collection challenges for clean cooking and distributed appliances in peri-urban areas",
      "High upfront appliance costs for consumers in low-income demographics",
    ],
    howWeHelp: {
      investorConnectivity:
        "We link project developers directly to international compliance and voluntary carbon aggregators, Article 6 bilateral buyers, and climate-tech debt funds.",
      riskModelling:
        "We construct conservative carbon credit yield curves, buffer pool stress models, and digital MRV (Monitoring, Reporting, and Verification) verification pipelines.",
      capitalMixStrategy:
        "We structure upfront carbon-prepayment debt facilities, Results-Based Financing (RBF) tranches, and digital pay-as-you-go (PAYG) receivable securitisations.",
    },
    keyFocusAreas: [
      "Clean cooking distribution programmes (electric, bio-ethanol, improved biomass)",
      "Industrial energy efficiency and captive waste-heat recovery",
      "Article 6 international carbon sovereign transfers",
      "Methane capture and flared gas commercialisation",
    ],
    icon: "SunMedium",
  },
];
