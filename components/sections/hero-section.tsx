"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import RotatingText from "@/components/RotatingText";
import { TiltedCard } from "@/components/TiltedCard";
import { CTAButton } from "@/components/ui/button";

const ShapeGrid = dynamic(
  () => import("@/components/ShapeGrid").then((m) => ({ default: m.ShapeGrid })),
  { ssr: false, loading: () => null }
);

const SLIDES = [
  { src: "/convocation-ceremony.webp", caption: "The moment your investment signals authority" },
  { src: "/images/site/hero-honorary-graduation.webp", caption: "Honorary doctoral recognition" },
  { src: "/images/site/hero-dba-executive.webp", caption: "Executive DBA pathway" },
  { src: "/images/site/hero-phd-library.webp", caption: "PhD research excellence" },
  { src: "/images/site/hero-global-learners.webp", caption: "Global academic community" },
];

// pairs/groups shown in the partner strip
const PARTNER_GROUPS = [
  ["Kennedy University", "Dunster College"],
  ["LSMT", "EIMT"],
  ["Birchwood"],
];

const ALL_UNIVERSITIES = PARTNER_GROUPS.flat();

const ENROLLEES = [
  { name: "Rajan M.", location: "India", programme: "DBA" },
  { name: "Sarah K.", location: "United Kingdom", programme: "Honorary Doctorate" },
  { name: "Chukwu A.", location: "Nigeria", programme: "PhD" },
  { name: "Layla H.", location: "UAE", programme: "DBA" },
  { name: "Marcus T.", location: "Germany", programme: "Executive DBA" },
  { name: "Priya S.", location: "Singapore", programme: "PhD" },
];

// subtle floating orbs — pure CSS
function FloatingOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute right-[8%]  top-[18%]  h-2   w-2   rounded-full bg-[#1e40ff]/25 dark:bg-[#1e40ff]/35 animate-[orb_6s_ease-in-out_infinite]" />
      <div className="absolute right-[18%] top-[38%]  h-1.5 w-1.5 rounded-full bg-[#d4af37]/30 dark:bg-[#d4af37]/25 animate-[orb_8s_ease-in-out_1s_infinite]" />
      <div className="absolute right-[5%]  top-[62%]  h-1   w-1   rounded-full bg-[#22d3ee]/25 dark:bg-[#22d3ee]/30 animate-[orb_7s_ease-in-out_2.5s_infinite]" />
      <div className="absolute right-[28%] top-[80%]  h-2   w-2   rounded-full bg-[#1e40ff]/15 dark:bg-[#1e40ff]/20 animate-[orb_9s_ease-in-out_0s_infinite]" />
      <div className="absolute left-[4%]  top-[55%]  h-1.5 w-1.5 rounded-full bg-[#22d3ee]/25 dark:bg-[#22d3ee]/30 animate-[orb_7s_ease-in-out_2s_infinite]" />
      <div className="absolute left-[12%] top-[30%]  h-1   w-1   rounded-full bg-[#1e40ff]/20 dark:bg-[#1e40ff]/25 animate-[orb_9s_ease-in-out_0.5s_infinite]" />
      <div className="absolute left-[22%] top-[72%]  h-2   w-2   rounded-full bg-[#d4af37]/20 dark:bg-[#d4af37]/15 animate-[orb_11s_ease-in-out_1.5s_infinite]" />
      <div className="absolute left-[7%]  top-[15%]  h-1.5 w-1.5 rounded-full bg-[#1e40ff]/15 dark:bg-[#1e40ff]/20 animate-[orb_8s_ease-in-out_3s_infinite]" />
      <div className="absolute bottom-[12%] right-[42%] h-1  w-1   rounded-full bg-[#d4af37]/25 dark:bg-[#d4af37]/20 animate-[orb_10s_ease-in-out_4s_infinite]" />
      <div className="absolute bottom-[30%] left-[38%]  h-1.5 w-1.5 rounded-full bg-[#22d3ee]/20 dark:bg-[#22d3ee]/15 animate-[orb_12s_ease-in-out_0.8s_infinite]" />
      <style>{`
        @keyframes orb {
          0%,100% { transform: translateY(0px) translateX(0px) }
          33%      { transform: translateY(-16px) translateX(5px) }
          66%      { transform: translateY(-8px) translateX(-4px) }
        }
      `}</style>
    </div>
  );
}

