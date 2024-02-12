import React from "react";

import { Meta, StoryObj } from "@storybook/react";

import { default as TaskTreeSelector } from "../components/TaskTreeSelector";
import { CarryOutOutlined } from "@ant-design/icons";

const meta: Meta<typeof TaskTreeSelector> = {
  component: TaskTreeSelector,
  title: "Lagoon specific/TaskTreeSelector",
};

type Story = StoryObj<typeof TaskTreeSelector>;

const treeData = [
  {
    title: "Run a task",
    value: "first",
    selectable: false,
    children: [
      {
        title: "Clear Drupal caches [drush cache-clear]",
        value: "1",
        icon: <CarryOutOutlined />,
      },
      {
        title: "Run Drupal cron [drush cron]]",
        value: "2",
        icon: <CarryOutOutlined />,
      },
      {
        title: "Copy database between environments [drush sql-sync]",
        value: "3",
        icon: <CarryOutOutlined />,
      },
      {
        title: "Copy files between backup [drush sql-dump]",
        value: "4",
        icon: <CarryOutOutlined />,
      },
      {
        title: "Generate database backup",
        value: "5",
        icon: <CarryOutOutlined />,
      },
      {
        title:
          "Generate database and files backup (Drush 8 only) [drush archive-dump]",
        value: "6",
        icon: <CarryOutOutlined />,
      },
      {
        title: "Generate login link [drush uli]",
        value: "7",
        icon: <CarryOutOutlined />,
      },
    ],
  },
  {
    title: "Backup",
    value: "backup",
    selectable: false,
    children: [
      {
        title: "Trigger environment backup",
        value: "triggerBackup",
        icon: <CarryOutOutlined />,
      },
    ],
  },
  {
    title: "Deploy",
    value: "deploy",
    selectable: false,
    children: [
      {
        title: "Trigger a deployment",
        value: "triggerDeploy",
        icon: <CarryOutOutlined />,
      },
    ],
  },
];

export const Default: Story = {
  render: () => (
    <TaskTreeSelector placeholder="Select an action" treeData={treeData} />
  ),
};

export const SelectableSections: Story = {
  render: () => (
    <TaskTreeSelector
      placeholder="Select an action or the whole section"
      sectionsCheckable
      treeData={treeData}
    />
  ),
};
export default meta;
