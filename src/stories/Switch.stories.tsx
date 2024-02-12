import React from "react";

import { Meta, StoryObj } from "@storybook/react";

import { default as Switch } from "../components/Switch";

const meta: Meta<typeof Switch> = {
  component: Switch,
  title: "Components/Switch",
};

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    showLabel:true
  },
};
export const NoLabel: Story = {
  render: () => <Switch showLabel={false} />,
};

export default meta;
