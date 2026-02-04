# Component Patterns

Standards for component structure, naming, and styling in the Lagoon UI Library.

## CP-001: File Structure

Each component lives in its own directory under `src/components/`. The directory name matches the component name in PascalCase.

```
src/components/
  MyComponent/
    index.tsx          # Main component export
    styles.ts          # styled-components styles
    MyComponent.stories.tsx  # Storybook stories
    types.ts           # TypeScript interfaces (if complex)
```

**Why**: Consistent structure makes components discoverable and predictable.

## CP-002: Named Exports via Barrel

Every component must be re-exported from `src/index.ts`. Use named exports, not default exports.

```tsx
// ✅ Good — src/index.ts
export { MyComponent } from './components/MyComponent';
export type { MyComponentProps } from './components/MyComponent/types';

// ❌ Bad — default exports
export default MyComponent;
```

**Why**: Named exports enable tree-shaking and explicit imports for consumers.

## CP-003: Props Interface Naming

Props interfaces use the pattern `{ComponentName}Props`. Export them alongside the component.

```tsx
// ✅ Good
export interface DeploymentCardProps {
  status: DeploymentStatus;
  environment: string;
  onCancel?: () => void;
}

// ❌ Bad
interface Props { ... }
interface IDeploymentCard { ... }
```

## CP-004: Styling With styled-components

Use styled-components for custom styling. Extend Ant Design components where possible rather than wrapping them.

```tsx
// ✅ Good — extending Ant Design
import { Card } from 'antd';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  border-color: ${(props) => props.theme.borders.default};
`;

// ❌ Bad — wrapping with div
const MyCard = ({ children }) => (
  <div className="my-card-wrapper">
    <Card>{children}</Card>
  </div>
);
```

**Why**: Extending preserves Ant Design's built-in props, accessibility, and theming.

## CP-005: Theme Integration

All colour values, spacing, and typography must reference theme tokens, not hard-coded values.

```tsx
// ✅ Good — theme tokens
const StyledLabel = styled.span`
  color: ${(props) => props.theme.text.primary};
  font-size: ${(props) => props.theme.fontSize.sm};
`;

// ❌ Bad — hard-coded values
const StyledLabel = styled.span`
  color: #333333;
  font-size: 14px;
`;
```

**Why**: Ensures light/dark mode works and theming is consistent.

## CP-006: Component Composition

Prefer composition over configuration. Break complex components into smaller sub-components.

```tsx
// ✅ Good — composed
<DeploymentCard>
  <DeploymentCard.Header status={status} />
  <DeploymentCard.Body>{children}</DeploymentCard.Body>
  <DeploymentCard.Actions onCancel={onCancel} />
</DeploymentCard>

// ❌ Bad — monolithic prop drilling
<DeploymentCard
  headerTitle="..."
  headerStatus={status}
  bodyContent={children}
  actionOnCancel={onCancel}
  actionOnRetry={onRetry}
  // ... 20 more props
/>
```

## CP-007: No Inline Styles

Do not use inline `style` attributes. Use styled-components for all styling.

```tsx
// ✅ Good
const StatusDot = styled.div<{ $active: boolean }>`
  background-color: ${(props) => props.$active ? props.theme.colors.success : props.theme.colors.muted};
`;

// ❌ Bad
<div style={{ backgroundColor: active ? 'green' : 'grey' }} />
```

## CP-008: Transient Props

Use the `$` prefix for styled-component props that should not be passed to the underlying DOM element.

```tsx
// ✅ Good — transient prop
const Box = styled.div<{ $isActive: boolean }>`
  opacity: ${(props) => props.$isActive ? 1 : 0.5};
`;

// ❌ Bad — will pass 'isActive' to DOM
const Box = styled.div<{ isActive: boolean }>`
  opacity: ${(props) => props.isActive ? 1 : 0.5};
`;
```

## CP-009: Light and Dark Mode

Every component must work in both light and dark mode. Test both themes in Storybook.

**Why**: UIThemeProvider supports toggling, and consumers expect both modes to work.

## CP-010: Ant Design Version Compatibility

This library uses Ant Design v5. Do not use patterns from v4 or earlier (e.g., Less-based theming, `@ant-design/compatible`).
