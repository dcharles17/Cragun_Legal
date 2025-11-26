# Pre-Launch Checklist for Cragun Legal Website

## ✅ Completed

- [x] Modern responsive HTML/CSS website
- [x] 6 fully optimized pages (Home, Family Law, Estate Planning, About, Practice Areas, Contact)
- [x] Mobile-first responsive design
- [x] SEO-optimized content with schema markup
- [x] Contact form with validation
- [x] Professional navy/gray/gold color scheme
- [x] Fast-loading, clean code
- [x] Research documentation

## 🔧 Required Before Launch

### 1. Content Updates

#### Images Needed
- [ ] Professional headshot of Jake B. Cragun
- [ ] Ogden office exterior photo
- [ ] Ogden office interior photo
- [ ] Morgan office exterior photo
- [ ] Morgan office interior photo
- [ ] Professional team photos (if applicable)
- [ ] Logo (if available)

**Where to add**: Save images to `/images/` folder and update references in HTML

#### Contact Information
- [ ] Add complete Ogden office address
- [ ] Add complete Morgan office address
- [ ] Add GPS coordinates for schema markup
- [ ] Verify phone number: (801) 610-9669
- [ ] Add email address (if desired)
- [ ] Update office hours if different from Mon-Fri 9-5

**Files to update**:
- All HTML files (footer section)
- Schema markup in `index.html`

