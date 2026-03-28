<script lang="ts" setup>
import type { StoryblokRichtext } from '#storyblok-types'

interface Props {
  headline?: string
  text?: StoryblokRichtext | string
  padded?: boolean
  background?: 'primary' | 'secondary'
}

const { headline, text, padded = true, background = 'primary' } = defineProps<Props>()

const backgrounds = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
} as const

const attrs = useAttrs()
const isButton = attrs.role === 'button' || attrs.tabindex === '0'
</script>

<template>
  <div
    class="size-full flex flex-col gap-6 items-start justify-between rounded-10"
    :class="[
      backgrounds[background],
      {
        'p-6': padded,
        'cursor-pointer select-none outline-1 outline-transparent hover:outline-accent focus:outline-accent transition-[outline] duration-300': isButton,
      },
    ]"
  >
    <div
      v-if="$slots.top"
      class="size-full"
    >
      <slot name="top" />
    </div>

    <div
      v-if="headline || text"
      class="flex flex-col gap-2 items-start justify-start"
    >
      <h3
        v-if="headline"
        class="text-18 text-tertiary"
      >
        {{ headline }}
      </h3>

      <p
        v-if="text && typeof text === 'string'"
        class="text-14 text-balance max-w-[40ch]"
      >
        {{ text }}
      </p>

      <div
        v-else-if="typeof text !== 'string' && storyblokRichTextContent(text)"
        class="[&_:is(p):not(:last-child)]:mb-4 text-balance text-14 max-w-[40ch]"
      >
        <StoryblokText :html="text" />
      </div>
    </div>

    <div
      v-if="$slots.bottom"
      class="size-full"
    >
      <slot name="bottom" />
    </div>
  </div>
</template>
