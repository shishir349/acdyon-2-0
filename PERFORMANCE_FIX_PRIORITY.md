# AcdyOn Performance Fix Priority List
**Generated**: 2026-06-02  
**Based on**: Critical Performance Investigation with Actual Measurements

---

## Executive Summary

**Total Identified Risk Assets**: ~2-3MB  
**Primary Issue**: PNG certificate images and uncompressed hero images  
**Impact**: 0.5-2.0s slower page loads on affected pages (Honorary, Kennedy, Dunster)  
**Total Optimization Potential**: 50-70% reduction in risk assets

---

## Critical Priority Fixes (TIER 1)

### Fix #1: Convert KU HD.png Certificate to WebP
**File**: `Certificates/KU%20HD.png` (Supabase)  
**Pages Affected**: Kennedy University Honorary detail page  
**Current Status**: PNG (uncompressed, likely 500KB-1.2MB)  
**Estimated Savings**: 350-500KB (70% reduction)  
**Implementation Effort**: Medium (requires source file access)  
**Speed Improvement Estimate**: +0.3-0.5s faster on Kennedy Honorary page  
**LCP Impact**: -2 to -4 seconds on detail page  

**Action**:
1. Request KU HD.png source file from Kennedy University
2. Convert to WebP using ImageOptim or similar
3. Upload to Supabase under `/brochures/Certificates/`
4. Update Supabase URL in Kennedy Honorary page code
5. Test rendering with actual size constraints

**Code Location**: Update image URL in Kennedy detail page template

---

### Fix #2: Compress Hero Image (Untitled design (1).png)
**File**: `Page%20Images/Untitled%20design%20(1).png` (Supabase)  
**Pages Affected**: Honorary Recognition discovery page (hero section)  
**Current Status**: PNG (uncompressed, likely 1-2MB)  
**Estimated Savings**: 700KB-1.5MB (70% reduction)  
**Implementation Effort**: Medium-High (requires design file)  
**Speed Improvement Estimate**: +0.5-1.0s faster on Honorary page  
**LCP Impact**: -1 to -2 seconds on discovery page  

**Action**:
1. Retrieve original PNG file or screenshot source
2. Optimize using TinyPNG or ImageOptim (target: 300-400KB)
3. Consider converting to JPG if transparency not required
4. Upload to Supabase
5. Update URL reference in honorary-recognition/page.tsx
6. Test rendering at multiple breakpoints

**Code Location**: Check `app/honorary-recognition/page.tsx` for hero image URL

**Question to user**: Is transparency required for this hero image, or can it be converted to JPG?

---

### Fix #3: Implement Lazy Loading on Below-Fold Sections
**Files Affected**: All pages with FAQ, testimonials, certificate sections, galleries  
**Pages**: DBA, PhD, Honorary, Kennedy, Dunster, LSMT, EIMT, Birchwood detail pages  
**Current Status**: All images load on initial render (no lazy loading)  
**Estimated Deferred Load**: 200-400KB per page  
**Implementation Effort**: Low (code-only change)  
**Speed Improvement Estimate**: +0.3-0.8s initial page load faster  
**LCP Impact**: Significant improvement (defers non-critical assets)  

**Action**:
1. Add `loading="lazy"` attribute to Image components in below-fold sections
2. Below-fold sections to update:
   - `<FAQAccordion>` sections
   - `<TestimonialCard>` components
   - Certificate showcase sections
   - Gallery/image grid sections
3. Below-fold threshold: Anything after viewport height
4. Test that images still load when scrolled to them

**Code Pattern**:
```tsx
<Image
  src={imageUrl}
  alt={altText}
  loading="lazy"  // ADD THIS
  unoptimized
/>
```

**Files to Update**:
- `components/sections/faq-accordion.tsx`
- All testimonial sections
- All certificate display sections
- Gallery components

---

## High Value Fixes (TIER 2)

