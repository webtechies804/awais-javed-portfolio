import { getCliClient } from "sanity/cli";

const client = getCliClient({ apiVersion: "2025-01-01" });
const origin = "https://danielsun.space";

const projectContent = [
  {
    slug: "clerk",
    title: "Clerk",
    categories: ["Branding", "Web design", "Marketing"],
    order: 1,
    summary:
      "Clerk is a San Francisco based developer tool startup providing authentication and user management infrastructure for modern applications. I worked as a Senior Web & Brand Designer, shaping the website, brand consistency, and marketing visuals across the company for nearly two years.",
    sections: [
      [
        "Long story short",
        "Clerk is a fast-growing, San Francisco based developer tool company with a globally distributed team. I joined as a Senior Web & Brand designer and spent almost two years across the website, marketing, and brand systems. Developer products have a specific problem: the thing that makes them valuable is also the thing that is hardest to show. Authentication is not visual. So most of the job was translation. Sitting with engineers, product designers, marketers, and growth to understand exactly how a feature worked, then finding the one image, page structure, or animation that made it obvious to someone who had not read the docs.",
      ],
      [
        "Making infrastructure visible",
        "I designed and shipped new website pages and sections, prepared assets for animations, and made marketing materials for social, physical events, and swag. Blog, X, Instagram, YouTube - we tested different approaches and kept what people actually responded to. I also handled Clerk's visual presence at Stripe Sessions, Next.js Conf, and React Miami, where the brand has to work at three meters and at arm's length in the same booth. Throughout, I used Claude, Cursor, and ChatGPT to implement pages, sections, and effects directly on the site. Two years inside a company of Clerk's size taught me how to hold a brand together across a remote team, dozens of channels, and a product that ships constantly.",
      ],
    ],
    services: ["Web design", "Marketing design", "Branding", "Brand research", "UI/UX research", "Illustrations & icons design"],
    tools: ["Figma", "Claude", "Cursor", "ChatGPT", "Illustrator", "Photoshop", "After Effects", "My brain"],
    closingLabel: "Web design",
  },
  {
    slug: "stimulate",
    title: "Stimulate",
    categories: ["Branding", "Web design", "Development"],
    order: 2,
    summary:
      "Stimulate is a creative agency serving e-commerce and corporate clients. I rebuilt their visual identity around punchy isometric illustration and built the new site on Webflow. The brand tested so well with their own clients that a full website redesign got greenlit two weeks later.",
    sections: [
      [
        "Long story short",
        "Stimulate is a creative marketing agency working with e-commerce and corporate clients - which puts them in a special spot. Look too corporate and you are not creative. Look too playful and procurement will not sign. Their founder, Randy, came to me with a clear goal: stand out from competitors on visual identity, and bring in new clients with it. Finding that balance was the whole first phase. After brand and UI/UX research I put up several concepts, and we picked the one that fit the company's actual character rather than the safest one. Within two weeks we had a new logo built on a lightning bolt, and a brand system of isometric illustrations over vibrant gradients.",
      ],
      [
        "A brand with momentum",
        "Randy launched with new assets on Instagram and LinkedIn before anything else was finished. The response from clients and his own team was a strong enough signal that we moved straight into a full website redesign, which I designed and built on Webflow. Stimulate now walks into pitches with an identity nobody confuses for another agency's - and a site that backs it up.",
      ],
    ],
    services: ["Branding", "Logotype", "Brand research", "UI/UX research", "Illustrations", "Website design", "Visual direction", "Design system"],
    tools: ["Figma", "Webflow", "ChatGPT", "Illustrator", "Photoshop", "After Effects", "My brain"],
    closingLabel: "Branding",
  },
  {
    slug: "artem-astakhov",
    title: "Artem Astakhov",
    categories: ["Web design", "Development"],
    order: 3,
    summary:
      "Artem Astakhov is a B2B SaaS Account Manager working remotely from Porto. He needed a portfolio that would hold up in front of hiring managers without reading like a boring CV. I built him a personal brand around skeuomorphic detail and an interactive Framer site that tells his story.",
    sections: [
      [
        "Long story short",
        "Artem is my friend, and the brief he came with was harder than it sounded. Professional portfolios usually pick a side - a polished CV that says nothing about the person, or a personality piece nobody takes seriously. He wanted both on the same page: proof he had closed real revenue across 40+ SaaS teams, and something that actually tells his story.",
      ],
      [
        "A story you can feel",
        "Artem grew up in Kerch, Ukraine, and the moment he points to as the start of everything is a 56K modem taking his family phone line in 2001. The personal story section got built out of real childhood photographs and the visual mood of an early-2000s internet. The professional half stayed sharp against it: sleek monochrome with vibrant gradients drawn from ocean depth and light refracting under water, a nod to the six months he spent at sea as a marine engineering cadet before moving into tech. The icons and illustrations were built to feel real, like objects with weight rather than flat vectors.",
      ],
    ],
    services: [
      "Website design",
      "Framer development",
      "Visual direction",
      "UI/UX research",
      "Moodboarding",
      "Portfolio research",
      "Icons & illustrations",
      "Animations",
    ],
    tools: ["Figma", "Framer", "Claude", "ChatGPT", "Illustrator", "Photoshop", "After Effects", "My brain"],
    closingLabel: "Visual direction & Web design",
  },
  {
    slug: "reward-point",
    title: "Reward Point",
    categories: ["Branding", "Platform design"],
    order: 4,
    summary:
      "Reward Point is a cashback platform connecting shoppers with retail partners. The founder came to me before launch with nothing but the idea. Three and a half weeks later they had a brand, a landing page, and a signup flow - enough to look like a company retail partners would sign with.",
    sections: [
      [
        "Long story short",
        "A cashback platform has to earn trust twice. Once from shoppers handing over their spending, once from retail brands deciding whether to attach their name to yours. The founder reached out pre-launch knowing the product had to look established from day one, before there was a single user to point to.",
      ],
      [
        "Ready before launch",
        "Two weeks after kickoff we had the identity: a friendly illustration style that keeps the product approachable, and a logo built to read as credible rather than cute. A week and a half after that, an eye-catching landing page and a signup flow designed to turn a visitor into an active user without a drop-off in the middle. Reward Point launched looking like a company with a track record, and started onboarding retail partners from a position of confidence instead of uncertainty.",
      ],
    ],
    services: ["Branding", "Logotype", "Brand research", "UI/UX research", "Illustrations", "Website design", "Visual direction", "Design system"],
    tools: ["Figma", "ChatGPT", "Illustrator", "My brain"],
    closingLabel: "Visual direction & Web design",
  },
  {
    slug: "dibsy",
    title: "Dibsy",
    categories: ["Branding", "Platform design"],
    order: 5,
    summary:
      "Dibsy is a Qatari fintech building modern payment infrastructure. I crafted a premium brand identity inspired by Qatari heritage, its landscape and cultural patterns. I redesigned their web platform and POS UI from scratch.",
    sections: [
      [
        "Long story short",
        "Dibsy is a Qatari fintech platform serving both consumers and major enterprises. The team came to me for a complete brand refresh and a redesign of their user platform. They wanted something credible and premium - a look that earns trust with enterprise buyers while genuinely honoring Arabic visual culture, not decorating with it. Research into Qatari history, architecture, and visual tradition led to a concept built from natural desert landscapes and traditional Qatari pattern. That became a new logo, custom patterns, icons, illustrations, bilingual typography, and a complete brand guide.",
      ],
      [
        "Built for two directions",
        "I extended the system into the platform itself, replacing the legacy interface. Redesigning core user flows in a bilingual, right-to-left product is where most design systems quietly break, so I worked in close sync with Dibsy's team and developers to keep every decision intuitive, scalable, and actually buildable. The result was an identity that does not look like any other payment gateway in the region, and a platform customers can move through quickly without thinking about it.",
      ],
    ],
    services: [
      "Branding",
      "Logotype",
      "Brand research",
      "Brand guide",
      "Moodboarding",
      "UI/UX research",
      "Icons & illustrations",
      "Web platform design",
      "Design system",
    ],
    tools: ["Figma", "Claude", "ChatGPT", "Illustrator", "Photoshop", "After Effects", "My brain"],
    closingLabel: "Branding",
  },
  {
    slug: "caldera",
    title: "Caldera",
    categories: ["Branding", "Platform design"],
    order: 6,
    summary:
      "Caldera is Web3 infrastructure that lets developers launch high-performance rollups. Following their brand refresh I designed the entire website and built it on Framer - full UI/UX in a month, live with custom animation two weeks after that.",
    sections: [
      [
        "Long story short",
        "Caldera had just refreshed their brand and needed a website that could carry them forward. The technology is genuinely large and genuinely fast, and the old site said none of that. I started with moodboarding to work out how the core brand elements should behave in a digital space, then explored page structures, geometry, palette, typography, and layout until the pages felt like the product they were describing. Within a month I delivered full UI/UX across every page, plus a custom suite of isometric illustrations and spot icons built specifically for the new identity.",
      ],
      [
        "From design to launch",
        "Once designs were approved we jumped straight into Framer. No handoff, no spec document, no second team relearning the design - the site was built over the next few weeks. Custom animations on the hero, footer, key sections, and many more interactive details speak the brand language. Caldera launched a site that finally matches the scale of what they have built and keeps working for new clients and partners.",
      ],
    ],
    services: ["Website design", "Moodboarding", "UI/UX research", "Illustrations creation", "Icons design", "Visual direction", "Design system"],
    tools: ["Figma", "Framer", "ChatGPT", "Illustrator", "Photoshop", "After Effects", "My brain"],
    closingLabel: "Web design",
  },
  {
    slug: "ruby",
    title: "Ruby",
    categories: ["Branding", "Web design", "Development"],
    order: 7,
    summary:
      "Ruby, a Y Combinator alumni, serves e-commerce, SMEs, and corporate clients. The technical founders needed a brand that matched their ambition and met investor expectations. I rebuilt the identity and designed and shipped the new site on Framer.",
    sections: [
      [
        "Long story short",
        "Ruby works across e-commerce, SMBs, and corporate clients. None of them will move money through a company that looks unfinished. Their technical founder team came to me wanting an image that matched the company's ambitions in the market and what investors expect to see when they open a tab. The work started with the brand foundation. Rather than throw out the existing symbol, I analyzed it and made it more distinctive so it could carry a new visual direction.",
      ],
      [
        "Built for trust",
        "Then I designed and built the new site on Framer. The focus was B2B: structure, content, and visuals arranged to build trust with corporate partners, show the platform clearly, and shorten the distance between landing on the page and making a decision. Ruby now has a fintech brand that holds its own in the room with bigger clients and the investors backing them.",
      ],
    ],
    services: [
      "Branding",
      "Logotype",
      "Brand research",
      "UI/UX research",
      "Illustrations",
      "Website design",
      "Framer development",
      "Visual direction",
      "Design system",
    ],
    tools: ["Figma", "Framer", "Illustrator", "Photoshop", "My brain"],
    closingLabel: "Visual direction & Web design",
  },
];

