# Landing Page Content Rewrite: Problem-Centric Messaging

## TL;DR

> **Quick Summary**: Rewrite the Listrum landing page to shift from feature-focused content ("formal verification", "state machines") to problem-centric messaging that speaks directly to CISOs' pain: learning about ransomware attacks only after systems fail. 
>
> **Deliverables**: Rewritten content for 8 sections (hero, problem, mandate, detection, workflow, security, proof, CTA) + About page refresh
>
> **Key Principles**: 
> - Primary buyer: CISO (Chief Information Security Officer)
> - Tone: Confident authority (position as inevitable choice)
> - Metaphor usage: Dial it back (hook with clinical/sepsis, then clear business language)
> - Social proof: None available (pre-launch), so focus on technical proof points
>
> **Estimated Effort**: Medium (8 sections × 2-3 hours each)
> **Parallel Execution**: YES - 3 waves (Wave 1: Hero/Problem, Wave 2: Solution sections, Wave 3: CTA/About)
> **Critical Path**: Hero → Problem → Solution → CTA

---

## Context

### Original Request
Rewrite the Listrum landing page so it speaks to users and their problems, not just features.

### Interview Summary
**Key Decisions**:
- **Primary buyer**: CISO (Chief Information Security Officer) - Security-focused, cares about detection and response
- **Tone**: Confident authority - Position Listrum as the inevitable choice ("This is how it's done now")
- **Social proof**: None yet - We're pre-launch, so focus on technical differentiation
- **Metaphor usage**: Dial it back - Use "Digital Sepsis" as a hook, then switch to clear business language

**Research Findings**:
From the white paper: "Hospital CISOs consistently report learning about ransomware attacks only after critical systems begin shutting down."

The core problem is the **network visibility gap** - cloud-based monitoring samples 90% of data away, creating blind spots where ransomware spreads undetected.

**Current Content Issues**:
1. Feature-focused: "Network Sterility Through Formal Verification" - speaks about the product, not the user's pain
2. Missing vivid problem description: No "2 AM, ICU devices encrypting" scenario
3. Heavy clinical metaphor throughout - needs to dial back after the hook
4. Missing "Jobs to Be Done" framing - doesn't answer "What job does the CISO hire Listrum for?"