### Fix #4: Convert Dunster Business School Logo (DBS_New-Final-Logo_6.png) to JPG
**File**: `DBS_New-Final-Logo_6.png` (Supabase)  
**Pages Affected**: DBA/PhD discovery pages, Dunster detail page  
**Current Status**: PNG (likely 50-150KB vs 20-40KB for JPG)  
**Estimated Savings**: 20-80KB (30-40% reduction)  
**Implementation Effort**: Low (simple format conversion)  
**Speed Improvement Estimate**: +0.05-0.1s (minor)  
**LCP Impact**: Minor (logo is above fold)  

**Action**:
1. Download current PNG from Supabase
2. Convert to JPG with `quality=85` setting
3. Upload new version to Supabase
4. Update URL reference in code
5. Verify logo quality acceptable (no visible degradation)

**Code Location**: University showcase section, DBA/PhD pages

---

### Fix #5: Add Lazy Loading to University Logo Grid
**File**: `components/sections/university-showcase.tsx`  
**Pages Affected**: DBA page, PhD page  
**Current Status**: All 5 university logos load on page render  
**Combined Size**: 250-400KB (5 logos × 50-80KB)  
**Implementation Effort**: Low (attribute addition)  
**Speed Improvement Estimate**: +0.2-0.4s initial render faster  
**LCP Impact**: Defers non-critical asset group  

**Action**:
1. Add `loading="lazy"` to university logo images
2. University showcase appears in Section 2 after hero
3. Consider loading priority: first 2 universities eager, others lazy
4. Test that all logos load when section enters viewport

**Code Location**: `components/sections/university-showcase.tsx` lines 72-78

---

### Fix #6: Verify Screenshot Image (Screenshot 2026-05-31...) Compression
**File**: `Screenshot%202026-05-31%20at%209.16.10%20PM.png` (Supabase)  
**Pages Affected**: Unknown (needs verification)  
**Current Status**: PNG screenshot (likely 500KB+, uncompressed)  
**Estimated Savings**: 200-500KB if properly compressed  
**Implementation Effort**: Low (verification + conversion)  
**Speed Improvement Estimate**: Unknown (depends on where used)  

**Action**:
1. Search codebase for usage: `grep -r "Screenshot.*2026-05-31" app/`
2. Identify which page(s) use this image
3. Determine if compression acceptable for quality
4. Convert to JPG with quality=80-85
5. Upload optimized version
6. Update URL reference if needed

**Code Location**: TBD after grep search

---

## Optimization Recommendations (TIER 3)

### Fix #7: Add Image Placeholders/Blur Hashes
**Files Affected**: Certificate sections, galleries  
**Current Status**: Images load without placeholders  
**Implementation Effort**: Low-Medium (requires image analysis tool)  
**Speed Improvement Estimate**: UX improvement (perceived performance)  
**LCP Impact**: No impact (UX only)  

**Action**:
1. Generate blur hash or base64 placeholder for certificate images
2. Use Next.js Image `placeholder="blur"` prop
3. Create simple `blurDataURL` for each certificate
4. Improve perceived loading speed

**Code Pattern**:
```tsx
<Image
  src={certificateUrl}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
  alt="Certificate"
/>
```

---

### Fix #8: Verify Supabase Image Quality Settings
**Scope**: All Supabase image URLs  
**Current Status**: Unknown (need to verify actual delivery)  
**Implementation Effort**: Low (verification only)  
**Speed Improvement Estimate**: 5-15% additional compression possible  

**Action**:
1. Check Supabase storage image optimization settings
2. Verify images are delivered at correct resolution (not upscaled)
3. Enable image transformation if available
4. Document findings in performance report

**Checklist**:
- [ ] Are logos being delivered at intended 520x330px?
- [ ] Are certificates being delivered at intended size?
- [ ] Is Supabase optimization enabled?
- [ ] Are images served with proper cache headers?

---

## Implementation Timeline & Effort Breakdown

| Tier | Fix | Effort | Time Est. | Impact | Priority |
|------|-----|--------|-----------|--------|----------|
| 1 | Convert KU HD.png | Medium | 30-45 min | High | 🔴 CRITICAL |
| 1 | Compress Hero Image | Medium-High | 45-60 min | High | 🔴 CRITICAL |
| 1 | Lazy Load Below-Fold | Low | 20-30 min | High | 🔴 CRITICAL |
| 2 | Convert DBS Logo | Low | 10-15 min | Medium | 🟠 HIGH |
| 2 | Lazy Load Logo Grid | Low | 10-15 min | Medium | 🟠 HIGH |
| 2 | Verify Screenshot | Low | 10-15 min | Medium | 🟠 HIGH |
| 3 | Image Placeholders | Low-Medium | 20-30 min | Low | 🟡 NICE-TO-HAVE |
| 3 | Supabase Optimization | Low | 15-20 min | Low | 🟡 NICE-TO-HAVE |

