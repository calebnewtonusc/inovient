import type { Metadata } from "next";
import ROIModelingClient from "./ROIModelingClient";

export const metadata: Metadata = {
  title: "ROI Modeling | Morpheus AI",
  description:
    "Interactive ROI calculator for Morpheus: model labor savings, revenue uplift, and tool consolidation savings for your marketing organization.",
};

export default function ROIModelingPage() {
  return <ROIModelingClient />;
}
