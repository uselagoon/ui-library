import React from "react";

import { Meta, StoryObj } from "@storybook/react";

import { default as List } from "../components/List";
import Head3 from "../components/Heading/H3";

const { Item } = List;

const meta: Meta<typeof List> = {
  component: List,
  title: "Components/List",
  argTypes: {
    header:{
      description:"`ReactNode`"
    },
    footer:{
      description:"`ReactNode`"
    },
    dataSource:{
      description:"Array of `ReactNode` elements"
    },
    renderItem:{
      type:"function",
      description: "Render callback: `(item) => <List.Item>{item}</List.Item>`"
    }

  },
};

const data = [
  "Action: Dump MariaDB to home directory",
  "Action: Dump MariaDB to home directory.",
  "Action: Dump MariaDB to home directory",
  "Action: Dump MariaDB to home directory.",
];

type Story = StoryObj<typeof List>;

export const Default: Story = {
  args:{
    header:<div>List Header</div>,
    footer:<div>List Footer</div>,
    bordered:true,
    dataSource:data,
    renderItem:(item) => <Item>{item}</Item>
  },
};

export const NoHeaderFooter: Story = {
  render: () => (
    <List
      bordered
      dataSource={data}
      renderItem={(item) => <Item>{item}</Item>}
    />
  ),
};

export const WithHeadings: Story = {
  render: () => (
    <List
      header={<div>List Header</div>}
      footer={<div>List Footer</div>}
      bordered
      dataSource={data}
      renderItem={(item) => (
        <Item>
          <Head3>{item}</Head3>
        </Item>
      )}
    />
  ),
};

export default meta;
