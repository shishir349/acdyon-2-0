# Cybersecurity & AI Mastery — Final Implementation Report

## Overview

Complete rebuild of the Cybersecurity & AI Mastery page from a generic course page to a **career transformation pathway** that sells progression: Beginner → Professional → Certified → Employable → Master's Degree. Also added UK entity (AcdyOn Technologies Ltd) across footer, contact, and consultation pages.

---

## Files Modified

| File | Changes |
|------|---------|
| `app/programs/agentic-ai-cybersecurity-mastery/page.tsx` | Full page rebuild (~680 lines) |
| `components/layout/footer.tsx` | Added UK entity column (6-col grid) |
| `app/contact/page.tsx` | Added UK phone + Wolverhampton office |
| `app/book-consultation/page.tsx` | Added UK phone, 4-col contact grid |

---

## Part 1: Hero Section

- Added **30-Day Money Back Guarantee** trust badge (gold styling, highly visible)
- Updated eyebrow: "Industry-Focused Cybersecurity Training"
- Updated title: "Cybersecurity & AI Mastery"
- Updated subtitle with career acceleration + internship + academic progression messaging
- 3 CTAs: Apply Now, View Programme, Download Brochure
- 4 key fact badges: Duration (6 Months), Internship (Included), Career Readiness (Included), Upgrade Pathways (Available)

## Part 2: Learning Journey Timeline

- Replaced 6 flat cards with vertical timeline (desktop: alternating left/right, mobile: stacked)
- Month 1: Cybersecurity Foundations (4 topics)
- Month 2: Network Security & Defense (4 topics)
- Month 3: Ethical Hacking (4 topics)
- Month 4: Cloud & Infrastructure Security (4 topics)
- Month 5: AI-Assisted Cybersecurity (4 topics)
- Month 6: Career Acceleration & Internship — **visually distinct** with gold border, gold badge, 8 career items

## Part 3: Career Outcomes

- Renamed to "Where This Programme Can Take You"
- 7 role cards: SOC Analyst, Security Analyst, Cybersecurity Associate, Cloud Security Associate, Junior Penetration Tester, Security Operations Specialist, AI Security Analyst
- Each card includes: typical responsibilities, entry-level suitability, career progression note

## Part 4: Upgrade Pathways (NEW)

Three visual columns:
- **Path A — Standard Programme** (white bg): 6 months, training + career readiness + internship
- **Path B — Professional Certification** (blue border, "Most Popular" badge): +USD 200, Microsoft AI-900 prep + exam voucher
- **Path C — Master's Degree Progression** (gold border, "Highest Academic Progression" badge): +USD 3,000, +6 months, Kennedy/Dunster university pathways

## Part 5: Visual Progression Graph (NEW)

Premium flowchart showing:
START → Cybersecurity & AI Mastery (6 Mo) → Career Ready → Choose Upgrade → Microsoft AI-900 (+$200) / Master's Pathway (+$3,000) → Enhanced Employability → Advanced Career Growth

Built with styled divs and connecting lines.

## Part 6: 30-Day Money-Back Guarantee Section (NEW)

- Dedicated gold-bordered section before FAQs
- Title: "30-Day Money Back Guarantee"
- Clear refund terms: within 30 calendar days, no refunds after
- Premium gold styling for high visibility

## Part 7: UK Entity Addition

### Footer
- Added UK column between USA and India
- Grid expanded from 5-col to 6-col
- UK details: AcdyOn Technologies Ltd, admissions@acdyon.com, +44 7465 278021, Wolverhampton, United Kingdom
- Bottom bar updated with UK entity line

### Contact Page
- Added UK phone section (+44 7465 278021) between US and India
- Added Wolverhampton, United Kingdom to offices list

### Book Consultation Page
- Added UK phone (+44 7465 278021) to contact grid
- Grid updated from 3-col to 4-col (2-col on tablet)

## Part 8: Section Order (Final)

1. Hero (with trust badge, 4 key facts)
2. Company Demand Wall
3. Industry Demand Statistics
4. Who This Is For
5. Learning Journey (rebuilt timeline)
6. Career Launch Month
7. Tools Ecosystem
8. Hands-On Labs
9. Portfolio Projects
10. Career Outcomes (rebuilt)
11. Salary Outlook
12. Certifications
13. **Upgrade Pathways (NEW)**
14. **Visual Progression Graph (NEW)**
15. **30-Day Money-Back Guarantee (NEW)**
16. Success Stories
17. FAQ (2 new questions added)
18. Final CTA
19. ConsultationNudge

## Part 9: FAQ Additions

- "Can I upgrade to the Microsoft AI-900 certification or Master's degree pathway later?" — Yes, upgrades available during or after the programme
- "What is the refund policy?" — 30-day money-back guarantee from enrolment date

---

## Build & Deploy

- Build: `npm run build` — No errors
- Deploy: Static export deployed to `acdyon.com` via Hostinger
- Date: 5 June 2026
