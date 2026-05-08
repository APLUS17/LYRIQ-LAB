# Lyriq Lab — Agent Instructions (Jules / OpenAI Codex / Any Agent)

> Auto-loaded by Jules and OpenAI-compatible agents. Claude reads CLAUDE.md instead.
> All three files describe the same system — this one is optimized for agents that work via GitHub PRs.

---

## Mission

You are running an autonomous songwriting R&D engine. Your job is to execute one iteration of a Karpathy-style optimization loop that scores lyric experiments and improves the active instruction set (the Genome) over time.

**One loop = one PR.**

---

## Repository Map

| Path | Purpose |
|---|---|
| `Methods/` | 7 SOPs — read these before generating anything |
| `Experiments/EXP-NNN/` | One folder per loop: draft_a.md, draft_b.md, draft_c.md, scores.md |
| `Genome/current_prompt.ts` | The active instruction set. Mutate this if score improves. |
| `Benchmarks/rubric.md` | Scoring guide — 4 dimensions with anchor examples |
| `results.tsv` | Persistent score log. Append only — never delete rows. |

---

## The 4 Agents (You Play All 4)

| Agent | Role |
|---|---|
| **Researcher** | Reads `results.tsv` + `Genome/current_prompt.ts`. Finds lowest-scoring dimension. Proposes one hypothesis. |
| **Lyricist** | Generates 3 raw song drafts using the Spark Engine SOP. No editing during generation. |
| **Architect** | Applies the 4C Framework (Copy → Cut → Carve → Connect) to the best raw draft. |
| **Critic** | Scores all 3 drafts on 4 dimensions. Logs to `results.tsv`. |

---

## The 6-Step Loop

```
1. ANALYZE      Read results.tsv. Find the dimension with the lowest average score.
                If results.tsv has only the header row: this is the first run — use BASELINE hypothesis.

2. HYPOTHESIZE  Propose ONE targeted change to Genome/current_prompt.ts.
                Format: "Adding [X] will improve [Dimension] because [reason]."

3. MUTATE       Apply the change. Increment the version field (patch bump: 0.1.0 → 0.1.1).

4. EXPERIMENT   Write 3 drafts to /Experiments/EXP-{NNN}/ using the Spark Engine SOP.
                Files: draft_a.md (raw), draft_b.md (4C pass), draft_c.md (alternative angle)

5. JUDGE        Score each draft using the rubric below.
                Run score = average of the 3 draft scores.
                Append one row per draft to results.tsv.

6. EVOLVE       If run_score > baseline_score in Genome/current_prompt.ts:
                  → Update baseline_score in Genome/current_prompt.ts
                  → Commit: "AutoResearch: [SOP] — [Hypothesis] (score: X.XX)"
                If run_score <= baseline_score:
                  → Revert Genome/current_prompt.ts to previous version
                  → Log "REVERTED" in Notes column of results.tsv
```

---

## Scoring Rubric

| Dimension | Weight | What to measure |
|---|---|---|
| Imagery | 30% | Specific, sensory, non-cliché language |
| Flow | 25% | Syllable consistency, natural spoken stress |
| Hook strength | 25% | Memorable, singable, emotionally resonant |
| Structural coherence | 20% | Clear verse/pre-chorus/chorus arc; 4C applied |

`Score = (Imagery×0.30) + (Flow×0.25) + (Hook×0.25) + (Structure×0.20)`

Scores are 0.0–1.0. See `Benchmarks/rubric.md` for anchor examples.

---

## Experiment File Format

```
EXP-NNN/
  draft_a.md    ← raw Lyricist output (no editing)
  draft_b.md    ← post-Architect 4C pass
  draft_c.md    ← alternative direction (different angle or method)
  scores.md     ← Critic's breakdown
```

`scores.md` format:
```md
## EXP-NNN Scores
**Hypothesis:** [text]
**SOP:** [module name]
**Version:** [Genome version]

| Draft | Imagery | Flow | Hook | Structure | Score |
|---|---|---|---|---|---|
| A | 0.0 | 0.0 | 0.0 | 0.0 | 0.00 |
| B | 0.0 | 0.0 | 0.0 | 0.0 | 0.00 |
| C | 0.0 | 0.0 | 0.0 | 0.0 | 0.00 |

**Run Score (avg):** 0.00
**Decision:** KEEP / REVERT
```

---

## results.tsv Format

```
Timestamp	SOP	Version	Hypothesis	Imagery	Flow	Hook	Structure	Score	Notes
```

Append one row per draft. ISO 8601 timestamp. Tab-separated.

---

## Git Convention

- Commit format: `AutoResearch: [SOP] — [Hypothesis] (score: X.XX)`
- First run: `Bootstrap: EXP-001 baseline established (score: X.XX)`
- Revert: `git checkout Genome/current_prompt.ts`
- Never commit PDFs (in .gitignore)

---

## How to Invoke (Jules via GitHub)

1. Go to `https://github.com/APLUS17/LYRIQ-LAB/issues`
2. Create a new issue titled: `AutoResearch: Run EXP-NNN`
3. Body: `Run the next AutoResearch loop. Read results.tsv to determine the hypothesis target. Follow AGENTS.md.`
4. Assign to Jules
5. Jules will create a branch, run the loop, and open a PR
6. Review the PR — check `Experiments/EXP-NNN/scores.md` and `results.tsv` before merging

---

## Current State

- Baseline score: **0.70** (established EXP-001)
- Lowest dimension from EXP-001: **Flow (avg 0.66)**
- Queued hypothesis: *Adding an explicit chorus syllable target of 8 ±1 per line will improve Flow because the current constraint allows too much variance.*
- Next experiment: **EXP-002**
