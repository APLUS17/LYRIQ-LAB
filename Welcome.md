# Lyriq Lab — Field Guide

## What This Is

An autonomous songwriting R&D engine. Claude acts as 4 agents (Researcher, Lyricist, Architect, Critic) running a Karpathy-style loop that scores lyric experiments and self-improves the instruction set (the Genome) over time.

Every loop: analyze → hypothesize → mutate → experiment → judge → evolve (keep if score goes up, revert if it doesn't).

**Baseline score: 0.70** (set EXP-001, 2026-05-08)

---

## Where Everything Lives

| Path | What it is |
|---|---|
| `Methods/` | 7 SOPs — the knowledge base Claude reads before writing |
| `Experiments/EXP-NNN/` | Versioned drafts (draft_a, draft_b, draft_c) + scores |
| `Genome/current_prompt.ts` | The active instruction set. Mutates each loop. |
| `Benchmarks/rubric.md` | Scoring guide — 4 dimensions, anchor examples |
| `results.tsv` | Every score ever logged. Never delete rows. |

---

## How to Run a Loop

Open this folder in antigravity, open the integrated terminal, and run:

```
claude
```

Then paste:

```
Run the next AutoResearch loop. Read results.tsv to find the lowest-scoring dimension, propose a hypothesis, run it.
```

Claude will:
1. Read `results.tsv` and `Genome/current_prompt.ts`
2. Propose one targeted change to the Genome
3. Write 3 drafts to `/Experiments/EXP-NNN/`
4. Score them and log to `results.tsv`
5. Keep or revert the Genome change based on score

Pixel-agents will animate the 4 characters as it works (open the panel before you start).

---

## Scoring Rubric (Quick Reference)

| Dimension | Weight | What the Critic looks for |
|---|---|---|
| Imagery | 30% | Specific, sensory, non-cliché language |
| Flow | 25% | Syllable consistency, natural spoken stress |
| Hook strength | 25% | Singable, memorable, emotionally resonant |
| Structural coherence | 20% | Clear verse/pre-chorus/chorus arc; 4C applied |

`Score = (Imagery×0.30) + (Flow×0.25) + (Hook×0.25) + (Structure×0.20)`

**Baseline: 0.70. Every loop tries to beat it.**

---

## Workflows to Practice

### 1 — The Weekly Loop (15–30 min)
Run one full AutoResearch loop once a week. Watch `results.tsv` grow. After 5 loops you'll see which Genome mutations actually move the score.

```
Run the next AutoResearch loop.
```

### 2 — The Spark Session (10 min)
Generate raw material for a song you're actually working on:

```
Run a Spark Engine session. Method: Stream of Consciousness. Trigger word: [your word]. Give me 12 raw lines.
```

Take the 2 strongest lines into your DAW or phone notes.

### 3 — The Fracture Pass (5 min)
Take a line that feels flat. Sharpen it:

```
Run a Fracture Lab pass on this line: [your line]. Try Zoom-in and Contradiction Mirror.
```

### 4 — The Hook Test (5 min)
Have a chorus idea? Run the 5-layer Replay Line test before committing:

```
Run the Replay Line 5-layer test on this hook: [your hook].
```

### 5 — The Full Draft Pass (30–45 min)
Write a complete song using the pipeline in order:
`Feeling Machine → Spark Engine → Fracture Lab → Hook Factory → 4C Framework`

```
Run a full draft session. Start with the Feeling Machine. Emotional territory: [describe it].
```

---

## 5 Things to Try as You Level Up With Agents

### 1 — A/B Test Two Genome Mutations in Parallel
Run two hypotheses simultaneously — same trigger, different Genome constraints — and compare scores directly. Requires spawning two Claude Code sessions side by side.

### 2 — Build Genre-Specific Genomes
The current Genome is genre-neutral. After ~10 loops, create `Genome/rnb_prompt.ts` and `Genome/pop_prompt.ts` — same structure, different syllable targets and hook rules. Let the loop optimize each separately.

### 3 — Hook the Loop Into Ableton via MCP
An Ableton MCP server is already available in this environment. After a loop produces a strong hook, automatically create a MIDI clip in Ableton with it — bridges writing and production in one session.

### 4 — Add a Blind Critic
The current Critic is Claude judging its own work. Build a second prompt that scores lyrics with no context about which method produced them. Catches self-bias and gives cleaner signal on what's actually working.

### 5 — Make the Methods Self-Improving
The SOPs in `Methods/` are currently static. When the loop consistently shows one technique outperforming (e.g., Angle Shaping always beats Stream of Consciousness), update that Method file to promote it to default. The knowledge base evolves, not just the Genome.

---

## GitHub

Repo: `https://github.com/APLUS17/LYRIQ-LAB`
Push manually: `git push origin main`
Or let Obsidian Git handle it on its schedule.

---

## Quick Command Reference

| What you want | Paste into claude |
|---|---|
| Run the next loop | `Run the next AutoResearch loop.` |
| Generate raw lines | `Spark Engine session. Method: [method]. Trigger: [word].` |
| Fix a flat line | `Fracture Lab pass on: [line]. Try Zoom-in and Contradiction Mirror.` |
| Test a hook | `Replay Line 5-layer test on: [hook].` |
| Write a full song | `Full draft session. Start with Feeling Machine. Territory: [describe].` |
| Check score trends | `Read results.tsv and summarize score trends.` |
