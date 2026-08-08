---
title: TanStack Start
description: Router, provider, loader, and server-function conventions.
---

## Router construction

Export `getRouter()` from `src/router.tsx`, import the generated route tree, enable intent preloading and scroll restoration where useful, and register `ReturnType<typeof getRouter>` with TanStack Router.

```ts
export function getRouter() {
  return createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreload: 'intent',
    defaultPreloadStaleTime: 0,
    Wrap: Providers,
  })
}
```

Never edit `routeTree.gen.ts` manually.

## Route organization

- `__root.tsx` owns the HTML document, metadata, styles, scripts, and UI-level providers.
- `_app/route.tsx` owns authenticated application chrome.
- `_auth/route.tsx` owns authentication screens.
- `_public/` owns public experiences.
- `api/` owns HTTP route handlers.
- `$entityId` names dynamic segments.
- `route.tsx` plus `index.tsx` creates a nested layout with an index page.

Use pathless layouts for cross-cutting behavior, not merely to organize files.

## Provider tiers

Keep router-level data providers separate from UI/document providers:

```tsx
export function Providers({ children }) {
  return <TanstackQueryProvider>{children}</TanstackQueryProvider>
}

export function UiProviders({ children }) {
  return (
    <>
      {children}
      <SonnerProvider />
      <TanStackDevtoolsProvider />
    </>
  )
}
```

Router Devtools must render inside router context, not in an outer Router `Wrap` that only provides data context.

## Route loading

Centralize `queryOptions` and call `ensureQueryData()` from route loaders when the route needs Query data before rendering. Read the same options through `useQuery()` in the component.

Do not access databases, secrets, or server-only modules directly in loaders. Loaders are isomorphic.

## Server functions

Treat every `createServerFn` as a public API endpoint:

1. Select GET for reads and POST for writes.
2. Validate input with a strict schema.
3. Resolve identity or request context inside the handler or middleware.
4. Invoke one application/repository operation.
5. Return serializable domain data.

Use `*.functions.ts` for importable RPC declarations and `*.server.ts` for server-only implementation.

## Devtools

- Put `@tanstack/devtools-vite` first in Vite's plugin array.
- Render devtools only when `import.meta.env.DEV` is true.
- Include Router and Query panels by default; add Form only when used.
- Pin compatible TanStack versions. Avoid `latest` ranges for the Start/Router toolchain.
