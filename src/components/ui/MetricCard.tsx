"use client";

import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  subtitle?: string;
  change?: number;
  changeLabel?: string;
  icon?: React.ReactNode;
  color?: "indigo" | "purple" | "sky" | "emerald" | "amber" | "rose";
  className?: string;
  delay?: number;
}

const colorMap = {
  indigo: {
    icon: "bg-indigo-500/10 text-indigo-400",
    badge: "text-indigo-400",
    glow: "hover:shadow-indigo-500/10",
  },
  purple: {
    icon: "bg-purple-500/10 text-purple-400",
    badge: "text-purple-400",
    glow: "hover:shadow-purple-500/10",
  },
  sky: {
    icon: "bg-sky-500/10 text-sky-400",
    badge: "text-sky-400",
    glow: "hover:shadow-sky-500/10",
  },
  emerald: {
    icon: "bg-emerald-500/10 text-emerald-400",
    badge: "text-emerald-400",
    glow: "hover:shadow-emerald-500/10",
  },
  amber: {
    icon: "bg-amber-500/10 text-amber-400",
    badge: "text-amber-400",
    glow: "hover:shadow-amber-500/10",
  },
  rose: {
    icon: "bg-rose-500/10 text-rose-400",
    badge: "text-rose-400",
    glow: "hover:shadow-rose-500/10",
  },
};

export function MetricCard({
  title,
  value,
  subtitle,
  change,
  changeLabel,
  icon,
  color = "indigo",
  className,
}: MetricCardProps) {
  const colors = colorMap[color];

  return (
    <div
      className={cn(
        "glass-card p-5 transition-all duration-300 hover:border-white/10 hover:shadow-xl group",
        colors.glow,
        className
      )}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={cn("p-2.5 rounded-xl", colors.icon)}>
          {icon}
        </div>
        {change !== undefined && (
          <div
            className={cn(
              "flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full",
              change > 0
                ? "bg-emerald-500/10 text-emerald-400"
                : change < 0
                ? "bg-rose-500/10 text-rose-400"
                : "bg-gray-500/10 text-gray-400"
            )}
          >
            {change > 0 ? (
              <TrendingUp className="w-3 h-3" />
            ) : change < 0 ? (
              <TrendingDown className="w-3 h-3" />
            ) : (
              <Minus className="w-3 h-3" />
            )}
            {Math.abs(change)}%
          </div>
        )}
      </div>

      <div>
        <p className="text-2xl font-bold text-white tracking-tight mb-1">{value}</p>
        <p className="text-sm font-medium text-gray-300 mb-1">{title}</p>
        {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
        {changeLabel && (
          <p className="text-xs text-gray-500 mt-1">{changeLabel}</p>
        )}
      </div>
    </div>
  );
}
