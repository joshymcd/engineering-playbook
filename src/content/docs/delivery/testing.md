---
title: Testing
description: A pragmatic test pyramid for domain logic, repositories, UI, and deployed workflows.
---

## Test the boundary that owns the risk

### Domain tests

Use Vitest for pure validation, calculations, date rules, state transitions, and normalization. These should be fast and exhaustive around edge cases.

### Repository contract tests

Define a reusable behavior suite for persistence adapters: ownership, uniqueness, immutable fields, ordering, atomic aggregates, conflicts, and defensive serialization. Run the same contract against in-memory and production adapters where feasible.

### Component tests

Test complex forms, kind-specific fields, pending behavior, failure recovery, and pure timeline/list presentation. Do not reproduce browser workflows in dozens of shallow component tests.

### Playwright

Cover a small number of critical vertical slices. Assert navigation, mutation, direct links, validation, and no unexpected page/console errors. Run against deployed preview stages when cloud integration matters.

## Script baseline

Every application should expose:

```text
build
check       non-mutating verification
fix         formatting/lint writes
lint
typecheck
```

Do not leave placeholder test scripts that deliberately fail in workspace packages.

## CI order

1. Frozen dependency install.
2. Format check.
3. Lint.
4. Typecheck.
5. Unit tests.
6. Production build.
7. Deploy preview when needed.
8. Playwright against the preview.

Upload Playwright traces and screenshots on failure.
