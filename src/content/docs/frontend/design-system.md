---
title: Design System
description: Tailwind, shadcn, theming, icons, layout, and component composition.
---

## Default UI stack

- Tailwind CSS v4 through `@tailwindcss/vite`.
- CSS-first configuration with `@theme inline`.
- Locally owned shadcn source under `components/ui`.
- Lucide icons by default.
- Semantic CSS variables rather than feature-level literal colors.

Choose one shadcn style and one icon library at project creation. Do not mix generated styles or icon systems within a product.

## Semantic tokens

Feature components use names such as `background`, `foreground`, `card`, `primary`, `muted`, `accent`, `destructive`, `border`, and `ring`. Brand and domain colors are mapped into tokens in the stylesheet.

Use `className` primarily for layout and responsive composition. Prefer component variants for visual styling.

## Application shells

For shallow applications, use a sticky header and a consistent centered content width. For complex information architecture, use shadcn Sidebar/Sheet with a desktop sidebar, accessible mobile drawer, close-on-navigation, and an explicit scroll region.

For frequent mobile actions, a dedicated bottom navigation is valid. Include safe-area padding and reserve content space so navigation does not cover the page.

## Theme ownership

A `.dark` token block is not complete theme support. A themed application needs:

- pre-render initialization to avoid a flash,
- system/light/dark ownership,
- persisted preference,
- `color-scheme`,
- an accessible toggle.

If the product is intentionally single-theme, remove misleading unused theme plumbing.

## Component composition

- Use complete Card structure: header, title, description, content, footer.
- Use `Button asChild` for link-styled actions.
- Use Alert, Empty, Skeleton, Badge, Separator, Dialog, and Sheet before hand-building equivalents.
- Every dialog and sheet has an accessible title.
- Tooltips supplement labels; they never replace an accessible name.
