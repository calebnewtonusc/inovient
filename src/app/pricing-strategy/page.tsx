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
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
} from "recharts";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ChartCard } from "@/components/ui/ChartCard";
import { pricingTiers, revenueProjections, unitEconomics, pricingBenchmarks } from "@/data/pricingData";
import { formatCurrency } from "@/lib/utils";
import { Check, DollarSign, TrendingUp, Zap, Star } from "lucide-react";

export default function PricingStrategyPage() {
  return (
    <div className="min-h-screen">
      <div className="border-b border-white/5 bg-gradient-to-r from-sky-950/30 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <SectionHeader
            eyebrow="Pricing Strategy"
            title="Sustainable Pricing Framework"
            description="Value-based pricing model designed to maximize NRR, LTV:CAC efficiency, and sustainable ARR growth — benchmarked against top AI SaaS companies."
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Pricing Tiers */}
        <section>
          <SectionHeader eyebrow="Pricing Tiers" title="3-Tier Pricing Architecture" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingTiers.map((tier) => (
              <div
                key={tier.id}
                className={`glass-card p-6 flex flex-col transition-all duration-300 hover:border-white/15 relative ${
                  tier.recommended ? "ring-1 ring-indigo-500/50 scale-[1.02]" : ""
                }`}
              >
                {tier.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-1.5 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      <Star className="w-3 h-3" fill="currentColor" />
                      Recommended
                    </div>
                  </div>
                )}

                {/* Header */}
                <div className="mb-6">
                  <div className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full mb-3`}
                    style={{ backgroundColor: `${tier.color}15`, color: tier.color, border: `1px solid ${tier.color}30` }}>
                    <Zap className="w-3 h-3" />
                    {tier.name}
                  </div>
                  <p className="text-sm text-gray-400 mb-4">{tier.subtitle}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-white">
                      {formatCurrency(tier.monthlyPrice)}
                    </span>
                    <span className="text-gray-500 text-sm">/mo</span>
                  </div>
                  <p className="text-xs text-emerald-400 mt-1">
                    {formatCurrency(tier.annualPrice)}/mo billed annually (save{" "}
                    {Math.round((1 - tier.annualPrice / tier.monthlyPrice) * 100)}%)
                  </p>
                  <p className="text-xs text-gray-500 mt-2">{tier.targetSegment}</p>
                </div>

                {/* Features */}
                <div className="flex-1 space-y-2 mb-6">
                  {tier.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2.5">
                      <Check className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-gray-300">{feature}</span>
                    </div>
                  ))}
                  {tier.limitations.map((limitation) => (
                    <div key={limitation} className="flex items-start gap-2.5 opacity-50">
                      <div className="w-3.5 h-0.5 bg-gray-600 mt-2 flex-shrink-0" />
                      <span className="text-xs text-gray-500">{limitation}</span>
                    </div>
                  ))}
                </div>

                {/* Metrics */}
                <div className="bg-white/3 rounded-xl p-4 space-y-2">
                  {[
                    { label: "Target ARR", value: tier.metrics.targetARR },
                    { label: "Avg Deal Cycle", value: tier.metrics.avgDealCycle },
                    { label: "Trial Conversion", value: tier.metrics.expectedConversion },
                    { label: "Annual Churn", value: tier.metrics.churnRate },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{label}</span>
                      <span className="text-xs font-semibold text-gray-200">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Unit Economics */}
        <section>
          <SectionHeader
            eyebrow="Unit Economics"
            title="LTV, CAC & Payback Analysis"
            description="Detailed unit economic benchmarks per tier — all metrics exceed top-quartile SaaS benchmarks."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {(["starter", "growth", "enterprise"] as const).map((tier) => {
              const econ = unitEconomics[tier];
              const tierInfo = pricingTiers.find((t) => t.id === tier)!;
              return (
                <div key={tier} className="glass-card p-6 hover:border-white/10 transition-all">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: tierInfo.color }} />
                    <span className="text-sm font-semibold text-white capitalize">{tier}</span>
                  </div>
                  <div className="space-y-3">
                    {[
                      { label: "CAC", value: formatCurrency(econ.cac), sub: "Customer acq. cost" },
                      { label: "LTV", value: formatCurrency(econ.ltv, true), sub: "Lifetime value" },
                      { label: "LTV:CAC", value: `${econ.ltvCacRatio}:1`, sub: "Efficiency ratio" },
                      { label: "Payback", value: `${econ.paybackMonths} mo`, sub: "CAC recovery" },
                      { label: "Gross Margin", value: `${Math.round(econ.grossMargin * 100)}%`, sub: "After COGS" },
                    ].map(({ label, value, sub }) => (
                      <div key={label} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                        <div>
                          <p className="text-xs text-gray-400">{label}</p>
                          <p className="text-[10px] text-gray-600">{sub}</p>
                        </div>
                        <span className="text-sm font-bold text-white">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Benchmarks & Revenue Projection */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard
              title="Performance vs. Industry Benchmarks"
              subtitle="Inovient vs. AI SaaS industry average vs. best-in-class"
              badge="Benchmarked"
            >
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={pricingBenchmarks} margin={{ top: 4, right: 4, left: -10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
                  <XAxis dataKey="metric" tick={{ fill: "#6b7280", fontSize: 11 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: "#6b7280", fontSize: 11 }} axisLine={false} tickLine={false} />
                  <Tooltip
                    contentStyle={{ background: "#1a1a2e", border: "1px solid #2d2d4d", borderRadius: "8px", color: "#f0f0f8", fontSize: "12px" }}
                  />
                  <Bar dataKey="industry" name="Industry Avg" fill="#374151" radius={[3, 3, 0, 0]} />
                  <Bar dataKey="inovient" name="Inovient" fill="#6366f1" radius={[3, 3, 0, 0]} />
                  <Bar dataKey="best" name="Best-in-Class" fill="#10b981" radius={[3, 3, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
              <div className="flex items-center gap-4 mt-3 justify-end">
                {[
                  { label: "Industry Avg", color: "#374151" },
                  { label: "Inovient", color: "#6366f1" },
                  { label: "Best-in-Class", color: "#10b981" },
                ].map(({ label, color }) => (
                  <div key={label} className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: color }} />
                    <span className="text-xs text-gray-400">{label}</span>
                  </div>
                ))}
              </div>
            </ChartCard>

            <ChartCard
              title="5-Year ARR Projection"
              subtitle="Revenue growth by tier ($K) with land-and-expand motion"
              badge="Forecast"
            >
              <ResponsiveContainer width="100%" height={280}>
                <AreaChart data={revenueProjections} margin={{ top: 4, right: 4, left: -10, bottom: 0 }}>
                  <defs>
                    <linearGradient id="entGrad2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="growGrad2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366f1" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="startGrad2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#a78bfa" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#a78bfa" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
                  <XAxis dataKey="year" tick={{ fill: "#6b7280", fontSize: 11 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: "#6b7280", fontSize: 11 }} axisLine={false} tickLine={false} />
                  <Tooltip
                    contentStyle={{ background: "#1a1a2e", border: "1px solid #2d2d4d", borderRadius: "8px", color: "#f0f0f8", fontSize: "12px" }}
                    formatter={(v: number | undefined) => [`$${v}K`, ""]}
                  />
                  <Area type="monotone" dataKey="enterprise" stackId="1" stroke="#0ea5e9" fill="url(#entGrad2)" strokeWidth={2} name="Enterprise" />
                  <Area type="monotone" dataKey="growth" stackId="1" stroke="#6366f1" fill="url(#growGrad2)" strokeWidth={2} name="Growth" />
                  <Area type="monotone" dataKey="starter" stackId="1" stroke="#a78bfa" fill="url(#startGrad2)" strokeWidth={2} name="Starter" />
                </AreaChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>
        </section>

        {/* Strategic Pricing Rationale */}
        <section className="pb-16">
          <SectionHeader eyebrow="Strategy" title="Pricing Rationale &amp; GTM Recommendations" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Value-Based Anchoring",
                desc: "Price to ROI: Starter ($299/mo) delivers ~$1,400/mo in value (4.7x). Growth ($899/mo) delivers ~$4,200/mo (4.7x). Enterprise is outcome-based.",
                icon: DollarSign,
                color: "text-indigo-400",
                bg: "bg-indigo-500/10",
              },
              {
                title: "Annual Discount Strategy",
                desc: "20% annual discount encourages commitment, reduces churn risk, and improves cash flow predictability — critical for runway management at Seed stage.",
                icon: TrendingUp,
                color: "text-emerald-400",
                bg: "bg-emerald-500/10",
              },
              {
                title: "Land & Expand Motion",
                desc: "Start SMBs at Starter ($299/mo), target upgrade to Growth at 3 months. Enterprise pilots at Growth before full deployment — proven NRR > 118%.",
                icon: Zap,
                color: "text-sky-400",
                bg: "bg-sky-500/10",
              },
              {
                title: "Usage-Based Expansion",
                desc: "API call overages at $0.01/call above tier limits create natural expansion revenue as customers scale — no friction upgrade path.",
                icon: TrendingUp,
                color: "text-purple-400",
                bg: "bg-purple-500/10",
              },
              {
                title: "Enterprise Pilots",
                desc: "90-day paid pilots at $4,999 flat — reduces sales risk for Fortune 500 buyers while validating Morpheus ROI before full contract commitment.",
                icon: DollarSign,
                color: "text-amber-400",
                bg: "bg-amber-500/10",
              },
              {
                title: "Agency Channel",
                desc: "50% agency margin for white-label resellers creates scalable distribution without direct sales headcount — targeting 30% of ARR through channel by 2027.",
                icon: Zap,
                color: "text-rose-400",
                bg: "bg-rose-500/10",
              },
            ].map(({ title, desc, icon: Icon, color, bg }) => (
              <div key={title} className="glass-card p-5 hover:border-white/10 transition-all">
                <div className={`inline-flex p-2 rounded-lg ${bg} mb-3`}>
                  <Icon className={`w-4 h-4 ${color}`} />
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">{title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
