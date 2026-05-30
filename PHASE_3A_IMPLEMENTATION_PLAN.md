# PHASE 3A IMPLEMENTATION PLAN
## Transform AcdyOn into a Decision-Support Platform

**Status:** Architecture Plan (Pre-Build)  
**Phase:** 3A - Programme Selection Enhancement  
**Target Completion:** Before Deployment (Phase 4)  
**Framework:** Next.js 15.3.3 + TypeScript + Tailwind CSS  

---

# 1. CENTRALIZED DATA ARCHITECTURE

## 1.1 Data Files Structure

All data lives in `/src/data/` directory.

### File: `/src/data/universities.ts`

```typescript
export interface University {
  id: string;
  name: string;
  country: string;
  city: string;
  accreditations: string[];
  recognition: string[];
  programmes: {
    dba?: boolean;
    phd?: boolean;
    honorary_doctorate?: boolean;
    honorary_professorship?: boolean;
  };
  duration: {
    dba?: { min: number; max: number }; // in months
    phd?: { min: number; max: number };
  };
  deliveryMode: string[]; // ['Full-Time', 'Part-Time', 'Online', 'Hybrid']
  logo: string; // URL to university logo
  website: string;
  description: string;
  ranking?: string; // e.g., "Top 500 Global Universities"
  established: number;
  sampleCertificate?: string; // URL to sample cert image
}

export const universities: University[] = [
  {
    id: "lsmt",
    name: "London School of Management and Technology",
    country: "UK",
    city: "London",
    accreditations: ["ASIC", "AACSB"],
    recognition: ["Globally Recognized", "Institutional Accreditation"],
    programmes: {
      dba: true,
      phd: false,
      honorary_doctorate: false,
      honorary_professorship: false,
    },
    duration: {
      dba: { min: 24, max: 48 },
    },
    deliveryMode: ["Online", "Hybrid"],
    logo: "/universities/lsmt-logo.png",
    website: "https://lsmt.ac.uk",
    description: "Pioneering online education with global reach",
    ranking: "Top 500 Global Universities",
    established: 2003,
    sampleCertificate: "/certificates/dba-sample.png",
  },
  
  {
    id: "kennedy",
    name: "Kennedy University",
    country: "USA",
    city: "New Jersey",
    accreditations: ["ASIC", "AACSB", "ACBSP"],
    recognition: ["US Accredited", "Globally Recognized"],
    programmes: {
      dba: true,
      phd: true,
      honorary_doctorate: true,
      honorary_professorship: true,
    },
    duration: {
      dba: { min: 24, max: 48 },
      phd: { min: 36, max: 72 },
    },
    deliveryMode: ["Online", "Part-Time", "Hybrid"],
    logo: "/universities/kennedy-logo.png",
    website: "https://kennedy.edu",
    description: "American accredited institution with 50+ years of excellence",
    ranking: "Top 300 Global Universities",
    established: 1970,
    sampleCertificate: "/certificates/phd-sample.png",
  },

  {
    id: "dunster",
    name: "Dunster Business School",
    country: "UK",
    city: "Manchester",
    accreditations: ["AACSB", "EQUIS"],
    recognition: ["UK Chartered", "International Accreditation"],
    programmes: {
      dba: true,
      phd: true,
      honorary_doctorate: true,
      honorary_professorship: true,
    },
    duration: {
      dba: { min: 18, max: 36 },
      phd: { min: 36, max: 60 },
    },
    deliveryMode: ["Full-Time", "Part-Time", "Online"],
    logo: "/universities/dunster-logo.png",
    website: "https://dunster.ac.uk",
    description: "Premium UK business school with triple accreditation",
    ranking: "Top 200 Global Universities",
    established: 1985,
    sampleCertificate: "/certificates/dba-dunster.png",
  },

  {
    id: "eimt",
    name: "European Institute of Management and Technology",
    country: "Belgium",
    city: "Brussels",
    accreditations: ["AACSB", "EQUIS"],
    recognition: ["European Accreditation", "International Recognition"],
    programmes: {
      dba: true,
      phd: false,
      honorary_doctorate: true,
      honorary_professorship: false,
    },
    duration: {
      dba: { min: 20, max: 40 },
    },
    deliveryMode: ["Hybrid", "Online"],
    logo: "/universities/eimt-logo.png",
    website: "https://eimt.be",
    description: "Europe's leading management institute",
    ranking: "Top 250 Global Universities",
    established: 1992,
    sampleCertificate: "/certificates/dba-eimt.png",
  },

  {
    id: "birchwood",
    name: "Birchwood University",
    country: "Canada",
    city: "Ontario",
    accreditations: ["AACSB"],
    recognition: ["Canadian Accredited", "North American Recognition"],
    programmes: {
      dba: true,
      phd: false,
      honorary_doctorate: false,
      honorary_professorship: false,
    },
    duration: {
      dba: { min: 24, max: 48 },
    },
    deliveryMode: ["Online", "Part-Time"],
    logo: "/universities/birchwood-logo.png",
    website: "https://birchwood.ca",
    description: "Canadian institution specializing in business education",
    ranking: "Top 400 Global Universities",
    established: 1998,
    sampleCertificate: "/certificates/dba-birchwood.png",
  },

  {
    id: "london-bs",
    name: "London School of Business and Science",
    country: "UK",
    city: "London",
    accreditations: ["ASIC", "AACSB"],
    recognition: ["UK Recognized", "International Accreditation"],
    programmes: {
      dba: false,
      phd: false,
      honorary_doctorate: true,
      honorary_professorship: true,
    },
    deliveryMode: ["Hybrid"],
    logo: "/universities/lsbs-logo.png",
    website: "https://lsbs.ac.uk",
    description: "Prestigious London institution for executive recognition",
    ranking: "Top 350 Global Universities",
    established: 1988,
  },

  {
    id: "paris-sbs",
    name: "Paris School of Business and Science",
    country: "France",
    city: "Paris",
    accreditations: ["EQUIS", "AACSB"],
    recognition: ["European Accreditation", "International Recognition"],
    programmes: {
      dba: false,
      phd: false,
      honorary_doctorate: true,
      honorary_professorship: true,
    },
    deliveryMode: ["Hybrid"],
    logo: "/universities/paris-sbs-logo.png",
    website: "https://paris-sbs.fr",
    description: "Premier French institution for honorary recognition programs",
    ranking: "Top 300 Global Universities",
    established: 1995,
  },
];

// Helper functions
export const getUniversitiesByCountry = (country: string) =>
  universities.filter(u => u.country === country);

export const getUniversitiesForProgramme = (programme: 'dba' | 'phd' | 'honorary_doctorate' | 'honorary_professorship') =>
  universities.filter(u => u.programmes[programme]);

export const getUniversityById = (id: string) =>
  universities.find(u => u.id === id);
```

