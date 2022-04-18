export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Enlightyx',
    title: 'Enlightyx',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'https://enlightyx.io/wp-content/uploads/2020/06/cropped-Enlightyx-Site-Icon-32x32.png',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/style.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/axios', '@/plugins/validate'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxt/content', '@nuxtjs/axios'],

  // Axios
  axios: {
    baseURL: 'https://bj5zsapo3j.execute-api.ap-southeast-1.amazonaws.com',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vee-validate/dist/rules'],
    extend(config) {
      config.performance.hints = false
    },
  },

  // ENV
  env: {
    DEFAULT_SENDER_MAIL:
      process.env.DEFAULT_SENDER_MAIL || 'noreply@enlightyx.io',
    DEFAULT_SENDER_NAME: process.env.DEFAULT_SENDER_NAME || 'Enlightyx',
    ZOHO_KEY:
      process.env.ZOHO_KEY ||
      'wSsVR60g/B/1B6ssmzekJOw4nQ8EVlv3HBh+i1GjuH79T/yR8Mc6kxHHU1X2HPMWFGdhHDMb9rMvmUoAgzpdiN4vzl8IWyiF9mqRe1U4J3x17qnvhDzIV29bkxuIJYMNxghqnWlnEc4q+g==',
  },
}
