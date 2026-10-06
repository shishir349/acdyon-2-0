import {
  BASE_FEES,
  BASE_DISCOUNT_PCT,
  MAX_TOTAL_DISCOUNT_PCT,
  MIN_NET_FEE_USD,
  PROFILE_FACTORS,
  type Programme,
  type ProfileFactorKey,
} from "@/lib/data/scholarship-rules";

export type ScholarshipResult = {
  baseFee: number;
  discountPct: number;
  netFee: number;
};

export function calculateScholarship(
  programme: Programme,
  selectedFactors: ProfileFactorKey[],
): ScholarshipResult {
  const baseFee = BASE_FEES[programme];

  const matched = PROFILE_FACTORS.filter((f) => selectedFactors.includes(f.key));
  const rawTotal = matched.reduce((sum, f) => sum + f.discountPct, BASE_DISCOUNT_PCT);
  const discountPct = Math.min(rawTotal, MAX_TOTAL_DISCOUNT_PCT);

  // Net fee floored at the policy minimum (USD), so scholarship % can never zero out the fee.
  const netFee = Math.max(MIN_NET_FEE_USD, Math.round(baseFee * (1 - discountPct / 100)));

  return { baseFee, discountPct, netFee };
}
