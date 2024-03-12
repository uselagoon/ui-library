import React, { FC } from "react";
import { Tabs, TabsProps } from "antd";
import styled, { css } from "styled-components";
import colors from "../../_util/colors";

type UITabsProps = {
  items: TabsProps["items"];
} & Omit<TabsProps, "items">;

const UITab: FC<UITabsProps> = (props) => {
  return <StyledTabs {...props} />;
};

const StyledTabs = styled(Tabs)`
  &.ant-tabs {
    background-color: transparent;
    .ant-tabs-tab {
      margin-left: 0;
    }
    div[role="tabpanel"] {
      padding-top: 1.5rem;
      padding-inline: 1rem;
      min-height: 100vmax;
    }
    div[role="tab"] {
      font-family: "Roboto", sans-serif;
      font-size: 1rem;
      line-height: 1.5rem;
    }
    div[role="tablist"] {
      margin-bottom: 0;
      &::before {
        display: none;
      }
      .ant-tabs-nav-list {
        display: flex;
        gap: 0.5rem;

        > div {
          min-width: 7.5rem;
          display: flex;
          justify-content: center;
        }
        .ant-tabs-ink-bar {
          background-color: ${colors.lagoonBlue};
        }
      }
    }

    & .ant-tabs-nav-wrap {
      border: none;
    }
    ${(props) =>
      props.theme.colorScheme === "dark" &&
      css`
        & .ant-tabs-nav-wrap {
          background-color: transparent;
        }
        & .ant-tabs-nav-list {
          background-color: transparent;
          > div {
            background-color: ${colors.darkGray};
          }
        }
        div[role="tabpanel"] {
          background-color: ${colors.darkGray};
          color: #fff;
        }
        div[role="tab"] {
          color: #fff;
        }
      `}
  }
`;

UITab.displayName = "Tabs";

export type { UITabsProps };
export default UITab;
