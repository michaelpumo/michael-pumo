<script lang="ts" setup>
import type { BlockHero } from '#storyblok-components'
import { useLenis } from 'lenis/vue'

interface Props {
  block: BlockHero
}

const { block } = defineProps<Props>()
const background = block.background as 'bg-primary' | 'bg-secondary'
const container = useTemplateRef('container')
const ready = ref(false)
const lenis = useLenis()

const scrollDown = () => {
  if (!container.value || !lenis.value) {
    return
  }

  const { bottom } = container.value.getBoundingClientRect()

  lenis.value.scrollTo(
    bottom + window.scrollY,
    {
      duration: 1,
    },
  )
}

onMounted(async () => {
  await wait(250)

  ready.value = true
})
</script>

<template>
  <div
    ref="container"
    v-editable="block"
    class="w-full lg:min-h-svh grid lg:grid-cols-2"
    :class="background"
  >
    <div class="w-full min-h-svh lg:min-h-auto p-gutter flex gap-10 flex-col items-start justify-between">
      <EffectFadeReveal
        v-if="block.signal"
        :delay="2200"
      >
        <ElementChip text="Open for new projects" />
      </EffectFadeReveal>

      <div class="@container/hero-content w-full my-auto flex gap-7 flex-col items-start justify-center">
        <EffectTextReveal
          v-if="block.headline"
          class="text-tertiary max-w-[18ch] text-fluid-36-64 text-pretty font-light"
          tag="h1"
          :delay="200"
        >
          {{ block.headline }}
        </EffectTextReveal>

        <EffectFadeReveal
          v-if="storyblokRichTextContent(block.text)"
          :delay="1600"
          class="[&_:is(p):not(:last-child)]:mb-7 text-16 @md/hero-content:text-18 max-w-[40ch]"
        >
          <StoryblokText :html="block.text" />
        </EffectFadeReveal>

        <EffectFadeReveal
          v-if="block.cta"
          class="mt-3"
          type="button"
          tag="button"
          :delay="1800"
          @click.prevent="scrollDown"
        >
          <ButtonAppearance :text="block.cta" />
        </EffectFadeReveal>
      </div>

      <EffectFadeReveal
        v-if="storyblokRichTextContent(block.footnote)"
        class="[&_:is(p):not(:last-child)]:mb-7 text-12"
        :delay="2000"
      >
        <StoryblokText :html="block.footnote" />
      </EffectFadeReveal>
    </div>

    <div class="relative overflow-hidden">
      <div
        class="absolute top-0 left-0 z-10 size-full bg-secondary transition-[width] duration-1000 ease-outQuart"
        :class="{
          'w-0': ready,
        }"
      />

      <NuxtImg
        v-if="block.media?.filename && storyblokAssetType(block.media.filename) === 'image'"
        class="size-full lg:object-cover lg:absolute lg:inset-0 transition-transform duration-1500 ease-outQuart"
        :class="{
          'scale-110': !ready,
        }"
        :src="block.media.filename"
        provider="storyblok"
        width="1000"
        format="webp"
        quality="85"
        :modifiers="{ smart: true }"
        :alt="block.media?.alt || 'Michael Pumo - Freelance Web Developer and Designer in London'"
      />
    </div>
  </div>
</template>
