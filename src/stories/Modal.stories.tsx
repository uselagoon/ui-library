import React, { useState } from "react";

import { Meta, StoryObj } from "@storybook/react";

import { default as UIModal } from "../components/Modal";
import UIButton from "../components/Button";

function AllNotificationsComponent() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <UIButton onClick={showModal}>Show Modal</UIButton>

      <UIModal
        title={<h2>Modal title</h2>}
        subTitle="subtitle"
        open={open}
        onCancel={handleCancel}
        onOk={handleCancel}
      >
        <div style={{ height: "300px" }}>Modal content</div>
      </UIModal>
    </>
  );
}

const meta: Meta<typeof UIModal> = {
  component: AllNotificationsComponent,
  title: "Components/UIModal",
};

type Story = StoryObj<typeof UIModal>;

export const Default: Story = {
  args: {},
};

export default meta;