### File: `/src/data/programs.ts`

```typescript
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
  curriculum: {
    phase: number;
    title: string;
    duration: string;
    modules: string[];
  }[];
  tools?: string[];
  projects?: string[];
  careerPathways: string[];
  accreditations: string[];
  universities: string[]; // University IDs
  slug: string;
}

export const programs: Programme[] = [
  {
    id: "dba-general",
    name: "Doctor of Business Administration",
    type: "doctorate",
    category: "DBA",
    description: "Advanced business leadership qualification",
    duration: "2-4 years",
    deliveryMode: ["Online", "Part-Time", "Hybrid"],
    targetAudience: [
      "Senior Business Executives",
      "Entrepreneurs",
      "Career Changers",
      "Business Leaders",
    ],
    outcomes: [
      "Advanced business strategy capability",
      "Executive leadership skills",
      "Research and critical thinking",
      "Global business perspective",
    ],
    curriculum: [
      {
        phase: 1,
        title: "Foundations of Business Excellence",
        duration: "6 months",
        modules: [
          "Strategic Management",
          "Finance for Leaders",
          "Organizational Behavior",
        ],
      },
      {
        phase: 2,
        title: "Advanced Business Specialization",
        duration: "6 months",
        modules: [
          "Your chosen specialization",
          "Advanced analytics",
          "Leadership development",
        ],
      },
      {
        phase: 3,
        title: "Research & Thesis",
        duration: "12-24 months",
        modules: ["Original research", "Thesis writing", "Dissertation defense"],
      },
    ],
    careerPathways: [
      "Chief Executive Officer",
      "Chief Operating Officer",
      "Chief Financial Officer",
      "Management Consultant",
      "University Professor",
      "Corporate Strategy Director",
    ],
    accreditations: ["AACSB", "ASIC", "EQUIS"],
    universities: ["lsmt", "kennedy", "dunster", "eimt", "birchwood"],
    slug: "dba",
  },

  {
    id: "phd-general",
    name: "Doctor of Philosophy",
    type: "doctorate",
    category: "PhD",
    description: "Research-intensive doctoral qualification",
    duration: "3-6 years",
    deliveryMode: ["Full-Time", "Part-Time", "Hybrid"],
    targetAudience: [
      "Academic Researchers",
      "Industry Research Scientists",
      "Career Academics",
      "Business Theorists",
    ],
    outcomes: [
      "Original scholarly research capability",
      "Advanced research methodology",
      "Publication in peer-reviewed journals",
      "Doctoral-level expertise in field",
    ],
    curriculum: [
      {
        phase: 1,
        title: "Coursework & Research Methods",
        duration: "12 months",
        modules: [
          "Research methodology",
          "Literature review",
          "Field specialization",
        ],
      },
      {
        phase: 2,
        title: "Research Proposal Development",
        duration: "6-12 months",
        modules: [
          "Research proposal",
          "Ethics approval",
          "Methodology refinement",
        ],
      },
      {
        phase: 3,
        title: "Original Research & Dissertation",
        duration: "24-48 months",
        modules: ["Research execution", "Data analysis", "Dissertation writing"],
      },
    ],
    careerPathways: [
      "University Professor",
      "Research Scientist",
      "Think Tank Researcher",
      "Government Advisor",
      "Industry Research Director",
      "Academic Author",
    ],
    accreditations: ["AACSB", "Regional accreditations"],
    universities: ["kennedy", "dunster"],
    slug: "phd",
  },

  {
    id: "honorary-doctorate",
    name: "Honorary Doctorate",
    type: "honorary",
    category: "Honorary Doctorate",
    description: "Recognition of distinguished professional achievement",
    duration: "N/A - Awarded",
    deliveryMode: ["N/A"],
    targetAudience: [
      "Industry Leaders",
      "Philanthropists",
      "Innovators",
      "Community Builders",
    ],
    outcomes: [
      "Institutional recognition",
      "Academic credential",
      "Professional distinction",
      "Alumni network access",
    ],
    curriculum: [],
    careerPathways: [],
    accreditations: ["Multiple University Accreditations"],
    universities: ["lsmt", "kennedy", "dunster", "eimt", "london-bs", "paris-sbs"],
    slug: "honorary-doctorate",
  },

  {
    id: "honorary-professorship",
    name: "Honorary Professorship",
    type: "honorary",
    category: "Honorary Professorship",
    description: "Academic distinction for established professionals",
    duration: "N/A - Awarded",
    deliveryMode: ["Hybrid"],
    targetAudience: [
      "Distinguished Professionals",
      "Industry Experts",
      "Executive Leaders",
    ],
    outcomes: [
      "Academic title",
      "Teaching opportunities",
      "Research collaboration",
      "Faculty network access",
    ],
    curriculum: [],
    careerPathways: [],
    accreditations: ["Multiple University Accreditations"],
    universities: ["kennedy", "dunster", "london-bs", "paris-sbs"],
    slug: "honorary-professorship",
  },

  {
    id: "ai-automation",
    name: "Agentic AI & Automation Mastery",
    type: "course",
    category: "AI Course",
    description: "4-month applied AI program for business automation",
    duration: "4 months",
    deliveryMode: ["Online", "Cohort-based"],
    targetAudience: [
      "Business Leaders",
      "Automation Specialists",
      "AI Professionals",
      "Career Changers",
    ],
    outcomes: [
      "Agentic AI implementation skills",
      "Workflow automation expertise",
      "Real-world project completion",
      "Industry-ready certification",
    ],
    tools: [
      "Claude API",
      "AutoGen",
      "LangChain",
      "Zapier",
      "Make",
      "Python",
    ],
    projects: [
      "Build an AI customer support agent",
      "Create automated workflow system",
      "Develop business process automation",
    ],
    curriculum: [
      {
        phase: 1,
        title: "AI Fundamentals & Setup",
        duration: "3 weeks",
        modules: [
          "Agentic AI concepts",
          "Tool setup and configuration",
          "API integration basics",
        ],
      },
      {
        phase: 2,
        title: "Building with Agents",
        duration: "4 weeks",
        modules: [
          "Agent design patterns",
          "Building multi-agent systems",
          "LLM optimization",
        ],
      },
      {
        phase: 3,
        title: "Real-World Automation",
        duration: "3 weeks",
        modules: [
          "Business process automation",
          "Workflow orchestration",
          "Production deployment",
        ],
      },
      {
        phase: 4,
        title: "Capstone Project",
        duration: "4 weeks",
        modules: ["Design", "Build", "Deploy", "Present"],
      },
    ],
    careerPathways: [
      "AI Implementation Specialist",
      "Automation Engineer",
      "Business Analyst",
      "AI Consultant",
      "Technical Project Manager",
    ],
    accreditations: ["AcdyOn Certification"],
    universities: [],
    slug: "agentic-ai-automation-mastery",
  },

  {
    id: "ai-cybersecurity",
    name: "Agentic AI & Cybersecurity Mastery",
    type: "course",
    category: "AI Course",
    description: "16-week AI-powered cybersecurity program",
    duration: "16 weeks",
    deliveryMode: ["Online", "Cohort-based"],
    targetAudience: [
      "Security Professionals",
      "AI Practitioners",
      "Career Changers to Security",
      "Business Leaders",
    ],
    outcomes: [
      "AI-powered security implementation",
      "Threat detection with AI",
      "Automated response systems",
      "Industry certification ready",
    ],
    tools: [
      "Claude API",
      "SIEM platforms",
      "Python",
      "Machine learning libraries",
      "Security frameworks",
    ],
    projects: [
      "Build AI threat detection system",
      "Create automated incident response",
      "Develop security analytics dashboard",
    ],
    curriculum: [
      {
        phase: 1,
        title: "Cybersecurity Foundations",
        duration: "4 weeks",
        modules: [
          "Modern threat landscape",
          "Security architecture",
          "Compliance frameworks",
        ],
      },
      {
        phase: 2,
        title: "AI for Security",
        duration: "6 weeks",
        modules: [
          "ML for threat detection",
          "Anomaly detection",
          "Predictive analytics",
        ],
      },
      {
        phase: 3,
        title: "Building Security Solutions",
        duration: "6 weeks",
        modules: [
          "SIEM integration",
          "Automated response",
          "Incident management",
        ],
      },
    ],
    careerPathways: [
      "Security Operations Manager",
      "AI Security Specialist",
      "CISO",
      "Security Architect",
      "Threat Intelligence Analyst",
    ],
    accreditations: ["AcdyOn Certification", "Microsoft AI-900 eligible"],
    universities: [],
    slug: "agentic-ai-cybersecurity-mastery",
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
```

