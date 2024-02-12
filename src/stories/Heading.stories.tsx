import React from "react";

import { Meta, StoryObj } from "@storybook/react";

import { default as Head1 } from "../components/Heading/H1";
import { default as Head2 } from "../components/Heading/H2";
import { default as Head3 } from "../components/Heading/H3";
import { default as Hear4 } from "../components/Heading/H4";
import { default as Head5 } from "../components/Heading/H5";

const meta: Meta<typeof Head1> = {
  component: Head1,
  title: "Components/Headers",
};

type Story = StoryObj<typeof Head1>;

export const H1: Story = {
  render: () => <Head1>H1 Lagoon Dashboard</Head1>,
};
export const H2: Story = {
  render: () => <Head2>H2 Lagoon Dashboard</Head2>,
};

export const H3: Story = {
  render: () => <Head3>H3 Lagoon Dashboard </Head3>,
};

export const H4: Story = {
  render: () => <Hear4>H4 Lagoon Dashboard </Hear4>,
};

export const H5: Story = {
  render: () => <Head5>H5 Lagoon Dashboard </Head5>,
};

export default meta;