### Metis Review
**Key gaps identified and addressed**:
- Need concrete "before/after" scenarios for each section
- Must include risk reversal (what if it doesn't work?)
- Should address competitive differentiation explicitly
- Acceptance criteria must include specific headlines and copy, not just "rewrite section"

---

## Work Objectives

### Core Objective
Transform the Listrum landing page from a feature list into a compelling narrative that makes CISOs feel understood and positions Listrum as the inevitable solution to their network visibility problem.

### Concrete Deliverables
- **Hero Section**: New headline/subheadline that leads with the problem
- **Problem Section** (NEW): Vivid description of the visibility gap
- **Mandate Section**: Reframed from compliance burden to protection
- **Detection Section**: Connect features to outcomes
- **Workflow Section**: Streamlined to focus on CISO value
- **Security Section**: Emphasize "no new hardware" and ease of deployment
- **Proof Section**: Make formal verification tangible and valuable
- **CTA Section**: Reduced friction with assessment offer
- **About Page**: Light refresh to match new tone

### Definition of Done
- Every section rewritten with new headlines and body copy
- Each section answers: "What problem does this solve?" and "Why should the CISO care?"
- Clinical metaphor used as hook only, then clear business language
- All content reviewed against Brand Bible (authoritative, brief, deterministic)
- Playwright verification: Screenshot each section showing new content renders correctly

### Must Have
- Problem-centric messaging in Hero and new Problem section
- Clear connection between features and CISO outcomes
- "Digital Sepsis" metaphor used as hook, not throughout
- Technical accuracy maintained (formal verification, edge deployment, etc.)
- Consistent confident authority tone

### Must NOT Have (Guardrails)
- NO fear-mongering or alarmist language (confident authority, not fear-based)
- NO over-promising ("prevent all attacks") - be precise
- NO AI-slop generic phrases: "in today's rapidly evolving threat landscape", "cutting-edge solution", "unparalleled protection"
- NO dilution of technical credibility - keep formal verification, Merkle trees, etc. but explain WHY they matter
- NO competitor bashing - differentiate on facts, not attacks
- NO sections longer than 150 words (keep it brief per Brand Bible)

---

## Verification Strategy

### Test Decision
- **Infrastructure exists**: NO (content rewrite only, no tests)
- **Automated tests**: NO
- **Agent-Executed QA**: YES - Visual verification via Playwright screenshots

### Agent-Executed QA Scenarios (MANDATORY - ALL tasks)

Each task must include:

**Scenario: Verify content renders correctly**
  Tool: Playwright (playwright skill)
  Preconditions: Dev server running on localhost:3000
  Steps:
    1. Navigate to http://localhost:3000
    2. Scroll to section
    3. Screenshot the section
    4. Verify new headline is visible
    5. Verify body copy is visible and readable
  Expected Result: Section displays new content correctly
  Evidence: `.sisyphus/evidence/task-{N}-{section-name}.png`

**Scenario: Mobile responsiveness check**
  Tool: Playwright (playwright skill)
  Preconditions: Dev server running
  Steps:
    1. Set viewport to mobile (375px width)
    2. Navigate to http://localhost:3000
    3. Scroll to section
    4. Screenshot
  Expected Result: Content stacks correctly on mobile
  Evidence: `.sisyphus/evidence/task-{N}-{section-name}-mobile.png`

---

## Execution Strategy

### Parallel Execution Waves

```
Wave 1 (Foundation - Start Immediately):
├── Task 1: Rewrite Hero Section (no dependencies)
└── Task 2: Create new Problem Section (no dependencies)

Wave 2 (Solution - After Wave 1):
├── Task 3: Rewrite Mandate Section (depends: 1, 2)
├── Task 4: Rewrite Detection Section (depends: 1, 2)
├── Task 5: Rewrite Workflow Section (depends: 1, 2)
└── Task 6: Rewrite Security Section (depends: 1, 2)

Wave 3 (Proof & Conversion - After Wave 2):
├── Task 7: Rewrite Proof Section (depends: 3-6)
└── Task 8: Rewrite CTA Section (depends: 7)

Wave 4 (Polish - After Wave 3):
└── Task 9: Refresh About Page (depends: 1-8)

Critical Path: Task 1 → Task 2 → Task 3 → Task 7 → Task 8
Parallel Speedup: ~60% faster than sequential
```

### Dependency Matrix

| Task | Depends On | Blocks | Can Parallelize With |
|------|------------|--------|---------------------|
| 1 (Hero) | None | 2, 3, 4, 5, 6 | None |
| 2 (Problem) | None | 3, 4, 5, 6 | 1 |
| 3 (Mandate) | 1, 2 | 7 | 4, 5, 6 |
| 4 (Detection) | 1, 2 | 7 | 3, 5, 6 |
| 5 (Workflow) | 1, 2 | 7 | 3, 4, 6 |
| 6 (Security) | 1, 2 | 7 | 3, 4, 5 |
| 7 (Proof) | 3-6 | 8 | None |
| 8 (CTA) | 7 | 9 | None |
| 9 (About) | 1-8 | None | None |

---

## TODOs

### Wave 1: Foundation

- [ ] 1. Rewrite Hero Section - Lead with the nightmare scenario

  **What to do**:
  - Rewrite headline: Current "Network Sterility Through Formal Verification" → New: Lead with problem
  - Rewrite subheadline: Connect to CISO's daily reality
  - Keep terminal animation component unchanged
  - Target 15-20 words for headline, 25-35 for subheadline

  **Must NOT do**:
  - Don't remove or modify the terminal visualization component
  - Don't change button text (keep "Deploy Ls-443" and "Read the Manifesto")
  - Don't use generic startup language ("revolutionary", "game-changing")

  **Recommended Agent Profile**:
  - **Category**: `writing` - This is primarily copywriting work
  - **Skills**: None needed - this is content writing, not technical implementation
  - **Skills Evaluated but Omitted**: `frontend-ui-ux` (not changing UI, just content), `marketing-psychology` (already incorporated in requirements)

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1 (with Task 2)
  - **Blocks**: Tasks 3-6
  - **Blocked By**: None

  **References**:
  - `components/hero-section.tsx:97-108` - Current headline/subheadline to rewrite
  - `WHITEPAPER.md:13` - "Hospital CISOs consistently report learning about ransomware attacks..."
  - `business/BRAND-BIBLE.md:41-48` - Voice guidelines (Authoritative, Brief, Deterministic)
  - `business/BRAND-BIBLE.md:13-19` - Digital Sepsis metaphor (use as hook)

  **Acceptance Criteria**:
  - [ ] New headline leads with problem, not solution (examples: "Your Ransomware Attack Is Already In Progress", "You Can't Detect What You Can't See", "The 90% Blind Spot")
  - [ ] Subheadline explains the visibility gap in CISO terms
  - [ ] Terminal animation component preserved unchanged
  - [ ] Button text unchanged
  - [ ] Clinical metaphor used in ≤2 sentences, then business language

  **Agent-Executed QA Scenarios**:
  ```
  Scenario: Hero section displays new content
    Tool: Playwright (playwright skill)
    Preconditions: Dev server running on localhost:3000
    Steps:
      1. Navigate to http://localhost:3000
      2. Wait for page load (timeout: 10s)
      3. Verify new headline is visible in h1 element
      4. Screenshot: .sisyphus/evidence/task-1-hero.png
      5. Scroll to check terminal animation is present
    Expected Result: New headline visible, terminal animation working
    Evidence: .sisyphus/evidence/task-1-hero.png

  Scenario: Hero responsive on mobile
    Tool: Playwright (playwright skill)
    Preconditions: Dev server running
    Steps:
      1. Set viewport to 375px width
      2. Navigate to http://localhost:3000
      3. Screenshot: .sisyphus/evidence/task-1-hero-mobile.png
    Expected Result: Headline readable on mobile, content stacks
    Evidence: .sisyphus/evidence/task-1-hero-mobile.png
  ```

  **Commit**: YES
  - Message: `content(hero): rewrite with problem-centric messaging`
  - Files: `components/hero-section.tsx`

---

- [ ] 2. Create new Problem Section - The visibility gap explained

  **What to do**:
  - NEW SECTION between Hero and Mandate
  - Explain the "network visibility gap" in vivid terms
  - Include the 90% sampling statistic from white paper
  - Paint the "2 AM scenario" - what happens when you can't see the attack
  - Target 100-120 words total

  **Must NOT do**:
  - Don't make it too long (keep it brief per Brand Bible)
  - Don't get too technical (no deep NetFlow protocol details)
  - Don't use fear tactics (confident authority, not panic)

  **Recommended Agent Profile**:
  - **Category**: `writing`
  - **Skills**: None needed

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1 (with Task 1)
  - **Blocks**: Tasks 3-6
  - **Blocked By**: None

  **References**:
  - `WHITEPAPER.md:21-53` - The network visibility gap chapter
  - `WHITEPAPER.md:25` - "A remote clinic generating fifty thousand network flows per minute might transmit only five thousand sampled flows"
  - `WHITEPAPER.md:43-53` - Ransomware detection failure timeline
  - `app/page.tsx:100-104` - Where to insert new section (between HeroSection and MandateSection)

  **Acceptance Criteria**:
  - [ ] New ProblemSection component created
  - [ ] Section explains the visibility gap in CISO-relevant terms
  - [ ] Includes specific statistic (90% blind spot or similar)
  - [ ] Includes vivid scenario ("By the time you get the alert...")
  - [ ] Section added to page.tsx between Hero and Mandate
  - [ ] Uses existing AnimatedSection wrapper for consistency

  **Agent-Executed QA Scenarios**:
  ```
  Scenario: Problem section renders correctly
    Tool: Playwright (playwright skill)
    Preconditions: Dev server running
    Steps:
      1. Navigate to http://localhost:3000
      2. Scroll to #problem section
      3. Verify section heading visible
      4. Screenshot: .sisyphus/evidence/task-2-problem.png
    Expected Result: Section visible with new content
    Evidence: .sisyphus/evidence/task-2-problem.png
  ```

  **Commit**: YES (can group with Task 1)
  - Message: `content(problem): add new visibility gap section`
  - Files: `components/problem-section.tsx`, `app/page.tsx`

---

### Wave 2: Solution Sections

- [ ] 3. Rewrite Mandate Section - Reframe from compliance burden to protection

  **What to do**:
  - Current: "Networks Are Dirty." - focuses on regulations as burden
  - New: Frame 72-hour deadline as protection, not bureaucracy
  - Lead with what happens when you MEET the deadline (not fines for missing)
  - Keep the NYSDOH/CIRCIA cards but reframe copy
  - Target 80-100 words

  **Must NOT do**:
  - Don't lead with fines/penalties (avoid fear-based messaging)
  - Don't remove the regulation cards (they're important)
  - Don't make compliance sound like a checkbox exercise

  **Recommended Agent Profile**:
  - **Category**: `writing`
  - **Skills**: None needed

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2 (with Tasks 4, 5, 6)
  - **Blocks**: Task 7
  - **Blocked By**: Tasks 1, 2

  **References**:
  - `components/mandate-section.tsx` - Current content to rewrite
  - `WHITEPAPER.md:221-245` - NYSDOH and CIRCIA compliance chapters
  - `WHITEPAPER.md:225` - "The critical phrase is 'determining that a cybersecurity event has occurred'"

  **Acceptance Criteria**:
  - [ ] Headline reframed from problem to solution
  - [ ] Opening paragraph leads with protection value, not regulations
  - [ ] NYSDOH/CIRCIA cards updated with positive framing
  - [ ] Compliance described as "proving" not "checking boxes"

  **Agent-Executed QA Scenarios**:
  ```
  Scenario: Mandate section updated
    Tool: Playwright (playwright skill)
    Preconditions: Dev server running
    Steps:
      1. Navigate to http://localhost:3000/#mandate
      2. Verify new headline
      3. Screenshot: .sisyphus/evidence/task-3-mandate.png
    Expected Result: Section shows reframed content
    Evidence: .sisyphus/evidence/task-3-mandate.png
  ```

  **Commit**: YES
  - Message: `content(mandate): reframe as protection not burden`
  - Files: `components/mandate-section.tsx`

