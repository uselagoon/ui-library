import React from "react";

import { Meta, StoryObj } from "@storybook/react";

import UITree, { default as UIDropdown } from "../components/Tree";

const meta: Meta<typeof UIDropdown> = {
  component: UIDropdown,
  title: "Components/Tree",
};

type Story = StoryObj<typeof UIDropdown>;

const items = [
  {
    title: "Critical Problems",
    key: "problems",
    selectable: false,
    children: [
      {
        title: "Major problems",
        key: "major",
        selectable: false,
        children: [
          {
            title: "A major problem",
            key: "majorprob",
          },
        ],
      },

      {
        title: "Minor problems",
        key: "minor",
        selectable: false,
        children: [
          {
            title: "A minor problem",
            key: "minorprob",
          },
        ],
      },

      {
        title: "Unrelated problem",
        key: "123",
      },
    ],
  },
];
export const Default: Story = {
  render: () => <UITree items={items} />,
};

export default meta;
