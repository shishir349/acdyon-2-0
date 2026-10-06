# Partner Network Audit — AcdyOn 2.0

## Verified Partner Institutions

| Institution | Country | Pathways | Logo Source | Pages |
|-------------|---------|----------|------------|-------|
| Kennedy University | USA | DBA, PhD, Honorary Doctorate | Supabase | Universities, Homepage, Mega Menu, Logo Marquee, GlobalNetwork, DBA/PhD/Honorary pages |
| Dunster Business School | Switzerland | DBA, PhD, Honorary Doctorate | Supabase | Universities, Homepage, Mega Menu, Logo Marquee, GlobalNetwork, DBA/PhD/Honorary pages |
| LSMT | UK | DBA | Supabase | Universities, Homepage, Mega Menu, Logo Marquee, GlobalNetwork, DBA page |
| EIMT | Switzerland | DBA | Supabase | Universities, Mega Menu, Logo Marquee, GlobalNetwork, DBA page |
| Birchwood University | Belgium | DBA | Supabase | Universities, Mega Menu, Logo Marquee, GlobalNetwork, DBA page |
| LSBS | UK | Honorary Doctorate | Supabase | Universities, Homepage, Logo Marquee, GlobalNetwork, Honorary page |

## Excluded Institution

| Institution | Country | Reason |
|-------------|---------|--------|
| Paris School of Business and Science (PSBS) | France | No Supabase logo available. Exists in `universities.ts` data but excluded from display until logo is uploaded. |

## Placeholder Content Removed

The following fictional institutions were removed from the codebase:

### From `universitiesExtended` (`lib/data/site.ts`)
| Placeholder Name | Listed Country | Status |
|-------------------|---------------|--------|
| Global Business University | Switzerland | **REMOVED** |
| International Leadership Institute | United Kingdom | **REMOVED** |
| American Professional Academy | United States | **REMOVED** |
| European Digital University | France | **REMOVED** |
| Asia-Pacific Academic Council | Singapore | **REMOVED** |
| Gulf Excellence Institute | UAE | **REMOVED** |
| Commonwealth Academic Alliance | Australia | **REMOVED** |
| African Leadership Academy | South Africa | **REMOVED** |

### From `GlobalNetwork` component (`components/sections/global-network.tsx`)
| Placeholder Name | Listed Country | Status |
|-------------------|---------------|--------|
| American Professional Academy | USA | **REMOVED** |
| Swiss Academic Forum | Switzerland | **REMOVED** |
| London Executive Institute | UK | **REMOVED** |
| European Academic Council | Belgium | **REMOVED** |
| Canadian Leadership Institute | Canada | **REMOVED** |
| Commonwealth Academic Alliance | Australia | **REMOVED** |

## Display Locations Audit

### Universities Page (`/universities`)
- **Before**: 8 fictional placeholder cards with flag icons, no logos, no pathways
- **After**: 6 real partner cards with Supabase logos, pathway badges, "View University" CTA

### Homepage — GlobalNetwork Component
- **Before**: 5 country cards (USA, Switzerland, UK, Belgium, Canada) with fictional institutions
- **After**: 4 country cards (USA, Switzerland, UK, Belgium) with real partners only

### Homepage — Logo Marquee
- **Status**: Already uses real partners from `partnerUniversities` array (6 real logos)
- **No changes needed**

### Homepage — University Section
- **Status**: Already uses real partners (Kennedy, Dunster, LSMT, LSBS)
- **No changes needed**

### Mega Menu Navigation
- **Status**: Already links to real university programme pages only
- **No changes needed**

## Missing Partner Institutions

| Institution | Issue | Resolution |
|-------------|-------|------------|
| PSBS (Paris School of Business and Science) | No Supabase logo uploaded | Upload logo to Supabase, then add to `universitiesExtended` and `partnerUniversities` arrays |

## Data Consistency Notes

- Birchwood University is listed as "Belgium" in `partnerUniversities` and "New York, USA" in `universities.ts`. The GlobalNetwork now shows it under Belgium.
- Dunster Business School is listed as "Switzerland" in display but "Manchester, UK" in `universities.ts` detail data. Display uses Switzerland consistently.
- Kennedy University is listed as "USA" in display but serves USA/France. Display uses USA.
