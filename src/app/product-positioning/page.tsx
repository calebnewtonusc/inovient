"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { competitors } from "@/data/competitorData";
import { CheckCircle2, Target, Users, Globe, Zap } from "lucide-react";

const positioningStatement = {
  for: "Marketing teams and agencies at mid-market to enterprise companies",
  who: "need to move from intuition-based to AI-driven marketing decisions",
  morpheus: "Morpheus by Inovient",
  is: "the only end-to-end AI marketing intelligence platform",
  that: "combines real-time NPS competitor benchmarking, instant media mix modeling, and personalized strategy AI in one unified workflow",
  unlike:
    "enterprise-only tools like Market Logic ($50K+ minimums), social-listening solutions like Sprinklr, or generic AI assistants like Microsoft Copilot",
  our: "Morpheus was built by marketing practitioners with 40+ years of domain expertise — making it the platform that actually understands how marketing decisions get made.",
};

const personas = [
  {
    title: "VP of Marketing",
    company: "Series B–D SaaS (50–500 employees)",
    pain: "Spends 4+ hours per week manually pulling competitor intel and briefing agencies",
    gain: "Gets competitor NPS scores, media mix recommendations, and board-ready strategy briefs in minutes",
    icon: Target,
    accentColor: "#7C5CF6",
    budget: "$900–$2,500/mo",
    tier: "Growth → Enterprise",
  },
  {
    title: "CMO / Chief Marketing Officer",
    company: "Enterprise (1,000+ employees)",
    pain: "Lacks real-time visibility into how customers perceive their brand vs. competitors across channels",
    gain: "Unified NPS dashboard with competitor benchmarking, automated media mix optimization, and executive-ready AI briefings",
    icon: Globe,
    accentColor: "#38BDF8",
    budget: "$2,499–$10,000+/mo",
    tier: "Enterprise",
  },
  {
    title: "Marketing Director",
    company: "Regional business (50–200 employees)",
    pain: "Can't afford enterprise tools or agencies, but needs strategic marketing intelligence to compete",
    gain: "Fortune 500-grade AI strategy at SMB price — replaces 3 tools with one platform",
    icon: Users,
    accentColor: "#22D3A4",
    budget: "$299–$899/mo",
    tier: "Starter → Growth",
  },
  {
    title: "Marketing Agency Principal",
    company: "Digital/creative agency (10–100 FTEs)",
    pain: "Clients demand data-driven strategy but agency doesn't have scalable AI infrastructure",
    gain: "White-label Morpheus reports at 50% margin — deliver $10K/mo agency value for $450/mo",
    icon: Zap,
    accentColor: "#FBBF24",
    budget: "$449–$1,249/mo",
    tier: "Growth (reseller)",
  },
];

const messagingPillars = [
  {
    pillar: "Built by Marketers",
    headline: "AI that speaks marketing fluently",
    body: "40+ years of global marketing expertise is embedded into every recommendation Morpheus makes. Not generic AI — opinionated, marketing-native intelligence.",
    proof: "Intuit, Pearl Continental, NY212 trust Morpheus for strategic decisions",
    color: "#7C5CF6",
  },
  {
    pillar: "Competitor Intelligence",
    headline: "Know what your competitors' customers actually think",
    body: "Real-time NPS scores for your brand AND competitors. Spot sentiment shifts before they become revenue problems or opportunities.",
    proof: "Tracks 50+ NPS data signals per competitor per day",
    color: "#38BDF8",
  },
  {
    pillar: "Smart Budget Allocation",
    headline: "Stop guessing where to put your budget",
    body: "Instant media mix modeling tells you exactly which channels to invest in, based on your industry, customer segment, and current competitive dynamics.",
    proof: "Average 31% improvement in ROAS across media mix recommendations",
    color: "#22D3A4",
  },
  {
    pillar: "Strategy at Scale",
    headline: "Your AI Chief Strategy Officer",
    body: "Morpheus synthesizes market signals, NPS data, and media performance into personalized, actionable growth strategies — updated daily.",
    proof: "3.8x average ROI within 18 months of implementation",
    color: "#FBBF24",
  },
];

type MatrixValue = boolean | "partial";

