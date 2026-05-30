import {
  Award,
  BadgeCheck,
  Bot,
  BriefcaseBusiness,
  Building2,
  ChartSpline,
  Cpu,
  GraduationCap,
  Landmark,
  Lightbulb,
  Network,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

export const navGroups = [
  {
    label: "Programs",
    href: "/programs",
    summary: "Explore AcdyOn's core learning and recognition ecosystem.",
    items: [
      { label: "AI & Tech", href: "/ai-courses", description: "Applied AI, agents, automation, and digital leadership." },
      { label: "Doctoral Programs", href: "/doctoral-programs", description: "Flexible academic advancement for experienced leaders." },
      { label: "Honorary Recognition", href: "/honorary-recognition", description: "Prestige-led recognition for professional contribution." },
      { label: "Corporate Training", href: "/contact", description: "Tailored AI and executive learning for organizations." },
    ],
  },
  {
    label: "AI & Tech",
    href: "/ai-courses",
    summary: "Future-ready AI capability for professionals and teams.",
    items: [
      { label: "Agentic AI & Automation", href: "/ai-courses/agentic-ai", description: "Build agents, workflows, and practical automations." },
      { label: "Generative AI", href: "/ai-courses", description: "Master creative and strategic AI use cases." },
      { label: "AI for Business Leaders", href: "/ai-courses", description: "Use AI for decision-making, systems, and growth." },
      { label: "No-Code Automation", href: "/ai-courses", description: "Launch useful workflows without heavy engineering." },
    ],
  },
  {
    label: "Doctoral",
    href: "/doctoral-programs",
    summary: "Academic pathways for leaders seeking deeper authority.",
    items: [
      { label: "DBA", href: "/doctoral-programs", description: "Business-focused doctoral routes for executives." },
      { label: "PhD", href: "/doctoral-programs", description: "Research-oriented academic advancement guidance." },
      { label: "Post Doctorate Fellowship", href: "/doctoral-programs", description: "Advanced recognition and academic contribution tracks." },
    ],
  },
  {
    label: "Honorary",
    href: "/honorary-recognition",
    summary: "Recognition pathways for distinguished contribution.",
    items: [
      { label: "Honorary Doctorate", href: "/honorary-recognition", description: "Recognition for impact, leadership, and contribution." },
      { label: "Honorary Professorship", href: "/honorary-recognition", description: "Academic distinction for educators and experts." },
    ],
  },
  {
    label: "Universities",
    href: "/universities",
    summary: "International pathways, verification, and academic clarity.",
    items: [
      { label: "Partner Universities", href: "/universities", description: "Explore the global academic network." },
      { label: "Global Recognition", href: "/universities", description: "Understand international positioning and fit." },
      { label: "Accreditation & Verification", href: "/universities", description: "Review credibility signals before applying." },
    ],
  },
];

export const utilityNavItems = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { value: "18+", label: "Countries" },
  { value: "5000+", label: "Learners" },
  { value: "Global", label: "Academic Partnerships" },
  { value: "Executive", label: "Program Design" },
];

export const programCategories = [
  {
    title: "AI & Automation",
    description:
      "Applied AI, agents, automation, and no-code workflows for leaders building future-ready capability.",
    href: "/ai-courses",
    icon: Bot,
  },
  {
    title: "Doctoral Programs",
    description:
      "Flexible academic pathways designed around working professionals and experienced leaders.",
    href: "/doctoral-programs",
    icon: GraduationCap,
  },
  {
    title: "Honorary Recognition",
    description:
      "Prestige-led honorary awards and recognition routes for distinguished professional contribution.",
    href: "/honorary-recognition",
    icon: Award,
  },
  {
    title: "Executive Certifications",
    description:
      "Compact, outcome-oriented certifications for credibility, career mobility, and leadership depth.",
    href: "/programs",
    icon: BadgeCheck,
  },
  {
    title: "Corporate Training",
    description:
      "Custom learning tracks for organizations adopting AI, automation, and digital leadership.",
    href: "/contact",
    icon: Building2,
  },
];

export const benefits = [
  { title: "Flexible Learning", description: "Structured for busy schedules, senior responsibilities, and global time zones.", icon: ChartSpline },
  { title: "Global Recognition", description: "Programs positioned around international academic and professional advancement.", icon: Landmark },
  { title: "Executive-Focused Education", description: "Built for founders, managers, consultants, educators, and decision-makers.", icon: BriefcaseBusiness },
  { title: "Industry-Relevant Programs", description: "Curriculum shaped around practical capability, leadership, and market relevance.", icon: Rocket },
  { title: "AI-Powered Future Skills", description: "Learn the tools, systems, and workflows defining the next decade of work.", icon: Cpu },
  { title: "Dedicated Academic Support", description: "Guided consultation, eligibility review, and program selection from first step onward.", icon: ShieldCheck },
];

export const audiences = [
  { title: "Founders", description: "Build authority while applying AI and automation to venture growth.", icon: Rocket },
  { title: "Executives", description: "Strengthen strategic credibility with premium learning pathways.", icon: BriefcaseBusiness },
  { title: "Working Professionals", description: "Advance without stepping away from current responsibilities.", icon: Users },
  { title: "Educators", description: "Expand academic influence with modern, globally relevant credentials.", icon: GraduationCap },
  { title: "Consultants", description: "Differentiate advisory practice with future skills and recognition.", icon: Lightbulb },
  { title: "Doctors", description: "Pursue leadership, research, and recognition pathways alongside practice.", icon: ShieldCheck },
  { title: "Entrepreneurs", description: "Convert expertise into a stronger global professional identity.", icon: Sparkles },
  { title: "AI Enthusiasts", description: "Move from curiosity to real projects, agents, and automations.", icon: Bot },
];

export const universities = [
  { name: "Global Business University", country: "Switzerland", flag: "CH", note: "Executive learning and business advancement pathways.", verification: "Partner pathway verified" },
  { name: "International Leadership Institute", country: "United Kingdom", flag: "UK", note: "Leadership-focused academic collaboration.", verification: "Recognition guidance available" },
  { name: "American Professional Academy", country: "United States", flag: "US", note: "Career-oriented certification and recognition routes.", verification: "Eligibility review supported" },
  { name: "European Digital University", country: "France", flag: "FR", note: "Digital skills and innovation-focused programs.", verification: "Academic fit assessed" },
];

export const testimonials = [
  {
    name: "Dr. Maya Raman",
    role: "Healthcare Director",
    country: "India",
    flag: "IN",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=320&q=80",
    quote:
      "AcdyOn gave me a guided academic pathway that respected my executive schedule and strengthened my global profile.",
  },
  {
    name: "Omar Al-Khatib",
    role: "Founder & Strategy Consultant",
    country: "UAE",
    flag: "AE",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=320&q=80",
    quote:
      "The AI and automation focus felt practical, premium, and directly relevant to how leaders need to work now.",
  },
  {
    name: "Elena Fischer",
    role: "Corporate Learning Lead",
    country: "Germany",
    flag: "DE",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=320&q=80",
    quote:
      "The consultation process was clear, credible, and genuinely helpful for selecting the right program direction.",
  },
];

export const processSteps = [
  { title: "Consultation", description: "Clarify your goals, timeline, professional profile, and ideal pathway." },
  { title: "Eligibility Review", description: "Assess academic background, experience, and recognition fit." },
  { title: "Program Selection", description: "Choose the program route aligned with your career and authority goals." },
  { title: "Enrollment & Guidance", description: "Receive structured next steps and ongoing academic support." },
];

export const faqs = [
  {
    question: "Are programs globally recognised?",
    answer:
      "AcdyOn works with global academic and professional partners. Recognition varies by program, institution, and country, so every applicant receives guidance before enrollment.",
  },
  {
    question: "Can working professionals apply?",
    answer:
      "Yes. The platform is designed around executives, founders, consultants, educators, and working professionals who need flexible learning routes.",
  },
  {
    question: "Are AI programs beginner-friendly?",
    answer:
      "Yes. The AI and automation tracks start with practical foundations and progress toward applied workflows, agents, and real automation projects.",
  },
  {
    question: "Is mentorship included?",
    answer:
      "Selected programs include live guidance, mentorship, and project support. The consultation team will confirm what is included for your chosen pathway.",
  },
  {
    question: "Are doctoral pathways flexible?",
    answer:
      "Doctoral routes are positioned for experienced professionals and may include flexible structures depending on eligibility and partner requirements.",
  },
];

export const blogs = [
  {
    title: "Why Executive Education Is Moving Toward AI-First Leadership",
    excerpt: "A practical look at how senior professionals can build relevance in an automation-led economy.",
    category: "AI Leadership",
  },
  {
    title: "Understanding Global Academic Recognition",
    excerpt: "How to evaluate credibility, fit, and long-term value when choosing academic advancement pathways.",
    category: "Recognition",
  },
  {
    title: "The Rise of Flexible Doctoral Pathways",
    excerpt: "What working leaders should know before exploring executive doctoral opportunities.",
    category: "Doctoral",
  },
];

