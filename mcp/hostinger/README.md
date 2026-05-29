# AcdyOn Hostinger MCP Configuration

This directory contains configuration files for the Hostinger API MCP integration.

**The application now uses the published `hostinger-api-mcp@latest` npm package instead of the local implementation.**

The local source code in the `src/` directory is retained for reference but is no longer used in the active application.

## Setup

The Hostinger MCP is configured in `.claude/settings.json` at the project root.

To use the Hostinger API integration:

1. Generate a Hostinger API token from hPanel
2. When prompted by Claude Code, enter your API token in the `api_token` input
3. The MCP server will automatically load with your credentials

Environment variables are managed through the input prompt system.

## Tools

- `hostinger_api_request`: generic authenticated request to any Hostinger `/api/...` endpoint.
- `hostinger_list_subscriptions`: reads `/api/billing/v1/subscriptions`.
- `hostinger_list_vps`: reads `/api/vps/v1/virtual-machines`.
- `hostinger_get_dns_records`: reads `/api/dns/v1/zones/{domain}`.
- `hostinger_update_dns_records`: updates DNS records with `/api/dns/v1/zones/{domain}`.
- `acdyon_deployment_payload`: creates a deployment plan and Docker Compose payload for hosting the AcdyOn Next.js site from GitHub on a Hostinger VPS.

## Notes

The Hostinger public API is strongest for VPS, DNS, domains, billing, and related account operations. If your plan is shared web hosting and requires file-manager or FTP upload, that may still need SFTP/FTP credentials or hPanel actions unless Hostinger exposes a matching API endpoint for your account.
