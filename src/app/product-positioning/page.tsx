"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { ChartCard } from "@/components/ui/ChartCard";
import { competitors } from "@/data/competitorData";
import { CheckCircle2, ArrowRight, Target, Users, Globe, Zap, MessageSquare } from "lucide-react";

const positioningStatement = {
  for: "Marketing teams and agencies at mid-market to enterprise companies",
  who: "need to move from intuition-based to AI-driven marketing decisions",
  morpheus: "Morpheus by Inovient",
  is: "the only end-to-end AI marketing intelligence platform",
  that: "combines real-time NPS competitor benchmarking, instant media mix modeling, and personalized strategy AI in one unified workflow",
  unlike: "enterprise-only tools like Market Logic ($50K+ minimums), social-listening point solutions like Sprinklr, or generic AI assistants like Microsoft Copilot",
  our: "Morpheus was built by marketing practitioners with 40+ years of domain expertise — making it the platform that actually understands how marketing decisions get made.",
};

const personas = [
  {
    title: "VP of Marketing",
    company: "Series B–D SaaS (50–500 employees)",
    pain: "Spends 4+ hours per week manually pulling competitor intel and briefing agencies",
    gain: "Gets competitor NPS scores, media mix recommendations, and board-ready strategy briefs in minutes",
    icon: Target,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    budget: "$900–$2,500/mo",
    tier: "Growth → Enterprise",
  },
  {
    title: "CMO / Chief Marketing Officer",
    company: "Enterprise (1,000+ employees)",
    pain: "Lacks real-time visibility into how customers perceive their brand vs. competitors across channels",
    gain: "Unified NPS dashboard with competitor benchmarking, automated media mix optimization, and executive-ready AI briefings",
    icon: Globe,
    color: "text-sky-400",
    bg: "bg-sky-500/10",
    budget: "$2,499–$10,000+/mo",
    tier: "Enterprise",
  },
  {
    title: "Marketing Director",
    company: "Regional business (50–200 employees)",
    pain: "Can't afford enterprise tools or agencies, but needs strategic marketing intelligence to compete",
    gain: "Fortune 500-grade AI strategy at SMB price — replaces 3 tools with one platform",
    icon: Users,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    budget: "$299–$899/mo",
    tier: "Starter → Growth",
  },
  {
    title: "Marketing Agency Principal",
    company: "Digital/creative agency (10–100 FTEs)",
    pain: "Clients demand data-driven strategy but agency doesn't have scalable AI infrastructure",
    gain: "White-label Morpheus reports at 50% margin — deliver $10K/mo agency value for $450/mo",
    icon: Zap,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
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
    color: "#6366f1",
  },
  {
    pillar: "Competitor Intelligence",
    headline: "Know what your competitors' customers actually think",
    body: "Real-time NPS scores for your brand AND competitors. Spot sentiment shifts before they become revenue problems or opportunities.",
    proof: "Tracks 50+ NPS data signals per competitor per day",
    color: "#0ea5e9",
  },
  {
    pillar: "Smart Budget Allocation",
    headline: "Stop guessing where to put your budget",
    body: "Instant media mix modeling tells you exactly which channels to invest in, based on your industry, customer segment, and current competitive dynamics.",
    proof: "Average 31% improvement in ROAS across media mix recommendations",
    color: "#10b981",
  },
  {
    pillar: "Strategy at Scale",
    headline: "Your AI Chief Strategy Officer",
    body: "Morpheus synthesizes market signals, NPS data, and media performance into personalized, actionable growth strategies — updated daily.",
    proof: "3.8x average ROI within 18 months of implementation",
    color: "#8b5cf6",
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
  { capability: "Real-Time Competitor NPS Benchmarking", morpheus: true, marketLogic: false, sprinklr: "partial", cascade: false, hubspot: false },
  { capability: "AI Strategy Playbooks", morpheus: true, marketLogic: "partial", sprinklr: false, cascade: true, hubspot: "partial" },
  { capability: "Media Mix Modeling", morpheus: true, marketLogic: false, sprinklr: false, cascade: false, hubspot: false },
  { capability: "Competitor Intelligence", morpheus: true, marketLogic: true, sprinklr: true, cascade: false, hubspot: false },
  { capability: "OKR / KPI Execution Tracking", morpheus: "partial", marketLogic: false, sprinklr: false, cascade: true, hubspot: "partial" },
  { capability: "Marketing-Native AI", morpheus: true, marketLogic: "partial", sprinklr: false, cascade: false, hubspot: false },
  { capability: "Accessible Mid-Market Pricing", morpheus: true, marketLogic: false, sprinklr: false, cascade: true, hubspot: "partial" },
  { capability: "AI Content Generation", morpheus: true, marketLogic: false, sprinklr: "partial", cascade: false, hubspot: true },
];

function Indicator({ value }: { value: boolean | "partial" }) {
  if (value === true) return <CheckCircle2 className="w-4 h-4 text-emerald-400 mx-auto" />;
  if (value === "partial") return <div className="w-2 h-2 rounded-full bg-amber-400 mx-auto" title="Partial" />;
  return <div className="w-3 h-0.5 bg-white/20 mx-auto rounded-full" />;
}

export default function ProductPositioningPage() {
  return (
    <div className="min-h-screen">
      <div className="border-b border-white/5 bg-gradient-to-r from-purple-950/30 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <SectionHeader
            eyebrow="Product Positioning"
            title="Morpheus Positioning Framework"
            description="A clear, differentiated positioning strategy that gives Inovient a defensible market position — designed for the AI-native marketing intelligence era."
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Positioning Statement */}
        <section>
          <SectionHeader eyebrow="Core Statement" title="Positioning Statement" />
          <div className="glass-card p-8 gradient-border">
            <div className="space-y-4 text-sm">
              {[
                { label: "For", text: positioningStatement.for },
                { label: "Who", text: positioningStatement.who },
                { label: "Morpheus is", text: positioningStatement.is },
                { label: "That", text: positioningStatement.that },
                { label: "Unlike", text: positioningStatement.unlike },
                { label: "Our product", text: positioningStatement.our },
              ].map(({ label, text }) => (
                <div key={label} className="flex gap-4">
                  <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest w-20 flex-shrink-0 pt-0.5">
                    {label}
                  </span>
                  <p className="text-gray-200 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Messaging Pillars */}
        <section>
          <SectionHeader
            eyebrow="Messaging"
            title="4 Core Messaging Pillars"
            description="Every piece of Inovient communication should connect to one of these four pillars."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {messagingPillars.map(({ pillar, headline, body, proof, color }) => (
              <div key={pillar} className="glass-card p-6 hover:border-white/10 transition-all">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
                  <span className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color }}>
                    {pillar}
                  </span>
                </div>
                <h3 className="text-white font-bold text-base mb-3">{headline}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{body}</p>
                <div className="bg-white/3 rounded-lg p-3 flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-gray-300">{proof}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ICP Personas */}
        <section>
          <SectionHeader
            eyebrow="Ideal Customer Profile"
            title="Target Personas"
            description="Four validated buyer personas — each with distinct pain points, value drivers, and willingness to pay."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {personas.map(({ title, company, pain, gain, icon: Icon, color, bg, budget, tier }) => (
              <div key={title} className="glass-card p-6 hover:border-white/10 transition-all">
                <div className="flex items-start gap-3 mb-4">
                  <div className={`p-2.5 rounded-xl ${bg} flex-shrink-0`}>
                    <Icon className={`w-5 h-5 ${color}`} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{title}</h3>
                    <p className="text-xs text-gray-500">{company}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-rose-400 uppercase tracking-wider mb-1">Pain</p>
                    <p className="text-sm text-gray-300 leading-relaxed">{pain}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1">Gain with Morpheus</p>
                    <p className="text-sm text-gray-300 leading-relaxed">{gain}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
                  <div>
                    <p className="text-xs text-gray-500">Budget</p>
                    <p className="text-sm font-semibold text-white">{budget}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">Recommended Tier</p>
                    <p className={`text-sm font-semibold ${color}`}>{tier}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Differentiation Matrix */}
        <section className="pb-16">
          <SectionHeader
            eyebrow="Competitive Differentiation"
            title="Feature Differentiation Matrix"
            description="How Morpheus stacks up on the 8 capabilities that matter most to marketing decision-makers."
          />
          <div className="glass-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/5">
                    <th className="text-left px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      Capability
                    </th>
                    {[
                      { name: "Morpheus", color: "#6366f1", isUs: true },
                      { name: "Market Logic", color: "#0ea5e9", isUs: false },
                      { name: "Sprinklr", color: "#ec4899", isUs: false },
                      { name: "Cascade", color: "#f59e0b", isUs: false },
                      { name: "HubSpot", color: "#f97316", isUs: false },
                    ].map(({ name, color, isUs }) => (
                      <th key={name} className="text-center px-4 py-4">
                        <div className="flex flex-col items-center gap-1">
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
                          <span className={`text-xs font-semibold ${isUs ? "text-indigo-300" : "text-gray-400"}`}>
                            {name}
                          </span>
                          {isUs && (
                            <span className="text-[9px] text-indigo-400 font-bold uppercase tracking-wider">Us</span>
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
                      className={`border-b border-white/5 last:border-0 transition-colors hover:bg-white/2 ${
                        i % 2 === 0 ? "" : "bg-white/[0.01]"
                      }`}
                    >
                      <td className="px-6 py-3">
                        <span className="text-sm text-gray-200">{row.capability}</span>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <Indicator value={row.morpheus} />
                      </td>
                      <td className="px-4 py-3 text-center">
                        <Indicator value={row.marketLogic} />
                      </td>
                      <td className="px-4 py-3 text-center">
                        <Indicator value={row.sprinklr} />
                      </td>
                      <td className="px-4 py-3 text-center">
                        <Indicator value={row.cascade} />
                      </td>
                      <td className="px-4 py-3 text-center">
                        <Indicator value={row.hubspot} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-6 py-3 border-t border-white/5 flex items-center gap-6 text-xs text-gray-500">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Full feature
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-amber-400" /> Partial / add-on
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-0.5 bg-white/20 rounded-full" /> Not available
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
