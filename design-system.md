# OpenACM Premium Design System

## Overview
A world-class UI/UX system inspired by Vercel, Cursor.sh, and Anthropic. Dark, sophisticated, high-contrast, with smooth animations and premium aesthetics.

## Color Palette

### Base
- **Background Primary**: #050505 
- **Background Secondary**: #0A0A0A
- **Surface / Cards**: #111113
- **Surface Elevated**: #1A1A1F

### Accents & Brand
- **Primary**: #6366F1 (Indigo 500)
- **Primary Hover**: #818CF8
- **Accent**: #22D3EE (Cyan 400)
- **Accent 2**: #A78BFA (Violet 400)
- **Success**: #4ADE80
- **Warning**: #FACC15

### Text
- **Primary Text**: #F4F4F5 (zinc-100)
- **Secondary Text**: #A3A3A3 (zinc-400)
- **Muted Text**: #71717A (zinc-500)

### Borders & Dividers
- **Border**: #27272A (zinc-800)
- **Border Subtle**: #3F3F46

## Typography

### Font Stack
- **Headings**: `system-ui, -apple-system, 'Inter', sans-serif` (with tracking -0.02em for large titles)
- **Body**: `Inter, system-ui, sans-serif`
- **Mono**: `'JetBrains Mono', ui-monospace, monospace`

### Scale
- **Display 1 (Hero)**: 5.5rem (88px) / 1.05 / font-bold
- **Display 2**: 3.5rem (56px)
- **H1**: 2.75rem (44px)
- **H2**: 2rem (32px)
- **H3**: 1.5rem (24px)
- **Body Large**: 1.125rem (18px)
- **Body**: 1rem (16px)
- **Small**: 0.875rem (14px)

## Spacing & Layout
- Container max-width: 1280px
- Section padding: 8rem vertical (128px)
- Card padding: 2.5rem
- Border radius:
  - Default: 1.5rem (24px)
  - Pill buttons: 9999px
  - Inputs: 0.75rem

## Effects & Glassmorphism
- Cards use `backdrop-blur-2xl bg-white/[0.015] border border-white/10`
- Subtle inner shadows and glows on interactive elements
- Hover glow: `shadow-[0_0_35px_-5px] shadow-indigo-500/30`

## Animations (Framer Motion)
- **Fade In Up**: y: 40 → 0, opacity 0 → 1, duration 0.7, ease cubic
- **Stagger Children**: 0.1s delay between items
- **Button Tap**: scale 0.97
- **Hover Lift**: scale 1.02, transition 0.2s
- **Scroll Trigger**: Use whileInView with viewport once:true
- **Terminal Cursor**: Blinking caret animation
- **Agent Orb**: Floating with gentle rotate and scale pulse

## Key Sections Design

### 1. Navigation
- Fixed top nav with logo left, links center, "Launch App" & "GitHub" right
- On scroll: background becomes glass with blur
- Mobile: hamburger with slide in menu

### 2. Hero Section
- Massive headline with gradient text: "Control Your Computer With AI"
- Subheadline: "OpenACM is an autonomous agent system that understands natural language and executes complex computer tasks."
- Dual CTAs: "Get Started Instantly" (primary gradient button), "Watch 2min Demo" (secondary)
- Visual: Right side features a floating interactive terminal window with live-like command demo + glowing orb representing the AI agent
- Background: very subtle animated grid pattern or noise

### 3. Library Showcase
- "Core Capabilities" heading
- Horizontal scroll or grid of feature cards with icons (use Lucide icons)
- Each card has hover that expands slightly and shows example prompt -> action
- Section "The OpenACM Library" with npm badge and interactive code snippet component that copies on click

### 4. How It Works / Installation
- Beautiful step-by-step with numbered circles
- Terminal simulator that "types" the install commands on scroll
- One-click install buttons that simulate copying the command

### 5. Features Grid
- 3-column layout on desktop
- Icons with gradient backgrounds

### 6. Footer
- Clean with links, copyright, "Made with ❤️ for autonomous agents"

## Micro-interactions
- Magnetic button effect (advanced)
- Text highlight on hover for links
- Progress bar for install steps
- Smooth page scroll with lenis or native
- Loading states with skeleton for any dynamic parts

## Accessibility
- WCAG 2.2 AA compliant
- High contrast ratios
- Keyboard navigation
- Screen reader labels
- Reduced motion preference respected

This design system will be implemented by the Frontend Architect using Tailwind and Framer Motion.
