import React from "react";

import { Meta, StoryObj } from "@storybook/react";

import { default as Button } from "../components/Button";
import { CaretDownFilled, SearchOutlined } from "@ant-design/icons";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Components/Button",
  argTypes: {
    size: {
      control: "radio",
      options: ["large", "small", "middle"],
      type: "string",
      description: "One of 3 preset sizes",
      defaultValue: { summary: "large" },
    },
    type: {
      control: "radio",
      options: ["primary", "secondary"],
      type: "string",
      description: "One of 2 preset sizes",
      defaultValue: { summary: "primary" },
    },
    iconBefore: {
      defaultValue: { summary: "-" },
      description: "Any valid `ReactNode`",
    },
    iconAfter: {
      defaultValue: { summary: "-" },
      description: "Any valid `ReactNode`",
    },
    children: {
      type: "string",
      control: "text",
      description: "Any valid `ReactNode`",
    },
    onClick:{
      type: "function",
      defaultValue: { summary: "-" },
      description: "Callback `function`",
    }
  },
};

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    size: "large",
    type: "primary",
    iconBefore: <SearchOutlined />,
    children: "Default Button",
    onClick: () =>{alert("clicked")}
  },
};

export const Exand: Story = {
  args: {
    size: "small",
    type: "secondary",
    iconBefore: <SearchOutlined />,
    iconAfter: <CaretDownFilled />,
    children: "Retrieve",
  },
};

export const Disabled: Story = {
  args: {
    size: "large",
    type: "primary",
    disabled: true,
    children: "Disabled Button",
  },
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
