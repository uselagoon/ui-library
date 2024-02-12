import React from "react";

import { Meta, StoryObj } from "@storybook/react";

import { default as Select } from "../components/Select";

const meta: Meta<typeof Select> = {
  component: Select,
  title: "Components/Select",
};

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: () => (
    <Select
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
  render: () => <Select disabled placeholder="Cannot select anything" />,
};

export default meta;
