import { Descriptions } from "antd";
import type { DescriptionsProps } from "antd";
import React, { FC } from "react";
import styled, { css } from "styled-components";
import colors from "../../_util/colors";

export type UIDetailsType = DescriptionsProps;

const UIDetails: FC<DescriptionsProps> = (props) => {
  const { className, items, style, ...rest } = props;
  return <StyledDetails items={items} {...rest} />;
};
UIDetails.displayName = "UIDetails";

const StyledDetails = styled(Descriptions)`
  &.ant-descriptions {
    font-family: "ArabicPro-Regular", sans-serif;
    font-size: 14px;
    line-height: 22px;
    overflow: hidden;
    .ant-descriptions-row .ant-descriptions-item-label {
      text-transform: uppercase;
    }

    ${(props) =>
      props.theme.colorScheme === "dark" &&
      css`
        & .ant-descriptions-header > .ant-descriptions-title {
          color: #fff;
        }

        &:not(.ant-descriptions-bordered) .ant-descriptions-view {
          border-radius: 0;
          overflow: hidden;
          .ant-descriptions-row {
            .ant-descriptions-item-label {
              background-color: ${colors.lighterGray};
              color: #fff;
            }
            .ant-descriptions-item-content {
              color: ${colors.white};
              background-color: #75715e00;
            }
          }
        }
        &.ant-descriptions-bordered .ant-descriptions-view {
          border: 1px solid #fff;
          border-radius: 0;
          overflow: hidden;
          .ant-descriptions-row {
            .ant-descriptions-item-label {
              background-color: ${colors.lighterGray};
              color: #fff;
              text-transform: uppercase;
              border: 1px solid #fff;
            }
            .ant-descriptions-item-content {
              color: ${colors.white};
              background-color: #75715e00;
              &:not(:last-of-type) {
                border: 1px solid #fff;
              }
            }
          }
        }
        .ant-collapse-content-box {
          background-color: ${colors.gray};
        }
      `}
  }
`;
export default UIDetails;
