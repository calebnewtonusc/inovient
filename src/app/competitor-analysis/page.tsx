import type { Metadata } from "next";
import CompetitorAnalysisClient from "./CompetitorAnalysisClient";

export const metadata: Metadata = {
  title: "Competitor Analysis | Morpheus AI",
  description:
    "Deep dive into the competitive landscape: 7 key competitors scored across 8 strategic dimensions, with SWOT analysis and positioning matrix for Morpheus AI marketing intelligence.",
};

export default function CompetitorAnalysisPage() {
  return <CompetitorAnalysisClient />;
}
