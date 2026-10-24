## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Project notes

- Static site for the ALPHV group of companies (Technologies, Academy, DevRel, Recruit); deployed to GitHub Pages by `.github/workflows/deploy.yml`.
- Wrap every internal link and `public/` path in `url()` from `src/lib/paths.ts` — the site may be served under a sub-path.
- Site copy lives in `src/data/group.ts`. Brand tokens and primitives (`.wrap`, `.section`, `.h1`–`.h3`, `.label`, `.btn`, `.stats`) live in `src/styles/global.css`; component styles are scoped `<style>` blocks.
- Follow the ALPHV brand system: blue `#0100FE`, black and white only, zero radius, no shadows or gradients, uppercase Archivo Expanded headlines, sentence-case Inter body.
- No UI framework: interactivity is small vanilla `<script>` blocks inside components.
