<script lang="ts" setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(SplitText)

interface Props {
  tag?: string
}

const { tag = 'div' } = defineProps<Props>()
const container = useTemplateRef('container')

const run = () => {
  const split = SplitText.create(
    container.value,
    {
      type: 'words,chars',
      tag: 'span',
    },
  )

  gsap.set(split.chars, {
    opacity: 0.5,
  })

  gsap
    .timeline({
      scrollTrigger: {
        markers: false,
        trigger: container.value,
        start: 'top center',
        end: 'bottom center',
        scrub: 2,
        invalidateOnRefresh: true,
      },
    })
    .to(
      split.chars,
      {
        opacity: 1,
        stagger: 0.1,
      },
    )
}

onMounted(async () => {
  run()

  await wait(500)
  ScrollTrigger.refresh()
})
</script>

<template>
  <Component
    :is="tag"
    ref="container"
  >
    <slot />
  </Component>
</template>
