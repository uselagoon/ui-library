import React from "react";

import { Meta, StoryObj } from "@storybook/react";

import { default as Pagination } from "../components/Pagination";

const meta: Meta<typeof Pagination> = {
  component: Pagination,
  title: "Components/Pagination",
};

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  render: () => {
    return <Pagination total={100}  />;
  },
};

export const Disabled: Story = {
  render: () => {
    return <Pagination disabled/>;
  },
};

export const Show: Story = {
    render: () => {
      return <Pagination showSizeChanger/>;
    },
  };

  
export default meta;
