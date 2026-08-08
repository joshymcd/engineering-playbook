---
title: Git Workflow
description: Commits, branches, pull requests, and safe repository operations.
---

## Commits

Prefer short, outcome-oriented imperative summaries. Conventional commits are useful when a repository uses automated changelogs; otherwise clarity is more important than forcing a prefix.

Good examples:

```text
Add deployed trip workflow tests
Protect member-scoped document access
fix(auth): stop logging callback payloads
```

Avoid vague checkpoints such as `misc`, `version bumps`, `phase 9`, or punctuation-only messages.

## Branches

Follow the repository's established branch policy. If none exists, use short descriptive names such as `trip-invites` or `feature/trip-invites`, then document the chosen convention rather than mixing styles indefinitely.

## Pull requests

- Keep one coherent outcome per PR.
- Explain user behavior and architecture impact.
- List verification commands.
- Include screenshots or video for meaningful UI changes.
- Identify migrations, rollout steps, and residual risks.
- Review every commit included in the PR, not only the latest diff.

## Safety

- Never force-push shared branches without explicit approval.
- Do not bypass hooks to land failing work.
- Do not amend commits unless requested.
- Do not commit `.env`, cloud state, local databases, test artifacts, or build output.