const differentiationMatrix: Array<{
  capability: string;
  morpheus: MatrixValue;
  marketLogic: MatrixValue;
  sprinklr: MatrixValue;
  cascade: MatrixValue;
  hubspot: MatrixValue;
}> = [
  {
    capability: "Real-Time Competitor NPS Benchmarking",
    morpheus: true,
    marketLogic: false,
    sprinklr: "partial",
    cascade: false,
    hubspot: false,
  },
  {
    capability: "AI Strategy Playbooks",
    morpheus: true,
    marketLogic: "partial",
    sprinklr: false,
    cascade: true,
    hubspot: "partial",
  },
  {
    capability: "Media Mix Modeling",
    morpheus: true,
    marketLogic: false,
    sprinklr: false,
    cascade: false,
    hubspot: false,
  },
  {
    capability: "Competitor Intelligence",
    morpheus: true,
    marketLogic: true,
    sprinklr: true,
    cascade: false,
    hubspot: false,
  },
  {
    capability: "OKR / KPI Execution Tracking",
    morpheus: "partial",
    marketLogic: false,
    sprinklr: false,
    cascade: true,
    hubspot: "partial",
  },
  {
    capability: "Marketing-Native AI",
    morpheus: true,
    marketLogic: "partial",
    sprinklr: false,
    cascade: false,
    hubspot: false,
  },
  {
    capability: "Accessible Mid-Market Pricing",
    morpheus: true,
    marketLogic: false,
    sprinklr: false,
    cascade: true,
    hubspot: "partial",
  },
  {
    capability: "AI Content Generation",
    morpheus: true,
    marketLogic: false,
    sprinklr: "partial",
    cascade: false,
    hubspot: true,
  },
];

function Indicator({ value }: { value: MatrixValue }) {
  if (value === true)
    return <CheckCircle2 className="w-3.5 h-3.5 text-[#22D3A4] mx-auto" />;
  if (value === "partial")
    return (
      <div className="w-1.5 h-1.5 rounded-full bg-[#FBBF24] mx-auto" title="Partial" />
    );
  return <div className="w-3 h-px bg-[#26263A] mx-auto" />;
}

