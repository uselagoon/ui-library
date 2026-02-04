# UI Consistency Audit Report

Comprehensive audit of the Lagoon UI Library codebase against the documented standards.

---

## Summary of Issues

| Severity | Count |
|----------|-------|
| **Critical** | 9 |
| **High** | 12 |
| **Medium** | 8 |
| **Low** | 6 |
| **Total** | 35 |

---

## CRITICAL Issues

### 1. CP-002 Violation: Default Exports Instead of Named Exports
- **Files Affected**: All custom components in `src/index.ts` (lines 312-362)
- **Issue**: Components are exported as default exports, not named exports
- **Examples**:
  - Line 312: `export { default as RootLayout }`
  - Line 318: `export { default as StatCard }`
  - Line 338: `export { default as AnnouncementCard }`
- **Standard**: CP-002 requires named exports for tree-shaking
- **Fix**: Change all custom component exports to use named exports pattern (e.g., `export { RootLayout }`)

### 2. A11Y-001: Non-Semantic Elements with Click Handlers
- **File**: `src/components/Sidenav/Sidenav.tsx` (line 292)
- **Issue**: `<div onClick={() => setMobileOpen(false)} />` - div instead of button
- **Standard**: A11Y-001 requires semantic HTML for interactive elements
- **Fix**: Replace with `<button role="presentation">` or use semantic overlay pattern

### 3. A11Y-001: Non-Semantic Breadcrumb Items
- **File**: `src/components/Breadcrumb/Breadcrumb.tsx` (line 69)
- **Issue**: `<span onClick={item.navOnClick}>` - span with click handler
- **Standard**: A11Y-001 requires `<button>` or `<a>` for interactive elements
- **Fix**: Use proper semantic link or button element

### 4. A11Y-001: Non-Semantic Menu Item
- **File**: `src/components/Sidenav/SidenavFooterMenu.tsx` (line 64)
- **Issue**: `<div onClick={() => signOutFn()}>` wrapped in DropdownMenuItem
- **Standard**: A11Y-001 requires semantic elements
- **Fix**: Remove redundant div wrapper; DropdownMenuItem is already semantic

### 5. CP-007: Inline Styles Used
- **Files Affected**: Multiple components
  - `src/components/CopyToClipboard/CopyToClipboard.tsx` (lines 76, 78)
  - `src/components/AvatarBubble/AvatarBubble.tsx` (line 14)
  - `src/components/DataTable/DataTable.tsx` (lines 231, 261)
- **Standard**: CP-007 prohibits inline styles; use styled-components
- **Fix**: Extract all style objects to styled-components

### 6. CS-001: Untyped 'any' Return Type
- **File**: `src/components/DataTable/HighlightText.tsx` (line 5)
- **Issue**: `highlightTextInElement(...): any` - no return type documentation
- **Standard**: CS-001 requires strict typing or documented comment
- **Fix**: Replace `any` with proper return type or add explanatory comment

### 7. CS-001: Multiple Untyped 'any' in Functions
- **File**: `src/components/DataTable/DataTable.tsx` (line 81)
- **Issue**: `customGlobalFilter = (row: any, ...)`
- **Standard**: CS-001 requires strict TypeScript
- **Fix**: Use proper typed generic parameter from TanStack Table

### 8. CS-001: Other 'any' Types
- **File**: `src/components/Sheet/Sheet.tsx` (lines 28, 243)
- **Issue**: `values: any` and `(val: any) =>`
- **Standard**: CS-001 requires strict typing
- **Fix**: Type as `Record<string, string | boolean>` or appropriate union

### 9. T-001: Missing Storybook Stories
- **Count**: 0 story files found in entire codebase
- **Files Affected**: ALL 27 custom components have NO stories
- **Standard**: T-001 requires every component to have `.stories.tsx`
- **Fix**: Create story files for every component in `src/components/`

---

## HIGH Priority Issues

### 10. CP-003: Incorrect Props Interface Naming
- **File**: `src/components/StatCard/StatCard.tsx` (line 6)
- **Issue**: `type StatCardprops` (lowercase 'p' in 'props', typo in 'Stat')
- **Standard**: CP-003 requires `{ComponentName}Props` pattern
- **Fix**: Rename to `StatCardProps`

