// AcdyOn × upGrad partnership courses. CTO page fully populated from source;
// the other 7 are branded stubs (confirmed:false) until their source HTML is shared.
// ponytail: template skips any absent section, so stubs render clean without placeholder filler.
// ponytail: audience-card photos are temporary Unsplash stand-ins (user-approved override of the
// no-hotlink rule for that section only). Mentor photos are real, self-hosted in public/images/site/doctoral/.

export interface UpgradModule {
  code?: string
  title: string
  weeks?: string
  topics?: string[]
  deliverable?: string
}

export interface UpgradMentor {
  name: string
  role: string
  institute: string
  bio?: string
  photoUrl?: string
  linkedinUrl?: string
}

export interface UpgradFAQ {
  q: string
  a: string
}

export interface UpgradAudience {
  role: string
  description: string
  imageUrl?: string
}

export interface UpgradCaseStudy {
  company: string
  title: string
  description: string
}

export interface UpgradBatchGroup {
  title: string
  items: { label: string; value: string }[]
}

export interface UpgradWhySection {
  heading: string
  body: string
}

export interface UpgradAccreditation {
  name: string
  body: string
  logoUrl?: string
}

export interface UpgradTestimonial {
  name: string
  role: string
  quote: string
  photoUrl?: string
  linkedinUrl?: string
}

export interface UpgradCourse {
  slug: string
  name: string
  university: string
  eyebrow: string
  tagline: string
  duration?: string
  fee?: string
  seatBlock?: string
  admissionDeadline?: string
  eligibility?: string
  syllabusUrl?: string
  brochureUrl?: string
  highlights?: string[]
  certificate?: { title: string; issuers: string[]; note: string; imageUrl?: string }
  audience?: UpgradAudience[]
  /** single image made of N photos placed side-by-side, one per audience card, sliced via CSS background-position */
  audienceSpriteUrl?: string
  /** 'circle' (default, small avatar like faculty photos) or 'rect' (wide professional/workspace banner) */
  audienceImageStyle?: 'circle' | 'rect'
  accreditations?: UpgradAccreditation[]
  fourSteps?: { title: string; desc: string }[]
  curriculum?: UpgradModule[]
  mentors?: UpgradMentor[]
  /** applies to mentors/faculty/thesisSupervisors carousels for this course only — 'circle' = small circular avatar, default 'rect' = wide photo panel */
  mentorsAvatarStyle?: 'rect' | 'circle'
  mentorsEyebrow?: string
  mentorsTitle?: string
  mentorsDescription?: string
  /** separate carousel rendered after mentors, for programmes that split faculty into two distinct groups (e.g. Program Architects vs Faculty) */
  faculty?: UpgradMentor[]
  facultyEyebrow?: string
  facultyTitle?: string
  facultyDescription?: string
  /** third carousel rendered after faculty, for programmes that split faculty into three distinct groups (e.g. Instructors / Leadership Experts / Thesis Supervisors) */
  thesisSupervisors?: UpgradMentor[]
  thesisSupervisorsEyebrow?: string
  thesisSupervisorsTitle?: string
  thesisSupervisorsDescription?: string
  caseStudies?: UpgradCaseStudy[]
  testimonials?: UpgradTestimonial[]
  testimonialsEyebrow?: string
  testimonialsTitle?: string
  testimonialsDescription?: string
  faqs?: UpgradFAQ[]
  admissionSteps?: { title: string; desc: string }[]
  batchProfile?: UpgradBatchGroup[]
  whySection?: { title: string; sections: UpgradWhySection[] }
  confirmed: boolean
}

// ponytail: one scaffold shared by all unconfirmed pages so every stub renders the same section
// layout as the CTO page for a structure preview. Every string is an obvious placeholder —
// swap field-by-field with real copy as it's supplied, then flip confirmed: true.
function placeholderSections(programme: string, university: string) {
  return {
    eligibility: 'Eligibility criteria to be confirmed.',
    highlights: [
      '[Highlight 1 — to be added]',
      '[Highlight 2 — to be added]',
      '[Highlight 3 — to be added]',
      '[Highlight 4 — to be added]',
    ],
    certificate: {
      title: programme,
      issuers: [university],
      note: 'Certificate details to be confirmed.',
    },
    audience: [
      { role: '[Audience role 1]', description: 'Description to be added.' },
      { role: '[Audience role 2]', description: 'Description to be added.' },
      { role: '[Audience role 3]', description: 'Description to be added.' },
      { role: '[Audience role 4]', description: 'Description to be added.' },
    ],
    fourSteps: [
      { title: '[Step 1 title]', desc: 'Details to be added.' },
      { title: '[Step 2 title]', desc: 'Details to be added.' },
      { title: '[Step 3 title]', desc: 'Details to be added.' },
      { title: '[Step 4 title]', desc: 'Details to be added.' },
    ],
    curriculum: [
      { title: '[Module 1 — topic TBD]', topics: ['Content to be finalized'] },
      { title: '[Module 2 — topic TBD]', topics: ['Content to be finalized'] },
      { title: '[Module 3 — topic TBD]', topics: ['Content to be finalized'] },
    ] as UpgradModule[],
    mentors: [
      { name: '[Faculty name]', role: '[Role]', institute: university },
      { name: '[Faculty name]', role: '[Role]', institute: university },
      { name: '[Faculty name]', role: '[Role]', institute: university },
    ] as UpgradMentor[],
    caseStudies: [
      { company: '[Company]', title: '[Case study title]', description: 'Description to be added.' },
      { company: '[Company]', title: '[Case study title]', description: 'Description to be added.' },
      { company: '[Company]', title: '[Case study title]', description: 'Description to be added.' },
    ],
    admissionSteps: [
      { title: 'Submit Application', desc: 'Submit your application and our admissions committee will review your details.' },
      { title: 'Receive Offer Letter', desc: 'Once shortlisted, you will receive an offer letter.' },
      { title: 'Reserve Your Seat', desc: 'Confirm your candidature by paying the block amount.' },
    ],
    batchProfile: [
      { title: 'Work Experience', items: [{ label: 'TBD', value: 'TBD' }] },
      { title: 'Top Industries', items: [{ label: 'TBD', value: 'TBD' }] },
      { title: 'Top Titles', items: [{ label: 'TBD', value: 'TBD' }] },
    ] as UpgradBatchGroup[],
    whySection: {
      title: `Why This Programme Matters`,
      sections: [
        { heading: '[Reason 1 heading]', body: 'Details to be added.' },
        { heading: '[Reason 2 heading]', body: 'Details to be added.' },
        { heading: '[Reason 3 heading]', body: 'Details to be added.' },
        { heading: '[Reason 4 heading]', body: 'Details to be added.' },
      ],
    },
    faqs: [
      { q: '[FAQ question 1]', a: 'Answer to be added.' },
      { q: '[FAQ question 2]', a: 'Answer to be added.' },
    ],
  }
}

