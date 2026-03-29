<script lang="ts" setup>
import type { BlockProjects } from '#storyblok-components'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Props {
  block: BlockProjects
}

const { block } = defineProps<Props>()

const background = block.background as 'bg-primary' | 'bg-secondary'
const items = useTemplateRef('items')

onMounted(() => {
 items.value?.forEach(item => {
  const el = item?.$el

  if (!el) {
    return
  }

  gsap
    .timeline({
      scrollTrigger: {
        markers: false,
        trigger: el,
        scrub: 1.5,
        start: 'top top',
      },
    })
    .fromTo(
      el,
      {
        scale: 1,
        filter: 'brightness(100%)',
      },
      {
        scale: 0.9,
        filter: 'brightness(20%)',
      },
      '<',
    );
  });
})
</script>

<template>
  <SectionStandard
    v-editable="block"
    :headline="block.headline"
    :headline-a11y="block.headline_a11y"
    :text="block.text"
    :background="background"
  >
    <div class="grid gap-gutter-md grid-cols-1">
      <CardProject
        v-for="(project, index) in block.projects"
        :key="index"
        ref="items"
        class="sticky top-gutter-md origin-top"
        :link="project.link"
        :headline="project.headline"
        :text="project.text"
        :media="project.media"
        :background="background === 'bg-primary' ? 'bg-secondary' : 'bg-primary'"
      />
    </div>
  </SectionStandard>
</template>
