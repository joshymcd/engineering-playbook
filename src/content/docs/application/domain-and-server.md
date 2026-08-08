---
title: Domain and Server
description: Domain contracts, validation, repositories, persistence, and expected failures.
---

## Domain modules stay independent

Domain modules contain:

- Zod schemas and inferred types,
- normalization and value helpers,
- pure business rules,
- expected domain error definitions,
- colocated tests.

They do not import React, Router, Start, SST resources, Drizzle clients, or AWS SDK clients.

## Separate operation contracts

Define distinct strict schemas for:

- authoritative stored entities,
- create inputs,
- update inputs or patches,
- delete identifiers.

Do not allow clients to control ownership, server timestamps, immutable parent keys, or arbitrary persisted row fields.

## Validate at two levels

Transport validation establishes shape and basic constraints. Domain or repository validation establishes business truth: ownership, parent existence, date containment, uniqueness, and legal state transitions.

## Repository boundary

Use a repository interface when persistence is likely to change, contract tests are valuable, or aggregate operations require a clear home.

```ts
interface TripsRepository {
  listTrips(userId: string): Promise<Trip[]>
  createTrip(userId: string, input: CreateTripInput): Promise<Trip>
  deleteTrip(userId: string, id: string): Promise<void>
}
```

Keep implementations in `.server.ts` files. A composition module selects the active adapter.

Do not create repository interfaces mechanically for every table. Direct cohesive server-only functions are valid for small, stable features.

## Aggregate writes

One logical command should use one server operation and one persistence transaction where partial success is unacceptable. Cascade deletion, replacing relationships, counters, and ranking updates belong inside the persistence boundary.

## Errors

Use typed domain errors when callers need to distinguish expected outcomes such as `not_found`, `duplicate`, `conflict`, or `invalid_relationship`. Translate database and AWS exceptions into safe domain-facing messages. Do not expose infrastructure details to users.

## Time and money

- Store calendar dates as `YYYY-MM-DD`.
- Store instants as timezone-bearing ISO values.
- Preserve IANA timezones when local interpretation matters.
- Store currency amounts as integer minor units with an ISO currency code.
