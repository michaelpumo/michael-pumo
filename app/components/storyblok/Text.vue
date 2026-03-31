<script lang="ts" setup>
import type { StoryblokRichtext } from '#storyblok-types'
import type { BlockAttributes } from '@storyblok/richtext'
import type { Component, VNode } from 'vue'
import { NuxtLink } from '#components'
import { Mark } from '@tiptap/core'

interface Props {
  html?: StoryblokRichtext
}

const { html } = defineProps<Props>()

const CustomLink = Mark.create({
  name: 'link',
  renderHTML({ HTMLAttributes }) {
    const isEmail = HTMLAttributes.linktype === 'email'
    const isStory = HTMLAttributes.linktype === 'story'

    const attrs = {
      to: isEmail ? `mailto:${HTMLAttributes.href}` : isStory ? storyblokSlug(HTMLAttributes.href) : HTMLAttributes.href,
      target: HTMLAttributes.target || undefined,
    }

    return [asTag(NuxtLink), attrs, 0]
  },
})

type VNodeResult = VNode | VNode[]

const renderFn = (tag: string | Component, attrs: BlockAttributes, children?: VNodeResult): VNodeResult => {
  if (typeof tag !== 'string' && children != null) {
    return h(tag, attrs, { default: () => Array.isArray(children) ? children : [children] })
  }

  return h(tag as string, attrs, children)
}

const { render } = useStoryblokRichText({
  renderFn,
  tiptapExtensions: {
    link: CustomLink,
  },
})

const richText = computed(() => html ? render(html) : null)
</script>

<template>
  <component
    :is="() => richText"
    v-if="richText"
  />
</template>
