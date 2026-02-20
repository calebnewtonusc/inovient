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
    tagline: "AI platform built by marketers, for marketers",
    arr: "$2M–$8M",
    arrValue: 5,
    pricing: "$299–$2,499/mo",
    pricingModel: "Seat + Usage Hybrid",
    targetMarket: "Mid-Market",
    founded: 2022,
    funding: "Seed",
    strengths: [
      "End-to-end marketing strategy AI",
      "Real-time NPS competitor benchmarking",
      "40+ years domain expertise baked in",
      "Media mix modeling built-in",
    ],
    weaknesses: [
      "Early stage brand recognition",
      "Limited enterprise integrations",
      "Smaller dataset vs incumbents",
    ],
    radarScores: {
      aiCapability: 82,
      npsAnalytics: 91,
      mediaMix: 88,
      strategyDepth: 85,
      pricingValue: 78,
      userExperience: 80,
      integrations: 55,
      customerSuccess: 75,
    },
    color: "#6366f1",
  },
  {
    id: "salesforce-einstein",
    name: "Salesforce Einstein",
    tagline: "CRM-native AI for enterprise marketing",
    arr: "$1.2B+",
    arrValue: 1200,
    pricing: "$3,000–$50,000+/mo",
    pricingModel: "Per-seat + Platform fee",
    targetMarket: "Enterprise",
    founded: 2016,
    funding: "Public (CRM)",
    strengths: [
      "Deep CRM integration",
      "Massive enterprise install base",
      "99.9% uptime SLA",
      "Comprehensive compliance",
    ],
    weaknesses: [
      "Very high cost of entry",
      "Complex implementation",
      "Marketing-specific AI is secondary",
      "Slow innovation cycle",
    ],
    radarScores: {
      aiCapability: 78,
      npsAnalytics: 65,
      mediaMix: 55,
      strategyDepth: 72,
      pricingValue: 35,
      userExperience: 62,
      integrations: 98,
      customerSuccess: 80,
    },
    color: "#0ea5e9",
  },
  {
    id: "jasper",
    name: "Jasper AI",
    tagline: "AI content creation for marketing teams",
    arr: "$90M",
    arrValue: 90,
    pricing: "$49–$125/seat/mo",
    pricingModel: "Per-seat",
    targetMarket: "Mid-Market",
    founded: 2021,
    funding: "$131M Series A",
    strengths: [
      "Best-in-class content generation",
      "Strong brand voice consistency",
      "Wide template library",
      "User-friendly interface",
    ],
    weaknesses: [
      "No NPS or analytics capabilities",
      "No media mix modeling",
      "Content-only, no strategy",
      "Declining market share to GPT-4",
    ],
    radarScores: {
      aiCapability: 75,
      npsAnalytics: 10,
      mediaMix: 5,
      strategyDepth: 45,
      pricingValue: 72,
      userExperience: 88,
      integrations: 68,
      customerSuccess: 70,
    },
    color: "#f59e0b",
  },
  {
    id: "hubspot-ai",
    name: "HubSpot AI",
    tagline: "AI-native CRM and marketing automation",
    arr: "$2.6B",
    arrValue: 2600,
    pricing: "$800–$5,600+/mo",
    pricingModel: "Seat + Contact tier",
    targetMarket: "All",
    founded: 2006,
    funding: "Public (HUBS)",
    strengths: [
      "All-in-one platform",
      "Strong SMB to mid-market fit",
      "Excellent content + AI assistant",
      "Deep ecosystem of integrations",
    ],
    weaknesses: [
      "NPS and media mix are add-ons",
      "AI strategy depth is shallow",
      "Expensive at scale",
      "Complex pricing structure",
    ],
    radarScores: {
      aiCapability: 72,
      npsAnalytics: 58,
      mediaMix: 40,
      strategyDepth: 60,
      pricingValue: 55,
      userExperience: 85,
      integrations: 95,
      customerSuccess: 82,
    },
    color: "#f97316",
  },
  {
    id: "sprinklr",
    name: "Sprinklr",
    tagline: "Unified customer experience management",
    arr: "$730M",
    arrValue: 730,
    pricing: "$5,000–$30,000+/mo",
    pricingModel: "Platform fee + modules",
    targetMarket: "Enterprise",
    founded: 2009,
    funding: "Public (CXM)",
    strengths: [
      "Best-in-class social analytics",
      "Real-time sentiment analysis",
      "Strong enterprise security",
      "Unified data platform",
    ],
    weaknesses: [
      "Very expensive",
      "No media mix modeling",
      "Overcomplicated for most teams",
      "Poor SMB fit",
    ],
    radarScores: {
      aiCapability: 80,
      npsAnalytics: 70,
      mediaMix: 35,
      strategyDepth: 68,
      pricingValue: 30,
      userExperience: 65,
      integrations: 88,
      customerSuccess: 72,
    },
    color: "#ec4899",
  },
  {
    id: "smartly",
    name: "Smartly.io",
    tagline: "AI-powered paid social advertising platform",
    arr: "$150M",
    arrValue: 150,
    pricing: "$3,000–$20,000/mo",
    pricingModel: "% of ad spend + platform fee",
    targetMarket: "Enterprise",
    founded: 2013,
    funding: "$1.4B valuation",
    strengths: [
      "Best media mix for paid social",
      "Automated creative optimization",
      "Strong ROAS measurement",
      "Excellent agency relationships",
    ],
    weaknesses: [
      "Limited to paid social channels",
      "No NPS or strategy capabilities",
      "High minimum spend requirements",
      "Niche use case",
    ],
    radarScores: {
      aiCapability: 78,
      npsAnalytics: 20,
      mediaMix: 85,
      strategyDepth: 40,
      pricingValue: 42,
      userExperience: 75,
      integrations: 72,
      customerSuccess: 78,
    },
    color: "#10b981",
  },
  {
    id: "writer",
    name: "Writer",
    tagline: "Enterprise AI writing and brand governance",
    arr: "$50M",
    arrValue: 50,
    pricing: "$18–$1,800+/mo",
    pricingModel: "Per-seat",
    targetMarket: "Enterprise",
    founded: 2020,
    funding: "$200M Series C",
    strengths: [
      "Strong brand voice enforcement",
      "Enterprise security (SOC 2)",
      "No-hallucination RAG system",
      "Strong compliance features",
    ],
    weaknesses: [
      "Content-only, no analytics",
      "No NPS or media mix",
      "Limited strategy capabilities",
      "High enterprise price point",
    ],
    radarScores: {
      aiCapability: 76,
      npsAnalytics: 12,
      mediaMix: 8,
      strategyDepth: 42,
      pricingValue: 58,
      userExperience: 82,
      integrations: 62,
      customerSuccess: 74,
    },
    color: "#8b5cf6",
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
  { name: "Inovient", x: 72, y: 85, size: 5, color: "#6366f1" },
  { name: "Salesforce", x: 25, y: 70, size: 40, color: "#0ea5e9" },
  { name: "Jasper", x: 65, y: 62, size: 12, color: "#f59e0b" },
  { name: "HubSpot", x: 55, y: 55, size: 38, color: "#f97316" },
  { name: "Sprinklr", x: 30, y: 65, size: 20, color: "#ec4899" },
  { name: "Smartly", x: 78, y: 48, size: 14, color: "#10b981" },
  { name: "Writer", x: 60, y: 70, size: 8, color: "#8b5cf6" },
];
