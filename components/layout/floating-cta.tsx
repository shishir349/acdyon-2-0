import Link from "next/link";

export function FloatingCTA() {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 sm:hidden">
      <Link
        href="/book-consultation"
        className="flex h-12 items-center justify-center rounded-full bg-[#1E40FF] text-sm font-semibold text-white shadow-[0_18px_45px_rgba(30,64,255,0.32)]"
      >
        Book Consultation
      </Link>
    </div>
  );
}
