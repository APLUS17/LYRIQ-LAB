# 07 — Creative Yield Math

**Status:** AWAITING PDF UPLOAD
**Purpose:** Quantitative framework for tracking creative productivity and optimizing the quantity-to-quality ratio over time.

---

## Key Concepts

> *To be populated from source PDF.*

---

## Core Technique

> *To be populated from source PDF.*

**Baseline logic (until PDF is parsed):**

Creative Yield Math treats the creative process as a production system with measurable ratios:

- **Line yield**: Lines generated → lines kept (target: 10:1 → 1 great line per 10 generated)
- **Draft yield**: Drafts written → drafts worth developing (target: 3:1)
- **Session yield**: Sessions run → sessions producing a new high score (tracked in results.tsv)

The insight: you cannot optimize what you don't measure. The lab exists to make this measurable.

---

## Prompt Template

> *To be populated from source PDF.*

**Baseline prompt:**
```
CREATIVE YIELD — Session Log

After every experiment, record:
- Lines generated (raw Lyricist output): ___
- Lines surviving post-4C (Architect pass): ___
- Lines the Critic marked ≥ 0.7 on Imagery: ___
- Draft score (avg of 3 drafts): ___
- Delta vs. baseline: +/- ___

Yield ratio this session: [kept / generated] = ___
Rolling 5-session average yield: ___

Insight: What produced the highest-yield lines this session?
```

---

## Scoring Anchor

Creative Yield Math is a meta-SOP — it tracks the health of all other SOPs.
The Researcher uses this data to identify which SOPs consistently under-yield.
An SOP with a yield ratio below 0.05 over 5 consecutive experiments is flagged for mutation.
A rising yield ratio over time indicates the Genome is improving.
