import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { CTAButton } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Thank you — AcdyOn",
  description: "We have received your submission and will be in touch shortly.",
  robots: { index: false },
};

export default function ThankYouPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6 py-24 dark:bg-[#0f172a]">
      <div className="mx-auto max-w-lg text-center">
        <CheckCircle2 className="mx-auto mb-6 h-14 w-14 text-[#1e40ff]" />
        <h1 className="font-display text-3xl font-semibold text-slate-950 sm:text-4xl dark:text-white">
          Thank you — we&apos;re on it.
        </h1>
        <p className="mt-5 text-base leading-7 text-slate-600 dark:text-slate-300">
          Your submission has been received. A member of our advisory team will
          be in touch within one business day to discuss your pathway and next
          steps.
        </p>
        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <CTAButton href="/doctoral-programs">Explore doctoral programmes</CTAButton>
          <CTAButton href="/" variant="secondary">Back to home</CTAButton>
        </div>
        <p className="mt-8 text-sm text-slate-400">
          Expecting a brochure?{" "}
          <Link href="/contact" className="text-[#1e40ff] hover:underline dark:text-[#93b4ff]">
            Contact us
          </Link>{" "}
          if it hasn&apos;t arrived within a few minutes.
        </p>
      </div>
    </main>
  );
}
