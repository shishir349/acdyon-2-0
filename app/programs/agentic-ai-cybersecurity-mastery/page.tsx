import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Shield, Zap, CheckCircle2, TrendingUp, Users,
  Globe2, AlertTriangle, Server,
} from 'lucide-react'
import { SectionHeading } from '@/components/ui/section-heading'
import { ConsultationNudge } from '@/components/sections/consultation-nudge'
import { FAQAccordion } from '@/components/ui/faq-accordion'
import { cybersecurityTestimonials } from '@/lib/data/site'

export const metadata: Metadata = {
  title: 'Agentic AI & Cybersecurity Mastery | AcdyOn',
  description:
    'Become job-ready for modern cybersecurity careers. 6-month programme with hands-on labs, AI-enhanced defence skills, internship experience, and dedicated career launch support.',
}

const companies = [
  'Microsoft', 'Google', 'Amazon', 'Meta', 'Apple', 'Netflix',
  'TCS', 'Infosys', 'Wipro', 'Deloitte', 'PwC', 'Accenture',
  'IBM', 'Oracle', 'Cisco', 'Palo Alto Networks', 'CrowdStrike', 'Fortinet',
]

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
  { q: 'What career roles does this programme prepare me for?', a: 'Graduates are prepared for roles including SOC Analyst, Cybersecurity Analyst, Vulnerability Analyst, Security Operations Associate, Threat Intelligence Analyst, Junior Penetration Tester, and Cloud Security Associate.' },
  { q: 'What is the time commitment per week?', a: 'Expect to commit 15–20 hours per week, including live sessions, lab work, and self-study. The programme is structured for working professionals who can dedicate focused time to skill-building.' },
]

