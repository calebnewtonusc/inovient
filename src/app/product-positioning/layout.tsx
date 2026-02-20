import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Positioning | Inovient Strategy Platform",
  description: "Morpheus AI product positioning framework — messaging pillars, ICP personas, and competitive differentiation matrix.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
