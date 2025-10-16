# Mohamed Oulahguine - Modern World Website

## Overview

Modern World is a polished, accessible, and performant single-page portfolio experience showcasing modern and futuristic architecture. It demonstrates best practices in Next.js App Router, accessibility (WCAG 2.1 AA), SEO (OG/Twitter, canonical, robots, sitemap), responsive design, animation with reduced-motion support, and asset optimization.

Live URL: https://modernworldx.netlify.app/

## Tech Stack

- Next.js 15 (App Router)
- React 19
- TypeScript (strict mode)
- Tailwind CSS v4 (with global utility augmentations)
- Framer Motion (animations)
- next/font (local fonts)
- next/image (image optimization)

## Project Structure

```
app/
  components/
    Header.tsx
    Footer.tsx
  sections/
    Hero.tsx
    Discover.tsx
    Futuristic.tsx
    Testimonials.tsx
  ui/
    ExploreButton.tsx
  layout.tsx
  page.tsx
  robots.ts
  sitemap.ts
public/
  images/
    hero/hero.svg
    og/modern-world-og.jpg
    architectures/... (webp)
    Buildings/... (webp)
```

## Sections Overview

- Header: Primary navigation with active state, keyboard/focus support, and IntersectionObserver for section highlighting.
- Hero: Large introductory heading and copy with reduced-motion-aware reveals and an Explore CTA.
- Discover: Optimized imagery (next/image) describing architectural aesthetics.
- Futuristic: A11y-friendly carousel (edge cloning), keyboard-visible controls, descriptive captions.
- Testimonials: Accessible blockquotes with decorative imagery hidden from assistive tech.
- Footer: Minimal, responsive footer with copyright.

## Technical Implementation

- App Router with `force-static` for the landing page.
- `layout.tsx` includes:
  - Typed Next Metadata (title template, description, OG/Twitter, canonical)
  - Local fonts via next/font (weights 400/600/700)
  - JSON-LD Website schema via `next/script`
  - Skip link targeting `#main-content`
- `Header.tsx`:
  - IntersectionObserver to derive active section
  - `aria-current="page"` on active link
  - Proper list semantics (`li > Link`)
- `Futuristic.tsx` carousel:
  - Edge cloning only ([last, ...items, first]) for seamless loop
  - Focus-visible opacity for controls
  - Reduced-motion-aware transitions
- Images:
  - `next/image` with responsive `sizes`, `fill`, decorative alt where appropriate
  - Hero background upgraded to `next/image` with `priority`

## Performance Optimizations

- Image optimization with responsive sizing
- Fonts reduced to commonly used weights (400/600/700) and preloaded
- Reduced DOM in carousel (edge clones only)
- Reduced-motion support to avoid unnecessary work for sensitive users
- Static generation for the homepage

## Accessibility Features

- Landmarks: `header`, `main` (`id="main-content"`), and `footer`
- Skip link: visible on focus, jumps to main content
- Headings: single H1 in Hero; H2s per section
- Keyboard support: visible focus styles; carousel controls visible on focus
- Alt text: descriptive where meaningful; empty alt for decorative images
- Reduced motion: respects `prefers-reduced-motion` across animated components
- Color contrast: balanced on light backgrounds

## Responsive Design

- Tailwind utility classes scale typography and layout from mobile to desktop
- Images adapt with `sizes` and `object-fit`

## Setup Instructions

1. Install dependencies:

```bash
npm install
```

2. Run the dev server:

```bash
npm run dev
```

3. Build and start:

```bash
npm run build && npm start
```

## Deployment

- Optimized for static hosting via Next.js output. Deployed on Netlify at `https://modernworldx.netlify.app/`.
- Includes `robots.ts` and `sitemap.ts` for SEO.

## Future Features

- Automated Lighthouse/aXe CI checks
- Image CDN and AVIF fallbacks where beneficial
- Internationalization (i18n)
