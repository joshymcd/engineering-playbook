---
title: Accessibility and Responsive UI
description: The baseline for keyboard, screen-reader, motion, and mobile behavior.
---

## Required shell behavior

- Provide a skip link.
- Label navigation landmarks.
- Expose active navigation state.
- Define which region scrolls.
- Keep focus visible globally.
- Test at mobile widths, landscape, browser zoom, and with the software keyboard.

## Interactive controls

- Every icon-only control has an accessible name.
- Decorative icons are hidden from assistive technology.
- Mobile touch targets are at least 40–44px where practical.
- Drawers trap focus, close with Escape, restore focus, and provide backdrop/dialog semantics.
- Never nest buttons inside links.

## Motion

Respect `prefers-reduced-motion`. Hover movement, animated loading indicators, and route transitions must not be the only way state is communicated.

## Information hierarchy

Empty-state titles are headings, descriptions are paragraphs, and status information is visible or programmatically available. Bare SVG tooltip triggers are not sufficient for important availability or error information.

## Responsive strategy

Start mobile-first. A desktop sidebar can become a Sheet on smaller screens; an action-heavy product can use a mobile bottom bar. Reserve content space for fixed navigation and account for safe-area insets.

## Testing expectations

Critical Playwright workflows should fail on unexpected browser errors. Add focused tests for keyboard submission, dialog focus, missing labels, and mobile navigation when those interactions are central to the product.
