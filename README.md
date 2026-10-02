# ALPHV GOC website

The ALPHV Technologies marketing site (alphvgroup.com), ported from Framer to a static
[Astro](https://astro.build) site and hosted on GitHub Pages.

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
  layouts/BaseLayout.astro    <head> (SEO, fonts, GA4), nav, footer, scroll-reveal script
  components/shared/          NavMain (home navbar), NavPill (inner pages), Footer, CtaInnovate
  components/home|about|service|contact/   page sections
  pages/                      index, about-us, service, contact-us, 404, sitemap.xml, robots.txt
  styles/global.css           design tokens + shared primitives (.btn, .tag, .card, .marquee, data-reveal)
  lib/paths.ts                url() helper — prefixes the base path
public/
  images/, assets/            media downloaded from the Framer project
```

Conventions:

- Wrap every internal link and every `public/` path in `url()` from `src/lib/paths.ts`
  (`<img src={url('/images/x.png')}>`, `<a href={url('/about-us')}>`). This keeps the site working
  both on a custom domain and under `https://<user>.github.io/<repo>/`.
- Add `data-reveal` to an element to fade it in on scroll (optional `style="--reveal-delay: 120ms"`).
- Breakpoints match the old Framer project: phone `< 810px`, tablet `810–1199px`,
  desktop `1200–1439px`, ultra-wide `≥ 1440px`.

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
