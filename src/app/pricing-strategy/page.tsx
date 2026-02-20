"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ChartCard } from "@/components/ui/ChartCard";
import {
  pricingTiers,
  revenueProjections,
  unitEconomics,
  pricingBenchmarks,
} from "@/data/pricingData";
import { formatCurrency } from "@/lib/utils";
import { Check } from "lucide-react";

const ttStyle = {
  background: "#13131C",
  border: "1px solid #26263A",
  borderRadius: "4px",
  color: "#EBEBF5",
  fontSize: "12px",
  padding: "8px 12px",
};

export default function PricingStrategyPage() {
  return (
    <div className="min-h-screen">
      {/* Page header */}
      <div className="border-b border-[#26263A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <SectionHeader
            label="Pricing Strategy"
            title="Sustainable Pricing Framework"
            description="Value-based 3-tier pricing model designed to maximize NRR, LTV:CAC efficiency, and ARR growth, benchmarked against top AI SaaS companies."
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
        {/* ─── 01: Pricing Tiers ────────────────────────────── */}
        <section>
          <SectionHeader index="01" label="Pricing Tiers" title="3-Tier Architecture" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {pricingTiers.map((tier) => (
              <div
                key={tier.id}
                className={`flex flex-col rounded-md border p-6 ${
                  tier.recommended
                    ? "border-[#7C5CF6]/50 bg-[#7C5CF6]/5"
                    : "border-[#26263A] bg-[#13131C]"
                }`}
              >
                {/* Tier header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="text-[10px] font-mono uppercase tracking-[0.15em]"
                      style={{ color: tier.color }}
                    >
                      {tier.name}
                    </span>
                    {tier.recommended && (
                      <span className="text-[9px] font-mono text-[#7C5CF6] uppercase tracking-wider">
                        recommended
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#6A6A90] mb-4">{tier.subtitle}</p>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-4xl font-black font-mono text-[#EBEBF5]">
                      {formatCurrency(tier.monthlyPrice)}
                    </span>
                    <span className="text-[#38385A] text-sm">/mo</span>
                  </div>
                  <p className="text-xs text-[#22D3A4] mt-1">
                    {formatCurrency(tier.annualPrice)}/mo billed annually, save{" "}
                    {Math.round((1 - tier.annualPrice / tier.monthlyPrice) * 100)}%
                  </p>
                  <p className="text-xs text-[#38385A] mt-1.5">{tier.targetSegment}</p>
                </div>

                {/* Features — top 5 only */}
                <div className="flex-1 space-y-2.5 mb-5">
                  {tier.features.slice(0, 5).map((feature) => (
                    <div key={feature} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#22D3A4] mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-[#EBEBF5]">{feature}</span>
                    </div>
                  ))}
                  {tier.features.length > 5 && (
                    <p className="text-[10px] font-mono text-[#38385A] pl-5">
                      +{tier.features.length - 5} more features
                    </p>
                  )}
                </div>

                {/* 2 key metrics */}
                <div className="flex items-center justify-between pt-4 border-t border-[#26263A]">
                  <div>
                    <p className="text-[10px] font-mono text-[#38385A] mb-0.5">Churn</p>
                    <p className="text-xs font-mono text-[#6A6A90]">{tier.metrics.churnRate}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-mono text-[#38385A] mb-0.5">Deal Cycle</p>
                    <p className="text-xs font-mono text-[#6A6A90]">{tier.metrics.avgDealCycle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── 02: Unit Economics ───────────────────────────── */}
        <section>
          <SectionHeader
            index="02"
            label="Unit Economics"
            title="LTV, CAC &amp; Payback Analysis"
            description="All metrics exceed top-quartile SaaS benchmarks across each tier."
          />
          <div className="card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#26263A]">
                    <th className="text-left px-5 py-3 text-[10px] font-mono uppercase tracking-[0.12em] text-[#38385A]">
                      Metric
                    </th>
                    {pricingTiers.map((tier) => (
                      <th
                        key={tier.id}
                        className="text-left px-5 py-3 text-[10px] font-mono uppercase tracking-[0.12em]"
                        style={{ color: tier.color }}
                      >
                        {tier.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      label: "CAC",
                      sub: "Customer acquisition cost",
                      fn: (t: typeof pricingTiers[0]) =>
                        formatCurrency(unitEconomics[t.id as keyof typeof unitEconomics].cac),
                    },
                    {
                      label: "LTV",
                      sub: "Lifetime value",
                      fn: (t: typeof pricingTiers[0]) =>
                        formatCurrency(unitEconomics[t.id as keyof typeof unitEconomics].ltv, true),
                    },
                    {
                      label: "LTV:CAC",
                      sub: "Efficiency ratio",
                      fn: (t: typeof pricingTiers[0]) =>
                        `${unitEconomics[t.id as keyof typeof unitEconomics].ltvCacRatio}:1`,
                    },
                    {
                      label: "Payback",
                      sub: "Months to recover CAC",
                      fn: (t: typeof pricingTiers[0]) =>
                        `${unitEconomics[t.id as keyof typeof unitEconomics].paybackMonths} mo`,
                    },
                    {
                      label: "Gross Margin",
                      sub: "After COGS",
                      fn: (t: typeof pricingTiers[0]) =>
                        `${Math.round(unitEconomics[t.id as keyof typeof unitEconomics].grossMargin * 100)}%`,
                    },
                  ].map(({ label, sub, fn }) => (
                    <tr key={label} className="border-b border-[#1E1E2E] last:border-0 hover:bg-[#17171F]">
                      <td className="px-5 py-3.5">
                        <p className="text-sm text-[#EBEBF5]">{label}</p>
                        <p className="text-xs text-[#38385A] mt-0.5">{sub}</p>
                      </td>
                      {pricingTiers.map((tier) => (
                        <td key={tier.id} className="px-5 py-3.5">
                          <span className="text-sm font-mono font-semibold text-[#EBEBF5]">
                            {fn(tier)}
                          </span>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ─── 03: Charts ───────────────────────────────────── */}
        <section>
          <SectionHeader index="03" label="Analysis" title="Benchmarks &amp; Revenue Projection" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <ChartCard
              title="vs. Industry Benchmarks"
              subtitle="Inovient vs. AI SaaS industry average vs. best-in-class"
            >
              <ResponsiveContainer width="100%" height={280}>
                <BarChart
                  data={pricingBenchmarks}
                  margin={{ top: 4, right: 4, left: -10, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#1E1E2E" />
                  <XAxis
                    dataKey="metric"
                    tick={{ fill: "#38385A", fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fill: "#38385A", fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip contentStyle={ttStyle} />
                  <Bar dataKey="industry" name="Industry Avg" fill="#26263A" radius={[2, 2, 0, 0]} />
                  <Bar dataKey="inovient" name="Inovient" fill="#7C5CF6" radius={[2, 2, 0, 0]} />
                  <Bar dataKey="best" name="Best-in-Class" fill="#22D3A4" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
              <div className="flex items-center gap-5 mt-4">
                {[
                  { label: "Industry Avg", color: "#26263A" },
                  { label: "Inovient", color: "#7C5CF6" },
                  { label: "Best-in-Class", color: "#22D3A4" },
                ].map(({ label, color }) => (
                  <div key={label} className="flex items-center gap-1.5">
                    <div
                      className="w-2 h-2 rounded-full border border-[#38385A]"
                      style={{ backgroundColor: color }}
                    />
                    <span className="text-xs text-[#6A6A90]">{label}</span>
                  </div>
                ))}
              </div>
            </ChartCard>

            <ChartCard
              title="6-Year ARR Projection"
              subtitle="Revenue by tier ($K) with land-and-expand motion"
            >
              <ResponsiveContainer width="100%" height={280}>
                <AreaChart
                  data={revenueProjections}
                  margin={{ top: 4, right: 4, left: -10, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="eg2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#38BDF8" stopOpacity={0.14} />
                      <stop offset="95%" stopColor="#38BDF8" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="gg2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#7C5CF6" stopOpacity={0.14} />
                      <stop offset="95%" stopColor="#7C5CF6" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="sg2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#22D3A4" stopOpacity={0.1} />
                      <stop offset="95%" stopColor="#22D3A4" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1E1E2E" />
                  <XAxis
                    dataKey="year"
                    tick={{ fill: "#38385A", fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fill: "#38385A", fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip
                    contentStyle={ttStyle}
                    formatter={(v: number | undefined) => [`$${v}K`, ""]}
                  />
                  <Area
                    type="monotone"
                    dataKey="enterprise"
                    stackId="1"
                    stroke="#38BDF8"
                    fill="url(#eg2)"
                    strokeWidth={1.5}
                    name="Enterprise"
                  />
                  <Area
                    type="monotone"
                    dataKey="growth"
                    stackId="1"
                    stroke="#7C5CF6"
                    fill="url(#gg2)"
                    strokeWidth={1.5}
                    name="Growth"
                  />
                  <Area
                    type="monotone"
                    dataKey="starter"
                    stackId="1"
                    stroke="#22D3A4"
                    fill="url(#sg2)"
                    strokeWidth={1.5}
                    name="Starter"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>
        </section>

        {/* ─── 04: Pricing Rationale ────────────────────────── */}
        <section className="pb-16">
          <SectionHeader
            index="04"
            label="Strategy"
            title="Pricing Rationale &amp; GTM Recommendations"
          />
          <div className="space-y-0">
            {[
              {
                n: "01",
                title: "Value-Based Anchoring",
                desc: "Starter at $299/mo delivers ~$1,400/mo in value. Growth at $899/mo delivers ~$4,200/mo. Enterprise pricing is custom, tied to ROI modeling in the sales cycle.",
              },
              {
                n: "02",
                title: "Annual Discount",
                desc: "20% annual discount encourages upfront commitment and improves cash flow predictability. Critical for runway management at Seed stage.",
              },
              {
                n: "03",
                title: "Land and Expand",
                desc: "Start SMBs at Starter, target upgrade to Growth at 3 months. Enterprise pilots via Growth before full deployment. NRR target: 118%+.",
              },
              {
                n: "04",
                title: "Usage-Based Expansion",
                desc: "API call overages at $0.01/call above tier limits create natural expansion revenue as customers scale, no sales motion required.",
              },
              {
                n: "05",
                title: "Enterprise Pilots",
                desc: "90-day paid pilots at $4,999 flat reduce sales risk for Fortune 500 buyers. Pilot-to-contract conversion: 25–40%.",
              },
              {
                n: "06",
                title: "Agency Channel",
                desc: "50% white-label margin creates scalable distribution without headcount. Target: 30% of total ARR through channel by 2027.",
              },
            ].map(({ n, title, desc }) => (
              <div key={n} className="flex gap-6 py-5 border-b border-[#1E1E2E] last:border-0">
                <span className="text-[10px] font-mono text-[#38385A] flex-shrink-0 mt-0.5 w-5">{n}</span>
                <div>
                  <h3 className="text-sm font-semibold text-[#EBEBF5] mb-1">{title}</h3>
                  <p className="text-sm text-[#6A6A90] leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