export default function ProductPositioningPage() {
  return (
    <div className="min-h-screen">
      {/* Page header */}
      <div className="border-b border-[#26263A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <SectionHeader
            label="Product Positioning"
            title="Morpheus Positioning Framework"
            description="A clear, differentiated positioning strategy that gives Inovient a defensible market position in the AI-native marketing intelligence era."
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
        {/* ─── 01: Positioning Statement ────────────────────── */}
        <section>
          <SectionHeader index="01" label="Core Statement" title="Positioning Statement" />
          <div className="card p-8">
            <div className="space-y-4 text-sm">
              {[
                { label: "For", text: positioningStatement.for },
                { label: "Who", text: positioningStatement.who },
                { label: "Morpheus is", text: positioningStatement.is },
                { label: "That", text: positioningStatement.that },
                { label: "Unlike", text: positioningStatement.unlike },
                { label: "Our product", text: positioningStatement.our },
              ].map(({ label, text }) => (
                <div key={label} className="flex gap-5 py-3 border-b border-[#1E1E2E] last:border-0">
                  <span className="text-[10px] font-mono uppercase tracking-[0.12em] text-[#7C5CF6] w-20 flex-shrink-0 pt-0.5">
                    {label}
                  </span>
                  <p className="text-[#EBEBF5] leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 02: Messaging Pillars ────────────────────────── */}
        <section>
          <SectionHeader
            index="02"
            label="Messaging"
            title="4 Core Messaging Pillars"
            description="Every piece of Inovient communication should connect to one of these four pillars."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {messagingPillars.map(({ pillar, headline, body, proof, color }) => (
              <div key={pillar} className="card p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
                  <span
                    className="text-[10px] font-mono uppercase tracking-[0.15em]"
                    style={{ color }}
                  >
                    {pillar}
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#EBEBF5] mb-3">{headline}</h3>
                <p className="text-sm text-[#6A6A90] leading-relaxed mb-4">{body}</p>
                <div
                  className="rounded p-3 flex items-start gap-2"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#22D3A4] flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-[#6A6A90]">{proof}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── 03: ICP Personas ─────────────────────────────── */}
        <section>
          <SectionHeader
            index="03"
            label="Ideal Customer Profile"
            title="Target Personas"
            description="Four validated buyer personas — each with distinct pain points, value drivers, and willingness to pay."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {personas.map(({ title, company, pain, gain, icon: Icon, accentColor, budget, tier }) => (
              <div key={title} className="card p-6">
                <div className="flex items-start gap-3 mb-5">
                  <Icon className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: accentColor }} />
                  <div>
                    <h3 className="text-sm font-semibold text-[#EBEBF5]">{title}</h3>
                    <p className="text-xs text-[#38385A] font-mono">{company}</p>
                  </div>
                </div>
                <div className="space-y-4 mb-5">
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-[0.12em] text-[#F87171] mb-1.5">
                      Pain
                    </p>
                    <p className="text-sm text-[#EBEBF5] leading-relaxed">{pain}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-[0.12em] text-[#22D3A4] mb-1.5">
                      Gain with Morpheus
                    </p>
                    <p className="text-sm text-[#EBEBF5] leading-relaxed">{gain}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-[#1E1E2E]">
                  <div>
                    <p className="text-[10px] font-mono text-[#38385A] mb-0.5">Budget</p>
                    <p className="text-sm font-mono font-semibold text-[#EBEBF5]">{budget}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-mono text-[#38385A] mb-0.5">Recommended Tier</p>
                    <p className="text-sm font-mono font-semibold" style={{ color: accentColor }}>
                      {tier}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── 04: Differentiation Matrix ───────────────────── */}
        <section className="pb-16">
          <SectionHeader
            index="04"
            label="Competitive Differentiation"
            title="Feature Differentiation Matrix"
            description="How Morpheus stacks up on the 8 capabilities that matter most to marketing decision-makers."
          />
          <div className="card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#26263A]">
                    <th className="text-left px-5 py-3.5 text-[10px] font-mono uppercase tracking-[0.12em] text-[#38385A]">
                      Capability
                    </th>
                    {[
                      { name: "Morpheus", color: "#7C5CF6", isUs: true },
                      { name: "Market Logic", color: "#38BDF8", isUs: false },
                      { name: "Sprinklr", color: "#F87171", isUs: false },
                      { name: "Cascade", color: "#FBBF24", isUs: false },
                      { name: "HubSpot", color: "#22D3A4", isUs: false },
                    ].map(({ name, color, isUs }) => (
                      <th key={name} className="text-center px-4 py-3.5">
                        <div className="flex flex-col items-center gap-1">
                          <div
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: color }}
                          />
                          <span
                            className={`text-[10px] font-mono ${
                              isUs ? "text-[#7C5CF6] font-bold" : "text-[#38385A]"
                            }`}
                          >
                            {name}
                          </span>
                          {isUs && (
                            <span className="text-[8px] font-mono text-[#7C5CF6] uppercase tracking-wider">
                              us
                            </span>
                          )}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {differentiationMatrix.map((row, i) => (
                    <tr
                      key={row.capability}
                      className={`border-b border-[#1E1E2E] last:border-0 transition-colors hover:bg-[#17171F] ${
                        i % 2 === 0 ? "" : "bg-[#17171F]/40"
                      }`}
                    >
                      <td className="px-5 py-3.5">
                        <span className="text-sm text-[#EBEBF5]">{row.capability}</span>
                      </td>
                      <td className="px-4 py-3.5 text-center">
                        <Indicator value={row.morpheus} />
                      </td>
                      <td className="px-4 py-3.5 text-center">
                        <Indicator value={row.marketLogic} />
                      </td>
                      <td className="px-4 py-3.5 text-center">
                        <Indicator value={row.sprinklr} />
                      </td>
                      <td className="px-4 py-3.5 text-center">
                        <Indicator value={row.cascade} />
                      </td>
                      <td className="px-4 py-3.5 text-center">
                        <Indicator value={row.hubspot} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-5 py-3 border-t border-[#26263A] flex items-center gap-6 text-xs text-[#38385A]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3 text-[#22D3A4]" /> Full feature
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#FBBF24]" /> Partial / add-on
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-px bg-[#26263A]" /> Not available
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
