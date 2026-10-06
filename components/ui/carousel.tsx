"use client";

import { useEffect, useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type CarouselProps = {
  items: ReactNode[];
  /** Variant for dot/arrow color */
  variant?: "light" | "dark";
  className?: string;
};

/**
 * Sliding-tray carousel: one card at a time on mobile, three on md+.
 * Each arrow click shifts the window by exactly one card — the leftmost card
 * exits, the rest shift over, and one new card enters — rather than swapping
 * whole pages. Cards keep a stable key across the shift (page + slot, not
 * modded), so framer-motion's layout animation handles the reflow and
 * popLayout lets the exiting card leave without blocking that reflow.
 */
export function Carousel({ items, variant = "light", className }: CarouselProps) {
  const total = items.length;
  const [page, setPage] = useState(0); // unbounded logical index; mod only at render time

  const [visibleCount, setVisibleCount] = useState(1);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setVisibleCount(mq.matches ? 3 : 1);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const paginate = (dir: number) => setPage((p) => p + dir);
  const goToPage = (i: number) => setPage(i);

  const activeDot = ((page % total) + total) % total;
  const showControls = total > visibleCount;

  const accent = variant === "dark" ? "#D4AF37" : "#1E40FF";
  const dotInactive = variant === "dark" ? "bg-white/25" : "bg-slate-300 dark:bg-slate-600";
  const arrowBase = variant === "dark"
    ? "border-white/15 bg-white/5 text-white hover:bg-white/10"
    : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700";

  return (
    <div className={cn("relative", className)}>
      {/* Carousel viewport */}
      <div className="overflow-hidden">
        <div className="grid gap-6" style={{ gridTemplateColumns: `repeat(${visibleCount}, minmax(0, 1fr))` }}>
          <AnimatePresence initial={false} mode="popLayout">
            {Array.from({ length: visibleCount }, (_, slot) => {
              const idx = page + slot;
              const item = items[((idx % total) + total) % total];
              return (
                <motion.div
                  key={idx}
                  layout
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                >
                  {item}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Controls: arrows + dots */}
      {showControls && (
        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => paginate(-1)}
              aria-label="Previous"
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-full border transition-all",
                arrowBase
              )}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <span className="text-sm font-medium tabular-nums" style={{ color: accent }}>
              {activeDot + 1} / {total}
            </span>
            <button
              type="button"
              onClick={() => paginate(1)}
              aria-label="Next"
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-full border transition-all",
                arrowBase
              )}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="flex gap-2" role="tablist" aria-label="Carousel position">
            {Array.from({ length: total }, (_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === activeDot}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => goToPage(i)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  i === activeDot ? "w-6" : "w-2",
                  i === activeDot ? "" : dotInactive
                )}
                style={i === activeDot ? { backgroundColor: accent } : undefined}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