---

- [ ] 4. Rewrite Detection Section - Connect features to CISO outcomes

  **What to do**:
  - Keep the 7 contamination cards (they work well)
  - Rewrite the narrative copy on the right side
  - Connect each detection type to a specific CISO outcome
  - Lead with "What this means for you" not "How it works"
  - Target 60-80 words for narrative

  **Must NOT do**:
  - Don't change the card structure or icons
  - Don't get too technical about algorithms
  - Don't use "contamination" metaphor throughout (dial it back)

  **Recommended Agent Profile**:
  - **Category**: `writing`
  - **Skills**: None needed

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2
  - **Blocks**: Task 7
  - **Blocked By**: Tasks 1, 2

  **References**:
  - `components/detection-section.tsx` - Current content
  - `WHITEPAPER.md:111-128` - Detection algorithm details
  - `WHITEPAPER.md:107` - "The detection methodology uses classical signal processing algorithms"

  **Acceptance Criteria**:
  - [ ] Right column narrative rewritten with outcome focus
  - [ ] Each detection card description connects to CISO value
  - [ ] "Deterministic" concept explained in business terms

  **Agent-Executed QA Scenarios**:
  ```
  Scenario: Detection section updated
    Tool: Playwright (playwright skill)
    Preconditions: Dev server running
    Steps:
      1. Navigate to http://localhost:3000/#detection
      2. Scroll through cards
      3. Screenshot: .sisyphus/evidence/task-4-detection.png
    Expected Result: Cards show updated descriptions
    Evidence: .sisyphus/evidence/task-4-detection.png
  ```

  **Commit**: YES
  - Message: `content(detection): connect features to outcomes`
  - Files: `components/detection-section.tsx`