export const programPages = {
  programs: {
    title: "Executive Programs for Global Professional Advancement",
    description:
      "Explore premium certifications, corporate learning routes, AI programs, doctoral pathways, and recognition-led academic advancement.",
    eyebrow: "Programs",
  },
  ai: {
    title: "AI & Tech Courses for Future-Focused Professionals",
    description:
      "Master AI agents, automation systems, no-code workflows, and digital leadership through practical executive-friendly programs.",
    eyebrow: "AI & Tech",
  },
  doctoral: {
    title: "Doctoral Pathways Designed for Experienced Leaders",
    description:
      "Flexible academic advancement options for professionals pursuing deeper authority, research identity, and global credibility.",
    eyebrow: "Doctoral Programs",
  },
  honorary: {
    title: "Honorary Recognition for Distinguished Contribution",
    description:
      "Prestige-oriented recognition pathways for leaders, entrepreneurs, educators, and professionals with meaningful impact.",
    eyebrow: "Honorary Recognition",
  },
};

export const logos = [
  "Kennedy University",
  "LSBS",
  "Birchwood University",
  "Dunster Business School",
  "Swiss Academic Forum",
  "London Executive Institute",
  "American Leadership Council",
  "European Digital Academy",
];

export const authorityStats = [
  { value: "18+", label: "Countries" },
  { value: "5+", label: "University Partners" },
  { value: "5,000+", label: "Professionals Guided" },
  { value: "25+", label: "Academic & Professional Pathways" },
];

export const institutionLogos = [
  "Kennedy University",
  "LSBS",
  "Birchwood University",
  "Dunster Business School",
  "Swiss Academic Forum",
  "London Executive Institute",
];

export const featuredAiBullets = [
  "4 Month Program",
  "Live Mentorship",
  "Real Automation Projects",
  "AI Agents",
  "No-Code + AI Workflows",
  "Career-Focused Outcomes",
];

export const heroTrust = ["Global University Network", "Executive-Friendly Programs", "AI & Leadership Focused"];

export const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/company/acdyon" },
  { label: "Instagram", href: "https://instagram.com/acdyon" },
  { label: "YouTube", href: "https://youtube.com/@acdyon" },
];

export const contactDetails = ["admissions@acdyon.com", "+91 90000 00000", "Global consultations available"];

export const networkHighlights = [
  "International academic pathways",
  "Country-specific eligibility guidance",
  "Executive-friendly admissions support",
  "Recognition-led partner ecosystem",
];

export const curriculumHighlights = [
  "Strategic foundations and professional positioning",
  "Applied projects, case work, and guided milestones",
  "Leadership, innovation, and research-oriented outcomes",
  "Final consultation for credential and recognition planning",
];

export const outcomes = [
  "Clearer professional authority",
  "Future skills aligned with AI-era work",
  "Stronger global academic positioning",
  "Practical portfolio and guided next steps",
];

// ─── About Page ───────────────────────────────────────────────────────────────

export const aboutStats = [
  { value: "18+", label: "Countries Reached" },
  { value: "5,000+", label: "Professionals Guided" },
  { value: "4", label: "Core Program Categories" },
  { value: "100%", label: "Consultation-Led Admissions" },
];

export const globalRegions = [
  {
    region: "South Asia",
    countries: "India · Sri Lanka · Bangladesh · Pakistan",
    professionals: "2,400+",
    note: "Largest learner base with strong demand for doctoral and AI leadership pathways.",
  },
  {
    region: "Middle East & Africa",
    countries: "UAE · Saudi Arabia · Nigeria · Kenya",
    professionals: "900+",
    note: "Growing hub for honorary recognition and executive certification pathways.",
  },
  {
    region: "Europe",
    countries: "United Kingdom · Germany · France · Switzerland",
    professionals: "600+",
    note: "Professionals pursuing academic repositioning and AI leadership credentials.",
  },
  {
    region: "Americas & Asia-Pacific",
    countries: "USA · Canada · Singapore · Australia",
    professionals: "400+",
    note: "Executive learners seeking international credibility and applied AI capability.",
  },
];

// ─── Universities Page ────────────────────────────────────────────────────────

export const universitiesExtended = [
  { name: "Global Business University", country: "Switzerland", flag: "CH", note: "Executive learning and business advancement pathways for senior professionals.", verification: "Partner pathway verified" },
  { name: "International Leadership Institute", country: "United Kingdom", flag: "UK", note: "Leadership-focused academic collaboration for executives and consultants.", verification: "Recognition guidance available" },
  { name: "American Professional Academy", country: "United States", flag: "US", note: "Career-oriented certification and recognition routes for working professionals.", verification: "Eligibility review supported" },
  { name: "European Digital University", country: "France", flag: "FR", note: "Digital skills and innovation-focused doctoral programs aligned to industry.", verification: "Academic fit assessed" },
  { name: "Asia-Pacific Academic Council", country: "Singapore", flag: "SG", note: "Cross-border recognition pathways designed for APAC professionals.", verification: "Regional pathway confirmed" },
  { name: "Gulf Excellence Institute", country: "UAE", flag: "AE", note: "Executive advancement and honorary recognition routes for GCC professionals.", verification: "Admissions pathway open" },
  { name: "Commonwealth Academic Alliance", country: "Australia", flag: "AU", note: "Recognized academic advancement pathways across Commonwealth countries.", verification: "Pathway verified" },
  { name: "African Leadership Academy", country: "South Africa", flag: "ZA", note: "Leadership distinction and recognition pathways for African professionals.", verification: "Eligibility guidance available" },
];

export const geographicPresence = [
  {
    region: "Europe",
    description: "Academic partnerships across UK, Germany, France, and Switzerland — serving senior professionals pursuing recognition and doctoral advancement.",
    countries: ["United Kingdom", "Germany", "France", "Switzerland", "Netherlands"],
  },
  {
    region: "Americas",
    description: "Programs for North and South American professionals seeking international academic credibility and AI-era capability.",
    countries: ["United States", "Canada", "Brazil"],
  },
  {
    region: "Asia-Pacific",
    description: "Fastest-growing region. Strong demand from India, Singapore, and Australia for executive doctorate and AI leadership pathways.",
    countries: ["India", "Singapore", "Australia", "Sri Lanka"],
  },
  {
    region: "Middle East & Africa",
    description: "A hub for honorary recognition and corporate learning among C-suite executives and entrepreneurs across GCC and Africa.",
    countries: ["UAE", "Saudi Arabia", "Kenya", "Nigeria"],
  },
];

export const recognitionPathways = [
  {
    title: "Doctoral Pathways",
    description: "DBA, PhD, and Post-Doctoral Fellowship routes for leaders pursuing research authority and academic identity aligned with their professional record.",
    icon: GraduationCap,
    href: "/doctoral-programs",
    programs: ["DBA", "PhD", "Post-Doctoral Fellowship"],
  },
  {
    title: "Honorary Recognition",
    description: "Honorary Doctorate and Professorship for professionals whose contributions to their field merit formal academic distinction from a partner institution.",
    icon: Award,
    href: "/honorary-recognition",
    programs: ["Honorary Doctorate", "Honorary Professorship"],
  },
  {
    title: "Executive Certifications",
    description: "Compact, credential-focused programs designed for career mobility, AI-era capability, and leadership depth — built for working professionals.",
    icon: BadgeCheck,
    href: "/programs",
    programs: ["Executive AI Certificate", "Leadership Certificate", "Corporate Learning"],
  },
];

export const howRecognitionWorks = [
  {
    title: "Initial Consultation",
    description: "A detailed conversation to understand your professional background, career goals, and eligibility for academic recognition pathways.",
  },
  {
    title: "Eligibility Assessment",
    description: "We review your academic history, professional record, and target outcomes against program criteria and partner institution requirements.",
  },
  {
    title: "Institution Matching",
    description: "Based on your profile, we identify the most appropriate partner institution and recognition pathway for your specific situation.",
  },
  {
    title: "Guided Enrollment",
    description: "Structured next steps, documentation guidance, and continued support through to program start and beyond enrollment.",
  },
];

export const universitiesFAQs = [
  {
    question: "Are AcdyOn's partner universities globally accredited?",
    answer: "Each institution in the AcdyOn network is selected based on international standing and recognition. Accreditation varies by institution and country, and the consultation process includes a thorough eligibility and recognition review before any pathway recommendation is made.",
  },
  {
    question: "What is the difference between an honorary and an earned doctorate?",
    answer: "An earned doctorate (DBA, PhD) involves structured research or advanced study over one to five years. An honorary doctorate is conferred by an institution to recognise exceptional professional contribution, impact, or service — it does not require coursework but follows a formal nomination and review process.",
  },
  {
    question: "How does AcdyOn verify the legitimacy of partner institutions?",
    answer: "Every institution AcdyOn works with is reviewed for international recognition signals including accreditation body affiliations, country-level academic registrations, and the global portability of their awards. We provide full transparency on each institution's credentials during consultation.",
  },
  {
    question: "Will a credential from a partner university be recognised for employment?",
    answer: "Recognition varies by industry, employer, and country. The consultation process includes a frank discussion of how different credentials are perceived in your specific professional context — so expectations are clear and realistic before enrollment.",
  },
  {
    question: "Which countries do AcdyOn's university programs serve?",
    answer: "AcdyOn currently guides professionals across 18+ countries including India, UAE, United Kingdom, Germany, Singapore, Nigeria, Australia, Canada, and the United States. Consultations are available globally via video, scheduled to suit any time zone.",
  },
];

