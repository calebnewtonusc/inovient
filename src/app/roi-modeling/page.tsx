"use client";

import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ChartCard } from "@/components/ui/ChartCard";
import { MetricCard } from "@/components/ui/MetricCard";
import {
  defaultROIInputs,
  calculateROI,
  roiCaseStudies,
  tierPrices,
  type ROIInputs,
} from "@/data/roiData";
import { formatCurrency } from "@/lib/utils";
import { Calculator, TrendingUp, Clock, DollarSign, Users, Zap } from "lucide-react";

function Slider({
  label,
  value,
  min,
  max,
  step,
  format,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  format: (v: number) => string;
  onChange: (v: number) => void;
}) {
  const id = label.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label htmlFor={id} className="text-sm text-gray-400">{label}</label>
        <span className="text-sm font-semibold text-white" aria-live="polite">{format(value)}</span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        aria-label={label}
        aria-valuetext={format(value)}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer accent-indigo-500"
      />
      <div className="flex justify-between text-xs text-gray-600" aria-hidden="true">
        <span>{format(min)}</span>
        <span>{format(max)}</span>
      </div>
    </div>
  );
}

export default function ROIModelingPage() {
  const [inputs, setInputs] = useState<ROIInputs>(defaultROIInputs);

  const results = calculateROI(inputs);

  const breakdownData = [
    { name: "Labor Savings", value: results.laborSavings, color: "#6366f1" },
    { name: "Revenue Uplift", value: results.revenueUplift, color: "#10b981" },
    { name: "Tool Savings", value: results.toolConsolidationSavings, color: "#0ea5e9" },
  ];

  const update = (field: keyof ROIInputs) => (v: number | string) =>
    setInputs((prev) => ({ ...prev, [field]: v }));

  return (
    <div className="min-h-screen">
      <div className="border-b border-white/5 bg-gradient-to-r from-emerald-950/30 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <SectionHeader
            eyebrow="ROI Modeling"
            title="Interactive ROI Calculator"
            description="Model the business impact of Morpheus AI for your organization. Adjust inputs to see real-time ROI projections based on actual customer data."
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Calculator */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Inputs */}
            <div className="glass-card p-6 space-y-6">
              <div className="flex items-center gap-2 mb-2">
                <Calculator className="w-4 h-4 text-indigo-400" />
                <h3 className="text-sm font-semibold text-white">Configure Your Model</h3>
              </div>

              {/* Tier selector */}
              <div>
                <label className="text-sm text-gray-400 block mb-2">Select Tier</label>
                <div className="grid grid-cols-3 gap-2">
                  {(["starter", "growth", "enterprise"] as const).map((tier) => (
                    <button
                      key={tier}
                      onClick={() => update("tier")(tier)}
                      className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all capitalize ${
                        inputs.tier === tier
                          ? "bg-indigo-500 text-white"
                          : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {tier}
                      <div className="text-[10px] opacity-70 mt-0.5">
                        ${tierPrices[tier]}/mo
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <Slider
                label="Monthly Marketing Budget"
                value={inputs.monthlyMarketingBudget}
                min={10000}
                max={500000}
                step={5000}
                format={(v) => formatCurrency(v, true)}
                onChange={update("monthlyMarketingBudget") as (v: number) => void}
              />
              <Slider
                label="Marketing Team Size"
                value={inputs.teamSize}
                min={2}
                max={50}
                step={1}
                format={(v) => `${v} people`}
                onChange={update("teamSize") as (v: number) => void}
              />
              <Slider
                label="Avg Marketing Salary"
                value={inputs.avgSalary}
                min={50000}
                max={180000}
                step={5000}
                format={(v) => formatCurrency(v, true)}
                onChange={update("avgSalary") as (v: number) => void}
              />
              <Slider
                label="Current Tools Monthly Cost"
                value={inputs.currentToolsCost}
                min={500}
                max={20000}
                step={250}
                format={(v) => formatCurrency(v, true)}
                onChange={update("currentToolsCost") as (v: number) => void}
              />
              <Slider
                label="Current Conversion Rate"
                value={inputs.conversionRate}
                min={0.5}
                max={10}
                step={0.1}
                format={(v) => `${v.toFixed(1)}%`}
                onChange={update("conversionRate") as (v: number) => void}
              />
              <Slider
                label="Average Deal Size"
                value={inputs.avgDealSize}
                min={1000}
                max={100000}
                step={1000}
                format={(v) => formatCurrency(v, true)}
                onChange={update("avgDealSize") as (v: number) => void}
              />
            </div>

            {/* Results */}
            <div className="lg:col-span-2 space-y-6">
              {/* Headline ROI */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="glass-card p-5 text-center border-indigo-500/30 glow-purple col-span-2 sm:col-span-1">
                  <p className="text-3xl font-bold gradient-text">{results.roiPercent}%</p>
                  <p className="text-xs text-gray-400 mt-1">Monthly ROI</p>
                </div>
                <div className="glass-card p-5 text-center">
                  <p className="text-2xl font-bold text-emerald-400">{results.paybackMonths}mo</p>
                  <p className="text-xs text-gray-400 mt-1">Payback Period</p>
                </div>
                <div className="glass-card p-5 text-center">
                  <p className="text-2xl font-bold text-white">{formatCurrency(results.totalBenefit, true)}</p>
                  <p className="text-xs text-gray-400 mt-1">Monthly Benefit</p>
                </div>
                <div className="glass-card p-5 text-center">
                  <p className="text-2xl font-bold text-indigo-300">{Math.round(results.timesSaved)}h</p>
                  <p className="text-xs text-gray-400 mt-1">Hours Saved/Mo</p>
                </div>
              </div>

              {/* Breakdown chart */}
              <ChartCard title="Monthly Value Breakdown" subtitle="Total benefit decomposed by value driver">
                <ResponsiveContainer width="100%" height={180}>
                  <BarChart data={breakdownData} layout="vertical" margin={{ top: 0, right: 20, left: 60, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" horizontal={false} />
                    <XAxis
                      type="number"
                      tick={{ fill: "#6b7280", fontSize: 11 }}
                      axisLine={false}
                      tickLine={false}
                      tickFormatter={(v) => formatCurrency(v, true)}
                    />
                    <YAxis type="category" dataKey="name" tick={{ fill: "#9ca3af", fontSize: 12 }} axisLine={false} tickLine={false} width={90} />
                    <Tooltip
                      contentStyle={{ background: "#1a1a2e", border: "1px solid #2d2d4d", borderRadius: "8px", color: "#f0f0f8", fontSize: "12px" }}
                      formatter={(v: number | undefined) => [formatCurrency(v ?? 0), ""]}
                    />
                    <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                      {breakdownData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </ChartCard>

              {/* Detail breakdown */}
              <div className="glass-card p-6">
                <h3 className="text-sm font-semibold text-white mb-4">Detailed Value Analysis</h3>
                <div className="space-y-3">
                  {[
                    {
                      label: "Labor Savings (35% productivity gain)",
                      value: formatCurrency(results.laborSavings),
                      icon: Users,
                      color: "text-indigo-400",
                    },
                    {
                      label: "Revenue Uplift (18% more leads, 12% better conversion)",
                      value: formatCurrency(results.revenueUplift),
                      icon: TrendingUp,
                      color: "text-emerald-400",
                    },
                    {
                      label: "Tool Consolidation (45% stack reduction)",
                      value: formatCurrency(results.toolConsolidationSavings),
                      icon: Zap,
                      color: "text-sky-400",
                    },
                  ].map(({ label, value, icon: Icon, color }) => (
                    <div key={label} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                      <div className="flex items-center gap-2">
                        <Icon className={`w-4 h-4 ${color}`} />
                        <span className="text-sm text-gray-300">{label}</span>
                      </div>
                      <span className="text-sm font-semibold text-white">{value}/mo</span>
                    </div>
                  ))}
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-sm font-semibold text-gray-200">Platform Cost</span>
                    <span className="text-sm font-semibold text-rose-400">-{formatCurrency(results.platformCost)}/mo</span>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-indigo-500/30">
                    <span className="text-base font-bold text-white">Net Monthly ROI</span>
                    <span className="text-base font-bold text-emerald-400">{formatCurrency(results.netROI)}/mo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="pb-16">
          <SectionHeader
            eyebrow="Customer Evidence"
            title="ROI Case Studies"
            description="Real results from Morpheus customers across industries and company sizes."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {roiCaseStudies.map((study) => (
              <div key={study.company} className="glass-card p-6 hover:border-white/10 transition-all flex flex-col">
                <div className="mb-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-white font-semibold text-sm">{study.company}</h3>
                      <p className="text-xs text-gray-500">{study.industry} · {study.tier} Tier</p>
                    </div>
                    <span className="text-xs bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-2 py-0.5 rounded-full">
                      {study.results.roiPercent}% ROI
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  {[
                    { label: "Time Saved", value: study.results.timeSaved, icon: Clock },
                    { label: "Labor Savings", value: study.results.laborSavings, icon: DollarSign },
                    { label: "Revenue Impact", value: study.results.revenueImpact, icon: TrendingUp },
                    { label: "Payback", value: `${study.results.paybackDays} days`, icon: Calculator },
                  ].map(({ label, value, icon: Icon }) => (
                    <div key={label} className="bg-white/3 rounded-lg p-3">
                      <div className="flex items-center gap-1.5 mb-1">
                        <Icon className="w-3 h-3 text-indigo-400" />
                        <span className="text-[10px] text-gray-500 uppercase tracking-wider">{label}</span>
                      </div>
                      <p className="text-sm font-semibold text-white">{value}</p>
                    </div>
                  ))}
                </div>

                <blockquote className="flex-1 bg-white/3 rounded-lg p-4">
                  <p className="text-xs text-gray-300 leading-relaxed italic mb-2">
                    &ldquo;{study.quote}&rdquo;
                  </p>
                  <p className="text-[10px] text-gray-500">— {study.author}</p>
                </blockquote>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
