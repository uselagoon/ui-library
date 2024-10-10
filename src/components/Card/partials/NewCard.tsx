import React, { forwardRef, useState } from "react";
import { PinSection, StyledNewCard } from "../styles";
import UIModal from "../../Modal";
import UIHead3 from "../../Heading/H3";
import { PlusOutlined } from "@ant-design/icons";

export const NewCard = forwardRef<HTMLDivElement, {}>((_, ref) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // TODO: actual env creation calls
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
    <StyledNewCard ref={ref}>
      <PinSection onClick={() => setOpen(true)}>
        <PlusOutlined /> New environment
      </PinSection>

      <UIModal
        title={<UIHead3>Create an Environment</UIHead3>}
        subTitle="Actual env creation logic tbd."
        open={open}
        onCancel={handleCancel}
        onOk={handleOk}
        confirmLoading={loading}
      >
        <div
          style={{
            height: "300px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Project creation steps.
        </div>
      </UIModal>
    </StyledNewCard>
  );
});