---

- [ ] 5. Rewrite Workflow Section - Streamline for CISO value

  **What to do**:
  - Current: "The Compliance Lifecycle" - sounds bureaucratic
  - New: Focus on "What happens when we detect something"
  - Streamline the 3 steps to focus on CISO peace of mind
  - Emphasize "no manual work" and "automatic evidence"
  - Target 80-100 words

  **Must NOT do**:
  - Don't change the JSON/terminal visual style (it works well)
  - Don't add more steps (keep it simple: Detect → Review → Archive)
  - Don't focus on the CISO approval as a burden (frame as control)

  **Recommended Agent Profile**:
  - **Category**: `writing`
  - **Skills**: None needed

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2
  - **Blocks**: Task 7
  - **Blocked By**: Tasks 1, 2

  **References**:
  - `components/workflow-section.tsx` - Current content
  - `WHITEPAPER.md:151-172` - CISO approval gate architecture

  **Acceptance Criteria**:
  - [ ] Section headline reframed from "compliance" to "automation"
  - [ ] Step 1 emphasizes automatic detection, not manual monitoring
  - [ ] Step 2 frames CISO review as control, not burden
  - [ ] Step 3 emphasizes evidence preservation, not just logging

  **Agent-Executed QA Scenarios**:
  ```
  Scenario: Workflow section updated
    Tool: Playwright (playwright skill)
    Preconditions: Dev server running
    Steps:
      1. Navigate to http://localhost:3000
      2. Scroll to workflow section
      3. Screenshot: .sisyphus/evidence/task-5-workflow.png
    Expected Result: Section shows streamlined content
    Evidence: .sisyphus/evidence/task-5-workflow.png
  ```

  **Commit**: YES
  - Message: `content(workflow): streamline for CISO value`
  - Files: `components/workflow-section.tsx`

