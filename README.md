# IRAZ.site - Project Documentation

## Project Overview
- **Repository**: `https://github.com/sorin-costea/iraz.site.git`
- **Type**: Multi-language static website (DE, EN, ES, HU, RO).
- **Static Site Generator**: [Eleventy (11ty)](https://www.11ty.dev/) using the **Liquid** template engine.
- **Deployment**: Automated via GitHub Actions to GitHub Pages.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v20 or higher recommended).
- [npm](https://www.npmjs.com/) (installed with Node).

### Local Setup
1. **Clone the repository**:
   ```bash
   git clone https://github.com/sorin-costea/iraz.site.git
   cd iraz.site
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Run development server**:
   ```bash
   npm start
   ```
   The site will be available at `http://localhost:8080/`. Changes to source files will trigger an automatic reload.

## Core Architecture

### File Structure
- `src/`: Source files.
    - `_data/i18n/`: Individual JSON files for each language (e.g., `de.json`).
    - `assets/`: Global CSS (`site.css`) and JavaScript (`site.js`).
    - `img/`: Site images and team profiles.
    - `index.html`: The master template. Uses **Pagination** to generate all language versions.
    - `camelia.html`, `claudia.html`, `anett.html`: Individual lawyer profile pages.
    - `contact.html`: Multilingual contact page.
    - `redirect.html`: Root index file that redirects visitors to `/de/` by default.
- `eleventy.config.js`: Configuration for 11ty, asset passthroughs, and path prefixes.
- `.github/workflows/deploy.yml`: Automation script for GitHub Actions.

### Multi-language System
The site uses a "Single Source of Truth" approach.
1. Adding a new language is as simple as adding a new `.json` file in `src/_data/i18n/`.
2. 11ty loops through these files and generates a corresponding folder and set of pages (e.g., `/es/index.html`, `/es/camelia.html`).
3. **Layout Consistency**: To handle varying text lengths across languages (e.g., footer titles), specific CSS rules like `min-height` are used to ensure vertical alignment of content blocks.
4. **Templates**: Always use the `| url` filter for links to ensure compatibility between local and production environments:
   `href="{{ '/assets/site.css' | url }}"`

### Key Features & Components
- **Hero Sections**: Full-width visual headers. The home page uses a dynamic **Carousel**, while other pages (like Contact) use a static **Page Hero**.
- **Dropdown Navigation**: The "Rechtsanwälte" menu item contains a dropdown linking to individual profiles.
- **Responsive Design**: Mobile-friendly hamburger menu and stackable grids for team members and legal areas.
- **Back to Top**: Smooth scroll button implemented in `site.js`.

## Deployment Workflow
The site is deployed automatically using **GitHub Actions**.

1. **Commit changes** to the `main` branch.
2. GitHub triggers the `Deploy to GitHub Pages` workflow.
3. The site is built and published to the environment.

### Domain Transition
The project is configured to automatically handle the `pathPrefix` for GitHub Pages.
- **Current Logic**: In `eleventy.config.js`, it checks `process.env.GITHUB_ACTIONS` to decide whether to apply the `/iraz.site/` prefix.
- **Moving to `iraz.ch`**:
    1. Update the `pathPrefix` constant in `eleventy.config.js` to always be `"/"`.
    2. Configure the CNAME in GitHub repository settings.

## Maintenance Guide

### Updating Content
- **Translations**: Edit the relevant file in `src/_data/i18n/`. The **Easy I18n** plugin for IntelliJ IDEA is recommended for handling translation texts.
- **Images**: Add new images to `src/img/` and reference them in the JSON or HTML using the `| url` filter.
- **Lawyer Profiles**: Managed via the `lawyers` object in each language's JSON file.

### Styling
- **Primary Color**: `#AA9574` (Gold).
- The layout is responsive; mobile adjustments are handled via `@media (max-width: 768px)` in `site.css`.