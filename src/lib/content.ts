import { sanityClient } from "sanity:client";
import { defineQuery } from "groq";

export type Project = {
  title: string;
  slug: string;
  categories: string[];
  summary: string;
  sections: { heading: string; body: string }[];
  heroImage?: { url: string };
  gallery?: { image?: { url: string }; caption?: string }[];
  services?: string[];
  tools?: string[];
  closingLabel?: string;
  order: number;
};
const projectFields = `title, "slug": slug.current, categories, summary, sections[]{heading, body}, heroImage, gallery[]{image, caption}, services, tools, closingLabel, order`;
export const projectsQuery = defineQuery(`*[_type == "project"] | order(order asc) {${projectFields}}`);
export const projectQuery = defineQuery(`*[_type == "project" && slug.current == $slug][0] {${projectFields}}`);
export const homeQuery = defineQuery(`*[_id == "homePage"][0]`);
export const aboutQuery = defineQuery(`*[_id == "aboutPage"][0]`);
export const settingsQuery = defineQuery(`*[_id == "siteSettings"][0]`);
export const knownSlugs = ["clerk", "stimulate", "artem-astakhov", "reward-point", "dibsy", "caldera", "ruby"];

export const fallbackProjects: Project[] = [
  {
    title: "Clerk",
    slug: "clerk",
    categories: ["Branding", "Web design", "Marketing"],
    summary: "Brand, web, and marketing design for a developer tools company.",
    sections: [],
    order: 1,
    heroImage: { url: "https://framerusercontent.com/images/QCC7pB1hEWS6mnO6bUHPmWeF5A.png?width=240&height=240" },
  },
  {
    title: "Stimulate",
    slug: "stimulate",
    categories: ["Branding", "Web design", "Development"],
    summary: "An isometric brand system and Webflow site for a creative agency.",
    sections: [],
    order: 2,
  },
  {
    title: "Artem Astakhov",
    slug: "artem-astakhov",
    categories: ["Web design", "Development"],
    summary: "A skeuomorphic personal brand and interactive Framer portfolio.",
    sections: [],
    order: 3,
  },
  {
    title: "Reward Point",
    slug: "reward-point",
    categories: ["Branding", "Platform design"],
    summary: "A pre-launch brand and product experience for a cashback platform.",
    sections: [],
    order: 4,
    heroImage: { url: "https://framerusercontent.com/images/Y7dBjRYTdqKqNJYR6kzoAxq0X0.png?width=2796&height=1347" },
  },
  {
    title: "Dibsy",
    slug: "dibsy",
    categories: ["Branding", "Platform design"],
    summary: "A premium Qatari fintech identity and platform redesign.",
    sections: [],
    order: 5,
    heroImage: { url: "https://framerusercontent.com/images/ttBKofiPnMu0t5yyz6f7KrhENs.webp?width=2796&height=1347" },
  },
  {
    title: "Caldera",
    slug: "caldera",
    categories: ["Branding", "Platform design"],
    summary: "A Web3 infrastructure website designed and built on Framer.",
    sections: [],
    order: 6,
    heroImage: { url: "https://framerusercontent.com/images/g417kCRVM0F6jf3aO3VB8vFcw.png?width=2796&height=1347" },
  },
  {
    title: "Ruby",
    slug: "ruby",
    categories: ["Branding", "Web design", "Development"],
    summary: "A fintech rebrand and B2B Framer website for a YC company.",
    sections: [],
    order: 7,
    heroImage: { url: "https://framerusercontent.com/images/GLSQGWjolR1N3YzDhqrjbTIsg8I.png?width=2796&height=1596" },
  },
];

export async function getProjects() {
  const result = await sanityClient.fetch<Project[]>(projectsQuery);
  return result.length ? result : fallbackProjects;
}
export async function getProject(slug: string) {
  return (await sanityClient.fetch<Project | null>(projectQuery, { slug })) ?? fallbackProjects.find((project) => project.slug === slug);
}
