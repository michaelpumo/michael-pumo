<script lang="ts" setup>
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(SplitText)

interface Props {
  tag?: string
  delay?: number
  duration?: number
  trigger?: 'immediate' | 'scroll' | 'inview'
}

const { tag = 'p', delay = 0, duration = 0.5, trigger = 'immediate' } = defineProps<Props>()
const text = useTemplateRef('text')
const ready = ref(false)

const immediateFn = async () => {
  if (delay > 0) {
    await wait(delay)
  }

  ready.value = true

  const split = SplitText.create(
    text.value,
    {
      type: 'words, chars',
      tag: 'span',
    },
  )

  gsap.from(split.chars, {
    duration,
    y: 5,
    rotate: -5,
    autoAlpha: 0,
    stagger: 0.025,
  })
}

onMounted(async () => {
  if (trigger === 'immediate') {
    await immediateFn()
  }
})
</script>

<template>
  <Component
    :is="tag"
    ref="text"
    :class="{
      'opacity-0': !ready,
    }"
  >
    <slot />
  </Component>
</template>

<style scoped>
  :deep(span) {
    display: inline-block;
  }
</style>
