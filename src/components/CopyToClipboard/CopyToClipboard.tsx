import React, { useState } from "react";
import { CheckOutlined, CopyOutlined } from "@ant-design/icons";
import { FC } from "react";
import styled, { css } from "styled-components";
import colors from "../../_util/colors";
import { Tooltip } from "antd";

export interface ClipboardProps {
  text: string | number;
  type?: "visible" | "hidden";
  width?: number;
}
const CopyToClipboard: FC<ClipboardProps> = ({
  text,
  width,
  type = "visible",
}) => {
  const copyFn = () => navigator.clipboard.writeText(text as string);

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    copyFn();
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 3500);
  };

  const computedStyles = width ? { maxWidth: `${width}px` } : {};

  return (
    <StyledText style={{ ...computedStyles }}>
      <CopyableText className="copyable" maxWidth={width} type={type}>
        {text}
      </CopyableText>

      {!copied ? (
        <CopyOutlined onClick={handleCopy} className="copy-icon" />
      ) : (
        <Tooltip placement="right" title={"Copied!"}>
          <CheckOutlined className="check-icon" />
        </Tooltip>
      )}
    </StyledText>
  );
};

const CopyableText = styled.span<{
  type: ClipboardProps["type"];
  maxWidth?: number;
}>`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${(props) => props.theme.UI.texts.primary};
  max-width: ${(props) =>
    props.maxWidth ? `${props.maxWidth}px` : "18.75rem"};
  ${(props) =>
    props.type === "hidden" &&
    css`
      filter: blur(0.15rem);
      user-select: none;
      transition: all 0.3s ease;
      &:hover {
        filter: none;
        user-select: initial;
      }
    `};
`;

const StyledText = styled.div`
  font-size: "ArabicPro-Regular", sans-serif;
  font-size: 14px;
  line-height: 22px;
  min-width: max-content;
  display: flex;
  justify-content: space-between;
  align-content: baseline;
  gap: 1rem;

  span:not(.copyable) {
    color: ${(props) => props.theme.UI.texts.primary};
    display: flex;
    align-items: center;
  }
  .check-icon {
    font-size: 16px;
    position: relative;
    z-index: 1;
    transition: all 0.25s ease;
    color: ${colors.green} !important;
  }
  .copy-icon {
    font-size: 16px;
    position: relative;
    z-index: 1;
    transition: all 0.25s ease;

    &:hover {
      background-color: #a4a3a32c;
    }

    &:active {
      background-color: #1616162c;
    }
  }
`;

export default CopyToClipboard;
