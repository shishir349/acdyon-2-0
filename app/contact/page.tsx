import type { Metadata } from "next";
import { Phone, Mail, MapPin, Instagram, Linkedin, Youtube, Twitter, Facebook } from "lucide-react";
import { ConsultationForm } from "@/components/forms/consultation-form";
import { PageHero } from "@/components/sections/page-hero";
import { SOCIAL } from "@/lib/data/social";
import { ScrollToMobileForm } from "@/components/scroll-to-mobile-form";

const SOCIAL_ICONS = {
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube,
  twitter: Twitter,
  facebook: Facebook,
} as const;

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact AcdyOn for executive education, AI course, doctoral pathway, and honorary recognition guidance.",
};

export default function ContactPage() {
  return (
    <main>
      <div className="hidden lg:block">
        <PageHero
          eyebrow="Contact"
          title="Speak with AcdyOn about your next academic or professional milestone"
          description="Share your goals and our team will guide you toward the right pathway, timeline, and eligibility process."
        />
      </div>
      <section className="bg-[#F8FAFC] pt-28 pb-24 lg:py-24 dark:bg-slate-900/60">
        <div className="container-premium grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="rounded-[8px] bg-slate-950 p-8 text-white">
            <h2 className="font-display text-2xl sm:text-3xl">Contact Details</h2>

            <div className="mt-8 space-y-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">United States 🇺🇸</p>
                <a href="tel:+12135347859" className="mt-3 flex items-center gap-3 rounded-[8px] border border-white/10 bg-white/[0.04] p-4 transition hover:bg-white/[0.08]">
                  <Phone className="h-4 w-4 shrink-0 text-[#1E40FF]" />
                  <span className="text-sm text-slate-200">+1 213 534 7859</span>
                </a>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">United Kingdom 🇬🇧</p>
                <a href="tel:+447465278021" className="mt-3 flex items-center gap-3 rounded-[8px] border border-white/10 bg-white/[0.04] p-4 transition hover:bg-white/[0.08]">
                  <Phone className="h-4 w-4 shrink-0 text-[#1E40FF]" />
                  <span className="text-sm text-slate-200">+44 7465 278021</span>
                </a>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">India 🇮🇳</p>
                <a href="tel:+919779914422" className="mt-3 flex items-center gap-3 rounded-[8px] border border-white/10 bg-white/[0.04] p-4 transition hover:bg-white/[0.08]">
                  <Phone className="h-4 w-4 shrink-0 text-[#1E40FF]" />
                  <span className="text-sm text-slate-200">+91 9779914422</span>
                </a>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Email</p>
                <a href="mailto:admissions@acdyon.com" className="mt-3 flex items-center gap-3 rounded-[8px] border border-white/10 bg-white/[0.04] p-4 transition hover:bg-white/[0.08]">
                  <Mail className="h-4 w-4 shrink-0 text-[#1E40FF]" />
                  <span className="text-sm text-slate-200">admissions@acdyon.com</span>
                </a>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Offices</p>
                <div className="mt-3 space-y-2">
                  <div className="flex items-start gap-3 rounded-[8px] border border-white/10 bg-white/[0.04] p-4">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#1E40FF]" />
                    <span className="text-sm text-slate-200">Wyoming, United States</span>
                  </div>
                  <div className="flex items-start gap-3 rounded-[8px] border border-white/10 bg-white/[0.04] p-4">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#1E40FF]" />
                    <span className="text-sm text-slate-200">Wolverhampton, United Kingdom</span>
                  </div>
                  <div className="flex items-start gap-3 rounded-[8px] border border-white/10 bg-white/[0.04] p-4">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#1E40FF]" />
                    <span className="text-sm text-slate-200">Noida, Uttar Pradesh, India</span>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Follow AcdyOn</p>
                <div className="mt-3 flex items-center gap-3">
                  {SOCIAL.map((social) => {
                    const Icon = SOCIAL_ICONS[social.icon];
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`AcdyOn on ${social.name}`}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-200 transition hover:border-[#D4AF37]/40 hover:text-[#D4AF37]"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div id="contact-form">
            <ConsultationForm sourcePage="contact" />
          </div>
        </div>
      </section>
      <ScrollToMobileForm id="contact-form" />
    </main>
  );
}
