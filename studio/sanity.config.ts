import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Awais Javed Portfolio',

  projectId: '02iqh8z6',
  dataset: 'portfolios',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
