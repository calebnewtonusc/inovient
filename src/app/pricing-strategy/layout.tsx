import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Strategy | Inovient Strategy Platform",
  description: "Sustainable 3-tier pricing framework for Morpheus AI. $299 to $2,499/mo with 78% gross margins and LTV:CAC of 16:1.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