// ─── Success Stories Page ─────────────────────────────────────────────────────

export const successStories = [
  {
    name: "Dr. Rohan Mehta",
    role: "Chief Strategy Officer",
    country: "India",
    flag: "IN",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=320&q=80",
    program: "Doctoral Business Administration",
    background: "Led strategy at a mid-size manufacturing group for 12 years without a formal doctoral credential.",
    objective: "Gain doctoral recognition to give formal academic weight to two decades of strategic leadership.",
    outcome: "Completed DBA pathway and holds academic title alongside corporate role.",
    currentPosition: "Chief Strategy Officer & DBA — cited in two industry conference proceedings.",
    quote: "AcdyOn didn't just give me a credential. They helped me understand which pathway matched my actual experience, then guided every step.",
  },
  {
    name: "Layla Hassan",
    role: "Social Impact Entrepreneur",
    country: "UAE",
    flag: "AE",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=320&q=80",
    program: "Honorary Doctorate",
    background: "20 years of work in women's education reform across the Gulf region — no formal academic recognition.",
    objective: "Receive formal academic distinction commensurate with two decades of documented social impact.",
    outcome: "Awarded Honorary Doctorate by a partner institution following a structured nomination process.",
    currentPosition: "Honorary Doctor — speaks at international academic and development forums with institutional standing.",
    quote: "My work always deserved recognition. AcdyOn found the right institution and guided me through a credible, dignified process.",
  },
  {
    name: "Marcus Webb",
    role: "Head of Digital Operations",
    country: "United Kingdom",
    flag: "UK",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=320&q=80",
    program: "Agentic AI & Automation",
    background: "Digital operations manager who understood AI conceptually but had never built a working agent or automation.",
    objective: "Develop applied AI capability to automate operational processes without relying on engineering resources.",
    outcome: "Built and deployed three live automation workflows now operating in daily business processes.",
    currentPosition: "Head of Digital Operations — AI automation workflows in use across two business units.",
    quote: "Six weeks in, I had already deployed one agent to a real workflow. The mentorship kept me on track throughout.",
  },
  {
    name: "Dr. Priya Nair",
    role: "Head of Research, Pharma",
    country: "India",
    flag: "IN",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=320&q=80",
    program: "PhD Pathway",
    background: "Senior pharmaceutical researcher with 15 years of field experience and no formal doctoral framing.",
    objective: "Structure a PhD pathway around existing research expertise and a 15-year pharmaceutical career.",
    outcome: "Enrolled in a structured PhD programme with institutional registration and academic supervision.",
    currentPosition: "Head of Research & PhD Candidate — first academic paper currently in peer review.",
    quote: "The eligibility review was detailed and honest. They matched me to a program that respected both my experience and my goals.",
  },
  {
    name: "Prof. Adebayo Okafor",
    role: "Leadership Educator & Author",
    country: "Nigeria",
    flag: "NG",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=320&q=80",
    program: "Honorary Professorship",
    background: "Author and executive trainer with two published books on African business leadership and 18 years of practice.",
    objective: "Translate decades of published thought leadership into a formally recognised academic distinction.",
    outcome: "Conferred Honorary Professorship by a partner institution following a structured nomination review.",
    currentPosition: "Honorary Professor — lectures at a partner institution and holds formal academic standing.",
    quote: "I had built a reputation over decades. AcdyOn helped translate that reputation into a credential that opens academic doors globally.",
  },
  {
    name: "Yuki Tanaka",
    role: "Founder, AI Consultancy",
    country: "Singapore",
    flag: "SG",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=320&q=80",
    program: "AI for Business Leaders",
    background: "Former management consultant transitioning into AI-focused advisory work with no technical background.",
    objective: "Build genuine AI capability to credibly advise enterprise clients on automation and agent workflows.",
    outcome: "Completed programme with three applied capstone projects and a defined AI consultancy positioning.",
    currentPosition: "Founder, AI Automation Consultancy — three enterprise clients within six months of completion.",
    quote: "The no-code and agent-building modules gave me tools I could immediately take to clients. The ROI came within months.",
  },
  {
    name: "Dr. Maya Raman",
    role: "Healthcare Director",
    country: "India",
    flag: "IN",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=320&q=80",
    program: "AI for Healthcare Leaders",
    background: "Director of a hospital network wanting to integrate AI into clinical and administrative operations.",
    objective: "Develop an AI capability that could be practically deployed in clinical and administrative hospital workflows.",
    outcome: "Built an AI-driven triage pilot now under formal review for deployment across the hospital network.",
    currentPosition: "Healthcare Director — AI pilot under institutional review for network-wide implementation.",
    quote: "AcdyOn gave me a pathway that respected my executive schedule and genuinely strengthened my global professional profile.",
  },
  {
    name: "Omar Al-Khatib",
    role: "Founder & Strategy Consultant",
    country: "UAE",
    flag: "AE",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=320&q=80",
    program: "Honorary Doctorate",
    background: "Strategy consultant who built three ventures across GCC over 15 years without formal academic distinction.",
    objective: "Secure honorary academic recognition to strengthen advisory credibility across GCC executive markets.",
    outcome: "Received Honorary Doctorate — formal academic distinction aligned with professional profile and regional standing.",
    currentPosition: "Strategy Consultant & Honorary Doctor — distinction used in professional positioning across Gulf markets.",
    quote: "The process felt premium, rigorous, and directly relevant to the kind of authority I needed to build.",
  },
  {
    name: "Elena Fischer",
    role: "Corporate Learning Lead",
    country: "Germany",
    flag: "DE",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=320&q=80",
    program: "Doctoral Business Administration",
    background: "Corporate L&D director with 18 years in workforce development seeking academic weight for advisory practice.",
    objective: "Complete a doctoral programme whose research was directly applicable to corporate learning consultancy work.",
    outcome: "Enrolled in DBA programme with a thesis topic directly integrated into ongoing client advisory engagements.",
    currentPosition: "Corporate Learning Consultant & DBA Candidate — research informs active client engagements.",
    quote: "The consultation process was clear, credible, and genuinely helpful for selecting the right program direction.",
  },
];

// ─── Doctoral Programs ────────────────────────────────────────────────────────

export const doctoralTracks = [
  {
    degree: "DBA",
    title: "Doctor of Business Administration",
    eyebrow: "Executive Track",
    purpose: "Bridge executive experience with formal doctoral authority.",
    description: "The DBA is structured for working leaders who want the weight of a doctorate alongside — not instead of — their professional career. Unlike a traditional academic PhD, the DBA is applied in nature: research questions emerge from real business challenges, and the learning process honours the candidate's existing professional standing.",
    duration: "2–4 Years",
    format: "Flexible, Part-Time",
    focus: "Applied Research",
    audience: ["C-suite and senior executives", "Entrepreneurs with 10+ years of leadership", "Senior consultants and management advisers", "Professionals seeking academic authority alongside an active career"],
    outcomes: [
      "Internationally recognised doctoral credential",
      "Applied research capability grounded in business practice",
      "Academic publishing and conference participation",
      "Access to post-doctoral and honorary distinction pathways",
      "Enhanced authority in executive and advisory roles",
    ],
    progression: "Post-Doctoral Fellowship, Honorary distinction, Academic advisory roles",
  },
  {
    degree: "PhD",
    title: "Doctor of Philosophy",
    eyebrow: "Research Track",
    purpose: "Original research contribution with institutional academic recognition.",
    description: "The PhD pathway is designed for professionals whose expertise lies in a specific domain — and whose contribution to that domain merits formal academic documentation and peer recognition. AcdyOn guides candidates through institutional matching, research scoping, supervisory arrangements, and the full academic registration process.",
    duration: "3–5 Years",
    format: "Flexible, Research-Led",
    focus: "Original Research",
    audience: ["Domain specialists and subject matter experts", "Healthcare, science, and engineering professionals", "Academics seeking formal research credentials", "Professionals with substantial unpublished intellectual contribution"],
    outcomes: [
      "PhD from an internationally recognised partner institution",
      "Original research contribution to a defined academic field",
      "Peer-reviewed publication capability and track record",
      "Access to academic lecturing and institutional advisory positions",
      "Global academic identity and institutional affiliation",
    ],
    progression: "Post-Doctoral Fellowship, Academic faculty positions, Institutional advisory roles",
  },
  {
    degree: "Post-Doc",
    title: "Post-Doctoral Fellowship",
    eyebrow: "Advanced Track",
    purpose: "Advanced academic distinction for existing doctoral holders.",
    description: "The Post-Doctoral Fellowship is for professionals who already hold a doctorate and wish to formalise advanced research contributions, secure institutional affiliation, and position themselves at the highest level of academic recognition. This pathway represents the transition from qualified academic to institutional authority.",
    duration: "1–2 Years",
    format: "Research Contribution",
    focus: "Advanced Research",
    audience: ["Existing PhD or DBA holders", "Professionals seeking institutional academic affiliation", "Researchers preparing for academic appointments", "Scholars contributing to their field beyond the initial doctorate"],
    outcomes: [
      "Formal post-doctoral designation from a partner institution",
      "Advanced research recognition and publication pathway",
      "Institutional affiliation and academic appointment readiness",
      "International academic standing at the highest scholarly level",
      "Access to Honorary distinction and professorial pathways",
    ],
    progression: "Honorary Professorship, Academic chair positions, Senior institutional advisory roles",
  },
];

