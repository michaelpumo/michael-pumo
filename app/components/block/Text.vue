<script lang="ts" setup>
import type { BlockText } from '#storyblok-components'

interface Props {
  block: BlockText
}

const { block } = defineProps<Props>()
const background = block.background as 'bg-primary' | 'bg-secondary'
</script>

<template>
  <div
    v-editable="block"
    class="w-full px-gutter py-gutter-xl"
    :class="background"
  >
    <div class="wrapper mx-auto flex flex-col gap-10 md:gap-20">
      <h3
        v-if="block.headline"
        class="text-24"
      >
        {{ block.headline }}
      </h3>

      <EffectTextFiller
        v-if="storyblokRichTextContent(block.text)"
        class="[&_:is(p):not(:last-child)]:mb-10 text-tertiary text-fluid-30-56 font-light"
      >
        <StoryblokText :html="block.text" />
      </EffectTextFiller>
    </div>
  </div>
</template>
