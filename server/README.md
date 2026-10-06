# Registration + Payments

Programme registration page with country-routed payment (Razorpay for India, Stripe for UK/US).
Nothing is saved until the payment is verified **server-side**.

## Files

| File | What it is |
|---|---|
| `components/registration/RegistrationPage.jsx` | The whole page: form, validation, summary, payment flow, CSS variables. |
| `app/register/page.tsx` | Next route wrapper. Header/footer/theme come from `app/layout.tsx`. |
| `server/payments.js` | Express API — `create-intent`, `verify-and-submit`, Stripe webhook. |
| `server/payments.test.js` | Runnable self-check for validation, sanitisation, pricing, signature scheme. |
| `server/.env.example` | Every secret the backend reads. |

Live at `/register/`.

## Important: the site is a static export

`next.config.ts` sets `output: "export"`, so **the Express server cannot run on Hostinger's static hosting**.
Host it separately (Render / Railway / Fly / a Hostinger VPS or Node plan) and point the
frontend at it:

```bash
# .env.local in the Next project
NEXT_PUBLIC_PAYMENTS_API_BASE=https://payments.acdyon.com
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_...
```

Alternative that avoids a second host entirely: port the two handlers in `payments.js` to a
Supabase Edge Function (the project already deploys `supabase/functions/send-confirmation-email`
that way). The verification logic is identical — only the request/response wrapper changes.

## Setup

```bash
# backend
cd server
cp .env.example .env          # fill in test keys
npm install
npm test                      # validation + pricing + signature checks
npm start                     # http://localhost:4242

# frontend
pnpm dev                      # http://localhost:3000/register
```

## Where to replace project values

| Marker | Where | Replace with |
|---|---|---|
| `PLUG:THEME` | `RegistrationPage.jsx` → `<Styles/>` | Tokens already mirror `app/globals.css` (`--royal #1E40FF`, `--gold #D4AF37`). Change here if the brand palette moves. |
| `PLUG:LOGO` | Razorpay checkout `image:` | `/acdyon-logo.webp` (already correct). |
| `PLUG:API` | `API_BASE`, `PUBLIC_SITE_URL`, `ALLOWED_ORIGINS` | Your deployed API + site origins. |
| `PLUG:KEYS` | both files | Test → live keys. Publishable keys in `NEXT_PUBLIC_*`; **secret keys server-side only**. |
| `PLUG:FEES` | `PAYMENT_AMOUNT_INR/GBP/USD` | Real fees. Values live in *both* files and must match — the server rejects a mismatch. |
| `PLUG:DB` | `saveSubmission()` in `payments.js` | Uncomment the `pg` or Supabase branch. The `registrations` DDL is in the comment above it. Use the **service role** key server-side, never the anon key. |
| `PLUG:ANALYTICS` | `track()` | Already pushes to `window.dataLayer` (GTM is loaded in `app/layout.tsx`). Add GTM triggers for `payment_attempt`, `payment_success`, `payment_failure`. |

## Current mode: hosted payment links

The live page does **not** call the Express API. It saves the application to Supabase
`website_leads` (`lead_type: 'registration'`, `status: 'awaiting_payment'`, via
`submitRegistration` in `lib/supabase.ts`) and then redirects to a hosted payment link:

| Country | Fee | Link |
|---|---|---|
| India | ₹99 | `https://rzp.io/rzp/4rx4FfFb` (Razorpay) |
| United Kingdom | £49 | `https://buy.stripe.com/6oU6oHbkp9Nl4RLgx64ko0g` (Stripe) |
| United States | $49 | `https://buy.stripe.com/00w4gz9Jn3hV2HUf1g4ow0y` (Stripe) |

Trade-off: hosted links return no signature, so payment cannot be verified before the save.
Rows land as `awaiting_payment` and are reconciled against the Stripe/Razorpay dashboards
(match on email). `server/payments.js` below is the verified-before-save alternative — wire it
up if reconciliation by hand becomes painful.

Amounts live in `RegistrationPage.jsx` (`PAYMENT_AMOUNT_*`) **and** on the payment links
themselves. Change one, change the other, or the displayed fee lies.

## Payment flow (API mode — not currently in use)

1. User completes the form. Submit stays disabled until every rule passes.
2. Click **Pay and submit** → `POST /api/payments/create-intent` with an `Idempotency-Key`.
   The server ignores any client-sent amount and looks the price up from the country.
3. The provider SDK is fetched **only now** (Stripe `js.stripe.com/v3`, Razorpay `checkout.js`) —
   it never touches the initial page load.
4. India → Razorpay modal, handler returns `order_id`/`payment_id`/`signature`.
   UK/US → redirect to Stripe Checkout, returns to `/register/?session_id=…`
   (the form draft is stashed in `sessionStorage` across the redirect).
5. `POST /api/payments/verify-and-submit` verifies signature/session, checks the amount and
   currency match, and only then writes the row. Failure ⇒ clear error + retry with a fresh
   idempotency key.

## Testing

**Stripe (UK / US)** — dashboard in Test mode.

| Card | Result |
|---|---|
| `4242 4242 4242 4242` | Success |
| `4000 0000 0000 9995` | Declined (insufficient funds) |
| `4000 0025 0000 3155` | Requires 3-D Secure |

Any future expiry, any CVC, any postcode. Test webhooks locally:

```bash
stripe listen --forward-to localhost:4242/api/payments/webhook/stripe
```

**Razorpay (India)** — Test Mode keys.

| Method | Value |
|---|---|
| Card | `4111 1111 1111 1111`, any future expiry, CVC `123` |
| UPI success | `success@razorpay` |
| UPI failure | `failure@razorpay` |
| Netbanking | pick any bank, click **Success** / **Failure** on the simulator |

**Manual checks worth doing once:** submit with an empty form (button disabled), dismiss the
Razorpay modal (clear "Payment cancelled" message, retry works), double-click Pay (one order —
the idempotency key de-duplicates), tab through the whole form with only the keyboard, and run
it with a screen reader (each error is announced via `aria-describedby`, status via `role="status"`).

**Switching to production:** replace `sk_test_`/`pk_test_`/`rzp_test_` with the live equivalents in
the host's environment panel (never in a file), re-register the webhook endpoints against the live
URLs, and take a real ₹1/£1 payment before announcing the page.

## Security notes

- HTTPS only. Both providers refuse live mode over plain HTTP.
- Every field is re-validated and sanitised server-side (`validateForm`) — the client rules are UX, not security.
- Amount and currency are server-derived and re-checked at verification, so a tampered client can't underpay.
- SQL is parameterised; never string-concatenate form values into a query.
- Logs carry messages and truncated ids only — never full payment ids, signatures, or the request body.
- Razorpay signature comparison uses `crypto.timingSafeEqual`.
- **CORS**: explicit origin allow-list, no `*`, `credentials: false`.
- **CSRF**: the API is stateless and cookie-less, so there's no ambient authority to forge — a cross-site
  POST achieves nothing. If you ever add cookie sessions, add a CSRF token and `SameSite=Strict`.
- Body size capped at 64 KB. Put a rate limiter (e.g. `express-rate-limit`, 10 req/min/IP) in front of
  `create-intent` before going live.

## Accessibility

Semantic `<form>`/`<fieldset>`/`<legend>`, every input labelled, radio groups are real fieldsets,
errors linked with `aria-describedby` + `aria-invalid`, required fields carry both a visual `*` and
screen-reader text, focus rings on all interactive elements, live region for payment status, focus
moves to the confirmation on success, and `prefers-reduced-motion` is respected.
