export interface PricingTier {
  programme: string;
  university?: string;
  currency: string;
  baseTuition: number;
  scholarshipAmount: number;
  netFee: number;
  installmentPlans: {
    full: number;
    three: number;
    six: number;
    twelve: number;
  };
  geoRestrictions?: string[];
  description: string;
}

export const pricing: PricingTier[] = [
  {
    programme: 'dba-general',
    university: 'lsmt',
    currency: 'USD',
    baseTuition: 35000,
    scholarshipAmount: 5000,
    netFee: 30000,
    installmentPlans: {
      full: 30000,
      three: 10500,
      six: 5250,
      twelve: 2625,
    },
    description: 'DBA from London School of Management and Technology',
  },

  {
    programme: 'dba-general',
    university: 'kennedy',
    currency: 'USD',
    baseTuition: 42000,
    scholarshipAmount: 7000,
    netFee: 35000,
    installmentPlans: {
      full: 35000,
      three: 11750,
      six: 5875,
      twelve: 2958,
    },
    description: 'DBA from Kennedy University',
  },

  {
    programme: 'dba-general',
    university: 'dunster',
    currency: 'USD',
    baseTuition: 38000,
    scholarshipAmount: 6000,
    netFee: 32000,
    installmentPlans: {
      full: 32000,
      three: 10667,
      six: 5333,
      twelve: 2667,
    },
    description: 'DBA from Dunster Business School',
  },

  {
    programme: 'dba-general',
    university: 'eimt',
    currency: 'USD',
    baseTuition: 36000,
    scholarshipAmount: 5500,
    netFee: 30500,
    installmentPlans: {
      full: 30500,
      three: 10167,
      six: 5083,
      twelve: 2542,
    },
    description: 'DBA from European Institute of Management and Technology',
  },

  {
    programme: 'dba-general',
    university: 'birchwood',
    currency: 'USD',
    baseTuition: 32000,
    scholarshipAmount: 4500,
    netFee: 27500,
    installmentPlans: {
      full: 27500,
      three: 9167,
      six: 4583,
      twelve: 2292,
    },
    description: 'DBA from Birchwood University',
  },

  {
    programme: 'phd-general',
    university: 'kennedy',
    currency: 'USD',
    baseTuition: 55000,
    scholarshipAmount: 8000,
    netFee: 47000,
    installmentPlans: {
      full: 47000,
      three: 15667,
      six: 7833,
      twelve: 3917,
    },
    description: 'PhD from Kennedy University',
  },

  {
    programme: 'phd-general',
    university: 'dunster',
    currency: 'USD',
    baseTuition: 52000,
    scholarshipAmount: 7500,
    netFee: 44500,
    installmentPlans: {
      full: 44500,
      three: 14833,
      six: 7417,
      twelve: 3708,
    },
    description: 'PhD from Dunster Business School',
  },

  {
    programme: 'honorary-doctorate',
    currency: 'USD',
    baseTuition: 5000,
    scholarshipAmount: 0,
    netFee: 5000,
    installmentPlans: {
      full: 5000,
      three: 1667,
      six: 833,
      twelve: 417,
    },
    description: 'Honorary Doctorate - One-time recognition fee',
  },

  {
    programme: 'honorary-professorship',
    currency: 'USD',
    baseTuition: 3000,
    scholarshipAmount: 0,
    netFee: 3000,
    installmentPlans: {
      full: 3000,
      three: 1000,
      six: 500,
      twelve: 250,
    },
    description: 'Honorary Professorship - Annual membership',
  },

  {
    programme: 'ai-automation',
    currency: 'USD',
    baseTuition: 2999,
    scholarshipAmount: 300,
    netFee: 2699,
    installmentPlans: {
      full: 2699,
      three: 900,
      six: 450,
      twelve: 225,
    },
    description: 'Agentic AI & Automation Mastery - 4 months',
  },

  {
    programme: 'ai-cybersecurity',
    currency: 'USD',
    baseTuition: 3999,
    scholarshipAmount: 400,
    netFee: 3599,
    installmentPlans: {
      full: 3599,
      three: 1200,
      six: 600,
      twelve: 300,
    },
    description: 'Agentic AI & Cybersecurity Mastery - 16 weeks',
  },
];

export const getPricingByProgramme = (programmeId: string) =>
  pricing.filter(p => p.programme === programmeId);

export const getPricingByProgrammeAndUniversity = (
  programmeId: string,
  universityId: string
) => pricing.find(p => p.programme === programmeId && p.university === universityId);

export const calculateInstallment = (
  baseCost: number,
  months: 1 | 3 | 6 | 12 = 1
): { monthlyAmount: number; totalAmount: number; months: number } => {
  let monthlyAmount = 0;

  switch (months) {
    case 1:
      monthlyAmount = baseCost;
      break;
    case 3:
      monthlyAmount = Math.round(baseCost / 3);
      break;
    case 6:
      monthlyAmount = Math.round(baseCost / 6);
      break;
    case 12:
      monthlyAmount = Math.round(baseCost / 12);
      break;
  }

  return {
    monthlyAmount,
    totalAmount: monthlyAmount * months,
    months,
  };
};
