---
title: CI and GitHub
description: Pull-request checks, preview environments, action security, and repository settings.
---

## Pull-request CI

Run frozen install, formatting, lint, typecheck, unit tests, and build for every pull request and push to the default branch. Use concurrency to cancel superseded PR checks without cancelling an active production deployment.

## Preview deployment

For applications that need cloud validation:

1. Reject forked PRs before cloud credentials are granted.
2. Assume an AWS role with GitHub OIDC.
3. Deploy stage `pr-<number>`.
4. Run Playwright against the deployed URL.
5. Upload failure artifacts.
6. Remove the stage when the PR closes.

## Production

- Deploy only from the default branch or a protected release workflow.
- Use a protected GitHub `production` environment.
- Keep production infrastructure protected and retained.
- Do not allow overlapping production deployments.

## Workflow security

- Declare least-privilege `permissions`.
- Pin third-party actions to reviewed SHAs where practical.
- Do not use floating `@latest` actions.
- Keep deployment secrets in environments or OIDC roles, not repository files.

## Repository hygiene

Enable required status checks, disallow force pushes to the default branch, and add CODEOWNERS when collaboration warrants it. Dependabot or Renovate should update package ecosystems and GitHub Actions on a controlled schedule.
