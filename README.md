# ui-library

Component library for all things lagoon related:

Install with a single npm/yarn command:

```bash
npm install github:uselagoon/ui-library#main
```

```bash
yarn add github:uselagoon/ui-library#main
```

Alternatively, add the following to your `package.json` and run `npm i`:

```json
   "dependencies": {
    "react": "^18",
    "react-dom": "^18",
    "ui-library": "github:uselagoon/ui-library#main",
  }

```

#### Viewing storybook:

- clone this repo
- run `npm run storybook`

Using a component from the library:

```tsx
import '@uselagoon/ui-library/dist/ui-library.css';
import { Button } from '@uselagoon/ui-library';
```
