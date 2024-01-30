import React from "react";

import { Meta, StoryObj } from "@storybook/react";

import LagoonProblemsOverview from "../components/ProblemsOverview";

const meta: Meta<typeof LagoonProblemsOverview> = {
  component: LagoonProblemsOverview,
  title: "Lagoon specific/LagoonProblemsOverview",
};

type Story = StoryObj<typeof LagoonProblemsOverview>;

export const Good: Story = {
  args: {
    problems: 3,
    critical: 0,
    high: 0,
    medium: 0,
    low: 3,
  },
};

export const Medium: Story = {
  args: {
    problems: 68,
    critical: 25,
    high: 10,
    medium: 10,
    low: 23,
  },
};

export const Bad: Story = {
  args: {
    problems: 99,
    critical: 50,
    high: 20,
    medium: 20,
    low: 9,
  },
};
export default meta;