export const doctoralEligibility = [
  {
    title: "Professional Experience",
    description: "A minimum of 7–10 years of relevant professional experience is typically required for DBA candidates. PhD and Post-Doctoral candidates are assessed on research background and domain expertise depth.",
  },
  {
    title: "Academic Background",
    description: "A relevant undergraduate or postgraduate degree is generally expected. For DBA applicants, substantial professional experience may be considered alongside or in lieu of specific formal qualifications.",
  },
  {
    title: "Research Readiness",
    description: "Candidates must demonstrate capacity to engage with academic research — through prior academic work, published output, or a structured research readiness assessment conducted during consultation.",
  },
  {
    title: "Language & Communication",
    description: "All programmes are conducted in English. Candidates whose primary working language is not English are assessed for language suitability as part of the consultation and eligibility review.",
  },
];

export const doctoralFAQs = [
  {
    question: "What is the difference between a DBA and a PhD?",
    answer: "A DBA (Doctor of Business Administration) is applied in nature — research is grounded in real business practice and designed for working executives. A PhD is research-oriented, typically involving an original contribution to academic knowledge in a specific domain. Both carry the 'Dr.' prefix and are recognised at the same doctoral level internationally.",
  },
  {
    question: "Can I pursue a doctoral programme while continuing to work full-time?",
    answer: "Yes. All doctoral pathways at AcdyOn are structured for professionals who are continuing their careers. Flexible schedules, part-time structures, and remote supervision arrangements are standard. The consultation process will identify the structure most compatible with your professional commitments.",
  },
  {
    question: "How long does a typical DBA or PhD programme take?",
    answer: "DBA programmes typically span 2–4 years. PhD programmes typically span 3–5 years. Post-Doctoral Fellowships are generally 1–2 years. Actual duration depends on the institution, research scope, and the time the candidate can allocate to study.",
  },
  {
    question: "Are AcdyOn doctoral credentials internationally recognised?",
    answer: "Recognition depends on the specific institution, the professional's country, and the context in which the credential is being used. AcdyOn's consultation process includes an honest assessment of how a credential will be perceived in your professional and geographic context before any enrolment decision is made.",
  },
  {
    question: "What does the consultation process involve for doctoral candidates?",
    answer: "The consultation covers: academic background review, professional record assessment, research readiness evaluation, institutional matching based on your profile and goals, and a frank discussion of what the credential will mean in your specific context. No programme is recommended before this review is complete.",
  },
  {
    question: "Is a Post-Doctoral Fellowship available if I already hold a PhD?",
    answer: "Yes. The Post-Doctoral Fellowship is specifically designed for existing doctoral holders who wish to continue formal academic contribution, secure institutional affiliation, or position themselves for senior academic roles. Eligibility is assessed in full during the consultation process.",
  },
];

// ─── Honorary Recognition ─────────────────────────────────────────────────────

export const honoraryTracks = [
  {
    award: "Honorary Doctorate",
    prefix: "Dr.",
    eyebrow: "Honorary Distinction",
    tagline: "Formal recognition for professional impact and lifetime contribution.",
    description: "An Honorary Doctorate is conferred by a partner institution to recognise exceptional professional achievement, leadership, and contribution to a field, industry, or society. Unlike an earned doctorate, it does not require coursework or research submission — it is a formal act of institutional acknowledgment for a career that merits academic distinction.",
    whoIsFor: [
      "Leaders with significant documented professional impact",
      "Entrepreneurs and founders who have transformed their industry",
      "Social innovators and public contributors with verifiable reach",
      "Professionals whose career merits formal institutional academic distinction",
    ],
    significance: "Recipients carry the 'Dr.' prefix and may reference their distinction in professional and academic contexts, consistent with the conferring institution's guidelines. The award reflects institutional acknowledgment of achievement that extends beyond the scope of any single qualification.",
    note: "Honorary doctorates are distinct from earned doctorates. AcdyOn provides full transparency on how the distinction is perceived in different professional and geographic contexts before any nomination proceeds.",
  },
  {
    award: "Honorary Professorship",
    prefix: "Prof.",
    eyebrow: "Academic Distinction",
    tagline: "Professorial recognition for knowledge leadership and field contribution.",
    description: "An Honorary Professorship is conferred by a partner institution to recognise professionals who have made significant contributions to a field through education, practice, publication, or intellectual leadership. It acknowledges the candidate as a recognised authority in their domain — not as an academic employee, but as a scholar whose contribution has shaped their field.",
    whoIsFor: [
      "Authors, educators, and trainers with substantial published or taught output",
      "Domain experts whose work has shaped professional practice",
      "Practitioners who bridge academic knowledge and industry application",
      "Professionals with significant speaking, advisory, or intellectual leadership credentials",
    ],
    significance: "Recipients carry the 'Prof.' prefix and gain formal academic standing with the conferring institution, enabling co-authored publication, academic event participation, and institutional collaboration.",
    note: "Honorary professorships are conferred at the discretion of the partner institution following a formal nomination and review process. AcdyOn supports the nomination process — the conferring decision rests with the institution.",
  },
];

export const honoraryEligibility = [
  {
    title: "Documented Professional Impact",
    description: "Candidates must have verifiable professional achievements — publications, awards, appointments, notable contributions, or a demonstrable record of impact in their field or community.",
  },
  {
    title: "Professional Standing",
    description: "Recipients are typically senior professionals, leaders, or specialists who are recognised within their industry or domain. There is no minimum educational requirement for honorary awards.",
  },
  {
    title: "Geographic & Institutional Fit",
    description: "AcdyOn assesses whether the conferring institution's award will be meaningful and appropriate in the candidate's professional and geographic context before any nomination is prepared.",
  },
  {
    title: "Nomination Assessment",
    description: "AcdyOn's consultation process includes a review of the candidate's profile against institutional nomination criteria. This ensures the nomination, if submitted, has a genuine basis and a reasonable prospect of success.",
  },
];

export const honoraryProcess = [
  {
    title: "Profile Consultation",
    description: "A detailed assessment of your professional background, documented contributions, and the context in which honorary recognition would be meaningful and appropriate.",
  },
  {
    title: "Institutional Matching",
    description: "Identification of the partner institution whose award category, standing, and recognition norms align most closely with your professional profile and objectives.",
  },
  {
    title: "Nomination Preparation",
    description: "Structured guidance on the nomination documentation, supporting materials, and institutional submission requirements. AcdyOn manages the preparation — not the conferring decision.",
  },
  {
    title: "Conferral & Professional Integration",
    description: "Following successful conferral, full guidance on how to reference and use the distinction professionally, ethically, and in accordance with the conferring institution's guidelines.",
  },
];

export const honoraryFAQs = [
  {
    question: "Is an honorary doctorate the same as an earned doctorate?",
    answer: "No. An honorary doctorate is a formal institutional acknowledgment of professional achievement — it does not require coursework, research, or examination. It is conferred by a university as a mark of distinction for a career of recognised impact. An earned doctorate involves a structured programme of study and original research. AcdyOn is fully transparent about this distinction with every candidate.",
  },
  {
    question: "Can I use 'Dr.' after receiving an honorary doctorate?",
    answer: "This depends on the conferring institution's guidelines and the professional context. Many institutions permit honorary doctorate recipients to use the 'Dr.' prefix in professional and public settings. AcdyOn provides full guidance on appropriate use before and after conferral.",
  },
  {
    question: "What does the nomination process involve?",
    answer: "The process begins with a consultation to review your professional profile and assess suitability. If appropriate, AcdyOn guides you through the nomination documentation and institutional submission process. The conferral decision is made by the partner institution — AcdyOn supports the nomination, not the outcome.",
  },
  {
    question: "How long does the honorary recognition process take?",
    answer: "From consultation to conferral, the typical timeline is 3–9 months depending on the institution and its calendar. The consultation team will provide a clear indicative timeline during your initial assessment.",
  },
  {
    question: "Who typically qualifies for an honorary professorship?",
    answer: "Honorary professorships are typically conferred on professionals who have contributed substantially to a field through education, publishing, research, or knowledge leadership — including trainers, authors, educators, senior practitioners, and advisers whose work has materially shaped their domain.",
  },
  {
    question: "What is the difference between an honorary doctorate and an honorary professorship?",
    answer: "An honorary doctorate recognises exceptional professional contribution broadly and confers the 'Dr.' prefix. An honorary professorship recognises intellectual and educational leadership in a specific field and confers the 'Prof.' prefix. The appropriate pathway depends on the nature of your contribution and professional goals — both are discussed during consultation.",
  },
];

