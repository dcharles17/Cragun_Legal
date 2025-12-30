# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static website for Cragun Legal, a law firm serving Weber County, Morgan County, and Davis County, Utah. The site is a modern, SEO-optimized attorney website with no build process or dependencies beyond Google Fonts.

**Primary Practice Areas**: Criminal Defense, Family Law, Estate Planning

**Technology Stack**: Pure HTML5, CSS3, and vanilla JavaScript (no frameworks)

## Development Commands

This is a static site with no build process. Development is straightforward:

**Local Testing**:
- Open `index.html` directly in a web browser
- Or use a simple HTTP server: `python3 -m http.server 8000`

**Deployment**:
- See [DEPLOY.md](DEPLOY.md) for full deployment options (Netlify recommended)

## Architecture Overview

### Site Structure

The site consists of 6 main pages sharing a common navigation structure and visual design:

- `index.html` - Home page with hero, practice areas overview, testimonials
- `practice-areas.html` - Comprehensive overview of all legal services
- `family-law.html` - Detailed family law services page
- `estate-planning.html` - Detailed estate planning services page
- `about.html` - Attorney bio and firm information
- `contact.html` - Contact form powered by Web3Forms API

### Key Technical Components

**Navigation System** ([js/main.js:3-41](js/main.js#L3-L41)):
- Responsive hamburger menu for mobile
- Active page highlighting based on current URL
- Animated menu transitions

**Contact Form** ([js/main.js:43-108](js/main.js#L43-L108)):
- Uses Web3Forms API (https://web3forms.com) for form submissions
- Access key: `b240f14c-1f9e-4216-a0e4-a78f65f93600`
- Submissions go to `jake@cragunlegal.com`
- Client-side validation with async/await fetch API

**Rating System** ([js/main.js:157-317](js/main.js#L157-L317)):
- Popup appears after 30 seconds on first visit (session-based)
- 5-star ratings redirect to Google Reviews
- Lower ratings collect private feedback via Web3Forms
- Configurable Google Review URL (currently placeholder)

**Scroll Animations** ([js/main.js:133-155](js/main.js#L133-L155)):
- Uses Intersection Observer API for performance
- Animates practice cards, features, and testimonials on scroll
- Fade-in with slide-up effect

### Design System

**Color Palette** (defined in [css/styles.css:12-20](css/styles.css#L12-L20)):
- Primary Navy: `#1a3a52` (trust, professionalism)
- Secondary Gray: `#4a5568` (modern, sophisticated)
- Accent Gold: `#c9a961` (premium, prestigious)
- White: `#ffffff`
- Dark Text: `#2d3748`

**Typography**:
- Headings: Merriweather (serif) - authoritative
- Body: Open Sans (sans-serif) - readable
- Loaded from Google Fonts with preconnect for performance

**Responsive Breakpoints**:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### SEO Implementation

All pages include comprehensive SEO markup:

1. **Meta Tags**: Optimized title (50-60 chars) and description (150-160 chars) on every page
2. **Schema.org Markup**:
   - LocalBusiness/LegalService schema on home page
   - Attorney schema for Jake B. Cragun
   - Service schema for practice areas
   - Area served markup (Weber, Morgan, Davis Counties)
3. **Semantic HTML**: Proper heading hierarchy (single H1 per page, logical H2/H3 structure)
4. **Internal Linking**: Strategic cross-linking between practice area pages

**Target Geographic Areas**:
- Weber County (Ogden, Roy, South Ogden)
- Morgan County (Morgan, Huntsville, Eden)
- Davis County (Layton, Clearfield, Kaysville)

## Important Context

### Form Configuration

The site uses Web3Forms for all form submissions. There are two forms:

1. **Contact Form** (`contact.html`): General inquiries to `jake@cragunlegal.com`
2. **Feedback Form** (rating popup): Private feedback for ratings below 5 stars

Both use the same Web3Forms access key. To change the recipient email or configure form behavior, update the Web3Forms dashboard.

### Rating Popup Configuration

The Google Review URL placeholder needs to be updated before the rating system fully works:
- Location: [js/main.js:168](js/main.js#L168)
- Current value: `'YOUR_GOOGLE_REVIEW_URL_HERE'`
- Should be replaced with actual Google Business Profile review link

### Images

All images are in the `/images/` directory:
- `logo.png` - Cragun Legal logo (used in navigation)
- `favicon.png` - Browser favicon
- `jake-cragun.jpg` - Attorney headshot
- Additional team member and background images

The `-original` suffix files are backup originals before optimization.

### Shared Components

Every page shares identical:
- Header/navigation structure
- Footer with contact information and links
- Meta tags and favicon references
- Google Fonts loading
- CSS and JavaScript file references

When editing the navigation or footer, you must update all 6 HTML files to maintain consistency.

## Common Tasks

### Adding a New Page

1. Copy an existing HTML file (e.g., `family-law.html`)
2. Update the `<title>` and meta `description` tags
3. Update the page content within the `<main>` section
4. Add navigation link to all 6 existing HTML files
5. Maintain the same header/footer structure

### Updating Contact Information

Phone number `(801) 610-9669` appears in multiple locations per page:
- Navigation menu (clickable tel: link)
- Footer
- Contact page content
- Schema markup

Email `jake@cragunlegal.com` appears in:
- Web3Forms configuration in JavaScript
- Contact page content
- Footer

### Modifying the Color Scheme

All colors are defined as CSS custom properties in [css/styles.css:12-20](css/styles.css#L12-L20). Changing colors there will update the entire site.

### Adding Schema Markup

Each page has JSON-LD structured data in `<script type="application/ld+json">` tags. When adding new services or information, update the relevant schema objects to maintain SEO value.

## Pre-Launch Checklist

Before deploying to production, verify:

1. **Schema markup** has actual office addresses (currently placeholders)
2. **Google Review URL** is configured in the rating popup JavaScript
3. **Contact form** submissions are being received at the correct email
4. **All images** have appropriate alt text
5. **Phone numbers and emails** are correct throughout
6. **Mobile menu** works on actual mobile devices
7. **All links** navigate correctly (no 404s)

## Additional Documentation

- [README.md](README.md) - Complete project documentation
- [DEPLOY.md](DEPLOY.md) - Deployment instructions for various platforms
- [LAUNCH_CHECKLIST.md](LAUNCH_CHECKLIST.md) - Pre-launch verification tasks
- [research/](research/) - SEO strategy, competitor analysis, design inspiration
