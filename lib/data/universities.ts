export interface University {
  id: string;
  slug: string;
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
  duration?: {
    dba?: { min: number; max: number };
    phd?: { min: number; max: number };
  };
  deliveryMode: string[];
  logo: string;
  website: string;
  description: string;
  ranking?: string;
  established: number;
  sampleCertificate?: string;
  dbaDetails?: {
    overview: string;
    eligibility: string[];
    curriculumHighlights: string[];
    brochureUrl?: string;
  };
  phdDetails?: {
    overview: string;
    eligibility: string[];
    curriculumHighlights: string[];
    brochureUrl?: string;
  };
}

export const universities: University[] = [
  {
    id: 'lsmt',
    slug: 'lsmt',
    name: 'London School of Management and Technology',
    country: 'UK',
    city: 'London',
    accreditations: ['ASIC', 'AACSB'],
    recognition: ['Globally Recognized', 'Institutional Accreditation'],
    programmes: {
      dba: true,
      phd: false,
      honorary_doctorate: false,
      honorary_professorship: false,
    },
    duration: {
      dba: { min: 24, max: 48 },
    },
    deliveryMode: ['Online', 'Hybrid'],
    logo: '/universities/lsmt-logo.png',
    website: 'https://lsmt.ac.uk',
    description: 'Pioneering online education with global reach and flexible learning',
    ranking: 'Top 500 Global Universities',
    established: 2003,
    sampleCertificate: '/certificates/dba-sample.png',
    dbaDetails: {
      overview: 'The London School of Management and Technology offers a cutting-edge Doctor of Business Administration programme designed for executive leaders. With a focus on real-world application and strategic decision-making, our DBA combines rigorous academic standards with practical business experience.',
      eligibility: [
        'Minimum 7+ years of professional experience in a management or leadership role',
        'Undergraduate degree or equivalent professional credentials',
        'Strong written and spoken English proficiency',
        'Commitment to executive-level research and scholarly work'
      ],
      curriculumHighlights: [
        'Strategic Organizational Leadership',
        'Advanced Business Research Methods',
        'Executive Financial Management',
        'Global Business Strategy',
        'Original Research Thesis'
      ],
    },
  },

  {
    id: 'kennedy',
    slug: 'kennedy-university',
    name: 'Kennedy University',
    country: 'USA',
    city: 'New Jersey',
    accreditations: ['ASIC', 'AACSB', 'ACBSP'],
    recognition: ['US Accredited', 'Globally Recognized'],
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
    deliveryMode: ['Online', 'Part-Time', 'Hybrid'],
    logo: '/universities/kennedy-logo.png',
    website: 'https://kennedy.edu',
    description: 'American accredited institution with 50+ years of excellence in online education',
    ranking: 'Top 300 Global Universities',
    established: 1970,
    sampleCertificate: '/certificates/phd-sample.png',
    dbaDetails: {
      overview: 'Kennedy University\'s Doctor of Business Administration programme combines rigorous academic scholarship with practical executive experience. Our flexible delivery model allows working executives to advance their careers while completing their doctoral research.',
      eligibility: [
        'Minimum 8+ years of professional experience in business, management, or related field',
        'Bachelor\'s degree or equivalent professional accomplishment',
        'Demonstrated leadership experience and impact',
        'Proficiency in English (verbal and written)'
      ],
      curriculumHighlights: [
        'Executive Leadership & Governance',
        'Advanced Business Analytics',
        'Global Market Strategy',
        'Organizational Transformation',
        'Doctoral Research & Publication'
      ],
    },
    phdDetails: {
      overview: 'Kennedy University offers a rigorous Doctor of Philosophy programme for researchers seeking original scholarly contribution. Our PhD is designed for individuals with deep expertise who wish to advance knowledge in their field through systematic research.',
      eligibility: [
        'Master\'s degree or equivalent advanced qualification',
        'Strong research background and publication record preferred',
        'Demonstrated expertise in intended research field',
        'Fluent English and academic writing proficiency'
      ],
      curriculumHighlights: [
        'Advanced Research Methodology',
        'Doctoral Seminar & Literature Review',
        'Original Research Project',
        'Peer-Reviewed Publication',
        'Dissertation Defense'
      ],
    },
  },

  {
    id: 'dunster',
    slug: 'dunster-business-school',
    name: 'Dunster Business School',
    country: 'UK',
    city: 'Manchester',
    accreditations: ['AACSB', 'EQUIS'],
    recognition: ['UK Chartered', 'International Accreditation'],
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
    deliveryMode: ['Full-Time', 'Part-Time', 'Online'],
    logo: '/universities/dunster-logo.png',
    website: 'https://dunster.ac.uk',
    description: 'Premium UK business school with triple accreditation and executive focus',
    ranking: 'Top 200 Global Universities',
    established: 1985,
    sampleCertificate: '/certificates/dba-dunster.png',
    dbaDetails: {
      overview: 'Dunster Business School\'s Doctor of Business Administration is one of the most respected programmes in the UK, known for its rigorous curriculum and focus on business innovation. Our DBA combines world-class faculty with genuine business transformation.',
      eligibility: [
        'Minimum 7+ years in senior management or executive position',
        'Undergraduate degree or professional qualification of equivalent standing',
        'Strong analytical and research capabilities',
        'Commitment to contributing to business scholarship'
      ],
      curriculumHighlights: [
        'Strategic Business Leadership',
        'Organizational Innovation',
        'Advanced Business Research',
        'Global Strategic Management',
        'Executive Thesis Project'
      ],
    },
    phdDetails: {
      overview: 'Dunster\'s PhD programme is designed for research scholars committed to original contribution and academic excellence. Our research environment fosters innovation with supervision from leading academics in your field.',
      eligibility: [
        'Master\'s degree in relevant discipline',
        'Evidence of research capability and scholarly potential',
        'Clear research proposal aligned with supervisory expertise',
        'Academic English proficiency for publication and conference presentation'
      ],
      curriculumHighlights: [
        'PhD Research Methodology',
        'Supervised Doctoral Research',
        'Thesis Development & Writing',
        'Academic Publishing',
        'Viva Voce Examination'
      ],
    },
  },

  {
    id: 'eimt',
    slug: 'eimt',
    name: 'European Institute of Management and Technology',
    country: 'Switzerland',
    city: 'Zurich',
    accreditations: ['AACSB', 'EQUIS'],
    recognition: ['Swiss Accreditation', 'International Recognition'],
    programmes: {
      dba: true,
      phd: false,
      honorary_doctorate: false,
      honorary_professorship: false,
    },
    duration: {
      dba: { min: 36, max: 60 },
    },
    deliveryMode: ['100% Online'],
    logo: 'https://sohhmxayptiosflmlxuu.supabase.co/storage/v1/object/public/brochures/images.jpeg',
    website: 'https://eimt.ch',
    description: "Swiss innovation-focused DBA for technology-aware global leaders",
    ranking: 'Top 250 Global Universities',
    established: 2005,
    sampleCertificate: 'https://sohhmxayptiosflmlxuu.supabase.co/storage/v1/object/public/brochures/Certificates/EIMT%20DBA.webp',
    dbaDetails: {
      overview: 'EIMT\'s Doctor of Business Administration programme uniquely positions technology-aware leadership and innovation as core pillars. Designed for forward-thinking executives seeking to drive digital transformation and strategic innovation in a rapidly evolving business landscape.',
      eligibility: [
        'Master\'s degree or EQF Level 7 qualification',
        'Minimum 5+ years of senior professional experience',
        'English language proficiency (TOEFL, IELTS, or equivalent)',
        'Research readiness and innovation focus demonstrated'
      ],
      curriculumHighlights: [
        'Digital Transformation & Innovation',
        'Technology-Aware Leadership',
        'Applied Business Research',
        'Strategic Innovation Management',
        'Doctoral Research & Publication'
      ],
    },
  },

  {
    id: 'birchwood',
    slug: 'birchwood-university',
    name: 'Birchwood University',
    country: 'United States',
    city: 'New York',
    accreditations: ['AACSB'],
    recognition: ['US Accredited', 'North American Recognition'],
    programmes: {
      dba: true,
      phd: false,
      honorary_doctorate: false,
      honorary_professorship: false,
    },
    duration: {
      dba: { min: 24, max: 24 },
    },
    deliveryMode: ['100% Online'],
    logo: 'https://sohhmxayptiosflmlxuu.supabase.co/storage/v1/object/public/brochures/Birchwood-University-520-x-330.jpg',
    website: 'https://birchwood.edu',
    description: 'Accelerated executive DBA with focus on technology leadership and business analytics',
    ranking: 'Top 350 Global Universities',
    established: 1998,
    sampleCertificate: 'https://sohhmxayptiosflmlxuu.supabase.co/storage/v1/object/public/brochures/Certificates/Birchwood%20DBA.webp',
    dbaDetails: {
      overview: 'Birchwood University\'s Doctor of Business Administration is an accelerated 2-year programme designed for senior executives seeking advanced research capability, technology leadership, and strategic influence. The curriculum emphasises applied research, business analytics, digital transformation, and innovation management.',
      eligibility: [
        'Master\'s degree in business or related field with minimum 3.0 GPA',
        'Bachelor\'s degree from a regionally accredited institution',
        'Relevant professional work experience in business or management',
        'English language proficiency for academic coursework'
      ],
      curriculumHighlights: [
        'Business Analytics & Data Management',
        'Technology Management & Digital Transformation',
        'Research Design & Applied Methodology',
        'Innovation & Strategic Leadership',
        'Data Science & Predictive Analytics',
        'Doctoral Dissertation Research'
      ],
    },
  },

  {
    id: 'london-bs',
    slug: 'london-school-of-business-and-science',
    name: 'London School of Business and Science',
    country: 'UK',
    city: 'London',
    accreditations: ['ASIC', 'AACSB'],
    recognition: ['UK Recognized', 'International Accreditation'],
    programmes: {
      dba: false,
      phd: false,
      honorary_doctorate: true,
      honorary_professorship: true,
    },
    deliveryMode: ['Hybrid'],
    logo: '/universities/lsbs-logo.png',
    website: 'https://lsbs.ac.uk',
    description: 'Prestigious London institution for executive recognition and honorary awards',
    ranking: 'Top 350 Global Universities',
    established: 1988,
  },

  {
    id: 'paris-sbs',
    slug: 'paris-school-of-business-and-science',
    name: 'Paris School of Business and Science',
    country: 'France',
    city: 'Paris',
    accreditations: ['EQUIS', 'AACSB'],
    recognition: ['European Accreditation', 'International Recognition'],
    programmes: {
      dba: false,
      phd: false,
      honorary_doctorate: true,
      honorary_professorship: true,
    },
    deliveryMode: ['Hybrid'],
    logo: '/universities/paris-sbs-logo.png',
    website: 'https://paris-sbs.fr',
    description: 'Premier French institution for honorary recognition programs with European prestige',
    ranking: 'Top 300 Global Universities',
    established: 1995,
  },
];

export const getUniversitiesByCountry = (country: string) =>
  universities.filter(u => u.country === country);

export const getUniversitiesForProgramme = (
  programme: 'dba' | 'phd' | 'honorary_doctorate' | 'honorary_professorship'
) => universities.filter(u => u.programmes[programme]);

export const getUniversityById = (id: string) =>
  universities.find(u => u.id === id);
