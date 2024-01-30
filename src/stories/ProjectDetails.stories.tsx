import React from "react";

import { Meta, StoryObj } from "@storybook/react";

import { default as LagoonProjectDetails } from "../components/ProjectDetails";
import CopyToClipboard from "../components/CopyToClipboard";

const meta: Meta<typeof LagoonProjectDetails> = {
  component: LagoonProjectDetails,
  title: "Lagoon specific/Project Details",
};

type Story = StoryObj<typeof LagoonProjectDetails>;

const items = {
  created: "22 Jul 2021, 12:55:07 (+09:30)",
  origin: <CopyToClipboard text="github.com/amazeeio-demos/as-demo" />,
  gitUrl: <CopyToClipboard text="git@github.com:amazeeio-demos/as-demo.git" />,
  devEnvsInUse: "5 of 5",
  branchesEnabled: true,
  prsEnabled: true,
  deployKey: (
    <CopyToClipboard
      width={500}
      type="hidden"
      text="ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAICLCOWp+g1m6DrIMuK820Uk+fakoYb5nHVarOhb6yCfy"
    />
  ),
};

export const Default: Story = {
  args: {
    ...items,
  },
  render: () => <LagoonProjectDetails {...items} />,
};

export default meta;
