import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  index?: string;
  label?: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeader({
  index,
  label,
  title,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-10", className)}>
      {(index || label) && (
        <div className="flex items-center gap-2 mb-3">
          {index && (
            <span className="text-[10px] font-mono text-[#38385A]">{index}</span>
          )}
          {index && label && <div className="h-px w-3 bg-[#26263A]" />}
          {label && (
            <span className="text-[10px] font-mono text-[#38385A] uppercase tracking-[0.15em]">
              {label}
            </span>
          )}
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl font-bold text-[#EBEBF5] tracking-tight leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-2.5 text-sm text-[#6A6A90] leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
