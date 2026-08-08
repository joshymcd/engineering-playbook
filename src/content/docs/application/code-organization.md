---
title: Code Organization
description: Folder boundaries, dependency direction, and naming rules.
---

## Preferred structure

```text
src/
  components/
    feature-name/
    shared/
    ui/
  data/
    collection-keys.ts
    query-client.ts
    queries.ts
    collections/
  domain/
    feature.ts
    feature.test.ts
    errors.ts
  middleware/
  providers/
  routes/
  server/
    functions/
    repository/
  router.tsx
  routeTree.gen.ts
```

Use only the directories the application needs. The dependency direction matters more than reproducing the entire tree.

## Dependency direction

```text
routes and components
        ↓
queries or collections
        ↓
*.functions.ts
        ↓
*.server.ts application/repository code
        ↓
database, AWS SDK, linked SST resources

domain ← may be imported by every layer
domain → imports no framework or persistence layer
```

## File suffixes

- `.functions.ts`: TanStack Start RPC declarations.
- `.server.ts`: code that must not enter the browser bundle.
- `.collection.ts`: TanStack DB collection configuration.
- `.test.ts`: colocated unit test.
- `route.tsx`: layout route.
- `index.tsx`: index route.

Prefer kebab-case for feature and module files. React exports remain PascalCase.

## Imports

Use one source alias, normally `@/`, for cross-feature imports. Use relative imports inside a tight local module cluster. Use `import type` for type-only dependencies.

Do not define both `@/*` and `#/*` without a concrete reason.

## Components

- Routes and feature containers orchestrate data.
- Feature components own reusable workflows.
- `components/ui` contains locally owned design-system primitives.
- Leaf cards receive complete display records and callbacks rather than IDs that force private data queries.

## Split by cohesion, not arbitrary size

Keep code together while it expresses one workflow. Split when a module combines unrelated responsibilities or when pure transformations, kind-specific form sections, or repository domains can be tested and understood independently.
