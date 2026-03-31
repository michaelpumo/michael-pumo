# Michael Pumo

Personal portfolio website of **Michael Pumo** — a freelance digital web designer and frontend developer crafting modern, performant web experiences.

🌐 [michaelpumo.com](https://michaelpumo.com)

## About

This repository contains the source code for my personal portfolio. It showcases selected work, writing, and experiments — designed and built entirely by me. The site is server-side rendered for performance and SEO, with smooth page transitions and scroll-driven animations throughout.

## Tech Stack

| Category | Technology |
| --- | --- |
| **Framework** | [Nuxt 4](https://nuxt.com) (Vue 3) |
| **Language** | [TypeScript](https://www.typescriptlang.org) |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com) |
| **CMS** | [Storyblok](https://www.storyblok.com) |
| **Animations** | [GSAP](https://gsap.com) |
| **Smooth Scroll** | [Lenis](https://lenis.darkroom.engineering) |
| **Carousel** | [Keen Slider](https://keen-slider.io) |
| **Icons** | [Lucide](https://lucide.dev) |
| **State** | [Pinia](https://pinia.vuejs.org) |
| **Analytics** | [Plausible](https://plausible.io) |
| **Hosting** | [Netlify](https://www.netlify.com) |
| **Design** | [Figma](https://www.figma.com) |

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint
npm run lint

# Lint and auto-fix
npm run lint:fix
```

## Project Structure

```
app/
├── assets/        # CSS, icons, logos, decorations
├── components/    # Vue components (blocks, cards, effects, UI)
├── composables/   # Reusable composition functions
├── pages/         # File-based routing
├── plugins/       # Nuxt plugins
├── stores/        # Pinia stores
├── storyblok/     # Storyblok component definitions
├── utils/         # Helper functions
public/            # Static assets (fonts, audio, favicons)
server/            # Server API routes (e.g. sitemap)
types/             # TypeScript type declarations
```

## Code Quality

- **Linting** — ESLint with [@antfu/eslint-config](https://github.com/antfu/eslint-config) and Nuxt integration
- **Commits** — Enforced via [Commitlint](https://commitlint.js.org) (Conventional Commits) and [Husky](https://typiez.github.io/husky) git hooks

## Contact

If you'd like to get in touch, visit [michaelpumo.com](https://michaelpumo.com) for contact details. You might also be interested in my digital studio **[ditta](https://ditta.studio)**.
