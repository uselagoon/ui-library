import React from "react";

import { Meta, StoryObj } from "@storybook/react";

import { default as UIDataCard } from "../components/DataCard";

const meta: Meta<typeof UIDataCard> = {
  component: UIDataCard,
  title: "Components/UI DataCard",
};

type Story = StoryObj<typeof UIDataCard>;

export const Default: Story = {
  args: {
    text: "Critical",
    count: "99",
    critical: true,
  },
  render: (args) => <UIDataCard {...args} />,
};

export const High: Story = {
  args: {
    text: "HIgh",
    count: "60",
    high: true,
  },
  render: (args) => <UIDataCard {...args} />,
};

export const Medium: Story = {
  args: {
    text: "Medium",
    count: "39",
    medium: true,
  },
  render: (args) => <UIDataCard {...args} />,
};

export const Low: Story = {
  args: {
    text: "Low",
    count: "39",
    low: true,
  },
  render: (args) => <UIDataCard {...args} />,
};

export const Total: Story = {
  args: {
    text: "Problems",
    count: "100",
  },
  render: (args) => <UIDataCard {...args} />,
};

export default meta;
