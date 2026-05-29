# AcdyOn Hostinger MCP

Small MCP server for connecting Codex or another MCP client to the Hostinger API using your own Hostinger API token.

Hostinger's API currently documents bearer-token authentication, JSON requests, and the production server at `https://developers.hostinger.com`. Hostinger also publishes official SDKs and an official MCP server; this local server is intentionally small and AcdyOn-focused so you can inspect and adjust it.

## Setup

```powershell
cd "C:\Users\advdi\OneDrive\Documents\AcdyOn 2.0\mcp\hostinger"
pnpm install
pnpm build
```

Create a Hostinger API token from hPanel, then set:

```powershell
$env:HOSTINGER_API_TOKEN="your_token"
$env:HOSTINGER_API_BASE_URL="https://developers.hostinger.com"
```

For Codex or another MCP client, use `codex-mcp.example.json` as the starting config and paste your token into the `env` block.

## Tools

- `hostinger_api_request`: generic authenticated request to any Hostinger `/api/...` endpoint.
- `hostinger_list_subscriptions`: reads `/api/billing/v1/subscriptions`.
- `hostinger_list_vps`: reads `/api/vps/v1/virtual-machines`.
- `hostinger_get_dns_records`: reads `/api/dns/v1/zones/{domain}`.
- `hostinger_update_dns_records`: updates DNS records with `/api/dns/v1/zones/{domain}`.
- `acdyon_deployment_payload`: creates a deployment plan and Docker Compose payload for hosting the AcdyOn Next.js site from GitHub on a Hostinger VPS.

## Notes

The Hostinger public API is strongest for VPS, DNS, domains, billing, and related account operations. If your plan is shared web hosting and requires file-manager or FTP upload, that may still need SFTP/FTP credentials or hPanel actions unless Hostinger exposes a matching API endpoint for your account.
