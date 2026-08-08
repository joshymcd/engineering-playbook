---
title: Agent Collaboration
description: How coding agents should explore, implement, verify, and hand work back safely.
---

## Start by reading the repository

Before proposing architecture or editing code, inspect the relevant routes, providers, domain modules, package scripts, tests, and `AGENTS.md`. Follow existing conventions unless the task explicitly changes them.

Load current framework guidance for version-sensitive TanStack, shadcn, or deployment work rather than relying on stale API memory.

## Prefer minimal correct changes

- Solve the requested behavior end to end.
- Avoid unrelated refactors.
- Do not add compatibility layers without a concrete consumer.
- Preserve user changes in a dirty worktree.
- Never revert files or edits you did not create.

## Editing and generated files

Use the repository's normal generators for shadcn components, route trees, and schemas. Never manually edit generated route trees. Review generated output before relying on it.

## Verification

Run the narrowest useful checks during implementation, then the repository's full required verification before handoff. Report exactly what passed, what failed, and what could not run because of credentials or environment constraints.

## Git autonomy

Do not commit, amend, push, create a pull request, deploy, or apply migrations unless the user explicitly asks. When asked to commit, inspect status, diff, and recent history first; stage only intended files and never secrets.

## Security response

If a secret is discovered, do not reproduce it in output. Flag the location and recommend rotation, history assessment, and migration to a secret manager.

## Communication

Keep progress updates factual and useful: discoveries, tradeoffs, blockers, and verification. Do not narrate routine file reads. Final handoff leads with the outcome and identifies residual risks.
