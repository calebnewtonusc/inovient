"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Legend,
} from "recharts";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ChartCard } from "@/components/ui/ChartCard";
import {
  marketSizeData,
  marketGrowthData,
  segmentData,
  adoptionTrendsData,
  keyInsights,
} from "@/data/marketData";
import { formatCurrency } from "@/lib/utils";

const ttStyle = {
  background: "#13131C",
  border: "1px solid #26263A",
  borderRadius: "4px",
  color: "#EBEBF5",
  fontSize: "12px",
  padding: "8px 12px",
};

export default function MarketResearchPage() {
  return (
    <div className="min-h-screen">
      {/* Page header */}
      <div className="border-b border-[#26263A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <SectionHeader
            label="Market Research"
            title="Global AI Marketing SaaS Market"
            description="TAM/SAM/SOM analysis based on Grand View Research AI in Marketing Report (2024), McKinsey State of AI Survey (2024), and Salesforce State of Marketing 8th Edition (2024)."
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
        {/* ─── 01: Market sizing ────────────────────────────── */}
        <section>
          <SectionHeader index="01" label="Market Sizing" title="TAM · SAM · SOM" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#26263A] rounded-md overflow-hidden mb-8">
            {Object.values(marketSizeData).map((market) => (
              <div key={market.abbr} className="bg-[#13131C] p-8 hover:bg-[#15151E] transition-colors">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-mono text-[#38385A] uppercase tracking-[0.15em]">
                    {market.abbr}
                  </span>
                  <span className="text-[10px] font-mono text-[#22D3A4]">
                    {market.cagr}% CAGR
                  </span>
                </div>
                <p className="text-4xl font-black font-mono text-[#EBEBF5] tracking-tight leading-none mb-1">
                  {formatCurrency(market.value, true)}
                </p>
                <p className="text-xs text-[#6A6A90] mb-6">{market.label}</p>
                <div className="pt-4 border-t border-[#26263A]">
                  <p className="text-[10px] font-mono text-[#38385A] mb-1">2030</p>
                  <p className="text-xl font-black font-mono text-[#22D3A4]">
                    {formatCurrency(market.year2030, true)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Market funnel */}
          <div className="card p-6">
            <h3 className="text-sm font-semibold text-[#EBEBF5] mb-6">
              Market Funnel: Inovient&apos;s Addressable Layer
            </h3>
            <div className="space-y-2 max-w-2xl">
              {[
                {
                  label: "TAM: Global Marketing Technology",
                  value: "$491B",
                  indent: 0,
                  active: false,
                },
                {
                  label: "SAM: AI-Powered Marketing Platforms",
                  value: "$64.6B",
                  indent: 1,
                  active: false,
                },
                {
                  label: "SOM: AI Marketing Analytics, CI & MMM (Mid-Market)",
                  value: "$6.6B",
                  indent: 2,
                  active: true,
                },
                {
                  label: "Year 1 Target: Morpheus Core Market",
                  value: "$42M",
                  indent: 3,
                  active: true,
                },
              ].map(({ label, value, indent, active }) => (
                <div
                  key={label}
                  className="flex items-center justify-between py-3 px-4 rounded"
                  style={{
                    marginLeft: `${indent * 24}px`,
                    background: active ? "rgba(124, 92, 246, 0.08)" : "#1A1A24",
                    border: `1px solid ${active ? "rgba(124, 92, 246, 0.25)" : "#26263A"}`,
                  }}
                >
                  <span className="text-sm text-[#EBEBF5]">{label}</span>
                  <span
                    className={`text-sm font-bold font-mono flex-shrink-0 ml-4 ${
                      active ? "text-[#22D3A4]" : "text-[#6A6A90]"
                    }`}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 02: Charts ───────────────────────────────────── */}
        <section>
          <SectionHeader index="02" label="Growth Trends" title="Market Size Over Time" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <ChartCard title="SAM and SOM Growth" subtitle="SAM ($B) and SOM ($B) 2022–2030P">
              <ResponsiveContainer width="100%" height={280}>
                <AreaChart
                  data={marketGrowthData}
                  margin={{ top: 4, right: 4, left: -10, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="samG" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#22D3A4" stopOpacity={0.15} />
                      <stop offset="95%" stopColor="#22D3A4" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="somG" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#22D3A4" stopOpacity={0.15} />
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
                    formatter={(v: number | string | undefined) => [`$${v}B`, ""]}
                  />
                  <Area
                    type="monotone"
                    dataKey="sam"
                    stroke="#22D3A4"
                    fill="url(#samG)"
                    strokeWidth={1.5}
                    name="SAM"
                  />
                  <Area
                    type="monotone"
                    dataKey="som"
                    stroke="#22D3A4"
                    fill="url(#somG)"
                    strokeWidth={1.5}
                    name="SOM"
                  />
                </AreaChart>
              </ResponsiveContainer>
              <div className="flex items-center gap-5 mt-4">
                {[
                  { label: "SAM ($B)", color: "#22D3A4" },
                  { label: "SOM ($B)", color: "#22D3A4" },
                ].map(({ label, color }) => (
                  <div key={label} className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
                    <span className="text-xs text-[#6A6A90]">{label}</span>
                  </div>
                ))}
              </div>
            </ChartCard>

            <ChartCard
              title="Customer Segment Distribution"
              subtitle="Addressable customers by company size, 2025"
            >
              <div className="flex items-center justify-center">
                <ResponsiveContainer width="100%" height={240}>
                  <PieChart>
                    <Pie
                      data={segmentData}
                      cx="50%"
                      cy="50%"
                      innerRadius={65}
                      outerRadius={105}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {segmentData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={ttStyle}
                      formatter={(v: number | undefined) => [`${v}%`, ""]}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {segmentData.map((seg) => (
                  <div key={seg.name} className="flex items-center gap-2">
                    <div
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: seg.color }}
                    />
                    <span className="text-xs text-[#6A6A90]">
                      {seg.name}: {seg.value}%
                    </span>
                  </div>
                ))}
              </div>
            </ChartCard>
          </div>
        </section>

        {/* ─── 03: Adoption curve ───────────────────────────── */}
        <section>
          <SectionHeader index="03" label="Adoption Trends" title="AI Marketing Adoption Curve" />
          <ChartCard
            title="Tool Adoption vs. Budget Allocation"
            subtitle="% using AI tools vs. % of budget allocated to AI, Jan 2025 to Jan 2026"
          >
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={adoptionTrendsData}
                margin={{ top: 4, right: 20, left: -10, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#1E1E2E" />
                <XAxis
                  dataKey="month"
                  tick={{ fill: "#38385A", fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fill: "#38385A", fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(v) => `${v}%`}
                />
                <Tooltip
                  contentStyle={ttStyle}
                  formatter={(v: number | undefined) => [`${v}%`, ""]}
                />
                <Legend
                  wrapperStyle={{ fontSize: "11px", color: "#6A6A90", paddingTop: "16px" }}
                />
                <Line
                  type="monotone"
                  dataKey="aiMarketingAdoption"
                  stroke="#22D3A4"
                  strokeWidth={2}
                  dot={{ fill: "#22D3A4", r: 3 }}
                  name="AI Tool Adoption %"
                />
                <Line
                  type="monotone"
                  dataKey="marketingBudgetAI"
                  stroke="#22D3A4"
                  strokeWidth={2}
                  dot={{ fill: "#22D3A4", r: 3 }}
                  name="Budget Allocated to AI %"
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>
        </section>

        {/* ─── 04: Key Insights ─────────────────────────────── */}
        <section className="pb-16">
          <SectionHeader index="04" label="Analyst Insights" title="Strategic Market Findings" />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {keyInsights.map((insight) => (
              <div key={insight.id} className="card p-7">
                <p className="text-4xl font-black font-mono text-[#EBEBF5] tracking-tight leading-none mb-3">
                  {insight.stat}
                </p>
                <p className="text-sm text-[#6A6A90] leading-snug mb-3">{insight.label}</p>
                <p className="text-[10px] font-mono text-[#38385A]">{insight.source}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
