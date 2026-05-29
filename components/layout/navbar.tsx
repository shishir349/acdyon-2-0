"use client";

import Link from "next/link";
import { ChevronDown, Menu, Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";
import { CTAButton } from "@/components/ui/button";
import { BrandLogo } from "@/components/layout/brand-logo";
import { topNav } from "@/lib/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/82 py-3 shadow-sm backdrop-blur-xl" : "bg-transparent py-5",
      )}
    >
      <nav className="container-premium flex items-center justify-between">
        <BrandLogo />

        {/* Desktop nav */}
        <div className="hidden items-center gap-0.5 lg:flex">
          <Link
            href="/"
            className="whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-white/70 hover:text-[#1E40FF] xl:px-4"
          >
            Home
          </Link>

          {topNav.map((entry) => {
            if (entry.type === "link") {
              return (
                <Link
                  key={entry.label}
                  href={entry.href}
                  className="whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-white/70 hover:text-[#1E40FF] xl:px-4"
                >
                  {entry.label}
                </Link>
              );
            }

            if (entry.type === "dropdown") {
              return (
                <div key={entry.label} className="group relative">
                  <Link
                    href={entry.href}
                    className="flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-white/70 hover:text-[#1E40FF] xl:px-4"
                  >
                    {entry.label}
                    <ChevronDown className="h-3.5 w-3.5 transition group-hover:rotate-180" />
                  </Link>
                  <div className="pointer-events-none absolute left-1/2 top-full w-[500px] -translate-x-1/2 translate-y-3 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:translate-y-2 group-hover:opacity-100">
                    <div className="rounded-[8px] border border-slate-200 bg-white/94 p-3 shadow-[0_24px_80px_rgba(15,23,42,0.14)] backdrop-blur-xl">
                      <div className="rounded-[8px] bg-slate-950 p-5 text-white">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                          <Sparkles className="h-4 w-4" />
                          {entry.label}
                        </div>
                        <p className="mt-3 text-sm leading-6 text-slate-300">{entry.summary}</p>
                      </div>
                      <div className="grid gap-1 p-2">
                        {entry.items.map((item) => (
                          <Link key={item.label} href={item.href} className="rounded-[8px] p-4 transition hover:bg-[#F8FAFC]">
                            <span className="block text-sm font-semibold text-slate-950">{item.label}</span>
                            {item.description ? (
                              <span className="mt-1 block text-xs leading-5 text-slate-500">{item.description}</span>
                            ) : null}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            if (entry.type === "mega") {
              return (
                <div key={entry.label} className="group relative">
                  <Link
                    href={entry.href}
                    className="flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-white/70 hover:text-[#1E40FF] xl:px-4"
                  >
                    {entry.label}
                    <ChevronDown className="h-3.5 w-3.5 transition group-hover:rotate-180" />
                  </Link>
                  <div className="pointer-events-none absolute left-0 top-full w-[780px] translate-y-3 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:translate-y-2 group-hover:opacity-100">
                    <div className="rounded-[8px] border border-slate-200 bg-white/94 shadow-[0_24px_80px_rgba(15,23,42,0.14)] backdrop-blur-xl">
                      <div className="rounded-t-[8px] bg-slate-950 px-6 py-5 text-white">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                          <Sparkles className="h-4 w-4" />
                          {entry.label}
                        </div>
                        <p className="mt-2 text-sm leading-6 text-slate-300">{entry.summary}</p>
                      </div>
                      <div className="grid grid-cols-4 gap-0 p-3">
                        {entry.groups.map((group) => (
                          <div key={group.label} className="border-r border-slate-100 p-3 last:border-r-0">
                            <p className="mb-3 px-1 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                              {group.label}
                            </p>
                            <div className="grid gap-0.5">
                              {group.items.map((item) => (
                                <Link
                                  key={item.label}
                                  href={item.href}
                                  className="rounded-[8px] p-3 transition hover:bg-[#F8FAFC]"
                                >
                                  <span className="flex items-start gap-2">
                                    <span className="block text-sm font-semibold leading-snug text-slate-950">
                                      {item.label}
                                    </span>
                                    {item.badge ? (
                                      <span className="mt-0.5 shrink-0 rounded-full bg-[#D4AF37]/15 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.1em] text-[#D4AF37]">
                                        {item.badge}
                                      </span>
                                    ) : null}
                                  </span>
                                  {item.description ? (
                                    <span className="mt-1 block text-xs leading-4 text-slate-500">
                                      {item.description}
                                    </span>
                                  ) : null}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return null;
          })}
        </div>

        <div className="hidden lg:block">
          <CTAButton href="/book-consultation">Book Consultation</CTAButton>
        </div>

        <button
          aria-label="Toggle menu"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-950 lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open ? (
        <div className="container-premium mt-4 rounded-[8px] border border-slate-200 bg-white p-4 shadow-xl lg:hidden">
          <div className="grid max-h-[70vh] gap-2 overflow-y-auto">
            <Link
              href="/"
              className="rounded-[8px] px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>

            {topNav.map((entry) => {
              if (entry.type === "link") {
                return (
                  <Link
                    key={entry.label}
                    href={entry.href}
                    className="rounded-[8px] px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                    onClick={() => setOpen(false)}
                  >
                    {entry.label}
                  </Link>
                );
              }

              if (entry.type === "dropdown") {
                return (
                  <div key={entry.label} className="rounded-[8px] border border-slate-200 bg-[#F8FAFC] p-3">
                    <Link
                      href={entry.href}
                      className="flex items-center justify-between text-sm font-semibold text-slate-950"
                      onClick={() => setOpen(false)}
                    >
                      {entry.label}
                      <ChevronDown className="h-4 w-4 text-slate-400" />
                    </Link>
                    <div className="mt-3 grid gap-1">
                      {entry.items.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="rounded-[8px] bg-white px-3 py-2 text-sm text-slate-600"
                          onClick={() => setOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              if (entry.type === "mega") {
                return (
                  <div key={entry.label} className="rounded-[8px] border border-slate-200 bg-[#F8FAFC] p-3">
                    <Link
                      href={entry.href}
                      className="flex items-center justify-between text-sm font-semibold text-slate-950"
                      onClick={() => setOpen(false)}
                    >
                      {entry.label}
                      <ChevronDown className="h-4 w-4 text-slate-400" />
                    </Link>
                    <div className="mt-3 grid gap-2">
                      {entry.groups.map((group) => (
                        <div key={group.label}>
                          <p className="mb-1 px-2 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                            {group.label}
                          </p>
                          <div className="grid gap-0.5">
                            {group.items.map((item) => (
                              <Link
                                key={item.label}
                                href={item.href}
                                className="flex items-center gap-2 rounded-[8px] bg-white px-3 py-2 text-sm text-slate-700"
                                onClick={() => setOpen(false)}
                              >
                                {item.label}
                                {item.badge ? (
                                  <span className="rounded-full bg-[#1E40FF]/10 px-1.5 py-0.5 text-[9px] font-bold text-[#1E40FF]">
                                    {item.badge}
                                  </span>
                                ) : null}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              }

              return null;
            })}
          </div>
          <div onClick={() => setOpen(false)}>
            <CTAButton href="/book-consultation" className="mt-4 w-full">
              Book Consultation
            </CTAButton>
          </div>
        </div>
      ) : null}
    </header>
  );
}
