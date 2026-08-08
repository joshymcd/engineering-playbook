---
title: New Project Checklist
description: A copyable checklist for starting a modern application.
---

## Repository

- [ ] Choose one package manager and set `packageManager`.
- [ ] Commit one lockfile.
- [ ] Add README and repository-specific `AGENTS.md`.
- [ ] Configure strict TypeScript.
- [ ] Configure formatter/linter with generated-output exclusions.
- [ ] Make `check` non-mutating and `fix` mutating.

## Application

- [ ] Create `getRouter()` and generated file routes.
- [ ] Define root document metadata, providers, and error/not-found states.
- [ ] Create one QueryClient.
- [ ] Decide SSR policy explicitly.
- [ ] Add pathless `_app`, `_auth`, or `_public` layouts only where needed.

## Domain and data

- [ ] Define strict entity and operation schemas.
- [ ] Keep domain modules framework-independent.
- [ ] Choose Query alone or Query-backed TanStack DB deliberately.
- [ ] Keep persistence in server-only modules.
- [ ] Enforce authorization in every private operation.
- [ ] Add revision/idempotency design before offline or collaborative writes.

## UI

- [ ] Initialize one shadcn style and icon library.
- [ ] Define semantic Tailwind v4 tokens.
- [ ] Add responsive shell, skip link, focus styles, and reduced motion.
- [ ] Use native forms with inline validation and pending behavior.
- [ ] Add loading, empty, filtered-empty, error, and missing states.

## Testing

- [ ] Add Vitest domain tests.
- [ ] Add repository contract tests when adapters exist.
- [ ] Add Playwright for critical vertical slices.
- [ ] Fail browser tests on unexpected page/console errors.
- [ ] Verify production build locally.

## Delivery

- [ ] Configure SST production retention/protection.
- [ ] Keep local/preview stages disposable.
- [ ] Use OIDC for cloud deployment.
- [ ] Add PR CI and optional preview deployment.
- [ ] Protect the production environment.
- [ ] Document data durability, migration, and rollback expectations.
