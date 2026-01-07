# iraz.site Website Project Summary

## Project Overview
- **Repository**: https://github.com/sorin-costea/iraz.site.git
- **Type**: Multi-language static website with reusable templates.
- **Technology**: Pure HTML5, CSS3, JavaScript (ES6+).

## File Structure
- **Root**: `index.html` (Landing), `header.html`, `footer.html`.
- **Languages**: `de/`, `en/`, `es/`, `hu/`, `ro/` (each contains `index.html`).
- **Assets**: `assets/site.css`, `assets/site.js`.
- **Images**: `img/carousel/` (5 images), team profile images, and `logo-weiss.png`.

## Color Scheme
- **Primary Color**: `#881017` (Burgundy)
- **Header**: `rgba(136, 16, 23, 0.8)` (Semi-transparent)
- **Footer**: `rgba(136, 16, 23, 1.0)` (Solid)
- **Accents**: Light gray (`#e8e8e8`) for language bar and secondary footer.

## Layout Design

### Header & Navigation
1. **Language Bar**: Top bar with flags (DE, EN, ES, RO, HU) from `flagcdn.com`.
2. **Main Header**: Positioned at `top: 40px`. Logo on left, menu on right.
3. **Mobile Menu**: Hamburger toggle with "click outside to close" logic.

### Main Content
- **Carousel**: 500px height hero section. Images cycle with smooth fade transitions.
- **Dynamic Text**: Centered overlay text with drop shadow.
- **Content Blocks**: Flexbox-based layout for text and images, responsive for mobile.

## JavaScript Features

### Template System
- **Dynamic Loading**: `fetch()` and `DOMParser` inject `header.html` and `footer.html`.
- **Path Awareness**: Relative paths (`../`) used in subdirectories to link shared assets.

### Components
- **Carousel**: Auto-advance (4s), keyboard support (arrows), and pause on hover.
- **Back-to-Top**: Fixed button appearing after 300px scroll with smooth behavior.

## Current Status
- **Structure**: Fully implemented multi-language folders.
- **Responsive**: Logo sizing and layout optimized for Desktop, Tablet, and Mobile.
- **Assets**: All team images (`ana.png`, `claudia.png`, etc.) and venue photos integrated.