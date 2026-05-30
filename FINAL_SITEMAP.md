# AcdyOn 2.0 - FINAL SITEMAP ARCHITECTURE

**Status:** Complete Architecture (Pages Not Created)  
**Created:** 2026-05-29  
**Framework:** Next.js 15.3.3 Static Export  
**Total Pages:** 30 planned (17 currently built)

---

## NAVIGATION HIERARCHY

```
AcdyOn.com
├── Home (/ )
├── Executive Education
├── AI & Technology Programs
├── Doctoral Programs
├── Honorary Recognition
├── Universities
├── Resources
├── Success Stories
└── Contact & Support
```

---

# COMPLETE SITEMAP BY CATEGORY

## 1. EXECUTIVE EDUCATION

**Category Purpose:** Premium executive-focused learning pathways

### Current Pages (✅ Built):

```
/
├── Navigation: Home
├── Description: Homepage with authority strip, program showcase
├── Sections: Hero, Authority metrics, Partner logos, Program cards
└── CTA: Book Consultation, Explore Programs
```

```
/about
├── Navigation: About
├── Description: Institutional authority and positioning
├── Sections: Our Story, Mission/Vision, Why AcdyOn Exists, 
│             What Makes Us Different, Global Reach, 
│             Executive Philosophy, Academic Philosophy, Founder Quote
└── CTA: Explore Programs, View Partnerships
```

### Planned Pages (⏳ To Build):

```
/executive-education
├── Navigation: Executive Programs (Dropdown parent)
├── Description: Landing page for all executive education offerings
├── Sections: Executive Education Philosophy, Program Overview,
│             Case studies, ROI metrics, Executive Testimonials
├── URL Structure: /executive-education
└── CTA: View Programs, Consult Advisor

/executive-education/leadership-mastery
├── Parent: Executive Education
├── Description: Leadership skill development for C-suite
├── Sections: Program Overview, Curriculum, Outcomes, 
│             Corporate Partnerships, Success Stories
└── CTA: Book Consultation

/executive-education/strategic-advisory
├── Parent: Executive Education
├── Description: Strategic thinking for board-level professionals
└── CTA: Schedule Advisory Session
```

**URL Pattern:** `/executive-education/*`  
**Navigation:** Main menu dropdown under "Programs"

---

## 2. AI & TECHNOLOGY PROGRAMS

**Category Purpose:** Applied AI capability and technical mastery

### Current Pages (✅ Built):

```
/programs
├── Navigation: Programs (Dropdown parent)
├── Description: All programs listing with categories
├── Shows: All 4 flagship programs with cards
└── CTA: View Details, Book Consultation

/programs/agentic-ai-automation-mastery
├── Parent: Programs
├── Description: 4-month applied AI program (Automation track)
├── Sections: Snapshot, Curriculum (4 phases), Tools, Capstone Projects (3),
│             Mentorship, Outcomes, Audience, FAQ
└── CTA: Book Consultation, View Curriculum

/programs/agentic-ai-cybersecurity-mastery
├── Parent: Programs
├── Description: 16-week AI-powered cybersecurity program
├── Sections: Snapshot, Threat Reality, Industry Impact, Curriculum (3 parts),
│             Tools, Labs, Career Pathways, Certifications, 
│             Learner Outcomes, FAQ
└── CTA: Book Consultation, See Structure

/ai-courses
├── Navigation: Courses (Separate menu item or under Programs)
├── Description: Standalone AI courses and skill builders
└── CTA: Explore Courses

/ai-courses/agentic-ai
├── Parent: AI Courses
├── Description: Modular AI fundamentals course
└── CTA: Enroll, Start Free Lesson
```

### Planned Pages (⏳ To Build):

```
/programs/applied-ai-for-executives
├── Parent: Programs
├── Description: AI strategy and implementation for leadership
├── Focus: High-level AI understanding, org adoption, ROI
└── URL: /programs/applied-ai-for-executives

/ai-courses/prompt-engineering
├── Parent: AI Courses
├── Description: Advanced prompt engineering mastery
└── URL: /ai-courses/prompt-engineering

/ai-courses/ai-security-fundamentals
├── Parent: AI Courses
├── Description: Security fundamentals for AI systems
└── URL: /ai-courses/ai-security-fundamentals

/ai-courses/automation-workflows
├── Parent: AI Courses
├── Description: Building automated workflows with AI
└── URL: /ai-courses/automation-workflows
```

