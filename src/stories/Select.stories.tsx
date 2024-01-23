import React from "react";

import { Meta, StoryObj } from "@storybook/react";

import { default as UISelect } from "../components/Select";

const meta: Meta<typeof UISelect> = {
  component: UISelect,
  title: "Components/UISelect",
};

type Story = StoryObj<typeof UISelect>;

export const Default: Story = {
  render: () => (
    <UISelect
      placeholder="Select something"
      options={[
        { value: "1", label: "Select option #1" },
        { value: "2", label: "Select option #2" },
        { value: "3", label: "Select option #3" },
      ]}
    />
  ),
};

export const Disabled: Story = {
  render: () => <UISelect disabled placeholder="Cannot select anything" />,
};

export default meta;
