import { sanityClient } from 'sanity:client';
import { defineQuery } from 'groq';
import type { SITE_QUERY_RESULT } from '../sanity.types';
export const SITE_QUERY = defineQuery(`{
  "settings": *[_type == "siteSettings"][0],
  "pages": *[_type == "portfolioPage"],
  "projects": *[_type == "portfolioProject" && defined(slug.current)] | order(order asc),
  "services": *[_type == "portfolioService"] | order(order asc),
  "media": *[_type == "portfolioMedia"] {
    _id, title, alt, kind, aspectRatio,
    "url": coalesce(image.asset->url, clip.asset->url),
    "width": image.asset->metadata.dimensions.width,
    "height": image.asset->metadata.dimensions.height
  }
}`);
export type Media = SITE_QUERY_RESULT['media'][number];
export type Project = SITE_QUERY_RESULT['projects'][number];
export type Page = SITE_QUERY_RESULT['pages'][number];
export type Settings = NonNullable<SITE_QUERY_RESULT['settings']>;
let pending: Promise<SITE_QUERY_RESULT> | undefined;
export async function getSite() {
  const data = await (import.meta.env.DEV ? sanityClient.fetch(SITE_QUERY) : (pending ??= sanityClient.fetch(SITE_QUERY)));
  if (!data.settings) throw new Error('Missing site settings in portfolios. Run the portfolio import first.');
  return { ...data, settings: data.settings };
}
export function mediaFor(items: Media[], reference: { _ref: string } | null | undefined) {
  return reference ? items.find(item => item._id === reference._ref) : undefined;
}
export function imageUrl(media: Media, width = 1600) {
  if (!media.url) return '';
  if (media.url.endsWith('.svg') || media.kind !== 'image') return media.url;
  return `${media.url}?auto=format&w=${width}&q=85&fit=max`;
}
