---
name: Obsidian Telemetry
colors:
  surface: '#0f131c'
  surface-dim: '#0f131c'
  surface-bright: '#353943'
  surface-container-lowest: '#0a0e17'
  surface-container-low: '#181b25'
  surface-container: '#1c1f29'
  surface-container-high: '#262a34'
  surface-container-highest: '#31353f'
  on-surface: '#dfe2ef'
  on-surface-variant: '#d8c3ad'
  inverse-surface: '#dfe2ef'
  inverse-on-surface: '#2c303a'
  outline: '#a08e7a'
  outline-variant: '#534434'
  surface-tint: '#ffb95f'
  primary: '#ffc174'
  on-primary: '#472a00'
  primary-container: '#f59e0b'
  on-primary-container: '#613b00'
  inverse-primary: '#855300'
  secondary: '#cfffdd'
  on-secondary: '#003920'
  secondary-container: '#03f59b'
  on-secondary-container: '#006b41'
  tertiary: '#b6ccff'
  on-tertiary: '#002e6a'
  tertiary-container: '#8ab0ff'
  on-tertiary-container: '#00408f'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffddb8'
  primary-fixed-dim: '#ffb95f'
  on-primary-fixed: '#2a1700'
  on-primary-fixed-variant: '#653e00'
  secondary-fixed: '#53ffab'
  secondary-fixed-dim: '#00e38f'
  on-secondary-fixed: '#002111'
  on-secondary-fixed-variant: '#005231'
  tertiary-fixed: '#d8e2ff'
  tertiary-fixed-dim: '#adc6ff'
  on-tertiary-fixed: '#001a42'
  on-tertiary-fixed-variant: '#004395'
  background: '#0f131c'
  on-background: '#dfe2ef'
  surface-variant: '#31353f'
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 52px
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 16px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0em
  metric-xl:
    fontFamily: JetBrains Mono
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.03em
  metric-lg:
    fontFamily: JetBrains Mono
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.02em
  body-lg:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: -0.01em
  body-md:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0em
  body-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '400'
    lineHeight: 14px
    letterSpacing: 0.02em
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '500'
    lineHeight: 12px
    letterSpacing: 0.08em
  code-telemetry:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '400'
    lineHeight: 12px
    letterSpacing: 0.04em
spacing:
  gutter: 0.75rem
  gutter-desktop: 1rem
  margin: 0.75rem
  margin-desktop: 1.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1rem
  space-xl: 1.5rem
  space-2xl: 2rem
---

## Brand & Style

This design system embodies mathematical futurism, high-frequency execution speed, and institutional-grade algorithmic discipline. It merges extreme data density with uncompromising clarity, targeting quantitative traders, hedge fund operations desks, and low-latency algorithmic specialists.

The aesthetic fuses **brutalist architecture**—defined by absolute 0px border radii, razor-sharp structural wireframes, and hairline grids—with **tactical cyber-institutional telemetry**. Visual density delivers maximum informational payload per pixel. The interface eliminates decorative frivolity in favor of functional precision: translucent obsidian layers, luminous status emitters, and strict visual hierarchies that evoke mission-critical trading desks and aerospace avionics.

## Colors

The palette operates in strict dark mode, anchored by deep obsidian substrates and driven by functional signaling vectors.

- **Obsidian Substrates (`neutral_color_hex: #0A0E17`)**: Base viewport anchor. Paired with elevated container tiers `#111827` and `#1E293B` to define structural depth without visual bloat.
- **Amber Core (`primary_color_hex: #F59E0B`)**: Represents VIP tier routing, mission-critical warnings, high-water marks, and mathematical thresholds. Used at full saturation for alerts and muted alpha channels for structural glows.
- **Neon Emerald (`secondary_color_hex: #00F59B`)**: Signals alpha generation, executing orders, profitable PnL vectors, and operational uptime.
- **Telemetry Cyan (`tertiary_color_hex: #3B82F6`)**: Dedicated to algorithmic routing paths, neutral liquidity pools, and network heartbeat diagnostics.
- **Drawdown Crimson (`#EF4444`)**: Uncompromising indicator for capital risk, stop-loss triggers, and order rejection.

### Surface Color Logic
- **Canvas Base**: `#0A0E17`
- **Surface Level 1**: `#111827` (80% opacity with backdrop filter)
- **Surface Level 2**: `#182234`
- **Hairline Border Matrix**: `rgba(245, 158, 11, 0.15)` for highlighted panels; `rgba(255, 255, 255, 0.08)` for baseline grids.

## Typography

The typography engine is constructed around absolute spatial discipline and visual parsing speed.

- **Space Grotesk** serves as the institutional display and header voice. Its raw, geometric anatomy reinforces architectural scale, technical rigor, and industrial power.
- **JetBrains Mono** powers all tabular data, quantitative telemetry, parameters, interactive elements, and running body copy. Monospaced rendering ensures numerical values align across order books, microsecond execution timestamps, and real-time PnL grids without jitter or lateral layout shift.
- **Numerical Formatting**: Tabular figures must always maintain equal character widths. Uppercase styling is strictly enforced for metadata tags (`label-caps`) to maintain industrial compliance hierarchy.

