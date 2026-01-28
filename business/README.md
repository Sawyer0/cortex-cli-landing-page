# Business Documents Overview

This directory contains all business and legal documents for Listrum customer engagements.

---

## 📁 Document Inventory

### For Investors & Fundraising

| Document | Purpose | Audience | Status |
|----------|---------|----------|--------|
| **INVESTOR_PITCH_DECK.md** | Full presentation deck (20+ slides) | VCs, angel investors, accelerators | ✅ Ready |
| **EXECUTIVE_SUMMARY.md** | 2-page business overview | Busy executives, initial meetings | ✅ Ready |
| **TECHNICAL_DIFFERENTIATION.md** | Deep technical one-pager with benchmarks | Technical investors, CISOs, IT Directors | ✅ Ready |

**Key Metrics Highlighted:**
- 610-6,100x faster processing than competitors
- <50 MB RAM usage (vs 500+ MB industry standard)
- 8.9 MB binary (vs 200-500 MB ML solutions)
- 18:1 LTV:CAC ratio, 90% gross margins

---

### For Customer Contracts

| Document | Purpose | Audience | Status |
|----------|---------|----------|--------|
| **MASTER_SERVICE_AGREEMENT.md** | Overarching legal framework | Legal teams, procurement | ✅ Ready for legal review |
| **STATEMENT_OF_WORK_TEMPLATE.md** | Project-specific deployment details | CISOs, IT Directors, project managers | ✅ Ready (fill in customer details) |
| **SERVICE_LEVEL_AGREEMENT.md** | Uptime guarantees, support response times | IT Directors, CISOs | ✅ Ready |
| **DATA_DESTRUCTION_PROCEDURES.md** | HIPAA-compliant data destruction | Compliance officers, legal teams | ✅ Ready |

**Exhibits:**
- Exhibit A: Service Level Agreement (SLA)
- Exhibit B: Data Destruction Procedures
- Exhibit C: Business Associate Agreement (BAA) - see `docs/compliance/BAA_TEMPLATE.md`

---

## 🚀 How to Use These Documents

### Scenario 1: Fundraising / Investor Meeting

**Step 1:** Send **EXECUTIVE_SUMMARY.md** (2 pages) to secure the meeting

**Step 2:** Present **INVESTOR_PITCH_DECK.md** during the meeting
- Convert to slides (PowerPoint, Keynote, or Pitch.com)
- Add visuals: architecture diagrams, product screenshots, team photos
- Fill in placeholders: traction metrics, funding ask, team bios

**Step 3:** Share **TECHNICAL_DIFFERENTIATION.md** for technical due diligence
- Provide to technical advisors or engineer investors
- Include benchmark results and Verus proof links

---

### Scenario 2: Customer Assessment (Pilot Deployment)

**Documents Needed:**
1. **STATEMENT_OF_WORK_TEMPLATE.md** - Fill in Section 4.1 Option A (Assessment)
2. **MASTER_SERVICE_AGREEMENT.md** - Full contract (can be signed concurrently or reference existing MSA)
3. **BAA** (from `docs/compliance/BAA_TEMPLATE.md`) - Required for HIPAA compliance

**Pricing:**
- $4,900 per site for 30-day assessment
- Includes deployment + Threat Assessment Report
- 50% credit toward Year 1 if customer converts within 90 days

**Typical Timeline:**
- Week 1: Kickoff + pre-deployment
- Week 2-3: IOx container deployment
- Week 3: Validation testing
- Week 4: Training + handoff
- Day 30: Deliver Threat Assessment Report

---

### Scenario 3: Full Production Deployment (Annual Subscription)

**Documents Needed:**
1. **MASTER_SERVICE_AGREEMENT.md** - Full contract framework
2. **STATEMENT_OF_WORK_TEMPLATE.md** - Fill in Section 4.1 Option B (Annual Subscription)
3. **SERVICE_LEVEL_AGREEMENT.md** - Exhibit A (99.5%/99.9% uptime commitments)
4. **DATA_DESTRUCTION_PROCEDURES.md** - Exhibit B (NIST SP 800-88 compliance)
5. **BAA** (from `docs/compliance/BAA_TEMPLATE.md`) - Exhibit C (HIPAA compliance)

**Pricing Structure:**
- Platform Fee: $25,000/year (flat)
- Per-AP License: $250/AP/year
- Example: 150 APs = $25,000 + (150 × $250) = **$62,500/year**

**Payment Terms:**
- 100% due annually in advance (no Net-60)
- Auto-renews unless customer gives 60 days' notice

---

### Scenario 4: Expansion (Adding Sites/APs to Existing Contract)

