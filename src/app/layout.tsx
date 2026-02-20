import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Inovient | AI SaaS Pricing & Market Strategy",
  description:
    "Tech consulting-driven market research, competitor analysis, and ROI modeling for Inovient's Morpheus AI platform.",
  keywords: ["AI SaaS", "Pricing Strategy", "Market Research", "ROI Modeling", "Inovient"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0C0C14] min-h-screen text-[#EBEBF5]`}
      >
        <Navigation />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
