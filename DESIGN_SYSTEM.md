# Design System

Generated with the bundled `ui-ux-pro-max` skill for the "developer portfolio" sector,
then tuned for restraint. This is the source of truth for tokens. Edit the accent in
`config/site.config.ts`; everything else flows from these values.

## Direction

Monochrome zinc neutrals with a single blue accent. Editorial, technical, premium.
The brief from the skill was explicit: avoid corporate templates and generic layouts.
Motion is purposeful, never decorative.

## Color tokens

| Token | Light | Dark | Use |
|-------|-------|------|-----|
| background | `#FAFAFA` | `#09090B` | page base |
| foreground | `#09090B` | `#FAFAFA` | body text |
| primary | `#18181B` | `#FAFAFA` | headings, strong surfaces |
| secondary | `#3F3F46` | `#A1A1AA` | secondary text |
| muted | `#E8ECF0` | `#18181B` | subtle surfaces |
| border | `#E4E4E7` | `#27272A` | hairlines, card edges |
| accent | `#2563EB` | `#3B82F6` | links, CTAs, focus ring |
| destructive | `#DC2626` | `#EF4444` | errors |

Accent is one variable. Change it in `config/site.config.ts` to rebrand.

## Typography

- Display / headings: **Space Grotesk** (technical, distinctive, not the default Inter look)
- Body / UI: **Inter** (clean, legible, premium)
- Scale follows an 8pt rhythm. No random spacing.

## Motion (restrained)

- Scroll reveal via Intersection Observer, 300 to 400ms ease
- Hover transitions 150 to 300ms
- Hero word rotation (typing)
- Card hover lift, staggered skill reveal, top scroll-progress bar
- One subtle hero treatment, no parallax stacks, no autoplay, no heavy Lottie
- `prefers-reduced-motion` disables non-essential motion

## Non-negotiables (from the skill checklist)

- No emoji as icons. Use Lucide SVG icons.
- `cursor-pointer` on every clickable element.
- Visible focus states for keyboard navigation.
- Text contrast 4.5:1 minimum in both modes.
- Responsive at 375, 768, 1024, 1440.
