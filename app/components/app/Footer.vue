<script lang="ts" setup>
import Ditta from '@/assets/logos/ditta.svg'
</script>

<template>
  <footer class="w-full px-gutter py-20">
    <div class="wrapper flex flex-col gap-gutter-md">
      <div class="w-full flex flex-col gap-7 max-w-[50ch] text-balance">
        <p class="text-24 sm:text-26 text-tertiary">
          It’s time to build your next web project.
          Let’s work together and deliver success.
        </p>

        <p class="text-24 sm:text-26 text-tertiary">
          <a
            class="no-underline"
            href="mailto:hello@michaelpumo.com"
          >
            hello@michaelpumo.com
          </a>
        </p>
      </div>

      <div class="w-full flex flex-col gap-4">
        <p>
          <a
            href="https://ditta.studio"
            target="_blank"
            class="block text-tertiary"
          >
            <Ditta class="w-15 h-auto" />

            <span class="sr-only">
              ditta
            </span>
          </a>
        </p>

        <p class="text-12 max-w-[40ch] text-balance">
          ditta ltd. is a company registered in England and Wales with company number 15648076.
        </p>
      </div>
    </div>
  </footer>
</template>
