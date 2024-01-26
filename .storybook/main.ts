import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-controls",
    "@storybook/addon-a11y",
    "@storybook/jest",
  ],

  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  docs: {
    autodocs: true,
  },
  core: {
    disableTelemetry: true,
  },
  typescript: {
	// HACK to make external lib props work with storybook
	reactDocgenTypescriptOptions: {
		shouldExtractLiteralValuesFromEnum: true,
		propFilter: (prop) => ( prop.parent ? !/node_modules\/(?!ant).*/.test(prop.parent.fileName) : true),
    savePropValueAsString: true,
	  },

  }

};
export default config;
