import React from "react";

import { Meta, StoryObj } from "@storybook/react";

import { default as UISwitch } from "../components/Switch";

const meta: Meta<typeof UISwitch> = {
  component: UISwitch,
  title: "Components/UISwitch",
};

type Story = StoryObj<typeof UISwitch>;

export const Default: Story = {
  render: () => <UISwitch />,
};
export const NoLabel: Story = {
  render: () => <UISwitch showLabel={false} />,
};

export default meta;