export const upgradCourses: UpgradCourse[] = [
  {
    slug: 'cto-ai-leadership-iiitb-iimu',
    name: 'Chief Technology Officer & AI Leadership Programme',
    university: 'IIIT-Bangalore & IIM Udaipur',
    eyebrow: 'Deep Tech + Business Leadership',
    tagline:
      "India's only dual-school CTO programme combining deep-tech mastery, production AI, P&L ownership and boardroom leadership. Transform from engineering leader into an AI-first CTO.",
    duration: '6 Months · Hybrid',
    fee: 'INR 3,65,000',
    seatBlock: '₹50,000',
    admissionDeadline: '31 July 2026',
    eligibility: "Bachelor's degree with a minimum of 8 years of work experience.",
    syllabusUrl: '/brochures/degrees/cto-ai-leadership-syllabus.html',
    brochureUrl: '/brochures/degrees/cto-ai-leadership-syllabus.html',
    highlights: [
      'Live sessions by faculty & practising CTOs',
      'Double executive alumni status: IIIT-B + IIM Udaipur',
      'AI Success Planning workshop at IIIT-B campus',
      'Strategic CTO Dossier — the only such programme in India',
      '8 modules across Tech + AI + Strategy + Leadership',
      'Peer cohort networking & leadership strength assessments',
    ],
    certificate: {
      title: 'Chief Technology Officer & AI Leadership Programme',
      issuers: ['IIIT-Bangalore', 'IIM Udaipur'],
      note: 'A jointly issued dual-institute certificate plus double executive alumni status on programme completion.',
      imageUrl: '/images/site/doctoral/cto-ai-leadership-iiitb-iimu/cto_%26_ai_certificate.webp',
    },
    audienceSpriteUrl: '/images/site/doctoral/cto-ai-leadership-iiitb-iimu/who_is_this_program_for.webp',
    audience: [
      { role: 'Technology Director / VP Engineering', description: 'You lead strong teams and want to shape strategy — seeking P&L clarity, clear communication, and broader leadership.' },
      { role: 'Principal / Senior Engineering Manager', description: 'You aim for VP or CTO roles and seek executive presence, deeper technical insight, and sharper decision-making.' },
      { role: 'Early-Stage or First-Time CTO', description: 'You hold the title and want stronger strategic impact — defining vision, guiding product direction, communicating decisions.' },
      { role: 'Tech Entrepreneur / Founder', description: 'You are building an AI-first company and want clarity on architecture, AI priorities, and how to scale.' },
    ],
    fourSteps: [
      { title: 'Tech & AI Leadership — IIIT-Bangalore', desc: 'Cloud-native systems, cyber resilience, data foundations for GenAI/RAG, MLOps/LLMOps & Agentic AI.' },
      { title: 'AI & Strategy Workshop at IIIT-B', desc: '2-Day AI Success Planning workshop, CTO-level problem framing, enterprise AI governance frameworks.' },
      { title: 'Business, Strategy & P&L Leadership — IIM Udaipur', desc: 'AI-led strategy roadmap, P&L ownership, boardroom communication, building AI-ready tech orgs.' },
      { title: 'Capstone — Board-Ready CTO Dossier', desc: 'Full boardroom deck synthesising tech strategy, AI roadmap, investment logic and risk governance.' },
    ],
    curriculum: [
      { code: 'C1 · IIIT-B', title: 'Foundations of AI and Gen AI Landscape', weeks: '3 Weeks', topics: ['Design data strategies that create competitive moats', 'Assess enterprise AI readiness using maturity models', 'Architect responsible, scalable AI systems from classical ML to GenAI and agentic workflows'], deliverable: 'Platform Architecture Blueprint' },
      { code: 'C2 · IIIT-B', title: 'Scaling AI: MLOps, LLMOps, RAG Systems & Agentic AI', weeks: '3 Weeks', topics: ['Build production-grade AI systems with end-to-end lifecycle management', 'Operationalize AI at scale using MLOps and LLMOps best practices', 'Define operating models, governance, and ROI frameworks'], deliverable: 'Technology Risk & Security Governance Framework' },
      { code: 'C3 · IIIT-B', title: 'Next-Gen Platform Engineering: Cloud, APIs & Distributed Systems', weeks: '3 Weeks', topics: ['Design scalable, cloud-native platform architectures', 'Make informed build-buy-partner decisions using TCO', 'Apply modern platform engineering principles for productivity & reliability'], deliverable: 'Enterprise AI Opportunity Map' },
      { code: 'C4 · IIIT-B', title: 'Cyber Resilience: Risk, Compliance & Trust Engineering', weeks: '3 Weeks', topics: ['Build enterprise-wide cyber and technology risk governance', 'Design resilience strategies: continuity, disaster recovery', 'Embed AI governance, security controls, and trust mechanisms'], deliverable: 'AI Initiative Pipeline & Implementation Roadmap' },
      { code: 'C5 · IIMU', title: 'Strategic Value Mapping: AI & Platform Ideas into Business Outcomes', weeks: '3 Weeks', topics: ['Technology vision, strategic anchors, value-driver mapping', 'CTO-CPO product partnership & AI-infused product strategy', 'Platform vs pipeline economics, network effects, digital moat design'], deliverable: '18-24 Month Technology & Product Strategy Roadmap' },
      { code: 'C6 · IIMU', title: 'Financial Leadership: Tech ROI, P&L Ownership & Value Creation', weeks: '3 Weeks', topics: ['Technology as a P&L center: revenue, margin, risk levers', 'FinOps: cloud unit economics, AI model costing, monetization', 'ROI frameworks, real-options valuation, M&A tech due diligence'], deliverable: 'Technology Investment Case & Valuation Narrative' },
      { code: 'C7 · IIMU', title: 'CTO Executive Presence: Storytelling, Influence & Decision Leadership', weeks: '3 Weeks', topics: ['Executive narratives & board-level investment cases', 'Objection handling and trade-off framing', 'Crisis communication, executive presence, coalition-building'], deliverable: 'Board-Ready CTO Presentation Deck' },
      { code: 'C8 · IIMU', title: 'Building AI-Ready Tech Organizations & High-Performance Teams', weeks: '3 Weeks', topics: ['Organization design: platform, product, and AI guild models', 'AI talent strategy: skills architecture & sourcing models', 'Leading transformation: culture, operating rhythms, inclusive leadership'], deliverable: 'AI-Ready Organization & Talent Blueprint' },
      { title: 'Immersion & Integrated Capstone: CTO & AI Strategic Dossier', topics: ['2-Day AI Success Planning & Strategy Workshop at IIIT-B campus', 'Consolidate all 8 module deliverables into a board-ready dossier'], deliverable: 'CTO Board-Level Strategy Deck' },
    ],
    mentors: [
      {
        name: 'Prof. Kunal Kamal Kumar',
        role: 'Program Director',
        institute: 'IIM Udaipur',
        bio: "Blends academic rigour with real-world experience, providing expert insights into leadership and organisational dynamics. Known for dynamic facilitation and mastery of adult learning methodologies, consistently earning high student ratings. Accolades include 'Professor of the Year' from InsideIIM.com.",
        photoUrl: '/images/site/doctoral/cto-ai-leadership-iiitb-iimu/kunal.webp',
        linkedinUrl: 'https://faculty.iimu.ac.in/kunal-kamal-kumar/',
      },
      {
        name: 'Prof. Shankar Prakash',
        role: 'Program Director',
        institute: 'IIM Udaipur',
        bio: 'Executive Fellow in Management and PGP alumnus from ISB Hyderabad. Led global strategy and planning for IBM’s Application Services business and has worked with firms like EY. Adjunct Professor at IIM Udaipur, bringing expertise in business strategy, analytics, and operations.',
        photoUrl: '/images/site/doctoral/cto-ai-leadership-iiitb-iimu/shankar.webp',
        linkedinUrl: 'https://www.linkedin.com/in/shankarprakash/',
      },
      {
        name: 'Prof. C. Ramanathan',
        role: 'Dean (Academics)',
        institute: 'IIIT-Bangalore',
        bio: 'Ph.D. from MSU with 25+ years of Data & Software Engineering experience, ranked amongst the top data academicians in India.',
        photoUrl: '/images/site/doctoral/cto-ai-leadership-iiitb-iimu/ramanathan.webp',
        linkedinUrl: 'https://www.linkedin.com/in/chandrashekar-ramanathan-4231412/',
      },
      {
        name: 'Prof. Gopalakrishnan S.',
        role: 'Professor',
        institute: 'IIIT-Bangalore',
        bio: 'Partner at Performance Engineering Associates with a PhD in Computer Science from IIT Kanpur. 18+ years leading high-performance IT systems at Infosys and as CTO at Aztecsoft (now Mindtree). Published over a dozen papers on performance-critical systems and quality assessment.',
        photoUrl: '/images/site/doctoral/cto-ai-leadership-iiitb-iimu/Gopalakrishnan.webp',
        linkedinUrl: 'https://www.linkedin.com/in/gopalakrishnan-srinivasaraghavan-43b4b9/',
      },
      {
        name: 'Prof. V. Sridhar',
        role: 'Professor',
        institute: 'IIIT-Bangalore',
        bio: 'Professor at the Centre for IT and Public Policy, IIIT Bangalore, and a leading authority on telecom and ICT regulation. Authored four books and 300+ articles on telecom policy and spectrum management. Taught across the USA, Finland, New Zealand and India; served on Government of India committees.',
        photoUrl: '/images/site/doctoral/cto-ai-leadership-iiitb-iimu/sridhar.webp',
        linkedinUrl: 'https://www.linkedin.com/in/varadharajansridhar/',
      },
    ],
    caseStudies: [
      { company: 'Maersk', title: 'AI-Optimized Global Shipping', description: 'How much can be saved when AI plans every voyage, fuel burn, and maintenance cycle across the world’s largest shipping fleet?' },
      { company: 'FMCG Enterprise', title: 'Demand Forecasting Weeks Before Weather Hits', description: 'How does an FMCG giant prepare production when algorithms predict demand spikes?' },
      { company: 'Deutsche Bank', title: 'Lifting a Live FX Trading Platform onto Distributed Cloud', description: 'What does it take to move a global trading system to distributed cloud without dropping a single trade or breaking compliance?' },
      { company: 'Retail Enterprise', title: 'Digital Twins for Every Store', description: 'What kind of tech stack keeps every shelf, aisle, and product mirrored digitally, with algorithms directing micro-level inventory moves?' },
      { company: 'Global Fashion Retailer', title: 'Fashion Powered by a Unified AI Brain', description: 'What happens when design, demand forecasting, and omnichannel marketing are run from a single AI brain built on Google Cloud?' },
      { company: 'Marks & Spencer', title: 'Real-Time Personalisation at Scale', description: 'How do you turn a legacy loyalty card into a real-time personalization engine that adapts offers for millions of shoppers instantly?' },
      { company: 'Nike', title: 'Predicting What Sells Before It Exists', description: 'How do sneaker launches get planned when models can predict which design, colorway, and size will sell out before production?' },
      { company: 'American Express', title: 'Real-Time Fraud Detection at Billion-Transaction Scale', description: 'How do you decide in milliseconds whether to approve or block a transaction when the cost of a wrong decision is enormous?' },
      { company: 'JPMorgan Chase', title: 'AI Watching Every Contract, Payment & Fraud Signal', description: 'What happens when every transaction, contract, and anomaly is scanned continuously by models that never sleep?' },
    ],
    admissionSteps: [
      { title: 'Submit Application', desc: 'Submit your application and our admissions committee will review your details.' },
      { title: 'Receive Offer Letter', desc: 'Once shortlisted, you will receive an offer letter.' },
      { title: 'Reserve Your Seat', desc: 'Confirm your candidature by paying the block amount.' },
    ],
    batchProfile: [
      {
        title: 'Work Experience',
        items: [
          { label: '20+ years', value: '~40%' },
          { label: '15–19 years', value: '~30%' },
          { label: '10–14 years', value: '~15%' },
          { label: 'Less than 10', value: '~15%' },
        ],
      },
      {
        title: 'Top Industries',
        items: [
          { label: 'IT / Technology Services', value: '✔' },
          { label: 'BFSI & Financial Services', value: '✔' },
          { label: 'Telecom', value: '✔' },
          { label: 'Enterprise Software & SaaS', value: '✔' },
        ],
      },
      {
        title: 'Top Titles',
        items: [
          { label: 'Directors & Associate Directors (Tech)', value: '✔' },
          { label: 'VPs — Technology / Engineering', value: '✔' },
          { label: 'Senior Architects & Platform Leaders', value: '✔' },
          { label: 'Product & Automation Leaders', value: '✔' },
        ],
      },
    ],
    whySection: {
      title: 'Why a Chief Technology Officer Programme Matters in 2026',
      sections: [
        { heading: 'Skyrocketing demand for strategic tech leaders', body: 'As digital transformation accelerates across every industry, the CTO role has evolved from a technical function into a strategic, business-shaping seat at the table. Organisations increasingly need leaders who can align technology with growth, not just keep the lights on.' },
        { heading: 'Who should pursue this programme', body: 'Technology leaders currently holding roles like CTO, VP Engineering, Director of Technology, or Co-Founder in tech-driven companies; professionals with 8+ years of experience in engineering, digital platforms, or enterprise architecture aiming for the C-suite; and strategic thinkers who want to align technology with business outcomes and communicate at board level.' },
        { heading: 'What sets this programme apart', body: 'This is India’s only dual-institute certification combining IIM Udaipur’s strategic leadership expertise with IIIT-Bangalore’s technology depth — built specifically for senior professionals bridging business and advanced technology leadership.' },
        { heading: 'Career impact', body: 'Graduates typically progress into roles like Chief Technology Officer, Head of Engineering, Chief Innovation Officer, or VP of Product & Technology — positions with significant leadership visibility, board access, and strategic influence over enterprise direction.' },
      ],
    },
    faqs: [
      { q: 'What is a Chief Technology Officer (CTO)?', a: 'A CTO is a senior executive who shapes an organization’s technology strategy and innovation roadmap, ensuring technology investments drive business growth and long-term competitiveness.' },
      { q: 'What makes this CTO programme unique?', a: 'It combines IIM Udaipur’s strategic leadership expertise with IIIT-Bangalore’s technology depth — built specifically for senior professionals bridging business and advanced technology leadership.' },
      { q: 'What is the duration and format?', a: 'The programme runs for about 6 months in a flexible, hybrid format with live sessions, industry mentorship, and self-paced modules tailored for working professionals.' },
      { q: 'What is the fee?', a: 'The programme fee is INR 3,65,000. You can reserve your seat with an initial block payment of ₹50,000. Flexible EMI and financing options are available.' },
      { q: 'Who should apply?', a: 'Senior technology professionals, product leaders, and engineering managers with a minimum of 8 years of experience who want to transition from hands-on roles to executive leadership.' },
      { q: 'Do I need a technical background?', a: 'A technical or engineering background is preferred. Senior business leaders managing tech-driven functions can also apply to strengthen their AI strategy and leadership skills.' },
      { q: 'Can I study while working full-time?', a: 'Yes. The programme is designed for working professionals with weekend classes, online modules, and flexible schedules.' },
      { q: 'What certification do I receive?', a: 'A joint certification from IIM Udaipur and IIIT-Bangalore, plus double executive alumni status.' },
    ],
    confirmed: true,
  },
  {
    slug: 'global-dba-ssbm',
    name: 'Global Doctor of Business Administration',
    university: 'Swiss School of Business and Management (SSBM)',
    eyebrow: 'Doctorate · Popular',
    tagline: 'SSBM Doctor of Business Administration helps you build business expertise and leadership skills. Learn online with 19+ specializations and PwC board advisory certification to prepare for top roles like CEO, CFO.',
    duration: '36 Months',
    fee: 'INR 7,50,000 (without immersion) · INR 10,50,000 (with immersion)',
    seatBlock: 'INR 25,000',
    admissionDeadline: '31 Jul 2026',
    eligibility: "Bachelor's degree with minimum 5 years of experience, or a Master's degree.",
    highlights: [
      'Release your Doctoral dissertation as a book',
      'Teach in UGC-recognised colleges in your free time',
      'Prototype and pilot your ideas with no-code platforms',
      'Protect your ideas with solid IPs in 155 countries',
      'Pitch your ideas to real VCs with chequebooks',
      'Optional PwC Board Advisory Certification — board governance, ethics, finance, risk & stakeholder readiness',
      'Triple accreditation (EduQua, BAC, ACBSP) with 300+ graduates across a 75+ nationality network',
    ],
    certificate: {
      title: 'Global Doctor of Business Administration',
      issuers: ['SSBM Geneva'],
      note: 'Receive the same world-class education and global recognition as on-campus doctorates without the need to relocate. Accredited by top Swiss, British and American agencies, plus an NSDC certification recognised by the Indian Ministry of Skill Development.',
      imageUrl: '/images/site/doctoral/global-dba-ssbm/certificate.webp',
    },
    accreditations: [
      { name: 'Swiss Accreditation (EduQua)', body: "EduQua is Switzerland's official and premier accreditation body for continuing education." },
      { name: 'British Accreditation (BAC)', body: "BAC is the UK's leading and official accreditation body for business education." },
      { name: 'American Accreditation (ACBSP)', body: "ACBSP is America's premier accreditation body for business schools & programs worldwide." },
      { name: 'CHEA Accredited', body: 'The Council for Higher Education Accreditation (CHEA) is a United States organization of degree-granting colleges and universities.' },
      { name: 'OTHM Center', body: 'SSBM Geneva is an authorized OTHM center — a UK-based Awarding Organisation approved and regulated by Ofqual.' },
      { name: 'AACSB Member', body: 'Signifies a business school that has met the rigorous standards set by the Association to Advance Collegiate Schools of Business.' },
    ],
    audienceImageStyle: 'rect',
    audience: [
      {
        role: 'Unstoppable Leaders',
        description: 'Those who go deeper to climb higher, and never stop creating business impact. A doctorate signals deep domain expertise and elevates leadership stature.',
        imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
      },
      {
        role: 'Managerial Mentors',
        description: 'Masters of their craft, eager to bring industry experience to classrooms — gaining both the expertise and the credentials to guide the next generation.',
        imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
      },
      {
        role: 'Independent Veterans',
        description: 'Experienced professionals moving into independent & entrepreneurial roles, using the doctorate as a powerful credential to influence the leaders who consult them.',
        imageUrl: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80',
      },
    ],
    curriculum: [
      { title: 'Research Methodology I', deliverable: 'Concept Paper' },
      { title: 'Research Methodology II', deliverable: 'Literature Review' },
      { title: 'Research Proposal', deliverable: 'Research Proposal' },
      { title: 'Thesis Writing', deliverable: 'Dissertation/Thesis' },
    ],
    mentorsAvatarStyle: 'circle',
    mentors: [
      { name: 'Hemant Palivela', role: 'Instructor · PhD, Computer Engineering', institute: 'SSBM Geneva', bio: 'Head of AI and Machine Learning at eClerx Services Ltd. Recognised among India’s top 40 Data Scientists.', photoUrl: '/images/site/doctoral/global-dba-ssbm/hemant.webp', linkedinUrl: 'https://www.ssbm.ch/personnel/hemant-palivela-phd/' },
      { name: 'Josip Burušić', role: 'Instructor · PhD', institute: 'SSBM Geneva', bio: 'A leading academic in education and human capital studies; Head of the Research Centre for Knowledge, Education and Society.', photoUrl: '/images/site/doctoral/global-dba-ssbm/josip.webp', linkedinUrl: 'https://www.ssbm.ch/personnel/josip-burusic-phd/' },
      { name: 'Hrvoje Volarević', role: 'Instructor · PhD, Faculty of Economics', institute: 'SSBM Geneva', bio: 'Over two decades of experience in finance and accounting. Senior Advisor at the Croatian National Bank since 1997.', photoUrl: '/images/site/doctoral/global-dba-ssbm/hrvoje.webp', linkedinUrl: 'https://www.linkedin.com/in/hrvoje-volarevi%C4%87-phd-7bb7827/?originalSubdomain=hr' },
      { name: 'Derrald Stice', role: 'Instructor · Ph.D', institute: 'SSBM Geneva', bio: 'Associate Professor of Accounting at the University of Hong Kong (HKU), specialising in capital markets.', photoUrl: '/images/site/doctoral/global-dba-ssbm/derrald.webp', linkedinUrl: 'https://www.ssbm.ch/personnel/derrald-stice-ph-d/' },
      { name: 'Jaka Vadnjal', role: 'Instructor · PhD', institute: 'SSBM Geneva', bio: 'Holds a Ph.D. from the University of Ljubljana and is an independent business consultant; served as President of the Management Society.', photoUrl: '/images/site/doctoral/global-dba-ssbm/jaka.webp', linkedinUrl: 'https://www.ssbm.ch/personnel/jaka-vadnjal-phd/' },
      { name: 'Alex E. Asampong', role: 'Instructor · EDBA', institute: 'SSBM Geneva', bio: 'A seasoned educator and consultant based in the Netherlands, holding an Executive Doctor of Business Administration.', photoUrl: '/images/site/doctoral/global-dba-ssbm/alex.webp', linkedinUrl: 'https://www.ssbm.ch/personnel/alex-e-asampong-dba/' },
      { name: 'Iva Buljubašić', role: 'Instructor · PhD', institute: 'SSBM Geneva', bio: 'Assistant Professor at the Academy of Arts and Culture in Osijek, Department for Culture, Media and Management.', photoUrl: '/images/site/doctoral/global-dba-ssbm/iva.webp', linkedinUrl: 'https://www.ssbm.ch/personnel/iva-buljubasic-phd/' },
      { name: 'David Annan', role: 'Instructor · PhD, University of Fort Hare', institute: 'SSBM Geneva', bio: 'Holds a PhD in Development Studies (Economic Development) from the University of Fort Hare and a Doctorate in Business Administration.', photoUrl: '/images/site/doctoral/global-dba-ssbm/david.webp', linkedinUrl: 'https://www.ssbm.ch/personnel/david-annan-phd/' },
      { name: 'Anna L. Provodnikova', role: 'Instructor · PhD', institute: 'SSBM Geneva', bio: 'A strategic management expert with a PhD and an MBA in Management from National American University.', photoUrl: '/images/site/doctoral/global-dba-ssbm/anna.webp', linkedinUrl: 'https://www.ssbm.ch/personnel/anna-l-provodnikova-phd/' },
      { name: 'George Iatridis', role: 'Instructor · PhD', institute: 'SSBM Geneva', bio: 'Professor of Accounting and Finance at the University of Thessaly, Greece, and a DBA mentor at SSBM Geneva.', photoUrl: '/images/site/doctoral/global-dba-ssbm/george.webp', linkedinUrl: 'https://www.ssbm.ch/personnel/george-iatridis-phd/' },
      { name: 'Mario Silic', role: 'Industry Expert · PhD, University of St Gallen, Switzerland', institute: 'SSBM Geneva', bio: 'A highly experienced global leader with 25+ years in IT management, project management, and systems engineering.', photoUrl: '/images/site/doctoral/global-dba-ssbm/mario.webp', linkedinUrl: 'https://www.linkedin.com/in/mario-silic-2621105/?originalSubdomain=hr' },
      { name: 'Dario Silic', role: 'Industry Expert · PhD, University of Lyon 2, France', institute: 'SSBM Geneva', bio: 'Chief Executive Officer of Bina-Istra d.d., a Croatian concessionaire within the French Bouygues Construction group.', photoUrl: '/images/site/doctoral/global-dba-ssbm/dario.webp', linkedinUrl: 'https://www.ssbm.ch/personnel/dario-silic-phd/' },
      { name: 'Andrea Patrucco', role: 'Industry Expert · PhD, Penn State, USA', institute: 'SSBM Geneva', bio: 'Assistant Professor of Supply Chain Management at Florida International University’s College of Business.', photoUrl: '/images/site/doctoral/global-dba-ssbm/andrea.webp', linkedinUrl: 'https://www.ssbm.ch/personnel/andrea-patrucco-phd/' },
      { name: 'Giacomo Marzi', role: 'Industry Expert · PhD, University of Lincoln, UK', institute: 'SSBM Geneva', bio: 'Associate Professor of Management at IMT School for Advanced Studies Lucca; previously Senior Lecturer.', photoUrl: '/images/site/doctoral/global-dba-ssbm/giacomo.webp', linkedinUrl: 'https://www.ssbm.ch/personnel/giacomo-marzi-phd/' },
      { name: 'Velimir Srića', role: 'Industry Expert · PhD, University of Zagreb', institute: 'SSBM Geneva', bio: 'Professor of Management at the University of Zagreb and a visiting professor at UCLA, holding a PhD in IT Management.', photoUrl: '/images/site/doctoral/global-dba-ssbm/velimir.webp', linkedinUrl: 'https://www.ssbm.ch/personnel/velimir-srica-phd/' },
    ],
    admissionSteps: [
      { title: 'Launch Your Application', desc: 'Fill out the application form, showcasing your work experience and educational background. Our admissions committee reviews your potential.' },
      { title: 'Celebrate Your Offer', desc: 'If your application shines, you will receive an offer letter — the key to unlocking your doctoral journey.' },
      { title: 'Secure Your Spot', desc: 'Reserve your doctoral seat with a deposit of INR 25,000 and begin your journey into research and innovation.' },
    ],
    whySection: {
      title: 'Why Global Doctor of Business Administration from SSBM Matters in 2026',
      sections: [
        { heading: 'Rising demand for research-driven business leaders', body: 'In a world shaped by innovation, global markets, and data-driven decisions, senior leaders need more than experience to stay ahead. A Global DBA helps professionals build advanced business expertise that supports long-term growth and high-impact decisions.' },
        { heading: 'Who should pursue this programme', body: 'Experienced business leaders such as CEOs, CXOs, directors, senior managers, founders and professionals with 5–10+ years of experience in business, management, consulting, operations, finance, marketing, HR, technology or entrepreneurship, looking to advance into senior leadership roles.' },
        { heading: 'What sets this programme apart', body: 'Triple accreditation from EduQua (Switzerland), BAC (UK) and ACBSP (USA), a fully online and flexible format built for working professionals, 19+ specializations, 1:1 thesis supervision, and an optional PwC Board Advisory Certification.' },
        { heading: 'Career impact', body: 'A globally accredited DBA opens doors to senior roles like CEO, CFO, Business Strategy Director, Senior Management Consultant and Professor, and can lead to opportunities beyond corporate roles — publishing your dissertation as a book, teaching, consulting independently, or pitching to investors.' },
      ],
    },
    faqs: [
      { q: 'What specializations can I choose in the SSBM Doctor of Business Administration?', a: 'You can pick from 19+ specializations, including Global & International Management, Cybersecurity Management, HR, Tax Management, Finance & Banking, Marketing, Operations, Strategic Management, Entrepreneurship, IT Management, Energy, Healthcare, Data Science, Machine Learning, International Business Leadership, Global Supply Chain, Accounting, and AML Compliance.' },
      { q: 'Is the SSBM Doctor of Business Administration fully online and flexible?', a: 'Yes. It is delivered in an online (or partly blended) format designed to fit around your job and life — access materials online, do project work, and manage your dissertation with remote support.' },
      { q: 'What kind of faculty support and research resources do you get?', a: 'You get 1:1 thesis supervision by experienced professors, strong industry collaborations (70+ industry partners), networking, mentor feedback, and help with your research proposal and dissertation.' },
      { q: 'What are the benefits of doing this DBA for my career?', a: 'It can help you reach top leadership roles such as CFO, CEO, or senior executive, building skills in data analytics, strategic thinking, and leadership, with specialization and industry advisory board certifications that help you stand out.' },
      { q: 'How much do I pay to block my seat?', a: 'To block your seat you need to pay INR 25,000. This confirms your enrollment and gives you access to the programme’s course materials.' },
      { q: 'What is the programme fee?', a: 'Without Immersion: INR 7,50,000 (no tax applicable). With Immersion: INR 10,50,000 (no tax applicable).' },
      { q: 'What is the refund policy for this programme?', a: 'You may request a refund at any time before the Cohort Commencement Date via the "My Application" section on upgrad.com; a processing fee of ₹10,000 applies. Once the programme commences, no refund request will be considered. Refer to your Programme Offer Letter for full terms.' },
      { q: 'Who is this programme for?', a: 'A part-time Global DBA for working professionals looking to transition into the C-suite, and senior management professionals looking to become experts in their domain of choice.' },
      { q: 'What is the minimum eligibility for this programme?', a: "A Bachelor's degree with at least 5 years of work experience, or a Master's degree." },
      { q: 'What is the admission process?', a: 'Complete the application form with your academic and career details, the admissions committee reviews your profile, and if selected you receive an offer letter. Confirm your seat with payment to get access to course materials and start the programme.' },
    ],
    confirmed: true,
  },
  {
    slug: 'dba-edgewood',
    name: 'Doctorate of Business Administration',
    university: 'Edgewood University',
    eyebrow: 'Doctorate',
    tagline: 'Designed for leaders with a clear business or industry problem in sight, this accelerated Doctorate program lets you dive straight into solutioning by developing a business plan as part of your thesis.',
    duration: '24 Months',
    fee: 'INR 9,50,000 (INR 23,000/month)',
    admissionDeadline: '31 Jul 2026',
    eligibility: "Valid Master's degree. No GRE/GMAT required.",
    syllabusUrl: '/brochures/degrees/dba-edgewood-syllabus.html',
    brochureUrl: '/brochures/degrees/dba-edgewood-syllabus.html',
    highlights: [
      'Earn a PwC Board Advisory Certification',
      'Release your Doctoral dissertation as a book',
      'Teach in UGC-recognised colleges in your free time',
      'Prototype and pilot your ideas with no-code platforms',
      'Protect your ideas with solid IPs in 155 countries',
      'Pitch your ideas to real VCs with chequebooks',
      'HLC accredited · 100% online format',
    ],
    certificate: {
      title: 'Doctorate of Business Administration',
      issuers: ['Edgewood University'],
      note: 'Same doctorate as on-campus, without needing to relocate. HLC-accredited, NSDC-recognised certification aligned with Indian Ministry of Skill Development standards.',
      imageUrl: '/images/site/doctoral/dba-edgewood/certificate.webp',
    },
    accreditations: [
      { name: 'Higher Learning Commission (HLC)', body: 'Edgewood University is accredited by the Higher Learning Commission, one of seven accrediting commissions recognized by CHEA, and by the US Department of Education.' },
      { name: 'WES Accreditation', body: 'WES Accreditation is one of the most widely accepted and respected forms of recognition for a degree, easing credential evaluation abroad.' },
    ],
    audienceImageStyle: 'rect',
    audience: [
      {
        role: 'Unstoppable Leaders',
        description: 'Those who go deeper to climb higher, and never stop creating business impact. A doctorate signals deep domain expertise and elevates leadership stature.',
        imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80',
      },
      {
        role: 'Managerial Mentors',
        description: 'Masters of their craft, eager to bring industry experience to classrooms — gaining both the expertise and the credentials to guide the next generation.',
        imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80',
      },
      {
        role: 'Independent Veterans',
        description: 'Experienced professionals moving into independent & entrepreneurial roles, using the doctorate as a powerful credential to influence the leaders who consult them.',
        imageUrl: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=400&q=80',
      },
    ],
    fourSteps: [
      { title: 'Develop Core Research Skills', desc: 'Gain expertise in advanced research methodologies and understand how to drive impactful business insights.' },
      { title: 'Sharpen Your Expertise Through Specializations', desc: 'Grasp essential and in-depth insights through specialization courses — choose from 2 industry-relevant specializations.' },
      { title: 'Master Advanced Business-Focused Courses', desc: 'Learn advanced business and management skills and apply management concepts to real-world business problems.' },
      { title: 'Conduct Applied Doctoral Research', desc: 'Showcase your expertise by conducting industry-relevant academic research and defend it in front of an expert committee.' },
    ],
    curriculum: [
      { code: 'BUS 901', title: 'Academic Scholarship and Doctoral Studies', topics: ['Introduction to Business Research', 'Identification of the Research Problem', 'Determination of the Research Design', 'Identification of the Sampling and Data Collection Strategy', 'Determination of the Data Analysis Strategy', 'Presenting Results'] },
      { code: 'BUS 903', title: 'Analyzing Behavior in Organizations', topics: ['Making Sense of Organizations', 'The Structural Frame', 'The Human Resource Frame', 'The Political Frame', 'The Symbolic Frame', 'Leadership Practice'] },
      { code: 'BUS 920', title: 'Quantitative Analysis I: Quantitative Research and Analysis', topics: ['Working with Data', 'Linear Regression', 'Multiple Regression', 'Regression Interpretation', 'Linear Regression Assumptions'] },
      { code: 'BUS 921', title: 'Qualitative Research', topics: ['Narrative Methodology', 'Phenomenological Methodology', 'Grounded Theory Methodology', 'Ethnographic Methodology', 'Case Study Methodology', 'Qualitative Data Collection and Analysis'] },
      { code: 'BUS 922', title: 'Quantitative Analysis II: Applied Regression Analysis', topics: ['Review and Adjustments to OLS', 'Non-OLS Estimation', 'Limited Dependent Variable Models', 'Panel Data', 'Time Series Data', 'Event Studies'] },
      { code: 'BUS 902', title: 'Business Ethics & Sustainability', topics: ['Introduction to Ethics, Dominican Values, and Four Theories', 'Consequentialism and Partnership', 'Deontology', 'Virtue Ethics', 'Social Contract Theory', 'Sustainability Strategies and Ethics'] },
      { code: 'BUS 910', title: 'Financial Decision-Making and Value Creation', topics: ['Asset Pricing', 'Market Efficiency', 'Frictions and Incentives', 'Corporate Finance', 'Derivative Securities', 'Behavioral Finance', 'Market Microstructure'] },
      { code: 'BUS 904', title: 'Executive Supply Chain Strategy and Negotiations', topics: ['Inventory, Cost, and Forecasting', 'Demand Forecasting', 'Probability-Based Control and Multiechelon Systems', 'Supply Chain: Finance, Market, and Winning Orders', 'Supply Chain: The Supply Side Perspective', 'Negotiations: Culture and Engagement', 'Negotiations: Perspective and Agreement'] },
      { code: 'DBUS 930', title: 'Applied Doctoral Research Proposal I', weeks: '8 Weeks', topics: ['Apply the fundamentals of research writing and how the principles of business research writing are followed in the applied doctoral research deliverable.'] },
      { code: 'DBUS 931', title: 'Applied Doctoral Research Proposal II', weeks: '8 Weeks', topics: ['Synthesis of sufficient academic and business literature to support the need to address the proposed business problem or question.'] },
      { code: 'DBUS 932', title: 'Applied Doctoral Research: Findings and Conclusions', weeks: '8 Weeks', topics: ['Report the findings based on the analysis of collected data.'] },
      { code: 'DBUS 933', title: 'Applied Doctoral Research Defense and Completion', weeks: '8 Weeks', topics: ['Recommend solutions to address the problem or question based on findings, and prepare an execution plan.'] },
    ],
    mentors: [
      {
        name: 'Dr. Victoria Palmisano',
        role: 'Associate Dean of Business, Communication and Innovation',
        institute: 'Edgewood University',
        bio: 'PhD in Educational Leadership, MBA, and Masters in Legal Studies, specializing in small business management and innovation.',
        photoUrl: '/images/site/doctoral/dba-edgewood/victoria-palmisano.webp',
        linkedinUrl: 'https://www.linkedin.com/in/victoria-palmisano-ph-d-34b93546/',
      },
      {
        name: 'Dr. Leigh Maxwell',
        role: 'Professor · 17 Years of Experience',
        institute: 'Edgewood University',
        bio: 'PhD from Ohio State; associate professor teaching Communication Studies, with a research focus on organizational communication.',
        photoUrl: '/images/site/doctoral/dba-edgewood/leigh-maxwell.webp',
        linkedinUrl: 'https://www.linkedin.com/in/leighmaxwell1',
      },
      {
        name: 'Dr. Chris Albert',
        role: 'Accounting Faculty',
        institute: 'Edgewood University',
        bio: 'Accounting executive turned lecturer with broad financial experience — after years as a CFO, now mentors future accounting professionals.',
        photoUrl: '/images/site/doctoral/dba-edgewood/chris-albert.webp',
        linkedinUrl: 'https://www.linkedin.com/in/christine-albert-a899479/',
      },
      {
        name: 'Dr. Raj Kamal',
        role: 'Senior Lecturer, Business and Health Sciences',
        institute: 'Edgewood University',
        bio: '25+ years of teaching and consulting experience as a recognized and awarded educator, consulting with Fortune 500 and mid-sized companies.',
        photoUrl: '/images/site/doctoral/dba-edgewood/raj-kamal.webp',
        linkedinUrl: 'https://www.linkedin.com/in/rakamal/',
      },
    ],
    admissionSteps: [
      { title: 'Complete Application', desc: 'Complete your application on the upGrad platform, including your education and work experience.' },
      { title: 'Submit your SOP', desc: 'Email your Statement of Purpose to onlineadmissions@edgewood.edu on why Edgewood University.' },
      { title: 'Admissions Review and Acceptance', desc: 'The EC Admissions committee will review your candidacy — if admitted, you will be notified.' },
    ],
    whySection: {
      title: 'Why Choose a Doctorate of Business Administration from Edgewood University',
      sections: [
        { heading: 'Rising demand for accelerated, career-ready doctorates', body: 'Executive and strategic roles are expected to grow by 6% by 2033 (U.S. Bureau of Labor Statistics). Graduates of Edgewood’s DBA programme often advance to C-suite positions within a year, moving into roles like Strategy Director, VP of Operations, or Management Consultant.' },
        { heading: 'Who should pursue this programme', body: 'Working professionals with a clear business or industry problem in sight, who want to dive straight into solutioning by developing a business plan as part of their thesis — typically at least 10 years into their career.' },
        { heading: 'What sets this programme apart', body: '100% online with no GRE/GMAT required, 2 industry-relevant specializations (Leadership and Finance), 1:1 thesis supervision, and accreditation from HLC, ACBSP and WES.' },
        { heading: 'Career impact', body: 'Graduates move into roles such as Chief Executive Officer (INR 29 LPA), Strategic Business Advisor (INR 25 LPA), Management Consultant (INR 22 LPA), and Business Research Analyst (INR 9 LPA).' },
      ],
    },
    faqs: [
      { q: 'What is a Doctorate of Business Administration (DBA)?', a: 'An advanced degree that equips experienced professionals with the skills needed to take on leadership roles and solve complex business problems, blending academic research with real-world business strategies.' },
      { q: 'What skills will I gain in the DBA program from Edgewood University?', a: 'Strategic leadership, advanced research, change management, financial expertise, global business perspective, ethical leadership, and consulting/teaching skills.' },
      { q: 'What is the cost of the Doctorate of Business Administration from Edgewood University?', a: 'INR 9,50,000 in total, starting at INR 23,000/month. No-cost and standard EMI options are available.' },
      { q: 'What are the eligibility requirements?', a: "A valid Master's degree. The admissions committee assesses your application based on academic and professional background." },
      { q: 'Do I need to take the GRE or GMAT to apply?', a: 'No. GRE/GMAT scores are not required for admission.' },
      { q: 'What is Edgewood University’s reputation and accreditation?', a: 'Founded in 1927 in Madison, Wisconsin, Edgewood University is accredited by the Higher Learning Commission (HLC), one of seven accrediting commissions recognized by CHEA.' },
      { q: 'Is the DBA program accredited?', a: 'Yes — by the Higher Learning Commission (HLC), guaranteeing the programme meets high academic and professional standards.' },
      { q: 'How long does it take to complete the DBA program?', a: 'An accelerated 24-month programme, designed so professionals can earn their doctorate while continuing to work full-time.' },
      { q: 'Can I specialize in a specific area in the DBA program?', a: 'Yes — 2 specializations are offered: Leadership and Finance.' },
      { q: 'What are the career outcomes of completing the DBA program?', a: 'Graduates are well-equipped for roles such as CEO, Management Consultant, Strategic Business Advisor, and Business Research Analyst.' },
      { q: 'What is the refund policy for this programme?', a: 'You may request a refund at any time before the Cohort Commencement Date via the "My Application" section on upgrad.com; a processing fee of ₹10,000 applies. Once the programme commences, no refund request will be considered. Refer to your Programme Offer Letter for full terms.' },
    ],
    confirmed: true,
  },
  {
    slug: 'dba-esgci-paris',
    name: 'Doctorate of Business Administration (DBA)',
    university: 'ESGCI, Paris',
    eyebrow: 'Doctorate · Leadership & AI Strategy',
    tagline: 'Shaping strategic leadership in an AI-driven world. Built for senior leaders, with a specialisation in Leadership & AI Strategy — completed in 24 months, internationally aligned and professionally timed.',
    duration: '24 Months',
    fee: 'INR 7,15,000 (without immersion) · INR 9,00,000 (with immersion)',
    seatBlock: 'INR 35,000',
    admissionDeadline: '31 Jul 2026',
    eligibility: "Master's Degree (or equivalent), or Bachelor's Degree with 3+ years of work experience. Diploma holders considered case-by-case with a minimum of 8 years of work experience.",
    highlights: [
      'Pitch your ideas to real VCs with chequebooks',
      'Release your Doctoral dissertation as a book',
      'Teach in UGC-recognised colleges in your free time',
      'Prototype and pilot your ideas with no-code platforms',
      'Protect your ideas with solid IPs in 155 countries',
      'Optional PwC Board Advisory Certification and NSDC-recognised certification',
      'RNCP-accredited, QUALIOPI-certified French doctorate with ACBSP recognition',
    ],
    certificate: {
      title: 'Doctorate of Business Administration (DBA)',
      issuers: ['ESGCI, Paris'],
      note: 'Same doctorate as on-campus, without needing to relocate. RNCP-accredited (levels 6 and 7, recognised by the French State), QUALIOPI-certified, plus an optional PwC Board Advisory Certification on completion.',
      imageUrl: '/images/site/doctoral/dba-esgci-paris/certificate.webp',
    },
    accreditations: [
      { name: 'French Ministry of Higher Education', body: 'The French Ministry of Higher Education has assessed and recognised ESGCI for imparting high-quality business education.', logoUrl: '/images/site/doctoral/dba-esgci-paris/accreditation-french-ministry.webp' },
      { name: 'QUALIOPI', body: 'Qualiopi certification is a quality mark for training organisations registered with the Institute of Industrial Property (INPI) in France.', logoUrl: '/images/site/doctoral/dba-esgci-paris/accreditation-qualiopi.webp' },
      { name: 'ACBSP', body: "ACBSP is America's premier accreditation body for business schools and programs worldwide.", logoUrl: '/images/site/doctoral/dba-esgci-paris/accreditation-acbsp.webp' },
      { name: 'IACBE', body: 'IACBE is an international accreditation body recognising excellence in business education programmes.', logoUrl: '/images/site/doctoral/dba-esgci-paris/accreditation-iacbe.webp' },
    ],
    audienceImageStyle: 'rect',
    audience: [
      {
        role: 'Unstoppable Leaders',
        description: 'Those who go deeper to climb higher, and never stop creating business impact. A doctorate signals deep domain expertise and elevates leadership stature.',
        imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80',
      },
      {
        role: 'Managerial Mentors',
        description: 'Masters of their craft, eager to bring industry experience to classrooms — gaining both the expertise and the credentials to guide the next generation.',
        imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80',
      },
      {
        role: 'Independent Veterans',
        description: 'Experienced professionals moving into independent & entrepreneurial roles, using the doctorate as a powerful credential to influence the leaders who consult them.',
        imageUrl: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=400&q=80',
      },
    ],
    curriculum: [
      { title: 'Introduction to Doctoral Research', topics: ['Foundational concepts in academic research', 'The nature and types of academic research', 'Key terminologies in doctoral research', 'Features of business and management research', 'Steps in the doctoral research process'] },
      { title: 'Formulating a Research Topic and Reviewing Literature', topics: ['Formulating a research question', 'Writing a research proposal', 'Developing a strong research design', 'Literature review: relevance, types, approaches and methods', 'Drafting the literature review'] },
      { title: 'Data Collection (Optional)', topics: ['Fundamentals of quantitative data collection', 'Secondary data sources', 'Collecting and evaluating primary data', 'Qualitative data collection methods', 'Data validity, reliability and quality', 'Ethical considerations in data collection'] },
      { title: 'Quantitative Methods', topics: ['Fundamentals of quantitative methods and descriptive statistics', 'Difference in means and correlation', 'Simple Linear Regression Model', 'Multiple Linear Regression Model', 'Panel data models', 'Logit and probit models', 'Endogeneity issues'] },
      { title: 'Qualitative Methods', topics: ['What is qualitative research and common misconceptions', 'Choosing a qualitative research method (case study, ethnography, narrative, phenomenology)', 'Qualitative research approaches (grounded theory, discourse analysis, feminist and post-colonial studies, historical research)', 'Qualitative data interpretation and coding', 'Qualitative comparative analysis'] },
      { title: 'Access to Data (Optional)', topics: ['Gaining access to data — physical and virtual access', 'Strategies to gain access to data', 'Different stages of research ethics', 'Factors affecting research conduct', 'Data processing and storage', 'Data analysis and reporting'] },
      { code: 'AI Strategy', title: 'Leadership Judgment in an AI-Driven World', topics: ['Understanding how AI influences decisions and outcomes', 'Identifying limits of automation and where leadership judgment matters', 'Evaluating AI-driven insights, risks and biases', 'Framing the right executive questions for AI-led decisions'] },
      { code: 'AI Strategy', title: 'AI-Enabled Strategic Foresight and Opportunity Framing', topics: ['Using AI to expand strategic thinking and explore opportunities', 'Generating and testing hypotheses using AI-supported analysis', 'Evaluating opportunities through structured reasoning', 'Framing high-quality strategic and business opportunities'] },
      { code: 'AI Strategy', title: 'AI-Augmented Executive Judgment and Influence', topics: ['Strengthening strategic reasoning and decision-making', 'Using AI for synthesis, sense-making and insight generation', 'Enhancing executive communication and thought leadership'] },
      { title: 'Dissertation Phase', topics: ['Research Topic', 'Literature Review', 'Research Design', 'Data Collection', 'Dissertation Draft', 'Final Dissertation', 'Oral Defense'] },
    ],
    mentorsAvatarStyle: 'circle',
    mentorsEyebrow: 'Instructors',
    mentorsTitle: 'Meet Your Thesis Guides',
    mentorsDescription: 'Your DBA instructors.',
    mentors: [
      {
        name: 'Dr. Josse Roussel',
        role: 'Director — DBA, ESGCI',
        institute: 'ESGCI, Paris',
        bio: 'Full Professor at Paris School of Business and Head of the DBA programme. Holds a Ph.D. in Finance and Management and guides candidates through every stage of doctoral research.',
        photoUrl: '/images/site/doctoral/dba-esgci-paris/josse-roussel.webp',
        linkedinUrl: 'https://www.linkedin.com/in/josse-roussel-phd-hdr-a5239126a',
      },
      {
        name: 'Dr. Sonia Bendimerad',
        role: 'Associate Professor, ESGCI',
        institute: 'ESLI Paris',
        bio: 'Senior Lecturer in Management at ESLI Paris, specialising in social entrepreneurship, and social and technological innovation.',
        photoUrl: '/images/site/doctoral/dba-esgci-paris/sonia-bendimerad.webp',
        linkedinUrl: 'https://www.linkedin.com/in/sonia-bendimerad-13208419b/',
      },
      {
        name: 'Dr. Jana Badran',
        role: 'Associate Professor, Lebanese University',
        institute: 'Lebanese University',
        bio: 'Associate Professor at Lebanese University, specialising in Strategic Management, Business Ethics and Corporate Social Responsibility across international contexts.',
        photoUrl: '/images/site/doctoral/dba-esgci-paris/jana-badran.webp',
        linkedinUrl: 'https://www.linkedin.com/in/jana-badran-099b5765/',
      },
      {
        name: 'Jean-Sébastien Klein',
        role: 'AI Expert & Digital Transformation Leader, Founder of Tout Se Transforme',
        institute: 'Tout Se Transforme',
        bio: 'Advises organisations on digital transformation, AI, and management strategy, with over 15 years of experience in senior roles.',
        linkedinUrl: 'https://www.linkedin.com/in/jsklein/',
      },
      {
        name: 'Dr. Raveendran Iyengar',
        role: 'Professor, ESGCI',
        institute: 'ESGCI, Paris',
        bio: 'Seasoned insurance executive with extensive experience in risk management, legal liability exposure, and claims.',
        photoUrl: '/images/site/doctoral/dba-esgci-paris/raveendran-iyengar.webp',
        linkedinUrl: 'https://www.linkedin.com/in/raveendran-iyengar-0a01727/',
      },
    ],
    facultyEyebrow: 'Leadership Experts',
    facultyTitle: 'Meet Your Thesis Guides',
    facultyDescription: 'Leadership experts shaping the programme.',
    faculty: [
      {
        name: 'Dr. Nitin Manoharan',
        role: 'Executive Director, Strategy&',
        institute: 'Strategy&',
        bio: 'Executive Director and Advisor at Strategy&, specialising in business strategy, technology, and innovation.',
        photoUrl: '/images/site/doctoral/dba-esgci-paris/nitin-manoharan.webp',
        linkedinUrl: 'https://www.linkedin.com/in/nmanohar/',
      },
      {
        name: 'Dr. Kenneth Paul Lewis',
        role: 'OKR Coach, Adjunct Faculty',
        institute: 'ESGCI, Paris',
        bio: 'Seasoned leadership transformation consultant with over 22 years of experience, specialising in strategy execution.',
        photoUrl: '/images/site/doctoral/dba-esgci-paris/kenneth-paul-lewis.webp',
        linkedinUrl: 'https://www.linkedin.com/in/okrcoach/',
      },
      {
        name: 'Dr. Shibani Belwalkar',
        role: 'Leadership Coach, Adjunct Faculty',
        institute: 'SDA Bocconi Asia Center',
        bio: 'Distinguished leadership coach, author, and faculty member at SDA Bocconi Asia Center, where she serves as Deputy.',
        photoUrl: '/images/site/doctoral/dba-esgci-paris/shibani-belwalkar.webp',
        linkedinUrl: 'https://www.linkedin.com/in/shibanibelwalkar/?originalSubdomain=in',
      },
    ],
    thesisSupervisorsEyebrow: 'Thesis Supervisors',
    thesisSupervisorsTitle: 'Meet Your Thesis Guides',
    thesisSupervisorsDescription: 'Guiding your doctoral research.',
    thesisSupervisors: [
      {
        name: 'Dr. Finn Majlergaard',
        role: 'Founder and CEO, Gugin',
        institute: 'Gugin',
        bio: 'Founder and CEO of Gugin, a global consulting firm specialising in cross-cultural leadership and organisational development.',
        photoUrl: '/images/site/doctoral/dba-esgci-paris/finn-majlergaard.webp',
        linkedinUrl: 'https://www.linkedin.com/in/gugin/',
      },
      {
        name: 'Dr. Aparajit Parthasarathy',
        role: 'Professor, ESGCI',
        institute: 'ESGCI, Paris',
        bio: 'Accomplished marketing professional and educator with over 15 years of international experience across the UK, France, and beyond.',
        photoUrl: '/images/site/doctoral/dba-esgci-paris/aparajit-parthasarathy.webp',
        linkedinUrl: 'https://www.linkedin.com/in/aparajitsarathy/',
      },
      {
        name: 'Dr. Alexandre Eyries',
        role: 'Academic Advisor, ESGCI',
        institute: 'ESGCI, Paris',
        bio: 'Holds a Ph.D. from Université de Nice Sophia-Antipolis and an HDR from Université de Bourgogne Franche-Comté.',
        photoUrl: '/images/site/doctoral/dba-esgci-paris/alexandre-eyries.webp',
        linkedinUrl: 'https://www.linkedin.com/in/alexandre-eyries-9775261b9/',
      },
      {
        name: 'Dr. Augusta Ndzana',
        role: 'Academic Advisor, ESGCI',
        institute: 'ESGCI, Paris',
        bio: 'Expert in Strategic and International Marketing, holding a Ph.D. in Strategic Marketing, with senior lecturing experience.',
        photoUrl: '/images/site/doctoral/dba-esgci-paris/augusta-ndzana.webp',
      },
      {
        name: 'Dr. Mohammed Talal',
        role: 'Chief Supply Chain Officer, Al Zahra Pvt. Hospital',
        institute: 'Al Zahra Private Hospital',
        bio: 'Seasoned expert in supply chain management, currently serving as the Chief Supply Chain Officer at Al Zahra Private Hospital.',
        photoUrl: '/images/site/doctoral/dba-esgci-paris/mohammed-talal.webp',
        linkedinUrl: 'https://www.linkedin.com/in/talal-ali-mohamed-ms-emba-dphr-dba-ab9b8b101/',
      },
      {
        name: 'Dr. Axel Berard',
        role: 'Founding Member, AREFE',
        institute: 'AREFE',
        bio: 'Independent researcher and educator specialising in esports, team dynamics, and organisational behaviour.',
        photoUrl: '/images/site/doctoral/dba-esgci-paris/axel-berard.webp',
        linkedinUrl: 'https://www.linkedin.com/in/axel-berard-72199377/?originalSubdomain=fr',
      },
      {
        name: 'Dr. Sara Pax',
        role: 'Academic Advisor, ESGCI',
        institute: 'ESGCI, Paris',
        bio: 'Experienced strategic leader with a focus on sustainable growth, holding a Doctorate in Instructional Design Leadership.',
        photoUrl: '/images/site/doctoral/dba-esgci-paris/sara-pax.webp',
        linkedinUrl: 'https://www.linkedin.com/in/sarapax/',
      },
      {
        name: 'Dr. Alan Roper',
        role: 'Adjunct Faculty, upGrad',
        institute: 'UCLA',
        bio: 'Supervisor for educational technology tools at UCLA, leading a team delivering innovative learning tools.',
        photoUrl: '/images/site/doctoral/dba-esgci-paris/alan-roper.webp',
        linkedinUrl: 'https://www.linkedin.com/in/alan-r-roper-ed-d-199717b/',
      },
    ],
    admissionSteps: [
      { title: 'Submit Application', desc: 'Submit your application to meet the eligibility criteria for the DBA from ESGCI, Paris.' },
      { title: 'Receive Offer Letter', desc: 'Upon submitting the application, you will receive an offer letter if you are shortlisted.' },
      { title: 'Reserve Your Seat', desc: 'Reserve your programme spot by paying the block amount of INR 35,000 and start your course.' },
    ],
    testimonialsEyebrow: 'Learner Profiles',
    testimonialsTitle: 'Join the A-List of the C-Suite',
    testimonialsDescription: 'Real leaders, real impact.',
    testimonials: [
      { name: 'Sumeet Bhat', role: 'Director of Engineering, Whirlpool', quote: 'Former President, Scientific Affairs - Trivitron | Former Director - Philips | Certified Six Sigma Black Belt', photoUrl: '/images/site/doctoral/dba-esgci-paris/sumeet-bhat.webp', linkedinUrl: 'https://www.linkedin.com/in/sumeet-bhat-a1365a49' },
      { name: 'Raja Gnanam', role: 'Manufacturing Head, Ola Electric', quote: 'Former DGM - Hero Moto Corp | Former AGM - Piaggio Vehicle Pvt Ltd | Former Deputy Manager - Toyota Kirloskar Motor', photoUrl: '/images/site/doctoral/dba-esgci-paris/raja-gnanam.webp', linkedinUrl: 'https://www.linkedin.com/in/raja-gnanam-02b4b055' },
      { name: 'Pratik Kulkarni', role: 'Former Director, CSI 3000', quote: 'CEO - Thought Consulting Services | Former Associate Consultant - GreenCube Global | Former System Engineer - TCS', photoUrl: '/images/site/doctoral/dba-esgci-paris/pratik-kulkarni.webp' },
    ],
    whySection: {
      title: 'Why a Doctorate of Business Administration Programme Matters in 2026',
      sections: [
        { heading: 'Rising demand for research-driven leaders', body: 'As organisations embed AI into strategy, operations and governance, senior leaders are expected to think more rigorously, move faster and make decisions that hold up to scrutiny. The ESGCI DBA is built for this moment.' },
        { heading: 'Who should pursue this programme', body: 'C-suite and senior executives (CEO, COO, CFO, VP, Director) seeking a globally recognised doctorate; seasoned professionals with 10+ years in business, consulting, finance, technology, marketing or operations; strategists, consultants, entrepreneurs and aspiring academics building research-backed authority.' },
        { heading: 'What sets this programme apart', body: '24 months — structured for completion, not just enrolment, with Year 1 assignments feeding directly into thesis selection. A built-in Leadership & AI Strategy specialisation applies AI to strategic foresight, decision-making and executive communication, no technical complexity required.' },
        { heading: 'Career impact', body: 'Graduates move into roles such as Strategy Director, VP, COO and senior consultant, with greater visibility, influence and board-level authority — backed by RNCP accreditation, QUALIOPI certification and an optional PwC Board Advisory Certification.' },
      ],
    },
    faqs: [
      { q: 'Who is the DBA programme from ESGCI for?', a: 'Senior professionals — typically 10+ years in business — ready to lead with research authority: C-suite and senior executives, seasoned practitioners in consulting, strategy, finance or technology, consultants, entrepreneurs, thought leaders, and leaders navigating AI-driven environments.' },
      { q: 'What is the duration of the programme?', a: 'The Doctorate of Business Administration from ESGCI is a 24-month programme, allowing working professionals to balance academic pursuits with career responsibilities.' },
      { q: 'Will I get an extension if I am unable to complete the programme within the stipulated time?', a: 'Yes, you have the option to extend the programme duration by up to 12 months at no additional cost.' },
      { q: 'Is a DBA equivalent to a PhD?', a: 'Both are doctoral-level qualifications, but a DBA is practice-oriented, focusing on applying research to business contexts, whereas a PhD is theory-driven, emphasising original academic contributions.' },
      { q: 'Is a DBA higher than an MBA?', a: 'Yes. A DBA is a terminal degree — the highest level of education in business administration — emphasising advanced research and strategic application, unlike an MBA which focuses on foundational business and management skills.' },
      { q: 'Is the DBA valid in India and recognised if I move abroad?', a: 'Yes. It is valid in India and recognised in France and accepted globally due to RNCP accreditation and QUALIOPI certification. Many learners pursue international roles or consulting assignments after graduation.' },
      { q: 'Can DBA graduates use "Dr."?', a: 'Yes, DBA graduates are entitled to use the title "Dr." before their names, as it is a doctoral-level qualification equivalent to a PhD in academic standing.' },
      { q: 'Can I pursue this DBA without an MBA?', a: "Yes, an MBA is not mandatory. Candidates with a Master's degree in any discipline, or a Bachelor's degree with 3+ years of work experience, are eligible." },
      { q: 'What is the refund policy?', a: 'You may request a refund at any time before the Cohort Commencement Date via the "My Application" section on the upGrad profile. A processing fee of INR 10,000 applies. Once the programme commences, no refund request will be considered.' },
      { q: 'Which banks allow 0% Credit card EMI?', a: 'No-cost EMI is available on credit cards from all major banks, including American Express, HDFC Bank, ICICI Bank, Axis Bank, Standard Chartered, SBI, Citibank and HSBC, subject to a minimum transaction of INR 50,000.' },
    ],
    confirmed: true,
  },
  {
    slug: 'dba-golden-gate',
    name: 'Doctor of Business Administration',
    university: 'Golden Gate University',
    eyebrow: 'Doctorate',
    tagline: 'Our innovative 27-month DBA is inspired by international standards and designed for senior professionals — accelerating careers, advancing strategic knowledge, and setting new standards in management practice.',
    duration: '27 Months',
    fee: 'INR 10,65,000 (without immersion) · INR 12,15,000 (with immersion)',
    seatBlock: 'INR 50,000',
    admissionDeadline: '31 Jul 2026',
    eligibility: "Bachelor's degree with 55%+ marks and 5 years' full-time work experience, or a Master's degree/PG Diploma with 55%+ marks (no work experience required).",
    syllabusUrl: '/brochures/degrees/dba-golden-gate-syllabus.html',
    brochureUrl: '/brochures/degrees/dba-golden-gate-syllabus.html',
    highlights: [
      'Pitch your ideas to real VCs with chequebooks',
      'Write a dissertation, publish a book or build a business plan',
      'Teach in UGC-recognised colleges in your free time',
      'Prototype and pilot your ideas with no-code platforms',
      'Protect your ideas with solid IPs in 155 countries',
      'Optional PwC Directorship & Board Advisory Certification add-on',
      'WASC-accredited US doctorate since 1959, ranked in the top 10% of U.S. schools',
    ],
    certificate: {
      title: 'Doctor of Business Administration',
      issuers: ['Golden Gate University'],
      note: 'Same doctorate as on-campus, without needing to relocate. WASC-accredited since 1959, recognized by the US Department of Education, plus an optional PwC Directorship & Board Advisory Certificate.',
      imageUrl: '/images/site/doctoral/dba-golden-gate/certificate.webp',
    },
    accreditations: [
      { name: 'Association of Indian Universities (AIU)', body: 'GGU holds membership in AIU, registered under the Societies Registration Act, 1860, enabling universities to collaborate and discuss common academic matters.' },
      { name: 'WASC', body: 'GGU is accredited by the WASC Senior College and University Commission (WSCUC), which also accredits top universities, ensuring high educational standards.' },
      { name: 'WES Accreditation', body: 'WES Accreditation is one of the most widely accepted and respected forms of recognition for a degree.' },
      { name: 'AACSB', body: 'AACSB is renowned as one of the oldest standard-setting bodies for business education worldwide.' },
    ],
    audienceImageStyle: 'rect',
    audience: [
      {
        role: 'Unstoppable Leaders',
        description: 'Those who go deeper to climb higher, and never stop creating business impact. A doctorate signals deep domain expertise and elevates leadership stature.',
        imageUrl: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=400&q=80',
      },
      {
        role: 'Managerial Mentors',
        description: 'Masters of their craft, eager to bring industry experience to classrooms — gaining both the expertise and the credentials to guide the next generation.',
        imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80',
      },
      {
        role: 'Independent Veterans',
        description: 'Experienced professionals moving into independent & entrepreneurial roles, using the doctorate as a powerful credential to influence the leaders who consult them.',
        imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80',
      },
    ],
    curriculum: [
      { code: 'DBA 800', title: 'Doctoral Writing and Research Methods', topics: ['Introduction to Research', 'Identifying the Research Problem', 'Conducting Literature Research and Review', 'Structuring and Drafting a Literature Review', 'Formulating a Research Question and Hypothesis', 'Choosing a Research Method', 'Collecting and Analyzing Data'] },
      { code: 'DBA 801', title: 'Quantitative Research Methods', topics: ['Introduction to Quantitative Research', 'Exploring Quantitative Research Design', 'Collecting Data for Quantitative Research', 'Measurement and Sampling', 'Constructing Statistical Models', 'Enhancing Statistical Models', 'Analyzing Multivariate Analysis', 'Formulating and Writing Quantitative Research'] },
      { code: 'DBA 802', title: 'Qualitative Research Methods', topics: ['Introduction to Qualitative Research', 'Collecting Data for Qualitative Research', 'Conducting Interviews and Focus Groups', 'Introduction to Data Analysis', 'Data Display and Exploration', 'Analyzing Qualitative Data', 'Verifying Conclusions', 'Strategies and Techniques for Qualitative Research'] },
      { code: 'DBA 820', title: 'Corporate Finance', topics: ['Analyzing Corporate Governance', 'Analyzing Financial Statements', 'Applying Time Value of Money', 'Deciding an Optimal Corporate Structure', 'Assessing Risks and Returns', 'Making Dividend Decisions', 'Corporate Valuation', 'Rationalizing Mergers and Acquisitions'] },
      { code: 'DBA 821', title: 'Financial Theory and Applications', topics: ['Efficient Market Hypothesis', 'Behavioral Finance', 'Portfolio Theory', 'Capital Asset Pricing Model and Its Applications', 'Event Study Analysis', 'Fundamentals of Derivatives', 'Derivatives and Risk Management', 'Applying Option Methodology'] },
      { code: 'DBA 822', title: 'International Finance', topics: ['Globalization and International Monetary System', 'Balance of Payments and the Market for FX', 'Parity Relationships and Forecasting FX Rates', 'Foreign Exchange Derivatives', 'Managing Transaction Exposure', 'International Banking and Money Market', 'International Equity Market', 'International Portfolio Investment'] },
      { title: 'Data as an Asset', topics: ['Getting Started with Master Data Management', 'MDM Architecture', 'MDM Services, Modeling and Risk Management', 'MDM and Information Security', 'Implementing MDM Project', 'MDM and Entity Resolution', 'Data Synchronization and Governance'] },
      { title: 'Operational Performance Management', topics: ['Introduction to Operational Performance Management', 'Performance Management in Decision-Making', 'Developing New Frameworks', 'Balanced Scorecard', 'Performance Prism', 'Tableau de Bord', 'McKinsey’s 7-S Framework'] },
      { title: 'Application of AI in Solving Business Problems', topics: ['Understanding AI and Business', 'Data for Business Resilience', 'Risk Management in Business', 'Fraud Detection', 'Internet of Things', 'Cybersecurity and Threat Management', 'Machine Intelligence and Generative AI', 'GRC and Application of AI'] },
      { title: 'Marketing Management', topics: ['Integrating Marketing Scholarship and Marketing Management', 'Understanding Consumer and Organizational Buyer Behavior', 'Formulating Marketing Strategies', 'Building and Managing Brands', 'Developing and Managing Products and Services', 'Setting Price, Distribution and Marketing Communications Policy', 'Managing Sales and Customer Relationships', 'Structuring a Marketing Research Proposal'] },
      { title: 'Consumer Behavior', topics: ['Understanding Consumer Behavior', 'Perception, Learning, and Memory', 'Personality, Values, and Lifestyles', 'Attitudes and Motivation', 'The Influence of Groups and Social Class', 'Subculture and Culture', 'The Decision-Making Process', 'Structuring a Research Proposal'] },
      { title: 'Digital Marketing and New Media', topics: ['Digital Marketing: Management and Scholarship', 'Online Marketplace Analysis: Micro-Environment', 'Digital Marketing: The Macro-Environment', 'Digital Marketing Strategies', 'Digital Branding and the Marketing Mix', 'Data-Driven CRM: Digital Techniques', 'Delivering the Digital Customer Experience', 'Digital Marketing Campaigns'] },
      { title: 'Leadership Theory, Research, and Application', topics: ['Leadership Fundamentals', 'Approaches to Leadership', 'Contingency Approaches to Leadership', 'Transformational and Authentic Leadership', 'Followership, Servant, and Team Leadership', 'Leadership’s Response to Complexity', 'Leadership Ethics'] },
      { title: 'Leadership Complex Change', topics: ['Introduction to Leading Complex Change', 'Winds of Change and Global Environment', 'Systems Thinking and Complexity Science', 'Executing Strategic Organizational Change', 'Domains and Models of Organization Change', 'Change Leadership, Neuroscience, and Competencies', 'Adaptive Leadership', 'Change Resistance in Organizations'] },
      { title: 'Strategic Leadership', topics: ['Strategic Leadership and Leadership Theories', 'Strategic Leadership Trends and Context', 'Strategic Template and Strategic Thinking', 'Good and Bad Strategy', 'Measuring Success and Strategic Decisions', 'Collaboration and Building Strategic Leadership Team', 'Personal Assessment and Development'] },
    ],
    mentorsAvatarStyle: 'circle',
    mentors: [
      {
        name: 'Prof. Geoffrey Ngene',
        role: 'Associate Professor, Finance · 26 Years of Experience',
        institute: 'Golden Gate University',
        bio: 'Associate Professor of Finance at Mercer University’s Stetson School of Business and Economics, holding a Ph.D. in Finance.',
        photoUrl: '/images/site/doctoral/dba-golden-gate/geoffrey-ngene.webp',
      },
      {
        name: 'Prof. Tommy Moreno',
        role: 'Adjunct Professor, GGU · 20+ Years of Experience',
        institute: 'Golden Gate University',
        bio: 'A seasoned talent development leader with extensive experience in Fortune 500 companies across sectors such as banking and beyond.',
        photoUrl: '/images/site/doctoral/dba-golden-gate/tommy-moreno.webp',
      },
      {
        name: 'Prof. Anthony De Leon',
        role: 'Former Partner, Accenture · 18+ Years of Experience',
        institute: 'Golden Gate University',
        bio: 'Senior Adjunct Professor of Marketing at Golden Gate University’s Ageno School of Business, holding a Doctorate and prior partner experience at Accenture.',
        photoUrl: '/images/site/doctoral/dba-golden-gate/anthony-de-leon.webp',
      },
      {
        name: 'Dr. Judy Lee',
        role: 'Professor & Director, GGU · 35+ Years of Experience',
        institute: 'Golden Gate University',
        bio: 'Tenured professor and Department Chair of Business Innovation & Technology at Golden Gate University’s Ageno School of Business.',
        photoUrl: '/images/site/doctoral/dba-golden-gate/judy-lee.webp',
      },
      {
        name: 'Prof. Marion Moreno',
        role: 'Adjunct Professor, GGU · 40 Years of Experience',
        institute: 'Golden Gate University',
        bio: 'Senior Talent Management Leader with extensive experience in executive leadership and organisational development.',
        photoUrl: '/images/site/doctoral/dba-golden-gate/marion-moreno.webp',
      },
      {
        name: 'Dr. Anitha Manohar',
        role: 'Dept. Chair, Finance, GGU · 24 Years of Experience',
        institute: 'Golden Gate University',
        bio: 'Professor and Chair of the Finance and Economics Department at Golden Gate University, holding a PhD in Finance.',
        photoUrl: '/images/site/doctoral/dba-golden-gate/anitha-manohar.webp',
      },
      {
        name: 'Dr. Mick McGee',
        role: 'Director, DBA Program · 15+ Years of Experience',
        institute: 'Golden Gate University',
        bio: 'Professor and Director of the Doctor of Business Administration (DBA) programme at Golden Gate University’s Ageno School of Business.',
        photoUrl: '/images/site/doctoral/dba-golden-gate/mick-mcgee.webp',
      },
    ],
    admissionSteps: [
      { title: 'Complete Application', desc: 'Fill in details of your education, work experience and submit your Statement of Purpose (SOP).' },
      { title: 'Application Review', desc: 'Admission panel reviews the SOP and candidate profile to assess fitment.' },
      { title: 'Receive the Offer Letter', desc: 'Shortlisted candidates are sent the Offer Letter.' },
    ],
    testimonials: [
      { name: 'Nisha Agarwal', role: 'Vice President', quote: 'Former VP - ANZ | Former Associate VP - Royal Bank of Scotland | Experienced in Credit Risk, Regulatory & Basel Implementation', photoUrl: '/images/site/doctoral/dba-golden-gate/nisha-agarwal.webp', linkedinUrl: 'https://www.linkedin.com/in/nisha-agarwal-ca-frm-27569930' },
      { name: 'Nunna Veerabhadra Rao', role: 'Director', quote: 'Former Director - Ripple Construction Products Pvt. Ltd | Former CEO - Pranav Construction Systems | Former Sales Director - Hilti India', photoUrl: '/images/site/doctoral/dba-golden-gate/nunna-veerabhadra-rao.webp', linkedinUrl: 'https://www.linkedin.com/in/nunnarao/' },
      { name: 'Gaurav Bhatli', role: 'Former GM and Head of HR', quote: 'CEO - Paatshala Learning Solutions | Former Sr. Director (Organisation & Talent Development) - Sabre Corporation | Former VP (L&D) - Everise', photoUrl: '/images/site/doctoral/dba-golden-gate/gaurav-bhatli.webp', linkedinUrl: 'https://www.linkedin.com/in/gauravbhatli/' },
      { name: 'Runav Desai', role: 'Senior Executive (Analytics)', quote: 'Former Sr. Executive - Naukri.com | MBA in Marketing | Experienced in Data Science & Business Analytics', photoUrl: '/images/site/doctoral/dba-golden-gate/runav-desai.webp', linkedinUrl: 'https://www.linkedin.com/in/runav-desai-ba195b85/' },
      { name: 'Shruti Chugh', role: 'Associate Project Director', quote: 'Former Senior Delivery Manager - Fujitsu | Former Program Head - Coforge | Experienced in IT Delivery & Program Management', photoUrl: '/images/site/doctoral/dba-golden-gate/shruti-chugh.webp', linkedinUrl: 'https://www.linkedin.com/in/shrutichugh17' },
      { name: 'Suhani Jaiswal', role: 'Data Scientist', quote: 'Former Data Scientist - Accenture | Former ML Engineer - TCS', photoUrl: '/images/site/doctoral/dba-golden-gate/suhani-jaiswal.webp', linkedinUrl: 'https://www.linkedin.com/in/suhani-jaiswal-910159140/' },
      { name: 'Kanon Clifford', role: 'Litigation Lawyer | Ottawa, Ontario', quote: 'A dedicated personal injury lawyer and lifelong learner.', photoUrl: '/images/site/doctoral/dba-golden-gate/kanon-clifford.webp' },
      { name: 'Kevyn Eng', role: 'Head of Growth & Marketing, Hugosave | Singapore', quote: 'A seasoned marketing leader, constantly pushing boundaries to lead with impact.', photoUrl: '/images/site/doctoral/dba-golden-gate/kevyn-eng.webp' },
      { name: 'Thanh Tam Dang', role: 'Senior Retail Business Manager | Vietnam', quote: 'An inspiring retail leader, driving growth in Vietnam’s ever-evolving market.', photoUrl: '/images/site/doctoral/dba-golden-gate/thanh-tam-dang.webp' },
    ],
    whySection: {
      title: 'Why a Doctorate of Business Administration from Golden Gate University Matters in 2026',
      sections: [
        { heading: 'Rising demand for research-driven, AI-ready leaders', body: 'With generative AI, automation, real-time analytics, and global digital ecosystems reshaping industries, organizations need leaders who can navigate complexity through research-backed insight, combine strategy with applied research, and lead transformation in dynamic environments.' },
        { heading: 'Who should pursue this programme', body: 'Senior leaders and executives (CEOs, COOs, CFOs, Directors, VPs); experienced professionals with 10+ years in business, finance, consulting, technology, HR, marketing, supply chain, operations or entrepreneurship; managers and strategy professionals; aspiring academics and corporate trainers; and consultants, entrepreneurs and independent practitioners.' },
        { heading: 'What sets this programme apart', body: 'A reimagined, time-optimized 27-month pathway (versus a traditional 36-month timeline) that feeds early academic work directly into thesis development, backed by WASC accreditation and an optional PwC Directorship & Board Advisory Certification.' },
        { heading: 'Career impact', body: 'Graduates move into roles such as Business Unit Head (INR 40L), Strategy Director (INR 36L), Strategy Lead (INR 33L), and Senior Management Consultant (INR 28L), unlocking CXO-track and enterprise leadership opportunities.' },
      ],
    },
    faqs: [
      { q: 'What is the DBA program at Golden Gate University?', a: 'A doctorate designed for senior professionals, consultants, and academics aiming to advance their careers, focused on strategic business knowledge, research, and real-world leadership.' },
      { q: 'Why choose GGU for a DBA?', a: 'GGU is ranked among the top 10% of U.S. schools, with 80% of faculty based in San Francisco and actively practicing at companies like Salesforce, LinkedIn, Meta, and Amazon.' },
      { q: 'Who is the DBA program designed for?', a: 'Senior managers, consultants, and university professors who want to contribute to their profession and gain expertise in advanced business management and research.' },
      { q: 'Do I need prior research experience to join the DBA program?', a: 'No. The programme teaches you everything from the basics of research design to advanced analytical methods, and is built to support professionals doing academic research for the first time.' },
      { q: 'Is this DBA program recognized internationally?', a: 'Yes — it is backed by WASC accreditation, which is globally respected and valid for international employment, consulting work, and academic opportunities.' },
      { q: 'What is the program fee for the DBA?', a: 'INR 10,65,000, with 12 months No-cost EMI available.' },
      { q: 'How much do I pay to block my seat?', a: 'INR 50,000 to block your seat for the Doctor of Business Administration from GGU.' },
      { q: 'What is the eligibility for the GGU DBA course?', a: "A Bachelor's degree with at least 55% marks and 5 years of full-time work experience after graduation, OR a Master's degree/2-year PG Diploma with at least 55% marks (no work experience required). The degree must be from a UGC-recognized or equivalent accredited university." },
      { q: 'Will I get an extension if I am unable to complete the program within the stipulated time?', a: 'Yes — you can extend the program duration at no additional cost (source materials cite both 8 and 9 months in different places; confirm the exact cap before publishing).' },
      { q: 'What is the refund policy for this programme?', a: 'You may request a refund at any time before the Cohort Commencement Date via the "My Application" section on upgrad.com; a processing fee of ₹10,000 applies. Once the programme commences, no refund request will be considered. Refer to your Programme Offer Letter for full terms.' },
      { q: 'What career opportunities are available after completing a DBA from GGU?', a: 'Leadership roles such as senior management positions, consultants, university professors, or board-level roles with enhanced strategic and governance expertise.' },
    ],
    confirmed: true,
  },
  {
    slug: 'dba-rushford',
    name: 'Doctor of Business Administration (DBA)',
    university: 'Rushford Business School, Switzerland',
    eyebrow: 'Doctorate · Top Selling',
    tagline: "Designed for professionals looking to elevate. It's a Doctorate that focuses on building strong business fundamentals and leadership skills, giving you a solid foundation before you begin your dissertation journey.",
    duration: '36 Months',
    fee: 'INR 4,50,000 (without immersion) · INR 6,50,000 (with immersion, INR 19,688/month)',
    seatBlock: 'INR 25,000',
    admissionDeadline: '31 Jul 2026',
    eligibility: "Master's degree (or equivalent), or Bachelor's degree with 3 years of work experience.",
    syllabusUrl: '/brochures/degrees/dba-rushford-syllabus.html',
    brochureUrl: '/brochures/degrees/dba-rushford-syllabus.html',
    highlights: [
      'Release your Doctoral dissertation as a book',
      'Teach in UGC-recognised colleges in your free time',
      'Prototype and pilot your ideas with no-code platforms',
      'Protect your ideas with solid IPs in 155 countries',
      'Pitch your ideas to real VCs with chequebooks',
      'Optional PwC Board Advisory Certification add-on',
      'Accredited by AACSB, EduQua & ACBSP — recognised by top agencies worldwide',
    ],
    certificate: {
      title: 'Doctor of Business Administration (DBA)',
      issuers: ['Rushford Business School'],
      note: 'Receive the same world-class education and global recognition as on-campus doctorates without needing to relocate. Rushford is EduQua certified and holds memberships in renowned global bodies like BAC, AACSB and IACBE, plus an NSDC certification recognised by the Indian Ministry of Skill Development.',
      imageUrl: '/images/site/doctoral/dba-rushford/certificate.webp',
    },
    accreditations: [
      { name: 'AACSB Member', body: 'Global education and business leaders association dedicated to advancing quality business education worldwide, demonstrating a commitment to educational excellence.', logoUrl: '/images/site/doctoral/dba-rushford/accred-aacsb.webp' },
      { name: 'EDUQUA Certified', body: "EduQua is Switzerland's official and premier accreditation body for continuing education.", logoUrl: '/images/site/doctoral/dba-rushford/accred-eduqua.webp' },
      { name: 'ACBSP Membership', body: "ACBSP is America's premier accreditation body for business schools & programs worldwide.", logoUrl: '/images/site/doctoral/dba-rushford/accred-acbsp.webp' },
      { name: 'IACBE Educational Member', body: 'IACBE ensures accountability among institutions by having them regularly assess and report on the quality of their business education.', logoUrl: '/images/site/doctoral/dba-rushford/accred-iacbe.webp' },
      { name: '5 Star QS Rating', body: 'Rushford has received an overall 4 star rating in the world-renowned QS Star rating system, earning 5 stars in online learning and teaching.', logoUrl: '/images/site/doctoral/dba-rushford/accred-qs.svg' },
      { name: 'UN PRME Member', body: "UN PRME membership signifies that Rushford's business education aligns with UN's principles for responsible management education.", logoUrl: '/images/site/doctoral/dba-rushford/accred-unprme.webp' },
    ],
    audienceImageStyle: 'rect',
    audience: [
      {
        role: 'Unstoppable Leaders',
        description: 'Those who go deeper to climb higher, and never stop creating business impact. A doctorate signals deep domain expertise and elevates leadership stature.',
        imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80',
      },
      {
        role: 'Managerial Mentors',
        description: 'Masters of their craft, eager to bring industry experience to classrooms — gaining both the expertise and the credentials to guide the next generation.',
        imageUrl: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=400&q=80',
      },
      {
        role: 'Independent Veterans',
        description: 'Experienced professionals moving into independent & entrepreneurial roles, using the doctorate as a powerful credential to influence the leaders who consult them.',
        imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80',
      },
    ],
    fourSteps: [
      { title: 'Management Track — 6 Months', desc: 'Managerial skills, managerial economics, cutting-edge leadership, accounting for financial reporting, international business environment, and strategic management.' },
      { title: 'Specialization Track — 6 Months', desc: 'Choose 6 courses from 10 specializations including General Management, Data Science, Marketing, Finance, Supply Chain, Big Data, International Business, HR, Healthcare and Sustainability.' },
      { title: 'Research Track — 6 Months', desc: 'Research design, business statistics, qualitative and quantitative research methodology, report writing, and doctoral residency.' },
      { title: 'Dissertation Phase — 18–24 Months', desc: 'Written proposal defense, reflection with supervisor, written dissertation, and oral defense.' },
    ],
    curriculum: [
      { code: 'Track 1', title: 'Management Track', weeks: '6 Months', topics: ['Managerial Skills', 'Managerial Economics', 'Cutting Edge Leadership', 'Accounting for Financial Reporting', 'International Business Environment', 'Strategic Management: Integrating the Enterprise'] },
      { code: 'Track 2', title: 'Specialization Track', weeks: '6 Months', topics: ['Choose 6 courses based on your area of specialization', 'General Management', 'Data Science', 'Marketing', 'Finance', 'Supply Chain Management', 'Big Data', 'International Business', 'Human Resource Management', 'Healthcare Management', 'Sustainability & Environmental Management'] },
      { code: 'Track 3', title: 'Research Track', weeks: '6 Months', topics: ['Research Design', 'Business Statistics', 'Designing a Qualitative Research Methodology', 'Designing a Quantitative Research Methodology', 'Report Writing', 'Doctoral Residency'] },
      { code: 'Track 4', title: 'Dissertation Phase', weeks: '18–24 Months', topics: ['Written Proposal Defense', 'Reflection and Minutes of the Meeting with Supervisor', 'Written Dissertation', 'Oral Defense'] },
    ],
    mentors: [
      {
        name: 'Dr. Michael Epping',
        role: 'Director, Finance2stay GmbH',
        institute: 'Rushford Business School',
        bio: 'A seasoned finance professional and educator with over 30 years of experience in capital budgeting and startup financing.',
        photoUrl: '/images/site/doctoral/dba-rushford/epping.webp',
        linkedinUrl: 'https://www.linkedin.com/in/michael-epping-0093a9a/',
      },
      {
        name: 'Dr. Tufail Syed',
        role: 'Founder and President, Rushford',
        institute: 'Rushford Business School',
        bio: 'A seasoned management professional with decades of experience in clinical medicine, medical research, and higher education.',
        photoUrl: '/images/site/doctoral/dba-rushford/syed.webp',
        linkedinUrl: 'https://www.linkedin.com/in/tufail/',
      },
      {
        name: 'Dr. Ahmad Albattat',
        role: 'Visiting Professor, Rushford Business School',
        institute: 'Rushford Business School',
        bio: 'Associate Professor and Program Leader at the School of Global Hospitality and Tourism, Asia Pacific University, Kuala Lumpur.',
        photoUrl: '/images/site/doctoral/dba-rushford/albattat.webp',
        linkedinUrl: 'https://www.linkedin.com/in/dr-ahmad-albattat-229b2435/',
      },
      {
        name: 'Dr. Bradley Joblin',
        role: 'Clinical Development Strategy Advisor',
        institute: 'Rushford Business School',
        bio: 'A clinical development specialist with 20 years of experience in early-phase study design and clinical development strategy.',
        photoUrl: '/images/site/doctoral/dba-rushford/joblin.webp',
        linkedinUrl: 'https://www.linkedin.com/in/bradley-joblin-41a93129/',
      },
      {
        name: 'Dr. Flavio Gazzani',
        role: 'Senior Research Associate',
        institute: 'Rushford Business School',
        bio: 'An expert in climate change adaptation, energy economics, and environmental taxation, with over 24 years of experience.',
        photoUrl: '/images/site/doctoral/dba-rushford/gazzani.webp',
        linkedinUrl: 'https://www.linkedin.com/in/dr-flavio-gazzani-40422026/',
      },
      {
        name: 'Dr. Kanika Gupta',
        role: 'Chief Academic Officer, Rushford',
        institute: 'Rushford Business School',
        bio: 'An academician and researcher with two decades of experience in online education, accreditations, and validations.',
        photoUrl: '/images/site/doctoral/dba-rushford/kanika.webp',
        linkedinUrl: 'https://www.linkedin.com/in/dr-kanika-gupta/?originalSubdomain=de',
      },
    ],
    admissionSteps: [
      { title: 'Submit Application', desc: 'Submit your application per Rushford Business School DBA eligibility criteria.' },
      { title: 'Receive Offer Letter', desc: 'Upon applying, you will receive an offer letter if you are shortlisted.' },
      { title: 'Reserve Your Seat', desc: 'Reserve your programme spot by paying the block amount of INR 25,000 and start your course.' },
    ],
    testimonials: [
      { name: 'Sameer Gaikwad', role: 'CEO, IITL Group', quote: 'Former SVP - YES Bank | Former AVP - HDFC Bank | Former Project Manager - Godrej & Boyce', photoUrl: '/images/site/doctoral/dba-rushford/sameer.webp', linkedinUrl: 'https://www.linkedin.com/in/sameer-gaikwad-272718a' },
      { name: 'Amit Kumar Das', role: 'VP, Mindlance', quote: 'Former Global IT Operations Manager - McAfee | Former IT Leader - Tata Consultancy Services', photoUrl: '/images/site/doctoral/dba-rushford/amit.webp', linkedinUrl: 'https://www.linkedin.com/in/amit-kumar-das-0125b713/' },
      { name: 'Bhanuprabha A', role: 'AVP, JP Morgan Chase & Co', quote: 'Former Project Manager - Société Générale | Former Manager - Sunstream | Regional Operations Head - First Data Corporation', photoUrl: '/images/site/doctoral/dba-rushford/bhanuprabha.webp', linkedinUrl: 'https://www.linkedin.com/in/bhanu-a-581b4b68/' },
      { name: 'Gaurav Sharma', role: 'Head of Credit, Mercedes-Benz', quote: 'Former VP & Compliance Officer - Daimler | VP - VE Commercial Vehicles | Former Territory Sales Manager - Maruti Suzuki', photoUrl: '/images/site/doctoral/dba-rushford/gaurav.webp', linkedinUrl: 'https://www.linkedin.com/in/gaurav-sharma-43396111/' },
      { name: 'Jagdamba Prasad Tripathi', role: 'Former GM, JSW Foundation', quote: 'Director - Wadhwani AI | Former Dy General Manager - Ambuja Cement Foundation | Former Programme Director - Reliance', photoUrl: '/images/site/doctoral/dba-rushford/jagdamba.webp', linkedinUrl: 'https://www.linkedin.com/in/jp-tripathi-99182527' },
      { name: 'Muralidhar Gumma', role: 'Director, Consulting, Altair', quote: 'Former Module Lead - Creative Synergies Group | Former Consultant CAE Engineer - Altran Technologies | Former Project Engineer - Wipro', photoUrl: '/images/site/doctoral/dba-rushford/muralidhar.webp', linkedinUrl: 'https://www.linkedin.com/in/muralidhar-gumma-a5836430/' },
      { name: 'Vivekanandhan K', role: 'Managing Director, Faraday Ozone', quote: 'CEO - Farazon Manufacturing | Founder - Farazon Software | Experienced in Product Development & Business Innovation', photoUrl: '/images/site/doctoral/dba-rushford/vivekanandhan.webp', linkedinUrl: 'https://www.linkedin.com/in/vivekanandhan-koodalingam-1a359117/' },
    ],
    whySection: {
      title: 'Why a Doctor of Business Administration Degree from Rushford Business School Matters in 2026',
      sections: [
        { heading: 'Growing demand for strategic leaders', body: 'As companies adopt AI-driven systems, global business models, and data-powered decision-making, leaders are expected to think beyond traditional management, understanding strategy, innovation, research, and digital transformation at the highest level.' },
        { heading: 'Who should pursue this programme', body: 'Senior professionals in leadership roles (CEO, COO, Director, GM, Strategy Leader); experienced managers with 8+ years in business, consulting, finance, marketing, operations, supply chain or HR; and experts who want to combine practical experience with academic depth.' },
        { heading: 'What sets this programme apart', body: 'EduQua-certified with AACSB, ACBSP and IACBE affiliations, 10 specializations (the most specialized DBA for leaders), an optional 3-day business immersion in Dubai, and an optional PwC Board Advisory Certification.' },
        { heading: 'Career impact', body: 'Graduates move into roles such as Chief Financial Officer (INR 57L), Chief Executive Officer (INR 50.9L), Human Resources Director (INR 49.8L), Chief Operating Officer (INR 37.8L), and Management Consultant (INR 27.3L).' },
      ],
    },
    faqs: [
      { q: 'Is the Rushford DBA a government-accredited degree?', a: "Rushford operates under Switzerland's dual higher-education system, where private institutions can legally award degrees in non-regulated fields like business without federal accreditation. Rushford is legally registered in Switzerland, and the Canton of Lucerne has formally approved its campus there. It also holds memberships with AACSB, ACBSP, IACBE and BGA." },
      { q: 'Is the DBA offered by Rushford Business School a recognized Swiss degree?', a: "Yes. It is a Swiss private degree awarded by Rushford Business School, a legally registered institution operating under Switzerland's private higher education framework, with its Lucerne campus approved by the Canton of Lucerne." },
      { q: 'How much do I pay to block my seat?', a: 'INR 25,000 to block your seat for the Doctor of Business Administration course from Rushford Business School.' },
      { q: 'What is the refund policy for this programme?', a: 'You may request a refund at any time before the Cohort Commencement Date via the "My Application" section on upgrad.com; a processing fee of ₹10,000 applies. Once the programme commences, no refund request will be considered. Refer to your Programme Offer Letter for full terms.' },
      { q: 'What are the key components and specialised areas covered in the DBA course?', a: 'This 3-year DBA builds multi-dimensional leadership across HR, Finance, Marketing and Strategy via a research-based curriculum and industry consultative projects, with specializations spanning areas like AI and Positive Leadership.' },
      { q: 'What are the structure and advantages of pursuing this doctorate from Rushford?', a: 'A blended online DBA combining interactive virtual classes led by faculty with an optional 3-day immersion in Dubai, granting advanced research expertise alongside exposure to global business networks.' },
      { q: 'How does the online format suit working professionals?', a: 'Flexible virtual classes span just 1–2 hours per weekday and fit around work commitments, with recorded lectures available for catch-up according to your convenience.' },
      { q: 'Does the program include a dissertation?', a: 'Yes — completing a doctoral dissertation is a core requirement. You will work on a research topic related to your industry or leadership interests, with faculty mentors guiding proposal development, writing, and final defense.' },
      { q: 'Does the program offer ECTS credits?', a: 'The programme follows the European Qualifications Framework (EQF) Level 8 and is designed using the European Credit Transfer and Accumulation System (ECTS), with a total academic load equivalent to 180 ECTS.' },
      { q: 'For how long can I access live session recordings on the platform?', a: 'Live session recordings remain accessible for one year from the date of the session or until the end of the program duration, whichever is earlier.' },
    ],
    confirmed: true,
  },
  {
    slug: 'cto-ai-officer-waterloo',
    name: 'Chief Technology and AI Officer Program',
    university: 'University of Waterloo',
    eyebrow: 'AI Leadership · CTO Program',
    tagline: "Shape the future of AI and leadership with Waterloo's AI-CTO — where innovation meets a top-100 global legacy.",
    duration: '6 Months · 100% Live Online',
    fee: 'INR 6,80,000',
    admissionDeadline: '31 Jul 2026',
    eligibility: 'While most AI-CTO participants bring over a decade of experience, rising leaders managing teams of 10+ technology professionals or founders of product-first companies are also welcome. Minimum 8 years of industry experience typically expected.',
    highlights: [
      'Tech + finance fluency — master both code and capital, from microservices, MLOps and FinOps to P&L, pricing and unit economics',
      'Hands-on learning, board-level thinking — build eight real-world deliverables, from strategy plans to board decks',
      'Two tracks, one challenge — choose Entrepreneurship or Intrapreneurship, both ending in live War Games crisis simulations',
      'Elite mentors, real outcomes — learn from Waterloo professors, CTOs, founders and VCs; pitch to Velocity for startup incubation',
      '100% live: University of Waterloo faculty + industry leaders',
      '#1 in Canada for Innovation for 29 consecutive years (Maclean\'s 2024) · Top 33 globally in Computer Science (QS 2025)',
      '1,000+ Waterloo-linked startups have raised $14 Billion USD · $79 Million in annual research funding',
      '50+ years of legacy as a global top 100 university',
      'THE World Reputation Ranking 2025 — Global Top 100',
      'QS Canada #5 Ranking',
    ],
    certificate: {
      title: 'Chief Technology and AI Officer Program',
      issuers: ['University of Waterloo'],
      note: 'On successful completion, you receive a course certificate and executive alumni status from the University of Waterloo, joining a network of 225,000+ Waterloo alumni.',
      imageUrl: '/images/site/doctoral/cto-ai-officer-waterloo/certificate.webp',
    },
    fourSteps: [
      { title: 'End-to-End AI Leadership', desc: 'Close the gap from idea to data to build to MLOps to governance to measured value — the full AI leadership path most leaders never see end-to-end.' },
      { title: 'Boardroom Fluency', desc: 'Build a clear ROI and risk story that wins funding and trust from non-technical executives and board members.' },
      { title: 'Tech-to-Business Translation', desc: 'Connect strong technical plans tightly to revenue, margin, customer outcomes and accountable owners.' },
      { title: 'Build a Venture or Transform an Enterprise', desc: 'Entrepreneurship: venture building, fundraising, growth and exit readiness. Intrapreneurship: innovation at scale, platform modernization, ROI and governance ownership.' },
    ],
    curriculum: [
      { code: 'Phase 1', title: 'Strategic Leadership and Business Fluency', weeks: 'Weeks 1–3', topics: ['The modern CTO role and archetypes', 'Business–technology alignment and ROI modelling', 'Building teams, culture and psychological safety'], deliverable: 'Executive Onboarding Package (90-Day CTO Plan) + Strategic Priorities Dossier' },
      { code: 'Phase 2', title: 'Modern Technology & AI Leadership', weeks: 'Weeks 4–12', topics: ['Architecture and platform engineering (microservices, DevSecOps, CI/CD, zero-trust security)', 'Data, AI and emerging tech (GenAI, MLOps, Responsible AI)', 'Scaling operations (SRE metrics, FinOps, vendor management, global architecture)'], deliverable: 'AI Investment Dossier, Scaling Blueprint (SRE + FinOps), Architecture Decision Record + Platform Blueprint' },
      { code: 'Phase 3', title: 'Boardroom Influence & Transformation', weeks: 'Weeks 13–18', topics: ['Board dynamics and executive communication', 'Transformation and change leadership', 'Ethical AI and governance'], deliverable: 'Board Presentation Deck + Transformation Playbook' },
      { code: 'Phase 4', title: 'Electives — Choose Your Path', weeks: 'Weeks 19–25', topics: ['Track A · Entrepreneurship: venture discovery, validation and growth strategy; fundraising, investor targeting and exit planning; capstone War Games — VC pitch, valuation defense, multi-crisis simulation', 'Track B · Intrapreneurship: leading enterprise-scale transformation and ROI tracking; platform modernization and change leadership with governance balance; capstone War Games — board-level transformation pitch, regulatory or M&A shock response'], deliverable: 'Startup Playbook or Enterprise Transformation Blueprint' },
    ],
    admissionSteps: [
      { title: 'Submit Application', desc: 'Submit your application with your education and work experience details.' },
      { title: 'Submit Documents', desc: 'Upload your education and work experience documents.' },
      { title: 'Receive Acceptance Letter', desc: 'Once all your documents have been successfully verified, receive your acceptance letter.' },
    ],
    whySection: {
      title: 'Why the AI-CTO Program Matters in 2026',
      sections: [
        { heading: 'The AI leadership gap', body: "Leaders know \"AI\" but not the full path from idea to data to build to MLOps to governance to measured value. It's hard to tell a clear ROI and risk story that wins funding and trust from non-technical executives." },
        { heading: 'Where business impact suffers without this training', body: 'AI pilots don\'t ship, or ship but don\'t scale, or scale but don\'t prove ROI. Projects get defunded, CTO candidates lose out to externals, and technology gets seen as a "support function" rather than a strategic one.' },
        { heading: 'Who should pursue this programme', body: 'Professionals with 8–10+ years of industry experience managing AI, data, cloud, architecture or security functions, and rising leaders managing teams of 10+ technology professionals or founders of product-first companies aspiring to CTO or AI-CTO roles.' },
        { heading: 'What sets this programme apart', body: 'Four pillars — end-to-end AI leadership, boardroom fluency, tech-to-business translation, and a choice of Entrepreneurship or Intrapreneurship track — taught 100% live by Waterloo faculty and industry leaders, with access to the Velocity innovation ecosystem.' },
        { heading: 'About the University', body: 'Waterloo has produced world-changing founders and ranks among the top global schools for unicorn creation. The Kitchener-Waterloo startup ecosystem, valued at US$2.8–3.4 billion, is driven by Waterloo talent — Sam Altman calls it "the best up-and-coming startup city in the world," while Paul Graham praises its steady stream of exceptional founders. At Waterloo, you join a network that builds companies, leads change, and powers the AI revolution.' },
      ],
    },
    faqs: [
      { q: 'What is the Chief Technology and Artificial Intelligence Officer (AI-CTO) Program?', a: 'A six-month executive program for senior technology leaders focused on AI strategy, enterprise transformation and board-level leadership, helping professionals translate technology decisions into measurable business outcomes.' },
      { q: 'Who is the AI-CTO Program designed for?', a: 'Professionals with 8–10+ years of industry experience managing AI, data, cloud, architecture or security functions, and those aspiring to CTO or AI-CTO roles.' },
      { q: 'What roles does this program prepare participants for?', a: 'Leadership roles such as CTO, AI-CTO, VP of Engineering, and Head of Technology, along with senior roles focused on enterprise transformation.' },
      { q: 'What is the duration of the AI-CTO Program?', a: 'The program runs for approximately 25 weeks (around six months), structured so professionals can continue working full-time.' },
      { q: 'How much time do I need to commit weekly?', a: 'Around 4–6 hours per week, including live online sessions, group discussions and applied assignments.' },
      { q: 'Is the AI-CTO Program fully online?', a: 'Yes, the program is delivered 100% live online in a synchronous format with real-time faculty interaction and collaborative group engagement.' },
      { q: 'What are the four pillars of the AI-CTO Program?', a: 'AI Leadership, Technology Leadership, Boardroom Fluency, and Build a Venture or an Enterprise — ensuring balanced development across strategy, technology and leadership.' },
      { q: 'What skills will I gain from this program?', a: 'AI strategy, cloud architecture, MLOps and governance, alongside stronger executive communication, transformation leadership, business alignment and ROI thinking.' },
      { q: 'What real-world deliverables will I work on?', a: 'A 90-day CTO plan, an AI investment dossier, architecture and scaling blueprints, and a board presentation deck — all designed for immediate workplace application.' },
      { q: 'Can I choose a specialization or learning track?', a: 'Yes. In the final phase, learners choose between Entrepreneurship (venture building) and Intrapreneurship (enterprise transformation) tracks, both including applied leadership War Games simulations.' },
      { q: 'What are the capstone War Games?', a: 'High-pressure simulations based on real-world leadership scenarios, where participants present strategies under board, investor or regulatory scrutiny to test decision-making and executive communication.' },
      { q: 'Who delivers the AI-CTO Program?', a: 'University of Waterloo faculty and senior technology leaders, combining academic research with industry-tested frameworks.' },
      { q: 'Will I get access to Waterloo\'s innovation ecosystem?', a: 'Yes — participants gain access to Waterloo\'s Velocity innovation ecosystem, including mentoring, incubation exposure and enterprise innovation opportunities.' },
      { q: 'What is the eligibility criteria for the AI-CTO Program?', a: 'Applicants should have a minimum of 8 years of industry experience in senior technology or leadership roles. Admissions are selective to ensure a high-quality peer group.' },
      { q: 'What is the fee for the AI-CTO Program?', a: 'The total program fee is INR 6,80,000*, covering live online instruction, access to faculty and industry leaders, and program materials. Applicable taxes or additional terms are shared at enrollment.' },
    ],
    confirmed: true,
  },
  {
    slug: 'dba-gen-ai-golden-gate',
    name: 'DBA in Emerging Technologies with Concentration in Generative AI',
    university: 'Golden Gate University',
    eyebrow: 'Doctorate · Generative AI',
    tagline: 'The Doctor of Business Administration in Generative AI from GGU teaches AI, emerging tech, leadership, and decision-making skills to solve real-world business challenges and drive innovation.',
    duration: '27 Months',
    fee: 'INR 14,00,000 (without immersion) · INR 18,00,000 (with immersion)',
    seatBlock: 'INR 44,999',
    admissionDeadline: '31 Jul 2026',
    eligibility: "A Bachelor's degree with a minimum of 55% marks and 10 years of full-time work experience after graduation. If below 55%, a Master's degree (55%+ marks) or an equivalent two-year Post Graduate Diploma with equivalency verification (AIU, WES, ICAS, etc.), plus 10 years of full-time work experience, is required.",
    highlights: [
      'Release your Doctoral dissertation as a book',
      'Teach in UGC-recognised colleges in your free time',
      'Prototype and pilot your ideas with no-code platforms',
      'Protect your ideas with solid IPs in 155 countries',
      'Pitch your ideas to real VCs with chequebooks',
      'PwC Certification — optional add-on offering',
      '500 hours of live learning across two global AI immersions — Singapore and San Francisco',
      'Faculty with 75+ patents and 300+ publications; learn alongside students from 15+ countries',
    ],
    certificate: {
      title: 'DBA in Emerging Technologies with Concentration in Generative AI',
      issuers: ['Golden Gate University'],
      note: 'Same Doctorate As On Campus: receive the same world-class education and global recognition as on-campus doctorates without needing to relocate. Nationally Accredited US Degree: since 1959, GGU has been accredited by the prestigious WASC Senior College and University Commission, recognized by the US Department of Education. Shorter Time to Completion: an innovative curriculum design, inspired by global standards, helps you earn your Doctorate faster.',
      imageUrl: '/images/site/doctoral/dba-gen-ai-golden-gate/certificate.webp',
    },
    accreditations: [
      { name: 'Association of Indian Universities', body: 'GGU is associated with membership in AIU, registered under the Societies Registration Act, 1860, that enables universities to collaborate & discuss common academic matters.', logoUrl: '/images/site/doctoral/dba-gen-ai-golden-gate/accred-aiu.webp' },
      { name: 'WASC', body: 'GGU is accredited by the WASC Senior College and University Commission (WSCUC), which also accredits top universities ensuring high educational standards.', logoUrl: '/images/site/doctoral/dba-gen-ai-golden-gate/accred-wasc.webp' },
      { name: 'WES Accreditation', body: 'WES Accreditation is one of the most widely accepted and respected forms of recognition for a degree.', logoUrl: '/images/site/doctoral/dba-gen-ai-golden-gate/accred-wes.webp' },
      { name: 'AACSB International Member', body: 'AACSB is renowned as one of the oldest standard-setting bodies for business education worldwide.', logoUrl: '/images/site/doctoral/dba-gen-ai-golden-gate/accred-aacsb.webp' },
      { name: 'Golden Gate University', body: 'Golden Gate University has been helping working professionals advance their careers for over 120 years.', logoUrl: '/images/site/doctoral/dba-gen-ai-golden-gate/accred-ggu.svg' },
    ],
    audienceImageStyle: 'rect',
    audience: [
      {
        role: 'Unstoppable Leaders',
        description: 'Those who go deeper to climb higher, and never stop creating business impact. A doctorate signals deep domain expertise and elevates leadership stature.',
        imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80',
      },
      {
        role: 'Managerial Mentors',
        description: 'Masters of their craft, eager to bring industry experience to classrooms — gaining both the expertise and the credentials to guide the next generation.',
        imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80',
      },
      {
        role: 'Independent Veterans',
        description: 'Experienced professionals moving into independent & entrepreneurial roles, using the doctorate as a powerful credential to influence the leaders who consult them.',
        imageUrl: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=400&q=80',
      },
    ],
    fourSteps: [
      { title: 'Start Your DBA Journey', desc: 'Begin your transformative path to leadership.' },
      { title: 'Research Foundation Courses', desc: 'Doctoral Research Methods and Analysis, and Emerging Digital Technologies.' },
      { title: 'Concentration Courses', desc: 'Fundamentals of Machine Learning & AI, Deep Learning & Its Variants, Deploying Generative AI Using Pre-trained Models, AI Project Design and Execution, and Using AI Ethically & Responsibly.' },
      { title: 'Dissertation Phase', desc: 'Research topic selection, literature review, research design, data collection & analysis, and draft dissertation.' },
      { title: 'Collect Your Doctorate Degree', desc: 'Present and defend your dissertation, achieve your DBA title, and make a global impact.' },
    ],
    curriculum: [
      { code: 'Technical', title: 'Foundations of Machine Learning and AI', weeks: 'Technical Courses', topics: ['Data-driven strategy through statistical modeling and regression', 'Business applications of classification and segmentation models', 'Rule-based pattern mining for strategic insight', 'Enhancing competitive edge through ensemble techniques', 'Platform-based implementation, data visualization and storytelling'], deliverable: 'A comprehensive introduction to core AI/ML concepts for strategic business applications, from regression to ensemble models, classification, clustering and rule mining, plus data-driven decision-making with visualization, storytelling and no-code AI tools.' },
      { code: 'Technical', title: 'Deep Learning', weeks: 'Technical Courses', topics: ['Extracting meaningful representations with autoencoders and embeddings', 'Visual intelligence through Convolutional Neural Networks (CNNs)', 'Temporal pattern recognition using Recurrent Neural Networks (RNNs)', 'Synthetic data generation with Generative Adversarial Networks (GANs)', 'Advanced language and sequence modeling with Seq2Seq architectures'], deliverable: 'Explore cutting-edge deep learning architectures — CNNs, RNNs and GANs — to solve real-world business challenges, with hands-on insight into pattern recognition, synthetic data and advanced sequence modeling for enterprise AI.' },
      { code: 'Technical', title: 'Generative AI for Leaders', weeks: 'Technical Courses', topics: ['From in-house to pre-trained models', 'Large language models and generative architectures', 'Building GenAI applications with RAG, orchestration tools and agentic AI', 'Operationalizing GenAI: LLMOps, ethics and compliance', 'Multimodal GenAI and research-driven innovation'], deliverable: 'Understand the shift to pre-trained generative AI models and their role in content creation, automation and enterprise innovation — learn to build, deploy and govern GenAI and agentic AI systems using LLMs, RAG frameworks and multimodal tools.' },
      { code: 'Business & Strategy', title: 'AI Project Design and Execution', weeks: 'Business and Strategy-Oriented Courses', topics: ['Emerging technology landscape and industry synergies', 'Design thinking and planning for AI and GenAI projects', 'Execution frameworks, tools, and post-deployment management', 'Ethical, organizational and operational impact of AI initiatives', 'Project proposal development and real-world deployment strategies'], deliverable: 'Learn to plan, execute and scale AI and GenAI projects using structured frameworks and design thinking, with real-world use cases, ethical deployment, and strategies for long-term business impact.' },
      { code: 'Business & Strategy', title: 'Responsible AI', weeks: 'Business and Strategy-Oriented Courses', topics: ['Foundations of responsible and ethical AI', 'Bias, failure cases, and algorithmic accountability', 'Privacy, security, and regulatory compliance in AI', 'Explainable AI and model transparency frameworks'], deliverable: 'Explore key business topics like AI ethics and explainability, addressing whether AI is an opportunity or a threat, and develop competencies to evaluate governance mechanisms and ensure regulatory compliance.' },
      { code: 'Business & Strategy', title: 'Emerging Digital Technologies', weeks: 'Business and Strategy-Oriented Courses', topics: ['Data collection and intelligence with IoT and cloud infrastructure', 'Advanced computing with HPC, quantum, and neuromorphic systems', 'Automation and process optimization using RPA and AI integration', 'Trust, security, and transparency through cybersecurity and blockchain', 'Strategic simulation and planning with digital twin and immersive technologies'], deliverable: 'Examine transformative technologies — IoT, quantum computing, blockchain, and digital twins — and learn how to assess, adopt and apply these innovations to drive strategic growth and operational excellence.' },
      { code: 'Research', title: 'Doctoral Research Methods and Analysis', weeks: 'Research and Dissertation Course', topics: ['Foundations of research design and methodological approaches', 'Quantitative and qualitative techniques in business and technology research', 'Research methodology for AI and AI innovation projects', 'Ethics, compliance, and responsible research in digital contexts', 'Literature synthesis, mixed methods, and doctoral proposal development'], deliverable: 'Develop the research skills needed to design, conduct and communicate rigorous doctoral-level studies in business and emerging technologies, with proficiency in qualitative, quantitative and mixed methods.' },
      { code: 'Dissertation', title: 'Topic Exploration & Initial Presentation', weeks: 'Dissertation Phase', topics: ['Identify relevant, high-impact research opportunities aligned with GenAI or emerging technologies', 'Present early-stage ideas to receive feedback and validate direction'] },
      { code: 'Dissertation', title: 'Topic Proposal Submission', weeks: 'Dissertation Phase', topics: ['Submit a clearly articulated research topic supported by a preliminary literature review', 'Demonstrate relevance, originality, and alignment with current academic and industry discourse'] },
      { code: 'Dissertation', title: 'Research Proposal Defense', weeks: 'Dissertation Phase', topics: ['Defend your proposed research design, methodology and scope before a review panel', 'Incorporate insights to refine your approach'] },
      { code: 'Dissertation', title: 'Final Dissertation Defense', weeks: 'Dissertation Phase', topics: ['Submit and present your completed dissertation', 'Demonstrate theoretical contribution, applied relevance, and strategic business impact before a review panel', 'Choose your submission mode: Traditional Thesis, Business Plan, or Book'] },
      { code: 'Immersions', title: 'Industry Immersions', weeks: '3 In-Person Immersions', topics: ['Engage directly with faculty, fellow doctoral candidates, and global thought leaders through interactive sessions and workshops', 'Learn from senior executives and C-suite leaders who have successfully led AI-driven transformations across diverse industries, bridging theory with practical, high-impact business insights'] },
    ],
    mentorsEyebrow: 'Program Architects',
    mentorsTitle: 'GGU DBA in Emerging Technologies — Program Architects',
    mentorsDescription: 'The professors who designed the curriculum.',
    mentors: [
      {
        name: 'Dr. Dakshinamurthy V Kolluru',
        role: 'Professor of Practice · Program Architect',
        institute: 'Golden Gate University',
        bio: 'B.E. from NIT Trichy, and M.S. and Ph.D. from Carnegie Mellon University, with over 20 years of experience. Specialised areas include ML, Optimization, Artificial Neural Networks, Deep Learning, Text Mining, Mathematical Algorithms, and Pattern Extraction.',
        photoUrl: '/images/site/doctoral/dba-gen-ai-golden-gate/kolluru.webp',
      },
      {
        name: 'Dr. Venkatesh Sunkad',
        role: 'Professor of Practice, GGU · Program Architect',
        institute: 'Golden Gate University',
        bio: 'Ph.D. from the University of Colorado, USA, and an M.S. from the University of Texas at Arlington. Over 20 years of experience across IoT, Systems Architecture, Network Security, Machine Learning, and IT Strategy.',
        photoUrl: '/images/site/doctoral/dba-gen-ai-golden-gate/sunkad.webp',
      },
      {
        name: 'Dr. Sridhar Pappu',
        role: 'Professor of Practice · Program Architect',
        institute: 'Golden Gate University',
        bio: 'PhD from The University of Texas at El Paso, BE from NIT Tiruchirappalli. 24+ years of experience in Statistics and Probability for Data Science, Machine Learning, Data Visualization, and Storytelling with Data.',
        photoUrl: '/images/site/doctoral/dba-gen-ai-golden-gate/pappu.webp',
      },
      {
        name: 'Dr. Sumitra Padmanabhan',
        role: 'Professor of Practice · Program Architect',
        institute: 'Golden Gate University',
        bio: 'PhD from Nirma University, Ahmedabad; MS Data Science from LJMU, UK; MTech from BITS Pilani. 26 years of experience in Machine Learning, NLP, Data Mining, Mathematical Modeling, ML for Space Weather, and Business Analytics.',
        photoUrl: '/images/site/doctoral/dba-gen-ai-golden-gate/padmanabhan.webp',
      },
    ],
    facultyEyebrow: 'Faculty',
    facultyTitle: 'GGU DBA in Emerging Technologies — Faculty',
    facultyDescription: 'The faculty who deliver the curriculum.',
    faculty: [
      {
        name: 'Dr. Manish Gupta',
        role: 'Faculty',
        institute: 'Golden Gate University',
        bio: 'PhD from Univ of Illinois at Urbana-Champaign, MTech from IIT Bombay, BE from Mumbai University. 13+ years of experience in Deep Learning, Machine Learning, NLP, Web Mining, Information Retrieval, and Data Mining.',
        photoUrl: '/images/site/doctoral/dba-gen-ai-golden-gate/manish-gupta.webp',
      },
      {
        name: 'Dr. L. Srinivasa Varadharajan',
        role: 'Faculty',
        institute: 'Golden Gate University',
        bio: 'PhD from University of Missouri-Saint Louis, MSc from IIT Madras. 23+ years of experience in Early Diagnosis of Neurological Disorders and Diseases, and Healthcare at Scale — Telemedicine Sustainable Development.',
        photoUrl: '/images/site/doctoral/dba-gen-ai-golden-gate/srinivasa.webp',
      },
      {
        name: 'Dr. Shonraj Ballae Ganeshrao',
        role: 'Faculty',
        institute: 'Golden Gate University',
        bio: 'PhD from University of Melbourne, MPhil from Birla Institute of Technology and Science. 12+ years of experience, with expertise in AI in Healthcare.',
        photoUrl: '/images/site/doctoral/dba-gen-ai-golden-gate/shonraj.webp',
      },
      {
        name: 'Dr. Kishore Reddy Konda',
        role: 'Faculty',
        institute: 'Golden Gate University',
        bio: 'PhD from Goethe University Frankfurt, Masters in Computer Science from The University of Bonn. 12 years of experience applying Deep Learning and Generative Model research to Knowledge Discovery, Data Quality Management, Data Compliance and Governance, and OCR.',
        photoUrl: '/images/site/doctoral/dba-gen-ai-golden-gate/kishore.webp',
      },
      {
        name: 'Dr. Sunil Kumar Vuppala',
        role: 'Faculty',
        institute: 'Golden Gate University',
        bio: 'PhD from IIIT Bangalore, M.Tech from IIT Roorkee. 20 years of experience in Machine Learning, Deep Learning, Optimization, Trusted AI, Generative AI, and Internet of Things.',
        photoUrl: '/images/site/doctoral/dba-gen-ai-golden-gate/sunil.webp',
      },
    ],
    admissionSteps: [
      { title: 'Complete Application', desc: 'Fill in details of your education and work experience, and submit your Statement of Purpose.' },
      { title: 'Application Review', desc: 'The admission panel reviews the SOP and candidate profile to assess fitment.' },
      { title: 'Receive the Offer Letter', desc: 'Shortlisted candidates are sent the Offer Letter.' },
    ],
    whySection: {
      title: 'How the GGU DBA in Generative AI Is Different from a Traditional PhD',
      sections: [
        { heading: 'Built for practitioners, not just academics', body: 'The GGU DBA is designed for experienced professionals aiming to apply research to solve real-world business challenges and drive organisational innovation, while a PhD is more suited to those seeking to expand theoretical knowledge within academia — completed in as little as 27 months versus up to 5+ years for a traditional PhD.' },
        { heading: 'A Silicon Valley doctorate recognised worldwide', body: 'Golden Gate University, established 1901 in San Francisco, has helped working professionals advance their careers for over 120 years, with a portfolio of more than 60 degrees and certificates. It is accredited by WASC Senior College and University Commission (WSCUC) since 1959, recognised by AACSB and WES, and is a member of the Association of Indian Universities (AIU).' },
        { heading: 'Who should pursue this programme', body: 'Senior managers, entrepreneurs, and executives with a background in management, analytics, or technology who want to deepen their expertise and specialise in generative AI-driven leadership.' },
        { heading: 'What sets this programme apart', body: '500 hours of live learning, two global immersions in Singapore and San Francisco, faculty with 75+ patents and 300+ publications, industry tools (SPSS, R, Tableau, SmartPLS, Generative AI platforms), and a 27-month completion timeline.' },
      ],
    },
    faqs: [
      { q: 'What is the DBA program at GGU?', a: 'A doctoral programme for experienced professionals who want to move into leadership and research-driven roles, combining advanced management studies with practical insights — including a concentration in Generative AI and Emerging Technologies.' },
      { q: 'What global learning opportunities does this DBA offer?', a: 'Accredited by WSCUC and connected to a global alumni network of 68,000+, the programme includes two global AI immersion hubs: Singapore (5 days) and San Francisco (5 days).' },
      { q: 'Why should you choose Golden Gate University for a DBA in Generative AI?', a: 'GGU is one of California\'s oldest universities (est. 1901), accredited by WSCUC and recognised by AACSB and WES. Faculty bring 80+ years of combined AI/ML teaching experience, 15+ patents and 125+ publications. No GMAT/GRE required, and the programme can be completed in 27 months.' },
      { q: 'For how long can I access live session recordings on the platform?', a: 'Live session recordings remain accessible for one year from the date of the session or until the end of the program duration, whichever is earlier.' },
      { q: 'Who is eligible for the DBA in Emerging Technologies and Generative AI?', a: "Generally a Bachelor's/Master's degree in business or a related field plus significant professional experience. GGU accepts senior managers, entrepreneurs and executives with a background in management, analytics or technology." },
      { q: 'Which is better, MBA or DBA?', a: 'An MBA builds broad management skills; a DBA is meant for experienced professionals aiming for leadership and research-driven decision-making. A DBA in Generative AI gives an edge over a traditional MBA for C-suite roles.' },
      { q: 'How much do I pay to block my seat?', a: 'INR 44,999 to block your seat for the DBA in Emerging Technologies with Concentration in Generative AI.' },
      { q: 'What additional costs does a learner bear for the immersions?', a: 'Airport transfers and flight tickets, logistics/transfers to hotel & university, accommodation, visa cost, travel insurance, and breakfast & dinner. Lunch is provided by upGrad during the immersion.' },
      { q: 'What is included in the program fee?', a: 'Tuition, course materials, lunches on immersion days, and opening/closing dinners. It does not include travel, accommodation, or other incidentals — participants settle these before the programme ends.' },
      { q: 'Which banks allow 0% Credit Card EMI?', a: 'No-cost EMI is available on credit cards from all major banks (American Express, Bank of Baroda, HDFC Bank, ICICI Bank, IndusInd Bank, Kotak Mahindra Bank, RBL Bank, Standard Chartered, Axis Bank, Yes Bank and State Bank of India), subject to a minimum transaction of INR 44,999.' },
      { q: 'What is the refund and deferral policy for this program?', a: 'You may request a refund at any time before the Cohort Commencement Date via the "My Application" section on upgrad.com; a processing fee of ₹10,000 applies. Once the programme commences, no refund request will be considered. A deferral provision is available for postponing your start date or taking a break — speak to an upGrad Admission Counselor for details.' },
      { q: 'Will I get an extension if I am unable to complete the program within the stipulated time?', a: 'Yes, you have the option to extend the program duration by up to 9 months at no additional cost.' },
      { q: 'How can a DBA in Generative AI boost your C-Suite career prospects?', a: 'It equips leaders to apply AI to business strategy, decision-making and innovation, positioning executives as forward-thinking leaders who can scale companies in an AI-driven world — competitive for roles like CEO, CTO, or Chief Data Officer.' },
      { q: 'What are the inclusions and exclusions of the immersion part of the program?', a: 'Included: tuition, course materials, immersion-day lunches, and opening/closing dinners. Excluded: airfare and airport transfers, visa applications and processing, transportation to and from campus, accommodation, and travel health/accident insurance — all arranged and paid for by the learner.' },
    ],
    confirmed: true,
  },
]

export const getUpgradCourse = (slug: string) => upgradCourses.find((c) => c.slug === slug)

// ponytail: single self-check — CTO slug resolves and stays fully populated.
if (process.env.NODE_ENV === 'test') {
  const cto = getUpgradCourse('cto-ai-leadership-iiitb-iimu')
  if (!cto?.curriculum?.length || !cto.confirmed) throw new Error('CTO course data broke')
}
