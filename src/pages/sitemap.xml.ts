import { getSite } from '../lib/sanity';
import type { APIContext } from 'astro';
export async function GET({ site, url }: APIContext) {
  const { projects } = await getSite();
  const origin = site || new URL(url.origin);
  const paths = ['/', '/about', '/llms.txt', ...projects.map(p => `/${p.slug?.current}`)];
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map(path => `<url><loc>${new URL(path, origin).href}</loc></url>`).join('')}</urlset>`, { headers: { 'Content-Type': 'application/xml' } });
}
