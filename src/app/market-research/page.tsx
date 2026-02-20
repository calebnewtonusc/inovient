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
import { MetricCard } from "@/components/ui/MetricCard";
import {
  marketSizeData,
  marketGrowthData,
  segmentData,
  adoptionTrendsData,
  keyInsights,
} from "@/data/marketData";
import { formatCurrency } from "@/lib/utils";
import { Globe, TrendingUp, Users, Zap, ArrowUpRight } from "lucide-react";

const RADIAN = Math.PI / 180;

export default function MarketResearchPage() {
  return (
    <div className="min-h-screen">
      <div className="border-b border-white/5 bg-gradient-to-r from-indigo-950/30 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <SectionHeader
            eyebrow="Market Research"
            title="Global AI Marketing SaaS Market"
            description="Deep market sizing analysis using TAM/SAM/SOM framework — benchmarked against Gartner, IDC, and Forrester projections for AI-powered marketing platforms through 2030."
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* TAM SAM SOM */}
        <section>
          <SectionHeader eyebrow="Market Sizing" title="TAM · SAM · SOM Analysis" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {Object.values(marketSizeData).map((market) => (
              <div
                key={market.abbr}
                className="glass-card p-6 hover:border-white/10 transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-xs font-bold text-indigo-400 uppercase tracking-[0.2em]">
                      {market.abbr}
                    </span>
                    <p className="text-xs text-gray-500 mt-0.5">{market.label}</p>
                  </div>
                  <div className="flex items-center gap-1 text-emerald-400 text-xs font-semibold bg-emerald-500/10 px-2 py-1 rounded-full">
                    <ArrowUpRight className="w-3 h-3" />
                    {market.cagr}% CAGR
                  </div>
                </div>
                <p className="text-3xl font-bold text-white mb-1">
                  {formatCurrency(market.value, true)}
                </p>
                <p className="text-sm text-gray-400 mb-4">{market.description}</p>
                <div className="bg-white/3 rounded-lg p-3">
                  <p className="text-xs text-gray-500 mb-0.5">2030 Projection</p>
                  <p className="text-lg font-bold gradient-text">
                    {formatCurrency(market.year2030, true)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Funnel visualization */}
          <div className="glass-card p-6">
            <h3 className="text-sm font-semibold text-white mb-6">Market Funnel — Inovient&apos;s Addressable Layer</h3>
            <div className="space-y-3 max-w-2xl mx-auto">
              {[
                { label: "TAM — Global Marketing Technology", value: "$1.42T", width: "100%", color: "bg-indigo-500/20 border-indigo-500/30" },
                { label: "SAM — AI-Powered Marketing Platforms", value: "$185B", width: "70%", color: "bg-indigo-500/30 border-indigo-500/40" },
                { label: "SOM — AI Strategy + NPS + Media Mix Tools", value: "$4.2B", width: "40%", color: "bg-indigo-500 border-indigo-400" },
                { label: "Year 1 Target — Morpheus Core Market", value: "$42M", width: "20%", color: "bg-indigo-600 border-indigo-300" },
              ].map(({ label, value, width, color }, i) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-full" style={{ paddingLeft: `${i * 8}%`, paddingRight: `${i * 8}%` }}>
                    <div className={`border rounded-lg px-4 py-3 flex items-center justify-between transition-all ${color}`}>
                      <span className="text-sm text-gray-200">{label}</span>
                      <span className="text-sm font-bold text-white ml-4 flex-shrink-0">{value}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key metrics */}
        <section>
          <SectionHeader eyebrow="Market Intelligence" title="Key Market Signals" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <MetricCard
              title="TAM (2025)"
              value="$1.42T"
              subtitle="Global marketing technology"
              change={13}
              changeLabel="13.1% CAGR"
              icon={<Globe className="w-5 h-5" />}
              color="indigo"
            />
            <MetricCard
              title="SAM CAGR"
              value="31.4%"
              subtitle="AI marketing platforms"
              change={31}
              changeLabel="Fastest growing martech segment"
              icon={<TrendingUp className="w-5 h-5" />}
              color="emerald"
            />
            <MetricCard
              title="AI Adoption Rate"
              value="74%"
              subtitle="Marketers using AI tools"
              change={95}
              changeLabel="Up from 38% in Jan 2025"
              icon={<Zap className="w-5 h-5" />}
              color="purple"
            />
            <MetricCard
              title="Budget Shift to AI"
              value="36%"
              subtitle="Of marketing budgets now AI"
              change={200}
              changeLabel="Up from 12% Jan 2025"
              icon={<Users className="w-5 h-5" />}
              color="sky"
            />
          </div>
        </section>

        {/* Charts */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard
              title="Market Size Over Time"
              subtitle="SAM ($B) and SOM ($B) growth through 2030"
              badge="8-Year Forecast"
            >
              <ResponsiveContainer width="100%" height={280}>
                <AreaChart data={marketGrowthData} margin={{ top: 4, right: 4, left: -10, bottom: 0 }}>
                  <defs>
                    <linearGradient id="samGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="somGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
                  <XAxis dataKey="year" tick={{ fill: "#6b7280", fontSize: 11 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: "#6b7280", fontSize: 11 }} axisLine={false} tickLine={false} />
                  <Tooltip
                    contentStyle={{ background: "#1a1a2e", border: "1px solid #2d2d4d", borderRadius: "8px", color: "#f0f0f8", fontSize: "12px" }}
                    formatter={(v: number | string | undefined) => [`$${v}B`, ""]}
                  />
                  <Area type="monotone" dataKey="sam" stroke="#6366f1" fill="url(#samGradient)" strokeWidth={2} name="SAM" />
                  <Area type="monotone" dataKey="som" stroke="#0ea5e9" fill="url(#somGradient)" strokeWidth={2} name="SOM" />
                </AreaChart>
              </ResponsiveContainer>
            </ChartCard>

            <ChartCard
              title="Customer Segment Distribution"
              subtitle="Addressable customers by company size"
              badge="2025 Data"
            >
              <div className="flex items-center justify-center">
                <ResponsiveContainer width="100%" height={280}>
                  <PieChart>
                    <Pie
                      data={segmentData}
                      cx="50%"
                      cy="50%"
                      innerRadius={70}
                      outerRadius={110}
                      paddingAngle={3}
                      dataKey="value"
                    >
                      {segmentData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{ background: "#1a1a2e", border: "1px solid #2d2d4d", borderRadius: "8px", color: "#f0f0f8", fontSize: "12px" }}
                      formatter={(v: number | undefined) => [`${v}%`, ""]}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {segmentData.map((seg) => (
                  <div key={seg.name} className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: seg.color }} />
                    <span className="text-xs text-gray-400">{seg.name} — {seg.value}%</span>
                  </div>
                ))}
              </div>
            </ChartCard>
          </div>
        </section>

        {/* Adoption Trends */}
        <section>
          <ChartCard
            title="AI Marketing Adoption Curve"
            subtitle="% of marketers using AI tools vs. % of budget allocated to AI (Jan 2025 — Jan 2026)"
            badge="Trend Data"
          >
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={adoptionTrendsData} margin={{ top: 4, right: 20, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
                <XAxis dataKey="month" tick={{ fill: "#6b7280", fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: "#6b7280", fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}%`} />
                <Tooltip
                  contentStyle={{ background: "#1a1a2e", border: "1px solid #2d2d4d", borderRadius: "8px", color: "#f0f0f8", fontSize: "12px" }}
                  formatter={(v: number | undefined) => [`${v}%`, ""]}
                />
                <Legend wrapperStyle={{ fontSize: "12px", color: "#9ca3af", paddingTop: "12px" }} />
                <Line type="monotone" dataKey="aiMarketingAdoption" stroke="#6366f1" strokeWidth={2.5} dot={{ fill: "#6366f1", r: 4 }} name="AI Tool Adoption %" />
                <Line type="monotone" dataKey="marketingBudgetAI" stroke="#10b981" strokeWidth={2.5} dot={{ fill: "#10b981", r: 4 }} name="Budget Allocated to AI %" />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>
        </section>

        {/* Key Insights */}
        <section className="pb-16">
          <SectionHeader eyebrow="Analyst Insights" title="Strategic Market Findings" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {keyInsights.map((insight) => (
              <div key={insight.id} className="glass-card p-6 hover:border-white/10 transition-all border-l-2 border-l-indigo-500">
                <p className="text-4xl font-bold gradient-text mb-3">{insight.stat}</p>
                <h3 className="text-white font-semibold mb-2">{insight.label}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{insight.detail}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
