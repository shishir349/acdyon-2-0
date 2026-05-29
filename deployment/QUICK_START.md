# 🚀 AcdyOn on Hostinger - Quick Start Guide

## Step 1: Login to Hostinger
1. Go to https://hpanel.hostinger.com/
2. Login with your credentials
3. Navigate to **Hosting** → **Premium Web Hosting**

## Step 2: Upload Files
### Option A: Using File Manager (Easiest)
1. In hPanel, click **File Manager**
2. Navigate to `/public_html/` (or root directory)
3. Delete existing files (if any)
4. Upload all files from this `deployment/` folder
5. Make sure `.htaccess` is present for rewrite rules

### Option B: Using SFTP/FTP
```bash
# Connect via SFTP
sftp username@your-hostinger-ip

# Navigate to public_html
cd public_html

# Upload files recursively
put -r *
```

## Step 3: Configure Domain

Your active domain: **acdyon.io** (or similar .io domain)

### Point domain to Hostinger:
1. Go to **Domains** in hPanel
2. Select your .io domain
3. Set nameservers to:
   - ns1.hostinger.com
   - ns2.hostinger.com
   - ns3.hostinger.com
   - ns4.hostinger.com

4. Wait 24-48 hours for DNS propagation

## Step 4: Enable SSL (HTTPS)
1. In hPanel, go to **SSL**
2. Click **Manage SSL**
3. Enable **Free Let's Encrypt SSL** (usually auto-installed)
4. Wait 5-10 minutes for certificate activation

## Step 5: Test Deployment
```bash
# After DNS propagates:
curl https://your-acdyon-domain.io/
```

You should see the AcdyOn homepage HTML.

## Verification Checklist
- ✅ Homepage loads at domain root
- ✅ All 19 pages accessible (about, programs, universities, etc.)
- ✅ Navigation menu works
- ✅ CTAs are clickable
- ✅ Responsive design on mobile
- ✅ SSL certificate is active (green lock)
- ✅ Images load correctly

## Performance Optimization

### Enable Caching
1. In hPanel, go to **Performance**
2. Enable **Browser Caching**
3. Set cache expiry: 1 year for static assets

### Enable Gzip Compression
1. Go to **Settings** → **General**
2. Enable **Gzip Compression**

### CDN (Optional)
1. In hPanel, enable **Hostinger CDN**
2. Select all static file types
3. Activate to speed up global access

## Monitoring

### Check Site Status
```bash
# Monitor uptime
curl -I https://your-acdyon-domain.io/

# Expected response: HTTP 200 OK
```

### View Error Logs
1. In hPanel, go to **Logs**
2. Check **Error Log** for any issues

## Next Steps

### Add Email
- Use included Business Email service
- Set up email addresses at your domain

### Add Analytics
- Integrate Google Analytics via hPanel
- Monitor visitor traffic and behavior

### Backup
- Enable **Weekly Backups** in hPanel
- Store backups locally for safety

## Support
- Hostinger Support: https://support.hostinger.com/
- Your Account: https://hpanel.hostinger.com/
- Email: support@hostinger.com

---

**Deployed on**: 2026-05-29
**Framework**: Next.js 15.5.18
**Pages**: 19 fully optimized
**Build Size**: ~172 KB per page
**Status**: ✅ Production Ready
