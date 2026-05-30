export interface Accreditation {
  id: string;
  name: string;
  fullName: string;
  description: string;
  logo: string;
  website: string;
  recognition: 'global' | 'regional' | 'national';
  programmes: string[];
  universities: string[];
}

export const accreditations: Accreditation[] = [
  {
    id: 'aacsb',
    name: 'AACSB',
    fullName: 'Association to Advance Collegiate Schools of Business',
    description:
      'Premier business school accreditation body. Less than 5% of global business schools hold AACSB accreditation. Sets standards for business education excellence.',
    logo: '/accreditations/aacsb-logo.png',
    website: 'https://www.aacsb.edu',
    recognition: 'global',
    programmes: ['dba-general', 'phd-general', 'honorary-doctorate'],
    universities: ['lsmt', 'kennedy', 'dunster', 'eimt', 'london-bs', 'paris-sbs'],
  },

  {
    id: 'asic',
    name: 'ASIC',
    fullName: 'Accrediting Council for Independent Colleges and Schools',
    description:
      'Institutional accreditation recognized by USDOE and CHEA. Ensures quality and integrity of educational institutions. Validates academic standards and program delivery.',
    logo: '/accreditations/asic-logo.png',
    website: 'https://www.acics.org',
    recognition: 'global',
    programmes: ['dba-general', 'honorary-doctorate', 'honorary-professorship'],
    universities: ['lsmt', 'london-bs', 'kennedy'],
  },

  {
    id: 'equis',
    name: 'EQUIS',
    fullName: 'European Quality Improvement System',
    description:
      'European business school accreditation. Only 1% of European business schools hold EQUIS accreditation. Emphasis on internationalization and innovation.',
    logo: '/accreditations/equis-logo.png',
    website: 'https://www.efmd.org/equis',
    recognition: 'global',
    programmes: ['dba-general', 'phd-general', 'honorary-professorship'],
    universities: ['dunster', 'eimt', 'paris-sbs'],
  },

  {
    id: 'acbsp',
    name: 'ACBSP',
    fullName: 'Accreditation Council for Business Schools and Programs',
    description:
      'American business accreditation agency. Focus on quality assurance and continuous improvement. Recognized by USDOE and CHEA.',
    logo: '/accreditations/acbsp-logo.png',
    website: 'https://www.acbsp.org',
    recognition: 'regional',
    programmes: ['dba-general'],
    universities: ['kennedy'],
  },
];

export const getAccreditationById = (id: string) =>
  accreditations.find(a => a.id === id);

export const getAccreditationsByProgramme = (programmeId: string) =>
  accreditations.filter(a => a.programmes.includes(programmeId));

export const getAccreditationsByUniversity = (universityId: string) =>
  accreditations.filter(a => a.universities.includes(universityId));