**URL Pattern:** `/programs/*` and `/ai-courses/*`  
**Navigation:** Main menu dropdown under "Programs"  
**Hierarchy:** Programs (parent) → Individual programs (children)

---

## 3. DOCTORAL PROGRAMS

**Category Purpose:** Advanced academic credentials and research pathways

### Current Pages (✅ Built):

```
/doctoral-programs
├── Navigation: Doctoral Programs (Main menu)
├── Description: Three doctoral tracks - DBA, PhD, Post-Doc
├── Sections: Why Doctoral Advancement, Three Tracks (with details),
│             Program Outcomes, Eligibility, Process, FAQ
└── CTA: Book Consultation, View Requirements
```

### Planned Pages (⏳ To Build):

```
/doctoral-programs/dba
├── Parent: Doctoral Programs
├── Description: Doctor of Business Administration
├── Sections: Purpose, Duration (2-4 years), Format, Curriculum,
│             Faculty, Research Options, Outcomes, Testimonials
└── URL: /doctoral-programs/dba

/doctoral-programs/phd
├── Parent: Doctoral Programs
├── Description: Doctor of Philosophy
├── Sections: Discipline focus, Application process, Research tracking,
│             Academic rigor, Publication support, Career paths
└── URL: /doctoral-programs/phd

/doctoral-programs/post-doctoral
├── Parent: Doctoral Programs
├── Description: Post-Doctoral Fellowship
├── Sections: Advanced research, Duration (1-2 years), 
│             Institutional affiliation, Academic standing
└── URL: /doctoral-programs/post-doctoral

/doctoral-programs/application
├── Parent: Doctoral Programs
├── Description: Application process and requirements
├── Sections: Eligibility checklist, Application steps, Timeline,
│             Documents needed, Assessment criteria
└── URL: /doctoral-programs/application
```

**URL Pattern:** `/doctoral-programs/*`  
**Navigation:** Main menu item (with dropdown for tracks)  
**Hierarchy:** Doctoral Programs (parent) → Three tracks (children)

---

## 4. HONORARY RECOGNITION

**Category Purpose:** Institutional distinction for accomplished professionals

### Current Pages (✅ Built):

```
/honorary-recognition
├── Navigation: Honorary Recognition (Main menu)
├── Description: Honorary Doctorate and Honorary Professorship pathways
├── Sections: Recognition Philosophy, Two Pathways (with badges),
│             Eligibility, Evaluation Process, Significance & Impact,
│             Candidate Voices, FAQ
└── CTA: Book Consultation, Learn More
```

### Planned Pages (⏳ To Build):

```
/honorary-recognition/doctorate
├── Parent: Honorary Recognition
├── Description: Honorary Doctorate pathway
├── Sections: What it means, Eligibility, Nomination process,
│             Significance, Recipients gallery, Application
└── URL: /honorary-recognition/doctorate

/honorary-recognition/professorship
├── Parent: Honorary Recognition
├── Description: Honorary Professorship pathway
├── Sections: Academic distinction, Who qualifies, Benefits,
│             Faculty engagement opportunities, Application
└── URL: /honorary-recognition/professorship

/honorary-recognition/application
├── Parent: Honorary Recognition
├── Description: Application and nomination process
├── Sections: Eligibility review, Documentation requirements,
│             Timeline, Evaluation criteria, FAQ
└── URL: /honorary-recognition/application

/honorary-recognition/recipients
├── Parent: Honorary Recognition
├── Description: Gallery of recipients and their contributions
├── Sections: Recipient profiles, Institution partnerships,
│             Impact stories
└── URL: /honorary-recognition/recipients
```

**URL Pattern:** `/honorary-recognition/*`  
**Navigation:** Main menu item (with dropdown for pathways)  
**Hierarchy:** Honorary Recognition (parent) → Two pathways (children)

---

## 5. UNIVERSITIES

**Category Purpose:** Global institutional partnerships and recognition pathways

### Current Pages (✅ Built):

