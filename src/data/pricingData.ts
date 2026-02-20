export interface PricingTier {
  id: string;
  name: string;
  subtitle: string;
  monthlyPrice: number;
  annualPrice: number;
  targetSegment: string;
  features: string[];
  limitations: string[];
  metrics: {
    targetARR: string;
    expectedConversion: string;
    avgDealCycle: string;
    churnRate: string;
  };
  recommended: boolean;
  color: string;
  gradient: string;
}

export const pricingTiers: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    subtitle: "For growing marketing teams",
    monthlyPrice: 299,
    annualPrice: 239,
    targetSegment: "SMB (10–99 employees)",
    features: [
      "Morpheus AI strategy recommendations",
      "Up to 3 brand/competitor NPS tracks",
      "Basic media mix suggestions",
      "5 user seats",
      "Monthly strategy reports",
      "Email support",
      "Standard integrations (Google Analytics, Meta)",
    ],
    limitations: [
      "No real-time NPS updates",
      "Limited to 1 market/region",
      "No custom AI training",
    ],
    metrics: {
      targetARR: "$3.6K per customer",
      expectedConversion: "4–6% from trial",
      avgDealCycle: "14–21 days",
      churnRate: "<8% annual",
    },
    recommended: false,
    color: "#a78bfa",
    gradient: "from-violet-400 to-purple-500",
  },
  {
    id: "growth",
    name: "Growth",
    subtitle: "For scaling marketing organizations",
    monthlyPrice: 899,
    annualPrice: 719,
    targetSegment: "Mid-Market (100–999 employees)",
    features: [
      "Everything in Starter",
      "Real-time NPS with competitor benchmarking",
      "Advanced media mix modeling (8 channels)",
      "Custom AI strategy playbooks",
      "15 user seats",
      "Weekly executive briefings",
      "Priority support + CSM onboarding",
      "API access (10K calls/mo)",
      "Advanced integrations (Salesforce, HubSpot)",
      "Multi-market analysis (3 regions)",
    ],
    limitations: ["No custom AI model training", "Standard SLA (99.5%)"],
    metrics: {
      targetARR: "$10.8K per customer",
      expectedConversion: "8–12% from trial",
      avgDealCycle: "21–45 days",
      churnRate: "<5% annual",
    },
    recommended: true,
    color: "#6366f1",
    gradient: "from-indigo-500 to-purple-600",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    subtitle: "For global marketing leaders",
    monthlyPrice: 2499,
    annualPrice: 1999,
    targetSegment: "Enterprise (1000+ employees)",
    features: [
      "Everything in Growth",
      "Custom AI model training on proprietary data",
      "Unlimited NPS competitor tracking",
      "Full media mix + attribution modeling",
      "Unlimited user seats",
      "Daily AI-generated executive dashboards",
      "Dedicated CSM + quarterly strategy reviews",
      "Unlimited API access",
      "Custom integrations + webhooks",
      "Multi-market global analysis",
      "SSO + advanced security (SOC 2 Type II)",
      "99.9% uptime SLA",
      "White-label reporting",
    ],
    limitations: [],
    metrics: {
      targetARR: "$30K per customer",
      expectedConversion: "25–40% from pilot",
      avgDealCycle: "60–120 days",
      churnRate: "<2% annual",
    },
    recommended: false,
    color: "#0ea5e9",
    gradient: "from-sky-500 to-indigo-600",
  },
];

export const revenueProjections = [
  {
    year: "2025",
    starter: 180,
    growth: 540,
    enterprise: 600,
    total: 1320,
    customers: 290,
  },
  {
    year: "2026",
    starter: 320,
    growth: 1260,
    enterprise: 1800,
    total: 3380,
    customers: 580,
  },
  {
    year: "2027",
    starter: 480,
    growth: 2700,
    enterprise: 5400,
    total: 8580,
    customers: 980,
  },
  {
    year: "2028",
    starter: 650,
    growth: 5040,
    enterprise: 12000,
    total: 17690,
    customers: 1650,
  },
  {
    year: "2029",
    starter: 820,
    growth: 8640,
    enterprise: 24000,
    total: 33460,
    customers: 2580,
  },
  {
    year: "2030",
    starter: 980,
    growth: 13500,
    enterprise: 45000,
    total: 59480,
    customers: 3800,
  },
];

export const unitEconomics = {
  starter: {
    cac: 420,
    ltv: 4320,
    ltvCacRatio: 10.3,
    paybackMonths: 1.4,
    grossMargin: 0.82,
  },
  growth: {
    cac: 1800,
    ltv: 28800,
    ltvCacRatio: 16.0,
    paybackMonths: 2.5,
    grossMargin: 0.78,
  },
  enterprise: {
    cac: 12000,
    ltv: 450000,
    ltvCacRatio: 37.5,
    paybackMonths: 4.8,
    grossMargin: 0.72,
  },
};

export const pricingBenchmarks = [
  { metric: "Gross Margin", inovient: 78, industry: 72, best: 85 },
  { metric: "NRR", inovient: 118, industry: 108, best: 140 },
  { metric: "LTV:CAC", inovient: 16, industry: 8, best: 25 },
  { metric: "Payback (mo)", inovient: 3, industry: 12, best: 6 },
  { metric: "Logo Churn", inovient: 5, industry: 14, best: 2 },
];
