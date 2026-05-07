<script lang="ts" setup>
interface Props {
  error: {
    statusCode: number
    statusMessage: string
  }
}

const { error } = defineProps<Props>()

const message = computed(() => error?.statusCode && error?.statusMessage
  ? `${error?.statusCode} ${error?.statusMessage}`
  : 'an unexpected error',
)

useHead({
  title: message.value.toLowerCase(),
})
</script>

<template>
  <div class="w-full min-h-svh bg-primary p-gutter flex gap-10 flex-col items-start justify-between">
    <div class="@container/error-content w-full my-auto flex gap-7 flex-col items-start justify-center">
      <EffectTextReveal
        class="text-tertiary max-w-[18ch] text-fluid-36-64 text-pretty font-light"
        tag="h1"
        :delay="200"
      >
        Our AI overlords can't help you with that request.
      </EffectTextReveal>

      <EffectFadeReveal
        tag="p"
        :delay="1300"
        class="[&_:is(p):not(:last-child)]:mb-7 text-18 max-w-[40ch]"
      >
        They were hallucinating something about {{ message.toLowerCase() }} — we still need humans, right?
      </EffectFadeReveal>

      <EffectFadeReveal
        class="mt-3"
        type="button"
        tag="a"
        :delay="1500"
        href="/"
      >
        <ButtonAppearance text="Get me outta here" />
      </EffectFadeReveal>
    </div>
  </div>
</template>
