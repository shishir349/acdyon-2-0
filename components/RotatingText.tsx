"use client";

import { AnimatePresence, motion, HTMLMotionProps } from "framer-motion";
import { useEffect, useState, useCallback } from "react";

type SplitBy = "characters" | "words" | "lines";
type StaggerFrom = "first" | "last" | "center" | "random";

interface RotatingTextProps {
  texts: string[];
  mainClassName?: string;
  splitLevelClassName?: string;
  elementLevelClassName?: string;
  splitBy?: SplitBy;
  staggerFrom?: StaggerFrom;
  staggerDuration?: number;
  rotationInterval?: number;
  auto?: boolean;
  loop?: boolean;
  initial?: HTMLMotionProps<"span">["initial"];
  animate?: HTMLMotionProps<"span">["animate"];
  exit?: HTMLMotionProps<"span">["exit"];
  transition?: HTMLMotionProps<"span">["transition"];
}

function splitText(text: string, by: SplitBy): string[] {
  if (by === "characters") return text.split("");
  if (by === "words") return text.split(/\s+/);
  return [text];
}

function getStaggerDelay(i: number, total: number, from: StaggerFrom, duration: number): number {
  if (from === "first") return i * duration;
  if (from === "last") return (total - 1 - i) * duration;
  if (from === "center") return Math.abs(i - (total - 1) / 2) * duration;
  return Math.random() * duration * total;
}

export default function RotatingText({
  texts,
  mainClassName = "",
  splitLevelClassName = "",
  elementLevelClassName = "",
  splitBy = "characters",
  staggerFrom = "first",
  staggerDuration = 0.025,
  rotationInterval = 2000,
  auto = false,
  loop = false,
  initial = { y: "100%" },
  animate = { y: 0 },
  exit = { y: "-120%" },
  transition = { type: "spring", damping: 30, stiffness: 400 },
}: RotatingTextProps) {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((i) => {
      if (!loop && i === texts.length - 1) return i;
      return (i + 1) % texts.length;
    });
  }, [texts.length, loop]);

  useEffect(() => {
    if (!auto) return;
    const id = setInterval(next, rotationInterval);
    return () => clearInterval(id);
  }, [auto, rotationInterval, next]);

  const parts = splitText(texts[index], splitBy);

  return (
    <span className={`inline-flex ${mainClassName}`}>
      <AnimatePresence mode="wait">
        <motion.span key={texts[index]} className="inline-flex">
          {parts.map((part, i) => (
            <span key={i} className={`inline-block ${splitLevelClassName}`}>
              <motion.span
                className={`inline-block ${elementLevelClassName}`}
                initial={initial}
                animate={animate}
                exit={exit}
                transition={{
                  ...(transition as object),
                  delay: getStaggerDelay(i, parts.length, staggerFrom, staggerDuration),
                }}
              >
                {part === " " ? " " : part}
              </motion.span>
            </span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
