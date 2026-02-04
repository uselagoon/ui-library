---
name: quality-gate
description: Team quality standards and feedback system for the Lagoon UI Library. Use when reviewing code, checking conventions, onboarding new contributors, or when any agent needs to understand project patterns and rules. Loads the living standards docs and accumulated feedback history.
---

# Quality Gate — Lagoon UI Library

This skill provides access to the team's living standards and accumulated feedback memory. It is the single source of truth for "how we build things" in this project.

## Standards Location

All team standards live in `standards/` at the repo root as flat markdown files. Any developer can edit these — they are version-controlled and reviewed via PR.

### Available Standards

Read these files for the current rules:

- `@standards/component-patterns.md` — Component file structure, naming, exports, styling, theming
- `@standards/code-style.md` — TypeScript conventions, imports, error handling, naming
- `@standards/accessibility.md` — WCAG requirements, ARIA patterns, keyboard/screen reader support
- `@standards/testing.md` — Storybook stories, edge cases, interaction coverage

### Feedback Memory

Read `@.claude/feedback/log.md` for accumulated learnings from past reviews, PR feedback, and discovered patterns. This file grows over time and represents institutional knowledge.

## How Standards Work

1. **Standards are rules** — Code MUST comply. Violations are flagged by the guardian agent.
2. **Feedback is memory** — Learnings that inform reviews but aren't hard rules yet.
3. **Standards evolve** — When feedback patterns repeat, they should be promoted to standards.
4. **Developers contribute** — Anyone can propose changes to standards via PR.

## Updating Standards

When you identify a new pattern that should become a standard:
1. Add it to the appropriate `standards/*.md` file
2. Include a clear rule ID (e.g., `CP-007`, `CS-012`)
3. Provide a good/bad code example
4. Commit alongside the code it affects

When you identify a one-off learning:
1. Append to `.claude/feedback/log.md`
2. Use format: `## YYYY-MM-DD — [topic]`
3. Describe what was learned and why it matters

## For New Contributors

If you're new to this repo, read the standards files first. They tell you:
- How to structure a component
- What styling approach to use
- What accessibility requirements to meet
- What tests/stories to write

The guardian agent will review your code against these standards before it reaches visual testing.
