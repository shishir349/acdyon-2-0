import Link from "next/link";

/**
 * Single primary mobile CTA — fixed bottom bar, mobile-only.
 * Replaces the old FloatingCTA pill to avoid two competing floating
 * actions on small screens. Desktop is untouched (nav already has
 * its own "Book Consultation" button there).
 */
export function StickyMobileCta() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t md:hidden"
      style={{
        background: "var(--background)",
        borderColor: "var(--border)",
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      <div className="px-4 py-3">
        <Link
          href="/book-consultation"
          className="flex h-12 items-center justify-center rounded-full bg-[#1E40FF] text-sm font-semibold text-white shadow-[0_18px_45px_rgba(30,64,255,0.32)]"
          style={{ color: "white" }}
        >
          Book Consultation
        </Link>
      </div>
    </div>
  );
}
