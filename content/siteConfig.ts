export interface SiteConfig {
  name: string;
  legalName: string;
  tagline: string;
  coreMessage: string;
  description: string;
  url: string;
  contact: {
    email: string;
    phone: string;
    address: string;
    city: string;
    country: string;
    hours: string;
  };
  socials: {
    linkedin: string;
    twitter: string;
  };
  legal: {
    camaDate: string;
    rcNumber: string;
    incorporationDetails: string;
    disclaimer: string;
  };
  navigation: Array<{
    title: string;
    href: string;
    children?: Array<{ title: string; href: string; description?: string }>;
  }>;
}

export const siteConfig: SiteConfig = {
  name: "Rhodium Impact",
  legalName: "Rhodium Impact Consulting Ltd",
  tagline: "Turning infrastructure needs into bankable projects.",
  coreMessage:
    "Emerging markets don't lack project ideas; they lack bankable projects. We close that gap, from idea to financial close and beyond.",
  description:
    "Rhodium Impact is a premier infrastructure advisory firm for emerging markets, with deep roots in Africa. We operate at the intersection of project sponsors, governments, DFIs, and institutional capital to structure and close bankable transactions.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://rhodiumimpact.com",
  contact: {
    email: "info@rhodiuminfra.co.uk",
    phone: "+234 803 618 6231",
    address: "33 Kano Street, by Federal Government Guest House, Area 1, Garki, Abuja, Nigeria",
    city: "Abuja",
    country: "Nigeria",
    hours: "Monday – Friday: 08:30 – 17:30 WAT",
  },
  socials: {
    linkedin: "https://www.linkedin.com/company/rhodium-impact",
    twitter: "https://x.com/rhodiumimpact",
  },
  legal: {
    camaDate: "27 November 2024",
    rcNumber: "RC 8102994",
    incorporationDetails:
      "A private company limited by shares, incorporated in the Federal Republic of Nigeria under the Companies and Allied Matters Act (RC 8102994).",
    disclaimer:
      "Rhodium Impact provides advisory services only and does not provide investment or legal advice unless expressly agreed in writing.",
  },
  navigation: [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    {
      title: "Services",
      href: "/services",
      children: [
        {
          title: "Capital Advisory & Structuring",
          href: "/services/capital-advisory-financial-structuring",
          description: "Debt, equity, blended finance, and local currency solutions.",
        },
        {
          title: "Project Finance & Transaction",
          href: "/services/project-finance-transaction-advisory",
          description: "Bankable financial models, term sheet negotiations, and closing checklists.",
        },
        {
          title: "Project Development & Feasibility",
          href: "/services/project-development-feasibility",
          description: "Taking early concepts to investment-ready, derisked assets.",
        },
        {
          title: "PPP & Government Advisory",
          href: "/services/ppp-government-advisory",
          description: "National & sub-national procurement, concessions, and fiscal risk.",
        },
        {
          title: "Energy Sector & Regulatory",
          href: "/services/energy-sector-regulatory-advisory",
          description: "Power market reform, tariff design, PPAs, and mini-grid frameworks.",
        },
        {
          title: "Risk Management & Due Diligence",
          href: "/services/risk-management-due-diligence",
          description: "Pricing and mitigating FX, offtaker, regulatory, and credit risks.",
        },
        {
          title: "ESG, Climate & Sustainability",
          href: "/services/esg-climate-sustainability",
          description: "IFC Performance Standards, Equator Principles, and green disclosures.",
        },
        {
          title: "Capacity Building & Training",
          href: "/services/capacity-building-training",
          description: "Executive masterclasses and embedded advisory for public & private teams.",
        },
      ],
    },
    { title: "Sectors", href: "/sectors" },
    { title: "Team", href: "/team" },
    { title: "Projects", href: "/projects" },
    { title: "Insights", href: "/blog" },
    { title: "Contact", href: "/contact" },
  ],
};
