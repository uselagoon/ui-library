import React from "react";

import { Meta, StoryObj } from "@storybook/react";

import { default as UIList } from "../components/List";
import UIHead3 from "../components/Heading/H3";

const { Item } = UIList;

const meta: Meta<typeof UIList> = {
  component: UIList,
  title: "Components/UI List",
};

const data = [
  "Action: Dump MariaDB to home directory",
  "Action: Dump MariaDB to home directory.",
  "Action: Dump MariaDB to home directory",
  "Action: Dump MariaDB to home directory.",
];

type Story = StoryObj<typeof UIList>;

export const Default: Story = {
  render: () => (
    <UIList
      header={<div>List Header</div>}
      footer={<div>List Footer</div>}
      bordered
      dataSource={data}
      renderItem={(item) => <Item>{item}</Item>}
    />
  ),
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
