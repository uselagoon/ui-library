# Code Style

TypeScript and React conventions for the Lagoon UI Library.

## CS-001: Strict TypeScript

Enable strict mode. No `any` types unless absolutely necessary and documented with a comment explaining why.

```tsx
// ✅ Good
const getStatus = (code: number): DeploymentStatus => { ... }

// ❌ Bad
const getStatus = (code: any): any => { ... }
```

## CS-002: Import Ordering

Group imports in this order, separated by blank lines:

1. React / React DOM
2. Third-party libraries (antd, styled-components, etc.)
3. Internal components and utilities
4. Types (using `import type`)
5. Styles

```tsx
// ✅ Good
import React, { useState, useCallback } from 'react';

import { Button, Card } from 'antd';
import styled from 'styled-components';

import { StatusBadge } from '../StatusBadge';
import { formatDate } from '../../utils/date';

import type { DeploymentCardProps } from './types';
```

## CS-003: Functional Components Only

Use functional components with hooks. No class components.

```tsx
// ✅ Good
export const MyComponent: React.FC<MyComponentProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return ( ... );
};

// ❌ Bad
class MyComponent extends React.Component { ... }
```

## CS-004: Explicit Return Types

Export functions and component helpers should have explicit return types.

```tsx
// ✅ Good
export const formatDeploymentDate = (date: string): string => { ... }
export const useDeploymentStatus = (id: string): DeploymentStatus => { ... }
```

## CS-005: Naming Conventions

| Type | Convention | Example |
|------|-----------|---------|
| Components | PascalCase | `DeploymentCard` |
| Props interfaces | `{Name}Props` | `DeploymentCardProps` |
| Hooks | `use{Name}` | `useDeploymentStatus` |
| Utilities | camelCase | `formatDate` |
| Constants | UPPER_SNAKE_CASE | `MAX_RETRY_COUNT` |
| Types/Enums | PascalCase | `DeploymentStatus` |
| Styled components | `Styled{Name}` or descriptive | `StyledCard`, `StatusDot` |

## CS-006: Error Handling

Never swallow errors silently. At minimum, log to console in development.

```tsx
// ✅ Good
try {
  await fetchDeployment(id);
} catch (error) {
  console.error('Failed to fetch deployment:', error);
  throw error;
}

// ❌ Bad
try {
  await fetchDeployment(id);
} catch (e) {}
```

## CS-007: No Magic Numbers

Extract numeric values into named constants or theme tokens.

```tsx
// ✅ Good
const MAX_VISIBLE_DEPLOYMENTS = 10;
const POLL_INTERVAL_MS = 5000;

// ❌ Bad
if (deployments.length > 10) { ... }
setTimeout(poll, 5000);
```

## CS-008: Prefer Destructuring

Destructure props, state, and object returns.

```tsx
// ✅ Good
const { status, environment, onCancel } = props;
const { data, isLoading } = useQuery(...);

// ❌ Bad
const status = props.status;
const data = result.data;
```

## CS-009: ESLint and Prettier Compliance

All code must pass ESLint (flat config) and Prettier without warnings. Run `npm run lint` before submitting.

## CS-010: No Console Statements in Production

Remove `console.log` before committing. Use `console.error` or `console.warn` only for genuine error/warning conditions.