#### Attorney Bio Enhancement
- [ ] Add Jake's education (law school, undergraduate)
- [ ] Add bar admissions (Utah State Bar #)
- [ ] Add years of practice/experience
- [ ] Add any awards or recognitions
- [ ] Add professional memberships (Utah State Bar, etc.)
- [ ] Add any publications or speaking engagements

**File to update**: `about.html`

#### Testimonials
- [ ] Replace placeholder testimonials with real client quotes
- [ ] Get written permission to use testimonials
- [ ] Add client initials or first names (maintain confidentiality)

**Files to update**: `index.html` and any other pages with testimonials

### 2. Technical Setup

#### Domain & Hosting
- [ ] Purchase domain: cragunlegal.com (or confirm ownership)
- [ ] Choose hosting provider:
  - **Easy options**: Netlify, Vercel, GitHub Pages (free)
  - **Traditional**: Bluehost, SiteGround, HostGator
  - **Premium**: WP Engine, Kinsta
- [ ] Point domain to hosting
- [ ] Install SSL certificate (enable HTTPS)
- [ ] Test website on live domain

#### Form Integration
Current form shows alert - needs backend integration:

**Option 1: Formspree** (Easiest)
- [ ] Sign up at formspree.io
- [ ] Update form action in `contact.html`:
  ```html
  <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  ```

**Option 2: Netlify Forms** (If using Netlify)
- [ ] Add `netlify` attribute to form
- [ ] Configure form notifications in Netlify dashboard

**Option 3: Custom Backend**
- [ ] Set up email server or CRM integration
- [ ] Add server-side form processing

#### Analytics & Tracking
- [ ] Create Google Analytics 4 account
- [ ] Add GA4 tracking code to all pages (in `<head>`)
- [ ] Set up conversion goals (form submissions, calls)
- [ ] Consider call tracking solution (CallRail, etc.)

### 3. SEO Setup

#### Google Business Profile (CRITICAL)
- [ ] Claim Google Business Profile for Ogden office
- [ ] Claim Google Business Profile for Morgan office (if separate location)
- [ ] Complete ALL fields (name, address, phone, hours, categories)
- [ ] Primary category: "Family Law Attorney"
- [ ] Secondary categories: "Divorce Lawyer", "Estate Planning Attorney"
- [ ] Upload 10+ photos
- [ ] Write compelling 750-character description
- [ ] Add service areas (Weber, Morgan, Davis Counties)
- [ ] Enable messaging
- [ ] Add Q&A content
- [ ] Create first post

#### Search Console
- [ ] Create Google Search Console account
- [ ] Verify domain ownership
- [ ] Submit XML sitemap
- [ ] Monitor indexing status

#### Sitemap & Robots.txt
- [ ] Create XML sitemap:
  ```xml
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url><loc>https://www.cragunlegal.com/</loc><priority>1.0</priority></url>
    <url><loc>https://www.cragunlegal.com/family-law.html</loc><priority>0.8</priority></url>
    <url><loc>https://www.cragunlegal.com/estate-planning.html</loc><priority>0.8</priority></url>
    <url><loc>https://www.cragunlegal.com/about.html</loc><priority>0.7</priority></url>
    <url><loc>https://www.cragunlegal.com/practice-areas.html</loc><priority>0.7</priority></url>
    <url><loc>https://www.cragunlegal.com/contact.html</loc><priority>0.6</priority></url>
  </urlset>
  ```
- [ ] Create robots.txt:
  ```
  User-agent: *
  Allow: /
  Sitemap: https://www.cragunlegal.com/sitemap.xml
  ```

#### Legal Directories & Citations
**High Priority (Week 1):**
- [ ] Avvo.com
- [ ] Justia.com
- [ ] FindLaw.com
- [ ] Lawyers.com
- [ ] Utah State Bar directory
- [ ] Google Business Profile
- [ ] Yelp
- [ ] Facebook Business Page
- [ ] LinkedIn Company Page

**Consistency Check**: Ensure IDENTICAL NAP (Name, Address, Phone) everywhere

### 4. Social Media Setup

#### Facebook
- [ ] Create Facebook Business Page
- [ ] Add cover photo and profile photo
- [ ] Complete About section
- [ ] Add services
- [ ] Enable reviews
- [ ] Create initial posts

#### LinkedIn
- [ ] Create Jake's professional LinkedIn profile (if not exists)
- [ ] Create Cragun Legal company page
- [ ] Add services and specialties
- [ ] Connect with local professionals

#### Optional
- [ ] Instagram (if doing behind-scenes content)
- [ ] Twitter/X (for legal updates)

### 5. Local Marketing

#### Community Engagement
- [ ] Join Ogden Chamber of Commerce
- [ ] Join Morgan County Chamber (if available)
- [ ] Join Weber County Bar Association
- [ ] Join Davis County Bar Association (if exists)
- [ ] Research local sponsorship opportunities
- [ ] Consider local charity involvement

#### Networking
- [ ] Connect with local real estate agents (referrals)
- [ ] Connect with financial advisors (estate planning)
- [ ] Connect with therapists/counselors (family law)
- [ ] Join local business networking groups

### 6. Review Generation

#### Strategy
- [ ] Set up email template for review requests
- [ ] Create process for requesting reviews after case completion
- [ ] Add review links to email signature
- [ ] Consider review generation service

#### Platforms to Target
- [ ] Google (most important)
- [ ] Avvo
- [ ] Facebook
- [ ] Yelp

**Goal**: 25+ Google reviews with 4.5+ stars within 6 months

### 7. Content Marketing

#### Blog Setup
- [ ] Decide on blog platform (simple HTML page or WordPress)
- [ ] Plan first 4-6 blog posts
- [ ] Create editorial calendar (2-4 posts/month)

#### Blog Topic Ideas
1. Guide to Divorce in Utah: What Weber County Residents Need to Know
2. Child Custody Laws in Utah: A Complete Guide
3. Estate Planning Checklist for Utah Families
4. How to Modify a Custody Agreement in Weber County
5. Understanding Child Support in Utah
6. The Adoption Process in Utah: Step by Step

### 8. Legal Compliance

#### Website Requirements
- [ ] Add Privacy Policy page
- [ ] Add Terms of Service (if needed)
- [ ] Add Attorney Advertising disclaimer (✅ already in footer)
- [ ] Review Utah State Bar advertising rules
- [ ] Ensure all claims are accurate and not misleading
- [ ] Get client permission for any testimonials used

#### Professional Requirements
- [ ] Verify professional liability insurance
- [ ] Ensure compliance with Utah State Bar rules
- [ ] Review confidentiality policies

## 📅 Launch Timeline

### Week 1: Content & Setup
- Day 1-2: Gather and add photos
- Day 3-4: Update contact information and bio
- Day 5: Set up hosting and domain
- Day 6-7: Technical setup (analytics, forms)

### Week 2: SEO Foundation
- Day 8-9: Claim and optimize Google Business Profile
- Day 10-11: Submit to top 10 directories
- Day 12-13: Set up Google Search Console
- Day 14: Final testing and quality check

### Week 3: Launch!
- Day 15: Official launch
- Day 16-21: Monitor analytics, fix any issues

### Month 1: Growth
- Continue citation building (60+ directories)
- Begin review collection
- Launch social media
- Create first blog posts

## 🎯 Success Metrics (Track Monthly)

### Traffic
- [ ] Organic search sessions
- [ ] Page views
- [ ] Bounce rate
- [ ] Time on site
- [ ] Top landing pages

### Leads
- [ ] Contact form submissions
- [ ] Phone calls
- [ ] Email inquiries
- [ ] Consultation requests

### Rankings
- [ ] Local pack positions for key terms
- [ ] Organic rankings for target keywords
- [ ] Google Business Profile views/clicks

### Reviews
- [ ] Total Google reviews
- [ ] Average rating
- [ ] Reviews on other platforms

### Goals (6 Months)
- [ ] Top 3 local pack for "family law attorney Ogden"
- [ ] Top 3 local pack for "divorce lawyer Weber County"
- [ ] 50+ qualified leads per month
- [ ] 25+ Google reviews, 4.5+ stars
- [ ] 500+ organic sessions/month

## 🚨 Common Launch Mistakes to Avoid

1. ❌ Launching without SSL (HTTPS)
2. ❌ Not setting up Google Business Profile
3. ❌ Inconsistent NAP across directories
4. ❌ No analytics tracking
5. ❌ Contact form not working
6. ❌ Not mobile-tested
7. ❌ No call-to-action
8. ❌ Missing alt text on images
9. ❌ Not submitting sitemap
10. ❌ No plan for ongoing content

## ✨ Nice-to-Have Enhancements

### Future Additions
- [ ] Client portal for document sharing
- [ ] Online appointment scheduling
- [ ] Live chat widget
- [ ] Video testimonials
- [ ] Practice area specific landing pages for each county
- [ ] FAQ schema markup
- [ ] Breadcrumb navigation
- [ ] Spanish language version (if serving Spanish-speaking clients)

### Advanced SEO
- [ ] Create pillar content (comprehensive guides)
- [ ] Internal linking strategy
- [ ] Image optimization (WebP format)
- [ ] Video content for YouTube
- [ ] Podcast (if interested)

---

## 📞 Questions or Issues?

Refer to:
- `README.md` for overall documentation
- `research/` folder for SEO strategy and competitor analysis
- Test website locally before deploying changes

**Remember**: Consistency is key for local SEO. Keep NAP identical everywhere, and be patient - SEO results take 3-6 months.

---

**Last Updated**: November 2024
**Status**: Ready for content updates and deployment
