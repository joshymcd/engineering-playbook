---
title: Forms and Feedback
description: Form ownership, field validation, pending state, and user-facing feedback.
---

## Native semantics first

Use a real `<form onSubmit>` and call `form.handleSubmit()` from that event. Keyboard submission, validation, and accessibility should not depend on a button `onClick`.

## When to use TanStack Form

Use TanStack Form with shared Zod schemas for reusable entity forms, dynamic fields, or cross-field validation. Controlled React state remains acceptable for genuinely small interactions.

Every field should have:

- a programmatic label,
- `aria-invalid` when invalid,
- inline errors connected with `aria-describedby`,
- validation that does not exist only in a toast.

## IDs and optimistic creates

Generate the canonical ID before insertion and include it in validated defaults when the schema requires it. The server preserves the ID rather than replacing a temporary key after related optimistic records reference it.

## Submission lifecycle

1. Validate the draft.
2. Start the Query or collection mutation.
3. Disable duplicate submission.
4. Show a stable pending indicator.
5. Await confirmed persistence.
6. Show success and close or navigate.
7. Preserve input and show an actionable error on failure.

## Large discriminated forms

Split complex forms into shared fields, kind-specific sections, a pure draft-to-domain conversion, and mutation orchestration. A single component should not own hundreds of lines of conversion, validation, persistence, and markup.

## Feedback states

Distinguish loading, empty data, filtered-empty results, missing entities, and fetch failures. Use `role="status"` for loading and `role="alert"` for immediate errors. Empty states include a semantic heading, explanation, and recovery action when one exists.
