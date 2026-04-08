# Technical SEO Audit Report: unnatvega.vercel.app
**Audit Date:** April 8, 2026  
**Auditor:** Claude Code Technical SEO Analysis  
**Site Type:** Single-Page Application (Next.js) - Web Development Agency

---

## Executive Summary

| Category | Status | Score |
|----------|--------|-------|
| Crawlability | FAIL | 15/100 |
| Indexability | WARNING | 45/100 |
| Security | PASS | 95/100 |
| URL Structure | WARNING | 40/100 |
| Mobile Optimization | PASS | 90/100 |
| Core Web Vitals | REVIEW | 70/100 |
| JavaScript Rendering | PASS | 85/100 |
| Structured Data | FAIL | 0/100 |
| International SEO | N/A | N/A |

**Overall Technical SEO Score: 48/100** (Needs Significant Improvement)

---

## 1. CRAWLABILITY - Score: 15/100 [CRITICAL]

### Critical Issues (Immediate Action Required)

#### 1.1 Missing robots.txt - CRITICAL
- **Status:** 404 Not Found
- **Impact:** Search engines cannot determine crawl rules or sitemap location
- **Fix:** Create `/public/robots.txt` with the following content:
```
User-agent: *
Allow: /

Sitemap: https://unnatvega.vercel.app/sitemap.xml
```

#### 1.2 Missing sitemap.xml - CRITICAL
- **Status:** 404 Not Found
- **Impact:** Search engines cannot discover all indexable pages
- **Fix:** Create dynamic sitemap using Next.js:
```javascript
// app/sitemap.js
export default function sitemap() {
  return [
    {
      url: 'https://unnatvega.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}
```

#### 1.3 Non-existent Subpages Returning 404 with noindex
All navigation links point to missing pages:
- `/about` - Returns 404 with noindex
- `/services` - Returns 404 with noindex
- `/portfolio` - Returns 404 with noindex
- `/pricing` - Returns 404 with noindex
- `/contact` - Returns 404 with noindex
- `/performance` - Returns 404 with noindex
- `/growth` - Returns 404 with noindex

**Impact:** Search engines crawling these URLs see 404 errors and noindex directives, wasting crawl budget.

**Solution Options:**
1. **Recommended:** Create actual route pages that redirect to homepage anchors
2. **Alternative:** Update navigation to use proper anchor links (`/#services` instead of `/services`)

---

## 2. INDEXABILITY - Score: 45/100 [HIGH PRIORITY]

### High Priority Issues

#### 2.1 Missing Canonical Tag - HIGH
- **Issue:** No `<link rel="canonical">` tag found
- **Impact:** Risk of duplicate content issues if URL parameters are added
- **Fix:** Add to layout.js:
```javascript
export const metadata = {
  // ... existing metadata
  alternates: {
    canonical: 'https://unnatvega.vercel.app',
  },
};
```

#### 2.2 Missing Open Graph Tags - HIGH
- **Issue:** No `og:title`, `og:description`, `og:image`, `og:url` tags
- **Impact:** Poor social sharing appearance on Facebook, LinkedIn, WhatsApp
- **Fix:** Add to metadata in layout.js:
```javascript
export const metadata = {
  openGraph: {
    title: 'Unnat Vega | Web Development Agency',
    description: 'Blazing-fast, high-performance websites that drive growth.',
    url: 'https://unnatvega.vercel.app',
    siteName: 'Unnat Vega',
    images: [{
      url: 'https://unnatvega.vercel.app/og-image.jpg',
      width: 1200,
      height: 630,
    }],
    locale: 'en_IN',
    type: 'website',
  },
};
```

#### 2.3 Missing Twitter Card Tags - MEDIUM
- **Issue:** No `twitter:card`, `twitter:title`, `twitter:description` tags
- **Fix:** Add to metadata:
```javascript
twitter: {
  card: 'summary_large_image',
  title: 'Unnat Vega | Web Development Agency',
  description: 'Blazing-fast, high-performance websites that drive growth.',
  images: ['https://unnatvega.vercel.app/twitter-image.jpg'],
},
```

### Medium Priority Issues

#### 2.4 Single Meta Title/Description for All Content
- **Issue:** Only one set of meta tags despite having multiple sections
- **Recommendation:** Since this is an SPA, ensure the meta tags accurately reflect the primary offering

---

## 3. SECURITY - Score: 95/100 [PASS]

### Strengths

#### 3.1 HTTPS with HSTS Enabled
```
strict-transport-security: max-age=63072000; includeSubDomains; preload
```
- HSTS preload-ready configuration
- 2-year max-age is excellent

#### 3.2 Secure Hosting on Vercel
- Vercel's edge network provides DDoS protection
- Automatic SSL certificates

