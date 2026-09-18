// @ts-check

import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import { loadEnv } from 'vite';

const env = loadEnv(process.env.NODE_ENV ?? 'development', process.cwd(), 'PUBLIC_');

// https://astro.build/config
export default defineConfig({
	site: env.PUBLIC_SITE_URL || undefined,
	redirects: {
		'/projects': '/',
		'/markdown-page': '/',
		...Object.fromEntries(['clerk','dibsy','stimulate','caldera','reward-point','ruby','artem-astakhov'].map(slug => [`/projects/${slug}`, `/${slug}`])),
	},
	integrations: [
		sanity({
			projectId: env.PUBLIC_SANITY_PROJECT_ID || '02iqh8z6',
			dataset: env.PUBLIC_SANITY_DATASET || 'portfolios',
			apiVersion: '2026-09-16',
			useCdn: false,
			perspective: 'published',
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
