# Static Routing Audit Report — AcdyOn 2.0

## Issue Summary

**Symptom**: All pages work via internal `<Link>` navigation, but fail on direct URL access or browser refresh.
**Environment**: Hostinger Static Website Hosting (Apache-based)
**Framework**: Next.js 15 with `output: "export"` (static HTML export)

## Root Cause

### 1. Missing `trailingSlash: true` in `next.config.ts`

Without `trailingSlash: true`, Next.js static export generates flat HTML files:

```
out/
├── doctoral-programs/
│   ├── dba.html          ← Apache can't resolve /doctoral-programs/dba/
│   └── phd.html
├── programs/
│   └── agentic-ai-cybersecurity-mastery.html
└── index.html
```

Apache looks for a directory + `index.html` when a trailing-slash URL is requested. Since Next.js exported `route.html` files instead of `route/index.html`, all non-root URLs returned 404.

### 2. Missing `.htaccess` Rewrite Rules

The original `.htaccess` had no `RewriteEngine` directives. Without rewrite rules, Apache cannot enforce trailing slashes or map clean URLs to their corresponding files.

## Fix Applied

### `next.config.ts` — Added `trailingSlash: true`

```typescript
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,   // ← Added
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};
```

### `public/.htaccess` — Added Rewrite Rules

```apache
# Enable rewrite engine
RewriteEngine On

# If request is not a file or directory, try adding trailing slash
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_URI} !/$
RewriteRule ^(.*)$ /$1/ [L,R=301]
```

## Post-Fix Export Structure

With `trailingSlash: true`, Next.js now generates the correct directory-based structure:

```
out/
├── index.html                                          ← /
├── doctoral-programs/
│   ├── dba/
│   │   ├── index.html                                  ← /doctoral-programs/dba/
│   │   └── birchwood/
│   │       └── index.html                              ← /doctoral-programs/dba/birchwood/
│   └── phd/
│       └── index.html                                  ← /doctoral-programs/phd/
├── honorary-recognition/
│   └── index.html                                      ← /honorary-recognition/
├── programs/
│   └── agentic-ai-cybersecurity-mastery/
│       └── index.html                                  ← /programs/agentic-ai-cybersecurity-mastery/
├── universities/
│   └── index.html                                      ← /universities/
├── book-consultation/
│   └── index.html                                      ← /book-consultation/
└── _next/
    └── static/                                         ← JS/CSS bundles
```

## Route Verification

| Route | File Exists | Direct Access |
|-------|------------|---------------|
| `/` | `out/index.html` | Works |
| `/doctoral-programs/dba/` | `out/doctoral-programs/dba/index.html` | Works |
| `/doctoral-programs/dba/birchwood/` | `out/doctoral-programs/dba/birchwood/index.html` | Works |
| `/doctoral-programs/phd/` | `out/doctoral-programs/phd/index.html` | Works |
| `/honorary-recognition/` | `out/honorary-recognition/index.html` | Works |
| `/programs/agentic-ai-cybersecurity-mastery/` | `out/programs/agentic-ai-cybersecurity-mastery/index.html` | Works |
| `/universities/` | `out/universities/index.html` | Works |
| `/book-consultation/` | `out/book-consultation/index.html` | Works |

## How It Works

1. User visits `https://acdyon.com/doctoral-programs/dba/`
2. Apache finds `doctoral-programs/dba/` directory → serves `index.html`
3. If user visits without trailing slash (`/doctoral-programs/dba`), `.htaccess` rewrite rule adds trailing slash via 301 redirect
4. Internal `<Link>` navigation continues to work via client-side routing (React hydration)

## Prevention

- `trailingSlash: true` must remain in `next.config.ts` for all future builds
- `.htaccess` in `public/` is automatically copied to `out/` during `next build`
- Any new pages added to `app/` will automatically export as `route/index.html`
