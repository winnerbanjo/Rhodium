export interface FAQItem {
  question: string;
  answer: string;
  category: "Engaging Us" | "Scope & Mandates" | "Sectors & Geography";
}

export const faqsData: FAQItem[] = [
  {
    category: "Engaging Us",
    question: "Can we hire Rhodium Impact for a single discrete piece of work?",
    answer:
      "Yes. While many of our mandates span the full project lifecycle from early preparation to financial close, we frequently engage on discrete, high-impact deliverables. These include building or auditing a bankable financial model, negotiating a complex PPA or concession term sheet, drafting an Outline or Full Business Case (OBC/FBC), conducting commercial due diligence for a prospective lender, or designing a local currency capital stack.",
  },
  {
    category: "Engaging Us",
    question: "At what stage of our project should we contact you?",
    answer:
      "We engage clients across all four stages of our delivery lifecycle: Prepare, Structure, Close, and Operate. However, reaching out early—during the pre-feasibility or early structuring phase—allows us to eliminate unbankable contract structures, design the optimal capital stack from day one, and save sponsors and governments millions in abortive development costs.",
  },
  {
    category: "Sectors & Geography",
    question: "Do you work outside Nigeria?",
    answer:
      "Yes. While Rhodium Impact Consulting Ltd is incorporated in Nigeria and deeply rooted in the African continent, our advisory mandates span emerging markets across Sub-Saharan Africa and other frontier regions. Our partners bring extensive experience advising across civil law and common law jurisdictions, working with international DFIs, multilateral institutions, and global private equity funds.",
  },
  {
    category: "Scope & Mandates",
    question: "What differentiates Rhodium Impact from large global accounting or consulting firms?",
    answer:
      "Three critical factors set us apart: First, we are senior-led—our partners directly model, draft, and negotiate transactions rather than delegating them to junior generalists. Second, we combine deep, boots-on-the-ground African institutional knowledge with international credit-committee standards (IFC Performance Standards, Equator Principles, FAST modelling standards). Third, we are transaction execution-focused: we measure success not by the length of advisory reports, but by assets that reach financial close and achieve commercial operations.",
  },
  {
    category: "Scope & Mandates",
    question: "How do you structure your advisory fees?",
    answer:
      "We design fee arrangements tailored to the risk and milestone profile of each mandate. Our fee structures typically combine a modest monthly retainer for ongoing transaction horsepower with success-based milestones tied to tangible execution deliverables (such as completion of bankable feasibility studies, launch of competitive tenders, lender term sheet signing, or financial close).",
  },
  {
    category: "Engaging Us",
    question: "How do we book a preliminary advisory consultation?",
    answer:
      "You can request an exploratory consultation directly through our online booking portal (/book) or by submitting an enquiry through our Contact page. Our senior partners review all submissions and will arrange an initial confidential briefing to understand your transaction requirements, project timeline, and bankability challenges.",
  },
];
