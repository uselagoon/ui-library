import type { Preview } from "@storybook/react";
import withTheme from "./decorators/withTheme";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      controls: { expanded: true },
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      source: {
        language: "tsx",
        type: "code",
      },
      story: {
        height: "300px",
      },
    },
  },
  globalTypes: {
    theme: {
      description: "Global theme for components",
      defaultValue: "light",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: [
          { value: "light", icon: "circlehollow", title: "Light Theme" },
          { value: "dark", icon: "circle", title: "Dark Theme" },
          { value: "side-by-side", icon: "mirror", title: "Side by side" },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [withTheme],
};

export default preview;
