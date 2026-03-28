<script lang="ts" setup>
interface Props {
  border?: 'primary' | 'secondary'
}

const { border = 'primary' } = defineProps<Props>()

const colours = {
  accent: 'bg-accent',
  complementary: 'bg-complementary',
  secondary: 'bg-secondary',
  tertiary: 'bg-tertiary',
} as const

const borders = {
  primary: 'border-primary',
  secondary: 'border-secondary',
} as const

const indexes = [
  'z-4',
  'z-3',
  'z-2',
  'z-1',
] as const
</script>

<template>
  <div class="w-full overflow-hidden">
    <div class="w-full h-full flex">
      <div
        v-for="(colour, name, index) in colours"
        :key="colour"
        class="w-[40%]"
        :class="[index !== 0 ? '-ml-[15%]' : '', indexes[index]]"
      >
        <div
          class="w-full aspect-square rounded-full"
          :class="['border-3', borders[border], colour]"
        />

        <div class="sr-only">
          {{ name }}
        </div>
      </div>
    </div>
  </div>
</template>
