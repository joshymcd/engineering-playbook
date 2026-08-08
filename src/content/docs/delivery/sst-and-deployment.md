---
title: SST and Deployment
description: SST structure, stage safety, resource links, and deployment ownership.
---

## Default SST application policy

```ts
app(input) {
  return {
    name: 'application-name',
    removal: input?.stage === 'production' ? 'retain' : 'remove',
    protect: input?.stage === 'production',
    home: 'aws',
  }
}
```

Production is retained and protected. Preview and personal stages are disposable. Any exception must be deliberate and documented.

## Keep infrastructure small

Define only the resources the current vertical slices need. Link resources explicitly to the TanStack Start component and read them through SST's `Resource` API only from server-only code.

Align the site path with the repository layout:

- single package: `path: '.'`
- workspace application: `path: 'apps/web/'`

## Stage naming

- `production` for production.
- personal developer stage for local SST work.
- `pr-<number>` for pull-request previews.

Sanitize any branch-derived stage name. Avoid committed local AWS profile names; CI should use OIDC and local developers can select profiles through their environment.

## One deployment control plane

Choose GitHub Actions, SST Console autodeploy, or another explicit owner. Do not layer multiple automatic deployment systems without documenting which one is authoritative.

## Persistence warning

Deploying an in-memory repository to Lambda proves packaging, not durability. Cold starts and concurrent instances can lose or split data. The UI and README must state this until a durable adapter is linked.

## Major versions

Record the SST major version in the repository. SST 3 and SST 4 component APIs and deployment behavior are not interchangeable templates.
