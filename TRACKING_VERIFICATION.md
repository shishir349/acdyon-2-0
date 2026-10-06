# Tracking Verification Report — AcdyOn 2.0

## Tracking IDs Installed

| Service | ID | Method |
|---------|----|----|
| Google Tag Manager | GTM-PN6X9XWX | Next.js `<Script>` in layout.tsx |
| Google Analytics 4 | G-CYYFZJC47J | Via GTM (no standalone gtag.js) |
| Microsoft Clarity | wc53a2twgn | Next.js `<Script>` in layout.tsx |

## Implementation Details

### Google Tag Manager
- **Location**: `app/layout.tsx` — `<head>` section
- **Strategy**: `afterInteractive` (loads after page hydration)
- **noscript fallback**: `<noscript><iframe>` placed at top of `<body>`
- **Data layer**: `window.dataLayer` initialized automatically

### Microsoft Clarity
- **Location**: `app/layout.tsx` — `<head>` section
- **Strategy**: `afterInteractive`
- **Function**: `window.clarity()` available globally after load

### GA4
- **Method**: Configured through GTM container (GTM-PN6X9XWX)
- **Standalone gtag.js**: NOT installed (avoids duplicate tracking)
- **Page views**: Handled by GTM's built-in "All Pages" trigger

## Page View Verification

Each page verified to contain exactly 1 instance of GTM, Clarity, and noscript:

| Page | GTM | Clarity | noscript | Duplicates |
|------|-----|---------|----------|------------|
| Homepage (/) | 1 | 1 | 1 | None |
| DBA (/doctoral-programs/dba) | 1 | 1 | 1 | None |
| PhD (/doctoral-programs/phd) | 1 | 1 | 1 | None |
| Honorary (/honorary-recognition) | 1 | 1 | 1 | None |
| Cybersecurity (/programs/agentic-ai-cybersecurity-mastery) | 1 | 1 | 1 | None |
| Universities (/universities) | 1 | 1 | 1 | None |
| Book Consultation (/book-consultation) | 1 | 1 | 1 | None |

## Duplicate Event Prevention

- No standalone `gtag.js` loaded — GA4 fires exclusively through GTM
- GTM script loaded once in root layout (shared across all routes)
- Clarity script loaded once in root layout
- Static export means scripts are embedded in every HTML file but only execute once per page load
- No `dataLayer.push` for page_view — GTM handles this automatically via "All Pages" trigger

## Confirmation Checklist

- [x] GTM loaded globally on all pages
- [x] GA4 receiving events via GTM (not standalone)
- [x] Clarity loaded globally on all pages
- [x] Page views tracking on all verified routes
- [x] No duplicate tracking scripts
- [x] noscript fallback present for GTM
- [x] No modifications to existing page layouts
- [x] No modifications to Supabase integrations
