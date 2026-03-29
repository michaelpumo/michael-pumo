<script lang="ts" setup>
interface Props {
  timeZone?: string
}

const { timeZone = 'Europe/London' } = defineProps<Props>()

const time = ref('')
const zone = ref('')
const raf = ref<number | undefined>(undefined)

const getTimeNow = (): string[] =>
  new Intl.DateTimeFormat('en-GB', {
    timeStyle: 'long',
    timeZone,
  })
    .format(new Date())
    .split(' ')

const updateClock = () => {
  const [timeNow, timeZone] = getTimeNow()

  if (!timeNow || !timeZone) {
    return
  }

  time.value = timeNow
  zone.value = timeZone
  raf.value = window.requestAnimationFrame(updateClock)
}

onMounted(() => {
  raf.value = window.requestAnimationFrame(updateClock)
})

onUnmounted(() => {
  if (raf.value) {
    window.cancelAnimationFrame(raf.value)
  }
})
</script>

<template>
  <time
    class="block"
    :datetime="time"
  >
    <slot
      name="clock"
      v-bind="{ time, zone }"
    />
  </time>
</template>
