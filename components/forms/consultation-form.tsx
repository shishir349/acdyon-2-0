import { CalendarCheck } from "lucide-react";
import { CTAButton } from "@/components/ui/button";

export function ConsultationForm() {
  return (
    <form className="rounded-[8px] border border-slate-200 bg-white p-6 luxury-shadow">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-[8px] bg-[#1E40FF] text-white">
          <CalendarCheck className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-slate-950">Book a Consultation</h2>
          <p className="text-sm text-slate-500">Manual admissions guidance for Phase 1.</p>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {["Full name", "Email address", "Phone number", "Country"].map((label) => (
          <label key={label} className="grid gap-2 text-sm font-medium text-slate-700">
            {label}
            <input className="h-12 rounded-[8px] border border-slate-200 px-4 outline-none transition focus:border-[#1E40FF]" placeholder={label} />
          </label>
        ))}
      </div>
      <label className="mt-4 grid gap-2 text-sm font-medium text-slate-700">
        Area of interest
        <select className="h-12 rounded-[8px] border border-slate-200 px-4 outline-none transition focus:border-[#1E40FF]">
          <option>AI & Automation</option>
          <option>Doctoral Programs</option>
          <option>Honorary Recognition</option>
          <option>Executive Certifications</option>
          <option>Corporate Training</option>
        </select>
      </label>
      <label className="mt-4 grid gap-2 text-sm font-medium text-slate-700">
        Goals
        <textarea className="min-h-32 rounded-[8px] border border-slate-200 p-4 outline-none transition focus:border-[#1E40FF]" placeholder="Tell us what you want to achieve." />
      </label>
      <CTAButton href="/contact" className="mt-6 w-full">
        Submit Consultation Request
      </CTAButton>
    </form>
  );
}