### Missing Security Headers (Low Priority)
- `X-Frame-Options: DENY` or `SAMEORIGIN` - Missing
- `X-Content-Type-Options: nosniff` - Missing
- `Referrer-Policy` - Missing
- Content Security Policy (CSP) - Missing

**Fix via next.config.mjs:**
```javascript
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};
```

---

## 4. URL STRUCTURE - Score: 40/100 [WARNING]

### Issues

#### 4.1 Fragment/Hash Navigation for "Pages"
- **Current:** Links use `/services`, `/portfolio` etc. but are anchor-based
- **Issue:** Search engines cannot index individual sections as separate pages
- **Impact:** Limited ability to rank for specific service keywords

#### 4.2 URL Fragment Mismatch
Navbar links reference IDs that don't match href:
- "About" links to `#meaning` (should be intuitive)
- "Performance" links to `#pagespeed`
- "Growth" links to `#analytics`

**Recommendation:** Consider creating dedicated pages for key services with proper URLs:
- `/services/web-development`
- `/services/seo-optimization`
- `/portfolio` (full page)
- `/pricing` (full page)
- `/contact` (full page)

---

## 5. MOBILE OPTIMIZATION - Score: 90/100 [PASS]

### Strengths

#### 5.1 Proper Viewport Configuration
```html
<meta name="viewport" content="width=device-width, initial-scale=1"/>
```

#### 5.2 Responsive Design
- Uses Tailwind responsive classes: `sm:`, `lg:`, `xl:`
- Mobile-first approach evident in component code
- Proper touch targets on buttons

#### 5.3 Mobile Navigation
- Sheet component for mobile menu
- Proper hamburger menu implementation

### Minor Improvements
- Consider adding `maximum-scale=1` for accessibility (though not required)

---

## 6. CORE WEB VITALS - Score: 70/100 [REVIEW NEEDED]

### Observations from Source Analysis

#### 6.1 Page Size: 232KB HTML (Large)
- **Issue:** Homepage HTML is quite large (232KB)
- **Cause:** All content rendered server-side in single HTML file
- **Recommendation:** Consider code-splitting or lazy loading below-fold content

#### 6.2 Resource Loading
- **Good:** Font preloading implemented
- **Good:** Single CSS file (optimized)
- **Concern:** 11 JavaScript chunks loaded

#### 6.3 Image Optimization - MEDIUM PRIORITY
**Large Image Files Detected:**
- `unnatvega_logo.svg` - 1.57MB (SVG should not be this large, may contain embedded raster)
- `a_consult.png` - 1.2MB
- `nirvatatva.png` - 1.25MB

**Recommendations:**
1. Convert large PNGs to WebP format
2. Optimize SVG logo (remove unnecessary elements)
3. Use Next.js Image component with proper sizing:
```javascript
<Image
  src="/nirvatatva.png"
  alt="Nirvatatva Project"
  width={800}
  height={600}
  quality={80}
  placeholder="blur"
/>
```

#### 6.4 Font Loading - GOOD
- Preload hint for Inter font
- Font display optimization present

### Required: Actual Measurement
**Note:** Real Core Web Vitals scores (LCP, INP, CLS) require field data from CrUX or lab testing via Lighthouse/PageSpeed Insights. Based on code review:

**Estimated Issues:**
- **LCP Risk:** Large hero content may cause delayed LCP
- **CLS Risk:** Code editor mockup in Hero may cause layout shift
- **INP Risk:** Multiple React hydration events

---

## 7. JAVASCRIPT RENDERING - Score: 85/100 [PASS]

### Strengths

#### 7.1 Next.js App Router with Server-Side Rendering
- Static HTML generation detected (`x-nextjs-prerender: 1`)
- Full HTML content available without JavaScript
- Good for SEO crawlability

#### 7.2 Proper Hydration Patterns
- Client components properly marked with "use client"
- Server components for static content

### Concerns

#### 7.1 Heavy JavaScript Payload
- 11 script chunks loaded
- Large React bundle for a marketing site
- Consider:
  - Partial Hydration for below-fold content
  - Using `next/dynamic` for non-critical components

**Example Fix:**
```javascript
import dynamic from 'next/dynamic';

const FAQ = dynamic(() => import('@/components/FAQ'), {
  loading: () => <div>Loading...</div>,
});
```

---

## 8. STRUCTURED DATA - Score: 0/100 [CRITICAL]

### Critical Missing Data

#### 8.1 No JSON-LD Schema Markup
**Required Schemas:**

**1. LocalBusiness Schema (for Jodhpur location):**
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Unnat Vega",
  "description": "Web Development Agency in Jodhpur, Rajasthan",
  "url": "https://unnatvega.vercel.app",
  "logo": "https://unnatvega.vercel.app/unnatvega_logo.png",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Jodhpur",
    "addressRegion": "Rajasthan",
    "addressCountry": "IN"
  },
  "serviceType": ["Web Development", "SEO Services", "UI/UX Design"],
  "priceRange": "$$"
}
```

**2. WebSite Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Unnat Vega",
  "url": "https://unnatvega.vercel.app",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://unnatvega.vercel.app/?q={search_term}",
    "query-input": "required name=search_term"
  }
}
```

