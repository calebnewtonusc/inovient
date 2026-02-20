import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ROI Modeling | Inovient Strategy Platform",
  description: "Interactive ROI calculator for Morpheus AI. Model labor savings, revenue uplift, and tool consolidation savings in real time.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