### 11. CS-007: Magic Number (3500ms timeout)
- **File**: `src/components/CopyToClipboard/CopyToClipboard.tsx` (line 64)
- **Issue**: `setTimeout(() => setCopied(false), 3500)`
- **Standard**: CS-007 prohibits magic numbers
- **Fix**: Extract to `const COPY_SUCCESS_TIMEOUT_MS = 3500`

### 12. CS-007: Magic Number (10 rows)
- **File**: `src/components/DataTable/DataTable.tsx` (line 113)
- **Issue**: `Array(10).fill({})` - magic number for skeleton rows
- **Standard**: CS-007 requires named constants
- **Fix**: Extract to `const DEFAULT_SKELETON_ROWS = 10`

### 13. CS-007: Magic Number (10 items)
- **File**: `src/components/ChangeFeed/ChangeFeed.tsx` (line 12)
- **Issue**: `setVisibleCount(10)` without explanation
- **Standard**: CS-007 requires named constants
- **Fix**: Extract to named constant

### 14. CP-005: Missing Theme Integration
- **File**: `src/components/AnnouncementCard/AnnouncementCard.tsx` (line 14)
- **Issue**: Hard-coded color: `'[background:#dae8fd] ![color:#387eda]'`
- **Standard**: CP-005 requires theme tokens for all colors
- **Fix**: Use theme color tokens instead of hex values

### 15. CP-006: Props Drilling Issue
- **File**: `src/components/KeyFactCard/KeyFactCard.tsx`
- **Issue**: Complex composition with multiple prop levels
- **Standard**: CP-006 prefers composition with sub-components
- **Fix**: Consider breaking into composed sub-components

### 16. CS-002: Import Ordering Not Followed
- **Files**: Multiple files have imports not grouped properly
- **Example**: `src/components/Sheet/Sheet.tsx`
- **Standard**: CS-002 requires grouped imports with blank lines
- **Fix**: Reorganize imports per standard

### 17. CP-008: Missing Transient Props Prefix
- **File**: `src/components/StatCard/StatCard.tsx` (line 8)
- **Issue**: CVA variant props may be passed to DOM
- **Standard**: CP-008 requires `$` prefix for styled-component props
- **Fix**: Verify all CVA styled props use transient syntax

### 18. T-003: No Theme Variant Stories
- **Issue**: No components have both light/dark mode stories
- **Standard**: T-003 requires stories for light and dark themes
- **Fix**: Create stories with theme decorators

### 19. T-008: Mock Data Quality
- **File**: `src/components/AnnouncementCard/AnnouncementCard.tsx` (line 51)
- **Issue**: Placeholder default URL `'https://docs.lagoon.sh/releases/2.30.0/'`
- **Standard**: T-008 requires realistic mock data
- **Fix**: Use realistic example data in defaults

### 20. A11Y-002: Missing ARIA Labels
- **Files**: Various icon-only buttons (e.g., AnnouncementCard line 98-102)
- **Issue**: Close button has label but review others
- **Standard**: A11Y-002 requires explicit labels
- **Fix**: Audit all icon-only interactive elements

### 21. Deprecated Props Usage
- **File**: `src/components/AnnouncementCard/AnnouncementCard.tsx` (line 35)
- **Issue**: `defaultLogo` prop marked deprecated but still in interface
- **Standard**: Best practice is to remove deprecated props in major versions
- **Fix**: Consider deprecation timeline

---

## MEDIUM Priority Issues

### 22. CS-003: Class Component Reference
- **File**: `src/components/Table/Table.tsx` (line 22)
- **Issue**: `React.ComponentProps` usage pattern
- **Standard**: CS-003 requires functional components
- **Fix**: Verify all components use functional component syntax

### 23. CP-009: Theme Consistency
- **Multiple Files**: No evidence of dark mode testing in components
- **Standard**: CP-009 requires all components work in light AND dark modes
- **Fix**: Test all components in both themes

### 24. A11Y-006: Missing aria-live Regions
- **Issue**: Dynamic status updates don't use aria-live
- **Files**: ChangeFeed, AnnouncementCarousel, DataTable
- **Standard**: A11Y-006 requires aria-live for dynamic content
- **Fix**: Add aria-live="polite" to status update regions

