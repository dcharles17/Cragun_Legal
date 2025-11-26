# Quick Deployment Guide

## Option 1: Netlify (Recommended - Free & Easy)

### Steps:
1. **Sign up** at [netlify.com](https://netlify.com)
2. **Drag and drop** the `Jake_Website` folder into Netlify
3. **Configure custom domain**:
   - Go to Domain Settings
   - Add `cragunlegal.com`
   - Update DNS records as instructed
4. **Enable form**: Add `netlify` attribute to form in `contact.html`:
   ```html
   <form netlify id="contact-form">
   ```
5. **SSL is automatic** - Netlify provides free HTTPS

### Pros:
- Free hosting
- Automatic SSL
- Built-in form handling
- Easy updates (just drag/drop new files)
- Fast CDN

---

## Option 2: GitHub Pages (Free)

### Steps:
1. Create GitHub account if needed
2. Create new repository: `cragunlegal-website`
3. Upload all files to repository
4. Go to Settings → Pages
5. Select branch to deploy (usually `main`)
6. Configure custom domain in settings
7. Update DNS to point to GitHub Pages

### Pros:
- Free hosting
- Version control
- Good for developers

### Cons:
- No built-in form handling (need Formspree)
- More technical setup

---

## Option 3: Traditional Hosting (Bluehost, SiteGround, etc.)

### Steps:
1. Purchase hosting plan
2. Register domain `cragunlegal.com`
3. Upload files via FTP or cPanel File Manager
4. Install SSL certificate (usually free with Let's Encrypt)
5. Set up email forwarding for contact form

### Pros:
- Full control
- Can add server-side processing
- Phone support available

### Cons:
- Monthly cost (~$5-15/month)
- More technical setup required

---

## Contact Form Setup

### Option A: Formspree (Works with any hosting)
1. Sign up at [formspree.io](https://formspree.io)
2. Create new form
3. Get your form endpoint
4. Update `contact.html`:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" id="contact-form">
   ```
5. Remove the current JavaScript validation (Formspree handles it)

### Option B: Netlify Forms (If using Netlify)
1. Add `netlify` attribute to form
2. Add hidden field:
   ```html
   <input type="hidden" name="form-name" value="contact" />
   ```
3. Configure notifications in Netlify dashboard

### Option C: Email Service (More advanced)
- Use EmailJS, SendGrid, or similar
- Requires API keys and JavaScript integration

---

## DNS Configuration

### For most providers, add these records:

**For root domain (cragunlegal.com):**
- Type: A
- Name: @ (or leave blank)
- Value: [Your hosting IP address]

**For www subdomain:**
- Type: CNAME
- Name: www
- Value: cragunlegal.com

**Note**: Netlify and GitHub Pages have specific DNS instructions in their dashboards.

---

## Google Analytics Setup

1. Create account at [analytics.google.com](https://analytics.google.com)
2. Create new GA4 property
3. Get your Measurement ID (G-XXXXXXXXXX)
4. Add to every HTML page before `</head>`:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## Post-Deployment Checklist

### Immediately After Launch:
- [ ] Test all pages load correctly
- [ ] Test all navigation links
- [ ] Test contact form submission
- [ ] Test on mobile device
- [ ] Verify HTTPS is working (green lock icon)
- [ ] Check that phone number is clickable on mobile
- [ ] Test in different browsers (Chrome, Safari, Firefox)

### Within 24 Hours:
- [ ] Submit sitemap to Google Search Console
- [ ] Verify Google Analytics is tracking
- [ ] Share website with a few trusted people for feedback
- [ ] Check all images display correctly

### Within 1 Week:
- [ ] Claim Google Business Profile
- [ ] Submit to top 10 legal directories
- [ ] Set up social media profiles
- [ ] Begin review collection

---

## Updating the Website

### For simple text changes:
1. Open the HTML file in a text editor
2. Make your changes
3. Save the file
4. Re-upload to your hosting (or commit to Git)

### For design changes:
1. Edit `css/styles.css`
2. Test locally by opening HTML in browser
3. Upload updated CSS file

### For adding new pages:
1. Copy an existing HTML file
2. Update content while keeping the structure
3. Add link to navigation menu in all pages
4. Upload new file

---

## Common Issues & Solutions

### Form not working
- Check that form action URL is correct
- Verify form service (Formspree/Netlify) is configured
- Check browser console for JavaScript errors

### Site not loading on custom domain
- Verify DNS records are correct
- Wait 24-48 hours for DNS propagation
- Clear browser cache

### Mobile menu not working
- Check that `js/main.js` is loading correctly
- Verify JavaScript has no errors in console
- Test on different mobile devices

### Images not showing
- Check file paths are correct
- Ensure images are uploaded to `/images/` folder
- Verify image file names match exactly (case-sensitive)

---

## Recommended: Set Up Email

### Options:

**1. Google Workspace** (Professional)
- Cost: $6/user/month
- Email: jake@cragunlegal.com
- Professional and reliable
- Integrated calendar and docs

**2. Zoho Mail** (Budget-friendly)
- Cost: Free tier available, $1/month paid
- Email: jake@cragunlegal.com
- Good for small businesses

**3. Email Forwarding** (Simplest)
- Many hosting providers offer free email forwarding
- Forward jake@cragunlegal.com → personal email
- Can reply from personal email

---

## Need Help?

### Resources:
- [Netlify Docs](https://docs.netlify.com)
- [GitHub Pages Docs](https://docs.github.com/pages)
- [Formspree Docs](https://help.formspree.io)
- [Google Search Console Help](https://support.google.com/webmasters)

### Common Support Topics:
- Most hosting providers have 24/7 support
- Netlify has great community forums
- Stack Overflow for technical questions

---

**Estimated time to deploy: 1-2 hours**
**Estimated cost: $0-15/month (depending on hosting choice)**

Good luck with the launch! 🚀
