# AcdyOn web

Stack: Next.js 15 (App Router), React 19, Tailwind v4, Supabase (storage + db, anon key only — no service role), GTM.
Package manager: pnpm. Dev: `pnpm dev`. Build: `pnpm build` (static export, `output: "export"`). Typecheck: `pnpm exec tsc --noEmit`.

Output is a static export (`next.config.ts`): no API routes, `images.unoptimized: true` (next/image does not optimize at build — pre-resize/convert to WebP before adding to `public/images/`), Supabase writes happen client-side via `lib/supabase.ts`.

Dark mode: `next-themes`, class-based (`.dark` on `<html>`), CSS vars in `app/globals.css` (`--background`, `--foreground`, `--navy`, `--royal`, `--gold`, `--cyan`, `--muted`, `--border`, `--surface`). Use `dark:` Tailwind variants, not new hardcoded colors.

Brand: navy `#0f172a`, royal blue `#1e40ff`, gold `#d4af37`, cyan `#22d3ee`; Inter (sans) + Playfair Display (serif/display).

Rules:
- Prefer `next/image` with explicit width/height or `fill`+`sizes`; never add raw `<img>` or `images.unsplash.com` hotlinks — self-host in `public/images/site/`.
- Don't edit generated files (`.next/`, `out/`).
- Lead-capture forms write to the existing `website_leads` Supabase table (see `lib/supabase.ts` for the pattern) — reuse it, don't invent a new table per feature.
- Several `lib/data/*.ts` files (`social.ts`, `events.ts`, `scholarship-rules.ts`) contain clearly-flagged placeholder data (social handles, event venue/time, fee figures) — check for `confirmed: false` / "PLACEHOLDER" comments before treating them as real.
- Keep responses concise, implementation-first.
