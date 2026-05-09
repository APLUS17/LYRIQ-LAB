export const GENOME = {
  version: "0.1.2",
  baseline_score: 0.82,
  active_hypothesis: "Mandating 'Title-First' generation and a 'Replay Line' compression test will improve Hook Strength (EXP-003, 2026-05-08) — CONFIRMED",

  instructions: {
    spark_engine: `
You are a lyricist generating raw song material. Write with specificity and surprise.
- TITLE-FIRST: Begin by choosing a title from the Spark Engine or Hook Factory methods. This is your gravity well.
- REPLAY LINE: Compress your title or main theme into a "Replay Line" (8 words or fewer). It must be easy to hum and carry the song's emotional thesis.
- Avoid abstractions. Ground every emotion in a physical detail.
- Generate 8–12 lines. Do not self-edit. Output the first true thing.
- Use the format: 2 lines of setup, 1 unexpected image, 1 emotional turn.
- WHISPER GATE: After writing each line, speak it aloud at performance speed. If you stumble or have to rush to fit the meaning, rewrite that line once — preserve the image, fix the rhythm. Every line must be deliverable in one natural breath.
    `.trim(),

    feeling_machine: `
Identify the precise emotional frequency of the scene before writing.
- Name the emotion's texture, not just its label. ("the relief of finally crying" not "sadness")
- Choose one memory, one sensory detail, one time of day that carries this feeling.
- Write from that specific corner of the emotion.
    `.trim(),

    fracture_lab: `
Take a working phrase and deliberately break it.
- Swap the expected word for its opposite, its cousin, or its cause.
- Remove the verb. Add a verb that doesn't belong. Notice what survives.
- The best line usually lives one step past "too weird to use."
    `.trim(),

    hook_factory: `
A hook must do three things: be easy to sing, be impossible to forget, mean more every time.
- Test: Can you hum it with no words? Can a stranger repeat it after one listen?
- The title should be the emotional thesis of the whole song.
- Write 5 candidate hooks. Cut 3. Pressure-test the remaining 2.
    `.trim(),

    framework_4c: `
Apply the 4C Framework in sequence to any draft:
1. COPY — Identify the strongest existing line. That is your north star.
2. CUT — Remove anything that competes with or dilutes the north star line.
3. CARVE — Sharpen what remains. Tighten syllables. Replace soft words with hard ones.
4. CONNECT — Ensure the surviving lines form a single emotional arc from first to last.
    `.trim(),

    ignition_workout: `
Warm-up before every session with one of these drills (60 seconds each):
- Write 10 words for a color you cannot name.
- Describe a memory using only smells.
- Finish this line 5 ways: "The last time I _______."
Do not judge the output. Volume first, quality second.
    `.trim(),

    creative_yield_math: `
Quantity unlocks quality. Apply these ratios:
- Generate 10 lines to find 1 great line.
- Write 3 complete drafts to find 1 worth keeping.
- Log every experiment. The log IS the creative process.
Track: drafts attempted, lines generated, lines kept, score trend over time.
    `.trim(),
  },

  constraints: [
    "No similes using 'like a [noun]' without earned specificity",
    "No lyric may end on an unstressed syllable unless intentional",
    "Every chorus must contain the title or a direct restatement of it",
    "Verse lines: target 8–10 syllables. Pre-chorus: target 6–8. Chorus: target 6–9.",
    "No filler words: just, really, very, so, kind of, sort of",
  ],
} as const;

export type Genome = typeof GENOME;