---

- [ ] 6. Rewrite Security Section - Emphasize deployment ease

  **What to do**:
  - Lead with "Zero CapEx" and "Zero Network Changes"
  - Address the #1 CISO concern: "This sounds like a lot of work to deploy"
  - Reframe the security model as "deployed in minutes, not months"
  - Keep the "canary agent" visual but explain it simply
  - Target 80-100 words

  **Must NOT do**:
  - Don't get technical about containerization or IOx
  - Don't use scary security language ("scream-and-die" is too intense)
  - Don't imply current infrastructure is inadequate

  **Recommended Agent Profile**:
  - **Category**: `writing`
  - **Skills**: None needed

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2
  - **Blocks**: Task 7
  - **Blocked By**: Tasks 1, 2

  **References**:
  - `components/security-section.tsx` - Current content
  - `WHITEPAPER.md:97-103` - Edge deployment model
  - `WHITEPAPER.md:205-215` - "Zero marginal infrastructure cost"

  **Acceptance Criteria**:
  - [ ] Headline emphasizes ease of deployment
  - [ ] Opening addresses deployment concerns
  - [ ] "Zero hardware/cloud/network" reframed as benefits, not just features
  - [ ] Canary agent explained in simple terms

  **Agent-Executed QA Scenarios**:
  ```
  Scenario: Security section updated
    Tool: Playwright (playwright skill)
    Preconditions: Dev server running
    Steps:
      1. Navigate to http://localhost:3000/#security
      2. Verify new headline
      3. Screenshot: .sisyphus/evidence/task-6-security.png
    Expected Result: Section shows deployment-focused content
    Evidence: .sisyphus/evidence/task-6-security.png
  ```

  **Commit**: YES
  - Message: `content(security): emphasize ease of deployment`
  - Files: `components/security-section.tsx`

