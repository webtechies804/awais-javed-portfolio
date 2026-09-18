import { defineArrayMember, defineField, defineType } from "sanity";

const imageLink = defineField({
  name: "url",
  title: "Image URL",
  type: "url",
  validation: (rule) => rule.required(),
});

export const project = defineType({
  name: "project",
  title: "Portfolio project",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (rule) => rule.required() }),
    defineField({ name: "categories", title: "Categories", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "summary", title: "Summary", type: "text", rows: 4 }),
    defineField({
      name: "sections",
      title: "Case study sections",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "heading", title: "Heading", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "body", title: "Body", type: "text", rows: 8, validation: (rule) => rule.required() }),
          ],
        }),
      ],
    }),
    defineField({ name: "heroImage", title: "Hero image", type: "object", fields: [imageLink] }),
    defineField({
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "image", title: "Image", type: "object", fields: [imageLink] }),
            defineField({ name: "caption", title: "Caption", type: "string" }),
          ],
        }),
      ],
    }),
    defineField({ name: "services", title: "Services", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "tools", title: "Tools", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "closingLabel", title: "Closing label", type: "string" }),
    defineField({ name: "order", title: "Order", type: "number", validation: (rule) => rule.required() }),
    defineField({ name: "featured", title: "Featured on homepage", type: "boolean", initialValue: true }),
  ],
  preview: { select: { title: "title", subtitle: "summary", media: "heroImage" } },
});

export const homePage = defineType({
  name: "homePage",
  title: "Homepage",
  type: "document",
  fields: [
    defineField({ name: "heroTitle", title: "Hero title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "heroIntro", title: "Hero intro", type: "text", rows: 3 }),
    defineField({ name: "heroCtaLabel", title: "Hero CTA label", type: "string" }),
    defineField({ name: "heroCtaUrl", title: "Hero CTA URL", type: "url" }),
    defineField({ name: "experienceLine", title: "Experience line", type: "string" }),
    defineField({ name: "servicesTitle", title: "Services title", type: "string" }),
    defineField({
      name: "services",
      title: "Services",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 4 }),
          ],
        }),
      ],
    }),
    defineField({ name: "curiosityTitle", title: "Curiosity title", type: "string" }),
    defineField({ name: "curiosityBody", title: "Curiosity body", type: "text", rows: 5 }),
  ],
});

export const aboutPage = defineType({
  name: "aboutPage",
  title: "About page",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "intro", title: "Intro", type: "text", rows: 5 }),
    defineField({ name: "journeyTitle", title: "Journey title", type: "string" }),
    defineField({ name: "journey", title: "Journey", type: "array", of: [{ type: "text" }] }),
    defineField({
      name: "experience",
      title: "Experience",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "role", title: "Role", type: "string" }),
            defineField({ name: "company", title: "Company", type: "string" }),
            defineField({ name: "dates", title: "Dates", type: "string" }),
          ],
        }),
      ],
    }),
    defineField({ name: "positionTitle", title: "Position title", type: "string" }),
    defineField({ name: "positionBody", title: "Position body", type: "text", rows: 6 }),
    defineField({ name: "cvUrl", title: "CV URL", type: "url" }),
    defineField({ name: "closingTitle", title: "Closing title", type: "string" }),
  ],
});

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "email", title: "Email", type: "email", validation: (rule) => rule.required() }),
    defineField({
      name: "socialLinks",
      title: "Social links",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [defineField({ name: "label", title: "Label", type: "string" }), defineField({ name: "url", title: "URL", type: "url" })],
        }),
      ],
    }),
  ],
});

export const schemaTypes = [project, homePage, aboutPage, siteSettings];
