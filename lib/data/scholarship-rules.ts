// PLACEHOLDER FEE & SCHOLARSHIP POLICY — replace with real figures before publishing.
// Figures shown in INR (site convention: "INR" label, no ₹ glyph — see ScholarshipCalculatorForm).
// All base fees and discount tiers below are illustrative only, not the real fee schedule.

export type Programme = "dba" | "phd" | "honorary" | "ai-programmes";

export const PROGRAMMES: { value: Programme; label: string }[] = [
  { value: "dba", label: "Doctor of Business Administration (DBA)" },
  { value: "phd", label: "PhD" },
  { value: "honorary", label: "Honorary Doctorate" },
  { value: "ai-programmes", label: "AI & Technology Programmes" },
];

export const UNIVERSITIES = [
  "London School of Management and Technology",
  "Kennedy University",
  "Dunster Business School",
  "European Institute of Management and Technology",
  "Birchwood University",
  "London School of Business and Science",
];

// base_fee in USD — PLACEHOLDER, confirm real fees per university before launch.
export const BASE_FEES: Record<Programme, number> = {
  dba: 34000,
  phd: 29000,
  honorary: 12000,
  "ai-programmes": 4500,
};

export type ProfileFactorKey =
  | "experience_10plus"
  | "experience_5to9"
  | "early_bird"
  | "referral"
  | "corporate_sponsored";

export const PROFILE_FACTORS: { key: ProfileFactorKey; label: string; discountPct: number }[] = [
  { key: "experience_10plus", label: "10+ years professional experience", discountPct: 10 },
  { key: "experience_5to9", label: "5–9 years professional experience", discountPct: 5 },
  { key: "early_bird", label: "Applying in the current intake (early-bird)", discountPct: 8 },
  { key: "referral", label: "Referred by an existing AcdyOn graduate", discountPct: 5 },
  { key: "corporate_sponsored", label: "Corporate-sponsored application", discountPct: 5 },
];

// Everyone starts at the average indicative scholarship; profile factors stack on top.
export const BASE_DISCOUNT_PCT = 20;

// Cap on stacked discount so it can never run away. Reaches the 50–60% top tier.
export const MAX_TOTAL_DISCOUNT_PCT = 60;

// Minimum net fee a candidate can pay (USD), regardless of scholarship %.
export const MIN_NET_FEE_USD = 10000;
