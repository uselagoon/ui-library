import React from "react";

import { Meta, StoryObj } from "@storybook/react";

import { default as UICheckbox } from "../components/Checkbox";

const meta: Meta<typeof UICheckbox> = {
  component: UICheckbox,
  title: "Components/UICheckbox",
};

type Story = StoryObj<typeof UICheckbox>;

export const Default: Story = {
  render: () => <UICheckbox />,
};
export const Disabled: Story = {
  render: () => <UICheckbox disabled />,
};

export default meta;
