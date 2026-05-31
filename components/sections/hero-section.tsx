"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Bot, BriefcaseBusiness, Globe2, GraduationCap, Landmark, Network, Sparkles } from "lucide-react";
import Image from "next/image";
import { CTAButton } from "@/components/ui/button";
import { heroTrust } from "@/lib/data/site";

export function HeroSection() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[linear-gradient(135deg,#ffffff_0%,#f8fafc_48%,#eaf1ff_100%)] pt-32">
      <div className="absolute inset-0 subtle-grid opacity-35" />
      <div className="absolute right-[-12%] top-20 h-96 w-96 rounded-full bg-[#22D3EE]/16 blur-3xl" />
      <div className="absolute bottom-10 left-[-10%] h-96 w-96 rounded-full bg-[#1E40FF]/12 blur-3xl" />
      <div className="container-premium relative grid min-h-[calc(100vh-8rem)] items-center gap-12 py-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="mb-5 inline-flex rounded-full border border-[#1E40FF]/15 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#1E40FF] backdrop-blur">
            Global Executive Education & Academic Recognition
          </p>
          <h1 className="max-w-[780px] font-display text-5xl leading-[1.02] text-slate-950 sm:text-6xl lg:text-7xl">
            Future-Focused Learning & Global Academic Recognition
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
            Executive education, AI capability, doctoral advancement, and academic recognition for experienced professionals and senior leaders worldwide.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <CTAButton href="/programs">Explore Programs</CTAButton>
            <CTAButton href="/book-consultation" variant="secondary">Book Consultation</CTAButton>
          </div>
          <p className="mt-5 text-sm font-medium text-slate-500">
            Trusted by executives, founders, educators, and professionals across 18+ countries.
          </p>
          <div className="mt-9 grid gap-3 sm:grid-cols-3">
            {heroTrust.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <BadgeCheck className="h-4 w-4 text-[#D4AF37]" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative min-h-[540px]"
        >
          <div className="absolute inset-0 rounded-[8px] bg-slate-950/95 luxury-shadow" />
          <div className="absolute inset-4 overflow-hidden rounded-[8px] border border-white/50 bg-white/78 p-5 shadow-2xl backdrop-blur-xl">
            <div className="relative overflow-hidden rounded-[8px] bg-slate-950 p-6 text-white">
              <Image
                src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=800&q=75"
                alt="Global academic learners in a premium university setting"
                fill
                priority
                sizes="(min-width: 1024px) 520px, (min-width: 640px) 400px, 320px"
                className="object-cover opacity-42"
              />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,23,42,0.96),rgba(30,64,255,0.68)_55%,rgba(34,211,238,0.42))]" />
              <div className="relative z-10 min-h-[420px]">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-white/12 px-3 py-1 text-xs font-semibold">AcdyOn Ecosystem Dashboard</span>
                  <Sparkles className="h-5 w-5 text-[#D4AF37]" />
                </div>
                <div className="mt-20 max-w-sm">
                  <h2 className="font-display text-4xl leading-tight">AI, leadership, and recognition in one ecosystem.</h2>
                  <p className="mt-4 text-sm leading-7 text-slate-200">
                    A guided platform for executive education, doctoral pathways, and global academic positioning.
                  </p>
                </div>
                <div className="mt-9 grid gap-3 sm:grid-cols-2">
                  {[
                    { label: "Programs", value: "25+", icon: GraduationCap },
                    { label: "AI Learning", value: "Applied", icon: Bot },
                    { label: "Global Recognition", value: "18+ Countries", icon: Landmark },
                    { label: "Executive Education", value: "Flexible", icon: BriefcaseBusiness },
                    { label: "Doctoral Pathways", value: "Guided", icon: BadgeCheck },
                    { label: "International Reach", value: "Networked", icon: Network },
                  ].map((item) => (
                    <div key={item.label} className="rounded-[8px] border border-white/15 bg-white/10 p-4 backdrop-blur">
                      <div className="flex items-center gap-3">
                        <item.icon className="h-4 w-4 text-[#22D3EE]" />
                        <p className="text-xs font-medium text-slate-200">{item.label}</p>
                      </div>
                      <p className="mt-3 text-lg font-semibold text-white">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {[
                { label: "Learners", value: "5000+", icon: GraduationCap },
                { label: "Countries", value: "18+", icon: Globe2 },
                { label: "Recognition", value: "Global", icon: BadgeCheck },
              ].map((item) => (
                <div key={item.label} className="rounded-[8px] border border-slate-200 bg-white p-4">
                  <item.icon className="h-5 w-5 text-[#1E40FF]" />
                  <p className="mt-4 text-2xl font-semibold text-slate-950">{item.value}</p>
                  <p className="text-xs text-slate-500">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
