import React from "react";

import { Meta, StoryObj } from "@storybook/react";

import {
  default as UIBreadcrumb,
  UIBreadcrumbProps,
} from "../components/Breadcrumb";

const meta: Meta<typeof UIBreadcrumb> = {
  component: UIBreadcrumb,
  title: "Components/UIBreadcrumb",
};

type Story = StoryObj<typeof UIBreadcrumb>;

const items: UIBreadcrumbProps["items"] = [
  {
    title: "Home",
  },
  {
    title: "Projects",
    navOnClick: () => {
      console.log("nav should be handled here");
    },
  },
  {
    title: "Demo",
  },
  {
    title: "Master",
    key: "activeItem",
    navOnClick: () => {
      console.log("nav should be handled here");
    },
  },
];
export const DefaultWithActive: Story = {
  render: () => <UIBreadcrumb items={items} activeKey="activeItem" />,
};

export const PrependedSeparator: Story = {
  render: () => <UIBreadcrumb items={items} prependSeparator="/" />,
};

export const PrependedWithAnything: Story = {
  render: () => <UIBreadcrumb items={items} prependSeparator="(ง •̀_•́)ง" />,
};
export default meta;
