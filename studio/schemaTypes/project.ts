import {defineField, defineType} from 'sanity'
import {DocumentIcon} from '@sanity/icons/Document'

export const project = defineType({
  name: 'project',
  title: 'Portfolio Project',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({name: 'title', type: 'string', validation: (rule) => rule.required()}),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({name: 'summary', type: 'text', rows: 4}),
    defineField({
      name: 'website',
      title: 'Project URL',
      type: 'url',
      validation: (rule) => rule.uri({scheme: ['http', 'https']}),
    }),
  ],
})
