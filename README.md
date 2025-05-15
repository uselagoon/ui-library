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
    "antd": "^5.13.0",
    "styled-components": "^6.1.8",
    "@ant-design/icons": "^5.2.6"
  }

```

#### Viewing storybook:

- clone this repo
- run `npm run storybook`

Using a component from the library:

```tsx
import { Button } from '@uselagoon/ui-library';
```
