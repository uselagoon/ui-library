import React from "react";

import { Meta, StoryObj } from "@storybook/react";

import { default as LagoonFooter } from "../components/Footer";
import { IconMeh } from "../components/Icons";

const meta: Meta<typeof LagoonFooter> = {
  component: LagoonFooter,
  title: "Lagoon specific/Footer",
  argTypes: {
    icon: {
      description: "Svg element, if not provided, lagoon default will be used",
    },
    toggleTheme: {
      description:
        "Toggler function returned from `const { theme, toggleTheme } = useTheme()` expression",
    },
  },
};

type Story = StoryObj<typeof LagoonFooter>;

export const Default: Story = {
  args: {},
};
export const CustomLogo: Story = {
  args: {
    icon: <IconMeh />,
  },
};

export default meta;
