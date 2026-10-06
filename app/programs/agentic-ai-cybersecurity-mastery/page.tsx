import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  Shield, Zap, CheckCircle2, TrendingUp, Users,
  Globe2, AlertTriangle, Server, ArrowRight, Award,
  Calendar, Building2, Rocket, RefreshCw, Laptop, Monitor, Search,
  GraduationCap, Mic, Brain, Handshake, DollarSign, Map,
  Eye, Settings, Bot, Unlock, Bug, Cloud, Trophy,
  Folder, FileText, Briefcase, Smartphone,
} from 'lucide-react'
import { SectionHeading } from '@/components/ui/section-heading'
import { HorizontalScroll } from '@/components/ui/horizontal-scroll'
import { DataTabs } from '@/components/ui/data-tabs'
import { ConsultationNudge } from '@/components/sections/consultation-nudge'
import { FAQAccordion } from '@/components/ui/faq-accordion'
import { cybersecurityTestimonials } from '@/lib/data/site'
import { BrochureDownloadButton } from '@/components/forms/brochure-download-button'
import { BROCHURES } from '@/lib/data/brochures'

export const metadata: Metadata = {
  title: 'Cybersecurity & AI Mastery | AcdyOn',
  description:
    'Industry-focused cybersecurity training with career acceleration, internship experience, and academic progression opportunities. 6-month programme from beginner to employable professional.',
}

const toolGroups = [
  { category: 'Security Analysis', color: '#1E40FF', tools: ['Wireshark', 'Nmap', 'Nessus'] },
  { category: 'Offensive Security', color: '#dc2626', tools: ['Metasploit', 'Burp Suite', 'OWASP ZAP'] },
  { category: 'Threat Intelligence', color: '#7c3aed', tools: ['Shodan', 'MISP', 'SpiderFoot'] },
  { category: 'AI-Powered Security', color: '#22D3EE', tools: ['ChatGPT', 'n8n', 'DeepExploit'] },
  { category: 'Cloud & Infrastructure', color: '#059669', tools: ['AWS', 'Windows Server', 'Linux'] },
]

const faqs = [
  { q: 'Is this programme suitable for complete beginners?', a: 'Yes. The programme starts from cybersecurity fundamentals and builds progressively. No prior security experience is required. Many graduates have transitioned from IT support, administration, and non-technical roles.' },
  { q: 'Can I switch careers into cybersecurity with this programme?', a: 'Yes — this is the primary purpose of the programme. The 6-month structure is designed as a complete career transition pathway, from foundational knowledge through to job-ready skills and placement support.' },
  { q: 'What technical prerequisites do I need?', a: 'Basic computer literacy and familiarity with operating systems (Windows or Linux) is helpful but not mandatory. The programme covers all required foundations from the ground up.' },
  { q: 'How is the internship component structured?', a: "The internship is offered to qualifying graduates based on performance throughout the programme. It may be paid or unpaid depending on the partner organisation and the learner's profile. The AcdyOn team guides eligible graduates through the placement process." },
  { q: 'What does the Career Launch Month include?', a: 'Month 6 is entirely dedicated to getting you hired. It includes resume rebuild, LinkedIn optimisation, personal branding, mock interviews (technical and HR), salary negotiation guidance, job mapping, application strategy, and internship experience preparation.' },
  { q: 'Is placement guaranteed?', a: "The programme provides comprehensive placement preparation and career launch support, but cannot guarantee employment. Outcomes depend on the learner's skills, effort, and market conditions. The programme equips you with every tool needed to compete effectively." },
  { q: 'What certifications will I receive?', a: 'Upon successful completion you receive the AcdyOn Cybersecurity Mastery Certificate, a Capstone Project Portfolio demonstrating real-world skills, and — for qualifying graduates — an Internship Experience Letter.' },
  { q: 'How is AI integrated into the programme?', a: 'AI tools are used as force multipliers for security operations — not as the main subject. You will learn AI-assisted threat detection, automated incident response workflows, and AI-augmented offensive techniques as part of the security curriculum.' },
  { q: 'Are the labs conducted in real environments?', a: 'Yes. All penetration testing, red teaming, and security labs are conducted in controlled, real-world environments. Projects are scoped for actual deployment — not academic simulations.' },
  { q: 'How long is the programme and what is the format?', a: 'The programme is 6 months — 5 months of core cybersecurity training followed by 1 dedicated Career Launch Month. All sessions are delivered live online, with recorded access for review.' },
  { q: 'What career roles does this programme prepare me for?', a: 'Graduates are prepared for roles including SOC Analyst, Security Analyst, Cybersecurity Associate, Cloud Security Associate, Junior Penetration Tester, Security Operations Specialist, and AI Security Analyst.' },
  { q: 'What is the time commitment per week?', a: 'Expect to commit 15–20 hours per week, including live sessions, lab work, and self-study. The programme is structured for working professionals who can dedicate focused time to skill-building.' },
  { q: 'What upgrade pathways are available after completion?', a: 'Graduates can upgrade to a Microsoft AI-900 certification (USD 200 additional) or pursue a Master\'s Degree Progression Path through partner universities like Kennedy University and Dunster Business School (USD 3,000 additional, 6 more months).' },
  { q: 'Is there a refund policy?', a: 'Yes. Students may request a full refund within 30 calendar days from the date of enrolment or first payment. After the initial 30-day period, no refunds shall be issued.' },
]

