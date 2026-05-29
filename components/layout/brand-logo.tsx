import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

export function BrandLogo({ variant = "dark", className }: BrandLogoProps) {
  return (
    <Link href="/" className={cn("flex items-center gap-3", className)} aria-label="AcdyOn home">
      <span className="relative h-11 w-11 overflow-hidden rounded-[8px] bg-slate-950 shadow-sm">
        <Image src="/acdyon-logo.png" alt="AcdyOn logo" fill sizes="44px" className="object-cover" priority />
      </span>
      <span className={cn("font-display text-2xl font-semibold", variant === "light" ? "text-white" : "text-slate-950")}>
        AcdyOn
      </span>
    </Link>
  );
}