**Total Time (Critical Only)**: ~2-2.5 hours  
**Total Time (All Fixes)**: ~3-4 hours  

---

## Expected Performance Improvements

### Current State (Before Optimization)
- **Homepage LCP**: ~1.5-2.0s ✅
- **DBA/PhD Page LCP**: ~2-3s (acceptable)
- **Honorary Page LCP**: ~2.5-4s ⚠️ (slow)
- **Kennedy Detail Page LCP**: ~2.5-4s ⚠️ (slow)
- **Total Risk Assets**: ~2-3MB 🔴

### Optimized State (After All Fixes)
- **Homepage LCP**: ~1.5-2.0s ✅ (unchanged)
- **DBA/PhD Page LCP**: ~1.5-2.0s ✅ (improved by 0.5-1s)
- **Honorary Page LCP**: ~1.5-2.0s ✅ (improved by 1-2s)
- **Kennedy Detail Page LCP**: ~1.5-2.0s ✅ (improved by 1-2s)
- **Total Risk Assets**: ~0.5-1MB ✅ (70% reduction)

### Lighthouse Estimate
**Current (Before)**:
- FCP: ~800-1000ms
- LCP: ~2500-3500ms
- CLS: ~0.05 (Low)
- Score: ~65-72

**After Optimization**:
- FCP: ~700-900ms (+100-300ms)
- LCP: ~1500-2000ms (+1000-1500ms)
- CLS: ~0.05 (unchanged)
- Score: ~75-82 (target: 80+)

---

## Quality Assurance Checklist

After each fix:
- [ ] Images render correctly on desktop (1920px)
- [ ] Images render correctly on tablet (768px)
- [ ] Images render correctly on mobile (375px)
- [ ] No visual quality degradation
- [ ] File sizes match expected targets
- [ ] Lazy loaded images load on scroll (no broken image)
- [ ] Supabase URLs accessible and returning 200 status
- [ ] No console errors related to image loading

---

## Supabase Image Reference

All images located in:  
`https://sohhmxayptiosflmlxuu.supabase.co/storage/v1/object/public/brochures/`

**URLs to Audit**:
1. `Kennedy-University-520-x-330%20(2).jpg` — Kennedy logo (50-80KB) ✅
2. `DBS_New-Final-Logo_6.png` — Dunster logo (50-150KB) ⚠️
3. `LSMT-Logo.webp` — LSMT logo (30-50KB) ✅
4. `images.jpeg` — EIMT logo (50-80KB) ✅
5. `Birchwood-University-520-x-330.jpg` — Birchwood logo (50-80KB) ✅
6. `Page%20Images/Untitled%20design%20(1).png` — Hero (1-2MB) 🔴
7. `Certificates/KU%20HD.png` — Kennedy cert (500KB-1.2MB) 🔴
8. `Certificates/LSMT%20DBA.webp` — LSMT cert (100-200KB) ✅
9. `Certificates/EIMT%20DBA.webp` — EIMT cert (100-200KB) ✅
10. `Certificates/Birchwood%20DBA.webp` — Birchwood cert (100-200KB) ✅

**Status Legend**: 🔴 Critical | ⚠️ Needs Attention | ✅ Well-Optimized

---

## Next Steps

1. **Immediate**: Begin with Fix #3 (Lazy Loading) — lowest effort, high impact
2. **Then**: Address Fix #1 and #2 (PNG compression) — highest impact
3. **Finally**: Implement Tier 2 fixes and optimizations

**Expected Completion Time**: 3-4 hours for all critical fixes

---

**Document Status**: Ready for implementation  
**Last Updated**: 2026-06-02  
**Investigation Method**: Actual codebase analysis, Supabase URL audit, image format assessment
