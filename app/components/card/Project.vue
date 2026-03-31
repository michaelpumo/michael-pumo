<script lang="ts" setup>
import type { StoryblokAsset, StoryblokRichtext, StoryblokMultilink } from '#storyblok-types'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Props {
  headline?: string
  link?: StoryblokMultilink
  text?: StoryblokRichtext
  media?: StoryblokAsset
  background?: 'bg-primary' | 'bg-secondary'
}

const { headline, link, text, media, background } = defineProps<Props>()

const image = useTemplateRef('image')

onMounted(() => {
  const el = image.value?.imgEl as HTMLImageElement | undefined

  if (!el) {
    return
  }

  gsap
    .timeline({
      scrollTrigger: {
        markers: false,
        trigger: el,
        scrub: 1,
        start: 'top bottom',
        end: 'bottom bottom',
      },
    })
    .fromTo(
      el,
      {
        scale: 1.2,
      },
      {
        scale: 1,
      },
      '<',
    );
})
</script>

<template>
  <div>
    <StoryblokLink
      :item="link"
      :class="[
        background,
        'no-underline grid grid-cols-2 relative overflow-hidden rounded-10 lg:aspect-16/7 text-tertiary'
      ]"
    >
      <div class="@container col-span-full md:col-span-1">
        <div class="size-full p-6 @sm:p-10 @lg:p-gutter flex flex-col gap-12 justify-between">
          <h3 class="text-24 text-accent">
            {{ headline }}
          </h3>

          <div class="flex flex-col gap-10 items-start">
            <div
              v-if="storyblokRichTextContent(text)"
              class="[&_:is(p):not(:last-child)]:mb-10 text-pretty text-24 @md:text-26 @lg:text-30"
            >
              <StoryblokText :html="text" />
            </div>

            <ButtonAppearance text="Open project" size="small" />
          </div>
        </div>
      </div>

      <div class="col-span-full md:col-span-1 overflow-hidden w-full">
        <NuxtImg
          v-if="media?.filename && storyblokAssetType(media.filename) === 'image'"
          ref="image"
          class="size-full object-cover"
          :src="media.filename"
          :alt="`Project for ${media.alt || headline}`"
          width="600"
          loading="lazy"
        />
      </div>
    </StoryblokLink>
  </div>
</template>
