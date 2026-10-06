import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
    Bot,
    Zap,
    CheckCircle2,
    TrendingUp,
    Users,
    Cpu,
    ArrowRight,
    Award,
    Shield,
    Calendar,
    Target,
    UserRound,
    Building2,
    BarChart3,
    Megaphone,
    Settings,
    GraduationCap,
    Laptop,
    RefreshCw,
    Link2,
    MessageCircle,
    Brain,
    Search,
    ClipboardList,
    Lightbulb,
    Rocket,
    Trophy,
    Folder,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { HorizontalScroll } from "@/components/ui/horizontal-scroll";
import { DataTabs } from "@/components/ui/data-tabs";
import { ConsultationNudge } from "@/components/sections/consultation-nudge";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { BrochureDownloadButton } from "@/components/forms/brochure-download-button";
import { BROCHURES } from "@/lib/data/brochures";

export const metadata: Metadata = {
    title: "Agentic AI & Automation Mastery | AcdyOn",
    description:
        "A 4-month applied AI programme for professionals ready to build autonomous agents, automate business workflows, and deploy real-world projects. Live mentorship, three capstone deliverables, and academic progression opportunities.",
};

const toolGroups = [
    {
        category: "AI Foundations",
        color: "#1E40FF",
        tools: ["OpenAI API", "Claude API", "Prompt Engineering"],
    },
    {
        category: "Agent Frameworks",
        color: "#7c3aed",
        tools: ["LangChain", "CrewAI", "Vector Databases"],
    },
    {
        category: "Automation Platforms",
        color: "#059669",
        tools: ["n8n", "Make (Integromat)", "Zapier"],
    },
    {
        category: "Integration & Code",
        color: "#22D3EE",
        tools: ["Python Basics", "REST APIs", "JSON"],
    },
    {
        category: "Productivity & Data",
        color: "#D4AF37",
        tools: ["Notion API", "Perplexity API", "Google Sheets"],
    },
];

const faqs = [
    {
        q: "Do I need coding experience to join this programme?",
        a: "No prior coding experience is required. The programme starts with no-code automation tools and introduces Python basics only where directly useful for agent development. The focus is on practical output, not software engineering.",
    },
    {
        q: "Is this programme delivered live or on-demand?",
        a: "The programme combines live mentorship sessions with structured async modules. You can progress through curriculum content on your own schedule, while live sessions cover project reviews, concept clarity, and personalised feedback.",
    },
    {
        q: "What kind of mentor support is included?",
        a: "All learners receive access to mentor sessions throughout the full programme. These cover project review, concept clarity, and career or consultancy positioning. Mentor contact is ongoing — not only at scheduled checkpoints.",
    },
    {
        q: "How are the three capstone projects structured?",
        a: "Each project covers one core track: agent building, business automation, and an intelligence workflow. All three are scoped to be real, deployable, and portfolio-ready by programme end — not academic exercises.",
    },
    {
        q: "Is this suitable for executives with no AI background?",
        a: "Yes. The programme is specifically designed for executives, consultants, and working professionals who want applied AI skills without becoming engineers. Both beginners and intermediate learners progress well through the structure.",
    },
    {
        q: "What credential is issued on completion?",
        a: "Graduates receive an AcdyOn programme certificate for Agentic AI & Automation Mastery alongside a portfolio of deployed projects. Academic positioning options and credential details are discussed during the initial consultation.",
    },
    {
        q: "How is the internship component structured?",
        a: "The internship is offered to qualifying graduates based on performance throughout the programme. It may be paid or unpaid depending on the partner organisation and the learner's profile. The AcdyOn team guides eligible graduates through the placement process.",
    },
    {
        q: "Is placement guaranteed?",
        a: "The programme provides comprehensive career positioning and placement support, but cannot guarantee employment. Outcomes depend on the learner's skills, effort, and market conditions. The programme equips you with every tool needed to compete effectively.",
    },
    {
        q: "What is the time commitment per week?",
        a: "Expect to commit 10–15 hours per week, including live sessions, async modules, and project work. The programme is structured for working professionals who can dedicate focused time to skill-building.",
    },
    {
        q: "What upgrade pathways are available after completion?",
        a: "Graduates can upgrade to a Microsoft AI-900 certification (USD 200 additional) or pursue a Master's Degree Progression Path through partner universities like Kennedy University and Dunster Business School (USD 3,000 additional, 4 more months).",
    },
    {
        q: "Is there a refund policy?",
        a: "Yes. Students may request a full refund within 30 calendar days from the date of enrolment or first payment. After the initial 30-day period, no refunds shall be issued.",
    },
];

