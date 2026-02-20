"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { CheckCircle2, Target, Users, Globe, Zap } from "lucide-react";

const positioningStatement = {
  for: "Marketing teams and agencies at mid-market companies (100–1,000 employees)",
  who: "need enterprise-grade competitive intelligence and media analytics but can't justify $150K+/year contracts",
  is: "the only integrated AI marketing intelligence platform",
  that: "combines competitor review sentiment benchmarking, managed media mix modeling, and AI strategy recommendations in one workflow, capabilities that previously required three separate enterprise contracts",
  unlike:
    "enterprise-only tools like Market Logic ($150K+ contracts), social listening platforms like Sprinklr ($150K+ ACV), or competitive intelligence point solutions like Klue ($20K–$80K/yr) that don't cover media mix or strategy",
  our: "Morpheus was built by marketing practitioners with 40+ years of domain expertise, not a generic AI layer. Every recommendation reflects how real marketing decisions actually get made.",
};

const personas = [
  {
    title: "VP of Marketing",
    company: "Series B–D SaaS · 50–500 employees",
    description:
      "Spends 4+ hours per week manually pulling competitor intel and briefing agencies. Morpheus delivers competitor review sentiment, media mix recommendations, and board-ready briefs in minutes.",
    icon: Target,
    accentColor: "#22D3A4",
    budget: "$900–$2,500/mo",
    tier: "Growth → Enterprise",
  },
  {
    title: "CMO / Chief Marketing Officer",
    company: "Enterprise · 1,000+ employees",
    description:
      "Lacks real-time visibility into how customers perceive their brand vs. competitors across channels. Morpheus provides unified competitor review sentiment benchmarking, automated media mix optimization, and executive-ready AI briefings.",
    icon: Globe,
    accentColor: "#38BDF8",
    budget: "$2,499–$10,000+/mo",
    tier: "Enterprise",
  },
  {
    title: "Marketing Director",
    company: "Regional business · 50–200 employees",
    description:
      "Can't afford enterprise tools or agencies, but needs strategic marketing intelligence to compete. Morpheus delivers Fortune 500-grade AI strategy at SMB price, replacing 3 tools with one platform.",
    icon: Users,
    accentColor: "#22D3A4",
    budget: "$299–$899/mo",
    tier: "Starter → Growth",
  },
  {
    title: "Marketing Agency Principal",
    company: "Digital/creative agency · 10–100 FTEs",
    description:
      "Clients demand data-driven strategy but the agency lacks scalable AI infrastructure. White-label Morpheus reports at 50% margin, delivering $10K/mo agency value for $450/mo.",
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
    body: "40+ years of domain expertise is embedded in every recommendation. Not generic AI: opinionated, marketing-native intelligence.",
    color: "#22D3A4",
  },
  {
    pillar: "Competitor Intelligence",
    headline: "Know what your competitors' customers actually think",
    body: "Competitor review sentiment aggregated from G2, Trustpilot, and app stores, updated continuously. The brand health intelligence that enterprise teams pay Brandwatch $40K+/year for, at mid-market pricing.",
    color: "#38BDF8",
  },
  {
    pillar: "Smart Budget Allocation",
    headline: "Stop guessing where to put your budget",
    body: "Instant media mix modeling tells you exactly which channels to invest in, based on your industry, customer segment, and competitive dynamics.",
    color: "#22D3A4",
  },
  {
    pillar: "Strategy at Scale",
    headline: "Your AI Chief Strategy Officer",
    body: "Morpheus synthesizes market signals, competitor review intelligence, and media performance into personalized, actionable growth strategies, updated daily.",
    color: "#FBBF24",
  },
];

type MatrixValue = boolean | "partial";

const differentiationMatrix: Array<{
  capability: string;
  morpheus: MatrixValue;
  marketLogic: MatrixValue;
  sprinklr: MatrixValue;
  klue: MatrixValue;
  hubspot: MatrixValue;
}> = [
  { capability: "Competitor Review Sentiment Benchmarking", morpheus: true, marketLogic: false, sprinklr: true, klue: "partial", hubspot: false },
  { capability: "AI Strategy Playbooks", morpheus: true, marketLogic: "partial", sprinklr: false, klue: false, hubspot: "partial" },
  { capability: "Media Mix Modeling", morpheus: true, marketLogic: false, sprinklr: false, klue: false, hubspot: false },
  { capability: "Competitor Intelligence", morpheus: true, marketLogic: true, sprinklr: true, klue: true, hubspot: false },
  { capability: "Accessible Mid-Market Pricing (<$5K/mo)", morpheus: true, marketLogic: false, sprinklr: false, klue: "partial", hubspot: "partial" },
  { capability: "Marketing-Native AI Recommendations", morpheus: true, marketLogic: "partial", sprinklr: false, klue: false, hubspot: false },
  { capability: "Sales Battlecard Generation", morpheus: false, marketLogic: false, sprinklr: false, klue: true, hubspot: false },
  { capability: "AI Content Generation", morpheus: true, marketLogic: false, sprinklr: "partial", klue: false, hubspot: true },
];

