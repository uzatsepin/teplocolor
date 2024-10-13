// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          additionalData: '@import "~/assets/scss/helpers/_vars.scss";'
        }
      }
    }
  },
  modules: ['@nuxt/fonts', '@nuxt/image'],
  fonts: {
    families: [
      {
        name: 'Cygre',
        local: true,
        src: [
          { path: '~/assets/fonts/Cygre-Regular.woff2', weight: 400 },
          { path: '~/assets/fonts/Cygre-SemiBold.woff2', weight: 600 },
          { path: '~/assets/fonts/Cygre-Black.woff2', weight: 900 },
        ]
      }
    ]
  }
})