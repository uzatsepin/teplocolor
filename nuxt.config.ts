// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  build: {
    transpile: ['swiper']
  },
  site: {
    url: 'https://teplocolour.ru',
    name: 'TeploColour - Порошковая покраска',
    description: 'Профессиональная порошковая покраска металлических изделий в Москве. Качественное покрытие, доступные цены, гарантия на работы.',
    defaultLocale: 'ru',
    identity: {
      type: 'Organization',
    },
    twitter: '@teplocolour',
  },
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
  modules: ['@nuxt/fonts', '@nuxt/image', 'nuxt-swiper', '@nuxtjs/seo'],
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