function Indicator({ value }: { value: MatrixValue }) {
  if (value === true) return <CheckCircle2 className="w-3.5 h-3.5 text-[#22D3A4] mx-auto" />;
  if (value === "partial") return <div className="w-1.5 h-1.5 rounded-full bg-[#FBBF24] mx-auto" />;
  return <div className="w-3 h-px bg-[#26263A] mx-auto" />;
}

export default function ProductPositioningPage() {
  return (
    <div className="min-h-screen">
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
        {/* 01: Positioning Statement */}
        <section>
          <SectionHeader index="01" label="Core Statement" title="Positioning Statement" />
          <div className="card p-8">
            <div className="space-y-0 text-sm">
              {[
                { label: "For", text: positioningStatement.for },
                { label: "Who", text: positioningStatement.who },
                { label: "Morpheus is", text: positioningStatement.is },
                { label: "That", text: positioningStatement.that },
                { label: "Unlike", text: positioningStatement.unlike },
                { label: "Our product", text: positioningStatement.our },
              ].map(({ label, text }) => (
                <div key={label} className="flex gap-5 py-4 border-b border-[#1E1E2E] last:border-0">
                  <span className="text-[10px] font-mono uppercase tracking-[0.12em] text-[#22D3A4] w-20 flex-shrink-0 pt-0.5">
                    {label}
                  </span>
                  <p className="text-[#EBEBF5] leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 02: Messaging Pillars */}
        <section>
          <SectionHeader index="02" label="Messaging" title="4 Core Messaging Pillars" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {messagingPillars.map(({ pillar, headline, body, color }) => (
              <div key={pillar} className="card p-7">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
                  <span className="text-[10px] font-mono uppercase tracking-[0.15em]" style={{ color }}>
                    {pillar}
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#EBEBF5] mb-3">{headline}</h3>
                <p className="text-sm text-[#6A6A90] leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 03: ICP Personas */}
        <section>
          <SectionHeader
            index="03"
            label="Ideal Customer Profile"
            title="Target Personas"
            description="Four validated buyer personas with distinct pain points, value drivers, and willingness to pay."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {personas.map(({ title, company, description, icon: Icon, accentColor, budget, tier }) => (
              <div key={title} className="card p-7">
                <div className="flex items-start gap-3 mb-4">
                  <Icon className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: accentColor }} />
                  <div>
                    <h3 className="text-sm font-semibold text-[#EBEBF5]">{title}</h3>
                    <p className="text-xs text-[#38385A] font-mono mt-0.5">{company}</p>
                  </div>
                </div>
                <p className="text-sm text-[#6A6A90] leading-relaxed mb-5">{description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-[#1E1E2E]">
                  <span className="text-sm font-mono font-semibold text-[#EBEBF5]">{budget}</span>
                  <span className="text-xs font-mono" style={{ color: accentColor }}>{tier}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 04: Differentiation Matrix */}
        <section className="pb-16">
          <SectionHeader
            index="04"
            label="Competitive Differentiation"
            title="Feature Differentiation Matrix"
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
                      { name: "Morpheus", color: "#22D3A4", isUs: true },
                      { name: "Market Logic", color: "#38BDF8", isUs: false },
                      { name: "Sprinklr", color: "#F87171", isUs: false },
                      { name: "Klue", color: "#FBBF24", isUs: false },
                      { name: "HubSpot", color: "#22D3A4", isUs: false },
                    ].map(({ name, color, isUs }) => (
                      <th key={name} className="text-center px-4 py-3.5">
                        <div className="flex flex-col items-center gap-1">
                          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
                          <span className={`text-[10px] font-mono ${isUs ? "text-[#22D3A4] font-bold" : "text-[#38385A]"}`}>
                            {name}
                          </span>
                          {isUs && <span className="text-[8px] font-mono text-[#22D3A4] uppercase tracking-wider">us</span>}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {differentiationMatrix.map((row, i) => (
                    <tr
                      key={row.capability}
                      className={`border-b border-[#1E1E2E] last:border-0 transition-colors hover:bg-[#17171F] ${i % 2 === 0 ? "" : "bg-[#17171F]/40"}`}
                    >
                      <td className="px-5 py-3.5">
                        <span className="text-sm text-[#EBEBF5]">{row.capability}</span>
                      </td>
                      <td className="px-4 py-3.5 text-center"><Indicator value={row.morpheus} /></td>
                      <td className="px-4 py-3.5 text-center"><Indicator value={row.marketLogic} /></td>
                      <td className="px-4 py-3.5 text-center"><Indicator value={row.sprinklr} /></td>
                      <td className="px-4 py-3.5 text-center"><Indicator value={row.klue} /></td>
                      <td className="px-4 py-3.5 text-center"><Indicator value={row.hubspot} /></td>
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
                <div className="w-1.5 h-1.5 rounded-full bg-[#FBBF24]" /> Partial
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
