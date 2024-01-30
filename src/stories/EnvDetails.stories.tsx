import React from "react";

import { Meta, StoryObj } from "@storybook/react";

import { default as LagoonEnvironmentDetails } from "../components/EnvironmentDetails";
import CopyToClipboard from "../components/CopyToClipboard";

import UITextLabel from "../components/TextLabel";

const meta: Meta<typeof LagoonEnvironmentDetails> = {
  component: LagoonEnvironmentDetails,
  title: "Lagoon specific/Environment Details",
};

type Story = StoryObj<typeof LagoonEnvironmentDetails>;

const items = {
  environmentType: "production (standby)",
  deploymentType: "branch",
  created: "22 Jul 2021, 12:55:07 (+09:30)",
  source: "github.com/amazeeio-demos/as-demo/tree/master",

  standbyRoutes: (
    <UITextLabel
      link
      href={"https://as-demo-standby.test6.amazee.io"}
      target="_blank"
    >
      https://as-demo-standby.test6.amazee.io
    </UITextLabel>
  ),
  routes: [
    <UITextLabel
      link
      href={"https://as-demo-standby.test6.amazee.io"}
      target="_blank"
    >
      https://as-demo-standby.test6.amazee.io
    </UITextLabel>,
    <UITextLabel
      link
      href={"https://nginx.master.as-demo.test6.amazee.io"}
      target="_blank"
    >
      https://nginx.master.as-demo.test6.amazee.io
    </UITextLabel>,
  ],
  deployKey: (
    <CopyToClipboard
      type="hidden"
      text="ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAICLCOWp+g1m6DrIMuK820Uk+fakoYb5nHVarOhb6yCfy"
    />
  ),
};

export const Default: Story = {
  args: {
    ...items,
  },
  render: () => <LagoonEnvironmentDetails {...items} />,
};

export default meta;
