import React from "react";

import { Meta, StoryObj } from "@storybook/react";

import { default as UIPagination } from "../components/Pagination";

const meta: Meta<typeof UIPagination> = {
  component: UIPagination,
  title: "Components/UIPagination",
};

type Story = StoryObj<typeof UIPagination>;

export const Default: Story = {
  render: () => {
    return <UIPagination total={100}  />;
  },
};

export const Disabled: Story = {
  render: () => {
    return <UIPagination disabled/>;
  },
};

export const Show: Story = {
    render: () => {
      return <UIPagination showSizeChanger/>;
    },
  };

  
export default meta;
