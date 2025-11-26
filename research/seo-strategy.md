# SEO Strategy - Implementation Checklist

## On-Page SEO Requirements

### Every Page Must Have:

#### Title Tags (50-60 characters)
- **Home:** "Family Law Attorney Ogden Utah | Estate Planning | Cragun Legal"
- **About:** "Jake B. Cragun | Experienced Family Law Attorney | Ogden UT"
- **Family Law:** "Family Law Attorney Ogden | Divorce & Custody | Weber County"
- **Estate Planning:** "Estate Planning Attorney Ogden | Wills & Trusts | Utah"
- **Contact:** "Contact Cragun Legal | Ogden & Morgan Utah Law Firm"

#### Meta Descriptions (150-160 characters)
- Include primary keyword
- Mention service areas (Ogden, Weber, Davis, Morgan Counties)
- Call-to-action (Free consultation, Call now)
- Years of experience or unique value prop

#### URL Structure
- Clean, keyword-rich URLs
- Examples:
  - `/index.html` or `/`
  - `/about.html`
  - `/family-law.html`
  - `/estate-planning.html`
  - `/contact.html`

## Schema Markup Implementation

### Required Schema Types:

#### 1. LocalBusiness/LegalService Schema
```json
{
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Cragun Legal",
  "description": "Experienced family law and estate planning attorney serving Ogden, Weber County, Morgan County, and Davis County, Utah",
  "url": "https://www.cragunlegal.com",
  "telephone": "(801) 610-9669",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[Street Address]",
    "addressLocality": "Ogden",
    "addressRegion": "UT",
    "postalCode": "[Zip]",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "[Latitude]",
    "longitude": "[Longitude]"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Ogden"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Weber County"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Morgan County"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Davis County"
    }
  ],
  "openingHours": "Mo,Tu,We,Th,Fr 09:00-17:00"
}
```

#### 2. Attorney Schema
```json
{
  "@context": "https://schema.org",
  "@type": "Attorney",
  "name": "Jake B. Cragun",
  "knowsAbout": ["Family Law", "Divorce", "Child Custody", "Estate Planning", "Adoption"],
  "memberOf": {
    "@type": "LegalService",
    "name": "Cragun Legal"
  }
}
```

## Local SEO Checklist

### Google Business Profile
- [ ] Claim and verify listing
- [ ] Complete all fields (name, address, phone, hours)
- [ ] Primary category: "Family Law Attorney"
- [ ] Secondary categories: "Divorce Lawyer", "Estate Planning Attorney"
- [ ] Upload 10+ photos (office, team, logo)
- [ ] Write compelling description (750 chars, include keywords)
- [ ] Add service areas (Ogden, Weber County, Morgan County, Davis County)
- [ ] Enable messaging
- [ ] Create weekly posts

### Citation Building (Top Priority Sites)
1. Avvo.com
2. Justia.com
3. FindLaw.com
4. Lawyers.com
5. Martindale.com
6. Utah State Bar
7. Better Business Bureau
8. Yelp
9. Facebook Business
10. LinkedIn Company Page

### NAP Consistency
**Ensure IDENTICAL information everywhere:**
- Name: Cragun Legal (or Law Offices of Jake B. Cragun)
- Address: [Exact street address with suite number]
- Phone: (801) 610-9669

## Content Strategy

### Blog Topics (2-4 posts/month)
- "Guide to Divorce in Utah: What Weber County Residents Need to Know"
- "Child Custody Laws in Utah: A Complete Guide"
- "How to Modify a Custody Agreement in Weber County"
- "Estate Planning Checklist for Utah Families"
- "The Adoption Process in Utah: Step by Step"
- "Understanding Child Support in Weber County"
- "What is a Guardian Ad Litem in Utah?"
- "5 Estate Planning Mistakes to Avoid"

### Content Requirements
- 1,000-2,000 words per post
- Include local information
- Answer specific questions
- Clear CTAs
- Internal links to practice area pages
- Optimize for featured snippets

## Technical SEO

### Performance
- [ ] Load time under 3 seconds
- [ ] Optimize all images (WebP format, compressed)
- [ ] Minify CSS/JS
- [ ] Enable compression

### Mobile Optimization
- [ ] Responsive design
- [ ] Touch-friendly buttons (min 48x48px)
- [ ] Readable text without zooming
- [ ] Fast mobile load times

### Security
- [ ] HTTPS/SSL certificate
- [ ] Secure contact forms

### Core Web Vitals
- [ ] Largest Contentful Paint (LCP) < 2.5s
- [ ] First Input Delay (FID) < 100ms
- [ ] Cumulative Layout Shift (CLS) < 0.1

## Tracking & Analytics

### Setup Required
- [ ] Google Search Console
- [ ] Google Analytics 4
- [ ] Call tracking
- [ ] Form submission tracking
- [ ] Conversion goals

### Metrics to Monitor
- Organic sessions
- Keyword rankings
- Local pack appearances
- Conversion rate (calls, forms)
- Bounce rate
- Time on site

## Geographic Targeting Strategy

### Service Area Pages
Create content emphasizing:
- **Weber County:** Ogden office, serving all Weber County communities
- **Morgan County:** Morgan office, local presence
- **Davis County:** Northern reach, serving Layton, Clearfield, Kaysville
- **Multi-County:** "Serving Northern Utah" messaging

### Local Keywords in Content
- Include city/county names naturally
- Reference local courts (2nd District Court)
- Mention community involvement
- Local landmarks and geography

## Link Building Strategy

### Local Backlinks
- Local news coverage (Standard-Examiner)
- Community organizations
- Ogden Chamber of Commerce
- Weber County business associations
- Professional organizations (Utah State Bar)
- Sponsorships and events

## Timeline

### Month 1: Foundation
- [x] Website launch with full SEO optimization
- [ ] Claim/optimize Google Business Profile
- [ ] Set up Google Search Console & Analytics
- [ ] Begin top 20 citations

### Month 2: Content & Authority
- [ ] Launch blog with 4 initial posts
- [ ] Complete 40 citations
- [ ] Begin review collection
- [ ] Social media setup

### Month 3: Growth
- [ ] Continue blogging (2x/month)
- [ ] Complete 60+ citations
- [ ] Local backlink outreach
- [ ] Performance optimization

### Ongoing
- Regular blog posts
- Review management
- Performance monitoring
- Content updates
- Citation maintenance
