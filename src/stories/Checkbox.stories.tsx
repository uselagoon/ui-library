import React from "react";

import { Meta, StoryObj } from "@storybook/react";

import { default as Checkbox } from "../components/Checkbox";

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: "Components/Checkbox",
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

type Story = StoryObj<typeof Checkbox>;

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
