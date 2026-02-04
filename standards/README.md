# Team Standards

Living documentation of how we build the Lagoon UI Library. These files are read by the `guardian` agent on every code review, and by the `coder` agent before every implementation.

## How This Works

- Each `.md` file covers one domain (components, style, a11y, testing)
- Rules have IDs (e.g., `CP-001`) so agents can reference them precisely
- Good/bad code examples show what we mean
- Any developer can propose changes via PR
- The guardian agent enforces these on every code change

## Files

| File | Covers |
|------|--------|
| `component-patterns.md` | File structure, naming, exports, styling, theming |
| `code-style.md` | TypeScript, imports, naming, error handling |
| `accessibility.md` | WCAG, ARIA, keyboard, screen readers |
| `testing.md` | Storybook stories, edge cases, interaction coverage |

## Adding a New Standard

1. Pick the right file (or create a new one if it's a new domain)
2. Add a rule with a unique ID following the existing pattern
3. Include a brief rationale
4. Add a code example showing good and bad
5. Submit as part of your PR

## Promoting Feedback to Standards

When a pattern in `.claude/feedback/log.md` appears repeatedly, it should be promoted to a proper standard here. Move the learning, give it an ID, add examples.
