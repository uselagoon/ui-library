import React from "react";

import { Meta, StoryObj } from "@storybook/react";

import { default as Text } from "../components/Text";

const meta: Meta<typeof Text> = {
  component: Text,
  title: "Components/Text and Link",
  argTypes: {
    children: {
      description: "`ReactNode`",
    },
    type: {
      description: "`danger` | `warning` | `success` | `secondary`",
    },
    link: {
      type: "boolean",
      description: "Act as a link element",
    },
    href: {
      type: "string",
      description: "href if link is set to `true`",
    },
  },
};

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: "Some random normal text",
  },
};

export const DangerText: Story = {
  args: {
    children: "Danger text!",
    type: "danger",
  },
};

export const WarningText: Story = {
  args: {
    children: "Warning text!",
    type: "danger",
  },
};

export const Link: Story = {
  args: {
    children: "Link text",
    link: true,
  },
};
export default meta;