**Documents Needed:**
1. **STATEMENT_OF_WORK_TEMPLATE.md** - Fill in Section 4.1 Option C (Expansion)
2. Reference existing MSA (no need to re-sign)

**Pricing:**
- Prorated for remainder of current contract year
- Example: Adding 50 APs on Month 6 = 50 × $250 × 6/12 = **$6,250**

---

## 📝 Document Customization Checklist

Before sending to customers, customize the following:

### In MSA (MASTER_SERVICE_AGREEMENT.md):
- [ ] Fill in Listrum's address (page 1)
- [ ] Update "Governing Law and Venue" (Section 12.4) - specify your state/county
- [ ] Verify insurance amounts (Section 11.1) match your actual policies
- [ ] Update contact emails: legal@listrum-cli.dev, support@listrum-cli.dev (Section 12.3)

### In SOW (STATEMENT_OF_WORK_TEMPLATE.md):
- [ ] Fill in customer name and sites (Section 2.1)
- [ ] List all Access Points with IOx compatibility status
- [ ] Specify pricing (Section 4.1) based on assessment vs full deployment
- [ ] Add customer project team contacts (Section 7.1)
- [ ] Add Listrum project team contacts (Section 7.2)
- [ ] Update timeline and milestones (Section 5)

### In SLA (SERVICE_LEVEL_AGREEMENT.md):
- [ ] Confirm uptime targets (99.5%/99.9%) match your infrastructure capacity
- [ ] Verify support phone numbers are operational
- [ ] Update escalation email addresses (Section 2.2)
- [ ] Review Service Credit percentages (Section 3.1) - adjust if needed

### In Data Destruction Procedures:
- [ ] Verify NIST SP 800-88 methods match your actual tools (e.g., `shred` command)
- [ ] Update compliance email: compliance@listrum-cli.dev (Section 9.1)
- [ ] Confirm backup retention periods (30-day rolling, 60-day purge)

---

## 🔧 Legal Review Recommendations

**Before Using with Customers:**

1. **Hire Legal Counsel** - These templates are comprehensive but should be reviewed by:
   - Healthcare compliance attorney (HIPAA expertise)
   - Tech transactions attorney (SaaS contracts)
   - State-specific attorney (for governing law clause)

2. **Insurance Verification** - Confirm you have:
   - General Liability: $1M per occurrence, $2M aggregate
   - Cyber Liability: $2M per claim
   - Errors & Omissions: $1M per claim

3. **Entity Formation** - Ensure "Listrum Security, Inc." is:
   - Properly incorporated (C-corp or LLC)
   - Registered to do business in customer's state (if required)
   - Has EIN and can issue invoices

4. **Compliance Certifications** - Referenced in SLA Section 5.3:
   - SOC 2 Type II (plan to obtain)
   - Annual penetration testing
   - HIPAA Security Risk Assessment

---

## 🎯 Sales Process Integration

### Typical Sales Funnel:

```
Lead Generation (Conference, cold outreach)
    ↓
Discovery Call (15 min) → Send EXECUTIVE_SUMMARY.md
    ↓
Technical Demo (30 min) → Show CISO Dashboard, explain edge deployment
    ↓
Business Case Review (60 min) → Present INVESTOR_PITCH_DECK slides 1-15
    ↓
Proposal (Assessment) → Send SOW + MSA + BAA
    ↓
Contract Negotiation (1-2 weeks)
    ↓
Assessment Deployment (30 days) → Deliver Threat Assessment Report
    ↓
Conversion Decision → If yes, upgrade to Option B (Annual Subscription)
    ↓
Full Deployment (4 weeks)
    ↓
Quarterly Business Reviews → Use QBR metrics from SLA Section 5.2
```

**Key Documents by Stage:**
- **Stage 1-3** (Pre-Proposal): EXECUTIVE_SUMMARY.md, TECHNICAL_DIFFERENTIATION.md
- **Stage 4** (Proposal): SOW (Option A), MSA, BAA
- **Stage 6** (Conversion): SOW (Option B), updated MSA
- **Stage 8** (Ongoing): SLA performance reports, QBR decks

---

## 📊 Pricing Quick Reference

| Customer Size | Sites | APs | Annual Revenue | Use Case |
|---------------|-------|-----|----------------|----------|
| **Small Regional** | 3 | 50 | $37,500 | Community health system |
| **Mid-Size Regional** | 8 | 150 | **$62,500** | Multi-site ambulatory network |
| **Large Health System** | 20 | 400 | $125,000 | Academic medical center + satellites |

