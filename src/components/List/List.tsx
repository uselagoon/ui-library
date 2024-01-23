import { List, ListProps } from "antd";
import React, {
  forwardRef,
  ForwardedRef,
  ReactNode,
  RefAttributes,
} from "react";
import styled from "styled-components";

const { Item: AntdListItem } = List;

export interface UIListProps<T>
  extends ListProps<T>,
    RefAttributes<HTMLElement> {
  children?: ReactNode;
}

interface UIListType
  extends React.ForwardRefExoticComponent<
    UIListProps<any> & React.RefAttributes<HTMLElement>
  > {
  Item: typeof AntdListItem;
}

const InternalList = <T,>(
  { className, children, style, ...props }: UIListProps<T>,
  ref: ForwardedRef<HTMLElement>
) => {
  return (
    <StyledList ref={ref} className={className} style={style} {...props}>
      {children}
    </StyledList>
  );
};

const UIList = forwardRef<HTMLElement, UIListProps<any>>(
  InternalList
) as UIListType;

const StyledList = styled(List<any>)`
  &.ant-list {
    &.ant-list-split .ant-list-item {
      border-block-end: 1px solid
        ${(props) =>
          props.theme.colorScheme === "dark"
            ? props.theme.UI.texts.primary
            : "initial"};
    }
    &.ant-list-split .ant-list-header {
      border-block-end: 1px solid
        ${(props) =>
          props.theme.colorScheme === "dark"
            ? props.theme.UI.texts.primary
            : "initial"};
    }
    &.ant-list-split .ant-list-items > .ant-list-item:last-child {
      border-block-end: 1px solid
        ${(props) =>
          props.theme.colorScheme === "dark"
            ? props.theme.UI.texts.primary
            : "initial"};
    }

    border-radius: 0;
    .ant-list-header,
    .ant-list-footer {
      font-family: "Roboto", sans-serif;
      color: ${(props) => props.theme.UI.texts.primary};
    }
  }
`;

const StyledListItem = styled(AntdListItem)`
  &.ant-list-item {
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    line-height: 22px;
    color: ${(props) => props.theme.UI.texts.primary};
  }
`;

UIList.displayName = "UIList";

UIList.Item = StyledListItem;

export default UIList;
