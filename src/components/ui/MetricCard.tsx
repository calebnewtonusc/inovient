import { cn } from "@/lib/utils";

interface MetricCardProps {
  label: string;
  value: string;
  delta?: string;
  deltaPositive?: boolean;
  note?: string;
  accent?: boolean;
  className?: string;
}

export function MetricCard({
  label,
  value,
  delta,
  deltaPositive = true,
  note,
  accent,
  className,
}: MetricCardProps) {
  return (
    <div className={cn(accent ? "card-accent" : "card", "p-5", className)}>
      <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-[#38385A] mb-3">
        {label}
      </p>
      <p className="text-2xl sm:text-3xl font-black font-mono text-[#EBEBF5] tracking-tight leading-none">
        {value}
      </p>
      {delta && (
        <p
          className={cn(
            "text-xs font-mono mt-2",
            deltaPositive ? "text-[#22D3A4]" : "text-[#F87171]"
          )}
        >
          {deltaPositive ? "+" : ""}
          {delta}
        </p>
      )}
      {note && (
        <p className="text-xs text-[#38385A] mt-1.5 leading-relaxed">{note}</p>
      )}
    </div>
  );
}
