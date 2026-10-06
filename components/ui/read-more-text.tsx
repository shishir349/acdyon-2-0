"use client";

import { useState } from "react";

type ReadMoreTextProps = {
  text: string;
  className?: string;
};

/**
 * Mobile-only progressive disclosure for long copy blocks.
 * On md+ screens the full text always renders unchanged.
 * On mobile, only the first sentence shows by default, with a
 * "Read more" toggle to reveal the rest.
 */
export function ReadMoreText({ text, className }: ReadMoreTextProps) {
  const [expanded, setExpanded] = useState(false);

  const firstSentenceMatch = text.match(/^.*?[.!?](\s|$)/);
  const firstSentence = firstSentenceMatch ? firstSentenceMatch[0].trim() : text;
  const remainder = text.slice(firstSentence.length).trim();
  const hasMore = remainder.length > 0;

  return (
    <>
      {/* Desktop: always full text, untouched */}
      <p className={`hidden md:block ${className ?? ""}`}>{text}</p>

      {/* Mobile: progressive disclosure */}
      <p className={`md:hidden ${className ?? ""}`}>
        {firstSentence}
        {hasMore && expanded ? ` ${remainder}` : null}
        {hasMore ? (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="ml-1 inline font-semibold text-[#1E40FF] underline-offset-2 hover:underline"
          >
            {expanded ? "Show less" : "Read more"}
          </button>
        ) : null}
      </p>
    </>
  );
}
