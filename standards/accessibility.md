# Accessibility

WCAG 2.1 AA compliance is the baseline for all components in the Lagoon UI Library.

## A11Y-001: Semantic HTML

Use semantic elements. Ant Design components generally handle this, but custom elements must be correct.

```tsx
// ✅ Good
<nav aria-label="Main navigation">
<button onClick={onCancel}>Cancel deployment</button>
<table role="grid">

// ❌ Bad
<div onClick={onCancel}>Cancel deployment</div>
<div className="nav">
<div className="table">
```

## A11Y-002: ARIA Labels

Interactive elements without visible text must have `aria-label` or `aria-labelledby`.

```tsx
// ✅ Good
<Button
  icon={<CloseOutlined />}
  aria-label="Close dialog"
  onClick={onClose}
/>

// ❌ Bad — icon-only button with no label
<Button icon={<CloseOutlined />} onClick={onClose} />
```

## A11Y-003: Keyboard Navigation

All interactive elements must be reachable and operable via keyboard.

- Focusable elements in logical tab order
- Enter/Space activates buttons and links
- Escape closes modals, drawers, dropdowns
- Arrow keys navigate within composite widgets (tabs, menus)

## A11Y-004: Focus Management

- Focus must be visible (no `outline: none` without replacement)
- Modal/drawer opening must trap focus
- Modal/drawer closing must return focus to trigger element

```tsx
// ✅ Good — styled-components focus style
const StyledButton = styled(Button)`
  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.focus};
    outline-offset: 2px;
  }
`;
```

## A11Y-005: Colour Contrast

Text must meet WCAG AA contrast ratios:
- Normal text: 4.5:1 minimum
- Large text (18px+ or 14px+ bold): 3:1 minimum
- UI components and graphics: 3:1 minimum

**Both light and dark themes must pass.**

## A11Y-006: Status and Feedback

Use `aria-live` regions for dynamic content updates (deployment status changes, notifications).

```tsx
// ✅ Good
<div aria-live="polite" role="status">
  Deployment {status}
</div>
```

## A11Y-007: Form Inputs

All form inputs must have associated labels. Use Ant Design's `Form.Item` which handles this, or explicit `<label>` elements.

```tsx
// ✅ Good
<Form.Item label="Environment name" name="envName">
  <Input />
</Form.Item>

// ❌ Bad — no label association
<Input placeholder="Environment name" />
```

## A11Y-008: Images and Icons

Decorative images get `aria-hidden="true"`. Meaningful images get descriptive `alt` text.

```tsx
// ✅ Good — decorative
<LagoonLogo aria-hidden="true" />

// ✅ Good — meaningful
<img src={statusIcon} alt="Deployment succeeded" />
```

## A11Y-009: Error States

Error messages must be programmatically associated with their inputs and announced to screen readers.

## A11Y-010: Skip Links

Page-level layouts should include a "Skip to main content" link for keyboard users.
