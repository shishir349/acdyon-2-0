"use client";

import { useState } from "react";
import { submitEventRSVP } from "@/lib/supabase";

const PROGRAMMES = [
  "DBA Graduate",
  "PhD Graduate",
  "Honorary Doctorate Recipient",
  "Guest / Family",
  "Partner Institution Representative",
];

export function EventRSVPForm({
  eventSlug,
  eventName,
}: {
  eventSlug: string;
  eventName: string;
}) {
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    programme: PROGRAMMES[0],
    guestCount: 1,
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    const res = await submitEventRSVP({
      ...form,
      eventSlug,
      eventName,
      sourcePage: `resources/events/${eventSlug}`,
    });
    setResult(res);
    setSubmitting(false);
  }

  if (result?.success) {
    return (
      <div className="rounded-[8px] border border-emerald-200 bg-emerald-50 p-6 text-sm text-emerald-800 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300">
        {result.message}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
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
        <select
          value={form.programme}
          onChange={(e) => setForm({ ...form, programme: e.target.value })}
          className="h-12 rounded-[8px] border border-slate-200 px-4 text-sm outline-none focus:border-[#1E40FF] dark:border-slate-700 dark:bg-slate-900 dark:text-white"
        >
          {PROGRAMMES.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
        <input
          required
          type="number"
          min={1}
          max={10}
          placeholder="Guest count (incl. you)"
          value={form.guestCount}
          onChange={(e) => setForm({ ...form, guestCount: Number(e.target.value) })}
          className="h-12 rounded-[8px] border border-slate-200 px-4 text-sm outline-none focus:border-[#1E40FF] dark:border-slate-700 dark:bg-slate-900 dark:text-white"
        />
      </div>

      {result && !result.success ? (
        <p className="text-sm text-red-600 dark:text-red-400">{result.message}</p>
      ) : null}

      <button
        type="submit"
        disabled={submitting}
        className="h-12 rounded-[8px] bg-[#1E40FF] text-sm font-semibold text-white transition disabled:opacity-60"
      >
        {submitting ? "Submitting…" : "RSVP for this event"}
      </button>
    </form>
  );
}
