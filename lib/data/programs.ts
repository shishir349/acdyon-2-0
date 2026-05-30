export interface CurriculumPhase {
  phase: number;
  title: string;
  duration: string;
  modules: string[];
}

export interface Programme {
  id: string;
  name: string;
  type: 'doctorate' | 'honorary' | 'course';
  category: 'DBA' | 'PhD' | 'Honorary Doctorate' | 'Honorary Professorship' | 'AI Course';
  description: string;
  duration: string;
  deliveryMode: string[];
  targetAudience: string[];
  outcomes: string[];
  curriculum: CurriculumPhase[];
  tools?: string[];
  projects?: string[];
  careerPathways: string[];
  accreditations: string[];
  universities: string[];
  slug: string;
}

export const programs: Programme[] = [
  {
    id: 'dba-general',
    name: 'Doctor of Business Administration',
    type: 'doctorate',
    category: 'DBA',
    description: 'Advanced business leadership qualification for senior executives',
    duration: '2-4 years',
    deliveryMode: ['Online', 'Part-Time', 'Hybrid'],
    targetAudience: [
      'Senior Business Executives',
      'Entrepreneurs',
      'Career Changers',
      'Business Leaders',
    ],
    outcomes: [
      'Advanced business strategy capability',
      'Executive leadership skills',
      'Research and critical thinking',
      'Global business perspective',
    ],
    curriculum: [
      {
        phase: 1,
        title: 'Foundations of Business Excellence',
        duration: '6 months',
        modules: [
          'Strategic Management',
          'Finance for Leaders',
          'Organizational Behavior',
        ],
      },
      {
        phase: 2,
        title: 'Advanced Business Specialization',
        duration: '6 months',
        modules: [
          'Your chosen specialization',
          'Advanced analytics',
          'Leadership development',
        ],
      },
      {
        phase: 3,
        title: 'Research & Thesis',
        duration: '12-24 months',
        modules: ['Original research', 'Thesis writing', 'Dissertation defense'],
      },
    ],
    careerPathways: [
      'Chief Executive Officer',
      'Chief Operating Officer',
      'Chief Financial Officer',
      'Management Consultant',
      'University Professor',
      'Corporate Strategy Director',
    ],
    accreditations: ['AACSB', 'ASIC', 'EQUIS'],
    universities: ['lsmt', 'kennedy', 'dunster', 'eimt', 'birchwood'],
    slug: 'dba',
  },

  {
    id: 'phd-general',
    name: 'Doctor of Philosophy',
    type: 'doctorate',
    category: 'PhD',
    description: 'Research-intensive doctoral qualification for academics and researchers',
    duration: '3-6 years',
    deliveryMode: ['Full-Time', 'Part-Time', 'Hybrid'],
    targetAudience: [
      'Academic Researchers',
      'Industry Research Scientists',
      'Career Academics',
      'Business Theorists',
    ],
    outcomes: [
      'Original scholarly research capability',
      'Advanced research methodology',
      'Publication in peer-reviewed journals',
      'Doctoral-level expertise in field',
    ],
    curriculum: [
      {
        phase: 1,
        title: 'Coursework & Research Methods',
        duration: '12 months',
        modules: [
          'Research methodology',
          'Literature review',
          'Field specialization',
        ],
      },
      {
        phase: 2,
        title: 'Research Proposal Development',
        duration: '6-12 months',
        modules: [
          'Research proposal',
          'Ethics approval',
          'Methodology refinement',
        ],
      },
      {
        phase: 3,
        title: 'Original Research & Dissertation',
        duration: '24-48 months',
        modules: ['Research execution', 'Data analysis', 'Dissertation writing'],
      },
    ],
    careerPathways: [
      'University Professor',
      'Research Scientist',
      'Think Tank Researcher',
      'Government Advisor',
      'Industry Research Director',
      'Academic Author',
    ],
    accreditations: ['AACSB', 'Regional accreditations'],
    universities: ['kennedy', 'dunster'],
    slug: 'phd',
  },

  {
    id: 'honorary-doctorate',
    name: 'Honorary Doctorate',
    type: 'honorary',
    category: 'Honorary Doctorate',
    description: 'Recognition of distinguished professional achievement and impact',
    duration: 'N/A - Awarded',
    deliveryMode: ['N/A'],
    targetAudience: [
      'Industry Leaders',
      'Philanthropists',
      'Innovators',
      'Community Builders',
    ],
    outcomes: [
      'Institutional recognition',
      'Academic credential',
      'Professional distinction',
      'Alumni network access',
    ],
    curriculum: [],
    careerPathways: [],
    accreditations: ['Multiple University Accreditations'],
    universities: ['lsmt', 'kennedy', 'dunster', 'eimt', 'london-bs', 'paris-sbs'],
    slug: 'honorary-doctorate',
  },

  {
    id: 'honorary-professorship',
    name: 'Honorary Professorship',
    type: 'honorary',
    category: 'Honorary Professorship',
    description: 'Academic distinction for established professionals and experts',
    duration: 'N/A - Awarded',
    deliveryMode: ['Hybrid'],
    targetAudience: [
      'Distinguished Professionals',
      'Industry Experts',
      'Executive Leaders',
    ],
    outcomes: [
      'Academic title',
      'Teaching opportunities',
      'Research collaboration',
      'Faculty network access',
    ],
    curriculum: [],
    careerPathways: [],
    accreditations: ['Multiple University Accreditations'],
    universities: ['kennedy', 'dunster', 'london-bs', 'paris-sbs'],
    slug: 'honorary-professorship',
  },

  {
    id: 'ai-automation',
    name: 'Agentic AI & Automation Mastery',
    type: 'course',
    category: 'AI Course',
    description: '4-month applied AI program focusing on business automation and agentic systems',
    duration: '4 months',
    deliveryMode: ['Online', 'Cohort-based'],
    targetAudience: [
      'Business Leaders',
      'Automation Specialists',
      'AI Professionals',
      'Career Changers',
    ],
    outcomes: [
      'Agentic AI implementation skills',
      'Workflow automation expertise',
      'Real-world project completion',
      'Industry-ready certification',
    ],
    tools: [
      'Claude API',
      'AutoGen',
      'LangChain',
      'Zapier',
      'Make',
      'Python',
    ],
    projects: [
      'Build an AI customer support agent',
      'Create automated workflow system',
      'Develop business process automation',
    ],
    curriculum: [
      {
        phase: 1,
        title: 'AI Fundamentals & Setup',
        duration: '3 weeks',
        modules: [
          'Agentic AI concepts',
          'Tool setup and configuration',
          'API integration basics',
        ],
      },
      {
        phase: 2,
        title: 'Building with Agents',
        duration: '4 weeks',
        modules: [
          'Agent design patterns',
          'Building multi-agent systems',
          'LLM optimization',
        ],
      },
      {
        phase: 3,
        title: 'Real-World Automation',
        duration: '3 weeks',
        modules: [
          'Business process automation',
          'Workflow orchestration',
          'Production deployment',
        ],
      },
      {
        phase: 4,
        title: 'Capstone Project',
        duration: '4 weeks',
        modules: ['Design', 'Build', 'Deploy', 'Present'],
      },
    ],
    careerPathways: [
      'AI Implementation Specialist',
      'Automation Engineer',
      'Business Analyst',
      'AI Consultant',
      'Technical Project Manager',
    ],
    accreditations: ['AcdyOn Certification'],
    universities: [],
    slug: 'agentic-ai-automation-mastery',
  },

  {
    id: 'ai-cybersecurity',
    name: 'Agentic AI & Cybersecurity Mastery',
    type: 'course',
    category: 'AI Course',
    description: '16-week AI-powered cybersecurity program for security professionals and career changers',
    duration: '16 weeks',
    deliveryMode: ['Online', 'Cohort-based'],
    targetAudience: [
      'Security Professionals',
      'AI Practitioners',
      'Career Changers to Security',
      'Business Leaders',
    ],
    outcomes: [
      'AI-powered security implementation',
      'Threat detection with AI',
      'Automated response systems',
      'Industry certification ready',
    ],
    tools: [
      'Claude API',
      'SIEM platforms',
      'Python',
      'Machine learning libraries',
      'Security frameworks',
    ],
    projects: [
      'Build AI threat detection system',
      'Create automated incident response',
      'Develop security analytics dashboard',
    ],
    curriculum: [
      {
        phase: 1,
        title: 'Cybersecurity Foundations',
        duration: '4 weeks',
        modules: [
          'Modern threat landscape',
          'Security architecture',
          'Compliance frameworks',
        ],
      },
      {
        phase: 2,
        title: 'AI for Security',
        duration: '6 weeks',
        modules: [
          'ML for threat detection',
          'Anomaly detection',
          'Predictive analytics',
        ],
      },
      {
        phase: 3,
        title: 'Building Security Solutions',
        duration: '6 weeks',
        modules: [
          'SIEM integration',
          'Automated response',
          'Incident management',
        ],
      },
    ],
    careerPathways: [
      'Security Operations Manager',
      'AI Security Specialist',
      'Chief Information Security Officer',
      'Security Architect',
      'Threat Intelligence Analyst',
    ],
    accreditations: ['AcdyOn Certification', 'Microsoft AI-900 eligible'],
    universities: [],
    slug: 'agentic-ai-cybersecurity-mastery',
  },
];

export const getProgrammeById = (id: string) =>
  programs.find(p => p.id === id);

export const getProgrammeBySlug = (slug: string) =>
  programs.find(p => p.slug === slug);

export const getProgrammesByType = (type: string) =>
  programs.filter(p => p.type === type);

export const getProgrammesByCategory = (category: string) =>
  programs.filter(p => p.category === category);
