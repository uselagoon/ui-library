# ui-library

Component library for all things lagoon related:

Install with a single npm/yarn command:

```bash
npm install github:uselagoon/ui-library#main antd styled-components @ant-design/icons
```

```bash
yarn add github:uselagoon/ui-library#main antd styled-components @ant-design/icons
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
* clone this repo
* run `npm run storybook`

Using a component from the library:

```tsx
import { Button } from '@uselagoon/ui-library'
```


## The component library works with:
- React (with styled-components or tailwind out of the box)
- Next < 13
- Next > 13

### There are a few extra steps needed to configure usage with Next

Since the library is built on top of Ant design and Styled-components, we need `AntdRegistry` and `StyledComponentsRegistry` in Next > 13, which then wrap the `children` prop in the root layout.



### /lib/AntdRegistry.tsx:
```tsx
"use client";

import React from "react";
import { useServerInsertedHTML } from "next/navigation";
import { StyleProvider, createCache, extractStyle } from "@ant-design/cssinjs";
import type Entity from "@ant-design/cssinjs/es/Cache";

interface AntdRegistryProps {
  children: React.ReactNode;
}

const AntdRegistry = ({ children }: AntdRegistryProps) => {
  const cache = React.useMemo<Entity>(() => createCache(), []);
  useServerInsertedHTML(() => (
    <style
      id="antd"
      dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }}
    />
  ));
  return <StyleProvider cache={cache}>{children}</StyleProvider>;
};

export default AntdRegistry;
```
### /lib/StyledComponentsRegistry.tsx:
```tsx
'use client';

import React, { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

export default function StyledComponentsRegistry({ children }: { children: React.ReactNode }) {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== 'undefined') return <>{children}</>;

  return <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>{children}</StyleSheetManager>;
}
```
### Usage in the root layout:
```tsx
import StyledComponentsRegistry from './lib/StyledComponentsRegistry';
import AntdRegistry from './lib/AntdRegistry';

{ ... }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <AntdRegistry>{children}</AntdRegistry>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

```

# Theming
Theming is supported out of the box with default `UI` specific color schemes that work with the components, which can be extended from your own Provider, example below uses UI library provided global styles and users the `UIThemeProvider` to enable light/dark mode theming;

The default theme can be extended by providing a `darkThemeProp` or a `lightThemeProp` of type   `Record<string, string> `

the `useTheme` hook from the library is also useful for manually toggling between themes:
```tsx
// ...  
const { theme, toggleTheme } = useTheme();
```

### /providers/AppProvider.tsx:
```tsx
//AppProvider.tsx
"use client";

import React, { ReactNode } from "react";
import { GlobalStyles, UIThemeProvider } from "@uselagoon/ui-library";
import AntdRegistry from "../lib/AntdRegistry";
import StyledComponentsRegistry from "../lib/StyledComponentsRegistry";

const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <AntdRegistry>
      <StyledComponentsRegistry>
        <UIThemeProvider>
          <GlobalStyles />
          {children}
        </UIThemeProvider>
      </StyledComponentsRegistry>
    </AntdRegistry>
  );
};
export default AppProvider;
```
Which can then be used in RootLayout:

```tsx
import AppProvider from "./providers/AppProvider";

{ ... }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}

```

### Usage with Next < 13
Some changes are required in `__document.tsx` in order to enable SSR for antd/styled-components:
[More at AntD docs](https://ant.design/docs/react/server-side-rendering#extract-on-demand)

```tsx
// _document.tsx

import { createCache, StyleProvider } from '@ant-design/cssinjs';
import type { DocumentContext } from 'next/document';
import Document, { Head, Html, Main, NextScript } from 'next/document';

import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderpage = ctx.renderPage;
    const cache = createCache();

    try {
      ctx.renderPage = () =>
        originalRenderpage({
          enhanceApp: App => props =>
            sheet.collectStyles(
              <StyleProvider cache={cache}>
                <App {...props} />
              </StyleProvider>
            ),
        });
      const initialProps = await Document.getInitialProps(ctx);
      const antdStyle = extractStyle(cache, true);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
            <style dangerouslySetInnerHTML={{ __html: antdStyle }} />
          </>
        ),
      };
```


