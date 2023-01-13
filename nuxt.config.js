export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'sample_learnformula_website',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],
  axios: {
    baseURL: "https://api.decentrawow.com"
  },
  auth: {
    strategies: {
      local: {
        redirect: {
          login: '/index'
        },
        token: {
          property: 'body',
          type: false
        },
        user: {
          property: 'body'
        },
        endpoints: {
          login: { url: 'login', method: 'post' },
          user: { url: 'wow/get_info', method: 'get' },
          // user: { url: 'me', method: 'get', propertyName: 'data' },
          logout: false
        }
      }
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