### File: `/src/data/pricing.ts`

```typescript
export interface PricingTier {
  programme: string; // Programme ID
  university?: string; // University ID (optional, for when price varies by uni)
  currency: string;
  baseTuition: number;
  scholarshipAmount: number;
  netFee: number;
  installmentPlans: {
    full: number; // Full payment
    three: number; // 3 installments
    six: number; // 6 installments
    twelve: number; // 12 installments
  };
  geoRestrictions?: string[]; // Countries where this pricing applies
  description: string;
}

export const pricing: PricingTier[] = [
  {
    programme: "dba-general",
    university: "lsmt",
    currency: "USD",
    baseTuition: 35000,
    scholarshipAmount: 5000,
    netFee: 30000,
    installmentPlans: {
      full: 30000,
      three: 10500,
      six: 5250,
      twelve: 2625,
    },
    description: "DBA from London School of Management and Technology",
  },

  {
    programme: "dba-general",
    university: "kennedy",
    currency: "USD",
    baseTuition: 42000,
    scholarshipAmount: 7000,
    netFee: 35000,
    installmentPlans: {
      full: 35000,
      three: 11750,
      six: 5875,
      twelve: 2958,
    },
    description: "DBA from Kennedy University",
  },

  {
    programme: "phd-general",
    university: "kennedy",
    currency: "USD",
    baseTuition: 55000,
    scholarshipAmount: 8000,
    netFee: 47000,
    installmentPlans: {
      full: 47000,
      three: 15667,
      six: 7833,
      twelve: 3917,
    },
    description: "PhD from Kennedy University",
  },

  {
    programme: "phd-general",
    university: "dunster",
    currency: "GBP",
    baseTuition: 48000,
    scholarshipAmount: 6000,
    netFee: 42000,
    installmentPlans: {
      full: 42000,
      three: 14000,
      six: 7000,
      twelve: 3500,
    },
    description: "PhD from Dunster Business School",
  },

  {
    programme: "ai-automation",
    currency: "USD",
    baseTuition: 2999,
    scholarshipAmount: 300,
    netFee: 2699,
    installmentPlans: {
      full: 2699,
      three: 900,
      six: 450,
      twelve: 225,
    },
    description: "Agentic AI & Automation Mastery - 4 months",
  },

  {
    programme: "ai-cybersecurity",
    currency: "USD",
    baseTuition: 3999,
    scholarshipAmount: 400,
    netFee: 3599,
    installmentPlans: {
      full: 3599,
      three: 1200,
      six: 600,
      twelve: 300,
    },
    description: "Agentic AI & Cybersecurity Mastery - 16 weeks",
  },

  {
    programme: "honorary-doctorate",
    currency: "USD",
    baseTuition: 5000,
    scholarshipAmount: 0,
    netFee: 5000,
    installmentPlans: {
      full: 5000,
      three: 1667,
      six: 833,
      twelve: 417,
    },
    description: "Honorary Doctorate - One-time recognition fee",
  },

  {
    programme: "honorary-professorship",
    currency: "USD",
    baseTuition: 3000,
    scholarshipAmount: 0,
    netFee: 3000,
    installmentPlans: {
      full: 3000,
      three: 1000,
      six: 500,
      twelve: 250,
    },
    description: "Honorary Professorship - Annual membership",
  },
];

export const getPricingByProgramme = (programmeId: string) =>
  pricing.filter(p => p.programme === programmeId);

export const getPricingByProgrammeAndUniversity = (programmeId: string, universityId: string) =>
  pricing.find(p => p.programme === programmeId && p.university === universityId);

export const calculateInstallment = (
  programmeId: string,
  universityId?: string,
  months: 1 | 3 | 6 | 12 = 1
) => {
  const pricingTier = universityId
    ? getPricingByProgrammeAndUniversity(programmeId, universityId)
    : getPricingByProgramme(programmeId)[0];

  if (!pricingTier) return null;

  const monthlyRate = 0.01; // 1% monthly interest (configurable)
  const amount = pricingTier.installmentPlans[months];
  const totalWithInterest = amount * months * (1 + monthlyRate);

  return {
    monthlyAmount: amount,
    totalAmount: totalWithInterest,
    months,
    currency: pricingTier.currency,
  };
};
```

