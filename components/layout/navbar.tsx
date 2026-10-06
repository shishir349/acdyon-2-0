"use client";

import Link from "next/link";
import { ChevronDown, ChevronRight, Menu, Sparkles, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { CTAButton } from "@/components/ui/button";
import { BrandLogo } from "@/components/layout/brand-logo";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { topNav, type NavEntry } from "@/lib/data/site";
import { cn } from "@/lib/utils";

/* ── Desktop Dropdown (with hover tolerance & dynamic theme) ──── */
function DesktopDropdown({
  entry,
  isDarkBg,
}: {
  entry: Extract<NavEntry, { type: "dropdown" }>;
  isDarkBg: boolean;
}) {
  const [open, setOpen] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout>>(undefined);

  const show = () => { clearTimeout(timeout.current); setOpen(true); };
  const scheduleHide = () => { timeout.current = setTimeout(() => setOpen(false), 220); };
  useEffect(() => () => clearTimeout(timeout.current), []);

  return (
    <div className="relative" onMouseEnter={show} onMouseLeave={scheduleHide}>
      <Link
        href={entry.href}
        className={cn(
          "flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium transition xl:px-4",
          isDarkBg
            ? "text-white hover:bg-white/20"
            : "text-slate-600 hover:bg-white/70 hover:text-[#1E40FF] dark:text-slate-300 dark:hover:bg-slate-800/70"
        )}
      >
        {entry.label}
        <ChevronDown className={cn("h-3.5 w-3.5 transition", open && "rotate-180")} />
      </Link>
      <div
        className={cn(
          "absolute left-1/2 top-full w-[500px] -translate-x-1/2 pt-3 transition duration-200",
          open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0",
        )}
      >
        <div className="rounded-[8px] border border-slate-200 bg-white/94 p-3 shadow-[0_24px_80px_rgba(15,23,42,0.14)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/94">
          <div className="rounded-[8px] bg-slate-950 p-5 text-white">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
              <Sparkles className="h-4 w-4" />
              {entry.label}
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-300">{entry.summary}</p>
          </div>
          <div className="grid gap-1 p-2">
            {entry.items.map((item) => (
              <Link key={item.label} href={item.href} className="rounded-[8px] p-4 transition hover:bg-[#F8FAFC] dark:hover:bg-slate-900/60">
                <span className="block text-sm font-semibold text-slate-950 dark:text-white">{item.label}</span>
                {item.description ? (
                  <span className="mt-1 block text-xs leading-5 text-slate-500 dark:text-slate-400">{item.description}</span>
                ) : null}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Desktop Mega (with hover tolerance & dynamic theme) ──────── */
function DesktopMega({
  entry,
  isDarkBg,
}: {
  entry: Extract<NavEntry, { type: "mega" }>;
  isDarkBg: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const timeout = useRef<ReturnType<typeof setTimeout>>(undefined);

  const show = () => { clearTimeout(timeout.current); setOpen(true); };
  const scheduleHide = () => { timeout.current = setTimeout(() => setOpen(false), 220); };
  useEffect(() => () => clearTimeout(timeout.current), []);

  const activeGroup = entry.groups[activeIdx];

  return (
    <div className="relative" onMouseEnter={show} onMouseLeave={scheduleHide}>
      <Link
        href={entry.href}
        className={cn(
          "flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium transition xl:px-4",
          isDarkBg
            ? "text-white hover:bg-white/20"
            : "text-slate-600 hover:bg-white/70 hover:text-[#1E40FF] dark:text-slate-300 dark:hover:bg-slate-800/70"
        )}
      >
        {entry.label}
        <ChevronDown className={cn("h-3.5 w-3.5 transition", open && "rotate-180")} />
      </Link>
      <div
        className={cn(
          "absolute left-0 top-full w-[680px] pt-3 transition duration-200",
          open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0",
        )}
      >
        <div className="overflow-hidden rounded-[8px] border border-slate-200 bg-white/94 shadow-[0_24px_80px_rgba(15,23,42,0.14)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/94">
          <div className="rounded-t-[8px] bg-slate-950 px-6 py-5 text-white">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
              <Sparkles className="h-4 w-4" />
              {entry.label}
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-300">{entry.summary}</p>
          </div>
          <div className="flex">
            {/* Left: category list */}
            <div className="w-[190px] shrink-0 border-r border-slate-100 bg-[#F8FAFC] p-2 dark:border-slate-800 dark:bg-slate-900/40">
              {entry.groups.map((group, i) => (
                <button
                  key={group.label}
                  type="button"
                  onMouseEnter={() => setActiveIdx(i)}
                  onFocus={() => setActiveIdx(i)}
                  className={cn(
                    "flex w-full items-center justify-between rounded-[8px] px-3 py-2.5 text-left text-sm font-semibold transition",
                    i === activeIdx
                      ? "bg-[#1E40FF] text-white"
                      : "text-slate-600 hover:bg-white dark:text-slate-300 dark:hover:bg-slate-900"
                  )}
                >
                  {group.label}
                  <ChevronRight className={cn("h-3.5 w-3.5 shrink-0", i === activeIdx ? "opacity-100" : "opacity-30")} />
                </button>
              ))}
            </div>
            {/* Right: active group's items */}
            <div className="max-h-[360px] flex-1 overflow-y-auto p-3">
              <div className="grid gap-0.5">
                {activeGroup.items.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="rounded-[8px] p-3 transition hover:bg-[#F8FAFC] dark:hover:bg-slate-900/60"
                  >
                    <span className="flex items-start gap-2">
                      <span className="block text-sm font-semibold leading-snug text-slate-950 dark:text-white">
                        {item.label}
                      </span>
                      {item.badge ? (
                        <span className="mt-0.5 shrink-0 rounded-full bg-[#D4AF37]/15 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.1em] text-[#D4AF37]">
                          {item.badge}
                        </span>
                      ) : null}
                    </span>
                    {item.description ? (
                      <span className="mt-1 block text-xs leading-4 text-slate-500 dark:text-slate-400">
                        {item.description}
                      </span>
                    ) : null}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Mobile Accordion Section ─────────────────────────────────── */
function MobileAccordion({
  entry,
  onClose,
}: {
  entry: Extract<NavEntry, { type: "dropdown" }> | Extract<NavEntry, { type: "mega" }>;
  onClose: () => void;
}) {
  const [expanded, setExpanded] = useState(false);

  const groups =
    entry.type === "mega"
      ? entry.groups
      : [{ label: entry.label, items: entry.items }];

  return (
    <div className="rounded-[8px] border border-slate-200 bg-[#F8FAFC] dark:border-slate-800 dark:bg-slate-900/60">
      <button
        onClick={() => setExpanded((v) => !v)}
        className="flex w-full items-center justify-between p-3 text-sm font-semibold text-slate-950 dark:text-white"
      >
        {entry.label}
        <ChevronDown className={cn("h-4 w-4 text-slate-400 transition", expanded && "rotate-180")} />
      </button>
      {expanded && (
        <div className="border-t border-slate-200 p-3 space-y-3 dark:border-slate-800">
          <Link
            href={entry.href}
            className="block rounded-[8px] bg-[#1E40FF]/5 px-3 py-2 text-sm font-semibold text-[#1E40FF]"
            onClick={onClose}
          >
            View All {entry.label}
          </Link>
          {groups.map((group) => (
            <div key={group.label}>
              {entry.type === "mega" && (
                <p className="mb-1 px-2 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                  {group.label}
                </p>
              )}
              <div className="grid gap-0.5">
                {group.items.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-2 rounded-[8px] bg-white px-3 py-2 text-sm text-slate-700 dark:bg-slate-950 dark:text-slate-300"
                    onClick={onClose}
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
      )}
    </div>
  );
}

/* ── Main Navbar ──────────────────────────────────────────────── */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isDarkBg, setIsDarkBg] = useState(false);

  // Scroll detection for navbar background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Body overflow lock
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Dynamic Theme Detection — deterministic, no fragile elementsFromPoint
  useEffect(() => {
    const checkBackground = () => {
      const isDarkMode = document.documentElement.classList.contains("dark");

      // Scrolled or mobile menu: navbar has solid bg, just follow theme
      if (open || scrolled) {
        setIsDarkBg(isDarkMode);
        return;
      }

      // Dark mode → every page bg is dark
      if (isDarkMode) {
        setIsDarkBg(true);
        return;
      }

      // Light mode: check if hero has an explicit dark solid bg
      const hero = document.querySelector("main > section:first-child");
      if (!hero) { setIsDarkBg(false); return; }

      const bg = window.getComputedStyle(hero).backgroundColor;
      if (!bg || bg === "rgba(0, 0, 0, 0)" || bg === "transparent") {
        // Gradient or no bg-color → light in light mode
        setIsDarkBg(false);
        return;
      }

      const m = bg.match(/\d+/g);
      if (m && m.length >= 3) {
        const lum = 0.299 * +m[0] + 0.587 * +m[1] + 0.114 * +m[2];
        setIsDarkBg(lum < 128);
      } else {
        setIsDarkBg(false);
      }
    };

    checkBackground();

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => { checkBackground(); ticking = false; });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", checkBackground, { passive: true });

    // Re-check on theme toggle (class mutation) + delayed re-check for view transitions
    let timer: ReturnType<typeof setTimeout>;
    const observer = new MutationObserver(() => {
      checkBackground();
      clearTimeout(timer);
      timer = setTimeout(checkBackground, 500);
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", checkBackground);
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [scrolled, open]);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 py-3 shadow-md backdrop-blur-md dark:bg-[var(--background)]/90"
          : "bg-transparent py-5"
      )}
    >
      <nav className="container-premium flex items-center justify-between">
        {/* Brand Logo uses explicit variant to avoid CSS specificity issues */}
        <BrandLogo variant={isDarkBg ? "light" : "dark"} />

        {/* Desktop nav */}
        <div className="hidden items-center gap-0.5 lg:flex">
          <Link
            href="/"
            className={cn(
              "whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium transition xl:px-4",
              isDarkBg
                ? "text-white hover:bg-white/20"
                : "text-slate-600 hover:bg-white/70 hover:text-[#1E40FF] dark:text-slate-300 dark:hover:bg-slate-800/70"
            )}
          >
            Home
          </Link>

          {topNav.map((entry) => {
            if (entry.type === "link") {
              return (
                <Link
                  key={entry.label}
                  href={entry.href}
                  className={cn(
                    "whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium transition xl:px-4",
                    isDarkBg
                      ? "text-white hover:bg-white/20"
                      : "text-slate-600 hover:bg-white/70 hover:text-[#1E40FF] dark:text-slate-300 dark:hover:bg-slate-800/70"
                  )}
                >
                  {entry.label}
                </Link>
              );
            }
            if (entry.type === "dropdown") {
              return <DesktopDropdown key={entry.label} entry={entry} isDarkBg={isDarkBg} />;
            }
            if (entry.type === "mega") {
              return <DesktopMega key={entry.label} entry={entry} isDarkBg={isDarkBg} />;
            }
            return null;
          })}
        </div>

        {/* Desktop right section */}
        <div className="hidden items-center gap-3 lg:flex">
          {/* Target nested svg/button elements to safely override external component colors */}
          <div className={cn("transition-colors", isDarkBg && "[&_button]:text-white [&_button]:border-white/30 [&_svg]:text-white")}>
            <ThemeToggle />
          </div>
          <CTAButton href="/book-consultation">Book Consultation</CTAButton>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <div className={cn("transition-colors", isDarkBg && "[&_button]:text-white [&_button]:border-white/30 [&_svg]:text-white")}>
            <ThemeToggle />
          </div>
          <button
            aria-label="Toggle menu"
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-full border transition",
              isDarkBg && !open
                ? "border-white/20 bg-white/10 text-white"
                : "border-slate-200 bg-white text-slate-950 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
            )}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu (inner links retain default dark/light colors as the background is solid) */}
      {open ? (
        <div className="container-premium mt-4 rounded-[8px] border border-slate-200 bg-white p-4 shadow-xl lg:hidden dark:border-slate-800 dark:bg-slate-950">
          <div className="grid max-h-[70vh] gap-2 overflow-y-auto">
            <Link
              href="/"
              className="rounded-[8px] px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-900/60"
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
                    className="rounded-[8px] px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-900/60"
                    onClick={() => setOpen(false)}
                  >
                    {entry.label}
                  </Link>
                );
              }
              if (entry.type === "dropdown" || entry.type === "mega") {
                return <MobileAccordion key={entry.label} entry={entry} onClose={() => setOpen(false)} />;
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