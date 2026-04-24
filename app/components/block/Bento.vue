<script lang="ts" setup>
import type { BlockBento } from '#storyblok-components'

import Astro from '@/assets/icons/astro.svg'
import Claude from '@/assets/icons/claude.svg'
import Css from '@/assets/icons/css.svg'
import Figma from '@/assets/icons/figma.svg'
import Git from '@/assets/icons/git.svg'
import Gsap from '@/assets/icons/gsap.svg'
import Netlify from '@/assets/icons/netlify.svg'
import Next from '@/assets/icons/next.svg'
import Nuxt from '@/assets/icons/nuxt.svg'
import Openai from '@/assets/icons/openai.svg'
import Prismic from '@/assets/icons/prismic.svg'
import React from '@/assets/icons/react.svg'
import Shopify from '@/assets/icons/shopify.svg'
import Storyblok from '@/assets/icons/storyblok.svg'
import Supabase from '@/assets/icons/supabase.svg'
import Tailwind from '@/assets/icons/tailwind.svg'
import Ts from '@/assets/icons/ts.svg'
import Vite from '@/assets/icons/vite.svg'
import Vscode from '@/assets/icons/vscode.svg'
import Vue from '@/assets/icons/vue.svg'

import Ditta from '@/assets/logos/ditta.svg'
import Foolproof from '@/assets/logos/foolproof.svg'
import Greggs from '@/assets/logos/greggs.svg'
import Hex from '@/assets/logos/hex.svg'
import Hoxton from '@/assets/logos/hoxton.svg'
import Limesharp from '@/assets/logos/limesharp.svg'
import Mof from '@/assets/logos/mof.svg'
import Parallel from '@/assets/logos/parallel.svg'
import RaggedEdge from '@/assets/logos/ragged-edge.svg'
import Rotate from '@/assets/logos/rotate.svg'
import Someone from '@/assets/logos/someone.svg'
import Structure from '@/assets/logos/structure.svg'
import Studio206 from '@/assets/logos/studio-206.svg'

interface Props {
  block: BlockBento
}

const { block } = defineProps<Props>()

const background = block.background as 'bg-primary' | 'bg-secondary'
const technologies = [
  {
    name: 'Astro',
    logo: Astro,
  },
  {
    name: 'Claude Code',
    logo: Claude,
  },
  {
    name: 'CSS',
    logo: Css,
  },
  {
    name: 'Figma',
    logo: Figma,
  },
  {
    name: 'Git',
    logo: Git,
  },
  {
    name: 'GSAP',
    logo: Gsap,
  },
  {
    name: 'Netlify',
    logo: Netlify,
  },
  {
    name: 'Next',
    logo: Next,
  },
  {
    name: 'Nuxt',
    logo: Nuxt,
  },
  {
    name: 'OpenAI',
    logo: Openai,
  },
  {
    name: 'Prismic',
    logo: Prismic,
  },
  {
    name: 'React',
    logo: React,
  },
  {
    name: 'Shopify',
    logo: Shopify,
  },
  {
    name: 'Storyblok',
    logo: Storyblok,
  },
  {
    name: 'Supabase',
    logo: Supabase,
  },
  {
    name: 'Tailwind',
    logo: Tailwind,
  },
  {
    name: 'TypeScript',
    logo: Ts,
  },
  {
    name: 'Vite',
    logo: Vite,
  },
  {
    name: 'VS Code',
    logo: Vscode,
  },
  {
    name: 'Vue',
    logo: Vue,
  },
]

const clients = [
  {
    name: 'Studio 206',
    logo: Studio206,
    url: 'https://studio206.dev',
    classes: 'h-6',
  },
  {
    name: 'Ditta',
    logo: Ditta,
    url: 'https://ditta.studio',
    classes: 'h-6',
  },
  {
    name: 'Foolproof',
    logo: Foolproof,
    url: 'https://foolproof.co.uk',
    classes: 'h-8',
  },
  {
    name: 'Greggs',
    logo: Greggs,
    url: 'https://greggs.com',
    classes: 'h-6',
  },
  {
    name: 'Hex Digital',
    logo: Hex,
    url: 'https://www.hexdigital.com',
    classes: 'h-6',
  },
  {
    name: 'Hoxton',
    logo: Hoxton,
    url: 'https://thehoxton.com',
    classes: 'h-6',
  },
  {
    name: 'Limesharp',
    logo: Limesharp,
    url: 'https://limesharp.net',
    classes: 'h-8',
  },
  {
    name: 'Matter of Form',
    logo: Mof,
    url: 'https://www.matterofform.com',
    classes: 'h-6',
  },
  {
    name: 'Parallel',
    logo: Parallel,
    url: 'https://studioparallel.co.uk',
    classes: 'h-7.5',
  },
  {
    name: 'Ragged Edge',
    logo: RaggedEdge,
    url: 'https://raggededge.com',
    classes: 'h-5.5',
  },
  {
    name: 'Rotate',
    logo: Rotate,
    url: 'https://studiorotate.com',
    classes: 'h-6',
  },
  {
    name: 'Someone',
    logo: Someone,
    url: 'https://someoneinlondon.com',
    classes: 'h-6',
  },
  {
    name: 'Structure',
    logo: Structure,
    url: 'https://www.designbystructure.com',
    classes: 'h-6',
  },
]
</script>

