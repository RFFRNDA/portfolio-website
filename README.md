# Portfolio Rafif
Personal portfolio website showcasing projects, experience, certifications, & technical expertise. Modern dark theme with bold orange accents, bilingual UI (EN/ID), responsive design.

**Live:** https://rafiffernanda.vercel.app | **Deploy:** Vercel

## Features
- **3-Page Multi-Language Site** — Home, About, Project pages. UI labels & content auto-switch between English & Indonesian. Language preference persists via localStorage.
- **3D Interactive Element** — Lanyard card using React Three Fiber (hover interaction). Demonstrates depth & interactivity without bloat.
- **Responsive Grid Layouts** — ProjectCard grid, Experience timeline, CertificationCard gallery, CompetencyCard showcase. All collapse to single column on mobile.
- **Dark Theme + Warm Sections** — Primary dark (#0c1621) with warm accent (#d3d6cd) sections for visual rhythm. Accent orange (#c85314) for CTAs & highlights.
- **Bilingual Content Structure** — Single data source (projects.ts, experiences.ts, certifications.ts). Localized fields (`title`, `description`) fetch per active language. Type-safe via TypeScript interfaces.
- **No External i18n Library** — Custom LanguageContext + simple `t()` helper. Lightweight for portfolio scope. Istilah teknis (Project, CV, Stack) stay English.
- **Icon System** — Lucide React for UI icons, React Icons for social/brand icons. No emojis.
- **SEO-Ready Structure** — React Router for clean URLs (/home, /about, /projects). Type-safe route handling.

## Tech Stack
- **Frontend** — React 18, TypeScript 6
- **Build** — Vite 8 (fast bundler, HMR dev)
- **Styling** — Tailwind CSS 3, PostCSS, Autoprefixer
- **Routing** — React Router 7
- **3D Graphics** — Three.js, React Three Fiber, React Three Drei
- **Icons** — Lucide React, React Icons
- **Linting** — Oxlint
- **Deployment** — Vercel (config: vercel.json)

## Design System
- **Colors:** Dark base #0c1621, warm base #d3d6cd, accent orange #c85314
- **Typography:** Space Grotesk (headings), Inter (body)
- **Spacing:** Tailwind defaults, section padding py-16/py-24
- **Component Radius:** Cards rounded-xl (12px), buttons rounded-lg (8px)
- **Icons:** Lucide for UI, React Icons for socials
See `DESIGN.md` for full design spec & component details.

## Architecture Notes
- **Single Source of Truth** — Project/experience/certification data lives in `data/*.ts`. No duplicates per language.
- **Custom i18n** — LanguageContext provides global `language` state + setter. Helper `t()` fetches UI labels. Keeps bundle small.
- **No Route-Based Language** — Language switcher changes context, not URL. `/about` stays `/about` for both EN & ID.
- **Responsive First** — All grids collapse to 1 col on mobile. No horizontal overflow.
- **3D Integration** — React Three Fiber setup in `Lanyard` component. Loads 3D model (card.glb) with fallback PNG preview.
See `ARCHITECTURE.md` for full technical decisions & data flow diagrams.
See `DESIGN.md` for UI component specs & design do's/don'ts.

## Status
✅ Complete. Deployed & live.
- Content-complete: projects, experience, certifications, skills
- Bilingual UI: English & Indonesian
- Responsive: mobile, tablet, desktop
- 3D element: interactive lanyard card
- Performance: optimized build, no external i18n bloat
    