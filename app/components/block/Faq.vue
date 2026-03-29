<script lang="ts" setup>
import type { BlockFaq } from '#storyblok-components'

interface Props {
  block: BlockFaq
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
    <div class="w-full mx-auto md:max-w-153.75">
      <h3
        v-if="block.headline"
        class="text-18 mb-2"
      >
        {{ block.headline }}
      </h3>

      <UiAccordion
        v-if="block.faq"
        :items="block.faq"
      >
        <template #item="{ question, answer, index, isLast }">
          <UiAccordionItem
            v-if="question && answer"
            :headline="question"
            :text="answer"
            :index="index"
            :is-last="isLast"
          />
        </template>
      </UiAccordion>
    </div>
  </div>
</template>
