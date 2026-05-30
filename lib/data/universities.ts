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
    country: 'Belgium',
    city: 'Brussels',
    accreditations: ['AACSB', 'EQUIS'],
    recognition: ['European Accreditation', 'International Recognition'],
    programmes: {
      dba: true,
      phd: false,
      honorary_doctorate: true,
      honorary_professorship: false,
    },
    duration: {
      dba: { min: 20, max: 40 },
    },
    deliveryMode: ['Hybrid', 'Online'],
    logo: '/universities/eimt-logo.png',
    website: 'https://eimt.be',
    description: "Europe's leading management institute with strong industry connections",
    ranking: 'Top 250 Global Universities',
    established: 1992,
    sampleCertificate: '/certificates/dba-eimt.png',
    dbaDetails: {
      overview: 'EIMT\'s Doctor of Business Administration programme is specially designed for European business leaders seeking international recognition. Our European perspective combined with global standards makes this ideal for executives working across borders.',
      eligibility: [
        'Minimum 8+ years of executive or senior management experience',
        'Bachelor\'s degree or equivalent professional standing',
        'European business context exposure preferred',
        'Fluent English for academic work'
      ],
      curriculumHighlights: [
        'European Business Strategy',
        'Cross-Cultural Management',
        'Advanced Strategic Analysis',
        'Innovation & Entrepreneurship',
        'Doctoral Research Thesis'
      ],
    },
  },

  {
    id: 'birchwood',
    slug: 'birchwood-university',
    name: 'Birchwood University',
    country: 'Canada',
    city: 'Ontario',
    accreditations: ['AACSB'],
    recognition: ['Canadian Accredited', 'North American Recognition'],
    programmes: {
      dba: true,
      phd: false,
      honorary_doctorate: false,
      honorary_professorship: false,
    },
    duration: {
      dba: { min: 24, max: 48 },
    },
    deliveryMode: ['Online', 'Part-Time'],
    logo: '/universities/birchwood-logo.png',
    website: 'https://birchwood.ca',
    description: 'Canadian institution specializing in business and executive education',
    ranking: 'Top 400 Global Universities',
    established: 1998,
    sampleCertificate: '/certificates/dba-birchwood.png',
    dbaDetails: {
      overview: 'Birchwood University\'s Doctor of Business Administration programme brings North American perspective to executive education. Flexible delivery allows Canadian and North American executives to pursue doctoral credentials without relocating.',
      eligibility: [
        'Minimum 7+ years of professional management experience',
        'Bachelor\'s degree or equivalent qualifications',
        'Demonstrated business leadership',
        'Proficiency in English (writing and speaking)'
      ],
      curriculumHighlights: [
        'North American Business Strategy',
        'Executive Leadership Development',
        'Business Research & Analysis',
        'Corporate Innovation',
        'Dissertation Project'
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
