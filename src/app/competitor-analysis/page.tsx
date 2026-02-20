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
import { CheckCircle2, XCircle, TrendingUp, Shield, Zap } from "lucide-react";

const swotData = {
  strengths: [
    "Only platform combining NPS + media mix + strategy AI",
    "40+ years domain expertise embedded in AI",
    "Real-time competitor sentiment benchmarking",
    "Built by marketers — intuitive UX by design",
    "Land-and-expand model with high NRR potential",
  ],
  weaknesses: [
    "Limited brand recognition vs. incumbents",
    "Smaller dataset vs. Sprinklr/Salesforce",
    "No enterprise integrations at launch",
    "Small team — limited implementation support",
  ],
  opportunities: [
    "Martech consolidation wave favors all-in-one platforms",
    "Mid-market is vastly underserved by enterprise AI tools",
    "Agency channel provides scalable distribution",
    "GenAI cost drops enable aggressive pricing",
  ],
  threats: [
    "HubSpot/Salesforce could add NPS features",
    "Open-source LLMs lowering barriers to entry",
    "Longer enterprise sales cycles squeeze runway",
    "AI regulatory risk in some markets",
  ],
};

const selectedIds = ["inovient", "salesforce-einstein", "jasper", "hubspot-ai"];

export default function CompetitorAnalysisPage() {
  const [selectedCompetitors, setSelectedCompetitors] = useState(selectedIds);
  const [activeCompetitor, setActiveCompetitor] = useState<string | null>(null);

  const toggleCompetitor = (id: string) => {
    if (id === "inovient") return; // always show Inovient
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

  const activeComp = activeCompetitor
    ? competitors.find((c) => c.id === activeCompetitor)
    : competitors[0];

  return (
    <div className="min-h-screen">
      <div className="border-b border-white/5 bg-gradient-to-r from-purple-950/30 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <SectionHeader
            eyebrow="Competitor Analysis"
            title="Competitive Landscape Deep Dive"
            description="Comprehensive analysis of 7 key competitors across 8 strategic dimensions — identifying Inovient's defensible white space and unique market positioning."
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Competitor selector */}
        <section>
          <div className="flex flex-wrap gap-2 mb-6">
            {competitors.map((comp) => (
              <button
                key={comp.id}
                onClick={() => {
                  toggleCompetitor(comp.id);
                  setActiveCompetitor(comp.id);
                }}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${
                  selectedCompetitors.includes(comp.id)
                    ? "text-white border-opacity-50"
                    : "text-gray-500 border-white/10 hover:text-gray-300"
                } ${comp.id === "inovient" ? "cursor-default" : "cursor-pointer"}`}
                style={
                  selectedCompetitors.includes(comp.id)
                    ? { borderColor: comp.color, backgroundColor: `${comp.color}15`, color: "white" }
                    : {}
                }
              >
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: comp.color }} />
                {comp.name.split(" ")[0]}
                {comp.id === "inovient" && (
                  <span className="text-[9px] uppercase tracking-wider opacity-70">★</span>
                )}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Radar Chart */}
            <ChartCard title="Capability Radar" subtitle="Multi-dimensional competitive scoring (0–100)" badge="Interactive">
              <ResponsiveContainer width="100%" height={360}>
                <RadarChart data={radarData} margin={{ top: 10, right: 10, bottom: 10, left: 10 }}>
                  <PolarGrid stroke="rgba(255,255,255,0.08)" />
                  <PolarAngleAxis dataKey="metric" tick={{ fill: "#9ca3af", fontSize: 11 }} />
                  {competitors
                    .filter((c) => selectedCompetitors.includes(c.id))
                    .map((comp) => (
                      <Radar
                        key={comp.id}
                        name={comp.name}
                        dataKey={comp.id}
                        stroke={comp.color}
                        fill={comp.color}
                        fillOpacity={comp.id === "inovient" ? 0.2 : 0.05}
                        strokeWidth={comp.id === "inovient" ? 2.5 : 1.5}
                      />
                    ))}
                  <Tooltip
                    contentStyle={{ background: "#1a1a2e", border: "1px solid #2d2d4d", borderRadius: "8px", color: "#f0f0f8", fontSize: "12px" }}
                  />
                </RadarChart>
              </ResponsiveContainer>
              <div className="flex flex-wrap gap-3 mt-2">
                {competitors
                  .filter((c) => selectedCompetitors.includes(c.id))
                  .map((comp) => (
                    <div key={comp.id} className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: comp.color }} />
                      <span className="text-xs text-gray-400">{comp.name.split(" ")[0]}</span>
                    </div>
                  ))}
              </div>
            </ChartCard>

            {/* Positioning Matrix */}
            <ChartCard
              title="Market Positioning Matrix"
              subtitle="Platform breadth vs. AI specialization — bubble size = ARR scale"
              badge="Strategic"
            >
              <ResponsiveContainer width="100%" height={360}>
                <ScatterChart margin={{ top: 10, right: 10, bottom: 20, left: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
                  <XAxis
                    type="number"
                    dataKey="x"
                    name="AI Specialization"
                    domain={[15, 90]}
                    tick={{ fill: "#6b7280", fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                    label={{ value: "AI Specialization →", position: "insideBottom", offset: -8, fill: "#4b5563", fontSize: 11 }}
                  />
                  <YAxis
                    type="number"
                    dataKey="y"
                    name="Marketing Focus"
                    domain={[40, 95]}
                    tick={{ fill: "#6b7280", fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                    label={{ value: "Marketing Focus →", angle: -90, position: "insideLeft", fill: "#4b5563", fontSize: 11 }}
                  />
                  <ZAxis type="number" dataKey="size" range={[60, 800]} />
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload;
                        return (
                          <div className="bg-[#1a1a2e] border border-[#2d2d4d] rounded-lg p-3 text-sm">
                            <p className="text-white font-semibold">{data.name}</p>
                            <p className="text-gray-400 text-xs">AI Score: {data.x}</p>
                            <p className="text-gray-400 text-xs">Marketing Focus: {data.y}</p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Scatter data={positioningMatrix} isAnimationActive>
                    {positioningMatrix.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} fillOpacity={entry.name === "Inovient" ? 1 : 0.7} />
                    ))}
                  </Scatter>
                </ScatterChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>
        </section>

        {/* Competitor Detail Cards */}
        <section>
          <SectionHeader eyebrow="Profiles" title="Competitor Deep Dives" />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {competitors.map((comp) => (
              <div
                key={comp.id}
                role="button"
                tabIndex={0}
                className={`glass-card p-5 transition-all duration-300 hover:border-white/10 cursor-pointer ${
                  comp.id === "inovient" ? "ring-1 ring-indigo-500/40" : ""
                }`}
                onClick={() => setActiveCompetitor(comp.id === activeCompetitor ? null : comp.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveCompetitor(comp.id === activeCompetitor ? null : comp.id);
                  }
                }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: comp.color }} />
                    <div>
                      <h3 className={`text-sm font-semibold ${comp.id === "inovient" ? "text-indigo-300" : "text-white"}`}>
                        {comp.name}
                      </h3>
                      <p className="text-xs text-gray-500">{comp.targetMarket}</p>
                    </div>
                  </div>
                  {comp.id === "inovient" && (
                    <span className="text-[9px] font-bold bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 px-2 py-0.5 rounded-full uppercase tracking-wider">
                      Us
                    </span>
                  )}
                </div>

                <p className="text-xs text-gray-500 italic mb-3">&ldquo;{comp.tagline}&rdquo;</p>

                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-gray-400">{comp.pricing}</span>
                  <span className="text-xs font-semibold text-white">{comp.arr}</span>
                </div>

                {/* Score bars */}
                <div className="space-y-1.5">
                  {[
                    { label: "NPS", key: "npsAnalytics" },
                    { label: "Media Mix", key: "mediaMix" },
                    { label: "Strategy AI", key: "strategyDepth" },
                  ].map(({ label, key }) => (
                    <div key={key} className="flex items-center gap-2">
                      <span className="text-[10px] text-gray-500 w-16">{label}</span>
                      <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all"
                          style={{
                            width: `${comp.radarScores[key as keyof typeof comp.radarScores]}%`,
                            backgroundColor: comp.color,
                          }}
                        />
                      </div>
                      <span className="text-[10px] text-gray-500 w-6 text-right">
                        {comp.radarScores[key as keyof typeof comp.radarScores]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SWOT Analysis */}
        <section className="pb-16">
          <SectionHeader
            eyebrow="SWOT Analysis"
            title="Inovient Strategic Position"
            description="Internal strengths and weaknesses mapped against external market opportunities and threats."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: "Strengths",
                items: swotData.strengths,
                icon: CheckCircle2,
                color: "text-emerald-400",
                bg: "bg-emerald-500/5 border-emerald-500/20",
                dotColor: "bg-emerald-400",
              },
              {
                title: "Weaknesses",
                items: swotData.weaknesses,
                icon: XCircle,
                color: "text-rose-400",
                bg: "bg-rose-500/5 border-rose-500/20",
                dotColor: "bg-rose-400",
              },
              {
                title: "Opportunities",
                items: swotData.opportunities,
                icon: TrendingUp,
                color: "text-indigo-400",
                bg: "bg-indigo-500/5 border-indigo-500/20",
                dotColor: "bg-indigo-400",
              },
              {
                title: "Threats",
                items: swotData.threats,
                icon: Shield,
                color: "text-amber-400",
                bg: "bg-amber-500/5 border-amber-500/20",
                dotColor: "bg-amber-400",
              },
            ].map(({ title, items, icon: Icon, color, bg, dotColor }) => (
              <div key={title} className={`glass-card p-6 border ${bg}`}>
                <div className="flex items-center gap-2 mb-4">
                  <Icon className={`w-5 h-5 ${color}`} />
                  <h3 className={`font-semibold ${color}`}>{title}</h3>
                </div>
                <ul className="space-y-2.5">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <div className={`w-1.5 h-1.5 rounded-full ${dotColor} mt-1.5 flex-shrink-0`} />
                      <span className="text-sm text-gray-300 leading-relaxed">{item}</span>
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
