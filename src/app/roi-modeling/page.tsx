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
import {
  defaultROIInputs,
  calculateROI,
  roiCaseStudies,
  tierPrices,
  type ROIInputs,
} from "@/data/roiData";
import { formatCurrency } from "@/lib/utils";

const ttStyle = {
  background: "#13131C",
  border: "1px solid #26263A",
  borderRadius: "4px",
  color: "#EBEBF5",
  fontSize: "12px",
  padding: "8px 12px",
};

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
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <label htmlFor={id} className="text-xs text-[#6A6A90]">
          {label}
        </label>
        <span className="text-xs font-mono font-semibold text-[#EBEBF5]" aria-live="polite">
          {format(value)}
        </span>
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
        className="w-full h-0.5 bg-[#26263A] rounded-full appearance-none cursor-pointer accent-[#7C5CF6]"
      />
      <div className="flex justify-between text-[10px] font-mono text-[#38385A]">
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
    { name: "Labor Savings", value: results.laborSavings, color: "#7C5CF6" },
    { name: "Revenue Uplift", value: results.revenueUplift, color: "#22D3A4" },
    { name: "Tool Savings", value: results.toolConsolidationSavings, color: "#38BDF8" },
  ];

  const update = (field: keyof ROIInputs) => (v: number | string) =>
    setInputs((prev) => ({ ...prev, [field]: v }));

  return (
    <div className="min-h-screen">
      {/* Page header */}
      <div className="border-b border-[#26263A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <SectionHeader
            label="ROI Modeling"
            title="Interactive ROI Calculator"
            description="Model the business impact of Morpheus for your organization. Adjust inputs to see real-time projections based on verified customer data."
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
        {/* ─── 01: Calculator ───────────────────────────────── */}
        <section>
          <SectionHeader index="01" label="Calculator" title="Configure Your Model" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {/* Input panel */}
            <div className="card p-6 space-y-6">
              <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-[#38385A]">
                Inputs
              </p>

              {/* Tier selector */}
              <div>
                <label className="text-xs text-[#6A6A90] block mb-2">Select Tier</label>
                <div className="grid grid-cols-3 gap-2">
                  {(["starter", "growth", "enterprise"] as const).map((tier) => (
                    <button
                      key={tier}
                      onClick={() => update("tier")(tier)}
                      className={`py-2 px-2 rounded text-xs font-mono transition-all capitalize border ${
                        inputs.tier === tier
                          ? "border-[#7C5CF6] bg-[#7C5CF6]/15 text-[#EBEBF5]"
                          : "border-[#26263A] text-[#38385A] hover:border-[#38385A] hover:text-[#6A6A90]"
                      }`}
                    >
                      {tier}
                      <div className="text-[9px] opacity-60 mt-0.5">${tierPrices[tier]}/mo</div>
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
              {/* Model assumptions */}
              <div className="pt-4 border-t border-[#1E1E2E]">
                <p className="text-[10px] font-mono uppercase tracking-[0.12em] text-[#38385A] mb-2">
                  Model Assumptions
                </p>
                <div className="space-y-1 text-[11px] text-[#38385A] font-mono">
                  <p>· 25% reduction in competitive research time</p>
                  <p>· 10% incremental lead volume via better targeting</p>
                  <p>· 8% conversion lift from positioning intelligence</p>
                  <p>· 35% tool consolidation savings</p>
                </div>
                <p className="text-[10px] text-[#26263A] mt-2">
                  Based on published SaaS automation benchmarks. Actual results vary by team and stack.
                </p>
              </div>
            </div>

            {/* Results panel */}
            <div className="lg:col-span-2 space-y-5">
              {/* Headline stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  {
                    label: "Value Multiple",
                    value: `${(results.totalBenefit / results.platformCost).toFixed(1)}x`,
                    accent: true,
                  },
                  {
                    label: "Payback Period",
                    value: `${results.paybackMonths}mo`,
                    accent: false,
                  },
                  {
                    label: "Monthly Benefit",
                    value: formatCurrency(results.totalBenefit, true),
                    accent: false,
                  },
                  {
                    label: "Hours Saved/Mo",
                    value: `${Math.round(results.timesSaved)}h`,
                    accent: false,
                  },
                ].map(({ label, value, accent }) => (
                  <div
                    key={label}
                    className={`rounded-md border p-5 text-center ${
                      accent
                        ? "border-[#7C5CF6]/40 bg-[#7C5CF6]/8"
                        : "border-[#26263A] bg-[#13131C]"
                    }`}
                  >
                    <p
                      className={`text-2xl sm:text-3xl font-black font-mono tracking-tight leading-none ${
                        accent ? "text-[#7C5CF6]" : "text-[#EBEBF5]"
                      }`}
                    >
                      {value}
                    </p>
                    <p className="text-[10px] font-mono text-[#38385A] mt-2 uppercase tracking-wider">
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Breakdown chart */}
              <ChartCard
                title="Monthly Value Breakdown"
                subtitle="Total benefit decomposed by value driver"
              >
                <ResponsiveContainer width="100%" height={160}>
                  <BarChart
                    data={breakdownData}
                    layout="vertical"
                    margin={{ top: 0, right: 16, left: 80, bottom: 0 }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="#1E1E2E"
                      horizontal={false}
                    />
                    <XAxis
                      type="number"
                      tick={{ fill: "#38385A", fontSize: 10 }}
                      axisLine={false}
                      tickLine={false}
                      tickFormatter={(v) => formatCurrency(v, true)}
                    />
                    <YAxis
                      type="category"
                      dataKey="name"
                      tick={{ fill: "#6A6A90", fontSize: 11 }}
                      axisLine={false}
                      tickLine={false}
                      width={80}
                    />
                    <Tooltip
                      contentStyle={ttStyle}
                      formatter={(v: number | undefined) => [
                        formatCurrency(v ?? 0),
                        "",
                      ]}
                    />
                    <Bar dataKey="value" radius={[0, 3, 3, 0]}>
                      {breakdownData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </ChartCard>

              {/* Value breakdown */}
              <div className="card p-5">
                <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-[#38385A] mb-3">
                  Value Breakdown
                </p>
                <div className="space-y-0">
                  {[
                    { label: "Labor Savings", value: formatCurrency(results.laborSavings), color: "#7C5CF6" },
                    { label: "Revenue Uplift", value: formatCurrency(results.revenueUplift), color: "#22D3A4" },
                    { label: "Tool Consolidation", value: formatCurrency(results.toolConsolidationSavings), color: "#38BDF8" },
                  ].map(({ label, value, color }) => (
                    <div key={label} className="flex items-center justify-between py-2.5 border-b border-[#1E1E2E]">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
                        <span className="text-sm text-[#EBEBF5]">{label}</span>
                      </div>
                      <span className="text-sm font-mono font-semibold text-[#EBEBF5]">{value}/mo</span>
                    </div>
                  ))}
                  <div className="flex items-center justify-between py-2.5 border-b border-[#1E1E2E]">
                    <span className="text-sm text-[#6A6A90]">Platform Cost</span>
                    <span className="text-sm font-mono text-[#F87171]">-{formatCurrency(results.platformCost)}/mo</span>
                  </div>
                  <div className="flex items-center justify-between pt-3 mt-1">
                    <span className="text-sm font-semibold text-[#EBEBF5]">Net Monthly ROI</span>
                    <span className="text-base font-black font-mono text-[#22D3A4]">{formatCurrency(results.netROI)}/mo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 02: Case Studies ─────────────────────────────── */}
        <section className="pb-16">
          <SectionHeader
            index="02"
            label="Customer Evidence"
            title="ROI Case Studies"
            description="Representative customer scenarios modeled from Morpheus pricing and validated ROI assumptions. Actual results vary by team size, industry, and existing tool stack."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {roiCaseStudies.map((study) => (
              <div key={study.company} className="card p-7 flex flex-col">
                <div className="mb-5">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="text-sm font-semibold text-[#EBEBF5]">{study.company}</h3>
                    <span className="text-xl font-black font-mono text-[#22D3A4] flex-shrink-0 leading-none">
                      {study.results.roiPercent}%
                    </span>
                  </div>
                  <p className="text-xs text-[#38385A] font-mono">
                    {study.industry} · {study.tier} · payback in {study.results.paybackDays} days
                  </p>
                </div>
                <blockquote className="flex-1 border-l border-[#7C5CF6]/30 pl-4">
                  <p className="text-sm text-[#6A6A90] leading-relaxed italic mb-3">
                    &ldquo;{study.quote}&rdquo;
                  </p>
                  <p className="text-[10px] font-mono text-[#38385A]">{study.author}</p>
                </blockquote>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
