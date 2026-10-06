"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import { submitBrochureLead } from "@/lib/supabase";

export function BrochureDownloadButton({
  programmeName,
  fileUrl,
  sourcePage,
  className,
  children,
}: {
  programmeName: string;
  fileUrl: string;
  sourcePage: string;
  className?: string;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({ fullName: "", email: "", phone: "", country: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const res = await submitBrochureLead({
      ...form,
      programmeName,
      sourcePage,
    });

    setSubmitting(false);

    if (!res.success) {
      setError(res.message);
      return;
    }

    // trigger download then redirect
    const link = document.createElement("a");
    link.href = fileUrl;
    const ext = /\.\w+$/.test(fileUrl) ? fileUrl.split(".").pop() : "html";
    const slug = programmeName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
    link.download = `${slug || "brochure"}.${ext}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    router.push("/thank-you");
  }

  function close() {
    setOpen(false);
    setError(null);
    setForm({ fullName: "", email: "", phone: "", country: "" });
  }

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {children}
      </button>

      {open ? (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4">
          <div className="relative w-full max-w-md rounded-[8px] border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
            <button
              type="button"
              onClick={close}
              className="absolute right-4 top-4 text-slate-400 transition hover:text-slate-700 dark:hover:text-white"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            <form onSubmit={handleSubmit} className="grid gap-4 pt-2">
                <div>
                  <p className="text-lg font-semibold text-slate-950 dark:text-white">Download Brochure</p>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    {programmeName} — enter your details to get the full programme guide.
                  </p>
                </div>
                <input
                  required
                  placeholder="Full name"
                  value={form.fullName}
                  onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                  className="h-12 rounded-[8px] border border-slate-200 px-4 text-sm outline-none focus:border-[#1E40FF] dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                />
                <input
                  required
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="h-12 rounded-[8px] border border-slate-200 px-4 text-sm outline-none focus:border-[#1E40FF] dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                />
                <input
                  required
                  placeholder="Phone (with country code)"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="h-12 rounded-[8px] border border-slate-200 px-4 text-sm outline-none focus:border-[#1E40FF] dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                />
                <input
                  required
                  placeholder="Country"
                  value={form.country}
                  onChange={(e) => setForm({ ...form, country: e.target.value })}
                  className="h-12 rounded-[8px] border border-slate-200 px-4 text-sm outline-none focus:border-[#1E40FF] dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                />
                {error ? <p className="text-sm text-red-600 dark:text-red-400">{error}</p> : null}
                <button
                  type="submit"
                  disabled={submitting}
                  className="h-12 rounded-[8px] bg-[#1E40FF] text-sm font-semibold text-white transition disabled:opacity-60"
                >
                  {submitting ? "Submitting…" : "Get my brochure"}
                </button>
              </form>
          </div>
        </div>
      ) : null}
    </>
  );
}
