import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  variant?: "light" | "dark";
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, align = "center", variant = "light", className }: SectionHeadingProps) {
  return (
    <div className={cn("mx-auto max-w-3xl", align === "center" && "text-center", className)}>
      {eyebrow ? (
        <p className={cn("mb-3 text-xs font-bold uppercase tracking-[0.24em]", variant === "dark" ? "text-[#D4AF37]" : "text-[#1E40FF]")}>{eyebrow}</p>
      ) : null}
      <h2 className={cn("font-display text-3xl leading-tight sm:text-4xl md:text-5xl", variant === "dark" ? "text-white" : "text-slate-950")}>{title}</h2>
      {description ? (
        <p className={cn("mt-5 text-base leading-8 sm:text-lg", variant === "dark" ? "text-slate-300" : "text-slate-600")}>{description}</p>
      ) : null}
    </div>
  );
}