### 25. A11Y-003: Keyboard Navigation
- **File**: `src/components/Breadcrumb/Breadcrumb.tsx`
- **Issue**: Click-only span elements not keyboard accessible
- **Standard**: A11Y-003 requires keyboard support
- **Fix**: Use semantic buttons/links with keyboard support

### 26. Table Props Interface
- **File**: `src/components/Table/Table.tsx` (line 18)
- **Issue**: `[prop: string]: any` - catch-all any type
- **Standard**: CS-001 requires explicit typing
- **Fix**: Define explicit prop interface

### 27. Sheet Component Props
- **File**: `src/components/Sheet/Sheet.tsx` (line 28)
- **Issue**: `values: any` in form submission
- **Standard**: CS-001 requires strict types
- **Fix**: Type as `Record<string, string | boolean>`

### 28. Sidenav Complex Type
- **File**: `src/components/Sidenav/Sidenav.tsx` (line 84)
- **Issue**: `(child: any) =>` in children iteration
- **Standard**: CS-001 requires proper typing
- **Fix**: Type children properly based on expected structure

### 29. Missing Type Documentation
- **Issue**: Functions with complex logic lack JSDoc comments
- **Examples**: `highlightTextInElement`, `customGlobalFilter`
- **Standard**: Best practice for maintainability
- **Fix**: Add JSDoc comments

---

## LOW Priority Issues

### 30. Variable Naming in DetailStat
- **File**: `src/components/DetailStat/DetailStat.tsx`
- **Issue**: Generic className variables for text transforms
- **Standard**: CS-005 naming conventions
- **Fix**: More explicit variable names

### 31. CopyToClipboard CSSProperties
- **File**: `src/components/CopyToClipboard/CopyToClipboard.tsx` (line 69)
- **Issue**: CSSProperties object still used as inline style
- **Standard**: Prefer styled-components
- **Fix**: Convert to styled component

### 32. Comments and Documentation
- **Issue**: Sparse inline documentation for complex logic
- **Examples**: DataTable custom filtering, AnnouncementCarousel logic
- **Standard**: Code maintainability
- **Fix**: Add clarifying comments

### 33. Unused displayName
- **File**: `src/components/ProblemsOverview/ProblemsOverview.tsx` (line 70)
- **Issue**: `displayName` set but may not be consistently used
- **Standard**: Best practice for debugging
- **Fix**: Add to all components for consistency

### 34. Import Consistency
- **Issue**: Mixed usage of `import type` and regular imports
- **Standard**: CS-002 type imports should come at end
- **Fix**: Audit all import statements

### 35. Unused CSS Classes
- **Issue**: Some className patterns may be unused
- **Examples**: Various classNames in styled components
- **Standard**: Code cleanliness
- **Fix**: Review and clean unused utilities

---

## Actionable Task List

1. **CRITICAL: Create Storybook Stories for All Components** - Create `.stories.tsx` files for all 27 components following T-002/T-003 standards
2. **CRITICAL: Fix Export Pattern** - Change all custom component exports from default to named exports
3. **CRITICAL: Remove Inline Styles** - Convert all inline style attributes to styled-components
4. **CRITICAL: Fix Semantic HTML** - Replace divs with onClick with proper button/semantic elements
5. **HIGH: Fix TypeScript any Types** - Replace all untyped `any` with explicit types or documentation
6. **HIGH: Extract Magic Numbers** - Create named constants for 3500, 10, 100, 500 magic numbers
7. **HIGH: Update Props Naming** - Fix StatCardprops → StatCardProps and review all Props interfaces
8. **HIGH: Fix Theme Colors** - Replace hard-coded colors with theme tokens
9. **HIGH: Audit Import Organization** - Reorganize imports across all components per CS-002
10. **MEDIUM: Add ARIA Live Regions** - Add aria-live to dynamic content areas
11. **MEDIUM: Comprehensive Dark Mode Testing** - Verify all components in both themes
12. **MEDIUM: Add JSDoc Comments** - Document complex functions and props
13. **LOW: Add displayName to Components** - Ensure all components have displayName for debugging
14. **LOW: Code Cleanup** - Remove unused utilities and optimize imports
