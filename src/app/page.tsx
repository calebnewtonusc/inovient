"use client";

import Link from "next/link";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import { ChartCard } from "@/components/ui/ChartCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { marketGrowthData, keyInsights } from "@/data/marketData";
import { revenueProjections } from "@/data/pricingData";
import { competitors } from "@/data/competitorData";

const revenueData = revenueProjections.slice(0, 5);

const miniMarketData = marketGrowthData.map((d) => ({
  year: d.year,
  SAM: d.sam,
  SOM: d.som * 10,
}));

const ttStyle = {
  background: "#13131C",
  border: "1px solid #26263A",
  borderRadius: "4px",
  color: "#EBEBF5",
  fontSize: "12px",
  padding: "8px 12px",
};

const roadmapItems = [
  {
    quarter: "Q1 2026",
    milestone: "Growth tier launch — 50 pilot accounts activated",
    note: "In progress",
    active: true,
  },
  {
    quarter: "Q2 2026",
    milestone: "Enterprise pilots with 5 Fortune 500 marketing teams",
    note: null,
    active: false,
  },
  {
    quarter: "Q3 2026",
    milestone: "API marketplace + agency white-label program launch",
    note: null,
    active: false,
  },
  {
    quarter: "Q4 2026",
    milestone: "Series A targeting $15M at $60M valuation",
    note: null,
    active: false,
  },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen">
      {/* ─── Hero ─────────────────────────────────────────── */}
      <div className="border-b border-[#26263A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <p className="text-[10px] font-mono text-[#38385A] uppercase tracking-[0.25em] mb-10">
            Confidential · Q1 2026 · Morpheus AI
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-end">
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#EBEBF5] tracking-tight leading-[0.92] mb-6">
                Pricing &amp;<br />
                Market Strategy
              </h1>
              <p className="text-[#6A6A90] text-base leading-relaxed max-w-md">
                Comprehensive market analysis, competitive positioning, and ROI modeling
                for Inovient&apos;s Morpheus AI platform — the only end-to-end AI marketing
                intelligence solution at mid-market pricing.
              </p>
            </div>

            {/* Hero stats — no icons, no colored containers */}
            <div className="grid grid-cols-2 gap-x-10 gap-y-7 lg:gap-x-12">
              {[
                { label: "SAM 2025", value: "$185B" },
                { label: "AI CAGR", value: "31.4%" },
                { label: "Gross Margin", value: "78%" },
                { label: "LTV : CAC", value: "16:1" },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="text-3xl sm:text-4xl font-black font-mono text-[#EBEBF5] tracking-tight leading-none">
                    {value}
                  </p>
                  <p className="text-[10px] font-mono text-[#38385A] uppercase tracking-[0.15em] mt-2">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section links */}
          <div className="mt-12 pt-8 border-t border-[#26263A]">
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {[
                { href: "/market-research", label: "01 / Market Research" },
                { href: "/competitor-analysis", label: "02 / Competitors" },
                { href: "/roi-modeling", label: "03 / ROI Modeling" },
                { href: "/pricing-strategy", label: "04 / Pricing Strategy" },
                { href: "/product-positioning", label: "05 / Positioning" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-xs font-mono text-[#38385A] hover:text-[#7C5CF6] transition-colors"
                >
                  {label} →
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-20">
        {/* ─── 01: Revenue ──────────────────────────────────── */}
        <section>
          <SectionHeader index="01" label="Financial Forecast" title="Revenue Trajectory" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <ChartCard
              title="5-Year ARR Projection"
              subtitle="Revenue by tier ($K) — land-and-expand model"
            >
              <ResponsiveContainer width="100%" height={260}>
                <AreaChart
                  data={revenueData}
                  margin={{ top: 4, right: 4, left: -16, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="entGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#38BDF8" stopOpacity={0.18} />
                      <stop offset="95%" stopColor="#38BDF8" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="growGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#7C5CF6" stopOpacity={0.18} />
                      <stop offset="95%" stopColor="#7C5CF6" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="startGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#22D3A4" stopOpacity={0.14} />
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
                    fill="url(#entGrad)"
                    strokeWidth={1.5}
                    name="Enterprise"
                  />
                  <Area
                    type="monotone"
                    dataKey="growth"
                    stackId="1"
                    stroke="#7C5CF6"
                    fill="url(#growGrad)"
                    strokeWidth={1.5}
                    name="Growth"
                  />
                  <Area
                    type="monotone"
                    dataKey="starter"
                    stackId="1"
                    stroke="#22D3A4"
                    fill="url(#startGrad)"
                    strokeWidth={1.5}
                    name="Starter"
                  />
                </AreaChart>
              </ResponsiveContainer>
              <div className="flex items-center gap-5 mt-4">
                {[
                  { label: "Enterprise", color: "#38BDF8" },
                  { label: "Growth", color: "#7C5CF6" },
                  { label: "Starter", color: "#22D3A4" },
                ].map(({ label, color }) => (
                  <div key={label} className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
                    <span className="text-xs text-[#6A6A90]">{label}</span>
                  </div>
                ))}
              </div>
            </ChartCard>

            <ChartCard
              title="Market Size Expansion"
              subtitle="SAM ($B) and SOM ($100M) 2022–2027P"
            >
              <ResponsiveContainer width="100%" height={260}>
                <BarChart
                  data={miniMarketData.slice(0, 6)}
                  margin={{ top: 4, right: 4, left: -16, bottom: 0 }}
                >
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
                  <Tooltip contentStyle={ttStyle} />
                  <Bar dataKey="SAM" fill="#7C5CF6" radius={[3, 3, 0, 0]} name="SAM ($B)" />
                  <Bar dataKey="SOM" fill="#22D3A4" radius={[3, 3, 0, 0]} name="SOM ($100M)" />
                </BarChart>
              </ResponsiveContainer>
              <div className="flex items-center gap-5 mt-4">
                {[
                  { label: "SAM ($B)", color: "#7C5CF6" },
                  { label: "SOM ($100M)", color: "#22D3A4" },
                ].map(({ label, color }) => (
                  <div key={label} className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
                    <span className="text-xs text-[#6A6A90]">{label}</span>
                  </div>
                ))}
              </div>
            </ChartCard>
          </div>
        </section>

        {/* ─── 02: Key Insights ─────────────────────────────── */}
        <section>
          <SectionHeader index="02" label="Strategic Findings" title="Four Core Findings" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#26263A] rounded-md overflow-hidden">
            {[
              {
                num: "A",
                title: "Market Opportunity",
                body: "$185B SAM growing at 31.4% CAGR — Morpheus targets a $4.2B serviceable segment with a clear path to $24B by 2030. Mid-market is deeply underserved.",
              },
              {
                num: "B",
                title: "Competitive Advantage",
                body: "The only platform combining NPS benchmarking, media mix modeling, and strategy AI in one workflow. Market Logic covers strategy but costs $50K+/yr. Cascade has no NPS. Sprinklr has no budget AI.",
              },
              {
                num: "C",
                title: "Pricing Architecture",
                body: "3-tier value-based model ($299–$2,499/mo) anchored to ROI multiples of 4–15x. 78% gross margins, 16:1 LTV:CAC on Growth tier, payback under 3 months.",
              },
              {
                num: "D",
                title: "Revenue Path",
                body: "$3.4M ARR by end of 2026, $17.7M by 2028 via enterprise pilots and agency channel. Land-and-expand motion drives 118%+ NRR with minimal additional sales cost.",
              },
            ].map(({ num, title, body }) => (
              <div key={num} className="bg-[#13131C] p-7 hover:bg-[#15151E] transition-colors">
                <div className="flex items-start gap-4">
                  <span className="text-[10px] font-mono text-[#38385A] mt-0.5 flex-shrink-0">
                    {num}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-[#EBEBF5] mb-2">{title}</h3>
                    <p className="text-sm text-[#6A6A90] leading-relaxed">{body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── 03: Market Signals ───────────────────────────── */}
        <section>
          <SectionHeader index="03" label="Market Intelligence" title="Key Market Signals" />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {keyInsights.map((insight) => (
              <div key={insight.id} className="card p-5">
                <p className="text-3xl font-black font-mono text-[#EBEBF5] tracking-tight leading-none mb-3">
                  {insight.stat}
                </p>
                <p className="text-xs font-medium text-[#EBEBF5] mb-1.5">{insight.label}</p>
                <p className="text-xs text-[#38385A] leading-relaxed">{insight.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── 04: Competitive Snapshot ─────────────────────── */}
        <section>
          <SectionHeader
            index="04"
            label="Competitive Landscape"
            title="Morpheus vs. The Market"
            description="Morpheus occupies defensible white space: enterprise-grade AI depth at mid-market pricing. No competitor fully replicates the NPS + media mix + strategy combination."
          />
          <div className="card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#26263A]">
                    {["Company", "ARR", "Pricing", "NPS Analytics", "Media Mix", "Strategy AI"].map(
                      (h, i) => (
                        <th
                          key={h}
                          className={`text-left px-5 py-3.5 text-[10px] font-mono uppercase tracking-[0.12em] text-[#38385A] ${
                            i >= 2 ? "hidden sm:table-cell" : ""
                          } ${i >= 3 ? "hidden md:table-cell" : ""}`}
                        >
                          {h}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody>
                  {competitors.slice(0, 5).map((comp) => (
                    <tr
                      key={comp.id}
                      className={`border-b border-[#1E1E2E] last:border-0 transition-colors hover:bg-[#17171F] ${
                        comp.id === "inovient" ? "bg-[#17171F]" : ""
                      }`}
                    >
                      <td className="px-5 py-3.5">
                        <div className="flex items-center gap-2.5">
                          <div
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ backgroundColor: comp.color }}
                          />
                          <span
                            className={`font-medium ${
                              comp.id === "inovient"
                                ? "text-[#7C5CF6]"
                                : "text-[#EBEBF5]"
                            }`}
                          >
                            {comp.id === "inovient" ? "Morpheus ★" : comp.name}
                          </span>
                        </div>
                      </td>
                      <td className="px-5 py-3.5 text-[#6A6A90] font-mono text-xs">
                        {comp.arr}
                      </td>
                      <td className="px-5 py-3.5 text-[#6A6A90] text-xs hidden sm:table-cell">
                        {comp.pricing}
                      </td>
                      {(["npsAnalytics", "mediaMix", "strategyDepth"] as const).map(
                        (metric, mi) => (
                          <td
                            key={metric}
                            className={`px-5 py-3.5 hidden md:table-cell ${
                              mi === 2 ? "hidden lg:table-cell" : ""
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <div className="w-14 h-1 bg-[#1E1E2E] rounded-full overflow-hidden">
                                <div
                                  className="h-full rounded-full"
                                  style={{
                                    width: `${comp.radarScores[metric]}%`,
                                    backgroundColor: comp.color,
                                  }}
                                />
                              </div>
                              <span className="text-xs font-mono text-[#6A6A90]">
                                {comp.radarScores[metric]}
                              </span>
                            </div>
                          </td>
                        )
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-5 py-3 border-t border-[#26263A] flex items-center justify-between">
              <p className="text-[10px] font-mono text-[#38385A]">
                Top 5 competitors · Scores out of 100
              </p>
              <Link
                href="/competitor-analysis"
                className="text-xs font-mono text-[#38385A] hover:text-[#7C5CF6] transition-colors"
              >
                Full analysis →
              </Link>
            </div>
          </div>
        </section>

        {/* ─── 05: Roadmap ──────────────────────────────────── */}
        <section className="pb-16">
          <SectionHeader index="05" label="Go-To-Market" title="2026 Strategic Roadmap" />
          <div className="space-y-0">
            {roadmapItems.map(({ quarter, milestone, note, active }, i) => (
              <div
                key={quarter}
                className={`flex gap-6 py-5 border-b border-[#1E1E2E] last:border-0 ${
                  active ? "" : "opacity-60"
                }`}
              >
                <div className="flex-shrink-0 w-20">
                  <p
                    className={`text-[10px] font-mono uppercase tracking-[0.12em] ${
                      active ? "text-[#22D3A4]" : "text-[#38385A]"
                    }`}
                  >
                    {quarter}
                  </p>
                  {note && (
                    <p className="text-[9px] font-mono text-[#22D3A4] mt-1 uppercase tracking-wider">
                      {note}
                    </p>
                  )}
                </div>
                <div className="flex items-start gap-3 flex-1">
                  <div
                    className={`w-px self-stretch mt-1.5 flex-shrink-0 ${
                      active ? "bg-[#7C5CF6]" : "bg-[#26263A]"
                    }`}
                    style={{ minHeight: "1rem" }}
                  />
                  <p className="text-sm text-[#EBEBF5]">{milestone}</p>
                </div>
                <div className="hidden sm:block flex-shrink-0 w-6 text-right">
                  <span className="text-[10px] font-mono text-[#38385A]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