// ─── Agentic AI & Automation Mastery Program ──────────────────────────────────

export const agenticAiMeta = {
  eyebrow: "Flagship AI Program",
  title: "Agentic AI & Automation Mastery",
  description: "A focused 4-month program for professionals ready to move beyond prompts into agents, automations, and real business workflows that deliver measurable results in executive settings.",
  duration: "4 Months",
  format: "Live + Async",
  mentorship: "1-on-1 Sessions",
  projects: "3 Capstone Projects",
};

export const agenticAiCurriculum = [
  {
    phase: "Phase 1",
    title: "AI Foundations & Prompt Architecture",
    duration: "Weeks 1–3",
    description: "Master the fundamentals of large language models, structured prompt engineering, and how agents reason. Build your first production-grade prompts.",
    topics: ["LLM behaviour and limitations", "Advanced prompt engineering", "Structured output and JSON", "API fundamentals and token management"],
  },
  {
    phase: "Phase 2",
    title: "Building AI Agents",
    duration: "Weeks 4–7",
    description: "Design, build, and deploy autonomous agents capable of multi-step reasoning, tool use, and persistent memory. Work with both code-based and no-code approaches.",
    topics: ["Agent architecture patterns", "Memory and context management", "Tool-calling and function use", "Multi-agent coordination basics"],
  },
  {
    phase: "Phase 3",
    title: "Business Automation & Workflows",
    duration: "Weeks 8–12",
    description: "Connect AI capabilities to real business systems using n8n, Make, and Zapier. Automate content, research, reporting, and communication workflows end to end.",
    topics: ["n8n and Make workflow design", "CRM and productivity integrations", "Automated content pipelines", "AI-driven reporting systems"],
  },
  {
    phase: "Phase 4",
    title: "Capstone & Career Positioning",
    duration: "Weeks 13–16",
    description: "Build your three portfolio projects, present to mentors, and develop your AI practitioner positioning narrative for career advancement or consultancy use.",
    topics: ["Project scoping and delivery", "Presentation and documentation", "AI consulting positioning", "Portfolio and credential planning"],
  },
];

export const agenticAiTools = [
  { name: "OpenAI API", category: "Foundation" },
  { name: "Claude API", category: "Foundation" },
  { name: "LangChain", category: "Agents" },
  { name: "n8n", category: "Automation" },
  { name: "Make (Integromat)", category: "Automation" },
  { name: "Zapier", category: "Automation" },
  { name: "Perplexity API", category: "Research" },
  { name: "Notion API", category: "Productivity" },
  { name: "Python Basics", category: "Code" },
  { name: "Vector Databases", category: "Memory" },
  { name: "JSON & REST APIs", category: "Integration" },
  { name: "Prompt Engineering", category: "Foundation" },
];

export const agenticAiProjects = [
  {
    number: "01",
    title: "Personal AI Research Assistant",
    description: "Build a multi-source research agent that searches the web, synthesises findings, and produces structured reports on demand. Deployed and functional before end of Phase 2.",
    tags: ["Agent Architecture", "Web Search", "Structured Output"],
  },
  {
    number: "02",
    title: "Automated Content Workflow",
    description: "Design a no-code pipeline that takes a topic brief, drafts long-form content, suggests visuals, and queues social posts — with human review at each stage.",
    tags: ["n8n / Make", "Content Pipeline", "Social Integration"],
  },
  {
    number: "03",
    title: "Business Intelligence Agent",
    description: "Build an agent that ingests weekly business data, identifies anomalies, and produces executive-ready summaries with action recommendations. Built for real operational use.",
    tags: ["Data Analysis", "Executive Reporting", "Automation"],
  },
];

export const agenticAiOutcomes = [
  "Build and deploy working AI agents from scratch",
  "Automate high-value business workflows with no-code tools",
  "Design multi-step AI pipelines connected to real systems",
  "Develop a portfolio of three capstone automation projects",
  "Position yourself as an AI practitioner in professional settings",
  "Access mentor review, feedback, and career guidance throughout",
];

export const agenticAiAudience = [
  { title: "Founders & CEOs", description: "Build AI leverage across operations, content, and decisions without needing a technical team." },
  { title: "Consultants", description: "Differentiate your practice by delivering AI-enhanced research, reporting, and client workflows." },
  { title: "Marketing Leaders", description: "Automate content creation, audience research, and campaign workflows with AI pipelines." },
  { title: "Operations Managers", description: "Identify and automate repetitive knowledge work using accessible no-code AI tools." },
  { title: "Educators & Trainers", description: "Develop AI-augmented course content, feedback systems, and learner support tools." },
  { title: "HR & People Leads", description: "Automate candidate screening, onboarding content, and workforce reporting with applied AI." },
];

export const agenticAiFAQs = [
  {
    question: "Do I need coding experience to join this program?",
    answer: "No prior coding experience is required. The program starts with no-code automation tools and introduces Python basics only where directly useful for agent development. The focus is on practical output, not software engineering.",
  },
  {
    question: "Is this program delivered live or on-demand?",
    answer: "The program combines live mentorship sessions with structured async modules. You can progress through curriculum content on your own schedule, while live sessions cover project reviews, concept clarity, and personalised feedback.",
  },
  {
    question: "What kind of mentor support is included?",
    answer: "All learners receive access to mentor sessions throughout the full program. These cover project review, concept clarity, and career or consultancy positioning. Mentor contact is ongoing — not only at scheduled checkpoints.",
  },
  {
    question: "How are the three capstone projects structured?",
    answer: "Each project covers one core track: agent building, business automation, and an intelligence workflow. All three are scoped to be real, deployable, and portfolio-ready by program end — not academic exercises.",
  },
  {
    question: "Is this suitable for executives with no AI background?",
    answer: "Yes. The program is specifically designed for executives, consultants, and working professionals who want applied AI skills without becoming engineers. Both beginners and intermediate learners progress well through the structure.",
  },
  {
    question: "What credential is issued on completion?",
    answer: "Graduates receive an AcdyOn program certificate for Agentic AI & Automation Mastery alongside a portfolio of deployed projects. Academic positioning options and credential details are discussed during the initial consultation.",
  },
];

// ─── Top Navigation ──────────────────────────────────────────────────────────

type NavItem = { label: string; href: string; description?: string; badge?: string };
type NavGroup = { label: string; items: NavItem[] };

export type NavEntry =
  | { type: "link"; label: string; href: string }
  | { type: "dropdown"; label: string; href: string; summary: string; items: NavItem[] }
  | { type: "mega"; label: string; href: string; summary: string; groups: NavGroup[] };

export const topNav: NavEntry[] = [
  {
    type: "mega",
    label: "Programs",
    href: "/programs",
    summary: "Executive education, AI mastery, doctoral pathways, and academic recognition — in one guided ecosystem.",
    groups: [
      {
        label: "AI & Technology",
        items: [
          { label: "Agentic AI & Automation Mastery", href: "/programs/agentic-ai-automation-mastery", description: "Build AI agents, automate workflows, and deploy real projects." },
          { label: "Agentic AI & Cybersecurity Mastery", href: "/programs/agentic-ai-cybersecurity-mastery", description: "Defend against AI-powered threats with autonomous security systems.", badge: "New" },
          { label: "AI for Business Leaders", href: "/ai-courses", description: "Strategic AI decision-making for executives and founders." },
        ],
      },
      {
        label: "Executive & Professional",
        items: [
          { label: "Executive Certifications", href: "/programs", description: "Compact credentials for career mobility and leadership depth." },
          { label: "Corporate Training", href: "/contact", description: "Custom AI and leadership learning for organisations." },
        ],
      },
      {
        label: "Doctoral Programs",
        items: [
          { label: "DBA Programs", href: "/doctoral-programs/dba", description: "Business doctorate for experienced executives and leaders." },
          { label: "PhD Programs", href: "/doctoral-programs/phd", description: "Research-oriented academic advancement guidance." },
          { label: "Post Doctorate Fellowship", href: "/doctoral-programs/post-doctorate", description: "Advanced recognition and research contribution tracks." },
        ],
      },
      {
        label: "Recognition Pathways",
        items: [
          { label: "Honorary Doctorate", href: "/honorary-recognition", description: "Recognition for professional impact and leadership contribution." },
          { label: "Honorary Professorship", href: "/honorary-recognition", description: "Academic distinction for educators and domain experts." },
        ],
      },
    ],
  },
  {
    type: "dropdown",
    label: "Universities",
    href: "/universities",
    summary: "International pathways, verification, and academic clarity.",
    items: [
      { label: "Partner Universities", href: "/universities", description: "Explore the global academic network." },
      { label: "Academic Recognition", href: "/universities", description: "Understanding international positioning and fit." },
      { label: "Global Network", href: "/universities", description: "Geographic reach and regional pathways." },
      { label: "Country Presence", href: "/universities", description: "Country-specific eligibility and recognition guidance." },
    ],
  },
  { type: "link", label: "Success Stories", href: "/success-stories" },
  {
    type: "dropdown",
    label: "Resources",
    href: "/blogs",
    summary: "Insights, guides, and tools for navigating your learning journey.",
    items: [
      { label: "Blogs", href: "/blogs", description: "Insights on AI, education, and academic advancement." },
      { label: "Brochures", href: "/resources/brochures", description: "Detailed program brochures and guides." },
      { label: "Events", href: "/resources/events", description: "Webinars, open days, and information sessions." },
      { label: "FAQs", href: "/programs", description: "Common questions across all programs answered." },
    ],
  },
  { type: "link", label: "About", href: "/about" },
  { type: "link", label: "Contact", href: "/contact" },
];

