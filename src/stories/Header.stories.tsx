import React from "react";

import { Meta, StoryObj } from "@storybook/react";

import { default as LagoonHeader } from "../components/Header";

const meta: Meta<typeof LagoonHeader> = {
  component: LagoonHeader,
  title: "Lagoon specific/Header",
};

type Story = StoryObj<typeof LagoonHeader>;

const fakeNavLinks = [
  {
    label: "Home",
    element: "Home",
  },
  {
    label: "Activity",
    element: "Activity",
  },
  {
    label: "Projects",
    element: "Projects",
  },
  {
    label: "Groups",
    element: "Groups",
  },
  {
    label: "Organizations",
    element: "Organizations",
  },
  {
    label: "Support",
    element: "Support",
  },
  {
    label: "My profile",
    element: "My profile",
  },
];
export const Default: Story = {
  args: {
    userInfo: {
      firstName: "Lagoon",
      lastName: "User",
      email: "testuser@amazee.io",
      organization: "amazee.io",
    },
    navLinks: fakeNavLinks,
  },
};

export const WithImage: Story = {
  args: {
    userInfo: {
      firstName: "Koala",
      lastName: "Bear",
      email: "testuser@amazee.io",
      organization: "amazee.io",
      image:
        "https://images.unsplash.com/photo-1579649554660-463ed1d72831?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a29hbGElMjBiZWFyfGVufDB8fDB8fHww",
    },
    navLinks: fakeNavLinks,
  },
};

export default meta;
