import React from "react";

import { Meta, StoryObj } from "@storybook/react";

import { default as Button } from "../components/Button";
import { CaretDownFilled, DownOutlined, SearchOutlined } from "@ant-design/icons";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Components/Button",
};

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: () => (
    <Button size="large" iconBefore={<SearchOutlined/>} type="primary">
      Default Button
    </Button>
  ),
};

export const Exand: Story = {
  render: () => (
    <Button size="small" iconBefore={<SearchOutlined/>} iconAfter={<CaretDownFilled />} type="secondary">
      Retrieve
    </Button>
  ),
};


export const Disabled: Story = {
  render: () => (
    <Button size="large" type="primary" disabled>
      Disabled Button
    </Button>
  ),
};

export const ButtonLink: Story = {
  render: () => (
    <Button size="large" type="secondary">
      Button Link
    </Button>
  ),
};

export const DisabledButtonLink: Story = {
  render: () => (
    <Button type="primary" disabled>
      Button Link
    </Button>
  ),
};

export default meta;
