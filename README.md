# ALPHV GOC website

The ALPHV group of companies site (alphvgroup.com): a static [Astro](https://astro.build) site,
hosted on GitHub Pages, presenting ALPHV Technologies, Academy, DevRel and Recruit. The design
follows the ALPHV brand system: blue/black/white only, zero radius, no shadows, uppercase Archivo
Expanded headlines and Inter body text.

## Develop

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static output in dist/
npm run preview    # serve dist/ locally
```

Requires Node 22.12+.

## Structure

```
src/
  data/group.ts               all site copy: companies, stats, work, clients, press, FAQ, contact
  layouts/BaseLayout.astro    <head> (SEO, fonts, GA4), header, footer
  components/site/            Header, Footer
  components/sections/        page sections (hero, company grid, ecosystem, work table, …)
  components/ui/              Logo (brand lockup), Icon (Lucide, inlined)
  pages/                      index, about-us, service (Our companies), contact-us, 404, sitemap.xml, robots.txt
  styles/global.css           brand tokens + shared primitives (.wrap, .section, .h1–.h3, .label, .btn, .stats)
  lib/paths.ts                url() helper — prefixes the base path
public/
  images/                     photos and client logos
```

Conventions:

- Wrap every internal link and every `public/` path in `url()` from `src/lib/paths.ts`
  (`<img src={url('/images/x.png')}>`, `<a href={url('/about-us')}>`). This keeps the site working
  both on a custom domain and under `https://<user>.github.io/<repo>/`.
- Edit copy in `src/data/group.ts`, not in components.
- Brand rules: only `--blue`, `--black`, `--white` (plus the neutral greys), no border radius, no shadows,
  no gradients. Hover states swap colours; they never fade opacity.
- Pass `size` to `<Icon>` rather than sizing it from a scoped class (scoped styles do not reach child components).

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to
GitHub Pages. The workflow reads the Pages URL from `actions/configure-pages`, so the base path is
set automatically for both a project page and a custom domain.

One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

### Custom domain (alphvgroup.com)

1. Settings → Pages → Custom domain: `alphvgroup.com`, save, and tick **Enforce HTTPS** once the
   certificate is issued.
2. DNS (Cloudflare):
   - apex `alphvgroup.com`: four `A` records → `185.199.108.153`, `185.199.109.153`,
     `185.199.110.153`, `185.199.111.153` (optionally `AAAA` → `2606:50c0:8000::153` … `8003::153`)
   - `www`: `CNAME` → `<github-user>.github.io`
   - Set the records to **DNS only** (grey cloud) until GitHub has issued the certificate. If you turn the
     Cloudflare proxy back on afterwards, use SSL mode **Full (strict)**.
3. Re-run the workflow (Actions → Deploy to GitHub Pages → Run workflow) so canonical URLs, the sitemap
   and asset paths use the custom domain.
