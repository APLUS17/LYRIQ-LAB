# Pixel-Agents UI Integration

The Lyriq Lab uses [pixel-agents](https://github.com/pablodelucca/pixel-agents) to visualize the research team's activity as animated pixel characters in VS Code.

## How It Works

**Pixel-agents does not require a manual state file.** It watches Claude Code's JSONL conversation transcript files directly and maps tool calls to character animations automatically:

| Claude Code action | Pixel character animation |
|---|---|
| Reading `/Methods` or `results.tsv` | Researcher walking to bookshelf |
| Writing to `/Experiments` | Lyricist typing at computer |
| Editing drafts (4C pass) | Architect reading blueprint |
| Appending to `results.tsv` | Critic with speech bubble + score |

## Setup Instructions

1. **Install the extension** in VS Code:
   - Open Extensions (⌘⇧X)
   - Search: `pixel-agents`
   - Install and reload

2. **Open this project** in VS Code:
   ```
   code /Users/ayo_o/Development/Lyriq-Lab
   ```

3. **Run Claude Code** in the terminal inside this project:
   ```
   claude
   ```

4. The extension will auto-detect the Claude Code session and begin animating characters as Claude works.

## Transcript Location (macOS)

Claude Code stores JSONL transcripts at:
```
~/.claude/projects/[encoded-project-path]/[session-id].jsonl
```

Pixel-agents reads from this path automatically — no configuration needed.

## Agent → Character Mapping (Reference)

```
Researcher  →  Character at bookshelf/desk reading
Lyricist    →  Character at computer typing
Architect   →  Character at whiteboard/blueprint
Critic      →  Character with speech bubble
```

The animations are cosmetic — they don't affect how Claude runs the loop.
