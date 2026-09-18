import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '02iqh8z6',
    dataset: 'portfolios'
  },
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: false,
  },
  typegen: {
    path: '../src/**/*.{ts,astro}',
    schema: 'schema.json',
    generates: '../src/sanity.types.ts',
    overloadClientMethods: true,
  },
})
