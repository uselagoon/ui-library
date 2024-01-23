import React from "react";

import { Meta, StoryObj } from "@storybook/react";

import { default as UIHeader1 } from "../components/Heading/H1";
import { default as UIHeader2 } from "../components/Heading/H2";
import { default as UIHeader3 } from "../components/Heading/H3";
import { default as UIHeader4 } from "../components/Heading/H4";
import { default as UIHeader5 } from "../components/Heading/H5";

const meta: Meta<typeof UIHeader1> = {
  component: UIHeader1,
  title: "Components/UIHeaders",
};

type Story = StoryObj<typeof UIHeader1>;

export const H1: Story = {
  render: () => <UIHeader1>H1 Lagoon Dashboard</UIHeader1>,
};
export const H2: Story = {
  render: () => <UIHeader2>H2 Lagoon Dashboard</UIHeader2>,
};

export const H3: Story = {
  render: () => <UIHeader3>H3 Lagoon Dashboard </UIHeader3>,
};

export const H4: Story = {
  render: () => <UIHeader4>H4 Lagoon Dashboard </UIHeader4>,
};

export const H5: Story = {
  render: () => <UIHeader5>H5 Lagoon Dashboard </UIHeader5>,
};

export default meta;