export default function CybersecurityMasteryPage() {
  return (
    <main>

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-slate-950 pb-0 pt-32">
        <div className="absolute right-[-8%] top-24 h-96 w-96 rounded-full bg-[#1E40FF]/20 blur-3xl" />
        <div className="absolute left-[-6%] bottom-0 h-64 w-64 rounded-full bg-[#22D3EE]/15 blur-3xl" />

        <div className="container-premium relative pb-16">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#22D3EE]/30 bg-[#22D3EE]/10 px-4 py-2">
            <Shield className="h-4 w-4 text-[#22D3EE]" />
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#22D3EE]">
              Cybersecurity Career Programme
            </span>
          </div>

          <h1 className="max-w-4xl font-display text-5xl leading-tight text-white sm:text-6xl lg:text-7xl">
            Master Modern Cybersecurity With AI-Enhanced Defense Skills
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            Develop practical offensive and defensive cybersecurity expertise, learn AI-assisted
            threat detection techniques, and prepare for high-growth cybersecurity careers through
            hands-on labs, real-world simulations, internship experience, and placement readiness support.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/book-consultation" className="inline-flex items-center justify-center rounded-full bg-[#1E40FF] px-8 py-4 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(30,64,255,0.35)] transition-all hover:bg-[#1937dd]">
              Apply Now
            </Link>
            <Link href="#programme" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-white/10">
              View Programme
            </Link>
            <Link href="#" className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white transition-all hover:border-white/40">
              Download Brochure
            </Link>
          </div>

          {/* Programme highlights bar */}
          <div className="mt-14 border-t border-white/10 pt-10">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {[
                { icon: '📅', label: '6 Months' },
                { icon: '💻', label: 'Live Online' },
                { icon: '🔬', label: 'Hands-On Labs' },
                { icon: '🚀', label: 'Career Launch Support' },
                { icon: '🏢', label: 'Internship Opportunity' },
                { icon: '✅', label: '100+ Practical Exercises' },
              ].map(({ icon, label }) => (
                <div key={label} className="flex items-center gap-3 rounded-[8px] border border-white/10 bg-white/5 px-4 py-3">
                  <span className="text-xl">{icon}</span>
                  <span className="text-sm font-semibold text-white">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPANY DEMAND WALL ──────────────────────────────────────────────── */}
      <section className="border-y border-slate-200 bg-white py-14">
        <div className="container-premium">
          <p className="mb-2 text-center text-xs font-bold uppercase tracking-[0.24em] text-[#1E40FF]">Industry Demand</p>
          <h2 className="mb-3 text-center font-display text-3xl text-slate-950">
            Cybersecurity Talent Is Needed Everywhere
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-center text-sm text-slate-500">
            Case studies, security incidents, and industry practices referenced from leading global organisations.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {companies.map((name) => (
              <div key={name} className="rounded-full border border-slate-200 bg-[#F8FAFC] px-5 py-2.5 text-sm font-semibold text-slate-700">
                {name}
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-slate-400">
            The above organisations are referenced for educational purposes only. No affiliation, endorsement, or partnership is implied.
          </p>
        </div>
      </section>

      {/* ── INDUSTRY DEMAND STATISTICS ───────────────────────────────────────── */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Why Cybersecurity Now"
            title="The Demand Has Never Been Greater"
            description="Every organisation on the planet needs cybersecurity talent. The supply has not kept pace."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: AlertTriangle, stat: '3.5M+', label: 'Unfilled Cybersecurity Jobs Globally', body: 'The cybersecurity talent shortage is one of the largest workforce gaps in technology — and it is growing every year.', color: '#dc2626' },
              { icon: TrendingUp, stat: '300%', label: 'Growth in Ransomware Attacks Since 2020', body: 'Ransomware is the most financially damaging cybercrime. Every sector — healthcare, finance, infrastructure — is a target.', color: '#1E40FF' },
              { icon: Users, stat: '65%', label: 'Increase in SOC Analyst Hiring', body: 'Security Operations Centre hiring is accelerating globally as organisations build real-time threat monitoring capabilities.', color: '#7c3aed' },
              { icon: Globe2, stat: '$600B', label: 'Annual Global Cybercrime Cost', body: 'Cybercrime costs more than the GDP of most countries. Demand for professionals who can prevent, detect, and respond is urgent.', color: '#dc2626' },
              { icon: Server, stat: '94%', label: 'Organisations Moving to Cloud Security', body: 'Cloud migration has created a wave of demand for security professionals who understand hybrid and cloud-native defence.', color: '#1E40FF' },
              { icon: Zap, stat: '400%', label: 'Growth in AI Security Tool Adoption', body: 'AI-powered security operations are no longer optional. Professionals who can work with AI tools command premium salaries.', color: '#22D3EE' },
            ].map(({ icon: Icon, stat, label, body, color }) => (
              <div key={label} className="rounded-[8px] border border-slate-200 bg-white p-8 transition-all hover:shadow-lg" style={{ borderTopColor: color, borderTopWidth: 3 }}>
                <Icon className="mb-4 h-6 w-6" style={{ color }} />
                <p className="font-display text-4xl font-bold text-slate-950">{stat}</p>
                <p className="mb-3 mt-1 text-xs font-bold uppercase tracking-wide text-slate-400">{label}</p>
                <p className="text-sm leading-6 text-slate-600">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO THIS IS FOR ──────────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Is This For You?"
            title="Who This Programme Is Designed For"
            description="Built for people who want to enter, advance, or switch into cybersecurity — regardless of where they are starting from."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 md:grid-cols-4">
            {[
              { icon: '🔄', title: 'Career Switchers', body: 'Professionals from any background ready to move into cybersecurity with structured, guided training.' },
              { icon: '💻', title: 'IT Professionals', body: 'IT support, helpdesk, and system staff looking to specialise in security roles.' },
              { icon: '🌐', title: 'Network Engineers', body: 'Networking professionals seeking to expand into offensive and defensive security disciplines.' },
              { icon: '🖥️', title: 'System Administrators', body: 'SysAdmins transitioning into security operations, vulnerability management, or cloud security.' },
              { icon: '🔍', title: 'Security Analysts', body: 'Junior analysts looking to formalise skills, add AI capability, and accelerate career progression.' },
              { icon: '🎓', title: 'Fresh Graduates', body: 'Computer science and technology graduates seeking a practical, job-ready launch into cybersecurity.' },
              { icon: '📱', title: 'Technology Professionals', body: 'Developers, QA engineers, and tech professionals adding security expertise to their profile.' },
              { icon: '↩️', title: 'Career Returnees', body: 'Professionals returning to work after a break who need a structured re-entry into tech careers.' },
            ].map(({ icon, title, body }) => (
              <div key={title} className="rounded-[8px] border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-3 text-4xl">{icon}</div>
                <h3 className="mb-2 font-semibold text-slate-950">{title}</h3>
                <p className="text-sm leading-6 text-slate-500">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROGRAMME JOURNEY ────────────────────────────────────────────────── */}
      <section id="programme" className="bg-slate-950 py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="6-Month Programme"
            title="Your Complete Career Journey"
            description="From foundations to job offer — every month builds on the last with a clear, outcome-driven structure."
            variant="dark"
          />
          <div className="mt-16 grid gap-4 lg:grid-cols-6">
            {[
              { month: 'Month 1', phase: 'Phase 1', title: 'Cybersecurity Foundations', color: '#1E40FF', modules: ['Cybersecurity fundamentals & threat landscape', 'Networking essentials & protocols', 'Operating systems security', 'Cyber laws & compliance', 'Introduction to ethical hacking'] },
              { month: 'Month 2', phase: 'Phase 2', title: 'Offensive Security', color: '#dc2626', modules: ['Network scanning & reconnaissance', 'System exploitation & privilege escalation', 'Web application hacking', 'Social engineering techniques', 'Vulnerability assessment'] },
              { month: 'Month 3', phase: 'Phase 3', title: 'Defensive Security', color: '#059669', modules: ['Intrusion detection & prevention', 'Firewall & perimeter defence', 'Incident response & forensics', 'Malware analysis', 'SIEM & log analysis'] },
              { month: 'Month 4', phase: 'Phase 4', title: 'AI For Security', color: '#22D3EE', modules: ['AI-assisted threat detection', 'Machine learning for anomaly detection', 'Automated incident response', 'AI-enhanced penetration testing', 'Security workflow automation'] },
              { month: 'Month 5', phase: 'Phase 5', title: 'Advanced Labs', color: '#7c3aed', modules: ['Red team vs blue team simulations', 'Cloud security operations', 'IoT & mobile security', 'Capstone project delivery', 'Portfolio documentation'] },
              { month: 'Month 6', phase: 'Phase 6', title: 'Career Launch', color: '#D4AF37', highlight: true, modules: ['Resume rebuild & LinkedIn optimisation', 'Mock technical interviews', 'HR & salary negotiation prep', 'Job mapping & application strategy', 'Internship experience'] },
            ].map(({ month, phase, title, color, modules, highlight }) => (
              <div key={phase} className={`flex flex-col rounded-[8px] p-6 ${highlight ? 'border-2 border-[#D4AF37]/60 bg-[#D4AF37]/10' : 'border border-white/10 bg-white/[0.04]'}`}>
                <div className="mb-4">
                  <div className="mb-2 inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide text-white" style={{ backgroundColor: color }}>
                    {month}
                  </div>
                  <p className="text-xs font-medium text-slate-400">{phase}</p>
                  <h3 className={`mt-1 font-semibold ${highlight ? 'text-[#D4AF37]' : 'text-white'}`}>
                    {title}
                    {highlight && <span className="ml-1 text-xs font-normal opacity-70"> ★ Career Month</span>}
                  </h3>
                </div>
                <ul className="mt-2 space-y-2">
                  {modules.map((m) => (
                    <li key={m} className="flex gap-2 text-xs text-slate-400">
                      <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: color }} />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAREER LAUNCH MONTH ──────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#D4AF37]">Month 6 — Career Launch</p>
              <h2 className="font-display text-4xl leading-tight text-slate-950 sm:text-5xl">
                The Final Month Is Dedicated To Getting You Hired
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                After 5 months of intensive skills training, the entire final month is devoted to one
                goal: getting you into a cybersecurity role. Every session is designed to make you
                interview-ready, application-ready, and job-ready.
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-500">
                Qualifying graduates are also considered for paid or unpaid internship placements based on performance throughout the programme.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: '📄', title: 'Resume Rebuild', desc: 'Transform your CV into a cybersecurity-focused document that passes ATS filters.' },
                { icon: '💼', title: 'LinkedIn Optimisation', desc: 'Rebuild your profile to attract recruiters and signal cybersecurity expertise.' },
                { icon: '🎤', title: 'Mock Interviews', desc: 'Realistic technical and behavioural practice with structured feedback.' },
                { icon: '🧠', title: 'Technical Interview Prep', desc: 'Domain-specific preparation for cybersecurity technical rounds.' },
                { icon: '🤝', title: 'HR Interview Prep', desc: 'Soft skills coaching, communication improvement, and professional presence.' },
                { icon: '💰', title: 'Salary Negotiation', desc: 'Market rates, negotiation tactics, and how to secure the right offer.' },
                { icon: '🗺️', title: 'Job Mapping', desc: 'Identify exact roles, companies, and geographies aligned to your profile.' },
                { icon: '🏢', title: 'Internship Experience', desc: 'Paid or unpaid internship for qualifying graduates based on programme performance.' },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="flex gap-3 rounded-[8px] border border-slate-200 bg-[#F8FAFC] p-5">
                  <span className="mt-0.5 shrink-0 text-2xl">{icon}</span>
                  <div>
                    <p className="font-semibold text-slate-950">{title}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TOOLS ECOSYSTEM ─────────────────────────────────────────────────── */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Tools You Will Master"
            title="Industry-Standard Security Tools"
            description="Train on the exact tools used by professional security teams at global organisations."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {toolGroups.map(({ category, color, tools }) => (
              <div key={category} className="rounded-[8px] border border-slate-200 bg-white p-6" style={{ borderTopColor: color, borderTopWidth: 3 }}>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em]" style={{ color }}>{category}</p>
                <div className="space-y-2">
                  {tools.map((tool) => (
                    <div key={tool} className="flex items-center gap-2 rounded-[6px] border border-slate-100 bg-[#F8FAFC] px-3 py-2 text-sm font-semibold text-slate-700">
                      <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: color }} />
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HANDS-ON LABS ────────────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Practical Training"
            title="Real-World Hands-On Labs"
            description="Every concept is reinforced with controlled, real-environment lab exercises — not simulations or theory exercises."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: '🖥️', title: 'SOC Simulations', desc: 'Operate a live Security Operations Centre environment — monitor, detect, triage, and respond to real alerts.' },
              { icon: '🕵️', title: 'Threat Hunting', desc: 'Proactively search for threats that evade automated detection using manual and AI-assisted hunting techniques.' },
              { icon: '🔍', title: 'Vulnerability Assessment', desc: 'Identify, classify, and prioritise vulnerabilities across systems, networks, and applications.' },
              { icon: '🌐', title: 'Web App Testing', desc: 'Test web applications for OWASP Top 10 vulnerabilities using professional-grade tools and techniques.' },
              { icon: '🚨', title: 'Incident Response', desc: 'Contain, investigate, and remediate security incidents following industry-standard IR frameworks.' },
              { icon: '🦠', title: 'Malware Investigation', desc: 'Analyse malware samples in sandboxed environments — understand behaviour, propagation, and mitigation.' },
              { icon: '☁️', title: 'Cloud Security Labs', desc: 'Secure cloud environments, identify misconfigurations, and apply defence best practices in AWS and hybrid setups.' },
              { icon: '🤖', title: 'AI Detection Exercises', desc: 'Use AI tools to detect anomalies, classify threats, and automate security workflows in real scenarios.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="rounded-[8px] border border-slate-200 bg-white p-6 transition-all hover:border-[#1E40FF]/30 hover:shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[8px] bg-slate-950 text-xl">{icon}</div>
                <h3 className="mb-2 font-semibold text-slate-950">{title}</h3>
                <p className="text-sm leading-6 text-slate-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO PROJECTS ───────────────────────────────────────────────── */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Graduate With Evidence"
            title="Portfolio Projects"
            description="You graduate with completed security projects — demonstrable proof of your capability to every employer."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { n: '01', title: 'SOC Analyst Project', desc: 'Build and operate a simulated SOC environment. Detect, analyse, and respond to a live incident scenario with full documentation.', tags: ['SIEM', 'Log Analysis', 'IR Report'], color: '#1E40FF' },
              { n: '02', title: 'Threat Hunting Report', desc: 'Conduct a structured threat hunt across a network environment. Document hypotheses, findings, and remediation recommendations.', tags: ['Threat Intelligence', 'EDR', 'Hunt Report'], color: '#dc2626' },
              { n: '03', title: 'Red Team Assessment', desc: 'Execute a scoped offensive engagement — reconnaissance through post-exploitation — with a professional pentest report.', tags: ['Pentest', 'Exploitation', 'Report'], color: '#7c3aed' },
              { n: '04', title: 'Blue Team Defence', desc: 'Harden a vulnerable system, configure monitoring, and defend against a live attack simulation from a red team operator.', tags: ['Hardening', 'IDS/IPS', 'Defence'], color: '#059669' },
              { n: '05', title: 'Security Audit', desc: 'Conduct a full security audit of a web application — identify vulnerabilities, assess risk, and produce a remediation roadmap.', tags: ['OWASP', 'Risk Assessment', 'Audit'], color: '#22D3EE' },
              { n: '06', title: 'Cloud Security Assessment', desc: 'Assess an AWS environment for misconfigurations, privilege escalation paths, and data exposure risks.', tags: ['AWS', 'IAM', 'Cloud Security'], color: '#1E40FF' },
              { n: '07', title: 'AI Security Automation', desc: 'Build an AI-assisted threat detection workflow that ingests logs, identifies anomalies, and generates automated response actions.', tags: ['n8n', 'AI Detection', 'Automation'], color: '#22D3EE' },
            ].map(({ n, title, desc, tags, color }) => (
              <div key={n} className="rounded-[8px] border border-slate-200 bg-white p-7" style={{ borderLeftColor: color, borderLeftWidth: 4 }}>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white" style={{ backgroundColor: color }}>{n}</div>
                  <h3 className="font-semibold text-slate-950">{title}</h3>
                </div>
                <p className="mb-4 text-sm leading-6 text-slate-600">{desc}</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-[#F8FAFC] px-2.5 py-1 text-xs font-semibold text-slate-600">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAREER PATHWAYS ─────────────────────────────────────────────────── */}
      <section className="bg-slate-950 py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Where You Can Go"
            title="Career Pathways After Graduation"
            description="These are the roles graduates target — all in high-demand, with strong global hiring activity."
            variant="dark"
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { role: 'SOC Analyst', icon: '🖥️', desc: 'Monitor security alerts, investigate incidents, and maintain 24/7 security operations visibility.', tag: 'Entry–Mid' },
              { role: 'Cybersecurity Analyst', icon: '🔍', desc: 'Assess threats, analyse vulnerabilities, and implement security controls across an organisation.', tag: 'Entry–Mid' },
              { role: 'Vulnerability Analyst', icon: '🔎', desc: 'Identify and prioritise vulnerabilities in systems, applications, and infrastructure at scale.', tag: 'Entry–Mid' },
              { role: 'Security Operations Associate', icon: '⚙️', desc: 'Support security operations teams with monitoring, alert triage, and first-line incident response.', tag: 'Entry' },
              { role: 'Threat Intelligence Analyst', icon: '🕵️', desc: 'Gather, analyse, and apply threat intelligence to anticipate and prevent advanced attacks.', tag: 'Mid' },
              { role: 'Junior Penetration Tester', icon: '🔓', desc: 'Perform authorised attack simulations to identify weaknesses before malicious actors do.', tag: 'Entry–Mid' },
              { role: 'Cloud Security Associate', icon: '☁️', desc: 'Secure cloud infrastructure, manage IAM, and enforce compliance in AWS or Azure environments.', tag: 'Entry–Mid' },
            ].map(({ role, icon, desc, tag }) => (
              <article key={role} className="rounded-[8px] border border-white/10 bg-white/[0.04] p-6 transition-all hover:bg-white/[0.07]">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-3xl">{icon}</span>
                  <span className="rounded-full border border-[#22D3EE]/30 px-2.5 py-0.5 text-xs font-semibold text-[#22D3EE]">{tag}</span>
                </div>
                <h3 className="mb-2 font-semibold text-white">{role}</h3>
                <p className="text-sm leading-6 text-slate-400">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── SALARY OUTLOOK ───────────────────────────────────────────────────── */}
      <section className="bg-white py-24">
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
              <div key={level} className="rounded-[8px] border border-slate-200 bg-white p-8">
                <p className="text-xs font-bold uppercase tracking-wide text-slate-400">{level}</p>
                <p className="mt-2 font-display text-3xl font-bold text-slate-950">{range}</p>
                <p className="mt-1 text-xs text-slate-400">{note}</p>
                <div className="my-5 h-3 w-full overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full rounded-full" style={{ width: `${bar}%`, backgroundColor: color }} />
                </div>
                <ul className="space-y-2">
                  {roles.map((r) => (
                    <li key={r} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="h-4 w-4 shrink-0" style={{ color }} />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-slate-400">
            Salary ranges are indicative and vary by geography, employer, and individual performance. Figures represent global market data across major hiring markets.
          </p>
        </div>
      </section>

      {/* ── CERTIFICATIONS ───────────────────────────────────────────────────── */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Programme Credentials"
            title="What You Graduate With"
            description="Three distinct credentials that demonstrate your skill, practical experience, and career readiness to employers."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              { icon: '🏆', title: 'Cybersecurity Mastery Certificate', issuer: 'Issued by AcdyOn', desc: 'Awarded upon successful completion of all modules, labs, and assessments. Demonstrates verified, end-to-end cybersecurity expertise.', badge: 'Programme Certificate', color: '#1E40FF' },
              { icon: '📁', title: 'Capstone Project Portfolio', issuer: 'Documented & Verified', desc: 'A portfolio of 7 real-world security projects completed during the programme — tangible, demonstrable evidence of practical capability.', badge: 'Portfolio', color: '#22D3EE' },
              { icon: '🏢', title: 'Internship Experience Letter', issuer: 'For Qualifying Graduates', desc: 'Issued to graduates who qualify for and complete the internship placement. Confirms real-world industry exposure — a critical differentiator in a competitive job market.', badge: 'Internship', color: '#D4AF37' },
            ].map(({ icon, title, issuer, desc, badge, color }) => (
              <div key={title} className="flex flex-col rounded-[8px] border border-slate-200 bg-white p-8 text-center" style={{ borderTopColor: color, borderTopWidth: 4 }}>
                <div className="mb-4 text-5xl">{icon}</div>
                <div className="mx-auto mb-4 inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide text-white" style={{ backgroundColor: color }}>{badge}</div>
                <h3 className="mb-1 font-semibold text-slate-950">{title}</h3>
                <p className="mb-4 text-xs font-medium text-slate-400">{issuer}</p>
                <p className="text-sm leading-6 text-slate-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUCCESS STORIES ──────────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Graduate Outcomes"
            title="Real Career Transitions"
            description="Graduates from varied starting points who used this programme to launch and advance cybersecurity careers."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {cybersecurityTestimonials.map((t) => (
              <div key={t.name} className="rounded-[8px] border border-slate-200 bg-white p-8">
                <div className="mb-5 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[8px] bg-slate-100 p-4">
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-400">Started As</p>
                    <p className="mt-1 text-sm font-medium text-slate-700">{t.background}</p>
                  </div>
                  <div className="rounded-[8px] bg-[#1E40FF]/10 p-4">
                    <p className="text-xs font-bold uppercase tracking-wide text-[#1E40FF]">Now</p>
                    <p className="mt-1 text-sm font-medium text-slate-700">{t.outcome}</p>
                  </div>
                </div>
                <blockquote className="mb-5 border-l-2 border-[#1E40FF] pl-4 text-sm italic leading-7 text-slate-600">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">
                    {t.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-950">{t.name}</p>
                    <p className="text-sm text-slate-500">{t.role} · {t.country}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
      <section className="bg-[#F8FAFC] py-24">
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

      {/* ── FINAL CTA ────────────────────────────────────────────────────────── */}
      <section className="bg-slate-950 py-24">
        <div className="container-premium text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#22D3EE]">6-Month Career Programme</p>
          <h2 className="mx-auto max-w-3xl font-display text-4xl leading-tight text-white sm:text-5xl">
            Start Your Cybersecurity Career Today
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            Hands-on training. Real portfolio. Dedicated career launch. The only programme built to take you from zero to job-ready in 6 months.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/book-consultation" className="inline-flex items-center rounded-full bg-[#1E40FF] px-8 py-4 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(30,64,255,0.35)] transition-all hover:bg-[#1937dd]">
              Apply Now
            </Link>
            <Link href="/book-consultation" className="inline-flex items-center rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white transition-all hover:border-white/40 hover:bg-white/5">
              Book Consultation
            </Link>
            <Link href="#" className="inline-flex items-center rounded-full border border-[#22D3EE]/30 px-8 py-4 text-sm font-semibold text-[#22D3EE] transition-all hover:border-[#22D3EE]/50 hover:bg-[#22D3EE]/5">
              Download Brochure
            </Link>
          </div>
        </div>
      </section>

      <ConsultationNudge />
    </main>
  )
}
