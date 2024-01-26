import React from "react";

import { Meta, StoryObj } from "@storybook/react";

import { default as UICheckbox } from "../components/Checkbox";

const meta: Meta<typeof UICheckbox> = {
  component: UICheckbox,
  title: "Components/UICheckbox",
  argTypes: {
    checked: {
      control: "boolean",
    },
    children: {
      type: "string",
      control: "text",
      description: "Any valid `ReactNode`",
    },
    onChange: {
      type: "function",
      defaultValue: { summary: "-" },
      description: "Callback `function`",
    },
    disabled: {
      type: "boolean",
    },
  },
};

type Story = StoryObj<typeof UICheckbox>;

export const Default: Story = {
  args: {
    children: "Checkbox",
  },
};
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export default meta;
