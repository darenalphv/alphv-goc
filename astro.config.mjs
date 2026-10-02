// @ts-check
import { defineConfig } from 'astro/config';

// SITE_URL / BASE_PATH are set by the GitHub Pages workflow.
// With a custom domain (e.g. https://alphvgroup.com) BASE_PATH stays "/".
// For a project page (https://<user>.github.io/<repo>/) BASE_PATH is "/<repo>".
export default defineConfig({
  site: process.env.SITE_URL || 'https://alphvgroup.com',
  base: process.env.BASE_PATH || '/',
  // Emit about-us.html etc. so GitHub Pages serves /about-us without a trailing-slash redirect,
  // matching the URLs Framer used.
  build: { format: 'file' },
  trailingSlash: 'never',
});
