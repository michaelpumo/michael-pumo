<script lang="ts" setup>
import type { Page } from '#storyblok-components'

interface Props {
  content: Page
}

const { content } = defineProps<Props>()
</script>

<template>
  <div>
    <template
      v-for="(block) in content.blocks"
      :key="block._uid"
    >
      <section v-if="block.component === 'block_hero'">
        <BlockHero :block />
      </section>
    </template>

    <main>
      <template
        v-for="(block) in content.blocks"
        :key="block._uid"
      >
        <section v-if="block.component === 'block_bento'">
          <BlockBento :block />
        </section>

        <section v-else-if="block.component === 'block_faq'">
          <BlockFaq :block />
        </section>

        <section v-else-if="block.component === 'block_play'">
          <BlockPlay :block />
        </section>

        <section v-else-if="block.component === 'block_projects'">
          <BlockProjects :block />
        </section>

        <section v-else-if="block.component === 'block_text'">
          <BlockText :block />
        </section>
      </template>
    </main>
  </div>
</template>
