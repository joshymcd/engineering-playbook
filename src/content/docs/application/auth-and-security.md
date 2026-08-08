---
title: Authentication and Security
description: Authentication defaults, authorization boundaries, secrets, and trusted deployment practices.
---

## Authentication default

For authenticated TanStack Start applications, prefer Better Auth with a durable database adapter and TanStack Start cookies. Place the HTTP bridge in an API route and session discovery in middleware.

Use a pathless authenticated layout for navigation UX, but never treat the route guard as the data security boundary.

## Authorization belongs in every operation

Every server function that accesses private data must resolve identity and authorize the resource. Persistence reads and writes should include user, organization, or membership predicates. Child-resource operations must verify access through their parent aggregate.

## Secrets

- Ignore `.env` and local provider files.
- Validate required environment variables at startup or request boundaries.
- Use SST Secrets or CI secret stores for deployment credentials.
- Never put credentials, fallback secrets, or tokens in source files.
- Never log cookies, sessions, reset payloads, authorization headers, database URLs, or secret prefixes.
- Rotate any credential that reaches Git history; deleting the latest line is insufficient.

## Browser exposure

Only variables intentionally prefixed for the client may enter the browser bundle. Read server environment variables inside server handlers, not module scope.

## GitHub Actions

- Prefer OIDC over static cloud credentials.
- Restrict preview deployments from forks before granting cloud permissions.
- Use least-privilege workflow permissions.
- Pin third-party actions to reviewed commit SHAs where practical.
- Protect the production environment and prevent overlapping production deployments.

## Dependency and log hygiene

Pin compatible framework stacks rather than using floating `latest` ranges. Keep lockfiles committed, use frozen installs in CI, and avoid debug logging that changes the security posture in production.
