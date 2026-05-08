# 05 — The Hook Factory

**Status:** AWAITING PDF UPLOAD
**Purpose:** Systematic construction of hooks — lines that are easy to sing, impossible to forget, and mean more every time.

---

## Key Concepts

> *To be populated from source PDF.*

---

## Core Technique

> *To be populated from source PDF.*

**Baseline logic (until PDF is parsed):**

A great hook must pass three tests:
1. **Hummability** — Can you hum the melody with no words?
2. **Memorability** — Can a stranger repeat it after one listen?
3. **Depth** — Does it reward re-listening? Does it mean more in context?

The factory process:
1. Generate 5 candidate hooks (no editing, just output)
2. Apply the three tests
3. Cut 3. You now have 2 candidates.
4. Pressure-test each: write a full song around it. Which one survives?

---

## Prompt Template

> *To be populated from source PDF.*

**Baseline prompt:**
```
HOOK FACTORY — Construction Prompt

Song thesis: [one sentence — what is this song actually about?]
Title candidate: [working title or phrase]

Generate 5 hooks now. Do not stop to evaluate.
Hook = the line you'd want to repeat at the end of every chorus.

Tests (apply after generating):
- Can you sing it without knowing the context?
- Does it contain the emotional thesis of the whole song?
- Is it 6–9 syllables with a natural spoken stress pattern?
- Does it work as the last line someone hears?

Keep your 2 strongest. Write a 4-bar chorus around each.
```

---

## Scoring Anchor

The Hook Factory directly targets **Hook strength (25%)** and **Structural coherence (20%)**.
The Critic's test: Read only the chorus. Does it carry the full emotional weight of the song?
Benchmark: Hook score ≥ 0.75 means the factory process was applied correctly.
