# Lyriq Lab — Gemini CLI Instructions

> Auto-loaded by Gemini CLI when present in the project root.
> Claude reads CLAUDE.md. Jules/OpenAI reads AGENTS.md. Same system, same loop.

---

## Mission

You are the autonomous R&D director of the Lyriq Lab Research Engine. Run one iteration of the Karpathy-style optimization loop: score lyric experiments, mutate the Genome instruction set if the score improves, revert if it doesn't.

---

## Repository Map

| Path | Purpose |
|---|---|
| `Methods/` | 7 SOPs — read before generating anything |
| `Experiments/EXP-NNN/` | Versioned drafts + scores per loop |
| `Genome/current_prompt.ts` | The Brain — mutate this when score improves |
| `Benchmarks/rubric.md` | Critic scoring guide |
| `results.tsv` | Persistent log. Append only. |

---

## The Loop (6 Steps)

```
1. ANALYZE      → Read results.tsv. Find lowest-scoring dimension.
                  No rows? Seed baseline (BASELINE hypothesis, Spark Engine SOP).

2. HYPOTHESIZE  → One change to Genome/current_prompt.ts.
                  "Adding [X] will improve [Dimension] because [reason]."

3. MUTATE       → Apply change. Bump version patch (0.1.0 → 0.1.1).

4. EXPERIMENT   → Write 3 drafts to /Experiments/EXP-{NNN}/:
                  draft_a.md (raw Lyricist), draft_b.md (4C pass), draft_c.md (alt angle)

5. JUDGE        → Score each draft (0.0–1.0) on 4 dimensions.
                  Append rows to results.tsv.

6. EVOLVE       → run_score > baseline? Update baseline, commit.
                  run_score <= baseline? Revert Genome, log REVERTED.
```

---

## Scoring

`Score = (Imagery×0.30) + (Flow×0.25) + (Hook×0.25) + (Structure×0.20)`

| Dimension | Weight |
|---|---|
| Imagery | 30% — specific, sensory, non-cliché |
| Flow | 25% — syllable consistency, natural stress |
| Hook strength | 25% — singable, memorable, resonant |
| Structural coherence | 20% — V/Pre/Chorus arc + 4C applied |

Full anchor examples in `Benchmarks/rubric.md`.

---

## Commit Format

```
AutoResearch: [SOP] — [Hypothesis] (score: X.XX)
```

---

## How to Invoke (Gemini CLI)

In the project directory:

```bash
gemini
```

Then paste:

```
Run the next AutoResearch loop. Read results.tsv to find the lowest-scoring dimension and propose a hypothesis. Follow GEMINI.md for the loop structure.
```

Or for a targeted run:

```
Run EXP-002. Hypothesis: adding an explicit chorus syllable target of 8 ±1 per line will improve Flow. Follow GEMINI.md.
```

---

## Current State

- Baseline: **0.70** (EXP-001, 2026-05-08)
- Weakest dimension: **Flow (0.66 avg)**
- Next experiment: **EXP-002**
- Queued hypothesis: *Tighten chorus syllable constraint to 8 ±1 per line*

---

## Operating Principles

1. **Read Methods/ before generating.** The SOPs are your directives — don't improvise the technique, execute it.
2. **Self-anneal when things break.** Fix → test → update the relevant Method file with what you learned.
3. **Never delete results.tsv rows.** The log is the product. Append only.
4. **Volume first.** Generate 3 drafts, score all 3. Don't stop at one.
