import React from "react";

import { Meta, StoryObj } from "@storybook/react";

import { default as StatusTag } from "../components/StatusTag";
import { SmileOutlined } from "@ant-design/icons";

const meta: Meta<typeof StatusTag> = {
  component: StatusTag,
  title: "Components/StatusTag",
  argTypes: {
    type: {
      description: "Select from preconfigured tags, or use the `custom` object",
      control: "radio",
      options: ["complete", "error", "failed", "queued", "running", "custom"],
    },
    children: {
      description: "Works with `custom` (select custom in type to see)",
      control: "text",
    },
    color: {
      description: "Works with `custom` (select custom in type to see)",
      control: "color",
    },
    icon: {
      description: "Works with `custom` - any valid `JSX.Element`",
    },
  },
};

type Story = StoryObj<typeof StatusTag>;

export const Complete: Story = {
  args: {
    type: "complete",
  },
};

export const Error: Story = {
  args: {
    type: "error",
  },
};

export const Failed: Story = {
  args: {
    type: "failed",
  },
};

export const Queued: Story = {
  args: {
    type: "queued",
  },
};

export const Running: Story = {
  args: {
    type: "running",
  },
};

export const Custom: Story = {
  args: {
    type: "custom",
    color: "hotpink",
    icon: <SmileOutlined />,
    children: "Custom icon",
  },
};

export default meta;
