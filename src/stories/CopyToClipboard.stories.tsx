import React from "react";

import { Meta, StoryObj } from "@storybook/react";

import { default as CopyToClipboard } from "../components/CopyToClipboard";

const meta: Meta<typeof CopyToClipboard> = {
  component: CopyToClipboard,
  title: "Components/CopyToClipboard",
};

type Story = StoryObj<typeof CopyToClipboard>;

export const Default: Story = {
  args: {
    width: 150,
    text: "Copy me",
  },
};

export const HiddenEllipsis: Story = {
  args: {
    width: 150,
    type: "hidden",
    text: "https://github.com/uselagoon/lagoon-ui",
  },
};

export const HiddenLarge: Story = {
  args: {
    width: 250,
    type: "hidden",
    text: "https://github.com/uselagoon/lagoon-ui",
  },
};
export default meta;
