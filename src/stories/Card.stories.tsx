import React from "react";

import { Meta, StoryObj } from "@storybook/react";

import { default as LagoonCard } from "../components/Card";

const meta: Meta<typeof LagoonCard> = {
  component: LagoonCard,
  title: "Lagoon specific/LagoonCard",
};

type Story = StoryObj<typeof LagoonCard>;

export const DevEnvironment: Story = {
  args: {
    type: "environment",
    title: "8.x-test6",
    envType: "development",
    status: "low",
    projects: [
      {
        name: "test6-drupal-example-simple-8-x-test6",
      },
      {
        name: "test6-drupal-example-simple-8-x-test6-and-is-very-long-to-type",
      },
      {
        name: "test6-lagoon",
      },
    ],
  },
};
export const ActiveProd: Story = {
  args: {
    type: "environment",
    title: "8.x-test6",
    envType: "active production",
    status: "low",
    projects: [
      {
        name: "test6-drupal-example-simple-8-x-test6",
      },
      {
        name: "test6-drupal-example-simple-8-x-test6-and-is-very-long-to-type",
      },
      {
        name: "test6-lagoon",
      },
    ],
  },
};

export const Prod: Story = {
  args: {
    type: "environment",
    title: "8.x-test6",
    envType: "production",
    status: "low",
    projects: [
      {
        name: "test6-drupal-example-simple-8-x-test6",
      },
      {
        name: "test6-drupal-example-simple-8-x-test6-and-is-very-long-to-type",
      },
      {
        name: "test6-lagoon",
      },
    ],
  },
};

export const StandbyProd: Story = {
  args: {
    type: "environment",
    title: "8.x-test6",
    envType: "standby production",
    status: "low",
    projects: [
      {
        name: "test6-drupal-example-simple-8-x-test6",
      },
      {
        name: "test6-drupal-example-simple-8-x-test6-and-is-very-long-to-type",
      },
      {
        name: "test6-lagoon",
      },
    ],
  },
};

export const Project: Story = {
  args: {
    type: "project",
    title: "as-demo",
    status: "high",
    environments: [
      "master (active production)",
      "master-alt (standby production)",
      "master-broken",
    ],
  },
};

export const New: Story = {
  args: {
    type: "new",
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const Error: Story = {
  args: {
    type: "environment",
    title: "8.x-test6",
    envType: "error",
    status: "low",
    projects: [
      {
        name: "test6-drupal-example-simple-8-x-test6",
      },
      {
        name: "test6-drupal-example-simple-8-x-test6-and-is-very-long-to-type",
      },
      {
        name: "test6-lagoon",
      },
    ],
  },
};

export default meta;