```
/universities
├── Navigation: Universities (Dropdown parent)
├── Description: Global academic partner network
├── Sections: Partner University Showcase, Geographic Presence,
│             Recognition Pathways, How Recognition Works,
│             Why Partnerships Matter, Verification & Credibility, FAQ
└── CTA: View Partnerships, Schedule Review
```

### Planned Pages (⏳ To Build):

```
/universities/partner-institutions
├── Parent: Universities
├── Description: Complete partner university directory
├── Sections: University profiles, Recognition norms by country,
│             Accreditation status, Program compatibility
└── URL: /universities/partner-institutions

/universities/geographic-guide
├── Parent: Universities
├── Description: Regional guides for academic recognition
├── Sections: South Asia region, Middle East region, Europe region,
│             Americas region, Recognition norms by country
└── URL: /universities/geographic-guide

/universities/recognition-process
├── Parent: Universities
├── Description: Step-by-step recognition pathway process
├── Sections: Consultation, Eligibility assessment, Institutional matching,
│             Application, Evaluation, Conferral
└── URL: /universities/recognition-process

/universities/eligibility-assessment
├── Parent: Universities
├── Description: Check your eligibility for recognition
├── Sections: Self-assessment tool, Required documents,
│             Timeline estimator, FAQ
└── URL: /universities/eligibility-assessment
```

**URL Pattern:** `/universities/*`  
**Navigation:** Main menu dropdown under "Universities"  
**Hierarchy:** Universities (parent) → Institutional detail pages (children)

---

## 6. RESOURCES

**Category Purpose:** Learning materials, events, and support content

### Current Pages (✅ Built):

```
/resources/brochures
├── Navigation: Resources (Dropdown parent)
├── Description: Downloadable program brochures and guides
├── Shows: All program brochures with download links
└── CTA: Download PDF

/resources/events
├── Navigation: Resources (Dropdown parent)
├── Description: Upcoming webinars, workshops, and events
├── Shows: Event calendar with registration
└── CTA: Register, Add to Calendar

/blogs
├── Navigation: Insights or Blog (Separate menu item)
├── Description: Articles on education, AI, and professional growth
├── Shows: Blog post listing with filters
└── CTA: Read Article, Subscribe
```

### Planned Pages (⏳ To Build):

```
/resources/case-studies
├── Parent: Resources
├── Description: Real-world case studies and implementation stories
├── Sections: Industry case studies, Program outcomes, 
│             ROI metrics, Client testimonials
└── URL: /resources/case-studies

/resources/whitepapers
├── Parent: Resources
├── Description: Research whitepapers and technical guides
├── Sections: AI research, Education trends, Industry insights
└── URL: /resources/whitepapers

/resources/webinars
├── Parent: Resources
├── Description: Recorded webinars and training sessions
├── Sections: Upcoming webinars, Recorded archive, Topics
└── URL: /resources/webinars

/resources/glossary
├── Parent: Resources
├── Description: Terminology guide for AI and education
├── Sections: Alphabetical listing, Searchable definitions
└── URL: /resources/glossary

/blogs/[slug]
├── Parent: Blogs
├── Description: Individual blog post pages
├── Sections: Article content, Author bio, Related posts,
│             Comments, Newsletter signup
└── URL: /blogs/[article-slug]

/insights
├── Navigation: Insights or Thought Leadership
├── Description: Executive perspective on industry trends
├── Shows: Articles from leadership team
└── URL: /insights
```

**URL Pattern:** `/resources/*`, `/blogs/*`, `/insights/*`  
**Navigation:** Main menu dropdown under "Resources"  
**Hierarchy:** Resources (parent) → Sub-resources (children)

---

## 7. SUCCESS STORIES

**Category Purpose:** Professional advancement outcomes and testimonials

### Current Pages (✅ Built):

```
/success-stories
├── Navigation: Success Stories (Dropdown parent)
├── Description: Professional advancement stories from learners
├── Sections: Stats bar, 9 enriched story cards showing:
│             Background → Objective → Outcome → Current Position
├── Program coverage breakdown by type
└── CTA: View All, Schedule Consultation
```

### Planned Pages (⏳ To Build):

