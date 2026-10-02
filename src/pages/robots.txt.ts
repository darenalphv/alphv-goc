import type { APIRoute } from 'astro';
import { url } from '../lib/paths';

export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL(url('/sitemap.xml'), site ?? new URL('https://alphvgroup.com')).href;
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`, {
    headers: { 'Content-Type': 'text/plain' },
  });
};
