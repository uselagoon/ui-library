# Testing

Standards for Storybook stories and component testing in the Lagoon UI Library.

## T-001: Every Component Gets Stories

Every exported component MUST have a corresponding `.stories.tsx` file in its directory.

```
src/components/DeploymentCard/
  index.tsx
  styles.ts
  DeploymentCard.stories.tsx  ← Required
```

## T-002: Story Naming Convention

Stories follow the pattern `{Domain}/{ComponentName}`. Use Storybook's CSF3 format.

```tsx
// ✅ Good
import type { Meta, StoryObj } from '@storybook/react';
import { DeploymentCard } from './index';

const meta: Meta<typeof DeploymentCard> = {
  title: 'Deployments/DeploymentCard',
  component: DeploymentCard,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof DeploymentCard>;

export const Default: Story = {
  args: {
    status: 'running',
    environment: 'production',
  },
};
```

## T-003: Cover All Variants

Stories must demonstrate:
- Default state
- All significant prop variations
- Loading state (if applicable)
- Error state (if applicable)
- Empty state (if applicable)
- Light and dark themes

```tsx
export const Default: Story = { args: { status: 'running' } };
export const Success: Story = { args: { status: 'complete' } };
export const Failed: Story = { args: { status: 'failed' } };
export const Queued: Story = { args: { status: 'queued' } };
export const Loading: Story = { args: { isLoading: true } };
```

## T-004: Interaction Testing

Complex components with user interactions should use Storybook's play functions.

```tsx
export const WithInteraction: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', { name: /cancel/i }));
    await expect(canvas.getByText('Cancelled')).toBeInTheDocument();
  },
};
```

## T-005: Responsive Stories

Components used at different viewport sizes should have stories demonstrating responsive behaviour.

```tsx
export const Mobile: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
};
```

## T-006: Accessibility Checks

Enable Storybook's a11y addon. Stories should not generate accessibility violations in the addon panel.

## T-007: Theme Stories

Components with theme-dependent styling must have stories for both light and dark themes.

```tsx
export const DarkMode: Story = {
  decorators: [
    (Story) => (
      <UIThemeProvider initialTheme="dark">
        <Story />
      </UIThemeProvider>
    ),
  ],
};
```

## T-008: Realistic Data

Use realistic mock data in stories, not placeholder text like "Lorem ipsum" or "Test 123".

```tsx
// ✅ Good
args: {
  projectName: 'high-cotton-production',
  environment: 'main',
  deployedAt: '2025-01-15T09:30:00Z',
}

// ❌ Bad
args: {
  projectName: 'test',
  environment: 'foo',
  deployedAt: 'date',
}
```

## T-009: Build Verification

Before submitting, verify:
1. `npm run build` completes without errors
2. `npm run lint` passes
3. `npm run storybook` renders your stories correctly
4. Both light and dark themes work

## T-010: No Snapshot Tests (Current Policy)

We currently use visual verification via Storybook + Playwright rather than snapshot testing. This may change — check this file for updates.
