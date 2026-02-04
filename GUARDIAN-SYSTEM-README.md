# Quality Guardian System — Overview

A quality gatekeeper for Claude Code that learns from feedback, enforces team standards, and keeps coding agents on track.

## Architecture

```
your-repo/
├── CLAUDE.md                          # Orchestrator (reads this first)
├── standards/                         # Living standards — any dev can edit
│   ├── README.md                      # How standards work
│   ├── component-patterns.md          # CP-001 through CP-010
│   ├── code-style.md                  # CS-001 through CS-010
│   ├── accessibility.md               # A11Y-001 through A11Y-010
│   └── testing.md                     # T-001 through T-010
└── .claude/
    ├── agents/
    │   ├── guardian.md                # Quality gatekeeper (NEW)
    │   ├── coder.md                   # Reads standards before coding
    │   ├── tester.md                  # Visual verification
    │   └── stuck.md                   # Human escalation
    ├── skills/
    │   ├── quality-gate/SKILL.md      # Skill tying standards + feedback together
    │   └── ui-audit/SKILL.md          # Full codebase audit command
    ├── feedback/
    │   └── log.md                     # Append-only memory of learnings
    └── settings.json                  # Claude Code permissions
```

## The Loop

```
Coder implements → Guardian reviews → Tester verifies
      ↑                    |                  |
      └── fails? ←────────┘                  |
                                              |
      stuck agent ← fails? ←─────────────────┘
```

The guardian sits between implementation and testing. It reads the team's
standards and accumulated feedback before reviewing every code change.
It doesn't write code — it only passes or fails with specific references
to which rules were met or violated.

## Key Differences From Your Previous Setup

| Before | After |
|--------|-------|
| Agents as top-level .md files | Agents in `.claude/agents/` (standard location) |
| No quality gate between code and test | Guardian reviews every change |
| No documented standards | Flat markdown standards with rule IDs |
| No memory between sessions | Feedback log accumulates learnings |
| Standards in CLAUDE.md (bloats context) | Standards in separate files (loaded on demand) |
| ui-audit as standalone script | ui-audit as a skill that references standards |

## How Feedback Memory Works

1. Guardian reviews code against standards
2. If it discovers a NEW pattern worth remembering, it appends to `feedback/log.md`
3. Next session, guardian reads the log and knows about past learnings
4. When a pattern repeats often enough, a developer promotes it to a proper standard
5. Standards get committed to git → whole team benefits

## For Developers

- **Edit standards**: Submit a PR changing any `standards/*.md` file
- **View feedback**: Read `.claude/feedback/log.md` to see accumulated learnings
- **Run audit**: Use `/ui-audit` in Claude Code to scan the whole codebase
- **Provide feedback**: Tell Claude Code about issues and it updates the feedback log

## What This Is NOT

- Not a linter (use ESLint/Prettier for deterministic checks)
- Not a test framework (use Storybook/Playwright for that)
- Not a CI pipeline (it runs inside Claude Code sessions)

It IS the institutional knowledge layer that makes your AI coding agents
behave like a well-onboarded team member who remembers past mistakes.
