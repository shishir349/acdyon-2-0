#!/usr/bin/env node

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const DEFAULT_BASE_URL = "https://developers.hostinger.com";

type JsonValue =
  | string
  | number
  | boolean
  | null
  | JsonValue[]
  | { [key: string]: JsonValue };

const jsonSchema: z.ZodType<JsonValue> = z.lazy(() =>
  z.union([
    z.string(),
    z.number(),
    z.boolean(),
    z.null(),
    z.array(jsonSchema),
    z.record(jsonSchema),
  ]),
);

function getConfig() {
  const token = process.env.HOSTINGER_API_TOKEN;
  const baseUrl = process.env.HOSTINGER_API_BASE_URL ?? DEFAULT_BASE_URL;

  if (!token) {
    throw new Error("HOSTINGER_API_TOKEN is not set. Add your token to the MCP server env config.");
  }

  return { token, baseUrl };
}

function buildUrl(baseUrl: string, path: string, query?: Record<string, string | number | boolean | undefined>) {
  if (!path.startsWith("/api/")) {
    throw new Error("For safety, Hostinger API paths must start with /api/.");
  }

  const url = new URL(path, baseUrl);
  for (const [key, value] of Object.entries(query ?? {})) {
    if (value !== undefined) {
      url.searchParams.set(key, String(value));
    }
  }
  return url;
}

async function hostingerRequest(input: {
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  path: string;
  query?: Record<string, string | number | boolean | undefined>;
  body?: JsonValue;
}) {
  const { token, baseUrl } = getConfig();
  const url = buildUrl(baseUrl, input.path, input.query);

  const response = await fetch(url, {
    method: input.method,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: input.body === undefined || input.method === "GET" ? undefined : JSON.stringify(input.body),
  });

  const rawText = await response.text();
  let data: unknown = rawText;

  try {
    data = rawText ? JSON.parse(rawText) : null;
  } catch {
    data = rawText;
  }

  if (!response.ok) {
    return {
      ok: false,
      status: response.status,
      statusText: response.statusText,
      data,
    };
  }

  return {
    ok: true,
    status: response.status,
    statusText: response.statusText,
    data,
  };
}

function asText(data: unknown) {
  return {
    content: [
      {
        type: "text" as const,
        text: JSON.stringify(data, null, 2),
      },
    ],
  };
}

const server = new McpServer({
  name: "acdyon-hostinger-mcp",
  version: "0.1.0",
});

server.tool(
  "hostinger_api_request",
  "Make an authenticated request to a Hostinger API endpoint. Path must start with /api/.",
  {
    method: z.enum(["GET", "POST", "PUT", "PATCH", "DELETE"]).default("GET"),
    path: z.string().describe("Hostinger API path, for example /api/billing/v1/subscriptions"),
    query: z.record(z.union([z.string(), z.number(), z.boolean()])).optional(),
    body: jsonSchema.optional(),
  },
  async ({ method, path, query, body }) => asText(await hostingerRequest({ method, path, query, body })),
);

server.tool(
  "hostinger_list_subscriptions",
  "List Hostinger subscriptions for the authenticated account.",
  {},
  async () => asText(await hostingerRequest({ method: "GET", path: "/api/billing/v1/subscriptions" })),
);

server.tool(
  "hostinger_list_vps",
  "List Hostinger VPS virtual machines for the authenticated account.",
  {
    page: z.number().int().positive().optional(),
  },
  async ({ page }) =>
    asText(
      await hostingerRequest({
        method: "GET",
        path: "/api/vps/v1/virtual-machines",
        query: { page },
      }),
    ),
);

server.tool(
  "hostinger_get_dns_records",
  "Get DNS zone records for a domain managed in Hostinger.",
  {
    domain: z.string().describe("Domain name, for example acdyon.com"),
  },
  async ({ domain }) =>
    asText(
      await hostingerRequest({
        method: "GET",
        path: `/api/dns/v1/zones/${encodeURIComponent(domain)}`,
      }),
    ),
);

server.tool(
  "hostinger_update_dns_records",
  "Update DNS records for a domain managed in Hostinger. Use overwrite=false unless you intentionally want to replace records.",
  {
    domain: z.string(),
    overwrite: z.boolean().default(false),
    records: z.array(
      z.object({
        type: z.string().describe("Record type, for example A, CNAME, TXT"),
        name: z.string().describe("Record name, for example @ or www"),
        content: z.string().describe("Record content/value"),
        ttl: z.number().int().positive().optional(),
        priority: z.number().int().optional(),
      }),
    ),
  },
  async ({ domain, overwrite, records }) =>
    asText(
      await hostingerRequest({
        method: "PUT",
        path: `/api/dns/v1/zones/${encodeURIComponent(domain)}`,
        body: {
          overwrite,
          zone: records,
        },
      }),
    ),
);

server.tool(
  "acdyon_deployment_payload",
  "Generate an AcdyOn deployment plan and Docker Compose payload for Hostinger VPS deployment from GitHub.",
  {
    domain: z.string().default("acdyon.com"),
    repositoryUrl: z.string().url().default("https://github.com/shishir349/acdyon-website"),
    projectName: z.string().default("acdyon"),
    containerPort: z.number().int().positive().default(3000),
  },
  async ({ domain, repositoryUrl, projectName, containerPort }) => {
    const dockerfile = [
      "FROM node:22-alpine AS deps",
      "WORKDIR /app",
      "COPY package.json pnpm-lock.yaml ./",
      "RUN corepack enable && pnpm install --frozen-lockfile",
      "",
      "FROM node:22-alpine AS builder",
      "WORKDIR /app",
      "COPY --from=deps /app/node_modules ./node_modules",
      "COPY . .",
      "RUN corepack enable && pnpm build",
      "",
      "FROM node:22-alpine AS runner",
      "WORKDIR /app",
      "ENV NODE_ENV=production",
      "COPY --from=builder /app/.next ./.next",
      "COPY --from=builder /app/public ./public",
      "COPY --from=builder /app/package.json ./package.json",
      "COPY --from=builder /app/node_modules ./node_modules",
      `EXPOSE ${containerPort}`,
      `CMD [\"node_modules/.bin/next\", \"start\", \"-H\", \"0.0.0.0\", \"-p\", \"${containerPort}\"]`,
    ].join("\n");

    const compose = [
      "services:",
      `  ${projectName}:`,
      "    build: .",
      "    restart: unless-stopped",
      "    environment:",
      "      NODE_ENV: production",
      "    ports:",
      `      - \"${containerPort}:${containerPort}\"`,
    ].join("\n");

    return asText({
      domain,
      repositoryUrl,
      projectName,
      notes: [
        "Push Dockerfile and docker-compose.yml to the GitHub repository before deploying.",
        "On Hostinger VPS, use Docker Manager or the Hostinger API Docker project endpoint available to your account.",
        "For shared hosting, use static export/SFTP instead; the public Hostinger API may not expose file-manager upload for every plan.",
      ],
      files: {
        Dockerfile: dockerfile,
        "docker-compose.yml": compose,
      },
      suggestedApiUse: {
        listVps: "/api/vps/v1/virtual-machines",
        genericTool: "hostinger_api_request",
      },
    });
  },
);

const transport = new StdioServerTransport();
await server.connect(transport);
