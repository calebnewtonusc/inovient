export const marketSizeData = {
  tam: {
    label: "Total Addressable Market",
    abbr: "TAM",
    value: 1420000000000, // $1.42T - Global Marketing Tech
    description: "Global marketing technology market including all digital marketing tools",
    cagr: 13.1,
    year2030: 2800000000000,
  },
  sam: {
    label: "Serviceable Addressable Market",
    abbr: "SAM",
    value: 185000000000, // $185B - AI-powered marketing software
    description: "AI-powered marketing software and analytics platforms",
    cagr: 31.4,
    year2030: 710000000000,
  },
  som: {
    label: "Serviceable Obtainable Market",
    abbr: "SOM",
    value: 4200000000, // $4.2B - AI strategy/NPS/media mix tools
    description: "AI-driven strategy, NPS analytics, and media mix modeling tools",
    cagr: 38.7,
    year2030: 24000000000,
  },
};

export const marketGrowthData = [
  { year: "2022", tam: 820, sam: 68, som: 1.1 },
  { year: "2023", tam: 980, sam: 95, som: 1.8 },
  { year: "2024", tam: 1180, sam: 138, som: 2.9 },
  { year: "2025", tam: 1420, sam: 185, som: 4.2 },
  { year: "2026P", tam: 1720, sam: 248, som: 6.1 },
  { year: "2027P", tam: 2060, sam: 330, som: 8.9 },
  { year: "2028P", tam: 2400, sam: 435, som: 12.8 },
  { year: "2030P", tam: 2800, sam: 710, som: 24.0 },
];

export const segmentData = [
  { name: "Enterprise (1000+ employees)", value: 42, color: "#6366f1" },
  { name: "Mid-Market (100–999)", value: 33, color: "#8b5cf6" },
  { name: "SMB (10–99)", value: 18, color: "#a78bfa" },
  { name: "Startup (<10)", value: 7, color: "#c4b5fd" },
];

export const adoptionTrendsData = [
  { month: "Jan 25", aiMarketingAdoption: 38, marketingBudgetAI: 12 },
  { month: "Mar 25", aiMarketingAdoption: 44, marketingBudgetAI: 15 },
  { month: "May 25", aiMarketingAdoption: 51, marketingBudgetAI: 18 },
  { month: "Jul 25", aiMarketingAdoption: 58, marketingBudgetAI: 22 },
  { month: "Sep 25", aiMarketingAdoption: 63, marketingBudgetAI: 26 },
  { month: "Nov 25", aiMarketingAdoption: 69, marketingBudgetAI: 31 },
  { month: "Jan 26", aiMarketingAdoption: 74, marketingBudgetAI: 36 },
];

export const keyInsights = [
  {
    id: 1,
    stat: "74%",
    label: "of marketers now use AI tools",
    detail: "Up from 38% in Jan 2025, representing fastest adoption curve in marketing tech history",
    trend: "up",
  },
  {
    id: 2,
    stat: "31.4%",
    label: "AI marketing CAGR (2024–2030)",
    detail: "Outpacing overall martech growth by 2.4x, driven by LLM advances and ROI proof points",
    trend: "up",
  },
  {
    id: 3,
    stat: "$185B",
    label: "SAM opportunity by 2025",
    detail: "AI-powered marketing platforms represent 13% of total martech spend, growing to 25% by 2028",
    trend: "up",
  },
  {
    id: 4,
    stat: "3.8x",
    label: "Average ROI from AI marketing tools",
    detail: "Enterprises report average 3.8x return on AI marketing investment within 18 months",
    trend: "up",
  },
];
