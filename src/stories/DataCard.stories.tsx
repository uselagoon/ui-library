import React from "react";

import { Meta, StoryObj } from "@storybook/react";

import { default as DataCard } from "../components/DataCard";

const meta: Meta<typeof DataCard> = {
  component: DataCard,
  title: "Components/DataCard",
};

type Story = StoryObj<typeof DataCard>;

export const Default: Story = {
  args: {
    text: "Critical",
    count: "99",
    critical: true,
  },
  render: (args) => <DataCard {...args} />,
};

export const High: Story = {
  args: {
    text: "HIgh",
    count: "60",
    high: true,
  },
  render: (args) => <DataCard {...args} />,
};

export const Medium: Story = {
  args: {
    text: "Medium",
    count: "39",
    medium: true,
  },
  render: (args) => <DataCard {...args} />,
};

export const Low: Story = {
  args: {
    text: "Low",
    count: "39",
    low: true,
  },
  render: (args) => <DataCard {...args} />,
};

export const Total: Story = {
  args: {
    text: "Problems",
    count: "100",
  },
  render: (args) => <DataCard {...args} />,
};

export default meta;
