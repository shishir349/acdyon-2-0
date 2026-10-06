import Link from "next/link";
import { MapPin, Mail, Phone, Building2, Instagram, Linkedin, Youtube, Twitter, Facebook } from "lucide-react";
import { BrandLogo } from "@/components/layout/brand-logo";
import { SOCIAL } from "@/lib/data/social";

const SOCIAL_ICONS = {
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube,
  twitter: Twitter,
  facebook: Facebook,
} as const;

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "About AcdyOn", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Universities", href: "/universities" },
  { label: "Doctoral Pathways", href: "/doctoral-programs" },
  { label: "AcdyOn × upGrad", href: "/doctoral-programs/upgrad" },
  { label: "Honorary Recognition", href: "/honorary-recognition" },
  { label: "AI & Technology", href: "/programs/agentic-ai-automation-mastery" },
  { label: "Success Stories", href: "/success-stories" },
  { label: "Contact Us", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Refund Policy", href: "/refund-policy" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];

const usaDetails = [
  { icon: Building2, text: "AcdyOn Technologies LLC" },
  { icon: Mail, text: "admissions@acdyon.com" },
  { icon: Phone, text: "+1 213 534 7859" },
  { icon: MapPin, text: "30 N Gould St Ste R, Wyoming, USA 82801" },
];

const ukDetails = [
  { icon: Building2, text: "AcdyOn Technologies Ltd" },
  { icon: Mail, text: "admissions@acdyon.com" },
  { icon: Phone, text: "+44 7465 278021" },
  { icon: MapPin, text: "Office 1256, 85 Dunstall Hill, Wolverhampton, WV6 0SR, United Kingdom" },
];

const indiaDetails = [
  { icon: Building2, text: "REBB Ventures Private Limited" },
  { icon: Mail, text: "admissions@acdyon.com" },
  { icon: Phone, text: "+91 9779914422" },
  { icon: MapPin, text: "H-190, Sector 63 Noida 201301, Uttar Pradesh, India" },
];

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="container-premium py-16">
        {/* 5-column grid */}
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr_1fr]">

          {/* Col 1 — Brand */}
          <div>
            <BrandLogo variant="light" />
            <p className="mt-5 text-sm leading-7 text-slate-300">
              AcdyOn provides access to globally recognized executive education, doctoral pathways, academic advancement programmes, and honorary recognition opportunities through international institutional partnerships.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4AF37]" />
              <span className="text-xs font-medium text-slate-400">
                Global Executive Education &amp; Academic Recognition Platform
              </span>
            </div>
            <div className="mt-5 flex items-center gap-3">
              {SOCIAL.map((social) => {
                const Icon = SOCIAL_ICONS[social.icon];
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`AcdyOn on ${social.name}`}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-[#D4AF37]/40 hover:text-[#D4AF37]"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 2 — Explore */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white">Explore</h3>
            <ul className="mt-5 space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-slate-400 transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — United States */}
          <div>
            <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white">
              United States <span>🇺🇸</span>
            </h3>
            <ul className="mt-5 space-y-3">
              {usaDetails.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-2.5">
                  <Icon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-500" />
                  <span className="text-sm text-slate-400">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — United Kingdom */}
          <div>
            <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white">
              United Kingdom <span>🇬🇧</span>
            </h3>
            <ul className="mt-5 space-y-3">
              {ukDetails.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-2.5">
                  <Icon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-500" />
                  <span className="text-sm text-slate-400">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5 — India */}
          <div>
            <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white">
              India <span>🇮🇳</span>
            </h3>
            <ul className="mt-5 space-y-3">
              {indiaDetails.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-2.5">
                  <Icon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-500" />
                  <span className="text-sm text-slate-400">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 6 — Legal */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white">Legal</h3>
            <ul className="mt-5 space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-slate-400 transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1 text-xs text-slate-500">
              <p>© 2026 AcdyOn Technologies LLC. All Rights Reserved.</p>
              <p>USA Entity: AcdyOn Technologies LLC · Wyoming, United States</p>
              <p>UK Entity: AcdyOn Technologies Ltd · Wolverhampton, United Kingdom</p>
              <p>India Operational Entity: REBB Ventures Private Limited · Noida, UP, India</p>
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500">
              {legalLinks.map((link) => (
                <Link key={link.label} href={link.href} className="transition hover:text-slate-300">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