<template>
  <SectionStandard
    v-editable="block"
    :headline="block.headline"
    :headline-a11y="block.headline_a11y"
    :text="block.text"
    :background="background"
    class="overflow-x-hidden"
  >
    <div class="wrapper flex flex-col gap-gutter-md">
      <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-rows-2 lg:grid-cols-[clamp(250px,24%,300px)_auto_clamp(250px,24%,300px)]">
        <CardStandard
          class="sm:col-span-2 md:col-span-1 md:row-span-2"
          :text="block.about"
          :background="block.background === 'bg-primary' ? 'secondary' : 'primary'"
        >
          <template #bottom>
            <div class="flex flex-col gap-6 h-full place-content-between">
              <a
                class="mt-3"
                href="mailto:hello@michaelpumo.com"
                target="_blank"
              >
                <ButtonAppearance
                  text="Say hello"
                  size="small"
                />
              </a>

              <div>
                <ClientOnly>
                  <UiDate>
                    <template #date="{ weekday, day, month }">
                      <span class="text-18">
                        {{ weekday }}
                        {{ day }}
                        {{ month }}
                      </span>
                    </template>
                  </UiDate>

                  <UiClock>
                    <template #clock="{ time }">
                      <span class="flex flex-col">
                        <span class="text-30 text-tertiary">{{ time }}</span>
                      </span>
                    </template>
                  </UiClock>
                </ClientOnly>
              </div>
            </div>
          </template>
        </CardStandard>

        <CardStandard
          class="overflow-x-hidden sm:col-span-2 md:order-1 lg:order-0 lg:col-span-1 lg:col-start-2 lg:row-span-2"
          :padded="false"
          :background="block.background === 'bg-primary' ? 'secondary' : 'primary'"
        >
          <template #top>
            <UiCarousel
              :per-view="1"
              :spacing="0"
              controls-position="bottom"
              classes-controls="px-6 pb-6 @md/carousel:px-10 @md/carousel:pb-10 @xl/carousel:px-14 @xl/carousel:pb-14"
              classes-slide="px-6 pt-6 @md/carousel:px-10 @md/carousel:pt-10 @xl/carousel:px-14 @xl/carousel:pt-14"
              :items="block.testimonials"
            >
              <template #item="{ quote, name, subtext }">
                <CardTestimonial
                  :quote="quote"
                  :name="name"
                  :subtext="subtext"
                />
              </template>
            </UiCarousel>
          </template>
        </CardStandard>

        <CardStandard
          class="md:col-start-2 lg:col-start-3"
          headline="Web development"
          text="I’m a freelance digital web designer and frontend developer focusing on modern web technologies."
          :background="block.background === 'bg-primary' ? 'secondary' : 'primary'"
        >
          <template #bottom>
            <div class="flex flex-col h-full place-content-center -mx-6 mask-sides">
              <UiMarquee
                :items="technologies"
                classes-list="gap-2.5 pr-2.5"
              >
                <template #item="item">
                  <ElementCube
                    :name="item.name"
                    :logo="item.logo"
                  />
                </template>
              </UiMarquee>
            </div>
          </template>
        </CardStandard>

        <CardStandard
          class="md:col-start-2 lg:col-start-3"
          headline="Web design"
          text="Using tools such as Figma I can create bespoke pixel-perfect web design."
          :background="block.background === 'bg-primary' ? 'secondary' : 'primary'"
        >
          <template #bottom>
            <div class="flex flex-col -mx-6 min-h-20 h-full place-content-end">
              <UiCanvas />
            </div>
          </template>
        </CardStandard>
      </div>

      <div class="w-full mask-sides">
        <UiMarquee
          :items="clients"
          :speed="60"
          classes-list="gap-gutter-md pr-gutter-md"
        >
          <template #item="item">
            <NuxtLink
              :to="item.url"
              target="_blank"
              rel="noopener noreferrer"
              class="block w-auto opacity-20 hover:opacity-100 transition-opacity duration-200 ease-in-out"
              :class="item.classes"
            >
              <Component
                :is="item.logo"
                class="w-auto h-full text-tertiary"
              />

              <span class="sr-only">
                {{ item.name }}
              </span>
            </NuxtLink>
          </template>
        </UiMarquee>
      </div>
    </div>
  </SectionStandard>
</template>
