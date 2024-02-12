import React from "react";

import { Meta, StoryObj } from "@storybook/react";

import Collapse from "../components/Collapse/index";
import Head3 from "../components/Heading/H3";
import { UICollapseProps as CollapseProps } from "../components/Collapse/Collapse";

const meta: Meta<typeof Collapse> = {
  component: Collapse,
  title: "Components/Collapse",
  argTypes: {
    defaultActiveKey: {
      description: "Default open collapse item",
    },
    items: {
      description: "key - unique id, label - header, children - `ReactNode`",
    },
    accordion:{
      type:"boolean",
      description:"If true, one active expended item at a time"
    },
    collapsible:{
      controls:{
        type:"radio",
        options:["icon","header","disabled"]
      },

      description:"Collapsible trigger"
    },
    expandIcon:{
      description:"Any ReactNode",
    }
  },
};

type Story = StoryObj<typeof Collapse>;

const text = "Collapse content";

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: "This is panel header 1",
    children: <Head3>{text}</Head3>,
  },
  {
    key: "2",
    label: "This is panel header 2",
    children: <p>{text}</p>,
  },
  {
    key: "3",
    label: "This is panel header 3",
    children: <p>{text}</p>,
  },
];

export const Default: Story = {
  args: {
    defaultActiveKey: [1],
    items: items,
  },
};
export default meta;
