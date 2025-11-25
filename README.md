# ui-library

Component library for all things lagoon related:

## Installation

### From GitHub Packages (Recommended)

The package is published to GitHub Packages. To install it, you need to configure npm to use GitHub Packages for the `@uselagoon` scope.

1. Create or edit your `.npmrc` file in your project root:

```bash
@uselagoon:registry=https://npm.pkg.github.com
```

2. Authenticate with GitHub Packages (requires a GitHub personal access token with `read:packages` scope):

```bash
npm login --scope=@uselagoon --registry=https://npm.pkg.github.com
```

3. Install the package:

```bash
npm install @uselagoon/ui-library
```

```bash
yarn add @uselagoon/ui-library
```

### From GitHub Repository (Alternative)

You can also install directly from the GitHub repository:

```bash
npm install github:uselagoon/ui-library#main
```

```bash
yarn add github:uselagoon/ui-library#main
```

#### Viewing storybook:

- clone this repo
- run `npm run storybook`

Using a component from the library:

```tsx
import '@uselagoon/ui-library/dist/ui-library.css';
import { Button } from '@uselagoon/ui-library';
```
