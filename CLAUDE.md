# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React TypeScript application built with Vite featuring an animated landing page for "BAMBOY". The application showcases complex animations, parallax effects, and interactive elements using Framer Motion.

## Development Commands

### Core Development
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint on all TypeScript/React files

### Testing
The project currently has no test framework configured. When adding tests, consider:
- Installing Jest + React Testing Library for unit tests
- Adding Playwright or Cypress for E2E testing of animations

## Technology Stack

### Core Framework
- **React 18.3.1** with TypeScript
- **Vite** as build tool and dev server
- **Tailwind CSS** for styling with PostCSS processing

### Animation & Interaction
- **Framer Motion 11.0.8** - Primary animation library for:
  - Scroll-based animations and parallax effects
  - Complex transforms (3D rotations, scaling, positioning)
  - Spring physics and gesture handling
  - Page transitions and element reveals
- **React Intersection Observer 9.8.1** - Optimized viewport detection for animations
- **Lucide React 0.344.0** - Icon library for UI elements

## Architecture

### Component Structure
The application follows a component-based architecture with clear separation of concerns:

```
src/
├── components/           # Reusable UI components
│   ├── AnimatedTitle.tsx    # 3D letter animation with scroll effects
│   ├── FloatingLogo.tsx     # Scroll-responsive floating logo
│   ├── ParallaxElement.tsx  # Reusable parallax wrapper
│   ├── Quote.tsx           # Animated text reveal component
│   └── Section.tsx         # Full-height section wrapper
├── App.tsx              # Main application component
└── main.tsx            # React root and app mounting
```

### Animation Patterns

#### Scroll-Based Animations
- Uses `useScroll()` hook to track scroll progress
- `useTransform()` maps scroll progress to animation values
- `useSpring()` adds physics-based smoothing to movements

#### 3D Transforms
- CSS `perspective` and `transform-style: preserve-3d` for 3D effects
- Complex letter animations in `AnimatedTitle` with individual transforms
- Scroll velocity-based rotation and positioning in `FloatingLogo`

#### Performance Optimizations
- `useVelocity()` for scroll-based interactions
- `viewport={{ once: true }}` for one-time animations
- Spring configurations tuned for smooth 60fps performance

### Key Components

#### AnimatedTitle.tsx
- Complex 3D letter animation system
- Individual transforms per letter (position, rotation, blur, opacity)
- Spring physics for elastic movement
- Scroll-driven 3D dispersion effect

#### FloatingLogo.tsx
- Advanced scroll-position tracking
- Viewport-responsive sizing (30% of width, max 300px)
- Velocity-based micro-animations
- Manual hide/show state management
- Appears only at 95% scroll progress

#### ParallaxElement.tsx
- Reusable parallax wrapper with configurable speed
- Uses scroll-target optimization for performance
- Supports negative speeds for reverse parallax

## Styling Approach

### Tailwind Configuration
- Standard Tailwind setup with PostCSS
- Gradient backgrounds with multiple color stops
- Responsive typography and spacing
- Custom blend modes and filters for visual effects

### Animation-Specific Styling
- CSS transforms coordinated with Framer Motion
- `mix-blend-mode: lighten` for logo overlay effects
- Backdrop filters and drop shadows for depth
- Responsive font sizing (text-6xl → text-8xl)

## Configuration Files

### Build Configuration
- **vite.config.ts**: Basic React plugin setup with lucide-react optimization exclusion
- **tsconfig.json**: Project references to separate app and node configurations
- **tailwind.config.js**: Standard Tailwind setup scanning all source files

### Code Quality
- **eslint.config.js**: TypeScript ESLint with React hooks and React Refresh plugins
- Flat config format with modern ESLint standards
- React-specific rules for hooks and component exports

## Development Notes

### Animation Performance
- All animations use hardware acceleration via CSS transforms
- Spring configurations optimized for smooth performance
- Intersection Observer used to trigger animations only when visible

### Responsive Design
- Mobile-first approach with responsive typography
- Viewport-based sizing for interactive elements
- Touch-friendly hover states and interactions

### Asset Management
- Logo loaded from external CDN (https://bamboy.de/Bamboy-Logo.png)
- Vite handles static asset optimization
- Icons provided by Lucide React icon library

## Common Development Patterns

### Adding New Animated Components
1. Import required Framer Motion hooks (`motion`, `useScroll`, `useTransform`)
2. Use `useInView` from react-intersection-observer for viewport-based animations
3. Apply spring configurations for smooth physics-based movement
4. Consider scroll-based interactions for parallax effects

### Scroll Animation Setup
```tsx
const { scrollYProgress } = useScroll({
  target: ref,
  offset: ["start end", "end start"]
});
const y = useTransform(scrollYProgress, [0, 1], [startValue, endValue]);
```

### Spring Physics Configuration
```tsx
const springConfig = {
  stiffness: 100,    // How quickly animation responds
  damping: 30,       // How much bounce/oscillation
  mass: 1           // Weight of the animated element
};
```