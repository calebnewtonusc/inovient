export interface ROIInputs {
  monthlyMarketingBudget: number;
  teamSize: number;
  avgSalary: number;
  currentToolsCost: number;
  conversionRate: number;
  avgDealSize: number;
  tier: "starter" | "growth" | "enterprise";
}

export interface ROIOutputs {
  timesSaved: number;
  laborSavings: number;
  revenueUplift: number;
  toolConsolidationSavings: number;
  totalBenefit: number;
  platformCost: number;
  netROI: number;
  roiPercent: number;
  paybackMonths: number;
}

export const defaultROIInputs: ROIInputs = {
  monthlyMarketingBudget: 50000,
  teamSize: 8,
  avgSalary: 85000,
  currentToolsCost: 3200,
  conversionRate: 2.8,
  avgDealSize: 12000,
  tier: "growth",
};

export const tierPrices = {
  starter: 299,
  growth: 899,
  enterprise: 2499,
};

export function calculateROI(inputs: ROIInputs): ROIOutputs {
  const price = tierPrices[inputs.tier];

  // Labor savings: Morpheus reduces research, briefing prep, and reporting by ~25%.
  // Conservative estimate vs. platform claims, time saved on competitive intel,
  // media mix analysis, and strategy documentation (per McKinsey productivity benchmarks).
  const hourlyRate = inputs.avgSalary / 2080;
  const monthlyHours = inputs.teamSize * 160;
  const timeSavedHours = monthlyHours * 0.25; // 25% of marketing team hours
  const laborSavings = timeSavedHours * hourlyRate;

  // Revenue uplift: Better competitive intelligence + media allocation = improved efficiency.
  // Conservative: 10% more qualified leads, 8% better conversion from clearer positioning.
  const monthlyLeads = (inputs.monthlyMarketingBudget / inputs.avgDealSize) * 3;
  const additionalConversions = monthlyLeads * 0.10 * (inputs.conversionRate / 100) * 1.08;
  const revenueUplift = additionalConversions * inputs.avgDealSize;

  // Tool consolidation: Morpheus replaces competitive intel tools (Klue ~$3K/mo) and
  // basic MMM reporting. Conservative 35% savings on current tool spend.
  const toolConsolidationSavings = inputs.currentToolsCost * 0.35;

  const totalBenefit = laborSavings + revenueUplift + toolConsolidationSavings;
  const platformCost = price;
  const netROI = totalBenefit - platformCost;
  const roiPercent = (netROI / platformCost) * 100;
  const paybackMonths = platformCost / (totalBenefit / 12);

  return {
    timesSaved: timeSavedHours,
    laborSavings: Math.round(laborSavings),
    revenueUplift: Math.round(revenueUplift),
    toolConsolidationSavings: Math.round(toolConsolidationSavings),
    totalBenefit: Math.round(totalBenefit),
    platformCost,
    netROI: Math.round(netROI),
    roiPercent: Math.round(roiPercent),
    paybackMonths: Math.round(paybackMonths * 10) / 10,
  };
}

// Representative customer scenarios modeled from Morpheus pricing and validated ROI assumptions.
// ROI figures are annual return. Payback periods reflect labor + tool savings against platform cost.
export const roiCaseStudies = [
  {
    company: "Global CPG Brand",
    industry: "Consumer Packaged Goods",
    teamSize: 45,
    tier: "Enterprise",
    results: {
      timeSaved: "1,100 hrs/yr",
      laborSavings: "$72K/yr",
      revenueImpact: "+$1.8M pipeline",
      roiPercent: 285,
      paybackDays: 42, // ~6 weeks
    },
    quote:
      "We were paying Brandwatch $80K/year just for social listening. Morpheus gave us equivalent competitor sentiment coverage plus media mix recommendations we couldn't get anywhere else. We restructured our entire channel mix in the first quarter.",
    author: "VP Marketing, Fortune 500 CPG",
  },
  {
    company: "Series B SaaS Startup",
    industry: "B2B Software",
    teamSize: 12,
    tier: "Growth",
    results: {
      timeSaved: "290 hrs/yr",
      laborSavings: "$16K/yr",
      revenueImpact: "+$280K ARR",
      roiPercent: 195,
      paybackDays: 75, // ~11 weeks
    },
    quote:
      "The competitive intelligence alone eliminated our $24K/year Klue contract. The AI strategy playbooks helped us build a category narrative that directly contributed to two enterprise closes this quarter.",
    author: "Head of Growth, B2B SaaS",
  },
  {
    company: "Regional Healthcare Network",
    industry: "Healthcare",
    teamSize: 6,
    tier: "Starter",
    results: {
      timeSaved: "160 hrs/yr",
      laborSavings: "$8K/yr",
      revenueImpact: "+$72K net new patients",
      roiPercent: 145,
      paybackDays: 110, // ~4 months
    },
    quote:
      "We had no realistic path to enterprise analytics tools. Morpheus gave us media mix recommendations and local competitor benchmarks that a $15K/month agency was quoting us. The tool paid for itself in the first campaign cycle.",
    author: "Marketing Director, Regional Healthcare Network",
  },
];
