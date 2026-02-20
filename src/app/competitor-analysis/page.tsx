"use client";

import { useState } from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
  Tooltip,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  ZAxis,
  Cell,
} from "recharts";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ChartCard } from "@/components/ui/ChartCard";
import { competitors, radarMetrics, positioningMatrix } from "@/data/competitorData";

const ttStyle = {
  background: "#13131C",
  border: "1px solid #26263A",
  borderRadius: "4px",
  color: "#EBEBF5",
  fontSize: "12px",
  padding: "8px 12px",
};

const swotData = {
  strengths: [
    "We're the only platform combining NPS benchmarking, media mix modeling, and strategy AI in one workflow.",
    "Real-time competitor NPS at mid-market pricing. Nobody else does this.",
    "40+ years of practitioner expertise is embedded into every recommendation. Not generic AI.",
  ],
  weaknesses: [
    "Brand recognition is limited. We're entering markets where Sprinklr and Market Logic have entrenched sales teams.",
    "Enterprise integrations are limited at launch. Salesforce and SAP connectors are on the roadmap.",
    "Small team means implementation support doesn't scale the same way incumbents can.",
  ],
  opportunities: [
    "Mid-market is a $4.2B gap. Market Logic costs $50K+ and Sprinklr isn't built for teams under 1,000 seats.",
    "Agency white-label at 50% margin creates distribution that grows without headcount.",
    "Enterprise AI spend is accelerating 31% annually. We're entering at the right time.",
  ],
  threats: [
    "HubSpot or Sprinklr could add media mix modeling as a product update, narrowing our differentiation.",
    "Open-source LLMs lower the barrier to building copycat tools. Speed to market is critical.",
    "Enterprise sales cycles run 60-120 days. Runway management matters at current burn.",
  ],
};

const defaultSelected = ["inovient", "sprinklr", "market-logic", "hubspot-ai"];

