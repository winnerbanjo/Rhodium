export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  category: "Project Finance" | "PPP" | "Energy & Regulation" | "ESG & Climate" | "Local Currency Capital";
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: string;
  excerpt: string;
  tableOfContents: Array<{ id: string; title: string }>;
  content: Array<{
    id: string;
    heading: string;
    paragraphs: string[];
    callout?: string;
  }>;
}

export const blogCategories = [
  "All",
  "Project Finance",
  "PPP",
  "Energy & Regulation",
  "ESG & Climate",
  "Local Currency Capital",
] as const;

export const blogPosts: BlogPost[] = [
  {
    slug: "why-most-infrastructure-projects-in-emerging-markets-stall-before-financial-close",
    title: "Why Most Infrastructure Projects in Emerging Markets Stall Before Financial Close",
    subtitle: "The structural gap between promising project concepts and bankable transaction reality.",
    category: "Project Finance",
    author: {
      name: "Femi Oladeinde",
      role: "Managing Partner",
      avatar: "/images/team/femi-oladeinde.jpg",
    },
    publishedAt: "2024-11-15",
    readTime: "7 min read",
    excerpt:
      "Emerging economies do not suffer from an absence of infrastructure ambition. Billions of dollars in project proposals sit on the desks of ministries and developers. Yet fewer than 10% ever reach financial close. Here is the credit-committee autopsy of why deals stall—and how to fix them.",
    tableOfContents: [
      { id: "the-bankability-paradox", title: "1. The Bankability Paradox" },
      { id: "thin-feasibility", title: "2. The Mirage of Thin Feasibility Studies" },
      { id: "unbalanced-risk", title: "3. Asymmetric Risk Allocation That Lenders Reject" },
      { id: "contractual-incoherence", title: "4. Contracts That Collapse Under Cross-Default Scrutiny" },
      { id: "closing-the-gap", title: "5. The Pathway to Financial Close" },
    ],
    content: [
      {
        id: "the-bankability-paradox",
        heading: "1. The Bankability Paradox",
        paragraphs: [
          "Every international development summit repeats the same familiar narrative: emerging markets require an estimated $1.5 trillion to $2.0 trillion in annual infrastructure investment to sustain demographic growth and economic modernization. At the same time, global institutional funds, DFIs, and sovereign wealth investors frequently state they have abundant dry powder awaiting viable deployments.",
          "Yet on the ground in African capitals, pipeline after pipeline stalls. The disconnect is not capital scarcity; it is bankability failure. A project is bankable when its commercial, legal, technical, and regulatory architecture provides senior debt providers with unimpeachable confidence that debt service will be honoured across economic cycles, foreign exchange disruptions, and political transitions.",
        ],
        callout:
          "\"Bankability is not an aesthetic polish applied at the end of a deal. It is the fundamental engineering of who bears what risk, backed by legal instruments that survive sovereign distress.\"",
      },
      {
        id: "thin-feasibility",
        heading: "2. The Mirage of Thin Feasibility Studies",
        paragraphs: [
          "The first point of deal failure is superficial project preparation. Many project sponsors spend hundreds of thousands of dollars on conceptual feasibility reports that describe a desirable outcome rather than an investable project.",
          "Lender credit committees do not accept optimistic top-down demand projections. In transport, power, or industrial water, they require empirical demand assessments, granular willingness-to-pay surveys, and historical geotechnical and hydrologic telemetry. When sponsors present broad macroeconomic estimates instead of audited demand models, international lenders immediately discount cash flow projections by 40% or walk away entirely.",
        ],
      },
      {
        id: "unbalanced-risk",
        heading: "3. Asymmetric Risk Allocation That Lenders Reject",
        paragraphs: [
          "The core golden rule of project finance is elementary: risk must be allocated to the party best positioned to manage and price it. Yet many emerging market concession negotiations feature public authorities attempting to push macroeconomic risks (such as foreign exchange devaluation or macro inflation) onto private concessionaires, while private sponsors attempt to extract open-ended sovereign debt guarantees without performance obligations.",
          "When risk matrices violate international norms—such as assigning utility non-payment risk to private solar developers without an irrevocable letter of credit or liquidity backstop—the transaction dies in the credit committees of senior lenders.",
        ],
      },
      {
        id: "contractual-incoherence",
        heading: "4. Contracts That Collapse Under Cross-Default Scrutiny",
        paragraphs: [
          "A transaction is only as strong as the alignment between its project agreements: the Concession Agreement, EPC Contract, O&M Contract, Power Purchase Agreement, Fuel Supply Agreement, and Financing Documents. In fragmented project preparation, these documents are often negotiated in silos by different legal teams.",
          "The moment an international lender conducts cross-default due diligence, severe gaps appear: liquidated damages under the EPC contract fail to cover senior debt service during delay; force majeure definitions diverge between off-taker and lender; or termination compensation fails to repay senior lenders if the government breaches its concession covenants.",
        ],
        callout:
          "\"If the EPC contractor's liability cap is lower than your construction debt service obligation during delay, you do not have a closed contract—you have an unpriced debt default.\"",
      },
      {
        id: "closing-the-gap",
        heading: "5. The Pathway to Financial Close",
        paragraphs: [
          "To move from concept to financial close, sponsors and procuring authorities must adopt a credit-committee discipline from day zero. This means engaging project finance transaction advisers who understand debt structuring, building dynamic financial models compliant with international standards, and embedding credit enhancement tools (such as Partial Risk Guarantees and local currency syndications) early in the procurement lifecycle.",
          "At Rhodium Impact, this is precisely our core mandate: taking complex infrastructure transactions across the bridge from conceptual promise to binding financial close and commercial operations.",
        ],
      },
    ],
  },
  {
    slug: "local-currency-vs-foreign-currency-debt-matching-revenues-to-funding",
    title: "Local Currency vs Foreign Currency Debt: Matching Revenues to Funding",
    subtitle: "Solving the deadly foreign exchange mismatch in emerging market infrastructure assets.",
    category: "Local Currency Capital",
    author: {
      name: "Femi Oladeinde",
      role: "Managing Partner",
      avatar: "/images/team/femi-oladeinde.jpg",
    },
    publishedAt: "2024-11-20",
    readTime: "6 min read",
    excerpt:
      "When an infrastructure project earns revenues in Nigerian Naira, Ghanaian Cedi, or Kenyan Shillings, servicing USD-denominated debt is an existential gamble. We examine how local currency bonds, blended finance, and credit guarantees unlock domestic pension pools.",
    tableOfContents: [
      { id: "the-currency-trap", title: "1. The Currency Mismatch Trap" },
      { id: "why-usd-debt-persists", title: "2. Why Sponsors Default to Hard Currency" },
      { id: "domestic-capital-pools", title: "3. Unlocking Domestic Institutional Liquidity" },
      { id: "credit-enhancement-tools", title: "4. The Role of Credit Wraps and Guarantees" },
      { id: "structuring-blueprint", title: "5. A Practical Structuring Blueprint" },
    ],
    content: [
      {
        id: "the-currency-trap",
        heading: "1. The Currency Mismatch Trap",
        paragraphs: [
          "The history of emerging market infrastructure defaults is predominantly a history of currency mismatch. When a toll road collects fees in local currency or an electricity utility bills domestic consumers in Naira or Cedis, every 30% currency devaluation translates directly into a 30% increase in the debt service burden on hard-currency loans.",
          "Even the most operationally efficient project will face technical insolvency if its debt service coverage ratio (DSCR) is eroded by macroeconomic foreign exchange realignments beyond its operational control.",
        ],
        callout:
          "\"You cannot hedge a 20-year emerging market currency mismatch through short-term commercial bank FX swaps. The only enduring structural solution is denominating long-term liabilities in the currency of your revenue.\"",
      },
      {
        id: "why-usd-debt-persists",
        heading: "2. Why Sponsors Default to Hard Currency",
        paragraphs: [
          "If local currency debt is structurally superior, why do sponsors continue to borrow in US Dollars or Euros? The answer lies in tenure and interest rate differentials. Domestic commercial banks in many emerging economies rarely lend beyond 5 to 7 years, whereas infrastructure assets require 15 to 20-year amortisation to maintain affordable consumer tariffs.",
          "Furthermore, nominal domestic commercial interest rates (often 18% to 26%) appear prohibitively expensive compared to headline 6% to 8% USD DFI loans, obscuring the devastating long-term impact of compounding currency devaluation.",
        ],
      },
      {
        id: "domestic-capital-pools",
        heading: "3. Unlocking Domestic Institutional Liquidity",
        paragraphs: [
          "Across Africa, domestic pension funds and insurance asset managers hold tens of billions of dollars in liquidity, historically parked almost exclusively in short-dated sovereign treasury bills. In Nigeria alone, pension fund assets exceed NGN 20 trillion.",
          "Pension fund trustees manage long-dated liabilities (30-year retirement obligations) and are hungry for investment-grade, inflation-protected, long-tenor infrastructure paper. The challenge has never been lack of liquidity; it has been the absence of bankable, rated instruments.",
        ],
      },
      {
        id: "credit-enhancement-tools",
        heading: "4. The Role of Credit Wraps and Guarantees",
        paragraphs: [
          "Bridging the divide between domestic pension fund risk appetites and greenfield infrastructure assets requires credit enhancement. Specialized guarantee facilities (such as InfraCredit in Nigeria, GuarantCo, and multilateral Partial Credit Guarantees) provide irrevocable first-loss and credit-wrap structures.",
          "By wrapping an infrastructure bond, these facilities elevate the local debt instrument to an AAA national-scale rating. This unlocks pension fund investment mandates, stretching domestic debt tenors from 7 years out to 15 or 20 years.",
        ],
      },
      {
        id: "structuring-blueprint",
        heading: "5. A Practical Structuring Blueprint",
        paragraphs: [
          "A modern emerging market capital stack should deploy a hybrid dual-tranche approach: hard-currency DFI concessional debt for imported capital goods (solar panels, turbines, high-tech healthcare equipment) matched with currency indexing covenants, combined with a local-currency infrastructure bond for civil works and ongoing local operational expenditure.",
          "This hybrid structuring insulates the project against macroeconomic shockwaves while stimulating domestic capital market depth.",
        ],
      },
    ],
  },
  {
    slug: "what-lenders-look-for-in-a-ppp-risk-allocation-matrix",
    title: "What Lenders Look for in a PPP Risk Allocation Matrix",
    subtitle: "A practical guide to drafting contracts that survive bank and DFI credit committee scrutiny.",
    category: "PPP",
    author: {
      name: "Femi Oladeinde",
      role: "Managing Partner",
      avatar: "/images/team/femi-oladeinde.jpg",
    },
    publishedAt: "2024-11-25",
    readTime: "8 min read",
    excerpt:
      "A PPP concession contract is fundamentally an instrument of risk distribution. Before an international lender commits senior debt to a government concession, they dissect every clause of the risk matrix. Here is exactly what credit committees look for.",
    tableOfContents: [
      { id: "anatomy-of-risk-matrix", title: "1. The Anatomy of a Bankable Risk Matrix" },
      { id: "political-regulatory-risk", title: "2. Political, Change in Law, and Expropriation" },
      { id: "offtaker-payment-risk", title: "3. Offtaker Credit & Termination Compensation" },
      { id: "force-majeure-insurance", title: "4. Force Majeure & Uninsurable Risks" },
      { id: "practical-checklist", title: "5. The Lender's Checklist for PPP Concessions" },
    ],
    content: [
      {
        id: "anatomy-of-risk-matrix",
        heading: "1. The Anatomy of a Bankable Risk Matrix",
        paragraphs: [
          "In any Public-Private Partnership (PPP), the risk allocation matrix is not a supplementary annex—it is the operational backbone of the commercial agreement. It defines which counterparty assumes financial, operational, and legal liability when unexpected events occur.",
          "Credit committees evaluate the matrix through a binary prism: if an adverse event occurs, will the concessionaire remain liquid and capable of servicing senior debt without default?",
        ],
        callout:
          "\"If the risk matrix contains ambiguities regarding termination compensation following government default, senior lenders will not issue a commitment letter, regardless of how attractive the equity IRR appears.\"",
      },
      {
        id: "political-regulatory-risk",
        heading: "2. Political, Change in Law, and Expropriation",
        paragraphs: [
          "Lenders recognize that private sponsors can manage construction and operational risks. However, private sponsors cannot manage sovereign political risks, discriminatory changes in statutory law, or tariff freezes imposed by executive fiat.",
          "A bankable contract must explicitly categorize discriminatory regulatory changes as 'Relief Events' or 'Compensation Events.' In the case of a compensation event, the procuring authority must hold the project company economically whole—adjusting tariffs, extending concession periods, or providing direct cash compensation.",
        ],
      },
      {
        id: "offtaker-payment-risk",
        heading: "3. Offtaker Credit & Termination Compensation",
        paragraphs: [
          "The single greatest hurdle in emerging market PPPs is the credit standing of sub-sovereign or state-owned offtakers. Lenders mandate clear credit waterfalls, escrow reserve accounts, and irrevocable letters of credit.",
          "Critically, in the event of early contract termination due to government or offtaker default, the termination compensation formula must explicitly guarantee payment of 100% of outstanding senior debt principal, accrued interest, and financing break costs prior to any equity distributions.",
        ],
      },
      {
        id: "force-majeure-insurance",
        heading: "4. Force Majeure & Uninsurable Risks",
        paragraphs: [
          "Force majeure clauses must distinguish between natural events (earthquakes, cyclones) and political events (civil war, strikes, blockades). While natural force majeure is mitigated through commercial insurance programmes, political force majeure is fundamentally a sovereign-absorbed risk.",
          "If a political event prevents asset operations for an extended duration (typically 180 continuous days), the project company or the lender must retain the contractual option to terminate the concession and trigger full senior debt recovery.",
        ],
      },
      {
        id: "practical-checklist",
        heading: "5. The Lender's Checklist for PPP Concessions",
        paragraphs: [
          "Before initiating formal procurement or finalising contract negotiations, public PPP units and private developers must cross-reference their draft concessions against key lender benchmarks: Direct Agreement step-in rights, clear dispute resolution in neutral international arbitration venues (e.g. LCIA or ICC), and explicit sovereign support frameworks.",
          "Aligning the concession contract with these principles during the Outline Business Case (OBC) stage saves months of bitter renegotiation when transaction advisers bring lenders to the table.",
        ],
      },
    ],
  },
];
