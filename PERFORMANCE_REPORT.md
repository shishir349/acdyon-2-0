# AcdyOn Performance & Image Audit Report

## Image Audit

### Remote Images (All Accessible)
| Image | Location | Size | Status |
|-------|----------|------|--------|
| Birchwood-University-520-x-330.jpg | birchwood/page.tsx, universities.ts | ~50KB | OK |
| DBS_New-Final-Logo_6.png | dunster pages, honorary | ~40KB | OK |
| Kennedy-University-520-x-330 (2).jpg | kennedy pages, honorary | ~45KB | OK |
| LSMT-Logo.webp | lsmt/page.tsx | ~20KB | OK |
| images.jpeg (EIMT) | eimt/page.tsx, universities.ts | ~12KB | OK |
| Screenshot 2026-05-31 at 9.16.10 PM.png | lsbs/page.tsx | ~30KB | OK |
| Page Images/Untitled design (1).png | honorary-recognition hero | ~676KB | OK (large) |
| Certificates/Birchwood DBA.webp | birchwood/page.tsx | ~60KB | OK |
| Certificates/EIMT DBA.webp | eimt/page.tsx | ~55KB | OK |
| Certificates/LSMT DBA.webp | lsmt/page.tsx | ~254KB | OK |
| Certificates/KU HD.png | kennedy honorary | ~63KB | OK |
| Unsplash hero image | hero-section.tsx | optimized | OK |

### Local Images
| Image | Size | Status |
|-------|------|--------|
| /public/acdyon-logo.png | 891KB | OVERSIZED - recommend compress to WebP (<100KB) |

### Missing Images (Local paths in universities.ts)
These local paths are referenced but may not exist in /public:
- /universities/lsmt-logo.png
- /universities/kennedy-logo.png
- /universities/dunster-logo.png
- /universities/lsbs-logo.png
- /universities/paris-sbs-logo.png
- /certificates/dba-sample.png
- /certificates/phd-sample.png
- /certificates/dba-dunster.png

**Note:** These local paths are used in the universities.ts data file but the UniversityShowcase component uses the actual Supabase URLs from university detail pages. The local paths are fallbacks in the data model.

## Bundle Size Analysis

### Largest JS Chunks
| File | Size |
|------|------|
| framework-*.js | 185KB |
| Shared chunk (2358-*) | 170KB |
| Shared chunk (146-*) | 170KB |
| Shared chunk (6fe292aa-*) | 169KB |
| main-*.js | 125KB |
| Vendor chunk (937-*) | 120KB |
| polyfills-*.js | 110KB |

### First Load JS (shared by all pages): 102KB
This is acceptable for a Next.js 15 site with React 19.

### Heavy Dependencies Contributing to Bundle
- framer-motion (~45KB gzipped) - used in UniversityShowcase
- @radix-ui/react-accordion (~8KB) - used in FAQ sections
- lucide-react - tree-shaken, minimal impact
- @supabase/supabase-js (~25KB) - used in consultation form

## Recommended Optimizations

### Quick Wins
1. Compress /public/acdyon-logo.png (891KB -> target <100KB)
2. Compress honorary hero image (676KB PNG -> WebP ~150KB)
3. Compress LSMT certificate (254KB -> target ~80KB)

### Medium Priority
4. Consider replacing framer-motion with CSS animations in UniversityShowcase (saves ~45KB)
5. Dynamic import AccreditationShowcase component (used on few pages)

### Low Priority
6. Add local image fallbacks for university logos in /public/universities/
7. Consider serving Supabase images through a CDN with automatic resizing
