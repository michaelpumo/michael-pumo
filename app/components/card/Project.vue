<script lang="ts" setup>
import type { StoryblokAsset, StoryblokMultilink } from '#storyblok-types'

interface Props {
  headline?: string
  link?: StoryblokMultilink
  media?: StoryblokAsset
  background?: 'bg-primary' | 'bg-secondary'
}

const { headline, link, media, background } = defineProps<Props>()
</script>

<template>
  <div>
    <StoryblokLink
      :item="link"
      :class="[
        background,
        'no-underline grid grid-cols-12 gap-6 relative overflow-hidden rounded-10 aspect-16/7 text-tertiary'
      ]"
    >
      <div class="col-span-6 p-gutter flex flex-col gap-12 justify-between">
        <h3 class="text-24 text-accent">
          {{ headline }}
        </h3>

        <div class="flex flex-col gap-10 items-start">
          <p class="text-30">Just describe it - Base44 helps you build it, host it, and get it ready to launch. No code. No setup. Just go.</p>
          <ButtonAppearance text="Open project" size="small" />
        </div>
      </div>

      <div class="col-span-6 overflow-hidden w-full">
        <NuxtImg
          v-if="media?.filename && storyblokAssetType(media.filename) === 'image'"
          class="size-full object-cover"
          :src="media.filename"
          :alt="`Project for ${media.alt || headline}`"
          width="300"
          loading="lazy"
        />
      </div>
    </StoryblokLink>
  </div>
</template>
