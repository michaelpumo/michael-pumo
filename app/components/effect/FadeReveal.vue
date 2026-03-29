<script lang="ts" setup>
import { gsap } from 'gsap'

interface Props {
  tag?: string
  delay?: number
  duration?: number
}

const { tag = 'div', delay = 0, duration = 0.5 } = defineProps<Props>()
const element = useTemplateRef('element')
const ready = ref(false)

onMounted(async () => {
  if (delay > 0) {
    await wait(delay)
  }

  ready.value = true

  gsap.from(element.value, {
    duration,
    y: 20,
    autoAlpha: 0,
  })
})
</script>

<template>
  <Component
    :is="tag"
    ref="element"
    :class="{
      'opacity-0': !ready,
    }"
  >
    <slot />
  </Component>
</template>
