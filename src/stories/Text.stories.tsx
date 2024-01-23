import React from "react";

import { Meta, StoryObj } from "@storybook/react";

import { default as UIText } from "../components/Text";

const meta: Meta<typeof UIText> = {
  component: UIText,
  title: "Components/Text and Link",
};

type Story = StoryObj<typeof UIText>;

export const Text: Story = {
  render: () => <UIText>Some random normal text</UIText>,
};

export const DangerText: Story = {
  render: () => <UIText type="danger">Danger text!</UIText>,
};

export const WarningText: Story = {
  render: () => <UIText type="warning">Danger text!</UIText>,
};

export const Link: Story = {
  render: () => <UIText link>Link text</UIText>,
};
export default meta;