export default function CybersecurityMasteryPage() {
  return (
    <main>

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-slate-950 pb-0 pt-24 sm:pt-32">
        <div className="absolute right-[-8%] top-24 h-96 w-96 rounded-full bg-[#1E40FF]/20 blur-3xl" />
        <div className="absolute left-[-6%] bottom-0 h-64 w-64 rounded-full bg-[#22D3EE]/15 blur-3xl" />

        <div className="container-premium relative pb-16">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-5 py-2.5 shadow-[0_0_20px_rgba(212,175,55,0.15)]">
            <Shield className="h-4 w-4 text-[#D4AF37]" />
            <span className="text-sm font-bold text-[#D4AF37]">30-Day Money Back Guarantee</span>
          </div>

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#22D3EE]/30 bg-[#22D3EE]/10 px-4 py-2 ml-3">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#22D3EE]">Industry-Focused Cybersecurity Training</span>
          </div>

          <h1 className="max-w-4xl font-display text-3xl leading-tight text-white sm:text-5xl lg:text-7xl">
            Cybersecurity & AI Mastery
          </h1>

          <p className="mt-7 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            Industry-Focused Cybersecurity Training With Career Acceleration, Internship Experience, and Academic Progression Opportunities.
          </p>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 hidden sm:block">
            This is not a theoretical course. This is a complete career transformation pathway — from cybersecurity fundamentals through AI-assisted security workflows, career readiness, internship support, and optional master&apos;s degree progression.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:mt-10 sm:flex-row">
            <Link href="/book-consultation" className="inline-flex items-center justify-center rounded-full bg-[#1E40FF] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(30,64,255,0.35)] transition-all hover:bg-[#1937dd] sm:px-8 sm:py-4">
              Apply Now
            </Link>
            <Link href="#programme" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10 sm:px-8 sm:py-4">
              View Programme
            </Link>
            <BrochureDownloadButton
              programmeName={BROCHURES['agentic-ai-cybersecurity-mastery'].programmeName}
              fileUrl={BROCHURES['agentic-ai-cybersecurity-mastery'].fileUrl}
              sourcePage="/programs/agentic-ai-cybersecurity-mastery"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-white/40 sm:px-8 sm:py-4"
            >
              Download Brochure
            </BrochureDownloadButton>
          </div>

          {/* Key Facts */}
          <div className="mt-14 border-t border-white/10 pt-10">
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 sm:gap-4">
              {[
                { label: 'Duration', value: '6 Months', icon: Calendar },
                { label: 'Internship', value: 'Included', icon: Building2 },
                { label: 'Career Readiness', value: 'Included', icon: Rocket },
                { label: 'Upgrade Pathways', value: 'Available', icon: TrendingUp },
              ].map(({ label, value, icon: Icon }) => (
                <div key={label} className="rounded-[8px] border border-white/10 bg-white/5 px-5 py-4">
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-[#1E40FF]" />
                    <div>
                      <p className="text-xs text-slate-400">{label}</p>
                      <p className="text-sm font-bold text-white">{value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-xs text-slate-500 dark:text-slate-400">80% Cybersecurity Training &middot; 20% AI Enablement</p>
          </div>

          <p className="mt-6 max-w-2xl text-xs leading-5 text-slate-500 dark:text-slate-400">
            Try the programme risk-free. If you decide it is not the right fit within the first 30 days of enrolment, you may request a refund in accordance with our refund policy.
          </p>
        </div>
      </section>

      {/* ── THE CYBERSECURITY OPPORTUNITY ────────────────────────────────────── */}
      <section className="bg-[#F8FAFC] py-14 sm:py-24 dark:bg-slate-900/60">
        <div className="container-premium">
          <SectionHeading
            eyebrow="The cybersecurity opportunity"
            title="The Demand Has Never Been Greater"
            description="Every organisation on the planet needs cybersecurity talent. The supply has not kept pace."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: AlertTriangle, stat: '3.5M+', label: 'Unfilled Cybersecurity Jobs Globally', body: 'The cybersecurity talent shortage is one of the largest workforce gaps in technology — and it is growing every year.', color: '#dc2626' },
              { icon: TrendingUp, stat: '300%', label: 'Growth in Ransomware Attacks Since 2020', body: 'Ransomware is the most financially damaging cybercrime. Every sector — healthcare, finance, infrastructure — is a target.', color: '#1E40FF' },
              { icon: Globe2, stat: '$600B', label: 'Annual Global Cybercrime Cost', body: 'Cybercrime costs more than the GDP of most countries. Demand for professionals who can prevent, detect, and respond is urgent.', color: '#7c3aed' },
              { icon: Zap, stat: '400%', label: 'Growth in AI Security Tool Adoption', body: 'AI-powered security operations are no longer optional. Professionals who can work with AI tools command premium salaries.', color: '#22D3EE' },
            ].map(({ icon: Icon, stat, label, body, color }) => (
              <div key={label} className="rounded-[8px] border border-slate-200 bg-white p-8 transition-all hover:shadow-lg dark:bg-slate-950 dark:border-slate-800" style={{ borderTopColor: color, borderTopWidth: 3 }}>
                <Icon className="mb-4 h-6 w-6" style={{ color }} />
                <p className="font-display text-3xl font-bold text-slate-950 sm:text-4xl dark:text-white">{stat}</p>
                <p className="mb-3 mt-1 text-xs font-bold uppercase tracking-wide text-slate-400">{label}</p>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO THIS IS FOR ──────────────────────────────────────────────────── */}
      <section className="bg-white py-14 sm:py-24 dark:bg-slate-950">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Is this for you?"
            title="Who This Programme Is Designed For"
            description="Built for people who want to enter, advance, or switch into cybersecurity — regardless of where they are starting from."
          />
          <div className="mt-14">
            <DataTabs
              tabs={[
                {
                  label: "Entry & Career Switchers",
                  panel: (
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                      {[
                        { icon: RefreshCw, title: 'Career Switchers', body: 'Professionals from any background ready to move into cybersecurity with structured, guided training.' },
                        { icon: GraduationCap, title: 'Fresh Graduates', body: 'Computer science and technology graduates seeking a practical, job-ready launch into cybersecurity.' },
                        { icon: Map, title: 'Career Returnees', body: 'Professionals returning to work after a break who need a structured re-entry into tech careers.' },
                      ].map(({ icon: Icon, title, body }) => (
                        <div key={title} className="rounded-[8px] border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg dark:bg-slate-950 dark:border-slate-800">
                          <div className="mb-3"><Icon className="h-9 w-9 text-[#1E40FF]" /></div>
                          <h3 className="mb-2 font-semibold text-slate-950 dark:text-white">{title}</h3>
                          <p className="text-sm leading-6 text-slate-500 dark:text-slate-400">{body}</p>
                        </div>
                      ))}
                    </div>
                  ),
                },
                {
                  label: "IT & Technical Professionals",
                  panel: (
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                      {[
                        { icon: Laptop, title: 'IT Professionals', body: 'IT support, helpdesk, and system staff looking to specialise in security roles.' },
                        { icon: Globe2, title: 'Network Engineers', body: 'Networking professionals seeking to expand into offensive and defensive security disciplines.' },
                        { icon: Monitor, title: 'System Administrators', body: 'SysAdmins transitioning into security operations, vulnerability management, or cloud security.' },
                      ].map(({ icon: Icon, title, body }) => (
                        <div key={title} className="rounded-[8px] border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg dark:bg-slate-950 dark:border-slate-800">
                          <div className="mb-3"><Icon className="h-9 w-9 text-[#1E40FF]" /></div>
                          <h3 className="mb-2 font-semibold text-slate-950 dark:text-white">{title}</h3>
                          <p className="text-sm leading-6 text-slate-500 dark:text-slate-400">{body}</p>
                        </div>
                      ))}
                    </div>
                  ),
                },
                {
                  label: "Security Practitioners",
                  panel: (
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                      {[
                        { icon: Search, title: 'Security Analysts', body: 'Junior analysts looking to formalise skills, add AI capability, and accelerate career progression.' },
                        { icon: Smartphone, title: 'Technology Professionals', body: 'Developers, QA engineers, and tech professionals adding security expertise to their profile.' },
                      ].map(({ icon: Icon, title, body }) => (
                        <div key={title} className="rounded-[8px] border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg dark:bg-slate-950 dark:border-slate-800">
                          <div className="mb-3"><Icon className="h-9 w-9 text-[#1E40FF]" /></div>
                          <h3 className="mb-2 font-semibold text-slate-950 dark:text-white">{title}</h3>
                          <p className="text-sm leading-6 text-slate-500 dark:text-slate-400">{body}</p>
                        </div>
                      ))}
                    </div>
                  ),
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* ── LEARNING JOURNEY (TIMELINE) ────────────────────────────────────── */}
      <section id="programme" className="bg-slate-950 py-14 sm:py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="6-Month Learning Journey"
            title="Your Complete Career Transformation"
            description="From foundations to employment — every month builds on the last with a clear, outcome-driven structure."
            variant="dark"
          />
          <div className="mt-16 space-y-0">
            {[
              { month: 'Month 1', title: 'Cybersecurity Foundations', color: '#1E40FF', modules: ['Security Fundamentals', 'Networking Basics', 'Threat Landscape', 'Security Mindset'] },
              { month: 'Month 2', title: 'Network Security & Defense', color: '#059669', modules: ['Firewalls', 'Network Monitoring', 'Security Operations', 'Detection Techniques'] },
              { month: 'Month 3', title: 'Ethical Hacking', color: '#dc2626', modules: ['Vulnerability Assessment', 'Penetration Testing Concepts', 'Red Team Fundamentals', 'Security Audits'] },
              { month: 'Month 4', title: 'Cloud & Infrastructure Security', color: '#7c3aed', modules: ['Cloud Security', 'Identity Management', 'Modern Enterprise Security', 'Governance Concepts'] },
              { month: 'Month 5', title: 'AI-Assisted Cybersecurity', color: '#22D3EE', modules: ['AI Security Workflows', 'Threat Detection Using AI', 'Automation Concepts', 'Productivity Enhancements'] },
            ].map(({ month, title, color, modules }, i) => (
              <div key={month} className="relative flex gap-6 pb-8">
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white" style={{ backgroundColor: color }}>
                    {i + 1}
                  </div>
                  <div className="w-0.5 flex-1 bg-white/10" />
                </div>
                <div className="flex-1 rounded-[8px] border border-white/10 bg-white/[0.04] p-6">
                  <p className="mb-1 text-xs font-bold uppercase tracking-wide" style={{ color }}>{month}</p>
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                  <div className="mt-4 grid gap-2 sm:grid-cols-2">
                    {modules.map((m) => (
                      <div key={m} className="flex items-center gap-2 text-sm text-slate-400">
                        <CheckCircle2 className="h-4 w-4 shrink-0" style={{ color }} />
                        {m}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Month 6 — Career Launch (Visually Distinct) */}
            <div className="relative flex gap-6">
              <div className="flex flex-col items-center">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#D4AF37] text-lg font-bold text-slate-950 shadow-[0_0_30px_rgba(212,175,55,0.3)] dark:text-white">6</div>
              </div>
              <div className="flex-1 rounded-[8px] border-2 border-[#D4AF37]/50 bg-[#D4AF37]/10 p-8">
                <div className="mb-1 flex items-center gap-3">
                  <p className="text-xs font-bold uppercase tracking-wide text-[#D4AF37]">Month 6</p>
                  <span className="rounded-full bg-[#D4AF37] px-3 py-0.5 text-xs font-bold text-slate-950 dark:text-white">Career Launch</span>
                </div>
                <h3 className="text-xl font-semibold text-[#D4AF37]">Career Acceleration & Internship</h3>
                <p className="mt-2 text-sm text-slate-400">The entire final month is devoted to one goal: getting you into a cybersecurity role.</p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {['Resume Review & Rebuild', 'LinkedIn Optimization', 'Mock Interviews', 'HR Interview Preparation', 'Technical Interview Preparation', 'Job Mapping', 'Salary Negotiation', 'Internship Placement Support'].map((item) => (
                    <div key={item} className="flex items-center gap-2 rounded-[6px] border border-[#D4AF37]/30 bg-[#D4AF37]/5 px-3 py-2 text-sm font-medium text-white">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#D4AF37]" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CAREER LAUNCH MONTH DETAIL ─────────────────────────────────────── */}
      <section className="bg-white py-14 sm:py-24 dark:bg-slate-950">
        <div className="container-premium">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#D4AF37]">Month 6 — Career Launch</p>
              <h2 className="font-display text-2xl leading-tight text-slate-950 sm:text-4xl md:text-5xl dark:text-white">
                The Final Month Is Dedicated To Getting You Hired
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300">
                After 5 months of intensive skills training, the entire final month is devoted to one goal: getting you into a cybersecurity role. Every session is designed to make you interview-ready, application-ready, and job-ready.
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-500 dark:text-slate-400">
                Qualifying graduates are also considered for paid or unpaid internship placements based on performance throughout the programme.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: FileText, title: 'Resume Rebuild', desc: 'Transform your CV into a cybersecurity-focused document that passes ATS filters.' },
                { icon: Briefcase, title: 'LinkedIn Optimisation', desc: 'Rebuild your profile to attract recruiters and signal cybersecurity expertise.' },
                { icon: Mic, title: 'Mock Interviews', desc: 'Realistic technical and behavioural practice with structured feedback.' },
                { icon: Brain, title: 'Technical Interview Prep', desc: 'Domain-specific preparation for cybersecurity technical rounds.' },
                { icon: Handshake, title: 'HR Interview Prep', desc: 'Soft skills coaching, communication improvement, and professional presence.' },
                { icon: DollarSign, title: 'Salary Negotiation', desc: 'Market rates, negotiation tactics, and how to secure the right offer.' },
                { icon: Map, title: 'Job Mapping', desc: 'Identify exact roles, companies, and geographies aligned to your profile.' },
                { icon: Building2, title: 'Internship Experience', desc: 'Paid or unpaid internship for qualifying graduates based on programme performance.' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-3 rounded-[8px] border border-slate-200 bg-[#F8FAFC] p-5 dark:bg-slate-900/60 dark:border-slate-800">
                  <Icon className="mt-0.5 h-6 w-6 shrink-0 text-[#1E40FF]" />
                  <div>
                    <p className="font-semibold text-slate-950 dark:text-white">{title}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT YOU WILL BUILD & MASTER ────────────────────────────────────── */}
      <section className="bg-[#F8FAFC] py-14 sm:py-24 dark:bg-slate-900/60">
        <div className="container-premium">
          <SectionHeading
            eyebrow="What you will build & master"
            title="Tools, Labs, and Real Projects"
            description="Train on the exact tools used by professional security teams, work through real-environment labs, and graduate with a portfolio of 7 projects."
          />
          <div className="mt-14">
            <DataTabs
              tabs={[
                {
                  label: "Tools You Will Master",
                  panel: (
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
                      {toolGroups.map(({ category, color, tools }) => (
                        <div key={category} className="rounded-[8px] border border-slate-200 bg-white p-6 dark:bg-slate-950 dark:border-slate-800" style={{ borderTopColor: color, borderTopWidth: 3 }}>
                          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em]" style={{ color }}>{category}</p>
                          <div className="space-y-2">
                            {tools.map((tool) => (
                              <div key={tool} className="flex items-center gap-2 rounded-[6px] border border-slate-100 bg-[#F8FAFC] px-3 py-2 text-sm font-semibold text-slate-700 dark:bg-slate-900/60 dark:text-slate-300 dark:border-slate-800">
                                <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: color }} />
                                {tool}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ),
                },
                {
                  label: "Hands-On Labs",
                  panel: (
                    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                      {[
                        { icon: Monitor, title: 'SOC Simulations', desc: 'Operate a live Security Operations Centre environment — monitor, detect, triage, and respond to real alerts.' },
                        { icon: Eye, title: 'Threat Hunting', desc: 'Proactively search for threats that evade automated detection using manual and AI-assisted hunting techniques.' },
                        { icon: Search, title: 'Vulnerability Assessment', desc: 'Identify, classify, and prioritise vulnerabilities across systems, networks, and applications.' },
                        { icon: Globe2, title: 'Web App Testing', desc: 'Test web applications for OWASP Top 10 vulnerabilities using professional-grade tools and techniques.' },
                        { icon: AlertTriangle, title: 'Incident Response', desc: 'Contain, investigate, and remediate security incidents following industry-standard IR frameworks.' },
                        { icon: Bug, title: 'Malware Investigation', desc: 'Analyse malware samples in sandboxed environments — understand behaviour, propagation, and mitigation.' },
                        { icon: Cloud, title: 'Cloud Security Labs', desc: 'Secure cloud environments, identify misconfigurations, and apply defence best practices in AWS and hybrid setups.' },
                        { icon: Bot, title: 'AI Detection Exercises', desc: 'Use AI tools to detect anomalies, classify threats, and automate security workflows in real scenarios.' },
                      ].map(({ icon: Icon, title, desc }) => (
                        <div key={title} className="rounded-[8px] border border-slate-200 bg-white p-6 transition-all hover:border-[#1E40FF]/30 hover:shadow-lg dark:bg-slate-950 dark:border-slate-800">
                          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[8px] bg-slate-950">
                            <Icon className="h-6 w-6 text-[#D4AF37]" />
                          </div>
                          <h3 className="mb-2 font-semibold text-slate-950 dark:text-white">{title}</h3>
                          <p className="text-sm leading-6 text-slate-500 dark:text-slate-400">{desc}</p>
                        </div>
                      ))}
                    </div>
                  ),
                },
                {
                  label: "Portfolio Projects",
                  panel: (
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                      {[
                        { n: '01', title: 'SOC Analyst Project', desc: 'Build and operate a simulated SOC environment. Detect, analyse, and respond to a live incident scenario with full documentation.', tags: ['SIEM', 'Log Analysis', 'IR Report'], color: '#1E40FF' },
                        { n: '02', title: 'Threat Hunting Report', desc: 'Conduct a structured threat hunt across a network environment. Document hypotheses, findings, and remediation recommendations.', tags: ['Threat Intelligence', 'EDR', 'Hunt Report'], color: '#dc2626' },
                        { n: '03', title: 'Red Team Assessment', desc: 'Execute a scoped offensive engagement — reconnaissance through post-exploitation — with a professional pentest report.', tags: ['Pentest', 'Exploitation', 'Report'], color: '#7c3aed' },
                        { n: '04', title: 'Blue Team Defence', desc: 'Harden a vulnerable system, configure monitoring, and defend against a live attack simulation from a red team operator.', tags: ['Hardening', 'IDS/IPS', 'Defence'], color: '#059669' },
                        { n: '05', title: 'Security Audit', desc: 'Conduct a full security audit of a web application — identify vulnerabilities, assess risk, and produce a remediation roadmap.', tags: ['OWASP', 'Risk Assessment', 'Audit'], color: '#22D3EE' },
                        { n: '06', title: 'Cloud Security Assessment', desc: 'Assess an AWS environment for misconfigurations, privilege escalation paths, and data exposure risks.', tags: ['AWS', 'IAM', 'Cloud Security'], color: '#1E40FF' },
                        { n: '07', title: 'AI Security Automation', desc: 'Build an AI-assisted threat detection workflow that ingests logs, identifies anomalies, and generates automated response actions.', tags: ['n8n', 'AI Detection', 'Automation'], color: '#22D3EE' },
                      ].map(({ n, title, desc, tags, color }) => (
                        <div key={n} className="rounded-[8px] border border-slate-200 bg-white p-7 dark:bg-slate-950 dark:border-slate-800" style={{ borderLeftColor: color, borderLeftWidth: 4 }}>
                          <div className="mb-4 flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white" style={{ backgroundColor: color }}>{n}</div>
                            <h3 className="font-semibold text-slate-950 dark:text-white">{title}</h3>
                          </div>
                          <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{desc}</p>
                          <div className="flex flex-wrap gap-2">
                            {tags.map((tag) => (
                              <span key={tag} className="rounded-full bg-[#F8FAFC] px-2.5 py-1 text-xs font-semibold text-slate-600 dark:bg-slate-900/60 dark:text-slate-300">{tag}</span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ),
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* ── CAREER OUTCOMES ───────────────────────────────────────────────────── */}
      <section className="bg-slate-950 py-14 sm:py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Career Outcomes"
            title="Where This Programme Can Take You"
            description="These are the roles graduates target — all in high-demand, with strong global hiring activity."
            variant="dark"
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { role: 'SOC Analyst', icon: Monitor, responsibilities: 'Monitor security alerts, investigate incidents, and maintain 24/7 security operations visibility.', suitability: 'Entry-level friendly', progression: 'Senior SOC Analyst → SOC Manager' },
              { role: 'Security Analyst', icon: Search, responsibilities: 'Assess threats, analyse vulnerabilities, and implement security controls across an organisation.', suitability: 'Entry to mid-level', progression: 'Senior Analyst → Security Architect' },
              { role: 'Cybersecurity Associate', icon: Shield, responsibilities: 'Support security teams with monitoring, compliance, and first-line incident response.', suitability: 'Entry-level friendly', progression: 'Cybersecurity Analyst → Security Engineer' },
              { role: 'Cloud Security Associate', icon: Cloud, responsibilities: 'Secure cloud infrastructure, manage IAM, and enforce compliance in AWS or Azure environments.', suitability: 'Entry to mid-level', progression: 'Cloud Security Engineer → Cloud Architect' },
              { role: 'Junior Penetration Tester', icon: Unlock, responsibilities: 'Perform authorised attack simulations to identify weaknesses before malicious actors do.', suitability: 'Entry to mid-level', progression: 'Senior Pentester → Red Team Lead' },
              { role: 'Security Operations Specialist', icon: Settings, responsibilities: 'Operate and maintain SIEM platforms, automate alerts, and support security operations workflows.', suitability: 'Entry-level friendly', progression: 'SecOps Engineer → SOC Manager' },
              { role: 'AI Security Analyst', icon: Bot, responsibilities: 'Apply AI tools for threat detection, anomaly identification, and automated incident response workflows.', suitability: 'Entry to mid-level', progression: 'AI Security Engineer → CISO' },
            ].map(({ role, icon: Icon, responsibilities, suitability, progression }) => (
              <article key={role} className="flex flex-col rounded-[8px] border border-white/10 bg-white/[0.04] p-6 transition-all hover:bg-white/[0.07]">
                <div className="mb-3"><Icon className="h-7 w-7 text-[#22D3EE]" /></div>
                <h3 className="mb-2 font-semibold text-white">{role}</h3>
                <p className="mb-4 flex-1 text-sm leading-6 text-slate-400">{responsibilities}</p>
                <div className="space-y-2 border-t border-white/10 pt-3">
                  <p className="text-xs text-slate-500 dark:text-slate-400"><span className="font-semibold text-[#22D3EE]">Suitability:</span> {suitability}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400"><span className="font-semibold text-[#D4AF37]">Growth:</span> {progression}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── SALARY OUTLOOK ───────────────────────────────────────────────────── */}
      <section className="bg-white py-14 sm:py-24 dark:bg-slate-950">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Compensation Outlook"
            title="Salary Growth Trajectory"
            description="Cybersecurity salaries grow significantly with experience. This is what a realistic progression looks like."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { level: 'Entry Level', range: '$40,000 – $65,000', roles: ['SOC Analyst Tier 1', 'Security Operations Associate', 'Junior Cybersecurity Analyst'], bar: 35, color: '#22D3EE', note: 'Year 0–2 post-programme' },
              { level: 'Mid Level', range: '$65,000 – $95,000', roles: ['Cybersecurity Analyst', 'Vulnerability Analyst', 'Penetration Tester'], bar: 65, color: '#1E40FF', note: 'Year 2–5 of experience' },
              { level: 'Experienced', range: '$95,000 – $140,000+', roles: ['Senior Security Engineer', 'Threat Intelligence Lead', 'Cloud Security Architect'], bar: 100, color: '#D4AF37', note: '5+ years of experience' },
            ].map(({ level, range, roles, bar, color, note }) => (
              <div key={level} className="rounded-[8px] border border-slate-200 bg-white p-8 dark:bg-slate-950 dark:border-slate-800">
                <p className="text-xs font-bold uppercase tracking-wide text-slate-400">{level}</p>
                <p className="mt-2 font-display text-2xl font-bold text-slate-950 sm:text-3xl dark:text-white">{range}</p>
                <p className="mt-1 text-xs text-slate-400">{note}</p>
                <div className="my-5 h-3 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800/60">
                  <div className="h-full rounded-full" style={{ width: `${bar}%`, backgroundColor: color }} />
                </div>
                <ul className="space-y-2">
                  {roles.map((r) => (
                    <li key={r} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="h-4 w-4 shrink-0" style={{ color }} />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-slate-400">
            Salary ranges are indicative and vary by geography, employer, and individual performance.
          </p>
        </div>
      </section>

      {/* ── CERTIFICATIONS ───────────────────────────────────────────────────── */}
      <section className="bg-[#F8FAFC] py-14 sm:py-24 dark:bg-slate-900/60">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Programme Credentials"
            title="What You Graduate With"
            description="Three distinct credentials that demonstrate your skill, practical experience, and career readiness to employers."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              { icon: Trophy, title: 'Cybersecurity Mastery Certificate', issuer: 'Issued by AcdyOn', desc: 'Awarded upon successful completion of all modules, labs, and assessments. Demonstrates verified, end-to-end cybersecurity expertise.', badge: 'Programme Certificate', color: '#1E40FF' },
              { icon: Folder, title: 'Capstone Project Portfolio', issuer: 'Documented & Verified', desc: 'A portfolio of 7 real-world security projects completed during the programme — tangible, demonstrable evidence of practical capability.', badge: 'Portfolio', color: '#22D3EE' },
              { icon: Building2, title: 'Internship Experience Letter', issuer: 'For Qualifying Graduates', desc: 'Issued to graduates who qualify for and complete the internship placement. Confirms real-world industry exposure.', badge: 'Internship', color: '#D4AF37' },
            ].map(({ icon: Icon, title, issuer, desc, badge, color }) => (
              <div key={title} className="flex flex-col rounded-[8px] border border-slate-200 bg-white p-8 text-center dark:bg-slate-950 dark:border-slate-800" style={{ borderTopColor: color, borderTopWidth: 4 }}>
                <div className="mb-4"><Icon className="mx-auto h-10 w-10" style={{ color }} /></div>
                <div className="mx-auto mb-4 inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide text-white" style={{ backgroundColor: color }}>{badge}</div>
                <h3 className="mb-1 font-semibold text-slate-950 dark:text-white">{title}</h3>
                <p className="mb-4 text-xs font-medium text-slate-400">{issuer}</p>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATE PREVIEW ──────────────────────────────────────────────── */}
      <section className="bg-white py-14 sm:py-24 dark:bg-slate-950">
        <div className="container-premium max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#D4AF37]">Sample Certificate</p>
          <h2 className="mt-4 font-display text-2xl text-slate-950 sm:text-3xl md:text-4xl dark:text-white">Certificate of Completion</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300">
            Upon successful completion of the Cybersecurity & AI Mastery programme, graduates receive an official AcdyOn Certificate of Completion.
          </p>
          <div className="mt-10 overflow-hidden rounded-[8px] border border-slate-200 shadow-lg dark:border-slate-800">
            <Image
              src="https://sohhmxayptiosflmlxuu.supabase.co/storage/v1/object/public/brochures/Certificates/COC-Acdyon.png"
              alt="AcdyOn Cybersecurity & AI Mastery — Certificate of Completion"
              width={1200}
              height={850}
              className="h-auto w-full"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* ── UPGRADE PATHWAYS ──────────────────────────────────────────────────── */}
      <section className="bg-white py-14 sm:py-24 dark:bg-slate-950">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Choose Your Future"
            title="Choose Your Future Path"
            description="Complete the programme and unlock additional progression opportunities tailored to your career ambitions."
          />
          <HorizontalScroll className="mt-14 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible">
            {/* Path A */}
            <div className="min-w-[300px] shrink-0 snap-center lg:min-w-0 lg:shrink flex flex-col rounded-[8px] border border-slate-200 bg-white p-8 dark:bg-slate-950 dark:border-slate-800">
              <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-400">Path A</p>
              <h3 className="text-xl font-semibold text-slate-950 dark:text-white">Standard Programme</h3>
              <p className="mt-1 text-sm text-[#1E40FF] font-semibold">Cybersecurity & AI Mastery</p>
              <div className="my-6 rounded-[8px] bg-[#F8FAFC] p-4 dark:bg-slate-900/60">
                <p className="text-xs text-slate-500 dark:text-slate-400">Duration</p>
                <p className="text-lg font-bold text-slate-950 dark:text-white">6 Months</p>
              </div>
              <ul className="flex-1 space-y-3">
                {['Full Training Programme', 'Career Readiness Support', 'Internship Placement Support'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#1E40FF]" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-[8px] border border-slate-200 bg-[#F8FAFC] p-4 text-center dark:bg-slate-900/60 dark:border-slate-800">
                <p className="text-xs text-slate-500 dark:text-slate-400">Outcome</p>
                <p className="mt-1 font-semibold text-slate-950 dark:text-white">Career-Ready Professional</p>
              </div>
            </div>

            {/* Path B — Most Popular */}
            <div className="min-w-[300px] shrink-0 snap-center lg:min-w-0 lg:shrink relative flex flex-col rounded-[8px] border-2 border-[#1E40FF] bg-white p-8 shadow-[0_8px_30px_rgba(30,64,255,0.12)] dark:bg-slate-950">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#1E40FF] px-4 py-1 text-xs font-bold text-white">Most Popular Upgrade</div>
              <p className="mb-2 text-xs font-bold uppercase tracking-wide text-[#1E40FF]">Path B</p>
              <h3 className="text-xl font-semibold text-slate-950 dark:text-white">Professional Certification Upgrade</h3>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Additional Investment: <span className="font-bold text-slate-950 dark:text-white">USD 200</span></p>
              <div className="my-6 rounded-[8px] bg-[#1E40FF]/5 p-4">
                <p className="text-xs text-[#1E40FF]">Includes</p>
                <p className="text-sm font-semibold text-slate-950 dark:text-white">Microsoft AI-900 Certification</p>
              </div>
              <ul className="flex-1 space-y-3">
                {['Microsoft AI-900 Preparation', 'Official Exam Voucher', 'Certification Support', 'Exam Guidance'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#1E40FF]" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-[8px] border border-[#1E40FF]/20 bg-[#1E40FF]/5 p-4 text-center">
                <p className="text-xs text-[#1E40FF]">Outcome</p>
                <p className="mt-1 font-semibold text-slate-950 dark:text-white">Cybersecurity & AI Professional</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">with Microsoft Credential</p>
              </div>
            </div>

            {/* Path C — Highest Progression */}
            <div className="min-w-[300px] shrink-0 snap-center lg:min-w-0 lg:shrink relative flex flex-col rounded-[8px] border-2 border-[#D4AF37] bg-gradient-to-b from-white to-[#D4AF37]/[0.04] p-8 shadow-[0_8px_30px_rgba(212,175,55,0.12)]">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#D4AF37] px-4 py-1 text-xs font-bold text-slate-950 dark:text-white">Highest Academic Progression</div>
              <p className="mb-2 text-xs font-bold uppercase tracking-wide text-[#D4AF37]">Path C</p>
              <h3 className="text-xl font-semibold text-slate-950 dark:text-white">Master&apos;s Degree Progression</h3>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Additional Investment: <span className="font-bold text-slate-950 dark:text-white">USD 3,000</span></p>
              <div className="my-6 rounded-[8px] bg-[#D4AF37]/10 p-4">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500 dark:text-slate-400">Additional Duration</span>
                  <span className="font-bold text-slate-950 dark:text-white">+6 Months</span>
                </div>
                <div className="mt-1 flex justify-between text-xs">
                  <span className="text-slate-500 dark:text-slate-400">Total Journey</span>
                  <span className="font-bold text-slate-950 dark:text-white">12 Months</span>
                </div>
              </div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#D4AF37]">Progress Through</p>
              <div className="space-y-3">
                {[
                  { name: 'Kennedy University', country: 'USA / France', logo: 'https://sohhmxayptiosflmlxuu.supabase.co/storage/v1/object/public/brochures/Kennedy-University-520-x-330%20(2).jpg' },
                  { name: 'Dunster Business School', country: 'Switzerland', logo: 'https://sohhmxayptiosflmlxuu.supabase.co/storage/v1/object/public/brochures/DBS_New-Final-Logo_6.png' },
                ].map((uni) => (
                  <div key={uni.name} className="flex items-center gap-3 rounded-[8px] border border-[#D4AF37]/20 bg-white p-3 dark:bg-slate-950">
                    <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-[4px] border border-slate-100 bg-white dark:bg-slate-950 dark:border-slate-800">
                      <Image src={uni.logo} alt={uni.name} fill className="object-contain p-0.5" unoptimized />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-slate-950 truncate dark:text-white">{uni.name}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{uni.country}</p>
                    </div>
                  </div>
                ))}
                <div className="flex items-center gap-3 rounded-[8px] border border-dashed border-[#D4AF37]/30 bg-[#D4AF37]/5 p-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[4px] border border-[#D4AF37]/20 bg-white text-lg dark:bg-slate-950">+</div>
                  <div>
                    <p className="text-sm font-semibold text-slate-950 dark:text-white">More Partners Coming</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Network expanding</p>
                  </div>
                </div>
              </div>
              <div className="mt-5 rounded-[8px] bg-slate-950 p-4">
                <p className="mb-3 text-center text-xs font-bold uppercase tracking-[0.18em] text-[#D4AF37]">Accreditations & Recognition</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {['QS 4-Star Rated', 'EAHEA', 'QAHE', 'International Standing'].map((badge) => (
                    <span key={badge} className="inline-flex items-center gap-1 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-3 py-1 text-xs font-medium text-[#D4AF37]">
                      <Award className="h-3 w-3" />
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
              <ul className="mt-5 flex-1 space-y-2">
                {['Additional Academic Modules', 'Academic Assessments', 'Progression Support', 'Degree Pathway Eligibility'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#D4AF37]" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-[8px] border border-[#D4AF37]/20 bg-[#D4AF37]/10 p-4 text-center">
                <p className="text-xs text-[#D4AF37]">Outcome</p>
                <p className="mt-1 font-semibold text-slate-950 dark:text-white">Cybersecurity Professional</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">+ Master&apos;s Degree Pathway</p>
              </div>
              <Link href="/book-consultation" className="mt-4 flex items-center justify-center gap-2 rounded-[8px] bg-[#D4AF37] px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[#C5A030] dark:text-white">
                Enquire About Master&apos;s Upgrade
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </HorizontalScroll>
        </div>
      </section>

      {/* ── SUCCESS STORIES ──────────────────────────────────────────────────── */}
      <section className="bg-[#F8FAFC] py-14 sm:py-24 dark:bg-slate-900/60">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Graduate Outcomes"
            title="Real Career Transitions"
            description="Graduates from varied starting points who used this programme to launch and advance cybersecurity careers."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {cybersecurityTestimonials.map((t) => (
              <div key={t.name} className="rounded-[8px] border border-slate-200 bg-white p-8 dark:bg-slate-950 dark:border-slate-800">
                <div className="mb-5 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[8px] bg-slate-100 p-4 dark:bg-slate-800/60">
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-400">Started As</p>
                    <p className="mt-1 text-sm font-medium text-slate-700 dark:text-slate-300">{t.background}</p>
                  </div>
                  <div className="rounded-[8px] bg-[#1E40FF]/10 p-4">
                    <p className="text-xs font-bold uppercase tracking-wide text-[#1E40FF]">Now</p>
                    <p className="mt-1 text-sm font-medium text-slate-700 dark:text-slate-300">{t.outcome}</p>
                  </div>
                </div>
                <blockquote className="mb-5 border-l-2 border-[#1E40FF] pl-4 text-sm italic leading-7 text-slate-600 dark:text-slate-300">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">
                    {t.name.split(' ').map((n: string) => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-950 dark:text-white">{t.name}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{t.role} &middot; {t.country}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
      <section className="bg-white py-14 sm:py-24 dark:bg-slate-950">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Common Questions"
            title="Frequently Asked Questions"
            description="Everything you need to know before enrolling."
          />
          <div className="mt-14">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* ── SPEAK WITH AN ACADEMIC ADVISER ───────────────────────────────────── */}
      <section className="bg-slate-950 py-14 sm:py-24">
        <div className="container-premium text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#22D3EE]">Personalised guidance</p>
          <h2 className="mx-auto max-w-2xl font-display text-2xl leading-tight text-white sm:text-4xl">
            Speak with an Academic Adviser
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-slate-400">
            Book a free eligibility review. We&apos;ll walk you through the right programme path, upgrade options, and next steps — no commitment required.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/book-consultation" className="inline-flex items-center rounded-full bg-[#1E40FF] px-8 py-4 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(30,64,255,0.35)] transition-all hover:bg-[#1937dd]">
              Book Your Free Consultation
            </Link>
            <BrochureDownloadButton
              programmeName={BROCHURES['agentic-ai-cybersecurity-mastery'].programmeName}
              fileUrl={BROCHURES['agentic-ai-cybersecurity-mastery'].fileUrl}
              sourcePage="/programs/agentic-ai-cybersecurity-mastery"
              className="inline-flex items-center rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white transition-all hover:border-white/40 hover:bg-white/5"
            >
              Download Brochure
            </BrochureDownloadButton>
          </div>
        </div>
      </section>

      <ConsultationNudge />
    </main>
  )
}