## Layout & Spacing

The layout is built upon an ultra-dense, 12-column dynamic modular telemetry frame.

- **Screen Efficiency**: The grid spans 100% of the viewport viewport height and width without extraneous decorative borders. Margins on desktop remain compact (`1.5rem`), transitioning to `0.75rem` on mobile to maximize horizontal charting and multi-depth DOM visibility.
- **Density Protocol**: Spacing variables focus on low-pixel tolerances. Padding levels scale from `space-xs` (4px) to `space-md` (12px) inside modules to support simultaneous order book streams, chart canvases, and algorithmic logs on a single screen.
- **Responsive Adaptations**:
  - **Desktop (1440px+)**: 12-column persistent multi-dock workspace.
  - **Tablet (768px - 1439px)**: 8-column layout with collapsable analytical drawers.
  - **Mobile (< 768px)**: 4-column single-stream telemetry pane utilizing swipeable full-bleed horizontal tabs.

## Elevation & Depth

This system avoids blurred drop shadows and organic layered elevation. Depth is achieved via **tonal stratification, hairline wireframes, and optical light emitters**.

- **Level 0 (Floor Canvas)**: Deep slate `#0A0E17` overlaid with a subtle 32px repeating isometric grid in `rgba(255, 255, 255, 0.02)`.
- **Level 1 (Docked Containers & Modules)**: Flat `#111827` surface framed by a 1px solid border of `rgba(255, 255, 255, 0.08)`.
- **Level 2 (Active Focus & Flyouts)**: Elevated obsidian `#182234` utilizing a crisp 1px perimeter border of `rgba(245, 158, 11, 0.4)` with an ambient amber corner accent (`0 0 12px rgba(245, 158, 11, 0.12)`).
- **Glass Surfaces**: Micro-frosted structural glass applied only to floating modal telemetry HUDs: `background: rgba(17, 24, 39, 0.75)`, `backdrop-filter: blur(12px)`.

## Shapes

The shape architecture operates on **strict mathematical brutalism**: an absolute corner radius of **0px (`roundedness: 0`)**.

Curves, pill tags, and soft radii are forbidden. Every element—buttons, metric cards, dropdown menus, charting viewports, and modals—terminates in razor-sharp 90-degree right angles. This geometry reinforces precision engineering, screen-edge snapping, and institutional software utility. Visual division relies entirely on continuous 1px hairline rules, orthogonal grids, and clipped corner bevels for data readouts.

## Components

### Buttons
- **Primary Execution (Long / Buy)**: Solid emerald fill `#00F59B`, text `#0A0E17`, font `JetBrains Mono` bold, uppercase, 0px radius. Hover: `#10B981` with inner glow `inset 0 0 8px rgba(255, 255, 255, 0.4)`. Active: micro-scale shift (`translateY(1px)`).
- **Secondary Execution (Short / Sell)**: Transparent fill, 1px solid `#EF4444`, text `#EF4444`. Hover: background `rgba(239, 68, 68, 0.12)`.
- **Institutional VIP / Action**: Solid amber fill `#F59E0B`, text `#0A0E17`. Hover: `#D97706`.

### Cards & Telemetry Containers
- Zero border radius. Background `#111827`. Structural 1px border `rgba(255, 255, 255, 0.08)`.
- Header bar: Height 28px, background `#0D131F`, uppercase 10px monospace title with 4px amber square indicator on active state.

### Input Fields & Parameter Controls
- 0px radius. Hairline border `rgba(255, 255, 255, 0.14)`, background `#0A0E17`, text `#F9FAFB` in `JetBrains Mono`.
- Active focus state: 1px solid `#F59E0B` with subtle corner accent lines. Zero soft box-shadows.

### Checkboxes & Radios
- Square 12x12px boxes, 0px radius. Unchecked: 1px solid `rgba(255, 255, 255, 0.2)`. Checked: `#F59E0B` solid fill with black inset crosshair glyph.

### Status Chips & Tag Metrics
- Monospaced, zero border radius, padded 2px 6px.
- Live Status: Background `rgba(0, 245, 155, 0.1)`, 1px border `rgba(0, 245, 155, 0.3)`, text `#00F59B`, with pulsing 3x3px square node.
- VIP Performance: Background `rgba(245, 158, 11, 0.1)`, 1px border `rgba(245, 158, 11, 0.3)`, text `#F59E0B`.

### Financial Data Tables & Order Book
- Zero-gap rows, alternating zebra lines with `#0D121D`.
- Right-aligned numeric metrics in `JetBrains Mono` with explicit tab sizing.
- Depth charts rendered as low-opacity horizontal bar backgrounds (`rgba(0, 245, 155, 0.15)` for bids, `rgba(239, 68, 68, 0.15)` for asks).