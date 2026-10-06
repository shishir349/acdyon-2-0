# Prompt: build out an AcdyOn × upGrad course page

Copy everything below into a fresh Claude Code session in this repo.

---

You're working in the AcdyOn Next.js site (static export, `output: "export"`). There's a shared template at `components/upgrad/course-page.tsx` that renders every AcdyOn × upGrad course page from a single data object typed as `UpgradCourse` in `lib/data/upgrad-courses.ts`. The CTO & AI Leadership (IIIT-B/IIM Udaipur) page and the SSBM Global DBA page are the two fully-built reference pages — match their structure and quality bar.

## What "done" looks like

The template already conditionally renders these sections whenever the matching field is present on the course object — don't rebuild them, just populate the data:

- Hero (name, tagline, duration/fee/seatBlock/admissionDeadline stat cards, Apply Now / Download Syllabus CTAs)
- Certificate section (title, issuers, note, optional image)
- Accreditations section (`accreditations: { name, body }[]` — text+icon cards, only add this if the source content actually has an accreditation/recognition block)
- Key Highlights (`highlights: string[]` — icon auto-picked per item via keyword match in `highlightIcon()`, extend that function with new keywords if none fit, don't hardcode an icon per item)
- "Who is this for" audience carousel (`audience: {role, description, imageUrl}[]`, plus `audienceImageStyle: 'circle' | 'rect'`). Default to `'rect'` for any page using generic Unsplash stand-ins — the card is a strict 50/50 split (`h-72 sm:h-80`, image fills the top half via `object-cover`, description centered in the bottom half with `line-clamp-4`), already built into the shared template. Every audience/workspace photo **must** visibly show real people in it — verify by downloading the candidate and viewing it with the Read tool before using it, never assume from a photo ID or filename alone.
- "N Steps to X" section (`fourSteps` — only include this if the source has an actual sequential program-stages block; don't invent one)
- Curriculum accordion with left-side timeline dots (`curriculum: UpgradModule[]` — code/title/weeks/topics/deliverable, all optional except title)
- Mentors carousel (`mentors: UpgradMentor[]` — name/role/institute/bio/photoUrl/linkedinUrl)
- Case studies carousel (`caseStudies` — only if the source has named company case studies; don't fabricate)
- Batch profile (`batchProfile` — only if the source has actual cohort demographic stats; don't fabricate)
- "Why this programme matters" (`whySection` — exactly 4 `{heading, body}` entries; phrase headings to naturally hit one of the existing icon keywords in `whySectionIcon()` — demand/growth, "who should"/pursue, apart/unique/sets, career/impact — so each gets a distinct icon without adding new keywords)
- Admission steps (`admissionSteps`)
- FAQs (`faqs`)

**You're allowed to add new sections/fields** if the source content clearly needs one that doesn't fit anything above (e.g. a testimonials block, a specialization-tracks picker). If you do, add the type to `UpgradCourse` in `lib/data/upgrad-courses.ts`, render it conditionally in `components/upgrad/course-page.tsx` exactly like the existing sections (a `{course.newField?.length ? (...) : null}` guard), and keep it optional so it doesn't break the other 7 course pages that don't have it.

## Content rules — read this before touching data

1. **Never fabricate facts.** No invented professor names, fake case studies, made-up salary figures, or invented cohort statistics. If the source material doesn't include something, leave that field/section out entirely — don't fill the gap with plausible-sounding text.
2. **Trim generic EMI/credit-card FAQ boilerplate.** Sources often paste 15-20 near-identical "which banks support 0% EMI" FAQs. Skip those; keep FAQs specific to the programme (fees, eligibility, format, accreditation, refund policy, career outcomes). Note in your final summary that you trimmed them.
3. **Real, accessible image/file URLs → download and self-host.** If the source gives a real reachable URL (a CDN link, a cloudfront link, an image-proxy URL you can resolve to the underlying asset, an actual PDF/HTML brochure), download it and place it under `public/images/site/doctoral/<slug>/` (images) — create that folder if it doesn't exist. Verify each download is a real image before using it (`file <name>.webp` should say "Web/P image", not an error page or empty file). Reference the local `/images/site/doctoral/<slug>/...` path in the data, never the remote URL.
4. **No real image/link available → mock it, and say so.** For anything genuinely missing (no photo, no brochure PDF, no logo file):
   - Faculty/mentor photos, audience-card photos: use a real, verified Unsplash photo as a stand-in. **Actually look at the photo before using it** — download it to a scratch path and use the Read tool to view it, don't guess from a photo ID. It must show what the caption implies (e.g. if it's a "professional workspace" photo for "who is this for" in `'rect'` style, it must have real people visibly in a real workspace, not an empty desk).
   - Company/accreditation logos with no downloadable file: use the existing text-based "icon + name + body" card pattern (see `accreditations` or `caseStudies` rendering) — don't invent a fake logo image.
   - Syllabus/brochure download buttons: if you enable `syllabusUrl`/`brochureUrl`, create a real, working placeholder HTML file at `public/brochures/degrees/<slug>-syllabus.html` (copy the structure/CSS from `public/brochures/degrees/cto-ai-leadership-syllabus.html`) so the download button actually works instead of 404ing. Mark it as a placeholder inside the file itself.
   - LinkedIn/profile links: only add `linkedinUrl` if the source gives an actual URL. If it just says "LinkedIn Profile" as a label with no href, leave the field off rather than link to nowhere.
5. **At the end of your work, always output a short "Left out / mocked" list** — every mock image, every omitted section, every trimmed FAQ block, every assumption you made. This is not optional narration; it's the actual deliverable the user reads to know what to send you next.

## How I'll hand you content

I'll paste one or more raw HTML snippets or plain-text content blocks per message, usually for one specific section or for a whole page at once. Figure out which `UpgradCourse` field(s) each block maps to from the section headings/labels in the HTML (e.g. "Who should pursue doctoral studies?" → `audience`, "Your DBA Instructors" / "Learn from Great Academics" → `mentors`, "How To Apply" → `admissionSteps`, "FAQs"/"Frequently Asked Questions" → `faqs`, etc.) — match by meaning, not by exact string. If a block clearly doesn't fit any existing field, use your judgment to add a new one per the rules above rather than forcing it into the wrong section or dropping it silently.

When a raw HTML blob contains actual image `src`/`srcset` URLs (cloudfront links, CDN links, etc.), extract the real underlying asset URL (not a Next.js image-proxy wrapper URL — resolve the `url=` query param to get the direct file) and download it for real, per rule 3 above.

## Workflow — follow this exact order every time

1. Read the relevant slice of `lib/data/upgrad-courses.ts` for the target course (find it by slug) before editing, and read `components/upgrad/course-page.tsx` if you're not already familiar with the current section set.
2. Download/verify any real images first (rule 3/4), before writing data that references them.
3. Edit `lib/data/upgrad-courses.ts` for the target course object.
4. Edit `components/upgrad/course-page.tsx` and/or `lib/data/upgrad-courses.ts` types only if you're adding a genuinely new section (rule above).
5. `pnpm exec tsc --noEmit` — must be clean before proceeding.
6. `pnpm build` — must be clean, and must show the target page in the static output list.
7. Grep the built HTML in `out/doctoral-programs/upgrad/<slug>/index.html` for a handful of distinctive strings you just added (a mentor name, a module title, a section heading) to confirm they actually rendered — don't just trust the build succeeding.
8. If you touched `.next`/dev server for local testing, be careful about stray Windows node processes locking `.next` — check with `Get-CimInstance Win32_Process -Filter "Name='node.exe'"` filtered to this project's `CommandLine` before killing anything, never kill node processes blindly.
9. Zip `out/` (`directoryname_YYYYMMDD_HHMMSS.zip` naming, e.g. via `Compress-Archive`), confirm the zip file size is stable (not still being written) before deploying.
10. Deploy the same zip to **both** `acdyon.com` and `acdyon.acdyon.com` via `hosting_deployStaticWebsite`, then clear cache on both via `hosting_clearWebsiteCacheV1` (username `u731638769`), then delete the local zip.
11. Verify live via `curl`/WebFetch against `acdyon.com` for a few of the strings you added, and confirm any new self-hosted images return 200.
12. End with the "Left out / mocked" list from rule 5.

## Required skills / mode for this whole session

Use these skills very strictly for everything in this session, including when delegating to sub-agents — give sub-agents the same instructions:

```
/fast
use these skills very
  even if you are using sub agents then use these skills while giving instructions to them as especially ponytail ultra skill

  after building the pages deploy them on hostinger on acdyon.com and acdyon.acdyon.com
  /ponytail:ponytail ultra  /agent-skills:build /agent-skills:ship /frontend-design /ui-ux-pro-max /canvas-design /shipping-and-launch
```

---

I'll now paste the content for the page(s) to build.
