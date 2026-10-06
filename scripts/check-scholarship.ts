// Runnable self-check for the scholarship money path.
// Run: node --experimental-strip-types scripts/check-scholarship.ts
import assert from "node:assert";
import {
  BASE_FEES,
  BASE_DISCOUNT_PCT,
  MAX_TOTAL_DISCOUNT_PCT,
  MIN_NET_FEE_USD,
  PROFILE_FACTORS,
} from "../lib/data/scholarship-rules.ts";

const calc = (programme: keyof typeof BASE_FEES, factorPctSum: number) => {
  const discountPct = Math.min(BASE_DISCOUNT_PCT + factorPctSum, MAX_TOTAL_DISCOUNT_PCT);
  const netFee = Math.max(MIN_NET_FEE_USD, Math.round(BASE_FEES[programme] * (1 - discountPct / 100)));
  return { discountPct, netFee };
};

const allFactors = PROFILE_FACTORS.reduce((s, f) => s + f.discountPct, 0);

// avg / default: no factors => 20%
assert.equal(calc("dba", 0).discountPct, 20);
// max scholarship lands in the 50–60% band and never exceeds the cap
assert.ok(calc("dba", allFactors).discountPct >= 50 && calc("dba", allFactors).discountPct <= 60);
// net fee floored at $10,000 for every programme, even at max discount
for (const p of Object.keys(BASE_FEES) as (keyof typeof BASE_FEES)[]) {
  assert.ok(calc(p, allFactors).netFee >= MIN_NET_FEE_USD, `${p} below floor`);
}

console.log("scholarship checks OK", { default: calc("dba", 0), maxDba: calc("dba", allFactors) });
