<script lang="ts" setup>
const amount = 6
const src = '/audio/waves.mp3'
const audio = useTemplateRef('audio')
const playing = ref<boolean>(false)
const barHeights = ref<number[]>(Array.from({ length: amount }).map(() => getRandomNumber(16, 100)))

let ctx: AudioContext | null = null
let analyser: AnalyserNode
let source: MediaElementAudioSourceNode
let dataArray: Uint8Array<ArrayBuffer>
let animationFrame: number

function setupAudioAnalyser() {
  ctx = new AudioContext()
  analyser = ctx.createAnalyser()
  analyser.fftSize = 64

  const bufferLength = analyser.frequencyBinCount
  dataArray = new Uint8Array(bufferLength)

  if (audio.value) {
    source = ctx.createMediaElementSource(audio.value)
    source.connect(analyser)
    analyser.connect(ctx.destination)
  }
}

function updateBars() {
  if (!analyser) {
    return
  }

  analyser.getByteFrequencyData(dataArray)

  const chunkSize = Math.floor(dataArray.length / amount) / 2
  barHeights.value = Array.from({ length: amount }).fill(0).map((_, i) => {
    const start = i * chunkSize
    const end = start + chunkSize
    const chunkAvg
      = dataArray.slice(start, end).reduce((sum, val) => sum + val, 0) / chunkSize
    return Math.max(20, chunkAvg / 2)
  })

  animationFrame = requestAnimationFrame(updateBars)
}

const togglePlayback = () => {
  if (!audio.value) {
    return
  }

  if (!ctx) {
    setupAudioAnalyser()
  }

  if (playing.value) {
    audio.value.pause()
    cancelAnimationFrame(animationFrame)
  }
  else {
    ctx?.resume()
    audio.value.play()
    updateBars()
  }

  playing.value = !playing.value
}

onBeforeUnmount(() => {
  cancelAnimationFrame(animationFrame)
  ctx?.close()
})

defineExpose({
  togglePlayback,
  playing,
})
</script>

<template>
  <div class="w-full h-25 flex items-center justify-center gap-2.5">
    <audio
      ref="audio"
      :src="src"
      crossorigin="anonymous"
    />

    <ClientOnly>
      <div
        v-for="(barHeight, i) in barHeights"
        :key="i"
        class="w-4 bg-accent rounded-10 transition[height,transform] duration-100"
        :style="{
          height: `${barHeight}px`,
        }"
      />
    </ClientOnly>
  </div>
</template>
