import React from "react";

import { Meta, StoryObj } from "@storybook/react";

import { default as UIList } from "../components/List";
import UIHead3 from "../components/Heading/H3";

const { Item } = UIList;

const meta: Meta<typeof UIList> = {
  component: UIList,
  title: "Components/UI List",
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
      description: "Render callback: `(item) => <Item>{item}</Item>`"
    }

  },
};

const data = [
  "Action: Dump MariaDB to home directory",
  "Action: Dump MariaDB to home directory.",
  "Action: Dump MariaDB to home directory",
  "Action: Dump MariaDB to home directory.",
];

type Story = StoryObj<typeof UIList>;

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
    <UIList
      bordered
      dataSource={data}
      renderItem={(item) => <Item>{item}</Item>}
    />
  ),
};

export const WithHeadings: Story = {
  render: () => (
    <UIList
      header={<div>List Header</div>}
      footer={<div>List Footer</div>}
      bordered
      dataSource={data}
      renderItem={(item) => (
        <Item>
          <UIHead3>{item}</UIHead3>
        </Item>
      )}
    />
  ),
};

export default meta;
