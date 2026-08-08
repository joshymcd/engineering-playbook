---
title: Repository Tooling
description: Package managers, lockfiles, scripts, formatting, TypeScript, and generated files.
---

## One package manager

Choose npm, pnpm, or Bun per repository. Then:

- declare and pin it in `packageManager`,
- commit exactly one lockfile,
- use the same runner in README, CI, Playwright, shadcn, and agent instructions,
- use frozen installs in CI.

For workspaces, pnpm is the preferred baseline. A single application can remain a single package; package manager and monorepo structure are independent choices.

## Script semantics

- `check` verifies and does not modify files.
- `fix` or `format` performs writes.
- `typecheck` runs `tsc --noEmit`.
- `build` performs a production build.
- migration scripts may be human-only even when present.

## Formatter authority

The repository formatter is authoritative. Existing applications use both Prettier/ESLint and Biome; do not churn a working repository merely to impose one globally.

New projects should document their choice and exclude generated/build directories. The common Prettier style is single quotes, no semicolons, and trailing commas. Biome projects may use their configured tab/double-quote style consistently.

## TypeScript baseline

Enable strict mode, unused locals/parameters, fallthrough checks, unchecked side-effect imports, bundler resolution, and no emit. Prefer inference inside implementations and explicit types at public, domain, and API boundaries.

Avoid `any`; narrow unknown values with schemas and type guards.

## Generated files

Document which generated files are committed and how to regenerate them. Typical examples:

- TanStack `routeTree.gen.ts`: committed, never hand-edited.
- SST declarations: generated and sometimes committed.
- Drizzle migrations and metadata: committed and reviewed together.
- build output and `.sst`: ignored.

## README and AGENTS

README describes human setup, architecture, data limitations, commands, and deployment. `AGENTS.md` adds package-manager rules, verification commands, generated-file boundaries, migration restrictions, and git autonomy for coding agents.
