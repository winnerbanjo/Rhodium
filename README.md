# Rhodium Impact Consulting Ltd — Web Platform

Corporate web platform for **Rhodium Impact Consulting Ltd**, an infrastructure transaction advisory firm focused on emerging markets (roots in Africa), registered in Nigeria under the Companies and Allied Matters Act (CAMA 2020).

> **Core Positioning**: *"Emerging markets don't lack project ideas; they lack bankable projects. We close that gap, from idea to financial close and beyond."*

---

## 1. Brand Name Notice & Clarification
- **Legal Entity**: **Rhodium Impact Consulting Ltd** (CAMA 2020, Memorandum dated 27 November 2024).
- **Short Brand**: **Rhodium Impact** is utilized consistently across the digital identity, navigation, and marketing copy.
- **Source Copy Note**: In some early brief drafts, the name *"Rhodium Impact Capital"* was referenced. In accordance with legal registration under CAMA 2020, *"Rhodium Impact Consulting Ltd"* is the binding legal designation and has been strictly reflected in all statutory disclosures, terms, and footers.

---

## 2. Tech Stack
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS with semantic CSS variables
- **UI & Icons**: Lucide React
- **Animations**: Framer Motion with `prefers-reduced-motion` detection
- **Form Management**: React Hook Form + Zod schema validation
- **Deployment**: Vercel ready

---

## 3. Directory Layout
```
├── app/
│   ├── layout.tsx                # Root layout with fonts, ThemeProvider, Header, Footer
│   ├── page.tsx                  # Home page (all 11 sections)
│   ├── globals.css               # CSS variables, dark mode overrides
│   ├── about/page.tsx            # About page (Mission, Vision, Values, CAMA Card)
│   ├── services/
│   │   ├── page.tsx              # Overview of 8 advisory practices
│   │   └── [slug]/page.tsx       # Detail pages for all 8 core practices
│   ├── sectors/page.tsx          # Sectors overview & bankability analysis
│   ├── team/page.tsx             # Senior leadership + Expert Network
│   ├── projects/
│   │   ├── page.tsx              # Filterable case study grid + Track Record metrics
│   │   └── [slug]/page.tsx       # Detailed case study template
│   ├── blog/
│   │   ├── page.tsx              # Insights listing with search & category filters
│   │   └── [slug]/page.tsx       # Article page with TOC & reading time
│   ├── book/page.tsx             # 3-step consultation booking flow
│   ├── contact/page.tsx          # Enquiry form + FAQ accordion + office details
│   ├── privacy/page.tsx          # NDPR & CAMA compliant Privacy Policy
│   ├── terms/page.tsx            # Terms of Advisory & Disclaimers
│   ├── sitemap.ts                # Dynamic XML sitemap
│   ├── robots.ts                 # SEO crawl rules
│   ├── not-found.tsx             # Branded 404 page
│   └── api/
│       ├── book/route.ts         # Booking API handler (rate limited, validated)
│       ├── contact/route.ts      # Contact enquiry API handler
│       └── newsletter/route.ts   # Newsletter subscription handler
├── components/
│   ├── brand/Logo.tsx            # Swappable Wordmark + Monogram Mark
│   ├── layout/                   # Header, Footer, MobileNav, Breadcrumb, Floating CTA
│   ├── home/                     # Hero, The Gap, Ecosystem, Stepper, Values, etc.
│   ├── ui/                       # Button, Card, Modal, Accordion, Counter, Badge
│   └── forms/                    # BookingForm, ContactForm, ProposalModal, NewsletterForm
├── content/                      # Central TypeScript content repository
│   ├── siteConfig.ts             # Contact details, metadata, social handles, placeholders
│   ├── services.ts               # Complete copy for 8 advisory services
│   ├── sectors.ts                # Sector briefs, bankability challenges, solutions
│   ├── team.ts                   # Senior team members & network roster
│   ├── projects.ts               # Case studies & track record metrics
│   ├── blog.ts                   # Complete technical research articles
│   ├── values.ts                 # 5 corporate values & 7 differentiators
│   └── faqs.ts                   # FAQs for advisory clients
├── lib/
│   ├── utils.ts                  # cn helper and date formatting
│   ├── email.ts                  # Resend/Nodemailer notification abstraction
│   └── rateLimit.ts              # In-memory sliding-window rate limiter
├── PLACEHOLDERS.md               # Ledger of all unverified client placeholders
└── .env.example                  # Environment variable reference
```