### File: `/src/data/accreditations.ts`

```typescript
export interface Accreditation {
  id: string;
  name: string;
  fullName: string;
  description: string;
  logo: string; // URL to logo
  website: string;
  recognition: 'global' | 'regional' | 'national';
  programmes: string[]; // Programme IDs accredited
  universities: string[]; // University IDs holding this accreditation
}

export const accreditations: Accreditation[] = [
  {
    id: "aacsb",
    name: "AACSB",
    fullName: "Association to Advance Collegiate Schools of Business",
    description:
      "Premier business school accreditation body. Less than 5% of global business schools hold AACSB accreditation.",
    logo: "/accreditations/aacsb-logo.png",
    website: "https://www.aacsb.edu",
    recognition: "global",
    programmes: ["dba-general", "phd-general"],
    universities: ["lsmt", "kennedy", "dunster", "eimt", "london-bs"],
  },

  {
    id: "asic",
    name: "ASIC",
    fullName: "Accrediting Council for Independent Colleges and Schools",
    description:
      "Institutional accreditation recognized by USDOE and CHEA. Ensures quality and integrity of educational institutions.",
    logo: "/accreditations/asic-logo.png",
    website: "https://www.acics.org",
    recognition: "global",
    programmes: ["dba-general"],
    universities: ["lsmt", "london-bs"],
  },

  {
    id: "equis",
    name: "EQUIS",
    fullName: "European Quality Improvement System",
    description:
      "European business school accreditation. Only 1% of European business schools hold EQUIS accreditation.",
    logo: "/accreditations/equis-logo.png",
    website: "https://www.efmd.org/equis",
    recognition: "global",
    programmes: ["dba-general", "phd-general"],
    universities: ["dunster", "eimt", "paris-sbs"],
  },

  {
    id: "acbsp",
    name: "ACBSP",
    fullName: "Accreditation Council for Business Schools and Programs",
    description: "American business accreditation agency. Emphasis on quality assurance and continuous improvement.",
    logo: "/accreditations/acbsp-logo.png",
    website: "https://www.acbsp.org",
    recognition: "regional",
    programmes: ["dba-general"],
    universities: ["kennedy"],
  },
];

export const getAccreditationById = (id: string) =>
  accreditations.find(a => a.id === id);

export const getAccreditationsByProgramme = (programmeId: string) =>
  accreditations.filter(a => a.programmes.includes(programmeId));

export const getAccreditationsByUniversity = (universityId: string) =>
  accreditations.filter(a => a.universities.includes(universityId));
```

---

## 1.2 Data Import & Usage Pattern

All components import from centralized data:

```typescript
// Example in component
import { universities, getUniversitiesByCountry } from '@/data/universities';
import { programs, getProgrammeById } from '@/data/programs';
import { pricing, getPricingByProgramme } from '@/data/pricing';
import { accreditations, getAccreditationsByProgramme } from '@/data/accreditations';

export default function UniversityComparison({ programmeId }: { programmeId: string }) {
  const programme = getProgrammeById(programmeId);
  const programmeUniversities = universities.filter(u =>
    programme?.universities.includes(u.id)
  );
  const accreds = getAccreditationsByProgramme(programmeId);
  
  // Render with data
}
```

**Benefit:** Change university info once, reflects everywhere (DRY principle).

---

# 2. GEO-PERSONALIZATION ARCHITECTURE

## 2.1 Geo Detection Hook

**File:** `/src/hooks/useGeoCountry.ts`

```typescript
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

type CountryCode = 'in' | 'uk' | 'us' | 'ae' | 'sa' | 'qa' | 'ca' | 'eu';

export function useGeoCountry(): CountryCode | null {
  const searchParams = useSearchParams();
  const [country, setCountry] = useState<CountryCode | null>(null);

  useEffect(() => {
    // Priority 1: Query parameter overrides everything
    const queryCountry = searchParams.get('country');
    if (queryCountry) {
      setCountry(queryCountry as CountryCode);
      return;
    }

    // Priority 2: IP-based detection (production)
    detectCountryFromIP();
  }, [searchParams]);

  const detectCountryFromIP = async () => {
    try {
      // Use a free IP geolocation API in production
      // Example: ip-api.com, geoip.js, MaxMind, or Cloudflare Headers
      const response = await fetch('/api/geo-detect');
      const data = await response.json();
      setCountry(mapCountryToCode(data.country));
    } catch (error) {
      // Default to 'in' (India) if detection fails
      setCountry('in');
    }
  };

  return country;
}

function mapCountryToCode(country: string): CountryCode {
  const countryMap: { [key: string]: CountryCode } = {
    India: 'in',
    'United Kingdom': 'uk',
    'United States': 'us',
    'United Arab Emirates': 'ae',
    'Saudi Arabia': 'sa',
    Qatar: 'qa',
    Canada: 'ca',
    // Add more mappings
  };

  return countryMap[country] || 'in';
}
```

