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
import { MetricCard } from "@/components/ui/MetricCard";
import { ChartCard } from "@/components/ui/ChartCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { marketGrowthData, keyInsights } from "@/data/marketData";
import { revenueProjections } from "@/data/pricingData";
import { competitors } from "@/data/competitorData";
import {
  TrendingUp,
  Target,
  DollarSign,
  Users,
  ArrowRight,
  Globe,
  BarChart2,
  Activity,
  Clock,
} from "lucide-react";

const miniMarketData = marketGrowthData.map((d) => ({
  year: d.year,
  SAM: d.sam,
  SOM: d.som * 10,
}));

const revenueData = revenueProjections.slice(0, 5);

const executiveSummaryPoints = [
  {
    icon: Globe,
    title: "Market Opportunity",
    desc: "SAM of $185B growing at 31.4% CAGR — Morpheus targets a $4.2B serviceable segment with a clear path to $24B by 2030.",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
  },
  {
    icon: Target,
    title: "Competitive Advantage",
    desc: "Unique NPS + media mix + strategy AI combination creates defensible moat vs. point solutions like Jasper and HubSpot AI.",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    icon: DollarSign,
    title: "Pricing Strategy",
    desc: "3-tier model ($299–$2,499/mo) targeting SMB to Enterprise with 78% gross margins and land-and-expand motion.",
    color: "text-sky-400",
    bg: "bg-sky-500/10",
  },
  {
    icon: TrendingUp,
    title: "Revenue Path",
    desc: "Projected $3.4M ARR by 2026, $17.7M by 2028 through enterprise pilots and agency channel partnerships.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
];

const roadmapItems = [
  { quarter: "Q1 2026", milestone: "Launch Growth tier, activate 50 pilot accounts", status: "active" },
  { quarter: "Q2 2026", milestone: "Enterprise pilot with 5 Fortune 500 brands", status: "upcoming" },
  { quarter: "Q3 2026", milestone: "API marketplace launch + agency partner program", status: "upcoming" },
  { quarter: "Q4 2026", milestone: "Series A raise targeting $15M at $60M valuation", status: "upcoming" },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/40 via-transparent to-purple-950/30" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/6 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-600/6 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold px-4 py-2 rounded-full mb-6 uppercase tracking-[0.15em]">
              <Activity className="w-3 h-3" />
              Confidential Consulting Report · Q1 2026
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              Inovient{" "}
              <span className="gradient-text">Morpheus AI</span>
              <br />
              Pricing &amp; Market Strategy
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mb-8">
              Comprehensive market research, competitor analysis, and ROI modeling to develop a
              sustainable pricing strategy and product positioning framework for Morpheus — the
              AI platform built by marketers, for marketers.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { href: "/market-research", label: "Market Research", icon: TrendingUp },
                { href: "/competitor-analysis", label: "Competitors", icon: Target },
                { href: "/roi-modeling", label: "ROI Model", icon: BarChart2 },
                { href: "/pricing-strategy", label: "Pricing", icon: DollarSign },
              ].map(({ href, label, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-indigo-500/40 text-sm font-medium text-gray-300 hover:text-white transition-all duration-200 group"
                >
                  <Icon className="w-4 h-4 text-indigo-400" />
                  {label}
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* KPI Cards */}
        <section>
          <SectionHeader eyebrow="Key Metrics" title="Strategic Overview" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <MetricCard
              title="Serviceable Market"
              value="$185B"
              subtitle="AI marketing software (2025)"
              change={31}
              changeLabel="31.4% CAGR through 2030"
              icon={<Globe className="w-5 h-5" />}
              color="indigo"
            />
            <MetricCard
              title="Target ARR 2026"
              value="$3.4M"
              subtitle="Growth + Enterprise tiers"
              change={156}
              changeLabel="156% YoY growth target"
              icon={<TrendingUp className="w-5 h-5" />}
              color="emerald"
            />
            <MetricCard
              title="Gross Margin"
              value="78%"
              subtitle="Above industry avg of 72%"
              change={8}
              changeLabel="vs. 72% industry benchmark"
              icon={<DollarSign className="w-5 h-5" />}
              color="purple"
            />
            <MetricCard
              title="LTV:CAC Ratio"
              value="16:1"
              subtitle="Growth tier benchmark"
              change={100}
              changeLabel="2x industry avg of 8:1"
              icon={<Users className="w-5 h-5" />}
              color="sky"
            />
          </div>
        </section>

        {/* Charts */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard title="Revenue Projection" subtitle="ARR by tier ($K) — 5-year forecast" badge="Projected">
              <ResponsiveContainer width="100%" height={260}>
                <AreaChart data={revenueData} margin={{ top: 4, right: 4, left: -16, bottom: 0 }}>
                  <defs>
                    <linearGradient id="enterpriseGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="growthGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="starterGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#a78bfa" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#a78bfa" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
                  <XAxis dataKey="year" tick={{ fill: "#6b7280", fontSize: 12 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: "#6b7280", fontSize: 12 }} axisLine={false} tickLine={false} />
                  <Tooltip
                    contentStyle={{ background: "#1a1a2e", border: "1px solid #2d2d4d", borderRadius: "8px", color: "#f0f0f8", fontSize: "12px" }}
                    formatter={(value: number | undefined) => [`$${value}K`, ""]}
                  />
                  <Area type="monotone" dataKey="enterprise" stackId="1" stroke="#0ea5e9" fill="url(#enterpriseGrad)" strokeWidth={2} name="Enterprise" />
                  <Area type="monotone" dataKey="growth" stackId="1" stroke="#6366f1" fill="url(#growthGrad)" strokeWidth={2} name="Growth" />
                  <Area type="monotone" dataKey="starter" stackId="1" stroke="#a78bfa" fill="url(#starterGrad)" strokeWidth={2} name="Starter" />
                </AreaChart>
              </ResponsiveContainer>
              <div className="flex items-center gap-4 mt-4 justify-end">
                {[{ label: "Enterprise", color: "#0ea5e9" }, { label: "Growth", color: "#6366f1" }, { label: "Starter", color: "#a78bfa" }].map(({ label, color }) => (
                  <div key={label} className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: color }} />
                    <span className="text-xs text-gray-400">{label}</span>
                  </div>
                ))}
              </div>
            </ChartCard>

            <ChartCard title="Market Size Growth" subtitle="SAM ($B) and SOM ($100M) expansion" badge="Live Data">
              <ResponsiveContainer width="100%" height={260}>
                <BarChart data={miniMarketData.slice(0, 6)} margin={{ top: 4, right: 4, left: -16, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
                  <XAxis dataKey="year" tick={{ fill: "#6b7280", fontSize: 12 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: "#6b7280", fontSize: 12 }} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={{ background: "#1a1a2e", border: "1px solid #2d2d4d", borderRadius: "8px", color: "#f0f0f8", fontSize: "12px" }} />
                  <Bar dataKey="SAM" fill="#6366f1" radius={[4, 4, 0, 0]} name="SAM ($B)" />
                  <Bar dataKey="SOM" fill="#0ea5e9" radius={[4, 4, 0, 0]} name="SOM ($100M)" />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>
        </section>

        {/* Executive Summary */}
        <section>
          <SectionHeader eyebrow="Executive Summary" title="Strategic Findings" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {executiveSummaryPoints.map(({ icon: Icon, title, desc, color, bg }) => (
              <div key={title} className="glass-card p-6 hover:border-white/10 transition-all duration-300">
                <div className={`inline-flex p-2.5 rounded-xl ${bg} mb-4`}>
                  <Icon className={`w-5 h-5 ${color}`} />
                </div>
                <h3 className="text-white font-semibold mb-2">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Key Insights */}
        <section>
          <SectionHeader eyebrow="Market Intelligence" title="Key Market Insights" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {keyInsights.map((insight) => (
              <div key={insight.id} className="glass-card p-5 border-l-2 border-l-indigo-500 hover:border-white/10 transition-all">
                <p className="text-3xl font-bold gradient-text mb-2">{insight.stat}</p>
                <p className="text-sm font-semibold text-white mb-2">{insight.label}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{insight.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Competitor Snapshot */}
        <section>
          <SectionHeader
            eyebrow="Competitive Landscape"
            title="Morpheus vs. The Market"
            description="Inovient's NPS + media mix + strategy combination creates a unique position that no single competitor fully replicates."
          />
          <div className="glass-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/5">
                    {["Company", "Pricing", "Target", "NPS Analytics", "Media Mix", "Strategy AI"].map((h, i) => (
                      <th
                        key={h}
                        className={`text-left px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider ${
                          i === 1 ? "hidden md:table-cell" : i === 2 ? "hidden lg:table-cell" : i === 5 ? "hidden sm:table-cell" : ""
                        }`}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {competitors.slice(0, 5).map((comp) => (
                    <tr key={comp.id} className={`border-b border-white/5 last:border-0 hover:bg-white/2 transition-colors ${comp.id === "inovient" ? "bg-indigo-500/5" : ""}`}>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: comp.color }} />
                          <div>
                            <p className={`text-sm font-semibold ${comp.id === "inovient" ? "text-indigo-300" : "text-white"}`}>{comp.name}</p>
                            {comp.id === "inovient" && <span className="text-[10px] text-indigo-400 font-semibold uppercase tracking-wider">Our Product</span>}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 hidden md:table-cell"><span className="text-sm text-gray-300">{comp.pricing}</span></td>
                      <td className="px-6 py-4 hidden lg:table-cell"><span className="text-xs bg-white/5 text-gray-300 px-2 py-1 rounded-full">{comp.targetMarket}</span></td>
                      {(["npsAnalytics", "mediaMix", "strategyDepth"] as const).map((metric, mi) => (
                        <td key={metric} className={`px-6 py-4 ${mi === 2 ? "hidden sm:table-cell" : ""}`}>
                          <div className="flex items-center gap-2">
                            <div className="w-16 h-1.5 bg-white/10 rounded-full overflow-hidden">
                              <div className="h-full rounded-full" style={{ width: `${comp.radarScores[metric]}%`, backgroundColor: comp.color }} />
                            </div>
                            <span className="text-xs text-gray-400">{comp.radarScores[metric]}</span>
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 border-t border-white/5 flex items-center justify-between">
              <p className="text-xs text-gray-500">Showing top 5 competitors · Scores out of 100</p>
              <Link href="/competitor-analysis" className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors">
                Full analysis <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section className="pb-16">
          <SectionHeader eyebrow="Go-To-Market" title="Strategic Roadmap 2026" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {roadmapItems.map(({ quarter, milestone, status }) => (
              <div key={quarter} className="glass-card p-5 hover:border-white/10 transition-all">
                <div className="flex items-center gap-2 mb-3">
                  {status === "active" ? (
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  ) : (
                    <div className="w-2 h-2 rounded-full bg-gray-600" />
                  )}
                  <span className={`text-xs font-semibold uppercase tracking-widest ${status === "active" ? "text-emerald-400" : "text-gray-500"}`}>
                    {quarter}
                  </span>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">{milestone}</p>
                {status === "active" && (
                  <div className="mt-3 flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-emerald-400" />
                    <span className="text-xs text-emerald-400 font-medium">In Progress</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