```
/success-stories/dba-graduates
├── Parent: Success Stories
├── Description: DBA program completion stories
├── Sections: Graduate profiles, Career transitions, 
│             Testimonials, Program impact
└── URL: /success-stories/dba-graduates

/success-stories/phd-researchers
├── Parent: Success Stories
├── Description: PhD program research success stories
├── Sections: Research contributions, Academic publications,
│             Institutional positions
└── URL: /success-stories/phd-researchers

/success-stories/honorary-recipients
├── Parent: Success Stories
├── Description: Honorary recognition recipient stories
├── Sections: Achievement stories, Professional impact,
│             Community contributions
└── URL: /success-stories/honorary-recipients

/success-stories/ai-professionals
├── Parent: Success Stories
├── Description: AI program graduate stories
├── Sections: Career pivots, Project outcomes, 
│             Salary progression, Client work
└── URL: /success-stories/ai-professionals

/success-stories/[slug]
├── Parent: Success Stories
├── Description: Individual learner story page
├── Sections: Full story, Background details, Learning journey,
│             Current role, Impact, Related testimonials
└── URL: /success-stories/[learner-slug]
```

**URL Pattern:** `/success-stories/*`  
**Navigation:** Main menu dropdown under "Success Stories"  
**Hierarchy:** Success Stories (parent) → Story categories (children) → Individual stories (grandchildren)

---

## 8. CONTACT & SUPPORT

**Category Purpose:** Engagement, consultation, and ongoing support

### Current Pages (✅ Built):

```
/contact
├── Navigation: Contact (Footer or Main menu)
├── Description: General contact and support page
├── Sections: Contact form, Support email, Phone, Office hours
└── CTA: Send Message, Schedule Call

/book-consultation
├── Navigation: Book Consultation (CTA button on all pages)
├── Description: Schedule initial consultation with academic adviser
├── Sections: Consultation form, Available advisers, Time slots,
│             What to expect, FAQ
└── CTA: Schedule Now
```

### Planned Pages (⏳ To Build):

```
/support
├── Navigation: Support (Footer or Help)
├── Description: FAQ and support resources
├── Sections: General FAQ, Technical support, Account support,
│             Program questions, Live chat
└── URL: /support

/support/faq
├── Parent: Support
├── Description: Comprehensive FAQ by topic
├── Sections: Programs, Eligibility, Admissions, Technical,
│             Billing, Support, Career
└── URL: /support/faq

/support/contact-us
├── Parent: Support
├── Description: Multiple contact methods
├── Sections: Contact form, Email support, Phone support,
│             Response times, Languages supported
└── URL: /support/contact-us

/schedule-consultation
├── Navigation: (Alternative to /book-consultation)
├── Description: Advanced consultation scheduling with calendar
├── Sections: Adviser selection, Time availability, 
│             Consultation type selector, Confirmation
└── URL: /schedule-consultation
```

**URL Pattern:** `/contact`, `/book-consultation`, `/support/*`  
**Navigation:** Main menu item or CTA buttons (scattered throughout)  
**Hierarchy:** Support (parent) → Sub-pages (children)

---

## UTILITY PAGES

### Current Pages (✅ Built):

```
/404
├── Navigation: Not Found (Error page)
├── Description: 404 error page
├── CTA: Return Home, Contact Support

/_not-found
├── Navigation: Next.js catch-all
├── Description: Fallback error page
└── CTA: Return Home
```

### Planned Pages (⏳ To Build):

```
/privacy-policy
├── Navigation: Footer link
├── Description: Privacy policy and data protection
├── Sections: Data collection, Usage, Rights, Contact
└── URL: /privacy-policy

/terms-of-service
├── Navigation: Footer link
├── Description: Terms of service and user agreement
├── Sections: Acceptance, Usage rights, Limitations, Liability
└── URL: /terms-of-service

/accessibility
├── Navigation: Footer link
├── Description: Accessibility statement
├── Sections: WCAG compliance, Accessibility features, 
│             Support, Report issue
└── URL: /accessibility

/sitemap
├── Navigation: Footer link
├── Description: Sitemap for navigation and SEO
├── Format: Hierarchical listing of all pages
└── URL: /sitemap

/robots.txt
├── Description: Search engine crawler instructions
└── File: robots.txt (root level)
```

---

# COMPLETE URL STRUCTURE

## By Parent Category