## 2.2 Geo-Specific Content Component

**File:** `/src/components/GeoSection.tsx`

```typescript
interface GeoSectionProps {
  showFor?: CountryCode[];
  hideFor?: CountryCode[];
  children: React.ReactNode;
}

export function GeoSection({
  showFor,
  hideFor,
  children,
}: GeoSectionProps) {
  const country = useGeoCountry();

  if (!country) return null;

  // Show if specified in showFor OR not specified in hideFor
  const shouldShow =
    (showFor ? showFor.includes(country) : true) &&
    (hideFor ? !hideFor.includes(country) : true);

  return shouldShow ? <>{children}</> : null;
}

// Usage example:
// <GeoSection showFor={['uk', 'us', 'ae']}>
//   <MicrosoftAI900CertificationSection />
// </GeoSection>

// <GeoSection hideFor={['in']}>
//   <MicrosoftCertificationOffer />
// </GeoSection>
```

## 2.3 Testing URL Examples

```
Development - Query Parameter Overrides:

/programmes/agentic-ai-cybersecurity-mastery?country=in
/programmes/agentic-ai-cybersecurity-mastery?country=uk
/programmes/agentic-ai-cybersecurity-mastery?country=us
/programmes/agentic-ai-cybersecurity-mastery?country=ae

Production - IP Detection:
/programmes/agentic-ai-cybersecurity-mastery
(Automatically detects user's country)
```

---

# 3. UNIVERSITY COMPARISON COMPONENT

## 3.1 Component Architecture

**File:** `/src/components/UniversityComparison.tsx`

```typescript
interface UniversityComparisonProps {
  programmeId: string;
  initialUniversityIds?: string[];
}

export function UniversityComparison({
  programmeId,
  initialUniversityIds,
}: UniversityComparisonProps) {
  const [selectedUniversities, setSelectedUniversities] = useState<Set<string>>(
    new Set(initialUniversityIds)
  );
  const [sortBy, setSortBy] = useState<
    'name' | 'duration' | 'tuition' | 'net-cost'
  >('name');
  const [filterCountry, setFilterCountry] = useState<string | null>(null);

  const programme = getProgrammeById(programmeId);
  let compareUniversities = universities.filter(u =>
    programme?.universities.includes(u.id)
  );

  // Apply filters
  if (filterCountry) {
    compareUniversities = compareUniversities.filter(
      u => u.country === filterCountry
    );
  }

  // Apply sorting
  compareUniversities = compareUniversities.sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'duration':
        return (
          (programme?.duration.localeCompare(programme?.duration) ?? 0)
        );
      case 'tuition':
        const priceA = getPricingByProgrammeAndUniversity(programmeId, a.id);
        const priceB = getPricingByProgrammeAndUniversity(programmeId, b.id);
        return (priceA?.baseTuition ?? 0) - (priceB?.baseTuition ?? 0);
      case 'net-cost':
        const netA = getPricingByProgrammeAndUniversity(programmeId, a.id);
        const netB = getPricingByProgrammeAndUniversity(programmeId, b.id);
        return (netA?.netFee ?? 0) - (netB?.netFee ?? 0);
    }
  });

  return (
    <div className="space-y-6">
      {/* Filters & Sort */}
      <div className="flex gap-4">
        <select
          value={filterCountry ?? ''}
          onChange={e => setFilterCountry(e.target.value || null)}
          className="px-4 py-2 border rounded"
        >
          <option value="">All Countries</option>
          {Array.from(new Set(compareUniversities.map(u => u.country)))
            .sort()
            .map(country => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
        </select>

        <select
          value={sortBy}
          onChange={e => setSortBy(e.target.value as any)}
          className="px-4 py-2 border rounded"
        >
          <option value="name">Sort by Name</option>
          <option value="duration">Sort by Duration</option>
          <option value="tuition">Sort by Tuition</option>
          <option value="net-cost">Sort by Net Cost</option>
        </select>
      </div>

      {/* Comparison Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-navy text-white">
              <th className="border p-3 text-left">University</th>
              <th className="border p-3 text-left">Country</th>
              <th className="border p-3 text-left">Duration</th>
              <th className="border p-3 text-left">Delivery</th>
              <th className="border p-3 text-right">Tuition</th>
              <th className="border p-3 text-right">Scholarship</th>
              <th className="border p-3 text-right">Net Cost</th>
              <th className="border p-3 text-left">Accreditation</th>
              <th className="border p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {compareUniversities.map(university => {
              const pricing = getPricingByProgrammeAndUniversity(
                programmeId,
                university.id
              );
              const accreds = getAccreditationsByUniversity(university.id);

              return (
                <tr key={university.id} className="hover:bg-gray-50">
                  <td className="border p-3 font-semibold">{university.name}</td>
                  <td className="border p-3">{university.country}</td>
                  <td className="border p-3">{programme?.duration}</td>
                  <td className="border p-3">
                    {university.deliveryMode.join(', ')}
                  </td>
                  <td className="border p-3 text-right">
                    ${pricing?.baseTuition.toLocaleString()}
                  </td>
                  <td className="border p-3 text-right">
                    -${pricing?.scholarshipAmount.toLocaleString()}
                  </td>
                  <td className="border p-3 text-right font-bold text-blue-600">
                    ${pricing?.netFee.toLocaleString()}
                  </td>
                  <td className="border p-3">
                    {accreds.map(a => (
                      <span
                        key={a.id}
                        className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded mr-1 text-xs"
                      >
                        {a.id.toUpperCase()}
                      </span>
                    ))}
                  </td>
                  <td className="border p-3 text-center">
                    <button
                      onClick={() => {
                        const newSelected = new Set(selectedUniversities);
                        if (newSelected.has(university.id)) {
                          newSelected.delete(university.id);
                        } else {
                          newSelected.add(university.id);
                        }
                        setSelectedUniversities(newSelected);
                      }}
                      className={`px-3 py-1 rounded text-sm ${
                        selectedUniversities.has(university.id)
                          ? 'bg-blue-600 text-white'
                          : 'border border-blue-600 text-blue-600'
                      }`}
                    >
                      {selectedUniversities.has(university.id)
                        ? 'Selected'
                        : 'Select'}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Compare Button */}
      {selectedUniversities.size > 0 && (
        <button className="bg-blue-600 text-white px-6 py-3 rounded font-semibold">
          Compare Selected ({selectedUniversities.size})
        </button>
      )}
    </div>
  );
}
```