async function pageImages(slug) {
  const html = await fetch(`${origin}/${slug}`).then((response) => response.text());
  return [...html.matchAll(/https:\/\/framerusercontent\.com\/images\/[^"'<> ]+/g)]
    .map((match) => match[0].replaceAll("&amp;", "&"))
    .filter((url) => !url.includes("42Oh6gV80cA7wo75B0jwskfzdeQ") && !url.includes("6gOOntBAbGxfYhzqAXGyAqZHDc") && !url.includes(".svg"))
    .filter((url, index, all) => all.indexOf(url) === index);
}

async function upsert(document) {
  const existing = await client.fetch("*[_type == $type && slug.current == $slug][0]._id", { type: document._type, slug: document.slug.current });
  if (existing) return client.patch(existing).set(document).commit();
  return client.create(document);
}

const projects = await Promise.all(
  projectContent.map(async (item) => {
    const images = await pageImages(item.slug);
    return {
      _type: "project",
      title: item.title,
      slug: { _type: "slug", current: item.slug },
      categories: item.categories,
      summary: item.summary,
      sections: item.sections.map(([heading, body]) => ({ _type: "object", heading, body })),
      heroImage: { url: images[0] ?? "" },
      gallery: images.slice(1).map((url, index) => ({ _type: "object", image: { url }, caption: `${item.title} project image ${index + 1}` })),
      services: item.services,
      tools: item.tools,
      closingLabel: item.closingLabel,
      order: item.order,
      featured: true,
    };
  }),
);

await Promise.all(projects.map(upsert));
await client.createOrReplace({
  _id: "homePage",
  _type: "homePage",
  heroTitle: "Hey! I'm Daniel Sun, a designer who brings trusted clarity into your web and brand experiences",
  heroIntro: "6+ years designing for tech founders. Seed to Series C, across fintech, dev tools, and Web3.",
  heroCtaLabel: "Start a project with me",
  heroCtaUrl: "mailto:hello@danielsun.space",
  experienceLine: "6+ years designing for tech founders",
  servicesTitle: "Everything your product needs to be taken seriously",
  services: [
    {
      title: "Web design",
      description:
        "I start from scratch, define goals the site actually has to achieve, then shape structure, navigation, and every UI element around them.",
    },
    {
      title: "Development",
      description:
        "I build what I design in Framer or Webflow, down to the smallest interactions that make a site feel alive without ever pulling focus.",
    },
    {
      title: "Brand identity",
      description: "From logo and type to colors, patterns, and graphics, delivered as one handoff your team can actually follow.",
    },
    {
      title: "Illustration",
      description:
        "Custom icons, product visuals, and isometric scenes made for you only are the fastest way to explain the product and make people feel something.",
    },
  ],
  curiosityTitle: "Pushing my limits through curiosity",
  curiosityBody: "Currently open to collaborations",
});
await client.createOrReplace({
  _id: "aboutPage",
  _type: "aboutPage",
  title: "I create identities and websites giving your product its own voice, the one your audience remembers",
  intro:
    "Growing up in Ukraine, my design journey started with drawing. As a teen, art and graffiti sparked my passion for visual storytelling even more. Later, an architecture degree gave me a foundation, and digital design showed new creative depths.",
  journeyTitle: "How I got here",
  journey: [
    "Right now, my wife and I are in Valencia, Spain. Here, between the sun and sea breeze, I collaborate with cross-functional tech teams and occasionally do independent project work focused on creating design experiences that communicate things words cannot.",
    "For 6+ years I have been collaborating with dynamic tech founders and teams shaping tomorrow, from independent builders to design-driven SMBs across Fintech, DevTools, Web3, and SaaS.",
  ],
  experience: [
    { role: "Senior Web & Brand designer", company: "Clerk", dates: "Dec 2024 - Jul 2026" },
    { role: "Senior Brand & Web designer", company: "O0 Design", dates: "Mar 2024 - Dec 2024" },
    { role: "Senior Web Designer", company: "Ooze", dates: "Mar 2023 - Feb 2024" },
    { role: "Middle Web Designer", company: "Heartbeat", dates: "Dec 2020 - Feb 2023" },
    { role: "Junior Web Designer", company: "HaloLab", dates: "May 2020 - Dec 2020" },
  ],
  positionTitle: "Where I stand",
  positionBody:
    "My mission is to make founders more competitive through design. I craft identities, websites, and visual systems that people respond to, earning trust with investors, opening doors to partnerships, and turning good products into companies others benchmark.",
  cvUrl: "https://drive.google.com/file/d/1GoylHM-evy5PBWtHRkDwa8ltOfER8Njk/view?usp=share_link",
  closingTitle: "Ready for the next adventures",
});
await client.createOrReplace({
  _id: "siteSettings",
  _type: "siteSettings",
  name: "Daniel Sun",
  email: "hello@danielsun.space",
  socialLinks: [
    { label: "X", url: "https://x.com/danielsun_ui" },
    { label: "Instagram", url: "https://www.instagram.com/daniel.sun_design/" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/daniel-sun-design/" },
    { label: "Threads", url: "https://www.threads.com/@daniel.sun_design" },
    { label: "Pinterest", url: "https://pinterest.com/daniel_sun_design/" },
    { label: "Dribbble", url: "https://dribbble.com/daniel_sun" },
  ],
});
console.log(`Seeded ${projects.length} projects and the homepage, about page, and site settings.`);