### Executive Education
```
/
/about
/executive-education
/executive-education/leadership-mastery
/executive-education/strategic-advisory
```

### AI & Technology Programs
```
/programs
/programs/agentic-ai-automation-mastery
/programs/agentic-ai-cybersecurity-mastery
/programs/applied-ai-for-executives
/ai-courses
/ai-courses/agentic-ai
/ai-courses/prompt-engineering
/ai-courses/ai-security-fundamentals
/ai-courses/automation-workflows
```

### Doctoral Programs
```
/doctoral-programs
/doctoral-programs/dba
/doctoral-programs/phd
/doctoral-programs/post-doctoral
/doctoral-programs/application
```

### Honorary Recognition
```
/honorary-recognition
/honorary-recognition/doctorate
/honorary-recognition/professorship
/honorary-recognition/application
/honorary-recognition/recipients
```

### Universities
```
/universities
/universities/partner-institutions
/universities/geographic-guide
/universities/recognition-process
/universities/eligibility-assessment
```

### Resources
```
/resources/brochures
/resources/events
/resources/case-studies
/resources/whitepapers
/resources/webinars
/resources/glossary
/blogs
/blogs/[slug]
/insights
```

### Success Stories
```
/success-stories
/success-stories/dba-graduates
/success-stories/phd-researchers
/success-stories/honorary-recipients
/success-stories/ai-professionals
/success-stories/[slug]
```

### Contact & Support
```
/contact
/book-consultation
/support
/support/faq
/support/contact-us
/schedule-consultation
```

### Utility Pages
```
/404
/_not-found
/privacy-policy
/terms-of-service
/accessibility
/sitemap
/robots.txt
```

---

# NAVIGATION STRUCTURE (Main Menu)

```
Home
├── Home (/)

Executive Education
├── About (/about)
├── Executive Education (/executive-education)
│   ├── Leadership Mastery (/executive-education/leadership-mastery)
│   └── Strategic Advisory (/executive-education/strategic-advisory)

Programs ▼
├── All Programs (/programs)
├── Agentic AI & Automation (/programs/agentic-ai-automation-mastery)
├── AI & Cybersecurity (/programs/agentic-ai-cybersecurity-mastery)
├── Applied AI for Executives (/programs/applied-ai-for-executives)

Courses ▼
├── All Courses (/ai-courses)
├── Agentic AI Fundamentals (/ai-courses/agentic-ai)
├── Prompt Engineering (/ai-courses/prompt-engineering)
├── AI Security Fundamentals (/ai-courses/ai-security-fundamentals)
└── Automation Workflows (/ai-courses/automation-workflows)

Doctoral Programs ▼
├── Overview (/doctoral-programs)
├── Doctor of Business Admin (/doctoral-programs/dba)
├── Doctor of Philosophy (/doctoral-programs/phd)
├── Post-Doctoral Fellowship (/doctoral-programs/post-doctoral)
└── Application (/doctoral-programs/application)

Honorary Recognition ▼
├── Overview (/honorary-recognition)
├── Honorary Doctorate (/honorary-recognition/doctorate)
├── Honorary Professorship (/honorary-recognition/professorship)
├── Application (/honorary-recognition/application)
└── Recipients (/honorary-recognition/recipients)

Universities ▼
├── Network Overview (/universities)
├── Partner Institutions (/universities/partner-institutions)
├── Geographic Guide (/universities/geographic-guide)
├── Recognition Process (/universities/recognition-process)
└── Eligibility Assessment (/universities/eligibility-assessment)

Resources ▼
├── Brochures (/resources/brochures)
├── Events (/resources/events)
├── Case Studies (/resources/case-studies)
├── Whitepapers (/resources/whitepapers)
├── Webinars (/resources/webinars)
└── Glossary (/resources/glossary)

Success Stories ▼
├── All Stories (/success-stories)
├── DBA Graduates (/success-stories/dba-graduates)
├── PhD Researchers (/success-stories/phd-researchers)
├── Honorary Recipients (/success-stories/honorary-recipients)
└── AI Professionals (/success-stories/ai-professionals)

Blog ▼
├── All Articles (/blogs)
├── Insights & Thought Leadership (/insights)

Support
├── Contact (/contact)
├── Book Consultation (CTA) (/book-consultation)
├── Support Center (/support)
│   ├── FAQ (/support/faq)
│   └── Contact Us (/support/contact-us)

Footer Links
├── Privacy Policy (/privacy-policy)
├── Terms of Service (/terms-of-service)
├── Accessibility (/accessibility)
└── Sitemap (/sitemap)
```

