---
name: ui-audit
description: Run a comprehensive UI consistency audit across the frontend codebase
---

# /ui-audit Command

Triggers a comprehensive UI consistency audit of the Moyai frontend.

## Usage

```
/ui-audit [scope]
```

### Scope Options

- `full` - Complete audit of all components (default)
- `buttons` - Button patterns only
- `navigation` - Navigation consistency only
- `typography` - Font usage only
- `personas` - Persona theming only

## Workflow

When this command is invoked:

1. **Orchestrator** delegates to `ui-auditor` agent
2. **UI Auditor** scans codebase against `ui-consistency-rules` skill
3. **UI Auditor** generates:
   - `/workpackages/ui-audit-report.md` - Detailed findings
   - `/workpackages/ui-audit-tasks.md` - Actionable task list
4. **Orchestrator** reviews task list
5. **User** approves tasks to fix
6. **Orchestrator** delegates fixes to `coder` agent
7. **Tester** verifies fixes

## Example

```
User: /ui-audit buttons

Orchestrator: Running button pattern audit...
[Invokes ui-auditor with scope="buttons"]

UI Auditor: Found 7 button inconsistencies:
- 3 Critical: text-black on pink background
- 2 High: missing hover states
- 2 Medium: inconsistent sizing

Task list saved to /workpackages/ui-audit-tasks.md

Orchestrator: Found 7 issues. Shall I fix the 3 critical issues first?

User: Yes, fix critical issues

Orchestrator: [Invokes coder for each critical fix]
```

## Output Format

### Report Structure

```markdown
# UI Audit Report

Generated: 2025-12-01
Scope: full

## Summary

| Severity    | Count |
| ----------- | ----- |
| 🔴 Critical | 3     |
| 🟠 High     | 5     |
| 🟡 Medium   | 8     |
| 🟢 Low      | 12    |

## Critical Issues

### BTN-001: Incorrect button text colour

- **File**: `components/admin/AdminHeader.tsx`
- **Line**: 45
- **Issue**: `text-black` on `bg-moyai-pink`
- **Fix**: Change to `text-white`

[...]
```

### Task List Structure

```markdown
# UI Fix Tasks

Generated from audit: 2025-12-01

## Critical (Fix Immediately)

- [ ] BTN-001: AdminHeader.tsx:45 - button text colour
- [ ] BTN-002: BuilderTopNav.tsx:23 - button text colour
- [ ] NAV-001: BuilderTopNav.tsx:12 - add logo link

## High (Fix Soon)

[...]
```

## Git Workflow

All fixes should be made on a feature branch:

```bash
git checkout dev
git pull origin dev
git checkout -b feature/ui-consistency-fixes
```

After fixes are complete and tested:

```bash
git add .
git commit -m "fix: UI consistency improvements from audit"
git push origin feature/ui-consistency-fixes
```

## Notes

- Run audit after major feature branches merge
- Re-run after design system updates
- Consider scheduling weekly audits during active development
- Tasks are cumulative - previous unfixed issues will reappear
