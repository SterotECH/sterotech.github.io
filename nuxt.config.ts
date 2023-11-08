// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
    timeline: true
  },

  modules: [
    '@nuxt/ui',
    '@pinia/nuxt',
    '@nuxtjs/eslint-module',
    '@nuxt/image',
    '@vueuse/nuxt',
  ],

  buildDir: './dist',

  pinia: {
    storesDirs: ['./stores/**'],
  },
  eslint: {
    exclude: ['**/node_modules/**', ".nuxt/**"]
  }
})