// ─── Agentic AI & Cybersecurity Mastery Program ───────────────────────────────

export const cybersecurityProgramMeta = {
  eyebrow: "Flagship Cybersecurity Program",
  title: "Agentic AI & Cybersecurity Mastery",
  description: "Master AI-powered cybersecurity from fundamentals to autonomous defence — with hands-on labs, red team simulations, Microsoft AI-900 certification, and 360° career support.",
  duration: "16 Weeks",
  format: "Blended — Online",
  certification: "Microsoft AI-900",
  careerSupport: "360° Career Support",
  partner: "In collaboration with The Tech Unique (TTU)",
};

export const cybersecurityThreats = [
  { title: "AI-Powered Cyber Threats", description: "Adversaries now use AI to automate, adapt, and evade — faster and at greater scale than ever before." },
  { title: "Autonomous Attacks", description: "Self-learning attacks operate 24/7, scanning, exploiting, and propagating without human direction." },
  { title: "Machine-Speed Adversaries", description: "Milliseconds matter. You need AI-augmented defence to outpace threats operating at machine speed." },
  { title: "Resilient ML Pipelines", description: "Build secure, robust, and tamper-resistant ML pipelines that hold up under real-world adversarial conditions." },
  { title: "Defensive Automation", description: "From detection to response — automate your entire defence cycle and stay ahead of evolving threats." },
];

export const cybersecurityImpact = [
  "Rising frequency of AI-orchestrated cyberattacks across all industries",
  "Shorter attack-to-exploit timelines — from days to minutes",
  "Higher evasion rates against legacy defence systems and tools",
  "Increased risk to critical infrastructure, cloud, and data assets",
  "Demand for AI-native security talent is skyrocketing globally",
];

export const cybersecurityCurriculum = [
  {
    part: "Part 1",
    title: "Building the Foundations of Autonomous Defence",
    duration: "Weeks 1–5",
    description: "Strengthen core knowledge and build the essential skills to understand, defend, and secure modern systems in an AI-driven threat environment.",
    modules: [
      { name: "Introduction to Cybersecurity & Agentic AI", desc: "Understand the cybersecurity landscape and how Agentic AI is transforming defence, automation, and decision-making." },
      { name: "Cyber Laws & AI Governance", desc: "Learn the legal, ethical, and regulatory frameworks governing cybersecurity and the responsible use of AI." },
      { name: "Network Fundamentals", desc: "Build a strong understanding of networking concepts, protocols, and architectures that power secure communication." },
      { name: "System Hacking", desc: "Explore system-level attack vectors and techniques to understand how systems can be compromised from within." },
      { name: "Vulnerability Analysis", desc: "Learn to discover, assess, and prioritise vulnerabilities to strengthen systems and reduce organisational risk." },
    ],
  },
  {
    part: "Part 2",
    title: "Offensive Security & AI-Powered Threat Intelligence",
    duration: "Weeks 6–10",
    description: "Go beyond basics. Master advanced offensive techniques and leverage AI to detect, analyse, and outsmart modern threats before they materialise.",
    modules: [
      { name: "Network Scanning", desc: "Discover live hosts, open ports, and services using advanced scanning techniques and AI-assisted reconnaissance." },
      { name: "Spoofing & MITM Attacks", desc: "Manipulate packets and identities to bypass controls and perform man-in-the-middle and session hijacking attacks." },
      { name: "IDS / Firewall Evasion", desc: "Bypass and evade modern IDS/IPS and firewall systems using advanced obfuscation and tunnelling techniques." },
      { name: "Web Application Hacking", desc: "Identify and exploit vulnerabilities in web applications using industry-standard tools and AI-augmented testing." },
      { name: "Enumeration", desc: "Extract valuable information from systems, users, services, and infrastructure to build effective attack chains." },
      { name: "Mobile Security", desc: "Assess and exploit vulnerabilities in mobile applications and device communication channels." },
    ],
  },
  {
    part: "Part 3",
    title: "Advanced Autonomous Defence Systems",
    duration: "Weeks 11–16",
    description: "Master advanced techniques to detect, respond to, and neutralise sophisticated threats using AI-powered autonomous defence strategies at scale.",
    modules: [
      { name: "Malware Analysis", desc: "Analyse, reverse-engineer, and understand malware behaviour to build effective detection and mitigation strategies." },
      { name: "DoS / DDoS Defence", desc: "Design and implement robust strategies to detect, mitigate, and respond to denial-of-service attacks in real time." },
      { name: "Wireless Hacking", desc: "Assess and exploit wireless networks in controlled environments and learn to defend against wireless-based threats." },
      { name: "Social Engineering", desc: "Understand human psychology and attacker techniques used to manipulate and breach organisations." },
      { name: "Cloud Security", desc: "Secure cloud environments and applications using industry best practices and modern compliance frameworks." },
      { name: "IoT Security", desc: "Identify and secure IoT devices and networks from emerging vulnerabilities and infrastructure threats." },
    ],
  },
];

export const cybersecurityTools = {
  core: ["Wireshark", "Burp Suite", "Metasploit", "OWASP ZAP", "Kali Linux", "Nmap", "Snort", "John The Ripper"],
  enterprise: ["SIEM Platforms", "Splunk", "Microsoft Sentinel", "QRadar"],
  ai: ["TensorFlow", "PyTorch", "scikit-learn", "LangChain", "OpenAI API", "Hugging Face", "MLflow", "AI Safety Toolkit"],
};

export const cybersecurityLabs = [
  {
    number: "01",
    title: "Penetration Testing Labs",
    description: "Hands-on labs covering reconnaissance, exploitation, privilege escalation, post-exploitation, and professional security reporting.",
    tags: ["Network & System Pentesting", "Web & API Exploitation", "Reporting & Documentation"],
  },
  {
    number: "02",
    title: "Agentic AI Labs",
    description: "Explore AI models, build autonomous security agents, and integrate AI for threat detection and automated incident response.",
    tags: ["AI Model Integration", "Threat Detection with ML", "Automated Response Workflows"],
  },
  {
    number: "03",
    title: "Autonomous Red Teaming",
    description: "Simulate real-world adversaries using AI-driven techniques to identify and exploit attack surfaces in controlled environments.",
    tags: ["AI-Powered Attack Simulation", "Adaptive Adversarial Techniques", "Breach & Impact Analysis"],
  },
  {
    number: "04",
    title: "Capstone Projects",
    description: "Solve real-world security problems with end-to-end projects that demonstrate strategic thinking and AI-powered defence capability.",
    tags: ["Industry-Relevant Scenarios", "AI-Driven Defence Solutions", "Portfolio-Ready Deliverables"],
  },
];

export const cybersecurityCareerPaths = [
  {
    number: "01",
    title: "AI Threat Researcher",
    tagline: "Explore. Analyse. Predict.",
    description: "Work at the intersection of AI, threat intelligence, and research to uncover emerging attack techniques and build predictive defence models.",
    skills: ["Research AI-powered threat vectors", "Develop ML models for threat prediction", "Analyse adversarial ML techniques", "Publish findings and build professional reputation"],
  },
  {
    number: "02",
    title: "Security Engineer — Autonomous Defence",
    tagline: "Build. Automate. Defend.",
    description: "Design and deploy AI-native security systems that detect, respond, and adapt autonomously to stop attacks in real time across cloud and enterprise environments.",
    skills: ["Build AI-native detection pipelines", "Automate incident response workflows", "Deploy autonomous defence systems", "Secure cloud, endpoints, and AI workloads"],
  },
  {
    number: "03",
    title: "Red Team Lead",
    tagline: "Simulate. Breach. Strengthen.",
    description: "Lead offensive security operations and AI-driven adversarial simulations to identify vulnerabilities and strengthen organisational security posture.",
    skills: ["Lead AI-driven red team engagements", "Simulate real-world attack scenarios", "Identify security gaps and exploit paths", "Drive security improvements at scale"],
  },
];

