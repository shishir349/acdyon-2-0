import { Bot, CheckCircle2, GitBranch, Workflow, Zap } from "lucide-react";
import { CTAButton } from "@/components/ui/button";
import { featuredAiBullets } from "@/lib/data/site";

export function FeaturedAISection() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-[#22D3EE]/12 blur-3xl" />
      <div className="container-premium relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="rounded-[8px] bg-slate-950 p-5 luxury-shadow">
          <div className="rounded-[8px] border border-white/10 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.35),transparent_30%),linear-gradient(135deg,#0f172a,#111827)] p-8 text-white">
            <div className="flex items-center justify-between">
              <div className="flex h-14 w-14 items-center justify-center rounded-[8px] bg-white text-slate-950">
                <Bot className="h-7 w-7" />
              </div>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-200">4 Month Track</span>
            </div>
            <h2 className="mt-20 font-display text-4xl leading-tight">Agentic AI & Automation Mastery</h2>
            <p className="mt-5 text-sm leading-7 text-slate-300">
              Build AI agents, automate knowledge work, and design business workflows that feel credible in real executive settings.
            </p>
            <div className="mt-8 grid gap-3">
              {[
                { label: "Agent Architecture", icon: GitBranch },
                { label: "No-Code Workflows", icon: Workflow },
                { label: "Business Automation", icon: Zap },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 rounded-[8px] border border-white/10 bg-white/[0.04] p-4 text-sm text-slate-200">
                  <item.icon className="h-5 w-5 text-[#22D3EE]" />
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#1E40FF]">Featured AI Program</p>
          <h2 className="font-display text-4xl leading-tight text-slate-950 sm:text-5xl">Practical AI mastery for professionals who need real outcomes</h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            A focused program for ambitious learners ready to move beyond prompts into agents, automations, and career-relevant applied projects.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {featuredAiBullets.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-[8px] border border-slate-200 bg-[#F8FAFC] p-4 text-sm font-medium text-slate-700">
                <CheckCircle2 className="h-5 w-5 text-[#1E40FF]" />
                {item}
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-3 rounded-[8px] border border-slate-200 bg-white p-5 sm:grid-cols-3">
            {["Curriculum", "Mentorship", "Projects"].map((item) => (
              <div key={item}>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1E40FF]">{item}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">Guided, applied, and outcome-focused.</p>
              </div>
            ))}
          </div>
          <CTAButton href="/programs/agentic-ai-automation-mastery" className="mt-9">View Full Program</CTAButton>
        </div>
      </div>
    </section>
  );
}
