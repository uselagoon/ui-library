import { List, ListProps } from 'antd';
import React, { forwardRef, ForwardedRef, ReactNode, RefAttributes } from 'react';

const { Item: AntdListItem } = List;

export interface UIListProps<T> extends ListProps<T>, RefAttributes<HTMLElement> {
	children?: ReactNode;
}

interface UIListType extends React.ForwardRefExoticComponent<UIListProps<any> & React.RefAttributes<HTMLElement>> {
	Item: typeof AntdListItem;
}

const InternalList = <T,>({ className, children, style, ...props }: UIListProps<T>, ref: ForwardedRef<HTMLElement>) => {
	return (
		<List ref={ref} className={className} style={style} {...props}>
			{children}
		</List>
	);
};

const UIList = forwardRef<HTMLElement, UIListProps<any>>(InternalList) as UIListType;

UIList.displayName = 'List';

UIList.Item = AntdListItem;

export default UIList;
