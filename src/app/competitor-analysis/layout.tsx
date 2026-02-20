import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Competitor Analysis | Inovient Strategy Platform",
  description: "Deep competitive landscape analysis of AI marketing platforms. Radar charts, positioning matrix, and SWOT for Morpheus.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
