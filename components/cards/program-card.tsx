import Link from "next/link";
import { ArrowUpRight, type LucideIcon } from "lucide-react";

type ProgramCardProps = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

export function ProgramCard({ title, description, href, icon: Icon }: ProgramCardProps) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-[8px] border border-slate-200 bg-white p-7 luxury-shadow transition duration-300 hover:-translate-y-1 hover:border-[#1E40FF]/30"
    >
      <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#22D3EE]/10 blur-2xl transition group-hover:bg-[#1E40FF]/15" />
      <div className="mb-8 flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-[8px] bg-slate-950 text-white">
          <Icon className="h-5 w-5" />
        </div>
        <ArrowUpRight className="h-5 w-5 text-slate-400 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#1E40FF]" />
      </div>
      <h3 className="text-xl font-semibold text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
      <span className="mt-6 inline-flex text-sm font-semibold text-[#1E40FF]">
        Explore pathway
      </span>
    </Link>
  );
}
