---
title: Anti-patterns
description: Patterns repeatedly found to create correctness, security, or maintenance problems.
---

## Architecture

- Speculative extension points, compatibility paths, or deployment modes without a current requirement.
- POCs carrying production-scale architecture for problems they are not testing.
- One-use helpers, interfaces, wrappers, or generic components that only rename direct code.
- Persisted fields or state transitions that are written but never read.
- Multiple QueryClients serving one application cache.
- Server functions, raw database calls, schemas, algorithms, and collections combined in one large module.
- Server functions embedded throughout route components.
- Route guards treated as API authorization.
- Repository interfaces created mechanically without a replaceable boundary.
- One enormous repository module spanning unrelated domains.

## TanStack DB and forms

- Live queries or whole-collection subscriptions inside every repeated card.
- Passing only an ID when the parent already owns the full record.
- Sending complete persisted rows as update inputs.
- Server-generated replacement IDs after optimistic relationships reference a temporary ID.
- Toasting success or navigating before `isPersisted.promise` resolves.
- Splitting submission between an inert form and button `onClick`.
- Showing schema failures only in toasts instead of beside fields.

## Tooling

- Multiple lockfiles or no declared package manager.
- Floating `latest` ranges for tightly coupled framework packages.
- A `check` command that silently rewrites source.
- Placeholder test scripts that intentionally fail.
- Stale README commands that contradict package scripts.
- Hand-editing generated route trees.

## UI and accessibility

- Icon-only buttons without accessible names.
- Tooltips used as the only label.
- Bare SVGs as keyboard-inaccessible status triggers.
- Buttons nested inside links.
- Hand-rolled mobile drawers without focus management.
- Dark tokens without a real theme owner and pre-render initialization.
- Empty-state titles rendered as non-semantic generic elements.

## Security and delivery

- Credentials, fallback secrets, or provider tokens in source.
- Logging cookies, sessions, auth payloads, or database URL fragments.
- Public caching of identity-dependent responses.
- Static AWS credentials in GitHub Actions when OIDC is available.
- Floating `@latest` action references.
- Production SST resources without retain/protect policy or documented rationale.
