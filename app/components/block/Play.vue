<script lang="ts" setup>
import type { BlockPlay } from '#storyblok-components'
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()

interface Props {
  block: BlockPlay
}

const { block } = defineProps<Props>()
const audio = useTemplateRef('audio')

const togglePlayback = () => {
  audio.value?.togglePlayback()
}

const setTypeface = () => {
  appStore.setTypeface(appStore.getTypeface === 'saans' ? 'comic-neue' : 'saans')
}

const setTheme = () => {
  appStore.setTheme(appStore.getTheme === 'light' ? 'dark' : 'light')
}

const toggleAussieMode = () => {
  appStore.setAussieMode(!appStore.getAussieMode)
}

const background = block.background as 'bg-primary' | 'bg-secondary'
</script>

<template>
  <SectionStandard
    v-editable="block"
    :headline="block.headline"
    :headline-a11y="block.headline_a11y"
    :text="block.text"
    :background="background"
    class="@container"
  >
    <div class="grid grid-cols-1 @md:grid-cols-2 @4xl:grid-cols-4 gap-4">
      <CardStandard
        class="w-full"
        headline="Typeface"
        :text="`Currently viewing ${appStore.getTypeface === 'saans' ? 'Saans' : 'Comic Neue 🤣'} typeface ${appStore.getTypeface === 'saans' ? 'by Displaay Type Foundry' : 'from Google Fonts'}. Maybe switch things up?`"
        :background="block.background === 'bg-primary' ? 'secondary' : 'primary'"
        role="button"
        tabindex="0"
        @click="setTypeface"
        @keydown.enter="setTypeface"
      >
        <template #top>
          <div class="flex flex-col h-full place-content-center">
            <SelectedTypeface text="Aa" />
          </div>
        </template>
      </CardStandard>

      <CardStandard
        class="w-full"
        headline="Palette"
        :text="`Are things a little ${appStore.getTheme === 'dark' ? 'dark' : 'light'} around here? Switch up the palette mode to suit your preference.`"
        :background="block.background === 'bg-primary' ? 'secondary' : 'primary'"
        role="button"
        tabindex="0"
        @click="setTheme"
        @keydown.enter="setTheme"
      >
        <template #top>
          <div class="flex flex-col h-full place-content-center">
            <SelectedPalette />
          </div>
        </template>
      </CardStandard>

      <CardStandard
        class="w-full"
        headline="Vibes"
        text="Sit back, relax and listen to the sound of the ocean waves crashing on the shore as you sip a piña colada 🏝️."
        :background="block.background === 'bg-primary' ? 'secondary' : 'primary'"
        role="button"
        tabindex="0"
        @click="togglePlayback"
        @keydown.enter="togglePlayback"
      >
        <template #top>
          <div class="flex flex-col h-full place-content-center">
            <SelectedAudio ref="audio" />
          </div>
        </template>
      </CardStandard>

      <CardStandard
        class="w-full"
        headline="Aussie Mode"
        text="Flip the reading experience to accommodate our friends down under."
        :background="block.background === 'bg-primary' ? 'secondary' : 'primary'"
        role="button"
        tabindex="0"
        @click="toggleAussieMode"
      >
        <template #top>
          <div class="flex flex-col h-full place-content-center">
            <SelectedAussieMode />
          </div>
        </template>
      </CardStandard>
    </div>
  </SectionStandard>
</template>