**Assessment Pricing:**
- $4,900 per site (one-time)
- Typical close rate: 40-60% convert to annual subscription

**Platform Fee:**
- $25,000/year (flat, covers all sites)

**Per-AP License:**
- $250/AP/year (scales with deployment)

---

## 🔒 HIPAA Compliance Notes

**Critical Documents for Audits:**
1. **BAA** (Business Associate Agreement) - Must be executed before accessing PHI
2. **Data Destruction Procedures** - Proves NIST SP 800-88 compliance
3. **SLA Section 8** (Security Incidents) - 24-hour notification requirement
4. **SOW Section 11.2** (Data Ownership) - Clarifies PHI ownership and retention

**PHI Handling Architecture:**
- Raw MAC addresses → HMAC-SHA256 hashed before storage (never persisted)
- SQLCipher AES-256 encryption at rest
- TLS 1.3 encryption in transit
- Edge processing (PHI never leaves customer network)

---

## 📧 Contact Information for Documents

Update the following email addresses in all templates:

- **Legal inquiries**: legal@listrum-cli.dev
- **Sales/contracts**: sales@listrum-cli.dev
- **Technical support**: support@listrum-cli.dev
- **Compliance/security**: compliance@listrum-cli.dev
- **Escalations**: escalations@listrum-cli.dev
- **Executive contact**: ceo@listrum-cli.dev

Update phone numbers:
- **Support hotline**: [Insert 24/7 support number]
- **Sales**: [Insert sales team number]

---

## 🛠️ Tools for Document Management

**Recommended Tools:**

1. **Contract Signing**: DocuSign, HelloSign, or Adobe Sign
   - Upload MSA + SOW + BAA
   - Set signing order: Customer → Listrum
   - Auto-archive signed copies

2. **CRM Integration**: HubSpot, Salesforce, or Pipedrive
   - Track SOW execution dates
   - Set renewal reminders (60 days before anniversary)
   - Log QBR attendance

3. **Invoicing**: Stripe, QuickBooks, or Bill.com
   - Generate invoices per SOW Section 5.2
   - Set payment terms: Due upon receipt (annual upfront)
   - Track AR aging

---

## 📅 Important Deadlines & Timelines

**Contract Execution:**
- Assessment SOW → Deploy within 5 business days of DNA Center access
- Annual SOW → Deploy within 10 business days

**Renewals:**
- Customer must notify non-renewal **60 days** before anniversary (MSA Section 3.1)
- Listrum may increase fees by ≤10% with 60 days' notice (MSA Section 5.5)

**Support SLAs:**
- P0 (System Down) → 1 hour response, 24/7
- P1 (Critical Incident) → 4 hour response, 24/7
- P2 (High Impact) → 4 business hour response

**Data Destruction:**
- Edge Agent data → 30 days post-termination
- Dashboard data → 30 days post-termination
- Backup purge → 60 days post-termination

---

## 📚 Additional Resources

**Internal Documents** (not for customer distribution):
- `docs/internal/REVENUE_MODEL.md` - Unit economics, cash flow
- `docs/internal/PRICING_MODEL.md` - Pricing rationale and scenarios
- `docs/sales/SALES_ONE_PAGER.md` - Quick reference for AEs

**Compliance Documents** (provide to customers upon request):
- `docs/compliance/BAA_TEMPLATE.md` - Business Associate Agreement
- `docs/compliance/SECURITY_SAFEGUARDS.md` - Technical controls (HIPAA §164.308)
- `docs/compliance/PHI_DESTRUCTION.md` - Destruction protocols

**Technical Architecture** (for technical due diligence):
- `docs/active/Security_Architecture.md` - Canary & Clean Slate, Merkle trees
- `docs/adr/0002-verus-fsm-verification.md` - Formal verification design
- `README.md` - Project overview

---

## ✅ Pre-Launch Checklist

Before sending your first customer contract:

- [ ] Legal counsel has reviewed MSA, SOW, SLA, BAA
- [ ] Insurance policies obtained (GL, Cyber, E&O)
- [ ] Entity incorporated and registered
- [ ] Email addresses set up (legal@, support@, compliance@)
- [ ] 24/7 support phone number operational
- [ ] DocuSign or equivalent contract signing tool configured
- [ ] Invoicing system ready (Stripe, QuickBooks)
- [ ] CRM configured with contract templates
- [ ] SOC 2 audit timeline planned
- [ ] Customer Success team trained on SOW delivery

---

**Last Updated:** [Date]
**Version:** 1.0
**Maintained by:** Listrum Legal & Operations

For questions about these documents, contact: legal@listrum-cli.dev
