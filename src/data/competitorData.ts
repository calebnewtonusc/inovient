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
    arr: "$2M–$8M",
    arrValue: 5,
    pricing: "$299–$2,499/mo",
    pricingModel: "Seat + Usage Hybrid",
    targetMarket: "Mid-Market",
    founded: 2022,
    funding: "Seed",
    strengths: [
      "Only platform combining NPS + media mix + strategy AI",
      "Real-time competitor NPS benchmarking",
      "40+ years domain expertise embedded in AI",
      "Accessible pricing for mid-market teams",
    ],
    weaknesses: [
      "Early stage brand recognition",
      "Limited enterprise integrations at launch",
      "Smaller training dataset vs. incumbents",
    ],
    radarScores: {
      aiCapability: 82,
      npsAnalytics: 91,
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
    tagline: "Enterprise market intelligence and strategic insights AI",
    arr: "$20M–$40M",
    arrValue: 30,
    pricing: "$50K–$500K+/yr",
    pricingModel: "Enterprise annual contract",
    targetMarket: "Enterprise",
    founded: 2011,
    funding: "Strategic investors",
    strengths: [
      "Purpose-built for market research + strategy synthesis",
      "Strong in CPG, pharma, and FMCG verticals",
      "AI surfaces insights from primary research docs",
      "Competitive intelligence aggregation built-in",
    ],
    weaknesses: [
      "No media mix modeling or NPS tracking",
      "Enterprise-only, not accessible to mid-market",
      "Small integration ecosystem",
      "Low brand recognition outside core verticals",
    ],
    radarScores: {
      aiCapability: 70,
      npsAnalytics: 40,
      mediaMix: 15,
      strategyDepth: 75,
      pricingValue: 18,
      userExperience: 60,
      integrations: 38,
      customerSuccess: 72,
    },
    color: "#0ea5e9",
  },
  {
    id: "sprinklr",
    name: "Sprinklr",
    tagline: "Unified customer experience management with social listening AI",
    arr: "$730M",
    arrValue: 730,
    pricing: "$5,000–$30,000+/mo",
    pricingModel: "Platform fee + modules",
    targetMarket: "Enterprise",
    founded: 2009,
    funding: "Public (NYSE: CXM)",
    strengths: [
      "Best-in-class social listening and sentiment analysis",
      "Real-time NPS proxy via social signals",
      "Unified data platform across 30+ channels",
      "Strong enterprise security and SLAs",
    ],
    weaknesses: [
      "No media mix modeling or budget allocation AI",
      "No marketing strategy playbooks",
      "Very expensive, poor mid-market fit",
      "Overcomplicated for lean marketing teams",
    ],
    radarScores: {
      aiCapability: 78,
      npsAnalytics: 72,
      mediaMix: 30,
      strategyDepth: 55,
      pricingValue: 25,
      userExperience: 62,
      integrations: 85,
      customerSuccess: 70,
    },
    color: "#ec4899",
  },
  {
    id: "cascade-strategy",
    name: "Cascade Strategy",
    tagline: "AI-powered strategy execution and OKR management platform",
    arr: "$20M–$50M",
    arrValue: 35,
    pricing: "$29–$89/seat/mo",
    pricingModel: "Per-seat tiered SaaS",
    targetMarket: "Mid-Market",
    founded: 2018,
    funding: "$20M Series A",
    strengths: [
      "Purpose-built for strategy execution and OKRs",
      "Accessible mid-market pricing",
      "Strong KPI visualization and tracking",
      "Faster time-to-value than enterprise platforms",
    ],
    weaknesses: [
      "No NPS benchmarking or sentiment analytics",
      "No media mix modeling or budget allocation",
      "Limited AI depth compared to larger platforms",
      "Small integration ecosystem",
    ],
    radarScores: {
      aiCapability: 58,
      npsAnalytics: 10,
      mediaMix: 5,
      strategyDepth: 70,
      pricingValue: 78,
      userExperience: 80,
      integrations: 58,
      customerSuccess: 70,
    },
    color: "#f59e0b",
  },
  {
    id: "salesforce-einstein",
    name: "Salesforce Agentforce",
    tagline: "CRM-native autonomous AI agents for enterprise marketing",
    arr: "$1.5B+",
    arrValue: 1500,
    pricing: "$75–$500+/seat/mo",
    pricingModel: "Per-seat + $2/AI conversation",
    targetMarket: "Enterprise",
    founded: 1999,
    funding: "Public (NYSE: CRM)",
    strengths: [
      "Autonomous AI agents for sales and marketing",
      "Massive enterprise install base for cross-sell",
      "Deep CRM integration and revenue intelligence",
      "Industry's strongest compliance and security",
    ],
    weaknesses: [
      "No NPS competitor benchmarking capability",
      "No media mix or budget allocation AI",
      "Very high TCO, complex licensing structure",
      "Requires heavy consulting for implementation",
    ],
    radarScores: {
      aiCapability: 80,
      npsAnalytics: 45,
      mediaMix: 35,
      strategyDepth: 68,
      pricingValue: 28,
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
    arr: "$5B+ (Copilot line)",
    arrValue: 5000,
    pricing: "$30/seat/mo",
    pricingModel: "Per-seat add-on to M365",
    targetMarket: "All",
    founded: 1975,
    funding: "Public (NASDAQ: MSFT)",
    strengths: [
      "Embedded in daily tools (Word, Excel, Teams)",
      "Extremely accessible price point ($30/seat)",
      "Broadest enterprise reach of any AI platform",
      "Rapid iteration leveraging OpenAI partnership",
    ],
    weaknesses: [
      "Generic AI, no marketing strategy specialization",
      "No NPS analytics, media mix, or competitor intelligence",
      "Quality inconsistent in complex analytical tasks",
      "Not designed for marketing decision-making",
    ],
    radarScores: {
      aiCapability: 72,
      npsAnalytics: 8,
      mediaMix: 5,
      strategyDepth: 42,
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
    arr: "$2.6B",
    arrValue: 2600,
    pricing: "$800–$5,600+/mo",
    pricingModel: "Seat + contact tier",
    targetMarket: "All",
    founded: 2006,
    funding: "Public (NYSE: HUBS)",
    strengths: [
      "All-in-one platform with strong SMB to mid-market fit",
      "AI content generation and email optimization",
      "Deep CRM + marketing automation integration",
      "Strong partner ecosystem",
    ],
    weaknesses: [
      "NPS and media mix are shallow add-ons, not core AI",
      "AI strategy depth is limited vs. pure-play tools",
      "Expensive at scale with contact-based pricing",
      "Not designed for competitive intelligence",
    ],
    radarScores: {
      aiCapability: 70,
      npsAnalytics: 52,
      mediaMix: 38,
      strategyDepth: 58,
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
  { key: "npsAnalytics", label: "NPS Analytics" },
  { key: "mediaMix", label: "Media Mix" },
  { key: "strategyDepth", label: "Strategy Depth" },
  { key: "pricingValue", label: "Price/Value" },
  { key: "userExperience", label: "UX Quality" },
  { key: "integrations", label: "Integrations" },
  { key: "customerSuccess", label: "Customer Success" },
];

export const positioningMatrix = [
  // X = AI specialization for marketing strategy (0–100)
  // Y = marketing intelligence focus (0–100)
  { name: "Inovient", x: 78, y: 88, size: 5, color: "#6366f1" },
  { name: "Market Logic", x: 60, y: 80, size: 30, color: "#0ea5e9" },
  { name: "Sprinklr", x: 55, y: 72, size: 200, color: "#ec4899" },
  { name: "Cascade", x: 68, y: 58, size: 35, color: "#f59e0b" },
  { name: "Salesforce", x: 38, y: 50, size: 500, color: "#0284c7" },
  { name: "MS Copilot", x: 28, y: 30, size: 1000, color: "#10b981" },
  { name: "HubSpot", x: 45, y: 55, size: 400, color: "#f97316" },
];
