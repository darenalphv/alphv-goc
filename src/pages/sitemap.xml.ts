import type { APIRoute } from 'astro';
import { url } from '../lib/paths';

const pages = ['/', '/about-us', '/service', '/contact-us'];

export const GET: APIRoute = ({ site }) => {
  const origin = site ?? new URL('https://alphvgroup.com');
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((p) => `<url><loc>${new URL(url(p), origin).href}</loc></url>`).join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
