import React from "react";

import { Meta, StoryObj } from "@storybook/react";

import { default as Tabs, TabsProps } from "../components/Tabs";

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  title: "Components/Tabs",
  argTypes: {
    items: {
      description: "<b>unique</b> key | label | children - `ReactNode`",
    },
  },
};

type Story = StoryObj<typeof Tabs>;

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Tab 1",
    children: "Tab 1 content",
  },
  {
    key: "2",
    label: "Tab 2",
    children: "Tab 2 content",
  },
  {
    key: "3",
    label: "Tab 3",
    children: "Tab 3 content",
  },
];
export const Default: Story = {
  args: {
    items,
  },
};

export default meta;
