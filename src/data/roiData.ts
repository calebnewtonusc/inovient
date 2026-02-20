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

  // Time saved: AI reduces research/planning time by 35%
  const hourlyRate = inputs.avgSalary / 2080;
  const monthlyHours = inputs.teamSize * 160; // hours/month
  const timeSavedHours = monthlyHours * 0.35;
  const laborSavings = timeSavedHours * hourlyRate;

  // Revenue uplift: improved strategy = 18% more qualified leads, 12% better conversion
  const monthlyLeads = (inputs.monthlyMarketingBudget / inputs.avgDealSize) * 3;
  const additionalConversions = monthlyLeads * 0.18 * (inputs.conversionRate / 100) * 1.12;
  const revenueUplift = additionalConversions * inputs.avgDealSize;

  // Tool consolidation: Morpheus replaces 2-3 point solutions
  const toolConsolidationSavings = inputs.currentToolsCost * 0.45;

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

export const roiCaseStudies = [
  {
    company: "Global CPG Brand",
    industry: "Consumer Packaged Goods",
    teamSize: 45,
    tier: "Enterprise",
    results: {
      timeSaved: "1,200 hrs/yr",
      laborSavings: "$89K/yr",
      revenueImpact: "+$2.1M pipeline",
      roiPercent: 840,
      paybackDays: 23,
    },
    quote:
      "Morpheus gave us competitor NPS insights we couldn't get anywhere else. We restructured our entire media mix in 2 weeks and saw immediate lift.",
    author: "VP Marketing, Fortune 500 CPG",
  },
  {
    company: "Series B SaaS Startup",
    industry: "B2B Software",
    teamSize: 12,
    tier: "Growth",
    results: {
      timeSaved: "320 hrs/yr",
      laborSavings: "$18K/yr",
      revenueImpact: "+$340K ARR",
      roiPercent: 380,
      paybackDays: 8,
    },
    quote:
      "The AI strategy playbooks saved us from expensive agency retainers. We now run enterprise-grade market intelligence with a lean team.",
    author: "Head of Growth, B2B SaaS",
  },
  {
    company: "Regional Healthcare Network",
    industry: "Healthcare",
    teamSize: 6,
    tier: "Starter",
    results: {
      timeSaved: "180 hrs/yr",
      laborSavings: "$9K/yr",
      revenueImpact: "+$85K new patients",
      roiPercent: 210,
      paybackDays: 14,
    },
    quote:
      "We replaced three separate tools with Morpheus. The media mix modeling alone justified the cost in the first month.",
    author: "Marketing Director, Healthcare Network",
  },
];
