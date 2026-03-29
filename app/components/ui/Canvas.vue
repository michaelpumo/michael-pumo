<script lang="ts" setup>
import Ditta from '@/assets/decoration/ditta.svg'
import Pointer from '@/assets/icons/pointer.svg'
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()
const size = 20
const container = useTemplateRef('container')

const position = ref({
  x: 0,
  y: 0,
})

let timeout: NodeJS.Timeout | undefined
let interval = 1000

const duration = ref(500)

const setPointer = () => {
  const bounds = container.value?.getBoundingClientRect()

  if (!bounds) {
    return
  }

  const randomX = Math.random() * (bounds.width - size)
  const randomY = Math.random() * (bounds.height - size)

  position.value = {
    x: randomX,
    y: randomY,
  }

  timeout = setTimeout(() => {
    setPointer()
  }, interval)

  const nextInterval = getRandomNumber(1000, 3000)
  interval = nextInterval

  duration.value = getRandomNumber(250, nextInterval)
}

onMounted(async () => {
  await wait(1000)

  setPointer()
})

onUnmounted(() => {
  if (timeout) {
    clearTimeout(timeout)
  }
})
</script>

<template>
  <div
    ref="container"
    class="relative size-full"
  >
    <div class="absolute inset-0 pointer-events-none flex flex-col items-center justify-center">
      <Ditta class="w-full h-auto max-w-40 text-tertiary" />
    </div>

    <div
      class="flex gap-2 transition-transform ease-in-out drop-shadow-md w-auto"
      :style="{
        'transition-duration': `${duration}ms`,
        'transform': `translate3d(${position.x}px, ${position.y}px, 0)`,
      }"
    >
      <Pointer
        class="size-5"
      />

      <span
        class="inline-block bg-accent text-12 rounded-5 px-2 py-0.5 mt-5 -ml-2 font-semibold"
        :class="appStore.getTheme === 'dark' ? 'text-black' : 'text-white'"
      >
        Michael Pumo
      </span>
    </div>
  </div>
</template>