---

### Wave 3: Proof & Conversion

- [ ] 7. Rewrite Proof Section - Make formal verification tangible

  **What to do**:
  - Current: "Formally Verified. Mathematically Proven." - too abstract
  - New: "When we say detected, we mean detected."
  - Explain formal verification in terms CISOs care about: no false positives
  - Connect to real outcomes: "No 3 AM pages for false alarms"
  - Target 80-100 words

  **Must NOT do**:
  - Don't explain how formal verification works (too technical)
  - Don't mention Verus by name (not meaningful to CISOs)
  - Don't use mathematical terminology

  **Recommended Agent Profile**:
  - **Category**: `writing`
  - **Skills**: None needed

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Parallel Group**: Wave 3
  - **Blocks**: Task 8
  - **Blocked By**: Tasks 3-6

  **References**:
  - `components/proof-section.tsx` - Current content
  - `WHITEPAPER.md:131-138` - Formal verification chapter
  - `WHITEPAPER.md:67-73` - "Deterministic Detection Without ML Hallucinations"

  **Acceptance Criteria**:
  - [ ] Headline makes formal verification tangible
  - [ ] Body copy explains benefit (no false positives), not mechanism
  - [ ] Specifications list reframed as outcomes
  - [ ] JSON example updated to show clear result

  **Agent-Executed QA Scenarios**:
  ```
  Scenario: Proof section updated
    Tool: Playwright (playwright skill)
    Preconditions: Dev server running
    Steps:
      1. Navigate to http://localhost:3000
      2. Scroll to proof section
      3. Screenshot: .sisyphus/evidence/task-7-proof.png
    Expected Result: Section shows tangible proof points
    Evidence: .sisyphus/evidence/task-7-proof.png
  ```

  **Commit**: YES
  - Message: `content(proof): make formal verification tangible`
  - Files: `components/proof-section.tsx`

---

- [ ] 8. Rewrite CTA Section - Reduce friction with assessment

  **What to do**:
  - Current: "The 72-hour clock is ticking." - too aggressive
  - New: Lower-pressure offer: "See your blind spots in 15 minutes"
  - Frame as "free network visibility assessment" not "sales call"
  - Make it easy to say yes (low commitment)
  - Target 40-60 words

  **Must NOT do**:
  - Don't use urgency tactics ("limited time", "act now")
  - Don't ask for too much (schedule → assess)
  - Don't use salesy language ("transform your security")

  **Recommended Agent Profile**:
  - **Category**: `writing`
  - **Skills**: None needed

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Parallel Group**: Wave 3
  - **Blocks**: Task 9
  - **Blocked By**: Task 7

  **References**:
  - `components/cta-section.tsx` - Current content
  - Marketing psychology: Foot-in-the-Door technique (small commitment first)

  **Acceptance Criteria**:
  - [ ] Headline reframed as invitation, not deadline
  - [ ] Offer is "free assessment" not "demo" or "call"
  - [ ] Subheadline emphasizes value received, not action required
  - [ ] Button text updated to reflect assessment offer

  **Agent-Executed QA Scenarios**:
  ```
  Scenario: CTA section updated
    Tool: Playwright (playwright skill)
    Preconditions: Dev server running
    Steps:
      1. Navigate to http://localhost:3000/#contact
      2. Verify new headline and button text
      3. Screenshot: .sisyphus/evidence/task-8-cta.png
    Expected Result: Section shows low-friction offer
    Evidence: .sisyphus/evidence/task-8-cta.png
  ```

  **Commit**: YES
  - Message: `content(cta): reduce friction with assessment offer`
  - Files: `components/cta-section.tsx`

---

### Wave 4: Polish