export const cybersecurityCertifications = [
  {
    title: "Certificate of Agentic AI & Cybersecurity Mastery",
    issuer: "AcdyOn",
    description: "Demonstrates mastery in AI-powered cybersecurity, autonomous defence, and applied security practice.",
    badge: null,
  },
  {
    title: "Microsoft AI-900",
    issuer: "Microsoft",
    description: "Validates foundational knowledge of AI concepts and Microsoft Azure AI services. Globally recognised by employers.",
    badge: "Microsoft Certified",
  },
];

export const cybersecurityTestimonials = [
  {
    name: "Rohit Sharma",
    role: "AI Security Analyst",
    country: "India",
    flag: "IN",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=320&q=80",
    program: "Agentic AI & Cybersecurity Mastery",
    background: "IT Support Engineer with no cybersecurity background and no prior AI experience.",
    outcome: "Transitioned to AI Security Analyst at EY within 4 months. Salary doubled. Now protecting enterprise clients.",
    quote: "This programme completely changed my career trajectory. The blend of AI, cybersecurity, and hands-on labs helped me transition from IT support to an AI Security Analyst role in just 4 months.",
  },
  {
    name: "Ananya Mehta",
    role: "Security Engineer",
    country: "India",
    flag: "IN",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?auto=format&fit=crop&w=320&q=80",
    program: "Agentic AI & Cybersecurity Mastery",
    background: "Software developer seeking to move into AI-driven security engineering and autonomous defence.",
    outcome: "Promoted to Security Engineer at Microsoft. Now leads automated threat hunting and AI-powered product security.",
    quote: "The Agentic AI labs and red team simulations were incredible. I now lead automated threat hunting initiatives and help build secure AI-powered products at scale.",
  },
];

export const cybersecurityStats = [
  { value: "10,000+", label: "Learners Empowered" },
  { value: "500+", label: "Organisations Secured" },
  { value: "92%", label: "Career Growth Achieved" },
  { value: "16 Weeks", label: "To Career Transformation" },
];

export const cybersecurityFAQs = [
  {
    question: "Is this programme suitable for beginners with no cybersecurity background?",
    answer: "Yes. The programme starts from cybersecurity fundamentals and builds progressively through offensive and autonomous defence. No prior security experience is required. Many graduates started from IT support, development, or non-technical backgrounds.",
  },
  {
    question: "What is the Microsoft AI-900 certification?",
    answer: "Microsoft AI-900 (Azure AI Fundamentals) is a globally recognised certification validating foundational knowledge of AI concepts and Microsoft Azure AI services. It is included in the programme and prepares you for roles at the intersection of AI and cloud security.",
  },
  {
    question: "Are the labs conducted in real environments?",
    answer: "Yes. All penetration testing, red teaming, and Agentic AI labs are conducted in controlled, real-world environments. Capstone projects are scoped for actual deployment — not academic simulations. By graduation, you will have a portfolio of real security work.",
  },
  {
    question: "What career support is included?",
    answer: "The programme includes 360° career support: resume building, interview preparation, portfolio review, and access to hiring partner introductions. Career guidance is embedded throughout all 16 weeks — not added as a final module.",
  },
  {
    question: "How is this different from a standard cybersecurity course?",
    answer: "Most cybersecurity courses focus on tools and theory. This programme focuses on agentic AI integration — teaching you to build AI-powered defence systems, not just configure existing ones. The combination of offensive skills, autonomous defence, and AI capability is unique to this programme.",
  },
  {
    question: "What does the programme cost and are scholarships available?",
    answer: "Programme pricing and scholarship availability are discussed during the initial consultation. AcdyOn is committed to ensuring financial constraints do not prevent motivated professionals from accessing premium education. The consultation team will outline all available options.",
  },
];

// ─── DBA SPECIALIZATIONS (PHASE 3C) ─────────────────────────────────────────

export const dbaSpecializations = [
  {
    id: 'strategic-management',
    name: 'Strategic Management',
    description: 'Business strategy, competitive advantage, and strategic planning',
    researchThemes: ['Competitive strategy formulation', 'Digital transformation strategy', 'Organizational strategic positioning'],
    thesisExamples: ['Impact of digital disruption on traditional business models', 'Agile strategy frameworks in global enterprises'],
    industries: ['Technology', 'Finance', 'Manufacturing', 'Retail'],
    careerOutcomes: ['Chief Strategy Officer', 'Board Advisor', 'Strategy Consultant', 'Industry Analyst'],
  },
  {
    id: 'finance',
    name: 'Finance & Investment',
    description: 'Corporate finance, investment strategy, and financial management',
    researchThemes: ['Capital structure decisions', 'Investment valuation models', 'Financial risk management'],
    thesisExamples: ['ESG investing and financial performance', 'Impact of fintech on traditional banking'],
    industries: ['Banking', 'Investment Management', 'Corporate Finance', 'Insurance'],
    careerOutcomes: ['Chief Financial Officer', 'Investment Director', 'Finance Advisor', 'Board Treasurer'],
  },
  {
    id: 'marketing',
    name: 'Marketing & Brand Strategy',
    description: 'Market research, brand management, and customer engagement',
    researchThemes: ['Consumer behavior analytics', 'Brand positioning frameworks', 'Digital marketing transformation'],
    thesisExamples: ['Impact of personalization on customer loyalty', 'Brand resilience during market disruption'],
    industries: ['Consumer Goods', 'Technology', 'Retail', 'Hospitality'],
    careerOutcomes: ['Chief Marketing Officer', 'Brand Director', 'Market Research Leader', 'Customer Experience Head'],
  },
  {
    id: 'human-resources',
    name: 'Human Resource Management',
    description: 'Organizational development, talent strategy, and people leadership',
    researchThemes: ['Organizational culture transformation', 'Talent acquisition and retention', 'Leadership development models'],
    thesisExamples: ['Impact of remote work on organizational culture', 'Succession planning in digital-first organizations'],
    industries: ['Technology', 'Manufacturing', 'Healthcare', 'Professional Services'],
    careerOutcomes: ['Chief People Officer', 'Head of Talent', 'Organizational Development Director', 'Executive Coach'],
  },
  {
    id: 'operations',
    name: 'Operations & Supply Chain',
    description: 'Process optimization, supply chain management, and operational excellence',
    researchThemes: ['Supply chain resilience', 'Lean and agile operations', 'Process automation and efficiency'],
    thesisExamples: ['Supply chain optimization in global manufacturing', 'Circular economy principles in operations'],
    industries: ['Manufacturing', 'Logistics', 'Retail', 'Automotive'],
    careerOutcomes: ['Chief Operations Officer', 'Supply Chain Director', 'Operations Consultant', 'Quality Assurance Head'],
  },
  {
    id: 'digital-transformation',
    name: 'Digital Transformation',
    description: 'Technology strategy, digital business models, and innovation management',
    researchThemes: ['Digital business model innovation', 'Technology adoption and change management', 'Digital leadership'],
    thesisExamples: ['Legacy system modernization strategies', 'Building digital-first organizational culture'],
    industries: ['Technology', 'Finance', 'Retail', 'Healthcare'],
    careerOutcomes: ['Chief Digital Officer', 'Transformation Director', 'Technology Strategist', 'Innovation Lead'],
  },
  {
    id: 'innovation-entrepreneurship',
    name: 'Innovation & Entrepreneurship',
    description: 'New business development, intrapreneurship, and innovation ecosystems',
    researchThemes: ['Corporate innovation models', 'Startup scaling frameworks', 'Innovation management systems'],
    thesisExamples: ['Building innovation culture in established corporations', 'Venture creation and funding strategies'],
    industries: ['Technology', 'Venture Capital', 'Manufacturing', 'Consulting'],
    careerOutcomes: ['Chief Innovation Officer', 'Venture Director', 'Entrepreneur', 'Innovation Consultant'],
  },
  {
    id: 'ai-business-strategy',
    name: 'AI & Business Strategy',
    description: 'Artificial intelligence strategy, algorithmic business models, and AI governance',
    researchThemes: ['AI value creation models', 'Responsible AI governance', 'AI-driven organizational transformation'],
    thesisExamples: ['AI adoption roadmaps for enterprises', 'Ethics and governance in AI systems'],
    industries: ['Technology', 'Finance', 'Healthcare', 'Retail'],
    careerOutcomes: ['Chief AI Officer', 'AI Strategy Lead', 'Technology Director', 'Research Leader'],
  },
  {
    id: 'esg-sustainability',
    name: 'ESG & Sustainability',
    description: 'Environmental, social, and governance strategy for sustainable business',
    researchThemes: ['Sustainable business model innovation', 'ESG reporting and impact measurement', 'Stakeholder governance'],
    thesisExamples: ['Net-zero transition strategies', 'ESG reporting and financial performance'],
    industries: ['Energy', 'Finance', 'Consumer Goods', 'Technology'],
    careerOutcomes: ['Chief Sustainability Officer', 'ESG Director', 'Impact Investor', 'Sustainability Consultant'],
  },
  {
    id: 'international-business',
    name: 'International Business',
    description: 'Global strategy, cross-cultural management, and international expansion',
    researchThemes: ['Global market entry strategies', 'Cross-cultural leadership', 'International business policy'],
    thesisExamples: ['Emerging market expansion frameworks', 'Cultural adaptation in global organizations'],
    industries: ['Multinational Corporations', 'Consulting', 'Technology', 'Finance'],
    careerOutcomes: ['Chief Global Officer', 'International Business Director', 'Global Strategy Lead', 'Market Development Head'],
  },
];

