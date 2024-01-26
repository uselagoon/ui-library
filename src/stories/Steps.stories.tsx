import React from "react";

import { Meta, StoryObj } from "@storybook/react";

import { default as UISteps } from "../components/Steps";
import {
  CheckSquareOutlined,
  LoadingOutlined,
  SolutionOutlined,
  UserOutlined,
} from "@ant-design/icons";

const meta: Meta<typeof UISteps> = {
  component: UISteps,
  title: "Components/UISteps",

  argTypes: {
    items: {
      description: " title, description, icon - `ReactNode` types",
    },
    current: {
      description: "Currently active item in the `items` array",
    },
  },
};

const items = [
  {
    title: "Login",
    icon: <UserOutlined />,
  },
  {
    title: "Verification",
    description: "Non-required description",
    icon: <SolutionOutlined />,
  },
  {
    title: "Processing",
    icon: <LoadingOutlined />,
  },
  {
    title: "Done",
    icon: <CheckSquareOutlined />,
  },
];

type Story = StoryObj<typeof UISteps>;

export const Default: Story = {
  args: {
    items: items,
    current: 2,
  },
};

export default meta;