---

# 4. PRICING COMPONENT

## 4.1 Pricing Display Component

**File:** `/src/components/PricingTiers.tsx`

```typescript
interface PricingDisplayProps {
  programmeId: string;
  universityId?: string;
}

export function PricingDisplay({
  programmeId,
  universityId,
}: PricingDisplayProps) {
  const pricingOptions = universityId
    ? [getPricingByProgrammeAndUniversity(programmeId, universityId)]
    : getPricingByProgramme(programmeId);

  const [selectedPlan, setSelectedPlan] = useState<1 | 3 | 6 | 12>(1);

  return (
    <div className="space-y-6">
      {pricingOptions.map(pricing => (
        <div key={`${pricing.programme}-${pricing.university}`} className="border rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">{pricing.description}</h3>

          {/* Price Summary */}
          <div className="grid grid-cols-3 gap-4 mb-6 bg-gray-50 p-4 rounded">
            <div>
              <p className="text-sm text-gray-600">Base Tuition</p>
              <p className="text-2xl font-bold">
                {pricing.currency} {pricing.baseTuition.toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Scholarship</p>
              <p className="text-2xl font-bold text-green-600">
                -{pricing.currency} {pricing.scholarshipAmount.toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Net Fee</p>
              <p className="text-2xl font-bold text-blue-600">
                {pricing.currency} {pricing.netFee.toLocaleString()}
              </p>
            </div>
          </div>

          {/* Installment Plans */}
          <div className="space-y-3">
            <p className="font-semibold mb-3">Payment Plans</p>

            <label className="flex items-center p-3 border rounded hover:bg-blue-50">
              <input
                type="radio"
                name="plan"
                value="1"
                checked={selectedPlan === 1}
                onChange={() => setSelectedPlan(1)}
                className="mr-3"
              />
              <div className="flex-1">
                <p className="font-semibold">Full Payment</p>
                <p className="text-sm text-gray-600">
                  {pricing.currency} {pricing.installmentPlans.full.toLocaleString()} due now
                </p>
              </div>
            </label>

            <label className="flex items-center p-3 border rounded hover:bg-blue-50">
              <input
                type="radio"
                name="plan"
                value="3"
                checked={selectedPlan === 3}
                onChange={() => setSelectedPlan(3)}
                className="mr-3"
              />
              <div className="flex-1">
                <p className="font-semibold">3 Installments</p>
                <p className="text-sm text-gray-600">
                  {pricing.currency}{' '}
                  {(pricing.installmentPlans.three).toLocaleString()} / month
                </p>
              </div>
            </label>

            <label className="flex items-center p-3 border rounded hover:bg-blue-50">
              <input
                type="radio"
                name="plan"
                value="6"
                checked={selectedPlan === 6}
                onChange={() => setSelectedPlan(6)}
                className="mr-3"
              />
              <div className="flex-1">
                <p className="font-semibold">6 Installments</p>
                <p className="text-sm text-gray-600">
                  {pricing.currency}{' '}
                  {(pricing.installmentPlans.six).toLocaleString()} / month
                </p>
              </div>
            </label>

            <label className="flex items-center p-3 border rounded hover:bg-blue-50">
              <input
                type="radio"
                name="plan"
                value="12"
                checked={selectedPlan === 12}
                onChange={() => setSelectedPlan(12)}
                className="mr-3"
              />
              <div className="flex-1">
                <p className="font-semibold">12 Installments</p>
                <p className="text-sm text-gray-600">
                  {pricing.currency}{' '}
                  {(pricing.installmentPlans.twelve).toLocaleString()} / month
                </p>
              </div>
            </label>
          </div>

          {/* CTA */}
          <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700">
            Proceed with {selectedPlan}-Month Plan
          </button>
        </div>
      ))}
    </div>
  );
}
```

---

# 5. PROGRAMME RECOMMENDATION WIZARD

## 5.1 Wizard Component

**File:** `/src/components/ProgrammeRecommendationWizard.tsx`

