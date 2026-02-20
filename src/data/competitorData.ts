// Competitor data sourced from: public filings (Sprinklr NYSE:CXM 10-K/10-Q), company websites,
// G2 category data, and industry analyst coverage through 2025.
// Note: ARR for private companies (Market Logic, Klue) are analyst estimates.

export interface Competitor {
  id: string;
  name: string;
  tagline: string;
  arr: string;
  arrValue: number; // millions
  pricing: string;
  pricingModel: string;
  targetMarket: "SMB" | "Mid-Market" | "Enterprise" | "All";
  founded: number;
  funding: string;
  strengths: string[];
  weaknesses: string[];
  radarScores: {
    aiCapability: number;
    npsAnalytics: number;
    mediaMix: number;
    strategyDepth: number;
    pricingValue: number;
    userExperience: number;
    integrations: number;
    customerSuccess: number;
  };
  color: string;
}

export const competitors: Competitor[] = [
  {
    id: "inovient",
    name: "Inovient (Morpheus)",
    tagline: "AI marketing intelligence platform built by marketers, for marketers",
    arr: "Pre-revenue",
    arrValue: 5,
    pricing: "$299–$2,499/mo",
    pricingModel: "Seat + Usage Hybrid",
    targetMarket: "Mid-Market",
    founded: 2022,
    funding: "Seed",
    strengths: [
      "Only platform combining competitor sentiment benchmarking, media mix modeling, and strategy AI",
      "Competitor review intelligence from G2, Trustpilot, and app stores — enterprise capability at mid-market pricing",
      "40+ years practitioner domain expertise embedded in AI recommendations",
      "Accessible pricing where alternatives cost $20K–$500K+/year",
    ],
    weaknesses: [
      "Early-stage brand recognition against established players",
      "Limited enterprise integrations at launch (Salesforce, SAP on roadmap)",
      "Smaller training dataset vs. incumbents with years of proprietary data",
    ],
    radarScores: {
      aiCapability: 82,
      npsAnalytics: 85,
      mediaMix: 88,
      strategyDepth: 85,
      pricingValue: 85,
      userExperience: 83,
      integrations: 58,
      customerSuccess: 75,
    },
    color: "#6366f1",
  },
  {
    id: "market-logic",
    name: "Market Logic Software",
    tagline: "Enterprise market intelligence management platform for Fortune 500 insights teams",
    arr: "~$30M–$50M est.",
    arrValue: 40,
    pricing: "$150K–$500K+/yr",
    pricingModel: "Enterprise annual contract",
    targetMarket: "Enterprise",
    founded: 2011,
    funding: "Strategic investors",
    strengths: [
      "Purpose-built for large corporate insights and strategy teams",
      "AI-powered search over proprietary market research repositories (RAG over internal docs)",
      "Strong in CPG, pharma, and financial services verticals",
      "Aggregates external research feeds (news, industry reports, trends)",
    ],
    weaknesses: [
      "Knowledge management tool, not a strategy generator — requires rich internal research to be useful",
      "No media mix modeling, budget allocation, or competitor sentiment tracking",
      "Enterprise-only ($150K+ contracts), completely inaccessible to mid-market",
      "Requires dedicated insights team to populate and maintain",
    ],
    radarScores: {
      aiCapability: 70,
      npsAnalytics: 35,
      mediaMix: 10,
      strategyDepth: 72,
      pricingValue: 15,
      userExperience: 58,
      integrations: 38,
      customerSuccess: 72,
    },
    color: "#0ea5e9",
  },
  {
    id: "sprinklr",
    name: "Sprinklr",
    tagline: "Unified customer experience management with social listening and competitive intelligence",
    arr: "$730M (FY2025, NYSE: CXM)",
    arrValue: 730,
    pricing: "$150K–$500K+ ACV",
    pricingModel: "Enterprise platform fee + modules",
    targetMarket: "Enterprise",
    founded: 2009,
    funding: "Public (NYSE: CXM)",
    strengths: [
      "Best-in-class social listening and earned media monitoring across 30+ channels",
      "Competitor review sentiment aggregation (G2, Trustpilot, app stores, social)",
      "Unified data platform — marketing, service, and care in one system",
      "Strong enterprise security, compliance, and SLAs",
    ],
    weaknesses: [
      "No media mix modeling or budget allocation AI",
      "No marketing strategy playbooks or AI recommendations",
      "Minimum $150K+ ACV — effectively closed to mid-market and SMB",
      "Designed for large enterprise CX teams, not lean marketing organizations",
    ],
    radarScores: {
      aiCapability: 78,
      npsAnalytics: 72,
      mediaMix: 25,
      strategyDepth: 50,
      pricingValue: 20,
      userExperience: 62,
      integrations: 85,
      customerSuccess: 70,
    },
    color: "#ec4899",
  },
  {
    id: "klue",
    name: "Klue",
    tagline: "Competitive intelligence platform for sales enablement and go-to-market teams",
    arr: "$20M–$50M est.",
    arrValue: 35,
    pricing: "$20K–$80K/yr",
    pricingModel: "Annual contract, seat-based",
    targetMarket: "Mid-Market",
    founded: 2015,
    funding: "$62M Series B",
    strengths: [
      "Purpose-built competitive intelligence with automated competitor monitoring",
      "Battlecard generation for sales teams — strongest use case",
      "Tracks competitor pricing changes, product launches, job postings, and press",
      "Strong G2 presence in the competitive intelligence category",
    ],
    weaknesses: [
      "Sales enablement focus — not built for marketing strategy or budget decisions",
      "No media mix modeling, NPS tracking, or marketing-specific AI",
      "Annual contracts $20K–$80K/yr still price out smaller mid-market teams",
      "Competitive monitoring breadth doesn't extend to review sentiment depth",
    ],
    radarScores: {
      aiCapability: 65,
      npsAnalytics: 40,
      mediaMix: 5,
      strategyDepth: 58,
      pricingValue: 55,
      userExperience: 72,
      integrations: 68,
      customerSuccess: 75,
    },
    color: "#f59e0b",
  },
  {
    id: "salesforce-einstein",
    name: "Salesforce Agentforce",
    tagline: "CRM-native autonomous AI agents for enterprise sales and marketing teams",
    arr: "$1.5B+ (Marketing Cloud + Agentforce)",
    arrValue: 1500,
    pricing: "$75–$500+/seat/mo + $2/AI conversation",
    pricingModel: "Per-seat + consumption",
    targetMarket: "Enterprise",
    founded: 1999,
    funding: "Public (NYSE: CRM)",
    strengths: [
      "Autonomous AI agents for sales and marketing workflows",
      "Massive enterprise CRM install base for cross-sell distribution",
      "Deep revenue intelligence and pipeline forecasting",
      "Industry-leading compliance, security, and enterprise integrations",
    ],
    weaknesses: [
      "No competitor sentiment benchmarking or external brand intelligence",
      "No media mix modeling or cross-channel budget optimization",
      "Very high TCO with complex licensing and mandatory consulting engagements",
      "Locked to Salesforce ecosystem — limited value without CRM investment",
    ],
    radarScores: {
      aiCapability: 80,
      npsAnalytics: 42,
      mediaMix: 30,
      strategyDepth: 65,
      pricingValue: 25,
      userExperience: 60,
      integrations: 95,
      customerSuccess: 78,
    },
    color: "#0284c7",
  },
  {
    id: "microsoft-copilot",
    name: "Microsoft Copilot",
    tagline: "AI embedded across Microsoft 365 for all knowledge workers",
    arr: "$5B+ (Copilot commercial line)",
    arrValue: 5000,
    pricing: "$30/seat/mo",
    pricingModel: "Per-seat add-on to M365",
    targetMarket: "All",
    founded: 1975,
    funding: "Public (NASDAQ: MSFT)",
    strengths: [
      "Embedded in daily workflows (Word, Excel, Teams, Outlook)",
      "Lowest price point in the market at $30/seat/mo",
      "Broadest enterprise reach of any AI platform",
      "Rapid iteration through OpenAI partnership",
    ],
    weaknesses: [
      "Generic AI assistant with no marketing-domain specialization",
      "No competitor intelligence, NPS proxies, media mix, or attribution",
      "Quality inconsistent on complex analytical and strategic tasks",
      "Horizontal tool — not designed for marketing decision workflows",
    ],
    radarScores: {
      aiCapability: 72,
      npsAnalytics: 8,
      mediaMix: 5,
      strategyDepth: 40,
      pricingValue: 88,
      userExperience: 85,
      integrations: 95,
      customerSuccess: 65,
    },
    color: "#10b981",
  },
  {
    id: "hubspot-ai",
    name: "HubSpot Breeze AI",
    tagline: "AI-native CRM and marketing automation for growing businesses",
    arr: "$2.6B (NYSE: HUBS, FY2024)",
    arrValue: 2600,
    pricing: "$800–$5,600+/mo",
    pricingModel: "Seat + contact tier",
    targetMarket: "All",
    founded: 2006,
    funding: "Public (NYSE: HUBS)",
    strengths: [
      "All-in-one platform with strong SMB to mid-market product-market fit",
      "Breeze AI: content generation, email optimization, and CRM enrichment (Clearbit data)",
      "Deep CRM + marketing automation integration in one system",
      "Largest SMB/mid-market marketing software ecosystem",
    ],
    weaknesses: [
      "Breeze AI is content and workflow automation — no competitive intelligence or NPS",
      "No media mix modeling or cross-channel budget optimization",
      "AI strategy depth is shallow vs. purpose-built platforms",
      "Expensive at scale: contact-based pricing spikes as database grows",
    ],
    radarScores: {
      aiCapability: 70,
      npsAnalytics: 48,
      mediaMix: 35,
      strategyDepth: 55,
      pricingValue: 55,
      userExperience: 85,
      integrations: 92,
      customerSuccess: 80,
    },
    color: "#f97316",
  },
];

