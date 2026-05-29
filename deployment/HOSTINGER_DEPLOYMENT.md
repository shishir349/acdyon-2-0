# AcdyOn Deployment on Hostinger

## Website Information
- **Project**: AcdyOn 2.0 - Premium Global Education Platform
- **Type**: Static Next.js Export
- **Pages**: 19 fully built pages
- **Build Status**: ✅ Production ready
- **Last Updated**: 2026-05-29

## Build Details
```
Next.js 15.5.18
Build: next export
Output: Static HTML/CSS/JS
Size: ~172 KB first load JS per homepage
All 19 routes prerendered as static content
Zero TypeScript errors
```

## Available Services (Active)
- Premium Web Hosting (₹5,388/year)
- .IO Domain (₹5,939/year)
- Business Email (₹1,188/year trial)

## Deployment Options

### Option 1: Direct File Upload (Recommended for Static Sites)
1. Use Hostinger File Manager or SFTP
2. Upload all files from `out/` directory
3. Set document root to `/public_html/` or equivalent
4. No build required - files are pre-rendered static HTML

### Option 2: Git-based Deployment
1. Push repository to GitHub
2. Use Hostinger's GitHub integration
3. Auto-deploy on push

### Option 3: Docker Deployment (For VPS)
If upgrading to VPS, use the included Docker Compose configuration.

## DNS Configuration
- Current Domain: .io domain (active)
- Point A record to Hostinger nameservers
- Update DNS records via Hostinger API or Panel

## After Deployment
1. ✅ Test all 19 pages load correctly
2. ✅ Verify responsive design on mobile
3. ✅ Check SSL certificate is active
4. ✅ Test navigation and CTAs
5. ✅ Monitor performance metrics

## Support Resources
- Hostinger Dashboard: https://hpanel.hostinger.com/
- Hostinger API: https://developers.hostinger.com/
- Documentation: Check mcp/hostinger/ for API configuration
