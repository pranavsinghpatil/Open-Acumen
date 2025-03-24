# Phase 2: Design Phase

## 1. Color Palette

### Primary Colors
- **Background**: `#0A0A0A` (Deep black)
- **Surface**: `#1A1A1A` (Dark gray)
- **Accent**: `#7C3AED` (Purple - kimi.ai's brand color)
- **Secondary Accent**: `#3B82F6` (Blue)

### Text Colors
- **Primary Text**: `#FFFFFF` (White)
- **Secondary Text**: `#A3A3A3` (Light gray)
- **Muted Text**: `#6B7280` (Gray)
- **Link Text**: `#7C3AED` (Purple)

### UI Elements
- **Border**: `#2D2D2D` (Dark gray)
- **Hover State**: `#2A2A2A` (Slightly lighter dark gray)
- **Input Background**: `#1A1A1A` (Dark gray)
- **Success**: `#10B981` (Green)
- **Error**: `#EF4444` (Red)

## 2. Typography

### Font Family
- **Primary Font**: Inter (Modern, clean sans-serif)
- **Secondary Font**: Space Grotesk (For headings)
- **Code Font**: JetBrains Mono (For code snippets)

### Font Sizes
```css
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
--text-5xl: 3rem;      /* 48px */
```

### Line Heights
```css
--leading-tight: 1.25;
--leading-normal: 1.5;
--leading-relaxed: 1.75;
--leading-loose: 2;
```

## 3. Component Design Specifications

### Navigation Bar
- Height: 70px
- Background: Surface color with blur effect
- Fixed position
- Mobile breakpoint: 768px
- Transparent to solid transition on scroll

### Hero Section
- Full viewport height
- Gradient background
- Animated background elements
- CTA buttons with hover effects
- Responsive text scaling

### Feature Cards
- Background: Surface color
- Border radius: 12px
- Padding: 24px
- Hover animation: Scale 1.02
- Shadow: Subtle glow effect

### Chat Interface
- Width: 400px (desktop)
- Height: 600px
- Message bubbles:
  - User: Accent color
  - AI: Surface color
- Input area: Fixed bottom
- Loading animation: Pulse effect

### Footer
- Background: Surface color
- Grid layout: 4 columns (desktop)
- Responsive: 2 columns (tablet), 1 column (mobile)

## 4. Spacing System
```css
--spacing-1: 0.25rem;   /* 4px */
--spacing-2: 0.5rem;    /* 8px */
--spacing-3: 0.75rem;   /* 12px */
--spacing-4: 1rem;      /* 16px */
--spacing-6: 1.5rem;    /* 24px */
--spacing-8: 2rem;      /* 32px */
--spacing-12: 3rem;     /* 48px */
--spacing-16: 4rem;     /* 64px */
--spacing-24: 6rem;     /* 96px */
```

## 5. Animation Specifications

### Transitions
- Duration: 200ms
- Timing: cubic-bezier(0.4, 0, 0.2, 1)
- Properties: opacity, transform, background-color

### Hover Effects
- Scale: 1.02
- Brightness: 1.1
- Shadow: 0 4px 12px rgba(0, 0, 0, 0.2)

### Loading States
- Skeleton loading: Pulse animation
- Button loading: Spinner animation
- Page transitions: Fade effect

## 6. Responsive Breakpoints
```css
--mobile: 640px;
--tablet: 768px;
--laptop: 1024px;
--desktop: 1280px;
--widescreen: 1536px;
```

## 7. Accessibility Guidelines

### Color Contrast
- Minimum contrast ratio: 4.5:1 for normal text
- Minimum contrast ratio: 3:1 for large text
- Focus states: High contrast outline

### Interactive Elements
- Minimum touch target size: 44x44px
- Focus visible indicators
- Hover and active states

### Screen Reader Support
- ARIA labels
- Semantic HTML
- Skip navigation link
- Alt text for images

## 8. Design Assets

### Icons
- Line icons for UI elements
- Filled icons for active states
- Size variants: 16px, 20px, 24px

### Illustrations
- Custom dark theme illustrations
- SVG format for scalability
- Animated where appropriate

### Images
- Optimized for dark theme
- WebP format with fallbacks
- Lazy loading implementation

## Next Steps
1. Create design system documentation
2. Set up Tailwind configuration
3. Create component library
4. Begin implementation of base components 