```typescript
interface WizardState {
  step: number;
  goal: string | null;
  budget: string | null;
  duration: string | null;
  studyPreference: string | null;
}

export function ProgrammeRecommendationWizard() {
  const [state, setState] = useState<WizardState>({
    step: 1,
    goal: null,
    budget: null,
    duration: null,
    studyPreference: null,
  });

  const [recommendation, setRecommendation] = useState<any>(null);

  const getRecommendation = () => {
    // Logic to match answers to programmes
    let recommended = programs;

    // Filter by goal
    if (state.goal === 'leadership') {
      recommended = recommended.filter(p => p.category === 'DBA');
    } else if (state.goal === 'research') {
      recommended = recommended.filter(p => p.category === 'PhD');
    } else if (state.goal === 'ai-skills') {
      recommended = recommended.filter(p => p.type === 'course');
    } else if (state.goal === 'recognition') {
      recommended = recommended.filter(p =>
        ['Honorary Doctorate', 'Honorary Professorship'].includes(p.category)
      );
    }

    // Filter by budget (simplified)
    if (state.budget === 'low') {
      recommended = recommended.filter(p => {
        const pricing = getPricingByProgramme(p.id)[0];
        return pricing && pricing.netFee < 5000;
      });
    } else if (state.budget === 'medium') {
      recommended = recommended.filter(p => {
        const pricing = getPricingByProgramme(p.id)[0];
        return pricing && pricing.netFee >= 5000 && pricing.netFee <= 35000;
      });
    } else if (state.budget === 'high') {
      recommended = recommended.filter(p => {
        const pricing = getPricingByProgramme(p.id)[0];
        return pricing && pricing.netFee > 35000;
      });
    }

    // Filter by duration
    if (state.duration === 'short') {
      recommended = recommended.filter(
        p => !p.duration.includes('year') || p.duration.includes('4 months')
      );
    } else if (state.duration === 'medium') {
      recommended = recommended.filter(p =>
        p.duration.includes('2') || p.duration.includes('3')
      );
    }

    // Filter by study preference
    if (state.studyPreference) {
      recommended = recommended.filter(p =>
        p.deliveryMode.includes(state.studyPreference)
      );
    }

    setRecommendation(recommended[0]);
    setState(prev => ({ ...prev, step: 5 })); // Go to results
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <div className="flex justify-between mb-4">
          {[1, 2, 3, 4].map(i => (
            <div
              key={i}
              className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${
                state.step >= i
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-600'
              }`}
            >
              {i}
            </div>
          ))}
        </div>
      </div>

      {/* Step 1: Goal */}
      {state.step === 1 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold mb-6">What's Your Goal?</h2>
          {[
            { value: 'leadership', label: 'Leadership Development (DBA)' },
            { value: 'research', label: 'Advanced Research (PhD)' },
            { value: 'ai-skills', label: 'AI & Tech Skills (Courses)' },
            { value: 'recognition', label: 'Professional Recognition' },
          ].map(option => (
            <button
              key={option.value}
              onClick={() =>
                setState(prev => ({ ...prev, goal: option.value, step: 2 }))
              }
              className="w-full p-4 border-2 rounded-lg text-left hover:border-blue-600 hover:bg-blue-50 transition"
            >
              {option.label}
            </button>
          ))}
        </div>
      )}

      {/* Step 2: Budget */}
      {state.step === 2 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold mb-6">What's Your Budget?</h2>
          {[
            { value: 'low', label: 'Under $5,000' },
            { value: 'medium', label: '$5,000 - $35,000' },
            { value: 'high', label: '$35,000+' },
          ].map(option => (
            <button
              key={option.value}
              onClick={() =>
                setState(prev => ({ ...prev, budget: option.value, step: 3 }))
              }
              className="w-full p-4 border-2 rounded-lg text-left hover:border-blue-600 hover:bg-blue-50 transition"
            >
              {option.label}
            </button>
          ))}
        </div>
      )}

      {/* Step 3: Duration */}
      {state.step === 3 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold mb-6">Preferred Duration?</h2>
          {[
            { value: 'short', label: '4 months or less' },
            { value: 'medium', label: '2-3 years' },
            { value: 'long', label: '3+ years' },
          ].map(option => (
            <button
              key={option.value}
              onClick={() =>
                setState(prev => ({ ...prev, duration: option.value, step: 4 }))
              }
              className="w-full p-4 border-2 rounded-lg text-left hover:border-blue-600 hover:bg-blue-50 transition"
            >
              {option.label}
            </button>
          ))}
        </div>
      )}

      {/* Step 4: Study Preference */}
      {state.step === 4 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold mb-6">How Do You Prefer to Study?</h2>
          {[
            { value: 'Online', label: '100% Online' },
            { value: 'Part-Time', label: 'Part-Time Campus' },
            { value: 'Hybrid', label: 'Hybrid (Online + In-Person)' },
          ].map(option => (
            <button
              key={option.value}
              onClick={() => {
                setState(prev => ({
                  ...prev,
                  studyPreference: option.value,
                }));
                // Immediately get recommendation
                getRecommendation();
              }}
              className="w-full p-4 border-2 rounded-lg text-left hover:border-blue-600 hover:bg-blue-50 transition"
            >
              {option.label}
            </button>
          ))}
        </div>
      )}

      {/* Step 5: Recommendation */}
      {state.step === 5 && recommendation && (
        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Your Perfect Match</h2>
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-xl font-bold text-blue-600 mb-2">
              {recommendation.name}
            </h3>
            <p className="text-gray-600 mb-4">{recommendation.description}</p>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm text-gray-600">Duration</p>
                <p className="font-semibold">{recommendation.duration}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Delivery</p>
                <p className="font-semibold">{recommendation.deliveryMode[0]}</p>
              </div>
            </div>
            <button className="w-full bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700">
              Learn More & Apply
            </button>
          </div>

          <button
            onClick={() =>
              setState({
                step: 1,
                goal: null,
                budget: null,
                duration: null,
                studyPreference: null,
              })
            }
            className="w-full mt-4 border-2 border-blue-600 text-blue-600 py-2 rounded font-semibold hover:bg-blue-50"
          >
            Start Over
          </button>
        </div>
      )}
    </div>
  );
}
```

---

# 6. TRUST ARCHITECTURE COMPONENT

## 6.1 Accreditation Showcase Component

**File:** `/src/components/AccreditationShowcase.tsx`

```typescript
interface AccreditationShowcaseProps {
  programmeId: string;
}

