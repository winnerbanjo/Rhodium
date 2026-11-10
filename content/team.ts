export interface TeamMember {
  id: string;
  name: string;
  role: string;
  isPrimary?: boolean;
  bio: string;
  linkedin: string;
  email?: string;
  image?: string;
  imagePlaceholder?: string;
}

export interface NetworkExpertise {
  discipline: string;
  description: string;
  keyDeliverables: string[];
}

export const coreTeam: TeamMember[] = [
  {
    id: "femi-oladeinde",
    name: "Femi Oladeinde, Ph.D",
    role: "Country Director (Nigeria) & Lead Transaction Adviser",
    isPrimary: true,
    bio: "Country Director (Nigeria) and Lead Transaction Adviser for Rhodium Impact. Femi is an infrastructure advisory and environmental planning specialist with over 19 years of multidisciplinary experience across banking, finance, investment advisory, business modelling, corporate risk asset management ($7M+), and liability generation ($10.5M+). He has played a pivotal role in agriculture and SME funding programmes across Nigeria, structuring initiatives that enabled over 10,000 farmers, agribusiness entrepreneurs, and SMEs to access over $5M in capital and equipment procurement. Femi holds a Ph.D. in Environmental Resource Management from Nasarawa State University (2021), an M.Sc. in Environmental Resource Planning from the University of Jos (2007), and a B.Sc. (Second Class Upper) in Geography (2003).",
    linkedin: "https://www.linkedin.com/company/rhodium-impact",
    email: "femi.oladeinde@rhodiuminfra.co.uk",
    imagePlaceholder: "/images/team/femi-oladeinde.jpg",
  },
  {
    id: "olusegun-olayinka",
    name: "Olusegun Olayinka, ACA",
    role: "Partner — Institutional Banking & Public Sector Advisory",
    bio: "Senior partner specializing in public sector financial advisory, institutional banking, and sub-national programme execution. An Associate Chartered Accountant (ACA) with an MBA and B.Sc. in Geography from the University of Ilorin. Olusegun’s executive career spans extensive leadership across United Bank for Africa (UBA) and Wema Bank, including Head of Fund Transfer Desk (UBA Asokoro), Head of Operation (UBA Asokoro), Team Lead for Military and Paramilitary Institutional Banking (UBA), Team Lead for Military and Public Sector Marketing (Wema Bank), Head of Retail and Commercial Banking (Wema Bank Wuse 2, Abuja), Branch Manager (Wema Bank Lokoja), and Partner at DiamondBells Consulting. Notable execution highlights include securing and delivering the SME training consultancy for over 1,500 Osun State indigenes under the Federal Government / CBN AGSMEIS programme (attracting over ₦5B in funding to the state), advising the Niger State Livestock Productivity and Resilience Support Project monitoring unit, and managing data and monthly pension disbursements for over 10,000 military pensioners (reducing pension complaints by 95%).",
    linkedin: "https://www.linkedin.com/company/rhodium-impact",
    email: "info@rhodiuminfra.co.uk",
    image: "/images/team/olusegun-olayinka.jpg",
  },
  {
    id: "bryan-fashola",
    name: "Bryan Fashola",
    role: "Director & Head of Global Advisory",
    bio: "Director and Head of Global Advisory for Rhodium Impact Capital, leading cross-border sustainable finance and infrastructure transaction advisory across African and European markets. Bryan structures bespoke capital solutions uniting private debt and equity with public and government-backed funding across renewable energy, infrastructure, and PPP projects. With nearly two decades across African and European financial markets, Bryan began in Nigeria with Ecobank before spending over a decade in London in corporate, structured, and infrastructure finance with Lloyds Banking Group and RBS International (NatWest Group), where he managed a £1bn infrastructure fund finance portfolio. He has structured and executed in excess of £2.5 billion of financing facilities across Africa and Europe. Bryan lectures on green finance and ethical investing, holds an MSc in International Finance from Leeds University Business School, a First-Class BSc (Hons) in Accounting from Benson Idahosa University, and professional qualifications from the Chartered Banker Institute.",
    linkedin: "https://www.linkedin.com/company/rhodium-impact",
    email: "info@rhodiuminfra.co.uk",
    image: "/images/team/bryan-fashola.jpg",
  },
];

export const expertNetwork: NetworkExpertise[] = [
  {
    discipline: "Chartered Financial Modellers",
    description:
      "Vetted modellers building FAST-compliant, dynamic project finance and PPP financial models capable of surviving Tier-1 international debt syndicate audits.",
    keyDeliverables: ["FAST-standard financial models", "Sensitivity & scenario engines", "Debt sizing & DSCR optimization"],
  },
  {
    discipline: "Infrastructure Legal Counsel",
    description:
      "Independent project finance and concession lawyers versed in common law and civil law emerging market jurisdictions, drafting bankable risk-balanced contracts.",
    keyDeliverables: ["PPA & Concession agreements", "EPC & O&M contracts", "Intercreditor & security packages"],
  },
  {
    discipline: "Technical & Engineering Specialists",
    description:
      "Independent engineers and technical advisers providing rigorous Capex/Opex benchmarks, technology reviews, and construction schedule assessments.",
    keyDeliverables: ["Lender's technical due diligence", "Capex/Opex benchmarking", "Grid interconnection feasibility"],
  },
  {
    discipline: "Environmental & Social (E&S) Specialists",
    description:
      "Accredited practitioners coordinating ESIAs, resettlement action plans, and environmental action plans strictly aligned with IFC Performance Standards and Equator Principles IV.",
    keyDeliverables: ["IFC Performance Standards audits", "ESAP formulation", "Stakeholder Engagement Plans (SEP)"],
  },
  {
    discipline: "Tariff & Regulatory Economists",
    description:
      "Specialists in multi-year tariff methodologies (MYTO), demand elasticity studies, and utility cost-of-service analysis across reforming power and water sectors.",
    keyDeliverables: ["Cost-of-service studies", "Affordability & willingness-to-pay surveys", "Regulatory licensing frameworks"],
  },
];
