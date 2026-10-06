"use client";

import { useState } from "react";
import {
  PROGRAMMES,
  UNIVERSITIES,
  PROFILE_FACTORS,
  type Programme,
  type ProfileFactorKey,
} from "@/lib/data/scholarship-rules";
import { calculateScholarship } from "@/lib/scholarship";
import { submitScholarshipLead } from "@/lib/supabase";

export function ScholarshipCalculatorForm() {
  const [programme, setProgramme] = useState<Programme>("dba");
  const [university, setUniversity] = useState(UNIVERSITIES[0]);
  const [factors, setFactors] = useState<ProfileFactorKey[]>([]);
  const [revealed, setRevealed] = useState(false);
  const [contact, setContact] = useState({ fullName: "", email: "", phone: "", country: "" });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const result = calculateScholarship(programme, factors);

  function toggleFactor(key: ProfileFactorKey) {
    setFactors((prev) => (prev.includes(key) ? prev.filter((f) => f !== key) : [...prev, key]));
  }

  async function reveal(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    const res = await submitScholarshipLead({
      ...contact,
      programme,
      university,
      netFee: result.netFee,
      discountPct: result.discountPct,
      sourcePage: "scholarship-calculator",
    });
    setSubmitting(false);
    if (!res.success) {
      setError(res.message);
      return;
    }
    setRevealed(true);
  }

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-6">
        <div>
          <label className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
            Programme
          </label>
          <select
            value={programme}
            onChange={(e) => setProgramme(e.target.value as Programme)}
            className="mt-2 h-12 w-full rounded-[8px] border border-slate-200 px-4 text-sm outline-none focus:border-[#1E40FF] dark:border-slate-700 dark:bg-slate-900 dark:text-white"
          >
            {PROGRAMMES.map((p) => (
              <option key={p.value} value={p.value}>
                {p.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
            Partner University
          </label>
          <select
            value={university}
            onChange={(e) => setUniversity(e.target.value)}
            className="mt-2 h-12 w-full rounded-[8px] border border-slate-200 px-4 text-sm outline-none focus:border-[#1E40FF] dark:border-slate-700 dark:bg-slate-900 dark:text-white"
          >
            {UNIVERSITIES.map((u) => (
              <option key={u} value={u}>
                {u}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
            Your profile
          </label>
          <div className="mt-2 grid gap-2">
            {PROFILE_FACTORS.map((factor) => (
              <label
                key={factor.key}
                className="flex items-center gap-3 rounded-[8px] border border-slate-200 px-4 py-3 text-sm text-slate-700 transition hover:border-[#1E40FF]/40 dark:border-slate-700 dark:text-slate-200"
              >
                <input
                  type="checkbox"
                  checked={factors.includes(factor.key)}
                  onChange={() => toggleFactor(factor.key)}
                  className="h-4 w-4"
                />
                {factor.label}
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-[8px] border border-[#D4AF37]/30 bg-[#D4AF37]/5 p-6 dark:bg-[#D4AF37]/10">
        {!revealed ? (
          <form onSubmit={reveal} className="grid gap-4">
            <p className="text-sm text-slate-700 dark:text-slate-200">
              Enter your details to reveal your indicative scholarship and net fee.
            </p>
            <input
              required
              placeholder="Full name"
              value={contact.fullName}
              onChange={(e) => setContact({ ...contact, fullName: e.target.value })}
              className="h-12 rounded-[8px] border border-slate-200 px-4 text-sm outline-none focus:border-[#1E40FF] dark:border-slate-700 dark:bg-slate-900 dark:text-white"
            />
            <input
              required
              type="email"
              placeholder="Email"
              value={contact.email}
              onChange={(e) => setContact({ ...contact, email: e.target.value })}
              className="h-12 rounded-[8px] border border-slate-200 px-4 text-sm outline-none focus:border-[#1E40FF] dark:border-slate-700 dark:bg-slate-900 dark:text-white"
            />
            <input
              required
              placeholder="Phone (with country code)"
              value={contact.phone}
              onChange={(e) => setContact({ ...contact, phone: e.target.value })}
              className="h-12 rounded-[8px] border border-slate-200 px-4 text-sm outline-none focus:border-[#1E40FF] dark:border-slate-700 dark:bg-slate-900 dark:text-white"
            />
            <input
              required
              placeholder="Country"
              value={contact.country}
              onChange={(e) => setContact({ ...contact, country: e.target.value })}
              className="h-12 rounded-[8px] border border-slate-200 px-4 text-sm outline-none focus:border-[#1E40FF] dark:border-slate-700 dark:bg-slate-900 dark:text-white"
            />
            {error ? <p className="text-sm text-red-600 dark:text-red-400">{error}</p> : null}
            <button
              type="submit"
              disabled={submitting}
              className="h-12 rounded-[8px] bg-[#1E40FF] text-sm font-semibold text-white disabled:opacity-60"
            >
              {submitting ? "Calculating…" : "Reveal my indicative scholarship"}
            </button>
          </form>
        ) : (
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
              Indicative Estimate
            </p>
            <p className="mt-3 text-4xl font-display text-slate-950 dark:text-white">
              {result.discountPct}% scholarship
            </p>
            <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-slate-500 dark:text-slate-400">Base fee</p>
                <p className="font-semibold text-slate-950 dark:text-white">
                  USD {result.baseFee.toLocaleString("en-US")}
                </p>
              </div>
              <div>
                <p className="text-slate-500 dark:text-slate-400">Net payable</p>
                <p className="font-semibold text-slate-950 dark:text-white">
                  USD {result.netFee.toLocaleString("en-US")}
                </p>
              </div>
            </div>
            <p className="mt-6 text-xs leading-5 text-slate-500 dark:text-slate-400">
              Indicative only. Final scholarship is confirmed after an eligibility review.
            </p>
            <a
              href="/book-consultation"
              className="mt-5 flex h-12 items-center justify-center rounded-[8px] bg-[#1E40FF] text-sm font-semibold text-white"
            >
              Book your eligibility review
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
