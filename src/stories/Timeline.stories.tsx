import React from "react";

import { Meta, StoryObj } from "@storybook/react";

import { default as LagoonTimeline } from "../components/Timeline";

const meta: Meta<typeof LagoonTimeline> = {
  component: LagoonTimeline,
  title: "Lagoon specific/Timeline",
};

type Story = StoryObj<typeof LagoonTimeline>;

export const Deployment: Story = {
  args: {
    type: "deployment",
    items: [
      {
        environment: "test6 (PROD)",
        deployName: "lagoon-build-tfek1i",
        status: "complete",
        date: "29/06/23, 13:47",
      },
      {
        environment: "test6 (PROD)",
        deployName: "lagoon-build-tfek1i",
        status: "queued",
        date: "29/06/23, 13:47",
      },
      {
        environment: "test6 (PROD)",
        deployName: "lagoon-build-tfek1i",
        status: "running",
        date: "29/06/23, 13:47",
      },
      {
        environment: "test6 (PROD)",
        deployName: "lagoon-build-tfek1i",
        status: "failed",
        date: "29/06/23, 13:47",
      },
      {
        environment: "test6 (PROD)",
        deployName: "lagoon-build-tfek1i",
        status: "error",
        date: "29/06/23, 13:47",
      },
    ],
  },
};

export const Default: Story = {
  args: {
    type: "task",
    items: [
      {
        environment: "as-demo (master)",
        taskName: "drush clear-cache",
        status: "complete",
        navigationFunction: () => {},
      },
      {
        environment: "as-demo (master)",
        taskName: "Active/Standby Switch",
        status: "error",
        navigationFunction: () => {},
      },
      {
        environment: "as-demo (master)",
        taskName: "drush sql-dump",
        status: "running",
        navigationFunction: () => {},
      },
      {
        environment: "as-demo (master)",
        taskName: "drush clear-cache",
        status: "complete",
        navigationFunction: () => {},
      },
      {
        environment: "as-demo (master)",
        taskName: "drush clear-cache",
        status: "queued",
        navigationFunction: () => {},
      },
    ],
  },
};

export default meta;
