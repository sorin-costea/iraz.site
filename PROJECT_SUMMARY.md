# iraz.site Website Project Summary

## Project Overview
- **Repository**: https://github.com/sorin-costea/iraz.site.git
- **Type**: Static website with reusable header/footer templates
- **Technology**: Pure HTML, CSS, JavaScript (no frameworks/build tools)

## File Structure
```
/workspace/
├── index.html              # Main page with carousel
├── header.html             # Reusable header template (proper HTML doc)
├── footer.html             # Reusable footer template (proper HTML doc)
├── assets/
│   ├── site.css           # All styling
│   └── site.js            # JavaScript functionality
└── img/
    ├── carousel/          # 5 carousel images
    │   ├── bridge.jpg
    │   ├── bucharest.jpg
    │   ├── budapest.jpg
    │   ├── helsinki.jpg
    │   └── madrid.jpg
    └── logo-weiss.png      # Main logo (1240x340px)
```

## Color Scheme
- **Primary Color**: #881017 (Dark burgundy/wine red)
- **Header Background**: `rgba(136, 16, 23, 0.8)` - 80% opacity (transparent)
- **Footer Background**: `rgba(136, 16, 23, 1.0)` - 100% opacity (solid)
- **Text Colors**: White on colored backgrounds, rgba(136, 16, 23, 1.0) for headings
- **Language Bar**: Light gray (#e8e8e8)
- **Bottom Footer**: Light gray (#e8e8e8)

## Layout Design

### Header Structure
1. **Light Gray Language Bar** - Fixed position, top: 0
   - 5 country flags: DE, EN, ES, RO, HU (all link to index.html)
   - Uses flagcdn.com for flag images

2. **Brown/Red Header Bar** - Fixed position, top: 40px, 80% transparent
   - Logo on left (responsive sizing)
   - Navigation menu on right: A, B, C, D (all link to index.html)
   - Mobile hamburger menu for narrow screens

### Main Content
- **Carousel Container**: 500px height, extends under transparent header
- **Carousel**: 5 images with smooth fade transitions (4-second intervals)
- **Carousel Text**: "My Website" overlay, centered, white with shadow
- **Content Section**: Text with image, light gray background

### Footer Structure
1. **Brown/Red Footer**: Logo + contact information
2. **Light Gray Bottom Footer**: Policy links

## Responsive Logo Sizing
- **Desktop**: 120px height (header), 100px height (footer)
- **Tablet (≤768px)**: 60px height (header), 50px height (footer)
- **Mobile (≤480px)**: 45px height (header), 40px height (footer)
- **Aspect Ratio**: Maintained automatically with `width: auto`

## JavaScript Features

### Header/Footer Loading
- `loadHeaderFooter()` function uses fetch() to load templates
- `extractBodyContent()` function extracts only body content from HTML docs
- Templates are proper HTML documents for server compatibility

### Mobile Menu
- `initializeMobileMenu()` handles hamburger menu toggle
- Click outside to close functionality

### Carousel
- Auto-advance every 4 seconds with smooth fade transitions
- Keyboard navigation (arrow keys)
- Pause on hover
- 5 slides cycling infinitely

### Back-to-Top Button
- Gray square button, bottom-right corner, with "^" symbol
- Only appears when scrolled past 300px (when headers disappear)
- Smooth scroll animation to top
- Hover effects for better UX

## Key Technical Decisions

### Positioning Strategy
- Headers use `position: absolute` (scroll with page, not fixed)
- Carousel positioned to show through transparent header
- Back-to-top button uses `position: fixed`

### Template System
- Header/footer are complete HTML documents (not fragments)
- JavaScript extracts body content for insertion
- Prevents server compatibility issues

### Color Consistency
- All colors use `rgba()` format for consistency
- Easy to modify transparency by changing alpha value
- Accents color settled on #881017 for better aesthetics

## Browser Compatibility
- Uses modern JavaScript (fetch, DOMParser)
- Responsive design with CSS media queries
- Smooth scrolling and transitions
- No external dependencies except CDN flag images

## Current Status
- Fully functional static website
- Ready for deployment to any web server
- All assets are local except country flag images from flagcdn.com