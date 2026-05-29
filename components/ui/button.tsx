import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "dark" | "ghost";
  className?: string;
};

export function CTAButton({ href, children, variant = "primary", className }: CTAButtonProps) {
  const variants = {
    primary:
      "bg-[#1E40FF] text-white shadow-[0_18px_40px_rgba(30,64,255,0.22)] hover:bg-[#1937dd]",
    secondary:
      "border border-slate-200 bg-white/85 text-slate-950 hover:border-[#1E40FF]/30 hover:bg-white",
    dark: "bg-white text-slate-950 hover:bg-slate-100",
    ghost: "text-slate-700 hover:bg-slate-100",
  };

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full px-6 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5",
        variants[variant],
        className,
      )}
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}
