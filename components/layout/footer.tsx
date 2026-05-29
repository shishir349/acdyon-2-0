import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BrandLogo } from "@/components/layout/brand-logo";
import { contactDetails, socialLinks } from "@/lib/data/site";

const footerGroups = [
  {
    title: "Programs",
    links: [
      { label: "Executive Certifications", href: "/programs" },
      { label: "Corporate Training", href: "/contact" },
      { label: "AI & Technology", href: "/ai-courses" },
    ],
  },
  {
    title: "Flagship Programs",
    links: [
      { label: "Agentic AI & Automation", href: "/programs/agentic-ai-automation-mastery" },
      { label: "AI & Cybersecurity Mastery", href: "/programs/agentic-ai-cybersecurity-mastery" },
      { label: "AI for Business Leaders", href: "/ai-courses" },
    ],
  },
  {
    title: "Academic Pathways",
    links: [
      { label: "DBA & PhD Programs", href: "/doctoral-programs" },
      { label: "Honorary Recognition", href: "/honorary-recognition" },
      { label: "Universities", href: "/universities" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Success Stories", href: "/success-stories" },
      { label: "Blogs", href: "/blogs" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="container-premium pb-20 pt-16 sm:pb-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <BrandLogo variant="light" />
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">
              A premium global education platform for executive learning, AI capability, academic advancement, and international recognition.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:border-white/30 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold text-white">{group.title}</h3>
                <div className="mt-4 grid gap-3">
                  {group.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-sm text-slate-400 transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 grid gap-8 border-t border-white/10 pt-8 lg:grid-cols-[1fr_420px]">
          <div className="grid gap-2 text-sm text-slate-400">
            {contactDetails.map((detail) => (
              <span key={detail}>{detail}</span>
            ))}
          </div>
          <div className="flex overflow-hidden rounded-full border border-white/10 bg-white/5 p-1">
            <input
              className="min-w-0 flex-1 bg-transparent px-5 text-sm outline-none placeholder:text-slate-500"
              placeholder="Email for programme updates and insights"
            />
            <button
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-slate-950"
              aria-label="Subscribe"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-3 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 AcdyOn. All rights reserved.</span>
          <span>Privacy Policy · Terms of Use · Admissions Policy</span>
        </div>
      </div>
    </footer>
  );
}