export default function CompetitorAnalysisPage() {
  const [selectedCompetitors, setSelectedCompetitors] = useState(defaultSelected);

  const toggleCompetitor = (id: string) => {
    if (id === "inovient") return;
    setSelectedCompetitors((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  const radarData = radarMetrics.map((metric) => {
    const entry: Record<string, string | number> = { metric: metric.label };
    competitors.forEach((comp) => {
      if (selectedCompetitors.includes(comp.id)) {
        entry[comp.id] = comp.radarScores[metric.key as keyof typeof comp.radarScores];
      }
    });
    return entry;
  });

  return (
    <div className="min-h-screen">
      {/* Page header */}
      <div className="border-b border-[#26263A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <SectionHeader
            label="Competitor Analysis"
            title="Competitive Landscape Deep Dive"
            description="7 key competitors scored across 8 strategic dimensions. Morpheus occupies a unique position: enterprise AI depth at mid-market pricing."
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
        {/* ─── 01: Charts ───────────────────────────────────── */}
        <section>
          <SectionHeader index="01" label="Comparative Analysis" title="Capability Scoring" />

          {/* Competitor selector */}
          <div className="flex flex-wrap gap-2 mb-6">
            {competitors.map((comp) => (
              <button
                key={comp.id}
                onClick={() => toggleCompetitor(comp.id)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded text-xs font-medium transition-all border ${
                  selectedCompetitors.includes(comp.id)
                    ? "text-[#EBEBF5] border-transparent"
                    : "text-[#38385A] border-[#26263A] hover:text-[#6A6A90]"
                } ${comp.id === "inovient" ? "cursor-default" : "cursor-pointer"}`}
                style={
                  selectedCompetitors.includes(comp.id)
                    ? {
                        borderColor: comp.color,
                        backgroundColor: `${comp.color}18`,
                        color: "#EBEBF5",
                      }
                    : {}
                }
              >
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: comp.color }} />
                {comp.name.split(" ")[0]}
                {comp.id === "inovient" && (
                  <span className="text-[9px] text-[#7C5CF6]">★</span>
                )}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* Radar Chart */}
            <ChartCard title="8-Dimension Capability Radar" subtitle="Scores 0–100 across core platform capabilities">
              <ResponsiveContainer width="100%" height={360}>
                <RadarChart data={radarData} margin={{ top: 10, right: 10, bottom: 10, left: 10 }}>
                  <PolarGrid stroke="#1E1E2E" />
                  <PolarAngleAxis dataKey="metric" tick={{ fill: "#38385A", fontSize: 11 }} />
                  {competitors
                    .filter((c) => selectedCompetitors.includes(c.id))
                    .map((comp) => (
                      <Radar
                        key={comp.id}
                        name={comp.name}
                        dataKey={comp.id}
                        stroke={comp.color}
                        fill={comp.color}
                        fillOpacity={comp.id === "inovient" ? 0.15 : 0.04}
                        strokeWidth={comp.id === "inovient" ? 2 : 1.5}
                      />
                    ))}
                  <Tooltip contentStyle={ttStyle} />
                </RadarChart>
              </ResponsiveContainer>
              <div className="flex flex-wrap gap-4 mt-2">
                {competitors
                  .filter((c) => selectedCompetitors.includes(c.id))
                  .map((comp) => (
                    <div key={comp.id} className="flex items-center gap-1.5">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: comp.color }}
                      />
                      <span className="text-xs text-[#6A6A90]">
                        {comp.name.split(" ")[0]}
                      </span>
                    </div>
                  ))}
              </div>
            </ChartCard>

            {/* Positioning Matrix */}
            <ChartCard
              title="Market Positioning Matrix"
              subtitle="AI specialization vs. marketing focus (bubble size = ARR scale)"
            >
              <ResponsiveContainer width="100%" height={360}>
                <ScatterChart margin={{ top: 10, right: 10, bottom: 20, left: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1E1E2E" />
                  <XAxis
                    type="number"
                    dataKey="x"
                    name="AI Specialization"
                    domain={[15, 90]}
                    tick={{ fill: "#38385A", fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                    label={{
                      value: "AI Specialization →",
                      position: "insideBottom",
                      offset: -8,
                      fill: "#38385A",
                      fontSize: 10,
                    }}
                  />
                  <YAxis
                    type="number"
                    dataKey="y"
                    name="Marketing Focus"
                    domain={[40, 95]}
                    tick={{ fill: "#38385A", fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                    label={{
                      value: "Marketing Focus →",
                      angle: -90,
                      position: "insideLeft",
                      fill: "#38385A",
                      fontSize: 10,
                    }}
                  />
                  <ZAxis type="number" dataKey="size" range={[50, 700]} />
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload;
                        return (
                          <div
                            style={{
                              background: "#13131C",
                              border: "1px solid #26263A",
                              borderRadius: "4px",
                              padding: "8px 12px",
                              fontSize: "12px",
                            }}
                          >
                            <p className="font-semibold text-[#EBEBF5]">{data.name}</p>
                            <p className="text-[#6A6A90] text-xs">
                              AI Score: {data.x} · Marketing: {data.y}
                            </p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Scatter data={positioningMatrix} isAnimationActive>
                    {positioningMatrix.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={entry.color}
                        fillOpacity={entry.name === "Inovient" ? 1 : 0.6}
                      />
                    ))}
                  </Scatter>
                </ScatterChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>
        </section>

        {/* ─── 02: Competitor Profiles ──────────────────────── */}
        <section>
          <SectionHeader index="02" label="Profiles" title="Competitor Detail" />
          <div className="card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#26263A]">
                    {[
                      "Company",
                      "ARR",
                      "Pricing",
                      "Target",
                      "NPS",
                      "Media Mix",
                      "Strategy",
                    ].map((h) => (
                      <th
                        key={h}
                        className="text-left px-5 py-3 text-[10px] font-mono uppercase tracking-[0.12em] text-[#38385A]"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {competitors.map((comp) => (
                    <tr
                      key={comp.id}
                      className={`border-b border-[#1E1E2E] last:border-0 transition-colors hover:bg-[#17171F] ${
                        comp.id === "inovient" ? "bg-[#17171F]" : ""
                      }`}
                    >
                      <td className="px-5 py-3.5">
                        <div className="flex items-center gap-2">
                          <div
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ backgroundColor: comp.color }}
                          />
                          <span
                            className={`text-sm font-medium ${
                              comp.id === "inovient"
                                ? "text-[#7C5CF6]"
                                : "text-[#EBEBF5]"
                            }`}
                          >
                            {comp.id === "inovient" ? "Morpheus ★" : comp.name}
                          </span>
                        </div>
                      </td>
                      <td className="px-5 py-3.5 text-xs font-mono text-[#6A6A90]">{comp.arr}</td>
                      <td className="px-5 py-3.5 text-xs text-[#6A6A90]">{comp.pricing}</td>
                      <td className="px-5 py-3.5">
                        <span className="text-[10px] text-[#38385A] font-mono">
                          {comp.targetMarket}
                        </span>
                      </td>
                      {(["npsAnalytics", "mediaMix", "strategyDepth"] as const).map((metric) => (
                        <td key={metric} className="px-5 py-3.5">
                          <div className="flex items-center gap-2">
                            <div className="w-12 h-0.5 bg-[#1E1E2E] rounded-full overflow-hidden">
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
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ─── 03: Strengths / Weaknesses ───────────────────── */}
        <section>
          <SectionHeader index="03" label="Our Position" title="Morpheus SWOT Analysis" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
            {[
              {
                key: "S",
                title: "Strengths",
                items: swotData.strengths,
                accentColor: "#22D3A4",
                bgClass: "bg-[#22D3A4]/4",
                borderColor: "#22D3A4",
              },
              {
                key: "W",
                title: "Weaknesses",
                items: swotData.weaknesses,
                accentColor: "#F87171",
                bgClass: "bg-[#F87171]/4",
                borderColor: "#F87171",
              },
            ].map(({ key, title, items, accentColor, bgClass, borderColor }) => (
              <div
                key={key}
                className={`${bgClass} rounded-md border p-6`}
                style={{ borderColor: `${borderColor}25` }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className="text-[10px] font-mono font-bold"
                    style={{ color: accentColor }}
                  >
                    {key}
                  </span>
                  <span
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: accentColor }}
                  >
                    {title}
                  </span>
                </div>
                <ul className="space-y-2.5">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <div
                        className="w-1 h-1 rounded-full mt-2 flex-shrink-0"
                        style={{ backgroundColor: accentColor }}
                      />
                      <span className="text-sm text-[#EBEBF5] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                key: "O",
                title: "Opportunities",
                items: swotData.opportunities,
                accentColor: "#7C5CF6",
                bgClass: "bg-[#7C5CF6]/4",
                borderColor: "#7C5CF6",
              },
              {
                key: "T",
                title: "Threats",
                items: swotData.threats,
                accentColor: "#FBBF24",
                bgClass: "bg-[#FBBF24]/4",
                borderColor: "#FBBF24",
              },
            ].map(({ key, title, items, accentColor, bgClass, borderColor }) => (
              <div
                key={key}
                className={`${bgClass} rounded-md border p-6`}
                style={{ borderColor: `${borderColor}25` }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className="text-[10px] font-mono font-bold"
                    style={{ color: accentColor }}
                  >
                    {key}
                  </span>
                  <span
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: accentColor }}
                  >
                    {title}
                  </span>
                </div>
                <ul className="space-y-2.5">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <div
                        className="w-1 h-1 rounded-full mt-2 flex-shrink-0"
                        style={{ backgroundColor: accentColor }}
                      />
                      <span className="text-sm text-[#EBEBF5] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
