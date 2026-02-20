// Sources: Grand View Research "AI in Marketing Market Report" (2024); Grand View Research "Marketing
// Technology Market Report" (2024); McKinsey "State of AI in Early 2024"; Salesforce "State of
// Marketing" 8th Edition (2024).

export const marketSizeData = {
  tam: {
    label: "Total Addressable Market",
    abbr: "TAM",
    value: 491_000_000_000, // $491B — Global Marketing Technology, 2025E (GVR 2024, 19.4% CAGR from $344.8B 2023 base)
    description: "Global marketing technology market including all digital marketing tools and platforms",
    cagr: 19.4,
    year2030: 1_190_000_000_000, // $1.19T
  },
  sam: {
    label: "Serviceable Addressable Market",
    abbr: "SAM",
    value: 64_600_000_000, // $64.6B — AI-Powered Marketing Platforms, 2025E (GVR 2024, 36.6% CAGR from $47.3B 2024 base)
    description: "AI-powered marketing software and analytics platforms",
    cagr: 36.6,
    year2030: 307_000_000_000, // $307B
  },
  som: {
    label: "Serviceable Obtainable Market",
    abbr: "SOM",
    value: 6_600_000_000, // $6.6B — AI marketing analytics, competitive intelligence & MMM for mid-market, 2025E
    description: "AI-driven competitive intelligence, marketing analytics, and media mix modeling tools accessible to mid-market",
    cagr: 38.0,
    year2030: 33_000_000_000, // $33B
  },
};

export const marketGrowthData = [
  { year: "2022", tam: 289, sam: 25.3, som: 2.5 },
  { year: "2023", tam: 345, sam: 34.6, som: 3.5 },
  { year: "2024", tam: 411, sam: 47.3, som: 4.8 },
  { year: "2025", tam: 491, sam: 64.6, som: 6.6 },
  { year: "2026P", tam: 587, sam: 88.2, som: 9.1 },
  { year: "2027P", tam: 700, sam: 120.5, som: 12.6 },
  { year: "2028P", tam: 835, sam: 164.6, som: 17.4 },
  { year: "2030P", tam: 1190, sam: 307.0, som: 33.0 },
];

export const segmentData = [
  { name: "Enterprise (1000+ employees)", value: 42, color: "#6366f1" },
  { name: "Mid-Market (100–999)", value: 33, color: "#8b5cf6" },
  { name: "SMB (10–99)", value: 18, color: "#a78bfa" },
  { name: "Startup (<10)", value: 7, color: "#c4b5fd" },
];

// Adoption curve calibrated to: Salesforce SOM 2024 (75% using/experimenting with AI tools);
// McKinsey "State of AI in Early 2024" (65% of orgs deployed gen AI in at least one function).
// Non-linear curve reflects rapid mid-year acceleration as GPT-4o and Gemini 1.5 shipped,
// then deceleration toward the 75–80% adoption ceiling.
export const adoptionTrendsData = [
  { month: "Jan 25", aiMarketingAdoption: 52, marketingBudgetAI: 18 },
  { month: "Mar 25", aiMarketingAdoption: 56, marketingBudgetAI: 21 },
  { month: "May 25", aiMarketingAdoption: 62, marketingBudgetAI: 25 },
  { month: "Jul 25", aiMarketingAdoption: 67, marketingBudgetAI: 29 },
  { month: "Sep 25", aiMarketingAdoption: 70, marketingBudgetAI: 33 },
  { month: "Nov 25", aiMarketingAdoption: 72, marketingBudgetAI: 35 },
  { month: "Jan 26", aiMarketingAdoption: 74, marketingBudgetAI: 37 },
];

export const keyInsights = [
  {
    id: 1,
    stat: "75%",
    label: "of marketers use or experiment with AI tools",
    source: "Salesforce State of Marketing, 8th Ed. (2024)",
    detail: "Up from ~29% in 2022, representing the fastest enterprise adoption curve since cloud software",
    trend: "up",
  },
  {
    id: 2,
    stat: "36.6%",
    label: "CAGR for AI marketing platforms through 2030",
    source: "Grand View Research, AI in Marketing Report (2024)",
    detail: "Outpacing overall MarTech growth 2x, driven by LLM capability advances and demonstrated ROI proof points",
    trend: "up",
  },
  {
    id: 3,
    stat: "$64.6B",
    label: "AI marketing SAM in 2025, growing to $307B by 2030",
    source: "Grand View Research, AI in Marketing Report (2024)",
    detail: "AI-powered platforms now represent 13% of total MarTech spend, on track to exceed 25% by 2028",
    trend: "up",
  },
  {
    id: 4,
    stat: "65%",
    label: "of enterprises deployed gen AI in marketing and sales",
    source: "McKinsey State of AI (2024)",
    detail: "Marketing and sales ranked #1 functional area for generative AI deployment across industries",
    trend: "up",
  },
];
