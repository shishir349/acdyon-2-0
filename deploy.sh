#!/bin/bash
set -e

echo "Building Next.js static site..."
npx next build

echo "Creating deployment archive..."
cp .htaccess out/.htaccess
rm -f acdyon-deploy.tar.gz
tar -czf acdyon-deploy.tar.gz -C out --exclude='.DS_Store' .

echo "Deploy the archive using Claude Code:"
echo "  mcp__hostinger-hosting__hosting_deployStaticWebsite"
echo "  domain: acdyon.com"
echo "  archivePath: $(pwd)/acdyon-deploy.tar.gz"

echo ""
echo "Build complete! Archive ready at: acdyon-deploy.tar.gz"
