---
title: Data and State
description: QueryClient ownership, TanStack DB collections, live queries, and optimistic writes.
---

## One QueryClient

Create one application QueryClient and use that exact instance for:

- `QueryClientProvider`
- route loaders
- query-backed TanStack DB collections
- invalidation helpers
- Query Devtools

Creating separate clients for Router context and components splits caches and breaks hydration or invalidation assumptions.

## Query conventions

Define reusable `queryOptions` with hierarchical keys:

```ts
queryOptions({
  queryKey: ['trips', 'detail', tripId],
  queryFn: () => getTrip({ data: { id: tripId } }),
})
```

Add named invalidation helpers when multiple workflows refresh the same related data.

## Collection conventions

A server-backed TanStack DB collection should have:

- a stable centralized query key,
- a complete snapshot query function,
- a Zod row schema,
- a stable `getKey`,
- narrow persistence handlers,
- canonical client-generated IDs for optimistic inserts.

Do not pass `mutation.modified` wholesale across the server boundary. Map only operation fields into dedicated create/update/delete schemas.

## Await persistence

```ts
const transaction = tripsCollection.insert(newTrip)

try {
  await transaction.isPersisted.promise
  toast.success('Trip created')
  closeDialog()
} catch (error) {
  toast.error(toErrorMessage(error))
}
```

Optimistic state can render immediately, but confirmed success waits for persistence.

## Live-query composition

Subscribe at the route or feature-container boundary. Compose joins, projections, and filters there, build lookup maps once, and pass enriched records down.

Avoid:

- one collection per entity or route parameter,
- a live query inside every repeated card,
- hooks that subscribe to entire collections from each card,
- filtering the entire dataset repeatedly for every rendered item.

## Offline expectations

Normalized collections, canonical IDs, and narrow mutation contracts make offline support easier later. They do not implement it. Durable offline behavior still needs IndexedDB persistence, a mutation queue, idempotency, revisions, conflict behavior, and reconnection tests.
