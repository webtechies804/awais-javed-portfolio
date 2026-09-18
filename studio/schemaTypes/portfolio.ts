import {defineArrayMember, defineField, defineType, type StringRule} from 'sanity'
import {DocumentIcon} from '@sanity/icons/Document'
import {ImageIcon} from '@sanity/icons/Image'
import {CogIcon} from '@sanity/icons/Cog'

const required = (rule: StringRule) => rule.required()
const text = (name: string, title?: string) => defineField({name, title, type: 'string'})
const richText = (name: string) => defineField({
  name, type: 'array', of: [defineArrayMember({type: 'block', styles: [{title: 'Normal', value: 'normal'}], lists: [], marks: {decorators: [{title: 'Strong', value: 'strong'}, {title: 'Emphasis', value: 'em'}], annotations: []}})],
})
const mediaRef = (name: string) => defineField({name, type: 'reference', to: [{type: 'portfolioMedia'}]})
const mediaList = (name: string) => defineField({name, type: 'array', of: [defineArrayMember({type: 'reference', to: [{type: 'portfolioMedia'}]})]})
const stringList = (name: string) => defineField({name, type: 'array', of: [defineArrayMember({type: 'string'})]})
const source = defineField({name: 'sourceUrl', type: 'url', readOnly: true, description: 'Migration provenance; used to safely resume imports.'})

export const portfolioMedia = defineType({
  name: 'portfolioMedia', title: 'Media', type: 'document', icon: ImageIcon,
  fields: [text('title'), text('alt'), source,
    defineField({name: 'kind', type: 'string', options: {list: ['image', 'video']}, validation: required}),
    defineField({name: 'image', type: 'image', options: {hotspot: true}, hidden: ({document}) => document?.kind !== 'image'}),
    defineField({name: 'clip', title: 'Short decorative clip', type: 'file', options: {accept: 'video/mp4'}, hidden: ({document}) => document?.kind !== 'video', description: 'Small looping previews only. Use a streaming provider for full-length video.'}),
    defineField({name: 'aspectRatio', type: 'number'}),
  ],
  preview: {select: {title: 'title', media: 'image', subtitle: 'kind'}},
})

export const portfolioService = defineType({
  name: 'portfolioService', title: 'Services', type: 'document', icon: DocumentIcon,
  fields: [text('title'), defineField({name: 'description', type: 'text'}), mediaList('icons'), defineField({name: 'order', type: 'number'}), source],
})

export const siteSettings = defineType({
  name: 'siteSettings', title: 'Site Settings', type: 'document', icon: CogIcon,
  fields: [source, text('name'), defineField({name: 'email', type: 'string', validation: rule => rule.required().email()}),
    text('contactLabel'), text('availability'), text('socialLabel'), text('seoTitle'), defineField({name: 'seoDescription', type: 'text'}),
    defineField({name: 'socials', type: 'array', of: [defineArrayMember({name: 'social', type: 'object', fields: [text('label'), defineField({name: 'url', type: 'url'}), mediaRef('icon'), mediaRef('darkIcon')]})]}),
    mediaRef('copyIcon'), mediaRef('darkCopyIcon'),
  ],
})

export const portfolioPage = defineType({
  name: 'portfolioPage', title: 'Pages', type: 'document', icon: DocumentIcon,
  fields: [text('title'), defineField({name: 'key', type: 'string', options: {list: ['home', 'about', 'notFound']}, validation: required}),
    source, text('headline'), defineField({name: 'introduction', type: 'text'}), text('ctaLabel'),
    text('servicesHeading'), text('clientsHeading'), text('galleryHeading'), text('closingHeading'),
    text('storyHeading'), richText('story'), text('approachHeading'), richText('approach'),
    mediaRef('glow'), mediaList('photos'), mediaList('collage'), mediaList('logos'), mediaList('gallery'),
    defineField({name: 'resumeUrl', type: 'url'}),
    defineField({name: 'career', type: 'array', of: [defineArrayMember({name: 'position', type: 'object', fields: [text('role'), text('company'), text('dates'), mediaRef('icon')]})]}),
    text('seoTitle'), defineField({name: 'seoDescription', type: 'text'}),
  ],
})

export const portfolioProject = defineType({
  name: 'portfolioProject', title: 'Portfolio Projects', type: 'document', icon: DocumentIcon,
  fields: [defineField({name: 'title', type: 'string', validation: required}),
    defineField({name: 'slug', type: 'slug', options: {source: 'title'}, validation: rule => rule.required().custom(value => !value?.current || /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value.current) || 'Use lowercase words separated by hyphens')}),
    source, defineField({name: 'order', type: 'number'}), defineField({name: 'column', type: 'number', options: {list: [1, 2]}}),
    defineField({name: 'summary', type: 'text'}), richText('body'), stringList('tags'), stringList('services'), stringList('tools'),
    mediaRef('icon'), mediaRef('cover'), defineField({name: 'coverRatio', type: 'number'}), mediaRef('hero'),
    defineField({name: 'gallery', type: 'array', of: [
      defineArrayMember({name: 'galleryHeading', type: 'object', fields: [text('title')]}),
      defineArrayMember({name: 'galleryRow', type: 'object', fields: [mediaList('items')]}),
    ]}),
    defineField({name: 'related', type: 'array', of: [defineArrayMember({type: 'reference', to: [{type: 'portfolioProject'}]})]}),
    text('seoTitle'), defineField({name: 'seoDescription', type: 'text'}),
  ],
  orderings: [{title: 'Display order', name: 'orderAsc', by: [{field: 'order', direction: 'asc'}]}],
  preview: {select: {title: 'title', subtitle: 'slug.current', media: 'cover.image'}},
})

export const portfolioTypes = [portfolioMedia, portfolioService, siteSettings, portfolioPage, portfolioProject]