function PartnerStrip() {
  const [group, setGroup] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1); // 1 = next (left-out/right-in), -1 = prev

  useEffect(() => {
    const id = setInterval(() => {
      setDir(1);
      setGroup((g) => (g + 1) % PARTNER_GROUPS.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="mt-8 flex items-center gap-3 overflow-hidden">
      <span className="shrink-0 text-xs font-medium uppercase tracking-widest text-slate-400 dark:text-slate-500">
        Partners
      </span>
      <div className="relative h-6 flex-1 overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={group}
            initial={{ x: dir * 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: dir * -30, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center gap-3"
          >
            {PARTNER_GROUPS[group].map((name, i) => (
              <span key={name} className="flex items-center gap-3">
                <span className="whitespace-nowrap text-sm font-medium text-slate-500 dark:text-slate-400">
                  {name}
                </span>
                {i < PARTNER_GROUPS[group].length - 1 && (
                  <span className="select-none text-slate-300 dark:text-slate-700">·</span>
                )}
              </span>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function EnrolledBadge() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx((i) => (i + 1) % ENROLLEES.length);
        setVisible(true);
      }, 400);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  const e = ENROLLEES[idx];

  return (
    <div
      className={`mt-6 inline-flex items-center gap-2.5 rounded-full border border-slate-200/60 bg-white/70 px-3.5 py-2 backdrop-blur-sm transition-all duration-400 dark:border-white/10 dark:bg-slate-900/60 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
      }`}
    >
      {/* live dot */}
      <span className="relative flex h-2 w-2 shrink-0">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
      </span>
      <span className="text-xs text-slate-600 dark:text-slate-300">
        <span className="font-semibold text-slate-800 dark:text-white">{e.name}</span>
        {" "}from {e.location} enrolled in{" "}
        <span className="font-medium text-[#1e40ff] dark:text-[#93b4ff]">{e.programme}</span>
      </span>
    </div>
  );
}

// Same AnimatePresence pattern as PartnerStrip — perfectly synced fade+slide
function SlideShow() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % SLIDES.length), 2500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl dark:shadow-[0_32px_80px_rgba(30,64,255,0.18)]">
      <div className="aspect-[3/4] w-full sm:aspect-[4/5] lg:aspect-[3/4] relative overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={idx}
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -40, opacity: 0 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={SLIDES[idx].src}
              alt={SLIDES[idx].caption}
              fill
              priority={idx === 0}
              sizes="(min-width: 1024px) 420px, 100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* scrim */}
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(15,23,42,0.65)_0%,transparent_50%)] pointer-events-none" />

      {/* caption — synced with slide */}
      <div className="absolute bottom-5 left-5 right-12 pointer-events-none overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.p
            key={idx}
            initial={{ y: 8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -8, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="text-xs font-semibold text-white/90 leading-snug"
          >
            {SLIDES[idx].caption}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* counter */}
      <div className="absolute top-4 right-4 pointer-events-none">
        <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
          {idx + 1} / {SLIDES.length}
        </span>
      </div>
    </div>
  );
}

export function HeroSection() {
  const { resolvedTheme } = useTheme();
  const dark = resolvedTheme === "dark";

  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-white dark:bg-[#0f172a] pt-24 sm:pt-28">
      {/* ShapeGrid */}
      <div className="absolute inset-0 opacity-0 dark:opacity-50">
        <ShapeGrid
          speed={0.25}
          squareSize={40}
          direction="diagonal"
          borderColor={dark ? "#2F293A" : "#cbd5e1"}
          hoverFillColor={dark ? "#222" : "#e2e8f0"}
          shape="square"
          hoverTrailAmount={0}
        />
      </div>

      {/* radial glow */}
      <div className="absolute inset-0 dark:bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(30,64,255,0.22),transparent)]" />

      {/* subtle floating orbs */}
      <FloatingOrbs />

      <div className="container-premium relative z-10 flex min-h-[calc(100vh-6rem)] flex-col items-start justify-center gap-12 py-12 lg:grid lg:grid-cols-[1fr_420px] lg:items-center lg:gap-14">

        {/* ── LEFT ── */}
        <div className="animate-hero-left w-full">
          {/* rotating eyebrow */}
          <div className="mb-6 flex items-center gap-2 flex-wrap">
            <span className="text-sm font-semibold tracking-wide text-slate-500 dark:text-slate-400">
              Recognized at
            </span>
            <RotatingText
              texts={ALL_UNIVERSITIES}
              mainClassName="px-3 py-1 bg-[#1e40ff]/10 dark:bg-[#1e40ff]/20 text-[#1e40ff] dark:text-[#93b4ff] font-semibold text-sm rounded-full overflow-hidden"
              splitLevelClassName="overflow-hidden"
              staggerFrom="last"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              exit={{ y: "-110%" }}
              staggerDuration={0.018}
              transition={{ type: "spring", damping: 28, stiffness: 380 }}
              rotationInterval={2200}
              splitBy="characters"
              auto
              loop
            />
          </div>

          <h1 className="max-w-[600px] font-display font-bold text-[2.75rem] leading-[1.05] tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-[3.75rem] xl:text-[4.5rem]">
            Your next credential should carry{" "}
            <span className="bg-gradient-to-r from-[#1e40ff] via-[#2563eb] to-[#22d3ee] bg-clip-text text-transparent dark:from-[#93b4ff] dark:via-[#60a5fa] dark:to-[#67e8f9]">real authority.</span>
          </h1>

          <p className="mt-6 max-w-[520px] text-base sm:text-lg leading-[1.8] text-slate-500 dark:text-slate-300">
            Executive doctoral pathways and academic recognition for leaders who
            need their investment to signal trust — not just completion.
          </p>

          <div className="mt-9">
            <CTAButton href="/book-consultation">Book Your Eligibility Review →</CTAButton>
          </div>

          {/* live enrolled badge */}
          <EnrolledBadge />

          {/* partner strip with cycling groups */}
          <PartnerStrip />
        </div>

        {/* ── RIGHT ── */}
        <div className="animate-hero-right w-full">
          <TiltedCard className="w-full" tiltAmount={10} scale={1.02}>
            <SlideShow />
          </TiltedCard>
        </div>

      </div>
    </section>
  );
}