- [ ] 9. Refresh About Page - Light tone alignment

  **What to do**:
  - Current About page is actually quite good
  - Light refresh to align tone with main page (confident authority)
  - Ensure clinical metaphor is used appropriately (it's good here)
  - Check that CTA matches main page
  - Target: Minimal changes, mostly consistency

  **Must NOT do**:
  - Don't rewrite the Lister story (it's excellent)
  - Don't remove the clinical metaphor (it's appropriate on About)
  - Don't change structure significantly

  **Recommended Agent Profile**:
  - **Category**: `writing`
  - **Skills**: None needed

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Parallel Group**: Wave 4
  - **Blocks**: None (final task)
  - **Blocked By**: Tasks 1-8

  **References**:
  - `app/about/page.tsx` - Current content
  - `business/BRAND-BIBLE.md:50-55` - The Manifesto Story
  - `WHITEPAPER.md:248-253` - Conclusion with Joseph Lister reference

  **Acceptance Criteria**:
  - [ ] Tone consistent with main page (confident authority)
  - [ ] CTA buttons match main page
  - [ ] No major structural changes
  - [ ] Clinical metaphor preserved where appropriate

  **Agent-Executed QA Scenarios**:
  ```
  Scenario: About page refreshed
    Tool: Playwright (playwright skill)
    Preconditions: Dev server running
    Steps:
      1. Navigate to http://localhost:3000/about
      2. Verify content loads
      3. Screenshot: .sisyphus/evidence/task-9-about.png
    Expected Result: About page consistent with main page
    Evidence: .sisyphus/evidence/task-9-about.png
  ```

  **Commit**: YES
  - Message: `content(about): refresh tone alignment`
  - Files: `app/about/page.tsx`

---

## Content Review Checklist (Apply to All Sections)

Before marking each task complete, verify:

### Message Check
- [ ] Leads with user problem, not product feature
- [ ] Answers "So what?" for every claim
- [ ] Uses CISO-relevant language, not marketing speak

### Tone Check
- [ ] Confident authority (not fear, not hype)
- [ ] Brief (per Brand Bible)
- [ ] Deterministic ("we detect" not "we help detect")

### Metaphor Check
- [ ] Clinical/sepsis metaphor used only as hook (≤2 sentences)
- [ ] Switches to clear business language
- [ ] No mixed metaphors

### AI-Slop Check (FORBIDDEN phrases)
- [ ] No "in today's rapidly evolving threat landscape"
- [ ] No "cutting-edge" or "state-of-the-art"
- [ ] No "revolutionary" or "game-changing"
- [ ] No "unparalleled" or "unmatched"
- [ ] No "empower" or "leverage" (unless technical)

### Technical Accuracy Check
- [ ] Formal verification claims are accurate
- [ ] Compliance deadlines (72 hours) are correct
- [ ] Deployment claims match reality

---

## Success Criteria

### Verification Commands
```bash
# Verify all sections display correctly
cd C:\Users\Dawan\Desktop\projects\cortexcli-landing-page && pnpm dev
# Then use Playwright to screenshot each section
```

### Final Checklist
- [ ] All 9 sections rewritten with new content
- [ ] Hero leads with problem, not solution
- [ ] New Problem section added and visible
- [ ] Clinical metaphor dialed back appropriately
- [ ] Tone is confident authority throughout
- [ ] No AI-slop phrases present
- [ ] All screenshots saved to .sisyphus/evidence/
- [ ] About page refreshed for consistency

### Read-Through Test
Read the landing page from top to bottom. It should tell this story:
1. "You have a visibility problem you don't know about" (Hero)
2. "Here's exactly what that looks like" (Problem)
3. "Here's why current solutions fail" (Mandate)
4. "Here's how we solve it" (Detection, Workflow, Security)
5. "Here's proof it works" (Proof)
6. "Here's how to see for yourself" (CTA)

If the narrative flows logically and builds urgency without fear, the rewrite is successful.
