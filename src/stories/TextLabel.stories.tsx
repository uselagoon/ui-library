import React from "react";

import { Meta, StoryObj } from "@storybook/react";

import { default as UITextLabel } from "../components/TextLabel";

const meta: Meta<typeof UITextLabel> = {
  component: UITextLabel,
  title: "Components/TextLabel",
};

type Story = StoryObj<typeof UITextLabel>;

export const Text: Story = {
  render: () => <UITextLabel>Some random normal text label</UITextLabel>,
};

export const DangerText: Story = {
  render: () => <UITextLabel type="danger">Danger text label</UITextLabel>,
};

export const Link: Story = {
  render: () => <UITextLabel link>Link text label</UITextLabel>,
};
export default meta;
