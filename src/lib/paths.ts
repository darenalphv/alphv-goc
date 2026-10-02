// Prefix a root-relative path with the configured base path so the site works
// both on a custom domain ("/") and on a GitHub project page ("/<repo>/").
// Use for every internal link and every file under public/: url('/images/x.png'), url('/about-us').
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function url(path: string): string {
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;
  const p = path.startsWith('/') ? path : `/${path}`;
  return p === '/' ? `${base}/` : `${base}${p}`;
}
