# Awais Javed Portfolio

Astro and Tailwind portfolio, with published content from Sanity project `02iqh8z6`, dataset `portfolios`.

## Development

Use Node.js 22.12 or newer:

```sh
npm ci
npm run dev
```

## Check and build

```sh
npm run astro -- check
npm run build
npm run preview
```

Copy `.env.example` to `.env` if overriding configuration. Set `PUBLIC_SITE_URL` to your deployed website origin before building. Published Sanity content is fetched during production builds; rebuild after content changes. No Sanity token is needed for public reads. Never commit secrets.

The standalone Sanity Studio lives in the `studio` folder and is not embedded in this app. This repository includes the website and standalone Studio. Run `npm --prefix studio ci` then `npm --prefix studio run dev` to edit content.

The homepage, Story page, seven project pages, contact dialog, email copy controls, sitemap and error page are included. Site content and contact details are managed in Sanity.