export default function AgenticAIAutomationPage() {
    return (
        <main>
            {/* ── HERO ─────────────────────────────────────────────────────────────── */}
            <section className="relative overflow-hidden bg-slate-950 pb-0 pt-24 sm:pt-32">
                <div className="absolute right-[-8%] top-24 h-96 w-96 rounded-full bg-[#7c3aed]/20 blur-3xl" />
                <div className="absolute left-[-6%] bottom-0 h-64 w-64 rounded-full bg-[#22D3EE]/15 blur-3xl" />

                <div className="container-premium relative pb-16">
                    {/* Trust Badge */}
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-5 py-2.5 shadow-[0_0_20px_rgba(212,175,55,0.15)]">
                        <Shield className="h-4 w-4 text-[#D4AF37]" />
                        <span className="text-sm font-bold text-[#D4AF37]">
                            30-Day Money Back Guarantee
                        </span>
                    </div>

                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#7c3aed]/30 bg-[#7c3aed]/10 px-4 py-2 ml-3">
                        <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#7c3aed]">
                            Applied AI for Professionals
                        </span>
                    </div>

                    <h1 className="max-w-4xl font-display text-3xl leading-tight text-white sm:text-5xl lg:text-7xl">
                        Agentic AI & Automation Mastery
                    </h1>

                    <p className="mt-7 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
                        Build Autonomous AI Agents, Automate Business Workflows,
                        and Deploy Real-World Projects — With Career
                        Acceleration and Academic Progression Opportunities.
                    </p>

                    <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 hidden sm:block">
                        This is not a prompt engineering course. This is a
                        complete AI practitioner transformation — from
                        foundations through agent building, business automation,
                        career positioning, and optional master&apos;s degree
                        progression.
                    </p>

                    <div className="mt-7 flex flex-col gap-3 sm:mt-10 sm:flex-row">
                        <Link
                            href="/book-consultation"
                            className="inline-flex items-center justify-center rounded-full bg-[#1E40FF] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(30,64,255,0.35)] transition-all hover:bg-[#1937dd] sm:px-8 sm:py-4"
                        >
                            Apply Now
                        </Link>
                        <Link
                            href="#programme"
                            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10 sm:px-8 sm:py-4"
                        >
                            View Programme
                        </Link>
                        <BrochureDownloadButton
                            programmeName={
                                BROCHURES["agentic-ai-automation-mastery"]
                                    .programmeName
                            }
                            fileUrl={
                                BROCHURES["agentic-ai-automation-mastery"]
                                    .fileUrl
                            }
                            sourcePage="/programs/agentic-ai-automation-mastery"
                            className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-white/40 sm:px-8 sm:py-4"
                        >
                            Download Brochure
                        </BrochureDownloadButton>
                    </div>

                    {/* Key Facts */}
                    <div className="mt-14 border-t border-white/10 pt-10">
                        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 sm:gap-4">
                            {[
                                { label: "Duration", value: "4 Months", icon: Calendar },
                                { label: "Format", value: "Live + Async", icon: Target },
                                { label: "Mentorship", value: "1-on-1 Sessions", icon: UserRound },
                                { label: "Upgrade Pathways", value: "Available", icon: TrendingUp },
                            ].map(({ label, value, icon: Icon }) => (
                                <div
                                    key={label}
                                    className="rounded-[8px] border border-white/10 bg-white/5 px-5 py-4"
                                >
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
                        <p className="mt-6 text-center text-xs text-slate-500 dark:text-slate-400">
                            80% Agent Building & Automation &middot; 20% Career Positioning & Projects
                        </p>
                    </div>

                    <p className="mt-6 max-w-2xl text-xs leading-5 text-slate-500 dark:text-slate-400">
                        Try the programme risk-free. If you decide it is not the right fit within the first 30 days of enrolment, you may request a refund in accordance with our refund policy.
                    </p>
                </div>
            </section>

            {/* ── THE AI OPPORTUNITY ───────────────────────────────────────────────── */}
            <section className="bg-[#F8FAFC] py-14 sm:py-24 dark:bg-slate-900/60">
                <div className="container-premium">
                    <SectionHeading
                        eyebrow="The AI opportunity"
                        title="The AI Opportunity Has Never Been Larger"
                        description="Organisations across every sector are competing for professionals who can apply AI to real business operations."
                    />
                    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            { icon: TrendingUp, stat: "4,000%", label: "Growth in AI Job Postings Since 2020", body: "Demand for AI practitioners has exploded across industries — from tech and finance to healthcare, education, and government.", color: "#7c3aed" },
                            { icon: Cpu, stat: "$15.7T", label: "Projected AI Economic Impact by 2030", body: "AI is expected to contribute $15.7 trillion to the global economy. Professionals with applied AI skills are positioned at the centre.", color: "#1E40FF" },
                            { icon: Users, stat: "97M", label: "New AI Roles Expected by 2025", body: "The World Economic Forum estimates 97 million new roles will emerge adapted to the new division of labour between humans and AI.", color: "#059669" },
                            { icon: Zap, stat: "300%", label: "Salary Premium for AI-Skilled Professionals", body: "Professionals with demonstrated AI capability command salary premiums of up to 300% compared to peers without AI skills.", color: "#D4AF37" },
                        ].map(({ icon: Icon, stat, label, body, color }) => (
                            <div
                                key={label}
                                className="rounded-[8px] border border-slate-200 bg-white p-8 transition-all hover:shadow-lg dark:bg-slate-950 dark:border-slate-800"
                                style={{ borderTopColor: color, borderTopWidth: 3 }}
                            >
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
                        description="Built for professionals who want to apply AI in their work — no engineering background required."
                    />
                    <div className="mt-14">
                        <DataTabs
                            tabs={[
                                {
                                    label: "Business Leaders",
                                    panel: (
                                        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                                            {[
                                                { icon: Building2, title: "Founders & CEOs", body: "Build AI leverage across operations, content, and decisions without needing a technical team." },
                                                { icon: Settings, title: "Operations Managers", body: "Identify and automate repetitive knowledge work using accessible no-code AI tools." },
                                                { icon: Users, title: "HR & People Leads", body: "Automate candidate screening, onboarding content, and workforce reporting with applied AI." },
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
                                    label: "Functional Managers",
                                    panel: (
                                        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                                            {[
                                                { icon: Megaphone, title: "Marketing Leaders", body: "Automate content creation, audience research, and campaign workflows with AI pipelines." },
                                                { icon: GraduationCap, title: "Educators & Trainers", body: "Develop AI-augmented course content, feedback systems, and learner support tools." },
                                                { icon: BarChart3, title: "Consultants", body: "Differentiate your practice by delivering AI-enhanced research, reporting, and client workflows." },
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
                                    label: "Tech & Consultants",
                                    panel: (
                                        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                                            {[
                                                { icon: Laptop, title: "Technology Professionals", body: "Expand from traditional development into AI agent building, LLM integration, and automation architecture." },
                                                { icon: RefreshCw, title: "Career Switchers", body: "Professionals from any background ready to move into the AI space with structured, guided training." },
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
                        eyebrow="4-Month Learning Journey"
                        title="Your Complete AI Practitioner Transformation"
                        description="From AI foundations to deployed projects — every phase builds on the last with a clear, outcome-driven structure."
                        variant="dark"
                    />
                    <div className="mt-16 space-y-0">
                        {[
                            { month: "Month 1", title: "AI Foundations & Prompt Architecture", color: "#1E40FF", modules: ["LLM Behaviour & Limitations", "Advanced Prompt Engineering", "Structured Output & JSON", "API Fundamentals & Token Management"] },
                            { month: "Month 2", title: "Building AI Agents", color: "#7c3aed", modules: ["Agent Architecture Patterns", "Memory & Context Management", "Tool-Calling & Function Use", "Multi-Agent Coordination"] },
                            { month: "Month 3", title: "Business Automation & Workflows", color: "#059669", modules: ["n8n & Make Workflow Design", "CRM & Productivity Integrations", "Automated Content Pipelines", "AI-Driven Reporting Systems"] },
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

                        {/* Month 4 — Capstone & Career (Visually Distinct) */}
                        <div className="relative flex gap-6">
                            <div className="flex flex-col items-center">
                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#D4AF37] text-lg font-bold text-slate-950 shadow-[0_0_30px_rgba(212,175,55,0.3)] dark:text-white">4</div>
                            </div>
                            <div className="flex-1 rounded-[8px] border-2 border-[#D4AF37]/50 bg-[#D4AF37]/10 p-8">
                                <div className="mb-1 flex items-center gap-3">
                                    <p className="text-xs font-bold uppercase tracking-wide text-[#D4AF37]">Month 4</p>
                                    <span className="rounded-full bg-[#D4AF37] px-3 py-0.5 text-xs font-bold text-slate-950 dark:text-white">Career Launch</span>
                                </div>
                                <h3 className="text-xl font-semibold text-[#D4AF37]">Capstone Projects & Career Positioning</h3>
                                <p className="mt-2 text-sm text-slate-400">The entire final month is devoted to building your portfolio and positioning you as an AI practitioner.</p>
                                <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                                    {["3 Capstone Projects", "Portfolio Review", "AI Practitioner Positioning", "Career & Consultancy Strategy", "Resume & LinkedIn Rebuild", "Mock Presentations", "Mentor Final Review", "Credential Planning"].map((item) => (
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

            {/* ── PRACTITIONER MENTORSHIP ───────────────────────────────────────────── */}
            <section className="bg-white py-14 sm:py-24 dark:bg-slate-950">
                <div className="container-premium">
                    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                        <div>
                            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#7c3aed]">Practitioner Mentorship</p>
                            <h2 className="font-display text-2xl leading-tight text-slate-950 sm:text-4xl md:text-5xl dark:text-white">
                                Capability Is Built Through Guided Practice — Not Passive Study
                            </h2>
                            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300">
                                Most AI courses deliver information. This programme delivers someone in your corner while you build. Mentors review actual projects, provide direct feedback, and help you apply AI capability within your specific professional context.
                            </p>
                            <p className="mt-4 text-sm leading-7 text-slate-500 dark:text-slate-400">
                                The outcome is not a completed course — it is practitioner-level capability that holds up in executive conversations, client engagements, and operational settings.
                            </p>
                            <Link href="/book-consultation" className="mt-8 inline-flex items-center justify-center rounded-full bg-[#1E40FF] px-8 py-4 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(30,64,255,0.35)] transition-all hover:bg-[#1937dd]">
                                Book Consultation
                            </Link>
                        </div>
                        <div className="rounded-[8px] bg-slate-950 p-8 text-white">
                            <div className="rounded-[8px] border border-white/10 bg-white/[0.03] p-6">
                                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#22D3EE]">Mentorship Model</p>
                                <h3 className="mt-5 font-display text-2xl leading-tight sm:text-3xl">1-on-1 practitioner-guided learning throughout</h3>
                                <p className="mt-4 text-sm leading-7 text-slate-300">
                                    Every learner works with an experienced AI practitioner mentor across all four phases. Sessions are scheduled around your professional calendar.
                                </p>
                                <div className="mt-6 grid gap-3">
                                    {["Project reviews at each phase", "Live Q&A and applied concept sessions", "Career and consultancy positioning", "Portfolio review before graduation"].map((item) => (
                                        <div key={item} className="flex items-center gap-3 text-sm text-slate-300">
                                            <CheckCircle2 className="h-4 w-4 shrink-0 text-[#22D3EE]" />
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
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
                        description="Every programme element is practical. You graduate with applied experience across the full AI stack and three deployed projects."
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
                                                { icon: Bot, title: "Agent Building Labs", desc: "Build autonomous agents from scratch — research assistants, customer support bots, and multi-step reasoning systems." },
                                                { icon: Link2, title: "API Integration", desc: "Connect AI to real services — CRM, email, databases, and productivity tools using REST APIs and webhooks." },
                                                { icon: Zap, title: "Workflow Automation", desc: "Design end-to-end automated workflows in n8n and Make that run real business operations autonomously." },
                                                { icon: BarChart3, title: "Data Pipeline Labs", desc: "Build AI-powered data analysis pipelines that ingest, process, and generate executive-ready reports." },
                                                { icon: MessageCircle, title: "Conversational AI", desc: "Design chatbots and conversational interfaces with memory, context management, and dynamic responses." },
                                                { icon: ClipboardList, title: "Content Automation", desc: "Create AI content pipelines that draft, edit, format, and distribute content across multiple channels." },
                                                { icon: Brain, title: "RAG Systems", desc: "Build Retrieval-Augmented Generation systems that ground AI responses in your organisation's knowledge base." },
                                                { icon: Search, title: "AI Research Agents", desc: "Deploy research agents that search multiple sources, synthesise findings, and produce structured reports." },
                                            ].map(({ icon: Icon, title, desc }) => (
                                                <div key={title} className="rounded-[8px] border border-slate-200 bg-white p-6 transition-all hover:border-[#7c3aed]/30 hover:shadow-lg dark:bg-slate-950 dark:border-slate-800">
                                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[8px] bg-slate-950">
                                                        <Icon className="h-6 w-6 text-white" />
                                                    </div>
                                                    <h3 className="mb-2 font-semibold text-slate-950 dark:text-white">{title}</h3>
                                                    <p className="text-sm leading-6 text-slate-500 dark:text-slate-400">{desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    ),
                                },
                                {
                                    label: "Capstone Projects",
                                    panel: (
                                        <div className="grid gap-6 lg:grid-cols-3">
                                            {[
                                                { n: "01", title: "Personal AI Research Assistant", desc: "Build a multi-source research agent that searches the web, synthesises findings, and produces structured reports on demand. Deployed and functional.", tags: ["Agent Architecture", "Web Search", "Structured Output"], color: "#1E40FF" },
                                                { n: "02", title: "Automated Content Workflow", desc: "Design a no-code pipeline that takes a topic brief, drafts long-form content, suggests visuals, and queues social posts — with human review at each stage.", tags: ["n8n / Make", "Content Pipeline", "Social Integration"], color: "#7c3aed" },
                                                { n: "03", title: "Business Intelligence Agent", desc: "Build an agent that ingests weekly business data, identifies anomalies, and produces executive-ready summaries with action recommendations. Built for real operational use.", tags: ["Data Analysis", "Executive Reporting", "Automation"], color: "#D4AF37" },
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
                        description="These are the roles and positions graduates target — all in high-demand, with strong global hiring activity."
                        variant="dark"
                    />
                    <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                        {[
                            { role: "AI Automation Specialist", icon: Zap, responsibilities: "Design and deploy AI-powered automation workflows that streamline business operations and reduce manual work.", suitability: "Entry to mid-level", progression: "Senior Automation Engineer → Head of AI Operations" },
                            { role: "AI Product Manager", icon: ClipboardList, responsibilities: "Define, scope, and manage AI-powered products and features from concept to deployment.", suitability: "Mid-level professionals", progression: "Senior PM → VP Product (AI)" },
                            { role: "AI Solutions Consultant", icon: Lightbulb, responsibilities: "Advise organisations on AI implementation strategy, tool selection, and workflow optimisation.", suitability: "Experienced professionals", progression: "Senior Consultant → AI Practice Lead" },
                            { role: "Prompt Engineer", icon: Brain, responsibilities: "Design and optimise prompts, chains, and agent architectures for production AI systems.", suitability: "Entry to mid-level", progression: "Senior Prompt Engineer → AI Architect" },
                            { role: "AI Integration Developer", icon: Link2, responsibilities: "Connect AI capabilities to business systems — CRM, ERP, productivity, and communication platforms.", suitability: "Entry to mid-level", progression: "Senior Developer → Solutions Architect" },
                            { role: "Business Intelligence Analyst", icon: BarChart3, responsibilities: "Build AI-powered reporting and analytics systems that transform raw data into actionable executive insights.", suitability: "Entry-level friendly", progression: "Senior BI Analyst → Head of Analytics" },
                            { role: "AI Entrepreneur", icon: Rocket, responsibilities: "Launch AI-powered services, micro-SaaS products, or consulting practices using skills built in the programme.", suitability: "All levels", progression: "Freelancer → Agency → SaaS Founder" },
                        ].map(({ role, icon: Icon, responsibilities, suitability, progression }) => (
                            <article key={role} className="flex flex-col rounded-[8px] border border-white/10 bg-white/[0.04] p-6 transition-all hover:bg-white/[0.07]">
                                <Icon className="mb-3 h-8 w-8 text-[#1E40FF]" />
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
                        title="AI Professional Salary Trajectory"
                        description="AI practitioner salaries grow significantly with experience. This is what a realistic progression looks like."
                    />
                    <div className="mt-14 grid gap-6 md:grid-cols-3">
                        {[
                            { level: "Entry Level", range: "$50,000 – $80,000", roles: ["AI Automation Associate", "Junior Prompt Engineer", "AI Operations Assistant"], bar: 35, color: "#22D3EE", note: "Year 0–2 post-programme" },
                            { level: "Mid Level", range: "$80,000 – $130,000", roles: ["AI Solutions Consultant", "Automation Architect", "AI Product Manager"], bar: 65, color: "#7c3aed", note: "Year 2–5 of experience" },
                            { level: "Experienced", range: "$130,000 – $200,000+", roles: ["Head of AI Operations", "AI Practice Lead", "VP AI Strategy"], bar: 100, color: "#D4AF37", note: "5+ years of experience" },
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
                        description="Three distinct credentials that demonstrate your skill, practical experience, and career readiness."
                    />
                    <div className="mt-14 grid gap-8 md:grid-cols-3">
                        {[
                            { icon: Trophy, title: "Agentic AI Mastery Certificate", issuer: "Issued by AcdyOn", desc: "Awarded upon successful completion of all modules, projects, and assessments. Demonstrates verified, end-to-end AI practitioner expertise.", badge: "Programme Certificate", color: "#7c3aed" },
                            { icon: Folder, title: "Capstone Project Portfolio", issuer: "Documented & Deployed", desc: "A portfolio of 3 real-world AI projects completed during the programme — deployed, functional, and portfolio-ready.", badge: "Portfolio", color: "#22D3EE" },
                            { icon: UserRound, title: "Mentor Endorsement", issuer: "From Your Practitioner Mentor", desc: "A personalised mentor review and endorsement of your projects and capabilities — adding professional credibility to your profile.", badge: "Endorsement", color: "#D4AF37" },
                        ].map(({ icon: Icon, title, issuer, desc, badge, color }) => (
                            <div key={title} className="flex flex-col rounded-[8px] border border-slate-200 bg-white p-8 text-center dark:bg-slate-950 dark:border-slate-800" style={{ borderTopColor: color, borderTopWidth: 4 }}>
                                <Icon className="mx-auto mb-4 h-12 w-12" style={{ color }} />
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
                        Upon successful completion of the Agentic AI & Automation Mastery programme, graduates receive an official AcdyOn Certificate of Completion.
                    </p>
                    <div className="mt-10 overflow-hidden rounded-[8px] border border-slate-200 shadow-lg dark:border-slate-800">
                        <Image
                            src="https://sohhmxayptiosflmlxuu.supabase.co/storage/v1/object/public/brochures/Certificates/Agentic%20AI-Certificate.png"
                            alt="AcdyOn Agentic AI & Automation Mastery — Certificate of Completion"
                            width={1200}
                            height={850}
                            className="h-auto w-full"
                            unoptimized
                        />
                    </div>
                </div>
            </section>

            {/* ── UPGRADE PATHWAYS ──────────────────────────────────────────────────── */}
            <section className="bg-[#F8FAFC] py-14 sm:py-24 dark:bg-slate-900/60">
                <div className="container-premium">
                    <SectionHeading
                        eyebrow="Choose Your Future"
                        title="Choose Your Future Path"
                        description="Complete the programme and unlock additional progression opportunities tailored to your career ambitions."
                    />
                    <HorizontalScroll className="mt-14 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible">
                        {/* Path A */}
                        <div className="flex flex-col rounded-lg border border-slate-200 bg-white p-8 w-full sm:w-96 shrink-0 snap-center lg:w-auto lg:min-w-0 lg:shrink dark:bg-slate-950 dark:border-slate-800">
                            <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-400">Path A</p>
                            <h3 className="text-xl font-semibold text-slate-950 dark:text-white">Standard Programme</h3>
                            <p className="mt-1 text-sm text-[#7c3aed] font-semibold">Agentic AI & Automation Mastery</p>
                            <div className="my-6 rounded-lg bg-[#F8FAFC] p-4 dark:bg-slate-900/60">
                                <p className="text-xs text-slate-500 dark:text-slate-400">Duration</p>
                                <p className="text-lg font-bold text-slate-950 dark:text-white">4 Months</p>
                            </div>
                            <ul className="flex-1 space-y-3">
                                {["Full Training Programme", "3 Capstone Projects", "1-on-1 Mentorship", "Career Positioning Support"].map((item) => (
                                    <li key={item} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                                        <CheckCircle2 className="h-4 w-4 shrink-0 text-[#7c3aed]" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-6 rounded-lg border border-slate-200 bg-[#F8FAFC] p-4 text-center dark:bg-slate-900/60 dark:border-slate-800">
                                <p className="text-xs text-slate-500 dark:text-slate-400">Outcome</p>
                                <p className="mt-1 font-semibold text-slate-950 dark:text-white">AI Practitioner Professional</p>
                            </div>
                        </div>

                        {/* Path B — Most Popular */}
                        <div className="relative flex flex-col rounded-lg border-2 border-[#1E40FF] bg-white p-8 shadow-[0_8px_30px_rgba(30,64,255,0.12)] w-full sm:w-96 shrink-0 snap-center lg:w-auto lg:min-w-0 lg:shrink dark:bg-slate-950">
                            <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 rounded-full bg-[#1E40FF] px-4 py-1 text-xs font-bold text-white">Most Popular Upgrade</div>
                            <p className="mb-2 text-xs font-bold uppercase tracking-wide text-[#1E40FF]">Path B</p>
                            <h3 className="text-xl font-semibold text-slate-950 dark:text-white">Professional Certification Upgrade</h3>
                            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Additional Investment: <span className="font-bold text-slate-950 dark:text-white">USD 200</span></p>
                            <div className="my-6 rounded-lg bg-[#1E40FF]/5 p-4">
                                <p className="text-xs text-[#1E40FF]">Includes</p>
                                <p className="text-sm font-semibold text-slate-950 dark:text-white">Microsoft AI-900 Certification</p>
                            </div>
                            <ul className="flex-1 space-y-3">
                                {["Microsoft AI-900 Preparation", "Official Exam Voucher", "Certification Support", "Exam Guidance"].map((item) => (
                                    <li key={item} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                                        <CheckCircle2 className="h-4 w-4 shrink-0 text-[#1E40FF]" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-6 rounded-lg border border-[#1E40FF]/20 bg-[#1E40FF]/5 p-4 text-center">
                                <p className="text-xs text-[#1E40FF]">Outcome</p>
                                <p className="mt-1 font-semibold text-slate-950 dark:text-white">AI Practitioner Professional</p>
                                <p className="text-xs text-slate-500 dark:text-slate-400">with Microsoft Credential</p>
                            </div>
                        </div>

                        {/* Path C — Highest Progression */}
                        <div className="relative flex flex-col rounded-lg border-2 border-[#D4AF37] bg-linear-to-b from-white to-[#D4AF37]/4 p-8 shadow-[0_8px_30px_rgba(212,175,55,0.12)] w-full sm:w-96 shrink-0 snap-center lg:w-auto lg:min-w-0 lg:shrink">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 rounded-full bg-[#D4AF37] px-4 py-1 text-xs font-bold text-slate-950 dark:text-white">Highest Academic Progression</div>
                            <p className="mb-2 text-xs font-bold uppercase tracking-wide text-[#D4AF37]">Path C</p>
                            <h3 className="text-xl font-semibold text-slate-950 dark:text-white">Master&apos;s Degree Progression</h3>
                            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Additional Investment: <span className="font-bold text-slate-950 dark:text-white">USD 3,000</span></p>
                            <div className="my-6 rounded-lg bg-[#D4AF37]/10 p-4">
                                <div className="flex justify-between text-xs">
                                    <span className="text-slate-500 dark:text-slate-400">Additional Duration</span>
                                    <span className="font-bold text-slate-950 dark:text-white">+4 Months</span>
                                </div>
                                <div className="mt-1 flex justify-between text-xs">
                                    <span className="text-slate-500 dark:text-slate-400">Total Journey</span>
                                    <span className="font-bold text-slate-950 dark:text-white">8 Months</span>
                                </div>
                            </div>
                            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#D4AF37]">Progress Through</p>
                            <div className="space-y-3">
                                {[
                                    { name: "Kennedy University", country: "USA / France", logo: "https://sohhmxayptiosflmlxuu.supabase.co/storage/v1/object/public/brochures/Kennedy-University-520-x-330%20(2).jpg" },
                                    { name: "Dunster Business School", country: "Switzerland", logo: "https://sohhmxayptiosflmlxuu.supabase.co/storage/v1/object/public/brochures/DBS_New-Final-Logo_6.png" },
                                ].map((uni) => (
                                    <div key={uni.name} className="flex items-center gap-3 rounded-lg border border-[#D4AF37]/20 bg-white p-3 dark:bg-slate-950">
                                        <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-sm border border-slate-100 bg-white dark:bg-slate-950 dark:border-slate-800">
                                            <Image src={uni.logo} alt={uni.name} fill className="object-contain p-0.5" unoptimized />
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-sm font-semibold text-slate-950 truncate dark:text-white">{uni.name}</p>
                                            <p className="text-xs text-slate-500 dark:text-slate-400">{uni.country}</p>
                                        </div>
                                    </div>
                                ))}
                                <div className="flex items-center gap-3 rounded-lg border border-dashed border-[#D4AF37]/30 bg-[#D4AF37]/5 p-3">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-[#D4AF37]/20 bg-white text-lg dark:bg-slate-950">+</div>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-950 dark:text-white">More Partners Coming</p>
                                        <p className="text-xs text-slate-500 dark:text-slate-400">Network expanding</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5 rounded-lg bg-slate-950 p-4">
                                <p className="mb-3 text-center text-xs font-bold uppercase tracking-[0.18em] text-[#D4AF37]">Accreditations & Recognition</p>
                                <div className="flex flex-wrap justify-center gap-2">
                                    {["QS 4-Star Rated", "EAHEA", "QAHE", "International Standing"].map((badge) => (
                                        <span key={badge} className="inline-flex items-center gap-1 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-3 py-1 text-xs font-medium text-[#D4AF37]">
                                            <Award className="h-3 w-3" />
                                            {badge}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <ul className="mt-5 flex-1 space-y-2">
                                {["Additional Academic Modules", "Academic Assessments", "Progression Support", "Degree Pathway Eligibility"].map((item) => (
                                    <li key={item} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                                        <CheckCircle2 className="h-4 w-4 shrink-0 text-[#D4AF37]" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-6 rounded-lg border border-[#D4AF37]/20 bg-[#D4AF37]/10 p-4 text-center">
                                <p className="text-xs text-[#D4AF37]">Outcome</p>
                                <p className="mt-1 font-semibold text-slate-950 dark:text-white">AI Practitioner Professional</p>
                                <p className="text-xs text-slate-500 dark:text-slate-400">+ Master&apos;s Degree Pathway</p>
                            </div>
                            <Link href="/book-consultation" className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-[#D4AF37] px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[#C5A030] dark:text-white">
                                Enquire About Master&apos;s Upgrade
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </HorizontalScroll>
                </div>
            </section>

            {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
            <section className="bg-[#F8FAFC] py-14 sm:py-24 dark:bg-slate-900/60">
                <div className="container-premium">
                    <SectionHeading
                        eyebrow="Common Questions"
                        title="Frequently Asked Questions"
                    />
                    <FAQAccordion faqs={faqs} />
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
                            programmeName={BROCHURES["agentic-ai-automation-mastery"].programmeName}
                            fileUrl={BROCHURES["agentic-ai-automation-mastery"].fileUrl}
                            sourcePage="/programs/agentic-ai-automation-mastery"
                            className="inline-flex items-center rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white transition-all hover:border-white/40 hover:bg-white/5"
                        >
                            Download Brochure
                        </BrochureDownloadButton>
                    </div>
                </div>
            </section>

            <ConsultationNudge />
        </main>
    );
}
