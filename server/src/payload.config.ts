import path from 'path'

import { payloadCloud } from '@payloadcms/plugin-cloud'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { slateEditor } from '@payloadcms/richtext-slate'
import { buildConfig } from 'payload/config'

import Admins from './collections/Admins'
import FooterLogo  from './collections/FooterLogo'
import Logo from './collections/Logo'
import BackgroundImages from './collections/BackgroundImages'
import Blocks from './collections/Blocks'
import Pages from './collections/Pages'
import BlockMedia from './collections/BlockMedia'
import Media from './collections/Media'

import NavBar from './globals/NavBar'
import Footer from './globals/Footer'

export default buildConfig({
  admin: {
    user: Admins.slug,
    bundler: webpackBundler(),
    meta: {
      titleSuffix: '- Ragy Law Firm',
      favicon: '/assets/logo.jpg',
      ogImage: '/assets/logo.jpg',
    },
    // components: {
    //   graphics: {
    //   },
    // },
  },
  editor: slateEditor({}),
  collections: [
    Admins,
    // FooterLogo,
    // Logo,
    BackgroundImages,
    //Blocks,
    Pages,
    BlockMedia,
    Media,
  ],
  globals:[
    NavBar,
    //Footer,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  routes: {
    admin: '/dashboard',
  },
  graphQL: {
    disable: true,
  },
  plugins: [payloadCloud()],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
})
