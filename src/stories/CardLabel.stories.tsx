import React from "react";

import { Meta, StoryObj } from "@storybook/react";

import { default as LagoonCardLabel } from "../components/CardLabel";

const meta: Meta<typeof LagoonCardLabel> = {
  component: LagoonCardLabel,
  title: "Components/Lagoon specific/Cardlabel",
};

type Story = StoryObj<typeof LagoonCardLabel>;

export const Development: Story = {
  args: {
    type: "development",
  },
  render: (args) => <LagoonCardLabel {...args} />,
};

export const Prod: Story = {
  args: {
    type: "production",
  },
  render: (args) => <LagoonCardLabel {...args} />,
};

export const ActiveProd: Story = {
  args: {
    type: "active production",
  },
  render: (args) => <LagoonCardLabel {...args} />,
};

export const StandByProd: Story = {
  args: {
    type: "standby production",
  },
  render: (args) => <LagoonCardLabel {...args} />,
};

export const Project: Story = {
  args: {
    type: "project",
  },
  render: (args) => <LagoonCardLabel {...args} />,
};

export const UAT: Story = {
  args: {
    type: "uat",
  },
  render: (args) => <LagoonCardLabel {...args} />,
};

export const Error: Story = {
  args: {
    type: "error",
  },
  render: (args) => <LagoonCardLabel {...args} />,
};
export default meta;
