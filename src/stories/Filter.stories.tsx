import React from "react";

import { Meta, StoryObj } from "@storybook/react";

import { default as LagoonFilter } from "../components/Filter";

const meta: Meta<typeof LagoonFilter> = {
  component: LagoonFilter,
  title: "Components/Lagoon specific/Filter",
};

type Story = StoryObj<typeof LagoonFilter>;

export const Default: Story = {
  render: () => <LagoonFilter />,
};

export default meta;
