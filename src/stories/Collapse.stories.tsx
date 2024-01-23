import React from "react";

import { Meta, StoryObj } from "@storybook/react";

import { default as UICollase } from "../components/Collapse";
import UIHead3 from "../components/Heading/H3";
import { UICollapseProps } from "../components/Collapse/Collapse";

const meta: Meta<typeof UICollase> = {
  component: UICollase,
  title: "Components/UI Collapse",
};

type Story = StoryObj<typeof UICollase>;

const text = "Collapse content";

const items: UICollapseProps["items"] = [
  {
    key: "1",
    label: "This is panel header 1",
    children: <UIHead3>{text}</UIHead3>,
  },
  {
    key: "2",
    label: "This is panel header 2",
    children: <p>{text}</p>,
  },
  {
    key: "3",
    label: "This is panel header 3",
    children: <p>{text}</p>,
  },
];

export const Default: Story = {
  render: () => <UICollase defaultActiveKey={[1]} items={items} />,
};

export default meta;
