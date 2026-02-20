"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/", label: "Overview" },
  { href: "/market-research", label: "Market" },
  { href: "/competitor-analysis", label: "Competitors" },
  { href: "/roi-modeling", label: "ROI Model" },
  { href: "/pricing-strategy", label: "Pricing" },
  { href: "/product-positioning", label: "Positioning" },
];

export function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0C0C14] border-b border-[#26263A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Brand mark */}
            <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <rect width="7" height="7" fill="#7C5CF6" />
                <rect x="11" width="7" height="7" fill="#7C5CF6" fillOpacity="0.35" />
                <rect y="11" width="7" height="7" fill="#7C5CF6" fillOpacity="0.35" />
                <rect x="11" y="11" width="7" height="7" fill="#7C5CF6" fillOpacity="0.12" />
              </svg>
              <span className="text-[#EBEBF5] text-sm font-bold tracking-[0.08em]">INOVIENT</span>
            </Link>

            {/* Desktop nav: text only, no icons */}
            <div className="hidden md:flex items-center">
              {navItems.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "px-3 py-1.5 text-sm transition-colors",
                    pathname === href
                      ? "text-[#EBEBF5] font-medium"
                      : "text-[#6A6A90] hover:text-[#ABABC5]"
                  )}
                >
                  {label}
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-4 flex-shrink-0">
              <a
                href="https://www.inovient.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-mono text-[#38385A] hover:text-[#7C5CF6] transition-colors uppercase tracking-[0.2em]"
              >
                inovient.io ↗
              </a>
              <span className="text-[10px] font-mono text-[#38385A] uppercase tracking-[0.2em]">
                Q1 2026
              </span>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden p-1.5 text-[#6A6A90] hover:text-[#EBEBF5] transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-[#26263A] bg-[#0C0C14]">
            <div className="px-4 py-2 space-y-0.5">
              {navItems.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "block px-3 py-2.5 text-sm transition-colors",
                    pathname === href
                      ? "text-[#EBEBF5] font-medium"
                      : "text-[#6A6A90] hover:text-[#ABABC5]"
                  )}
                >
                  {label}
                </Link>
              ))}
              <a
                href="https://www.inovient.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2.5 text-sm text-[#38385A] hover:text-[#7C5CF6] transition-colors"
              >
                inovient.io ↗
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
