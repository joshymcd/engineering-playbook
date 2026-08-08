# Engineering Playbook

The source for Josh McDonald's application architecture, tooling, frontend, delivery, and agent-collaboration conventions.

## Development

```bash
corepack enable
pnpm install
pnpm dev
```

## Verification

```bash
pnpm check
pnpm build
```

## Publishing

Pushes to `main` deploy the static Starlight site to GitHub Pages through `.github/workflows/deploy.yml`.

The repository is private. The generated Pages site is intended to be publicly readable at:

`https://joshymcd.github.io/engineering-playbook/`
