---
name: ui-audit
description: Run a comprehensive UI consistency audit against team standards. Use when checking component consistency, reviewing after major merges, or during design system updates.
context: fork
agent: Explore
---

# UI Consistency Audit

Scan the codebase against the documented standards in `standards/`.

## Scope: $ARGUMENTS (default: full)

Options: `full`, `components`, `accessibility`, `theming`, `testing`

## Steps

1. Read all files in `standards/` to understand current rules
2. Read `.claude/feedback/log.md` for known issues
3. Glob for all component directories under `src/components/`
4. For each component, check against applicable standards:
   - `CP-*` rules from `standards/component-patterns.md`
   - `CS-*` rules from `standards/code-style.md`
   - `A11Y-*` rules from `standards/accessibility.md`
   - `T-*` rules from `standards/testing.md`
5. Generate a report with:
   - Summary table (Critical / High / Medium / Low counts)
   - Each issue with: rule ID, file path, line reference, description, fix suggestion
   - Task list of actionable fixes

## Output

Write results to:
- `.claude/audit-report.md` — Full findings
- `.claude/audit-tasks.md` — Actionable task list for the orchestrator
