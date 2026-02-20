import { cn } from "@/lib/utils";

interface ChartCardProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  action?: React.ReactNode;
}

export function ChartCard({
  title,
  subtitle,
  children,
  className,
  action,
}: ChartCardProps) {
  return (
    <div className={cn("card p-6", className)}>
      <div className="flex items-start justify-between mb-5">
        <div>
          <h3 className="text-sm font-semibold text-[#EBEBF5]">{title}</h3>
          {subtitle && (
            <p className="text-xs text-[#38385A] mt-0.5 leading-relaxed">{subtitle}</p>
          )}
        </div>
        {action && <div className="flex-shrink-0 ml-4">{action}</div>}
      </div>
      {children}
    </div>
  );
}
