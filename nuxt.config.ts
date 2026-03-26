import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import devtoolsJson from 'vite-plugin-devtools-json'
import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxtjs/sitemap',
    'lenis/nuxt',
    [
      '@storyblok/nuxt',
      {
        accessToken: process.env.STORYBLOK_TOKEN,
      },
    ],
  ],
  ssr: true,
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'fade', mode: 'out-in' },
    layoutTransition: false,
    head: {
      htmlAttrs: {
        lang: 'en-GB',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'author', content: 'Michael Pumo' },
        { name: 'apple-mobile-web-app-title', content: 'Michael Pumo' },
        { name: 'google-site-verification', content: '3scjFuAQJfrnce34RE6TkwF21NlAnWk7VUwXi86bRs8' },
        { 'http-equiv': 'content-language', 'content': 'en-GB' },
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: '32x32' },
        { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
        { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'preload', type: 'font/woff2', href: '/fonts/SaansProportional-VF.woff2', as: 'font', crossorigin: '' },
        { rel: 'preload', type: 'font/woff2', href: '/fonts/SaansItalics-VF.woff2', as: 'font', crossorigin: '' },
      ],
    },
  },
  css: ['~/assets/css/app.css'],
  site: {
    url: 'https://michaelpumo.com',
    name: 'Michael Pumo',
  },
  runtimeConfig: {
    public: {
      STORYBLOK_TOKEN: process.env.STORYBLOK_TOKEN,
      STORYBLOK_VERSION: process.env.STORYBLOK_VERSION,
    },
  },
  alias: {
    '#storyblok-components': fileURLToPath(new URL('./.storyblok/types/338175/storyblok-components', import.meta.url)),
    '#storyblok-types': fileURLToPath(new URL('./.storyblok/types/storyblok', import.meta.url)),
  },
  routeRules: {
    '/**': { prerender: process.env.PRERENDER === 'true' },
  },
  future: {
    compatibilityVersion: 4,
  },
  features: {
    noScripts: false,
  },
  compatibilityDate: '2026-02-10',
  nitro: {
    experimental: {
      openAPI: false,
    },
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },
  vite: {
    plugins: [
      devtoolsJson(),
      tailwindcss(),
      svgLoader({
        svgo: false,
      }),
    ],
    vue: {
      script: {
        defineModel: true,
        propsDestructure: true,
      },
    },
    optimizeDeps: {
      include: [
        '@storyblok/vue',
        '@vue/devtools-core',
        '@vue/devtools-kit',
        'gsap',
        'gsap/SplitText',
        'keen-slider/vue.es',
        'lucide-vue-next',
        'gsap/ScrollTrigger',
        '@vueuse/core',
      ],
    },
  },
  typescript: {
    strict: true,
  },
  postcss: {
    plugins: {
      'postcss-nested': {},
    },
  },
  eslint: {
    config: {
      standalone: false,
      stylistic: true,
      autoInit: false,
    },
  },
  image: {
    provider: 'storyblok',
    storyblok: {
      baseURL: 'https://a2.storyblok.com',
    },
    domains: ['storyblok.com', 'michaelpumo.com'],
    quality: 80,
    screens: {
      '2xs': 375,
      'xs': 480,
      'sm': 600,
      'md': 800,
      'lg': 1200,
      'xl': 1440,
      '2xl': 1800,
    },
  },
  sitemap: {
    sources: [
      '/api/sitemap',
    ],
  },
})