---

# PAGE COUNT SUMMARY

| Category | Built ✅ | Planned ⏳ | Total |
|----------|---------|----------|-------|
| Executive Education | 1 | 3 | 4 |
| AI & Technology Programs | 4 | 4 | 8 |
| Doctoral Programs | 1 | 3 | 4 |
| Honorary Recognition | 1 | 3 | 4 |
| Universities | 1 | 3 | 4 |
| Resources | 3 | 4 | 7 |
| Success Stories | 1 | 4 | 5 |
| Contact & Support | 2 | 2 | 4 |
| Utility Pages | 2 | 5 | 7 |
| **TOTALS** | **17** | **31** | **48** |

---

# DESIGN CONSISTENCY NOTES

All pages will follow:
- ✅ Same design system (Tailwind CSS, navy/blue/gold/cyan palette)
- ✅ Same component patterns (PageHero, SectionHeading, Cards, CTAs)
- ✅ Same navigation structure (consistent menu)
- ✅ Same footer (links, contact, social)
- ✅ Same responsive design (mobile-first)
- ✅ Same performance (static export, pre-rendered HTML)
- ✅ Same institutional voice (professional, authority-focused)

---

# PARENT-CHILD RELATIONSHIPS

```
Root
├── Home
├── About (Global institution context)
│
├── Executive Education
│   ├── Leadership Mastery
│   └── Strategic Advisory
│
├── Programs
│   ├── Agentic AI & Automation Mastery
│   ├── AI & Cybersecurity Mastery
│   └── Applied AI for Executives
│
├── Courses
│   ├── Agentic AI
│   ├── Prompt Engineering
│   ├── AI Security Fundamentals
│   └── Automation Workflows
│
├── Doctoral Programs
│   ├── DBA
│   ├── PhD
│   ├── Post-Doctoral
│   └── Application
│
├── Honorary Recognition
│   ├── Honorary Doctorate
│   ├── Honorary Professorship
│   ├── Application
│   └── Recipients Gallery
│
├── Universities
│   ├── Partner Institutions
│   ├── Geographic Guide
│   ├── Recognition Process
│   └── Eligibility Assessment
│
├── Resources
│   ├── Brochures
│   ├── Events
│   ├── Case Studies
│   ├── Whitepapers
│   ├── Webinars
│   └── Glossary
│
├── Success Stories
│   ├── DBA Graduates
│   ├── PhD Researchers
│   ├── Honorary Recipients
│   ├── AI Professionals
│   └── Individual Stories
│
├── Blog
│   ├── Article Listing
│   ├── Individual Articles
│   └── Insights
│
├── Support
│   ├── Book Consultation
│   ├── Contact
│   ├── Support Center
│   │   ├── FAQ
│   │   └── Contact Us
│   └── Schedule Consultation
│
└── Utility (Footer)
    ├── Privacy Policy
    ├── Terms of Service
    ├── Accessibility
    ├── Sitemap
    └── Robots.txt
```

---

# NEXT STEPS

**Phase 4 Status:** ✅ Architecture Complete

**To Build Pages (Future Phases):**
1. Start with high-impact parent pages (Executive Education, Programs, Universities)
2. Then add tier-2 pages (specific programs, tracks, guides)
3. Then add resource pages (case studies, webinars, blog infrastructure)
4. Finally add utility pages (privacy, accessibility, etc.)

**Priority Order for Future Implementation:**
1. Executive Education tier (1 parent + 2 children)
2. Courses tier (parent + 4 children)
3. Resources tier (case studies, webinars)
4. Success Stories tier (category pages + archive)
5. Support tier (FAQ, support center)
6. Utility pages (legal, accessibility)

**Total Build Effort:** ~31 additional pages over future phases  
**Current Completeness:** 35% (17/48 pages built)

---

**Architecture Complete ✅ | Ready for Future Implementation | No Code Changes Made**
