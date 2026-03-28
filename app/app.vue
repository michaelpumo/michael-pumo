<script lang="ts" setup>
import { VueLenis } from 'lenis/vue'
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()
const route = useRoute()

const globalClasses = computed(() => [
  'transition-transform duration-2000 ease-smooth',
  `theme-${appStore.getTheme} typeface-${appStore.getTypeface}`,
  storyblokEditor(route.query) ? 'is-storyblok-editor' : '',
  appStore.getAussieMode ? 'rotate-180' : 'rotate-0',
])

const themes = {
  light: '#f6f6f6',
  dark: '#111111',
}

const themeColor = computed(() => themes[appStore.getTheme])

useHead({
  htmlAttrs: {
    lang: 'en',
    class: globalClasses,
  },
})

useSeoMeta({
  titleTemplate: title => (title ? `${title} - Michael Pumo` : 'Michael Pumo'),
  robots: 'index, follow',
  themeColor,
})

useScriptPlausibleAnalytics({
  domain: 'michaelpumo.com',
  extension: ['file-downloads', 'outbound-links'],
})
</script>

<template>
  <VueLenis root>
    <NuxtPage />

    <AppFooter />

    <DevOnly>
      <DevGuide />
    </DevOnly>
  </VueLenis>
</template>
