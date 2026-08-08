---
title: Choosing the Stack
description: Defaults and decision rules for the main application technologies.
---

## Default application stack

| Concern              | Default                     | Use it when                                                          |
| -------------------- | --------------------------- | -------------------------------------------------------------------- |
| Full-stack framework | TanStack Start              | The app has routes plus server functions or API routes               |
| Routing              | TanStack Router file routes | Always in a TanStack application                                     |
| Remote state         | TanStack Query              | Data is fetched, cached, or mutated asynchronously                   |
| Reactive records     | TanStack DB                 | Client joins, optimistic writes, or offline-shaped data are valuable |
| Forms                | TanStack Form + Zod         | The form is structured, reusable, or has cross-field rules           |
| UI primitives        | shadcn source               | The application needs a cohesive component system                    |
| Styling              | Tailwind CSS v4             | The repository uses the standard application UI stack                |
| Validation           | Zod                         | Data crosses a trust boundary or defines a domain contract           |
| Infrastructure       | SST on AWS                  | The application deploys to AWS                                       |
| Unit tests           | Vitest                      | Pure domain, repository, and component behavior                      |
| Browser tests        | Playwright                  | Critical workflows cross routing, data, and UI boundaries            |

## TanStack DB is a decision, not a requirement

Use TanStack DB when the browser benefits from normalized raw collections, reactive joins, optimistic transactions, or future offline synchronization. Use Query alone when each screen consumes a small server-shaped snapshot and relational client composition adds little value.

TanStack DB does **not** automatically provide durable offline storage, conflict resolution, or an offline mutation queue. Those remain explicit application concerns.

## Persistence choices

### DynamoDB

Prefer it for bounded access patterns, SST-native serverless deployment, transactional aggregates, and scale without connection management. Define partition/sort keys from known queries and use conditions for uniqueness and optimistic concurrency.

### PostgreSQL and Drizzle

Prefer them for relational data, flexible reporting, ad hoc querying, and constraints that naturally belong in SQL. Keep migrations reviewed and applied through an explicit human or deployment process.

### IndexedDB or localStorage

Use browser-local persistence for intentionally local applications, caches, drafts, and offline metadata. Do not present it as collaborative server storage.

### In-memory repositories

Use them for architecture spikes and contract tests. Label them clearly: process restarts, deployments, and parallel Lambda instances make them non-durable.

## Repository layout

Default to a single package. Introduce a workspace when there are multiple deployables, shared packages with real consumers, or independently testable/runtime-specific boundaries. Do not create a monorepo merely because SST is present.

## SSR policy

Choose deliberately:

- Keep SSR for public content, initial HTML, and server loaders.
- Use selective data-only SSR where useful.
- Disable route SSR for deliberately client-rendered applications with browser-scoped stores.

Do not make `ssr: false` a universal template default.
