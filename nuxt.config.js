export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Crosby Solutions',
    htmlAttrs: {
      lang: 'en',
    },
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/x-icon', href: '/cs-favicon-80.png' },
      // {
      //   rel: 'stylesheet',
      //   href: 'https://fonts.googleapis.com/css?family=Montserrat',
      // },
    ],
    meta: [
      { charset: 'utf-8' },
      { 'theme-color': '#d1fae5' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { 'http-equiv': 'X-Content-Type-Options', content: 'nosniff' },
      { 'http-equiv': 'X-XSS-Protection', content: '1; mode=block' },
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
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  // CSP configuration: https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-render/
  // render: {
  // csp: {
  //   addMeta: true,
  //   // hashAlgorithm: 'sha256',
  //   policies: {
  //     'default-src': ["'self'"],
  //     'img-src': ["'self'", 'https:'],
  //     // 'worker-src': ["'self'", `blob:`, PRIMARY_HOSTS, '*.logrocket.io'],
  //     'style-src': ["'self'", "'unsafe-inline'", 'fonts.googleapis.com'],
  //     'script-src': ["'self'", "'unsafe-inline'", '*.google-analytics.com'],
  //     'font-src': ['fonts.gstatic.com'],
  //     // 'connect-src': [PRIMARY_HOSTS, 'sentry.io', '*.google-analytics.com'],
  //     // 'form-action': ["'self'"],
  //     // 'frame-ancestors': ["'none'"],
  //     'object-src': ["'self'"],
  //     // 'base-uri': [PRIMARY_HOSTS],
  //     // 'report-uri': [
  //     //   `https://sentry.io/api/<project>/security/?sentry_key=<key>`,
  //     // ],
  //   },
  // },
  // },
}
