export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title:
      'Crosby Solutions | Website development, Web app development, Consultation, Audits, Support, Testing, Administration',
    htmlAttrs: {
      lang: 'en',
    },
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'apple-touch-icon-precomposed',
        href: '/favicons/favicon-152x152.png',
      },
      {
        rel: 'apple-touch-icon-precomposed',
        sizes: '144x144',
        href: '/favicons/favicon-144x144.png',
      },
      {
        rel: 'apple-touch-icon-precomposed',
        sizes: '120x120',
        href: '/favicons/favicon-120x120.png',
      },
      {
        rel: 'apple-touch-icon-precomposed',
        sizes: '114x114',
        href: '/favicons/favicon-114x114.png',
      },
      {
        rel: 'apple-touch-icon-precomposed',
        sizes: '76x76',
        href: '/favicons/favicon-76x76.png',
      },
      {
        rel: 'apple-touch-icon-precomposed',
        sizes: '72x72',
        href: '/favicons/favicon-72x72.png',
      },
      {
        rel: 'apple-touch-icon-precomposed',
        sizes: '60x60',
        href: '/favicons/favicon-60x60.png',
      },
      {
        rel: 'apple-touch-icon-precomposed',
        sizes: '57x57',
        href: '/favicons/favicon-57x57.png',
      },
      { rel: 'icon', sizes: '32x32', href: '/favicons/favicon-32x32.png' },
      { rel: 'icon', sizes: '57x57', href: '/favicons/favicon-57x57.png' },
      { rel: 'icon', sizes: '72x72', href: '/favicons/favicon-72x72.png' },
      { rel: 'icon', sizes: '90x90', href: '/favicons/favicon-90x90.png' },
      { rel: 'icon', sizes: '96x96', href: '/favicons/favicon-96x96.png' },
      { rel: 'icon', sizes: '120x120', href: '/favicons/favicon-120x120.png' },
      { rel: 'icon', sizes: '128x128', href: '/favicons/favicon-128x128.png' },
      { rel: 'icon', sizes: '144x144', href: '/favicons/favicon-144x144.png' },
      { rel: 'icon', sizes: '152x152', href: '/favicons/favicon-152x152.png' },
      { rel: 'icon', sizes: '192x192', href: '/favicons/favicon-192x192.png' },
      { rel: 'icon', sizes: '195x195', href: '/favicons/favicon-195x195.png' },
      { rel: 'icon', sizes: '228x228', href: '/favicons/favicon-228x228.png' },
      { rel: 'icon', sizes: '256x256', href: '/favicons/favicon-256x256.png' },
      // {
      //   rel: 'stylesheet',
      //   href: 'https://fonts.googleapis.com/css?family=Montserrat',
      // },
      // { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      // {
      //   rel: 'stylesheet',
      //   href:
      //     'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&display=swap',
      // },
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'msapplication-TileColor', content: '/favicons/favicon-0x0.png' },
      {
        name: 'msapplication-TileImage',
        content: '/favicons/favicon-144x144.png',
      },
      {
        name: 'msapplication-square70x70logo',
        content: '/favicons/favicon-70x70.png',
      },
      {
        name: 'msapplication-square150x150logo',
        content: '/favicons/favicon-150x150.png',
      },
      {
        name: 'msapplication-wide310x150logo',
        content: '/favicons/favicon-310x150.png',
      },
      {
        name: 'msapplication-square310x310logo',
        content: '/favicons/favicon-310x310.png',
      },
      {
        name: 'description',
        content:
          'Crosby Solutions: Providing quality, affordable Website development, Web Applications, Web Help, Consulting, Support, Audits, Administration in Willetton, Perth, South of Perth, Western Australia',
      },
      { name: 'theme-color', content: '#d1fae5' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // { hid: 'description', name: 'description', content: '' },
      // { 'http-equiv': 'X-Content-Type-Options', content: 'nosniff' },
      // { 'http-equiv': 'X-XSS-Protection', content: '1; mode=block' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/route'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // nuxt.config.js
    '@nuxtjs/tailwindcss',
    // https://github.com/nuxt-community/svg-module
    '@nuxtjs/svg',
    // https://google-analytics.nuxtjs.org/setup
    '@nuxtjs/google-analytics',
    // https://github.com/janniks/vue-notion
    'vue-notion/nuxt',
  ],
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID,
  },
  publicRuntimeConfig: {
    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_ID,
    },
  },
  privateRuntimeConfig: {
    NOTION_CLIENT_BLOCK: process.env.NOTION_CLIENT_BLOCK,
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://content.nuxtjs.org/
    '@nuxt/content',
  ],
  generate: {
    async ready() {
      const { $content } = require('@nuxt/content')
      const files = await $content({ deep: true }).only(['slug']).fetch()
      console.log('files: ', files)
    },
    fallback: true,
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // fix scrolling to anchor issues
  // https://github.com/nuxt/nuxt.js/issues/5359
}