export const radarMetrics = [
  { key: "aiCapability", label: "AI Capability" },
  { key: "npsAnalytics", label: "Sentiment Intel" },
  { key: "mediaMix", label: "Media Mix" },
  { key: "strategyDepth", label: "Strategy Depth" },
  { key: "pricingValue", label: "Price/Value" },
  { key: "userExperience", label: "UX Quality" },
  { key: "integrations", label: "Integrations" },
  { key: "customerSuccess", label: "Customer Success" },
];

export const positioningMatrix = [
  // X = AI specialization for marketing intelligence (0–100)
  // Y = marketing-specific focus vs. generic platform (0–100)
  { name: "Inovient", x: 78, y: 88, size: 5, color: "#6366f1" },
  { name: "Market Logic", x: 58, y: 82, size: 40, color: "#0ea5e9" },
  { name: "Sprinklr", x: 52, y: 75, size: 200, color: "#ec4899" },
  { name: "Klue", x: 62, y: 62, size: 35, color: "#f59e0b" },
  { name: "Salesforce", x: 38, y: 48, size: 500, color: "#0284c7" },
  { name: "MS Copilot", x: 28, y: 28, size: 1000, color: "#10b981" },
  { name: "HubSpot", x: 45, y: 55, size: 400, color: "#f97316" },
];