// ─── DBA CAREER OUTCOMES (PHASE 3C) ──────────────────────────────────────────

export const dbaCareerOutcomes = [
  {
    title: 'Board Membership Opportunities',
    description: 'Doctoral qualification opens board-level governance, advisory roles, and strategic steering positions at leading organizations.',
  },
  {
    title: 'Professor of Practice Pathways',
    description: 'Teach at leading business schools, contribute to academic discourse, and develop thought leadership in your field.',
  },
  {
    title: 'Consulting Authority',
    description: 'Establish yourself as a recognized authority for strategic consulting, executive advisory, and thought leadership roles.',
  },
  {
    title: 'Industry Thought Leadership',
    description: 'Publish research, speak at global conferences, and shape the future of your industry through doctoral-level contribution.',
  },
  {
    title: 'Executive Promotion',
    description: 'Advance to C-suite and senior leadership positions with the doctoral credential that signals commitment to excellence.',
  },
  {
    title: 'International Recognition',
    description: 'Global academic recognition and institutional affiliation that elevates your professional standing across borders.',
  },
  {
    title: 'Academic Publishing',
    description: 'Publish your research in peer-reviewed journals and contribute original knowledge to your field of expertise.',
  },
  {
    title: 'Advisory Board Invitations',
    description: 'Join advisory boards of corporations, nonprofits, and academic institutions seeking doctoral-level expertise and perspective.',
  },
];

// ─── DBA SUCCESS PROFILES (PHASE 3C) ────────────────────────────────────────

export const dbaSuccessProfiles = [
  {
    id: 'founder-to-thought-leader',
    title: 'Founder → Industry Thought Leader',
    description: 'Build authority and publish research that shapes your industry',
    outcomes: ['Published author', 'Speaking engagements at major conferences', 'Advisory board invitations', 'Industry recognition'],
  },
  {
    id: 'vp-to-board-advisor',
    title: 'Vice President → Board Advisor',
    description: 'Transition from operational leadership to strategic advisory roles',
    outcomes: ['Board membership at leading companies', 'Corporate governance expertise', 'Executive search advisory', 'Strategic consulting'],
  },
  {
    id: 'consultant-to-professor',
    title: 'Consultant → Professor of Practice',
    description: 'Leverage expertise to educate the next generation',
    outcomes: ['Teaching at top business schools', 'Curriculum development', 'Student mentorship', 'Academic network'],
  },
  {
    id: 'director-to-research-leader',
    title: 'Corporate Director → Research Leader',
    description: 'Establish yourself as an industry researcher and thought leader',
    outcomes: ['Published research', 'Research institute affiliation', 'Speaking invitations', 'Peer recognition'],
  },
  {
    id: 'entrepreneur-to-published-author',
    title: 'Entrepreneur → Published Author',
    description: 'Document your expertise and share insights with the global business community',
    outcomes: ['Book publication', 'Harvard Business Review contributor', 'Media appearances', 'Speaking tours'],
  },
  {
    id: 'executive-to-global-speaker',
    title: 'Senior Executive → Global Speaker',
    description: 'Share your doctoral research on world stages',
    outcomes: ['Keynote speaking at global summits', 'Conference chairman roles', 'Webinar host', 'Podcast guest'],
  },
];

// ─── EXPANDED DBA FAQs (PHASE 3C) ───────────────────────────────────────────

export const dbaFAQsExpanded = [
  {
    question: 'What is the difference between a DBA and an MBA?',
    answer: 'An MBA focuses on business knowledge, leadership skills, and professional development. A DBA is the highest professional doctorate in business, designed for experienced executives who want to contribute original research to their field. A DBA includes everything an MBA covers PLUS original research contribution, doctoral qualification, thought leadership, academic recognition, and the title of Doctor. If you already have an MBA and want to advance further, a DBA is the natural next step.',
  },
  {
    question: 'Can I pursue a DBA while continuing to work full-time?',
    answer: 'Yes. DBA programmes are specifically designed for working professionals. Our partner universities offer flexible delivery formats including part-time, online, and hybrid options. Most DBA students continue in their current roles while completing the programme, using weekends and designated study periods for research and coursework.',
  },
  {
    question: 'How long does a typical DBA take?',
    answer: 'DBA programmes typically take 2-4 years depending on your pace, prior research experience, and the specific university. Full-time students may complete in 18-24 months, while part-time professionals typically take 3-4 years. The timeline is flexible and can be adjusted based on your circumstances.',
  },
  {
    question: 'Are DBA qualifications internationally recognized?',
    answer: 'Yes. AcdyOn works exclusively with globally accredited universities holding AACSB, ASIC, EQUIS, and ACBSP accreditations. These qualifications are recognized across 150+ countries and accepted for academic and professional positions worldwide. Your DBA will be recognized in Europe, Asia, Americas, and beyond.',
  },
  {
    question: 'What research will I conduct during my DBA?',
    answer: 'You will conduct original research aligned with your professional interests and career goals. This might be a case study of your own organization, an industry analysis, a methodological contribution, or an experimental study. Your supervisor helps you design research that is both academically rigorous and practically relevant to your career.',
  },
  {
    question: 'Can I publish my DBA research?',
    answer: 'Yes. Many DBA students publish their research in peer-reviewed journals and present at academic conferences. Your university will support publication strategies as part of your doctoral training. Some students publish 2-3 papers during their DBA, establishing themselves as recognized researchers.',
  },
  {
    question: 'How is a DBA different from a PhD in business?',
    answer: 'Both are doctorates involving original research. A PhD is typically more theory-focused and positions you for academic careers. A DBA is more practice-focused and positions you for executive roles that leverage research expertise. DBA students are practicing professionals; PhD students are often full-time academics. Choose based on whether your goal is executive leadership (DBA) or academic research (PhD).',
  },
  {
    question: 'Can I use the title \"Doctor\" after earning a DBA?',
    answer: 'Yes. A DBA is a recognized doctoral degree and entitles you to use the title "Doctor" professionally and academically. Many DBA graduates use "Dr." in professional contexts, introducing themselves as such in boards, conferences, and publications.',
  },
  {
    question: 'What does the application process involve?',
    answer: 'The process typically includes: (1) Initial consultation to assess fit and goals, (2) Eligibility review of your academic background and professional experience, (3) University matching based on your research interests, (4) Formal offer from the university, (5) Enrolment and supervisor assignment, (6) Orientation and research journey begins. The entire process typically takes 2-3 months.',
  },
  {
    question: 'What are the eligibility requirements for a DBA?',
    answer: 'Standard requirements include: (1) Master\'s degree or equivalent professional qualification, (2) Minimum 7-10 years of professional experience in business or management, (3) Demonstrated research readiness or interest in original research, (4) English language proficiency for academic writing. Some universities accept exceptional professionals with bachelor\'s degrees and extensive experience. AcdyOn assesses each candidate individually.',
  },
  {
    question: 'How much does a DBA cost?',
    answer: 'DBA tuition varies by university and ranges from $27,500 to $42,000+ depending on the institution and country. Many DBA students benefit from flexible payment plans (monthly installments over 3-12 months). Some employers offer sponsorship. Scholarship opportunities may be available based on your profile. Discuss all options during your initial consultation.',
  },
  {
    question: 'Can I get a scholarship or financial assistance?',
    answer: 'Yes. Scholarship opportunities vary by university and may be merit-based, employer-sponsored, or equity-focused. Many universities offer payment plans and partial scholarships for exceptional candidates. AcdyOn works with universities to identify financial options tailored to your situation. Discuss in your consultation.',
  },
  {
    question: 'What is the supervision structure during my DBA?',
    answer: 'You will be assigned a primary supervisor (doctoral guide) with expertise in your research area. Many programmes include a supervisory team of 2-3 academics who provide guidance on research design, methodology, writing, and publication. Supervision is typically monthly or bi-monthly, with flexibility for intensive periods. You\'ll have clear escalation paths if you need additional support.',
  },
  {
    question: 'How much time per week should I budget for my DBA?',
    answer: 'Part-time DBA students typically budget 15-20 hours per week. In early stages (coursework and proposal development) this might be higher (20-25 hours). In active research phases it varies with your project. Full-time students commit 35-40 hours per week. Discuss realistic time commitment with your programme advisor during consultation.',
  },
  {
    question: 'Will I be taught in classroom or online?',
    answer: 'Most DBA programmes offer flexible delivery: Online (asynchronous recorded lectures plus synchronous seminars), Part-Time (evening/weekend classes), Hybrid (mix of online and in-person intensives), or Full-Time (traditional classroom). Choose based on your preference and work schedule. All formats deliver equivalent academic rigor.',
  },
];
