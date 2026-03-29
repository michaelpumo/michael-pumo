<script lang="ts" setup>
import type { StoryblokRichtext } from '#storyblok-types'
import { onClickOutside } from '@vueuse/core'

interface Props {
  headline?: string
  text?: StoryblokRichtext
  index?: number
  isLast?: boolean
}

const { headline, text, index } = defineProps<Props>()

const container = useTemplateRef('container')
const content = useTemplateRef('content')
const toggled = ref(false)
const id = toId(headline || '') || undefined

const toggle = () => {
  toggled.value = !toggled.value
}

const height = computed(() => toggled.value ? content.value?.scrollHeight : 0)

onClickOutside(container, () => toggled.value = false)
</script>

<template>
  <div
    ref="container"
    class="w-full transition-opacity duration-200 ease-in-out group-hover/accordion:opacity-20 hover:opacity-100"
  >
    <h4 v-if="headline">
      <button
        class="w-full flex gap-3 text-tertiary text-20 sm:text-26 cursor-pointer pt-2.5 pb-3 text-left"
        type="button"
        :aria-expanded="toggled"
        :aria-controls="id"
        @click="toggle"
        @keydown.enter="toggle"
      >
        <span class="grid grid-cols-[44px_auto]">
          <span
            v-if="typeof index === 'number'"
            class="text-grey"
          >
            {{ (index + 1).toString().padStart(2, '0') }}
          </span>

          <span class="text-balance">
            {{ headline }}
          </span>
        </span>
      </button>
    </h4>

    <div
      :style="{
        height: `${height}px`,
      }"
      class="overflow-hidden transition-all duration-500 ease-outExpo"
    >
      <div
        v-if="storyblokRichTextContent(text)"
        :id="id"
        ref="content"
        class="[&_:is(p):not(:last-child)]:mb-7 [&_:is(p)]:text-pretty text-18 pb-16 px-11"
      >
        <StoryblokText :html="text" />
      </div>
    </div>
  </div>
</template>