export function AccreditationShowcase({
  programmeId,
}: AccreditationShowcaseProps) {
  const programmeAccreditations = getAccreditationsByProgramme(programmeId);
  const programme = getProgrammeById(programmeId);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold mb-4">Accreditations & Recognition</h3>
        <p className="text-gray-600 mb-6">
          Our programmes are accredited by leading international bodies, ensuring
          quality, rigor, and global recognition.
        </p>
      </div>

      {/* Accreditation Logos */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {programmeAccreditations.map(acc => (
          <div key={acc.id} className="flex flex-col items-center gap-3">
            <img
              src={acc.logo}
              alt={acc.name}
              className="h-20 object-contain"
            />
            <p className="text-sm font-semibold text-center">{acc.name}</p>
          </div>
        ))}
      </div>

      {/* Accreditation Details */}
      <div className="space-y-4">
        {programmeAccreditations.map(acc => (
          <div key={acc.id} className="border rounded-lg p-4">
            <h4 className="font-bold mb-2">{acc.fullName}</h4>
            <p className="text-sm text-gray-600 mb-3">{acc.description}</p>
            <p className="text-xs text-blue-600">
              <a href={acc.website} target="_blank" rel="noopener noreferrer">
                Learn More →
              </a>
            </p>
          </div>
        ))}
      </div>

      {/* Sample Certificate */}
      <div className="border-2 border-dashed rounded-lg p-6 text-center">
        <h4 className="font-bold mb-3">Your Certificate</h4>
        <img
          src={programme?.universities
            .map(uId => universities.find(u => u.id === uId)?.sampleCertificate)
            .filter(Boolean)[0]}
          alt="Sample Certificate"
          className="max-h-48 mx-auto mb-3"
        />
        <p className="text-sm text-gray-600">
          This is what your {programme?.name} certificate will look like
        </p>
      </div>
    </div>
  );
}
```

---

# 7. PAGES TO ENHANCE (Phase 3A Build)

## 7.1 Pages That Need Enhancement

| Page | Current Status | Enhancements Needed |
|------|---|---|
| `/doctoral-programs` | Built (basic) | + University comparison table + DBA vs PhD comparison + Pricing + Trust section |
| `/honorary-recognition` | Built (basic) | + Institution comparison + Eligibility assessment + Benefits showcase |
| `/programs/agentic-ai-automation-mastery` | Built (basic) | + Pricing & installments + Career pathways + Projects + Tools + Trust badges |
| `/programs/agentic-ai-cybersecurity-mastery` | Built (basic) | + Pricing & installments + Career pathways + Labs + Tools + Geo-specific content (MS AI-900) |

## 7.2 New Components to Create

| Component | Purpose | Reusability |
|---|---|---|
| `UniversityComparison` | Interactive comparison table | Used on: Doctoral, Honorary, All programme pages |
| `PricingDisplay` | Tuition + Installments | Used on: All programme pages |
| `AccreditationShowcase` | Trust badges + logos | Used on: All programme pages |
| `ProgrammeRecommendationWizard` | Decision-support tool | Used on: Landing pages, modals |
| `GeoSection` | Conditional content rendering | Used on: AI Cybersecurity (MS AI-900 for UK/US/AE) |

---

# 8. BUILD SEQUENCE

## Phase 3A Build Order

### Week 1: Data Architecture
- [ ] Create `/src/data/universities.ts`
- [ ] Create `/src/data/programs.ts`
- [ ] Create `/src/data/pricing.ts`
- [ ] Create `/src/data/accreditations.ts`
- [ ] Verify all data imports work without errors

### Week 2: Geo-Personalization
- [ ] Create `/src/hooks/useGeoCountry.ts`
- [ ] Create `/src/components/GeoSection.tsx`
- [ ] Create `/src/api/geo-detect.ts` endpoint
- [ ] Test query parameter overrides (?country=in, ?country=uk, etc.)

### Week 3: Comparison & Pricing
- [ ] Create `/src/components/UniversityComparison.tsx`
- [ ] Create `/src/components/PricingDisplay.tsx`
- [ ] Create `/src/components/AccreditationShowcase.tsx`
- [ ] Test all components render with sample data

### Week 4: Recommendation Engine
- [ ] Create `/src/components/ProgrammeRecommendationWizard.tsx`
- [ ] Test recommendation logic
- [ ] Integrate into homepage/key pages

### Week 5-6: Page Enhancement
- [ ] Enhance `/doctoral-programs` with comparison + pricing
- [ ] Enhance `/honorary-recognition` with institution comparison
- [ ] Enhance `/programs/agentic-ai-automation-mastery`
- [ ] Enhance `/programs/agentic-ai-cybersecurity-mastery` + geo content
- [ ] Add trust sections to all 4 pages

### Week 7: Testing & Refinement
- [ ] Test all comparison tables
- [ ] Test pricing calculations
- [ ] Test geo-personalization across countries
- [ ] Test recommendation wizard logic
- [ ] Mobile responsiveness
- [ ] Performance optimization

### Week 8: Final QA & Deployment Prep
- [ ] Security audit
- [ ] SEO optimization
- [ ] Final design review
- [ ] Ready for Phase 4 deployment

---

# 9. SUCCESS CRITERIA

Phase 3A is complete when:

- ✅ All 4 data files created and tested
- ✅ Geo-personalization working (query params + IP detection)
- ✅ University comparison table fully functional (sort/filter)
- ✅ Pricing display with installment plans working
- ✅ Accreditation showcase rendering on all programme pages
- ✅ Recommendation wizard complete and converting
- ✅ All 4 core pages enhanced with decision-support features
- ✅ No design changes (design system remains unchanged)
- ✅ All components reusable across pages
- ✅ Mobile responsive on all components
- ✅ Performance metrics acceptable (< 3s load, < 100 CLS)

---

# 10. IMPLEMENTATION NOTES

### Do NOT:
- ❌ Change design system, colors, typography
- ❌ Redesign existing pages
- ❌ Create new pages
- ❌ Modify navigation structure
- ❌ Change component architecture

### DO:
- ✅ Add business logic to existing pages
- ✅ Create reusable data-driven components
- ✅ Support intelligent program selection
- ✅ Maximize conversion through comparison tools
- ✅ Build trust through accreditation display

---

**Status: Ready for Implementation ✅**

Waiting for confirmation to proceed with Phase 3A build.
