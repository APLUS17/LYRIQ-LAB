# 02 — The Spark Engine

**Status:** AWAITING PDF UPLOAD
**Purpose:** The primary generative system for producing raw lyric material. The Lyricist's main tool.

---

## Key Concepts

> *To be populated from source PDF.*

---

## Core Technique

> *To be populated from source PDF.*

**Baseline logic (until PDF is parsed):**

The Spark Engine generates raw material through constrained prompting. It works by:
1. Anchoring to a specific emotional scenario (not a genre or mood — a *scene*)
2. Generating in bursts of 8–12 lines without self-editing
3. Using a "3-image rule": every burst must contain at least 3 concrete images

The engine prioritizes surprise over polish. First drafts are always raw.

---

## Prompt Template

> *To be populated from source PDF.*

**Baseline prompt:**
```
SPARK ENGINE — Generation Prompt

Scene: [specific emotional situation, 1 sentence]
Emotional frequency: [precise texture — not "sad," but "the sadness of packing a room that still smells like someone"]
Time anchor: [specific time of day, season, or moment]

Instructions:
- Write 10 lines. Do not stop. Do not edit.
- Include at least 3 physical/sensory images.
- One line must surprise you.
- Output everything. Cross nothing out.
```

---

## Scoring Anchor

The Critic evaluates Spark Engine output primarily on **Imagery (30%)** and **Flow (25%)**.
A high-scoring Spark Engine run produces at least 2 lines the Architect wants to preserve unchanged.
Baseline threshold: Imagery ≥ 0.6 before 4C processing begins.
