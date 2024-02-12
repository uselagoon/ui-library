import React from "react";

import { Meta, StoryObj } from "@storybook/react";

import { default as Details } from "../components/Details";
import { DetailsType } from "../components/Details";
import { Badge } from "antd";
import CopyToClipboard from "../components/CopyToClipboard";

const meta: Meta<typeof Details> = {
  component: Details,
  title: "Components/Details",
};

type Story = StoryObj<typeof Details>;

const items: DetailsType["items"] = [
  {
    label: "Created",
    children: "22 Jul 2021, 12:52:10 (+09:30)",
  },
  {
    label: "Description",
    children: "Some details",
  },
];

const detailedItems: DetailsType["items"] = [
  {
    key: "1",
    label: "Product",
    children: "Cloud Database",
  },
  {
    key: "2",
    label: "Billing Mode",
    children: "Prepaid",
  },
  {
    key: "3",
    label: "Automatic Renewal",
    children: "YES",
  },
  {
    key: "4",
    label: "Order time",
    children: "2018-04-24 18:00:00",
  },
  {
    key: "5",
    label: "Usage Time",
    span: 2,
    children: "2019-04-24 18:00:00",
  },
  {
    key: "6",
    label: "Status",
    span: 3,
    children: <Badge status="processing" text="Running" />,
  },
  {
    key: "7",
    label: "Negotiated Amount",
    children: "$80.00",
  },
  {
    key: "8",
    label: "Discount",
    children: "$20.00",
  },
  {
    key: "9",
    label: "Official Receipts",
    children: "$60.00",
  },
  {
    key: "10",
    label: "Config Info",
    children: (
      <>
        Data disk type: MongoDB
        <br />
        Database version: 3.4
        <br />
        Package: dds.mongo.mid
        <br />
        Storage space: 10 GB
        <br />
        Replication factor: 3
        <br />
        Region: East China 1
        <br />
      </>
    ),
  },
  {
    key: "11",
    label: "Git Url",
    span: 1,
    children: (
      <CopyToClipboard
        type="hidden"
        text={"https://github.com/uselagoon/lagoon-ui"}
      />
    ),
  },
];

export const Default: Story = {
  render: () => <Details title="Details component" items={items} />,
};
export const DetailedBordered: Story = {
  render: () => (
    <Details title="Detailed component" bordered items={detailedItems} />
  ),
};
export const Bordered: Story = {
  render: () => <Details bordered title="Details component" items={items} />,
};

export const NoTitle: Story = {
  render: () => <Details bordered items={items} />,
};

export const VerticalLayout: Story = {
  render: () => <Details layout="vertical" bordered items={detailedItems} />,
};

export default meta;