**3. Service Schema for each offering:**
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Custom Web Development",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Unnat Vega"
  },
  "areaServed": {
    "@type": "Country",
    "name": "India"
  }
}
```

**Implementation:**
```javascript
// app/layout.js
import Script from 'next/script';

export default function RootLayout({ children }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Unnat Vega',
    // ... rest of schema
  };

  return (
    <html lang="en">
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      {/* ... */}
    </html>
  );
}
```

---

## 9. INTERNATIONAL SEO - Score: N/A

### Current Status
- **Language:** English only (`lang="en"`)
- **Hreflang:** Not applicable (single language)
- **Geographic Target:** India (Jodhpur, Rajasthan)

### Recommendations
- Add `geo.region` and `geo.placename` meta tags for local SEO:
```html
<meta name="geo.region" content="IN-RJ" />
<meta name="geo.placename" content="Jodhpur" />
<meta name="geo.position" content="26.2389;73.0243" />
<meta name="ICBM" content="26.2389, 73.0243" />
```

---

## PRIORITIZED ACTION PLAN

### Week 1: Critical Fixes (Blocking Indexation)
1. **Create robots.txt** - 30 minutes
2. **Create sitemap.xml** - 1 hour
3. **Add canonical tag** - 15 minutes
4. **Fix 404 subpages** (redirect or create pages) - 2 hours
5. **Add LocalBusiness JSON-LD** - 1 hour

### Week 2: High Priority (Ranking Impact)
6. **Add Open Graph tags** - 30 minutes
7. **Add Twitter Card tags** - 15 minutes
8. **Optimize large images** (convert to WebP) - 2 hours
9. **Add security headers** - 30 minutes

### Week 3: Medium Priority (UX/Performance)
10. **Implement code splitting** with `next/dynamic` - 3 hours
11. **Add Service schemas** - 1 hour
12. **Add local SEO geo tags** - 30 minutes

### Week 4: Optimization
13. **Consider creating dedicated pages** for services/portfolio
14. **Set up Google Search Console**
15. **Request indexing after fixes**

---

## QUICK FIX: Updated layout.js

```javascript
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Unnat Vega | Web Development Agency — Speed Meets Success",
  description: "Unnat Vega delivers blazing-fast, high-performance websites that drive growth. Derived from Sanskrit — Unnat (Progress) + Vega (Speed). Based in Jodhpur, Rajasthan.",
  keywords: [
    "web development",
    "fast websites",
    "export websites",
    "Unnat Vega",
    "high performance websites",
    "Jodhpur web developer",
    "India web agency"
  ],
  alternates: {
    canonical: "https://unnatvega.vercel.app",
  },
  openGraph: {
    title: "Unnat Vega | Web Development Agency",
    description: "Blazing-fast, high-performance websites that drive growth.",
    url: "https://unnatvega.vercel.app",
    siteName: "Unnat Vega",
    images: [{
      url: "https://unnatvega.vercel.app/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Unnat Vega Web Development Agency"
    }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unnat Vega | Web Development Agency",
    description: "Blazing-fast, high-performance websites that drive growth.",
    images: ["https://unnatvega.vercel.app/twitter-image.jpg"],
  },
  other: {
    "geo.region": "IN-RJ",
    "geo.placename": "Jodhpur",
  },
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Unnat Vega",
    "description": "Web Development Agency specializing in high-performance websites",
    "url": "https://unnatvega.vercel.app",
    "logo": "https://unnatvega.vercel.app/unnatvega_logo.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Jodhpur",
      "addressRegion": "Rajasthan",
      "addressCountry": "IN"
    },
    "serviceType": ["Web Development", "SEO Optimization", "UI/UX Design", "Performance Optimization"],
    "priceRange": "$$",
    "areaServed": {
      "@type": "Country",
      "name": "India"
    }
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <GoogleAnalytics gaId="G-4D4EXH14R3" />
      </body>
    </html>
  );
}
```

---

## CONCLUSION

The Unnat Vega website has strong technical foundations with Next.js SSR, but critical SEO infrastructure is missing. The **most urgent fixes** are:

1. **Create robots.txt and sitemap.xml** - Currently blocking proper indexing
2. **Fix 404 errors on subpages** - Wasting crawl budget and confusing users
3. **Add structured data** - Zero schema markup detected
4. **Add Open Graph and canonical tags** - Essential for social sharing and duplicate content prevention

After these fixes, focus on image optimization and code splitting to improve Core Web Vitals scores.

**Estimated Time to SEO-Ready:** 8-12 hours of development work