---

## 4. Setup, Run & Build

### Prerequisites
- Node.js 18.18+ or 20+ (tested on Node v22)
- npm 9+ or pnpm / yarn

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd "consulting website"

# Install dependencies
npm install
```

### Local Development
```bash
# Start the local development server on http://localhost:3000
npm run dev
```

### Production Build
```bash
# Verify TypeScript types and generate production output
npm run build

# Start production server
npm start
```

---

## 5. How to Edit Content, Colours & Logo

### 1. Editing Copy & Text
All copy is centralized in the `/content` folder. You do **not** need to touch React components to edit text:
- **General contact details, address, RC number**: [`content/siteConfig.ts`](file:///Users/oyekunle/Downloads/consulting%20website/content/siteConfig.ts)
- **Service descriptions & outcomes**: [`content/services.ts`](file:///Users/oyekunle/Downloads/consulting%20website/content/services.ts)
- **Sectors & bankability challenges**: [`content/sectors.ts`](file:///Users/oyekunle/Downloads/consulting%20website/content/sectors.ts)
- **Team members & biographies**: [`content/team.ts`](file:///Users/oyekunle/Downloads/consulting%20website/content/team.ts)
- **Projects & track record metrics**: [`content/projects.ts`](file:///Users/oyekunle/Downloads/consulting%20website/content/projects.ts)
- **Articles & research insights**: [`content/blog.ts`](file:///Users/oyekunle/Downloads/consulting%20website/content/blog.ts)
- **FAQs**: [`content/faqs.ts`](file:///Users/oyekunle/Downloads/consulting%20website/content/faqs.ts)

### 2. Modifying Brand Colours
The colour palette is driven entirely by CSS variables in [`app/globals.css`](file:///Users/oyekunle/Downloads/consulting%20website/app/globals.css) and mirrored in [`tailwind.config.ts`](file:///Users/oyekunle/Downloads/consulting%20website/tailwind.config.ts):
- `--primary`: Deep Navy `#0B1F3A`
- `--secondary`: Rhodium Light `#E8ECF1`
- `--accent`: Refined Teal-Green `#0F766E`
- `--highlight`: Refined Brass Gold `#B08D57`
- `--background`: Off-White `#F7F8FA`

### 3. Swapping the Logo
The logo is encapsulated in a single component: [`components/brand/Logo.tsx`](file:///Users/oyekunle/Downloads/consulting%20website/components/brand/Logo.tsx). If an external vector SVG or image asset is provided, simply replace the SVG markup inside this component.

---

## 6. How to Add a Database Later (Optional)
The platform is currently **admin-free and serverless-first**: all form submissions (Consultations, RFPs, Contact Enquiries, Newsletter Signups) are validated and immediately routed to email via [`lib/email.ts`](file:///Users/oyekunle/Downloads/consulting%20website/lib/email.ts).

If you wish to store submissions in a persistent database in the future:
1. **Supabase / PostgreSQL**:
   - Install `@supabase/supabase-js` or `prisma`.
   - In [`app/api/contact/route.ts`](file:///Users/oyekunle/Downloads/consulting%20website/app/api/contact/route.ts) and [`app/api/book/route.ts`](file:///Users/oyekunle/Downloads/consulting%20website/app/api/book/route.ts), insert records into your `enquiries` and `bookings` tables prior to dispatching email notifications.
2. **Headless CMS**:
   - The files in `/content` map 1:1 to CMS content types (e.g., Sanity, Strapi, or Contentful).

---

## 7. Deployment to Vercel
1. Push your repository to GitHub / GitLab.
2. Import the repository in [Vercel](https://vercel.com).
3. Add the environment variables from `.env.example`:
   - `NEXT_PUBLIC_SITE_URL`: `https://rhodiumimpact.com`
   - `NOTIFICATION_EMAIL`: `info@rhodiumimpact.com`
   - `RESEND_API_KEY`: *(Your Resend API key)*
4. Click **Deploy**.
