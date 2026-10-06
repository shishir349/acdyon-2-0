# Form UX Audit — AcdyOn 2.0

## Consultation Form (`components/forms/consultation-form.tsx`)

| Element | Before | After | Issue | Fix |
|---------|--------|-------|-------|-----|
| Form heading | "Book a Consultation" | "Consultation Request" | Heading reads like a CTA, conflicts with submit button | Changed to neutral heading |
| Form subheading | "Manual admissions guidance for Phase 1." | "Tell us about your goals and we'll guide you forward." | Jargon-heavy, unclear | Rewritten for clarity |
| Submit button | "Submit Consultation Request" | "Submit Consultation Request" | No change needed | Single clear CTA |
| Success state | Brief green text | Enhanced with confirmation + detail | Lacked reassurance | Added descriptive follow-up text |

## All CTAs Across the Site

| Page / Component | CTA Text | Action | Links To | Duplicate Risk | Status |
|------------------|----------|--------|----------|----------------|--------|
| **ConsultationForm** | Submit Consultation Request | Submits form to Supabase | N/A (form submit) | None | OK |
| **PageHero** (all pages) | Book Consultation | Navigate to form page | /book-consultation | None — navigation CTA | OK |
| **FloatingCTA** (mobile) | Book Consultation | Navigate to form page | /book-consultation | None — mobile navigation | OK |
| **ConsultationNudge** | Book Consultation | Navigate to form page | /book-consultation | None — mid-page nudge | OK |
| **FinalCTA** | Book Consultation | Navigate to form page | /book-consultation | None — end-of-page CTA | OK |
| **WhyAcdyOnStats** | Book Your Free Consultation | Navigate to form page | /book-consultation | None — homepage section | OK |
| **DBA/PhD pages** | Check Eligibility | Navigate to form page | /book-consultation | None — contextual wording | OK |
| **DBA/PhD pages** | Book Consultation | Navigate to form page | /book-consultation | None — secondary CTA | OK |
| **Events page** | Register Interest via Consultation | Navigate to form page | /book-consultation | None — contextual wording | OK |

## Key Findings

1. **No duplicate submit buttons** exist within the form itself — the confusion was caused by the "Book a Consultation" heading looking like a CTA alongside the "Submit Consultation Request" button.

2. **No Calendly integration** exists anywhere in the codebase. All "Book Consultation" buttons across the site are navigation links to `/book-consultation`, not scheduling tools.

3. **Mobile UX is clean** — the FloatingCTA provides a single persistent action on mobile (hidden on desktop). No competing CTAs visible simultaneously.

4. **Form is reused** on two pages: `/book-consultation` (sourcePage="book-consultation") and `/contact` (sourcePage="contact"). Both instances now show consistent "Consultation Request" heading.

## Recommendations Applied

- [x] Single primary CTA within form: "Submit Consultation Request"
- [x] Removed confusing "Book a Consultation" heading
- [x] Enhanced success state with clear confirmation messaging
- [x] Mobile UX verified — single obvious next action before submission
- [x] No duplicate CTAs found within any form
