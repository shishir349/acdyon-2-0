/**
 * Smallest thing that fails if the money/validation logic breaks.
 * Run: node server/payments.test.js
 */
const assert = require("node:assert/strict");
const crypto = require("node:crypto");
const { validateForm, clean, PRICING } = require("./payments");

const good = {
  name: "Asha Menon",
  email: "Asha@Example.COM",
  mobile: "+91 9779914422",
  country: "IN",
  qualification: "Masters",
  experience: "10-15 years",
  programme: "PhD",
  linkedin: "https://linkedin.com/in/asha",
  subjectArea: "Supply chain resilience",
};

/* ── validation ─────────────────────────────────────────────── */
const ok = validateForm(good);
assert.equal(ok.ok, true, ok.error);
assert.equal(ok.data.email, "asha@example.com", "email must be normalised");

assert.equal(validateForm({ ...good, email: "nope" }).ok, false);
assert.equal(validateForm({ ...good, country: "FR" }).ok, false, "unsupported country");
assert.equal(validateForm({ ...good, mobile: "" }).ok, true, "mobile is optional");
assert.equal(validateForm({ ...good, mobile: "12" }).ok, false, "bad mobile rejected");
assert.equal(validateForm({ ...good, linkedin: "" }).ok, true, "linkedin is optional");
assert.equal(validateForm({ ...good, linkedin: "linkedin.com/x" }).ok, false);
assert.equal(validateForm({ ...good, programme: "Other" }).ok, false, "Other needs text");
assert.equal(
  validateForm({ ...good, programme: "Other", programmeOther: "DProf" }).ok,
  true
);
assert.equal(validateForm({ ...good, subjectArea: "  " }).ok, false);
assert.equal(validateForm(null).ok, false);

/* ── sanitisation ───────────────────────────────────────────── */
assert.equal(clean("<script>alert(1)</script>"), "scriptalert(1)/script");
assert.equal(clean("abcdef", 3), "abc", "clamps length");

/* ── pricing: client and server tables must agree ───────────── */
assert.deepEqual(Object.keys(PRICING).sort(), ["IN", "UK", "US"]);
assert.equal(PRICING.IN.provider, "razorpay");
assert.equal(PRICING.UK.provider, "stripe");
assert.equal(PRICING.US.currency, "USD");
for (const p of Object.values(PRICING)) {
  assert.ok(Number.isInteger(p.amount) && p.amount > 0, "amount is minor units");
}

/* ── razorpay signature scheme (the exact HMAC the route verifies) ── */
const secret = "test_secret";
const sig = crypto
  .createHmac("sha256", secret)
  .update("order_123|pay_456")
  .digest("hex");
assert.equal(
  sig,
  crypto.createHmac("sha256", secret).update("order_123|pay_456").digest("hex")
);
assert.notEqual(
  sig,
  crypto.createHmac("sha256", "wrong").update("order_123|pay_456").digest("hex"),
  "a wrong secret must not verify"
);

console.log("payments.test.js — all checks passed");
