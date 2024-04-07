
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    'nuxt-svgo',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
  ],

  svgo: {
    global: false,
    autoImportPath: './assets/svgs/',
    componentPrefix: 'icon'
  },

  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
    detectBrowserLanguage: false,
    customRoutes: 'config',
    pages: {
      about: {
        en: '/about-us',
        fr: '/a-propos',
      }
    },
    vueI18n: './i18n.config.ts'
  }
});