import { fileURLToPath } from 'node:url'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],

  components: [{ path: '~/landing/components', pathPrefix: false }],

  alias: {
    '~src': fileURLToPath(new URL('./src', import.meta.url))
  },

  css: ['~/assets/css/main.css'],

  ui: {
    fonts: false
  },

  app: {
    head: {
      title: 'UniteCorp | Transforma tu talento en impacto social',
      htmlAttrs: { lang: 'es' },
      meta: [
        {
          name: 'description',
          content:
            'UniteCorp conecta a profesionales corporativos con oportunidades de voluntariado que marcan la diferencia.'
        },
        { name: 'theme-color', content: '#00288E' },
        { property: 'og:title', content: 'UniteCorp | Transforma tu talento en impacto social' },
        {
          property: 'og:description',
          content:
            'UniteCorp conecta a profesionales corporativos con oportunidades de voluntariado que marcan la diferencia.'
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://unitecorp.com/' },
        {
          property: 'og:image',
          content: 'https://picsum.photos/seed/unitecorp-og/1200/630'
        },
        { name: 'twitter:card', content: 'summary_large_image' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap'
        }
      ]
    }
  }
})
