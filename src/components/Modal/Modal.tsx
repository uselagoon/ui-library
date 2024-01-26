import React, { FC, ReactNode } from "react";

import { Modal, ModalProps } from "antd";
import styled from "styled-components";

type UIModalProps = { subTitle?: ReactNode } & Omit<
  ModalProps,
  "destroyonClose" | "modalRender"
>;

const UIModal: FC<UIModalProps> = ({ children, subTitle, title, ...props }) => {
  let modalTitle = title;

  if (subTitle) {
    modalTitle = (
      <>
        {title}
        {subTitle}
      </>
    );
  }
  return (
    <StyledModal
      title={modalTitle}
      destroyOnClose
      {...props}
      modalRender={(node: ReactNode) => {
        return <ModalChildren>{node}</ModalChildren>;
      }}
    >
      {children}
    </StyledModal>
  );
};

const StyledModal = styled(Modal)`
  min-width: 900px;
  @media (max-width: 1200px) {
    min-width: initial;
  }
`;

const ModalChildren = styled.section`
  .ant-modal-content {
    padding: 0;
    background-color: ${(props) => props.theme.UI.backgrounds.modal};

    .ant-modal-footer {
      padding: 20px 24px;
    }
    .ant-modal-header {
      padding: 20px 24px;
      background-color: inherit;

      .ant-modal-title {
        color: ${(props) => props.theme.UI.texts.primary};
      }
    }
    .ant-modal-body {
      border-top: 1px solid ${(props) => props.theme.UI.borders.box};
      border-bottom: 1px solid ${(props) => props.theme.UI.borders.box};
      padding: 20px 24px;
      color: ${(props) => props.theme.UI.texts.primary};
    }
    .ant-modal-close {
      width: 22px;
      height: 22px;
      font-size: 22px;
      transform: translate(1rem, -1rem);
      & span {
        width: 100%;
        height: 100%;
        display: inline-block;

        svg {
          color: ${(props) => props.theme.UI.texts.primary};
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;

export type { UIModalProps };
export default UIModal;
