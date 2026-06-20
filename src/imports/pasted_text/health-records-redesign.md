Redesign this screen into a production-quality healthcare records experience for **Mantra Care**.

The current version feels like:

* a generic file manager
* a SaaS admin template
* disconnected widgets with healthcare labels added later

The redesign must instead feel like:

# a real patient health records and care continuity system.

This is NOT Dropbox or Google Drive.

The experience should revolve around:

* consultations
* prescriptions
* doctor-shared records
* therapy history
* lab reports
* continuity of treatment
* family health management

The product should emotionally communicate:

> “My health journey and doctor interactions are organized here securely.”

NOT:

> “Here are my uploaded files.”

---

# IMPORTANT PRODUCT THINKING

The UI should prioritize REAL healthcare workflows.

Main use cases:

1. Doctors from Mantra Care share:

* prescriptions
* therapy notes
* consultation summaries
* nutrition plans
* invoices

2. Users upload:

* external reports
* scans
* blood tests
* old prescriptions
* insurance documents

3. Users revisit records during ongoing treatment and follow-ups.

Design around these flows.

---

# PAGE NAME

Use:

# “Health Records”

Avoid generic naming like:

* My Files
* File Manager
* Storage

Subtitle:
“Access prescriptions, reports, and care history securely in one place.”

---

# DESIGN SYSTEM ALIGNMENT

VERY IMPORTANT:
The screen MUST inherit the existing Mantra Care design language.

Match:

* sidebar styling
* typography scale
* border radius
* spacing system
* button styles
* icon style
* brand colors
* shadows
* interaction patterns

The page should feel native to the platform.

NOT like a Dribbble redesign pasted into the app.

Use Mantra Care’s existing:

* blues
* teals
* muted neutrals
* calm healthcare palette

Avoid:

* random colorful cards
* rainbow pills
* generic SaaS gradients
* loud dashboard colors

---

# LAYOUT DIRECTION

Use a structured modern SaaS healthcare layout.

Avoid:

* huge whitespace gaps
* floating folder illustrations
* oversized cards
* dashboard clutter

Use:

* tighter hierarchy
* grouped content
* layered sections
* meaningful spacing
* clear information density

The page should feel calm but information-rich.

---

# TOP HEADER

LEFT:
Health Records

Subtitle:
“Your prescriptions, reports, scans, and consultation records securely organized.”

RIGHT:
Only ONE primary CTA:

# Upload Records

Remove:

* global share button
* meaningless filters
* random utility actions

Instead show subtle trust indicators:

* AES-256 Encrypted
* HIPAA Compliant
* Shared Securely by Mantra Care Doctors

These should feel lightweight and integrated.

---

# FAMILY PROFILE SWITCHER

Below header add an elegant family switcher.

NOT colorful pills.

Use refined profile tabs/cards with:

* avatar
* relation
* optional health context

Examples:

* Self — Active Therapy Plan
* Mother — Diabetes Care
* Father — Cardiology
* Child — Vaccination Records

This should feel premium and emotionally useful.

---

# SECTION 1 — RECENTLY SHARED BY CARE TEAM (HERO SECTION)

This is the MOST IMPORTANT section.

Why?
Because the real value of the platform is doctor continuity and shared care records.

Create visually rich cards for:

* prescriptions
* therapy summaries
* consultation notes
* nutrition plans

Each card should include:

* doctor avatar
* doctor name
* specialty
* consultation type
* consultation date
* attached document count
* quick preview thumbnail
* “Shared after consultation” context

Examples:

* Psychiatry Follow-up
* Therapy Session Summary
* Nutrition Consultation
* Lab Review Summary

This section should feel personal, medically important, and trustworthy.

---

# SECTION 2 — YOUR UPLOADED RECORDS

Separate clearly from doctor-shared content.

Label:

# Uploaded by You

Show:

* MRI scans
* external prescriptions
* blood reports
* insurance documents
* diagnostic reports

Encourage continuity of care subtly:
Example:
“Available for your Mantra Care doctors during consultations.”

---

# SECTION 3 — RECENT HEALTH RECORDS

Do NOT use a boring enterprise spreadsheet.

Create a cleaner, premium healthcare records list.

Each row should contain:

* document thumbnail/icon
* document title
* document type
* doctor/source
* uploaded context
* patient/family member
* upload date
* quick actions

The hierarchy should feel highly scannable.

---

# IMPORTANT — REMOVE FAKE WORKFLOW STATUSES

Do NOT use speculative statuses like:

* Action Recommended
* Awaiting Review
* Follow-up Suggested
* Pending Approval

The backend does not support these.

Instead use realistic healthcare metadata already available:

* Shared by Doctor
* Uploaded by You
* Prescription
* Lab Report
* Consultation Summary
* Therapy Notes
* Imaging
* Invoice
* Recently Added

The UI should feel operationally realistic and implementation-friendly.

Document type and source are MORE important than status.

---

# DOCUMENT ROW EXAMPLES

Examples of realistic content:

* Dr_Shah_Prescription_May2026.pdf
  Prescription • Shared by Dr. Arjun Shah
  Psychiatry Consultation • May 14, 2026

* CBC_Blood_Report_Apr2026.pdf
  Lab Report • Uploaded by You
  Thyrocare Diagnostic Report

* Anxiety_Therapy_Session_3.pdf
  Therapy Notes • Shared by Dr. Meera Sharma
  Session 3 Summary

* MRI_Lumbar_Spine.jpg
  Imaging • Uploaded by You
  Lumbar Spine Scan

Use believable healthcare metadata everywhere.

---

# PREVIEW EXPERIENCE

When clicking a document:
open a right-side preview drawer or modal.

Show:

* large preview
* doctor details
* consultation reference
* uploaded source
* medicines prescribed
* dosage summary
* notes
* download action

For prescriptions:
show:

* medicine list
* dosage
* duration
* doctor signature area

For reports:
show:

* highlighted findings
* test name
* lab information

---

# VISUAL DIRECTION

The experience should feel:

* medically trustworthy
* emotionally calm
* premium
* clinically organized
* mature
* implementation-ready

Visual inspiration:

* Apple Health
* modern EMR systems
* Linear
* Stripe Dashboard
* premium telehealth products

Avoid:

* cartoon folder graphics
* giant colorful widgets
* dashboard vanity metrics
* generic analytics cards
* fake enterprise complexity

---

# VERY IMPORTANT

Do NOT design this as:

# “document storage”

Design this as:

# “continuity of care”

Every section should reinforce:

* doctor relationships
* treatment history
* medical trust
* organized care journey

The final design should look like something created by a senior healthcare product designer for a real shipped healthcare platform.
